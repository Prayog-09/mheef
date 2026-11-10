/**
 * Core types for Project MHEEF — Phase 2.
 *
 * FacilityStub is kept narrow so Globe and Marker never need changes when
 * Facility gains fields. Facility extends FacilityStub, so any Facility[]
 * can be passed where FacilityStub[] is expected without touching those
 * components.
 *
 * Extension points:
 *   Phase 4 — PHYSICS_TOPIC_LABELS drives the filter-panel chip list.
 *   Phase 3+ — DetectorTechnology can be linked onto Experiment once the
 *               side panel renders that level of detail.
 */

// ─── Physics Topics ─────────────────────────────────────────────────────────

/**
 * Authoritative union of topic IDs. Add here first, then add a label in
 * PHYSICS_TOPIC_LABELS below. Values are used as Experiment tags and as
 * filter keys in Phase 4.
 */
export type PhysicsTopicId =
  | 'higgs'
  | 'dark-matter'
  | 'neutrinos'
  | 'heavy-ions'
  | 'gravitational-waves'
  | 'cosmic-rays'
  | 'b-physics'
  | 'cp-violation'
  | 'rare-isotopes'
  | 'qcd'
  | 'nuclear-structure'
  | 'electroweak'
  | 'synchrotron-light';

/** Human-readable labels — consumed by Phase 4's filter panel. */
export const PHYSICS_TOPIC_LABELS: Record<PhysicsTopicId, string> = {
  higgs: 'Higgs Physics',
  'dark-matter': 'Dark Matter',
  neutrinos: 'Neutrinos',
  'heavy-ions': 'Heavy Ions',
  'gravitational-waves': 'Gravitational Waves',
  'cosmic-rays': 'Cosmic Rays',
  'b-physics': 'B Physics',
  'cp-violation': 'CP Violation',
  'rare-isotopes': 'Rare Isotopes',
  qcd: 'QCD',
  'nuclear-structure': 'Nuclear Structure',
  electroweak: 'Electroweak Physics',
  'synchrotron-light': 'Synchrotron Light',
};

// ─── Status ──────────────────────────────────────────────────────────────────

export type FacilityStatus = 'active' | 'historic' | 'planned';

// ─── Stub (used by Globe + Marker — do not widen) ────────────────────────────

/** Minimal shape used by Globe and Marker. Stable across all phases. */
export interface FacilityStub {
  id: string;
  name: string;
  country: string;
  lat: number;
  lng: number;
}

// ─── Sub-record types ─────────────────────────────────────────────────────────

/**
 * Defined for future use. Link to Experiment once Phase 3+ renders
 * detector-technology detail in the side panel.
 */
export interface DetectorTechnology {
  name: string;
  description: string;
}

export interface Experiment {
  id: string;
  name: string;
  description: string;
  topics: PhysicsTopicId[];
  startYear?: number;
  endYear?: number;
}

export interface KeyResult {
  year: number;
  discovery: string;
  description: string;
}

export interface Scientist {
  name: string;
  contribution: string;
}

export interface TimelineEntry {
  year: number;
  event: string;
}

export interface ReadMoreLink {
  label: string;
  url: string;
}

// ─── Full Facility record ─────────────────────────────────────────────────────

/**
 * Full facility record. Extends FacilityStub so Globe.tsx and Marker.tsx
 * accept Facility objects without any type changes. Phase 3 reads the
 * richer fields by looking up selectedFacilityId in this dataset — no
 * changes needed to the globe layer.
 */
export interface Facility extends FacilityStub {
  founded: number;
  status: FacilityStatus;
  overview: string;
  history: TimelineEntry[];
  experiments: Experiment[];
  keyResults: KeyResult[];
  importantPeople: Scientist[];
  readMore: ReadMoreLink[];
}
