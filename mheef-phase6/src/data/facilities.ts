import type { Facility } from '../types/facility';

/**
 * Master dataset. 70 HEP facilities across all major
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
    specs: [
      { label: "Tevatron peak beam energy", value: "980 GeV", sources: [{ label: "CERN Courier: Farewell to the Tevatron", url: "https://cerncourier.com/a/farewell-to-the-tevatron/" }] },
      { label: "Tevatron operation", value: "1983 to 2011", sources: [{ label: "CERN Courier: Farewell to the Tevatron", url: "https://cerncourier.com/a/farewell-to-the-tevatron/" }] },
      { label: "NOvA baseline", value: "810 km", sources: [{ label: "NOvA Collaboration, Phys. Rev. Lett. 116, 151806 (2016)", url: "https://doi.org/10.1103/PhysRevLett.116.151806" }] },
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
    specs: [
      { label: "RHIC ring circumference", value: "2.4 miles (about 3.9 km)", sources: [{ label: "Brookhaven: The RHIC accelerator complex", url: "https://www.bnl.gov/rhic/complex.php" }] },
      { label: "RHIC rings", value: "Two, with beams circulating in opposite directions", sources: [{ label: "Brookhaven: The RHIC accelerator complex", url: "https://www.bnl.gov/rhic/complex.php" }] },
      { label: "Ion speed at full energy", value: "99.995% of the speed of light", sources: [{ label: "Brookhaven: The RHIC accelerator complex", url: "https://www.bnl.gov/rhic/complex.php" }] },
      { label: "RHIC operation", value: "25 runs, 2000 to 2026", sources: [{ label: "Brookhaven: RHIC Wraps up Final Collisions (2026)", url: "https://www.bnl.gov/newsroom/news.php?a=222794" }] },
    ],
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
    specs: [
      { label: "KEKB data delivered", value: "More than 1 ab⁻¹", sources: [{ label: "The Belle II Physics Book, PTEP 2019, 123C01", url: "https://doi.org/10.1093/ptep/ptz106" }] },
      { label: "SuperKEKB design luminosity", value: "40 times that of KEKB", sources: [{ label: "The Belle II Physics Book, PTEP 2019, 123C01", url: "https://doi.org/10.1093/ptep/ptz106" }] },
      { label: "Belle II target data set", value: "50 ab⁻¹", sources: [{ label: "The Belle II Physics Book, PTEP 2019, 123C01", url: "https://doi.org/10.1093/ptep/ptz106" }] },
    ],
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
    specs: [
      { label: "Rock overburden", value: "1,400 m", sources: [{ label: "LNGS: Overview", url: "https://www.lngs.infn.it/en/lngs-overview" }] },
      { label: "Cosmic-ray flux", value: "Reduced a million times by the rock", sources: [{ label: "LNGS: Overview", url: "https://www.lngs.infn.it/en/lngs-overview" }] },
      { label: "Experimental halls", value: "Three, each 100 m long, 20 m wide and 18 m high", sources: [{ label: "LNGS: Overview", url: "https://www.lngs.infn.it/en/lngs-overview" }] },
      { label: "Underground volume", value: "About 180,000 m³", sources: [{ label: "LNGS: Overview", url: "https://www.lngs.infn.it/en/lngs-overview" }] },
      { label: "XENONnT active target", value: "5.9 tonnes of liquid xenon", sources: [{ label: "The XENONnT dark matter experiment, Eur. Phys. J. C 84, 784 (2024)", url: "https://doi.org/10.1140/epjc/s10052-024-12982-5" }] },
    ],
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
    specs: [
      { label: "Depth", value: "2 km", sources: [{ label: "SNOLAB: About", url: "https://www.snolab.ca/about/about-snolab/" }] },
      { label: "Underground clean space", value: "5,000 m²", sources: [{ label: "SNOLAB: About", url: "https://www.snolab.ca/about/about-snolab/" }] },
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
    specs: [
      { label: "Rock overburden", value: "1,000 m", sources: [{ label: "Super-Kamiokande: The detector", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/sk/about/detector/" }] },
      { label: "Super-Kamiokande tank", value: "39.3 m in diameter, 41.4 m high", sources: [{ label: "Super-Kamiokande: The detector", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/sk/about/detector/" }] },
      { label: "Water mass", value: "50,000 tonnes", sources: [{ label: "Super-Kamiokande: The detector", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/sk/about/detector/" }] },
      { label: "Photomultiplier tubes", value: "11,129 inner (20-inch) and 1,885 outer (8-inch)", sources: [{ label: "Super-Kamiokande: The detector", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/sk/about/detector/" }] },
    ],
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
    specs: [
      { label: "Instrumented volume", value: "One cubic kilometre of ice", sources: [{ label: "IceCube: The detector", url: "https://icecube.wisc.edu/science/icecube/" }] },
      { label: "Strings", value: "86", sources: [{ label: "IceCube: The detector", url: "https://icecube.wisc.edu/science/icecube/" }] },
      { label: "Digital optical modules", value: "5,160", sources: [{ label: "IceCube: The detector", url: "https://icecube.wisc.edu/science/icecube/" }] },
      { label: "DeepCore energy threshold", value: "About 10 GeV", sources: [{ label: "IceCube: The detector", url: "https://icecube.wisc.edu/science/icecube/" }] },
    ],
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
    specs: [
      { label: "Liquid scintillator mass", value: "20,000 tonnes", sources: [{ label: "Neutrino physics with JUNO, J. Phys. G 43, 030401 (2016)", url: "https://doi.org/10.1088/0954-3899/43/3/030401" }] },
      { label: "Reactor baseline", value: "53 km", sources: [{ label: "Neutrino physics with JUNO, J. Phys. G 43, 030401 (2016)", url: "https://doi.org/10.1088/0954-3899/43/3/030401" }] },
      { label: "Photomultiplier tubes", value: "More than 20,000 large and 25,000 small", sources: [{ label: "GSI: JUNO delivers first physics results (2025)", url: "https://www.gsi.de/en/start/news/details/2025/11/19/juno-experiment-first-data" }] },
    ],
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
    specs: [
      { label: "Reactors", value: "Six, each of 2.9 GW thermal power", sources: [{ label: "Daya Bay Collaboration, Phys. Rev. Lett. 108, 171803 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.171803" }] },
      { label: "Hall baselines", value: "470 m and 576 m (near), 1,648 m (far)", sources: [{ label: "Daya Bay Collaboration, Phys. Rev. Lett. 108, 171803 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.171803" }] },
      { label: "Data set", value: "3,158 days; 5.55 million antineutrino candidates", sources: [{ label: "Daya Bay Collaboration, Phys. Rev. Lett. 130, 161802 (2023)", url: "https://doi.org/10.1103/PhysRevLett.130.161802" }] },
      { label: "Final sin² 2θ₁₃", value: "0.0851 ± 0.0024", sources: [{ label: "Daya Bay Collaboration, Phys. Rev. Lett. 130, 161802 (2023)", url: "https://doi.org/10.1103/PhysRevLett.130.161802" }] },
    ],
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
      { name: "Yifang Wang", contribution: "Led the Daya Bay experiment from IHEP Beijing and devised its multi-detector near/far strategy; accepted the 2016 Breakthrough Prize in Fundamental Physics with Kam-Biu Luk on the collaboration's behalf.", sources: [{ label: "Asian Scientist: 2016 Breakthrough Prize in Fundamental Physics", url: "https://www.asianscientist.com/2015/11/topnews/neutrino-breakthrough-prize-2016/" }, { label: "Breakthrough Prize: Kam-Biu Luk and the Daya Bay Collaboration", url: "https://breakthroughprize.org/Laureates/L153" }] },
      { name: "Kam-Biu Luk", contribution: "Led the Daya Bay experiment from UC Berkeley and Lawrence Berkeley National Laboratory; shared the 2016 Breakthrough Prize in Fundamental Physics with the collaboration.", sources: [{ label: "Breakthrough Prize: Kam-Biu Luk and the Daya Bay Collaboration", url: "https://breakthroughprize.org/Laureates/L153" }, { label: "Asian Scientist: 2016 Breakthrough Prize in Fundamental Physics", url: "https://www.asianscientist.com/2015/11/topnews/neutrino-breakthrough-prize-2016/" }] },
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
    specs: [
      { label: "Array area", value: "3,000 km²", sources: [{ label: "Pierre Auger Observatory: Timeline", url: "https://www.auger.org/observatory/timeline-observatory" }] },
      { label: "Surface detectors", value: "1,660", sources: [{ label: "Pierre Auger Observatory: Timeline", url: "https://www.auger.org/observatory/timeline-observatory" }] },
      { label: "Fluorescence telescopes", value: "27", sources: [{ label: "Pierre Auger Observatory: Timeline", url: "https://www.auger.org/observatory/timeline-observatory" }] },
    ],
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
    specs: [
      { label: "Energy range", value: "20 GeV to 300 TeV", sources: [{ label: "Science with the Cherenkov Telescope Array (2018)", url: "https://doi.org/10.1142/10986" }] },
      { label: "Sites", value: "La Palma (north) and Paranal (south)", sources: [{ label: "Science with the Cherenkov Telescope Array (2018)", url: "https://doi.org/10.1142/10986" }] },
    ],
    history: [
      { year: 2011, event: "The CTA Consortium publishes its design concepts for the array, built from telescopes of three sizes.", sources: [{ label: "CTA Consortium, Design concepts for the Cherenkov Telescope Array, Exp. Astron. 32, 193 (2011)", url: "https://doi.org/10.1007/s10686-011-9247-0" }] },
      { year: 2018, event: "LST-1, the prototype 23-metre Large-Sized Telescope, is inaugurated on La Palma on 10 October 2018; four such telescopes are planned for the northern site.", sources: [{ label: "CTA press release: the first telescope on a CTA site makes its debut (2018)", url: "https://www.eurekalert.org/news-releases/884285" }] },
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
    specs: [
      { label: "Arm length", value: "4 km", sources: [{ label: "LIGO Laboratory: Facts", url: "https://www.ligo.caltech.edu/page/facts" }] },
      { label: "Distance between the two detectors", value: "3,002 km", sources: [{ label: "LIGO Laboratory: Facts", url: "https://www.ligo.caltech.edu/page/facts" }] },
      { label: "Vacuum volume", value: "10,000 m³", sources: [{ label: "LIGO Laboratory: Facts", url: "https://www.ligo.caltech.edu/page/facts" }] },
      { label: "Smallest detectable change in arm length", value: "1/10,000 the width of a proton", sources: [{ label: "LIGO Laboratory: Facts", url: "https://www.ligo.caltech.edu/page/facts" }] },
    ],
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
    specs: [
      { label: "Arm length", value: "3 km", sources: [{ label: "Virgo: The detector", url: "https://www.virgo-gw.eu/science/detector/" }] },
    ],
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
    specs: [
      { label: "Arm length", value: "3 km", sources: [{ label: "KAGRA Collaboration, Nature Astronomy 3, 35 (2019)", url: "https://doi.org/10.1038/s41550-018-0658-y" }] },
      { label: "Mirrors", value: "Sapphire, cooled to cryogenic temperature", sources: [{ label: "KAGRA Collaboration, Nature Astronomy 3, 35 (2019)", url: "https://doi.org/10.1038/s41550-018-0658-y" }] },
      { label: "Site", value: "Underground, inside Mount Ikenoyama", sources: [{ label: "KAGRA Collaboration, Nature Astronomy 3, 35 (2019)", url: "https://doi.org/10.1038/s41550-018-0658-y" }] },
    ],
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
    type: 'nuclear-physics-facility',
    country: 'United States',
    lat: 42.727,
    lng: -84.484,
    founded: 2022,
    status: 'active',
    overview: "The Facility for Rare Isotope Beams (FRIB) at Michigan State University, which opened to users in May 2022, is the world's most powerful rare-isotope accelerator. A superconducting linear accelerator drives uranium and other heavy-ion beams to roughly half the speed of light and fragments them on beryllium targets to produce thousands of exotic radioactive isotopes — including those that exist only in neutron stars and supernovae. FRIB enables tests of nuclear force models near the neutron drip line and measurements critical to understanding r-process nucleosynthesis.",
    specs: [
      { label: "Beam power on target", value: "400 kW by design, being reached in stages", sources: [{ label: "Wei et al., FRIB status, SRF2023 proceedings (MOIAA01)", url: "https://proceedings.jacow.org/srf2023/papers/moiaa01.pdf" }] },
      { label: "Beam energy", value: "More than 200 MeV per nucleon", sources: [{ label: "Wei et al., FRIB status, SRF2023 proceedings (MOIAA01)", url: "https://proceedings.jacow.org/srf2023/papers/moiaa01.pdf" }] },
      { label: "Superconducting linac", value: "324 resonators in 46 cryomodules", sources: [{ label: "Wei et al., FRIB status, SRF2023 proceedings (MOIAA01)", url: "https://proceedings.jacow.org/srf2023/papers/moiaa01.pdf" }] },
    ],
    history: [
      { year: 2008, event: "DOE selects Michigan State University on 11 December 2008 to design and establish FRIB, successor to the National Superconducting Cyclotron Laboratory (NSCL).", sources: [{ label: "NSCL: History", url: "https://nscl.msu.edu/about/history.html" }] },
      { year: 2014, event: "Civil construction of FRIB starts with a ground-breaking ceremony on 17 March 2014.", sources: [{ label: "FRIB: Groundbreaking launches civil construction (2014)", url: "https://frib.msu.edu/news/2014/groundbreaking-launches-construction.html" }, { label: "MSU Today: FRIB groundbreaking, concept becomes reality (2014)", url: "https://msutoday.msu.edu/news/2014/frib-groundbreaking-concept-becomes-reality" }] },
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
    type: 'nuclear-physics-facility',
    country: 'Germany',
    lat: 49.934,
    lng: 8.672,
    founded: 1969,
    status: 'active',
    overview: "The GSI Helmholtz Centre for Heavy Ion Research in Darmstadt operates a heavy-ion accelerator complex and is home to FAIR (Facility for Antiproton and Ion Research), currently under construction on the same campus. GSI is internationally renowned for synthesising six new super-heavy elements (Bohrium to Copernicium, Z=107-112) between 1981 and 1996, for pioneering heavy-ion cancer therapy in the 1990s, and for its HADES spectrometer studying dense hadronic matter. FAIR will collide heavy ions and antiprotons at unprecedented intensities.",
    specs: [
      { label: "UNILAC length", value: "120 m", sources: [{ label: "FAIR: The accelerator facility", url: "https://fair-center.eu/overview/accelerator" }] },
      { label: "SIS18 circumference", value: "216 m", sources: [{ label: "FAIR: The accelerator facility", url: "https://fair-center.eu/overview/accelerator" }] },
      { label: "SIS100 circumference (FAIR)", value: "1,100 m", sources: [{ label: "FAIR: The accelerator facility", url: "https://fair-center.eu/overview/accelerator" }] },
      { label: "SIS100 ion speed", value: "Up to 99% of the speed of light", sources: [{ label: "FAIR: The accelerator facility", url: "https://fair-center.eu/overview/accelerator" }] },
    ],
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
    specs: [
      { label: "HERA operation", value: "1992 to 2007", sources: [{ label: "Collider Physics at HERA (arXiv:0805.3334)", url: "https://arxiv.org/abs/0805.3334" }] },
      { label: "HERA centre-of-mass energy", value: "About 320 GeV", sources: [{ label: "Collider Physics at HERA (arXiv:0805.3334)", url: "https://arxiv.org/abs/0805.3334" }] },
    ],
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
      { id: 'desy-petra3', name: 'PETRA III', description: "Storage-ring X-ray source with a circumference of 2.3 km and 25 beamlines for users, among the most brilliant in the world for hard X-rays; used to study materials, proteins and nanostructures.", topics: ['synchrotron-light'], startYear: 2009, sources: [{ label: "DESY Photon Science: PETRA III", url: "https://photon-science.desy.de/facilities/petra_iii/index_eng.html" }] },
    ],
    keyResults: [
      { year: 1979, discovery: "Discovery of the Gluon", description: "Three-jet events in e+e- annihilation at PETRA provided the first direct experimental evidence for the gluon as the mediator of the strong nuclear force — a cornerstone confirmation of QCD.", sources: [{ label: "TASSO Collaboration, Phys. Lett. B 86, 243 (1979)", url: "https://doi.org/10.1016/0370-2693(79)90830-X" }] },
      { year: 1993, discovery: "Rise of the Proton Structure Function at Low-x", description: "H1 and ZEUS at HERA observed an unexpected steep rise in the proton gluon density at small Bjorken-x, revealing a new regime of QCD dynamics and motivating the study of gluon saturation.", sources: [{ label: "H1 Collaboration, Nucl. Phys. B 407, 515 (1993)", url: "https://doi.org/10.1016/0550-3213(93)90090-C" }, { label: "ZEUS Collaboration, Phys. Lett. B 316, 412 (1993)", url: "https://doi.org/10.1016/0370-2693(93)90347-K" }] },
    ],
    importantPeople: [
      { name: "Bjorn Wiik", contribution: "DESY director from 1993 until his death in 1999; had special responsibility for HERA's superconducting proton ring and led the plans for the TESLA superconducting linear collider.", sources: [{ label: "Physics World: DESY director Bjorn Wiik dies (1999)", url: "https://physicsworld.com/a/desy-director-bjorn-wiik-dies/" }, { label: "CERN Courier: Eclipse of a visionary", url: "https://cerncourier.com/a/eclipse-of-a-visionary/" }] },
      { name: "G\u00fcnter Wolf", contribution: "Spokesperson of the TASSO experiment at PETRA, who presented its three-jet evidence for the gluon in 1979; shared the 1995 European Physical Society High Energy and Particle Physics Prize for that work.", sources: [{ label: "DESY: the discovery of the gluon", url: "https://www.desy.de/news/backgrounders/40_years_of_gluon/index_eng.html" }] },
    ],
    readMore: [
      { label: "DESY Official Site", url: "https://www.desy.de" },
      { label: "European XFEL", url: "https://www.xfel.eu" },
    ],
  },

  // ─── Added in Phase 9 ─────────────────────────────────────────────────────

  {
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
  },
  {
    id: 'j-parc',
    name: "J-PARC",
    fullName: "Japan Proton Accelerator Research Complex",
    type: 'accelerator-laboratory',
    country: "Japan",
    lat: 36.445,
    lng: 140.606,
    founded: 2001,
    status: 'active',
    overview: "J-PARC in Tokai, on Japan's Pacific coast, is a high-intensity proton accelerator complex built jointly by KEK and the Japan Atomic Energy Agency. A linac and two synchrotrons deliver protons to facilities for neutrino physics, hadron physics and materials science. Its neutrino beam is aimed at the Super-Kamiokande detector 295 km away for the T2K experiment.",
    specs: [
      { label: "Main Ring proton energy", value: "30 GeV", sources: [{ label: "J-PARC: History", url: "https://j-parc.jp/c/en/about/history.html" }] },
      { label: "T2K baseline to Super-Kamiokande", value: "295 km", sources: [{ label: "The T2K experiment, Nucl. Instrum. Meth. A 659, 106 (2011)", url: "https://doi.org/10.1016/j.nima.2011.06.067" }] },
    ],
    history: [
      { year: 2001, event: "KEK and the Japan Atomic Energy Agency sign a cooperative agreement in April, and construction of J-PARC starts in December.", sources: [{ label: "J-PARC: History", url: "https://j-parc.jp/c/en/about/history.html" }] },
      { year: 2008, event: "The Main Ring reaches its initial target energy of 30 GeV in December.", sources: [{ label: "J-PARC: History", url: "https://j-parc.jp/c/en/about/history.html" }] },
      { year: 2009, event: "The first neutrino is observed by the T2K near detector in November.", sources: [{ label: "J-PARC: History", url: "https://j-parc.jp/c/en/about/history.html" }] },
      { year: 2011, event: "Operation is suspended after the Great East Japan Earthquake in March. T2K publishes the first indication that muon neutrinos change into electron neutrinos.", sources: [{ label: "J-PARC: History", url: "https://j-parc.jp/c/en/about/history.html" }, { label: "T2K Collaboration, Phys. Rev. Lett. 107, 041801 (2011)", url: "https://doi.org/10.1103/PhysRevLett.107.041801" }] },
      { year: 2020, event: "T2K reports constraints on the phase that would make neutrinos and antineutrinos oscillate differently.", sources: [{ label: "T2K Collaboration, Nature 580, 339 (2020)", url: "https://doi.org/10.1038/s41586-020-2177-0" }] },
    ],
    experiments: [
      { id: 'jparc-t2k', name: "T2K", description: "Tokai-to-Kamioka long-baseline experiment: a muon-neutrino beam from J-PARC is measured near its source and again at Super-Kamiokande, 295 km away, to study neutrino oscillations.", topics: ['neutrinos', 'cp-violation'], startYear: 2010, sources: [{ label: "The T2K experiment, Nucl. Instrum. Meth. A 659, 106 (2011)", url: "https://doi.org/10.1016/j.nima.2011.06.067" }] },
    ],
    keyResults: [
      { year: 2014, discovery: "Observation of Electron-Neutrino Appearance", description: "T2K observed electron neutrinos appearing in a muon-neutrino beam, a direct demonstration of oscillation into a different flavour.", sources: [{ label: "T2K Collaboration, Phys. Rev. Lett. 112, 061802 (2014)", url: "https://doi.org/10.1103/PhysRevLett.112.061802" }] },
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Official Site", url: "https://j-parc.jp/c/en/" },
    ],
  },
  {
    id: 'jinr',
    name: "JINR Dubna",
    fullName: "Joint Institute for Nuclear Research",
    type: 'accelerator-laboratory',
    country: "Russia",
    lat: 56.7417,
    lng: 37.1917,
    founded: 1956,
    status: 'active',
    overview: "The Joint Institute for Nuclear Research in Dubna, north of Moscow, is an international laboratory established by a convention of eleven founding states. Its Flerov Laboratory is known for synthesising the heaviest elements of the periodic table, including flerovium and oganesson. The institute is building the NICA heavy-ion collider and takes part in the Baikal-GVD neutrino telescope in Lake Baikal.",
    specs: [
      { label: "Member states", value: "15", sources: [{ label: "JINR: About", url: "https://www.jinr.ru/about-en/" }] },
      { label: "Laboratories", value: "Seven", sources: [{ label: "JINR: About", url: "https://www.jinr.ru/about-en/" }] },
    ],
    history: [
      { year: 1956, event: "The convention establishing JINR is signed on 26 March 1956 by eleven founding states.", sources: [{ label: "JINR: About", url: "https://www.jinr.ru/about-en/" }] },
      { year: 1999, event: "A Dubna-led team reports the synthesis of a superheavy nucleus of element 114, later named flerovium, by bombarding plutonium with calcium-48.", sources: [{ label: "Oganessian et al., Phys. Rev. Lett. 83, 3154 (1999)", url: "https://doi.org/10.1103/PhysRevLett.83.3154" }] },
      { year: 2006, event: "The synthesis of isotopes of element 118, later named oganesson, is reported.", sources: [{ label: "Oganessian et al., Phys. Rev. C 74, 044602 (2006)", url: "https://doi.org/10.1103/PhysRevC.74.044602" }] },
      { year: 2019, event: "The Superheavy Element Factory, a new cyclotron complex for synthesising new elements, begins operation.", sources: [{ label: "JINR: Superheavy elements, scientific programme and infrastructure", url: "https://www.jinr.ru/posts/superheavy-elements-scientific-programme-and-infrastructure/" }, { label: "JINR: About", url: "https://www.jinr.ru/about-en/" }] },
    ],
    experiments: [
      { id: 'jinr-she', name: "Superheavy Element Factory", description: "Cyclotron complex of the Flerov Laboratory dedicated to synthesising and studying the heaviest elements.", topics: ['nuclear-structure', 'rare-isotopes'], startYear: 2019, sources: [{ label: "JINR: About", url: "https://www.jinr.ru/about-en/" }, { label: "JINR: Superheavy elements, scientific programme and infrastructure", url: "https://www.jinr.ru/posts/superheavy-elements-scientific-programme-and-infrastructure/" }] },
      { id: 'jinr-nica', name: "NICA", description: "Heavy-ion collider designed to study the properties of dense baryonic matter.", topics: ['heavy-ions', 'qcd'], sources: [{ label: "JINR: About", url: "https://www.jinr.ru/about-en/" }] },
    ],
    keyResults: [
      { year: 2006, discovery: "Synthesis of Element 118 (Oganesson)", description: "Fusion of calcium-48 with californium-249 produced the heaviest element so far identified.", sources: [{ label: "Oganessian et al., Phys. Rev. C 74, 044602 (2006)", url: "https://doi.org/10.1103/PhysRevC.74.044602" }] },
    ],
    importantPeople: [
      { name: "Yuri Oganessian", contribution: "Scientific leader of the Flerov Laboratory of Nuclear Reactions and lead author of the element 114 and 118 discovery papers; element 118 is named after him.", sources: [{ label: "Physics World: Russia's Joint Institute for Nuclear Research builds for the future", url: "https://physicsworld.com/a/russias-joint-institute-of-nuclear-research-builds-for-the-future/" }, { label: "Oganessian et al., Phys. Rev. C 74, 044602 (2006)", url: "https://doi.org/10.1103/PhysRevC.74.044602" }] },
    ],
    readMore: [
      { label: "Official Site", url: "https://www.jinr.ru/main-en/" },
    ],
  },
  {
    id: 'binp',
    name: "BINP Novosibirsk",
    fullName: "Budker Institute of Nuclear Physics",
    type: 'accelerator-laboratory',
    country: "Russia",
    lat: 54.849,
    lng: 83.1107,
    founded: 1958,
    status: 'active',
    overview: "The Budker Institute of Nuclear Physics in Novosibirsk's Akademgorodok was founded by Gersh Budker and was one of the places where the colliding-beam method was first realised. Its early VEP-1 and VEPP-2 machines were among the world's first colliders, and Budker proposed electron cooling there. The institute runs the VEPP-4M and VEPP-2000 electron-positron colliders.",
    specs: [
    ],
    history: [
      { year: 1958, event: "The institute is founded on the basis of a laboratory headed by Gersh Budker.", sources: [{ label: "Science First Hand: Particle accelerators, microscopes of modern physics", url: "https://scfh.ru/en/papers/particle-accelerators-microscopes-of-modern-physics/" }] },
      { year: 1964, event: "The VEP-1 electron-electron collider is built, followed by the VEPP-2 electron-positron collider in 1966.", sources: [{ label: "Science First Hand: Particle accelerators, microscopes of modern physics", url: "https://scfh.ru/en/papers/particle-accelerators-microscopes-of-modern-physics/" }] },
      { year: 1966, event: "Budker proposes electron cooling, a method of shrinking beams of heavy particles by mixing them with a cold electron beam.", sources: [{ label: "Science First Hand: Story of electron cooling", url: "https://scfh.ru/en/papers/story-of-electron-cooling/" }] },
    ],
    experiments: [
      { id: 'binp-vepp4m', name: "VEPP-4M", description: "Electron-positron collider operating at the institute.", topics: ['qcd', 'electroweak'], sources: [{ label: "Science First Hand: Particle accelerators, microscopes of modern physics", url: "https://scfh.ru/en/papers/particle-accelerators-microscopes-of-modern-physics/" }] },
      { id: 'binp-vepp2000', name: "VEPP-2000", description: "Electron-positron collider for precise measurements of hadron production at low energies.", topics: ['qcd'], sources: [{ label: "Science First Hand: Particle accelerators, microscopes of modern physics", url: "https://scfh.ru/en/papers/particle-accelerators-microscopes-of-modern-physics/" }] },
    ],
    keyResults: [
    ],
    importantPeople: [
      { name: "Gersh Budker", contribution: "Founder of the institute; proposed electron cooling in 1966.", sources: [{ label: "Science First Hand: Particle accelerators, microscopes of modern physics", url: "https://scfh.ru/en/papers/particle-accelerators-microscopes-of-modern-physics/" }, { label: "Science First Hand: Story of electron cooling", url: "https://scfh.ru/en/papers/story-of-electron-cooling/" }] },
    ],
    readMore: [
      { label: "Official Site", url: "https://www.inp.nsk.su" },
    ],
  },
  {
    id: 'frascati',
    name: "Frascati (LNF)",
    fullName: "INFN Laboratori Nazionali di Frascati",
    type: 'accelerator-laboratory',
    country: "Italy",
    lat: 41.8236,
    lng: 12.6736,
    founded: 1954,
    status: 'active',
    overview: "The Frascati National Laboratories near Rome were founded by INFN to host Italy's first accelerator, an electron synchrotron. In 1961 Bruno Touschek's group built AdA there, the first electron-positron storage ring, the ancestor of every later collider of matter and antimatter. The larger ADONE collider followed, and the laboratory now operates the DAFNE electron-positron collider.",
    specs: [
      { label: "DAFNE beam energy", value: "0.51 GeV per beam", sources: [{ label: "Overview of Beam Dynamics Studies at DAFNE (arXiv:0806.1105)", url: "https://arxiv.org/abs/0806.1105" }] },
    ],
    history: [
      { year: 1954, event: "The laboratory is founded to host a 1.1 GeV electron synchrotron, the first accelerator built in Italy.", sources: [{ label: "Bruno Touschek and AdA: from Frascati to Orsay (arXiv:1805.09434)", url: "https://arxiv.org/abs/1805.09434" }] },
      { year: 1961, event: "AdA (Anello di Accumulazione), proposed by Bruno Touschek, starts to operate in February 1961 as the first electron-positron storage ring.", sources: [{ label: "Bruno Touschek and AdA: from Frascati to Orsay (arXiv:1805.09434)", url: "https://arxiv.org/abs/1805.09434" }, { label: "Touschek with AdA in Orsay and the first direct observation of electron-positron collisions (arXiv:1812.11847)", url: "https://arxiv.org/abs/1812.11847" }] },
      { year: 1962, event: "AdA is moved to Orsay in France, where a more intense injector allows the first direct observation of electron-positron collisions.", sources: [{ label: "Touschek with AdA in Orsay and the first direct observation of electron-positron collisions (arXiv:1812.11847)", url: "https://arxiv.org/abs/1812.11847" }] },
      { year: 2000, event: "The DAFNE electron-positron collider begins delivering collisions to the KLOE, FINUDA and DEAR experiments.", sources: [{ label: "Overview of Beam Dynamics Studies at DAFNE (arXiv:0806.1105)", url: "https://arxiv.org/abs/0806.1105" }] },
      { year: 2007, event: "DAFNE is rebuilt to test the crab-waist collision scheme, which raises its luminosity about threefold.", sources: [{ label: "Overview of Beam Dynamics Studies at DAFNE (arXiv:0806.1105)", url: "https://arxiv.org/abs/0806.1105" }, { label: "DAFNE Interaction Regions upgrade (arXiv:0803.1450)", url: "https://arxiv.org/abs/0803.1450" }] },
    ],
    experiments: [
      { id: 'lnf-ada', name: "AdA", description: "The first electron-positron storage ring, which demonstrated that beams of matter and antimatter could be stored and collided in a single ring.", topics: ['electroweak'], startYear: 1961, sources: [{ label: "Bruno Touschek and AdA: from Frascati to Orsay (arXiv:1805.09434)", url: "https://arxiv.org/abs/1805.09434" }, { label: "Touschek with AdA in Orsay and the first direct observation of electron-positron collisions (arXiv:1812.11847)", url: "https://arxiv.org/abs/1812.11847" }] },
      { id: 'lnf-dafne', name: "DAFNE", description: "Electron-positron collider tuned to produce phi mesons, and the first machine to use crab-waist collisions.", topics: ['electroweak', 'cp-violation'], startYear: 2000, sources: [{ label: "Overview of Beam Dynamics Studies at DAFNE (arXiv:0806.1105)", url: "https://arxiv.org/abs/0806.1105" }, { label: "DAFNE Interaction Regions upgrade (arXiv:0803.1450)", url: "https://arxiv.org/abs/0803.1450" }] },
      { id: 'lnf-kloe', name: "KLOE", description: "Detector at DAFNE studying kaon decays and CP violation.", topics: ['cp-violation', 'electroweak'], sources: [{ label: "The KLOE electromagnetic calorimeter, Nucl. Instrum. Meth. A 482, 364 (2002)", url: "https://doi.org/10.1016/S0168-9002(01)01502-9" }, { label: "Overview of Beam Dynamics Studies at DAFNE (arXiv:0806.1105)", url: "https://arxiv.org/abs/0806.1105" }] },
    ],
    keyResults: [
      { year: 1961, discovery: "First Electron-Positron Storage Ring", description: "AdA showed that electrons and positrons could circulate in the same ring in opposite directions, opening the way to colliders such as ADONE, SPEAR, LEP and their successors.", sources: [{ label: "Bruno Touschek and AdA: from Frascati to Orsay (arXiv:1805.09434)", url: "https://arxiv.org/abs/1805.09434" }, { label: "Touschek with AdA in Orsay and the first direct observation of electron-positron collisions (arXiv:1812.11847)", url: "https://arxiv.org/abs/1812.11847" }] },
    ],
    importantPeople: [
      { name: "Bruno Touschek", contribution: "Proposed and led AdA, the first electron-positron collider.", sources: [{ label: "Bruno Touschek and AdA: from Frascati to Orsay (arXiv:1805.09434)", url: "https://arxiv.org/abs/1805.09434" }] },
    ],
    readMore: [
      { label: "Official Site", url: "https://w3.lnf.infn.it/?lang=en" },
    ],
  },
  {
    id: 'jefferson-lab',
    name: "Jefferson Lab",
    fullName: "Thomas Jefferson National Accelerator Facility",
    type: 'nuclear-physics-facility',
    country: "United States",
    lat: 37.0958,
    lng: -76.4817,
    founded: 1984,
    status: 'active',
    overview: "Jefferson Lab in Newport News, Virginia, operates CEBAF, a continuous electron beam accelerator built with superconducting radio-frequency cavities. Its beams probe how quarks and gluons build protons, neutrons and nuclei. An upgrade completed in 2017 raised the beam energy to 12 GeV and added a fourth experimental hall.",
    specs: [
      { label: "CEBAF beam energy", value: "12 GeV", sources: [{ label: "The Continuous Electron Beam Accelerator Facility at 12 GeV (arXiv:2408.16880)", url: "https://arxiv.org/abs/2408.16880" }] },
      { label: "Experimental halls", value: "Four (A, B, C and D)", sources: [{ label: "The Continuous Electron Beam Accelerator Facility at 12 GeV (arXiv:2408.16880)", url: "https://arxiv.org/abs/2408.16880" }] },
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
  },
  {
    id: 'psi',
    name: "PSI",
    fullName: "Paul Scherrer Institute",
    type: 'accelerator-laboratory',
    country: "Switzerland",
    lat: 47.5363,
    lng: 8.2225,
    founded: 1988,
    status: 'active',
    overview: "The Paul Scherrer Institute in Villigen is Switzerland's largest research institute for natural and engineering sciences. Its high-intensity proton accelerator supplies the world's most intense muon beams, used for precision tests of the Standard Model such as the size of the proton, the search for the decay of a muon into an electron and a photon, and the neutron's electric dipole moment.",
    specs: [
    ],
    history: [
      { year: 1988, event: "PSI is formed by merging the Federal Institute for Reactor Research (EIR) and the Swiss Institute for Nuclear Research (SIN).", sources: [{ label: "PSI: The history of PSI", url: "https://www.psi.ch/en/about/history-of-psi" }] },
      { year: 2010, event: "Laser spectroscopy of muonic hydrogen at PSI gives a proton radius markedly smaller than earlier measurements, starting the proton radius puzzle.", sources: [{ label: "Pohl et al., Nature 466, 213 (2010)", url: "https://doi.org/10.1038/nature09250" }] },
      { year: 2016, event: "The MEG experiment publishes its final limit on the decay of a muon into an electron and a photon.", sources: [{ label: "MEG Collaboration, Eur. Phys. J. C 76, 434 (2016)", url: "https://doi.org/10.1140/epjc/s10052-016-4271-x" }] },
      { year: 2020, event: "The nEDM collaboration publishes its measurement of the neutron's permanent electric dipole moment using PSI's ultracold neutron source.", sources: [{ label: "nEDM Collaboration, Phys. Rev. Lett. 124, 081803 (2020)", url: "https://doi.org/10.1103/PhysRevLett.124.081803" }] },
    ],
    experiments: [
      { id: 'psi-meg', name: "MEG", description: "Search for the lepton-flavour-violating decay of a positive muon into a positron and a photon.", topics: ['electroweak'], sources: [{ label: "MEG Collaboration, Eur. Phys. J. C 76, 434 (2016)", url: "https://doi.org/10.1140/epjc/s10052-016-4271-x" }] },
      { id: 'psi-nedm', name: "nEDM", description: "Measurement of the neutron's permanent electric dipole moment with ultracold neutrons, a test of time-reversal symmetry.", topics: ['cp-violation'], sources: [{ label: "nEDM Collaboration, Phys. Rev. Lett. 124, 081803 (2020)", url: "https://doi.org/10.1103/PhysRevLett.124.081803" }] },
    ],
    keyResults: [
      { year: 2010, discovery: "The Size of the Proton", description: "The Lamb shift in muonic hydrogen gave a proton charge radius several standard deviations below the accepted value.", sources: [{ label: "Pohl et al., Nature 466, 213 (2010)", url: "https://doi.org/10.1038/nature09250" }] },
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Official Site", url: "https://www.psi.ch/en" },
    ],
  },
  {
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
  },
  {
    id: 'grapes-3',
    name: "GRAPES-3",
    fullName: "Gamma Ray Astronomy PeV EnergieS phase-3",
    type: 'cosmic-ray-observatory',
    country: "India",
    lat: 11.3836,
    lng: 76.6661,
    founded: 2000,
    status: 'active',
    overview: "GRAPES-3 is a cosmic-ray air-shower array at Ooty in the Nilgiri hills of southern India, run by the Tata Institute of Fundamental Research with Japanese partners. A dense array of scintillator detectors is combined with a very large muon telescope, which also lets it study solar storms and thunderclouds through their effect on cosmic-ray muons.",
    specs: [
      { label: "Altitude", value: "About 2,200 m", sources: [{ label: "GRAPES-3 Collaboration: Monitoring the upper atmosphere with the GRAPES-3 muon telescope (arXiv:2602.11847)", url: "https://arxiv.org/abs/2602.11847" }] },
      { label: "Scintillator detectors", value: "400, over 25,000 m²", sources: [{ label: "GRAPES-3 Collaboration: Monitoring the upper atmosphere with the GRAPES-3 muon telescope (arXiv:2602.11847)", url: "https://arxiv.org/abs/2602.11847" }] },
      { label: "Muon telescope area", value: "560 m²", sources: [{ label: "GRAPES-3 Collaboration: Monitoring the upper atmosphere with the GRAPES-3 muon telescope (arXiv:2602.11847)", url: "https://arxiv.org/abs/2602.11847" }] },
    ],
    history: [
      { year: 2016, event: "GRAPES-3 reports a two-hour burst of cosmic-ray muons on 22 June 2015, caused by a transient weakening of Earth's magnetic shield during a geomagnetic storm.", sources: [{ label: "GRAPES-3 Collaboration, Phys. Rev. Lett. 117, 171101 (2016)", url: "https://doi.org/10.1103/PhysRevLett.117.171101" }] },
      { year: 2019, event: "Muon imaging of a thundercloud that passed over the array in December 2014 gives an electric potential of 1.3 gigavolts.", sources: [{ label: "GRAPES-3 Collaboration, Phys. Rev. Lett. 122, 105101 (2019)", url: "https://doi.org/10.1103/PhysRevLett.122.105101" }] },
    ],
    experiments: [
      { id: 'grapes3-array', name: "GRAPES-3 array and muon telescope", description: "400 plastic scintillator detectors measuring air showers, with a 560 m² tracking muon telescope built from proportional counters.", topics: ['cosmic-rays'], startYear: 2000, sources: [{ label: "GRAPES-3 Collaboration: Monitoring the upper atmosphere with the GRAPES-3 muon telescope (arXiv:2602.11847)", url: "https://arxiv.org/abs/2602.11847" }] },
    ],
    keyResults: [
      { year: 2019, discovery: "A Gigavolt Thundercloud", description: "The drop in muon intensity under a thunderstorm implied a potential of 1.3 GV, about ten times larger than earlier balloon measurements.", sources: [{ label: "GRAPES-3 Collaboration, Phys. Rev. Lett. 122, 105101 (2019)", url: "https://doi.org/10.1103/PhysRevLett.122.105101" }] },
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Official Site", url: "https://grapes-3.tifr.res.in" },
    ],
  },
  {
    id: 'supl',
    name: "Stawell (SUPL)",
    fullName: "Stawell Underground Physics Laboratory",
    type: 'underground-laboratory',
    country: "Australia",
    lat: -37.06,
    lng: 142.8,
    founded: 2022,
    status: 'active',
    overview: "The Stawell Underground Physics Laboratory lies just over a kilometre underground in an active gold mine at Stawell, Victoria. It is the first deep underground laboratory in the Southern Hemisphere. Its first experiment, SABRE South, uses ultra-pure sodium iodide crystals to test a long-standing claim of a dark matter signal, with the seasons reversed relative to northern laboratories.",
    specs: [
      { label: "Depth", value: "1,025 m", sources: [{ label: "The SABRE South Experiment at the Stawell Underground Physics Laboratory (arXiv:2211.03016)", url: "https://arxiv.org/abs/2211.03016" }] },
      { label: "Access", value: "By road through the mine tunnels", sources: [{ label: "The SABRE South Experiment at the Stawell Underground Physics Laboratory (arXiv:2211.03016)", url: "https://arxiv.org/abs/2211.03016" }] },
      { label: "Laboratory floor area", value: "260 m²", sources: [{ label: "SUPL: Our story so far", url: "https://supl.org.au/our-story-so-far/" }] },
    ],
    history: [
      { year: 2022, event: "Stage 1 of the laboratory is officially opened in August 2022.", sources: [{ label: "University of Melbourne: Completion of Stage 1 of SUPL (2022)", url: "https://www.unimelb.edu.au/newsroom/news/2022/august/the-global-hunt-for-dark-matter-has-arrived-in-australia-with-the-completion-of-stage-1-of-the-stawell-underground-physics-laboratory" }] },
      { year: 2014, event: "The laboratory is first proposed.", sources: [{ label: "SUPL: Our story so far", url: "https://supl.org.au/our-story-so-far/" }] },
      { year: 2016, event: "Construction starts, but stops when the gold mine is placed in care and maintenance in December.", sources: [{ label: "SUPL: Our story so far", url: "https://supl.org.au/our-story-so-far/" }] },
      { year: 2019, event: "After the mine's sale to a new owner, a memorandum of understanding is signed and the project resumes.", sources: [{ label: "SUPL: Our story so far", url: "https://supl.org.au/our-story-so-far/" }] },
    ],
    experiments: [
      { id: 'supl-sabre', name: "SABRE South", description: "Sodium iodide dark matter detector designed to test the annual-modulation signal reported by the DAMA/LIBRA experiment at Gran Sasso.", topics: ['dark-matter'], sources: [{ label: "The SABRE South Experiment at the Stawell Underground Physics Laboratory (arXiv:2211.03016)", url: "https://arxiv.org/abs/2211.03016" }] },
    ],
    keyResults: [
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Official Site", url: "https://www.supl.org.au" },
    ],
  },

  {
    id: 'hyper-kamiokande',
    name: "Hyper-Kamiokande",
    type: 'neutrino-observatory',
    country: "Japan",
    lat: 36.356,
    lng: 137.314,
    founded: 2020,
    status: 'planned',
    overview: "Hyper-Kamiokande is the successor to Super-Kamiokande, under construction beneath a mountain in Hida, Gifu Prefecture. Its water tank will have a fiducial mass 8.4 times that of Super-Kamiokande. It will study the difference between neutrinos and antineutrinos using a beam from J-PARC, search for proton decay, and watch for neutrinos from supernovae. It aims to start operating in 2028.",
    specs: [
      { label: "Tank", value: "68 m in diameter, 71 m water depth", sources: [{ label: "Hyper-Kamiokande: Overview", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/hk/about/outline/" }] },
      { label: "Water mass", value: "About 260,000 tonnes, of which about 190,000 tonnes fiducial", sources: [{ label: "Hyper-Kamiokande: Overview", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/hk/about/outline/" }] },
      { label: "Fiducial mass relative to Super-Kamiokande", value: "8.4 times larger", sources: [{ label: "Hyper-Kamiokande: Overview", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/hk/about/outline/" }] },
      { label: "Planned start", value: "2028", sources: [{ label: "Hyper-Kamiokande: Overview", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/hk/about/outline/" }] },
    ],
    history: [
      { year: 2020, event: "The project officially starts after the Japanese Diet approves the first construction budget in January 2020.", sources: [{ label: "Hyper-Kamiokande construction status and prospects, Front. Phys. 12 (2024)", url: "https://doi.org/10.3389/fphy.2024.1378254" }] },
      { year: 2021, event: "Excavation of the access tunnel begins in May 2021.", sources: [{ label: "Hyper-Kamiokande construction status and prospects, Front. Phys. 12 (2024)", url: "https://doi.org/10.3389/fphy.2024.1378254" }] },
      { year: 2022, event: "Excavation of the main cavern, one of the largest underground caverns in the world, begins in October 2022.", sources: [{ label: "Hyper-Kamiokande construction status and prospects, Front. Phys. 12 (2024)", url: "https://doi.org/10.3389/fphy.2024.1378254" }] },
      { year: 2025, event: "Excavation of the cavern is completed on 31 July 2025.", sources: [{ label: "ICRR press release: cavern excavation completed (2025)", url: "https://www.icrr.u-tokyo.ac.jp/prwps/wp-content/uploads/HKpressrelease_v1.9_2.pdf" }] },
    ],
    experiments: [
      { id: 'hk-detector', name: "Hyper-Kamiokande detector", description: "Water Cherenkov detector viewed by tens of thousands of high-sensitivity photosensors, to study neutrino oscillations, proton decay and astrophysical neutrinos.", topics: ['neutrinos', 'cp-violation'], sources: [{ label: "Hyper-Kamiokande: Overview", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/hk/about/outline/" }, { label: "Hyper-Kamiokande Design Report (arXiv:1805.04163)", url: "https://arxiv.org/abs/1805.04163" }] },
    ],
    keyResults: [
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Official Site", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/hk/" },
    ],
  },
  {
    id: 'cjpl',
    name: "Jinping (CJPL)",
    fullName: "China Jinping Underground Laboratory",
    type: 'underground-laboratory',
    country: "China",
    lat: 28.153,
    lng: 101.711,
    founded: 2010,
    status: 'active',
    overview: "The China Jinping Underground Laboratory lies beneath Jinping Mountain in Sichuan, reached through a road tunnel built for a hydropower project. With about 2,400 m of rock above it, it is the deepest underground laboratory in the world. It hosts the PandaX liquid-xenon and CDEX germanium dark matter experiments.",
    specs: [
      { label: "Rock overburden", value: "About 2,400 m", sources: [{ label: "Cheng et al., Annu. Rev. Nucl. Part. Sci. 67, 231 (2017)", url: "https://doi.org/10.1146/annurev-nucl-102115-044842" }] },
    ],
    history: [
      { year: 2010, event: "The first phase of the laboratory, CJPL-I, begins operating.", sources: [{ label: "Cheng et al., Annu. Rev. Nucl. Part. Sci. 67, 231 (2017)", url: "https://doi.org/10.1146/annurev-nucl-102115-044842" }] },
      { year: 2018, event: "The CDEX-10 germanium experiment publishes limits on light dark matter particles.", sources: [{ label: "CDEX Collaboration, Phys. Rev. Lett. 120, 241301 (2018)", url: "https://doi.org/10.1103/PhysRevLett.120.241301" }] },
      { year: 2021, event: "PandaX-4T publishes dark matter search results from its commissioning run.", sources: [{ label: "PandaX-4T Collaboration, Phys. Rev. Lett. 127, 261802 (2021)", url: "https://doi.org/10.1103/PhysRevLett.127.261802" }] },
    ],
    experiments: [
      { id: 'cjpl-pandax', name: "PandaX-4T", description: "Dual-phase liquid-xenon time projection chamber searching for dark matter particles.", topics: ['dark-matter'], sources: [{ label: "PandaX-4T Collaboration, Phys. Rev. Lett. 127, 261802 (2021)", url: "https://doi.org/10.1103/PhysRevLett.127.261802" }] },
      { id: 'cjpl-cdex', name: "CDEX", description: "Germanium detectors searching for light dark matter particles.", topics: ['dark-matter'], sources: [{ label: "CDEX Collaboration, Phys. Rev. Lett. 120, 241301 (2018)", url: "https://doi.org/10.1103/PhysRevLett.120.241301" }, { label: "Cheng et al., Annu. Rev. Nucl. Part. Sci. 67, 231 (2017)", url: "https://doi.org/10.1146/annurev-nucl-102115-044842" }] },
    ],
    keyResults: [
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Review: CJPL and its early science", url: "https://doi.org/10.1146/annurev-nucl-102115-044842" },
    ],
  },
  {
    id: 'km3net',
    name: "KM3NeT",
    fullName: "Cubic Kilometre Neutrino Telescope",
    type: 'neutrino-observatory',
    country: "Mediterranean Sea (Italy / France)",
    lat: 36.27,
    lng: 16.1,
    founded: 2015,
    status: 'active',
    overview: "KM3NeT is a neutrino telescope being built on the floor of the Mediterranean Sea. Its ARCA detector off Sicily looks for high-energy neutrinos from the cosmos, while the denser ORCA detector off Toulon studies neutrino oscillations. Although still under construction, ARCA recorded in 2023 the most energetic neutrino ever observed.",
    specs: [
      { label: "ARCA depth", value: "About 3,500 m, off Portopalo di Capo Passero, Sicily", sources: [{ label: "Nikhef: KM3NeT detects the highest energy neutrino ever observed", url: "https://www.nikhef.nl/en/news/km3net-detects-the-highest-energy-neutrino-ever-observed/" }] },
      { label: "ORCA depth", value: "2,450 m, about 40 km off Toulon", sources: [{ label: "Nikhef: KM3NeT detects the highest energy neutrino ever observed", url: "https://www.nikhef.nl/en/news/km3net-detects-the-highest-energy-neutrino-ever-observed/" }] },
      { label: "Planned detection units", value: "230 for ARCA, 115 for ORCA", sources: [{ label: "Nikhef: KM3NeT detects the highest energy neutrino ever observed", url: "https://www.nikhef.nl/en/news/km3net-detects-the-highest-energy-neutrino-ever-observed/" }] },
    ],
    history: [
      { year: 2016, event: "The collaboration publishes its letter of intent for KM3NeT 2.0, with the ARCA and ORCA detectors.", sources: [{ label: "Letter of intent for KM3NeT 2.0, J. Phys. G 43, 084001 (2016)", url: "https://doi.org/10.1088/0954-3899/43/8/084001" }] },
      { year: 2023, event: "On 13 February 2023 the partly built ARCA detector records a muon from a neutrino with an estimated energy of about 220 PeV.", sources: [{ label: "KM3NeT Collaboration, Nature 638, 376 (2025)", url: "https://doi.org/10.1038/s41586-024-08543-1" }, { label: "Nikhef: KM3NeT detects the highest energy neutrino ever observed", url: "https://www.nikhef.nl/en/news/km3net-detects-the-highest-energy-neutrino-ever-observed/" }] },
      { year: 2025, event: "The observation of the ultra-high-energy neutrino is published in Nature.", sources: [{ label: "KM3NeT Collaboration, Nature 638, 376 (2025)", url: "https://doi.org/10.1038/s41586-024-08543-1" }] },
    ],
    experiments: [
      { id: 'km3net-arca', name: "ARCA", description: "Astroparticle Research with Cosmics in the Abyss: a sparse deep-sea array for high-energy cosmic neutrinos.", topics: ['neutrinos', 'cosmic-rays'], sources: [{ label: "Letter of intent for KM3NeT 2.0, J. Phys. G 43, 084001 (2016)", url: "https://doi.org/10.1088/0954-3899/43/8/084001" }, { label: "Nikhef: KM3NeT detects the highest energy neutrino ever observed", url: "https://www.nikhef.nl/en/news/km3net-detects-the-highest-energy-neutrino-ever-observed/" }] },
      { id: 'km3net-orca', name: "ORCA", description: "Oscillation Research with Cosmics in the Abyss: a dense array measuring atmospheric neutrino oscillations.", topics: ['neutrinos'], sources: [{ label: "Letter of intent for KM3NeT 2.0, J. Phys. G 43, 084001 (2016)", url: "https://doi.org/10.1088/0954-3899/43/8/084001" }, { label: "Nikhef: KM3NeT detects the highest energy neutrino ever observed", url: "https://www.nikhef.nl/en/news/km3net-detects-the-highest-energy-neutrino-ever-observed/" }] },
    ],
    keyResults: [
      { year: 2025, discovery: "The Most Energetic Neutrino Observed", description: "A single event in ARCA implied a cosmic neutrino of about 220 PeV, far above any previously detected.", sources: [{ label: "KM3NeT Collaboration, Nature 638, 376 (2025)", url: "https://doi.org/10.1038/s41586-024-08543-1" }] },
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Official Site", url: "https://www.km3net.org" },
    ],
  },
  {
    id: 'baikal-gvd',
    name: "Baikal-GVD",
    fullName: "Baikal Gigaton Volume Detector",
    type: 'neutrino-observatory',
    country: "Russia",
    lat: 51.77,
    lng: 104.4,
    founded: 2015,
    status: 'active',
    overview: "Baikal-GVD is a neutrino telescope in the deep water of southern Lake Baikal, deployed each winter from the lake's ice. Strings of optical modules record the light from particles produced when neutrinos interact in the water. It is the largest neutrino telescope in the Northern Hemisphere.",
    specs: [
      { label: "Lake depth at the site", value: "1,366 m, 3.6 km from the shore", sources: [{ label: "Neutrino Telescope in Lake Baikal: Present and Future (arXiv:1908.05427)", url: "https://arxiv.org/abs/1908.05427" }] },
      { label: "One cluster", value: "Eight strings carrying 288 optical modules", sources: [{ label: "Neutrino Telescope in Lake Baikal: Present and Future (arXiv:1908.05427)", url: "https://arxiv.org/abs/1908.05427" }] },
      { label: "Module depths", value: "750 m to 1,275 m", sources: [{ label: "Neutrino Telescope in Lake Baikal: Present and Future (arXiv:1908.05427)", url: "https://arxiv.org/abs/1908.05427" }] },
    ],
    history: [
      { year: 2015, event: "Deployment begins with the first cluster, installed in April 2015.", sources: [{ label: "Neutrino Telescope in Lake Baikal: Present and Future (arXiv:1908.05427)", url: "https://arxiv.org/abs/1908.05427" }] },
      { year: 2020, event: "By April 2020 the telescope has seven clusters with 2,016 optical modules.", sources: [{ label: "Neutrino astronomy at Lake Baikal (arXiv:2412.00164)", url: "https://arxiv.org/abs/2412.00164" }, { label: "Neutrino Telescope in Lake Baikal: Present and Future (arXiv:1908.05427)", url: "https://arxiv.org/abs/1908.05427" }] },
      { year: 2023, event: "Baikal-GVD publishes its measurement of the diffuse flux of astrophysical neutrinos.", sources: [{ label: "Baikal-GVD Collaboration, Phys. Rev. D 107, 042005 (2023)", url: "https://doi.org/10.1103/PhysRevD.107.042005" }] },
    ],
    experiments: [
      { id: 'baikal-gvd-array', name: "Baikal-GVD array", description: "Clusters of eight vertical strings of optical modules in Lake Baikal, detecting Cherenkov light from neutrino interactions.", topics: ['neutrinos', 'cosmic-rays'], startYear: 2015, sources: [{ label: "Neutrino Telescope in Lake Baikal: Present and Future (arXiv:1908.05427)", url: "https://arxiv.org/abs/1908.05427" }, { label: "JINR: About", url: "https://www.jinr.ru/about-en/" }] },
    ],
    keyResults: [
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Official Site", url: "https://baikalgvd.jinr.ru" },
    ],
  },
  {
    id: 'lhaaso',
    name: "LHAASO",
    fullName: "Large High Altitude Air Shower Observatory",
    type: 'gamma-ray-observatory',
    country: "China",
    lat: 29.358,
    lng: 100.138,
    founded: 2021,
    status: 'active',
    overview: "LHAASO stands at 4,410 m on Mount Haizi in Daocheng, Sichuan. It combines a square-kilometre array of particle and muon detectors, a large water Cherenkov pool and wide-field Cherenkov telescopes to observe gamma rays and cosmic rays at the highest energies. Even before completion it found a dozen Galactic sources emitting photons up to 1.4 PeV.",
    specs: [
      { label: "Altitude", value: "4,410 m", sources: [{ label: "The First LHAASO Catalog of Gamma-Ray Sources (arXiv:2305.17030)", url: "https://arxiv.org/abs/2305.17030" }] },
      { label: "KM2A array area", value: "1.3 km², with 1,188 muon detectors", sources: [{ label: "The First LHAASO Catalog of Gamma-Ray Sources (arXiv:2305.17030)", url: "https://arxiv.org/abs/2305.17030" }] },
      { label: "Water Cherenkov detector array", value: "78,000 m²", sources: [{ label: "The First LHAASO Catalog of Gamma-Ray Sources (arXiv:2305.17030)", url: "https://arxiv.org/abs/2305.17030" }] },
      { label: "Wide-field Cherenkov telescopes", value: "18", sources: [{ label: "The First LHAASO Catalog of Gamma-Ray Sources (arXiv:2305.17030)", url: "https://arxiv.org/abs/2305.17030" }] },
    ],
    history: [
      { year: 2021, event: "LHAASO reports twelve Galactic sources of photons above 100 TeV, with energies up to 1.4 PeV, and PeV gamma rays from the Crab Nebula. The full array is completed in July 2021.", sources: [{ label: "LHAASO Collaboration, Nature 594, 33 (2021)", url: "https://doi.org/10.1038/s41586-021-03498-z" }, { label: "LHAASO Collaboration, Science 373, 425 (2021)", url: "https://doi.org/10.1126/science.abg5137" }, { label: "The First LHAASO Catalog of Gamma-Ray Sources (arXiv:2305.17030)", url: "https://arxiv.org/abs/2305.17030" }] },
      { year: 2023, event: "LHAASO publishes its observation of the TeV afterglow of the exceptionally bright gamma-ray burst GRB 221009A.", sources: [{ label: "LHAASO Collaboration, Science 380, 1390 (2023)", url: "https://doi.org/10.1126/science.adg9328" }] },
    ],
    experiments: [
      { id: 'lhaaso-km2a', name: "KM2A", description: "Square-kilometre array of electromagnetic particle detectors and buried muon detectors for gamma rays above tens of TeV.", topics: ['cosmic-rays'], sources: [{ label: "The First LHAASO Catalog of Gamma-Ray Sources (arXiv:2305.17030)", url: "https://arxiv.org/abs/2305.17030" }] },
      { id: 'lhaaso-wcda', name: "WCDA", description: "Water Cherenkov Detector Array for surveying the sky at TeV energies.", topics: ['cosmic-rays'], sources: [{ label: "The First LHAASO Catalog of Gamma-Ray Sources (arXiv:2305.17030)", url: "https://arxiv.org/abs/2305.17030" }] },
    ],
    keyResults: [
      { year: 2021, discovery: "Photons up to 1.4 PeV from Galactic Sources", description: "Twelve sources in the Milky Way were seen above 100 TeV, showing that the Galaxy contains accelerators reaching PeV energies.", sources: [{ label: "LHAASO Collaboration, Nature 594, 33 (2021)", url: "https://doi.org/10.1038/s41586-021-03498-z" }] },
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "First LHAASO source catalogue", url: "https://arxiv.org/abs/2305.17030" },
    ],
  },
  {
    id: 'magic',
    name: "MAGIC",
    fullName: "Major Atmospheric Gamma Imaging Cherenkov Telescopes",
    type: 'gamma-ray-observatory',
    country: "Spain",
    lat: 28.762,
    lng: -17.89,
    founded: 2004,
    status: 'active',
    overview: "MAGIC is a pair of 17-metre imaging atmospheric Cherenkov telescopes at the Roque de los Muchachos Observatory on La Palma in the Canary Islands. Their large mirrors give a low energy threshold, which allowed MAGIC to detect pulsed gamma rays from the Crab pulsar and the first teraelectronvolt emission from a gamma-ray burst.",
    specs: [
      { label: "Telescopes", value: "Two, each 17 m in diameter", sources: [{ label: "Performance of the MAGIC telescopes in stereoscopic mode (arXiv:0907.0960)", url: "https://arxiv.org/abs/0907.0960" }] },
      { label: "Altitude", value: "2,200 m", sources: [{ label: "Performance of the MAGIC telescopes in stereoscopic mode (arXiv:0907.0960)", url: "https://arxiv.org/abs/0907.0960" }] },
    ],
    history: [
      { year: 2004, event: "The first telescope, MAGIC-I, begins operating.", sources: [{ label: "Highlights of the MAGIC Telescopes (arXiv:1110.4747)", url: "https://arxiv.org/abs/1110.4747" }] },
      { year: 2009, event: "The second telescope starts taking data and regular stereoscopic observations begin in the autumn.", sources: [{ label: "Performance of the MAGIC telescopes in stereoscopic mode (arXiv:0907.0960)", url: "https://arxiv.org/abs/0907.0960" }, { label: "Highlights of the MAGIC Telescopes (arXiv:1110.4747)", url: "https://arxiv.org/abs/1110.4747" }] },
      { year: 2019, event: "MAGIC reports teraelectronvolt gamma rays from the burst GRB 190114C.", sources: [{ label: "MAGIC Collaboration, Nature 575, 455 (2019)", url: "https://doi.org/10.1038/s41586-019-1750-x" }] },
    ],
    experiments: [
      { id: 'magic-telescopes', name: "MAGIC telescopes", description: "Two 17-m Cherenkov telescopes 85 m apart, operated together in stereoscopic mode.", topics: ['cosmic-rays'], startYear: 2004, sources: [{ label: "Performance of the MAGIC telescopes in stereoscopic mode (arXiv:0907.0960)", url: "https://arxiv.org/abs/0907.0960" }] },
    ],
    keyResults: [
      { year: 2008, discovery: "Pulsed Gamma Rays from the Crab Pulsar", description: "MAGIC detected pulsed emission above 25 GeV from the Crab pulsar, constraining where in the magnetosphere the gamma rays are produced.", sources: [{ label: "MAGIC Collaboration, Science 322, 1221 (2008)", url: "https://doi.org/10.1126/science.1164718" }] },
      { year: 2019, discovery: "Teraelectronvolt Emission from a Gamma-Ray Burst", description: "GRB 190114C was the first gamma-ray burst seen at TeV energies.", sources: [{ label: "MAGIC Collaboration, Nature 575, 455 (2019)", url: "https://doi.org/10.1038/s41586-019-1750-x" }] },
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Official Site", url: "https://magic.mpp.mpg.de" },
    ],
  },
  {
    id: 'hawc',
    name: "HAWC",
    fullName: "High-Altitude Water Cherenkov Observatory",
    type: 'gamma-ray-observatory',
    country: "Mexico",
    lat: 18.995,
    lng: -97.308,
    founded: 2015,
    status: 'active',
    overview: "HAWC is an array of 300 water tanks at 4,100 m on the flank of the Sierra Negra volcano in Puebla, Mexico. Each tank detects the particles of air showers started by gamma rays and cosmic rays, day and night, giving a continuous view of a large part of the sky between about 100 GeV and 100 TeV.",
    specs: [
      { label: "Altitude", value: "4,100 m", sources: [{ label: "HAWC Collaboration, Astrophys. J. 843, 39 (2017)", url: "https://doi.org/10.3847/1538-4357/aa7555" }] },
      { label: "Water Cherenkov detectors", value: "300 tanks with 1,200 photomultiplier tubes", sources: [{ label: "The HAWC Gamma-Ray Observatory: Design, Calibration, and Operation (arXiv:1310.0074)", url: "https://arxiv.org/abs/1310.0074" }, { label: "HAWC Collaboration, Astrophys. J. 843, 39 (2017)", url: "https://doi.org/10.3847/1538-4357/aa7555" }] },
      { label: "Site area", value: "About 22,000 m²", sources: [{ label: "HAWC Collaboration, Astrophys. J. 843, 39 (2017)", url: "https://doi.org/10.3847/1538-4357/aa7555" }] },
    ],
    history: [
      { year: 2015, event: "The full array of 300 tanks is completed in March 2015.", sources: [{ label: "HAWC Collaboration, Astrophys. J. 843, 39 (2017)", url: "https://doi.org/10.3847/1538-4357/aa7555" }] },
      { year: 2017, event: "HAWC finds extended gamma-ray emission around the nearby pulsars Geminga and PSR B0656+14, limiting their contribution to the positrons observed at Earth.", sources: [{ label: "HAWC Collaboration, Science 358, 911 (2017)", url: "https://doi.org/10.1126/science.aan4880" }] },
    ],
    experiments: [
      { id: 'hawc-array', name: "HAWC array", description: "300 water Cherenkov tanks recording air-shower particles to map the gamma-ray sky.", topics: ['cosmic-rays'], startYear: 2015, sources: [{ label: "HAWC Collaboration, Astrophys. J. 843, 39 (2017)", url: "https://doi.org/10.3847/1538-4357/aa7555" }, { label: "The HAWC Gamma-Ray Observatory: Design, Calibration, and Operation (arXiv:1310.0074)", url: "https://arxiv.org/abs/1310.0074" }] },
    ],
    keyResults: [
      { year: 2017, discovery: "Gamma-Ray Halos Around Nearby Pulsars", description: "Extended emission around two pulsars showed that their positrons diffuse too slowly to explain the excess seen at Earth.", sources: [{ label: "HAWC Collaboration, Science 358, 911 (2017)", url: "https://doi.org/10.1126/science.aan4880" }] },
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Official Site", url: "https://www.hawc-observatory.org" },
    ],
  },
  {
    id: 'telescope-array',
    name: "Telescope Array",
    fullName: "Telescope Array Project",
    type: 'cosmic-ray-observatory',
    country: "United States",
    lat: 39.3,
    lng: -112.91,
    founded: 2008,
    status: 'active',
    overview: "The Telescope Array in Millard County, Utah, is the largest cosmic-ray observatory in the Northern Hemisphere. A grid of 507 scintillator detectors covering about 700 square kilometres is overlooked by fluorescence telescopes. In 2021 it recorded one of the most energetic cosmic rays ever seen, nicknamed the Amaterasu particle.",
    specs: [
      { label: "Surface detectors", value: "507, spaced 1.2 km apart", sources: [{ label: "The surface detector array of the Telescope Array experiment, Nucl. Instrum. Meth. A 689, 87 (2012)", url: "https://doi.org/10.1016/j.nima.2012.05.079" }] },
      { label: "Array area", value: "About 700 km²", sources: [{ label: "The surface detector array of the Telescope Array experiment, Nucl. Instrum. Meth. A 689, 87 (2012)", url: "https://doi.org/10.1016/j.nima.2012.05.079" }] },
    ],
    history: [
      { year: 2008, event: "The surface detector array begins operating.", sources: [{ label: "The surface detector array of the Telescope Array experiment, Nucl. Instrum. Meth. A 689, 87 (2012)", url: "https://doi.org/10.1016/j.nima.2012.05.079" }] },
      { year: 2014, event: "The collaboration reports a 'hotspot', a cluster of cosmic rays above 57 EeV in the northern sky.", sources: [{ label: "Telescope Array Collaboration, Astrophys. J. Lett. 790, L21 (2014)", url: "https://doi.org/10.1088/2041-8205/790/2/L21" }] },
      { year: 2021, event: "On 27 May 2021 the surface array records a cosmic ray with an energy of about 244 EeV.", sources: [{ label: "Telescope Array Collaboration, Science 382, 903 (2023)", url: "https://doi.org/10.1126/science.abo5095" }] },
    ],
    experiments: [
      { id: 'ta-sd', name: "Surface detector array", description: "507 plastic scintillator stations measuring the particles of extensive air showers at ground level.", topics: ['cosmic-rays'], startYear: 2008, sources: [{ label: "The surface detector array of the Telescope Array experiment, Nucl. Instrum. Meth. A 689, 87 (2012)", url: "https://doi.org/10.1016/j.nima.2012.05.079" }] },
    ],
    keyResults: [
      { year: 2023, discovery: "An Extremely Energetic Cosmic Ray", description: "The 244 EeV event arrived from the direction of the Local Void, where no obvious source is known.", sources: [{ label: "Telescope Array Collaboration, Science 382, 903 (2023)", url: "https://doi.org/10.1126/science.abo5095" }] },
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Official Site", url: "http://www.telescopearray.org" },
    ],
  },
  {
    id: 'geo600',
    name: "GEO600",
    type: 'gravitational-wave-observatory',
    country: "Germany",
    lat: 52.2469,
    lng: 9.8083,
    founded: 1995,
    status: 'active',
    overview: "GEO600 is a German-British gravitational-wave detector with 600-metre arms near Ruthe, about 20 km south of Hannover. Smaller than LIGO and Virgo, it has served as the test bed for techniques now used in all large detectors, including signal recycling, monolithic mirror suspensions and squeezed light.",
    specs: [
      { label: "Arm length", value: "600 m", sources: [{ label: "GEO600: A brief history of GEO600", url: "https://www.geo600.org/23920/a-brief-history-of-geo600" }] },
    ],
    history: [
      { year: 1995, event: "Construction of the detector starts in September 1995.", sources: [{ label: "GEO600: A brief history of GEO600", url: "https://www.geo600.org/23920/a-brief-history-of-geo600" }] },
      { year: 2002, event: "GEO600 takes its first scientific data in August and September 2002, together with the LIGO detectors.", sources: [{ label: "GEO600: A brief history of GEO600", url: "https://www.geo600.org/23920/a-brief-history-of-geo600" }] },
      { year: 2011, event: "GEO600 becomes the first gravitational-wave observatory to operate with squeezed light, beating the quantum shot-noise limit.", sources: [{ label: "LIGO Scientific Collaboration, Nature Physics 7, 962 (2011)", url: "https://doi.org/10.1038/nphys2083" }] },
    ],
    experiments: [
      { id: 'geo600-det', name: "GEO600 interferometer", description: "Michelson interferometer with 600-m arms, using signal recycling and squeezed light.", topics: ['gravitational-waves'], startYear: 2002, sources: [{ label: "GEO600: A brief history of GEO600", url: "https://www.geo600.org/23920/a-brief-history-of-geo600" }, { label: "GEO600", url: "https://www.geo600.org/" }] },
    ],
    keyResults: [
      { year: 2011, discovery: "Observing Beyond the Quantum Shot-Noise Limit", description: "Injecting squeezed light into the interferometer improved its sensitivity beyond the limit set by quantum fluctuations of the laser light.", sources: [{ label: "LIGO Scientific Collaboration, Nature Physics 7, 962 (2011)", url: "https://doi.org/10.1038/nphys2083" }] },
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Official Site", url: "https://www.geo600.org" },
    ],
  },
  {
    id: 'riken-ribf',
    name: "RIKEN RIBF",
    fullName: "RIKEN RI Beam Factory",
    type: 'nuclear-physics-facility',
    country: "Japan",
    lat: 35.779,
    lng: 139.614,
    founded: 2006,
    status: 'active',
    overview: "The RI Beam Factory at the RIKEN Nishina Center in Wako, near Tokyo, produces beams of unstable nuclei of all elements up to uranium. Its final accelerator is the world's first superconducting ring cyclotron. RIKEN's team also synthesised element 113, nihonium, the first element discovered in Asia.",
    specs: [
      { label: "Uranium beam energy", value: "345 MeV per nucleon", sources: [{ label: "RIKEN Nishina Center: About RIBF", url: "https://www.nishina.riken.jp/facility/RIBFabout_e.html" }] },
      { label: "Superconducting ring cyclotron", value: "8,300 tonnes, the first of its kind", sources: [{ label: "RIKEN Nishina Center: About RIBF", url: "https://www.nishina.riken.jp/facility/RIBFabout_e.html" }] },
    ],
    history: [
      { year: 2004, event: "Kosuke Morita's team synthesises the first atom of element 113 in July 2004 by fusing zinc and bismuth.", sources: [{ label: "Morita et al., J. Phys. Soc. Jpn. 73, 2593 (2004)", url: "https://doi.org/10.1143/JPSJ.73.2593" }, { label: "RIKEN: Element 113 officially named nihonium (2016)", url: "https://www.riken.jp/en/pr/topics/2016/20161130_1/" }] },
      { year: 2016, event: "The name nihonium (Nh) for element 113 is formally approved in November 2016.", sources: [{ label: "RIKEN: Element 113 officially named nihonium (2016)", url: "https://www.riken.jp/en/pr/topics/2016/20161130_1/" }] },
    ],
    experiments: [
      { id: 'ribf-bigrips', name: "BigRIPS", description: "Superconducting separator that selects and identifies rare isotopes produced from the cyclotron beams.", topics: ['rare-isotopes', 'nuclear-structure'], sources: [{ label: "Kubo et al., BigRIPS separator, Prog. Theor. Exp. Phys. 2012, 03C003", url: "https://doi.org/10.1093/ptep/pts064" }, { label: "RIKEN Nishina Center: About RIBF", url: "https://www.nishina.riken.jp/facility/RIBFabout_e.html" }] },
    ],
    keyResults: [
      { year: 2004, discovery: "Synthesis of Element 113 (Nihonium)", description: "The fusion of zinc-70 with bismuth-209 produced element 113, later recognised as the first element discovered in Asia.", sources: [{ label: "Morita et al., J. Phys. Soc. Jpn. 73, 2593 (2004)", url: "https://doi.org/10.1143/JPSJ.73.2593" }, { label: "RIKEN: The discovery of element 113", url: "https://www.riken.jp/en/about/history/story/113/" }] },
    ],
    importantPeople: [
      { name: "Kosuke Morita", contribution: "Led the RIKEN team that synthesised element 113, nihonium.", sources: [{ label: "Morita et al., J. Phys. Soc. Jpn. 73, 2593 (2004)", url: "https://doi.org/10.1143/JPSJ.73.2593" }, { label: "RIKEN: Element 113 officially named nihonium (2016)", url: "https://www.riken.jp/en/pr/topics/2016/20161130_1/" }] },
    ],
    readMore: [
      { label: "Official Site", url: "https://www.nishina.riken.jp/index_e.html" },
    ],
  },

  {
    id: 'ihep',
    name: "IHEP Beijing",
    fullName: "Institute of High Energy Physics, Chinese Academy of Sciences",
    type: 'accelerator-laboratory',
    country: "China",
    lat: 39.911,
    lng: 116.242,
    founded: 1973,
    status: 'active',
    overview: "The Institute of High Energy Physics in Beijing is China's main laboratory for particle physics. Its Beijing Electron-Positron Collider works in the energy range of the tau lepton and charm quark, where the BES detectors made a precise measurement of the tau mass and discovered a new family of charged charmonium-like particles. IHEP also led the Daya Bay experiment and leads JUNO.",
    specs: [
    ],
    history: [
      { year: 1992, event: "The BES detector at the Beijing Electron-Positron Collider publishes a precise measurement of the mass of the tau lepton.", sources: [{ label: "BES Collaboration, Phys. Rev. Lett. 69, 3021 (1992)", url: "https://doi.org/10.1103/PhysRevLett.69.3021" }] },
      { year: 2013, event: "BESIII observes Zc(3900), a charged charmonium-like structure that cannot be an ordinary quark-antiquark meson.", sources: [{ label: "BESIII Collaboration, Phys. Rev. Lett. 110, 252001 (2013)", url: "https://doi.org/10.1103/PhysRevLett.110.252001" }] },
    ],
    experiments: [
      { id: 'ihep-bes3', name: "BESIII", description: "Detector at the upgraded BEPCII electron-positron collider, studying charm, charmonium and tau physics.", topics: ['qcd', 'electroweak'], startYear: 2008, sources: [{ label: "Design and construction of the BESIII detector, Nucl. Instrum. Meth. A 614, 345 (2010)", url: "https://doi.org/10.1016/j.nima.2009.12.050" }] },
    ],
    keyResults: [
      { year: 2013, discovery: "A Charged Charmonium-like State, Zc(3900)", description: "A charged particle decaying to a pion and a J/psi must contain at least four quarks.", sources: [{ label: "BESIII Collaboration, Phys. Rev. Lett. 110, 252001 (2013)", url: "https://doi.org/10.1103/PhysRevLett.110.252001" }] },
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "BESIII detector paper", url: "https://doi.org/10.1016/j.nima.2009.12.050" },
    ],
  },
  {
    id: 'boulby',
    name: "Boulby",
    fullName: "Boulby Underground Laboratory",
    type: 'underground-laboratory',
    country: "United Kingdom",
    lat: 54.553,
    lng: -0.825,
    founded: 1989,
    status: 'active',
    overview: "The Boulby Underground Laboratory is the United Kingdom's deep underground science facility, 1.1 km below the North Yorkshire coast in a working mine. It has hosted dark matter searches for decades, including the ZEPLIN liquid-xenon experiments that were forerunners of LUX-ZEPLIN, and now also supports low-background measurement, earth science and astrobiology.",
    specs: [
      { label: "Depth", value: "1.1 km (2,805 m water equivalent)", sources: [{ label: "Boulby Underground Laboratory", url: "https://www.boulby.stfc.ac.uk" }, { label: "STFC Boulby Underground Laboratory: status talk (2022)", url: "https://indico.stfc.ac.uk/event/324/contributions/2838/attachments/1036/1830/STFCBoulby_IOP_April2022_Final.pdf" }] },
      { label: "Laboratory volume", value: "4,000 m³, plus a 3,000 m³ outside experimental area", sources: [{ label: "Boulby Underground Laboratory: About", url: "https://www.boulby.stfc.ac.uk/about/" }] },
      { label: "Operator", value: "STFC, hosted by the mine operator ICL-UK", sources: [{ label: "Boulby Underground Laboratory: About", url: "https://www.boulby.stfc.ac.uk/about/" }] },
    ],
    history: [
      { year: 2012, event: "ZEPLIN-III publishes the dark matter results of its second science run.", sources: [{ label: "ZEPLIN-III Collaboration, Phys. Lett. B 709, 14 (2012)", url: "https://doi.org/10.1016/j.physletb.2012.01.064" }] },
      { year: 1989, event: "The first radioactive background measurements are taken underground in Boulby Mine.", sources: [{ label: "Boulby Underground Laboratory: About", url: "https://www.boulby.stfc.ac.uk/about/" }] },
      { year: 1993, event: "The first underground dark matter search data are taken at Boulby with sodium iodide detectors.", sources: [{ label: "Boulby Underground Laboratory: About", url: "https://www.boulby.stfc.ac.uk/about/" }] },
      { year: 2003, event: "A new laboratory opens, and the NAIAD and DRIFT-I experiments publish their first results.", sources: [{ label: "Boulby Underground Laboratory: About", url: "https://www.boulby.stfc.ac.uk/about/" }] },
      { year: 2007, event: "ZEPLIN-II, a two-phase xenon detector, publishes its first dark matter results.", sources: [{ label: "Boulby Underground Laboratory: About", url: "https://www.boulby.stfc.ac.uk/about/" }, { label: "ZEPLIN-II Collaboration, Astropart. Phys. 28, 287 (2007)", url: "https://doi.org/10.1016/j.astropartphys.2007.06.002" }] },
      { year: 2017, event: "The current laboratory is built to host a new generation of low-background experiments.", sources: [{ label: "Boulby Underground Laboratory: About", url: "https://www.boulby.stfc.ac.uk/about/" }] },
      { year: 2025, event: "Excavation for the next expansion of the laboratory is completed.", sources: [{ label: "Boulby Underground Laboratory: About", url: "https://www.boulby.stfc.ac.uk/about/" }] },
    ],
    experiments: [
      { id: 'boulby-zeplin3', name: "ZEPLIN-III", description: "Two-phase xenon detector searching for dark matter particles.", topics: ['dark-matter'], sources: [{ label: "ZEPLIN-III Collaboration, Phys. Lett. B 709, 14 (2012)", url: "https://doi.org/10.1016/j.physletb.2012.01.064" }] },
      { id: 'boulby-zeplin2', name: "ZEPLIN-II", description: "Two-phase xenon detector that set early limits on dark matter particles.", topics: ['dark-matter'], sources: [{ label: "ZEPLIN-II Collaboration, Astropart. Phys. 28, 287 (2007)", url: "https://doi.org/10.1016/j.astropartphys.2007.06.002" }] },
    ],
    keyResults: [
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Official Site", url: "https://www.boulby.stfc.ac.uk" },
    ],
  },
  {
    id: 'canfranc',
    name: "Canfranc (LSC)",
    fullName: "Laboratorio Subterráneo de Canfranc",
    type: 'underground-laboratory',
    country: "Spain",
    lat: 42.775,
    lng: -0.529,
    founded: 1985,
    status: 'active',
    overview: "The Canfranc Underground Laboratory lies under Mount Tobazo on the Spanish side of the Pyrenees, between the Somport road tunnel and a disused railway tunnel. Its ANAIS-112 experiment uses sodium iodide crystals to test the annual-modulation signal claimed by DAMA/LIBRA with the same target material.",
    specs: [
      { label: "Maximum depth", value: "800 m of rock", sources: [{ label: "Canfranc biology platform, Front. Phys. 12 (2024)", url: "https://doi.org/10.3389/fphy.2024.1397799" }] },
      { label: "ANAIS-112 overburden", value: "2,450 m water equivalent", sources: [{ label: "ANAIS-112 Collaboration, Phys. Rev. Lett. 123, 031301 (2019)", url: "https://doi.org/10.1103/PhysRevLett.123.031301" }] },
      { label: "Older underground facilities", value: "1,560 m² and 10,500 m³", sources: [{ label: "LSC: History", url: "https://lsc-canfranc.es/en/history/" }] },
    ],
    history: [
      { year: 2017, event: "ANAIS-112 begins taking data on 3 August 2017.", sources: [{ label: "ANAIS-112 Collaboration, Phys. Rev. Lett. 123, 031301 (2019)", url: "https://doi.org/10.1103/PhysRevLett.123.031301" }] },
      { year: 2021, event: "Three years of ANAIS-112 data show no annual modulation, in tension with the DAMA/LIBRA signal.", sources: [{ label: "ANAIS-112 Collaboration, Phys. Rev. D 103, 102005 (2021)", url: "https://doi.org/10.1103/PhysRevD.103.102005" }] },
      { year: 1985, event: "A. Morales and the University of Zaragoza's nuclear and astroparticle physics group begin using the abandoned railway tunnel for underground experiments.", sources: [{ label: "LSC: History", url: "https://lsc-canfranc.es/en/history/" }] },
      { year: 1994, event: "A new experimental hall of 118 m² is excavated during work on the Somport road tunnel.", sources: [{ label: "LSC: History", url: "https://lsc-canfranc.es/en/history/" }] },
      { year: 2006, event: "The main laboratory, 800 m under Mount Tobazo, is completed.", sources: [{ label: "LSC: History", url: "https://lsc-canfranc.es/en/history/" }] },
      { year: 2010, event: "The University of Zaragoza hands the underground facilities over to the LSC Consortium on 30 June 2010.", sources: [{ label: "LSC: History", url: "https://lsc-canfranc.es/en/history/" }] },
    ],
    experiments: [
      { id: 'lsc-anais', name: "ANAIS-112", description: "112 kg of sodium iodide scintillators searching for an annual modulation in the dark matter interaction rate.", topics: ['dark-matter'], startYear: 2017, sources: [{ label: "ANAIS-112 Collaboration, Phys. Rev. Lett. 123, 031301 (2019)", url: "https://doi.org/10.1103/PhysRevLett.123.031301" }, { label: "ANAIS-112 Collaboration, Phys. Rev. D 103, 102005 (2021)", url: "https://doi.org/10.1103/PhysRevD.103.102005" }] },
      { id: 'lsc-next', name: "NEXT", description: "High-pressure xenon gas time projection chambers searching for the neutrinoless double-beta decay of xenon-136.", topics: ['neutrinos'], sources: [{ label: "NEXT-100 Technical Design Report, JINST 7, T06001 (2012)", url: "https://doi.org/10.1088/1748-0221/7/06/T06001" }, { label: "NEXT Collaboration, JHEP 10 (2019) 230", url: "https://doi.org/10.1007/JHEP10(2019)230" }] },
    ],
    keyResults: [
    ],
    importantPeople: [
      { name: "A. Morales", contribution: "Started the underground physics programme at Canfranc with the University of Zaragoza group in 1985.", sources: [{ label: "LSC: History", url: "https://lsc-canfranc.es/en/history/" }] },
    ],
    readMore: [
      { label: "Official Site", url: "https://lsc-canfranc.es/en/" },
    ],
  },
  {
    id: 'baksan',
    name: "Baksan",
    fullName: "Baksan Neutrino Observatory",
    type: 'underground-laboratory',
    country: "Russia",
    lat: 43.275,
    lng: 42.69,
    founded: 1967,
    status: 'active',
    overview: "The Baksan Neutrino Observatory is tunnelled into Mount Andyrchi in the Caucasus. Its gallium experiment SAGE measured low-energy neutrinos from the Sun for two decades. The same gallium was later used in the BEST experiment, which confirmed a puzzling shortfall, the gallium anomaly, in the neutrinos detected from an intense radioactive source.",
    specs: [
    ],
    history: [
      { year: 1991, event: "SAGE publishes its first search for solar neutrinos using the capture of neutrinos on gallium.", sources: [{ label: "SAGE Collaboration, Phys. Rev. Lett. 67, 3332 (1991)", url: "https://doi.org/10.1103/PhysRevLett.67.3332" }] },
      { year: 2009, event: "SAGE reports its measurement of the solar neutrino capture rate from data taken up to 2007.", sources: [{ label: "SAGE Collaboration, Phys. Rev. C 80, 015807 (2009)", url: "https://doi.org/10.1103/PhysRevC.80.015807" }] },
      { year: 2022, event: "BEST finds 20 to 24 per cent fewer germanium atoms than expected from a chromium-51 neutrino source, confirming the gallium anomaly.", sources: [{ label: "BEST Collaboration, Phys. Rev. Lett. 128, 232501 (2022)", url: "https://doi.org/10.1103/PhysRevLett.128.232501" }, { label: "A Search for Electron Neutrino Transitions to Sterile States in the BEST Experiment (arXiv:2201.07364)", url: "https://arxiv.org/abs/2201.07364" }] },
    ],
    experiments: [
      { id: 'baksan-sage', name: "SAGE", description: "Gallium-metal radiochemical experiment measuring low-energy solar neutrinos.", topics: ['neutrinos'], sources: [{ label: "SAGE Collaboration, Phys. Rev. C 80, 015807 (2009)", url: "https://doi.org/10.1103/PhysRevC.80.015807" }] },
      { id: 'baksan-best', name: "BEST", description: "Baksan Experiment on Sterile Transitions: a gallium target in two zones around an intense chromium-51 source, searching for oscillations into sterile neutrinos.", topics: ['neutrinos'], startYear: 2019, sources: [{ label: "BEST Collaboration, Phys. Rev. Lett. 128, 232501 (2022)", url: "https://doi.org/10.1103/PhysRevLett.128.232501" }, { label: "A Search for Electron Neutrino Transitions to Sterile States in the BEST Experiment (arXiv:2201.07364)", url: "https://arxiv.org/abs/2201.07364" }] },
    ],
    keyResults: [
      { year: 2022, discovery: "Confirmation of the Gallium Anomaly", description: "Both zones of the BEST target saw a similar deficit, strengthening the anomaly without showing the distance dependence expected from oscillations.", sources: [{ label: "BEST Collaboration, Phys. Rev. Lett. 128, 232501 (2022)", url: "https://doi.org/10.1103/PhysRevLett.128.232501" }] },
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Official Site", url: "https://www.inr.ru/eng/ebno.html" },
    ],
  },
  {
    id: 'kolar-gold-fields',
    name: "Kolar Gold Fields",
    fullName: "Kolar Gold Fields underground experiments",
    type: 'underground-laboratory',
    country: "India",
    lat: 12.95,
    lng: 78.27,
    founded: 1965,
    status: 'historic',
    overview: "The deep gold mines of Kolar in Karnataka hosted pioneering underground physics experiments by the Tata Institute of Fundamental Research with collaborators from Osaka and Durham. In 1965, working more than two kilometres below ground, they reported the first detection of muons produced by cosmic-ray neutrinos in the rock, the first observation of atmospheric neutrinos.",
    specs: [
      { label: "Depth of the 1965 neutrino detector", value: "About 2,300 m", sources: [{ label: "ThePrint: Kolar Gold Fields and India's neutrino legacy", url: "https://theprint.in/science/how-experiments-at-karnatakas-kolar-gold-fields-are-last-remaining-piece-of-indias-neutrino-legacy/2361654/" }] },
      { label: "Second proton decay detector", value: "About 366 tonnes, 2 km underground", sources: [{ label: "ThePrint: Kolar Gold Fields and India's neutrino legacy", url: "https://theprint.in/science/how-experiments-at-karnatakas-kolar-gold-fields-are-last-remaining-piece-of-indias-neutrino-legacy/2361654/" }] },
    ],
    history: [
      { year: 1965, event: "The Kolar collaboration reports the detection of muons produced deep underground by cosmic-ray neutrinos.", sources: [{ label: "Achar et al., Phys. Lett. 18, 196 (1965)", url: "https://doi.org/10.1016/0031-9163(65)90712-2" }] },
      { year: 1965, event: "A group led by Frederick Reines, working in a South African gold mine, reports the same phenomenon two weeks after the Kolar paper.", sources: [{ label: "Reines et al., Phys. Rev. Lett. 15, 429 (1965)", url: "https://doi.org/10.1103/PhysRevLett.15.429" }, { label: "ThePrint: Kolar Gold Fields and India's neutrino legacy", url: "https://theprint.in/science/how-experiments-at-karnatakas-kolar-gold-fields-are-last-remaining-piece-of-indias-neutrino-legacy/2361654/" }] },
      { year: 1980, event: "The first proton decay experiment begins operating 2.3 km underground; candidate events are reported the following year.", sources: [{ label: "ThePrint: Kolar Gold Fields and India's neutrino legacy", url: "https://theprint.in/science/how-experiments-at-karnatakas-kolar-gold-fields-are-last-remaining-piece-of-indias-neutrino-legacy/2361654/" }, { label: "Krishnaswamy et al., Phys. Lett. B 106, 339 (1981)", url: "https://doi.org/10.1016/0370-2693(81)90549-9" }] },
      { year: 1993, event: "The underground experiments begin to be shut down; the mines themselves close in 2001.", sources: [{ label: "ThePrint: Kolar Gold Fields and India's neutrino legacy", url: "https://theprint.in/science/how-experiments-at-karnatakas-kolar-gold-fields-are-last-remaining-piece-of-indias-neutrino-legacy/2361654/" }] },
    ],
    experiments: [
      { id: 'kgf-neutrino', name: "Atmospheric neutrino experiment", description: "Detectors deep in the mine recording muons produced by neutrino interactions in the surrounding rock.", topics: ['neutrinos', 'cosmic-rays'], startYear: 1965, sources: [{ label: "Achar et al., Phys. Lett. 18, 196 (1965)", url: "https://doi.org/10.1016/0031-9163(65)90712-2" }] },
      { id: 'kgf-proton-decay', name: "Proton decay experiments", description: "Two successive detectors of the Bombay-Osaka collaboration searching for the decay of the proton.", topics: ['electroweak'], startYear: 1980, sources: [{ label: "Krishnaswamy et al., Phys. Lett. B 106, 339 (1981)", url: "https://doi.org/10.1016/0370-2693(81)90549-9" }, { label: "ThePrint: Kolar Gold Fields and India's neutrino legacy", url: "https://theprint.in/science/how-experiments-at-karnatakas-kolar-gold-fields-are-last-remaining-piece-of-indias-neutrino-legacy/2361654/" }] },
    ],
    keyResults: [
      { year: 1965, discovery: "First Detection of Atmospheric Neutrinos", description: "Muons arriving at large angles deep underground could only have been produced by neutrinos from cosmic-ray showers in the atmosphere.", sources: [{ label: "Achar et al., Phys. Lett. 18, 196 (1965)", url: "https://doi.org/10.1016/0031-9163(65)90712-2" }] },
    ],
    importantPeople: [
      { name: "B. V. Sreekantan", contribution: "Conducted the first physics experiments at Kolar in the 1950s.", sources: [{ label: "ThePrint: Kolar Gold Fields and India's neutrino legacy", url: "https://theprint.in/science/how-experiments-at-karnatakas-kolar-gold-fields-are-last-remaining-piece-of-indias-neutrino-legacy/2361654/" }] },
      { name: "V. S. Narasimham", contribution: "With P. V. Ramanamurthy and Saburo Miyake, carried the Kolar cosmic-ray and neutrino work forward in the 1960s.", sources: [{ label: "ThePrint: Kolar Gold Fields and India's neutrino legacy", url: "https://theprint.in/science/how-experiments-at-karnatakas-kolar-gold-fields-are-last-remaining-piece-of-indias-neutrino-legacy/2361654/" }] },
    ],
    readMore: [
      { label: "The 1965 discovery paper", url: "https://doi.org/10.1016/0031-9163(65)90712-2" },
    ],
  },
  {
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
  },
  {
    id: 'antares',
    name: "ANTARES",
    fullName: "Astronomy with a Neutrino Telescope and Abyss environmental RESearch",
    type: 'neutrino-observatory',
    country: "France",
    lat: 42.8,
    lng: 6.17,
    founded: 2006,
    status: 'historic',
    overview: "ANTARES was the first neutrino telescope in the deep sea, anchored about 2.5 km down in the Mediterranean off Toulon. Its twelve lines of optical modules watched for light from neutrino interactions for sixteen years and proved the techniques now used by its successor, KM3NeT.",
    specs: [
      { label: "Detection lines", value: "12, carrying 885 optical modules", sources: [{ label: "Nikhef: After sixteen years ANTARES is shut down (2022)", url: "https://www.nikhef.nl/www/en/news/after-sixteen-years-of-deep-sea-neutrino-watching-antares-is-shut-down/" }, { label: "ANTARES: the first undersea neutrino telescope, Nucl. Instrum. Meth. A 656, 11 (2011)", url: "https://doi.org/10.1016/j.nima.2011.06.103" }] },
    ],
    history: [
      { year: 2006, event: "The first detection line is deployed.", sources: [{ label: "Nikhef: After sixteen years ANTARES is shut down (2022)", url: "https://www.nikhef.nl/www/en/news/after-sixteen-years-of-deep-sea-neutrino-watching-antares-is-shut-down/" }] },
      { year: 2008, event: "The detector is completed in May 2008.", sources: [{ label: "Nikhef: After sixteen years ANTARES is shut down (2022)", url: "https://www.nikhef.nl/www/en/news/after-sixteen-years-of-deep-sea-neutrino-watching-antares-is-shut-down/" }] },
      { year: 2022, event: "ANTARES stops taking data in February 2022 and is dismantled.", sources: [{ label: "Nikhef: After sixteen years ANTARES is shut down (2022)", url: "https://www.nikhef.nl/www/en/news/after-sixteen-years-of-deep-sea-neutrino-watching-antares-is-shut-down/" }] },
    ],
    experiments: [
      { id: 'antares-det', name: "ANTARES detector", description: "Twelve vertical lines of optical modules on the seabed, detecting Cherenkov light from neutrino-induced muons.", topics: ['neutrinos', 'cosmic-rays'], startYear: 2006, endYear: 2022, sources: [{ label: "ANTARES: the first undersea neutrino telescope, Nucl. Instrum. Meth. A 656, 11 (2011)", url: "https://doi.org/10.1016/j.nima.2011.06.103" }, { label: "Nikhef: After sixteen years ANTARES is shut down (2022)", url: "https://www.nikhef.nl/www/en/news/after-sixteen-years-of-deep-sea-neutrino-watching-antares-is-shut-down/" }] },
    ],
    keyResults: [
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Official Site", url: "https://antares.in2p3.fr" },
    ],
  },
  {
    id: 'mace',
    name: "MACE",
    fullName: "Major Atmospheric Cherenkov Experiment",
    type: 'gamma-ray-observatory',
    country: "India",
    lat: 32.78,
    lng: 78.96,
    founded: 2024,
    status: 'active',
    overview: "MACE is a large imaging atmospheric Cherenkov telescope at Hanle in Ladakh, built by the Bhabha Atomic Research Centre with Indian industry. With a 21-metre dish at about 4,300 m, it is the highest telescope of its kind in the world and the largest in Asia, designed to observe high-energy gamma rays from sources such as supernova remnants, black holes and gamma-ray bursts.",
    specs: [
            { label: "Light collector", value: "21 m in diameter, made of 1,424 mirror facets", sources: [{ label: "HiGRO Collaboration: Status update of MACE Gamma-ray telescope (arXiv:2107.04297)", url: "https://arxiv.org/abs/2107.04297" }] },
      { label: "Site altitude", value: "4,270 m above sea level", sources: [{ label: "HiGRO Collaboration: Status update of MACE Gamma-ray telescope (arXiv:2107.04297)", url: "https://arxiv.org/abs/2107.04297" }] },
      { label: "Target energy range", value: "20 to 100 GeV and beyond", sources: [{ label: "HiGRO Collaboration: Status update of MACE Gamma-ray telescope (arXiv:2107.04297)", url: "https://arxiv.org/abs/2107.04297" }] },
    ],
    history: [
      { year: 2024, event: "The observatory is inaugurated on 4 October 2024 by the Secretary of the Department of Atomic Energy.", sources: [{ label: "Reach Ladakh: DAE inaugurates imaging Cherenkov observatory at Hanle (2024)", url: "https://www.reachladakh.com/news/social-news/dae-inaugurates-asia-s-largest-and-world-s-highest-imaging-cherenkov-observatory-at-hanle" }, { label: "Department of Atomic Energy: MACE inauguration (2024)", url: "https://dae.gov.in/?p=25806" }] },
      { year: 2021, event: "With the telescope installed at Hanle, the collaboration reports results from its trial observations.", sources: [{ label: "HiGRO Collaboration: Status update of MACE Gamma-ray telescope (arXiv:2107.04297)", url: "https://arxiv.org/abs/2107.04297" }] },
    ],
    experiments: [
      { id: 'mace-telescope', name: "MACE telescope", description: "Imaging atmospheric Cherenkov telescope observing high-energy gamma rays.", topics: ['cosmic-rays'], sources: [{ label: "HiGRO Collaboration: Status update of MACE Gamma-ray telescope (arXiv:2107.04297)", url: "https://arxiv.org/abs/2107.04297" }, { label: "Reach Ladakh: DAE inaugurates imaging Cherenkov observatory at Hanle (2024)", url: "https://www.reachladakh.com/news/social-news/dae-inaugurates-asia-s-largest-and-world-s-highest-imaging-cherenkov-observatory-at-hanle" }] },
    ],
    keyResults: [
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Department of Atomic Energy", url: "https://dae.gov.in" },
    ],
  },
  {
    id: 'ligo-india',
    name: "LIGO-India",
    type: 'gravitational-wave-observatory',
    country: "India",
    lat: 19.613,
    lng: 77.031,
    founded: 2023,
    status: 'planned',
    overview: "LIGO-India is a planned gravitational-wave observatory at Aundha in the Hingoli district of Maharashtra, to be built by Indian institutions in collaboration with the LIGO Laboratory. Adding a detector far from the two in the United States will greatly improve how precisely sources can be located in the sky.",
    specs: [
      { label: "Lead institutions", value: "RRCAT Indore, IPR Ahmedabad and IUCAA Pune", sources: [{ label: "LIGO Laboratory: LIGO-India", url: "https://www.ligo.caltech.edu/page/ligo-india" }] },
      { label: "Funding agencies", value: "Department of Atomic Energy (lead) and Department of Science and Technology", sources: [{ label: "LIGO Laboratory: LIGO-India", url: "https://www.ligo.caltech.edu/page/ligo-india" }] },
      { label: "Approved cost", value: "Rs 2,600 crore", sources: [{ label: "Deccan Herald: Cabinet approves Rs 2,600 crore gravitational-wave observatory (2023)", url: "https://www.deccanherald.com/india/cabinet-approves-new-space-policy-and-rs-2600-crore-gravity-wave-observatory-1207334.html" }] },
    ],
    history: [
      { year: 2022, event: "The science case for LIGO-India is published, setting out the gains in sky localisation from a detector in India.", sources: [{ label: "The science case for LIGO-India, Class. Quantum Grav. 39, 025004 (2022)", url: "https://doi.org/10.1088/1361-6382/ac3b99" }] },
      { year: 2016, event: "A memorandum of understanding is signed in March 2016 under which the LIGO Laboratory will provide the hardware for a complete interferometer and India will build the facility.", sources: [{ label: "LIGO Laboratory: LIGO-India", url: "https://www.ligo.caltech.edu/page/ligo-india" }] },
      { year: 2023, event: "The Union Cabinet approves the project on 6 April 2023; completion is expected by 2030.", sources: [{ label: "Deccan Herald: Cabinet approves Rs 2,600 crore gravitational-wave observatory (2023)", url: "https://www.deccanherald.com/india/cabinet-approves-new-space-policy-and-rs-2600-crore-gravity-wave-observatory-1207334.html" }] },
    ],
    experiments: [
      { id: 'ligo-india-det', name: "LIGO-India detector", description: "Planned Advanced LIGO interferometer in India, to operate as part of the global detector network.", topics: ['gravitational-waves'], sources: [{ label: "The science case for LIGO-India, Class. Quantum Grav. 39, 025004 (2022)", url: "https://doi.org/10.1088/1361-6382/ac3b99" }, { label: "LIGO Laboratory: LIGO-India", url: "https://www.ligo.caltech.edu/page/ligo-india" }] },
    ],
    keyResults: [
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Official Site", url: "https://www.ligo-india.in" },
    ],
  },
  {
    id: 'imb',
    name: "IMB",
    fullName: "Irvine-Michigan-Brookhaven detector",
    type: 'neutrino-observatory',
    country: "United States",
    lat: 41.75,
    lng: -81.28,
    founded: 1982,
    status: 'historic',
    overview: "The IMB detector was a large water Cherenkov detector in a salt mine on the shore of Lake Erie in Ohio, built to search for proton decay. It did not find it, but on 23 February 1987 it recorded a burst of neutrinos from Supernova 1987A, at the same time as the Kamiokande detector in Japan.",
    specs: [
      { label: "Detector mass", value: "8,000 tons of water", sources: [{ label: "APS Historic Site: Morton Salt Mine", url: "https://www.aps.org/funding-recognition/historic-sites/morton" }] },
      { label: "Depth", value: "Nearly 2,000 ft (about 600 m)", sources: [{ label: "APS Historic Site: Morton Salt Mine", url: "https://www.aps.org/funding-recognition/historic-sites/morton" }] },
      { label: "Operation", value: "1982 to 1991", sources: [{ label: "APS Historic Site: Morton Salt Mine", url: "https://www.aps.org/funding-recognition/historic-sites/morton" }] },
    ],
    history: [
      { year: 1987, event: "IMB records eight neutrino events within six seconds, coinciding with Supernova 1987A in the Large Magellanic Cloud.", sources: [{ label: "IMB Collaboration, Phys. Rev. Lett. 58, 1494 (1987)", url: "https://doi.org/10.1103/PhysRevLett.58.1494" }] },
      { year: 1983, event: "IMB publishes its first search for the decay of a proton into a positron and a neutral pion, finding none.", sources: [{ label: "IMB Collaboration, Phys. Rev. Lett. 51, 27 (1983)", url: "https://doi.org/10.1103/PhysRevLett.51.27" }] },
      { year: 1991, event: "The upgraded IMB-3 detector measures the mix of atmospheric neutrinos and finds fewer muon neutrinos than expected, an early sign of what proved to be neutrino oscillation.", sources: [{ label: "IMB Collaboration, Phys. Rev. Lett. 66, 2561 (1991)", url: "https://doi.org/10.1103/PhysRevLett.66.2561" }, { label: "IMB-3: a large water Cherenkov detector, Nucl. Instrum. Meth. A 324, 363 (1993)", url: "https://doi.org/10.1016/0168-9002(93)90998-W" }] },
    ],
    experiments: [
      { id: 'imb-det', name: "IMB detector", description: "Water Cherenkov detector built to search for proton decay.", topics: ['neutrinos'], startYear: 1982, endYear: 1991, sources: [{ label: "IMB Collaboration, Phys. Rev. Lett. 58, 1494 (1987)", url: "https://doi.org/10.1103/PhysRevLett.58.1494" }] },
    ],
    keyResults: [
      { year: 1987, discovery: "Neutrinos from Supernova 1987A", description: "Together with Kamiokande's events, the burst was the first detection of neutrinos from a supernova.", sources: [{ label: "IMB Collaboration, Phys. Rev. Lett. 58, 1494 (1987)", url: "https://doi.org/10.1103/PhysRevLett.58.1494" }] },
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "The supernova neutrino paper", url: "https://doi.org/10.1103/PhysRevLett.58.1494" },
    ],
  },

  {
    id: 'cavendish',
    name: "Cavendish Laboratory",
    fullName: "Cavendish Laboratory, University of Cambridge",
    type: 'university-laboratory',
    country: "United Kingdom",
    lat: 52.2035,
    lng: 0.1187,
    founded: 1874,
    status: 'historic',
    overview: "The Cavendish Laboratory is the physics department of the University of Cambridge, opened in 1874 under James Clerk Maxwell. In its original building in the centre of Cambridge the electron and the neutron were discovered and the atomic nucleus was first split with artificially accelerated particles, making it one of the birthplaces of particle and nuclear physics. The laboratory moved to West Cambridge in 1974 and remains a working department; it is listed here for its historic role.",
    specs: [
    ],
    history: [
      { year: 1874, event: "The laboratory opens under James Clerk Maxwell, the first Cavendish Professor.", sources: [{ label: "University of Cambridge, Department of Physics: Our history", url: "https://www.phy.cam.ac.uk/about/our-history/" }] },
      { year: 1897, event: "J. J. Thomson's experiments on cathode rays reveal the electron, the first subatomic particle. He receives the 1906 Nobel Prize.", sources: [{ label: "J. J. Thomson, Cathode Rays, Phil. Mag. 44, 293 (1897)", url: "https://doi.org/10.1080/14786449708621070" }, { label: "University of Cambridge, Department of Physics: Our history", url: "https://www.phy.cam.ac.uk/about/our-history/" }, { label: "Nobel Prize in Physics 1906", url: "https://www.nobelprize.org/prizes/physics/1906/summary/" }] },
      { year: 1919, event: "Ernest Rutherford becomes Cavendish Professor.", sources: [{ label: "University of Cambridge, Department of Physics: Our history", url: "https://www.phy.cam.ac.uk/about/our-history/" }] },
      { year: 1932, event: "James Chadwick discovers the neutron, and John Cockcroft and Ernest Walton split the atomic nucleus with accelerated protons.", sources: [{ label: "J. Chadwick, Possible Existence of a Neutron, Nature 129, 312 (1932)", url: "https://doi.org/10.1038/129312a0" }, { label: "Cockcroft and Walton, Proc. R. Soc. A 137, 229 (1932)", url: "https://doi.org/10.1098/rspa.1932.0133" }, { label: "University of Cambridge, Department of Physics: Our history", url: "https://www.phy.cam.ac.uk/about/our-history/" }] },
      { year: 1974, event: "The laboratory completes its move to a new site in West Cambridge.", sources: [{ label: "University of Cambridge, Department of Physics: Our history", url: "https://www.phy.cam.ac.uk/about/our-history/" }] },
    ],
    experiments: [
      { id: 'cavendish-cw', name: "Cockcroft-Walton accelerator", description: "High-voltage accelerator with which protons were first used to disintegrate atomic nuclei.", topics: ['nuclear-structure'], startYear: 1932, sources: [{ label: "Cockcroft and Walton, Proc. R. Soc. A 137, 229 (1932)", url: "https://doi.org/10.1098/rspa.1932.0133" }] },
    ],
    keyResults: [
      { year: 1897, discovery: "Discovery of the Electron", description: "Cathode rays were shown to consist of particles far lighter than atoms. Nobel Prize 1906.", sources: [{ label: "J. J. Thomson, Cathode Rays, Phil. Mag. 44, 293 (1897)", url: "https://doi.org/10.1080/14786449708621070" }, { label: "Nobel Prize in Physics 1906", url: "https://www.nobelprize.org/prizes/physics/1906/summary/" }] },
      { year: 1932, discovery: "Discovery of the Neutron", description: "Chadwick identified a neutral particle of about the proton's mass in the radiation from beryllium. Nobel Prize 1935.", sources: [{ label: "J. Chadwick, Possible Existence of a Neutron, Nature 129, 312 (1932)", url: "https://doi.org/10.1038/129312a0" }, { label: "Nobel Prize in Physics 1935", url: "https://www.nobelprize.org/prizes/physics/1935/summary/" }] },
      { year: 1932, discovery: "First Artificial Splitting of the Nucleus", description: "Protons accelerated to a few hundred kilovolts broke lithium nuclei into pairs of alpha particles. Nobel Prize 1951.", sources: [{ label: "Cockcroft and Walton, Proc. R. Soc. A 137, 229 (1932)", url: "https://doi.org/10.1098/rspa.1932.0133" }, { label: "Nobel Prize in Physics 1951", url: "https://www.nobelprize.org/prizes/physics/1951/summary/" }] },
    ],
    importantPeople: [
      { name: "J. J. Thomson", contribution: "Discovered the electron; Nobel Prize in Physics 1906.", sources: [{ label: "Nobel Prize in Physics 1906", url: "https://www.nobelprize.org/prizes/physics/1906/summary/" }] },
      { name: "James Chadwick", contribution: "Discovered the neutron; Nobel Prize in Physics 1935.", sources: [{ label: "Nobel Prize in Physics 1935", url: "https://www.nobelprize.org/prizes/physics/1935/summary/" }] },
      { name: "John Cockcroft and Ernest Walton", contribution: "Built the first accelerator to split the nucleus; Nobel Prize in Physics 1951.", sources: [{ label: "Nobel Prize in Physics 1951", url: "https://www.nobelprize.org/prizes/physics/1951/summary/" }] },
    ],
    readMore: [
      { label: "Department of Physics, University of Cambridge", url: "https://www.phy.cam.ac.uk" },
    ],
  },
  {
    id: 'berkeley-lab',
    name: "Berkeley Lab",
    fullName: "Lawrence Berkeley National Laboratory",
    type: 'accelerator-laboratory',
    country: "United States",
    lat: 37.876,
    lng: -122.251,
    founded: 1931,
    status: 'active',
    overview: "Lawrence Berkeley National Laboratory grew from the Radiation Laboratory that Ernest Lawrence founded at the University of California in 1931 to develop his invention, the cyclotron. A succession of ever larger machines made it the model for the modern accelerator laboratory. Its cyclotrons produced the first elements beyond uranium, and its Bevatron revealed the antiproton.",
    specs: [
    ],
    history: [
      { year: 1931, event: "Lawrence is given a disused building on the Berkeley campus for a radiation laboratory, in the month an 11-inch cyclotron reaches 1.1 MeV.", sources: [{ label: "Berkeley Lab: History timeline", url: "https://www2.lbl.gov/Science-Articles/Archive/timeline.html" }] },
      { year: 1939, event: "Lawrence receives the Nobel Prize for the invention of the cyclotron.", sources: [{ label: "Berkeley Lab: History timeline", url: "https://www2.lbl.gov/Science-Articles/Archive/timeline.html" }, { label: "Nobel Prize in Physics 1939", url: "https://www.nobelprize.org/prizes/physics/1939/summary/" }] },
      { year: 1940, event: "Neptunium and plutonium, the first elements beyond uranium, are discovered at the laboratory.", sources: [{ label: "Berkeley Lab: History timeline", url: "https://www2.lbl.gov/Science-Articles/Archive/timeline.html" }, { label: "Nobel Prize in Chemistry 1951", url: "https://www.nobelprize.org/prizes/chemistry/1951/summary/" }] },
      { year: 1954, event: "The Bevatron proton accelerator is completed.", sources: [{ label: "Berkeley Lab: History timeline", url: "https://www2.lbl.gov/Science-Articles/Archive/timeline.html" }] },
      { year: 1955, event: "The antiproton is discovered at the Bevatron by Owen Chamberlain, Emilio Segrè and colleagues.", sources: [{ label: "Chamberlain, Segrè, Wiegand and Ypsilantis, Phys. Rev. 100, 947 (1955)", url: "https://doi.org/10.1103/PhysRev.100.947" }, { label: "Berkeley Lab: History timeline", url: "https://www2.lbl.gov/Science-Articles/Archive/timeline.html" }] },
    ],
    experiments: [
      { id: 'lbl-cyclotron', name: "Cyclotrons", description: "The series of cyclotrons, from 11 inches to the 184-inch synchrocyclotron, built by Lawrence and his laboratory.", topics: ['nuclear-structure'], startYear: 1931, sources: [{ label: "Lawrence and Livingston, Phys. Rev. 40, 19 (1932)", url: "https://doi.org/10.1103/PhysRev.40.19" }, { label: "Berkeley Lab: History timeline", url: "https://www2.lbl.gov/Science-Articles/Archive/timeline.html" }] },
      { id: 'lbl-bevatron', name: "Bevatron", description: "Proton synchrotron designed to reach the energy needed to create antiprotons.", topics: ['qcd'], startYear: 1954, sources: [{ label: "Berkeley Lab: History timeline", url: "https://www2.lbl.gov/Science-Articles/Archive/timeline.html" }, { label: "Chamberlain, Segrè, Wiegand and Ypsilantis, Phys. Rev. 100, 947 (1955)", url: "https://doi.org/10.1103/PhysRev.100.947" }] },
    ],
    keyResults: [
      { year: 1955, discovery: "Discovery of the Antiproton", description: "Negatively charged particles with the mass of the proton were identified among the products of Bevatron collisions. Nobel Prize 1959.", sources: [{ label: "Chamberlain, Segrè, Wiegand and Ypsilantis, Phys. Rev. 100, 947 (1955)", url: "https://doi.org/10.1103/PhysRev.100.947" }, { label: "Nobel Prize in Physics 1959", url: "https://www.nobelprize.org/prizes/physics/1959/summary/" }] },
    ],
    importantPeople: [
      { name: "Ernest Lawrence", contribution: "Invented the cyclotron and founded the laboratory; Nobel Prize in Physics 1939.", sources: [{ label: "Nobel Prize in Physics 1939", url: "https://www.nobelprize.org/prizes/physics/1939/summary/" }] },
      { name: "Emilio Segrè and Owen Chamberlain", contribution: "Discovered the antiproton; Nobel Prize in Physics 1959.", sources: [{ label: "Nobel Prize in Physics 1959", url: "https://www.nobelprize.org/prizes/physics/1959/summary/" }] },
    ],
    readMore: [
      { label: "Official Site", url: "https://www.lbl.gov" },
    ],
  },
  {
    id: 'los-alamos',
    name: "Los Alamos (LANSCE)",
    fullName: "Los Alamos Neutron Science Center",
    type: 'accelerator-laboratory',
    country: "United States",
    lat: 35.869,
    lng: -106.257,
    founded: 1972,
    status: 'active',
    overview: "The Los Alamos Neutron Science Center is built around a half-mile-long proton linear accelerator, opened as the Los Alamos Meson Physics Facility. Its intense beams made it a centre for pion, muon and neutrino physics. The LSND experiment there reported an unexplained excess of electron antineutrinos that still drives searches for sterile neutrinos.",
    specs: [
      { label: "Linear accelerator", value: "Half a mile long, 800 MeV protons", sources: [{ label: "Los Alamos National Laboratory: About LANSCE", url: "https://www.lanl.gov/science-engineering/science-facilities/lansce/about" }] },
    ],
    history: [
      { year: 1972, event: "The accelerator first reaches its design energy of 800 MeV on 9 June 1972.", sources: [{ label: "Los Alamos National Laboratory: 50 years of beaming", url: "https://www.lanl.gov/media/publications/1663/0922-50-years-of-beaming" }] },
      { year: 1996, event: "The LSND experiment reports evidence for muon antineutrinos changing into electron antineutrinos.", sources: [{ label: "LSND Collaboration, Phys. Rev. Lett. 77, 3082 (1996)", url: "https://doi.org/10.1103/PhysRevLett.77.3082" }] },
      { year: 2001, event: "LSND publishes its final result, an excess of electron antineutrino events that standard three-neutrino oscillations cannot explain.", sources: [{ label: "LSND Collaboration, Phys. Rev. D 64, 112007 (2001)", url: "https://doi.org/10.1103/PhysRevD.64.112007" }] },
    ],
    experiments: [
      { id: 'lanl-lsnd', name: "LSND", description: "Liquid Scintillator Neutrino Detector, searching for the appearance of electron antineutrinos in a beam of muon antineutrinos.", topics: ['neutrinos'], sources: [{ label: "LSND Collaboration, Phys. Rev. D 64, 112007 (2001)", url: "https://doi.org/10.1103/PhysRevD.64.112007" }] },
    ],
    keyResults: [
      { year: 2001, discovery: "The LSND Anomaly", description: "The excess of electron antineutrinos would require a neutrino mass difference far larger than those seen elsewhere, hinting at additional, sterile neutrinos.", sources: [{ label: "LSND Collaboration, Phys. Rev. D 64, 112007 (2001)", url: "https://doi.org/10.1103/PhysRevD.64.112007" }] },
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "LANSCE", url: "https://www.lanl.gov/science-engineering/science-facilities/lansce" },
    ],
  },
  {
    id: 'modane',
    name: "Modane (LSM)",
    fullName: "Laboratoire Souterrain de Modane",
    type: 'underground-laboratory',
    country: "France",
    lat: 45.142,
    lng: 6.689,
    founded: 1982,
    status: 'active',
    overview: "The Modane Underground Laboratory sits at the midpoint of the Fréjus road tunnel between France and Italy, under about 1,700 m of rock, which makes it one of the deepest laboratories in Europe. Built for a proton decay experiment, it later hosted the NEMO-3 search for neutrinoless double-beta decay and the EDELWEISS dark matter experiment.",
    specs: [
      { label: "Rock overburden", value: "1,700 m (4,800 m water equivalent)", sources: [{ label: "Piquemal, Modane underground laboratory: status and project, Eur. Phys. J. Plus 127, 110 (2012)", url: "https://ui.adsabs.harvard.edu/abs/2012EPJP..127..110P" }] },
    ],
    history: [
      { year: 2015, event: "NEMO-3 publishes its final search for the neutrinoless double-beta decay of molybdenum-100.", sources: [{ label: "NEMO-3 Collaboration, Phys. Rev. D 92, 072011 (2015)", url: "https://doi.org/10.1103/PhysRevD.92.072011" }] },
      { year: 2016, event: "EDELWEISS-III publishes limits on low-mass dark matter particles.", sources: [{ label: "EDELWEISS Collaboration, JCAP 05 (2016) 019", url: "https://doi.org/10.1088/1475-7516/2016/05/019" }] },
    ],
    experiments: [
      { id: 'lsm-nemo3', name: "NEMO-3", description: "Tracking detector and calorimeter that recorded the two electrons of double-beta decay in thin source foils.", topics: ['neutrinos'], sources: [{ label: "NEMO-3 Collaboration, Phys. Rev. D 92, 072011 (2015)", url: "https://doi.org/10.1103/PhysRevD.92.072011" }] },
      { id: 'lsm-edelweiss', name: "EDELWEISS", description: "Cryogenic germanium detectors measuring heat and ionisation to search for dark matter.", topics: ['dark-matter'], sources: [{ label: "EDELWEISS Collaboration, JCAP 05 (2016) 019", url: "https://doi.org/10.1088/1475-7516/2016/05/019" }] },
    ],
    keyResults: [
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Official Site", url: "https://lsm.in2p3.fr" },
    ],
  },
  {
    id: 'yemilab',
    name: "Yemilab",
    type: 'underground-laboratory',
    country: "South Korea",
    lat: 37.19,
    lng: 128.66,
    founded: 2022,
    status: 'active',
    overview: "Yemilab is South Korea's deep underground laboratory, about 1,000 m below Mount Yemi in Jeongseon, reached through an operating iron mine. Completed in 2022 by the Institute for Basic Science, it takes over from the smaller Yangyang laboratory and is designed for searches for dark matter and neutrinoless double-beta decay.",
    specs: [
      { label: "Depth", value: "About 1,000 m", sources: [{ label: "Park et al., Construction of Yemilab, Front. Phys. 12, 1323991 (2024)", url: "https://doi.org/10.3389/fphy.2024.1323991" }] },
      { label: "Dedicated experimental area", value: "3,000 m³, plus a 6,300 m³ cylindrical pit", sources: [{ label: "Park et al., Construction of Yemilab, Front. Phys. 12, 1323991 (2024)", url: "https://doi.org/10.3389/fphy.2024.1323991" }] },
    ],
    history: [
      { year: 2022, event: "Construction of the laboratory is completed in September 2022.", sources: [{ label: "Park et al., Construction of Yemilab, Front. Phys. 12, 1323991 (2024)", url: "https://doi.org/10.3389/fphy.2024.1323991" }] },
    ],
    experiments: [
      { id: 'yemilab-amore', name: "AMoRE", description: "Search for the neutrinoless double-beta decay of molybdenum-100 with cryogenic crystal detectors, begun at the Yangyang laboratory.", topics: ['neutrinos'], sources: [{ label: "AMoRE Collaboration, Eur. Phys. J. C 79, 791 (2019)", url: "https://doi.org/10.1140/epjc/s10052-019-7279-1" }, { label: "Park et al., Construction of Yemilab, Front. Phys. 12, 1323991 (2024)", url: "https://doi.org/10.3389/fphy.2024.1323991" }] },
    ],
    keyResults: [
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Construction of Yemilab (paper)", url: "https://doi.org/10.3389/fphy.2024.1323991" },
    ],
  },
  {
    id: 'ssc',
    name: "SSC",
    fullName: "Superconducting Super Collider",
    type: 'accelerator-laboratory',
    country: "United States",
    lat: 32.36,
    lng: -96.94,
    founded: 1987,
    status: 'historic',
    overview: "The Superconducting Super Collider was to have been the world's most powerful particle accelerator, a ring 54 miles around near Waxahachie, Texas, colliding protons at 20 TeV per beam. Approved in 1987, it was cancelled by the United States Congress in October 1993 after about two billion dollars had been spent and part of the tunnel had been bored. Its cancellation left the search for the Higgs boson to CERN's Large Hadron Collider.",
    specs: [
      { label: "Planned ring circumference", value: "54 miles (about 87 km)", sources: [{ label: "NPR: U.S. physicists recall brush with supercollider fame (2008)", url: "https://www.npr.org/2008/09/10/94481272/u-s-physicists-recall-brush-with-supercollider-fame" }] },
      { label: "Planned beam energy", value: "20 TeV per beam", sources: [{ label: "Physics Today: A bridge too far, the demise of the Superconducting Super Collider", url: "https://physicstoday.aip.org/features/a-bridge-too-far-the-demise-of-the-superconducting-super-collider" }] },
      { label: "Spent before cancellation", value: "About $2 billion", sources: [{ label: "APS News: October 1993, Congress cancels funding for the SSC", url: "https://aps.org/publications/apsnews/201310/physicshistory.cfm" }] },
    ],
    history: [
      { year: 1987, event: "President Reagan approves the project.", sources: [{ label: "APS News: October 1993, Congress cancels funding for the SSC", url: "https://aps.org/publications/apsnews/201310/physicshistory.cfm" }] },
      { year: 1993, event: "Congress ends funding for the collider in October 1993, and the bill cancelling it is signed on 30 October.", sources: [{ label: "APS News: October 1993, Congress cancels funding for the SSC", url: "https://aps.org/publications/apsnews/201310/physicshistory.cfm" }, { label: "Physics Today: A bridge too far, the demise of the Superconducting Super Collider", url: "https://physicstoday.aip.org/features/a-bridge-too-far-the-demise-of-the-superconducting-super-collider" }] },
    ],
    experiments: [
    ],
    keyResults: [
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Physics Today: the demise of the SSC", url: "https://physicstoday.aip.org/features/a-bridge-too-far-the-demise-of-the-superconducting-super-collider" },
    ],
  },
  {
    id: 'vecc',
    name: "VECC Kolkata",
    fullName: "Variable Energy Cyclotron Centre",
    type: 'nuclear-physics-facility',
    country: "India",
    lat: 22.5958,
    lng: 88.4144,
    founded: 1969,
    status: 'active',
    overview: "The Variable Energy Cyclotron Centre in Kolkata is a research unit of India's Department of Atomic Energy built around cyclotrons. Its room-temperature cyclotron has run since 1977 and a superconducting cyclotron delivers heavy-ion beams; the centre works on experimental nuclear physics, accelerator technology and isotope production.",
    specs: [
      { label: "Cyclotrons", value: "K130 room-temperature, K500 superconducting, and a 30 MeV medical cyclotron", sources: [{ label: "VECC: About", url: "https://www.vecc.gov.in/about-us" }] },
    ],
    history: [
      { year: 1969, event: "Work on the cyclotron begins in Kolkata under the Bhabha Atomic Research Centre, following Homi Bhabha's proposal of 1965.", sources: [{ label: "VECC: About", url: "https://www.vecc.gov.in/about-us" }] },
      { year: 1977, event: "The K130 variable-energy cyclotron is commissioned.", sources: [{ label: "VECC: About", url: "https://www.vecc.gov.in/about-us" }] },
      { year: 1990, event: "VECC becomes an independent unit of the Department of Atomic Energy in May 1990.", sources: [{ label: "VECC: About", url: "https://www.vecc.gov.in/about-us" }] },
    ],
    experiments: [
      { id: 'vecc-k130', name: "K130 cyclotron", description: "Room-temperature variable-energy cyclotron, in operation since 1977.", topics: ['nuclear-structure'], startYear: 1977, sources: [{ label: "VECC: About", url: "https://www.vecc.gov.in/about-us" }] },
      { id: 'vecc-k500', name: "K500 superconducting cyclotron", description: "Superconducting cyclotron delivering heavy-ion beams for basic research.", topics: ['nuclear-structure', 'rare-isotopes'], sources: [{ label: "VECC: About", url: "https://www.vecc.gov.in/about-us" }] },
    ],
    keyResults: [
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Official Site", url: "https://www.vecc.gov.in" },
    ],
  },
  {
    id: 'iuac',
    name: "IUAC New Delhi",
    fullName: "Inter-University Accelerator Centre",
    type: 'nuclear-physics-facility',
    country: "India",
    lat: 28.5403,
    lng: 77.164,
    founded: 1984,
    status: 'active',
    overview: "The Inter-University Accelerator Centre in New Delhi, originally the Nuclear Science Centre, gives researchers from universities across India access to accelerator beams. Its 15UD Pelletron tandem accelerator, later boosted by a superconducting linac, serves nuclear physics, materials science and radiation biology.",
    specs: [
      { label: "Pelletron", value: "15UD tandem, terminal potential up to 16 MV", sources: [{ label: "IUAC: Past, present and future, a perspective", url: "https://iuac.res.in/iuacoldwebsite/aboutus/history/index.html" }] },
    ],
    history: [
      { year: 1984, event: "The concept of an inter-university centre is approved by the Prime Minister on 19 June 1984.", sources: [{ label: "IUAC: Key dates", url: "https://www.iuac.res.in/iuacoldwebsite/aboutus/history/dates.pdf" }] },
      { year: 1990, event: "The Pelletron accelerator is commissioned and dedicated to the nation on 19 December 1990; the first user experiment follows in July 1991.", sources: [{ label: "IUAC: Key dates", url: "https://www.iuac.res.in/iuacoldwebsite/aboutus/history/dates.pdf" }] },
      { year: 2004, event: "The first module of the superconducting linac is commissioned.", sources: [{ label: "IUAC: Key dates", url: "https://www.iuac.res.in/iuacoldwebsite/aboutus/history/dates.pdf" }] },
      { year: 2005, event: "The centre is renamed the Inter-University Accelerator Centre.", sources: [{ label: "IUAC: Key dates", url: "https://www.iuac.res.in/iuacoldwebsite/aboutus/history/dates.pdf" }] },
    ],
    experiments: [
      { id: 'iuac-pelletron', name: "15UD Pelletron", description: "Tandem electrostatic accelerator providing ion beams for nuclear physics, materials science and radiation biology.", topics: ['nuclear-structure'], startYear: 1990, sources: [{ label: "IUAC: Key dates", url: "https://www.iuac.res.in/iuacoldwebsite/aboutus/history/dates.pdf" }, { label: "IUAC: Past, present and future, a perspective", url: "https://iuac.res.in/iuacoldwebsite/aboutus/history/index.html" }] },
      { id: 'iuac-inga', name: "INGA", description: "Indian National Gamma Array for gamma-ray spectroscopy of nuclei, commissioned at IUAC in 2008.", topics: ['nuclear-structure'], startYear: 2008, sources: [{ label: "IUAC: Key dates", url: "https://www.iuac.res.in/iuacoldwebsite/aboutus/history/dates.pdf" }] },
    ],
    keyResults: [
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Official Site", url: "https://www.iuac.res.in" },
    ],
  },
  {
    id: 'ino',
    name: "INO",
    fullName: "India-based Neutrino Observatory",
    type: 'neutrino-observatory',
    country: "India",
    lat: 9.955,
    lng: 77.283,
    founded: 2015,
    status: 'planned',
    overview: "The India-based Neutrino Observatory is a proposed underground laboratory in the Bodi West Hills of Theni district, Tamil Nadu, the intended successor to the Kolar Gold Fields experiments. Its main detector, ICAL, would be a 50-kilotonne magnetised iron calorimeter able to tell neutrinos from antineutrinos. The project has been held up for years by legal challenges, and its funding was reported terminated in 2023, so its future is uncertain.",
    specs: [
      { label: "ICAL detector mass", value: "About 50 kilotonnes of magnetised iron", sources: [{ label: "ICAL Collaboration, Physics potential of the ICAL detector at INO, Pramana 88, 79 (2017)", url: "https://doi.org/10.1007/s12043-017-1373-4" }] },
    ],
    history: [
      { year: 2017, event: "The collaboration publishes the physics case for the ICAL detector.", sources: [{ label: "ICAL Collaboration, Physics potential of the ICAL detector at INO, Pramana 88, 79 (2017)", url: "https://doi.org/10.1007/s12043-017-1373-4" }] },
      { year: 2023, event: "With the project stalled by lawsuits and court orders, its funding is reported to have been terminated as of March 2023.", sources: [{ label: "ThePrint: Kolar Gold Fields and India's neutrino legacy", url: "https://theprint.in/science/how-experiments-at-karnatakas-kolar-gold-fields-are-last-remaining-piece-of-indias-neutrino-legacy/2361654/" }] },
    ],
    experiments: [
      { id: 'ino-ical', name: "ICAL", description: "Iron Calorimeter: a magnetised detector designed to study atmospheric neutrinos and antineutrinos separately and so determine the neutrino mass ordering.", topics: ['neutrinos'], sources: [{ label: "ICAL Collaboration, Physics potential of the ICAL detector at INO, Pramana 88, 79 (2017)", url: "https://doi.org/10.1007/s12043-017-1373-4" }] },
    ],
    keyResults: [
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "ICAL physics paper", url: "https://doi.org/10.1007/s12043-017-1373-4" },
    ],
  },
  {
    id: 'ganil',
    name: "GANIL",
    fullName: "Grand Accélérateur National d’Ions Lourds",
    type: 'nuclear-physics-facility',
    country: "France",
    lat: 49.214,
    lng: -0.364,
    founded: 1976,
    status: 'active',
    overview: "GANIL in Caen is France's national heavy-ion laboratory, run jointly by the CEA and the CNRS. Its coupled cyclotrons have delivered heavy-ion beams since 1983, and the SPIRAL2 superconducting linear accelerator, which began commissioning in 2019, adds very intense beams of light ions and neutrons.",
    specs: [
    ],
    history: [
      { year: 1982, event: "The first beam is extracted from the second separated-sector cyclotron on 19 November 1982; experiments begin the following year.", sources: [{ label: "GANIL status report, Cyclotrons 2022 proceedings (TUAO01)", url: "https://accelconf.web.cern.ch/cyclotrons2022/papers/tuao01.pdf" }] },
      { year: 2019, event: "Commissioning of the SPIRAL2 superconducting linear accelerator begins.", sources: [{ label: "GANIL status report, Cyclotrons 2022 proceedings (TUAO01)", url: "https://accelconf.web.cern.ch/cyclotrons2022/papers/tuao01.pdf" }, { label: "CERN Courier: Spiralling into the femtoscale", url: "https://cerncourier.com/a/spiralling-into-the-femtoscale/" }] },
    ],
    experiments: [
      { id: 'ganil-cyclotrons', name: "GANIL cyclotrons", description: "Coupled separated-sector cyclotrons accelerating heavy ions for nuclear physics.", topics: ['nuclear-structure', 'rare-isotopes'], startYear: 1983, sources: [{ label: "GANIL status report, Cyclotrons 2022 proceedings (TUAO01)", url: "https://accelconf.web.cern.ch/cyclotrons2022/papers/tuao01.pdf" }] },
      { id: 'ganil-spiral2', name: "SPIRAL2", description: "Superconducting linear accelerator for intense beams of protons, deuterons and light ions, feeding the Neutrons for Science facility.", topics: ['nuclear-structure', 'rare-isotopes'], startYear: 2019, sources: [{ label: "GANIL status report, Cyclotrons 2022 proceedings (TUAO01)", url: "https://accelconf.web.cern.ch/cyclotrons2022/papers/tuao01.pdf" }, { label: "CERN Courier: Spiralling into the femtoscale", url: "https://cerncourier.com/a/spiralling-into-the-femtoscale/" }] },
    ],
    keyResults: [
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Official Site", url: "https://www.ganil-spiral2.eu" },
    ],
  },

  {
    id: 'savannah-river',
    name: "Savannah River",
    fullName: "Savannah River reactor neutrino experiment",
    type: 'neutrino-observatory',
    country: "United States",
    lat: 33.25,
    lng: -81.65,
    founded: 1956,
    status: 'historic',
    overview: "At the Savannah River Plant in South Carolina, Clyde Cowan and Frederick Reines made the first detection of the neutrino in 1956, a quarter of a century after Wolfgang Pauli proposed the particle. Their detector, set beside one of the plant's powerful reactors, recorded the flashes produced when antineutrinos struck protons in a tank of water. Reines received the Nobel Prize for the discovery in 1995.",
    specs: [
    ],
    history: [
      { year: 1956, event: "Cowan and Reines detect neutrinos from the plant's P reactor, and on 14 June 1956 send a telegram to Pauli announcing the result.", sources: [{ label: "Cowan, Reines et al., Detection of the Free Neutrino: a Confirmation, Science 124, 103 (1956)", url: "https://doi.org/10.1126/science.124.3212.103" }, { label: "CERN Courier: Ghosts in the machine", url: "https://cerncourier.com/a/ghosts-in-the-machine/" }] },
    ],
    experiments: [
      { id: 'srp-poltergeist', name: "Project Poltergeist", description: "Water and liquid-scintillator detector that recorded the inverse beta decay of protons struck by reactor antineutrinos.", topics: ['neutrinos'], startYear: 1956, sources: [{ label: "Cowan, Reines et al., Detection of the Free Neutrino: a Confirmation, Science 124, 103 (1956)", url: "https://doi.org/10.1126/science.124.3212.103" }, { label: "CERN Courier: Ghosts in the machine", url: "https://cerncourier.com/a/ghosts-in-the-machine/" }] },
    ],
    keyResults: [
      { year: 1956, discovery: "First Detection of the Neutrino", description: "The paired signals of a positron and a neutron confirmed that neutrinos from a reactor interact with protons as predicted. Nobel Prize 1995.", sources: [{ label: "Cowan, Reines et al., Detection of the Free Neutrino: a Confirmation, Science 124, 103 (1956)", url: "https://doi.org/10.1126/science.124.3212.103" }, { label: "Nobel Prize in Physics 1995", url: "https://www.nobelprize.org/prizes/physics/1995/summary/" }] },
    ],
    importantPeople: [
      { name: "Frederick Reines", contribution: "Co-led the experiment with Clyde Cowan; Nobel Prize in Physics 1995.", sources: [{ label: "Nobel Prize in Physics 1995", url: "https://www.nobelprize.org/prizes/physics/1995/summary/" }] },
    ],
    readMore: [
      { label: "The 1956 discovery paper", url: "https://doi.org/10.1126/science.124.3212.103" },
    ],
  },
  {
    id: 'cornell',
    name: "Cornell (CESR)",
    fullName: "Wilson Laboratory, Cornell University",
    type: 'accelerator-laboratory',
    country: "United States",
    lat: 42.445,
    lng: -76.473,
    founded: 1979,
    status: 'active',
    overview: "Cornell University's Wilson Laboratory houses CESR, a 768-metre electron-positron storage ring completed in 1979. For three decades its CLEO detector was a leading source of knowledge about bottom quarks, including the first observations of rare 'penguin' decays. Collider physics ended in 2008 and the ring now serves as an X-ray source.",
    specs: [
      { label: "CESR circumference", value: "768 m", sources: [{ label: "Cornell CLASSE: CESR", url: "https://www.classe.cornell.edu/public/CESR" }] },
    ],
    history: [
      { year: 1979, event: "The Cornell Electron Storage Ring is completed.", sources: [{ label: "Cornell CLASSE: CESR", url: "https://www.classe.cornell.edu/public/CESR" }] },
      { year: 1980, event: "CLEO observes a fourth upsilon state, the Upsilon(4S), which decays into pairs of B mesons.", sources: [{ label: "CLEO Collaboration, Phys. Rev. Lett. 45, 219 (1980)", url: "https://doi.org/10.1103/PhysRevLett.45.219" }] },
      { year: 1993, event: "CLEO reports the first observation of a 'penguin' decay of a B meson, into a K* meson and a photon.", sources: [{ label: "CLEO Collaboration, Phys. Rev. Lett. 71, 674 (1993)", url: "https://doi.org/10.1103/PhysRevLett.71.674" }] },
      { year: 1995, event: "CLEO measures the overall rate at which bottom quarks decay to a strange quark and a photon.", sources: [{ label: "CLEO Collaboration, Phys. Rev. Lett. 74, 2885 (1995)", url: "https://doi.org/10.1103/PhysRevLett.74.2885" }] },
    ],
    experiments: [
      { id: 'cornell-cleo', name: "CLEO", description: "General-purpose detector at CESR for studying bottom and charm quarks produced in electron-positron collisions.", topics: ['b-physics', 'cp-violation'], startYear: 1979, endYear: 2008, sources: [{ label: "The CLEO II detector, Nucl. Instrum. Meth. A 320, 66 (1992)", url: "https://doi.org/10.1016/0168-9002(92)90770-5" }, { label: "CLEO Collaboration, Phys. Rev. Lett. 45, 219 (1980)", url: "https://doi.org/10.1103/PhysRevLett.45.219" }] },
    ],
    keyResults: [
      { year: 1993, discovery: "First Observation of Penguin Decays", description: "Decays of B mesons through quantum loops, sensitive to particles too heavy to produce directly, were seen for the first time.", sources: [{ label: "CLEO Collaboration, Phys. Rev. Lett. 71, 674 (1993)", url: "https://doi.org/10.1103/PhysRevLett.71.674" }, { label: "CLEO Collaboration, Phys. Rev. Lett. 74, 2885 (1995)", url: "https://doi.org/10.1103/PhysRevLett.74.2885" }] },
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Official Site", url: "https://www.classe.cornell.edu" },
    ],
  },
  {
    id: 'chacaltaya',
    name: "Chacaltaya",
    fullName: "Chacaltaya Cosmic Ray Laboratory",
    type: 'cosmic-ray-observatory',
    country: "Bolivia",
    lat: -16.353,
    lng: -68.131,
    founded: 1952,
    status: 'active',
    overview: "The Chacaltaya laboratory stands at about 5,220 m in the Bolivian Andes near La Paz, the highest cosmic-ray laboratory in continuous operation. Photographic plates exposed on the mountain by César Lattes in 1947 confirmed the existence of the pion, the particle that carries the strong force between protons and neutrons. The laboratory was established there a few years later.",
    specs: [
      { label: "Altitude", value: "5,220 m", sources: [{ label: "CERN Courier: High energies and high altitudes", url: "https://cerncourier.com/a/high-energies-and-high-altitudes/" }] },
    ],
    history: [
      { year: 1947, event: "Photographic emulsions exposed to cosmic rays at high altitude, including plates Lattes took to Chacaltaya, reveal the pion and its decay into a muon.", sources: [{ label: "Lattes, Muirhead, Occhialini and Powell, Nature 159, 694 (1947)", url: "https://doi.org/10.1038/159694a0" }, { label: "Lattes, Occhialini and Powell, Nature 160, 453 (1947)", url: "https://doi.org/10.1038/160453a0" }, { label: "CERN Courier: High energies and high altitudes", url: "https://cerncourier.com/a/high-energies-and-high-altitudes/" }] },
    ],
    experiments: [
      { id: 'chacaltaya-emulsions', name: "Emulsion exposures", description: "Photographic emulsion plates left at high altitude to record the tracks of cosmic-ray particles.", topics: ['cosmic-rays'], startYear: 1947, sources: [{ label: "Lattes, Occhialini and Powell, Nature 160, 453 (1947)", url: "https://doi.org/10.1038/160453a0" }] },
    ],
    keyResults: [
      { year: 1947, discovery: "Discovery of the Pion", description: "Tracks in the emulsions showed a meson stopping and decaying into a lighter one. Cecil Powell received the 1950 Nobel Prize for the method and these discoveries.", sources: [{ label: "Lattes, Muirhead, Occhialini and Powell, Nature 159, 694 (1947)", url: "https://doi.org/10.1038/159694a0" }, { label: "Lattes, Occhialini and Powell, Nature 160, 453 (1947)", url: "https://doi.org/10.1038/160453a0" }, { label: "Nobel Prize in Physics 1950", url: "https://www.nobelprize.org/prizes/physics/1950/summary/" }] },
    ],
    importantPeople: [
      { name: "César Lattes", contribution: "Brazilian physicist who co-discovered the pion and exposed the decisive plates at Chacaltaya.", sources: [{ label: "Lattes, Occhialini and Powell, Nature 160, 453 (1947)", url: "https://doi.org/10.1038/160453a0" }, { label: "CERN Courier: High energies and high altitudes", url: "https://cerncourier.com/a/high-energies-and-high-altitudes/" }] },
    ],
    readMore: [
      { label: "Official Site", url: "https://rayoscosmicos.umsa.bo/" },
    ],
  },
  {
    id: 'soudan',
    name: "Soudan",
    fullName: "Soudan Underground Laboratory",
    type: 'underground-laboratory',
    country: "United States",
    lat: 47.82,
    lng: -92.242,
    founded: 1981,
    status: 'historic',
    overview: "The Soudan Underground Laboratory occupied a former iron mine in northern Minnesota, about 700 m below ground. It held the far detector of the MINOS experiment, which studied a neutrino beam sent 735 km through the Earth from Fermilab, and the CDMS II dark matter experiment.",
    specs: [
      { label: "MINOS far detector mass", value: "5,400 tons", sources: [{ label: "The magnetized steel and scintillator calorimeters of the MINOS experiment (arXiv:0805.3170)", url: "https://arxiv.org/abs/0805.3170" }] },
      { label: "Distance from Fermilab", value: "735 km", sources: [{ label: "MINOS Collaboration, Phys. Rev. Lett. 97, 191801 (2006)", url: "https://doi.org/10.1103/PhysRevLett.97.191801" }] },
    ],
    history: [
      { year: 2006, event: "MINOS reports the disappearance of muon neutrinos between Fermilab and Soudan, confirming neutrino oscillations with an accelerator beam.", sources: [{ label: "MINOS Collaboration, Phys. Rev. Lett. 97, 191801 (2006)", url: "https://doi.org/10.1103/PhysRevLett.97.191801" }] },
      { year: 2010, event: "CDMS II publishes the final results of its dark matter search, with two candidate events consistent with background.", sources: [{ label: "CDMS II Collaboration, Science 327, 1619 (2010)", url: "https://doi.org/10.1126/science.1186112" }] },
    ],
    experiments: [
      { id: 'soudan-minos', name: "MINOS far detector", description: "Magnetised steel and scintillator calorimeter measuring the neutrino beam from Fermilab.", topics: ['neutrinos'], sources: [{ label: "The magnetized steel and scintillator calorimeters of the MINOS experiment (arXiv:0805.3170)", url: "https://arxiv.org/abs/0805.3170" }, { label: "MINOS Collaboration, Phys. Rev. Lett. 97, 191801 (2006)", url: "https://doi.org/10.1103/PhysRevLett.97.191801" }] },
      { id: 'soudan-cdms', name: "CDMS II", description: "Cryogenic germanium and silicon detectors searching for dark matter particles.", topics: ['dark-matter'], sources: [{ label: "CDMS II Collaboration, Science 327, 1619 (2010)", url: "https://doi.org/10.1126/science.1186112" }] },
    ],
    keyResults: [
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "MINOS detector paper", url: "https://arxiv.org/abs/0805.3170" },
    ],
  },
  {
    id: 'reno',
    name: "RENO",
    fullName: "Reactor Experiment for Neutrino Oscillation",
    type: 'neutrino-observatory',
    country: "South Korea",
    lat: 35.404,
    lng: 126.416,
    founded: 2011,
    status: 'active',
    overview: "RENO measures antineutrinos from the six reactors of the Hanbit (formerly Yonggwang) nuclear power plant on Korea's west coast. Two identical detectors, one near the reactors and one farther away, compare the neutrino rate at different distances. In 2012 RENO was one of three experiments to measure the mixing angle theta-13.",
    specs: [
      { label: "Detector distances", value: "294 m (near) and 1,383 m (far) from the reactor array", sources: [{ label: "RENO Collaboration, Phys. Rev. Lett. 108, 191802 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.191802" }] },
      { label: "Reactors", value: "Six", sources: [{ label: "RENO Collaboration, Phys. Rev. Lett. 108, 191802 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.191802" }] },
    ],
    history: [
      { year: 2011, event: "Data-taking begins with both detectors in August 2011.", sources: [{ label: "RENO Collaboration, Phys. Rev. Lett. 108, 191802 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.191802" }] },
      { year: 2012, event: "RENO observes the disappearance of reactor antineutrinos and measures theta-13.", sources: [{ label: "RENO Collaboration, Phys. Rev. Lett. 108, 191802 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.191802" }] },
    ],
    experiments: [
      { id: 'reno-detectors', name: "RENO detectors", description: "Two identical gadolinium-loaded liquid-scintillator detectors at different distances from the reactors.", topics: ['neutrinos'], startYear: 2011, sources: [{ label: "RENO Collaboration, Phys. Rev. Lett. 108, 191802 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.191802" }, { label: "RENO: An Experiment for Neutrino Oscillation Parameter theta_13 Using Reactor Neutrinos at Yonggwang (arXiv:1003.1391)", url: "https://arxiv.org/abs/1003.1391" }] },
    ],
    keyResults: [
      { year: 2012, discovery: "Measurement of theta-13", description: "The far detector saw fewer antineutrinos than the near detector predicted, giving a clear measurement of the last unknown mixing angle.", sources: [{ label: "RENO Collaboration, Phys. Rev. Lett. 108, 191802 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.191802" }] },
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "RENO design paper", url: "https://arxiv.org/abs/1003.1391" },
    ],
  },
  {
    id: 'double-chooz',
    name: "Double Chooz",
    type: 'neutrino-observatory',
    country: "France",
    lat: 50.087,
    lng: 4.79,
    founded: 2011,
    status: 'historic',
    overview: "Double Chooz studied antineutrinos from the two reactors of the Chooz nuclear power plant in the French Ardennes. It followed the earlier CHOOZ experiment at the same site, whose limit on the mixing angle theta-13 stood for more than a decade, and in 2012 it published the first reactor indication that the angle is not zero.",
    specs: [
      { label: "Detector distances", value: "About 400 m (near) and 1,050 m (far) from the reactors", sources: [{ label: "Double Chooz: Searching for theta13 with reactor neutrinos (arXiv:1105.6079)", url: "https://arxiv.org/abs/1105.6079" }] },
    ],
    history: [
      { year: 1999, event: "The CHOOZ experiment publishes its limits on neutrino oscillations, long the tightest constraint on theta-13.", sources: [{ label: "CHOOZ Collaboration, Phys. Lett. B 466, 415 (1999)", url: "https://doi.org/10.1016/S0370-2693(99)01072-2" }] },
      { year: 2012, event: "Double Chooz publishes an indication of reactor antineutrino disappearance from its far detector.", sources: [{ label: "Double Chooz Collaboration, Phys. Rev. Lett. 108, 131801 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.131801" }] },
    ],
    experiments: [
      { id: 'dchooz-detectors', name: "Double Chooz detectors", description: "Gadolinium-loaded liquid-scintillator detectors near and far from the reactor cores.", topics: ['neutrinos'], startYear: 2011, sources: [{ label: "Double Chooz: Searching for theta13 with reactor neutrinos (arXiv:1105.6079)", url: "https://arxiv.org/abs/1105.6079" }, { label: "Double Chooz Collaboration, Phys. Rev. Lett. 108, 131801 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.131801" }] },
    ],
    keyResults: [
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Double Chooz overview paper", url: "https://arxiv.org/abs/1105.6079" },
    ],
  },
  {
    id: 'flys-eye',
    name: "Fly’s Eye / HiRes",
    fullName: "Fly’s Eye and High Resolution Fly’s Eye",
    type: 'cosmic-ray-observatory',
    country: "United States",
    lat: 40.2,
    lng: -112.84,
    founded: 1981,
    status: 'historic',
    overview: "The Fly's Eye detectors in the Utah desert pioneered the fluorescence technique, watching the faint ultraviolet glow that cosmic-ray air showers leave in the night sky. In 1991 the original detector recorded the most energetic cosmic ray seen up to that time, the 'Oh-My-God particle'. Its successor, HiRes, made the first observation of the predicted suppression of the cosmic-ray spectrum at the highest energies.",
    specs: [
    ],
    history: [
      { year: 1991, event: "On 15 October 1991 the Fly's Eye records a cosmic ray with an energy of about 3 × 10²⁰ eV.", sources: [{ label: "Bird et al., Astrophys. J. 441, 144 (1995)", url: "https://doi.org/10.1086/175344" }] },
      { year: 2008, event: "HiRes publishes the first observation of the Greisen-Zatsepin-Kuzmin suppression.", sources: [{ label: "HiRes Collaboration, Phys. Rev. Lett. 100, 101101 (2008)", url: "https://doi.org/10.1103/PhysRevLett.100.101101" }] },
    ],
    experiments: [
      { id: 'hires', name: "HiRes", description: "Two fluorescence detector sites observing air showers in stereo.", topics: ['cosmic-rays'], startYear: 1997, endYear: 2006, sources: [{ label: "HiRes Collaboration, Phys. Rev. Lett. 100, 101101 (2008)", url: "https://doi.org/10.1103/PhysRevLett.100.101101" }] },
    ],
    keyResults: [
      { year: 1991, discovery: "The Oh-My-God Particle", description: "A single cosmic ray carried an energy far beyond the limit expected for particles travelling cosmological distances.", sources: [{ label: "Bird et al., Astrophys. J. 441, 144 (1995)", url: "https://doi.org/10.1086/175344" }] },
      { year: 2008, discovery: "The GZK Suppression", description: "The cosmic-ray flux was seen to fall sharply above about 6 × 10¹⁹ eV, as predicted from collisions with the cosmic microwave background.", sources: [{ label: "HiRes Collaboration, Phys. Rev. Lett. 100, 101101 (2008)", url: "https://doi.org/10.1103/PhysRevLett.100.101101" }] },
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "HiRes GZK paper", url: "https://arxiv.org/abs/astro-ph/0703099" },
    ],
  },
  {
    id: 'agasa',
    name: "AGASA",
    fullName: "Akeno Giant Air Shower Array",
    type: 'cosmic-ray-observatory',
    country: "Japan",
    lat: 35.787,
    lng: 138.476,
    founded: 1990,
    status: 'historic',
    overview: "AGASA, at Akeno in Yamanashi Prefecture, was for a decade the world's largest cosmic-ray detector: 111 scintillation detectors spread over about 100 square kilometres. It reported cosmic rays above the energy at which the spectrum was predicted to cut off, a puzzle that motivated the Pierre Auger Observatory and the Telescope Array.",
    specs: [
      { label: "Array", value: "111 surface detectors over about 100 km²", sources: [{ label: "AGASA Collaboration, Phys. Rev. Lett. 81, 1163 (1998)", url: "https://doi.org/10.1103/PhysRevLett.81.1163" }] },
    ],
    history: [
      { year: 1990, event: "The array begins collecting data in February 1990.", sources: [{ label: "AGASA Collaboration, Phys. Rev. Lett. 81, 1163 (1998)", url: "https://doi.org/10.1103/PhysRevLett.81.1163" }] },
      { year: 1998, event: "AGASA reports that the cosmic-ray energy spectrum extends beyond the predicted Greisen-Zatsepin-Kuzmin cutoff.", sources: [{ label: "AGASA Collaboration, Phys. Rev. Lett. 81, 1163 (1998)", url: "https://doi.org/10.1103/PhysRevLett.81.1163" }] },
    ],
    experiments: [
      { id: 'agasa-array', name: "AGASA array", description: "Surface array of plastic scintillators measuring the particle density of giant air showers.", topics: ['cosmic-rays'], startYear: 1990, sources: [{ label: "AGASA Collaboration, Phys. Rev. Lett. 81, 1163 (1998)", url: "https://doi.org/10.1103/PhysRevLett.81.1163" }] },
    ],
    keyResults: [
      { year: 1998, discovery: "Cosmic Rays Beyond the GZK Cutoff", description: "Events above 10²⁰ eV appeared to continue the spectrum without the expected cutoff; later, larger observatories did find a suppression.", sources: [{ label: "AGASA Collaboration, Phys. Rev. Lett. 81, 1163 (1998)", url: "https://doi.org/10.1103/PhysRevLett.81.1163" }] },
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "AGASA spectrum paper", url: "https://doi.org/10.1103/PhysRevLett.81.1163" },
    ],
  },
  {
    id: 'tibet-asgamma',
    name: "Tibet ASγ",
    fullName: "Tibet Air Shower Array",
    type: 'cosmic-ray-observatory',
    country: "China",
    lat: 30.102,
    lng: 90.522,
    founded: 1990,
    status: 'active',
    overview: "The Tibet air shower array at Yangbajing, 4,300 m above sea level, is a Chinese-Japanese experiment that has observed cosmic rays and gamma rays since 1990. Underground muon detectors added in 2014 let it separate gamma rays from the far more numerous cosmic rays, and with them it detected the first photons above 100 TeV from an astrophysical source.",
    specs: [
      { label: "Altitude", value: "4,300 m", sources: [{ label: "Tibet ASγ: Dawn of sub-PeV gamma-ray astronomy, PoS(ECRS)049", url: "https://pos.sissa.it/421/049" }] },
      { label: "Array area", value: "65,700 m², with about 600 scintillation detectors", sources: [{ label: "Tibet ASγ: Dawn of sub-PeV gamma-ray astronomy, PoS(ECRS)049", url: "https://pos.sissa.it/421/049" }] },
    ],
    history: [
      { year: 1990, event: "The air shower array begins operating at Yangbajing.", sources: [{ label: "Tibet ASγ: Dawn of sub-PeV gamma-ray astronomy, PoS(ECRS)049", url: "https://pos.sissa.it/421/049" }] },
      { year: 2014, event: "An underground muon detector array is added, extending sensitivity to gamma rays above 100 TeV.", sources: [{ label: "Tibet ASγ: Dawn of sub-PeV gamma-ray astronomy, PoS(ECRS)049", url: "https://pos.sissa.it/421/049" }] },
      { year: 2019, event: "The experiment reports the first photons above 100 TeV from an astrophysical source, the Crab Nebula.", sources: [{ label: "Tibet ASγ Collaboration, Phys. Rev. Lett. 123, 051101 (2019)", url: "https://doi.org/10.1103/PhysRevLett.123.051101" }] },
      { year: 2021, event: "It detects diffuse gamma rays of nearly PeV energy from the disc of the Milky Way.", sources: [{ label: "Tibet ASγ Collaboration, Phys. Rev. Lett. 126, 141101 (2021)", url: "https://doi.org/10.1103/PhysRevLett.126.141101" }] },
    ],
    experiments: [
      { id: 'tibet-array', name: "Tibet air shower array", description: "Scintillation detector array with underground water-Cherenkov muon detectors.", topics: ['cosmic-rays'], startYear: 1990, sources: [{ label: "Tibet ASγ: Dawn of sub-PeV gamma-ray astronomy, PoS(ECRS)049", url: "https://pos.sissa.it/421/049" }] },
    ],
    keyResults: [
      { year: 2021, discovery: "Sub-PeV Gamma Rays from the Galactic Disc", description: "Diffuse gamma rays up to nearly a PeV are evidence that cosmic rays are accelerated to PeV energies within our Galaxy.", sources: [{ label: "Tibet ASγ Collaboration, Phys. Rev. Lett. 126, 141101 (2021)", url: "https://doi.org/10.1103/PhysRevLett.126.141101" }] },
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "Overview paper", url: "https://pos.sissa.it/421/049" },
    ],
  },
  {
    id: 'kascade',
    name: "KASCADE",
    fullName: "Karlsruhe Shower Core and Array Detector",
    type: 'cosmic-ray-observatory',
    country: "Germany",
    lat: 49.099,
    lng: 8.438,
    founded: 1996,
    status: 'historic',
    overview: "KASCADE, on the campus of what is now the Karlsruhe Institute of Technology, measured cosmic-ray air showers in the energy range of the 'knee', where the cosmic-ray spectrum steepens. By recording several components of each shower at once, it showed that the knee is caused by the fading of the lightest nuclei.",
    specs: [
      { label: "Array", value: "252 detector stations on a 200 m × 200 m grid", sources: [{ label: "Galactic cosmic rays and the knee: results from the KASCADE experiment (arXiv:astro-ph/0509253)", url: "https://arxiv.org/abs/astro-ph/0509253" }, { label: "The cosmic-ray experiment KASCADE, Nucl. Instrum. Meth. A 513, 490 (2003)", url: "https://doi.org/10.1016/S0168-9002(03)02076-X" }] },
    ],
    history: [
      { year: 1996, event: "KASCADE begins operating.", sources: [{ label: "Galactic cosmic rays and the knee: results from the KASCADE experiment (arXiv:astro-ph/0509253)", url: "https://arxiv.org/abs/astro-ph/0509253" }] },
      { year: 2005, event: "KASCADE publishes energy spectra for separate groups of elements, showing that the knee comes from light nuclei.", sources: [{ label: "KASCADE Collaboration, Astropart. Phys. 24, 1 (2005)", url: "https://doi.org/10.1016/j.astropartphys.2005.04.001" }] },
    ],
    experiments: [
      { id: 'kascade-array', name: "KASCADE array", description: "Detector stations measuring the electrons and muons of air showers, with a central hadron calorimeter.", topics: ['cosmic-rays'], startYear: 1996, sources: [{ label: "The cosmic-ray experiment KASCADE, Nucl. Instrum. Meth. A 513, 490 (2003)", url: "https://doi.org/10.1016/S0168-9002(03)02076-X" }] },
    ],
    keyResults: [
      { year: 2005, discovery: "Origin of the Knee", description: "The steepening of the spectrum was traced to a drop in protons and helium nuclei, with heavier elements continuing to higher energy.", sources: [{ label: "KASCADE Collaboration, Astropart. Phys. 24, 1 (2005)", url: "https://doi.org/10.1016/j.astropartphys.2005.04.001" }, { label: "Galactic cosmic rays and the knee: results from the KASCADE experiment (arXiv:astro-ph/0509253)", url: "https://arxiv.org/abs/astro-ph/0509253" }] },
    ],
    importantPeople: [
    ],
    readMore: [
      { label: "KASCADE detector paper", url: "https://doi.org/10.1016/S0168-9002(03)02076-X" },
    ],
  },
];
