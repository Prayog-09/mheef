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

// ─── Facility type ───────────────────────────────────────────────────────────

/**
 * What kind of installation a facility is. Drives marker colour and the type
 * filter. Guide to the two that are easy to confuse:
 *  - accelerator-laboratory: built around accelerators for particle physics
 *    (CERN, SLAC, KEK), including ones never completed (SSC).
 *  - nuclear-physics-facility: accelerators whose main programme is nuclei —
 *    structure, reactions, rare isotopes, heavy elements (GSI, FRIB, Jefferson
 *    Lab, VECC, IUAC).
 * university-laboratory is for departments listed for discoveries made there
 * rather than for a large machine (the Cavendish).
 */
export type FacilityType =
  | 'accelerator-laboratory'
  | 'underground-laboratory'
  | 'neutrino-observatory'
  | 'cosmic-ray-observatory'
  | 'gamma-ray-observatory'
  | 'gravitational-wave-observatory'
  | 'nuclear-physics-facility'
  | 'university-laboratory';

export const FACILITY_TYPE_LABELS: Record<FacilityType, string> = {
  'accelerator-laboratory': 'Accelerator laboratory',
  'underground-laboratory': 'Underground laboratory',
  'neutrino-observatory': 'Neutrino observatory',
  'cosmic-ray-observatory': 'Cosmic-ray observatory',
  'gamma-ray-observatory': 'Gamma-ray observatory',
  'gravitational-wave-observatory': 'Gravitational-wave observatory',
  'nuclear-physics-facility': 'Nuclear physics facility',
  'university-laboratory': 'University laboratory',
};

/** Marker colour per type — chosen to stay distinct over both ocean and land imagery. */
export const FACILITY_TYPE_COLORS: Record<FacilityType, string> = {
  'accelerator-laboratory': '#22d3ee',
  'underground-laboratory': '#facc15',
  'neutrino-observatory': '#a78bfa',
  'cosmic-ray-observatory': '#fb923c',
  'gamma-ray-observatory': '#a3e635',
  'gravitational-wave-observatory': '#f472b6',
  'nuclear-physics-facility': '#f1f5f9',
  'university-laboratory': '#f87171',
};

// ─── Sources ─────────────────────────────────────────────────────────────────

/**
 * A reference backing a single fact (a timeline entry, result, experiment
 * or person). Prefer a DOI or the institution's own page.
 */
export interface SourceRef {
  label: string;
  url: string;
}

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
  sources?: SourceRef[];
}

export interface KeyResult {
  year: number;
  discovery: string;
  description: string;
  sources?: SourceRef[];
}

export interface Scientist {
  name: string;
  contribution: string;
  sources?: SourceRef[];
}

export interface TimelineEntry {
  year: number;
  event: string;
  sources?: SourceRef[];
}

/**
 * One headline figure about a facility or its main machine — a size, an
 * energy, a depth. Unlike other facts, a specification must cite a source.
 */
export interface FacilitySpec {
  label: string;
  value: string;
  sources: SourceRef[];
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
  /** Official long-form name, where it differs from the display name. */
  fullName?: string;
  type: FacilityType;
  founded: number;
  /**
   * ISO date (YYYY-MM-DD) of the last check of this whole record by someone
   * working in the field. Absent means not yet reviewed.
   */
  reviewed?: string;
  status: FacilityStatus;
  overview: string;
  /** Sourced key figures, shown as a table. */
  specs?: FacilitySpec[];
  history: TimelineEntry[];
  experiments: Experiment[];
  keyResults: KeyResult[];
  importantPeople: Scientist[];
  readMore: ReadMoreLink[];
}
