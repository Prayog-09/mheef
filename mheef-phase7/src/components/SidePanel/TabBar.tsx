import { motion } from 'framer-motion';
import { useRef } from 'react';
import type { KeyboardEvent } from 'react';

export type TabId = 'overview' | 'history' | 'experiments' | 'key-results' | 'people' | 'read-more';

interface TabConfig {
  id: TabId;
  label: string;
}

const TABS: TabConfig[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'history', label: 'History' },
  { id: 'experiments', label: 'Experiments' },
  { id: 'key-results', label: 'Key Results' },
  { id: 'people', label: 'Important People' },
  { id: 'read-more', label: 'Read More' },
];

interface TabBarProps {
  activeTab: TabId;
  onChange: (tab: TabId) => void;
}

// Phase 5 — accessibility: implements the WAI-ARIA "tabs" keyboard pattern.
// Only the active tab sits in the normal Tab order (roving tabindex);
// Left/Right/Home/End move focus *and* selection between tabs without the
// user needing to Tab through each one individually.
export default function TabBar({ activeTab, onChange }: TabBarProps) {
  const tabRefs = useRef<Partial<Record<TabId, HTMLButtonElement>>>({});

  const focusAndSelect = (id: TabId) => {
    onChange(id);
    tabRefs.current[id]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        focusAndSelect(TABS[(index + 1) % TABS.length].id);
        break;
      case 'ArrowLeft':
        event.preventDefault();
        focusAndSelect(TABS[(index - 1 + TABS.length) % TABS.length].id);
        break;
      case 'Home':
        event.preventDefault();
        focusAndSelect(TABS[0].id);
        break;
      case 'End':
        event.preventDefault();
        focusAndSelect(TABS[TABS.length - 1].id);
        break;
    }
  };

  return (
    <nav className="flex shrink-0 overflow-x-auto border-b border-white/10 px-4" role="tablist">
      {TABS.map((tab, index) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            ref={(el) => {
              if (el) tabRefs.current[tab.id] = el;
            }}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`relative whitespace-nowrap px-3 py-3 text-xs font-medium uppercase tracking-wide transition-colors ${
              isActive ? 'text-accent-300' : 'text-white/55 hover:text-white/80'
            }`}
          >
            {tab.label}
            {isActive && (
              <motion.span
                layoutId="side-panel-tab-indicator"
                className="absolute inset-x-3 bottom-0 h-[2px] rounded-full bg-accent-400"
                // Phase 5 audit: less bouncy than the original 380/32 — the
                // underline now settles rather than overshooting slightly.
                transition={{ type: 'spring', stiffness: 300, damping: 36 }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}

