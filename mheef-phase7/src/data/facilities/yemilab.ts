import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'yemilab',
  name: "Yemilab",
  type: 'underground-laboratory',
  country: "South Korea",
  lat: 37.19,
  lng: 128.66,
  founded: 2022,
  foundedBasis: { meaning: "completed", sources: [{ label: "Park et al., Construction of Yemilab, Front. Phys. 12, 1323991 (2024)", url: "https://doi.org/10.3389/fphy.2024.1323991" }] },
  status: 'active',
  overview: "Yemilab is the deep underground laboratory of the Center for Underground Physics of Korea's Institute for Basic Science (IBS), about 1,000 m below Mount Yemi in Jeongseon, Gangwon Province, a mountain that encompasses the Handuk iron mine. Completed in September 2022, it takes over the facilities of the Yangyang Underground Laboratory and is built to search for extremely rare interactions such as those of dark matter and neutrinos, including the AMoRE-II search for neutrinoless double-beta decay.",
  overviewSources: [{ label: "Park et al., Construction of Yemilab, Front. Phys. 12, 1323991 (2024)", url: "https://doi.org/10.3389/fphy.2024.1323991" }],
  specs: [
    { label: "Depth", value: "About 1,000 m", sources: [{ label: "Park et al., Construction of Yemilab, Front. Phys. 12, 1323991 (2024)", url: "https://doi.org/10.3389/fphy.2024.1323991" }] },
    { label: "Dedicated experimental area", value: "3,000 m³, plus a 6,300 m³ cylindrical pit", sources: [{ label: "Park et al., Construction of Yemilab, Front. Phys. 12, 1323991 (2024)", url: "https://doi.org/10.3389/fphy.2024.1323991" }] },
  ],
  history: [
    { year: 2022, event: "Construction of the laboratory is completed in September 2022.", sources: [{ label: "Park et al., Construction of Yemilab, Front. Phys. 12, 1323991 (2024)", url: "https://doi.org/10.3389/fphy.2024.1323991" }] },
  ],
  experiments: [
    { id: 'yemilab-amore', name: "AMoRE", description: "Search for the neutrinoless double-beta decay of molybdenum-100 with cryogenic crystal detectors, begun at the Yangyang laboratory.", topics: ['neutrinos'], sources: [{ label: "AMoRE Collaboration, Eur. Phys. J. C 79, 791 (2019)", url: "https://doi.org/10.1140/epjc/s10052-019-7279-1" }, { label: "Park et al., Construction of Yemilab, Front. Phys. 12, 1323991 (2024)", url: "https://doi.org/10.3389/fphy.2024.1323991" }] },
  ],
  keyResults: [
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Construction of Yemilab (paper)", url: "https://doi.org/10.3389/fphy.2024.1323991" },
  ],
};

export default facility;
