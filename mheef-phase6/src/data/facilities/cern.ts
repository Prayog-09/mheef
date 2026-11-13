import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'cern',
  name: 'CERN',
  fullName: "European Organization for Nuclear Research",
  type: 'accelerator-laboratory',
  country: 'Switzerland / France',
  lat: 46.2331,
  lng: 6.0558,
  founded: 1954,
  status: 'active',
  overview: "The European Organization for Nuclear Research (CERN), founded in 1954, operates the world's largest and most powerful particle accelerator complex on the Franco-Swiss border near Geneva. Its 27-kilometre Large Hadron Collider (LHC) accelerates protons to 99.9999991% the speed of light and collides them at four interaction points where ATLAS, CMS, ALICE, and LHCb record the debris. CERN is also the birthplace of the World Wide Web (1989) and a model of global scientific collaboration, involving over 17,000 scientists from more than 100 countries.",
  specs: [
    { label: "LHC circumference", value: "26,659 m", sources: [{ label: "CERN: The Large Hadron Collider", url: "https://home.cern/science/accelerators/large-hadron-collider" }] },
    { label: "LHC tunnel depth", value: "100 m underground", sources: [{ label: "CERN: The Large Hadron Collider", url: "https://home.cern/science/accelerators/large-hadron-collider" }] },
    { label: "Proton collision energy", value: "13.6 TeV", sources: [{ label: "CERN: The Large Hadron Collider", url: "https://home.cern/science/accelerators/large-hadron-collider" }] },
    { label: "LHC magnets", value: "9,593, of which 1,232 are dipoles", sources: [{ label: "CERN: The Large Hadron Collider", url: "https://home.cern/science/accelerators/large-hadron-collider" }] },
    { label: "Dipole operating temperature", value: "1.9 K", sources: [{ label: "CERN: The Large Hadron Collider", url: "https://home.cern/science/accelerators/large-hadron-collider" }] },
  ],
  history: [
    { year: 1954, event: "CERN founded by 12 European member states, establishing Geneva as the world's leading centre for particle physics.", sources: [{ label: "CERN: Our history", url: "https://home.cern/about/who-we-are/our-history" }] },
    { year: 1983, event: "UA1 and UA2 experiments at the SPS collider discover the W\u00b1 and Z\u2070 bosons, confirming electroweak unification. Carlo Rubbia and Simon van der Meer awarded the Nobel Prize in 1984.", sources: [{ label: "Nobel Prize in Physics 1984", url: "https://www.nobelprize.org/prizes/physics/1984/summary/" }] },
    { year: 1989, event: "Large Electron-Positron Collider (LEP) begins operations; over eleven years its experiments make a detailed study of the electroweak interaction and establish that exactly three light neutrino generations exist.", sources: [{ label: "CERN: The Large Electron-Positron Collider", url: "https://home.cern/science/accelerators/large-electron-positron-collider" }] },
    { year: 2008, event: "Large Hadron Collider (LHC) circulates its first beams on 10 September 2008; collisions at 7 TeV follow in March 2010, making it the world's highest-energy collider.", sources: [{ label: "CERN: The Large Hadron Collider", url: "https://home.cern/science/accelerators/large-hadron-collider" }] },
    { year: 2012, event: "ATLAS and CMS jointly announce the observation of a Higgs boson at ~125 GeV, completing the Standard Model. Peter Higgs and Francois Englert awarded the Nobel Prize in 2013.", sources: [{ label: "Nobel Prize in Physics 2013", url: "https://www.nobelprize.org/prizes/physics/2013/summary/" }] },
  ],
  experiments: [
    { id: 'cern-atlas', name: 'ATLAS', description: "General-purpose detector that co-discovered the Higgs boson; searches for supersymmetry, dark matter candidates, and extra dimensions at the LHC.", topics: ['higgs', 'dark-matter', 'qcd', 'electroweak'], startYear: 2008, sources: [{ label: "CERN: ATLAS", url: "https://home.cern/science/experiments/atlas" }, { label: "The ATLAS experiment at the LHC, JINST 3 (2008)", url: "https://doi.org/10.1088/1748-0221/3/08/S08003" }] },
    { id: 'cern-cms', name: 'CMS', description: "General-purpose detector with a 4-tesla superconducting solenoid; co-discovered the Higgs boson and leads precision Higgs coupling measurements.", topics: ['higgs', 'dark-matter', 'qcd', 'electroweak'], startYear: 2008, sources: [{ label: "CERN: CMS", url: "https://home.cern/science/experiments/cms" }, { label: "The CMS experiment at the LHC, JINST 3 (2008)", url: "https://doi.org/10.1088/1748-0221/3/08/S08004" }] },
    { id: 'cern-alice', name: 'ALICE', description: "Dedicated heavy-ion detector studying quark-gluon plasma created in Pb-Pb collisions at the LHC, recreating conditions microseconds after the Big Bang.", topics: ['heavy-ions', 'qcd'], startYear: 2008, sources: [{ label: "CERN: ALICE", url: "https://home.cern/science/experiments/alice" }, { label: "The ALICE experiment at the LHC, JINST 3 (2008)", url: "https://doi.org/10.1088/1748-0221/3/08/S08002" }] },
    { id: 'cern-lhcb', name: 'LHCb', description: "Specialised b-physics detector measuring CP violation and rare B-meson decays, probing the matter-antimatter asymmetry of the universe.", topics: ['b-physics', 'cp-violation'], startYear: 2008, sources: [{ label: "CERN: LHCb", url: "https://home.cern/science/experiments/lhcb" }, { label: "The LHCb experiment at the LHC, JINST 3 (2008)", url: "https://doi.org/10.1088/1748-0221/3/08/S08005" }] },
  ],
  keyResults: [
    { year: 1983, discovery: "W and Z Boson Discovery", description: "UA1 and UA2 at the CERN SPS provided the first direct observation of the massive W\u00b1 and Z\u2070 bosons mediating the weak nuclear force, confirming the Glashow-Salam-Weinberg electroweak theory. Nobel Prize 1984.", sources: [{ label: "Nobel Prize in Physics 1984", url: "https://www.nobelprize.org/prizes/physics/1984/summary/" }] },
    { year: 2012, discovery: "Higgs Boson Discovery", description: "ATLAS and CMS observed a scalar boson at ~125 GeV consistent with the long-sought Higgs boson, the last missing piece of the Standard Model and the origin of particle mass. Nobel Prize 2013.", sources: [{ label: "Nobel Prize in Physics 2013", url: "https://www.nobelprize.org/prizes/physics/2013/summary/" }] },
  ],
  importantPeople: [
    { name: "Carlo Rubbia", contribution: "Led the UA1 experiment and the discovery of the W and Z bosons; Nobel Prize in Physics 1984.", sources: [{ label: "Nobel Prize in Physics 1984", url: "https://www.nobelprize.org/prizes/physics/1984/summary/" }] },
    { name: "Tim Berners-Lee", contribution: "Invented the World Wide Web at CERN in 1989 to enable global information sharing among particle physicists.", sources: [{ label: "CERN: A short history of the Web", url: "https://home.cern/science/computing/the-birth-of-the-web/short-history-web/" }] },
    { name: "Fabiola Gianotti", contribution: "ATLAS spokesperson during the 2012 Higgs discovery announcement; first female Director-General of CERN (2016-2025).", sources: [{ label: "Physics World: Mark Thomson selected as next CERN boss", url: "https://physicsworld.com/a/uk-particle-physicist-mark-thomson-selected-as-next-cern-boss/" }] },
  ],
  readMore: [
    { label: "Official Site", url: "https://home.cern" },
    { label: "Nobel Prize 1984 (W/Z Bosons)", url: "https://www.nobelprize.org/prizes/physics/1984/summary/" },
    { label: "Nobel Prize 2013 (Higgs Boson)", url: "https://www.nobelprize.org/prizes/physics/2013/summary/" },
  ],
};

export default facility;
