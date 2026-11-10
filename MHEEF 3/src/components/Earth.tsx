import { useLoader } from '@react-three/fiber';
import { useMemo } from 'react';
import * as THREE from 'three';

// Known gotcha: these are fetched by the user's browser at runtime, not by
// this build step, so they need a CORS-friendly host. threejs.org's example
// assets serve permissive CORS headers and are commonly used for this exact
// purpose. If you swap to self-hosted textures, drop them in /public/textures
// and reference them as '/textures/...' instead.
const EARTH_COLOR_MAP_URL = 'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg';
const EARTH_NORMAL_MAP_URL = 'https://threejs.org/examples/textures/planets/earth_normal_2048.jpg';

export const EARTH_RADIUS = 2;

// Phase 6, lighting upgrade 4(b) — ocean specular mask.
//
// The spec offers two options: a roughnessMap fetched from a CDN, or a
// "hand-built ocean specular mask." We went with the hand-built option
// deliberately, not just as a fallback: a separate earth_specular_2048.jpg
// texture exists on threejs.org's example host, but its white=ocean/
// black=land convention is the *opposite* of what THREE.MeshStandardMaterial's
// roughnessMap expects (low value = shiny, high value = matte) — using it
// directly without inverting would make oceans rough and continents shiny,
// the reverse of the sun-glint look this upgrade is going for. Rather than
// add a fourth network texture AND a runtime invert step AND trust an
// unverified channel convention, we derive the mask directly from the
// colorMap we already have loaded and already trust (same texture set,
// guaranteed-matching UVs, zero extra bytes over the wire).
function useOceanRoughnessMap(colorMap: THREE.Texture): THREE.CanvasTexture {
  return useMemo(() => {
    const canvas = document.createElement('canvas');
    const image = colorMap.image as HTMLImageElement | undefined;

    if (!image || !image.width) {
      // Defensive fallback — useLoader/Suspense should guarantee a decoded
      // image by the time this runs, but if it somehow isn't, fall back to
      // a uniform mid-high roughness rather than throwing. Same "never
      // breaks on incomplete data" rule Phase 7's photo fallback follows.
      canvas.width = 2;
      canvas.height = 2;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#ededed';
        ctx.fillRect(0, 0, 2, 2);
      }
      return new THREE.CanvasTexture(canvas);
    }

    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return new THREE.CanvasTexture(canvas);

    ctx.drawImage(image, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const { data } = imageData;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      // Ocean heuristic: on this specific color map, open water reads as
      // clearly blue-dominant at moderate-to-high brightness, while land
      // (browns/greens) and cloud cover (near-white, all channels close
      // together) don't. Tuned by eye against this one texture rather than
      // meant as a general-purpose classifier — same spirit as Marker.tsx's
      // hand-tuned pulse constants.
      const isOcean = b > r + 12 && b > g + 4 && b > 40;
      const roughness = isOcean ? 90 : 235; // low = shinier highlight, high = matte
      data[i] = roughness;
      data[i + 1] = roughness;
      data[i + 2] = roughness;
      // alpha (data[i + 3]) left untouched
    }
    ctx.putImageData(imageData, 0, 0);

    const texture = new THREE.CanvasTexture(canvas);
    // Roughness maps are sampled as linear data, not display color — flag
    // it as such so three.js doesn't apply an sRGB decode on read.
    texture.colorSpace = THREE.NoColorSpace;
    texture.needsUpdate = true;
    return texture;
  }, [colorMap]);
}

export default function Earth() {
  const [colorMap, normalMap] = useLoader(THREE.TextureLoader, [
    EARTH_COLOR_MAP_URL,
    EARTH_NORMAL_MAP_URL,
  ]);
  const roughnessMap = useOceanRoughnessMap(colorMap);

  return (
    <mesh>
      <sphereGeometry args={[EARTH_RADIUS, 64, 64]} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        normalScale={new THREE.Vector2(0.85, 0.85)}
        roughnessMap={roughnessMap}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}
