import type { Facility } from '../../types/facility';

const facility: Facility = {
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
};

export default facility;
