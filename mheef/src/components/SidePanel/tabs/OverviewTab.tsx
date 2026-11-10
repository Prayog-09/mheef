import type { Facility } from '../../../types/facility';

interface OverviewTabProps {
  facility: Facility;
}

export default function OverviewTab({ facility }: OverviewTabProps) {
  const stats = [
    { label: 'Founded', value: String(facility.founded) },
    { label: 'Status', value: facility.status[0].toUpperCase() + facility.status.slice(1) },
    { label: 'Country', value: facility.country },
    { label: 'Experiments', value: String(facility.experiments.length) },
  ];

  return (
    <div className="space-y-6">
      <p className="text-sm leading-relaxed text-white/70">{facility.overview}</p>

      <dl className="grid grid-cols-2 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5">
            <dt className="text-[10px] uppercase tracking-wide text-white/40">{stat.label}</dt>
            <dd className="mt-0.5 truncate text-sm font-medium text-white/90">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
