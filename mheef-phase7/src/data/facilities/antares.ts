import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'antares',
  name: "ANTARES",
  fullName: "Astronomy with a Neutrino Telescope and Abyss environmental RESearch",
  type: 'neutrino-observatory',
  country: "France",
  lat: 42.8,
  lng: 6.17,
  founded: 2006,
  location: { represents: "The former detector site, 42°48′ N, 6°10′ E, 40 km off Toulon", sources: [{ label: "ANTARES Collaboration: About us", url: "https://antares.in2p3.fr/about-us/" }] },
  foundedBasis: { meaning: "first-operation", sources: [{ label: "ANTARES Collaboration: The ANTARES adventure (2022)", url: "https://antares.in2p3.fr/the-antares-adventure/" }] },
  status: 'historic',
  overview: "ANTARES was the first undersea neutrino telescope, anchored 2,475 m deep in the Mediterranean about 40 km offshore from Toulon. Its first detection line was deployed on 14 February 2006, and the twelve-line detector, carrying 885 optical modules, was completed in May 2008. It took data for 16 years, until 14 February 2022, by when the KM3NeT detectors had surpassed its sensitivity, and it was then dismantled.",
  overviewSources: [{ label: "ANTARES Collaboration: The ANTARES adventure (2022)", url: "https://antares.in2p3.fr/the-antares-adventure/" }, { label: "ANTARES: the first undersea neutrino telescope, Nucl. Instrum. Meth. A 656, 11 (2011)", url: "https://doi.org/10.1016/j.nima.2011.06.103" }],
  specs: [
    { label: "Detection lines", value: "12, carrying 885 optical modules", sources: [{ label: "ANTARES Collaboration: The ANTARES adventure (2022)", url: "https://antares.in2p3.fr/the-antares-adventure/" }, { label: "ANTARES: the first undersea neutrino telescope, Nucl. Instrum. Meth. A 656, 11 (2011)", url: "https://doi.org/10.1016/j.nima.2011.06.103" }] },
  ],
  history: [
    { year: 2006, event: "The first detection line is deployed.", sources: [{ label: "ANTARES Collaboration: The ANTARES adventure (2022)", url: "https://antares.in2p3.fr/the-antares-adventure/" }] },
    { year: 2008, event: "The detector is completed in May 2008.", sources: [{ label: "ANTARES Collaboration: The ANTARES adventure (2022)", url: "https://antares.in2p3.fr/the-antares-adventure/" }] },
    { year: 2022, event: "ANTARES stops taking data in February 2022 and is dismantled.", sources: [{ label: "ANTARES Collaboration: The ANTARES adventure (2022)", url: "https://antares.in2p3.fr/the-antares-adventure/" }] },
  ],
  experiments: [
    { id: 'antares-det', name: "ANTARES detector", description: "Twelve vertical lines of optical modules on the seabed, detecting Cherenkov light from neutrino-induced muons.", topics: ['neutrinos', 'cosmic-rays'], startYear: 2006, endYear: 2022, sources: [{ label: "ANTARES: the first undersea neutrino telescope, Nucl. Instrum. Meth. A 656, 11 (2011)", url: "https://doi.org/10.1016/j.nima.2011.06.103" }, { label: "ANTARES Collaboration: The ANTARES adventure (2022)", url: "https://antares.in2p3.fr/the-antares-adventure/" }] },
  ],
  keyResults: [
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Official Site", url: "https://antares.in2p3.fr" },
  ],
};

export default facility;
