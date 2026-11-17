// Builds src/data/placeNames.json — the country, sea and city names drawn
// on the globe — from Natural Earth (public domain, naturalearthdata.com).
// Run it again only to refresh the names:
//
//   node scripts/build-place-names.ts <folder with the Natural Earth files>
//
// The folder must hold these GeoJSON files from
// github.com/nvkelso/natural-earth-vector/tree/master/geojson:
//   ne_50m_admin_0_countries, ne_50m_geography_marine_polys,
//   ne_50m_populated_places_simple
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

type Ring = [number, number][];
interface Feature {
  properties: Record<string, unknown>;
  geometry: { type: string; coordinates: unknown };
}

const folder = process.argv[2];
if (!folder) {
  console.error('Usage: node scripts/build-place-names.ts <folder>');
  process.exit(1);
}
const read = (name: string): Feature[] =>
  JSON.parse(readFileSync(join(folder, `${name}.geojson`), 'utf8')).features;

/** [kind, name, latitude, longitude, Natural Earth minimum zoom] */
type Place = [kind: 'ocean' | 'sea' | 'country' | 'capital' | 'city', name: string, lat: number, lng: number, minZoom: number];
const places: Place[] = [];
const round = (value: number) => Math.round(value * 100) / 100;

// ── Countries: Natural Earth's own label point ──
for (const { properties: p } of read('ne_50m_admin_0_countries')) {
  places.push(['country', String(p.NAME), round(Number(p.LABEL_Y)), round(Number(p.LABEL_X)), Number(p.MIN_LABEL)]);
}

// ── Oceans and seas: the point inside the largest polygon that lies
// furthest from its edge, so the name sits in open water. ──
function area(ring: Ring): number {
  let sum = 0;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    sum += (ring[j][0] - ring[i][0]) * (ring[j][1] + ring[i][1]);
  }
  return Math.abs(sum / 2);
}
function inside([x, y]: [number, number], ring: Ring): boolean {
  let hit = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit;
  }
  return hit;
}
function edgeDistance([x, y]: [number, number], rings: Ring[]): number {
  let best = Infinity;
  const cos = Math.cos((y * Math.PI) / 180);
  for (const ring of rings) {
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const [ax, ay] = ring[j];
      const [bx, by] = ring[i];
      const dx = (bx - ax) * cos;
      const dy = by - ay;
      const length = dx * dx + dy * dy;
      const t = length === 0 ? 0 : Math.max(0, Math.min(1, ((x - ax) * cos * dx + (y - ay) * dy) / length));
      const ex = (x - ax) * cos - t * dx;
      const ey = y - ay - t * dy;
      best = Math.min(best, ex * ex + ey * ey);
    }
  }
  return Math.sqrt(best);
}
function labelPoint(geometry: Feature['geometry']): [number, number] {
  const polygons = (geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.coordinates) as Ring[][];
  const largest = polygons.reduce((a, b) => (area(b[0]) > area(a[0]) ? b : a));
  const [outer, ...holes] = largest;
  const xs = outer.map((point) => point[0]);
  const ys = outer.map((point) => point[1]);
  const [minX, maxX, minY, maxY] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
  let best: [number, number] = [(minX + maxX) / 2, (minY + maxY) / 2];
  let bestDistance = -1;
  const steps = 60;
  for (let i = 0; i <= steps; i++) {
    for (let j = 0; j <= steps; j++) {
      const point: [number, number] = [minX + ((maxX - minX) * i) / steps, minY + ((maxY - minY) * j) / steps];
      if (!inside(point, outer) || holes.some((hole) => inside(point, hole))) continue;
      const distance = edgeDistance(point, largest);
      if (distance > bestDistance) [best, bestDistance] = [point, distance];
    }
  }
  return best;
}
for (const { properties: p, geometry } of read('ne_50m_geography_marine_polys')) {
  const [lng, lat] = labelPoint(geometry);
  const kind = p.featurecla === 'ocean' ? 'ocean' : 'sea';
  // name_en, so that "Golfo de California" reads "Gulf of California".
  places.push([kind, String(p.name_en ?? p.name), round(lat), round(lng), Number(p.min_label)]);
}

// ── Cities and towns ──
// Natural Earth spells cities as they are known locally, with accents
// (Zürich, São Paulo), which is kept. Its English-name column is not used:
// it holds some mismatches (Cuttack given as "Pochinki"). Only names that an
// English reader would not recognise are replaced here.
const ENGLISH_NAMES: Record<string, string> = { København: 'Copenhagen' };
for (const { properties: p } of read('ne_50m_populated_places_simple')) {
  const minZoom = Number(p.min_zoom);
  if (minZoom > 6) continue;
  const kind = Number(p.adm0cap) === 1 ? 'capital' : 'city';
  const name = String(p.name).replace(/\s+/g, ' ');
  places.push([kind, ENGLISH_NAMES[name] ?? name, round(Number(p.latitude)), round(Number(p.longitude)), minZoom]);
}

const out = join(import.meta.dirname, '../src/data/placeNames.json');
writeFileSync(out, `${JSON.stringify(places).replaceAll('],[', '],\n[')}\n`);
console.log(`Wrote ${places.length} place names to src/data/placeNames.json`);
