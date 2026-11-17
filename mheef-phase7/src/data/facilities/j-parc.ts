import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'j-parc',
  name: "J-PARC",
  fullName: "Japan Proton Accelerator Research Complex",
  type: 'accelerator-laboratory',
  country: "Japan",
  lat: 36.445,
  lng: 140.606,
  founded: 2001,
  status: 'active',
  overview: "J-PARC in Tokai, on Japan's Pacific coast, is a high-intensity proton accelerator complex built jointly by KEK and the Japan Atomic Energy Agency. A linac and two synchrotrons deliver protons to facilities for neutrino physics, hadron physics and materials science. Its neutrino beam is aimed at the Super-Kamiokande detector 295 km away for the T2K experiment.",
  specs: [
    { label: "Main Ring proton energy", value: "30 GeV", sources: [{ label: "J-PARC: History", url: "https://j-parc.jp/c/en/about/history.html" }] },
    { label: "T2K baseline to Super-Kamiokande", value: "295 km", sources: [{ label: "The T2K experiment, Nucl. Instrum. Meth. A 659, 106 (2011)", url: "https://doi.org/10.1016/j.nima.2011.06.067" }] },
  ],
  images: [
    {
      file: 'main-ring.jpg',
      width: 1600,
      height: 1200,
      alt: "Yellow and blue accelerator magnets lined up along a tunnel.",
      caption: "The Main Ring synchrotron at J-PARC, photographed on an open day in 2016.",
      credit: "Kestrel",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:J-PARC_Main_Ring_P7311328.jpg",
    },
  ],
  history: [
    { year: 2001, event: "KEK and the Japan Atomic Energy Agency sign a cooperative agreement in April, and construction of J-PARC starts in December.", sources: [{ label: "J-PARC: History", url: "https://j-parc.jp/c/en/about/history.html" }] },
    { year: 2008, event: "The Main Ring reaches its initial target energy of 30 GeV in December.", sources: [{ label: "J-PARC: History", url: "https://j-parc.jp/c/en/about/history.html" }] },
    { year: 2009, event: "The first neutrino is observed by the T2K near detector in November.", sources: [{ label: "J-PARC: History", url: "https://j-parc.jp/c/en/about/history.html" }] },
    { year: 2011, event: "Operation is suspended after the Great East Japan Earthquake in March. T2K publishes the first indication that muon neutrinos change into electron neutrinos.", sources: [{ label: "J-PARC: History", url: "https://j-parc.jp/c/en/about/history.html" }, { label: "T2K Collaboration, Phys. Rev. Lett. 107, 041801 (2011)", url: "https://doi.org/10.1103/PhysRevLett.107.041801" }] },
    { year: 2020, event: "T2K reports constraints on the phase that would make neutrinos and antineutrinos oscillate differently.", sources: [{ label: "T2K Collaboration, Nature 580, 339 (2020)", url: "https://doi.org/10.1038/s41586-020-2177-0" }] },
  ],
  experiments: [
    { id: 'jparc-t2k', name: "T2K", description: "Tokai-to-Kamioka long-baseline experiment: a muon-neutrino beam from J-PARC is measured near its source and again at Super-Kamiokande, 295 km away, to study neutrino oscillations.", topics: ['neutrinos', 'cp-violation'], startYear: 2010, sources: [{ label: "The T2K experiment, Nucl. Instrum. Meth. A 659, 106 (2011)", url: "https://doi.org/10.1016/j.nima.2011.06.067" }] },
  ],
  keyResults: [
    { year: 2014, discovery: "Observation of Electron-Neutrino Appearance", description: "T2K observed electron neutrinos appearing in a muon-neutrino beam, a direct demonstration of oscillation into a different flavour.", sources: [{ label: "T2K Collaboration, Phys. Rev. Lett. 112, 061802 (2014)", url: "https://doi.org/10.1103/PhysRevLett.112.061802" }] },
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Official Site", url: "https://j-parc.jp/c/en/" },
  ],
};

export default facility;
