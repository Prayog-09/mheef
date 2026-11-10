import { AnimatePresence, motion } from 'framer-motion';
import type { Facility } from '../types/facility';

interface SearchDropdownProps {
  results: Facility[];
  onSelect: (facility: Facility) => void;
  isVisible: boolean;
}

// Capped at 6 results — enough to be useful, short enough to avoid the
// dropdown covering the globe. Phase 5 can add keyboard arrow-key nav.
export default function SearchDropdown({ results, onSelect, isVisible }: SearchDropdownProps) {
  return (
    <AnimatePresence>
      {isVisible && results.length > 0 && (
        <motion.ul
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-accent-400/20 bg-black/85 backdrop-blur-md"
          role="listbox"
          aria-label="Facility search results"
        >
          {results.slice(0, 6).map((facility) => (
            <li key={facility.id} role="option" aria-selected={false}>
              <button
                onClick={() => onSelect(facility)}
                className="flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-accent-400/10 focus:bg-accent-400/10 focus:outline-none"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium text-white">
                    {facility.name}
                  </span>
                  <span className="text-[10px] text-white/50">{facility.country}</span>
                </span>
              </button>
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}
