import { Suspense, useCallback, useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
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

// Phase 6 — 360° Milky Way HDRI background, replacing drei's <Stars>
// particle field.
//
// Source: NASA Scientific Visualization Studio, "Deep Star Maps 2020"
// (catalog #4851) — an equirectangular plate-carrée star map in celestial
// coordinates, built from the Hipparcos-2/Tycho-2/Gaia DR2 catalogs.
// 1024×512 JPG, ~70KB. NASA media is public domain; courtesy credit
// requested but not legally required: "NASA/Goddard Space Flight Center
// Scientific Visualization Studio."
//   https://svs.gsfc.nasa.gov/4851
// We confirmed this exact file (milkyway_2020_4k_print.jpg) is listed at
// the stated size on NASA's own catalog page above, but couldn't
// independently re-fetch the raw bytes from this build environment (its
// network egress is allowlisted to package registries only, not
// nasa.gov). Treat this the same way Phase 7 asks you to treat any photo
// you haven't personally opened in a browser yet: load the app and
// confirm the sky actually renders before you ship.
//
// This is a plain low-dynamic-range JPG, not a gain-mapped HDR JPG — so
// it's loaded manually via THREE.TextureLoader + scene.background rather
// than through drei's <Environment files="...jpg">, which routes .jpg
// through a gainmap loader expecting embedded XMP gainmap metadata this
// file doesn't have.
const MILKY_WAY_URL = 'https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004851/milkyway_2020_4k_print.jpg';

function MilkyWaySky() {
  const texture = useLoader(THREE.TextureLoader, MILKY_WAY_URL);
  const { scene } = useThree();

  useEffect(() => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.colorSpace = THREE.SRGBColorSpace;
    scene.background = texture;
    return () => {
      // Restore the solid fallback color (set eagerly below, outside
      // Suspense) rather than leaving scene.background pointed at a
      // texture that's about to be disposed.
      scene.background = new THREE.Color('#03050a');
    };
  }, [texture, scene]);

  return null;
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
        {/* Eager fallback — overwritten by MilkyWaySky's effect once the
            HDRI resolves, but keeps the scene non-black immediately and
            stays in place if the HDRI fetch ever fails outright. */}
        <color attach="background" args={['#03050a']} />
        {/* Phase 6: nudged up from 0.5 so the unlit hemisphere reads as
            "night side," not pure black — same reasoning Earth's day/night
            terminator gets from real Earth photography. */}
        <ambientLight intensity={0.65} />
        <directionalLight position={[5, 3, 5]} intensity={1.4} />

        <Suspense fallback={null}>
          <Earth />
          <Atmosphere />
          <Clouds />
          <MilkyWaySky />
        </Suspense>

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
