import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

// Known gotcha: these are fetched by the user's browser at runtime, not by
// this build step, so they need a CORS-friendly host. threejs.org's example
// assets serve permissive CORS headers and are commonly used for this exact
// purpose. If you swap to self-hosted textures, drop them in /public/textures
// and reference them as '/textures/...' instead.
const EARTH_COLOR_MAP_URL = 'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg';
const EARTH_NORMAL_MAP_URL = 'https://threejs.org/examples/textures/planets/earth_normal_2048.jpg';

export const EARTH_RADIUS = 2;

export default function Earth() {
  const [colorMap, normalMap] = useLoader(THREE.TextureLoader, [
    EARTH_COLOR_MAP_URL,
    EARTH_NORMAL_MAP_URL,
  ]);

  return (
    <mesh>
      <sphereGeometry args={[EARTH_RADIUS, 64, 64]} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        normalScale={new THREE.Vector2(0.85, 0.85)}
        roughness={0.95}
        metalness={0}
      />
    </mesh>
  );
}
