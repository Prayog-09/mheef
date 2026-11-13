import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'vecc',
  name: "VECC Kolkata",
  fullName: "Variable Energy Cyclotron Centre",
  type: 'nuclear-physics-facility',
  country: "India",
  lat: 22.5958,
  lng: 88.4144,
  founded: 1969,
  status: 'active',
  overview: "The Variable Energy Cyclotron Centre in Kolkata is a research unit of India's Department of Atomic Energy built around cyclotrons. Its room-temperature cyclotron has run since 1977 and a superconducting cyclotron delivers heavy-ion beams; the centre works on experimental nuclear physics, accelerator technology and isotope production.",
  specs: [
    { label: "Cyclotrons", value: "K130 room-temperature, K500 superconducting, and a 30 MeV medical cyclotron", sources: [{ label: "VECC: About", url: "https://www.vecc.gov.in/about-us" }] },
  ],
  history: [
    { year: 1969, event: "Work on the cyclotron begins in Kolkata under the Bhabha Atomic Research Centre, following Homi Bhabha's proposal of 1965.", sources: [{ label: "VECC: About", url: "https://www.vecc.gov.in/about-us" }] },
    { year: 1977, event: "The K130 variable-energy cyclotron is commissioned.", sources: [{ label: "VECC: About", url: "https://www.vecc.gov.in/about-us" }] },
    { year: 1990, event: "VECC becomes an independent unit of the Department of Atomic Energy in May 1990.", sources: [{ label: "VECC: About", url: "https://www.vecc.gov.in/about-us" }] },
  ],
  experiments: [
    { id: 'vecc-k130', name: "K130 cyclotron", description: "Room-temperature variable-energy cyclotron, in operation since 1977.", topics: ['nuclear-structure'], startYear: 1977, sources: [{ label: "VECC: About", url: "https://www.vecc.gov.in/about-us" }] },
    { id: 'vecc-k500', name: "K500 superconducting cyclotron", description: "Superconducting cyclotron delivering heavy-ion beams for basic research.", topics: ['nuclear-structure', 'rare-isotopes'], sources: [{ label: "VECC: About", url: "https://www.vecc.gov.in/about-us" }] },
  ],
  keyResults: [
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Official Site", url: "https://www.vecc.gov.in" },
  ],
};

export default facility;
