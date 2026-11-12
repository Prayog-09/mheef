import SourceLinks from '../../SourceLinks';
import type { Facility } from '../../../types/facility';

interface ImportantPeopleTabProps {
  facility: Facility;
}

// Phase 7+ extension point: promote each person into a routed page with a
// fuller biography/timeline. For now these cards are inert — no onClick —
// by deliberate Phase 3 scope (per the brief: "clicking does nothing yet").
export default function ImportantPeopleTab({ facility }: ImportantPeopleTabProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {facility.importantPeople.map((person) => (
        <div key={person.name} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <h3 className="text-sm font-semibold text-white">{person.name}</h3>
          <p className="mt-1 text-xs leading-relaxed text-white/60">{person.contribution}</p>
          <SourceLinks sources={person.sources} />
        </div>
      ))}
    </div>
  );
}
