import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'snolab',
  name: 'SNOLAB',
  type: 'underground-laboratory',
  country: 'Canada',
  lat: 46.475,
  lng: -81.201,
  founded: 2004,
  status: 'active',
  overview: "SNOLAB, located 2 km underground in the Creighton nickel mine near Sudbury, Ontario, is the world's deepest clean-room laboratory. Its predecessor, the Sudbury Neutrino Observatory (SNO), resolved the 30-year solar neutrino problem in 2002 by proving that electron neutrinos produced in the Sun oscillate into other flavours. SNOLAB now hosts experiments searching for dark matter (DEAP-3600, NEWS-G) and neutrinoless double-beta decay (SNO+).",
  specs: [
    { label: "Depth", value: "2 km", sources: [{ label: "SNOLAB: About", url: "https://www.snolab.ca/about/about-snolab/" }] },
    { label: "Underground clean space", value: "5,000 m²", sources: [{ label: "SNOLAB: About", url: "https://www.snolab.ca/about/about-snolab/" }] },
  ],
  images: [
    {
      file: 'surface-building.jpg',
      width: 1600,
      height: 1064,
      alt: "An orange and glass office building in snow with a SNOLAB sign in front.",
      caption: "The SNOLAB surface building, 2014.",
      credit: "Boardhead",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:SNOLAB_2014-03-21.jpg",
    },
  ],
  history: [
    { year: 1999, event: "SNO detector begins operations, using 1,000 tonnes of heavy water to separately detect charged-current and neutral-current neutrino interactions.", sources: [{ label: "The Sudbury Neutrino Observatory, Nucl. Instrum. Meth. A 449, 172 (2000)", url: "https://doi.org/10.1016/S0168-9002(99)01469-2" }] },
    { year: 2001, event: "SNO charged-current result shows the solar electron-neutrino flux is one-third the Standard Solar Model prediction, hinting strongly at flavour change.", sources: [{ label: "SNO Collaboration, Phys. Rev. Lett. 87, 071301 (2001)", url: "https://doi.org/10.1103/PhysRevLett.87.071301" }] },
    { year: 2002, event: "SNO neutral-current measurement proves the total active neutrino flux matches solar model predictions, establishing that solar electron-neutrinos oscillate into other flavours. Nobel Prize 2015.", sources: [{ label: "Nobel Prize in Physics 2015", url: "https://www.nobelprize.org/prizes/physics/2015/summary/" }] },
    { year: 2012, event: "SNOLAB officially opens as an expanded underground facility, adding new experimental halls adjacent to the original SNO cavity.", sources: [{ label: "Symmetry: Scientists celebrate completion of underground physics laboratory (2012)", url: "https://www.symmetrymagazine.org/breaking/2012/05/17/scientists-celebrate-completion-of-underground-physics-laboratory" }] },
    { year: 2021, event: "SNO+ finishes filling its acrylic vessel with about 780 tonnes of liquid scintillator; loading it with tellurium for the neutrinoless double-beta decay search is planned as a later phase.", sources: [{ label: "The SNO+ Journey to neutrinoless double-beta decay (arXiv:2403.19351)", url: "https://arxiv.org/abs/2403.19351" }] },
  ],
  experiments: [
    { id: 'snolab-snop', name: 'SNO+', description: "Reuses the SNO detector with liquid scintillator in place of heavy water; it measures reactor and solar neutrinos and is to be loaded with tellurium to search for neutrinoless double-beta decay of 130-Te.", topics: ['neutrinos'], startYear: 2017, sources: [{ label: "The SNO+ Journey to neutrinoless double-beta decay (arXiv:2403.19351)", url: "https://arxiv.org/abs/2403.19351" }] },
    { id: 'snolab-deap', name: 'DEAP-3600', description: "Single-phase liquid-argon scintillation detector, designed for a 3,600-kg target, searching for WIMP dark matter 2 km underground at SNOLAB.", topics: ['dark-matter'], startYear: 2016, sources: [{ label: "DEAP Collaboration, Phys. Rev. D 100, 022004 (2019)", url: "https://doi.org/10.1103/PhysRevD.100.022004" }] },
  ],
  keyResults: [
    { year: 2002, discovery: "Resolution of the Solar Neutrino Problem", description: "SNO's neutral-current measurement proved the total solar neutrino flux matches the Standard Solar Model — solar electron-neutrinos oscillate into other active flavours, confirming neutrino mass. Nobel Prize in Physics 2015.", sources: [{ label: "Nobel Prize in Physics 2015", url: "https://www.nobelprize.org/prizes/physics/2015/summary/" }] },
  ],
  importantPeople: [
    { name: "Arthur McDonald", contribution: "Director of the SNO collaboration; his team's neutral-current measurement definitively resolved the solar neutrino problem. Nobel Prize in Physics 2015.", sources: [{ label: "Nobel Prize in Physics 2015", url: "https://www.nobelprize.org/prizes/physics/2015/summary/" }] },
    { name: "Hamish Robertson", contribution: "US co-spokesman of SNO and its scientific director in 2003-04; an expert in neutrino mass measurement.", sources: [{ label: "R. G. H. Robertson: curriculum vitae (University of Washington)", url: "https://faculty.washington.edu/rghr/hr_cv4.pdf" }] },
  ],
  readMore: [
    { label: "SNOLAB Official Site", url: "https://www.snolab.ca" },
    { label: "Nobel Prize 2015 (Neutrino Oscillations)", url: "https://www.nobelprize.org/prizes/physics/2015/summary/" },
  ],
};

export default facility;
