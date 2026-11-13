import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'canfranc',
  name: "Canfranc (LSC)",
  fullName: "Laboratorio Subterráneo de Canfranc",
  type: 'underground-laboratory',
  country: "Spain",
  lat: 42.775,
  lng: -0.529,
  founded: 1985,
  status: 'active',
  overview: "The Canfranc Underground Laboratory lies under Mount Tobazo on the Spanish side of the Pyrenees, between the Somport road tunnel and a disused railway tunnel. Its ANAIS-112 experiment uses sodium iodide crystals to test the annual-modulation signal claimed by DAMA/LIBRA with the same target material.",
  specs: [
    { label: "Maximum depth", value: "800 m of rock", sources: [{ label: "Canfranc biology platform, Front. Phys. 12 (2024)", url: "https://doi.org/10.3389/fphy.2024.1397799" }] },
    { label: "ANAIS-112 overburden", value: "2,450 m water equivalent", sources: [{ label: "ANAIS-112 Collaboration, Phys. Rev. Lett. 123, 031301 (2019)", url: "https://doi.org/10.1103/PhysRevLett.123.031301" }] },
    { label: "Older underground facilities", value: "1,560 m² and 10,500 m³", sources: [{ label: "LSC: History", url: "https://lsc-canfranc.es/en/history/" }] },
  ],
  history: [
    { year: 2017, event: "ANAIS-112 begins taking data on 3 August 2017.", sources: [{ label: "ANAIS-112 Collaboration, Phys. Rev. Lett. 123, 031301 (2019)", url: "https://doi.org/10.1103/PhysRevLett.123.031301" }] },
    { year: 2021, event: "Three years of ANAIS-112 data show no annual modulation, in tension with the DAMA/LIBRA signal.", sources: [{ label: "ANAIS-112 Collaboration, Phys. Rev. D 103, 102005 (2021)", url: "https://doi.org/10.1103/PhysRevD.103.102005" }] },
    { year: 1985, event: "A. Morales and the University of Zaragoza's nuclear and astroparticle physics group begin using the abandoned railway tunnel for underground experiments.", sources: [{ label: "LSC: History", url: "https://lsc-canfranc.es/en/history/" }] },
    { year: 1994, event: "A new experimental hall of 118 m² is excavated during work on the Somport road tunnel.", sources: [{ label: "LSC: History", url: "https://lsc-canfranc.es/en/history/" }] },
    { year: 2006, event: "The main laboratory, 800 m under Mount Tobazo, is completed.", sources: [{ label: "LSC: History", url: "https://lsc-canfranc.es/en/history/" }] },
    { year: 2010, event: "The University of Zaragoza hands the underground facilities over to the LSC Consortium on 30 June 2010.", sources: [{ label: "LSC: History", url: "https://lsc-canfranc.es/en/history/" }] },
  ],
  experiments: [
    { id: 'lsc-anais', name: "ANAIS-112", description: "112 kg of sodium iodide scintillators searching for an annual modulation in the dark matter interaction rate.", topics: ['dark-matter'], startYear: 2017, sources: [{ label: "ANAIS-112 Collaboration, Phys. Rev. Lett. 123, 031301 (2019)", url: "https://doi.org/10.1103/PhysRevLett.123.031301" }, { label: "ANAIS-112 Collaboration, Phys. Rev. D 103, 102005 (2021)", url: "https://doi.org/10.1103/PhysRevD.103.102005" }] },
    { id: 'lsc-next', name: "NEXT", description: "High-pressure xenon gas time projection chambers searching for the neutrinoless double-beta decay of xenon-136.", topics: ['neutrinos'], sources: [{ label: "NEXT-100 Technical Design Report, JINST 7, T06001 (2012)", url: "https://doi.org/10.1088/1748-0221/7/06/T06001" }, { label: "NEXT Collaboration, JHEP 10 (2019) 230", url: "https://doi.org/10.1007/JHEP10(2019)230" }] },
  ],
  keyResults: [
  ],
  importantPeople: [
    { name: "A. Morales", contribution: "Started the underground physics programme at Canfranc with the University of Zaragoza group in 1985.", sources: [{ label: "LSC: History", url: "https://lsc-canfranc.es/en/history/" }] },
  ],
  readMore: [
    { label: "Official Site", url: "https://lsc-canfranc.es/en/" },
  ],
};

export default facility;
