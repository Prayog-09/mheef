import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { EARTH_RADIUS, TEXTURE_BASE } from './Earth';

// Phase 7 — cloud layer from a real cloud-cover image.
//
// Phase 6 painted clouds procedurally from value noise, which read as a
// few large grey smears that hid the map. This uses the self-hosted
// three.js example cloud texture (alpha = cloud density) instead, kept
// deliberately faint: MHEEF is an atlas, so coastlines and markers must
// stay readable through the cloud layer.
const CLOUD_MAP_URL = `${TEXTURE_BASE}earth_clouds_1024.png`;

export default function Clouds() {
  const meshRef = useRef<THREE.Mesh>(null);
  const cloudMap = useLoader(THREE.TextureLoader, CLOUD_MAP_URL);

  useFrame((_state, delta) => {
    if (!meshRef.current) return;
    // Earth.tsx's surface mesh never rotates on its own — Marker
    // positions (Globe.tsx) are computed once in world space, and
    // would visibly drift away from the texture's continents if the
    // globe itself spun underneath them. Only the cloud shell drifts.
    meshRef.current.rotation.y += delta * 0.012;
  });

  return (
    <mesh ref={meshRef} scale={1.008}>
      <sphereGeometry args={[EARTH_RADIUS, 64, 64]} />
      <meshStandardMaterial
        map={cloudMap}
        transparent
        opacity={0.4}
        depthWrite={false}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}
