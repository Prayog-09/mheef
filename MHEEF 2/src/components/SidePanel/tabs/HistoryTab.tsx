import type { Facility } from '../../../types/facility';

interface HistoryTabProps {
  facility: Facility;
}

export default function HistoryTab({ facility }: HistoryTabProps) {
  return (
    <ol className="relative space-y-6 border-l border-accent-400/20 pl-5">
      {facility.history.map((entry, index) => (
        <li key={`${facility.id}-${entry.year}-${index}`} className="relative">
          <span className="absolute -left-[25px] top-0.5 h-2.5 w-2.5 rounded-full border-2 border-space-950 bg-accent-400" />
          <span className="text-xs font-semibold text-accent-300">{entry.year}</span>
          <p className="mt-1 text-sm leading-relaxed text-white/70">{entry.event}</p>
        </li>
      ))}
    </ol>
  );
}
