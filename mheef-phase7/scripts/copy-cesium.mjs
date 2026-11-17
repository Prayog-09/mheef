// Copies CesiumJS's static runtime files (web workers, sky box and other
// assets, widget styles) into public/cesium so Vite serves them in dev and
// includes them in the production build. Runs before `dev` and `build`.
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'node_modules', 'cesium', 'Build', 'Cesium');
const target = join(root, 'public', 'cesium');

if (!existsSync(source)) {
  console.error('copy-cesium: node_modules/cesium not found — run `npm install` first.');
  process.exit(1);
}

rmSync(target, { recursive: true, force: true });
mkdirSync(target, { recursive: true });
for (const dir of ['Workers', 'ThirdParty', 'Assets', 'Widgets']) {
  cpSync(join(source, dir), join(target, dir), { recursive: true });
}
