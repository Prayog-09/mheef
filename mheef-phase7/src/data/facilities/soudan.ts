import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'soudan',
  name: "Soudan",
  fullName: "Soudan Underground Laboratory",
  type: 'underground-laboratory',
  country: "United States",
  lat: 47.82,
  lng: -92.242,
  founded: 1981,
  status: 'historic',
  overview: "The Soudan Underground Laboratory occupied a former iron mine in northern Minnesota, about 700 m below ground. It held the far detector of the MINOS experiment, which studied a neutrino beam sent 735 km through the Earth from Fermilab, and the CDMS II dark matter experiment.",
  specs: [
    { label: "MINOS far detector mass", value: "5,400 tons", sources: [{ label: "The magnetized steel and scintillator calorimeters of the MINOS experiment (arXiv:0805.3170)", url: "https://arxiv.org/abs/0805.3170" }] },
    { label: "Distance from Fermilab", value: "735 km", sources: [{ label: "MINOS Collaboration, Phys. Rev. Lett. 97, 191801 (2006)", url: "https://doi.org/10.1103/PhysRevLett.97.191801" }] },
  ],
  images: [
    {
      file: 'minos.jpg',
      width: 1600,
      height: 1064,
      alt: "An octagonal steel detector in an underground cavern, with a large mural on the rock wall.",
      caption: "The MINOS far detector in the Soudan mine, 2004.",
      credit: "ShakataGaNai",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:MINOS_Project_in_Soudan_Mine.jpg",
    },
  ],
  history: [
    { year: 2006, event: "MINOS reports the disappearance of muon neutrinos between Fermilab and Soudan, confirming neutrino oscillations with an accelerator beam.", sources: [{ label: "MINOS Collaboration, Phys. Rev. Lett. 97, 191801 (2006)", url: "https://doi.org/10.1103/PhysRevLett.97.191801" }] },
    { year: 2010, event: "CDMS II publishes the final results of its dark matter search, with two candidate events consistent with background.", sources: [{ label: "CDMS II Collaboration, Science 327, 1619 (2010)", url: "https://doi.org/10.1126/science.1186112" }] },
  ],
  experiments: [
    { id: 'soudan-minos', name: "MINOS far detector", description: "Magnetised steel and scintillator calorimeter measuring the neutrino beam from Fermilab.", topics: ['neutrinos'], sources: [{ label: "The magnetized steel and scintillator calorimeters of the MINOS experiment (arXiv:0805.3170)", url: "https://arxiv.org/abs/0805.3170" }, { label: "MINOS Collaboration, Phys. Rev. Lett. 97, 191801 (2006)", url: "https://doi.org/10.1103/PhysRevLett.97.191801" }] },
    { id: 'soudan-cdms', name: "CDMS II", description: "Cryogenic germanium and silicon detectors searching for dark matter particles.", topics: ['dark-matter'], sources: [{ label: "CDMS II Collaboration, Science 327, 1619 (2010)", url: "https://doi.org/10.1126/science.1186112" }] },
  ],
  keyResults: [
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "MINOS detector paper", url: "https://arxiv.org/abs/0805.3170" },
  ],
};

export default facility;
