import TopBar from './components/TopBar';
import Globe from './components/Globe';
import SidePanel from './components/SidePanel/SidePanel';
import FilterPanel from './components/FilterPanel';

export default function App() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-space-950">
      <Globe />
      <TopBar />
      <SidePanel />
      {/* Phase 4: floating filter panel, bottom-left. Phase 5 converts
          this to a bottom-sheet modal button on narrow screens. */}
      <FilterPanel />
    </div>
  );
}
