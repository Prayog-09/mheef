import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'virgo',
  name: 'Virgo',
  type: 'gravitational-wave-observatory',
  country: 'Italy',
  lat: 43.631,
  lng: 10.504,
  founded: 2007,
  foundedBasis: { meaning: "first-operation", sources: [{ label: "Virgo: History", url: "https://www.virgo-gw.eu/about/virgo-history/" }] },
  location: { represents: "The Virgo interferometer at Cascina, near Pisa", sources: [{ label: "OpenStreetMap: Interferometro VIRGO (European Gravitational Observatory)", url: "https://www.openstreetmap.org/relation/3160577" }] },
  status: 'active',
  overview: "Virgo is a gravitational-wave detector with 3-km arms in the countryside near Pisa, Italy. Proposed in 1987 by Adalberto Giazotto and Alain Brillet and approved by France's CNRS and Italy's INFN in the early 1990s, it was built from 1997, inaugurated in 2003, and began scientific observations in 2007, the year an agreement was signed to operate Virgo and the LIGO detectors as a single machine; the European Gravitational Observatory (EGO) was founded in 2000. The upgraded Advanced Virgo joined LIGO in August 2017, and on 14 August detected the black hole merger GW170814, the first gravitational-wave observation by three detectors; three days later the network detected the neutron star merger GW170817.",
  overviewSources: [{ label: "Virgo: History", url: "https://www.virgo-gw.eu/about/virgo-history/" }, { label: "Virgo: The detector", url: "https://www.virgo-gw.eu/science/detector/" }, { label: "LIGO and Virgo Collaborations, Phys. Rev. Lett. 119, 141101 (2017)", url: "https://doi.org/10.1103/PhysRevLett.119.141101" }, { label: "LIGO and Virgo Collaborations, Phys. Rev. Lett. 119, 161101 (2017)", url: "https://doi.org/10.1103/PhysRevLett.119.161101" }],
  specs: [
    { label: "Arm length", value: "3 km", sources: [{ label: "Virgo: The detector", url: "https://www.virgo-gw.eu/science/detector/" }] },
  ],
  images: [
    {
      file: 'aerial.jpg',
      width: 1485,
      height: 804,
      alt: "Aerial view of two long straight tubes meeting at a central building in flat farmland.",
      caption: "The Virgo site from the air, showing the central building and the 3-km west arm.",
      credit: "The Virgo collaboration",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Virgo_aerial_view_01.jpg",
    },
  ],
  history: [
    { year: 1989, event: "Virgo, conceived two years earlier by Adalberto Giazotto and Alain Brillet, is formally proposed to the French CNRS and the Italian INFN.", sources: [{ label: "Virgo: History", url: "https://www.virgo-gw.eu/about/virgo-history/" }] },
    { year: 2003, event: "Virgo is inaugurated at Cascina, where construction had begun in 1997; commissioning follows.", sources: [{ label: "Virgo: History", url: "https://www.virgo-gw.eu/about/virgo-history/" }] },
    { year: 2007, event: "Virgo joins LIGO for joint science run VSR1/S5, establishing the LIGO-Virgo collaboration.", sources: [{ label: "Virgo: History", url: "https://www.virgo-gw.eu/about/virgo-history/" }] },
    { year: 2017, event: "Advanced Virgo joins LIGO O2; GW170814 is the first three-detector gravitational-wave observation, dramatically improving sky localisation. GW170817 follows days later.", sources: [{ label: "LIGO and Virgo Collaborations, Phys. Rev. Lett. 119, 141101 (2017)", url: "https://doi.org/10.1103/PhysRevLett.119.141101" }] },
    { year: 2024, event: "Virgo joins the fourth observing run on 10 April 2024, at the start of its second part (O4b), alongside the two LIGO detectors.", sources: [{ label: "Virgo: LIGO and Virgo detectors restart observation (2024)", url: "https://www.virgo-gw.eu/news/ligo-and-virgo-detectors-restart-gravitational-wave-observation/" }] },
  ],
  experiments: [
    { id: 'virgo-adv', name: 'Advanced Virgo+', description: "3-km Fabry-Perot Michelson interferometer with power recycling, signal recycling, and frequency-dependent squeezing; jointly detects and localises gravitational-wave sources with LIGO.", topics: ['gravitational-waves'], startYear: 2017, sources: [{ label: "Advanced Virgo, Class. Quantum Grav. 32, 024001 (2015)", url: "https://doi.org/10.1088/0264-9381/32/2/024001" }] },
  ],
  keyResults: [
    { year: 2017, discovery: "First Three-Detector Gravitational-Wave Observation (GW170814)", description: "LIGO Hanford, LIGO Livingston, and Virgo together detected a binary black hole merger, reducing the 90% credible sky area from 1,160 deg2 to 60 deg2 — enabling rapid multi-messenger follow-up of compact binary mergers.", sources: [{ label: "LIGO and Virgo Collaborations, Phys. Rev. Lett. 119, 141101 (2017)", url: "https://doi.org/10.1103/PhysRevLett.119.141101" }] },
  ],
  importantPeople: [
    { name: "Adalberto Giazotto", contribution: "Co-founded the Virgo experiment; invented the superattenuation seismic isolation system that gives Virgo world-leading sensitivity at low frequencies.", sources: [{ label: "Virgo: History", url: "https://www.virgo-gw.eu/about/virgo-history/" }] },
    { name: "Alain Brillet", contribution: "Co-proposed Virgo and led French contributions; expert in laser stabilisation and optical techniques for interferometric detection.", sources: [{ label: "Virgo: History", url: "https://www.virgo-gw.eu/about/virgo-history/" }] },
  ],
  readMore: [
    { label: "EGO / Virgo", url: "https://www.ego-gw.it" },
    { label: "Virgo Collaboration", url: "https://www.virgo-gw.eu" },
  ],
};

export default facility;
