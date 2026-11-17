import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'kamioka',
  name: 'Kamioka Observatory',
  type: 'neutrino-observatory',
  country: 'Japan',
  lat: 36.4254,
  lng: 137.31,
  founded: 1983,
  status: 'active',
  overview: "Japan's Kamioka Observatory, housed beneath Mount Ikeno in Gifu Prefecture, is one of the most productive underground laboratories in the world. Its flagship detector Super-Kamiokande — a 50,000-tonne water Cherenkov cylinder — detected the first neutrinos from an extragalactic supernova (1987A), discovered atmospheric neutrino oscillations in 1998, and sets world-leading limits on the proton lifetime. The successor Hyper-Kamiokande, a 260,000-tonne detector, is currently under construction nearby.",
  specs: [
    { label: "Rock overburden", value: "1,000 m", sources: [{ label: "Super-Kamiokande: The detector", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/sk/about/detector/" }] },
    { label: "Super-Kamiokande tank", value: "39.3 m in diameter, 41.4 m high", sources: [{ label: "Super-Kamiokande: The detector", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/sk/about/detector/" }] },
    { label: "Water mass", value: "50,000 tonnes", sources: [{ label: "Super-Kamiokande: The detector", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/sk/about/detector/" }] },
    { label: "Photomultiplier tubes", value: "11,129 inner (20-inch) and 1,885 outer (8-inch)", sources: [{ label: "Super-Kamiokande: The detector", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/sk/about/detector/" }] },
  ],
  history: [
    { year: 1983, event: "Kamiokande detector begins operations under Mount Ikeno, designed primarily to search for proton decay predicted by Grand Unified Theories.", sources: [{ label: "Super-Kamiokande: Research history", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/sk/about/history" }] },
    { year: 1987, event: "Kamiokande-II detects 11 neutrinos from Supernova 1987A in the Large Magellanic Cloud — the first detection of neutrinos from any extragalactic source. Nobel Prize 2002.", sources: [{ label: "Nobel Prize in Physics 2002", url: "https://www.nobelprize.org/prizes/physics/2002/summary/" }] },
    { year: 1996, event: "Super-Kamiokande, a 50,000-tonne water Cherenkov detector instrumented with 11,146 photomultiplier tubes, begins operations.", sources: [{ label: "Super-Kamiokande: Research history", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/sk/about/history" }, { label: "The Super-Kamiokande detector, Nucl. Instrum. Meth. A 501, 418 (2003)", url: "https://doi.org/10.1016/S0168-9002(03)00425-X" }] },
    { year: 1998, event: "Super-Kamiokande announces compelling evidence for atmospheric muon-neutrino oscillation, proving neutrinos have non-zero mass. Nobel Prize 2015.", sources: [{ label: "Nobel Prize in Physics 2015", url: "https://www.nobelprize.org/prizes/physics/2015/summary/" }] },
    { year: 2020, event: "Super-Kamiokande enters its Gd-doping phase (SK-Gd), adding gadolinium to improve neutron-capture detection for supernova relic neutrino searches.", sources: [{ label: "Super-Kamiokande: Research history", url: "https://www-sk.icrr.u-tokyo.ac.jp/en/sk/about/history" }, { label: "First gadolinium loading to Super-Kamiokande, Nucl. Instrum. Meth. A 1027, 166248 (2022)", url: "https://doi.org/10.1016/j.nima.2021.166248" }] },
  ],
  experiments: [
    { id: 'kamioka-sk', name: 'Super-Kamiokande', description: "50,000-tonne water Cherenkov detector that discovered atmospheric neutrino oscillations, setting world-leading proton-lifetime limits and observing solar and atmospheric neutrinos.", topics: ['neutrinos'], startYear: 1996, sources: [{ label: "The Super-Kamiokande detector, Nucl. Instrum. Meth. A 501, 418 (2003)", url: "https://doi.org/10.1016/S0168-9002(03)00425-X" }] },
    { id: 'kamioka-kamland', name: 'KamLAND', description: "1-kilotonne liquid-scintillator detector at Kamioka; the first to observe reactor antineutrino disappearance with terrestrial sources, confirming neutrino oscillation parameters.", topics: ['neutrinos'], startYear: 2002, sources: [{ label: "KamLAND Collaboration, Phys. Rev. Lett. 90, 021802 (2003)", url: "https://doi.org/10.1103/PhysRevLett.90.021802" }] },
  ],
  keyResults: [
    { year: 1987, discovery: "Supernova 1987A Neutrinos", description: "Kamiokande-II detected a burst of 11 neutrinos from SN 1987A, providing the first direct observation of core-collapse supernova neutrinos and confirming stellar collapse models. Masatoshi Koshiba shared the Nobel Prize 2002.", sources: [{ label: "Nobel Prize in Physics 2002", url: "https://www.nobelprize.org/prizes/physics/2002/summary/" }] },
    { year: 1998, discovery: "Atmospheric Neutrino Oscillations", description: "Super-Kamiokande observed a zenith-angle-dependent deficit of atmospheric muon neutrinos, providing compelling evidence that neutrinos oscillate and therefore have non-zero mass. Nobel Prize 2015.", sources: [{ label: "Nobel Prize in Physics 2015", url: "https://www.nobelprize.org/prizes/physics/2015/summary/" }] },
  ],
  importantPeople: [
    { name: "Masatoshi Koshiba", contribution: "Led the Kamiokande experiment and directed the 1987A supernova neutrino detection; Nobel Prize in Physics 2002.", sources: [{ label: "Nobel Prize in Physics 2002", url: "https://www.nobelprize.org/prizes/physics/2002/summary/" }] },
    { name: "Takaaki Kajita", contribution: "Analysed Super-Kamiokande atmospheric neutrino data, discovering the oscillation signature that proved neutrino mass; Nobel Prize in Physics 2015.", sources: [{ label: "Nobel Prize in Physics 2015", url: "https://www.nobelprize.org/prizes/physics/2015/summary/" }] },
  ],
  readMore: [
    { label: "Super-Kamiokande Site", url: "https://www-sk.icrr.u-tokyo.ac.jp" },
    { label: "Nobel Prize 2002 (SN1987A)", url: "https://www.nobelprize.org/prizes/physics/2002/summary/" },
    { label: "Nobel Prize 2015 (Oscillations)", url: "https://www.nobelprize.org/prizes/physics/2015/summary/" },
  ],
};

export default facility;
