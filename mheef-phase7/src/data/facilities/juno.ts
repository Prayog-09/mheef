import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'juno',
  name: 'JUNO',
  fullName: "Jiangmen Underground Neutrino Observatory",
  type: 'neutrino-observatory',
  country: 'China',
  lat: 22.118,
  lng: 112.518,
  founded: 2015,
  foundedBasis: { meaning: "construction-start", sources: [{ label: "CERN Courier: Ground-breaking for China's new neutrino observatory", url: "https://cerncourier.com/a/ground-breaking-for-chinas-new-neutrino-observatory/" }] },
  location: { represents: "The JUNO site on Neutrino Road near Kaiping, Jiangmen", sources: [{ label: "OpenStreetMap: Jiangmen Underground Neutrino Observatory", url: "https://www.openstreetmap.org/way/905454906" }] },
  status: 'active',
  overview: "The Jiangmen Underground Neutrino Observatory (JUNO), near Jiangmen in Guangdong, China, was described at its ground-breaking as the world's largest and highest-precision liquid scintillator detector: 20,000 tonnes of liquid scintillator under 700 m of rock, viewed by more than 20,000 large and 25,000 small photomultiplier tubes. It lies 53 km from both the Yangjiang and Taishan nuclear power plants and is designed to determine the neutrino mass ordering and to measure oscillation parameters with sub-percent precision. Construction began on 10 January 2015, and data taking started on 26 August 2025.",
  overviewSources: [{ label: "CERN Courier: Ground-breaking for China's new neutrino observatory", url: "https://cerncourier.com/a/ground-breaking-for-chinas-new-neutrino-observatory/" }, { label: "GSI: JUNO delivers first physics results (2025)", url: "https://www.gsi.de/en/start/news/details/2025/11/19/juno-experiment-first-data" }],
  specs: [
    { label: "Liquid scintillator mass", value: "20,000 tonnes", sources: [{ label: "Neutrino physics with JUNO, J. Phys. G 43, 030401 (2016)", url: "https://doi.org/10.1088/0954-3899/43/3/030401" }] },
    { label: "Reactor baseline", value: "53 km", sources: [{ label: "Neutrino physics with JUNO, J. Phys. G 43, 030401 (2016)", url: "https://doi.org/10.1088/0954-3899/43/3/030401" }] },
    { label: "Photomultiplier tubes", value: "More than 20,000 large and 25,000 small", sources: [{ label: "GSI: JUNO delivers first physics results (2025)", url: "https://www.gsi.de/en/start/news/details/2025/11/19/juno-experiment-first-data" }] },
  ],
  history: [
    { year: 2013, event: "JUNO, first proposed in 2008, has its funding approved by the Chinese Academy of Sciences and the Guangdong provincial government; it builds on the success of the Daya Bay theta-13 measurement.", sources: [{ label: "GSI: JUNO delivers first physics results (2025)", url: "https://www.gsi.de/en/start/news/details/2025/11/19/juno-experiment-first-data" }] },
    { year: 2015, event: "A ground-breaking ceremony on 10 January 2015 starts construction of the JUNO underground laboratory near Kaiping, Jiangmen, Guangdong.", sources: [{ label: "CERN Courier: Ground-breaking for China's new neutrino observatory", url: "https://cerncourier.com/a/ground-breaking-for-chinas-new-neutrino-observatory/" }] },
    { year: 2021, event: "Detector installation begins; more than 20,000 large and 25,000 small photomultiplier tubes give a dual-calorimetry design that improves energy resolution. Installation finishes in December 2024.", sources: [{ label: "GSI: JUNO delivers first physics results (2025)", url: "https://www.gsi.de/en/start/news/details/2025/11/19/juno-experiment-first-data" }, { label: "JUNO physics and detector, Prog. Part. Nucl. Phys. 123, 103927 (2022)", url: "https://doi.org/10.1016/j.ppnp.2021.103927" }] },
    { year: 2025, event: "With the detector filled with 20,000 tonnes of liquid scintillator, JUNO begins data taking on 26 August 2025; first results on the solar oscillation parameters follow in November.", sources: [{ label: "GSI: JUNO delivers first physics results", url: "https://www.gsi.de/en/start/news/details/2025/11/19/juno-experiment-first-data" }] },
    { year: 2026, event: "JUNO's first reactor-neutrino oscillation measurement is published in Nature.", sources: [{ label: "IHEP: first JUNO physics result published in Nature", url: "https://english.ihep.cas.cn/nw/han/y26/202606/t20260610_1161472.html" }] },
  ],
  experiments: [
    { id: 'juno-main', name: 'JUNO Main Detector', description: "20,000-tonne liquid-scintillator sphere designed to determine the neutrino mass ordering and measure oscillation parameters using reactor antineutrinos from two nearby nuclear power complexes.", topics: ['neutrinos'], startYear: 2025, sources: [{ label: "Neutrino physics with JUNO, J. Phys. G 43, 030401 (2016)", url: "https://doi.org/10.1088/0954-3899/43/3/030401" }] },
  ],
  keyResults: [],
  importantPeople: [
    { name: "Yifang Wang", contribution: "JUNO project manager and spokesperson; director of IHEP Beijing from 2011 to 2024 and earlier a leader of the Daya Bay experiment.", sources: [{ label: "GSI: JUNO delivers first physics results (2025)", url: "https://www.gsi.de/en/start/news/details/2025/11/19/juno-experiment-first-data" }] },
    { name: "Jun Cao", contribution: "JUNO deputy spokesperson and, since October 2024, director of IHEP; previously a leading member of the Daya Bay experiment that first measured theta-13.", sources: [{ label: "GSI: JUNO delivers first physics results (2025)", url: "https://www.gsi.de/en/start/news/details/2025/11/19/juno-experiment-first-data" }] },
  ],
  readMore: [
    { label: "JUNO Official Site", url: "https://juno.ihep.ac.cn" },
  ],
};

export default facility;
