// CesiumJS loads its web workers, sky box and other static assets at
// runtime from this URL (copied into public/cesium by
// scripts/copy-cesium.mjs). It must be set before Cesium is first used, so
// Globe.tsx imports this module ahead of 'cesium'. Resolved against the
// document so it stays correct under a GitHub Pages sub-path.
(window as unknown as { CESIUM_BASE_URL: string }).CESIUM_BASE_URL = new URL(
  `${import.meta.env.BASE_URL}cesium/`,
  document.baseURI
).href;

export {};
