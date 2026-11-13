import type { Facility } from '../../types/facility';

const facility: Facility = {
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
