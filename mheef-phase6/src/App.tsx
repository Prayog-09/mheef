import { Suspense, lazy } from 'react';
import TopBar from './components/TopBar';
import SidePanel from './components/SidePanel/SidePanel';
import FilterPanel from './components/FilterPanel';

// Phase 7: the globe pulls in three.js, by far the largest part of the
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

export default function App() {
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
