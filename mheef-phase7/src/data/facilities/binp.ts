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
  foundedBasis: { meaning: "established", sources: [{ label: "Science First Hand: Particle accelerators, microscopes of modern physics", url: "https://scfh.ru/en/papers/particle-accelerators-microscopes-of-modern-physics/" }] },
  location: { represents: "The institute's site in Akademgorodok, Novosibirsk", sources: [{ label: "OpenStreetMap: Budker Institute of Nuclear Physics", url: "https://www.openstreetmap.org/way/48179170" }] },
  status: 'active',
  overview: "The Budker Institute of Nuclear Physics in Novosibirsk was founded in 1958 on the basis of a laboratory headed by Gersh Budker. In 1965 it was one of only two centres, with Stanford, to make considerable advances in colliding-beam experiments: its VEP-1 electron-electron collider was built in 1964 and the VEPP-2 electron-positron collider followed in 1966, the year Budker proposed electron cooling. The institute runs the VEPP-4M and VEPP-2000 electron-positron colliders.",
  overviewSources: [{ label: "Science First Hand: Particle accelerators, microscopes of modern physics", url: "https://scfh.ru/en/papers/particle-accelerators-microscopes-of-modern-physics/" }, { label: "Science First Hand: Story of electron cooling", url: "https://scfh.ru/en/papers/story-of-electron-cooling/" }],
  specs: [
  ],
  images: [
    {
      file: 'vepp-2000.jpg',
      width: 1200,
      height: 900,
      alt: "A compact ring of blue magnets and beam pipes seen from above in a laboratory hall.",
      caption: "The VEPP-2000 electron–positron collider with its two detectors, SND and CMD-3, in 2012.",
      credit: "Eto shorcy",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:VEPP-2000_electron-positron_collider.jpg",
    },
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
