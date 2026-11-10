import { useMemo } from 'react';
import * as THREE from 'three';
import { EARTH_RADIUS } from './Earth';

// Classic rim-light / fresnel glow: intensity rises as the surface normal
// turns away from the camera, faded with an additive, backside-only,
// depth-unwritten material so it reads as a soft halo rather than a hard
// shell.
const vertexShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = viewPosition.xyz;
    gl_Position = projectionMatrix * viewPosition;
  }
`;

const fragmentShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  uniform vec3 glowColor;

  void main() {
    vec3 viewDir = normalize(-vViewPosition);
    float rim = pow(0.65 - dot(vNormal, viewDir), 3.0);
    gl_FragColor = vec4(glowColor, clamp(rim, 0.0, 1.0));
  }
`;

export default function Atmosphere() {
  const uniforms = useMemo(
    () => ({
      glowColor: { value: new THREE.Color('#22d3ee') },
    }),
    []
  );

  return (
    <mesh scale={1.12}>
      <sphereGeometry args={[EARTH_RADIUS, 64, 64]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        blending={THREE.AdditiveBlending}
        side={THREE.BackSide}
        depthWrite={false}
      />
    </mesh>
  );
}
