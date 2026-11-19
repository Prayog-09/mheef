import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'kolar-gold-fields',
  name: "Kolar Gold Fields",
  fullName: "Kolar Gold Fields underground experiments",
  type: 'underground-laboratory',
  country: "India",
  lat: 12.95,
  lng: 78.27,
  founded: 1951,
  foundedBasis: { meaning: "first-operation", sources: [{ label: "CERN Courier: B V Sreekantan 1925–2019 (2020)", url: "https://cerncourier.com/a/remembering-a-cosmic-ray-pioneer-b-v-sreekantan-1925-2019/" }] },
  location: { represents: "The town of Kolar Gold Fields, Karnataka", sources: [{ label: "OpenStreetMap: Kolar Gold Fields (town)", url: "https://www.openstreetmap.org/node/245614133" }] },
  status: 'historic',
  overview: "The deep gold mines of Kolar Gold Fields in Karnataka hosted pioneering underground physics experiments by physicists including B. V. Sreekantan, Saburo Miyake, V. S. Narasimham and P. V. Ramanamurthy. The work began in 1951, when Homi Bhabha sent Sreekantan down the deep Champion Reef mine to measure the flux of cosmic-ray muons at different depths. In 1965, working about 2,300 m below ground, the Kolar collaboration reported the detection of muons produced deep underground by cosmic-ray neutrinos, the first observation of atmospheric neutrinos. Proton decay experiments followed from 1980; the underground experiments began to be shut down in 1993, and the mines closed in 2001.",
  overviewSources: [{ label: "ThePrint: Kolar Gold Fields and India's neutrino legacy", url: "https://theprint.in/science/how-experiments-at-karnatakas-kolar-gold-fields-are-last-remaining-piece-of-indias-neutrino-legacy/2361654/" }, { label: "Achar et al., Phys. Lett. 18, 196 (1965)", url: "https://doi.org/10.1016/0031-9163(65)90712-2" }, { label: "Krishnaswamy et al., Phys. Lett. B 106, 339 (1981)", url: "https://doi.org/10.1016/0370-2693(81)90549-9" }, { label: "CERN Courier: B V Sreekantan 1925–2019 (2020)", url: "https://cerncourier.com/a/remembering-a-cosmic-ray-pioneer-b-v-sreekantan-1925-2019/" }],
  specs: [
    { label: "Depth of the 1965 neutrino detector", value: "About 2,300 m", sources: [{ label: "ThePrint: Kolar Gold Fields and India's neutrino legacy", url: "https://theprint.in/science/how-experiments-at-karnatakas-kolar-gold-fields-are-last-remaining-piece-of-indias-neutrino-legacy/2361654/" }] },
    { label: "Second proton decay detector", value: "About 366 tonnes, 2 km underground", sources: [{ label: "ThePrint: Kolar Gold Fields and India's neutrino legacy", url: "https://theprint.in/science/how-experiments-at-karnatakas-kolar-gold-fields-are-last-remaining-piece-of-indias-neutrino-legacy/2361654/" }] },
  ],
  images: [
    {
      file: 'champion-reef-shaft.jpg',
      width: 1296,
      height: 972,
      alt: "A steel mine headframe partly overgrown with creepers.",
      caption: "The Champion Reef mine shaft at Kolar Gold Fields.",
      credit: "Adu65",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Champion_Reef_Mine_shaft.jpg",
    },
  ],
  history: [
    { year: 1951, event: "Homi Bhabha sends B. V. Sreekantan down the Champion Reef mine at Kolar Gold Fields to measure the flux of cosmic-ray muons at different depths, beginning the underground experiments there.", sources: [{ label: "CERN Courier: B V Sreekantan 1925–2019 (2020)", url: "https://cerncourier.com/a/remembering-a-cosmic-ray-pioneer-b-v-sreekantan-1925-2019/" }] },
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
};

export default facility;
