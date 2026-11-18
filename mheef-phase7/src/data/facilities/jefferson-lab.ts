import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'jefferson-lab',
  name: "Jefferson Lab",
  fullName: "Thomas Jefferson National Accelerator Facility",
  type: 'nuclear-physics-facility',
  country: "United States",
  lat: 37.0958,
  lng: -76.4817,
  founded: 1984,
  foundedBasis: { meaning: "approved", sources: [{ label: "Jefferson Lab fact sheet (2010, UNT Libraries web archive)", url: "https://webarchive.library.unt.edu/web/20120915100710/http://www.jlab.org/div_dept/admin/publications/factsheet.pdf" }] },
  location: { represents: "The Jefferson Lab site, Newport News, Virginia", sources: [{ label: "INSPIRE-HEP institution record: Jefferson Lab", url: "https://inspirehep.net/institutions/904961" }] },
  status: 'active',
  overview: "Jefferson Lab, in Newport News, Virginia, received its first federal funds in 1984 and was called CEBAF until 1996, after its accelerator, the Continuous Electron Beam Accelerator Facility. CEBAF was the first large-scale application of superconducting radio-frequency acceleration, and physics experiments there began in 1995. Its electron beams probe how quarks make up protons, neutrons and nuclei. An upgrade completed in 2017 raised the beam energy to 12 GeV and added a fourth experimental hall, Hall D.",
  overviewSources: [{ label: "Jefferson Lab fact sheet (2010, UNT Libraries web archive)", url: "https://webarchive.library.unt.edu/web/20120915100710/http://www.jlab.org/div_dept/admin/publications/factsheet.pdf" }, { label: "The Continuous Electron Beam Accelerator Facility at 12 GeV (arXiv:2408.16880)", url: "https://arxiv.org/abs/2408.16880" }],
  specs: [
    { label: "CEBAF beam energy", value: "12 GeV", sources: [{ label: "The Continuous Electron Beam Accelerator Facility at 12 GeV (arXiv:2408.16880)", url: "https://arxiv.org/abs/2408.16880" }] },
    { label: "Experimental halls", value: "Four (A, B, C and D)", sources: [{ label: "The Continuous Electron Beam Accelerator Facility at 12 GeV (arXiv:2408.16880)", url: "https://arxiv.org/abs/2408.16880" }] },
  ],
  images: [
    {
      file: 'hall-c.jpg',
      width: 1600,
      height: 1067,
      alt: "Wide-angle view of a domed experimental hall holding large spectrometers.",
      caption: "Experimental Hall C at Jefferson Lab.",
      credit: "U.S. Department of Energy",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:U.S._Department_of_Energy_-_Science_-_440_062_001_(9940016925).jpg",
    },
  ],
  history: [
    { year: 2000, event: "Polarisation-transfer measurements in Hall A show that the proton's electric and magnetic form factors fall off differently with momentum transfer.", sources: [{ label: "Jones et al., Phys. Rev. Lett. 84, 1398 (2000)", url: "https://doi.org/10.1103/PhysRevLett.84.1398" }] },
    { year: 2017, event: "The 12 GeV upgrade of CEBAF is completed, adding Hall D.", sources: [{ label: "The Continuous Electron Beam Accelerator Facility at 12 GeV (arXiv:2408.16880)", url: "https://arxiv.org/abs/2408.16880" }] },
    { year: 2018, event: "An analysis of CEBAF data gives the first determination of the pressure distribution inside the proton.", sources: [{ label: "Burkert, Elouadrhiri and Girod, Nature 557, 396 (2018)", url: "https://doi.org/10.1038/s41586-018-0060-z" }] },
  ],
  experiments: [
    { id: 'jlab-cebaf', name: "CEBAF", description: "Continuous Electron Beam Accelerator Facility: a recirculating superconducting linac delivering electron beams of up to 12 GeV to four experimental halls.", topics: ['qcd', 'nuclear-structure'], sources: [{ label: "The Continuous Electron Beam Accelerator Facility at 12 GeV (arXiv:2408.16880)", url: "https://arxiv.org/abs/2408.16880" }] },
  ],
  keyResults: [
    { year: 2018, discovery: "Pressure Distribution Inside the Proton", description: "Deeply virtual Compton scattering data revealed a strong outward pressure at the proton's centre and an inward, confining pressure towards its edge.", sources: [{ label: "Burkert, Elouadrhiri and Girod, Nature 557, 396 (2018)", url: "https://doi.org/10.1038/s41586-018-0060-z" }] },
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Official Site", url: "https://www.jlab.org" },
  ],
};

export default facility;
