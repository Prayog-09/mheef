import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'baksan',
  name: "Baksan",
  fullName: "Baksan Neutrino Observatory",
  type: 'underground-laboratory',
  country: "Russia",
  lat: 43.275,
  lng: 42.69,
  founded: 1967,
  foundedBasis: { meaning: "approved", sources: [{ label: "CERN Courier: Baksan scales new neutrino heights (2017)", url: "https://cerncourier.com/a/baksan-scales-new-neutrino-heights/" }] },
  location: { represents: "The observatory's site in the Baksan valley, by the village of Neutrino", sources: [{ label: "OpenStreetMap: Baksan Neutrino Observatory (БНО)", url: "https://www.openstreetmap.org/way/1504181774" }] },
  status: 'active',
  overview: "The Baksan Neutrino Observatory, operated by the Institute for Nuclear Research of the Russian Academy of Sciences, is tunnelled under Mount Andyrchi in the Baksan valley of the Northern Caucasus. The Soviet government gave the go-ahead to build it on 29 June 1967, and its first neutrino telescope started operation ten years later. Its gallium experiment SAGE published its first solar neutrino results in 1991 and measured the solar neutrino capture rate with data up to 2007; the same gallium was later used in the BEST experiment, which in 2022 confirmed a puzzling shortfall, the gallium anomaly, in the neutrinos detected from an intense radioactive source.",
  overviewSources: [{ label: "CERN Courier: Baksan scales new neutrino heights (2017)", url: "https://cerncourier.com/a/baksan-scales-new-neutrino-heights/" }, { label: "SAGE Collaboration, Phys. Rev. Lett. 67, 3332 (1991)", url: "https://doi.org/10.1103/PhysRevLett.67.3332" }, { label: "SAGE Collaboration, Phys. Rev. C 80, 015807 (2009)", url: "https://doi.org/10.1103/PhysRevC.80.015807" }, { label: "BEST Collaboration, Phys. Rev. Lett. 128, 232501 (2022)", url: "https://doi.org/10.1103/PhysRevLett.128.232501" }],
  specs: [
  ],
  images: [
    {
      file: 'scintillation-telescope.jpg',
      width: 1600,
      height: 1060,
      alt: "A large underground hall filled with rows of cylindrical detector tanks.",
      caption: "One of the four horizontal planes of the Baksan Underground Scintillation Telescope, 2010.",
      credit: "Konstantin Malanchev",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Baksan_Underground_Scintillation_Telescope,_one_of_the_4_horizontal_planes_-_DSC_0788.jpg",
    },
  ],
  history: [
    { year: 1991, event: "SAGE publishes its first search for solar neutrinos using the capture of neutrinos on gallium.", sources: [{ label: "SAGE Collaboration, Phys. Rev. Lett. 67, 3332 (1991)", url: "https://doi.org/10.1103/PhysRevLett.67.3332" }] },
    { year: 2009, event: "SAGE reports its measurement of the solar neutrino capture rate from data taken up to 2007.", sources: [{ label: "SAGE Collaboration, Phys. Rev. C 80, 015807 (2009)", url: "https://doi.org/10.1103/PhysRevC.80.015807" }] },
    { year: 2022, event: "BEST finds 20 to 24 per cent fewer germanium atoms than expected from a chromium-51 neutrino source, confirming the gallium anomaly.", sources: [{ label: "BEST Collaboration, Phys. Rev. Lett. 128, 232501 (2022)", url: "https://doi.org/10.1103/PhysRevLett.128.232501" }, { label: "A Search for Electron Neutrino Transitions to Sterile States in the BEST Experiment (arXiv:2201.07364)", url: "https://arxiv.org/abs/2201.07364" }] },
  ],
  experiments: [
    { id: 'baksan-sage', name: "SAGE", description: "Gallium-metal radiochemical experiment measuring low-energy solar neutrinos.", topics: ['neutrinos'], sources: [{ label: "SAGE Collaboration, Phys. Rev. C 80, 015807 (2009)", url: "https://doi.org/10.1103/PhysRevC.80.015807" }] },
    { id: 'baksan-best', name: "BEST", description: "Baksan Experiment on Sterile Transitions: a gallium target in two zones around an intense chromium-51 source, searching for oscillations into sterile neutrinos.", topics: ['neutrinos'], startYear: 2019, sources: [{ label: "BEST Collaboration, Phys. Rev. Lett. 128, 232501 (2022)", url: "https://doi.org/10.1103/PhysRevLett.128.232501" }, { label: "A Search for Electron Neutrino Transitions to Sterile States in the BEST Experiment (arXiv:2201.07364)", url: "https://arxiv.org/abs/2201.07364" }] },
  ],
  keyResults: [
    { year: 2022, discovery: "Confirmation of the Gallium Anomaly", description: "Both zones of the BEST target saw a similar deficit, strengthening the anomaly without showing the distance dependence expected from oscillations.", sources: [{ label: "BEST Collaboration, Phys. Rev. Lett. 128, 232501 (2022)", url: "https://doi.org/10.1103/PhysRevLett.128.232501" }] },
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Official Site", url: "https://www.inr.ru/eng/ebno.html" },
  ],
};

export default facility;
