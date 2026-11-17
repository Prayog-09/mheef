import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'lhaaso',
  name: "LHAASO",
  fullName: "Large High Altitude Air Shower Observatory",
  type: 'gamma-ray-observatory',
  country: "China",
  lat: 29.358,
  lng: 100.138,
  founded: 2021,
  status: 'active',
  overview: "LHAASO stands at 4,410 m on Mount Haizi in Daocheng, Sichuan. It combines a square-kilometre array of particle and muon detectors, a large water Cherenkov pool and wide-field Cherenkov telescopes to observe gamma rays and cosmic rays at the highest energies. Even before completion it found a dozen Galactic sources emitting photons up to 1.4 PeV.",
  specs: [
    { label: "Altitude", value: "4,410 m", sources: [{ label: "The First LHAASO Catalog of Gamma-Ray Sources (arXiv:2305.17030)", url: "https://arxiv.org/abs/2305.17030" }] },
    { label: "KM2A array area", value: "1.3 km², with 1,188 muon detectors", sources: [{ label: "The First LHAASO Catalog of Gamma-Ray Sources (arXiv:2305.17030)", url: "https://arxiv.org/abs/2305.17030" }] },
    { label: "Water Cherenkov detector array", value: "78,000 m²", sources: [{ label: "The First LHAASO Catalog of Gamma-Ray Sources (arXiv:2305.17030)", url: "https://arxiv.org/abs/2305.17030" }] },
    { label: "Wide-field Cherenkov telescopes", value: "18", sources: [{ label: "The First LHAASO Catalog of Gamma-Ray Sources (arXiv:2305.17030)", url: "https://arxiv.org/abs/2305.17030" }] },
  ],
  history: [
    { year: 2021, event: "LHAASO reports twelve Galactic sources of photons above 100 TeV, with energies up to 1.4 PeV, and PeV gamma rays from the Crab Nebula. The full array is completed in July 2021.", sources: [{ label: "LHAASO Collaboration, Nature 594, 33 (2021)", url: "https://doi.org/10.1038/s41586-021-03498-z" }, { label: "LHAASO Collaboration, Science 373, 425 (2021)", url: "https://doi.org/10.1126/science.abg5137" }, { label: "The First LHAASO Catalog of Gamma-Ray Sources (arXiv:2305.17030)", url: "https://arxiv.org/abs/2305.17030" }] },
    { year: 2023, event: "LHAASO publishes its observation of the TeV afterglow of the exceptionally bright gamma-ray burst GRB 221009A.", sources: [{ label: "LHAASO Collaboration, Science 380, 1390 (2023)", url: "https://doi.org/10.1126/science.adg9328" }] },
  ],
  experiments: [
    { id: 'lhaaso-km2a', name: "KM2A", description: "Square-kilometre array of electromagnetic particle detectors and buried muon detectors for gamma rays above tens of TeV.", topics: ['cosmic-rays'], sources: [{ label: "The First LHAASO Catalog of Gamma-Ray Sources (arXiv:2305.17030)", url: "https://arxiv.org/abs/2305.17030" }] },
    { id: 'lhaaso-wcda', name: "WCDA", description: "Water Cherenkov Detector Array for surveying the sky at TeV energies.", topics: ['cosmic-rays'], sources: [{ label: "The First LHAASO Catalog of Gamma-Ray Sources (arXiv:2305.17030)", url: "https://arxiv.org/abs/2305.17030" }] },
  ],
  keyResults: [
    { year: 2021, discovery: "Photons up to 1.4 PeV from Galactic Sources", description: "Twelve sources in the Milky Way were seen above 100 TeV, showing that the Galaxy contains accelerators reaching PeV energies.", sources: [{ label: "LHAASO Collaboration, Nature 594, 33 (2021)", url: "https://doi.org/10.1038/s41586-021-03498-z" }] },
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "First LHAASO source catalogue", url: "https://arxiv.org/abs/2305.17030" },
  ],
};

export default facility;
