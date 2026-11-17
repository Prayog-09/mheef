import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'veritas',
  name: "VERITAS",
  fullName: "Very Energetic Radiation Imaging Telescope Array System",
  type: 'gamma-ray-observatory',
  country: "United States",
  lat: 31.675,
  lng: -110.952,
  founded: 2007,
  status: 'active',
  overview: "VERITAS is an array of four 12-metre imaging atmospheric Cherenkov telescopes at the Fred Lawrence Whipple Observatory in southern Arizona. It observes gamma rays from about 85 GeV to above 30 TeV, and among its results are gamma rays from the starburst galaxy M82 and pulsed emission above 100 GeV from the Crab pulsar.",
  specs: [
    { label: "Telescopes", value: "Four, each 12 m in diameter", sources: [{ label: "The Very Energetic Radiation Imaging Telescope Array System (VERITAS) (arXiv:2507.09813)", url: "https://arxiv.org/abs/2507.09813" }] },
    { label: "Energy range", value: "85 GeV to above 30 TeV", sources: [{ label: "The Very Energetic Radiation Imaging Telescope Array System (VERITAS) (arXiv:2507.09813)", url: "https://arxiv.org/abs/2507.09813" }] },
  ],
  images: [
    {
      file: 'telescope-t2.jpg',
      width: 1600,
      height: 1200,
      alt: "The segmented mirror of a dish telescope reflecting the setting sun.",
      caption: "Telescope T2 of the VERITAS array, 2015.",
      credit: "Étienne Bourbeau",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:VERITAS_sunset2.JPG",
    },
  ],
  history: [
    { year: 2005, event: "The first VERITAS telescope begins operating.", sources: [{ label: "The first VERITAS telescope, Astropart. Phys. 25, 391 (2006)", url: "https://doi.org/10.1016/j.astropartphys.2006.04.002" }] },
    { year: 2007, event: "The full array of four telescopes is completed.", sources: [{ label: "The Very Energetic Radiation Imaging Telescope Array System (VERITAS) (arXiv:2507.09813)", url: "https://arxiv.org/abs/2507.09813" }] },
    { year: 2011, event: "VERITAS detects pulsed gamma rays above 100 GeV from the Crab pulsar.", sources: [{ label: "VERITAS Collaboration, Science 334, 69 (2011)", url: "https://doi.org/10.1126/science.1208192" }] },
  ],
  experiments: [
    { id: 'veritas-array', name: "VERITAS array", description: "Four 12-m Cherenkov telescopes observing very-high-energy gamma rays stereoscopically.", topics: ['cosmic-rays'], startYear: 2007, sources: [{ label: "The Very Energetic Radiation Imaging Telescope Array System (VERITAS) (arXiv:2507.09813)", url: "https://arxiv.org/abs/2507.09813" }] },
  ],
  keyResults: [
    { year: 2009, discovery: "Gamma Rays from the Starburst Galaxy M82", description: "The detection linked intense star formation to the production of cosmic rays.", sources: [{ label: "VERITAS Collaboration, Nature 462, 770 (2009)", url: "https://doi.org/10.1038/nature08557" }] },
    { year: 2011, discovery: "Pulsed Gamma Rays Above 100 GeV from the Crab Pulsar", description: "Pulsed emission at such high energies was not expected from existing pulsar models.", sources: [{ label: "VERITAS Collaboration, Science 334, 69 (2011)", url: "https://doi.org/10.1126/science.1208192" }] },
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Official Site", url: "https://veritas.sao.arizona.edu" },
  ],
};

export default facility;
