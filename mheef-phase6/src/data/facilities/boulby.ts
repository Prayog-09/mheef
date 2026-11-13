import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'boulby',
  name: "Boulby",
  fullName: "Boulby Underground Laboratory",
  type: 'underground-laboratory',
  country: "United Kingdom",
  lat: 54.553,
  lng: -0.825,
  founded: 1989,
  status: 'active',
  overview: "The Boulby Underground Laboratory is the United Kingdom's deep underground science facility, 1.1 km below the North Yorkshire coast in a working mine. It has hosted dark matter searches for decades, including the ZEPLIN liquid-xenon experiments that were forerunners of LUX-ZEPLIN, and now also supports low-background measurement, earth science and astrobiology.",
  specs: [
    { label: "Depth", value: "1.1 km (2,805 m water equivalent)", sources: [{ label: "Boulby Underground Laboratory", url: "https://www.boulby.stfc.ac.uk" }, { label: "STFC Boulby Underground Laboratory: status talk (2022)", url: "https://indico.stfc.ac.uk/event/324/contributions/2838/attachments/1036/1830/STFCBoulby_IOP_April2022_Final.pdf" }] },
    { label: "Laboratory volume", value: "4,000 m³, plus a 3,000 m³ outside experimental area", sources: [{ label: "Boulby Underground Laboratory: About", url: "https://www.boulby.stfc.ac.uk/about/" }] },
    { label: "Operator", value: "STFC, hosted by the mine operator ICL-UK", sources: [{ label: "Boulby Underground Laboratory: About", url: "https://www.boulby.stfc.ac.uk/about/" }] },
  ],
  history: [
    { year: 2012, event: "ZEPLIN-III publishes the dark matter results of its second science run.", sources: [{ label: "ZEPLIN-III Collaboration, Phys. Lett. B 709, 14 (2012)", url: "https://doi.org/10.1016/j.physletb.2012.01.064" }] },
    { year: 1989, event: "The first radioactive background measurements are taken underground in Boulby Mine.", sources: [{ label: "Boulby Underground Laboratory: About", url: "https://www.boulby.stfc.ac.uk/about/" }] },
    { year: 1993, event: "The first underground dark matter search data are taken at Boulby with sodium iodide detectors.", sources: [{ label: "Boulby Underground Laboratory: About", url: "https://www.boulby.stfc.ac.uk/about/" }] },
    { year: 2003, event: "A new laboratory opens, and the NAIAD and DRIFT-I experiments publish their first results.", sources: [{ label: "Boulby Underground Laboratory: About", url: "https://www.boulby.stfc.ac.uk/about/" }] },
    { year: 2007, event: "ZEPLIN-II, a two-phase xenon detector, publishes its first dark matter results.", sources: [{ label: "Boulby Underground Laboratory: About", url: "https://www.boulby.stfc.ac.uk/about/" }, { label: "ZEPLIN-II Collaboration, Astropart. Phys. 28, 287 (2007)", url: "https://doi.org/10.1016/j.astropartphys.2007.06.002" }] },
    { year: 2017, event: "The current laboratory is built to host a new generation of low-background experiments.", sources: [{ label: "Boulby Underground Laboratory: About", url: "https://www.boulby.stfc.ac.uk/about/" }] },
    { year: 2025, event: "Excavation for the next expansion of the laboratory is completed.", sources: [{ label: "Boulby Underground Laboratory: About", url: "https://www.boulby.stfc.ac.uk/about/" }] },
  ],
  experiments: [
    { id: 'boulby-zeplin3', name: "ZEPLIN-III", description: "Two-phase xenon detector searching for dark matter particles.", topics: ['dark-matter'], sources: [{ label: "ZEPLIN-III Collaboration, Phys. Lett. B 709, 14 (2012)", url: "https://doi.org/10.1016/j.physletb.2012.01.064" }] },
    { id: 'boulby-zeplin2', name: "ZEPLIN-II", description: "Two-phase xenon detector that set early limits on dark matter particles.", topics: ['dark-matter'], sources: [{ label: "ZEPLIN-II Collaboration, Astropart. Phys. 28, 287 (2007)", url: "https://doi.org/10.1016/j.astropartphys.2007.06.002" }] },
  ],
  keyResults: [
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Official Site", url: "https://www.boulby.stfc.ac.uk" },
  ],
};

export default facility;
