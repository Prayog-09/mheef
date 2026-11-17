import { withBase } from './utils/paths';

// CesiumJS loads its web workers, sky box and other static assets at
// runtime from this URL (copied into public/cesium by
// scripts/copy-cesium.mjs). It must be set before Cesium is first used, so
// Globe.tsx imports this module ahead of 'cesium'.
(window as unknown as { CESIUM_BASE_URL: string }).CESIUM_BASE_URL = new URL(
  withBase('/cesium/'),
  window.location.origin
).href;

export {};
