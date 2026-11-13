import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'geo600',
  name: "GEO600",
  type: 'gravitational-wave-observatory',
  country: "Germany",
  lat: 52.2469,
  lng: 9.8083,
  founded: 1995,
  status: 'active',
  overview: "GEO600 is a German-British gravitational-wave detector with 600-metre arms near Ruthe, about 20 km south of Hannover. Smaller than LIGO and Virgo, it has served as the test bed for techniques now used in all large detectors, including signal recycling, monolithic mirror suspensions and squeezed light.",
  specs: [
    { label: "Arm length", value: "600 m", sources: [{ label: "GEO600: A brief history of GEO600", url: "https://www.geo600.org/23920/a-brief-history-of-geo600" }] },
  ],
  history: [
    { year: 1995, event: "Construction of the detector starts in September 1995.", sources: [{ label: "GEO600: A brief history of GEO600", url: "https://www.geo600.org/23920/a-brief-history-of-geo600" }] },
    { year: 2002, event: "GEO600 takes its first scientific data in August and September 2002, together with the LIGO detectors.", sources: [{ label: "GEO600: A brief history of GEO600", url: "https://www.geo600.org/23920/a-brief-history-of-geo600" }] },
    { year: 2011, event: "GEO600 becomes the first gravitational-wave observatory to operate with squeezed light, beating the quantum shot-noise limit.", sources: [{ label: "LIGO Scientific Collaboration, Nature Physics 7, 962 (2011)", url: "https://doi.org/10.1038/nphys2083" }] },
  ],
  experiments: [
    { id: 'geo600-det', name: "GEO600 interferometer", description: "Michelson interferometer with 600-m arms, using signal recycling and squeezed light.", topics: ['gravitational-waves'], startYear: 2002, sources: [{ label: "GEO600: A brief history of GEO600", url: "https://www.geo600.org/23920/a-brief-history-of-geo600" }, { label: "GEO600", url: "https://www.geo600.org/" }] },
  ],
  keyResults: [
    { year: 2011, discovery: "Observing Beyond the Quantum Shot-Noise Limit", description: "Injecting squeezed light into the interferometer improved its sensitivity beyond the limit set by quantum fluctuations of the laser light.", sources: [{ label: "LIGO Scientific Collaboration, Nature Physics 7, 962 (2011)", url: "https://doi.org/10.1038/nphys2083" }] },
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Official Site", url: "https://www.geo600.org" },
  ],
};

export default facility;
