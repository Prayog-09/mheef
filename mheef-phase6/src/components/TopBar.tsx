import { Search, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { useGlobeStore } from '../store/useGlobeStore';
import { searchFacilities } from '../utils/search';
import type { Facility } from '../types/facility';
import SearchDropdown from './SearchDropdown';
import { withBase } from '../utils/paths';

// Capped at 6 results — enough to be useful, short enough to avoid the
// dropdown covering the globe.
const MAX_RESULTS = 6;
const RESULT_ID_PREFIX = 'facility-search-option-';

export default function TopBar() {
  const searchQuery = useGlobeStore((s) => s.searchQuery);
  const setSearchQuery = useGlobeStore((s) => s.setSearchQuery);
  const setSelectedFacilityId = useGlobeStore((s) => s.setSelectedFacilityId);

  const [results, setResults] = useState<Facility[]>([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  // Index of the keyboard-highlighted result. Resets to the best match on
  // every new query, so Enter always opens the top result by default.
  const [activeIndex, setActiveIndex] = useState(0);
  // containerRef used for the click-outside listener so the dropdown closes
  // when the user clicks back onto the globe.
  const containerRef = useRef<HTMLDivElement>(null);

  // Run search whenever the query changes; show dropdown only when there
  // are results (SearchDropdown also guards on length, but hiding here
  // prevents the AnimatePresence exit from re-triggering unnecessarily).
  useEffect(() => {
    if (searchQuery.trim().length >= 2) {
      const found = searchFacilities(searchQuery).slice(0, MAX_RESULTS);
      setResults(found);
      setActiveIndex(0);
      setDropdownVisible(found.length > 0);
    } else {
      setResults([]);
      setDropdownVisible(false);
    }
  }, [searchQuery]);

  // Selecting a result: fly camera + open side panel (both happen because
  // CameraRig and SidePanel both watch selectedFacilityId), then clear.
  const handleSelect = useCallback(
    (facility: Facility) => {
      setSelectedFacilityId(facility.id);
      setSearchQuery('');
      setDropdownVisible(false);
    },
    [setSelectedFacilityId, setSearchQuery]
  );

  const handleClear = useCallback(() => {
    setSearchQuery('');
    setDropdownVisible(false);
  }, [setSearchQuery]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      handleClear();
      return;
    }
    if (e.key === 'Enter') {
      // Search again from the input's current text rather than trusting
      // `results`, which lags a render behind fast typing.
      const current = searchFacilities(e.currentTarget.value).slice(0, MAX_RESULTS);
      if (current.length === 0) return;
      e.preventDefault();
      handleSelect(current[activeIndex] ?? current[0]);
      return;
    }
    if (results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setDropdownVisible(true);
      setActiveIndex((i) => (i + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setDropdownVisible(true);
      setActiveIndex((i) => (i - 1 + results.length) % results.length);
    }
  };

  // Close the dropdown when the user clicks anywhere outside the search
  // container (e.g. directly on the globe canvas).
  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, []);

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-4 px-6 py-5">
      <div className="pointer-events-auto flex shrink-0 items-baseline gap-4 sm:gap-5">
        <h1 className="select-none text-sm font-semibold uppercase tracking-[0.28em] text-white/90">
          MHEEF
        </h1>
        <a
          href={withBase('/facilities/')}
          className="whitespace-nowrap text-xs font-medium text-white/60 transition-colors hover:text-white"
        >
          All facilities
        </a>
      </div>

      <div className="pointer-events-auto relative min-w-0 flex-1 sm:w-72 sm:flex-none" ref={containerRef}>
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-accent-300/60" aria-hidden="true" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => {
            // Re-show the dropdown if the user focuses back into a
            // non-empty input that already has results.
            if (results.length > 0) setDropdownVisible(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search facilities…"
          role="combobox"
          aria-label="Search facilities"
          aria-haspopup="listbox"
          aria-expanded={dropdownVisible}
          aria-controls="facility-search-results"
          aria-autocomplete="list"
          aria-activedescendant={
            dropdownVisible && results.length > 0 ? `${RESULT_ID_PREFIX}${activeIndex}` : undefined
          }
          className="w-full rounded-full border border-accent-400/20 bg-black/40 py-2 pl-9 pr-9 text-sm text-white/80 placeholder:text-white/30 backdrop-blur-md transition-colors focus:border-accent-400/50 focus:outline-none focus:ring-1 focus:ring-accent-400/40"
        />
        {searchQuery && (
          <button
            onClick={handleClear}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 transition-colors hover:text-white/80"
          >
            <X className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        )}
        <SearchDropdown
          results={results}
          onSelect={handleSelect}
          isVisible={dropdownVisible}
          activeIndex={activeIndex}
          onActiveIndexChange={setActiveIndex}
          optionIdPrefix={RESULT_ID_PREFIX}
        />
      </div>
    </header>
  );
}
