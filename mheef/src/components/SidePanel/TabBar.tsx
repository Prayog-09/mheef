import { motion } from 'framer-motion';

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

// Phase 5 adds arrow-key navigation and a focus trap across these tabs;
// for now this is a plain pointer-driven tab list.
export default function TabBar({ activeTab, onChange }: TabBarProps) {
  return (
    <nav className="flex shrink-0 overflow-x-auto border-b border-white/10 px-4" role="tablist">
      {TABS.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={`relative whitespace-nowrap px-3 py-3 text-xs font-medium uppercase tracking-wide transition-colors ${
              isActive ? 'text-accent-300' : 'text-white/50 hover:text-white/80'
            }`}
          >
            {tab.label}
            {isActive && (
              <motion.span
                layoutId="side-panel-tab-indicator"
                className="absolute inset-x-3 bottom-0 h-[2px] rounded-full bg-accent-400"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}
