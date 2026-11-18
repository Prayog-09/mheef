import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'telescope-array',
  name: "Telescope Array",
  fullName: "Telescope Array Project",
  type: 'cosmic-ray-observatory',
  country: "United States",
  lat: 39.3,
  lng: -112.91,
  founded: 2008,
  foundedBasis: { meaning: "first-operation", sources: [{ label: "The surface detector array of the Telescope Array experiment, Nucl. Instrum. Meth. A 689, 87 (2012)", url: "https://doi.org/10.1016/j.nima.2012.05.079" }] },
  location: { represents: "The centre of the surface array, 39.3° N, 112.9° W", sources: [{ label: "The surface detector array of the Telescope Array experiment, Nucl. Instrum. Meth. A 689, 87 (2012)", url: "https://doi.org/10.1016/j.nima.2012.05.079" }] },
  status: 'active',
  overview: "The Telescope Array is a cosmic-ray observatory in the desert of Millard County, Utah, about 1,400 m above sea level. Its 507 scintillator surface detectors, spaced 1.2 km apart over about 700 km², are surrounded by three fluorescence detector stations; the surface array began operating in 2008. In 2014 the collaboration reported a 'hotspot' of cosmic rays above 57 EeV in the northern sky, and on 27 May 2021 the array recorded an extremely energetic cosmic ray of about 244 EeV.",
  overviewSources: [{ label: "The surface detector array of the Telescope Array experiment, Nucl. Instrum. Meth. A 689, 87 (2012)", url: "https://doi.org/10.1016/j.nima.2012.05.079" }, { label: "Telescope Array Collaboration, Astrophys. J. Lett. 790, L21 (2014)", url: "https://doi.org/10.1088/2041-8205/790/2/L21" }, { label: "Telescope Array Collaboration, Science 382, 903 (2023)", url: "https://doi.org/10.1126/science.abo5095" }],
  specs: [
    { label: "Surface detectors", value: "507, spaced 1.2 km apart", sources: [{ label: "The surface detector array of the Telescope Array experiment, Nucl. Instrum. Meth. A 689, 87 (2012)", url: "https://doi.org/10.1016/j.nima.2012.05.079" }] },
    { label: "Array area", value: "About 700 km²", sources: [{ label: "The surface detector array of the Telescope Array experiment, Nucl. Instrum. Meth. A 689, 87 (2012)", url: "https://doi.org/10.1016/j.nima.2012.05.079" }] },
  ],
  history: [
    { year: 2008, event: "The surface detector array begins operating.", sources: [{ label: "The surface detector array of the Telescope Array experiment, Nucl. Instrum. Meth. A 689, 87 (2012)", url: "https://doi.org/10.1016/j.nima.2012.05.079" }] },
    { year: 2014, event: "The collaboration reports a 'hotspot', a cluster of cosmic rays above 57 EeV in the northern sky.", sources: [{ label: "Telescope Array Collaboration, Astrophys. J. Lett. 790, L21 (2014)", url: "https://doi.org/10.1088/2041-8205/790/2/L21" }] },
    { year: 2021, event: "On 27 May 2021 the surface array records a cosmic ray with an energy of about 244 EeV.", sources: [{ label: "Telescope Array Collaboration, Science 382, 903 (2023)", url: "https://doi.org/10.1126/science.abo5095" }] },
  ],
  experiments: [
    { id: 'ta-sd', name: "Surface detector array", description: "507 plastic scintillator stations measuring the particles of extensive air showers at ground level.", topics: ['cosmic-rays'], startYear: 2008, sources: [{ label: "The surface detector array of the Telescope Array experiment, Nucl. Instrum. Meth. A 689, 87 (2012)", url: "https://doi.org/10.1016/j.nima.2012.05.079" }] },
  ],
  keyResults: [
    { year: 2023, discovery: "An Extremely Energetic Cosmic Ray", description: "The 244 EeV event arrived from the direction of the Local Void, where no obvious source is known.", sources: [{ label: "Telescope Array Collaboration, Science 382, 903 (2023)", url: "https://doi.org/10.1126/science.abo5095" }] },
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Official Site", url: "http://www.telescopearray.org" },
  ],
};

export default facility;
