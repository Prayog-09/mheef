import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'chacaltaya',
  name: "Chacaltaya",
  fullName: "Chacaltaya Cosmic Ray Laboratory",
  type: 'cosmic-ray-observatory',
  country: "Bolivia",
  lat: -16.353,
  lng: -68.131,
  founded: 1952,
  location: { represents: "Mount Chacaltaya, near La Paz", sources: [{ label: "OpenStreetMap: Chacaltaya (peak)", url: "https://www.openstreetmap.org/node/582796953" }] },
  status: 'active',
  overview: "The Chacaltaya laboratory stands at 5,220 m on Mount Chacaltaya in the Bolivian Andes, about an hour's drive from La Paz; CERN Courier described it in 2001 as the highest continuously operating cosmic-ray research laboratory in the world. Photographic emulsions exposed to cosmic rays at high altitude in 1947, including plates César Lattes took to Chacaltaya, revealed the pion; Cecil Powell received the 1950 Nobel Prize in Physics for the photographic method and his discoveries regarding mesons.",
  overviewSources: [{ label: "CERN Courier: High energies and high altitudes (2001)", url: "https://cerncourier.com/a/high-energies-and-high-altitudes/" }, { label: "Lattes, Muirhead, Occhialini and Powell, Nature 159, 694 (1947)", url: "https://doi.org/10.1038/159694a0" }, { label: "Lattes, Occhialini and Powell, Nature 160, 453 (1947)", url: "https://doi.org/10.1038/160453a0" }, { label: "Nobel Prize in Physics 1950", url: "https://www.nobelprize.org/prizes/physics/1950/summary/" }],
  specs: [
    { label: "Altitude", value: "5,220 m", sources: [{ label: "CERN Courier: High energies and high altitudes", url: "https://cerncourier.com/a/high-energies-and-high-altitudes/" }] },
  ],
  images: [
    {
      file: 'observatory-entrance.jpg',
      width: 1600,
      height: 815,
      alt: "A stone gateway on a snowy mountainside with observatory buildings behind it.",
      caption: "Entrance to the Chacaltaya Astrophysical Observatory, 2011.",
      credit: "DiverDave",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Chacaltaya_Astrophysical_Observatory_(04).JPG",
    },
  ],
  history: [
    { year: 1947, event: "Photographic emulsions exposed to cosmic rays at high altitude, including plates Lattes took to Chacaltaya, reveal the pion and its decay into a muon.", sources: [{ label: "Lattes, Muirhead, Occhialini and Powell, Nature 159, 694 (1947)", url: "https://doi.org/10.1038/159694a0" }, { label: "Lattes, Occhialini and Powell, Nature 160, 453 (1947)", url: "https://doi.org/10.1038/160453a0" }, { label: "CERN Courier: High energies and high altitudes", url: "https://cerncourier.com/a/high-energies-and-high-altitudes/" }] },
  ],
  experiments: [
    { id: 'chacaltaya-emulsions', name: "Emulsion exposures", description: "Photographic emulsion plates left at high altitude to record the tracks of cosmic-ray particles.", topics: ['cosmic-rays'], startYear: 1947, sources: [{ label: "Lattes, Occhialini and Powell, Nature 160, 453 (1947)", url: "https://doi.org/10.1038/160453a0" }] },
  ],
  keyResults: [
    { year: 1947, discovery: "Discovery of the Pion", description: "Tracks in the emulsions showed a meson stopping and decaying into a lighter one. Cecil Powell received the 1950 Nobel Prize for the method and these discoveries.", sources: [{ label: "Lattes, Muirhead, Occhialini and Powell, Nature 159, 694 (1947)", url: "https://doi.org/10.1038/159694a0" }, { label: "Lattes, Occhialini and Powell, Nature 160, 453 (1947)", url: "https://doi.org/10.1038/160453a0" }, { label: "Nobel Prize in Physics 1950", url: "https://www.nobelprize.org/prizes/physics/1950/summary/" }] },
  ],
  importantPeople: [
    { name: "César Lattes", contribution: "Brazilian physicist who co-discovered the pion and exposed the decisive plates at Chacaltaya.", sources: [{ label: "Lattes, Occhialini and Powell, Nature 160, 453 (1947)", url: "https://doi.org/10.1038/160453a0" }, { label: "CERN Courier: High energies and high altitudes", url: "https://cerncourier.com/a/high-energies-and-high-altitudes/" }] },
  ],
  readMore: [
    { label: "Official Site", url: "https://rayoscosmicos.umsa.bo/" },
  ],
};

export default facility;
