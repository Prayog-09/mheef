import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'triumf',
  name: 'TRIUMF',
  type: 'nuclear-physics-facility',
  country: 'Canada',
  lat: 49.2488,
  lng: -123.2381,
  founded: 1968,
  status: 'active',
  overview: "TRIUMF at the University of British Columbia in Vancouver is Canada's particle accelerator centre. Its 520-MeV H-minus cyclotron — one of the world's largest — drives the ISAC radioactive ion beam facility, producing rare isotopes for nuclear physics, nuclear astrophysics, and medical isotope production. TRIUMF is a world leader in precision mass measurements of short-lived nuclei, gamma-ray spectroscopy of neutron-rich isotopes, and isotopes for cancer therapy. The ARIEL electron linac, commissioned in 2022, triples rare-isotope production capacity.",
  specs: [
    { label: "Cyclotron proton energy", value: "500 MeV", sources: [{ label: "CERN Courier: Tales of TRIUMF", url: "https://cerncourier.com/a/tales-of-triumf/" }] },
  ],
  history: [
    { year: 1968, event: "TRIUMF, planned by the University of British Columbia, Simon Fraser University, and the University of Victoria, receives federal funding in April 1968 and construction of its cyclotron begins.", sources: [{ label: "CERN Courier: Tales of TRIUMF", url: "https://cerncourier.com/a/tales-of-triumf/" }] },
    { year: 1974, event: "Protons are first extracted from the TRIUMF 500 MeV cyclotron on 15 December 1974; it goes on to deliver high-intensity beams for meson physics and nuclear science.", sources: [{ label: "CERN Courier: Tales of TRIUMF", url: "https://cerncourier.com/a/tales-of-triumf/" }, { label: "The TRIUMF 500 MeV cyclotron, Hyperfine Interact. 225, 9 (2014)", url: "https://doi.org/10.1007/s10751-013-0878-6" }] },
    { year: 1998, event: "ISAC, approved in 1995, delivers its first radioactive ion beam in November 1998, extending TRIUMF's reach into nuclear astrophysics and precision Standard Model tests.", sources: [{ label: "Ball et al., The TRIUMF-ISAC facility, Phys. Scr. 91, 093002 (2016)", url: "https://doi.org/10.1088/0031-8949/91/9/093002" }] },
    { year: 2006, event: "The ISAC-II superconducting linear accelerator delivers its first beam in 2006, post-accelerating radioactive ions for nuclear reaction measurements; it reaches its design voltage in 2010.", sources: [{ label: "Laxdal and Marchetto, The ISAC post-accelerator, Hyperfine Interact. 225, 79 (2014)", url: "https://doi.org/10.1007/s10751-013-0884-8" }] },
    { year: 2014, event: "The superconducting electron linac for ARIEL (Advanced Rare IsotopE Laboratory) produces its first beam, at 23 MeV, on 30 September 2014; ARIEL is being built to add new rare-isotope production routes alongside the cyclotron.", sources: [{ label: "TRIUMF news release: Canada's superconducting electron linear accelerator produces first beam (2014)", url: "https://lists.triumf.ca/pipermail/news-releases/2014-October/000110.html" }, { label: "University of Victoria: First beam from TRIUMF electron accelerator", url: "https://www.uvic.ca/science/physics/vispa/home/news/archive/elinac201410.php" }] },
  ],
  experiments: [
    { id: 'triumf-titan', name: 'TITAN', description: "TRIUMF's Ion Trap for Atomic and Nuclear science; precision Penning and Ebit trap system measuring atomic masses of short-lived exotic nuclei with high precision.", topics: ['rare-isotopes', 'nuclear-structure'], startYear: 2003, sources: [{ label: "Dilling et al., Int. J. Mass Spectrom. 251, 198 (2006)", url: "https://doi.org/10.1016/j.ijms.2006.01.044" }] },
    { id: 'triumf-griffin', name: 'GRIFFIN', description: "Gamma-Ray Infrastructure For Fundamental Investigations of Nuclei; 16-detector HPGe array at ISAC for decay spectroscopy of neutron-rich rare isotopes, mapping nuclear structure across the chart of nuclides.", topics: ['nuclear-structure', 'rare-isotopes'], startYear: 2014, sources: [{ label: "The GRIFFIN facility, Nucl. Instrum. Meth. A 918, 9 (2019)", url: "https://doi.org/10.1016/j.nima.2018.11.115" }] },
  ],
  keyResults: [
    { year: 2008, discovery: "Penning-Trap Masses of Halo Nuclei", description: "TITAN made the first Penning-trap mass measurements of the halo nuclei helium-8 and lithium-11. Lithium-11, with a half-life of 8.8 ms, was the shortest-lived nuclide ever measured in a Penning trap, and its two-neutron separation energy became seven times more precise (Physical Review Letters 101, 012501 and 202501).", sources: [{ label: "Ryjkov et al., Phys. Rev. Lett. 101, 012501 (2008)", url: "https://doi.org/10.1103/PhysRevLett.101.012501" }, { label: "Smith et al., Phys. Rev. Lett. 101, 202501 (2008)", url: "https://doi.org/10.1103/PhysRevLett.101.202501" }] },
  ],
  importantPeople: [
    { name: "Erich Vogt", contribution: "Co-founder of TRIUMF with John Warren and its director from 1981 until his retirement in 1994.", sources: [{ label: "UBC Physics and Astronomy: Remembering Erich W. Vogt", url: "https://phas.ubc.ca/remembering-erich-w-vogt-1929-2014" }] },
    { name: "Jens Dilling", contribution: "Designed and built the TITAN ion-trap system and served as TRIUMF's associate laboratory director for physical sciences until 2021.", sources: [{ label: "ORNL: Dilling named associate laboratory director", url: "https://www.ornl.gov/news/dilling-named-associate-laboratory-director-neutron-sciences-ornl" }] },
  ],
  readMore: [
    { label: "TRIUMF Official Site", url: "https://www.triumf.ca" },
  ],
};

export default facility;
