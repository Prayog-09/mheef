import type { FacilityStatus } from '../types/facility';

interface StatusBadgeProps {
  status: FacilityStatus;
}

const STATUS_STYLES: Record<FacilityStatus, string> = {
  active: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  historic: 'border-white/20 bg-white/10 text-white/60',
  planned: 'border-violet-400/30 bg-violet-400/10 text-violet-300',
};

const STATUS_LABELS: Record<FacilityStatus, string> = {
  active: 'Active',
  historic: 'Historic',
  planned: 'Planned',
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${STATUS_STYLES[status]}`}
    >
      {STATUS_LABELS[status]}
    </span>
  );
}
