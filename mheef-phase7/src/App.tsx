import { Suspense, lazy, useEffect, useRef } from 'react';
import TopBar from './components/TopBar';
import SidePanel from './components/SidePanel/SidePanel';
import FilterPanel from './components/FilterPanel';
import { useGlobeStore } from './store/useGlobeStore';
import { facilities } from './data/facilities';

// The globe pulls in CesiumJS, by far the largest part of the
// bundle. Loading it lazily lets the title, search and filters appear
// first instead of a blank screen while it downloads.
const Globe = lazy(() => import('./components/Globe'));

function GlobeLoading() {
  return (
    <div className="absolute inset-0 flex items-center justify-center" role="status">
      <p className="animate-pulse text-xs uppercase tracking-[0.28em] text-white/40">
        Loading globe…
      </p>
    </div>
  );
}

const FACILITY_PARAM = 'facility';

/**
 * Keeps the selected facility in the address bar (?facility=cern), so a
 * globe view can be shared or bookmarked and the facility pages can link
 * straight to a facility on the globe.
 */
function useFacilityInUrl() {
  const selectedFacilityId = useGlobeStore((s) => s.selectedFacilityId);
  const setSelectedFacilityId = useGlobeStore((s) => s.setSelectedFacilityId);
  const hasReadUrlRef = useRef(false);

  useEffect(() => {
    if (!hasReadUrlRef.current) {
      // First run: the address bar is the source of truth.
      hasReadUrlRef.current = true;
      const requested = new URLSearchParams(window.location.search).get(FACILITY_PARAM);
      if (requested && facilities.some((f) => f.id === requested)) {
        setSelectedFacilityId(requested);
      }
      return;
    }

    const url = new URL(window.location.href);
    if (selectedFacilityId) url.searchParams.set(FACILITY_PARAM, selectedFacilityId);
    else url.searchParams.delete(FACILITY_PARAM);
    window.history.replaceState(null, '', url);
  }, [selectedFacilityId, setSelectedFacilityId]);
}

export default function App() {
  useFacilityInUrl();

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-space-950">
      <Suspense fallback={<GlobeLoading />}>
        <Globe />
      </Suspense>
      <TopBar />
      <SidePanel />
      {/* Phase 4: floating filter panel, bottom-left. Phase 5 converts
          this to a bottom-sheet modal button on narrow screens. */}
      <FilterPanel />
    </div>
  );
}
