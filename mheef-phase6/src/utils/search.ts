import Fuse from 'fuse.js';
import { facilities } from '../data/facilities';
import type { Facility } from '../types/facility';
import { PHYSICS_TOPIC_LABELS } from '../types/facility';

// ---------------------------------------------------------------------------
// Search record shape — wraps a full Facility with pre-flattened strings so
// Fuse.js can score across nested fields without its own nested-key traversal
// (which works but gives less predictable weights on arrays).
// ---------------------------------------------------------------------------
interface SearchRecord {
  facility: Facility;
  /** Space-joined experiment names for the `weight: 0.2` key. */
  searchableExperiments: string;
  /** Space-joined human-readable topic labels for the `weight: 0.1` key. */
  searchableTopics: string;
}

const records: SearchRecord[] = facilities.map((facility) => ({
  facility,
  searchableExperiments: facility.experiments.map((e) => e.name).join(' '),
  searchableTopics: facility.experiments
    .flatMap((e) => e.topics.map((t) => PHYSICS_TOPIC_LABELS[t]))
    .join(' '),
}));

// Built once at module load — static dataset means no re-indexing needed.
const fuse = new Fuse(records, {
  keys: [
    { name: 'facility.name', weight: 0.5 },
    { name: 'facility.country', weight: 0.2 },
    { name: 'searchableExperiments', weight: 0.2 },
    { name: 'searchableTopics', weight: 0.1 },
  ],
  threshold: 0.4,      // 0 = exact, 1 = match anything; 0.4 allows typos
  includeScore: true,
  minMatchCharLength: 2, // avoid single-keystroke noise
});

/** Returns up to 10 facilities matching `query`, best match first. */
export function searchFacilities(query: string): Facility[] {
  if (!query.trim()) return [];
  return fuse.search(query, { limit: 10 }).map((r) => r.item.facility);
}
