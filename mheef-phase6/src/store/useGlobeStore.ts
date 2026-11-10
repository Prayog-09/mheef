import { create } from 'zustand';
import type { PhysicsTopicId, FacilityStatus } from '../types/facility';

// Phase 4: ActiveFilters is the canonical shape for both the store and the
// filter-matching utility in /src/utils/filters.ts. Topics within a group
// are OR-ed; topic group AND status group together are AND-ed.
export interface ActiveFilters {
  topics: PhysicsTopicId[];
  statuses: FacilityStatus[];
}

const EMPTY_FILTERS: ActiveFilters = { topics: [], statuses: [] };

interface GlobeState {
  /** Facility currently focused by camera fly-to and side panel. */
  selectedFacilityId: string | null;
  setSelectedFacilityId: (id: string | null) => void;

  /** Drives the TopBar search input and Fuse.js dropdown (Phase 4). */
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // Phase 4 — filter state consumed by Globe (marker dim/highlight) and
  // FilterPanel (chip active states + clear-all badge).
  activeFilters: ActiveFilters;
  toggleTopicFilter: (topic: PhysicsTopicId) => void;
  toggleStatusFilter: (status: FacilityStatus) => void;
  clearFilters: () => void;
}

export const useGlobeStore = create<GlobeState>((set) => ({
  selectedFacilityId: null,
  setSelectedFacilityId: (id) => set({ selectedFacilityId: id }),

  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),

  activeFilters: EMPTY_FILTERS,

  toggleTopicFilter: (topic) =>
    set((state) => {
      const topics = state.activeFilters.topics.includes(topic)
        ? state.activeFilters.topics.filter((t) => t !== topic)
        : [...state.activeFilters.topics, topic];
      return { activeFilters: { ...state.activeFilters, topics } };
    }),

  toggleStatusFilter: (status) =>
    set((state) => {
      const statuses = state.activeFilters.statuses.includes(status)
        ? state.activeFilters.statuses.filter((s) => s !== status)
        : [...state.activeFilters.statuses, status];
      return { activeFilters: { ...state.activeFilters, statuses } };
    }),

  clearFilters: () => set({ activeFilters: EMPTY_FILTERS }),
}));
