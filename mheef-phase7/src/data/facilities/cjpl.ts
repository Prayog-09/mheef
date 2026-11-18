import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'cjpl',
  name: "Jinping (CJPL)",
  fullName: "China Jinping Underground Laboratory",
  type: 'underground-laboratory',
  country: "China",
  lat: 28.1763,
  lng: 101.7203,
  founded: 2010,
  foundedBasis: { meaning: "completed", sources: [{ label: "Cheng et al., Annu. Rev. Nucl. Part. Sci. 67, 231 (2017)", url: "https://doi.org/10.1146/annurev-nucl-102115-044842" }] },
  location: { represents: "The laboratory beside the Jinping II hydropower access tunnel", sources: [{ label: "OpenStreetMap: China Jinping Underground Laboratory", url: "https://www.openstreetmap.org/node/7880609479" }] },
  status: 'active',
  overview: "The China Jinping Underground Laboratory (CJPL), inaugurated in 2010, lies beneath Jinping Mountain in Sichuan, beside the access tunnel of the Jinping II hydropower station. With about 2,400 m of rock above it, it was described in 2017 as having the deepest rock overburden and the largest space by volume of any underground laboratory. It hosts the PandaX liquid-xenon and CDEX germanium dark matter experiments.",
  overviewSources: [{ label: "Cheng et al., Annu. Rev. Nucl. Part. Sci. 67, 231 (2017)", url: "https://doi.org/10.1146/annurev-nucl-102115-044842" }, { label: "OpenStreetMap: China Jinping Underground Laboratory", url: "https://www.openstreetmap.org/node/7880609479" }, { label: "PandaX-4T Collaboration, Phys. Rev. Lett. 127, 261802 (2021)", url: "https://doi.org/10.1103/PhysRevLett.127.261802" }, { label: "CDEX Collaboration, Phys. Rev. Lett. 120, 241301 (2018)", url: "https://doi.org/10.1103/PhysRevLett.120.241301" }],
  specs: [
    { label: "Rock overburden", value: "About 2,400 m", sources: [{ label: "Cheng et al., Annu. Rev. Nucl. Part. Sci. 67, 231 (2017)", url: "https://doi.org/10.1146/annurev-nucl-102115-044842" }] },
  ],
  history: [
    { year: 2010, event: "The first phase of the laboratory, CJPL-I, begins operating.", sources: [{ label: "Cheng et al., Annu. Rev. Nucl. Part. Sci. 67, 231 (2017)", url: "https://doi.org/10.1146/annurev-nucl-102115-044842" }] },
    { year: 2018, event: "The CDEX-10 germanium experiment publishes limits on light dark matter particles.", sources: [{ label: "CDEX Collaboration, Phys. Rev. Lett. 120, 241301 (2018)", url: "https://doi.org/10.1103/PhysRevLett.120.241301" }] },
    { year: 2021, event: "PandaX-4T publishes dark matter search results from its commissioning run.", sources: [{ label: "PandaX-4T Collaboration, Phys. Rev. Lett. 127, 261802 (2021)", url: "https://doi.org/10.1103/PhysRevLett.127.261802" }] },
  ],
  experiments: [
    { id: 'cjpl-pandax', name: "PandaX-4T", description: "Dual-phase liquid-xenon time projection chamber searching for dark matter particles.", topics: ['dark-matter'], sources: [{ label: "PandaX-4T Collaboration, Phys. Rev. Lett. 127, 261802 (2021)", url: "https://doi.org/10.1103/PhysRevLett.127.261802" }] },
    { id: 'cjpl-cdex', name: "CDEX", description: "Germanium detectors searching for light dark matter particles.", topics: ['dark-matter'], sources: [{ label: "CDEX Collaboration, Phys. Rev. Lett. 120, 241301 (2018)", url: "https://doi.org/10.1103/PhysRevLett.120.241301" }, { label: "Cheng et al., Annu. Rev. Nucl. Part. Sci. 67, 231 (2017)", url: "https://doi.org/10.1146/annurev-nucl-102115-044842" }] },
  ],
  keyResults: [
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Review: CJPL and its early science", url: "https://doi.org/10.1146/annurev-nucl-102115-044842" },
  ],
};

export default facility;
