import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'cornell',
  name: "Cornell (CESR)",
  fullName: "Wilson Laboratory, Cornell University",
  type: 'accelerator-laboratory',
  country: "United States",
  lat: 42.445,
  lng: -76.473,
  founded: 1979,
  status: 'active',
  overview: "Cornell University's Wilson Laboratory houses CESR, a 768-metre electron-positron storage ring completed in 1979. For three decades its CLEO detector was a leading source of knowledge about bottom quarks, including the first observations of rare 'penguin' decays. Collider physics ended in 2008 and the ring now serves as an X-ray source.",
  specs: [
    { label: "CESR circumference", value: "768 m", sources: [{ label: "Cornell CLASSE: CESR", url: "https://www.classe.cornell.edu/public/CESR" }] },
  ],
  images: [
    {
      file: 'wilson-laboratory.jpg',
      width: 1600,
      height: 688,
      alt: "A wide brick building made of separate tower-like blocks.",
      caption: "Wilson Synchrotron Laboratory at Cornell University, 2023.",
      credit: "Kenneth C. Zirkel",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Wilson_Synchrotron_Laboratory,_Cornell_University.jpg",
    },
  ],
  history: [
    { year: 1979, event: "The Cornell Electron Storage Ring is completed.", sources: [{ label: "Cornell CLASSE: CESR", url: "https://www.classe.cornell.edu/public/CESR" }] },
    { year: 1980, event: "CLEO observes a fourth upsilon state, the Upsilon(4S), which decays into pairs of B mesons.", sources: [{ label: "CLEO Collaboration, Phys. Rev. Lett. 45, 219 (1980)", url: "https://doi.org/10.1103/PhysRevLett.45.219" }] },
    { year: 1993, event: "CLEO reports the first observation of a 'penguin' decay of a B meson, into a K* meson and a photon.", sources: [{ label: "CLEO Collaboration, Phys. Rev. Lett. 71, 674 (1993)", url: "https://doi.org/10.1103/PhysRevLett.71.674" }] },
    { year: 1995, event: "CLEO measures the overall rate at which bottom quarks decay to a strange quark and a photon.", sources: [{ label: "CLEO Collaboration, Phys. Rev. Lett. 74, 2885 (1995)", url: "https://doi.org/10.1103/PhysRevLett.74.2885" }] },
  ],
  experiments: [
    { id: 'cornell-cleo', name: "CLEO", description: "General-purpose detector at CESR for studying bottom and charm quarks produced in electron-positron collisions.", topics: ['b-physics', 'cp-violation'], startYear: 1979, endYear: 2008, sources: [{ label: "The CLEO II detector, Nucl. Instrum. Meth. A 320, 66 (1992)", url: "https://doi.org/10.1016/0168-9002(92)90770-5" }, { label: "CLEO Collaboration, Phys. Rev. Lett. 45, 219 (1980)", url: "https://doi.org/10.1103/PhysRevLett.45.219" }] },
  ],
  keyResults: [
    { year: 1993, discovery: "First Observation of Penguin Decays", description: "Decays of B mesons through quantum loops, sensitive to particles too heavy to produce directly, were seen for the first time.", sources: [{ label: "CLEO Collaboration, Phys. Rev. Lett. 71, 674 (1993)", url: "https://doi.org/10.1103/PhysRevLett.71.674" }, { label: "CLEO Collaboration, Phys. Rev. Lett. 74, 2885 (1995)", url: "https://doi.org/10.1103/PhysRevLett.74.2885" }] },
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Official Site", url: "https://www.classe.cornell.edu" },
  ],
};

export default facility;
