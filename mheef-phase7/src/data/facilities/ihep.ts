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
  foundedBasis: { meaning: "established", sources: [{ label: "IHEP: History", url: "https://english.ihep.cas.cn/au/hy/" }] },
  location: { represents: "The IHEP campus, 19B Yuquan Road, Beijing", sources: [{ label: "OpenStreetMap: Institute of High Energy Physics, Beijing", url: "https://www.openstreetmap.org/node/14179782587" }] },
  status: 'active',
  overview: "The Institute of High Energy Physics (IHEP) of the Chinese Academy of Sciences, in Beijing, was officially established in February 1973 and describes itself as China's biggest laboratory for the study of particle physics. At its Beijing Electron-Positron Collider, the BES detectors study charm, charmonium and tau physics: BES made a precise measurement of the tau lepton's mass in 1992, and BESIII observed the charged charmonium-like particle Zc(3900) in 2013. IHEP physicists led the Daya Bay reactor neutrino experiment and lead the JUNO neutrino observatory.",
  overviewSources: [{ label: "IHEP: History", url: "https://english.ihep.cas.cn/au/hy/" }, { label: "IHEP: About", url: "https://english.ihep.cas.cn/au/" }, { label: "Design and construction of the BESIII detector, Nucl. Instrum. Meth. A 614, 345 (2010)", url: "https://doi.org/10.1016/j.nima.2009.12.050" }, { label: "BES Collaboration, Phys. Rev. Lett. 69, 3021 (1992)", url: "https://doi.org/10.1103/PhysRevLett.69.3021" }, { label: "BESIII Collaboration, Phys. Rev. Lett. 110, 252001 (2013)", url: "https://doi.org/10.1103/PhysRevLett.110.252001" }, { label: "Asian Scientist: 2016 Breakthrough Prize in Fundamental Physics", url: "https://www.asianscientist.com/2015/11/topnews/neutrino-breakthrough-prize-2016/" }, { label: "GSI: JUNO delivers first physics results (2025)", url: "https://www.gsi.de/en/start/news/details/2025/11/19/juno-experiment-first-data" }],
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
