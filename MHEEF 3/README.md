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
| 3D globe | react-three-fiber + drei (Three.js under the hood) |
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

No environment variables or API keys are required — all facility data is
bundled at build time from local TypeScript files.

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
    │   ├── Atmosphere.tsx          # Fresnel/rim-light glow shell around the Earth mesh
    │   ├── Earth.tsx                # Textured sphere + EARTH_RADIUS constant
    │   ├── FilterPanel.tsx          # Topic/status filter chips — inline panel (desktop), modal (mobile)
    │   ├── Globe.tsx                # Canvas, lighting, stars, marker list, camera rig, a11y facility list
    │   ├── Marker.tsx                # Per-facility glowing/pulsing marker + hover tooltip
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
        ├── geo.ts                    # lat/lng → Vector3 on the sphere
        └── search.ts                 # Fuse.js singleton over the facility dataset
```

## Known gotchas

- **Earth textures are fetched at runtime** from `threejs.org`'s example
  asset CDN, not bundled. If that host ever becomes unavailable, swap the
  URLs in `Earth.tsx` for self-hosted files under `/public/textures/`.
- **Texture seam**: if you swap the color/normal map for a different
  source image, the antimeridian may land in a slightly different spot on
  the new texture's UVs — see the comment in `utils/geo.ts` before
  adjusting marker positions to compensate.
- The main JS bundle is dominated by Three.js/react-three-fiber (~340 kB
  gzipped) — expected for any WebGL globe and out of scope for this pass;
  the Phase 5 code-splitting targeted the side-panel tabs specifically,
  which now load as separate chunks.

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
