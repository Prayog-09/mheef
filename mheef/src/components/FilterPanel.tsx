import { AnimatePresence, motion } from 'framer-motion';
import { ChevronUp, SlidersHorizontal, X } from 'lucide-react';
import { useState } from 'react';
import { facilities } from '../data/facilities';
import { useGlobeStore } from '../store/useGlobeStore';
import type { FacilityStatus, PhysicsTopicId } from '../types/facility';
import { PHYSICS_TOPIC_LABELS } from '../types/facility';

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

export default function FilterPanel() {
  const activeFilters = useGlobeStore((s) => s.activeFilters);
  const toggleTopicFilter = useGlobeStore((s) => s.toggleTopicFilter);
  const toggleStatusFilter = useGlobeStore((s) => s.toggleStatusFilter);
  const clearFilters = useGlobeStore((s) => s.clearFilters);
  const [expanded, setExpanded] = useState(false);

  const totalActive = activeFilters.topics.length + activeFilters.statuses.length;

  return (
    // pointer-events-none on the wrapper so the globe canvas stays
    // interactive through the empty regions of this overlay column.
    <div className="pointer-events-none absolute bottom-8 left-6 z-10 flex flex-col items-start gap-2">
      {/* Panel body — flex-col puts it above the toggle button visually. */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            key="filter-body"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto w-64 rounded-xl border border-accent-400/15 bg-black/80 p-4 backdrop-blur-md"
          >
            {/* Header row */}
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                Filter by
              </span>
              {totalActive > 0 && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-[10px] text-accent-300/80 transition-colors hover:text-accent-300"
                >
                  <X className="h-3 w-3" />
                  Clear all
                </button>
              )}
            </div>

            {/* Physics Topic chips */}
            <div className="mb-4">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-white/35">
                Physics Topic
              </p>
              <div className="flex flex-wrap gap-1.5">
                {USED_TOPICS.map((topicId) => (
                  <button
                    key={topicId}
                    onClick={() => toggleTopicFilter(topicId)}
                    className={chipClass(activeFilters.topics.includes(topicId))}
                  >
                    {PHYSICS_TOPIC_LABELS[topicId]}
                  </button>
                ))}
              </div>
            </div>

            {/* Facility Status chips */}
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-white/35">
                Facility Status
              </p>
              <div className="flex flex-wrap gap-1.5">
                {STATUS_OPTIONS.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => toggleStatusFilter(id)}
                    className={chipClass(activeFilters.statuses.includes(id))}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button — always visible */}
      <button
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="pointer-events-auto flex items-center gap-2 rounded-full border border-accent-400/20 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-wide text-white/80 backdrop-blur-md transition-colors hover:border-accent-400/40 hover:text-white"
      >
        <SlidersHorizontal className="h-3.5 w-3.5 text-accent-300/70" />
        Filters
        {totalActive > 0 && (
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent-400 text-[10px] font-bold text-black">
            {totalActive}
          </span>
        )}
        <ChevronUp
          className={`h-3.5 w-3.5 text-white/50 transition-transform duration-200 ${
            expanded ? 'rotate-0' : 'rotate-180'
          }`}
        />
      </button>
    </div>
  );
}
