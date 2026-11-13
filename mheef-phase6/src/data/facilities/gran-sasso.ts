import type { Facility } from '../../types/facility';

const facility: Facility = {
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
};

export default facility;
