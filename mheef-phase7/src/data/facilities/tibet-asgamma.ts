import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'tibet-asgamma',
  name: "Tibet ASγ",
  fullName: "Tibet Air Shower Array",
  type: 'cosmic-ray-observatory',
  country: "China",
  lat: 30.102,
  lng: 90.522,
  founded: 1990,
  status: 'active',
  overview: "The Tibet air shower array at Yangbajing, 4,300 m above sea level, is a Chinese-Japanese experiment that has observed cosmic rays and gamma rays since 1990. Underground muon detectors added in 2014 let it separate gamma rays from the far more numerous cosmic rays, and with them it detected the first photons above 100 TeV from an astrophysical source.",
  specs: [
    { label: "Altitude", value: "4,300 m", sources: [{ label: "Tibet ASγ: Dawn of sub-PeV gamma-ray astronomy, PoS(ECRS)049", url: "https://pos.sissa.it/421/049" }] },
    { label: "Array area", value: "65,700 m², with about 600 scintillation detectors", sources: [{ label: "Tibet ASγ: Dawn of sub-PeV gamma-ray astronomy, PoS(ECRS)049", url: "https://pos.sissa.it/421/049" }] },
  ],
  history: [
    { year: 1990, event: "The air shower array begins operating at Yangbajing.", sources: [{ label: "Tibet ASγ: Dawn of sub-PeV gamma-ray astronomy, PoS(ECRS)049", url: "https://pos.sissa.it/421/049" }] },
    { year: 2014, event: "An underground muon detector array is added, extending sensitivity to gamma rays above 100 TeV.", sources: [{ label: "Tibet ASγ: Dawn of sub-PeV gamma-ray astronomy, PoS(ECRS)049", url: "https://pos.sissa.it/421/049" }] },
    { year: 2019, event: "The experiment reports the first photons above 100 TeV from an astrophysical source, the Crab Nebula.", sources: [{ label: "Tibet ASγ Collaboration, Phys. Rev. Lett. 123, 051101 (2019)", url: "https://doi.org/10.1103/PhysRevLett.123.051101" }] },
    { year: 2021, event: "It detects diffuse gamma rays of nearly PeV energy from the disc of the Milky Way.", sources: [{ label: "Tibet ASγ Collaboration, Phys. Rev. Lett. 126, 141101 (2021)", url: "https://doi.org/10.1103/PhysRevLett.126.141101" }] },
  ],
  experiments: [
    { id: 'tibet-array', name: "Tibet air shower array", description: "Scintillation detector array with underground water-Cherenkov muon detectors.", topics: ['cosmic-rays'], startYear: 1990, sources: [{ label: "Tibet ASγ: Dawn of sub-PeV gamma-ray astronomy, PoS(ECRS)049", url: "https://pos.sissa.it/421/049" }] },
  ],
  keyResults: [
    { year: 2021, discovery: "Sub-PeV Gamma Rays from the Galactic Disc", description: "Diffuse gamma rays up to nearly a PeV are evidence that cosmic rays are accelerated to PeV energies within our Galaxy.", sources: [{ label: "Tibet ASγ Collaboration, Phys. Rev. Lett. 126, 141101 (2021)", url: "https://doi.org/10.1103/PhysRevLett.126.141101" }] },
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Overview paper", url: "https://pos.sissa.it/421/049" },
  ],
};

export default facility;
