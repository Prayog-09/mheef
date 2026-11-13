import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'ihep',
  name: "IHEP Beijing",
  fullName: "Institute of High Energy Physics, Chinese Academy of Sciences",
  type: 'accelerator-laboratory',
  country: "China",
  lat: 39.911,
  lng: 116.242,
  founded: 1973,
  status: 'active',
  overview: "The Institute of High Energy Physics in Beijing is China's main laboratory for particle physics. Its Beijing Electron-Positron Collider works in the energy range of the tau lepton and charm quark, where the BES detectors made a precise measurement of the tau mass and discovered a new family of charged charmonium-like particles. IHEP also led the Daya Bay experiment and leads JUNO.",
  specs: [
  ],
  images: [
    {
      file: 'bepc-entrance.jpg',
      width: 1600,
      height: 1184,
      alt: "The entrance of a modern building with Chinese lettering above the doors.",
      caption: "Entrance to the Beijing Electron Positron Collider, 2015.",
      credit: "Shizhao",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:BEPC%E5%85%A5%E5%8F%A3.jpg",
    },
  ],
  history: [
    { year: 1992, event: "The BES detector at the Beijing Electron-Positron Collider publishes a precise measurement of the mass of the tau lepton.", sources: [{ label: "BES Collaboration, Phys. Rev. Lett. 69, 3021 (1992)", url: "https://doi.org/10.1103/PhysRevLett.69.3021" }] },
    { year: 2013, event: "BESIII observes Zc(3900), a charged charmonium-like structure that cannot be an ordinary quark-antiquark meson.", sources: [{ label: "BESIII Collaboration, Phys. Rev. Lett. 110, 252001 (2013)", url: "https://doi.org/10.1103/PhysRevLett.110.252001" }] },
  ],
  experiments: [
    { id: 'ihep-bes3', name: "BESIII", description: "Detector at the upgraded BEPCII electron-positron collider, studying charm, charmonium and tau physics.", topics: ['qcd', 'electroweak'], startYear: 2008, sources: [{ label: "Design and construction of the BESIII detector, Nucl. Instrum. Meth. A 614, 345 (2010)", url: "https://doi.org/10.1016/j.nima.2009.12.050" }] },
  ],
  keyResults: [
    { year: 2013, discovery: "A Charged Charmonium-like State, Zc(3900)", description: "A charged particle decaying to a pion and a J/psi must contain at least four quarks.", sources: [{ label: "BESIII Collaboration, Phys. Rev. Lett. 110, 252001 (2013)", url: "https://doi.org/10.1103/PhysRevLett.110.252001" }] },
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "BESIII detector paper", url: "https://doi.org/10.1016/j.nima.2009.12.050" },
  ],
};

export default facility;
