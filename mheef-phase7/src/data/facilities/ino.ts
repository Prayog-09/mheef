import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'ino',
  name: "INO",
  fullName: "India-based Neutrino Observatory",
  type: 'neutrino-observatory',
  country: "India",
  lat: 9.955,
  lng: 77.283,
  founded: 2015,
  status: 'planned',
  overview: "The India-based Neutrino Observatory is a proposed underground laboratory in the Bodi West Hills of Theni district, Tamil Nadu, the intended successor to the Kolar Gold Fields experiments. Its main detector, ICAL, would be a 50-kilotonne magnetised iron calorimeter able to tell neutrinos from antineutrinos. The project has been held up for years by legal challenges, and its funding was reported terminated in 2023, so its future is uncertain.",
  specs: [
    { label: "ICAL detector mass", value: "About 50 kilotonnes of magnetised iron", sources: [{ label: "ICAL Collaboration, Physics potential of the ICAL detector at INO, Pramana 88, 79 (2017)", url: "https://doi.org/10.1007/s12043-017-1373-4" }] },
  ],
  history: [
    { year: 2017, event: "The collaboration publishes the physics case for the ICAL detector.", sources: [{ label: "ICAL Collaboration, Physics potential of the ICAL detector at INO, Pramana 88, 79 (2017)", url: "https://doi.org/10.1007/s12043-017-1373-4" }] },
    { year: 2023, event: "With the project stalled by lawsuits and court orders, its funding is reported to have been terminated as of March 2023.", sources: [{ label: "ThePrint: Kolar Gold Fields and India's neutrino legacy", url: "https://theprint.in/science/how-experiments-at-karnatakas-kolar-gold-fields-are-last-remaining-piece-of-indias-neutrino-legacy/2361654/" }] },
  ],
  experiments: [
    { id: 'ino-ical', name: "ICAL", description: "Iron Calorimeter: a magnetised detector designed to study atmospheric neutrinos and antineutrinos separately and so determine the neutrino mass ordering.", topics: ['neutrinos'], sources: [{ label: "ICAL Collaboration, Physics potential of the ICAL detector at INO, Pramana 88, 79 (2017)", url: "https://doi.org/10.1007/s12043-017-1373-4" }] },
  ],
  keyResults: [
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "ICAL physics paper", url: "https://doi.org/10.1007/s12043-017-1373-4" },
  ],
};

export default facility;
