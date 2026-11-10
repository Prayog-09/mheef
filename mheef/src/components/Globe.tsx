import { Suspense, useEffect, useMemo, useRef } from 'react';
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

  const handleSelect = (facility: FacilityStub) => {
    setSelectedFacilityId(facility.id);
  };

  return (
    <div className="absolute inset-0">
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
