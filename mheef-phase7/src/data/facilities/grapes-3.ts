import type { Facility } from '../../types/facility';

const facility: Facility = {
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
  images: [
    {
      file: 'array.jpg',
      width: 1600,
      height: 1200,
      alt: "Many small cone-topped detectors spread across a grassy field in front of trees.",
      caption: "The air-shower detector array of GRAPES-3 at Ooty.",
      credit: "Hideki Tanaka",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Air_shower_detector_array_of_GRAPES-3_experiment.jpg",
    },
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
};

export default facility;
