import { Suspense, useCallback, useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import Earth, { EARTH_RADIUS } from './Earth';
import Atmosphere from './Atmosphere';
import Marker from './Marker';
import type { MarkerHighlightState } from './Marker';
import { useGlobeStore } from '../store/useGlobeStore';
import type { FacilityStub } from '../types/facility';
import { facilities } from '../data/facilities';
import { latLngToVector3 } from '../utils/geo';
import { facilityMatchesFilters } from '../utils/filters';

// ─── CameraRig ────────────────────────────────────────────────────────────────

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
    if (!selectedFacilityId) return;
    const facility = facilities.find((f) => f.id === selectedFacilityId);
    if (!facility) return;

    const surfacePos = latLngToVector3(facility.lat, facility.lng, EARTH_RADIUS);
    flightRef.current = {
      targetPos: surfacePos.clone().multiplyScalar(1.9),
      targetLook: surfacePos,
    };

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
        <color attach="background" args={['#03050a']} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 3, 5]} intensity={1.4} />

        <Suspense fallback={null}>
          <Earth />
          <Atmosphere />
        </Suspense>

        <Stars radius={80} depth={40} count={4000} factor={2} saturation={0} fade speed={0.4} />

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
      </Canvas>
    </div>
  );
}
