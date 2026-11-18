import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'hyper-kamiokande',
  name: "Hyper-Kamiokande",
  type: 'neutrino-observatory',
  country: "Japan",
  lat: 36.356,
  lng: 137.314,
  founded: 2020,
  foundedBasis: { meaning: "approved", sources: [{ label: "Hyper-Kamiokande construction status and prospects, Front. Phys. 12 (2024)", url: "https://doi.org/10.3389/fphy.2024.1378254" }] },
  status: 'planned',
  overview: "Hyper-Kamiokande, the successor to Super-Kamiokande, is under construction about 600 m underground beneath the Kamioka Mine in Hida City, Gifu Prefecture, in one of the world's largest underground caverns; the project officially began when its first construction budget was approved in January 2020. Its water tank will have a fiducial mass 8.4 times that of Super-Kamiokande. Using a neutrino beam from J-PARC it will study CP violation, the difference between neutrinos and antineutrinos, and it will search for proton decay and watch for neutrinos from supernova explosions. It aims to start experiments in 2028.",
  overviewSources: [{ label: "Hyper-Kamiokande construction status and prospects, Front. Phys. 12 (2024)", url: "https://doi.org/10.3389/fphy.2024.1378254" }, { label: "Hyper-Kamiokande: Overview", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/hk/about/outline/" }],
  specs: [
    { label: "Tank", value: "68 m in diameter, 71 m water depth", sources: [{ label: "Hyper-Kamiokande: Overview", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/hk/about/outline/" }] },
    { label: "Water mass", value: "About 260,000 tonnes, of which about 190,000 tonnes fiducial", sources: [{ label: "Hyper-Kamiokande: Overview", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/hk/about/outline/" }] },
    { label: "Fiducial mass relative to Super-Kamiokande", value: "8.4 times larger", sources: [{ label: "Hyper-Kamiokande: Overview", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/hk/about/outline/" }] },
    { label: "Planned start", value: "2028", sources: [{ label: "Hyper-Kamiokande: Overview", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/hk/about/outline/" }] },
  ],
  history: [
    { year: 2020, event: "The project officially starts after the Japanese Diet approves the first construction budget in January 2020.", sources: [{ label: "Hyper-Kamiokande construction status and prospects, Front. Phys. 12 (2024)", url: "https://doi.org/10.3389/fphy.2024.1378254" }] },
    { year: 2021, event: "Excavation of the access tunnel begins in May 2021.", sources: [{ label: "Hyper-Kamiokande construction status and prospects, Front. Phys. 12 (2024)", url: "https://doi.org/10.3389/fphy.2024.1378254" }] },
    { year: 2022, event: "Excavation of the main cavern, one of the largest underground caverns in the world, begins in October 2022.", sources: [{ label: "Hyper-Kamiokande construction status and prospects, Front. Phys. 12 (2024)", url: "https://doi.org/10.3389/fphy.2024.1378254" }] },
    { year: 2025, event: "Excavation of the cavern is completed on 31 July 2025.", sources: [{ label: "ICRR press release: cavern excavation completed (2025)", url: "https://www.icrr.u-tokyo.ac.jp/prwps/wp-content/uploads/HKpressrelease_v1.9_2.pdf" }] },
  ],
  experiments: [
    { id: 'hk-detector', name: "Hyper-Kamiokande detector", description: "Water Cherenkov detector viewed by tens of thousands of high-sensitivity photosensors, to study neutrino oscillations, proton decay and astrophysical neutrinos.", topics: ['neutrinos', 'cp-violation'], sources: [{ label: "Hyper-Kamiokande: Overview", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/hk/about/outline/" }, { label: "Hyper-Kamiokande Design Report (arXiv:1805.04163)", url: "https://arxiv.org/abs/1805.04163" }] },
  ],
  keyResults: [
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Official Site", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/hk/" },
  ],
};

export default facility;
