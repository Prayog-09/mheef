import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'kagra',
  name: 'KAGRA',
  fullName: "Kamioka Gravitational Wave Detector",
  type: 'gravitational-wave-observatory',
  country: 'Japan',
  lat: 36.411,
  lng: 137.306,
  founded: 2019,
  foundedBasis: { meaning: "completed", sources: [{ label: "Overview of KAGRA (arXiv:2009.09305)", url: "https://arxiv.org/abs/2009.09305" }] },
  location: { represents: "Mount Ikenoyama at Kamioka, inside which KAGRA lies", sources: [{ label: "KAGRA Collaboration, Nature Astronomy 3, 35 (2019) (arXiv:1811.08079)", url: "https://arxiv.org/abs/1811.08079" }, { label: "OpenStreetMap: Ikenoyama (池ノ山)", url: "https://www.openstreetmap.org/node/8719816444" }] },
  status: 'active',
  overview: "KAGRA, formerly called LCGT (Large-scale Cryogenic Gravitational wave Telescope), is a gravitational-wave detector with two 3-km arms in an L shape, inside Mount Ikenoyama at Kamioka in Gifu Prefecture, Japan. Its design is similar to Advanced LIGO and Virgo, but it operates at cryogenic temperature with sapphire mirrors, a feature considered important for third-generation detectors, so it is often called a 2.5-generation detector. Approved in 2010, it finished installing its designed configuration in 2019, made its first observing run in April 2020 together with GEO600 after LIGO and Virgo had suspended observing, and joined the O4 run for four weeks in 2023.",
  overviewSources: [{ label: "KAGRA Collaboration, Nature Astronomy 3, 35 (2019) (arXiv:1811.08079)", url: "https://arxiv.org/abs/1811.08079" }, { label: "KAGRA Collaboration, Nature Astronomy 3, 35 (2019)", url: "https://doi.org/10.1038/s41550-018-0658-y" }, { label: "Overview of KAGRA (arXiv:2009.09305)", url: "https://arxiv.org/abs/2009.09305" }, { label: "ICRR: Update on KAGRA's O4 observing run (2023)", url: "https://gwcenter.icrr.u-tokyo.ac.jp/en/archives/1820" }],
  specs: [
    { label: "Arm length", value: "3 km", sources: [{ label: "KAGRA Collaboration, Nature Astronomy 3, 35 (2019)", url: "https://doi.org/10.1038/s41550-018-0658-y" }] },
    { label: "Mirrors", value: "Sapphire, cooled to cryogenic temperature", sources: [{ label: "KAGRA Collaboration, Nature Astronomy 3, 35 (2019)", url: "https://doi.org/10.1038/s41550-018-0658-y" }] },
    { label: "Site", value: "Underground, inside Mount Ikenoyama", sources: [{ label: "KAGRA Collaboration, Nature Astronomy 3, 35 (2019)", url: "https://doi.org/10.1038/s41550-018-0658-y" }] },
  ],
  images: [
    {
      file: 'arm-tunnel.jpg',
      width: 1600,
      height: 1200,
      alt: "A steel vacuum tube running through a rock tunnel.",
      caption: "KAGRA under construction in 2015: the vacuum tube of one of the interferometer arms.",
      credit: "Christopher Berry",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:In-construction_KAGRA_gravitational-wave_detector.jpg",
    },
  ],
  history: [
    { year: 2010, event: "KAGRA (originally LCGT, Large-scale Cryogenic Gravitational wave Telescope) approved by the Japanese government and MEXT.", sources: [{ label: "KAGRA Collaboration, Nature Astronomy 3, 35 (2019)", url: "https://doi.org/10.1038/s41550-018-0658-y" }] },
    { year: 2012, event: "Tunnel excavation begins inside the Kamioka mine, sharing the mountain with the Super-Kamiokande detector.", sources: [{ label: "KAGRA Collaboration, Nature Astronomy 3, 35 (2019)", url: "https://doi.org/10.1038/s41550-018-0658-y" }] },
    { year: 2019, event: "Installation of the KAGRA interferometer is largely completed in spring 2019 and commissioning begins.", sources: [{ label: "Overview of KAGRA (arXiv:2009.09305)", url: "https://arxiv.org/abs/2009.09305" }] },
    { year: 2020, event: "KAGRA makes its first observing run in April 2020, jointly with GEO600 in Germany (O3GK), after LIGO and Virgo had suspended their O3 run.", sources: [{ label: "Overview of KAGRA (arXiv:2009.09305)", url: "https://arxiv.org/abs/2009.09305" }] },
    { year: 2023, event: "KAGRA joins the O4 observing run for four weeks, ending on 21 June 2023, then returns to commissioning to improve its sensitivity.", sources: [{ label: "ICRR: Update on KAGRA's O4 observing run (2023)", url: "https://gwcenter.icrr.u-tokyo.ac.jp/en/archives/1820" }] },
  ],
  experiments: [
    { id: 'kagra-det', name: 'KAGRA Interferometer', description: "3-km cryogenic underground Fabry-Perot Michelson interferometer using sapphire test masses at 20 K, targeting improved sensitivity below 100 Hz compared to room-temperature detectors.", topics: ['gravitational-waves'], startYear: 2019, sources: [{ label: "KAGRA Collaboration, Nature Astronomy 3, 35 (2019)", url: "https://doi.org/10.1038/s41550-018-0658-y" }] },
  ],
  keyResults: [],
  importantPeople: [
    { name: "Takaaki Kajita", contribution: "Principal investigator of KAGRA; also Nobel Prize in Physics 2015 for the discovery of atmospheric neutrino oscillations at Super-Kamiokande.", sources: [{ label: "Nobel Prize in Physics 2015", url: "https://www.nobelprize.org/prizes/physics/2015/summary/" }] },
  ],
  readMore: [
    { label: "KAGRA Official Site", url: "https://gwcenter.icrr.u-tokyo.ac.jp" },
  ],
};

export default facility;
