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
  foundedBasis: { meaning: "first-operation", sources: [{ label: "RENO Collaboration, Phys. Rev. Lett. 108, 191802 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.191802" }] },
  location: { represents: "The Hanbit (formerly Yonggwang) nuclear power plant", sources: [{ label: "OpenStreetMap: Hanbit Nuclear Power Plant", url: "https://www.openstreetmap.org/way/387266330" }] },
  status: 'active',
  overview: "RENO (Reactor Experiment for Neutrino Oscillation) records antineutrinos from the six reactors of the Yonggwang nuclear power plant, now called Hanbit, in Korea, using two identical detectors 294 m and 1,383 m from the centre of the reactor array. Data-taking began on 11 August 2011, and in 2012 RENO observed the disappearance of reactor antineutrinos at 4.9 standard deviations and measured the mixing angle θ13.",
  overviewSources: [{ label: "RENO Collaboration, Phys. Rev. Lett. 108, 191802 (2012)", url: "https://doi.org/10.1103/PhysRevLett.108.191802" }, { label: "OpenStreetMap: Hanbit Nuclear Power Plant", url: "https://www.openstreetmap.org/way/387266330" }],
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
