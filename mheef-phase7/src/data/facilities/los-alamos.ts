import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'los-alamos',
  name: "Los Alamos (LANSCE)",
  fullName: "Los Alamos Neutron Science Center",
  type: 'accelerator-laboratory',
  country: "United States",
  lat: 35.869,
  lng: -106.257,
  founded: 1972,
  status: 'active',
  overview: "The Los Alamos Neutron Science Center is built around a half-mile-long proton linear accelerator, opened as the Los Alamos Meson Physics Facility. Its intense beams made it a centre for pion, muon and neutrino physics. The LSND experiment there reported an unexplained excess of electron antineutrinos that still drives searches for sterile neutrinos.",
  specs: [
    { label: "Linear accelerator", value: "Half a mile long, 800 MeV protons", sources: [{ label: "Los Alamos National Laboratory: About LANSCE", url: "https://www.lanl.gov/science-engineering/science-facilities/lansce/about" }] },
  ],
  images: [
    {
      file: 'lampf-aerial.jpg',
      width: 1600,
      height: 1280,
      alt: "Aerial view of a long accelerator building and experimental halls on a mesa.",
      caption: "The Los Alamos Meson Physics Facility (LAMPF) from the air; the accelerator complex was later renamed LANSCE.",
      credit: "U.S. Department of Energy",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:U.S._Department_of_Energy_-_Science_-_279_001_001_(16493614026).jpg",
    },
  ],
  history: [
    { year: 1972, event: "The accelerator first reaches its design energy of 800 MeV on 9 June 1972.", sources: [{ label: "Los Alamos National Laboratory: 50 years of beaming", url: "https://www.lanl.gov/media/publications/1663/0922-50-years-of-beaming" }] },
    { year: 1996, event: "The LSND experiment reports evidence for muon antineutrinos changing into electron antineutrinos.", sources: [{ label: "LSND Collaboration, Phys. Rev. Lett. 77, 3082 (1996)", url: "https://doi.org/10.1103/PhysRevLett.77.3082" }] },
    { year: 2001, event: "LSND publishes its final result, an excess of electron antineutrino events that standard three-neutrino oscillations cannot explain.", sources: [{ label: "LSND Collaboration, Phys. Rev. D 64, 112007 (2001)", url: "https://doi.org/10.1103/PhysRevD.64.112007" }] },
  ],
  experiments: [
    { id: 'lanl-lsnd', name: "LSND", description: "Liquid Scintillator Neutrino Detector, searching for the appearance of electron antineutrinos in a beam of muon antineutrinos.", topics: ['neutrinos'], sources: [{ label: "LSND Collaboration, Phys. Rev. D 64, 112007 (2001)", url: "https://doi.org/10.1103/PhysRevD.64.112007" }] },
  ],
  keyResults: [
    { year: 2001, discovery: "The LSND Anomaly", description: "The excess of electron antineutrinos would require a neutrino mass difference far larger than those seen elsewhere, hinting at additional, sterile neutrinos.", sources: [{ label: "LSND Collaboration, Phys. Rev. D 64, 112007 (2001)", url: "https://doi.org/10.1103/PhysRevD.64.112007" }] },
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "LANSCE", url: "https://www.lanl.gov/science-engineering/science-facilities/lansce" },
  ],
};

export default facility;
