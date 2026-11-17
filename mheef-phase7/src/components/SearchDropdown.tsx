import { AnimatePresence, motion } from 'framer-motion';
import type { Facility } from '../types/facility';

interface SearchDropdownProps {
  results: Facility[];
  onSelect: (facility: Facility) => void;
  isVisible: boolean;
  /** Result highlighted by the arrow keys (or the pointer) in TopBar. */
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
  optionIdPrefix: string;
}

export default function SearchDropdown({
  results,
  onSelect,
  isVisible,
  activeIndex,
  onActiveIndexChange,
  optionIdPrefix,
}: SearchDropdownProps) {
  return (
    <AnimatePresence>
      {isVisible && results.length > 0 && (
        <motion.ul
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-accent-400/20 bg-black/85 backdrop-blur-md"
          id="facility-search-results"
          role="listbox"
          aria-label="Facility search results"
        >
          {results.map((facility, index) => (
            <li
              key={facility.id}
              id={`${optionIdPrefix}${index}`}
              role="option"
              aria-selected={index === activeIndex}
            >
              <button
                tabIndex={-1}
                onClick={() => onSelect(facility)}
                onMouseEnter={() => onActiveIndexChange(index)}
                className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors focus:outline-none ${
                  index === activeIndex ? 'bg-accent-400/10' : ''
                }`}
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
