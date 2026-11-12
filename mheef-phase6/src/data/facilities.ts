import type { Facility } from '../types/facility';

/**
 * Master dataset — Phase 2. 20 flagship HEP facilities across all major
 * categories.
 *
 * Phase 3: side panel looks up any Facility by selectedFacilityId from here.
 * Phase 4: derive filter chip values from the topics arrays below.
 */
export const facilities: readonly Facility[] = [

  // ─── Hadron Colliders ─────────────────────────────────────────────────────

  {
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
  },

  {
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
  },

  {
    id: 'brookhaven',
    name: 'Brookhaven / RHIC',
    fullName: "Brookhaven National Laboratory",
    type: 'accelerator-laboratory',
    country: 'United States',
    lat: 40.8676,
    lng: -72.8776,
    founded: 1947,
    status: 'active',
    overview: "Brookhaven National Laboratory on Long Island, New York, has been a world leader in nuclear and particle physics since 1947. Its Relativistic Heavy Ion Collider (RHIC), which ran from 2000 until its final collisions in February 2026, collided gold nuclei at near-light speed to produce quark-gluon plasma — the state of matter that existed microseconds after the Big Bang. In 2005 the four RHIC experiments announced that this plasma behaves as a near-perfect liquid with extraordinarily low viscosity, transforming our understanding of nuclear matter.",
    history: [
      { year: 1947, event: "Brookhaven National Laboratory established by the US Atomic Energy Commission, operated by a consortium of northeastern universities.", sources: [{ label: "Brookhaven: Beginnings", url: "https://www.bnl.gov/75/beginnings.php" }] },
      { year: 1964, event: "The Omega-minus baryon is discovered at BNL's Alternating Gradient Synchrotron (AGS), confirming Gell-Mann's quark model and the SU(3) symmetry of hadrons.", sources: [{ label: "Barnes et al., Phys. Rev. Lett. 12, 204 (1964)", url: "https://doi.org/10.1103/PhysRevLett.12.204" }] },
      { year: 1974, event: "Samuel Ting's team at BNL co-discovers the J/psi meson simultaneously with Burton Richter's group at SLAC — the November Revolution that revealed the charm quark. Nobel Prize 1976.", sources: [{ label: "Nobel Prize in Physics 1976", url: "https://www.nobelprize.org/prizes/physics/1976/summary/" }] },
      { year: 2000, event: "Relativistic Heavy Ion Collider (RHIC) begins operations, enabling Au+Au collisions at centre-of-mass energies up to 200 GeV per nucleon pair.", sources: [{ label: "Brookhaven: RHIC Wraps up Final Collisions (2026)", url: "https://www.bnl.gov/newsroom/news.php?a=222794" }] },
      { year: 2005, event: "STAR, PHENIX, BRAHMS, and PHOBOS collaborations jointly announce that RHIC collisions produce a strongly-coupled quark-gluon plasma that flows like a near-perfect liquid.", sources: [{ label: "Brookhaven: RHIC Scientists Serve Up \"Perfect\" Liquid (2005)", url: "https://www.bnl.gov/newsroom/news.php?a=110303" }, { label: "STAR Collaboration, Nucl. Phys. A 757, 102 (2005)", url: "https://doi.org/10.1016/j.nuclphysa.2005.03.085" }, { label: "PHENIX Collaboration, Nucl. Phys. A 757, 184 (2005)", url: "https://doi.org/10.1016/j.nuclphysa.2005.03.086" }] },
      { year: 2026, event: "RHIC records its final collisions on 6 February 2026, ending its 25th and last run; its tunnel and one of its ion rings will be reused for the Electron-Ion Collider.", sources: [{ label: "Brookhaven: RHIC Wraps up Final Collisions (2026)", url: "https://www.bnl.gov/newsroom/news.php?a=222794" }] },
    ],
    experiments: [
      { id: 'bnl-star', name: 'STAR', description: "Solenoidal Tracker at RHIC; studies the quark-gluon plasma using large-acceptance charged-particle tracking and calorimetry across a wide range of collision energies.", topics: ['heavy-ions', 'qcd'], startYear: 2000, endYear: 2026, sources: [{ label: "Brookhaven: RHIC Wraps up Final Collisions (2026)", url: "https://www.bnl.gov/newsroom/news.php?a=222794" }, { label: "STAR Collaboration, Nucl. Phys. A 757, 102 (2005)", url: "https://doi.org/10.1016/j.nuclphysa.2005.03.085" }] },
      { id: 'bnl-phenix', name: 'PHENIX', description: "Pioneering RHIC detector measuring photons, leptons, and hadrons in heavy-ion collisions; key to establishing the perfect-liquid interpretation of the QGP.", topics: ['heavy-ions', 'qcd'], startYear: 2000, endYear: 2016, sources: [{ label: "PHENIX: Concept and history", url: "https://www.phenix.bnl.gov/experiment/concept.html" }, { label: "PHENIX detector overview, Nucl. Instrum. Meth. A 499, 469 (2003)", url: "https://doi.org/10.1016/S0168-9002(02)01950-2" }] },
    ],
    keyResults: [
      { year: 1974, discovery: "J/psi Meson Discovery", description: "Simultaneous discovery at BNL and SLAC of the J/psi meson, revealing the charm quark and inaugurating the November Revolution in particle physics. Nobel Prize in Physics 1976.", sources: [{ label: "Nobel Prize in Physics 1976", url: "https://www.nobelprize.org/prizes/physics/1976/summary/" }] },
      { year: 2005, discovery: "Strongly-Coupled Quark-Gluon Plasma", description: "RHIC experiments established that the quark-gluon plasma formed in gold-gold collisions is a near-perfect liquid with a shear viscosity-to-entropy ratio close to the quantum mechanical minimum.", sources: [{ label: "Brookhaven: RHIC Scientists Serve Up \"Perfect\" Liquid (2005)", url: "https://www.bnl.gov/newsroom/news.php?a=110303" }] },
    ],
    importantPeople: [
      { name: "Samuel Ting", contribution: "Led the E598 experiment at BNL that co-discovered the J/psi meson; Nobel Prize in Physics 1976.", sources: [{ label: "Nobel Prize in Physics 1976", url: "https://www.nobelprize.org/prizes/physics/1976/summary/" }] },
      { name: "Nicholas Samios", contribution: "BNL director (1982-1997); earlier co-discovered the Omega-minus baryon in 1964, confirming the quark model and SU(3) flavour symmetry.", sources: [{ label: "Barnes et al., Phys. Rev. Lett. 12, 204 (1964)", url: "https://doi.org/10.1103/PhysRevLett.12.204" }, { label: "Brookhaven: Nicholas Samios named Senior Scientist Emeritus", url: "https://www.bnl.gov/newsroom/news.php?a=25191" }] },
    ],
    readMore: [
      { label: "Official Site", url: "https://www.bnl.gov" },
      { label: "RHIC", url: "https://www.bnl.gov/rhic/" },
      { label: "Nobel Prize 1976 (J/psi)", url: "https://www.nobelprize.org/prizes/physics/1976/summary/" },
    ],
  },

  // ─── Electron-Positron Colliders ──────────────────────────────────────────

  {
    id: 'kek',
    name: 'KEK / Belle II',
    fullName: "High Energy Accelerator Research Organization",
    type: 'accelerator-laboratory',
    country: 'Japan',
    lat: 36.1512,
    lng: 140.0712,
    founded: 1971,
    status: 'active',
    overview: "The High Energy Accelerator Research Organization (KEK) in Tsukuba, Japan operates SuperKEKB — an asymmetric-energy electron-positron collider designed to produce B mesons near their pair-production threshold. The Belle II detector, collecting data since 2019, aims to accumulate 50 times the dataset of its predecessor Belle to search for CP violation, rare decays, and dark-sector particles with unprecedented precision.",
    history: [
      { year: 1971, event: "KEK founded as Japan's national high-energy physics laboratory in Tsukuba Science City.", sources: [{ label: "KEK: History", url: "https://www.kek.jp/en/about/history" }] },
      { year: 1999, event: "Belle experiment begins data-taking in June 1999 at the asymmetric KEKB collider, which stored its first beams in 1998; it is designed to measure CP violation in B-meson decays.", sources: [{ label: "KEK: History", url: "https://www.kek.jp/en/about/history" }] },
      { year: 2001, event: "Belle and BaBar (SLAC) independently report large CP violation in B0 meson decays, confirming the Kobayashi-Maskawa mechanism. Nobel Prize 2008.", sources: [{ label: "Nobel Prize in Physics 2008", url: "https://www.nobelprize.org/prizes/physics/2008/summary/" }] },
      { year: 2010, event: "Belle ends data-taking in June 2010 after KEKB delivered more than 1,000 fb-1; construction of SuperKEKB, designed for 40 times the luminosity, starts the following year.", sources: [{ label: "KEK: History", url: "https://www.kek.jp/en/about/history" }, { label: "The Belle II Physics Book, PTEP 2019, 123C01", url: "https://doi.org/10.1093/ptep/ptz106" }] },
      { year: 2019, event: "Belle II begins its first physics run at SuperKEKB in spring 2019.", sources: [{ label: "Belle II at SuperKEKB: input to the European Strategy (arXiv:2503.24155)", url: "https://arxiv.org/abs/2503.24155" }] },
    ],
    experiments: [
      { id: 'kek-belle2', name: 'Belle II', description: "Precision B-factory detector measuring CP violation and rare B- and D-meson decays, and searching for dark photons, axion-like particles, and other light dark-sector mediators.", topics: ['b-physics', 'cp-violation', 'dark-matter'], startYear: 2019, sources: [{ label: "The Belle II Physics Book, PTEP 2019, 123C01", url: "https://doi.org/10.1093/ptep/ptz106" }] },
      { id: 'kek-belle', name: 'Belle', description: "Predecessor B-factory experiment whose measurement of CP violation in B0 decays confirmed the Kobayashi-Maskawa quark-mixing mechanism.", topics: ['b-physics', 'cp-violation'], startYear: 1999, endYear: 2010, sources: [{ label: "The Belle detector, Nucl. Instrum. Meth. A 479, 117 (2002)", url: "https://doi.org/10.1016/S0168-9002(01)02013-7" }, { label: "Belle Collaboration, Phys. Rev. Lett. 87, 091802 (2001)", url: "https://doi.org/10.1103/PhysRevLett.87.091802" }] },
    ],
    keyResults: [
      { year: 2001, discovery: "CP Violation in B Mesons Confirmed", description: "Belle (and BaBar at SLAC) measured large CP asymmetry in B0 decays, directly confirming the Kobayashi-Maskawa mechanism and explaining why our universe has more matter than antimatter. Nobel Prize 2008.", sources: [{ label: "Nobel Prize in Physics 2008", url: "https://www.nobelprize.org/prizes/physics/2008/summary/" }] },
    ],
    importantPeople: [
      { name: "Makoto Kobayashi", contribution: "Co-proposed the CKM quark mixing matrix in 1973, predicting a third generation of quarks from CP-violation arguments; Nobel Prize in Physics 2008.", sources: [{ label: "Nobel Prize in Physics 2008", url: "https://www.nobelprize.org/prizes/physics/2008/summary/" }] },
      { name: "Toshihide Maskawa", contribution: "Co-proposed the CKM matrix and provided the theoretical framework confirmed by Belle and BaBar; Nobel Prize in Physics 2008.", sources: [{ label: "Nobel Prize in Physics 2008", url: "https://www.nobelprize.org/prizes/physics/2008/summary/" }] },
    ],
    readMore: [
      { label: "KEK Official Site", url: "https://www.kek.jp" },
      { label: "Belle II Experiment", url: "https://www.belle2.org" },
      { label: "Nobel Prize 2008 (CKM)", url: "https://www.nobelprize.org/prizes/physics/2008/summary/" },
    ],
  },

  // ─── Underground Neutrino / Dark Matter Labs ──────────────────────────────

  {
    id: 'gran-sasso',
    name: 'Gran Sasso (LNGS)',
    fullName: "Laboratori Nazionali del Gran Sasso",
    type: 'underground-laboratory',
    country: 'Italy',
    lat: 42.4536,
    lng: 13.576,
    founded: 1987,
    status: 'active',
    overview: "The Laboratori Nazionali del Gran Sasso (LNGS) beneath the Apennine Mountains in central Italy is the world's largest underground research laboratory, with three experimental halls at 1,400 m rock overburden. Its extreme shielding from cosmic-ray muons makes it ideal for rare-event searches including neutrinoless double-beta decay, WIMP dark matter detection, solar neutrino spectroscopy, and neutrino oscillation studies using beams sent from CERN 730 km away.",
    history: [
      { year: 1982, event: "Construction of the underground laboratory is approved and begins beside the Gran Sasso motorway tunnel, following a proposal by INFN president Antonino Zichichi.", sources: [{ label: "Nature 485, 435 (2012): Gran Sasso feature", url: "https://doi.org/10.1038/485435a" }] },
      { year: 1987, event: "Excavation of the underground halls is completed and the laboratory is ready for its first experiments; it is the largest underground laboratory for astroparticle physics.", sources: [{ label: "Nature 485, 435 (2012): Gran Sasso feature", url: "https://doi.org/10.1038/485435a" }] },
      { year: 2008, event: "OPERA begins its main data-taking in the CNGS muon-neutrino beam sent 730 km from CERN, searching for the appearance of tau neutrinos; the run lasts until 2012.", sources: [{ label: "OPERA Collaboration, Phys. Rev. Lett. 115, 121802 (2015)", url: "https://doi.org/10.1103/PhysRevLett.115.121802" }] },
      { year: 2014, event: "BOREXINO makes the first direct real-time measurement of low-energy pp solar neutrinos, providing a direct window into the dominant fusion chain of the Sun.", sources: [{ label: "Borexino Collaboration, Nature 512, 383 (2014)", url: "https://doi.org/10.1038/nature13702" }] },
      { year: 2020, event: "XENONnT, with a 5.9-tonne liquid-xenon target, is installed at Gran Sasso; its first WIMP search results are published in 2023.", sources: [{ label: "The XENONnT dark matter experiment, Eur. Phys. J. C 84, 784 (2024)", url: "https://doi.org/10.1140/epjc/s10052-024-12982-5" }, { label: "XENON Collaboration, Phys. Rev. Lett. 131, 041003 (2023)", url: "https://doi.org/10.1103/PhysRevLett.131.041003" }] },
    ],
    experiments: [
      { id: 'lngs-borexino', name: 'BOREXINO', description: "Ultra-pure liquid-scintillator detector that made the first real-time measurements of solar pp, pep, and CNO neutrinos, providing a direct window into solar fusion reactions; data-taking ended in October 2021.", topics: ['neutrinos'], startYear: 2007, endYear: 2021, sources: [{ label: "LNGS: Borexino", url: "https://www.lngs.infn.it/en/borexino" }, { label: "Borexino Collaboration, Nature 587, 577 (2020)", url: "https://doi.org/10.1038/s41586-020-2934-0" }, { label: "UMass Amherst: Borexino completes data taking (2021)", url: "https://websites.umass.edu/pocar/2021/12/" }] },
      { id: 'lngs-xenon', name: 'XENONnT', description: "Dual-phase liquid-xenon TPC with a 5.9-tonne active target at Gran Sasso, searching for WIMP dark matter and other rare events.", topics: ['dark-matter', 'neutrinos'], startYear: 2020, sources: [{ label: "The XENONnT dark matter experiment, Eur. Phys. J. C 84, 784 (2024)", url: "https://doi.org/10.1140/epjc/s10052-024-12982-5" }, { label: "XENON Collaboration, Phys. Rev. Lett. 131, 041003 (2023)", url: "https://doi.org/10.1103/PhysRevLett.131.041003" }] },
      { id: 'lngs-opera', name: 'OPERA', description: "Observed the first direct tau-neutrino appearance events from a pure muon-neutrino beam (CNGS), providing the clearest proof of nu_mu to nu_tau oscillation.", topics: ['neutrinos'], startYear: 2008, endYear: 2012, sources: [{ label: "OPERA Collaboration, Phys. Lett. B 691, 138 (2010)", url: "https://doi.org/10.1016/j.physletb.2010.06.022" }, { label: "OPERA Collaboration, Phys. Rev. Lett. 115, 121802 (2015)", url: "https://doi.org/10.1103/PhysRevLett.115.121802" }] },
    ],
    keyResults: [
      { year: 2010, discovery: "First Direct Tau Neutrino Appearance", description: "OPERA detected the first tau-neutrino candidate events from a pure muon-neutrino beam fired 730 km from CERN, providing the first direct observation of nu_mu to nu_tau oscillation.", sources: [{ label: "OPERA Collaboration, Phys. Lett. B 691, 138 (2010)", url: "https://doi.org/10.1016/j.physletb.2010.06.022" }] },
      { year: 2014, discovery: "First Direct Detection of Solar pp Neutrinos", description: "BOREXINO made the world's first direct, real-time measurement of neutrinos from the pp fusion reaction, the dominant energy source of the Sun, confirming Standard Solar Model predictions.", sources: [{ label: "Borexino Collaboration, Nature 512, 383 (2014)", url: "https://doi.org/10.1038/nature13702" }] },
    ],
    importantPeople: [
      { name: "Elena Aprile", contribution: "Founder and spokesperson of the XENON collaboration, which she set up in 2002; pioneered dual-phase liquid-xenon technology for dark matter detection.", sources: [{ label: "Columbia University: Physicist leading the hunt for dark matter wins Berkeley Prize", url: "https://science.fas.columbia.edu/news/physicist-leading-the-hunt-for-dark-matter-wins-berkeley-prize" }] },
      { name: "Gianpaolo Bellini", contribution: "One of the founders of BOREXINO, which he conceived and led from 1990; key architect of the solar neutrino spectroscopy programme that achieved the pp neutrino measurement.", sources: [{ label: "University of Milan: Pontecorvo Prize 2016 to Bellini (in Italian)", url: "https://unimi.it/sites/default/files/comunicati_stampa/images/Premio_Pontecorvo2016_a_Bellini.pdf" }] },
    ],
    readMore: [
      { label: "LNGS Official Site", url: "https://www.lngs.infn.it" },
      { label: "XENON Experiment", url: "https://xenonexperiment.org" },
    ],
  },

  {
    id: 'snolab',
    name: 'SNOLAB',
    type: 'underground-laboratory',
    country: 'Canada',
    lat: 46.475,
    lng: -81.201,
    founded: 2004,
    status: 'active',
    overview: "SNOLAB, located 2 km underground in the Creighton nickel mine near Sudbury, Ontario, is the world's deepest clean-room laboratory. Its predecessor, the Sudbury Neutrino Observatory (SNO), resolved the 30-year solar neutrino problem in 2002 by proving that electron neutrinos produced in the Sun oscillate into other flavours. SNOLAB now hosts experiments searching for dark matter (DEAP-3600, NEWS-G) and neutrinoless double-beta decay (SNO+).",
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
  },

  {
    id: 'kamioka',
    name: 'Kamioka Observatory',
    type: 'neutrino-observatory',
    country: 'Japan',
    lat: 36.4254,
    lng: 137.31,
    founded: 1983,
    status: 'active',
    overview: "Japan's Kamioka Observatory, housed beneath Mount Ikeno in Gifu Prefecture, is one of the most productive underground laboratories in the world. Its flagship detector Super-Kamiokande — a 50,000-tonne water Cherenkov cylinder — detected the first neutrinos from an extragalactic supernova (1987A), discovered atmospheric neutrino oscillations in 1998, and sets world-leading limits on the proton lifetime. The successor Hyper-Kamiokande, a 260,000-tonne detector, is currently under construction nearby.",
    history: [
      { year: 1983, event: "Kamiokande detector begins operations under Mount Ikeno, designed primarily to search for proton decay predicted by Grand Unified Theories.", sources: [{ label: "Super-Kamiokande: Research history", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/sk/about/history" }] },
      { year: 1987, event: "Kamiokande-II detects 11 neutrinos from Supernova 1987A in the Large Magellanic Cloud — the first detection of neutrinos from any extragalactic source. Nobel Prize 2002.", sources: [{ label: "Nobel Prize in Physics 2002", url: "https://www.nobelprize.org/prizes/physics/2002/summary/" }] },
      { year: 1996, event: "Super-Kamiokande, a 50,000-tonne water Cherenkov detector instrumented with 11,146 photomultiplier tubes, begins operations.", sources: [{ label: "Super-Kamiokande: Research history", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/sk/about/history" }, { label: "The Super-Kamiokande detector, Nucl. Instrum. Meth. A 501, 418 (2003)", url: "https://doi.org/10.1016/S0168-9002(03)00425-X" }] },
      { year: 1998, event: "Super-Kamiokande announces compelling evidence for atmospheric muon-neutrino oscillation, proving neutrinos have non-zero mass. Nobel Prize 2015.", sources: [{ label: "Nobel Prize in Physics 2015", url: "https://www.nobelprize.org/prizes/physics/2015/summary/" }] },
      { year: 2020, event: "Super-Kamiokande enters its Gd-doping phase (SK-Gd), adding gadolinium to improve neutron-capture detection for supernova relic neutrino searches.", sources: [{ label: "Super-Kamiokande: Research history", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/sk/about/history" }, { label: "First gadolinium loading to Super-Kamiokande, Nucl. Instrum. Meth. A 1027, 166248 (2022)", url: "https://doi.org/10.1016/j.nima.2021.166248" }] },
    ],
    experiments: [
      { id: 'kamioka-sk', name: 'Super-Kamiokande', description: "50,000-tonne water Cherenkov detector that discovered atmospheric neutrino oscillations, setting world-leading proton-lifetime limits and observing solar and atmospheric neutrinos.", topics: ['neutrinos'], startYear: 1996, sources: [{ label: "The Super-Kamiokande detector, Nucl. Instrum. Meth. A 501, 418 (2003)", url: "https://doi.org/10.1016/S0168-9002(03)00425-X" }] },
      { id: 'kamioka-kamland', name: 'KamLAND', description: "1-kilotonne liquid-scintillator detector at Kamioka; the first to observe reactor antineutrino disappearance with terrestrial sources, confirming neutrino oscillation parameters.", topics: ['neutrinos'], startYear: 2002, sources: [{ label: "KamLAND Collaboration, Phys. Rev. Lett. 90, 021802 (2003)", url: "https://doi.org/10.1103/PhysRevLett.90.021802" }] },
    ],
    keyResults: [
      { year: 1987, discovery: "Supernova 1987A Neutrinos", description: "Kamiokande-II detected a burst of 11 neutrinos from SN 1987A, providing the first direct observation of core-collapse supernova neutrinos and confirming stellar collapse models. Masatoshi Koshiba shared the Nobel Prize 2002.", sources: [{ label: "Nobel Prize in Physics 2002", url: "https://www.nobelprize.org/prizes/physics/2002/summary/" }] },
      { year: 1998, discovery: "Atmospheric Neutrino Oscillations", description: "Super-Kamiokande observed a zenith-angle-dependent deficit of atmospheric muon neutrinos, providing compelling evidence that neutrinos oscillate and therefore have non-zero mass. Nobel Prize 2015.", sources: [{ label: "Nobel Prize in Physics 2015", url: "https://www.nobelprize.org/prizes/physics/2015/summary/" }] },
    ],
    importantPeople: [
      { name: "Masatoshi Koshiba", contribution: "Led the Kamiokande experiment and directed the 1987A supernova neutrino detection; Nobel Prize in Physics 2002.", sources: [{ label: "Nobel Prize in Physics 2002", url: "https://www.nobelprize.org/prizes/physics/2002/summary/" }] },
      { name: "Takaaki Kajita", contribution: "Analysed Super-Kamiokande atmospheric neutrino data, discovering the oscillation signature that proved neutrino mass; Nobel Prize in Physics 2015.", sources: [{ label: "Nobel Prize in Physics 2015", url: "https://www.nobelprize.org/prizes/physics/2015/summary/" }] },
    ],
    readMore: [
      { label: "Super-Kamiokande Site", url: "https://www-sk.icrr.u-tokyo.ac.jp" },
      { label: "Nobel Prize 2002 (SN1987A)", url: "https://www.nobelprize.org/prizes/physics/2002/summary/" },
      { label: "Nobel Prize 2015 (Oscillations)", url: "https://www.nobelprize.org/prizes/physics/2015/summary/" },
    ],
  },

  {
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
  },

  // ─── Neutrino Observatories ───────────────────────────────────────────────

  {
    id: 'icecube',
    name: 'IceCube Neutrino Observatory',
    type: 'neutrino-observatory',
    country: 'Antarctica',
    lat: -89.9944,
    lng: -63.4536,
    founded: 2010,
    status: 'active',
    overview: "The IceCube Neutrino Observatory at the geographic South Pole instruments a cubic kilometre of Antarctic ice between 1.5 and 2.5 km depth with 5,160 Digital Optical Modules on 86 vertical strings. It detects Cherenkov light from secondary particles produced when high-energy neutrinos interact in the ice — the world's largest neutrino telescope. IceCube opened the field of high-energy neutrino astronomy with its 2013 astrophysical neutrino detection, and in 2022 identified NGC 1068 as a cosmic neutrino source.",
    history: [
      { year: 1993, event: "The first AMANDA (Antarctic Muon And Neutrino Detector Array) strings are deployed at the South Pole in the 1993-94 season, a proof of concept for deep-ice neutrino detection.", sources: [{ label: "IceCube: The detector", url: "https://icecube.wisc.edu/science/icecube/" }] },
      { year: 2004, event: "IceCube drilling and DOM deployment begins, expanding on AMANDA infrastructure.", sources: [{ label: "IceCube: The detector", url: "https://icecube.wisc.edu/science/icecube/" }] },
      { year: 2010, event: "IceCube construction is completed on 18 December 2010, when the last of its 86 strings is lowered into the ice; with 5,160 optical modules it is the world's largest neutrino telescope.", sources: [{ label: "IceCube: The detector", url: "https://icecube.wisc.edu/science/icecube/" }] },
      { year: 2013, event: "IceCube announces the first detection of high-energy astrophysical neutrinos above 100 TeV, naming two PeV-scale events Bert and Ernie — opening the era of neutrino astronomy.", sources: [{ label: "IceCube Collaboration, Science 342, 1242856 (2013)", url: "https://doi.org/10.1126/science.1242856" }, { label: "IceCube Collaboration, Phys. Rev. Lett. 111, 021103 (2013)", url: "https://doi.org/10.1103/PhysRevLett.111.021103" }] },
      { year: 2022, event: "IceCube publishes evidence at 4.2 sigma for neutrino emission from NGC 1068 (Messier 77), a nearby Seyfert galaxy — the first identified steady-state cosmic neutrino source.", sources: [{ label: "IceCube Collaboration, Science 378, 538 (2022)", url: "https://doi.org/10.1126/science.abg3395" }] },
    ],
    experiments: [
      { id: 'icecube-main', name: 'IceCube', description: "Cubic-kilometre deep-ice neutrino telescope detecting TeV-PeV astrophysical neutrinos from cosmic accelerators including active galactic nuclei, gamma-ray bursts, and galaxy clusters.", topics: ['neutrinos', 'cosmic-rays'], startYear: 2010, sources: [{ label: "IceCube instrumentation and online systems, JINST 12, P03012 (2017)", url: "https://doi.org/10.1088/1748-0221/12/03/P03012" }, { label: "IceCube: The detector", url: "https://icecube.wisc.edu/science/icecube/" }] },
      { id: 'icecube-deepcore', name: 'DeepCore', description: "Dense low-energy sub-array of IceCube with a ~10 GeV threshold; measures atmospheric neutrino oscillation parameters and searches for dark matter annihilation in the Sun.", topics: ['neutrinos', 'dark-matter'], startYear: 2010, sources: [{ label: "The design and performance of IceCube DeepCore, Astropart. Phys. 35, 615 (2012)", url: "https://doi.org/10.1016/j.astropartphys.2012.01.004" }, { label: "IceCube: The detector", url: "https://icecube.wisc.edu/science/icecube/" }] },
    ],
    keyResults: [
      { year: 2013, discovery: "First High-Energy Astrophysical Neutrinos", description: "IceCube detected the first neutrinos of clear extraterrestrial origin at energies above 100 TeV, inaugurating high-energy neutrino astronomy and demonstrating the existence of PeV-scale cosmic accelerators.", sources: [{ label: "IceCube Collaboration, Science 342, 1242856 (2013)", url: "https://doi.org/10.1126/science.1242856" }] },
      { year: 2022, discovery: "NGC 1068 Identified as Neutrino Source", description: "Statistical evidence for neutrino emission from the Seyfert galaxy NGC 1068 provided the first identification of a steady-state astrophysical neutrino source, likely powered by accretion onto its central supermassive black hole.", sources: [{ label: "IceCube Collaboration, Science 378, 538 (2022)", url: "https://doi.org/10.1126/science.abg3395" }] },
    ],
    importantPeople: [
      { name: "Francis Halzen", contribution: "Principal investigator and chief scientific architect of IceCube; built the scientific case for deep-ice neutrino detection over three decades.", sources: [{ label: "WIPAC: Francis Halzen", url: "https://wipac.wisc.edu/people/faculty/francis-halzen" }] },
      { name: "Albrecht Karle", contribution: "IceCube associate director for science and instrumentation and principal investigator of the IceCube Upgrade project.", sources: [{ label: "WIPAC: Albrecht Karle", url: "https://wipac.wisc.edu/people/faculty/albrecht-karle" }] },
    ],
    readMore: [
      { label: "IceCube Official Site", url: "https://icecube.wisc.edu" },
      { label: "2013 Discovery Paper (Science)", url: "https://doi.org/10.1126/science.1242856" },
    ],
  },

  {
    id: 'juno',
    name: 'JUNO',
    fullName: "Jiangmen Underground Neutrino Observatory",
    type: 'neutrino-observatory',
    country: 'China',
    lat: 22.118,
    lng: 112.518,
    founded: 2015,
    status: 'active',
    overview: "The Jiangmen Underground Neutrino Observatory (JUNO) in Guangdong Province, China, is the world's largest liquid-scintillator neutrino detector — a 20,000-tonne sphere at 700 m depth instrumented with over 17,000 large photomultiplier tubes. Its primary goals are to determine the neutrino mass ordering (normal vs. inverted hierarchy) and to measure the oscillation parameters sin2-theta-12 and Delta-m2-21 to sub-percent precision, using reactor antineutrinos from nearby nuclear power plants.",
    history: [
      { year: 2013, event: "JUNO, first proposed in 2008, has its funding approved by the Chinese Academy of Sciences and the Guangdong provincial government; it builds on the success of the Daya Bay theta-13 measurement.", sources: [{ label: "GSI: JUNO delivers first physics results (2025)", url: "https://www.gsi.de/en/start/news/details/2025/11/19/juno-experiment-first-data" }] },
      { year: 2015, event: "A ground-breaking ceremony on 10 January 2015 starts construction of the JUNO underground laboratory near Kaiping, Jiangmen, Guangdong.", sources: [{ label: "CERN Courier: Ground-breaking for China's new neutrino observatory", url: "https://cerncourier.com/a/ground-breaking-for-chinas-new-neutrino-observatory/" }] },
      { year: 2021, event: "Detector installation begins; more than 20,000 large and 25,000 small photomultiplier tubes give a dual-calorimetry design that improves energy resolution. Installation finishes in December 2024.", sources: [{ label: "GSI: JUNO delivers first physics results (2025)", url: "https://www.gsi.de/en/start/news/details/2025/11/19/juno-experiment-first-data" }, { label: "JUNO physics and detector, Prog. Part. Nucl. Phys. 123, 103927 (2022)", url: "https://doi.org/10.1016/j.ppnp.2021.103927" }] },
      { year: 2025, event: "With the detector filled with 20,000 tonnes of liquid scintillator, JUNO begins data taking on 26 August 2025; first results on the solar oscillation parameters follow in November.", sources: [{ label: "GSI: JUNO delivers first physics results", url: "https://www.gsi.de/en/start/news/details/2025/11/19/juno-experiment-first-data" }] },
      { year: 2026, event: "JUNO's first reactor-neutrino oscillation measurement is published in Nature.", sources: [{ label: "IHEP: first JUNO physics result published in Nature", url: "https://english.ihep.cas.cn/nw/han/y26/202606/t20260610_1161472.html" }] },
    ],
    experiments: [
      { id: 'juno-main', name: 'JUNO Main Detector', description: "20,000-tonne liquid-scintillator sphere designed to determine the neutrino mass ordering and measure oscillation parameters using reactor antineutrinos from two nearby nuclear power complexes.", topics: ['neutrinos'], startYear: 2025, sources: [{ label: "Neutrino physics with JUNO, J. Phys. G 43, 030401 (2016)", url: "https://doi.org/10.1088/0954-3899/43/3/030401" }] },
    ],
    keyResults: [],
    importantPeople: [
      { name: "Yifang Wang", contribution: "JUNO project manager and spokesperson; director of IHEP Beijing from 2011 to 2024 and earlier a leader of the Daya Bay experiment.", sources: [{ label: "GSI: JUNO delivers first physics results (2025)", url: "https://www.gsi.de/en/start/news/details/2025/11/19/juno-experiment-first-data" }] },
      { name: "Jun Cao", contribution: "JUNO deputy spokesperson and, since October 2024, director of IHEP; previously a leading member of the Daya Bay experiment that first measured theta-13.", sources: [{ label: "GSI: JUNO delivers first physics results (2025)", url: "https://www.gsi.de/en/start/news/details/2025/11/19/juno-experiment-first-data" }] },
    ],
    readMore: [
      { label: "JUNO Official Site", url: "https://juno.ihep.ac.cn" },
    ],
  },

  {
    id: 'daya-bay',
    name: 'Daya Bay',
    fullName: "Daya Bay Reactor Neutrino Experiment",
    type: 'neutrino-observatory',
    country: 'China',
    lat: 22.5956,
    lng: 114.5378,
    founded: 2011,
    status: 'historic',
    overview: "The Daya Bay Reactor Neutrino Experiment operated from 2011 to 2020 near nuclear power plants in Guangdong, China. Using eight gadolinium-doped liquid-scintillator detectors across three underground halls at baselines of 360-1860 m from the reactors, Daya Bay made the world's most precise measurement of the mixing angle theta-13 — a critical parameter for future experiments seeking to measure the neutrino CP-violating phase delta-CP.",
    history: [
      { year: 2011, event: "Daya Bay begins operations with the first set of antineutrino detectors installed in underground experimental halls.", sources: [{ label: "Daya Bay Collaboration, Phys. Rev. Lett. 108, 171803 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.171803" }] },
      { year: 2012, event: "Daya Bay announces the first precise measurement of theta-13, finding sin2(2*theta-13) = 0.092 at more than 5 sigma — the world's first observation of non-zero theta-13.", sources: [{ label: "Daya Bay Collaboration, Phys. Rev. Lett. 108, 171803 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.171803" }] },
      { year: 2012, event: "Full eight-detector configuration begins operations in October 2012, significantly improving statistical and systematic precision.", sources: [{ label: "Daya Bay Collaboration, Phys. Rev. Lett. 130, 161802 (2023)", url: "https://doi.org/10.1103/PhysRevLett.130.161802" }] },
      { year: 2020, event: "Daya Bay ends data-taking on 12 December 2020 after nine years; its final results are the world's most precise measurement of theta-13.", sources: [{ label: "Berkeley Lab: Scientists say farewell to Daya Bay site (2020)", url: "https://newscenter.lbl.gov/2020/12/11/scientists-say-farewell-to-daya-bay-site-proceed-with-final-data-analysis/" }, { label: "Daya Bay Collaboration, Phys. Rev. Lett. 130, 161802 (2023)", url: "https://doi.org/10.1103/PhysRevLett.130.161802" }] },
    ],
    experiments: [
      { id: 'dayabay-det', name: 'Daya Bay Antineutrino Detectors', description: "Eight modular Gd-doped liquid-scintillator detectors in three underground halls measuring reactor antineutrino disappearance to extract theta-13 with sub-percent precision.", topics: ['neutrinos', 'electroweak'], startYear: 2011, endYear: 2020, sources: [{ label: "Daya Bay Collaboration, Phys. Rev. Lett. 130, 161802 (2023)", url: "https://doi.org/10.1103/PhysRevLett.130.161802" }] },
    ],
    keyResults: [
      { year: 2012, discovery: "First Precise Measurement of theta-13", description: "Daya Bay was the first experiment to measure the neutrino mixing angle theta-13 with >5 sigma significance, finding it unexpectedly large (sin2(2*theta-13) = 0.092), enabling the design of experiments to measure the neutrino CP-violating phase delta-CP.", sources: [{ label: "Daya Bay Collaboration, Phys. Rev. Lett. 108, 171803 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.171803" }] },
    ],
    importantPeople: [
      { name: "Yifang Wang", contribution: "Chief scientist of the Daya Bay experiment and director of IHEP Beijing from 2011 to 2024; architect of the multi-detector near/far baseline strategy." },
      { name: "Kam-Biu Luk", contribution: "Co-spokesperson of Daya Bay (UC Berkeley / LBNL); led the US contribution and statistical analysis strategy." },
    ],
    readMore: [
      { label: "Daya Bay 2012 result (Physical Review Letters)", url: "https://doi.org/10.1103/PhysRevLett.108.171803" },
    ],
  },

  // ─── Cosmic-Ray / Gamma-Ray ───────────────────────────────────────────────

  {
    id: 'pierre-auger',
    name: 'Pierre Auger Observatory',
    type: 'cosmic-ray-observatory',
    country: 'Argentina',
    lat: -35.208,
    lng: -69.314,
    founded: 2008,
    status: 'active',
    overview: "The Pierre Auger Observatory in Mendoza Province, Argentina, covers 3,000 km2 of the Pampa Amarilla with 1,660 water-Cherenkov surface detectors and 27 fluorescence telescopes — the world's largest cosmic-ray detector. It measures ultra-high-energy cosmic rays (UHECRs) above 10^18 eV, addressing the mystery of the origin, nature, and maximum energy of cosmic rays. The ongoing AugerPrime upgrade adds scintillators and radio antennas for improved composition sensitivity.",
    history: [
      { year: 1992, event: "Pierre Auger Observatory proposed by James Cronin (U. Chicago) and Alan Watson (U. Leeds) to resolve the origin and spectrum of ultra-high-energy cosmic rays.", sources: [{ label: "Pierre Auger Observatory: Timeline", url: "https://www.auger.org/observatory/timeline-observatory" }] },
      { year: 2004, event: "First physics results are reported from more than 100 surface detector stations in the Pampa Amarilla; the hybrid technique combining surface stations with fluorescence telescopes is pioneered.", sources: [{ label: "Pierre Auger Observatory: Timeline", url: "https://www.auger.org/observatory/timeline-observatory" }] },
      { year: 2008, event: "The completed Pierre Auger Observatory, with 1,600 surface detectors and 24 fluorescence telescopes, is inaugurated in Malarg\u00fce in November 2008.", sources: [{ label: "Pierre Auger Observatory: Timeline", url: "https://www.auger.org/observatory/timeline-observatory" }] },
      { year: 2017, event: "Auger reports evidence for a large-scale anisotropy in cosmic-ray arrival directions above 8 EeV at 5.2 sigma, indicating an extragalactic origin.", sources: [{ label: "Pierre Auger Collaboration, Science 357, 1266 (2017)", url: "https://doi.org/10.1126/science.aan4338" }] },
      { year: 2016, event: "Deployment of the AugerPrime upgrade begins, adding scintillator detectors and later radio antennas to the surface stations to measure shower composition; the radio deployment is completed in 2024.", sources: [{ label: "Pierre Auger Observatory: Timeline", url: "https://www.auger.org/observatory/timeline-observatory" }] },
    ],
    experiments: [
      { id: 'auger-sd', name: 'Surface Detector (SD)', description: "Array of 1,660 water-Cherenkov tanks across 3,000 km2 measuring muon and electromagnetic shower particles from UHECR air showers with 100% duty cycle.", topics: ['cosmic-rays'], startYear: 2004, sources: [{ label: "The Pierre Auger Cosmic Ray Observatory, Nucl. Instrum. Meth. A 798, 172 (2015)", url: "https://doi.org/10.1016/j.nima.2015.06.058" }] },
      { id: 'auger-fd', name: 'Fluorescence Detector (FD)', description: "27 Schmidt telescopes measuring nitrogen fluorescence from extensive air showers to calibrate the SD energy scale and determine shower maximum Xmax for composition analysis.", topics: ['cosmic-rays'], startYear: 2004, sources: [{ label: "The Pierre Auger Cosmic Ray Observatory, Nucl. Instrum. Meth. A 798, 172 (2015)", url: "https://doi.org/10.1016/j.nima.2015.06.058" }] },
    ],
    keyResults: [
      { year: 2007, discovery: "Correlation of UHECRs with Active Galactic Nuclei", description: "Auger reported a correlation between arrival directions of UHECRs above 60 EeV and the positions of nearby AGN in the Veron-Cetty catalogue, suggesting extragalactic origin from powerful astrophysical accelerators.", sources: [{ label: "Pierre Auger Collaboration, Science 318, 938 (2007)", url: "https://doi.org/10.1126/science.1151124" }] },
      { year: 2017, discovery: "Large-Scale Anisotropy in UHECR Arrival Directions", description: "A 5.2 sigma dipole anisotropy above 8 EeV points about 125 degrees away from the Galactic Centre \u2014 the first statistically significant directional evidence that the highest-energy cosmic rays come from outside our Galaxy.", sources: [{ label: "Pierre Auger Collaboration, Science 357, 1266 (2017)", url: "https://doi.org/10.1126/science.aan4338" }] },
    ],
    importantPeople: [
      { name: "James Cronin", contribution: "Co-proposed the Pierre Auger Observatory; Nobel Prize in Physics 1980 for CP violation in kaon decays, which shaped his interest in fundamental cosmic phenomena.", sources: [{ label: "Nobel Prize in Physics 1980", url: "https://www.nobelprize.org/prizes/physics/1980/summary/" }] },
      { name: "Alan Watson", contribution: "Co-proposed and co-led construction of the Auger Observatory; pioneer of UHECR detection using the Haverah Park array.", sources: [{ label: "Pierre Auger Observatory: Timeline", url: "https://www.auger.org/observatory/timeline-observatory" }] },
    ],
    readMore: [
      { label: "Pierre Auger Observatory", url: "https://www.auger.org" },
      { label: "Nobel Prize 1980 (Cronin)", url: "https://www.nobelprize.org/prizes/physics/1980/summary/" },
    ],
  },

  {
    id: 'cta',
    name: 'CTAO / CTA',
    fullName: "Cherenkov Telescope Array Observatory",
    type: 'gamma-ray-observatory',
    country: 'Spain / Chile',
    lat: 28.762,
    lng: -17.892,
    founded: 2019,
    status: 'planned',
    overview: "The Cherenkov Telescope Array Observatory (CTAO) will be the world's largest and most sensitive ground-based gamma-ray observatory, with two sites: CTA-North at La Palma, Canary Islands, and CTA-South near ESO's Paranal Observatory in Chile. The full array of ~70 imaging atmospheric Cherenkov telescopes in three size classes will cover 20 GeV to 300 TeV with order-of-magnitude improvements in sensitivity over current instruments, enabling studies of dark matter annihilation, cosmic-ray origin, AGN jets, and pulsar wind nebulae.",
    history: [
      { year: 2010, event: "CTA concept formally developed by an international consortium; the multi-telescope multi-size-class architecture is defined." },
      { year: 2018, event: "LST-1, the prototype Large-Sized Telescope, is inaugurated on La Palma in October 2018 and goes on to serve as a pathfinder for the array." },
      { year: 2025, event: "The European Commission establishes the CTAO as a European Research Infrastructure Consortium (CTAO ERIC) on 7 January 2025, with Italy as host state; three further Large-Sized Telescopes (LST-2 to LST-4) are under construction at La Palma.", sources: [{ label: "Commission Implementing Decision (EU) 2025/7", url: "https://eur-lex.europa.eu/eli/dec_impl/2025/7/oj/eng" }] },
    ],
    experiments: [
      { id: 'cta-north', name: 'CTA-North (La Palma)', description: "Northern array on La Palma, built around Large- and Medium-Sized Telescopes and focused on the low and middle energies from about 20 GeV; targets AGN jets, dark matter, and transient sources including gamma-ray bursts.", topics: ['cosmic-rays', 'dark-matter'], sources: [{ label: "Science with the Cherenkov Telescope Array (2018)", url: "https://doi.org/10.1142/10986" }] },
      { id: 'cta-south', name: 'CTA-South (Paranal)', description: "Southern array at Paranal, which adds Small-Sized Telescopes sensitive up to 300 TeV; surveys the southern sky including the Galactic Centre and supernova remnants.", topics: ['cosmic-rays', 'dark-matter'], sources: [{ label: "Science with the Cherenkov Telescope Array (2018)", url: "https://doi.org/10.1142/10986" }] },
    ],
    keyResults: [],
    importantPeople: [
      { name: "Werner Hofmann", contribution: "Spokesperson of the H.E.S.S. collaboration (2000-2012) and of the CTA collaboration (2010-2024); a key scientific architect of the array concept and science case.", sources: [{ label: "MPIK: Werner Hofmann, curriculum vitae", url: "https://www.mpi-hd.mpg.de/hfm/wh/CV2_Werner_Hofmann.htm" }] },
      { name: "Jim Hinton", contribution: "Director at the Max Planck Institute for Nuclear Physics in Heidelberg, member of the CTAO Council and chair of the Small-Sized Telescope camera board; an expert in very-high-energy gamma-ray astrophysics.", sources: [{ label: "MPIK: Jim Hinton", url: "https://www.mpi-hd.mpg.de/mpi/en/forschung/abteilungen-und-gruppen/nichtthermische-astrophysik/mitglieder/jim-hinton" }] },
    ],
    readMore: [
      { label: "CTAO Official Site", url: "https://www.ctao.org" },
    ],
  },

  // ─── Gravitational Wave ───────────────────────────────────────────────────

  {
    id: 'ligo',
    name: 'LIGO',
    fullName: "Laser Interferometer Gravitational-Wave Observatory",
    type: 'gravitational-wave-observatory',
    country: 'United States',
    lat: 46.455,
    lng: -119.408,
    founded: 2002,
    status: 'active',
    overview: "The Laser Interferometer Gravitational-wave Observatory (LIGO) consists of two identical 4-km L-shaped interferometers — one near Hanford, Washington, and one in Livingston, Louisiana — operated by Caltech and MIT. On 14 September 2015, Advanced LIGO made the first direct detection of gravitational waves from a binary black hole merger (GW150914), opening the era of gravitational-wave astronomy. The Nobel Prize in Physics 2017 was awarded to LIGO founders Rainer Weiss, Kip Thorne, and Barry Barish.",
    history: [
      { year: 1992, event: "NSF selects the Hanford and Livingston sites and signs the LIGO cooperative agreement with Caltech, two years after the National Science Board approved construction.", sources: [{ label: "LIGO Laboratory: Timeline", url: "https://www.ligo.caltech.edu/page/timeline" }] },
      { year: 2002, event: "The Initial LIGO interferometers operate in coincidence for the first time, together with GEO600, beginning two decades of progressively more sensitive observing runs.", sources: [{ label: "LIGO Laboratory: Timeline", url: "https://www.ligo.caltech.edu/page/timeline" }] },
      { year: 2015, event: "Advanced LIGO begins O1; on 14 September 2015, GW150914 — a binary black hole merger — is detected, the first direct observation of gravitational waves in history.", sources: [{ label: "LIGO Laboratory: Timeline", url: "https://www.ligo.caltech.edu/page/timeline" }] },
      { year: 2017, event: "LIGO and Virgo jointly detect GW170817, the first binary neutron star merger, observed simultaneously across the electromagnetic spectrum from gamma rays to radio.", sources: [{ label: "LIGO Laboratory: Timeline", url: "https://www.ligo.caltech.edu/page/timeline" }, { label: "LIGO and Virgo Collaborations, Phys. Rev. Lett. 119, 161101 (2017)", url: "https://doi.org/10.1103/PhysRevLett.119.161101" }] },
      { year: 2023, event: "LIGO's fourth observing run (O4) begins on 24 May 2023 with improved sensitivity; binary mergers are now detected routinely.", sources: [{ label: "LIGO Laboratory: Timeline", url: "https://www.ligo.caltech.edu/page/timeline" }] },
    ],
    experiments: [
      { id: 'ligo-aligo', name: 'Advanced LIGO (aLIGO)', description: "Two 4-km Fabry-Perot Michelson interferometers designed for up to 750 kW of circulating laser power in the arms; most sensitive to gravitational waves at around 100 Hz.", topics: ['gravitational-waves'], startYear: 2015, sources: [{ label: "Advanced LIGO, Class. Quantum Grav. 32, 074001 (2015)", url: "https://doi.org/10.1088/0264-9381/32/7/074001" }] },
    ],
    keyResults: [
      { year: 2015, discovery: "First Detection of Gravitational Waves (GW150914)", description: "LIGO detected gravitational waves from the merger of two black holes (~30 and ~35 solar masses each), confirming a central prediction of general relativity 100 years after Einstein made it. Nobel Prize in Physics 2017.", sources: [{ label: "Nobel Prize in Physics 2017", url: "https://www.nobelprize.org/prizes/physics/2017/summary/" }] },
      { year: 2017, discovery: "Binary Neutron Star Merger GW170817", description: "LIGO and Virgo observed the merger of two neutron stars along with a short gamma-ray burst and kilonova — the first multi-messenger gravitational-wave event, confirming neutron star mergers as sites of r-process nucleosynthesis and heavy element production.", sources: [{ label: "LIGO and Virgo Collaborations, Phys. Rev. Lett. 119, 161101 (2017)", url: "https://doi.org/10.1103/PhysRevLett.119.161101" }] },
    ],
    importantPeople: [
      { name: "Rainer Weiss", contribution: "Co-founded LIGO and invented the laser interferometer technique for gravitational-wave detection; Nobel Prize in Physics 2017.", sources: [{ label: "Nobel Prize in Physics 2017", url: "https://www.nobelprize.org/prizes/physics/2017/summary/" }] },
      { name: "Kip Thorne", contribution: "Co-founded LIGO and developed the theoretical predictions for binary merger waveforms that enabled GW150914's identification; Nobel Prize in Physics 2017.", sources: [{ label: "Nobel Prize in Physics 2017", url: "https://www.nobelprize.org/prizes/physics/2017/summary/" }] },
      { name: "Barry Barish", contribution: "Director of the LIGO Laboratory (1994-2005) who transformed the project into the instrument that detected gravitational waves; Nobel Prize in Physics 2017.", sources: [{ label: "Nobel Prize in Physics 2017", url: "https://www.nobelprize.org/prizes/physics/2017/summary/" }] },
    ],
    readMore: [
      { label: "LIGO Official Site", url: "https://www.ligo.caltech.edu" },
      { label: "Nobel Prize 2017 (Gravitational Waves)", url: "https://www.nobelprize.org/prizes/physics/2017/summary/" },
      { label: "GW Open Science Center", url: "https://gwosc.org" },
    ],
  },

  {
    id: 'virgo',
    name: 'Virgo',
    type: 'gravitational-wave-observatory',
    country: 'Italy',
    lat: 43.631,
    lng: 10.504,
    founded: 2007,
    status: 'active',
    overview: "The Virgo gravitational-wave detector is a 3-km L-shaped laser interferometer near Cascina, Pisa, operated by the European Gravitational Observatory (EGO) consortium. Joining the LIGO network in 2017, the addition of a third detector improved source sky localisation from ~1,000 deg2 to tens of deg2, enabling rapid electromagnetic follow-up of mergers. Advanced Virgo+ operates with frequency-dependent squeezing and improved mirror coatings.",
    history: [
      { year: 1989, event: "Virgo, conceived two years earlier by Adalberto Giazotto and Alain Brillet, is formally proposed to the French CNRS and the Italian INFN.", sources: [{ label: "Virgo: History", url: "https://www.virgo-gw.eu/about/virgo-history/" }] },
      { year: 2003, event: "Virgo is inaugurated at Cascina, where construction had begun in 1997; commissioning follows.", sources: [{ label: "Virgo: History", url: "https://www.virgo-gw.eu/about/virgo-history/" }] },
      { year: 2007, event: "Virgo joins LIGO for joint science run VSR1/S5, establishing the LIGO-Virgo collaboration.", sources: [{ label: "Virgo: History", url: "https://www.virgo-gw.eu/about/virgo-history/" }] },
      { year: 2017, event: "Advanced Virgo joins LIGO O2; GW170814 is the first three-detector gravitational-wave observation, dramatically improving sky localisation. GW170817 follows days later.", sources: [{ label: "LIGO and Virgo Collaborations, Phys. Rev. Lett. 119, 141101 (2017)", url: "https://doi.org/10.1103/PhysRevLett.119.141101" }] },
      { year: 2024, event: "Virgo joins the fourth observing run on 10 April 2024, at the start of its second part (O4b), alongside the two LIGO detectors.", sources: [{ label: "Virgo: LIGO and Virgo detectors restart observation (2024)", url: "https://www.virgo-gw.eu/news/ligo-and-virgo-detectors-restart-gravitational-wave-observation/" }] },
    ],
    experiments: [
      { id: 'virgo-adv', name: 'Advanced Virgo+', description: "3-km Fabry-Perot Michelson interferometer with power recycling, signal recycling, and frequency-dependent squeezing; jointly detects and localises gravitational-wave sources with LIGO.", topics: ['gravitational-waves'], startYear: 2017, sources: [{ label: "Advanced Virgo, Class. Quantum Grav. 32, 024001 (2015)", url: "https://doi.org/10.1088/0264-9381/32/2/024001" }] },
    ],
    keyResults: [
      { year: 2017, discovery: "First Three-Detector Gravitational-Wave Observation (GW170814)", description: "LIGO Hanford, LIGO Livingston, and Virgo together detected a binary black hole merger, reducing the 90% credible sky area from 1,160 deg2 to 60 deg2 — enabling rapid multi-messenger follow-up of compact binary mergers.", sources: [{ label: "LIGO and Virgo Collaborations, Phys. Rev. Lett. 119, 141101 (2017)", url: "https://doi.org/10.1103/PhysRevLett.119.141101" }] },
    ],
    importantPeople: [
      { name: "Adalberto Giazotto", contribution: "Co-founded the Virgo experiment; invented the superattenuation seismic isolation system that gives Virgo world-leading sensitivity at low frequencies.", sources: [{ label: "Virgo: History", url: "https://www.virgo-gw.eu/about/virgo-history/" }] },
      { name: "Alain Brillet", contribution: "Co-proposed Virgo and led French contributions; expert in laser stabilisation and optical techniques for interferometric detection.", sources: [{ label: "Virgo: History", url: "https://www.virgo-gw.eu/about/virgo-history/" }] },
    ],
    readMore: [
      { label: "EGO / Virgo", url: "https://www.ego-gw.it" },
      { label: "Virgo Collaboration", url: "https://www.virgo-gw.eu" },
    ],
  },

  {
    id: 'kagra',
    name: 'KAGRA',
    fullName: "Kamioka Gravitational Wave Detector",
    type: 'gravitational-wave-observatory',
    country: 'Japan',
    lat: 36.411,
    lng: 137.306,
    founded: 2019,
    status: 'active',
    overview: "KAGRA (Kamioka Gravitational Wave Detector) is the first large-scale gravitational-wave detector built underground and using cryogenic sapphire mirrors cooled to 20 K. Located in the Kamioka mine in Gifu Prefecture, its 3-km interferometer is designed to reduce seismic and thermal noise below the limits of current LIGO/Virgo sensitivity. KAGRA joined the LIGO-Virgo network for O3b in 2020 and O4 in 2023, bringing the global network to three continents.",
    history: [
      { year: 2010, event: "KAGRA (originally LCGT, Large-scale Cryogenic Gravitational wave Telescope) approved by the Japanese government and MEXT.", sources: [{ label: "KAGRA Collaboration, Nature Astronomy 3, 35 (2019)", url: "https://doi.org/10.1038/s41550-018-0658-y" }] },
      { year: 2012, event: "Tunnel excavation begins inside the Kamioka mine, sharing the mountain with the Super-Kamiokande detector.", sources: [{ label: "KAGRA Collaboration, Nature Astronomy 3, 35 (2019)", url: "https://doi.org/10.1038/s41550-018-0658-y" }] },
      { year: 2019, event: "Installation of the KAGRA interferometer is largely completed in spring 2019 and commissioning begins.", sources: [{ label: "Overview of KAGRA (arXiv:2009.09305)", url: "https://arxiv.org/abs/2009.09305" }] },
      { year: 2020, event: "KAGRA makes its first observing run in April 2020, jointly with GEO600 in Germany (O3GK), after LIGO and Virgo had suspended their O3 run.", sources: [{ label: "Overview of KAGRA (arXiv:2009.09305)", url: "https://arxiv.org/abs/2009.09305" }] },
      { year: 2023, event: "KAGRA joins the O4 observing run for four weeks, ending on 21 June 2023, then returns to commissioning to improve its sensitivity.", sources: [{ label: "ICRR: Update on KAGRA's O4 observing run (2023)", url: "https://gwcenter.icrr.u-tokyo.ac.jp/en/archives/1820" }] },
    ],
    experiments: [
      { id: 'kagra-det', name: 'KAGRA Interferometer', description: "3-km cryogenic underground Fabry-Perot Michelson interferometer using sapphire test masses at 20 K, targeting improved sensitivity below 100 Hz compared to room-temperature detectors.", topics: ['gravitational-waves'], startYear: 2019, sources: [{ label: "KAGRA Collaboration, Nature Astronomy 3, 35 (2019)", url: "https://doi.org/10.1038/s41550-018-0658-y" }] },
    ],
    keyResults: [],
    importantPeople: [
      { name: "Takaaki Kajita", contribution: "Principal investigator of KAGRA; also Nobel Prize in Physics 2015 for the discovery of atmospheric neutrino oscillations at Super-Kamiokande.", sources: [{ label: "Nobel Prize in Physics 2015", url: "https://www.nobelprize.org/prizes/physics/2015/summary/" }] },
    ],
    readMore: [
      { label: "KAGRA Official Site", url: "https://gwcenter.icrr.u-tokyo.ac.jp" },
    ],
  },

  // ─── Nuclear / Rare Isotope ───────────────────────────────────────────────

  {
    id: 'frib',
    name: 'FRIB',
    fullName: "Facility for Rare Isotope Beams",
    type: 'rare-isotope-facility',
    country: 'United States',
    lat: 42.727,
    lng: -84.484,
    founded: 2022,
    status: 'active',
    overview: "The Facility for Rare Isotope Beams (FRIB) at Michigan State University, which opened to users in May 2022, is the world's most powerful rare-isotope accelerator. A superconducting linear accelerator drives uranium and other heavy-ion beams to roughly half the speed of light and fragments them on beryllium targets to produce thousands of exotic radioactive isotopes — including those that exist only in neutron stars and supernovae. FRIB enables tests of nuclear force models near the neutron drip line and measurements critical to understanding r-process nucleosynthesis.",
    history: [
      { year: 2008, event: "DOE selects Michigan State University on 11 December 2008 to design and establish FRIB, successor to the National Superconducting Cyclotron Laboratory (NSCL).", sources: [{ label: "NSCL: History", url: "https://nscl.msu.edu/about/history.html" }] },
      { year: 2014, event: "FRIB construction begins; the superconducting linac tunnel is excavated on the MSU campus in East Lansing." },
      { year: 2022, event: "FRIB opens with a ribbon-cutting ceremony on 2 May 2022, and its first user experiment begins the same month.", sources: [{ label: "AIP FYI: DOE rare isotope facility opening at Michigan State (2022)", url: "https://www.aip.org/fyi/doe-rare-isotope-facility-opening-at-michigan-state" }] },
      { year: 2026, event: "The GRETA gamma-ray tracking array, shipped from Berkeley Lab in 2025, completes its commissioning run at FRIB.", sources: [{ label: "Berkeley Lab: GRETA comes online", url: "https://newscenter.lbl.gov/2026/07/28/greta-comes-online-for-a-new-era-of-nuclear-science/" }] },
    ],
    experiments: [
      { id: 'frib-greta', name: 'GRETA', description: "Gamma-Ray Energy Tracking Array — a 4-pi germanium detector that tracks gamma-ray photons from nuclear reactions, enabling in-beam spectroscopy of rare isotopes at FRIB.", topics: ['nuclear-structure', 'rare-isotopes'], startYear: 2026, sources: [{ label: "Berkeley Lab: GRETA comes online", url: "https://newscenter.lbl.gov/2026/07/28/greta-comes-online-for-a-new-era-of-nuclear-science/" }] },
      { id: 'frib-mona', name: 'MoNA-LISA', description: "Modular Neutron Array and Large-area multi-Institutional Scintillator Array; detects neutrons emitted by neutron-unbound nuclei at and beyond the drip line to probe nuclear structure.", topics: ['nuclear-structure', 'rare-isotopes'], startYear: 2022, sources: [{ label: "MoNA: The first 25 years (arXiv:2502.14612)", url: "https://arxiv.org/abs/2502.14612" }] },
    ],
    keyResults: [
      { year: 2022, discovery: "First Half-Life Measurements at FRIB", description: "FRIB's first experiment fragmented a calcium-48 beam and measured, for the first time, the half-lives of five neutron-rich isotopes of magnesium, aluminium, silicon and phosphorus near N=28, finding evidence that the Z=14 subshell closure erodes there (Physical Review Letters 129, 212501).", sources: [{ label: "Crawford et al., Phys. Rev. Lett. 129, 212501 (2022)", url: "https://doi.org/10.1103/PhysRevLett.129.212501" }] },
    ],
    importantPeople: [
      { name: "Konrad Gelbke", contribution: "Director of the National Superconducting Cyclotron Laboratory, FRIB's predecessor, from 1992 to 2015, including during Michigan State's successful bid to host FRIB.", sources: [{ label: "MSU Spartan magazine: The Quest for FRIB (2022)", url: "https://spartan.msu.edu/spartan-story-hub/magazines/fall-2022/into-the-unknown-the-quest-for-frib" }] },
      { name: "Brad Sherrill", contribution: "FRIB scientific director and director of NSCL from 2015 to 2022; an expert in rare-isotope beam production.", sources: [{ label: "MSU Spartan magazine: The Quest for FRIB (2022)", url: "https://spartan.msu.edu/spartan-story-hub/magazines/fall-2022/into-the-unknown-the-quest-for-frib" }] },
    ],
    readMore: [
      { label: "FRIB Official Site", url: "https://frib.msu.edu" },
    ],
  },

  {
    id: 'gsi',
    name: 'GSI / FAIR',
    fullName: "GSI Helmholtz Centre for Heavy Ion Research",
    type: 'rare-isotope-facility',
    country: 'Germany',
    lat: 49.934,
    lng: 8.672,
    founded: 1969,
    status: 'active',
    overview: "The GSI Helmholtz Centre for Heavy Ion Research in Darmstadt operates a heavy-ion accelerator complex and is home to FAIR (Facility for Antiproton and Ion Research), currently under construction on the same campus. GSI is internationally renowned for synthesising six new super-heavy elements (Bohrium to Copernicium, Z=107-112) between 1981 and 1996, for pioneering heavy-ion cancer therapy in the 1990s, and for its HADES spectrometer studying dense hadronic matter. FAIR will collide heavy ions and antiprotons at unprecedented intensities.",
    history: [
      { year: 1969, event: "GSI founded as Germany's national heavy-ion research centre; the first experiments at its UNILAC linear accelerator follow in 1975.", sources: [{ label: "GSI and FAIR timeline", url: "https://www.gsi.de/en/about_us/history" }] },
      { year: 1981, event: "Peter Armbruster and Gottfried Munzenberg's team synthesises element 107 (Bohrium) using the velocity filter SHIP, beginning two decades of super-heavy element discovery.", sources: [{ label: "Münzenberg et al., Z. Phys. A 300, 107 (1981)", url: "https://doi.org/10.1007/BF01412623" }, { label: "GSI and FAIR timeline", url: "https://www.gsi.de/en/about_us/history" }] },
      { year: 1994, event: "GSI synthesises elements 110 (Darmstadtium) and 111 (Roentgenium), approaching the predicted island of stability for super-heavy nuclei.", sources: [{ label: "Hofmann et al., Z. Phys. A 350, 277 (1995)", url: "https://doi.org/10.1007/BF01291181" }, { label: "Hofmann et al., Z. Phys. A 350, 281 (1995)", url: "https://doi.org/10.1007/BF01291182" }] },
      { year: 1997, event: "First cancer patients treated with heavy-ion carbon beams at GSI, pioneering therapy with superior tumour conformality over conventional radiotherapy.", sources: [{ label: "GSI and FAIR timeline", url: "https://www.gsi.de/en/about_us/history" }] },
      { year: 2017, event: "Ground is broken for FAIR on the GSI campus; the new SIS100 synchrotron will be its central accelerator.", sources: [{ label: "GSI and FAIR timeline", url: "https://www.gsi.de/en/about_us/history" }] },
    ],
    experiments: [
      { id: 'gsi-hades', name: 'HADES', description: "High Acceptance Di-Electron Spectrometer at GSI; studies dense hadronic matter and strangeness production in heavy-ion collisions, relevant to neutron star interior physics.", topics: ['heavy-ions', 'qcd'], startYear: 2002, sources: [{ label: "The HADES Collaboration, Eur. Phys. J. A 41, 243 (2009)", url: "https://doi.org/10.1140/epja/i2009-10807-5" }] },
      { id: 'fair-cbm', name: 'CBM (FAIR)', description: "Compressed Baryonic Matter experiment at FAIR; will study the QCD phase diagram at the highest net baryon densities achievable in a laboratory, mapping the nuclear matter phase transition.", topics: ['heavy-ions', 'qcd', 'nuclear-structure'], sources: [{ label: "CBM Collaboration, Eur. Phys. J. A 53, 60 (2017)", url: "https://doi.org/10.1140/epja/i2017-12248-y" }] },
      { id: 'fair-panda', name: 'PANDA (FAIR)', description: "Proton-ANtiproton annihilations at DArmstadt; uses stored antiproton beams to study charmonium spectroscopy, gluonic excitations (hybrids and glueballs), and hypernuclei.", topics: ['qcd', 'nuclear-structure'], sources: [{ label: "FAIR: Experiments", url: "https://fair-center.eu/user/experiments" }] },
    ],
    keyResults: [
      { year: 1984, discovery: "Super-Heavy Element 108 (Hassium)", description: "GSI synthesised element 108, Hassium (Hs), at the time the heaviest known element, confirming that the periodic table extends well beyond uranium and approaching the predicted island of stability.", sources: [{ label: "Münzenberg et al., Z. Phys. A 317, 235 (1984)", url: "https://doi.org/10.1007/BF01421260" }] },
      { year: 1996, discovery: "Element 112 (Copernicium)", description: "A GSI team led by Sigurd Hofmann synthesised element 112 (later named Copernicium, Cn) in a cold-fusion reaction at the velocity filter SHIP, the last of six new elements discovered at GSI.", sources: [{ label: "Hofmann et al., Z. Phys. A 354, 229 (1996)", url: "https://doi.org/10.1007/BF02769517" }] },
    ],
    importantPeople: [
      { name: "Peter Armbruster", contribution: "Led the GSI super-heavy element synthesis programme; co-discovered six elements from Bohrium (107) to Copernicium (112) between 1981 and 1996.", sources: [{ label: "GSI and FAIR timeline", url: "https://www.gsi.de/en/about_us/history" }] },
      { name: "Gottfried Munzenberg", contribution: "Co-discovered the super-heavy elements at GSI and pioneered the velocity-filter SHIP technology that made single-atom synthesis searches possible.", sources: [{ label: "GSI and FAIR timeline", url: "https://www.gsi.de/en/about_us/history" }, { label: "Münzenberg et al., Z. Phys. A 300, 107 (1981)", url: "https://doi.org/10.1007/BF01412623" }] },
    ],
    readMore: [
      { label: "GSI Official Site", url: "https://www.gsi.de" },
      { label: "FAIR Project", url: "https://www.fair-center.eu" },
    ],
  },

  {
    id: 'triumf',
    name: 'TRIUMF',
    type: 'rare-isotope-facility',
    country: 'Canada',
    lat: 49.2488,
    lng: -123.2381,
    founded: 1968,
    status: 'active',
    overview: "TRIUMF at the University of British Columbia in Vancouver is Canada's particle accelerator centre. Its 520-MeV H-minus cyclotron — one of the world's largest — drives the ISAC radioactive ion beam facility, producing rare isotopes for nuclear physics, nuclear astrophysics, and medical isotope production. TRIUMF is a world leader in precision mass measurements of short-lived nuclei, gamma-ray spectroscopy of neutron-rich isotopes, and isotopes for cancer therapy. The ARIEL electron linac, commissioned in 2022, triples rare-isotope production capacity.",
    history: [
      { year: 1968, event: "TRIUMF, planned by the University of British Columbia, Simon Fraser University, and the University of Victoria, receives federal funding in April 1968 and construction of its cyclotron begins.", sources: [{ label: "CERN Courier: Tales of TRIUMF", url: "https://cerncourier.com/a/tales-of-triumf/" }] },
      { year: 1974, event: "Protons are first extracted from the TRIUMF 500 MeV cyclotron on 15 December 1974; it goes on to deliver high-intensity beams for meson physics and nuclear science.", sources: [{ label: "CERN Courier: Tales of TRIUMF", url: "https://cerncourier.com/a/tales-of-triumf/" }, { label: "The TRIUMF 500 MeV cyclotron, Hyperfine Interact. 225, 9 (2014)", url: "https://doi.org/10.1007/s10751-013-0878-6" }] },
      { year: 1998, event: "ISAC, approved in 1995, delivers its first radioactive ion beam, extending TRIUMF's reach into nuclear astrophysics and precision Standard Model tests." },
      { year: 2006, event: "The ISAC-II superconducting linear accelerator delivers its first beam in 2006, post-accelerating radioactive ions for nuclear reaction measurements; it reaches its design voltage in 2010." },
      { year: 2014, event: "The first stage of the superconducting electron linac for ARIEL (Advanced Rare IsotopE Laboratory) is commissioned; ARIEL is being built to add new rare-isotope production routes alongside the cyclotron." },
    ],
    experiments: [
      { id: 'triumf-titan', name: 'TITAN', description: "TRIUMF's Ion Trap for Atomic and Nuclear science; precision Penning and Ebit trap system measuring atomic masses of short-lived exotic nuclei with high precision.", topics: ['rare-isotopes', 'nuclear-structure'], startYear: 2003, sources: [{ label: "Dilling et al., Int. J. Mass Spectrom. 251, 198 (2006)", url: "https://doi.org/10.1016/j.ijms.2006.01.044" }] },
      { id: 'triumf-griffin', name: 'GRIFFIN', description: "Gamma-Ray Infrastructure For Fundamental Investigations of Nuclei; 16-detector HPGe array at ISAC for decay spectroscopy of neutron-rich rare isotopes, mapping nuclear structure across the chart of nuclides.", topics: ['nuclear-structure', 'rare-isotopes'], startYear: 2014, sources: [{ label: "The GRIFFIN facility, Nucl. Instrum. Meth. A 918, 9 (2019)", url: "https://doi.org/10.1016/j.nima.2018.11.115" }] },
    ],
    keyResults: [
      { year: 2008, discovery: "Penning-Trap Masses of Halo Nuclei", description: "TITAN made the first Penning-trap mass measurements of the halo nuclei helium-8 and lithium-11. Lithium-11, with a half-life of 8.8 ms, was the shortest-lived nuclide ever measured in a Penning trap, and its two-neutron separation energy became seven times more precise (Physical Review Letters 101, 012501 and 202501).", sources: [{ label: "Ryjkov et al., Phys. Rev. Lett. 101, 012501 (2008)", url: "https://doi.org/10.1103/PhysRevLett.101.012501" }, { label: "Smith et al., Phys. Rev. Lett. 101, 202501 (2008)", url: "https://doi.org/10.1103/PhysRevLett.101.202501" }] },
    ],
    importantPeople: [
      { name: "Erich Vogt", contribution: "Co-founder of TRIUMF and its director from 1981 to 1994; oversaw its growth into an international user facility." },
      { name: "Jens Dilling", contribution: "Designed and built the TITAN ion-trap system and served as TRIUMF's associate laboratory director for physical sciences until 2021.", sources: [{ label: "ORNL: Dilling named associate laboratory director", url: "https://www.ornl.gov/news/dilling-named-associate-laboratory-director-neutron-sciences-ornl" }] },
    ],
    readMore: [
      { label: "TRIUMF Official Site", url: "https://www.triumf.ca" },
    ],
  },

  // ─── Synchrotron / Light Source ──────────────────────────────────────────

  {
    id: 'desy',
    name: 'DESY',
    fullName: "Deutsches Elektronen-Synchrotron",
    type: 'accelerator-laboratory',
    country: 'Germany',
    lat: 53.5741,
    lng: 9.8826,
    founded: 1959,
    status: 'active',
    overview: "Deutsches Elektronen-Synchrotron (DESY) in Hamburg is one of the world's leading accelerator centres. Its PETRA collider hosted the 1979 discovery of the gluon — the carrier of the strong force — in three-jet events. HERA (1992-2007) was the world's only electron-proton collider, mapping proton structure in unprecedented detail. Today DESY operates PETRA III (the world's brightest medium-energy synchrotron source), FLASH (a free-electron laser), and hosts the European XFEL — the world's most powerful X-ray free-electron laser.",
    history: [
      { year: 1959, event: "DESY founded on 18 December 1959 as West Germany's national electron accelerator centre; construction of its first electron synchrotron begins in Hamburg-Bahrenfeld.", sources: [{ label: "Lightsources.org: 60 years of DESY", url: "https://lightsources.org/2019/12/18/60-years-of-desy-from-hamburg-particle-accelerator-to-global-research-centre/" }] },
      { year: 1979, event: "Four experiments (JADE, MARK-J, PLUTO, TASSO) at the PETRA collider simultaneously observe three-jet events in e+e- annihilation — the first direct evidence for the gluon.", sources: [{ label: "TASSO Collaboration, Phys. Lett. B 86, 243 (1979)", url: "https://doi.org/10.1016/0370-2693(79)90830-X" }] },
      { year: 1992, event: "HERA, the world's only electron-proton collider (27.5 GeV electrons on 820-920 GeV protons), begins operations with H1 and ZEUS detectors.", sources: [{ label: "Collider Physics at HERA (arXiv:0805.3334)", url: "https://arxiv.org/abs/0805.3334" }] },
      { year: 2007, event: "HERA completes fifteen years of e-p physics; PETRA is converted to PETRA III, the world's most brilliant storage-ring X-ray source at its energy.", sources: [{ label: "Collider Physics at HERA (arXiv:0805.3334)", url: "https://arxiv.org/abs/0805.3334" }] },
      { year: 2017, event: "European XFEL, a superconducting X-ray free-electron laser able to produce up to 27,000 pulses per second, is inaugurated on 1 September 2017; its tunnel runs from the DESY campus to Schenefeld.", sources: [{ label: "Nature Photonics 11, 609 (2017): European XFEL inauguration", url: "https://doi.org/10.1038/s41566-017-0025-z" }, { label: "Decking et al., Nature Photonics 14, 391 (2020)", url: "https://doi.org/10.1038/s41566-020-0607-z" }] },
    ],
    experiments: [
      { id: 'desy-tasso', name: 'TASSO at PETRA', description: "Two-Arm Spectrometer Solenoid; one of four PETRA experiments that observed the first three-jet gluon events in e+e- annihilation in 1979, providing direct evidence for QCD.", topics: ['qcd'], startYear: 1979, endYear: 1986, sources: [{ label: "TASSO Collaboration, Phys. Lett. B 86, 243 (1979)", url: "https://doi.org/10.1016/0370-2693(79)90830-X" }] },
      { id: 'desy-h1', name: 'H1 at HERA', description: "General-purpose ep detector measuring deep inelastic scattering to probe quark and gluon distributions inside the proton at Bjorken-x values down to 10-5.", topics: ['qcd'], startYear: 1992, endYear: 2007, sources: [{ label: "H1 Collaboration, Nucl. Phys. B 407, 515 (1993)", url: "https://doi.org/10.1016/0550-3213(93)90090-C" }] },
      { id: 'desy-petra3', name: 'PETRA III', description: "World-class synchrotron radiation source operating at 6 GeV with 20 beamline stations; enables sub-nanometre imaging of materials, proteins, and nanostructures for life and materials science.", topics: ['synchrotron-light'], startYear: 2009 },
    ],
    keyResults: [
      { year: 1979, discovery: "Discovery of the Gluon", description: "Three-jet events in e+e- annihilation at PETRA provided the first direct experimental evidence for the gluon as the mediator of the strong nuclear force — a cornerstone confirmation of QCD.", sources: [{ label: "TASSO Collaboration, Phys. Lett. B 86, 243 (1979)", url: "https://doi.org/10.1016/0370-2693(79)90830-X" }] },
      { year: 1993, discovery: "Rise of the Proton Structure Function at Low-x", description: "H1 and ZEUS at HERA observed an unexpected steep rise in the proton gluon density at small Bjorken-x, revealing a new regime of QCD dynamics and motivating the study of gluon saturation.", sources: [{ label: "H1 Collaboration, Nucl. Phys. B 407, 515 (1993)", url: "https://doi.org/10.1016/0550-3213(93)90090-C" }, { label: "ZEUS Collaboration, Phys. Lett. B 316, 412 (1993)", url: "https://doi.org/10.1016/0370-2693(93)90347-K" }] },
    ],
    importantPeople: [
      { name: "Bjorn Wiik", contribution: "DESY director (1993-1999) and HERA project leader; a driving force behind Hamburg's position as a world centre for accelerator-based physics." },
      { name: "G\u00fcnter Wolf", contribution: "Spokesperson of the TASSO experiment at PETRA, who presented its three-jet evidence for the gluon in 1979; shared the 1995 European Physical Society High Energy and Particle Physics Prize for that work.", sources: [{ label: "DESY: the discovery of the gluon", url: "https://www.desy.de/news/backgrounders/40_years_of_gluon/index_eng.html" }] },
    ],
    readMore: [
      { label: "DESY Official Site", url: "https://www.desy.de" },
      { label: "European XFEL", url: "https://www.xfel.eu" },
    ],
  },

];
