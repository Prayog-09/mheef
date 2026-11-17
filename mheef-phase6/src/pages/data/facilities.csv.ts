import type { APIRoute } from 'astro';
import { facilities } from '../../data/facilities';
import { FACILITY_TYPE_LABELS, PHYSICS_TOPIC_LABELS } from '../../types/facility';
import { STATUS_LABELS, facilityTopics } from '../../utils/facility';
import { facilityPagePath } from '../../utils/paths';

// One row per facility, for spreadsheets. The full record (history,
// experiments, sources) is in facilities.json.
function cell(value: string | number | undefined): string {
  const text = value === undefined ? '' : String(value);
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

export const GET: APIRoute = ({ site }) => {
  const header = [
    'id',
    'name',
    'full_name',
    'type',
    'status',
    'country',
    'latitude',
    'longitude',
    'founded',
    'topics',
    'experiments',
    'key_results',
    'reviewed',
    'page_url',
  ];
  const rows = facilities.map((f) => [
    f.id,
    f.name,
    f.fullName,
    FACILITY_TYPE_LABELS[f.type],
    STATUS_LABELS[f.status],
    f.country,
    f.lat,
    f.lng,
    f.founded,
    facilityTopics(f).map((topic) => PHYSICS_TOPIC_LABELS[topic]).join('; '),
    f.experiments.map((experiment) => experiment.name).join('; '),
    f.keyResults.length,
    f.reviewed,
    new URL(facilityPagePath(f.id), site).href,
  ]);
  const csv = [header, ...rows].map((row) => row.map(cell).join(',')).join('\r\n');
  return new Response(`${csv}\r\n`, { headers: { 'Content-Type': 'text/csv; charset=utf-8' } });
};
