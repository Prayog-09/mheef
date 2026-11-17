import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'double-chooz',
  name: "Double Chooz",
  type: 'neutrino-observatory',
  country: "France",
  lat: 50.087,
  lng: 4.79,
  founded: 2011,
  status: 'historic',
  overview: "Double Chooz studied antineutrinos from the two reactors of the Chooz nuclear power plant in the French Ardennes. It followed the earlier CHOOZ experiment at the same site, whose limit on the mixing angle theta-13 stood for more than a decade, and in 2012 it published the first reactor indication that the angle is not zero.",
  specs: [
    { label: "Detector distances", value: "About 400 m (near) and 1,050 m (far) from the reactors", sources: [{ label: "Double Chooz: Searching for theta13 with reactor neutrinos (arXiv:1105.6079)", url: "https://arxiv.org/abs/1105.6079" }] },
  ],
  images: [
    {
      file: 'chooz-power-plant.jpg',
      width: 1600,
      height: 672,
      alt: "Two steaming cooling towers and two reactor buildings in a wooded river valley.",
      caption: "The Chooz nuclear power plant, the source of the antineutrinos the experiment measured, 2015.",
      credit: "Raimond Spekking",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Chooz_Nuclear_Power_Plant-9363-64.jpg",
    },
  ],
  history: [
    { year: 1999, event: "The CHOOZ experiment publishes its limits on neutrino oscillations, long the tightest constraint on theta-13.", sources: [{ label: "CHOOZ Collaboration, Phys. Lett. B 466, 415 (1999)", url: "https://doi.org/10.1016/S0370-2693(99)01072-2" }] },
    { year: 2012, event: "Double Chooz publishes an indication of reactor antineutrino disappearance from its far detector.", sources: [{ label: "Double Chooz Collaboration, Phys. Rev. Lett. 108, 131801 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.131801" }] },
  ],
  experiments: [
    { id: 'dchooz-detectors', name: "Double Chooz detectors", description: "Gadolinium-loaded liquid-scintillator detectors near and far from the reactor cores.", topics: ['neutrinos'], startYear: 2011, sources: [{ label: "Double Chooz: Searching for theta13 with reactor neutrinos (arXiv:1105.6079)", url: "https://arxiv.org/abs/1105.6079" }, { label: "Double Chooz Collaboration, Phys. Rev. Lett. 108, 131801 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.131801" }] },
  ],
  keyResults: [
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Double Chooz overview paper", url: "https://arxiv.org/abs/1105.6079" },
  ],
};

export default facility;
