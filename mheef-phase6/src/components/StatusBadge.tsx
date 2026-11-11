import type { FacilityStatus } from '../types/facility';
import { STATUS_LABELS, STATUS_STYLES } from '../utils/facility';

interface StatusBadgeProps {
  status: FacilityStatus;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${STATUS_STYLES[status]}`}
    >
      {STATUS_LABELS[status]}
    </span>
  );
}
