import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'surf',
  name: 'SURF / LUX-ZEPLIN',
  fullName: "Sanford Underground Research Facility",
  type: 'underground-laboratory',
  country: 'United States',
  lat: 44.352,
  lng: -103.771,
  founded: 2006,
  status: 'active',
  overview: "The Sanford Underground Research Facility (SURF) occupies the former Homestake Gold Mine in Lead, South Dakota, at a depth of 1,478 m. Its predecessor, the Homestake experiment begun in 1965, was the first to detect solar neutrinos and created the solar neutrino problem that drove 30 years of physics. Today SURF houses LUX-ZEPLIN (LZ) — a 10-tonne dual-phase liquid-xenon detector that holds the world record for WIMP dark matter sensitivity.",
  specs: [
    { label: "Main laboratory level", value: "4,850 ft (about 1,480 m) underground", sources: [{ label: "Sanford Lab: Our story", url: "https://sanfordlab.org/our-story" }] },
    { label: "LZ location", value: "Davis Cavern, 4,850-ft level", sources: [{ label: "The LUX-ZEPLIN (LZ) experiment, Nucl. Instrum. Meth. A 953, 163047 (2020)", url: "https://doi.org/10.1016/j.nima.2019.163047" }] },
  ],
  history: [
    { year: 1965, event: "Raymond Davis Jr. starts building the chlorine radiochemical solar-neutrino experiment deep in the Homestake Mine, with 615 tonnes of perchloroethylene as its target.", sources: [{ label: "Davis, Harmer and Hoffman, Phys. Rev. Lett. 20, 1205 (1968)", url: "https://doi.org/10.1103/PhysRevLett.20.1205" }] },
    { year: 1968, event: "Davis reports far fewer solar neutrinos than predicted \u2014 the beginning of the solar neutrino problem that took three decades to resolve.", sources: [{ label: "Davis, Harmer and Hoffman, Phys. Rev. Lett. 20, 1205 (1968)", url: "https://doi.org/10.1103/PhysRevLett.20.1205" }] },
    { year: 2002, event: "Homestake Mine closes after more than a century of gold production; plans form to convert it into a dedicated underground science facility.", sources: [{ label: "Sanford Lab: Our story", url: "https://sanfordlab.org/our-story" }] },
    { year: 2006, event: "Barrick Gold donates the mine and, in 2006, T. Denny Sanford pledges $70 million; the laboratory is created the following year and its 4,850-ft level is dedicated in 2009.", sources: [{ label: "Sanford Lab: Our story", url: "https://sanfordlab.org/our-story" }] },
    { year: 2022, event: "LUX-ZEPLIN (LZ) completes its first science run, setting the world's most stringent upper limits on the spin-independent WIMP-nucleon cross section.", sources: [{ label: "LZ Collaboration, Phys. Rev. Lett. 131, 041002 (2023)", url: "https://doi.org/10.1103/PhysRevLett.131.041002" }] },
  ],
  experiments: [
    { id: 'surf-lz', name: 'LUX-ZEPLIN (LZ)', description: "10-tonne dual-phase liquid-xenon time-projection chamber — the world's most sensitive direct dark matter detector, searching for WIMP nuclear recoils at the 4,850-ft level.", topics: ['dark-matter'], startYear: 2022, sources: [{ label: "The LUX-ZEPLIN (LZ) experiment, Nucl. Instrum. Meth. A 953, 163047 (2020)", url: "https://doi.org/10.1016/j.nima.2019.163047" }, { label: "LZ Collaboration, Phys. Rev. Lett. 131, 041002 (2023)", url: "https://doi.org/10.1103/PhysRevLett.131.041002" }] },
    { id: 'surf-majorana', name: 'MAJORANA DEMONSTRATOR', description: "Array of enriched germanium detectors searching for neutrinoless double-beta decay of 76-Ge, probing the Majorana nature of the neutrino.", topics: ['neutrinos'], startYear: 2015, endYear: 2021, sources: [{ label: "Majorana Collaboration, Phys. Rev. Lett. 130, 062501 (2023)", url: "https://doi.org/10.1103/PhysRevLett.130.062501" }] },
  ],
  keyResults: [
    { year: 1968, discovery: "Solar Neutrino Deficit (Homestake)", description: "Davis's chlorine experiment measured only ~1/3 of the predicted solar neutrino flux, posing the solar neutrino problem that ultimately proved neutrino oscillation and mass. Nobel Prize in Physics 2002.", sources: [{ label: "Nobel Prize in Physics 2002", url: "https://www.nobelprize.org/prizes/physics/2002/summary/" }] },
    { year: 2023, discovery: "World-Leading WIMP Dark Matter Limits (LZ)", description: "LZ's first result, from 60 live days of data, set the most stringent upper limits on the WIMP-nucleon spin-independent cross section for WIMP masses above ~9 GeV/c2, constraining large regions of supersymmetric dark matter parameter space.", sources: [{ label: "LZ Collaboration, Phys. Rev. Lett. 131, 041002 (2023)", url: "https://doi.org/10.1103/PhysRevLett.131.041002" }] },
    { year: 2025, discovery: "LZ 4.2 Tonne-Year Dark Matter Search", description: "Combining 280 live days of data, LZ found no excess over expected backgrounds and excluded spin-independent WIMP-nucleon cross sections down to 2.2 x 10^-48 cm2 at a WIMP mass of 40 GeV/c2 (Physical Review Letters 135, 011802).", sources: [{ label: "LZ Collaboration, arXiv:2410.17036", url: "https://arxiv.org/abs/2410.17036" }] },
  ],
  importantPeople: [
    { name: "Raymond Davis Jr.", contribution: "Built and operated the Homestake solar neutrino experiment (1965-2002), creating the solar neutrino problem; Nobel Prize in Physics 2002.", sources: [{ label: "Nobel Prize in Physics 2002", url: "https://www.nobelprize.org/prizes/physics/2002/summary/" }] },
    { name: "Richard Gaitskell", contribution: "Co-founder and co-spokesperson of LUX and later spokesperson of LZ; a leading figure in the liquid-xenon dark matter programme at SURF.", sources: [{ label: "Brown University: LUX dark matter results (2014)", url: "https://news.brown.edu/articles/2014/07/lux" }, { label: "Brown University: LZ sets new record (2025)", url: "https://www.brown.edu/news/2025-12-08/lz-dark-matter" }] },
  ],
  readMore: [
    { label: "SURF Official Site", url: "https://sanfordlab.org" },
    { label: "LZ Experiment", url: "https://lz.lbl.gov" },
    { label: "Nobel Prize 2002 (Solar Neutrinos)", url: "https://www.nobelprize.org/prizes/physics/2002/summary/" },
  ],
};

export default facility;
