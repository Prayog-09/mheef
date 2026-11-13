import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'binp',
  name: "BINP Novosibirsk",
  fullName: "Budker Institute of Nuclear Physics",
  type: 'accelerator-laboratory',
  country: "Russia",
  lat: 54.849,
  lng: 83.1107,
  founded: 1958,
  status: 'active',
  overview: "The Budker Institute of Nuclear Physics in Novosibirsk's Akademgorodok was founded by Gersh Budker and was one of the places where the colliding-beam method was first realised. Its early VEP-1 and VEPP-2 machines were among the world's first colliders, and Budker proposed electron cooling there. The institute runs the VEPP-4M and VEPP-2000 electron-positron colliders.",
  specs: [
  ],
  history: [
    { year: 1958, event: "The institute is founded on the basis of a laboratory headed by Gersh Budker.", sources: [{ label: "Science First Hand: Particle accelerators, microscopes of modern physics", url: "https://scfh.ru/en/papers/particle-accelerators-microscopes-of-modern-physics/" }] },
    { year: 1964, event: "The VEP-1 electron-electron collider is built, followed by the VEPP-2 electron-positron collider in 1966.", sources: [{ label: "Science First Hand: Particle accelerators, microscopes of modern physics", url: "https://scfh.ru/en/papers/particle-accelerators-microscopes-of-modern-physics/" }] },
    { year: 1966, event: "Budker proposes electron cooling, a method of shrinking beams of heavy particles by mixing them with a cold electron beam.", sources: [{ label: "Science First Hand: Story of electron cooling", url: "https://scfh.ru/en/papers/story-of-electron-cooling/" }] },
  ],
  experiments: [
    { id: 'binp-vepp4m', name: "VEPP-4M", description: "Electron-positron collider operating at the institute.", topics: ['qcd', 'electroweak'], sources: [{ label: "Science First Hand: Particle accelerators, microscopes of modern physics", url: "https://scfh.ru/en/papers/particle-accelerators-microscopes-of-modern-physics/" }] },
    { id: 'binp-vepp2000', name: "VEPP-2000", description: "Electron-positron collider for precise measurements of hadron production at low energies.", topics: ['qcd'], sources: [{ label: "Science First Hand: Particle accelerators, microscopes of modern physics", url: "https://scfh.ru/en/papers/particle-accelerators-microscopes-of-modern-physics/" }] },
  ],
  keyResults: [
  ],
  importantPeople: [
    { name: "Gersh Budker", contribution: "Founder of the institute; proposed electron cooling in 1966.", sources: [{ label: "Science First Hand: Particle accelerators, microscopes of modern physics", url: "https://scfh.ru/en/papers/particle-accelerators-microscopes-of-modern-physics/" }, { label: "Science First Hand: Story of electron cooling", url: "https://scfh.ru/en/papers/story-of-electron-cooling/" }] },
  ],
  readMore: [
    { label: "Official Site", url: "https://www.inp.nsk.su" },
  ],
};

export default facility;
