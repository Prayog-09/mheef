import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'agasa',
  name: "AGASA",
  fullName: "Akeno Giant Air Shower Array",
  type: 'cosmic-ray-observatory',
  country: "Japan",
  lat: 35.787,
  lng: 138.476,
  founded: 1990,
  status: 'historic',
  overview: "AGASA, at Akeno in Yamanashi Prefecture, was for a decade the world's largest cosmic-ray detector: 111 scintillation detectors spread over about 100 square kilometres. It reported cosmic rays above the energy at which the spectrum was predicted to cut off, a puzzle that motivated the Pierre Auger Observatory and the Telescope Array.",
  specs: [
    { label: "Array", value: "111 surface detectors over about 100 km²", sources: [{ label: "AGASA Collaboration, Phys. Rev. Lett. 81, 1163 (1998)", url: "https://doi.org/10.1103/PhysRevLett.81.1163" }] },
  ],
  history: [
    { year: 1990, event: "The array begins collecting data in February 1990.", sources: [{ label: "AGASA Collaboration, Phys. Rev. Lett. 81, 1163 (1998)", url: "https://doi.org/10.1103/PhysRevLett.81.1163" }] },
    { year: 1998, event: "AGASA reports that the cosmic-ray energy spectrum extends beyond the predicted Greisen-Zatsepin-Kuzmin cutoff.", sources: [{ label: "AGASA Collaboration, Phys. Rev. Lett. 81, 1163 (1998)", url: "https://doi.org/10.1103/PhysRevLett.81.1163" }] },
  ],
  experiments: [
    { id: 'agasa-array', name: "AGASA array", description: "Surface array of plastic scintillators measuring the particle density of giant air showers.", topics: ['cosmic-rays'], startYear: 1990, sources: [{ label: "AGASA Collaboration, Phys. Rev. Lett. 81, 1163 (1998)", url: "https://doi.org/10.1103/PhysRevLett.81.1163" }] },
  ],
  keyResults: [
    { year: 1998, discovery: "Cosmic Rays Beyond the GZK Cutoff", description: "Events above 10²⁰ eV appeared to continue the spectrum without the expected cutoff; later, larger observatories did find a suppression.", sources: [{ label: "AGASA Collaboration, Phys. Rev. Lett. 81, 1163 (1998)", url: "https://doi.org/10.1103/PhysRevLett.81.1163" }] },
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "AGASA spectrum paper", url: "https://doi.org/10.1103/PhysRevLett.81.1163" },
  ],
};

export default facility;
