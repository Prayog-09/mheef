import { useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import type { FacilityStub } from '../types/facility';

// ─── Types ────────────────────────────────────────────────────────────────────

/**
 * Exported so Globe.tsx can annotate the computed value and TypeScript can
 * verify it against the Marker prop without an additional import chain.
 *
 * normal — no filters active; full brightness, standard pulse.
 * match  — passes current filters; brighter/faster pulse to draw the eye.
 * dim    — does not pass; muted color + opacity, pulse suppressed.
 */
export type MarkerHighlightState = 'normal' | 'match' | 'dim';

interface MarkerProps {
  facility: FacilityStub;
  position: THREE.Vector3;
  onSelect: (facility: FacilityStub) => void;
  highlightState: MarkerHighlightState;
}

// ─── Constants ────────────────────────────────────────────────────────────────

// Defined at module level so useFrame never allocates per render.
// Color.lerp() mutates the instance it's called on, so these targets
// are safe to share across all Marker instances.
const COLOR_ACTIVE = new THREE.Color('#22d3ee');
const COLOR_DIM = new THREE.Color('#3d6670');

// ─── Component ────────────────────────────────────────────────────────────────

export default function Marker({ facility, position, onSelect, highlightState }: MarkerProps) {
  const coreRef = useRef<THREE.Mesh>(null);
  const haloRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Orients the marker group so its local Y-axis points outward along the
  // sphere's radius — an extension point for a future pin/cone geometry.
  const outwardOrientation = useMemo(() => {
    const up = new THREE.Vector3(0, 1, 0);
    const outward = position.clone().normalize();
    return new THREE.Quaternion().setFromUnitVectors(up, outward);
  }, [position]);

  useFrame((state) => {
    if (!coreRef.current || !haloRef.current) return;

    const coreMat = coreRef.current.material as THREE.MeshBasicMaterial;
    const haloMat = haloRef.current.material as THREE.MeshBasicMaterial;
    const lerpT = 0.08; // slow enough to feel smooth, fast enough to feel responsive

    // ── Color transition ──
    const targetColor = highlightState === 'dim' ? COLOR_DIM : COLOR_ACTIVE;
    coreMat.color.lerp(targetColor, lerpT);
    haloMat.color.lerp(targetColor, lerpT);

    // ── Opacity transition ──
    const targetCoreOpacity = highlightState === 'dim' ? 0.15 : 1.0;
    const targetHaloOpacity =
      highlightState === 'dim'
        ? 0.06
        : highlightState === 'match'
        ? 0.55
        : 0.35;
    coreMat.opacity = THREE.MathUtils.lerp(coreMat.opacity, targetCoreOpacity, lerpT);
    haloMat.opacity = THREE.MathUtils.lerp(haloMat.opacity, targetHaloOpacity, lerpT);

    // ── Halo scale / pulse ──
    let targetScale: number;
    if (hovered) {
      targetScale = 1.6;
    } else if (highlightState === 'dim') {
      targetScale = 1.0; // no pulse when dimmed
    } else {
      // 'match' markers pulse faster and wider to draw the eye.
      const speed = highlightState === 'match' ? 3.2 : 2.5;
      const amp   = highlightState === 'match' ? 0.38 : 0.25;
      targetScale = 1 + Math.sin(state.clock.elapsedTime * speed) * amp;
    }
    haloRef.current.scale.setScalar(
      THREE.MathUtils.lerp(haloRef.current.scale.x, targetScale, 0.12)
    );
  });

  return (
    <group position={position} quaternion={outwardOrientation}>
      {/* Core dot — interactive hit target */}
      <mesh
        ref={coreRef}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(facility);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
      >
        <sphereGeometry args={[0.012, 16, 16]} />
        {/* Initial color/opacity — useFrame takes over immediately after mount */}
        <meshBasicMaterial color="#22d3ee" transparent opacity={1} />
      </mesh>

      {/* Halo — pulsing glow ring around the core */}
      <mesh ref={haloRef}>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.35} depthWrite={false} />
      </mesh>

      {/* Billboard tooltip — shown on hover regardless of highlight state */}
      {hovered && (
        <Html distanceFactor={8} center style={{ pointerEvents: 'none' }}>
          <div className="flex flex-col items-center whitespace-nowrap rounded-md border border-accent-400/30 bg-black/70 px-3 py-1.5 text-center backdrop-blur-sm">
            <span className="text-xs font-semibold uppercase tracking-wide text-white">
              {facility.name}
            </span>
            <span className="text-[10px] text-accent-300/70">{facility.country}</span>
          </div>
        </Html>
      )}
    </group>
  );
}
