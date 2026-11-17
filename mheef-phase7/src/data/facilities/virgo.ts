import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'virgo',
  name: 'Virgo',
  type: 'gravitational-wave-observatory',
  country: 'Italy',
  lat: 43.631,
  lng: 10.504,
  founded: 2007,
  status: 'active',
  overview: "The Virgo gravitational-wave detector is a 3-km L-shaped laser interferometer near Cascina, Pisa, operated by the European Gravitational Observatory (EGO) consortium. Joining the LIGO network in 2017, the addition of a third detector improved source sky localisation from ~1,000 deg2 to tens of deg2, enabling rapid electromagnetic follow-up of mergers. Advanced Virgo+ operates with frequency-dependent squeezing and improved mirror coatings.",
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
