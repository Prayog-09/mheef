import { Search, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { useGlobeStore } from '../store/useGlobeStore';
import { searchFacilities } from '../utils/search';
import type { Facility } from '../types/facility';
import SearchDropdown from './SearchDropdown';

export default function TopBar() {
  const searchQuery = useGlobeStore((s) => s.searchQuery);
  const setSearchQuery = useGlobeStore((s) => s.setSearchQuery);
  const setSelectedFacilityId = useGlobeStore((s) => s.setSelectedFacilityId);

  const [results, setResults] = useState<Facility[]>([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  // containerRef used for the click-outside listener so the dropdown closes
  // when the user clicks back onto the globe.
  const containerRef = useRef<HTMLDivElement>(null);

  // Run search whenever the query changes; show dropdown only when there
  // are results (SearchDropdown also guards on length, but hiding here
  // prevents the AnimatePresence exit from re-triggering unnecessarily).
  useEffect(() => {
    if (searchQuery.trim().length >= 2) {
      const found = searchFacilities(searchQuery);
      setResults(found);
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
    if (e.key === 'Escape') handleClear();
    // Phase 5 adds arrow-key navigation through the dropdown results.
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
    <header className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-5">
      <h1 className="pointer-events-auto select-none text-sm font-semibold uppercase tracking-[0.28em] text-white/90">
        MHEEF
      </h1>

      <div className="pointer-events-auto relative w-72" ref={containerRef}>
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-accent-300/60" />
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
          aria-label="Search facilities"
          aria-haspopup="listbox"
          aria-expanded={dropdownVisible}
          className="w-full rounded-full border border-accent-400/20 bg-black/40 py-2 pl-9 pr-9 text-sm text-white/80 placeholder:text-white/30 backdrop-blur-md transition-colors focus:border-accent-400/50 focus:outline-none focus:ring-1 focus:ring-accent-400/40"
        />
        {searchQuery && (
          <button
            onClick={handleClear}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 transition-colors hover:text-white/80"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
        <SearchDropdown
          results={results}
          onSelect={handleSelect}
          isVisible={dropdownVisible}
        />
      </div>
    </header>
  );
}
