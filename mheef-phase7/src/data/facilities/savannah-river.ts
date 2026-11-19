import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'savannah-river',
  name: "Savannah River",
  fullName: "Savannah River reactor neutrino experiment",
  type: 'neutrino-observatory',
  country: "United States",
  lat: 33.2288,
  lng: -81.5811,
  founded: 1956,
  location: { represents: "P Reactor, Savannah River Site, where the detector stood", sources: [{ label: "APS Historic Site: Savannah River Site", url: "https://www.aps.org/funding-recognition/historic-sites/savannah" }, { label: "OpenStreetMap: P Reactor", url: "https://www.openstreetmap.org/way/545862621" }] },
  foundedBasis: { meaning: "first-operation", sources: [{ label: "CERN Courier: Ghosts in the machine", url: "https://cerncourier.com/a/ghosts-in-the-machine/" }] },
  status: 'historic',
  overview: "At the Savannah River Plant in South Carolina, Clyde Cowan and Frederick Reines made the first detection of the neutrino, the particle Wolfgang Pauli had proposed to explain beta decay. Their experiment ran beside the plant's P Reactor, a new, powerful fission reactor, for a total of 1,371 hours in 1956; its targets were tanks of water with added cadmium chloride, sandwiched between layers of liquid scintillator, which recorded the signals produced when antineutrinos struck protons. On 14 June 1956 they telegraphed Pauli that they had detected neutrinos, and Reines received the Nobel Prize in Physics for the discovery in 1995.",
  overviewSources: [{ label: "CERN Courier: Ghosts in the machine", url: "https://cerncourier.com/a/ghosts-in-the-machine/" }, { label: "Cowan, Reines et al., Detection of the Free Neutrino: a Confirmation, Science 124, 103 (1956)", url: "https://doi.org/10.1126/science.124.3212.103" }, { label: "Nobel Prize in Physics 1995", url: "https://www.nobelprize.org/prizes/physics/1995/summary/" }, { label: "APS Historic Site: Savannah River Site", url: "https://www.aps.org/funding-recognition/historic-sites/savannah" }],
  specs: [
  ],
  images: [
    {
      file: 'p-reactor.jpg',
      width: 1600,
      height: 1065,
      alt: "Aerial view of a large windowless concrete reactor building.",
      caption: "P Reactor at the Savannah River Site, where Cowan and Reines ran their experiment.",
      credit: "U.S. Department of Energy",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:P_Reactor_Aerial_(7448034916).jpg",
    },
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
};

export default facility;
