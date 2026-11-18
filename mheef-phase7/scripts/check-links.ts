// Checks that every link in the dataset still works (roadmap task 7A-1).
//
// Collects each URL from sources, key figures, photographs and further
// reading, requests it with a generic user agent, retries once, and sorts
// the results:
//   broken      the site answered that the page is gone (404, 410, other 4xx)
//               or the domain no longer exists
//   moved       the link now redirects to the site's home page, which
//               usually means the page was removed — check by hand
//   unreachable timeouts, server errors, TLS failures; often temporary
//   blocked     401/403/405/429: the site refuses automated requests, so the
//               link could not be checked (not evidence that it is broken)
// DOIs are checked against the DOI resolver's own register, not by
// visiting the publisher, which often blocks scripts.
//
// Usage: node scripts/check-links.ts [--report report.md] [--only <facility id>]
// Exit code: 1 if any link is broken or moved, else 0.
import { writeFileSync } from 'node:fs';
import { facilities } from '../src/data/facilities.ts';
import type { SourceRef } from '../src/types/facility.ts';

const USER_AGENT = 'facility-atlas-check/1.0 (link checker)';
const TIMEOUT_MS = 25_000;
const RETRY_DELAY_MS = 4_000;
const CONCURRENCY = 8;
/** Gap between two requests to the same host, to stay polite. */
const PER_HOST_GAP_MS = 1_000;

type Outcome = 'ok' | 'broken' | 'moved' | 'unreachable' | 'blocked';
interface Result {
  outcome: Outcome;
  detail: string;
}

const args = process.argv.slice(2);
const reportPath = args.includes('--report') ? args[args.indexOf('--report') + 1] : undefined;
const only = args.includes('--only') ? args[args.indexOf('--only') + 1] : undefined;

// ─── Collect every URL and where it is used ─────────────────────────────────

const usedAt = new Map<string, string[]>();
function add(url: string, where: string) {
  const list = usedAt.get(url) ?? [];
  list.push(where);
  usedAt.set(url, list);
}
function addSources(sources: SourceRef[] | undefined, where: string) {
  for (const source of sources ?? []) add(source.url, where);
}

for (const f of facilities) {
  if (only && f.id !== only) continue;
  f.specs?.forEach((s) => addSources(s.sources, `${f.id} › key figure “${s.label}”`));
  f.images?.forEach((img) => {
    add(img.sourceUrl, `${f.id} › photo ${img.file}`);
    if (img.licenseUrl) add(img.licenseUrl, `${f.id} › photo ${img.file} licence`);
  });
  f.history.forEach((h) => addSources(h.sources, `${f.id} › history ${h.year}`));
  f.experiments.forEach((e) => addSources(e.sources, `${f.id} › experiment ${e.name}`));
  f.keyResults.forEach((r) => addSources(r.sources, `${f.id} › result ${r.year} “${r.discovery}”`));
  f.importantPeople.forEach((p) => addSources(p.sources, `${f.id} › person ${p.name}`));
  f.readMore.forEach((r) => add(r.url, `${f.id} › further reading`));
}

// ─── Checking ────────────────────────────────────────────────────────────────

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function doiOf(url: URL): string | undefined {
  if (url.hostname !== 'doi.org' && url.hostname !== 'dx.doi.org') return undefined;
  return decodeURIComponent(url.pathname.slice(1));
}

async function request(url: string, method: 'HEAD' | 'GET'): Promise<Response> {
  const response = await fetch(url, {
    method,
    redirect: 'follow',
    signal: AbortSignal.timeout(TIMEOUT_MS),
    headers: {
      'User-Agent': USER_AGENT,
      Accept: 'text/html,application/xhtml+xml,application/pdf;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en',
    },
  });
  // Only the status and final address are needed; drop the body.
  await response.body?.cancel().catch(() => {});
  return response;
}

function describeError(error: unknown): { outcome: Outcome; detail: string } {
  const cause = (error as { cause?: { code?: string; message?: string } }).cause;
  const code = cause?.code ?? (error as Error).name;
  if (code === 'ENOTFOUND') return { outcome: 'broken', detail: 'domain not found' };
  if (code === 'TimeoutError' || code === 'UND_ERR_CONNECT_TIMEOUT') {
    return { outcome: 'unreachable', detail: 'timed out' };
  }
  return { outcome: 'unreachable', detail: code ?? cause?.message ?? String(error) };
}

function isHomePage(url: URL) {
  return url.pathname.replace(/\/(index\.\w+)?$/, '') === '' && url.search === '';
}

async function checkOnce(raw: string): Promise<Result> {
  const url = new URL(raw);
  const doi = doiOf(url);
  if (doi) {
    // The handle API says whether the DOI is registered: responseCode 1 = yes, 100 = no.
    const response = await fetch(`https://doi.org/api/handles/${encodeURIComponent(doi)}`, {
      headers: { 'User-Agent': USER_AGENT },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (response.status === 404) return { outcome: 'broken', detail: 'DOI is not registered' };
    if (!response.ok) return { outcome: 'unreachable', detail: `DOI register answered ${response.status}` };
    const body = (await response.json()) as { responseCode: number };
    return body.responseCode === 1
      ? { outcome: 'ok', detail: 'DOI registered' }
      : { outcome: 'broken', detail: `DOI register code ${body.responseCode}` };
  }

  let response = await request(raw, 'HEAD');
  // Many servers answer HEAD badly; ask again with GET before judging.
  if (response.status >= 400) response = await request(raw, 'GET');
  const status = response.status;
  const final = new URL(response.url || raw);

  // 405 to a GET is how some bot walls answer (NASA ADS shows a human check).
  if (status === 401 || status === 403 || status === 405 || status === 429) {
    return { outcome: 'blocked', detail: `${status} from ${final.hostname}` };
  }
  if (status >= 500) return { outcome: 'unreachable', detail: `server error ${status}` };
  if (status >= 400) return { outcome: 'broken', detail: `${status}${final.href !== raw ? ` at ${final.href}` : ''}` };
  if (!isHomePage(url) && isHomePage(final)) {
    return { outcome: 'moved', detail: `redirects to the home page ${final.href}` };
  }
  return { outcome: 'ok', detail: String(status) };
}

async function check(raw: string): Promise<Result> {
  let result: Result;
  try {
    result = await checkOnce(raw);
  } catch (error) {
    result = describeError(error);
  }
  if (result.outcome === 'ok' || result.outcome === 'blocked') return result;
  await sleep(RETRY_DELAY_MS);
  try {
    return await checkOnce(raw);
  } catch (error) {
    return describeError(error);
  }
}

// One queue per host, so a single site is never asked many times at once.
const byHost = new Map<string, string[]>();
for (const url of usedAt.keys()) {
  let host: string;
  try {
    host = new URL(url).hostname;
  } catch {
    host = 'invalid';
  }
  const queue = byHost.get(host) ?? [];
  queue.push(url);
  byHost.set(host, queue);
}

const results = new Map<string, Result>();
const hostQueues = [...byHost.values()].sort((a, b) => b.length - a.length);
let done = 0;
async function worker() {
  for (let queue = hostQueues.shift(); queue; queue = hostQueues.shift()) {
    for (const url of queue) {
      results.set(url, await check(url));
      done += 1;
      if (done % 50 === 0) console.error(`  checked ${done} of ${usedAt.size}`);
      await sleep(PER_HOST_GAP_MS);
    }
  }
}

console.error(`Checking ${usedAt.size} links across ${byHost.size} sites…`);
await Promise.all(Array.from({ length: CONCURRENCY }, worker));

// ─── Report ──────────────────────────────────────────────────────────────────

const SECTIONS: { outcome: Outcome; title: string; note: string }[] = [
  { outcome: 'broken', title: 'Broken', note: 'The site says the page is gone, or the domain no longer exists. Find a replacement source.' },
  { outcome: 'moved', title: 'Moved', note: 'The link now lands on the site’s home page, so the page was probably removed. Check by hand.' },
  { outcome: 'unreachable', title: 'Unreachable', note: 'Timed out or server error, twice. Often temporary; act if it appears two weeks running.' },
  { outcome: 'blocked', title: 'Could not check', note: 'The site refuses automated requests. Not evidence of a broken link; open one by hand now and then.' },
];

const count = (outcome: Outcome) => [...results.values()].filter((r) => r.outcome === outcome).length;
const lines: string[] = [];
const date = new Date().toISOString().slice(0, 10);
lines.push(`Link check of ${date}: ${usedAt.size} links on ${byHost.size} sites.`);
lines.push('');
lines.push(SECTIONS.map((s) => `${s.title}: ${count(s.outcome)}`).concat(`Working: ${count('ok')}`).join(' · '));

for (const section of SECTIONS) {
  const failing = [...results].filter(([, r]) => r.outcome === section.outcome);
  if (failing.length === 0) continue;
  lines.push('', `## ${section.title} (${failing.length})`, '', section.note, '');
  failing.sort(([a], [b]) => a.localeCompare(b));
  for (const [url, result] of failing) {
    const places = usedAt.get(url)!;
    const shown = places.slice(0, 3).join('; ') + (places.length > 3 ? `; and ${places.length - 3} more` : '');
    lines.push(`- ${url} — ${result.detail}  \n  Used in: ${shown}`);
  }
}

const report = lines.join('\n') + '\n';
if (reportPath) writeFileSync(reportPath, report);
console.log(report);

const failed = count('broken') + count('moved');
process.exitCode = failed > 0 ? 1 : 0;
