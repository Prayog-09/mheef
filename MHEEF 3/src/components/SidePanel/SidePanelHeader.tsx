import { MapPin } from 'lucide-react';
import type { Facility } from '../../types/facility';
import StatusBadge from '../StatusBadge';

interface SidePanelHeaderProps {
  facility: Facility;
}

// "Image placeholder" per the Phase 3 brief — the Phase 2 dataset has no
// photo field yet. Phase 6+ extension point: add `imageUrl` to Facility
// and swap this gradient block for a real <img>.
export default function SidePanelHeader({ facility }: SidePanelHeaderProps) {
  return (
    <div className="shrink-0">
      <div className="relative h-32 w-full overflow-hidden bg-gradient-to-br from-accent-500/30 via-space-900 to-space-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.25),transparent_60%)]" />
      </div>

      <div className="px-6 pb-3 pt-4">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-semibold text-white">{facility.name}</h2>
          <StatusBadge status={facility.status} />
        </div>

        <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/50">
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3 text-accent-300/70" aria-hidden="true" />
            {facility.country}
          </span>
          <span>Founded {facility.founded}</span>
          <span className="font-mono text-[11px] text-white/50">
            {facility.lat.toFixed(2)}°, {facility.lng.toFixed(2)}°
          </span>
        </div>
      </div>
    </div>
  );
}
