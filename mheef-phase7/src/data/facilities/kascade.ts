import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'kascade',
  name: "KASCADE",
  fullName: "Karlsruhe Shower Core and Array Detector",
  type: 'cosmic-ray-observatory',
  country: "Germany",
  lat: 49.099,
  lng: 8.438,
  founded: 1996,
  status: 'historic',
  overview: "KASCADE, on the campus of what is now the Karlsruhe Institute of Technology, measured cosmic-ray air showers in the energy range of the 'knee', where the cosmic-ray spectrum steepens. By recording several components of each shower at once, it showed that the knee is caused by the fading of the lightest nuclei.",
  specs: [
    { label: "Array", value: "252 detector stations on a 200 m × 200 m grid", sources: [{ label: "Galactic cosmic rays and the knee: results from the KASCADE experiment (arXiv:astro-ph/0509253)", url: "https://arxiv.org/abs/astro-ph/0509253" }, { label: "The cosmic-ray experiment KASCADE, Nucl. Instrum. Meth. A 513, 490 (2003)", url: "https://doi.org/10.1016/S0168-9002(03)02076-X" }] },
  ],
  images: [
    {
      file: 'array.jpg',
      width: 1600,
      height: 1200,
      alt: "A simple wire antenna on a wooden frame in a field of small white detector huts.",
      caption: "A LOPES radio antenna among the detector stations of the KASCADE array in Karlsruhe, 2011.",
      credit: "FrankSchroeder",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:LOPES_Antenna.JPG",
    },
  ],
  history: [
    { year: 1996, event: "KASCADE begins operating.", sources: [{ label: "Galactic cosmic rays and the knee: results from the KASCADE experiment (arXiv:astro-ph/0509253)", url: "https://arxiv.org/abs/astro-ph/0509253" }] },
    { year: 2005, event: "KASCADE publishes energy spectra for separate groups of elements, showing that the knee comes from light nuclei.", sources: [{ label: "KASCADE Collaboration, Astropart. Phys. 24, 1 (2005)", url: "https://doi.org/10.1016/j.astropartphys.2005.04.001" }] },
  ],
  experiments: [
    { id: 'kascade-array', name: "KASCADE array", description: "Detector stations measuring the electrons and muons of air showers, with a central hadron calorimeter.", topics: ['cosmic-rays'], startYear: 1996, sources: [{ label: "The cosmic-ray experiment KASCADE, Nucl. Instrum. Meth. A 513, 490 (2003)", url: "https://doi.org/10.1016/S0168-9002(03)02076-X" }] },
  ],
  keyResults: [
    { year: 2005, discovery: "Origin of the Knee", description: "The steepening of the spectrum was traced to a drop in protons and helium nuclei, with heavier elements continuing to higher energy.", sources: [{ label: "KASCADE Collaboration, Astropart. Phys. 24, 1 (2005)", url: "https://doi.org/10.1016/j.astropartphys.2005.04.001" }, { label: "Galactic cosmic rays and the knee: results from the KASCADE experiment (arXiv:astro-ph/0509253)", url: "https://arxiv.org/abs/astro-ph/0509253" }] },
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "KASCADE detector paper", url: "https://doi.org/10.1016/S0168-9002(03)02076-X" },
  ],
};

export default facility;
