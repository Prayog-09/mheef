import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'frib',
  name: 'FRIB',
  fullName: "Facility for Rare Isotope Beams",
  type: 'nuclear-physics-facility',
  country: 'United States',
  lat: 42.727,
  lng: -84.484,
  founded: 2022,
  status: 'active',
  overview: "The Facility for Rare Isotope Beams (FRIB) at Michigan State University, which opened to users in May 2022, is the world's most powerful rare-isotope accelerator. A superconducting linear accelerator drives uranium and other heavy-ion beams to roughly half the speed of light and fragments them on beryllium targets to produce thousands of exotic radioactive isotopes — including those that exist only in neutron stars and supernovae. FRIB enables tests of nuclear force models near the neutron drip line and measurements critical to understanding r-process nucleosynthesis.",
  specs: [
    { label: "Beam power on target", value: "400 kW by design, being reached in stages", sources: [{ label: "Wei et al., FRIB status, SRF2023 proceedings (MOIAA01)", url: "https://proceedings.jacow.org/srf2023/papers/moiaa01.pdf" }] },
    { label: "Beam energy", value: "More than 200 MeV per nucleon", sources: [{ label: "Wei et al., FRIB status, SRF2023 proceedings (MOIAA01)", url: "https://proceedings.jacow.org/srf2023/papers/moiaa01.pdf" }] },
    { label: "Superconducting linac", value: "324 resonators in 46 cryomodules", sources: [{ label: "Wei et al., FRIB status, SRF2023 proceedings (MOIAA01)", url: "https://proceedings.jacow.org/srf2023/papers/moiaa01.pdf" }] },
  ],
  images: [
    {
      file: 'construction-2015.jpg',
      width: 1365,
      height: 590,
      alt: "A building site with cranes beside finished brick laboratory buildings.",
      caption: "FRIB under construction, June 2015.",
      credit: "Facility for Rare Isotope Beams",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2015-06-09_FRIB_construction.JPG",
    },
  ],
  history: [
    { year: 2008, event: "DOE selects Michigan State University on 11 December 2008 to design and establish FRIB, successor to the National Superconducting Cyclotron Laboratory (NSCL).", sources: [{ label: "NSCL: History", url: "https://nscl.msu.edu/about/history.html" }] },
    { year: 2014, event: "Civil construction of FRIB starts with a ground-breaking ceremony on 17 March 2014.", sources: [{ label: "FRIB: Groundbreaking launches civil construction (2014)", url: "https://frib.msu.edu/news/2014/groundbreaking-launches-construction.html" }, { label: "MSU Today: FRIB groundbreaking, concept becomes reality (2014)", url: "https://msutoday.msu.edu/news/2014/frib-groundbreaking-concept-becomes-reality" }] },
    { year: 2022, event: "FRIB opens with a ribbon-cutting ceremony on 2 May 2022, and its first user experiment begins the same month.", sources: [{ label: "AIP FYI: DOE rare isotope facility opening at Michigan State (2022)", url: "https://www.aip.org/fyi/doe-rare-isotope-facility-opening-at-michigan-state" }] },
    { year: 2026, event: "The GRETA gamma-ray tracking array, shipped from Berkeley Lab in 2025, completes its commissioning run at FRIB.", sources: [{ label: "Berkeley Lab: GRETA comes online", url: "https://newscenter.lbl.gov/2026/07/28/greta-comes-online-for-a-new-era-of-nuclear-science/" }] },
  ],
  experiments: [
    { id: 'frib-greta', name: 'GRETA', description: "Gamma-Ray Energy Tracking Array — a 4-pi germanium detector that tracks gamma-ray photons from nuclear reactions, enabling in-beam spectroscopy of rare isotopes at FRIB.", topics: ['nuclear-structure', 'rare-isotopes'], startYear: 2026, sources: [{ label: "Berkeley Lab: GRETA comes online", url: "https://newscenter.lbl.gov/2026/07/28/greta-comes-online-for-a-new-era-of-nuclear-science/" }] },
    { id: 'frib-mona', name: 'MoNA-LISA', description: "Modular Neutron Array and Large-area multi-Institutional Scintillator Array; detects neutrons emitted by neutron-unbound nuclei at and beyond the drip line to probe nuclear structure.", topics: ['nuclear-structure', 'rare-isotopes'], startYear: 2022, sources: [{ label: "MoNA: The first 25 years (arXiv:2502.14612)", url: "https://arxiv.org/abs/2502.14612" }] },
  ],
  keyResults: [
    { year: 2022, discovery: "First Half-Life Measurements at FRIB", description: "FRIB's first experiment fragmented a calcium-48 beam and measured, for the first time, the half-lives of five neutron-rich isotopes of magnesium, aluminium, silicon and phosphorus near N=28, finding evidence that the Z=14 subshell closure erodes there (Physical Review Letters 129, 212501).", sources: [{ label: "Crawford et al., Phys. Rev. Lett. 129, 212501 (2022)", url: "https://doi.org/10.1103/PhysRevLett.129.212501" }] },
  ],
  importantPeople: [
    { name: "Konrad Gelbke", contribution: "Director of the National Superconducting Cyclotron Laboratory, FRIB's predecessor, from 1992 to 2015, including during Michigan State's successful bid to host FRIB.", sources: [{ label: "MSU Spartan magazine: The Quest for FRIB (2022)", url: "https://spartan.msu.edu/spartan-story-hub/magazines/fall-2022/into-the-unknown-the-quest-for-frib" }] },
    { name: "Brad Sherrill", contribution: "FRIB scientific director and director of NSCL from 2015 to 2022; an expert in rare-isotope beam production.", sources: [{ label: "MSU Spartan magazine: The Quest for FRIB (2022)", url: "https://spartan.msu.edu/spartan-story-hub/magazines/fall-2022/into-the-unknown-the-quest-for-frib" }] },
  ],
  readMore: [
    { label: "FRIB Official Site", url: "https://frib.msu.edu" },
  ],
};

export default facility;
