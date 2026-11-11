/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Optional Cesium ion access token — enables high-resolution imagery and 3D terrain. */
  readonly VITE_CESIUM_ION_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
