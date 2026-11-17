import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'iuac',
  name: "IUAC New Delhi",
  fullName: "Inter-University Accelerator Centre",
  type: 'nuclear-physics-facility',
  country: "India",
  lat: 28.5403,
  lng: 77.164,
  founded: 1984,
  status: 'active',
  overview: "The Inter-University Accelerator Centre in New Delhi, originally the Nuclear Science Centre, gives researchers from universities across India access to accelerator beams. Its 15UD Pelletron tandem accelerator, later boosted by a superconducting linac, serves nuclear physics, materials science and radiation biology.",
  specs: [
    { label: "Pelletron", value: "15UD tandem, terminal potential up to 16 MV", sources: [{ label: "IUAC: Past, present and future, a perspective", url: "https://iuac.res.in/iuacoldwebsite/aboutus/history/index.html" }] },
  ],
  images: [
    {
      file: 'campus.jpg',
      width: 1600,
      height: 1200,
      alt: "A red and glass building seen across a garden with trees.",
      caption: "At the Inter-University Accelerator Centre, New Delhi, 2023.",
      credit: "Dakshesh Kumar",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Inter-University-Accelerator-Centre.jpg",
    },
  ],
  history: [
    { year: 1984, event: "The concept of an inter-university centre is approved by the Prime Minister on 19 June 1984.", sources: [{ label: "IUAC: Key dates", url: "https://www.iuac.res.in/iuacoldwebsite/aboutus/history/dates.pdf" }] },
    { year: 1990, event: "The Pelletron accelerator is commissioned and dedicated to the nation on 19 December 1990; the first user experiment follows in July 1991.", sources: [{ label: "IUAC: Key dates", url: "https://www.iuac.res.in/iuacoldwebsite/aboutus/history/dates.pdf" }] },
    { year: 2004, event: "The first module of the superconducting linac is commissioned.", sources: [{ label: "IUAC: Key dates", url: "https://www.iuac.res.in/iuacoldwebsite/aboutus/history/dates.pdf" }] },
    { year: 2005, event: "The centre is renamed the Inter-University Accelerator Centre.", sources: [{ label: "IUAC: Key dates", url: "https://www.iuac.res.in/iuacoldwebsite/aboutus/history/dates.pdf" }] },
  ],
  experiments: [
    { id: 'iuac-pelletron', name: "15UD Pelletron", description: "Tandem electrostatic accelerator providing ion beams for nuclear physics, materials science and radiation biology.", topics: ['nuclear-structure'], startYear: 1990, sources: [{ label: "IUAC: Key dates", url: "https://www.iuac.res.in/iuacoldwebsite/aboutus/history/dates.pdf" }, { label: "IUAC: Past, present and future, a perspective", url: "https://iuac.res.in/iuacoldwebsite/aboutus/history/index.html" }] },
    { id: 'iuac-inga', name: "INGA", description: "Indian National Gamma Array for gamma-ray spectroscopy of nuclei, commissioned at IUAC in 2008.", topics: ['nuclear-structure'], startYear: 2008, sources: [{ label: "IUAC: Key dates", url: "https://www.iuac.res.in/iuacoldwebsite/aboutus/history/dates.pdf" }] },
  ],
  keyResults: [
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Official Site", url: "https://www.iuac.res.in" },
  ],
};

export default facility;
