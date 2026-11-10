import type { Facility, PhysicsTopicId, FacilityStatus } from '../types/facility';

// Re-exported so Globe.tsx can import the type alongside the function
// without touching the store import.
export interface ActiveFilters {
  topics: PhysicsTopicId[];
  statuses: FacilityStatus[];
}

/**
 * Returns true if `facility` passes all currently active filters.
 *
 * Logic (per the Phase 4 brief):
 *   - Within each group, filters are OR-ed: a facility matches "Higgs OR
 *     Dark Matter" if any of its experiments is tagged with either topic.
 *   - Across groups, groups are AND-ed: a facility must match the topic
 *     group AND the status group to be shown as a "match" marker.
 *   - An empty group is treated as "no constraint" — it matches everything.
 */
export function facilityMatchesFilters(
  facility: Facility,
  filters: ActiveFilters
): boolean {
  const topicMatch =
    filters.topics.length === 0 ||
    facility.experiments.some((exp) =>
      exp.topics.some((t) => filters.topics.includes(t))
    );

  const statusMatch =
    filters.statuses.length === 0 || filters.statuses.includes(facility.status);

  return topicMatch && statusMatch;
}
