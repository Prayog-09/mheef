import type { FacilityImage } from '../types/facility';
import { withBase } from '../utils/paths';

interface FacilityFigureProps {
  facilityId: string;
  image: FacilityImage;
  /** Roughly how wide the picture is shown, as a CSS `sizes` value. */
  sizes: string;
  /** Load straight away rather than when scrolled into view. */
  eager?: boolean;
  compact?: boolean;
}

/** One photograph with its caption, credit and licence. */
export default function FacilityFigure({ facilityId, image, sizes, eager, compact }: FacilityFigureProps) {
  const large = withBase(`/images/facilities/${facilityId}/${image.file}`);
  const small = large.replace(/\.jpg$/, '-sm.jpg');
  const link =
    'underline decoration-white/25 underline-offset-2 transition-colors hover:text-accent-300';

  return (
    <figure>
      <img
        src={small}
        srcSet={`${small} 640w, ${large} ${image.width}w`}
        sizes={sizes}
        width={image.width}
        height={image.height}
        alt={image.alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`w-full rounded-lg border border-white/10 bg-white/[0.03] ${
          compact ? 'aspect-[16/9] object-cover' : 'h-auto'
        }`}
      />
      <figcaption className={compact ? 'mt-1.5' : 'mt-2'}>
        <p className={`leading-relaxed text-white/70 ${compact ? 'text-xs' : 'text-sm'}`}>
          {image.caption}
        </p>
        <p className="mt-0.5 text-[11px] leading-relaxed text-white/45">
          Photo:{' '}
          <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer" className={`text-white/65 ${link}`}>
            {image.credit}
          </a>
          {' · '}
          {image.licenseUrl ? (
            <a href={image.licenseUrl} target="_blank" rel="noopener noreferrer" className={link}>
              {image.license}
            </a>
          ) : (
            image.license
          )}
        </p>
      </figcaption>
    </figure>
  );
}
