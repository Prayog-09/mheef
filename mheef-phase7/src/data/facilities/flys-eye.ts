import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'flys-eye',
  name: "Fly’s Eye / HiRes",
  fullName: "Fly’s Eye and High Resolution Fly’s Eye",
  type: 'cosmic-ray-observatory',
  country: "United States",
  lat: 40.2,
  lng: -112.84,
  founded: 1981,
  status: 'historic',
  overview: "The Fly's Eye detectors in the Utah desert pioneered the fluorescence technique, watching the faint ultraviolet glow that cosmic-ray air showers leave in the night sky. In 1991 the original detector recorded the most energetic cosmic ray seen up to that time, the 'Oh-My-God particle'. Its successor, HiRes, made the first observation of the predicted suppression of the cosmic-ray spectrum at the highest energies.",
  specs: [
  ],
  history: [
    { year: 1991, event: "On 15 October 1991 the Fly's Eye records a cosmic ray with an energy of about 3 × 10²⁰ eV.", sources: [{ label: "Bird et al., Astrophys. J. 441, 144 (1995)", url: "https://doi.org/10.1086/175344" }] },
    { year: 2008, event: "HiRes publishes the first observation of the Greisen-Zatsepin-Kuzmin suppression.", sources: [{ label: "HiRes Collaboration, Phys. Rev. Lett. 100, 101101 (2008)", url: "https://doi.org/10.1103/PhysRevLett.100.101101" }] },
  ],
  experiments: [
    { id: 'hires', name: "HiRes", description: "Two fluorescence detector sites observing air showers in stereo.", topics: ['cosmic-rays'], startYear: 1997, endYear: 2006, sources: [{ label: "HiRes Collaboration, Phys. Rev. Lett. 100, 101101 (2008)", url: "https://doi.org/10.1103/PhysRevLett.100.101101" }] },
  ],
  keyResults: [
    { year: 1991, discovery: "The Oh-My-God Particle", description: "A single cosmic ray carried an energy far beyond the limit expected for particles travelling cosmological distances.", sources: [{ label: "Bird et al., Astrophys. J. 441, 144 (1995)", url: "https://doi.org/10.1086/175344" }] },
    { year: 2008, discovery: "The GZK Suppression", description: "The cosmic-ray flux was seen to fall sharply above about 6 × 10¹⁹ eV, as predicted from collisions with the cosmic microwave background.", sources: [{ label: "HiRes Collaboration, Phys. Rev. Lett. 100, 101101 (2008)", url: "https://doi.org/10.1103/PhysRevLett.100.101101" }] },
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "HiRes GZK paper", url: "https://arxiv.org/abs/astro-ph/0703099" },
  ],
};

export default facility;
