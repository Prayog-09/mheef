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
  status: 'active',
  overview: "KAGRA (Kamioka Gravitational Wave Detector) is the first large-scale gravitational-wave detector built underground and using cryogenic sapphire mirrors cooled to 20 K. Located in the Kamioka mine in Gifu Prefecture, its 3-km interferometer is designed to reduce seismic and thermal noise below the limits of current LIGO/Virgo sensitivity. KAGRA joined the LIGO-Virgo network for O3b in 2020 and O4 in 2023, bringing the global network to three continents.",
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
