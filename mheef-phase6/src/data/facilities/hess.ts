import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'hess',
  name: "H.E.S.S.",
  fullName: "High Energy Stereoscopic System",
  type: 'gamma-ray-observatory',
  country: "Namibia",
  lat: -23.2714,
  lng: 16.5003,
  founded: 2002,
  status: 'active',
  overview: "H.E.S.S. is an array of imaging atmospheric Cherenkov telescopes in the Khomas Highland of Namibia, near the Gamsberg mountain. It observes very-high-energy gamma rays by recording the faint flashes of light they cause in the atmosphere. Its name also honours Victor Hess, who received the 1936 Nobel Prize for discovering cosmic radiation. Its survey of the southern Milky Way revealed many new gamma-ray sources.",
  specs: [
    { label: "Altitude", value: "1,800 m", sources: [{ label: "H.E.S.S.: The High Energy Stereoscopic System (arXiv:2405.11104)", url: "https://arxiv.org/abs/2405.11104" }] },
    { label: "Telescopes", value: "Four of 12 m and one of 28 m", sources: [{ label: "H.E.S.S.: The High Energy Stereoscopic System (arXiv:2405.11104)", url: "https://arxiv.org/abs/2405.11104" }] },
    { label: "Energy range", value: "Tens of GeV to tens of TeV", sources: [{ label: "H.E.S.S.: About", url: "https://www.mpi-hd.mpg.de/HESS/pages/about/" }] },
  ],
  history: [
    { year: 2002, event: "The first H.E.S.S. telescope begins operating in summer 2002.", sources: [{ label: "H.E.S.S.: About", url: "https://www.mpi-hd.mpg.de/HESS/pages/about/" }] },
    { year: 2004, event: "With all four telescopes running since December 2003, the observatory is inaugurated on 28 September 2004.", sources: [{ label: "H.E.S.S.: About", url: "https://www.mpi-hd.mpg.de/HESS/pages/about/" }] },
    { year: 2012, event: "The much larger fifth telescope, H.E.S.S. II, becomes operational in July 2012.", sources: [{ label: "H.E.S.S.: About", url: "https://www.mpi-hd.mpg.de/HESS/pages/about/" }] },
    { year: 2016, event: "H.E.S.S. reports evidence that protons are accelerated to petaelectronvolt energies in the Galactic Centre.", sources: [{ label: "H.E.S.S. Collaboration, Nature 531, 476 (2016)", url: "https://doi.org/10.1038/nature17147" }] },
  ],
  experiments: [
    { id: 'hess-array', name: "H.E.S.S. telescope array", description: "Four 12-m Cherenkov telescopes at the corners of a square with a 28-m telescope at its centre, observing gamma rays stereoscopically.", topics: ['cosmic-rays'], startYear: 2002, sources: [{ label: "H.E.S.S.: The High Energy Stereoscopic System (arXiv:2405.11104)", url: "https://arxiv.org/abs/2405.11104" }, { label: "H.E.S.S.: About", url: "https://www.mpi-hd.mpg.de/HESS/pages/about/" }] },
  ],
  keyResults: [
    { year: 2005, discovery: "A New Population of Gamma-Ray Sources in the Milky Way", description: "A survey of the inner Galaxy found eight previously unknown sources of very-high-energy gamma rays.", sources: [{ label: "H.E.S.S. Collaboration, Science 307, 1938 (2005)", url: "https://doi.org/10.1126/science.1108643" }] },
    { year: 2016, discovery: "Petaelectronvolt Protons in the Galactic Centre", description: "Diffuse gamma-ray emission around the Galactic Centre pointed to a source accelerating protons to PeV energies.", sources: [{ label: "H.E.S.S. Collaboration, Nature 531, 476 (2016)", url: "https://doi.org/10.1038/nature17147" }] },
  ],
  importantPeople: [
    { name: "Victor Hess", contribution: "Discoverer of cosmic radiation, after whom the observatory is named; Nobel Prize in Physics 1936.", sources: [{ label: "H.E.S.S.: About", url: "https://www.mpi-hd.mpg.de/HESS/pages/about/" }, { label: "Nobel Prize in Physics 1936", url: "https://www.nobelprize.org/prizes/physics/1936/summary/" }] },
  ],
  readMore: [
    { label: "Official Site", url: "https://www.mpi-hd.mpg.de/HESS/" },
  ],
};

export default facility;
