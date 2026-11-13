import type { Facility } from '../../../types/facility';
import SourceLinks from '../../SourceLinks';
import FacilityFigure from '../../FacilityFigure';

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
      {facility.images?.[0] && (
        <FacilityFigure
          key={facility.id}
          facilityId={facility.id}
          image={facility.images[0]}
          sizes="400px"
          eager
          compact
        />
      )}

      <p className="text-sm leading-relaxed text-white/70">{facility.overview}</p>

      <dl className="grid grid-cols-2 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5">
            <dt className="text-[10px] uppercase tracking-wide text-white/50">{stat.label}</dt>
            <dd className="mt-0.5 truncate text-sm font-medium text-white/90">{stat.value}</dd>
          </div>
        ))}
      </dl>

      {facility.specs && facility.specs.length > 0 && (
        <section aria-labelledby="panel-key-figures">
          <h3
            id="panel-key-figures"
            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-300"
          >
            Key figures
          </h3>
          <dl className="mt-2 divide-y divide-white/10 border-y border-white/10">
            {facility.specs.map((spec) => (
              <div key={spec.label} className="py-2.5">
                <dt className="text-xs text-white/50">{spec.label}</dt>
                <dd className="mt-0.5">
                  <p className="text-sm font-medium text-white/90">{spec.value}</p>
                  <SourceLinks sources={spec.sources} />
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}
    </div>
  );
}
