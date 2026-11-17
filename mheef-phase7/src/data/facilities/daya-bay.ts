import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'daya-bay',
  name: 'Daya Bay',
  fullName: "Daya Bay Reactor Neutrino Experiment",
  type: 'neutrino-observatory',
  country: 'China',
  lat: 22.5956,
  lng: 114.5378,
  founded: 2011,
  status: 'historic',
  overview: "The Daya Bay Reactor Neutrino Experiment operated from 2011 to 2020 near nuclear power plants in Guangdong, China. Using eight gadolinium-doped liquid-scintillator detectors across three underground halls at baselines of 360-1860 m from the reactors, Daya Bay made the world's most precise measurement of the mixing angle theta-13 — a critical parameter for future experiments seeking to measure the neutrino CP-violating phase delta-CP.",
  specs: [
    { label: "Reactors", value: "Six, each of 2.9 GW thermal power", sources: [{ label: "Daya Bay Collaboration, Phys. Rev. Lett. 108, 171803 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.171803" }] },
    { label: "Hall baselines", value: "470 m and 576 m (near), 1,648 m (far)", sources: [{ label: "Daya Bay Collaboration, Phys. Rev. Lett. 108, 171803 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.171803" }] },
    { label: "Data set", value: "3,158 days; 5.55 million antineutrino candidates", sources: [{ label: "Daya Bay Collaboration, Phys. Rev. Lett. 130, 161802 (2023)", url: "https://doi.org/10.1103/PhysRevLett.130.161802" }] },
    { label: "Final sin² 2θ₁₃", value: "0.0851 ± 0.0024", sources: [{ label: "Daya Bay Collaboration, Phys. Rev. Lett. 130, 161802 (2023)", url: "https://doi.org/10.1103/PhysRevLett.130.161802" }] },
  ],
  images: [
    {
      file: 'detectors-in-pool.jpg',
      width: 1600,
      height: 1448,
      alt: "Four cylindrical detectors standing in a pool of clear water, seen from above.",
      caption: "Antineutrino detectors in a water pool at the Daya Bay experiment.",
      credit: "Institute of High Energy Physics, Chinese Academy of Sciences",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Daya_Bay_Experiment.jpg",
    },
  ],
  history: [
    { year: 2011, event: "Daya Bay begins operations with the first set of antineutrino detectors installed in underground experimental halls.", sources: [{ label: "Daya Bay Collaboration, Phys. Rev. Lett. 108, 171803 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.171803" }] },
    { year: 2012, event: "Daya Bay announces the first precise measurement of theta-13, finding sin2(2*theta-13) = 0.092 at more than 5 sigma — the world's first observation of non-zero theta-13.", sources: [{ label: "Daya Bay Collaboration, Phys. Rev. Lett. 108, 171803 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.171803" }] },
    { year: 2012, event: "Full eight-detector configuration begins operations in October 2012, significantly improving statistical and systematic precision.", sources: [{ label: "Daya Bay Collaboration, Phys. Rev. Lett. 130, 161802 (2023)", url: "https://doi.org/10.1103/PhysRevLett.130.161802" }] },
    { year: 2020, event: "Daya Bay ends data-taking on 12 December 2020 after nine years; its final results are the world's most precise measurement of theta-13.", sources: [{ label: "Berkeley Lab: Scientists say farewell to Daya Bay site (2020)", url: "https://newscenter.lbl.gov/2020/12/11/scientists-say-farewell-to-daya-bay-site-proceed-with-final-data-analysis/" }, { label: "Daya Bay Collaboration, Phys. Rev. Lett. 130, 161802 (2023)", url: "https://doi.org/10.1103/PhysRevLett.130.161802" }] },
  ],
  experiments: [
    { id: 'dayabay-det', name: 'Daya Bay Antineutrino Detectors', description: "Eight modular Gd-doped liquid-scintillator detectors in three underground halls measuring reactor antineutrino disappearance to extract theta-13 with sub-percent precision.", topics: ['neutrinos', 'electroweak'], startYear: 2011, endYear: 2020, sources: [{ label: "Daya Bay Collaboration, Phys. Rev. Lett. 130, 161802 (2023)", url: "https://doi.org/10.1103/PhysRevLett.130.161802" }] },
  ],
  keyResults: [
    { year: 2012, discovery: "First Precise Measurement of theta-13", description: "Daya Bay was the first experiment to measure the neutrino mixing angle theta-13 with >5 sigma significance, finding it unexpectedly large (sin2(2*theta-13) = 0.092), enabling the design of experiments to measure the neutrino CP-violating phase delta-CP.", sources: [{ label: "Daya Bay Collaboration, Phys. Rev. Lett. 108, 171803 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.171803" }] },
  ],
  importantPeople: [
    { name: "Yifang Wang", contribution: "Led the Daya Bay experiment from IHEP Beijing and devised its multi-detector near/far strategy; accepted the 2016 Breakthrough Prize in Fundamental Physics with Kam-Biu Luk on the collaboration's behalf.", sources: [{ label: "Asian Scientist: 2016 Breakthrough Prize in Fundamental Physics", url: "https://www.asianscientist.com/2015/11/topnews/neutrino-breakthrough-prize-2016/" }, { label: "Breakthrough Prize: Kam-Biu Luk and the Daya Bay Collaboration", url: "https://breakthroughprize.org/Laureates/L153" }] },
    { name: "Kam-Biu Luk", contribution: "Led the Daya Bay experiment from UC Berkeley and Lawrence Berkeley National Laboratory; shared the 2016 Breakthrough Prize in Fundamental Physics with the collaboration.", sources: [{ label: "Breakthrough Prize: Kam-Biu Luk and the Daya Bay Collaboration", url: "https://breakthroughprize.org/Laureates/L153" }, { label: "Asian Scientist: 2016 Breakthrough Prize in Fundamental Physics", url: "https://www.asianscientist.com/2015/11/topnews/neutrino-breakthrough-prize-2016/" }] },
  ],
  readMore: [
    { label: "Daya Bay 2012 result (Physical Review Letters)", url: "https://doi.org/10.1103/PhysRevLett.108.171803" },
  ],
};

export default facility;
