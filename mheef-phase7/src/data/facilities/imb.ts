import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'imb',
  name: "IMB",
  fullName: "Irvine-Michigan-Brookhaven detector",
  type: 'neutrino-observatory',
  country: "United States",
  lat: 41.75,
  lng: -81.28,
  founded: 1982,
  location: { represents: "Fairport Harbor, Ohio, where the Morton Salt mine lies", sources: [{ label: "APS Historic Site: Morton Salt Mine", url: "https://www.aps.org/funding-recognition/historic-sites/morton" }, { label: "OpenStreetMap: Fairport Harbor, Ohio", url: "https://www.openstreetmap.org/relation/181991" }] },
  foundedBasis: { meaning: "first-operation", sources: [{ label: "APS Historic Site: Morton Salt Mine", url: "https://www.aps.org/funding-recognition/historic-sites/morton" }] },
  status: 'historic',
  overview: "The IMB (Irvine-Michigan-Brookhaven) detector was an 8,000-ton water Cherenkov detector nearly 2,000 feet underground in the Fairport Harbor Morton Salt Mine in Ohio, operating from 1982 to 1991. Built to search for proton decay, it found none; on 23 February 1987 it recorded eight neutrino events from Supernova 1987A, as did Kamiokande in Japan, and its upgraded form, IMB-3, found fewer atmospheric muon neutrinos than expected.",
  overviewSources: [{ label: "APS Historic Site: Morton Salt Mine", url: "https://www.aps.org/funding-recognition/historic-sites/morton" }, { label: "IMB Collaboration, Phys. Rev. Lett. 58, 1494 (1987)", url: "https://doi.org/10.1103/PhysRevLett.58.1494" }, { label: "IMB-3: a large water Cherenkov detector, Nucl. Instrum. Meth. A 324, 363 (1993)", url: "https://doi.org/10.1016/0168-9002(93)90998-W" }, { label: "IMB Collaboration, Phys. Rev. Lett. 66, 2561 (1991)", url: "https://doi.org/10.1103/PhysRevLett.66.2561" }],
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
};

export default facility;
