import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'jinr',
  name: "JINR Dubna",
  fullName: "Joint Institute for Nuclear Research",
  type: 'accelerator-laboratory',
  country: "Russia",
  lat: 56.7417,
  lng: 37.1917,
  founded: 1956,
  status: 'active',
  overview: "The Joint Institute for Nuclear Research in Dubna, north of Moscow, is an international laboratory established by a convention of eleven founding states. Its Flerov Laboratory is known for synthesising the heaviest elements of the periodic table, including flerovium and oganesson. The institute is building the NICA heavy-ion collider and takes part in the Baikal-GVD neutrino telescope in Lake Baikal.",
  specs: [
    { label: "Member states", value: "15", sources: [{ label: "JINR: About", url: "https://www.jinr.ru/about-en/" }] },
    { label: "Laboratories", value: "Seven", sources: [{ label: "JINR: About", url: "https://www.jinr.ru/about-en/" }] },
  ],
  history: [
    { year: 1956, event: "The convention establishing JINR is signed on 26 March 1956 by eleven founding states.", sources: [{ label: "JINR: About", url: "https://www.jinr.ru/about-en/" }] },
    { year: 1999, event: "A Dubna-led team reports the synthesis of a superheavy nucleus of element 114, later named flerovium, by bombarding plutonium with calcium-48.", sources: [{ label: "Oganessian et al., Phys. Rev. Lett. 83, 3154 (1999)", url: "https://doi.org/10.1103/PhysRevLett.83.3154" }] },
    { year: 2006, event: "The synthesis of isotopes of element 118, later named oganesson, is reported.", sources: [{ label: "Oganessian et al., Phys. Rev. C 74, 044602 (2006)", url: "https://doi.org/10.1103/PhysRevC.74.044602" }] },
    { year: 2019, event: "The Superheavy Element Factory, a new cyclotron complex for synthesising new elements, begins operation.", sources: [{ label: "JINR: Superheavy elements, scientific programme and infrastructure", url: "https://www.jinr.ru/posts/superheavy-elements-scientific-programme-and-infrastructure/" }, { label: "JINR: About", url: "https://www.jinr.ru/about-en/" }] },
  ],
  experiments: [
    { id: 'jinr-she', name: "Superheavy Element Factory", description: "Cyclotron complex of the Flerov Laboratory dedicated to synthesising and studying the heaviest elements.", topics: ['nuclear-structure', 'rare-isotopes'], startYear: 2019, sources: [{ label: "JINR: About", url: "https://www.jinr.ru/about-en/" }, { label: "JINR: Superheavy elements, scientific programme and infrastructure", url: "https://www.jinr.ru/posts/superheavy-elements-scientific-programme-and-infrastructure/" }] },
    { id: 'jinr-nica', name: "NICA", description: "Heavy-ion collider designed to study the properties of dense baryonic matter.", topics: ['heavy-ions', 'qcd'], sources: [{ label: "JINR: About", url: "https://www.jinr.ru/about-en/" }] },
  ],
  keyResults: [
    { year: 2006, discovery: "Synthesis of Element 118 (Oganesson)", description: "Fusion of calcium-48 with californium-249 produced the heaviest element so far identified.", sources: [{ label: "Oganessian et al., Phys. Rev. C 74, 044602 (2006)", url: "https://doi.org/10.1103/PhysRevC.74.044602" }] },
  ],
  importantPeople: [
    { name: "Yuri Oganessian", contribution: "Scientific leader of the Flerov Laboratory of Nuclear Reactions and lead author of the element 114 and 118 discovery papers; element 118 is named after him.", sources: [{ label: "Physics World: Russia's Joint Institute for Nuclear Research builds for the future", url: "https://physicsworld.com/a/russias-joint-institute-of-nuclear-research-builds-for-the-future/" }, { label: "Oganessian et al., Phys. Rev. C 74, 044602 (2006)", url: "https://doi.org/10.1103/PhysRevC.74.044602" }] },
  ],
  readMore: [
    { label: "Official Site", url: "https://www.jinr.ru/main-en/" },
  ],
};

export default facility;
