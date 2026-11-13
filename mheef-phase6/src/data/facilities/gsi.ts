import type { Facility } from '../../types/facility';

const facility: Facility = {
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
  images: [
    {
      file: 'south-building.jpg',
      width: 1600,
      height: 1200,
      alt: "An office building behind a row of national flags, with an accelerator component displayed on the lawn.",
      caption: "The south building of GSI in Darmstadt, 2011.",
      credit: "commander-pirx",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:GSI-Darmstadt-S%C3%BCdbau.jpg",
    },
    {
      file: 'fair-construction.jpg',
      width: 1600,
      height: 668,
      alt: "A large excavated building site surrounded by forest.",
      caption: "The construction site of FAIR beside GSI, April 2018.",
      credit: "Ekrem Canli",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:FAIR_Darmstadt_Apr2018.jpg",
    },
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
};

export default facility;
