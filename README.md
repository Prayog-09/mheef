# MHEEF — Mapping High Energy Experimental Facilities

An interactive 3D atlas of the world's high-energy physics laboratories:
colliders, underground laboratories, neutrino telescopes, cosmic-ray
observatories and gravitational-wave detectors. Select a facility on the
globe to read its overview, history, experiments, key results and people.

## Repository layout

| Path | Contents |
|---|---|
| `mheef-phase7/` | **Current version** — the one that is built and published |
| `ROADMAP.md` | Phase 7 plan: every task, with how to know it is done |
| `mheef/`, `MHEEF 2/`, `MHEEF 3/`, `MHEEF 4/` | Earlier development versions, kept for reference |
| `mheef-phase1.zip`, `mheef-phase5.zip`, `mheef-phase6.zip` | Early phase snapshots (the `.zip` named phase 6 predates the finished phase 6) |

Phase 6 as finished is preserved as the git tag `phase-6`
(`git checkout phase-6`).

## Running locally

```bash
cd mheef-phase7
npm install
npm run dev
```

See [mheef-phase7/README.md](mheef-phase7/README.md) for the technology
stack and folder structure, and [ROADMAP.md](ROADMAP.md) for what comes
next.

## Status

This is an early version. The dataset covers 70 facilities and some
entries are still being verified; corrections are welcome through the
repository's issue tracker.

## Licence and citation

Code: MIT (`LICENSE`). Text and data: CC BY 4.0 (`LICENSE-CONTENT.md`,
which also lists what keeps its own licence — photographs, map imagery and
place names). To cite the atlas, see `CITATION.cff` or the "How to cite"
section of the site's About page.
