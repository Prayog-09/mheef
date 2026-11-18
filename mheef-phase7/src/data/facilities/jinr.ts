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
  foundedBasis: { meaning: "established", sources: [{ label: "JINR: About", url: "https://www.jinr.ru/about-en/" }] },
  location: { represents: "JINR's grounds in the Institute district of Dubna", sources: [{ label: "OpenStreetMap: Joint Institute for Nuclear Research, Dubna", url: "https://www.openstreetmap.org/relation/12713706" }] },
  status: 'active',
  overview: "The Joint Institute for Nuclear Research (JINR), in Dubna in the Moscow Region, is an international research centre established under a convention signed on 26 March 1956 by eleven founding states. Teams led by Yuri Oganessian, scientific leader of its Flerov Laboratory of Nuclear Reactions, reported the synthesis of element 114 (flerovium) in 1999 and of element 118 (oganesson) in 2006, and JINR's Superheavy Element Factory began operating in 2019. Its research infrastructure also includes the NICA collider, designed to study dense baryonic matter, and the Baikal-GVD neutrino telescope in Lake Baikal.",
  overviewSources: [{ label: "JINR: About", url: "https://www.jinr.ru/about-en/" }, { label: "Oganessian et al., Phys. Rev. Lett. 83, 3154 (1999)", url: "https://doi.org/10.1103/PhysRevLett.83.3154" }, { label: "Oganessian et al., Phys. Rev. C 74, 044602 (2006)", url: "https://doi.org/10.1103/PhysRevC.74.044602" }, { label: "Physics World: Russia's Joint Institute for Nuclear Research builds for the future", url: "https://physicsworld.com/a/russias-joint-institute-of-nuclear-research-builds-for-the-future/" }, { label: "JINR: Superheavy elements, scientific programme and infrastructure", url: "https://www.jinr.ru/posts/superheavy-elements-scientific-programme-and-infrastructure/" }],
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
