import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'baikal-gvd',
  name: "Baikal-GVD",
  fullName: "Baikal Gigaton Volume Detector",
  type: 'neutrino-observatory',
  country: "Russia",
  lat: 51.77,
  lng: 104.4,
  founded: 2015,
  status: 'active',
  overview: "Baikal-GVD is a neutrino telescope in the deep water of southern Lake Baikal, deployed each winter from the lake's ice. Strings of optical modules record the light from particles produced when neutrinos interact in the water. It is the largest neutrino telescope in the Northern Hemisphere.",
  specs: [
    { label: "Lake depth at the site", value: "1,366 m, 3.6 km from the shore", sources: [{ label: "Neutrino Telescope in Lake Baikal: Present and Future (arXiv:1908.05427)", url: "https://arxiv.org/abs/1908.05427" }] },
    { label: "One cluster", value: "Eight strings carrying 288 optical modules", sources: [{ label: "Neutrino Telescope in Lake Baikal: Present and Future (arXiv:1908.05427)", url: "https://arxiv.org/abs/1908.05427" }] },
    { label: "Module depths", value: "750 m to 1,275 m", sources: [{ label: "Neutrino Telescope in Lake Baikal: Present and Future (arXiv:1908.05427)", url: "https://arxiv.org/abs/1908.05427" }] },
  ],
  images: [
    {
      file: 'ice-camp.jpg',
      width: 1600,
      height: 1067,
      alt: "Winches and cabins on the frozen surface of Lake Baikal, with snow-covered mountains behind.",
      caption: "Deploying parts of the Baikal-GVD telescope through the lake ice during a winter expedition.",
      credit: "Bair Shaybonov",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Deployment_of_the_Baikal-GVD_neutrino_telescope_from_the_ice_cover_of_Lake_Baikal_in_daylight.jpg",
    },
  ],
  history: [
    { year: 2015, event: "Deployment begins with the first cluster, installed in April 2015.", sources: [{ label: "Neutrino Telescope in Lake Baikal: Present and Future (arXiv:1908.05427)", url: "https://arxiv.org/abs/1908.05427" }] },
    { year: 2020, event: "By April 2020 the telescope has seven clusters with 2,016 optical modules.", sources: [{ label: "Neutrino astronomy at Lake Baikal (arXiv:2412.00164)", url: "https://arxiv.org/abs/2412.00164" }, { label: "Neutrino Telescope in Lake Baikal: Present and Future (arXiv:1908.05427)", url: "https://arxiv.org/abs/1908.05427" }] },
    { year: 2023, event: "Baikal-GVD publishes its measurement of the diffuse flux of astrophysical neutrinos.", sources: [{ label: "Baikal-GVD Collaboration, Phys. Rev. D 107, 042005 (2023)", url: "https://doi.org/10.1103/PhysRevD.107.042005" }] },
  ],
  experiments: [
    { id: 'baikal-gvd-array', name: "Baikal-GVD array", description: "Clusters of eight vertical strings of optical modules in Lake Baikal, detecting Cherenkov light from neutrino interactions.", topics: ['neutrinos', 'cosmic-rays'], startYear: 2015, sources: [{ label: "Neutrino Telescope in Lake Baikal: Present and Future (arXiv:1908.05427)", url: "https://arxiv.org/abs/1908.05427" }, { label: "JINR: About", url: "https://www.jinr.ru/about-en/" }] },
  ],
  keyResults: [
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Official Site", url: "https://baikalgvd.jinr.ru" },
  ],
};

export default facility;
