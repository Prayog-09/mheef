import { Component, Suspense, useCallback, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import type { ReactNode } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
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

// ─── StarField ──────────────────────────────────────────────────────────────

// Phase 7: the Phase 6 sky was a 2048px equirectangular canvas used as
// scene.background. At this camera's field of view only a few hundred of
// those pixels fill the screen, so its stars and dust clumps rendered as
// large blurred discs. Point-sprite stars stay sharp at any zoom and need
// no texture at all.
function StarField() {
  return <Stars radius={90} depth={50} count={4500} factor={3.2} saturation={0} fade speed={0} />;
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

// Phase 7: the overview distance depends on the viewport's aspect ratio.
// A fixed distance of 5.5 fits the globe in a landscape window but lets it
// overflow a portrait phone screen, where the horizontal field of view is
// the narrow one. FRAMED_RADIUS includes the atmosphere halo plus a margin.
const CAMERA_FOV = 45;
const MIN_OVERVIEW_DISTANCE = 5.5;
const FRAMED_RADIUS = EARTH_RADIUS * 1.18;
const DEFAULT_CAMERA_TARGET = new THREE.Vector3(0, 0, 0);

function overviewDistanceFor(aspect: number): number {
  const halfVertical = THREE.MathUtils.degToRad(CAMERA_FOV / 2);
  const halfHorizontal = Math.atan(Math.tan(halfVertical) * aspect);
  const fitDistance = FRAMED_RADIUS / Math.sin(Math.min(halfVertical, halfHorizontal));
  return Math.max(MIN_OVERVIEW_DISTANCE, fitDistance);
}

/**
 * Owns OrbitControls and animates the camera toward a selected facility.
 * Reads `selectedFacilityId` from the Zustand store rather than props, so
 * Phase 3's side-panel and Phase 4's search dropdown can trigger the same
 * fly-to without this component changing.
 */
function CameraRig() {
  const { camera, size } = useThree();
  const overviewDistance = overviewDistanceFor(size.width / size.height);
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const selectedFacilityId = useGlobeStore((s) => s.selectedFacilityId);
  const flightRef = useRef<{ targetPos: THREE.Vector3; targetLook: THREE.Vector3 } | null>(null);
  const hasFramedRef = useRef(false);

  // First frame: place the camera at the fitted overview distance directly,
  // so a phone doesn't open zoomed-in and then visibly pull back.
  useLayoutEffect(() => {
    if (hasFramedRef.current) return;
    hasFramedRef.current = true;
    camera.position.set(0, 0, overviewDistance);
  }, [camera, overviewDistance]);

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
        // Fly back along the camera's current direction rather than to a
        // fixed point, so closing a panel or rotating a phone doesn't swing
        // the globe round to the prime meridian.
        targetPos: camera.position.clone().setLength(overviewDistance),
        targetLook: DEFAULT_CAMERA_TARGET.clone(),
      };
    }

    if (controlsRef.current) {
      controlsRef.current.autoRotate = false;
    }
  }, [selectedFacilityId, overviewDistance, camera]);

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
      maxDistance={overviewDistance * 1.6}
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

      <Canvas camera={{ position: [0, 0, MIN_OVERVIEW_DISTANCE], fov: CAMERA_FOV }}>
        {/* Deep-space background colour; also what SceneErrorBoundary
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
          </Suspense>
        </SceneErrorBoundary>

        <StarField />

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
