import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'antares',
  name: "ANTARES",
  fullName: "Astronomy with a Neutrino Telescope and Abyss environmental RESearch",
  type: 'neutrino-observatory',
  country: "France",
  lat: 42.8,
  lng: 6.17,
  founded: 2006,
  status: 'historic',
  overview: "ANTARES was the first neutrino telescope in the deep sea, anchored about 2.5 km down in the Mediterranean off Toulon. Its twelve lines of optical modules watched for light from neutrino interactions for sixteen years and proved the techniques now used by its successor, KM3NeT.",
  specs: [
    { label: "Detection lines", value: "12, carrying 885 optical modules", sources: [{ label: "Nikhef: After sixteen years ANTARES is shut down (2022)", url: "https://www.nikhef.nl/www/en/news/after-sixteen-years-of-deep-sea-neutrino-watching-antares-is-shut-down/" }, { label: "ANTARES: the first undersea neutrino telescope, Nucl. Instrum. Meth. A 656, 11 (2011)", url: "https://doi.org/10.1016/j.nima.2011.06.103" }] },
  ],
  history: [
    { year: 2006, event: "The first detection line is deployed.", sources: [{ label: "Nikhef: After sixteen years ANTARES is shut down (2022)", url: "https://www.nikhef.nl/www/en/news/after-sixteen-years-of-deep-sea-neutrino-watching-antares-is-shut-down/" }] },
    { year: 2008, event: "The detector is completed in May 2008.", sources: [{ label: "Nikhef: After sixteen years ANTARES is shut down (2022)", url: "https://www.nikhef.nl/www/en/news/after-sixteen-years-of-deep-sea-neutrino-watching-antares-is-shut-down/" }] },
    { year: 2022, event: "ANTARES stops taking data in February 2022 and is dismantled.", sources: [{ label: "Nikhef: After sixteen years ANTARES is shut down (2022)", url: "https://www.nikhef.nl/www/en/news/after-sixteen-years-of-deep-sea-neutrino-watching-antares-is-shut-down/" }] },
  ],
  experiments: [
    { id: 'antares-det', name: "ANTARES detector", description: "Twelve vertical lines of optical modules on the seabed, detecting Cherenkov light from neutrino-induced muons.", topics: ['neutrinos', 'cosmic-rays'], startYear: 2006, endYear: 2022, sources: [{ label: "ANTARES: the first undersea neutrino telescope, Nucl. Instrum. Meth. A 656, 11 (2011)", url: "https://doi.org/10.1016/j.nima.2011.06.103" }, { label: "Nikhef: After sixteen years ANTARES is shut down (2022)", url: "https://www.nikhef.nl/www/en/news/after-sixteen-years-of-deep-sea-neutrino-watching-antares-is-shut-down/" }] },
  ],
  keyResults: [
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Official Site", url: "https://antares.in2p3.fr" },
  ],
};

export default facility;
