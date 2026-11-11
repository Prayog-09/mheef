// The site is served from a sub-path on GitHub Pages (/mheef), so internal
// links can't be written as plain "/facilities/…". Every internal href
// goes through withBase() instead.
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Prefixes a site-absolute path ("/facilities/cern/") with the deploy base. */
export function withBase(path: string): string {
  return `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
}

/** The standalone page for a facility. */
export function facilityPagePath(id: string): string {
  return withBase(`/facilities/${id}/`);
}

/** The globe, opened on a facility. */
export function facilityGlobePath(id: string): string {
  return `${withBase('/')}?facility=${encodeURIComponent(id)}`;
}
