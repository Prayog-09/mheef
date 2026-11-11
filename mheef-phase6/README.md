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
| Framework | React 18 + TypeScript + Vite |
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
npm run dev       # starts the Vite dev server, prints a localhost URL
```

Other scripts:

```bash
npm run build      # type-checks (tsc -b) then builds a production bundle to dist/
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
2. Locally: copy `.env.example` to `.env.local` and paste the token in.
3. For the published site: store it as a GitHub repository variable named
   `CESIUM_ION_TOKEN` (Settings → Secrets and variables → Actions →
   Variables), then re-run the deploy workflow.

## Folder structure

```
mheef/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
│
└── src/
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    ├── vite-env.d.ts
    │
    ├── components/
    │   ├── FilterPanel.tsx          # Topic/status filter chips — inline panel (desktop), modal (mobile)
    │   ├── Globe.tsx                # Cesium viewer, imagery layers, markers, camera, a11y facility list
    │   ├── SearchDropdown.tsx       # Fuzzy-search result list under the TopBar input
    │   ├── StatusBadge.tsx          # Active / Historic / Planned pill
    │   ├── TopBar.tsx                # Title + search input, wired to Fuse.js
    │   │
    │   └── SidePanel/
    │       ├── SidePanel.tsx        # Slide-in (desktop) / bottom-sheet (mobile) container, focus trap
    │       ├── SidePanelHeader.tsx  # Name, status, country, founded year, coordinates
    │       ├── TabBar.tsx           # Roving-tabindex tab list with arrow-key navigation
    │       └── tabs/
    │           ├── OverviewTab.tsx
    │           ├── HistoryTab.tsx
    │           ├── ExperimentsTab.tsx
    │           ├── KeyResultsTab.tsx
    │           ├── ImportantPeopleTab.tsx
    │           └── ReadMoreTab.tsx
    │
    ├── data/
    │   └── facilities.ts            # 20 flagship facilities, fully typed
    │
    ├── hooks/
    │   └── useMediaQuery.ts         # Responsive breakpoint hook (Phase 5)
    │
    ├── store/
    │   └── useGlobeStore.ts         # Zustand: selection, search query, active filters
    │
    ├── types/
    │   └── facility.ts              # Facility / Experiment / KeyResult / Scientist / topic types
    │
    └── utils/
        ├── filters.ts                # facilityMatchesFilters — OR within a group, AND across groups
        └── search.ts                 # Fuse.js singleton over the facility dataset
```

## Known gotchas

- **Cesium's runtime files** (web workers, sky box, widget styles) are
  copied from `node_modules/cesium` into `public/cesium` by
  `scripts/copy-cesium.mjs`, which runs automatically before `npm run dev`
  and `npm run build`. That folder is generated and not committed.
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
