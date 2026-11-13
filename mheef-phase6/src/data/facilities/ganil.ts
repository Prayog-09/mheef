import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'ganil',
  name: "GANIL",
  fullName: "Grand Accélérateur National d’Ions Lourds",
  type: 'nuclear-physics-facility',
  country: "France",
  lat: 49.214,
  lng: -0.364,
  founded: 1976,
  status: 'active',
  overview: "GANIL in Caen is France's national heavy-ion laboratory, run jointly by the CEA and the CNRS. Its coupled cyclotrons have delivered heavy-ion beams since 1983, and the SPIRAL2 superconducting linear accelerator, which began commissioning in 2019, adds very intense beams of light ions and neutrons.",
  specs: [
  ],
  images: [
    {
      file: 'spiral2.jpg',
      width: 1600,
      height: 900,
      alt: "Modern grey laboratory buildings seen across a frosty field.",
      caption: "The buildings of the SPIRAL2 facility at GANIL, 2020.",
      credit: "Chalexis",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:B%C3%A2timent_SPIRAL2.jpg",
    },
  ],
  history: [
    { year: 1982, event: "The first beam is extracted from the second separated-sector cyclotron on 19 November 1982; experiments begin the following year.", sources: [{ label: "GANIL status report, Cyclotrons 2022 proceedings (TUAO01)", url: "https://accelconf.web.cern.ch/cyclotrons2022/papers/tuao01.pdf" }] },
    { year: 2019, event: "Commissioning of the SPIRAL2 superconducting linear accelerator begins.", sources: [{ label: "GANIL status report, Cyclotrons 2022 proceedings (TUAO01)", url: "https://accelconf.web.cern.ch/cyclotrons2022/papers/tuao01.pdf" }, { label: "CERN Courier: Spiralling into the femtoscale", url: "https://cerncourier.com/a/spiralling-into-the-femtoscale/" }] },
  ],
  experiments: [
    { id: 'ganil-cyclotrons', name: "GANIL cyclotrons", description: "Coupled separated-sector cyclotrons accelerating heavy ions for nuclear physics.", topics: ['nuclear-structure', 'rare-isotopes'], startYear: 1983, sources: [{ label: "GANIL status report, Cyclotrons 2022 proceedings (TUAO01)", url: "https://accelconf.web.cern.ch/cyclotrons2022/papers/tuao01.pdf" }] },
    { id: 'ganil-spiral2', name: "SPIRAL2", description: "Superconducting linear accelerator for intense beams of protons, deuterons and light ions, feeding the Neutrons for Science facility.", topics: ['nuclear-structure', 'rare-isotopes'], startYear: 2019, sources: [{ label: "GANIL status report, Cyclotrons 2022 proceedings (TUAO01)", url: "https://accelconf.web.cern.ch/cyclotrons2022/papers/tuao01.pdf" }, { label: "CERN Courier: Spiralling into the femtoscale", url: "https://cerncourier.com/a/spiralling-into-the-femtoscale/" }] },
  ],
  keyResults: [
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Official Site", url: "https://www.ganil-spiral2.eu" },
  ],
};

export default facility;
