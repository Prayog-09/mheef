import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useGlobeStore } from '../../store/useGlobeStore';
import { facilities } from '../../data/facilities';
import SidePanelHeader from './SidePanelHeader';
import TabBar, { type TabId } from './TabBar';
import OverviewTab from './tabs/OverviewTab';
import HistoryTab from './tabs/HistoryTab';
import ExperimentsTab from './tabs/ExperimentsTab';
import KeyResultsTab from './tabs/KeyResultsTab';
import ImportantPeopleTab from './tabs/ImportantPeopleTab';
import ReadMoreTab from './tabs/ReadMoreTab';

export default function SidePanel() {
  const selectedFacilityId = useGlobeStore((s) => s.selectedFacilityId);
  const setSelectedFacilityId = useGlobeStore((s) => s.setSelectedFacilityId);
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  const facility = facilities.find((f) => f.id === selectedFacilityId) ?? null;
  const isOpen = facility !== null;

  // Reset to Overview whenever a *different* facility is selected, so
  // switching markers doesn't leave you stranded on, say, "Read More" for
  // a facility that has none.
  useEffect(() => {
    if (selectedFacilityId) setActiveTab('overview');
  }, [selectedFacilityId]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedFacilityId(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setSelectedFacilityId]);

  return (
    <AnimatePresence>
      {isOpen && facility && (
        <motion.aside
          key="side-panel"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.45 }}
          // Phase 5 turns this into a bottom-sheet drawer below the `md`
          // breakpoint instead of a fixed right-side panel.
          className="absolute inset-y-0 right-0 z-20 flex w-full max-w-[420px] flex-col border-l border-accent-400/15 bg-space-950/95 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`${facility.name} details`}
        >
          <button
            onClick={() => setSelectedFacilityId(null)}
            aria-label="Close panel"
            className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/40 p-1.5 text-white/60 transition-colors hover:border-accent-400/40 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>

          <SidePanelHeader facility={facility} />
          <TabBar activeTab={activeTab} onChange={setActiveTab} />

          <div className="flex-1 overflow-y-auto px-6 py-5">
            {activeTab === 'overview' && <OverviewTab facility={facility} />}
            {activeTab === 'history' && <HistoryTab facility={facility} />}
            {activeTab === 'experiments' && <ExperimentsTab facility={facility} />}
            {activeTab === 'key-results' && <KeyResultsTab facility={facility} />}
            {activeTab === 'people' && <ImportantPeopleTab facility={facility} />}
            {activeTab === 'read-more' && <ReadMoreTab facility={facility} />}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
