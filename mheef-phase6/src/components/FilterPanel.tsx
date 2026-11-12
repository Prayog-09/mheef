import { AnimatePresence, motion } from 'framer-motion';
import { ChevronUp, SlidersHorizontal, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { facilities } from '../data/facilities';
import { useGlobeStore } from '../store/useGlobeStore';
import { useMediaQuery, MOBILE_QUERY } from '../hooks/useMediaQuery';
import type { FacilityStatus, FacilityType, PhysicsTopicId } from '../types/facility';
import {
  FACILITY_TYPE_COLORS,
  FACILITY_TYPE_LABELS,
  PHYSICS_TOPIC_LABELS,
} from '../types/facility';

// ---------------------------------------------------------------------------
// Derive the topic list from the actual dataset so we never show a chip that
// matches zero facilities (per the Phase 4 brief). Runs once at module load.
// ---------------------------------------------------------------------------
const USED_TOPICS: PhysicsTopicId[] = (() => {
  const seen = new Set<PhysicsTopicId>();
  for (const facility of facilities) {
    for (const exp of facility.experiments) {
      for (const topic of exp.topics) {
        seen.add(topic);
      }
    }
  }
  // Sort alphabetically by human-readable label for a tidy chip list.
  return [...seen].sort((a, b) =>
    PHYSICS_TOPIC_LABELS[a].localeCompare(PHYSICS_TOPIC_LABELS[b])
  );
})();

// Only types that at least one facility has, in the order the labels are declared.
const USED_TYPES = (Object.keys(FACILITY_TYPE_LABELS) as FacilityType[]).filter((type) =>
  facilities.some((facility) => facility.type === type)
);

const STATUS_OPTIONS: Array<{ id: FacilityStatus; label: string }> = [
  { id: 'active', label: 'Active' },
  { id: 'historic', label: 'Historic' },
  { id: 'planned', label: 'Planned' },
];

// Shared chip class builders — keeps the two filter sections visually
// identical and easier to audit.
function chipClass(isActive: boolean): string {
  return [
    'rounded-full border px-2.5 py-1 text-[10px] font-medium transition-colors',
    isActive
      ? 'border-accent-400/50 bg-accent-400/20 text-accent-300'
      : 'border-white/15 bg-white/5 text-white/55 hover:border-white/25 hover:text-white/80',
  ].join(' ');
}

interface FilterGroupsProps {
  activeFilters: { topics: PhysicsTopicId[]; statuses: FacilityStatus[]; types: FacilityType[] };
  onToggleTopic: (topic: PhysicsTopicId) => void;
  onToggleStatus: (status: FacilityStatus) => void;
  onToggleType: (type: FacilityType) => void;
}

// Phase 5: the chip markup is now shared between the desktop inline panel
// and the new mobile modal, so the two layouts can't silently drift apart.
function FilterGroups({
  activeFilters,
  onToggleTopic,
  onToggleStatus,
  onToggleType,
}: FilterGroupsProps) {
  return (
    <>
      {/* Facility Type chips — the coloured dot matches the marker colour
          on the globe, so this group doubles as the map legend. */}
      <div className="mb-4">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-white/45">
          Facility Type
        </p>
        <div className="flex flex-wrap gap-1.5">
          {USED_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => onToggleType(type)}
              aria-pressed={activeFilters.types.includes(type)}
              className={`${chipClass(activeFilters.types.includes(type))} flex items-center gap-1.5`}
            >
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: FACILITY_TYPE_COLORS[type] }}
              />
              {FACILITY_TYPE_LABELS[type]}
            </button>
          ))}
        </div>
      </div>

      {/* Physics Topic chips */}
      <div className="mb-4">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-white/45">
          Physics Topic
        </p>
        <div className="flex flex-wrap gap-1.5">
          {USED_TOPICS.map((topicId) => (
            <button
              key={topicId}
              onClick={() => onToggleTopic(topicId)}
              aria-pressed={activeFilters.topics.includes(topicId)}
              className={chipClass(activeFilters.topics.includes(topicId))}
            >
              {PHYSICS_TOPIC_LABELS[topicId]}
            </button>
          ))}
        </div>
      </div>

      {/* Facility Status chips */}
      <div>
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-white/45">
          Facility Status
        </p>
        <div className="flex flex-wrap gap-1.5">
          {STATUS_OPTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => onToggleStatus(id)}
              aria-pressed={activeFilters.statuses.includes(id)}
              className={chipClass(activeFilters.statuses.includes(id))}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default function FilterPanel() {
  const activeFilters = useGlobeStore((s) => s.activeFilters);
  const toggleTopicFilter = useGlobeStore((s) => s.toggleTopicFilter);
  const toggleStatusFilter = useGlobeStore((s) => s.toggleStatusFilter);
  const toggleTypeFilter = useGlobeStore((s) => s.toggleTypeFilter);
  const clearFilters = useGlobeStore((s) => s.clearFilters);
  const [expanded, setExpanded] = useState(false);
  const isMobile = useMediaQuery(MOBILE_QUERY);

  const totalActive =
    activeFilters.topics.length + activeFilters.statuses.length + activeFilters.types.length;

  // Phase 5: Escape closes the mobile modal too. The desktop inline panel
  // has no backdrop to dismiss it with, so it relies solely on the toggle
  // button, same as Phase 4.
  useEffect(() => {
    if (!isMobile || !expanded) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setExpanded(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobile, expanded]);

  const toggleButton = (
    <button
      onClick={() => setExpanded((v) => !v)}
      aria-expanded={expanded}
      className="pointer-events-auto flex items-center gap-2 rounded-full border border-accent-400/20 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-wide text-white/80 backdrop-blur-md transition-colors hover:border-accent-400/40 hover:text-white"
    >
      <SlidersHorizontal className="h-3.5 w-3.5 text-accent-300/70" aria-hidden="true" />
      Filters
      {totalActive > 0 && (
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent-400 text-[10px] font-bold text-black">
          {totalActive}
        </span>
      )}
      {!isMobile && (
        <ChevronUp
          aria-hidden="true"
          className={`h-3.5 w-3.5 text-white/50 transition-transform duration-200 ${
            expanded ? 'rotate-0' : 'rotate-180'
          }`}
        />
      )}
    </button>
  );

  // ── Mobile: a single floating button that opens a centered modal ─────
  // (per the Phase 5 brief: "collapse into a single button that opens a
  // modal on small screens"), instead of the desktop's inline panel.
  if (isMobile) {
    return (
      <>
        <div className="pointer-events-none fixed bottom-6 left-6 z-10">
          <div className="pointer-events-auto">{toggleButton}</div>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              key="filter-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setExpanded(false)}
              className="fixed inset-0 z-30 flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center"
            >
              <motion.div
                key="filter-modal"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label="Filter facilities"
                className="max-h-[85vh] w-full max-w-sm overflow-y-auto rounded-t-2xl border border-accent-400/15 bg-space-950/95 p-5 backdrop-blur-md sm:rounded-2xl"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
                    Filter by
                  </span>
                  <button
                    onClick={() => setExpanded(false)}
                    aria-label="Close filters"
                    className="rounded-full border border-white/10 bg-black/40 p-1.5 text-white/60 transition-colors hover:border-accent-400/40 hover:text-white"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>

                <FilterGroups
                  activeFilters={activeFilters}
                  onToggleTopic={toggleTopicFilter}
                  onToggleStatus={toggleStatusFilter}
                  onToggleType={toggleTypeFilter}
                />

                {totalActive > 0 && (
                  <button
                    onClick={clearFilters}
                    className="mt-4 flex items-center gap-1 text-xs text-accent-300/80 transition-colors hover:text-accent-300"
                  >
                    <X className="h-3 w-3" aria-hidden="true" />
                    Clear all
                  </button>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // ── Desktop: inline floating panel above the toggle button (Phase 4) ──
  return (
    // pointer-events-none on the wrapper so the globe canvas stays
    // interactive through the empty regions of this overlay column.
    <div className="pointer-events-none absolute bottom-8 left-6 z-10 flex flex-col items-start gap-2">
      <AnimatePresence>
        {expanded && (
          <motion.div
            key="filter-body"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto max-h-[70vh] w-72 overflow-y-auto rounded-xl border border-accent-400/15 bg-black/80 p-4 backdrop-blur-md"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
                Filter by
              </span>
              {totalActive > 0 && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-[10px] text-accent-300/80 transition-colors hover:text-accent-300"
                >
                  <X className="h-3 w-3" aria-hidden="true" />
                  Clear all
                </button>
              )}
            </div>

            <FilterGroups
              activeFilters={activeFilters}
              onToggleTopic={toggleTopicFilter}
              onToggleStatus={toggleStatusFilter}
              onToggleType={toggleTypeFilter}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pointer-events-auto">{toggleButton}</div>
    </div>
  );
}
