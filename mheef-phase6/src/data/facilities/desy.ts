import type { Facility } from '../../types/facility';

const facility: Facility = {
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
  images: [
    {
      file: 'hera-tunnel.jpg',
      width: 1600,
      height: 1084,
      alt: "Two accelerator beam lines, one above the other, running down a tunnel.",
      caption: "The HERA tunnel, with the superconducting magnets of the proton ring above the electron ring.",
      credit: "DESY",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:HERA-Tunnel.jpg",
    },
    {
      file: 'synchrotron-1965.jpg',
      width: 1600,
      height: 1229,
      alt: "Black-and-white aerial photograph of a circular accelerator building and halls.",
      caption: "DESY’s first accelerator, a synchrotron 100 metres in diameter, in 1965.",
      credit: "DESY",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Luftbild_DESY-Synchrotron.jpg",
    },
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
};

export default facility;
