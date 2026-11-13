import type { Facility } from '../../types/facility';

const facility: Facility = {
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
  images: [
    {
      file: 'aerial.jpg',
      width: 1600,
      height: 1067,
      alt: "Aerial view of a research campus on both banks of a river, with a large ring-shaped building.",
      caption: "The Paul Scherrer Institute on both banks of the Aare, May 2016.",
      credit: "Paul Scherrer Institute",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Luftbild_PSI_Mai_2016.jpg",
    },
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
};

export default facility;
