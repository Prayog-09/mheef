import type { Facility } from '../../../types/facility';
import { PHYSICS_TOPIC_LABELS } from '../../../types/facility';

interface ExperimentsTabProps {
  facility: Facility;
}

function formatYears(startYear?: number, endYear?: number): string | null {
  if (!startYear) return null;
  return endYear ? `${startYear}–${endYear}` : `${startYear}–present`;
}

export default function ExperimentsTab({ facility }: ExperimentsTabProps) {
  return (
    <div className="grid gap-3">
      {facility.experiments.map((experiment) => {
        const years = formatYears(experiment.startYear, experiment.endYear);
        return (
          <article key={experiment.id} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-sm font-semibold text-white">{experiment.name}</h3>
              {years && <span className="shrink-0 text-[11px] text-white/40">{years}</span>}
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-white/65">{experiment.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {experiment.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-accent-400/20 bg-accent-400/10 px-2 py-0.5 text-[10px] font-medium text-accent-300"
                >
                  {PHYSICS_TOPIC_LABELS[topic]}
                </span>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}
