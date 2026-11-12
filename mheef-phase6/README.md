# MHEEF — Mapping High Energy Experimental Facilities

An interactive 3D atlas of the world's high-energy physics laboratories.
A dark, deep-space globe rotates slowly at the center; glowing markers sit
on every flagship facility — CERN, Fermilab, IceCube, LIGO, and 16 others.
Click a marker (or search for one) and the camera flies in while a side
panel slides open with that facility's overview, history, experiments, key
results, important people, and further reading.

The aesthetic goal throughout has been "museum exhibit / instrument panel,"
not a game — slow idle rotation, calm fly-to camera moves, gentle marker
pulses, no bounce.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Astro (static pages) with React 18 + TypeScript for the interactive globe |
| 3D globe | CesiumJS, with NASA Blue Marble imagery (GIBS) and optional Cesium ion imagery and terrain |
| Styling | Tailwind CSS |
| Motion | Framer Motion |
| State | Zustand (selected facility, search query, active filters) |
| Search | Fuse.js (fuzzy match on name / country / experiments / topics) |
| Icons | lucide-react |
| Data | Static, typed TypeScript files (`src/data/facilities.ts`) — no backend |

## Running it locally

```bash
npm install
npm run dev       # starts the Astro dev server at http://localhost:4321/mheef/
```

Other scripts:

```bash
npm run build      # builds the static site to dist/
npm run preview    # serves the production build locally
```

No API key is required: by default the globe uses NASA Blue Marble
imagery, which is public domain and needs no account.

### Optional: Cesium ion imagery and terrain

With a Cesium ion access token, zooming in switches from Blue Marble to
high-resolution aerial imagery and 3D terrain, so a facility can be viewed
at site scale.

1. Create a token at <https://ion.cesium.com/tokens> with only the
   `assets:read` scope. Under "Allowed URLs", restrict it to the site's
   address — the token is visible to anyone who loads the page.
2. Locally: copy `.env.example` to `.env.local` and paste the token in
   (the variable is `PUBLIC_CESIUM_ION_TOKEN`).
3. For the published site: store it as a GitHub repository variable named
   `CESIUM_ION_TOKEN` (Settings → Secrets and variables → Actions →
   Variables), then re-run the deploy workflow.

## Pages

| Address | What it is |
|---|---|
| `/` | The interactive globe. `/?facility=cern` opens it on a facility. |
| `/facilities/` | A list of every facility |
| `/facilities/<id>/` | One static page per facility, generated from the dataset |

Facility pages are plain HTML built from `src/data/facilities.ts`, so they
load without the globe, can be linked to and are indexable by search
engines. Adding a facility to the dataset adds its page automatically.

## The dataset

Everything on the site comes from `src/data/facilities.ts`; the shape of a
record is defined in `src/types/facility.ts`.

- Each facility has a `type` (accelerator laboratory, underground
  laboratory, neutrino observatory and so on), which sets its marker
  colour and drives the type filter.
- Any history entry, experiment, key result or person can carry
  `sources`: a list of `{ label, url }` references shown beneath it.
  Prefer a DOI or the institution's own page.
- `reviewed: 'YYYY-MM-DD'` records when someone working in the field last
  checked the whole record. Leave it out until that has happened.

`npm run validate` checks the dataset and runs automatically before every
build. Structural mistakes (duplicate ids, coordinates off the globe,
malformed links, unknown topics) fail the build. It also prints how many
facts cite a source and how many facilities have been reviewed.

## Folder structure

```
mheef-phase6/
├── astro.config.mjs                 # Site address, base path, integrations
├── scripts/copy-cesium.mjs          # Copies Cesium's runtime files into public/
├── scripts/validate-data.ts         # Checks the dataset before every build
│
└── src/
    ├── App.tsx                      # The globe app (React), mounted on the home page
    ├── cesiumBase.ts                # Tells Cesium where its runtime files live
    ├── index.css
    │
    ├── layouts/
    │   └── Base.astro               # <head>, site header and footer
    │
    ├── pages/
    │   ├── index.astro              # Globe
    │   ├── 404.astro
    │   └── facilities/
    │       ├── index.astro          # All facilities
    │       └── [id].astro           # One page per facility
    │
    ├── components/
    │   ├── FilterPanel.tsx          # Topic/status filter chips
    │   ├── Globe.tsx                # Cesium viewer, imagery layers, markers, camera
    │   ├── SearchDropdown.tsx       # Fuzzy-search result list
    │   ├── StatusBadge.tsx          # Active / Historic / Planned pill
    │   ├── TopBar.tsx               # Title, link to all facilities, search
    │   └── SidePanel/               # Slide-in facility panel and its tabs
    │
    ├── data/facilities.ts           # The dataset
    ├── hooks/useMediaQuery.ts
    ├── store/useGlobeStore.ts       # Zustand: selection, search query, filters
    ├── types/facility.ts
    └── utils/
        ├── facility.ts              # Shared formatting and status styles
        ├── filters.ts               # Filter matching
        ├── paths.ts                 # Base-path-aware internal links
        └── search.ts                # Fuse.js index
```

## Known gotchas

- **Cesium's runtime files** (web workers, sky box, widget styles) are
  copied from `node_modules/cesium` into `public/cesium` by
  `scripts/copy-cesium.mjs`, which runs automatically before `npm run dev`
  and `npm run build`. That folder is generated and not committed.
- **The site lives under `/mheef`** on GitHub Pages. Internal links must
  go through `withBase()` in `src/utils/paths.ts`; a plain `/facilities/…`
  link would break. For a custom domain, change `site` and `base` in
  `astro.config.mjs`.
- **Blue Marble tiles are streamed** from NASA's GIBS service, so the
  detailed imagery needs a network connection. A low-resolution Natural
  Earth texture bundled with Cesium is always drawn underneath, so the
  globe still appears offline.
- **GIBS uses an unusual tile grid** (288°-wide level-0 tiles). See the
  comment on `createBlueMarbleProvider` in `Globe.tsx` before changing the
  imagery source.
- **Bundle size**: CesiumJS is about 1.1 MB gzipped. It lives in the
  lazily loaded `Globe` chunk, so the title, search and filters appear
  before the globe has downloaded.
- The Inter font is bundled via `@fontsource-variable/inter`.

## Future extensions

Deliberately cut from this build to keep every phase shippable. The
architecture (typed local data, Zustand store, swappable Marker/SidePanel
components) leaves room to add these without a rewrite:

- **Real backend** — swap the static `src/data/facilities.ts` for a
  Supabase/Postgres-backed API; the `Facility` type already models the
  relationships a real schema would need.
- **Admin dashboard** — a non-coder-friendly CMS for adding/editing
  facilities instead of hand-writing TypeScript objects.
- **Knowledge graph view** — a D3.js force-directed graph per facility
  (Facility → Experiments → Key Results → People), reachable from a "View
  Connections" button in the side panel.
- **Timeline scrub mode** — a year slider (1950–2026) over the globe that
  fades markers in/out by founding year, so the HEP map visibly "grows."
- **Earth-arc connections** — glowing great-circle arcs from a selected
  experiment to its named partner institutions (needs a
  `collaborators: string[]` field added to `Experiment`).
- **Individual scientist pages** — promote "Important People" entries from
  inert cards into their own routed pages with a fuller biography.
- **VR support, live experiment status, satellite overlays** — the
  original source material's full vision; out of scope for a mini-project
  but compatible with the current component boundaries.
