// Checks the facility dataset before every build. Structural mistakes (a
// duplicate id, a coordinate off the globe, a malformed link) fail the
// build; missing sources and reviews are reported as coverage figures so
// progress toward "every fact sourced" is visible. Run with `npm run validate`.
import { facilities } from '../src/data/facilities.ts';
import { FACILITY_TYPE_LABELS, PHYSICS_TOPIC_LABELS } from '../src/types/facility.ts';
import type { SourceRef } from '../src/types/facility.ts';

const errors: string[] = [];
const THIS_YEAR = new Date().getFullYear();
const STATUSES = new Set(['active', 'historic', 'planned']);
const ID_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function isWebUrl(value: string): boolean {
  try {
    return ['http:', 'https:'].includes(new URL(value).protocol);
  } catch {
    return false;
  }
}

function checkYear(where: string, year: number | undefined, { allowFuture = false } = {}) {
  if (year === undefined) return;
  const latest = allowFuture ? THIS_YEAR + 30 : THIS_YEAR;
  if (!Number.isInteger(year) || year < 1850 || year > latest) {
    errors.push(`${where}: year ${year} is outside 1850–${latest}`);
  }
}

let facts = 0;
let sourcedFacts = 0;
function countFact(where: string, sources: SourceRef[] | undefined) {
  facts += 1;
  if (!sources) return;
  if (sources.length === 0) errors.push(`${where}: sources is empty — remove it or add one`);
  else sourcedFacts += 1;
  for (const source of sources) {
    if (!source.label.trim()) errors.push(`${where}: a source has no label`);
    if (!isWebUrl(source.url)) errors.push(`${where}: source link "${source.url}" is not a web address`);
  }
}

const facilityIds = new Set<string>();
const experimentIds = new Set<string>();
let reviewed = 0;

for (const facility of facilities) {
  const at = `facility "${facility.id}"`;

  if (!ID_PATTERN.test(facility.id)) errors.push(`${at}: id must be lower-case words joined by hyphens`);
  if (facilityIds.has(facility.id)) errors.push(`${at}: duplicate facility id`);
  facilityIds.add(facility.id);

  if (!facility.name.trim()) errors.push(`${at}: name is empty`);
  if (!facility.country.trim()) errors.push(`${at}: country is empty`);
  if (!facility.overview.trim()) errors.push(`${at}: overview is empty`);
  if (!(facility.type in FACILITY_TYPE_LABELS)) errors.push(`${at}: unknown type "${facility.type}"`);
  if (!STATUSES.has(facility.status)) errors.push(`${at}: unknown status "${facility.status}"`);
  if (!(facility.lat >= -90 && facility.lat <= 90)) errors.push(`${at}: latitude ${facility.lat} is out of range`);
  if (!(facility.lng >= -180 && facility.lng <= 180)) errors.push(`${at}: longitude ${facility.lng} is out of range`);
  checkYear(`${at} founded`, facility.founded, { allowFuture: facility.status === 'planned' });

  if (facility.reviewed !== undefined) {
    const valid = ISO_DATE.test(facility.reviewed) && !Number.isNaN(Date.parse(facility.reviewed));
    if (!valid) errors.push(`${at}: reviewed must be a date written YYYY-MM-DD`);
    else if (Date.parse(facility.reviewed) > Date.now()) errors.push(`${at}: reviewed date is in the future`);
    else reviewed += 1;
  }

  for (const entry of facility.history) {
    checkYear(`${at} history`, entry.year, { allowFuture: facility.status === 'planned' });
    if (!entry.event.trim()) errors.push(`${at}: a history entry has no text`);
    countFact(`${at} history ${entry.year}`, entry.sources);
  }

  for (const experiment of facility.experiments) {
    const where = `${at} experiment "${experiment.id}"`;
    if (experimentIds.has(experiment.id)) errors.push(`${where}: duplicate experiment id`);
    experimentIds.add(experiment.id);
    if (experiment.topics.length === 0) errors.push(`${where}: has no physics topics`);
    for (const topic of experiment.topics) {
      if (!(topic in PHYSICS_TOPIC_LABELS)) errors.push(`${where}: unknown topic "${topic}"`);
    }
    checkYear(`${where} start`, experiment.startYear, { allowFuture: true });
    checkYear(`${where} end`, experiment.endYear, { allowFuture: true });
    if (experiment.startYear && experiment.endYear && experiment.endYear < experiment.startYear) {
      errors.push(`${where}: ends (${experiment.endYear}) before it starts (${experiment.startYear})`);
    }
    countFact(where, experiment.sources);
  }

  for (const result of facility.keyResults) {
    checkYear(`${at} key result "${result.discovery}"`, result.year);
    countFact(`${at} key result "${result.discovery}"`, result.sources);
  }

  for (const person of facility.importantPeople) {
    if (!person.name.trim()) errors.push(`${at}: a person has no name`);
    countFact(`${at} person "${person.name}"`, person.sources);
  }

  for (const link of facility.readMore) {
    if (!isWebUrl(link.url)) errors.push(`${at}: further-reading link "${link.url}" is not a web address`);
  }
}

const percent = facts === 0 ? 0 : Math.round((sourcedFacts / facts) * 100);
console.log(`Facility data: ${facilities.length} facilities, ${experimentIds.size} experiments.`);
console.log(`  Facts with a source: ${sourcedFacts} of ${facts} (${percent}%).`);
console.log(`  Facilities reviewed: ${reviewed} of ${facilities.length}.`);

if (errors.length > 0) {
  console.error(`\n${errors.length} problem(s) in src/data/facilities.ts:`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}
