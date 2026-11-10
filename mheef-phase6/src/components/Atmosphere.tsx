import { useMemo } from 'react';
import * as THREE from 'three';
import { EARTH_RADIUS } from './Earth';

// Phase 7 — atmosphere rewrite.
//
// The Phase 6 version drew two back-face shells whose alpha was
// `rimBias - dot(normal, viewDir)`. On a back face that dot product is
// always negative, so the expression clamped to 1 across the whole visible
// shell and the "glow" rendered as a solid opaque ring. Two layers now,
// each with a falloff that is correct for the faces it draws:
//   - halo  — back faces of a slightly larger shell. Brightest where the
//     shell meets Earth's silhouette, fading to exactly zero at the
//     shell's own outer edge, so there is no hard rim.
//   - limb  — front faces just above the surface. A thin blue fresnel
//     haze that brightens toward the edge of the disc.
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

// `facing` is |dot(normal, viewDir)|: 0 at the shell's silhouette, rising
// toward its centre. The halo normalises it by `limbFacing` — the value it
// reaches where the shell passes behind Earth's edge — so the visible band
// always spans 0..1 whatever the shell's scale.
const haloFragmentShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  uniform vec3 glowColor;
  uniform float limbFacing;
  uniform float falloff;
  uniform float intensity;

  void main() {
    vec3 viewDir = normalize(-vViewPosition);
    float facing = abs(dot(normalize(vNormal), viewDir));
    float glow = pow(clamp(facing / limbFacing, 0.0, 1.0), falloff);
    gl_FragColor = vec4(glowColor, glow * intensity);
  }
`;

const limbFragmentShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  uniform vec3 glowColor;
  uniform float falloff;
  uniform float intensity;

  void main() {
    vec3 viewDir = normalize(-vViewPosition);
    float facing = clamp(dot(normalize(vNormal), viewDir), 0.0, 1.0);
    // The smoothstep fades the haze out over the last sliver of the disc;
    // without it the grazing edge stacks with the halo into a hard bright
    // line that the bloom pass then exaggerates.
    float haze = pow(1.0 - facing, falloff) * smoothstep(0.0, 0.3, facing);
    gl_FragColor = vec4(glowColor, haze * intensity);
  }
`;

const HALO_SCALE = 1.12;
const LIMB_SCALE = 1.012;

function Halo() {
  const uniforms = useMemo(
    () => ({
      glowColor: { value: new THREE.Color('#4da3ff') },
      // Facing value where a shell of this scale crosses Earth's silhouette.
      limbFacing: { value: Math.sqrt(1 - 1 / (HALO_SCALE * HALO_SCALE)) },
      falloff: { value: 2.6 },
      intensity: { value: 0.42 },
    }),
    []
  );

  return (
    <mesh scale={HALO_SCALE}>
      <sphereGeometry args={[EARTH_RADIUS, 64, 64]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={haloFragmentShader}
        uniforms={uniforms}
        transparent
        blending={THREE.AdditiveBlending}
        side={THREE.BackSide}
        depthWrite={false}
      />
    </mesh>
  );
}

function Limb() {
  const uniforms = useMemo(
    () => ({
      glowColor: { value: new THREE.Color('#6fb8ff') },
      falloff: { value: 3.2 },
      intensity: { value: 0.5 },
    }),
    []
  );

  return (
    <mesh scale={LIMB_SCALE}>
      <sphereGeometry args={[EARTH_RADIUS, 64, 64]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={limbFragmentShader}
        uniforms={uniforms}
        transparent
        blending={THREE.AdditiveBlending}
        side={THREE.FrontSide}
        depthWrite={false}
      />
    </mesh>
  );
}

export default function Atmosphere() {
  return (
    <>
      <Limb />
      <Halo />
    </>
  );
}
