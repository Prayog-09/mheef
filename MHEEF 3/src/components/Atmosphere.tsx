import { useMemo } from 'react';
import * as THREE from 'three';
import { EARTH_RADIUS } from './Earth';

// Phase 6 — two-layer fake-scattering atmosphere.
//
// Still not a physically-based atmosphere model (explicitly out of
// scope for this phase) — just two of the original's fresnel rim-glow
// passes layered at different scales/colors/falloff rates so the limb
// reads as having depth instead of one flat glow:
//   - "haze" layer — denser, warm-tinted, closer to the surface. A
//     loose stand-in for Mie scattering (larger aerosol/dust particles
//     scatter most wavelengths fairly evenly, with a warm bias).
//   - "sky" layer — softer, blue-shifted, sits farther out and fades
//     out faster as you move away from the grazing limb. A stand-in
//     for Rayleigh scattering (small air molecules scatter blue
//     wavelengths preferentially — why the sky reads blue at all).
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

// rimBias/rimPower shape the falloff curve (lower power = broader and
// denser, higher power = narrower and faster-fading); `intensity` caps
// each layer's peak opacity so additive blending lets them combine
// instead of each one trying to be the brightest thing on screen.
const fragmentShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  uniform vec3 glowColor;
  uniform float rimBias;
  uniform float rimPower;
  uniform float intensity;

  void main() {
    vec3 viewDir = normalize(-vViewPosition);
    float rim = pow(clamp(rimBias - dot(vNormal, viewDir), 0.0, 1.0), rimPower);
    gl_FragColor = vec4(glowColor, clamp(rim * intensity, 0.0, 1.0));
  }
`;

interface AtmosphereLayerProps {
  scale: number;
  color: string;
  rimBias: number;
  rimPower: number;
  intensity: number;
}

function AtmosphereLayer({ scale, color, rimBias, rimPower, intensity }: AtmosphereLayerProps) {
  const uniforms = useMemo(
    () => ({
      glowColor: { value: new THREE.Color(color) },
      rimBias: { value: rimBias },
      rimPower: { value: rimPower },
      intensity: { value: intensity },
    }),
    [color, rimBias, rimPower, intensity]
  );

  return (
    <mesh scale={scale}>
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

export default function Atmosphere() {
  return (
    <>
      {/* Inner haze — Mie stand-in: denser, warm-tinted, broad falloff
          (low rimPower) so it reads across more of the limb. */}
      <AtmosphereLayer scale={1.05} color="#ffd9a8" rimBias={0.55} rimPower={2.2} intensity={0.55} />
      {/* Outer sky — Rayleigh stand-in: softer, blue-shifted, sits
          farther out and fades faster (higher rimPower) right at the
          grazing edge instead of spreading broadly like the haze. */}
      <AtmosphereLayer scale={1.16} color="#5fc9ff" rimBias={0.7} rimPower={4.2} intensity={0.95} />
    </>
  );
}
