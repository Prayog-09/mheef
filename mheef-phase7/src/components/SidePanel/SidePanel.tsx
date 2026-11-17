import { AnimatePresence, motion } from 'framer-motion';
import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { useGlobeStore } from '../../store/useGlobeStore';
import { facilities } from '../../data/facilities';
import { useMediaQuery, MOBILE_QUERY } from '../../hooks/useMediaQuery';
import SidePanelHeader from './SidePanelHeader';
import TabBar, { type TabId } from './TabBar';

// Phase 5 — performance: each tab's component (and any data processing it
// does) is now code-split via dynamic import, so it isn't pulled into the
// initial bundle or evaluated until the user actually opens that tab. The
// brief's "don't process all 5 tabs until opened" was already true at the
// React-render level (conditional `&&` below only ever mounts one tab at a
// time) — this adds the matching win at the bundle/parse level.
const OverviewTab = lazy(() => import('./tabs/OverviewTab'));
const HistoryTab = lazy(() => import('./tabs/HistoryTab'));
const ExperimentsTab = lazy(() => import('./tabs/ExperimentsTab'));
const KeyResultsTab = lazy(() => import('./tabs/KeyResultsTab'));
const ImportantPeopleTab = lazy(() => import('./tabs/ImportantPeopleTab'));
const ReadMoreTab = lazy(() => import('./tabs/ReadMoreTab'));

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export default function SidePanel() {
  const selectedFacilityId = useGlobeStore((s) => s.selectedFacilityId);
  const setSelectedFacilityId = useGlobeStore((s) => s.setSelectedFacilityId);
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const isMobile = useMediaQuery(MOBILE_QUERY);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const facility = facilities.find((f) => f.id === selectedFacilityId) ?? null;
  const isOpen = facility !== null;

  // Reset to Overview whenever a *different* facility is selected, so
  // switching markers doesn't leave you stranded on, say, "Read More" for
  // a facility that has none.
  useEffect(() => {
    if (selectedFacilityId) setActiveTab('overview');
  }, [selectedFacilityId]);

  // Phase 5 — accessibility: Escape-to-close (carried over from Phase 3)
  // plus a focus trap so Tab/Shift+Tab cycle within the panel instead of
  // escaping into the globe behind it, and an initial focus move onto the
  // close button so keyboard/screen-reader users land somewhere sensible
  // the instant the panel opens.
  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedFacilityId(null);
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setSelectedFacilityId]);

  // Phase 5 — responsive: desktop keeps the Phase 3 right-side drawer;
  // below the `md` breakpoint this becomes a bottom sheet instead, so it
  // never covers the whole globe on a small screen.
  const motionVariants = isMobile
    ? { initial: { y: '100%' }, animate: { y: 0 }, exit: { y: '100%' } }
    : { initial: { x: '100%' }, animate: { x: 0 }, exit: { x: '100%' } };

  const containerClass = isMobile
    ? 'absolute inset-x-0 bottom-0 z-20 flex max-h-[85vh] w-full flex-col rounded-t-2xl border-t border-accent-400/15 bg-space-950/95 backdrop-blur-md'
    : 'absolute inset-y-0 right-0 z-20 flex w-full max-w-[420px] flex-col border-l border-accent-400/15 bg-space-950/95 backdrop-blur-md';

  return (
    <AnimatePresence>
      {isOpen && facility && (
        <motion.aside
          key="side-panel"
          ref={panelRef}
          initial={motionVariants.initial}
          animate={motionVariants.animate}
          exit={motionVariants.exit}
          transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.45 }}
          className={containerClass}
          role="dialog"
          aria-modal="true"
          aria-label={`${facility.name} details`}
        >
          {isMobile && (
            <div
              aria-hidden="true"
              className="mx-auto mt-2 h-1 w-10 shrink-0 rounded-full bg-white/15"
            />
          )}

          <button
            ref={closeButtonRef}
            onClick={() => setSelectedFacilityId(null)}
            aria-label="Close panel"
            className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/40 p-1.5 text-white/60 transition-colors hover:border-accent-400/40 hover:text-white"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>

          <SidePanelHeader facility={facility} />
          <TabBar activeTab={activeTab} onChange={setActiveTab} />

          <div className="flex-1 overflow-y-auto px-6 py-5">
            <Suspense
              fallback={
                <div className="py-8 text-center text-xs uppercase tracking-wide text-white/40">
                  Loading…
                </div>
              }
            >
              {activeTab === 'overview' && <OverviewTab facility={facility} />}
              {activeTab === 'history' && <HistoryTab facility={facility} />}
              {activeTab === 'experiments' && <ExperimentsTab facility={facility} />}
              {activeTab === 'key-results' && <KeyResultsTab facility={facility} />}
              {activeTab === 'people' && <ImportantPeopleTab facility={facility} />}
              {activeTab === 'read-more' && <ReadMoreTab facility={facility} />}
            </Suspense>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

