import { ExternalLink } from 'lucide-react';
import type { Facility } from '../../../types/facility';

interface ReadMoreTabProps {
  facility: Facility;
}

export default function ReadMoreTab({ facility }: ReadMoreTabProps) {
  return (
    <ul className="space-y-2">
      {facility.readMore.map((link) => (
        <li key={link.url}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75 transition-colors hover:border-accent-400/30 hover:text-white"
          >
            {link.label}
            <ExternalLink className="h-3.5 w-3.5 shrink-0 text-accent-300/60" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
