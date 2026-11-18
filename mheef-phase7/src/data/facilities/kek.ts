import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'kek',
  name: 'KEK / Belle II',
  fullName: "High Energy Accelerator Research Organization",
  type: 'accelerator-laboratory',
  country: 'Japan',
  lat: 36.1512,
  lng: 140.0712,
  founded: 1971,
  foundedBasis: { meaning: "established", sources: [{ label: "KEK: History", url: "https://www.kek.jp/en/about/history" }] },
  location: { represents: "KEK's Tsukuba campus", sources: [{ label: "OpenStreetMap: KEK (High Energy Accelerator Research Organization)", url: "https://www.openstreetmap.org/way/100702753" }] },
  status: 'active',
  overview: "The High Energy Accelerator Research Organization (KEK), in Tsukuba, Japan, was established in April 1971 as the National Laboratory for High Energy Physics. Its KEKB collider stored its first beams in 1998, and the Belle experiment, which took data there from 1999 to 2010, measured large CP violation in B-meson decays, as did BaBar at SLAC, confirming the Kobayashi-Maskawa mechanism. KEKB's successor, the SuperKEKB electron-positron collider, has hosted the Belle II experiment since 2019; Belle II is expected to collect 50 ab⁻¹ of data for studies ranging from B and charm physics to searches for dark-sector particles.",
  overviewSources: [{ label: "KEK: History", url: "https://www.kek.jp/en/about/history" }, { label: "Nobel Prize in Physics 2008", url: "https://www.nobelprize.org/prizes/physics/2008/summary/" }, { label: "The Belle II Physics Book, PTEP 2019, 123C01", url: "https://doi.org/10.1093/ptep/ptz106" }, { label: "Belle II at SuperKEKB: input to the European Strategy (arXiv:2503.24155)", url: "https://arxiv.org/abs/2503.24155" }],
  specs: [
    { label: "KEKB data delivered", value: "More than 1 ab⁻¹", sources: [{ label: "The Belle II Physics Book, PTEP 2019, 123C01", url: "https://doi.org/10.1093/ptep/ptz106" }] },
    { label: "SuperKEKB design luminosity", value: "40 times that of KEKB", sources: [{ label: "The Belle II Physics Book, PTEP 2019, 123C01", url: "https://doi.org/10.1093/ptep/ptz106" }] },
    { label: "Belle II target data set", value: "50 ab⁻¹", sources: [{ label: "The Belle II Physics Book, PTEP 2019, 123C01", url: "https://doi.org/10.1093/ptep/ptz106" }] },
  ],
  images: [
    {
      file: 'belle-ii.jpg',
      width: 1600,
      height: 1200,
      alt: "A large particle detector opened up in an experimental hall, seen from above.",
      caption: "The Belle II detector under construction at KEK, 2017.",
      credit: "Kestrel",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:KEK_Belle_II_Detector_(1).jpg",
    },
    {
      file: 'superkekb.jpg',
      width: 1200,
      height: 900,
      alt: "Two parallel lines of accelerator magnets in a long straight tunnel.",
      caption: "A straight section of SuperKEKB, with separate rings for electrons and positrons, 2018.",
      credit: "Eto shorcy",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:SuperKEKB_straight.jpg",
    },
  ],
  history: [
    { year: 1971, event: "KEK founded as Japan's national high-energy physics laboratory in Tsukuba Science City.", sources: [{ label: "KEK: History", url: "https://www.kek.jp/en/about/history" }] },
    { year: 1999, event: "Belle experiment begins data-taking in June 1999 at the asymmetric KEKB collider, which stored its first beams in 1998; it is designed to measure CP violation in B-meson decays.", sources: [{ label: "KEK: History", url: "https://www.kek.jp/en/about/history" }] },
    { year: 2001, event: "Belle and BaBar (SLAC) independently report large CP violation in B0 meson decays, confirming the Kobayashi-Maskawa mechanism. Nobel Prize 2008.", sources: [{ label: "Nobel Prize in Physics 2008", url: "https://www.nobelprize.org/prizes/physics/2008/summary/" }] },
    { year: 2010, event: "Belle ends data-taking in June 2010 after KEKB delivered more than 1,000 fb-1; construction of SuperKEKB, designed for 40 times the luminosity, starts the following year.", sources: [{ label: "KEK: History", url: "https://www.kek.jp/en/about/history" }, { label: "The Belle II Physics Book, PTEP 2019, 123C01", url: "https://doi.org/10.1093/ptep/ptz106" }] },
    { year: 2019, event: "Belle II begins its first physics run at SuperKEKB in spring 2019.", sources: [{ label: "Belle II at SuperKEKB: input to the European Strategy (arXiv:2503.24155)", url: "https://arxiv.org/abs/2503.24155" }] },
  ],
  experiments: [
    { id: 'kek-belle2', name: 'Belle II', description: "Precision B-factory detector measuring CP violation and rare B- and D-meson decays, and searching for dark photons, axion-like particles, and other light dark-sector mediators.", topics: ['b-physics', 'cp-violation', 'dark-matter'], startYear: 2019, sources: [{ label: "The Belle II Physics Book, PTEP 2019, 123C01", url: "https://doi.org/10.1093/ptep/ptz106" }] },
    { id: 'kek-belle', name: 'Belle', description: "Predecessor B-factory experiment whose measurement of CP violation in B0 decays confirmed the Kobayashi-Maskawa quark-mixing mechanism.", topics: ['b-physics', 'cp-violation'], startYear: 1999, endYear: 2010, sources: [{ label: "The Belle detector, Nucl. Instrum. Meth. A 479, 117 (2002)", url: "https://doi.org/10.1016/S0168-9002(01)02013-7" }, { label: "Belle Collaboration, Phys. Rev. Lett. 87, 091802 (2001)", url: "https://doi.org/10.1103/PhysRevLett.87.091802" }] },
  ],
  keyResults: [
    { year: 2001, discovery: "CP Violation in B Mesons Confirmed", description: "Belle (and BaBar at SLAC) measured large CP asymmetry in B0 decays, directly confirming the Kobayashi-Maskawa mechanism and explaining why our universe has more matter than antimatter. Nobel Prize 2008.", sources: [{ label: "Nobel Prize in Physics 2008", url: "https://www.nobelprize.org/prizes/physics/2008/summary/" }] },
  ],
  importantPeople: [
    { name: "Makoto Kobayashi", contribution: "Co-proposed the CKM quark mixing matrix in 1973, predicting a third generation of quarks from CP-violation arguments; Nobel Prize in Physics 2008.", sources: [{ label: "Nobel Prize in Physics 2008", url: "https://www.nobelprize.org/prizes/physics/2008/summary/" }] },
    { name: "Toshihide Maskawa", contribution: "Co-proposed the CKM matrix and provided the theoretical framework confirmed by Belle and BaBar; Nobel Prize in Physics 2008.", sources: [{ label: "Nobel Prize in Physics 2008", url: "https://www.nobelprize.org/prizes/physics/2008/summary/" }] },
  ],
  readMore: [
    { label: "KEK Official Site", url: "https://www.kek.jp" },
    { label: "Belle II Experiment", url: "https://www.belle2.org" },
    { label: "Nobel Prize 2008 (CKM)", url: "https://www.nobelprize.org/prizes/physics/2008/summary/" },
  ],
};

export default facility;
