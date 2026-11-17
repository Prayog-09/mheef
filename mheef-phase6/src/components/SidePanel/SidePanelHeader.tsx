import { ArrowUpRight, MapPin } from 'lucide-react';
import { FACILITY_TYPE_LABELS, type Facility } from '../../types/facility';
import StatusBadge from '../StatusBadge';
import { facilityPagePath } from '../../utils/paths';

interface SidePanelHeaderProps {
  facility: Facility;
}

// The panel opens straight onto the facility's name. Its photograph, where
// there is one, is at the top of the Overview tab, so every facility's
// header looks the same with or without a picture.
export default function SidePanelHeader({ facility }: SidePanelHeaderProps) {
  return (
    <div className="shrink-0">
      {/* pr-14 keeps the status badge clear of the panel's close button. */}
      <div className="px-6 pb-3 pr-14 pt-5">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-semibold text-white">{facility.name}</h2>
          <StatusBadge status={facility.status} />
        </div>

        <p className="mt-1 text-xs text-white/60">
          {FACILITY_TYPE_LABELS[facility.type]}
          {facility.fullName && ` · ${facility.fullName}`}
        </p>

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

        <a
          href={facilityPagePath(facility.id)}
          className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent-300 transition-colors hover:text-white"
        >
          Open full page
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
