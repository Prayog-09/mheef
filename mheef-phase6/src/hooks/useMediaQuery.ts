import { useEffect, useState } from 'react';

/**
 * Phase 5 — responsive pass.
 *
 * Subscribes to a CSS media query and returns whether it currently matches,
 * updating live on resize/orientation change. Used by SidePanel and
 * FilterPanel to switch between their desktop layout (right-side drawer /
 * inline floating panel) and their mobile layout (bottom sheet / modal)
 * without a page reload.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);

    // Sync immediately in case the query string itself changed.
    setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener('change', listener);
    return () => mediaQueryList.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

/**
 * Shared breakpoint so SidePanel and FilterPanel agree on exactly where
 * "mobile" begins — matches Tailwind's default `md` breakpoint (768px).
 */
export const MOBILE_QUERY = '(max-width: 767px)';
