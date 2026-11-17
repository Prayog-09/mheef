import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'fermilab',
  name: 'Fermilab',
  fullName: "Fermi National Accelerator Laboratory",
  type: 'accelerator-laboratory',
  country: 'United States',
  lat: 41.8316,
  lng: -88.2456,
  founded: 1967,
  status: 'active',
  overview: "Fermi National Accelerator Laboratory in Batavia, Illinois was home to the Tevatron (1983-2011), the world's highest-energy proton-antiproton collider before the LHC. Its CDF and DZero experiments discovered the top quark in 1995. Today Fermilab leads the US neutrino programme with the NOvA long-baseline experiment and the Short-Baseline Neutrino (SBN) programme, and is building the Deep Underground Neutrino Experiment (DUNE) — a 1,300-km baseline beam to SURF in South Dakota.",
  specs: [
    { label: "Tevatron peak beam energy", value: "980 GeV", sources: [{ label: "CERN Courier: Farewell to the Tevatron", url: "https://cerncourier.com/a/farewell-to-the-tevatron/" }] },
    { label: "Tevatron operation", value: "1983 to 2011", sources: [{ label: "CERN Courier: Farewell to the Tevatron", url: "https://cerncourier.com/a/farewell-to-the-tevatron/" }] },
    { label: "NOvA baseline", value: "810 km", sources: [{ label: "NOvA Collaboration, Phys. Rev. Lett. 116, 151806 (2016)", url: "https://doi.org/10.1103/PhysRevLett.116.151806" }] },
  ],
  images: [
    {
      file: 'aerial.jpg',
      width: 1600,
      height: 1067,
      alt: "Aerial view of a large circular accelerator ring set in fields and woodland.",
      caption: "Fermilab from the air in 2020, showing the ring that housed the Tevatron.",
      credit: "formulanone",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Fermilab_Tevatron_Aerial.jpg",
    },
    {
      file: 'wilson-hall.jpg',
      width: 1600,
      height: 1064,
      alt: "A tall concrete building formed of two curved towers joined at the top.",
      caption: "Wilson Hall, Fermilab’s central building, 2011.",
      credit: "CramBetter.com",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Fermilab_Robert_Rathbun_Wilson_Hall_2011.jpg",
    },
  ],
  history: [
    { year: 1967, event: "National Accelerator Laboratory founded with Robert Wilson as its first director; ground is broken for the first accelerator stage in December 1968.", sources: [{ label: "A Brief History of Fermilab (Fermilab History and Archives)", url: "https://history.fnal.gov/documents/A_Brief_History_of_Fermilab.pdf" }] },
    { year: 1977, event: "Leon Lederman's team discovers the Upsilon (Y) meson at the 400-GeV main ring, providing the first evidence for the bottom quark.", sources: [{ label: "Herb et al., Phys. Rev. Lett. 39, 252 (1977)", url: "https://doi.org/10.1103/PhysRevLett.39.252" }] },
    { year: 1983, event: "The Tevatron, the world's first superconducting accelerator, reaches 512 GeV in July 1983; the first proton-antiproton collisions follow in October 1985.", sources: [{ label: "CERN Courier: Farewell to the Tevatron", url: "https://cerncourier.com/a/farewell-to-the-tevatron/" }] },
    { year: 1995, event: "CDF and DZero simultaneously announce the discovery of the top quark in proton-antiproton collisions at the Tevatron, completing the three-generation quark picture.", sources: [{ label: "CDF Collaboration, Phys. Rev. Lett. 74, 2626 (1995)", url: "https://doi.org/10.1103/PhysRevLett.74.2626" }, { label: "D0 Collaboration, Phys. Rev. Lett. 74, 2632 (1995)", url: "https://doi.org/10.1103/PhysRevLett.74.2632" }] },
    { year: 2011, event: "Tevatron shut down on 30 September 2011 after 28 years; Fermilab pivots to become the US hub for neutrino physics with the PIP-II accelerator upgrade and DUNE programme.", sources: [{ label: "CERN Courier: Farewell to the Tevatron", url: "https://cerncourier.com/a/farewell-to-the-tevatron/" }] },
  ],
  experiments: [
    { id: 'fermilab-cdf', name: 'CDF', description: "Collider Detector at Fermilab; co-discovered the top quark at the Tevatron proton-antiproton collider in 1995 and made precision electroweak measurements.", topics: ['qcd', 'electroweak'], startYear: 1985, endYear: 2011, sources: [{ label: "CERN Courier: Farewell to the Tevatron", url: "https://cerncourier.com/a/farewell-to-the-tevatron/" }, { label: "CDF Collaboration, Phys. Rev. Lett. 74, 2626 (1995)", url: "https://doi.org/10.1103/PhysRevLett.74.2626" }] },
    { id: 'fermilab-d0', name: 'DZero', description: "Second Tevatron multipurpose detector; independently co-discovered the top quark and set world-leading constraints on the W-boson mass.", topics: ['qcd', 'electroweak'], startYear: 1992, endYear: 2011, sources: [{ label: "CERN Courier: Farewell to the Tevatron", url: "https://cerncourier.com/a/farewell-to-the-tevatron/" }, { label: "D0 Collaboration, Phys. Rev. Lett. 74, 2632 (1995)", url: "https://doi.org/10.1103/PhysRevLett.74.2632" }] },
    { id: 'fermilab-nova', name: 'NOvA', description: "NuMI Off-Axis neutrino Appearance experiment measuring oscillation parameters and the CP-violating phase delta on an 810-km baseline from Fermilab to Minnesota.", topics: ['neutrinos'], startYear: 2014, sources: [{ label: "NOvA Collaboration, Phys. Rev. Lett. 116, 151806 (2016)", url: "https://doi.org/10.1103/PhysRevLett.116.151806" }] },
    { id: 'fermilab-mu2e', name: 'Mu2e', description: "Searches for charged-lepton-flavour-violating muon-to-electron conversion in the field of a nucleus — a signal of physics beyond the Standard Model with sensitivity four orders of magnitude beyond previous limits.", topics: ['electroweak'], sources: [{ label: "Mu2e Run I sensitivity projections (arXiv:2210.11380)", url: "https://arxiv.org/abs/2210.11380" }] },
  ],
  keyResults: [
    { year: 1977, discovery: "Bottom Quark Discovery", description: "The Upsilon meson resonance observed at Fermilab's 400-GeV proton synchrotron provided the first experimental evidence for the bottom (b) quark, the first member of the third quark generation.", sources: [{ label: "Herb et al., Phys. Rev. Lett. 39, 252 (1977)", url: "https://doi.org/10.1103/PhysRevLett.39.252" }] },
    { year: 1995, discovery: "Top Quark Discovery", description: "CDF and DZero independently observed the top quark in proton-antiproton collisions at the Tevatron, with a mass of ~175 GeV — far heavier than any other known quark — completing the Standard Model fermion sector.", sources: [{ label: "CDF Collaboration, Phys. Rev. Lett. 74, 2626 (1995)", url: "https://doi.org/10.1103/PhysRevLett.74.2626" }, { label: "D0 Collaboration, Phys. Rev. Lett. 74, 2632 (1995)", url: "https://doi.org/10.1103/PhysRevLett.74.2632" }] },
  ],
  importantPeople: [
    { name: "Robert Wilson", contribution: "Founding director of Fermilab (1967-1978); designed the laboratory and its architecture, championing the cultural value of basic science before Congress.", sources: [{ label: "A Brief History of Fermilab (Fermilab History and Archives)", url: "https://history.fnal.gov/documents/A_Brief_History_of_Fermilab.pdf" }] },
    { name: "Leon Lederman", contribution: "Fermilab director (1979-1989); led the team that discovered the bottom quark in 1977. Nobel Prize in Physics 1988 (for muon-neutrino discovery at BNL).", sources: [{ label: "Nobel Prize in Physics 1988", url: "https://www.nobelprize.org/prizes/physics/1988/summary/" }] },
    { name: "Helen Edwards", contribution: "Lead scientist for the design and construction of the Tevatron, the first large accelerator built with superconducting magnets; shared the 1989 National Medal of Technology for it.", sources: [{ label: "Physics World: Helen Edwards, pioneer of the Tevatron", url: "https://physicsworld.com/a/helen-edwards-pioneer-of-the-tevatron/" }] },
  ],
  readMore: [
    { label: "Official Site", url: "https://www.fnal.gov" },
    { label: "Tevatron Legacy", url: "https://www.fnal.gov/pub/tevatron/" },
  ],
};

export default facility;
