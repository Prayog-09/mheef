import type { SourceRef } from '../types/facility';

interface SourceLinksProps {
  sources?: SourceRef[];
}

/** The references backing one fact, shown beneath it. Renders nothing when there are none. */
export default function SourceLinks({ sources }: SourceLinksProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <p className="mt-1.5 text-[11px] leading-relaxed text-white/45">
      {sources.length === 1 ? 'Source: ' : 'Sources: '}
      {sources.map((source, index) => (
        <span key={source.url}>
          {index > 0 && '; '}
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/65 underline decoration-white/25 underline-offset-2 transition-colors hover:text-accent-300"
          >
            {source.label}
          </a>
        </span>
      ))}
    </p>
  );
}
