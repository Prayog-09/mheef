import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'km3net',
  name: "KM3NeT",
  fullName: "Cubic Kilometre Neutrino Telescope",
  type: 'neutrino-observatory',
  country: "Mediterranean Sea (Italy / France)",
  lat: 36.27,
  lng: 16.1,
  founded: 2015,
  status: 'active',
  overview: "KM3NeT is a neutrino telescope being built on the floor of the Mediterranean Sea. Its ARCA detector off Sicily looks for high-energy neutrinos from the cosmos, while the denser ORCA detector off Toulon studies neutrino oscillations. Although still under construction, ARCA recorded in 2023 the most energetic neutrino ever observed.",
  specs: [
    { label: "ARCA depth", value: "About 3,500 m, off Portopalo di Capo Passero, Sicily", sources: [{ label: "Nikhef: KM3NeT detects the highest energy neutrino ever observed", url: "https://www.nikhef.nl/en/news/km3net-detects-the-highest-energy-neutrino-ever-observed/" }] },
    { label: "ORCA depth", value: "2,450 m, about 40 km off Toulon", sources: [{ label: "Nikhef: KM3NeT detects the highest energy neutrino ever observed", url: "https://www.nikhef.nl/en/news/km3net-detects-the-highest-energy-neutrino-ever-observed/" }] },
    { label: "Planned detection units", value: "230 for ARCA, 115 for ORCA", sources: [{ label: "Nikhef: KM3NeT detects the highest energy neutrino ever observed", url: "https://www.nikhef.nl/en/news/km3net-detects-the-highest-energy-neutrino-ever-observed/" }] },
  ],
  history: [
    { year: 2016, event: "The collaboration publishes its letter of intent for KM3NeT 2.0, with the ARCA and ORCA detectors.", sources: [{ label: "Letter of intent for KM3NeT 2.0, J. Phys. G 43, 084001 (2016)", url: "https://doi.org/10.1088/0954-3899/43/8/084001" }] },
    { year: 2023, event: "On 13 February 2023 the partly built ARCA detector records a muon from a neutrino with an estimated energy of about 220 PeV.", sources: [{ label: "KM3NeT Collaboration, Nature 638, 376 (2025)", url: "https://doi.org/10.1038/s41586-024-08543-1" }, { label: "Nikhef: KM3NeT detects the highest energy neutrino ever observed", url: "https://www.nikhef.nl/en/news/km3net-detects-the-highest-energy-neutrino-ever-observed/" }] },
    { year: 2025, event: "The observation of the ultra-high-energy neutrino is published in Nature.", sources: [{ label: "KM3NeT Collaboration, Nature 638, 376 (2025)", url: "https://doi.org/10.1038/s41586-024-08543-1" }] },
  ],
  experiments: [
    { id: 'km3net-arca', name: "ARCA", description: "Astroparticle Research with Cosmics in the Abyss: a sparse deep-sea array for high-energy cosmic neutrinos.", topics: ['neutrinos', 'cosmic-rays'], sources: [{ label: "Letter of intent for KM3NeT 2.0, J. Phys. G 43, 084001 (2016)", url: "https://doi.org/10.1088/0954-3899/43/8/084001" }, { label: "Nikhef: KM3NeT detects the highest energy neutrino ever observed", url: "https://www.nikhef.nl/en/news/km3net-detects-the-highest-energy-neutrino-ever-observed/" }] },
    { id: 'km3net-orca', name: "ORCA", description: "Oscillation Research with Cosmics in the Abyss: a dense array measuring atmospheric neutrino oscillations.", topics: ['neutrinos'], sources: [{ label: "Letter of intent for KM3NeT 2.0, J. Phys. G 43, 084001 (2016)", url: "https://doi.org/10.1088/0954-3899/43/8/084001" }, { label: "Nikhef: KM3NeT detects the highest energy neutrino ever observed", url: "https://www.nikhef.nl/en/news/km3net-detects-the-highest-energy-neutrino-ever-observed/" }] },
  ],
  keyResults: [
    { year: 2025, discovery: "The Most Energetic Neutrino Observed", description: "A single event in ARCA implied a cosmic neutrino of about 220 PeV, far above any previously detected.", sources: [{ label: "KM3NeT Collaboration, Nature 638, 376 (2025)", url: "https://doi.org/10.1038/s41586-024-08543-1" }] },
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Official Site", url: "https://www.km3net.org" },
  ],
};

export default facility;
