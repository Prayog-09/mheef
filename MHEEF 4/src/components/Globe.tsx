import { Component, Suspense, useCallback, useEffect, useMemo, useRef } from 'react';
import type { ReactNode } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import Earth, { EARTH_RADIUS } from './Earth';
import Atmosphere from './Atmosphere';
import Clouds from './Clouds';
import Marker from './Marker';
import type { MarkerHighlightState } from './Marker';
import { useGlobeStore } from '../store/useGlobeStore';
import type { FacilityStub } from '../types/facility';
import { facilities } from '../data/facilities';
import { latLngToVector3 } from '../utils/geo';
import { facilityMatchesFilters } from '../utils/filters';

// ─── MilkyWaySky ────────────────────────────────────────────────────────────

// Phase 6 — 360° Milky Way-style sky background, replacing drei's <Stars>
// particle field.
//
// CORRECTION (post-deploy): this originally hot-linked a NASA SVS star map
// JPG over HTTPS, set as scene.background via THREE.TextureLoader. NASA
// media is genuinely public domain and the file is genuinely real, but the
// build sandbox this was written in has its network egress allowlisted to
// package registries only — there was no way to actually confirm
// svs.gsfc.nasa.gov sends the Access-Control-Allow-Origin header WebGL
// texture loading needs. It doesn't (or at least didn't reliably): the
// load failed in the browser, and because useLoader() throws a real
// rejection (not just a Suspense-style "still loading") with no error
// boundary above it in the tree, that one failed network request crashed
// the entire Canvas to a blank black screen — not a graceful "sky missing"
// degradation, the whole scene.
//
// Rather than re-guess at a different external host and risk the same
// failure mode again, this now paints a stylized starfield + galactic-band
// procedurally onto a <canvas> — the exact same reasoning Clouds.tsx
// already uses one file over: zero network dependency, zero CORS surface,
// zero bytes added to the texture budget. It's not a real astrophotograph
// the way the NASA map was, but it's a much safer default for something
// the whole app's visibility depends on. If you want the literal NASA
// image back, self-host it under /public/textures (same fallback this
// project's other texture comments already point to) so it's served from
// your own origin instead of a third-party host of unknown CORS policy.
const MILKY_WAY_WIDTH = 2048;
const MILKY_WAY_HEIGHT = 1024;

/** Same tiny deterministic PRNG as Clouds.tsx, separately seeded — keeps the
 *  generated sky stable across reloads without sharing state with clouds. */
function createSkyRng(seed: number) {
  let state = seed % 2147483647;
  if (state <= 0) state += 2147483646;
  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

function paintMilkyWayCanvas(canvas: HTMLCanvasElement) {
  canvas.width = MILKY_WAY_WIDTH;
  canvas.height = MILKY_WAY_HEIGHT;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.fillStyle = '#02030a';
  ctx.fillRect(0, 0, MILKY_WAY_WIDTH, MILKY_WAY_HEIGHT);

  const rng = createSkyRng(20260630);

  // Galactic-plane band: a soft horizontal glow, brightest at vertical
  // center and fading toward the poles, with mottled dust-colored clumps
  // breaking up the gradient so it doesn't read as a flat stripe.
  const bandCenterY = MILKY_WAY_HEIGHT * 0.52;
  const bandHalfHeight = MILKY_WAY_HEIGHT * 0.16;
  const bandGradient = ctx.createLinearGradient(
    0,
    bandCenterY - bandHalfHeight * 2,
    0,
    bandCenterY + bandHalfHeight * 2
  );
  bandGradient.addColorStop(0, 'rgba(120, 140, 200, 0)');
  bandGradient.addColorStop(0.5, 'rgba(150, 160, 210, 0.16)');
  bandGradient.addColorStop(1, 'rgba(120, 140, 200, 0)');
  ctx.fillStyle = bandGradient;
  ctx.fillRect(0, bandCenterY - bandHalfHeight * 2, MILKY_WAY_WIDTH, bandHalfHeight * 4);

  for (let i = 0; i < 700; i++) {
    const x = rng() * MILKY_WAY_WIDTH;
    const y = bandCenterY + (rng() - 0.5) * bandHalfHeight * 2.4;
    const r = 10 + rng() * 36;
    const alpha = 0.02 + rng() * 0.05;
    ctx.fillStyle = `rgba(200, 190, 170, ${alpha})`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Stars: denser inside the band, sparser outside — a handful of larger,
  // brighter points stand in for naked-eye-bright foreground stars against
  // a much larger field of faint background ones.
  const starCount = 5000;
  for (let i = 0; i < starCount; i++) {
    const x = rng() * MILKY_WAY_WIDTH;
    const y = rng() * MILKY_WAY_HEIGHT;
    const distFromBand = Math.abs(y - bandCenterY) / bandHalfHeight;
    if (distFromBand > 1.5 && rng() > 0.3) continue; // thin out the field away from the band

    const brightness = rng();
    const size = brightness > 0.97 ? 1.6 : brightness > 0.85 ? 1.1 : 0.6;
    const alpha = 0.25 + brightness * 0.75;
    const tint = 200 + Math.round(rng() * 55); // slight blue/white variance
    ctx.fillStyle = `rgba(${tint}, ${tint}, 255, ${alpha})`;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function useMilkyWayTexture(): THREE.CanvasTexture {
  return useMemo(() => {
    const canvas = document.createElement('canvas');
    paintMilkyWayCanvas(canvas);
    const texture = new THREE.CanvasTexture(canvas);
    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    texture.needsUpdate = true;
    return texture;
  }, []);
}

function MilkyWaySky() {
  const texture = useMilkyWayTexture();
  const { scene } = useThree();

  useEffect(() => {
    scene.background = texture;
    return () => {
      texture.dispose();
      // Restore the solid fallback color (set eagerly below, outside
      // Suspense) rather than leaving scene.background pointed at a
      // texture that's about to be disposed.
      scene.background = new THREE.Color('#03050a');
    };
  }, [texture, scene]);

  return null;
}

// ─── SceneErrorBoundary ─────────────────────────────────────────────────────

// Phase 6 hardening, added after the NASA-texture incident above: a single
// failed/blocked async resource inside the Suspense block below (a texture
// load, a CORS-tainted canvas readback, anything) used to take the entire
// Canvas down to a blank black screen with no on-screen indication of why,
// because nothing upstream was catching the thrown error. This is a plain
// React error boundary — works the same way inside r3f's Canvas as it does
// in a normal DOM tree — so a future bad texture URL degrades to "the globe
// mesh is missing" instead of "the whole page is black."
class SceneErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error('Globe scene failed to render one of its Suspense children:', error);
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

// ─── CameraRig ────────────────────────────────────────────────────────────────

// Phase 6 bug fix: the overview position/target the camera flies back to
// once a facility's side panel closes. Module-level and never mutated
// (only ever `.clone()`d into a fresh flightRef target below), so it's
// safe to share across renders/instances — same reasoning as Marker.tsx's
// COLOR_ACTIVE/COLOR_DIM constants.
const DEFAULT_CAMERA_POSITION = new THREE.Vector3(0, 0, 5.5);
const DEFAULT_CAMERA_TARGET = new THREE.Vector3(0, 0, 0);

/**
 * Owns OrbitControls and animates the camera toward a selected facility.
 * Reads `selectedFacilityId` from the Zustand store rather than props, so
 * Phase 3's side-panel and Phase 4's search dropdown can trigger the same
 * fly-to without this component changing.
 */
function CameraRig() {
  const { camera } = useThree();
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const selectedFacilityId = useGlobeStore((s) => s.selectedFacilityId);
  const flightRef = useRef<{ targetPos: THREE.Vector3; targetLook: THREE.Vector3 } | null>(null);

  useEffect(() => {
    // Phase 6 bug fix: the original version of this effect only set a
    // flight target when `selectedFacilityId` was truthy and returned
    // early otherwise — so `controls.target` was never moved back to
    // the globe's center when the panel closed. autoRotate and manual
    // drag would then orbit around the last-selected facility's stale
    // surface point forever (the "frozen, then snaps back" feeling).
    // Both branches below now go through the exact same lerp-based
    // flightRef/useFrame machinery — just toward a different target —
    // so "fly back to overview" is the same animation in reverse, not
    // a separate instant-snap special case.
    if (selectedFacilityId) {
      const facility = facilities.find((f) => f.id === selectedFacilityId);
      if (!facility) return;

      const surfacePos = latLngToVector3(facility.lat, facility.lng, EARTH_RADIUS);
      flightRef.current = {
        targetPos: surfacePos.clone().multiplyScalar(1.9),
        targetLook: surfacePos,
      };
    } else {
      flightRef.current = {
        targetPos: DEFAULT_CAMERA_POSITION.clone(),
        targetLook: DEFAULT_CAMERA_TARGET.clone(),
      };
    }

    if (controlsRef.current) {
      controlsRef.current.autoRotate = false;
    }
  }, [selectedFacilityId]);

  useFrame(() => {
    const controls = controlsRef.current;
    const flight = flightRef.current;
    if (!flight || !controls) return;

    camera.position.lerp(flight.targetPos, 0.06);
    controls.target.lerp(flight.targetLook, 0.06);
    controls.update();

    if (camera.position.distanceTo(flight.targetPos) < 0.01) {
      flightRef.current = null;
      controls.autoRotate = true;
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enableDamping
      dampingFactor={0.08}
      autoRotate
      autoRotateSpeed={0.4}
      minDistance={2.6}
      maxDistance={9}
      rotateSpeed={0.5}
      zoomSpeed={0.6}
    />
  );
}

// ─── Globe ────────────────────────────────────────────────────────────────────

export default function Globe() {
  const setSelectedFacilityId = useGlobeStore((s) => s.setSelectedFacilityId);
  // Phase 4: read active filters so we can dim/highlight markers below.
  const activeFilters = useGlobeStore((s) => s.activeFilters);

  // Marker positions are stable — the dataset is static, so no deps needed.
  const markers = useMemo(
    () =>
      facilities.map((facility) => ({
        facility,
        position: latLngToVector3(facility.lat, facility.lng, EARTH_RADIUS * 1.002),
      })),
    []
  );

  // Phase 4: compute the set of facility IDs that pass the current filters.
  // null  → no filters active, every marker renders as 'normal'.
  // Set   → filters active; markers in the set are 'match', others 'dim'.
  const matchingIds = useMemo<Set<string> | null>(() => {
    if (activeFilters.topics.length === 0 && activeFilters.statuses.length === 0) {
      return null;
    }
    const set = new Set<string>();
    for (const facility of facilities) {
      if (facilityMatchesFilters(facility, activeFilters)) {
        set.add(facility.id);
      }
    }
    return set;
  }, [activeFilters]);

  // Phase 5: useCallback so this reference is stable across re-renders —
  // otherwise every Globe re-render (e.g. a filter toggle) would hand all
  // 20 memoized Markers a "new" onSelect prop and defeat the memo() below.
  const handleSelect = useCallback(
    (facility: FacilityStub) => {
      setSelectedFacilityId(facility.id);
    },
    [setSelectedFacilityId]
  );

  return (
    <div className="absolute inset-0">
      {/* Phase 5 — accessibility: the globe is a WebGL canvas, so it has no
          native keyboard or screen-reader path to "click a marker." This
          list mirrors every facility as a real, focusable button so
          keyboard and screen-reader users can open the same side panel a
          mouse click on a marker opens. Visually hidden until a list item
          receives focus (e.g. via Tab), so it doesn't clutter the sighted,
          mouse-driven experience. */}
      <nav
        aria-label="Facilities"
        className="sr-only focus-within:not-sr-only focus-within:absolute focus-within:left-4 focus-within:top-20 focus-within:z-30 focus-within:max-h-[60vh] focus-within:w-64 focus-within:overflow-y-auto focus-within:rounded-lg focus-within:border focus-within:border-accent-400/30 focus-within:bg-black/90 focus-within:p-2 focus-within:backdrop-blur-md"
      >
        <ul>
          {facilities.map((facility) => (
            <li key={facility.id}>
              <button
                onClick={() => handleSelect(facility)}
                className="block w-full rounded px-2 py-1.5 text-left text-xs text-white/80 transition-colors hover:bg-accent-400/10 focus-visible:bg-accent-400/10"
              >
                {facility.name} <span className="text-white/45">— {facility.country}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
        {/* Eager fallback — overwritten the instant MilkyWaySky's effect
            runs (which is synchronous now, not a network fetch), but keeps
            the very first frame non-black and is also what SceneErrorBoundary
            leaves visible if Earth/Atmosphere/Clouds fail to render. */}
        <color attach="background" args={['#03050a']} />
        {/* Phase 6: nudged up from 0.5 so the unlit hemisphere reads as
            "night side," not pure black — same reasoning Earth's day/night
            terminator gets from real Earth photography. */}
        <ambientLight intensity={0.65} />
        <directionalLight position={[5, 3, 5]} intensity={1.4} />

        <SceneErrorBoundary>
          <Suspense fallback={null}>
            <Earth />
            <Atmosphere />
            <Clouds />
            <MilkyWaySky />
          </Suspense>
        </SceneErrorBoundary>

        {markers.map(({ facility, position }) => {
          // Phase 4: resolve each marker's visual state from the filter set.
          const highlightState: MarkerHighlightState =
            matchingIds === null
              ? 'normal'
              : matchingIds.has(facility.id)
              ? 'match'
              : 'dim';

          return (
            <Marker
              key={facility.id}
              facility={facility}
              position={position}
              onSelect={handleSelect}
              highlightState={highlightState}
            />
          );
        })}

        <CameraRig />

        {/* Phase 6: bloom pass — tuned to catch only emissive/bright
            elements (currently just marker cores/halos, which render
            full-bright cyan via MeshBasicMaterial). luminanceThreshold is
            set high enough that Earth's lit hemisphere — even with the
            new ocean specular highlights — stays under it; only pixels
            close to full brightness (markers, and later any "active"
            facility) cross over and bleed light into their neighbors. */}
        <EffectComposer>
          <Bloom
            mipmapBlur
            luminanceThreshold={0.82}
            luminanceSmoothing={0.25}
            intensity={0.65}
            radius={0.55}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
