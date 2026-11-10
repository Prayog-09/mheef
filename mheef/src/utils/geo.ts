import * as THREE from 'three';

/**
 * Converts a latitude/longitude pair to a Vector3 on the surface of a
 * sphere of the given radius, using the same convention as the Earth
 * texture's UV mapping (texture seam at +/-180° longitude).
 *
 * NOTE (known gotcha): if you swap the Earth texture for a different
 * image, the longitude=0 meridian may land in a slightly different spot
 * on the new texture's UVs. If markers look horizontally offset from
 * their real-world location after a texture swap, adjust the `+ 180`
 * below rather than touching this function's callers.
 */
export function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return new THREE.Vector3(x, y, z);
}
