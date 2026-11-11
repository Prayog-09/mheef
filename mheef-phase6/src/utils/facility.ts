import type { Facility, FacilityStatus, PhysicsTopicId } from '../types/facility';

export const STATUS_LABELS: Record<FacilityStatus, string> = {
  active: 'Active',
  historic: 'Historic',
  planned: 'Planned',
};

/** Tailwind classes for a status pill — shared by the panel badge and the static pages. */
export const STATUS_STYLES: Record<FacilityStatus, string> = {
  active: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  historic: 'border-white/20 bg-white/10 text-white/60',
  planned: 'border-violet-400/30 bg-violet-400/10 text-violet-300',
};

/** Every physics topic studied at a facility, in first-seen order, without repeats. */
export function facilityTopics(facility: Facility): PhysicsTopicId[] {
  return [...new Set(facility.experiments.flatMap((experiment) => experiment.topics))];
}

/** "2008–2011", "2014–present", or "" when no start year is recorded. */
export function formatYears(startYear?: number, endYear?: number): string {
  if (!startYear) return '';
  return `${startYear}–${endYear ?? 'present'}`;
}

/** 46.2331, 6.0558 → "46.23° N, 6.06° E" */
export function formatCoordinates(lat: number, lng: number): string {
  const latitude = `${Math.abs(lat).toFixed(2)}° ${lat >= 0 ? 'N' : 'S'}`;
  const longitude = `${Math.abs(lng).toFixed(2)}° ${lng >= 0 ? 'E' : 'W'}`;
  return `${latitude}, ${longitude}`;
}
