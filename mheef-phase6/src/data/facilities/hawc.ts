import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'hawc',
  name: "HAWC",
  fullName: "High-Altitude Water Cherenkov Observatory",
  type: 'gamma-ray-observatory',
  country: "Mexico",
  lat: 18.995,
  lng: -97.308,
  founded: 2015,
  status: 'active',
  overview: "HAWC is an array of 300 water tanks at 4,100 m on the flank of the Sierra Negra volcano in Puebla, Mexico. Each tank detects the particles of air showers started by gamma rays and cosmic rays, day and night, giving a continuous view of a large part of the sky between about 100 GeV and 100 TeV.",
  specs: [
    { label: "Altitude", value: "4,100 m", sources: [{ label: "HAWC Collaboration, Astrophys. J. 843, 39 (2017)", url: "https://doi.org/10.3847/1538-4357/aa7555" }] },
    { label: "Water Cherenkov detectors", value: "300 tanks with 1,200 photomultiplier tubes", sources: [{ label: "The HAWC Gamma-Ray Observatory: Design, Calibration, and Operation (arXiv:1310.0074)", url: "https://arxiv.org/abs/1310.0074" }, { label: "HAWC Collaboration, Astrophys. J. 843, 39 (2017)", url: "https://doi.org/10.3847/1538-4357/aa7555" }] },
    { label: "Site area", value: "About 22,000 m²", sources: [{ label: "HAWC Collaboration, Astrophys. J. 843, 39 (2017)", url: "https://doi.org/10.3847/1538-4357/aa7555" }] },
  ],
  history: [
    { year: 2015, event: "The full array of 300 tanks is completed in March 2015.", sources: [{ label: "HAWC Collaboration, Astrophys. J. 843, 39 (2017)", url: "https://doi.org/10.3847/1538-4357/aa7555" }] },
    { year: 2017, event: "HAWC finds extended gamma-ray emission around the nearby pulsars Geminga and PSR B0656+14, limiting their contribution to the positrons observed at Earth.", sources: [{ label: "HAWC Collaboration, Science 358, 911 (2017)", url: "https://doi.org/10.1126/science.aan4880" }] },
  ],
  experiments: [
    { id: 'hawc-array', name: "HAWC array", description: "300 water Cherenkov tanks recording air-shower particles to map the gamma-ray sky.", topics: ['cosmic-rays'], startYear: 2015, sources: [{ label: "HAWC Collaboration, Astrophys. J. 843, 39 (2017)", url: "https://doi.org/10.3847/1538-4357/aa7555" }, { label: "The HAWC Gamma-Ray Observatory: Design, Calibration, and Operation (arXiv:1310.0074)", url: "https://arxiv.org/abs/1310.0074" }] },
  ],
  keyResults: [
    { year: 2017, discovery: "Gamma-Ray Halos Around Nearby Pulsars", description: "Extended emission around two pulsars showed that their positrons diffuse too slowly to explain the excess seen at Earth.", sources: [{ label: "HAWC Collaboration, Science 358, 911 (2017)", url: "https://doi.org/10.1126/science.aan4880" }] },
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Official Site", url: "https://www.hawc-observatory.org" },
  ],
};

export default facility;
