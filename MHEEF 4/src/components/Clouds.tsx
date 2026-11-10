import { useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { EARTH_RADIUS } from './Earth';

// Phase 6 — cloud layer.
//
// Texture-sourcing note: every other texture in this app (Earth.tsx's
// color/normal/specular maps, the Milky Way HDRI in Globe.tsx) is
// hot-linked from a host we independently confirmed serves permissive
// CORS headers. We couldn't find a similarly-confirmed, freely-licensed
// "Earth cloud cover + alpha" image on a CORS-safe host in the time
// available to verify one — and a wrong guess here doesn't throw a
// visible error, WebGL just silently drops the texture, leaving an
// invisible cloud layer that's hard to diagnose later. So this paints
// a seamless (horizontally-tileable) cloud alpha mask on a <canvas> at
// mount instead. Net effect on the texture budget in the write-up
// below: zero extra network bytes for this layer.
//
// If you'd rather use a real satellite cloud photo, swap the
// `useCloudTexture()` call below for a TextureLoader call against a
// self-hosted file under /public/textures (the same fallback Earth.tsx's
// own comment recommends) — nothing else in this file needs to change,
// it just expects an RGBA texture whose alpha channel is cloud density.

const CLOUD_TEXTURE_WIDTH = 1024;
const CLOUD_TEXTURE_HEIGHT = 512;

/** Tiny deterministic PRNG so the generated cloud pattern is reproducible. */
function createRng(seed: number) {
  let state = seed % 2147483647;
  if (state <= 0) state += 2147483646;
  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

interface NoiseOctave {
  cols: number;
  rows: number;
  weight: number;
  lattice: Float32Array;
}

/** A random value lattice that wraps horizontally (cols) but not vertically. */
function buildLattice(cols: number, rows: number, rng: () => number): Float32Array {
  // rows + 1: the vertical axis (poles) doesn't wrap, but interpolating
  // up to the last row still needs one more row of points past it.
  const lattice = new Float32Array(cols * (rows + 1));
  for (let i = 0; i < lattice.length; i++) lattice[i] = rng();
  return lattice;
}

/** Bilinear value-noise sample with seamless wraparound at the u=0/1 seam. */
function sampleLattice(octave: NoiseOctave, u: number, v: number): number {
  const { cols, rows, lattice } = octave;
  const fx = u * cols;
  const fy = v * rows;
  const x0 = Math.floor(fx) % cols;
  const x1 = (x0 + 1) % cols;
  const y0 = Math.min(Math.floor(fy), rows - 1);
  const y1 = y0 + 1;
  const tx = fx - Math.floor(fx);
  const ty = fy - Math.floor(fy);
  // smoothstep interpolation rather than linear — avoids a visibly
  // grid-like noise pattern at low octave counts.
  const sx = tx * tx * (3 - 2 * tx);
  const sy = ty * ty * (3 - 2 * ty);

  const v00 = lattice[y0 * cols + x0];
  const v10 = lattice[y0 * cols + x1];
  const v01 = lattice[y1 * cols + x0];
  const v11 = lattice[y1 * cols + x1];

  const top = v00 + (v10 - v00) * sx;
  const bottom = v01 + (v11 - v01) * sx;
  return top + (bottom - top) * sy;
}

/** Paints the cloud alpha mask. Pure function of the canvas — easy to retune. */
function paintCloudCanvas(canvas: HTMLCanvasElement) {
  canvas.width = CLOUD_TEXTURE_WIDTH;
  canvas.height = CLOUD_TEXTURE_HEIGHT;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const rng = createRng(20260613); // arbitrary fixed seed — stable across reloads
  // Four fBm octaves: the low-frequency lattice reads as "cloud
  // systems", higher-frequency ones add wispy edge detail on top.
  const octaves: NoiseOctave[] = [
    { cols: 8, rows: 4, weight: 1.0, lattice: new Float32Array() },
    { cols: 16, rows: 8, weight: 0.5, lattice: new Float32Array() },
    { cols: 32, rows: 16, weight: 0.25, lattice: new Float32Array() },
    { cols: 64, rows: 32, weight: 0.125, lattice: new Float32Array() },
  ];
  for (const o of octaves) {
    o.lattice = buildLattice(o.cols, o.rows, rng);
  }
  const totalWeight = octaves.reduce((sum, o) => sum + o.weight, 0);

  const image = ctx.createImageData(CLOUD_TEXTURE_WIDTH, CLOUD_TEXTURE_HEIGHT);
  for (let y = 0; y < CLOUD_TEXTURE_HEIGHT; y++) {
    const v = y / (CLOUD_TEXTURE_HEIGHT - 1);
    for (let x = 0; x < CLOUD_TEXTURE_WIDTH; x++) {
      const u = x / CLOUD_TEXTURE_WIDTH;
      let n = 0;
      for (const o of octaves) n += sampleLattice(o, u, v) * o.weight;
      n /= totalWeight;

      // Carve sparse, soft-edged clumps out of the noise field instead
      // of full overcast — this range leaves most of the sky clear,
      // closer to a real cloud-fraction map than a flat haze would be.
      const t = THREE.MathUtils.clamp((n - 0.55) / (0.85 - 0.55), 0, 1);
      const density = t * t * (3 - 2 * t);

      const i = (y * CLOUD_TEXTURE_WIDTH + x) * 4;
      image.data[i] = 255;
      image.data[i + 1] = 255;
      image.data[i + 2] = 255;
      // Cap below full opacity — even the densest clump lets a little
      // of the surface underneath show through, like a real satellite view.
      image.data[i + 3] = Math.round(density * 235);
    }
  }
  ctx.putImageData(image, 0, 0);
}

function useCloudTexture(): THREE.CanvasTexture {
  return useMemo(() => {
    const canvas = document.createElement('canvas');
    paintCloudCanvas(canvas);
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping; // seamless at the longitude seam
    texture.needsUpdate = true;
    return texture;
  }, []);
}

export default function Clouds() {
  const meshRef = useRef<THREE.Mesh>(null);
  const cloudTexture = useCloudTexture();

  useEffect(() => () => cloudTexture.dispose(), [cloudTexture]);

  useFrame((_state, delta) => {
    if (!meshRef.current) return;
    // Earth.tsx's surface mesh never rotates on its own — Marker
    // positions (Globe.tsx) are computed once in world space, and
    // would visibly drift away from the texture's continents if the
    // globe itself spun underneath them. So "rotating slightly faster
    // than Earth's surface mesh" (which is 0 rad/s) just means: rotate
    // at all. Slow and continuous, not tied to autoRotate/camera state.
    meshRef.current.rotation.y += delta * 0.012;
  });

  return (
    <mesh ref={meshRef} scale={1.01}>
      <sphereGeometry args={[EARTH_RADIUS, 64, 64]} />
      <meshStandardMaterial
        map={cloudTexture}
        transparent
        depthWrite={false}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}
