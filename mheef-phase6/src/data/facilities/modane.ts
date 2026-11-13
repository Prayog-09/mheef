import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'modane',
  name: "Modane (LSM)",
  fullName: "Laboratoire Souterrain de Modane",
  type: 'underground-laboratory',
  country: "France",
  lat: 45.142,
  lng: 6.689,
  founded: 1982,
  status: 'active',
  overview: "The Modane Underground Laboratory sits at the midpoint of the Fréjus road tunnel between France and Italy, under about 1,700 m of rock, which makes it one of the deepest laboratories in Europe. Built for a proton decay experiment, it later hosted the NEMO-3 search for neutrinoless double-beta decay and the EDELWEISS dark matter experiment.",
  specs: [
    { label: "Rock overburden", value: "1,700 m (4,800 m water equivalent)", sources: [{ label: "Piquemal, Modane underground laboratory: status and project, Eur. Phys. J. Plus 127, 110 (2012)", url: "https://ui.adsabs.harvard.edu/abs/2012EPJP..127..110P" }] },
  ],
  images: [
    {
      file: 'germanium-detectors.jpg',
      width: 1600,
      height: 900,
      alt: "A row of liquid-nitrogen vessels and shielded detectors in an underground room.",
      caption: "Germanium detectors in the Modane Underground Laboratory, 2023.",
      credit: "Wikimedia Commons user “Photo de qualité médiocre”",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Laboratoire_souterrain_de_Modane_-_d%C3%A9tecteurs_Germanium.jpg",
    },
  ],
  history: [
    { year: 2015, event: "NEMO-3 publishes its final search for the neutrinoless double-beta decay of molybdenum-100.", sources: [{ label: "NEMO-3 Collaboration, Phys. Rev. D 92, 072011 (2015)", url: "https://doi.org/10.1103/PhysRevD.92.072011" }] },
    { year: 2016, event: "EDELWEISS-III publishes limits on low-mass dark matter particles.", sources: [{ label: "EDELWEISS Collaboration, JCAP 05 (2016) 019", url: "https://doi.org/10.1088/1475-7516/2016/05/019" }] },
  ],
  experiments: [
    { id: 'lsm-nemo3', name: "NEMO-3", description: "Tracking detector and calorimeter that recorded the two electrons of double-beta decay in thin source foils.", topics: ['neutrinos'], sources: [{ label: "NEMO-3 Collaboration, Phys. Rev. D 92, 072011 (2015)", url: "https://doi.org/10.1103/PhysRevD.92.072011" }] },
    { id: 'lsm-edelweiss', name: "EDELWEISS", description: "Cryogenic germanium detectors measuring heat and ionisation to search for dark matter.", topics: ['dark-matter'], sources: [{ label: "EDELWEISS Collaboration, JCAP 05 (2016) 019", url: "https://doi.org/10.1088/1475-7516/2016/05/019" }] },
  ],
  keyResults: [
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Official Site", url: "https://lsm.in2p3.fr" },
  ],
};

export default facility;
