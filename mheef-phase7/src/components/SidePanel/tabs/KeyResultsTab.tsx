import SourceLinks from '../../SourceLinks';
import type { Facility } from '../../../types/facility';

interface KeyResultsTabProps {
  facility: Facility;
}

export default function KeyResultsTab({ facility }: KeyResultsTabProps) {
  const sorted = [...facility.keyResults].sort((a, b) => b.year - a.year);

  return (
    <div className="grid gap-3">
      {sorted.map((result) => (
        <article
          key={`${facility.id}-${result.year}-${result.discovery}`}
          className="rounded-lg border border-accent-400/15 bg-accent-400/[0.04] p-4"
        >
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-sm font-semibold text-white">{result.discovery}</h3>
            <span className="shrink-0 font-mono text-[11px] text-accent-300/80">{result.year}</span>
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-white/65">{result.description}</p>
          <SourceLinks sources={result.sources} />
        </article>
      ))}
    </div>
  );
}
