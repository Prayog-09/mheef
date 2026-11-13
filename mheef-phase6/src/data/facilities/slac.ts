import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'slac',
  name: "SLAC",
  fullName: "SLAC National Accelerator Laboratory",
  type: 'accelerator-laboratory',
  country: "United States",
  lat: 37.419,
  lng: -122.2046,
  founded: 1962,
  status: 'active',
  overview: "SLAC National Accelerator Laboratory in Menlo Park, California, was built around a two-mile linear electron accelerator. Electron scattering experiments there revealed point-like constituents inside the proton, and its SPEAR storage ring produced the J/psi particle and the tau lepton. The laboratory later ran the BaBar experiment on matter-antimatter differences in B mesons, and today its linac drives the LCLS X-ray free-electron laser.",
  specs: [
    { label: "Linear accelerator length", value: "2 miles (about 3.2 km)", sources: [{ label: "SLAC: Our story", url: "https://www6.slac.stanford.edu/about/our-story" }] },
    { label: "Nobel Prizes for work at the laboratory", value: "Four", sources: [{ label: "SLAC: Our story", url: "https://www6.slac.stanford.edu/about/our-story" }] },
  ],
  history: [
    { year: 1962, event: "SLAC begins with the construction of a two-mile-long linear electron accelerator.", sources: [{ label: "SLAC: Our story", url: "https://www6.slac.stanford.edu/about/our-story" }] },
    { year: 1969, event: "Electron-proton scattering experiments at the linac find that the proton contains point-like constituents, later identified with quarks. Jerome Friedman, Henry Kendall and Richard Taylor share the 1990 Nobel Prize.", sources: [{ label: "Bloom et al., Phys. Rev. Lett. 23, 930 (1969)", url: "https://doi.org/10.1103/PhysRevLett.23.930" }, { label: "Breidenbach et al., Phys. Rev. Lett. 23, 935 (1969)", url: "https://doi.org/10.1103/PhysRevLett.23.935" }, { label: "Nobel Prize in Physics 1990", url: "https://www.nobelprize.org/prizes/physics/1990/summary/" }] },
    { year: 1974, event: "The Mark I detector at the SPEAR electron-positron ring discovers a narrow resonance, the J/psi, at the same time as a team at Brookhaven. Burton Richter shares the 1976 Nobel Prize.", sources: [{ label: "Augustin et al., Phys. Rev. Lett. 33, 1406 (1974)", url: "https://doi.org/10.1103/PhysRevLett.33.1406" }, { label: "Nobel Prize in Physics 1976", url: "https://www.nobelprize.org/prizes/physics/1976/summary/" }] },
    { year: 1975, event: "Martin Perl's group reports anomalous electron-muon events at SPEAR, the first evidence for the tau lepton. Perl shares the 1995 Nobel Prize.", sources: [{ label: "Perl et al., Phys. Rev. Lett. 35, 1489 (1975)", url: "https://doi.org/10.1103/PhysRevLett.35.1489" }, { label: "Nobel Prize in Physics 1995", url: "https://www.nobelprize.org/prizes/physics/1995/summary/" }] },
    { year: 2001, event: "The BaBar experiment observes CP violation in the decays of neutral B mesons.", sources: [{ label: "BaBar Collaboration, Phys. Rev. Lett. 87, 091801 (2001)", url: "https://doi.org/10.1103/PhysRevLett.87.091801" }] },
    { year: 2009, event: "The Linac Coherent Light Source (LCLS), the first hard X-ray free-electron laser, produces its first laser light using the last third of the linac.", sources: [{ label: "Emma et al., Nature Photonics 4, 641 (2010)", url: "https://doi.org/10.1038/nphoton.2010.176" }] },
  ],
  experiments: [
    { id: 'slac-spear', name: "SPEAR / Mark I", description: "Electron-positron storage ring and its detector, where the J/psi and the tau lepton were discovered.", topics: ['qcd', 'electroweak'], startYear: 1972, sources: [{ label: "Augustin et al., Phys. Rev. Lett. 33, 1406 (1974)", url: "https://doi.org/10.1103/PhysRevLett.33.1406" }, { label: "Perl et al., Phys. Rev. Lett. 35, 1489 (1975)", url: "https://doi.org/10.1103/PhysRevLett.35.1489" }] },
    { id: 'slac-babar', name: "BaBar", description: "Detector at the PEP-II asymmetric electron-positron collider that measured CP violation in B-meson decays.", topics: ['b-physics', 'cp-violation'], startYear: 1999, endYear: 2008, sources: [{ label: "BaBar Collaboration, Phys. Rev. Lett. 87, 091801 (2001)", url: "https://doi.org/10.1103/PhysRevLett.87.091801" }] },
    { id: 'slac-lcls', name: "LCLS", description: "X-ray free-electron laser driven by the SLAC linac, producing pulses at wavelengths down to about one angstrom.", topics: ['synchrotron-light'], startYear: 2009, sources: [{ label: "Emma et al., Nature Photonics 4, 641 (2010)", url: "https://doi.org/10.1038/nphoton.2010.176" }] },
  ],
  keyResults: [
    { year: 1969, discovery: "Point-like Constituents of the Proton", description: "Deep inelastic electron-proton scattering showed that the proton has an internal structure of point-like particles, the experimental basis of the quark model. Nobel Prize 1990.", sources: [{ label: "Bloom et al., Phys. Rev. Lett. 23, 930 (1969)", url: "https://doi.org/10.1103/PhysRevLett.23.930" }, { label: "Breidenbach et al., Phys. Rev. Lett. 23, 935 (1969)", url: "https://doi.org/10.1103/PhysRevLett.23.935" }, { label: "Nobel Prize in Physics 1990", url: "https://www.nobelprize.org/prizes/physics/1990/summary/" }] },
    { year: 1974, discovery: "Discovery of the J/psi", description: "A narrow resonance in electron-positron annihilation revealed the charm quark. Nobel Prize 1976.", sources: [{ label: "Augustin et al., Phys. Rev. Lett. 33, 1406 (1974)", url: "https://doi.org/10.1103/PhysRevLett.33.1406" }, { label: "Nobel Prize in Physics 1976", url: "https://www.nobelprize.org/prizes/physics/1976/summary/" }] },
    { year: 1975, discovery: "Discovery of the Tau Lepton", description: "Events with an electron and a muon and missing energy gave the first evidence for a third charged lepton. Nobel Prize 1995.", sources: [{ label: "Perl et al., Phys. Rev. Lett. 35, 1489 (1975)", url: "https://doi.org/10.1103/PhysRevLett.35.1489" }, { label: "Nobel Prize in Physics 1995", url: "https://www.nobelprize.org/prizes/physics/1995/summary/" }] },
  ],
  importantPeople: [
    { name: "Burton Richter", contribution: "Led the SPEAR experiment that discovered the J/psi; Nobel Prize in Physics 1976.", sources: [{ label: "Nobel Prize in Physics 1976", url: "https://www.nobelprize.org/prizes/physics/1976/summary/" }] },
    { name: "Martin Perl", contribution: "Discovered the tau lepton at SPEAR; Nobel Prize in Physics 1995.", sources: [{ label: "Nobel Prize in Physics 1995", url: "https://www.nobelprize.org/prizes/physics/1995/summary/" }] },
    { name: "Richard Taylor", contribution: "Co-led the deep inelastic scattering experiments at the linac; Nobel Prize in Physics 1990.", sources: [{ label: "Nobel Prize in Physics 1990", url: "https://www.nobelprize.org/prizes/physics/1990/summary/" }] },
  ],
  readMore: [
    { label: "Official Site", url: "https://www6.slac.stanford.edu" },
  ],
};

export default facility;
