import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'icecube',
  name: 'IceCube Neutrino Observatory',
  type: 'neutrino-observatory',
  country: 'Antarctica',
  lat: -89.9944,
  lng: -63.4536,
  founded: 2010,
  status: 'active',
  overview: "The IceCube Neutrino Observatory at the geographic South Pole instruments a cubic kilometre of Antarctic ice between 1.5 and 2.5 km depth with 5,160 Digital Optical Modules on 86 vertical strings. It detects Cherenkov light from secondary particles produced when high-energy neutrinos interact in the ice — the world's largest neutrino telescope. IceCube opened the field of high-energy neutrino astronomy with its 2013 astrophysical neutrino detection, and in 2022 identified NGC 1068 as a cosmic neutrino source.",
  specs: [
    { label: "Instrumented volume", value: "One cubic kilometre of ice", sources: [{ label: "IceCube: The detector", url: "https://icecube.wisc.edu/science/icecube/" }] },
    { label: "Strings", value: "86", sources: [{ label: "IceCube: The detector", url: "https://icecube.wisc.edu/science/icecube/" }] },
    { label: "Digital optical modules", value: "5,160", sources: [{ label: "IceCube: The detector", url: "https://icecube.wisc.edu/science/icecube/" }] },
    { label: "DeepCore energy threshold", value: "About 10 GeV", sources: [{ label: "IceCube: The detector", url: "https://icecube.wisc.edu/science/icecube/" }] },
  ],
  images: [
    {
      file: 'icecube-laboratory.jpg',
      width: 1600,
      height: 1094,
      alt: "A blue two-storey building on stilts flanked by two white towers, standing on snow.",
      caption: "The IceCube Laboratory at the South Pole, 2023.",
      credit: "Christopher Michel",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:IceCube_Neutrino_Observatory_in_2023_02.jpg",
    },
  ],
  history: [
    { year: 1993, event: "The first AMANDA (Antarctic Muon And Neutrino Detector Array) strings are deployed at the South Pole in the 1993-94 season, a proof of concept for deep-ice neutrino detection.", sources: [{ label: "IceCube: The detector", url: "https://icecube.wisc.edu/science/icecube/" }] },
    { year: 2004, event: "IceCube drilling and DOM deployment begins, expanding on AMANDA infrastructure.", sources: [{ label: "IceCube: The detector", url: "https://icecube.wisc.edu/science/icecube/" }] },
    { year: 2010, event: "IceCube construction is completed on 18 December 2010, when the last of its 86 strings is lowered into the ice; with 5,160 optical modules it is the world's largest neutrino telescope.", sources: [{ label: "IceCube: The detector", url: "https://icecube.wisc.edu/science/icecube/" }] },
    { year: 2013, event: "IceCube announces the first detection of high-energy astrophysical neutrinos above 100 TeV, naming two PeV-scale events Bert and Ernie — opening the era of neutrino astronomy.", sources: [{ label: "IceCube Collaboration, Science 342, 1242856 (2013)", url: "https://doi.org/10.1126/science.1242856" }, { label: "IceCube Collaboration, Phys. Rev. Lett. 111, 021103 (2013)", url: "https://doi.org/10.1103/PhysRevLett.111.021103" }] },
    { year: 2022, event: "IceCube publishes evidence at 4.2 sigma for neutrino emission from NGC 1068 (Messier 77), a nearby Seyfert galaxy — the first identified steady-state cosmic neutrino source.", sources: [{ label: "IceCube Collaboration, Science 378, 538 (2022)", url: "https://doi.org/10.1126/science.abg3395" }] },
  ],
  experiments: [
    { id: 'icecube-main', name: 'IceCube', description: "Cubic-kilometre deep-ice neutrino telescope detecting TeV-PeV astrophysical neutrinos from cosmic accelerators including active galactic nuclei, gamma-ray bursts, and galaxy clusters.", topics: ['neutrinos', 'cosmic-rays'], startYear: 2010, sources: [{ label: "IceCube instrumentation and online systems, JINST 12, P03012 (2017)", url: "https://doi.org/10.1088/1748-0221/12/03/P03012" }, { label: "IceCube: The detector", url: "https://icecube.wisc.edu/science/icecube/" }] },
    { id: 'icecube-deepcore', name: 'DeepCore', description: "Dense low-energy sub-array of IceCube with a ~10 GeV threshold; measures atmospheric neutrino oscillation parameters and searches for dark matter annihilation in the Sun.", topics: ['neutrinos', 'dark-matter'], startYear: 2010, sources: [{ label: "The design and performance of IceCube DeepCore, Astropart. Phys. 35, 615 (2012)", url: "https://doi.org/10.1016/j.astropartphys.2012.01.004" }, { label: "IceCube: The detector", url: "https://icecube.wisc.edu/science/icecube/" }] },
  ],
  keyResults: [
    { year: 2013, discovery: "First High-Energy Astrophysical Neutrinos", description: "IceCube detected the first neutrinos of clear extraterrestrial origin at energies above 100 TeV, inaugurating high-energy neutrino astronomy and demonstrating the existence of PeV-scale cosmic accelerators.", sources: [{ label: "IceCube Collaboration, Science 342, 1242856 (2013)", url: "https://doi.org/10.1126/science.1242856" }] },
    { year: 2022, discovery: "NGC 1068 Identified as Neutrino Source", description: "Statistical evidence for neutrino emission from the Seyfert galaxy NGC 1068 provided the first identification of a steady-state astrophysical neutrino source, likely powered by accretion onto its central supermassive black hole.", sources: [{ label: "IceCube Collaboration, Science 378, 538 (2022)", url: "https://doi.org/10.1126/science.abg3395" }] },
  ],
  importantPeople: [
    { name: "Francis Halzen", contribution: "Principal investigator and chief scientific architect of IceCube; built the scientific case for deep-ice neutrino detection over three decades.", sources: [{ label: "WIPAC: Francis Halzen", url: "https://wipac.wisc.edu/people/faculty/francis-halzen" }] },
    { name: "Albrecht Karle", contribution: "IceCube associate director for science and instrumentation and principal investigator of the IceCube Upgrade project.", sources: [{ label: "WIPAC: Albrecht Karle", url: "https://wipac.wisc.edu/people/faculty/albrecht-karle" }] },
  ],
  readMore: [
    { label: "IceCube Official Site", url: "https://icecube.wisc.edu" },
    { label: "2013 Discovery Paper (Science)", url: "https://doi.org/10.1126/science.1242856" },
  ],
};

export default facility;
