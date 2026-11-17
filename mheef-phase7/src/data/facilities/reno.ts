import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'reno',
  name: "RENO",
  fullName: "Reactor Experiment for Neutrino Oscillation",
  type: 'neutrino-observatory',
  country: "South Korea",
  lat: 35.404,
  lng: 126.416,
  founded: 2011,
  status: 'active',
  overview: "RENO measures antineutrinos from the six reactors of the Hanbit (formerly Yonggwang) nuclear power plant on Korea's west coast. Two identical detectors, one near the reactors and one farther away, compare the neutrino rate at different distances. In 2012 RENO was one of three experiments to measure the mixing angle theta-13.",
  specs: [
    { label: "Detector distances", value: "294 m (near) and 1,383 m (far) from the reactor array", sources: [{ label: "RENO Collaboration, Phys. Rev. Lett. 108, 191802 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.191802" }] },
    { label: "Reactors", value: "Six", sources: [{ label: "RENO Collaboration, Phys. Rev. Lett. 108, 191802 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.191802" }] },
  ],
  history: [
    { year: 2011, event: "Data-taking begins with both detectors in August 2011.", sources: [{ label: "RENO Collaboration, Phys. Rev. Lett. 108, 191802 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.191802" }] },
    { year: 2012, event: "RENO observes the disappearance of reactor antineutrinos and measures theta-13.", sources: [{ label: "RENO Collaboration, Phys. Rev. Lett. 108, 191802 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.191802" }] },
  ],
  experiments: [
    { id: 'reno-detectors', name: "RENO detectors", description: "Two identical gadolinium-loaded liquid-scintillator detectors at different distances from the reactors.", topics: ['neutrinos'], startYear: 2011, sources: [{ label: "RENO Collaboration, Phys. Rev. Lett. 108, 191802 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.191802" }, { label: "RENO: An Experiment for Neutrino Oscillation Parameter theta_13 Using Reactor Neutrinos at Yonggwang (arXiv:1003.1391)", url: "https://arxiv.org/abs/1003.1391" }] },
  ],
  keyResults: [
    { year: 2012, discovery: "Measurement of theta-13", description: "The far detector saw fewer antineutrinos than the near detector predicted, giving a clear measurement of the last unknown mixing angle.", sources: [{ label: "RENO Collaboration, Phys. Rev. Lett. 108, 191802 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.191802" }] },
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "RENO design paper", url: "https://arxiv.org/abs/1003.1391" },
  ],
};

export default facility;
