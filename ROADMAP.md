# MHEEF Roadmap — Phase 7 onward

**Mapping High Energy Experimental Facilities: from a working atlas to a
trusted reference**

This document is the plan of record. It is written so that a person or an
AI agent can pick up any task without other context: each task says what to
do, where, and how to know it is done. Read sections 1–4 before starting
any task, then go to the task's own section.

- Live site: https://prayog-09.github.io/mheef/
- Repository: https://github.com/Prayog-09/mheef
- Current app: `mheef-phase7/` (Astro + React + CesiumJS)
- Phase 6, as finished, is preserved as the git tag `phase-6`
  (`git checkout phase-6` to see it). Older folders (`mheef/`, `MHEEF 2–4/`,
  the `.zip` files) are earlier prototypes; never edit them.

---

## Contents

1. Goal and audiences
2. Where phase 6 ended
3. Rules that apply to every task
4. Project map and routine commands
5. Phase 7 — workstreams and tasks
   - 7A Accuracy and sources
   - 7B Data model, version 2
   - 7C Collaborations and the institution network
   - 7D Look and feel
   - 7E Photographs
   - 7F Coverage
   - 7G Launch and outreach
6. Later phases (8 History, 9 Learning, 10 Teaching)
7. Order of work and milestones
8. Quality bar
9. Decisions that belong to the owner
10. Risks
11. History of the project

---

## 1. Goal and audiences

MHEEF should be where someone goes to answer: *where in the world is
high-energy physics done, what is done there, who does it, and how did it
get that way?*

| Audience | What they need | Success looks like |
|---|---|---|
| Beginners | Plain language, no assumed vocabulary, a guided path | A first-year student can follow a tour and explain what a collider is afterwards |
| Instructors | Something to project, link to and hand out | A lecturer opens one link in class and walks through the neutrino programme in ten minutes |
| Researchers | Accurate, sourced, citable facts and figures | A physicist finds no errors on their own lab's page and can cite the dataset |
| History readers | How the field grew and who built what | The path from the 1930s cyclotron to the LHC is visible on the map |

## 2. Where phase 6 ended

State at tag `phase-6` (17 November 2026):

| Area | State |
|---|---|
| Site | Astro static site on GitHub Pages: globe (`/`), facility list (`/facilities/`), one page per facility (`/facilities/<id>/`), About (`/about/`), data downloads (`/data/facilities.json`, `/data/facilities.csv`), 404 |
| Globe | CesiumJS. Natural Earth base → NASA Blue Marble → Cesium ion aerial imagery and terrain when zoomed in (token required). Rendered at the screen's real pixel density (capped at 2×); all text drawn from double-size bitmaps |
| Markers | 70 facilities, colour by type (8 types), names appear within 3,000 km, overlapping names hidden, selected facility shown with a coloured name pill and pulsing ring |
| Place names | Site's own Natural Earth names when zoomed out; ion's labelled imagery (asset 3) when zoomed in; only one source on screen at a time; "Place names" switch remembered per browser |
| Side panel | Overview (photo, stats, key figures), History, Experiments, Key results, People, Further reading |
| Data | 70 facilities, 111 experiments, 491 of 491 dated facts and 146 of 146 key figures cite a source; 54 photographs on 47 facilities; 0 of 70 facilities reviewed by a specialist |
| Checks | `npm run validate` runs before every build and fails on structural errors, a key figure or image without a source, or a facility file not listed |
| Licences | Code MIT; text and data CC BY 4.0; photographs keep their own licences; `CITATION.cff` at the repository root |

**Known gaps carried into phase 7**

- Overviews, coordinates and founding years are **not** individually
  sourced; many were written from memory.
- Some sources were confirmed only from their title and a search summary,
  because the site blocked automated access. Which ones was not recorded.
- No facility has been reviewed by a specialist.
- 23 facilities have no photograph: AGASA, ANTARES, Canfranc, CJPL,
  Fly's Eye/HiRes, Hyper-Kamiokande, IMB, INO, JINR, JUNO, Kamioka, KM3NeT,
  LHAASO, LIGO-India, MACE, RENO, Stawell, SURF, Telescope Array,
  Tibet ASγ, TRIUMF, VECC, Yemilab.
- Markers overlap where sites cluster (Kamioka, La Palma); type is shown
  by colour alone, which fails for colour-blind readers.
- No link-preview images, no home page beyond the globe, no flat-map
  fallback without WebGL, no automatic link checking.

## 3. Rules that apply to every task

### 3.1 Accuracy

1. **No fact without a source that was actually checked.** Open the source
   and confirm it says what the fact says. For DOIs, confirm the title
   through Crossref (`https://api.crossref.org/works/<doi>`). If no source
   can be opened and read, leave the fact out and record it in the task's
   notes. Never publish a fact "to be sourced later".
2. **Prefer, in order:** the original paper (DOI) → the institution's or
   collaboration's own page → an official news release → a peer-reviewed
   review or conference paper → a reference work. Never cite Wikipedia as
   a source (it may be used to find sources).
3. **Record how a source was checked** (see task 7A-3): read in full, or
   title and summary only. "Title only" sources must be re-checked before
   phase 7 is closed.
4. **Dates and numbers are copied exactly** as the source states them, with
   units. Where sources disagree, cite the primary one and mention the
   disagreement in the text.
5. **Planned facilities**: record the date the information was checked;
   these are re-checked every six months.
6. When unsure, ask the owner rather than guess. Flag uncertainty in the
   commit message and the hand-over note.

### 3.2 Images, names and third-party material

1. Only openly licensed images: public domain, CC0, CC BY, CC BY-SA (any
   version). Never "all rights reserved", "non-commercial" (NC) or
   "no derivatives" (ND) material, and never an image found on a search
   engine without its licence page.
2. Look at every image before using it; reject any whose licence label
   looks doubtful (for example a lab staff photo marked "public domain" by
   an uploader who did not take it).
3. Each image records file, size, alt text, caption, credit, licence,
   licence link and source page. The validator enforces this.
4. Do not reproduce copyrighted text. Overviews are written in our own
   words.

### 3.3 Privacy and secrets

1. The Cesium ion token lives only in the GitHub repository variable
   `CESIUM_ION_TOKEN`. Never print, paste or commit it. It is public in
   the built site by design, which is why it must stay restricted to
   `assets:read` and the site's URL.
2. Do not send the owner's personal details (name, email) to external
   services. Requests to APIs use a generic user agent such as
   `facility-atlas-check/1.0`.
3. Visitor analytics, if added, must not use cookies or collect personal
   data (see 7G-5).

### 3.4 Working practice

1. **Change one thing at a time**, verify it, then commit. Commit messages
   explain what changed and why; they end with the co-author line the
   agent's instructions specify.
2. **Verify in the browser**, not just with the build. Use the preview
   configuration `mheef-phase7` (`.claude/launch.json`). The in-app browser
   pauses animation when hidden; bring it to the front before judging the
   globe. Locally there is no ion token, so the zoomed-in aerial imagery
   and its names can only be checked on the live site.
3. **Every push to `main` deploys the live site.** Push only work that has
   been checked. After pushing, watch the run:
   `id=$(gh run list --limit 1 --json databaseId -q '.[0].databaseId'); gh run watch "$id" --exit-status`
   then confirm the change on the live site.
4. Keep `npm run validate` at 100 % sourced facts. Never weaken a validator
   rule to make the build pass.
5. Update this roadmap when a task is finished: tick it, add the date, and
   note anything left over.

## 4. Project map and routine commands

```
mheef-phase7/
  astro.config.mjs        site URL and /mheef base path
  scripts/
    validate-data.ts      data checks, run before every build
    build-place-names.ts  regenerates src/data/placeNames.json from Natural Earth
    copy-cesium.mjs       copies Cesium's static files into public/cesium
  public/images/facilities/<id>/   photographs (name.jpg ≤1600 px, name-sm.jpg 640 px)
  src/
    types/facility.ts     the data model — start here
    data/facilities.ts    list of facilities (order decides label priority)
    data/facilities/<id>.ts  one file per facility
    data/placeNames.json  globe place names
    components/Globe.tsx  the globe: imagery, markers, labels, camera
    components/SidePanel/ the panel shown when a facility is selected
    components/FilterPanel.tsx  filters and the Place names switch
    pages/                Astro pages (facility pages, About, data downloads)
    store/useGlobeStore.ts  shared state (selection, filters, place names)
    utils/citation.ts     author, year, licence — keep in step with CITATION.cff
```

| Command (run in `mheef-phase7/`) | Purpose |
|---|---|
| `npm run dev` | Local site at http://localhost:5173/mheef/ |
| `npm run validate` | Data checks and coverage figures |
| `npm run build` | Validate, then build into `dist/` |

**Gotchas**

- `scripts/validate-data.ts` runs under plain Node with type stripping, so
  imports between data files need the `.ts` extension.
- Astro drops the space between a line of text and an element that starts
  on the next line. Write `text{' '}` before a line break that precedes
  `<a>`, `<strong>` and similar, and after a closing tag followed by text.
- In zsh, quote globs and any argument containing parentheses (DOIs).
- `window.__mheefViewer` exposes the Cesium viewer in development only.

---

## 5. Phase 7 — workstreams and tasks

Effort: **S** = up to a day, **M** = a few days, **L** = one to two weeks.
Each task lists *Do*, *Done when* and, where relevant, *Depends on*.

### 7A Accuracy and sources

Goal: before the link is circulated widely, every published statement is
traceable, every link works, and specialists have started reviewing.

**7A-1 Weekly link check (S)**
- *Do:* add `scripts/check-links.ts` that collects every URL in the dataset
  (sources, key figures, images, further reading) and requests each with
  a generic user agent, retrying once. Add a GitHub Actions workflow that
  runs it every Monday and on demand, and opens or updates one issue
  titled "Broken links" listing failures. Treat 403/429 from sites known
  to block bots (science.org, fnal.gov, lbl.gov, symmetrymagazine.org) as
  "blocked", listed separately, not as broken.
- *Done when:* the workflow has run once on `main` and its issue (or a
  clean result) is visible.
- ✅ *Done 2026-11-18.* `npm run check-links` (`--only <id>` for one
  facility); workflow `.github/workflows/check-links.yml`, Mondays 06:00 UTC.
  Any 401/403/405/429 counts as "could not check", not only the sites
  named above (NASA ADS answers 405 behind a human check). DOIs are checked
  against the DOI register, not the publisher. Only *broken* and *moved*
  open the issue; *unreachable* is listed but needs two weeks running
  before action. First run: 460 links; fixed Modane (ADS → DOI plus the
  LSM home page for the 1,700 m figure), FRIB 2008 (dead NSCL page → DOE
  press release, archived; "successor" wording dropped because the release
  does not say it) and the H.E.S.S. site address.

**7A-2 Source the unsourced fields (L)**
- *Do:* add `sources` to the facility's `overview`, its coordinates and its
  founding year (see 7B-1 for the field shape). For coordinates, cite the
  institution's own address page, a map of the site, or INSPIRE-HEP's
  institution record; record what the point represents (main site,
  detector hall, array centre). For founding years, decide and state
  what "founded" means for each type (date of founding agreement, first
  operation, or site establishment) and cite it. Rewrite any overview
  sentence that cannot be sourced.
- *Done when:* the validator reports 100 % for overviews, coordinates and
  founding years, and the About page no longer lists them as unsourced.
- *In progress (started 2026-11-18): 21 of 70 done* — CERN, Fermilab, SLAC,
  DESY, TRIUMF, Jefferson Lab; J-PARC, JINR, PSI, Frascati, Boulby,
  Berkeley Lab, Cornell; KEK, Brookhaven, GSI, FRIB, GANIL, VECC, RIKEN
  RIBF, IUAC. VECC has no location source yet: its postal address (AF
  Block, Sector I, Bidhannagar) and its OpenStreetMap point (AL Block,
  Sector II) disagree; settle which is the main campus before citing. Fields as built: `overviewSources`,
  `foundedBasis: { meaning, sources }` and `location: { represents,
  sources }` (`lat`/`lng` stay where they are; 7B-1 need not move them).
  Rules adopted:
  - **What a year means:** `meaning` is one of established / approved /
    construction-start / first-operation / completed, and the page label
    follows it ("Construction began 1962"). Keep the existing year and
    label it truthfully; change a year only if no source supports it.
  - **Coordinates:** a cited position (INSPIRE institution record, a paper
    giving site coordinates, a site map) must lie within 2 km of the map
    point. INSPIRE matches about 20 facilities this closely (mostly
    accelerator labs); observatories and underground labs need papers or
    site maps. A throwaway lookup script was used; rewrite it into
    `scripts/` if it proves useful again.
  - **Overviews:** every sentence must be supported by an overview source
    or a source already cited in the same record. Superlatives were
    dropped unless a source states them ("world's largest cyclotron" by
    the early 1980s, per CERN Courier).
  - Many lab sites block scripts (fnal.gov, dunescience.org). The UNT
    Libraries web archive (`webarchive.library.unt.edu`) holds readable
    copies of older US lab pages; `…/<timestamp>id_/<url>` gives the raw
    page.
  - Fixed while doing this: Fermilab history 2011 claimed a "pivot to
    become the US hub for neutrino physics", which its cited CERN Courier
    article does not say; CERN history 1954 called Geneva "the world's
    leading centre", which is opinion. Both reworded to what the sources
    say. The 99.9999991 % LHC figure is for the 7 TeV design energy and
    was left out of CERN's new overview. Expect more of this in 7A-4.
  - Check that an INSPIRE coordinate comes from a street address: records
    with only a city or postcode are geocoded to the town centre (JINR,
    Cornell). For those, an OpenStreetMap object for the site is cited as
    the map source (openstreetmap.org/relation/<id>; found with Nominatim
    search, one request per second, generic user agent).
  - Frascati's year changed from 1954 to 1955: the lab's own page says
    "Costruiti nel 1955" and the paper cited for 1954 does not give that
    year. Some accounts give 1954; none was found that could be cited.
  - GANIL's year changed from 1976 to 1975 ("Approved"): construction was
    authorised in 1975 (Physics Today, March 1976; GANIL's own 2022 status
    report). 1976 is when the GANIL economic interest group (GIE) was
    registered, per search summaries of the SIRENE register and a
    prefecture report; neither could be opened. If a readable source is
    found, 1976 "Founded" is equally valid.
  - Markers moved onto the facility where the old point was beside it:
    FRIB (0.9 km, onto the FRIB building) and IUAC (1.5 km, from JNU Ring
    Road onto the IUAC campus), both from OpenStreetMap.
  - Overview corrections in this batch: FRIB's "beryllium targets" and
    "world's most powerful" (not in any source found); GSI's "FAIR will
    collide heavy ions and antiprotons"; Brookhaven's "world leader";
    KEK's "50 times Belle's dataset" (the source gives 50 ab⁻¹ only).
  - ar5iv.labs.arxiv.org/html/<arXiv id> gives an arXiv paper as HTML,
    useful for checking a claim in a long paper (no PDF tools here).
  - Next batches: Cavendish, Los Alamos, IHEP, Savannah River, SSC; then
    underground labs (Gran Sasso, SNOLAB, Kamioka, SURF, Modane, Canfranc,
    CJPL, Baksan, Kolar Gold Fields, Soudan, SUPL, Yemilab, INO); then
    observatories and detectors.

**7A-3 Record how each source was checked (M)**
- *Do:* add an optional `checked` field to `SourceRef`
  (`'full' | 'summary'` plus a date). Re-open every source; mark `full`
  when the page or paper was read, `summary` when only a title or search
  summary could be seen. Replace `summary` sources with readable ones
  where possible.
- *Done when:* every source has `checked`, the validator reports the count
  of `summary` sources, and that count is as low as the available sources
  allow (each remaining one listed in this roadmap with the reason).

**7A-4 Spot-check audit (S, repeat each release)**
- *Do:* pick 30 facts at random (script it, with a fixed seed recorded in
  the report), check each against its source, and record results in
  `audits/<date>.md`: correct / wrong / source does not support.
- *Done when:* a report exists and every problem it found is fixed.

**7A-5 Specialist review programme (M to start, then ongoing)**
- *Do:* (1) draft a one-page reviewer brief: what to check, how long it
  takes, how they are credited. (2) Draft an invitation email for the
  owner to send; the owner chooses reviewers and sends it. (3) Extend
  `reviewed` to `{ date, reviewer, affiliation }` and show the reviewer's
  name on the page (with consent). (4) Accept reviews as GitHub issues
  using an issue template ("Review: <facility>").
- *Done when:* the brief, email draft and issue template exist, and the
  first review has been recorded. Target for phase 7: the 20 most-visited
  facilities reviewed.

### 7B Data model, version 2

Goal: richer, structured data that later features (timelines, comparisons,
the collaboration network, the year slider) can compute from.

**7B-1 Extend the facility record (M)**

Add these fields to `src/types/facility.ts`, with validator rules, then
fill them facility by facility (each value sourced):

| Field | Shape | Notes |
|---|---|---|
| `aliases` | `string[]` | Other names and abbreviations, for search |
| `host` | `{ name, url, sources }` | Operating institution or agency |
| `overviewSources` | `SourceRef[]` | From 7A-2 |
| `location` | `{ lat, lng, represents, sources }` | Replaces bare `lat`/`lng` (keep them as derived fields so the globe code is unchanged) |
| `dates` | `{ proposed?, approved?, constructionStart?, firstOperation?, shutdown? }`, each `{ year, month?, day?, sources }` | `founded` stays for display and is derived or explicitly sourced |
| `machine` | list of `{ name, kind, particles, energy, energyUnit, circumferenceKm?, lengthKm?, luminosity?, depthM?, depthMwe?, detectorMassT?, years, sources }` | Numbers as numbers, units explicit; key figures (`specs`) remain for readable text |
| `predecessors` / `successors` | facility ids | Used by phase 8 lineages |
| `partners` | facility ids | Beamlines and networks (Fermilab → SURF, J-PARC → Kamioka, LIGO–Virgo–KAGRA) |
| `summaryBeginner` | string | Two or three plain sentences; phase 9 reading level |

- *Done when:* types, validator rules and README are updated; the JSON
  download includes the new fields; at least the 20 original facilities
  are filled; the facility page shows dates and machines in a clear table.

**7B-2 Key results carry DOIs and prizes (S)**
- *Do:* add optional `doi` and `nobel` (`{ year, laureates, url }`) to
  `KeyResult`; fill from existing sources; show a Nobel badge on the page.
- *Done when:* every key result that has a discovery paper lists its DOI.

**7B-3 Experiments become records of their own (L)**
- *Do:* move experiments to `src/data/experiments/<id>.ts` with: name,
  full name, facility id(s), detector type, topics, dates, collaboration
  (see 7C), key results, sources. Generate `/experiments/<id>/` pages.
  Facility pages link to them.
- *Done when:* all 111 experiments have pages and the validator checks
  that every facility–experiment link resolves.

**7B-4 People and topics pages (M)**
- *Do:* `src/data/people/<id>.ts` (name, years, roles at facilities,
  sources; no photographs unless openly licensed) and `/people/<id>/`;
  `/topics/<id>/` listing facilities and experiments per physics topic.
- *Done when:* every person and topic named on a facility page links to
  its own page, and an internal-link check in the validator passes.

### 7C Collaborations and the institution network

Goal: select a facility (or one of its experiments) and see arcs rising
from it to every institution that takes part, across the globe, with the
countries and institutions listed beside the map. This shows at a glance
how international each experiment is.

Note: the number of collaborations differs by facility. CERN's LHC has
four large ones (ATLAS, CMS, ALICE, LHCb) plus many smaller experiments;
an underground laboratory may host a dozen small collaborations;
a single-purpose observatory has one.

**Method (agreed basis for "who takes part")**

Use INSPIRE-HEP (https://inspirehep.net), the particle-physics literature
database, which has a free API, institution records with coordinates, and
author lists with affiliations:

1. For each collaboration choose one **source paper**: a recent, published
   paper with the collaboration's full author list, with a DOI. Record it
   in `src/data/collaborations/sources.ts` with its INSPIRE record number.
   This paper is the citation shown to readers: "Institutions in the
   author list of <paper>, <journal>, <year>, doi:…".
2. Fetch it from `https://inspirehep.net/api/literature/<id>` and collect
   each author's **first** listed affiliation (later ones are often
   "also at"). Count authors per institution.
3. Resolve each institution through its INSPIRE record
   (`/api/institutions/<id>`) for name, city, country and latitude and
   longitude (`addresses[0].latitude/longitude`). Where coordinates are
   missing, look them up from the institution's own address and record the
   source; if that fails, list the institution in the panel without an arc
   and in a "needs location" report. Never guess a location.
4. Where a collaboration publishes its own official institute list,
   compare it with the author-list result and note differences in the
   data file.

A trial on a recent CMS paper (2,484 authors) gave 263 distinct
affiliations, 244 of them linked to an INSPIRE institution record. The
result changes as collaborations grow, so every data file records its
retrieval date and is refreshed yearly.

**7C-1 Build script and data files (M)**
- *Do:* `scripts/build-collaborations.ts <collaboration-id>` writes
  `src/data/collaborations/<id>.json`:
  `{ id, name, experimentIds, facilityId, source: { label, doi, inspireId, retrieved }, authorCount, institutions: [{ inspireId, name, city, country, countryCode, lat?, lng?, authors, locationSource }] }`.
  Validator: every institution has a country; any without coordinates is
  listed; the source has a DOI.
- *Done when:* files exist for ATLAS, CMS, ALICE and LHCb, and the
  validator passes.

**7C-2 Arcs on the globe (M)**
- *Do:* in `Globe.tsx`, when a facility with collaboration data is
  selected and the visitor turns on "Collaborations" (a switch in the side
  panel), draw one arc per institution from the facility to the
  institution: a great-circle path lifted into a smooth curve whose height
  grows with distance, drawn with a Cesium polyline collection (not one
  entity per arc). Colour by collaboration, matching a legend. Institutions
  in the same city share one arc end, with a small dot sized by author
  count. Arcs draw outward in a short animation, then stay. Hovering an
  arc end names the institution; clicking it highlights it in the panel
  list. Hide arcs when another facility is selected or the switch is off.
  The camera pulls back automatically to show the whole network.
- *Performance budget:* all four LHC collaborations at once (about 1,000
  arcs) must hold 30 frames per second on a mid-range laptop; otherwise
  merge arcs per city or per country.
- *Done when:* the CERN network renders, can be switched on and off, and
  the browser check shows no errors or frame drops beyond the budget.

**7C-3 Collaborations tab in the side panel and on the facility page (S)**
- *Do:* a "Collaborations" tab listing each collaboration with: number of
  institutions, countries and authors; countries sorted by number of
  institutions (with flags as text, not images); expandable institution
  list; the source paper citation. The facility page gets the same
  section plus a static map image or a link to the globe view.
- *Done when:* the numbers in the tab match the data file, and the
  citation links to the DOI.

**7C-4 Extend to other facilities (L, ongoing)**
- *Order:* Belle II (KEK), DUNE (Fermilab/SURF), T2K and Super-Kamiokande
  (J-PARC/Kamioka), IceCube, Pierre Auger, LIGO–Virgo–KAGRA, JUNO,
  KM3NeT, LHAASO, Hyper-Kamiokande, then the remaining experiments with
  author lists of 50 or more.
- *Done when:* every active experiment with a published collaboration
  author list has a data file.

### 7D Look and feel

Goal: the site looks finished, professional and consistent on every
screen, and its link looks good when shared.

**7D-1 Link previews (S)** — Generate a 1200×630 preview image at build
time for the site and for each facility (its photo, name and type over a
dark band; a map-based design for facilities without photos). Add Open
Graph and Twitter card tags. *Done when:* a shared facility link shows its
own preview in a link-preview checker.

**7D-2 Home page (M)** — Keep the globe as the background; add a short
title, one-sentence description and three entry points ("New to particle
physics", "Looking something up", "Teaching with MHEEF") that fade away
once the visitor interacts with the globe. *Done when:* a first-time
visitor can tell within five seconds what the site is and where to start.

**7D-3 Design consistency (M)** — Define the type scale, spacing, colours
and component styles once (Tailwind theme and a short `DESIGN.md`), then
apply them to every page and the panel. Includes a favicon and app icons.

**7D-4 Marker shapes and clustering (M)** — Give each facility type its
own marker shape as well as its colour, so colour-blind readers can tell
them apart; show status by fill (solid active, hollow planned, faded
historic) and update the filter legend. Group markers that would overlap
into a numbered cluster that splits as the camera approaches.
*Done when:* Kamioka and La Palma are readable at every zoom, and the
legend explains shapes, colours and fills.

**7D-5 Facilities table (S)** — Turn `/facilities/` into a sortable,
filterable table (name, type, country, status, founded, number of
experiments), usable without JavaScript as a plain list.

**7D-6 Flat-map fallback (M)** — When WebGL is unavailable or the device
is slow, show a 2D map with the same markers and panel instead of the
error message.

**7D-7 Accessibility and phone pass (S)** — Check every page against WCAG
2.1 AA: keyboard paths, focus visibility, contrast, text alternatives,
reduced motion (stop the auto-rotation and the ring pulse when the visitor
prefers reduced motion). Check every page at 375 px width.

**7D-8 Performance (S)** — Measure first content on a mid-range phone and
loading of zoomed-in imagery since full-resolution rendering. If either is
slow, render imagery at a lower resolution than text, and lazy-load the
globe behind a light first screen.

### 7E Photographs

**7E-1 Fill the 23 gaps (M)** — Search Wikimedia Commons by hand under
detector names, local-language names and site names, applying rule 3.2.
For each still missing, record what was searched.

**7E-2 Permission requests (S, then waiting)** — Draft short emails, one
per laboratory press office (Super-Kamiokande, JUNO, TRIUMF, KM3NeT,
LHAASO, CJPL, JINR and others), asking for one photograph under CC BY.
The owner sends them; agents never email anyone. Record replies in
`photos-requests.md`.

**7E-3 Owner's and colleagues' photos (S)** — Accept photos the owner
supplies, with photographer's name and licence choice (CC BY 4.0 by
default), and add them like any other.

**7E-4 Second photo for major facilities (M)** — Site view plus detector
or machine for the 20 best-known facilities.

*Done when:* every facility has at least one photograph, or a recorded
reason why none is possible.

### 7F Coverage

Goal: about 120 facilities, with no important omission an expert would
notice.

**Rules for adding a facility:** create `src/data/facilities/<id>.ts`, add
it to `src/data/facilities.ts`, include only checked facts (section 3.1),
add key figures and a photograph where possible, and run the validator.
Ten at a time, one commit each, checked on the globe.

**7F-1 Next facilities**

| Group | Facilities |
|---|---|
| Laboratories | IHEP Protvino, ISOLDE (or as part of CERN — owner decides), iThemba LABS (tlabs.ac.za was unreachable in phase 6), Saha Institute (SINP), TIFR |
| Gravitational waves (planned) | Einstein Telescope, Cosmic Explorer |
| Planned colliders | FCC, CEPC, ILC, EIC, muon collider studies |
| Historic | Cosmotron, Homestake (Davis experiment), and the machines CERN ISR, LEP, SLAC SPEAR, DESY PETRA, HERA, Tevatron (owner decides: own entries or machine records under their laboratory — see 9) |
| Neutrino and dark matter | Super-Kamiokande as experiment record, DUNE far site details, SNO, XENON, LZ (as experiments) |
| Space-based | AMS-02, Fermi-LAT, DAMPE (owner decides how to show facilities with no fixed place — see 9) |

**7F-2 Network arcs between facilities (S)** — Using `partners` (7B-1),
draw beamlines and detector networks: Fermilab → SURF (DUNE),
J-PARC → Kamioka (T2K), CERN → Gran Sasso (CNGS, historic),
LIGO–Virgo–KAGRA. Visually distinct from collaboration arcs.

### 7G Launch and outreach

**7G-1 Citable releases (S)** — Connect the repository to Zenodo; publish
a GitHub release at the end of each phase so Zenodo archives it with a
DOI; add the DOI to `CITATION.cff`, the About page and the README. (Owner
action: sign in to Zenodo with GitHub and enable the repository.)

**7G-2 Contributor guide (S)** — `CONTRIBUTING.md`: how to add a facility,
the sourcing rules (section 3), issue templates for corrections, new
facilities and reviews.

**7G-3 Custom domain (S, owner decides)** — Buy a domain, point it at
GitHub Pages, change `site` and `base` in `astro.config.mjs`, and set up
redirects from the old address.

**7G-4 Announcement plan (S)** — Prepare, for the owner to send or post:
a short announcement, a one-paragraph description for department
mailing lists, and a list of channels (the owner's department and
university, IAPT and Indian physics teaching networks, collaboration
outreach offices, physics communities online). Time it after 7A-2, 7D-1
and 7D-2 are done.

**7G-5 Visit statistics (S, owner decides)** — Cookie-free, privacy-
respecting statistics (for example GoatCounter or Plausible), disclosed
on the About page.

**7G-6 Feedback loop (ongoing)** — Triage issues weekly; every correction
cites a source; fixed issues are closed with the commit that fixed them.

---

## 6. Later phases

These start after phase 7's milestones M1–M3 (section 7). Each will get
the same task-level detail before work begins.

### Phase 8 — History
- Year slider from 1930 to today: facilities appear at first operation and
  fade at shutdown (needs 7B-1 dates).
- Lineages: predecessor-to-successor chains on each facility page.
- Discovery layer: major discoveries and Nobel prizes on the map at their
  year (needs 7B-2).
- Energy-frontier chart: collider energy against year (the Livingston
  plot), each point linking to its facility (needs 7B-1 machines).
- Era essays: the cyclotron era, post-war national laboratories, the
  collider era, the underground and multi-messenger era.

### Phase 9 — Learning
- Glossary of about 150 terms; terms in text show definitions on hover or
  tap.
- Explainers: how an accelerator works, how a detector works, why go
  underground, how a neutrino is detected, how gravitational waves are
  measured, what the Standard Model contains.
- Beginner/technical reading switch (needs 7B-1 `summaryBeginner`).
- Guided tours that move the globe and narrate: "The hunt for the Higgs",
  "Following a neutrino beam", "Listening to spacetime", "The search for
  dark matter", "A century of accelerators".
- Scale comparisons: the LHC ring over a familiar city; detector sizes
  against a person.

### Phase 10 — Teaching
- Presentation mode: full screen, large type, arrow keys step a tour.
- Shareable views: the URL restores globe position, filters, year and
  selection.
- Printable one-page sheet per facility.
- Embedding snippet for course pages.
- Offline use (installable web app).
- Discussion questions and short exercises per tour.

## 7. Order of work and milestones

| Milestone | Contents | Why first |
|---|---|---|
| **M1 Trustworthy** | 7A-1, 7A-2, 7A-3, 7E-2 sent, 7A-5 started | Accuracy protects the owner's reputation once the link circulates |
| **M2 First impressions** | 7D-1, 7D-2, 7D-4, 7D-7, 7E-1 | What a new visitor sees in the first minute |
| **M3 Networks** | 7B-1 (20 facilities), 7C-1 to 7C-3 for the LHC, 7F-2 | The collaboration arcs, the signature feature of phase 7 |
| **M4 Depth** | 7B-2 to 7B-4, 7C-4, 7D-3, 7D-5, 7D-6, 7D-8 | Experiments, people and topics as pages; design consistency |
| **M5 Breadth and launch** | 7F-1, 7E-3, 7E-4, 7G-1 to 7G-6 | About 120 facilities; DOI release; announcement |

Photographs (7E) and specialist reviews (7A-5) run alongside everything,
because they depend on replies from other people.

Phase 7 is complete when M1–M5 are done, this roadmap is updated, and a
release is tagged `phase-7`.

## 8. Quality bar

| Measure | Target |
|---|---|
| Dated facts, key figures, overviews, coordinates and founding years with a source | 100 % |
| Sources checked in full (not summary only) | ≥ 95 %, the rest listed with reasons |
| Facilities reviewed by a specialist within 12 months | 100 % (phase 7 target: 20) |
| Facilities with at least one photograph | 100 %, or a recorded reason |
| Broken external links | 0 after each weekly check is triaged |
| First content visible on a mid-range phone | under 2 seconds |
| Accessibility | WCAG 2.1 AA; everything reachable by keyboard |
| Works without WebGL | Yes — table, pages and a flat map |
| Console errors on any page | 0 |

## 9. Decisions that belong to the owner

Agents must ask before acting on these:

1. Historic machines (LEP, Tevatron, HERA, ISR, PETRA, SPEAR): separate
   facilities or machine records under their laboratory?
2. Space-based detectors (AMS-02, Fermi-LAT, DAMPE): leave out, list
   without a globe marker, or show at their ground station or operations
   centre?
3. Reviewers to invite, and whether reviewer names are shown.
4. Custom domain name, and whether to add visit statistics.
5. Wording of announcements, and where they are posted.
6. Whether ISOLDE and similar facilities inside a larger laboratory get
   their own entry.
7. For collaborations: whether to show every affiliation in the author
   list or only institutions with at least a minimum number of authors.

## 10. Risks

| Risk | Response |
|---|---|
| A factual error is spotted after circulation | Sourcing rules, spot-check audits, specialist review, visible correction link |
| Content outgrows one person | Contributor guide, issue templates, student contributors with specialist review |
| Planned facilities change | Checked-on dates; six-monthly re-check |
| Image rights | Openly licensed images only; credit and licence recorded per image |
| Cesium ion limits or terms change | The site already falls back to Blue Marble and its own names; keep that path working and tested |
| Collaboration data goes stale or misleads | Cite the source paper and retrieval date on screen; refresh yearly; explain the method on the About page |
| Globe too heavy for classroom computers | Resolution cap, flat-map fallback, lazy loading, reduced-motion support |
| Scope creep | Each milestone ships on its own; later phases never block a release |

## 11. History of the project

| Phase | Outcome |
|---|---|
| 1–5 | Prototypes: a three.js globe with 20 facilities, search, filters and a side panel (kept as `mheef/`, `MHEEF 2–4/` and the `.zip` snapshots) |
| 6 | Rebuilt on Astro and CesiumJS; GitHub Pages deployment; one page per facility; data model with sources and a validator; 70 facilities with every dated fact sourced; key figures; photographs; place names with a switch; About page, data downloads, licences and citation (tag `phase-6`) |
| 7 | This plan |
