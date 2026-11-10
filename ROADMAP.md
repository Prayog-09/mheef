# MHEEF Roadmap

**Mapping High Energy Experimental Facilities — from prototype to reference site**

This plan starts from version 6 (`mheef-phase6`) and describes what it takes
to make MHEEF a site that researchers trust, beginners can learn from, and
instructors can teach with. Phases continue the project's existing numbering.

---

## 1. Goal and audiences

MHEEF should be the place someone goes to answer "where in the world is
high-energy physics done, what is done there, and how did it get that way?"

| Audience | What they need | What success looks like |
|---|---|---|
| **Beginners** | Plain-language explanations, no assumed vocabulary, a guided path | A first-year student can follow a tour and explain what a collider is afterwards |
| **Instructors** | Something to project, link to and hand out | A lecturer can open one link in class and walk through the neutrino programme in ten minutes |
| **Researchers** | Accurate, sourced, citable facts and machine parameters | A physicist finds no errors in their own lab's page and can cite the dataset |
| **History readers** | How the field grew, who built what, what led to what | The path from the 1930s cyclotron to the LHC is visible on the map |

## 2. Where version 6 stands

**Working:** 3D globe with 20 facilities, fuzzy search, topic and status
filters, camera fly-to, six-tab side panel (overview, history, experiments,
key results, people, further reading), keyboard-accessible facility list,
mobile bottom sheet. The production build passes.

**Known problems**

| Area | Problem |
|---|---|
| Visuals | Atmosphere renders as a thick opaque ring; clouds are large grey smears that hide the map; star background reads as blurred blobs |
| Mobile | Globe overflows the screen in portrait |
| Interaction | Enter in the search box does not open the top result; the hidden keyboard facility list is hard to reach |
| Content | 14 facts still marked `[verify]`; no sources attached to individual facts; no images |
| Structure | One screen, no URLs — a facility cannot be linked to, bookmarked or indexed by a search engine |
| Dependencies | Earth textures are loaded from threejs.org at runtime; fonts from Google |
| Performance | One 1.26 MB JavaScript bundle (359 kB gzipped) loaded before anything appears |
| Coverage | 20 facilities; no SLAC, J-PARC, IHEP, JINR, Novosibirsk, Frascati; nothing in India, Africa or Oceania |

## 3. Principles

1. **Accuracy before features.** Every fact carries a source. An unsourced
   fact is not published.
2. **Content is data.** Facilities live in structured files that are
   validated automatically, never hand-edited inside components.
3. **Every thing has a URL.** Facilities, experiments, people, topics and
   tours are all linkable pages.
4. **The globe is the front door, not the whole house.** The site must be
   fully usable as plain pages when WebGL is unavailable or slow.
5. **Two reading levels.** Each facility has a beginner summary and a
   technical description.
6. **Open.** Code and data are openly licensed, and corrections are easy
   to submit.

---

## 4. Phases

Effort is given as S (days), M (one to two weeks) or L (several weeks) of
focused work.

### Phase 7 — Foundation (M)

Make what exists correct, stable and presentable.

- Single git repository with version history; retire the folder copies.
- Self-host Earth textures and fonts under `public/`.
- Fix the atmosphere shader, replace or remove the procedural clouds, use
  a real star map (self-hosted, public-domain NASA imagery).
- Fit the globe to the viewport on portrait phones.
- Enter opens the top search result; arrow keys move through results.
- Resolve all `[verify]` items; add a source to every existing fact.
- Load the 3D scene lazily behind a lightweight first screen.
- Automatic deployment to GitHub Pages on every push.

*Done when:* no console errors, no third-party runtime requests, no
`[verify]` markers, Lighthouse accessibility score ≥ 95.

### Phase 8 — Site structure and data model (L)

Turn the single screen into a website.

**Framework.** Move to Astro: pages are generated as static HTML from the
content files, and the globe remains a React component embedded in them.
Existing globe, marker, search and filter code carries over.

**Site map**

```
/                         Globe + entry points for each audience
/facilities/              Sortable, filterable table of all facilities
/facilities/cern/         One page per facility
/experiments/atlas/       One page per experiment
/people/chien-shiung-wu/  One page per person
/topics/neutrinos/        One page per physics topic
/timeline/                History view
/learn/                   Explainers and glossary
/tours/                   Guided tours
/teach/                   Instructor resources
/about/                   Method, sources, contributors, how to cite
```

**Facility record (one file per facility)**

| Field group | Fields |
|---|---|
| Identity | id, name, full name, aliases, host institution, country, coordinates |
| Classification | type (collider, fixed-target, underground lab, neutrino telescope, gravitational-wave detector, cosmic-ray array, gamma-ray observatory, light source, rare-isotope facility), status, physics topics |
| Dates | proposed, construction start, first operation, shutdown |
| Machine | particles, beam energy, centre-of-mass energy, luminosity, circumference or length, depth (m and m.w.e.), detector mass |
| Text | beginner summary, technical overview |
| Related | experiments, people, predecessor and successor facilities, partner sites (for beamlines and networks) |
| History | dated timeline entries |
| Results | discoveries with year, description, paper DOI, Nobel prize if any |
| Media | images with credit and licence |
| Provenance | source per fact, last reviewed date, reviewer |

A schema check runs on every change and fails the build on a missing
source, an invalid coordinate or a broken internal link.

*Done when:* all 20 existing facilities are migrated, each has its own
page, and the globe's side panel links to it.

### Phase 9 — Coverage (L, ongoing)

Grow from 20 to roughly 120 facilities. Priority order:

| Group | Additions |
|---|---|
| Major laboratories | SLAC, J-PARC, IHEP/BEPCII, JINR Dubna, BINP Novosibirsk, INFN Frascati, IHEP Protvino, PSI, Jefferson Lab, Los Alamos |
| Underground | Hyper-Kamiokande, Jinping (CJPL), Boulby, Canfranc, Modane, Baksan, Stawell, Yemilab, Kolar Gold Fields (historic), INO (planned) |
| Neutrino telescopes | KM3NeT, Baikal-GVD, ANTARES (historic) |
| Cosmic and gamma rays | LHAASO, H.E.S.S., MAGIC, VERITAS, HAWC, Telescope Array, GRAPES-3, MACE |
| Gravitational waves | GEO600, LIGO-India, Einstein Telescope and Cosmic Explorer (planned) |
| Nuclear and isotope | RIKEN RIBF, GANIL, ISOLDE, VECC, IUAC, iThemba LABS |
| Planned colliders | FCC, CEPC, ILC, EIC, muon collider studies |
| Historic | Cavendish Laboratory, Berkeley Radiation Laboratory and Bevatron, Cosmotron, CERN ISR, SPEAR, PETRA, HERA, LEP, Tevatron, SSC (cancelled), Homestake, IMB |
| Space-based | AMS-02, Fermi-LAT, DAMPE |

On the globe: marker shape encodes facility type, colour encodes status,
crowded regions cluster until zoomed, and names appear at close range.
Beamlines and detector networks are drawn as arcs (Fermilab → SURF,
J-PARC → Kamioka, CERN → Gran Sasso, the LIGO–Virgo–KAGRA network).

### Phase 10 — History (M)

- **Year slider** from 1930 to the present: facilities appear when they
  start operating and fade when they close.
- **Lineages**: predecessor-to-successor chains shown on each facility
  page (PS → SPS → LEP → LHC).
- **Discovery layer**: major discoveries and Nobel prizes placed on the
  map at the year they happened.
- **Energy frontier chart**: collider energy against year (the Livingston
  plot), with each point linking to its facility.
- **Era pages**: short essays on the cyclotron era, the post-war national
  laboratories, the collider era, and the underground and multi-messenger
  era.

### Phase 11 — Learning (M)

- **Glossary** of about 150 terms; terms in page text show their
  definition on hover or tap.
- **Explainers**: how an accelerator works, how a detector works, why
  experiments go underground, how a neutrino is detected, how
  gravitational waves are measured, what the Standard Model contains.
- **Reading level toggle** between beginner and technical text.
- **Guided tours**: scripted sequences that move the globe and narrate —
  "The hunt for the Higgs", "Following a neutrino beam", "Listening to
  spacetime", "The search for dark matter", "A century of accelerators".
- **Scale comparisons**: the LHC ring drawn over a familiar city;
  detector sizes against a person.

### Phase 12 — Teaching (M)

- **Presentation mode**: full screen, large type, arrow keys step through
  a tour.
- **Shareable views**: a link restores the exact globe position, filters,
  year and selected facility.
- **Printable sheets**: one-page PDF per facility.
- **Embedding**: a snippet to place the globe or one facility in a course
  page.
- **Offline use**: installable so it runs in a classroom without a
  connection.
- **Classroom material**: discussion questions and short exercises per
  tour.
- **Data download**: full dataset as CSV and JSON.

### Phase 13 — Launch and upkeep (S, then ongoing)

- **Review**: each facility page checked by someone who works in that
  area before it is marked reviewed.
- **Licences**: MIT for code, CC BY 4.0 for text and data; every image
  carries its own credit and licence.
- **Citation**: versioned releases archived on Zenodo with a DOI, and a
  "how to cite" note on every page.
- **Corrections**: a "suggest a correction" link on every page that opens
  a pre-filled GitHub issue.
- **Contribution guide** and a template for adding a facility.
- **Custom domain** and privacy-respecting visit statistics.
- **Review cycle**: every page re-checked at least once a year; the
  status of planned facilities checked every six months.

---

## 5. Quality bar

| Measure | Target |
|---|---|
| Facts with a source | 100% |
| Pages reviewed within 12 months | 100% |
| First content visible on a mid-range phone | under 2 seconds |
| Accessibility | WCAG 2.1 AA; everything reachable by keyboard |
| Works without WebGL | Yes — table, pages and a flat map |
| Broken external links | Checked weekly, automatically |

## 6. Risks

| Risk | Response |
|---|---|
| Content volume outruns one person | Contribution template, pre-filled correction issues, student contributors with expert review |
| Facts go stale (planned machines, running experiments) | Review dates on every page; scheduled re-checks |
| Image rights | Use only openly licensed images (CERN, national-lab and Wikimedia Commons material with stated licences); record credit per image |
| 3D globe too heavy for classroom hardware | Flat-map fallback, lazy loading, reduced-detail mode |
| Scope creep | Each phase ships on its own; later phases never block a release |

## 7. Suggested order

Phases 7 and 8 come first and in that order — everything else builds on
correct content and real pages. Phases 9 to 12 can then proceed in
parallel: coverage is continuous content work, while history, learning and
teaching are separate features. Phase 13 applies from the first public
announcement onward.
