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
  foundedBasis: { meaning: "first-operation", sources: [{ label: "Tibet ASγ: Dawn of sub-PeV gamma-ray astronomy, PoS(ECRS)049", url: "https://pos.sissa.it/421/049" }] },
  location: { represents: "Yangbajing, Damxung County, Tibet", sources: [{ label: "OpenStreetMap: Yangbajing (town)", url: "https://www.openstreetmap.org/relation/12338727" }] },
  status: 'active',
  overview: "The Tibet ASγ experiment at Yangbajing in Tibet, China, 4,300 m above sea level, has run an air shower array since 1990; it now has about 600 scintillation detectors over 65,700 m². Underground water-Cherenkov muon detectors added in 2014 help it pick out gamma rays among cosmic-ray showers; with them it reported in 2019 the first photons above 100 TeV from an astrophysical source, the Crab Nebula, and in 2021 diffuse gamma rays of nearly PeV energy from the disc of the Milky Way.",
  overviewSources: [{ label: "Tibet ASγ: Dawn of sub-PeV gamma-ray astronomy, PoS(ECRS)049", url: "https://pos.sissa.it/421/049" }, { label: "Tibet ASγ Collaboration, Phys. Rev. Lett. 123, 051101 (2019)", url: "https://doi.org/10.1103/PhysRevLett.123.051101" }, { label: "Tibet ASγ Collaboration, Phys. Rev. Lett. 126, 141101 (2021)", url: "https://doi.org/10.1103/PhysRevLett.126.141101" }],
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
