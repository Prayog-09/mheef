import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'riken-ribf',
  name: "RIKEN RIBF",
  fullName: "RIKEN RI Beam Factory",
  type: 'nuclear-physics-facility',
  country: "Japan",
  lat: 35.779,
  lng: 139.614,
  founded: 2006,
  foundedBasis: { meaning: "first-operation", sources: [{ label: "Goto et al., Commissioning of RIKEN RI Beam Factory, Cyclotrons 2007 proceedings", url: "https://accelconf.web.cern.ch/c07/PAPERS/3.PDF" }] },
  location: { represents: "RIKEN's Wako campus", sources: [{ label: "OpenStreetMap: RIKEN, Wako", url: "https://www.openstreetmap.org/way/91530744" }] },
  status: 'active',
  overview: "The RI Beam Factory (RIBF) at the RIKEN Nishina Center in Wako, Saitama, generates beams of unstable nuclei of all elements up to uranium. Its final accelerator, the Superconducting Ring Cyclotron, the world's first superconducting ring cyclotron, extracted its first beam on 28 December 2006. A RIKEN team led by Kosuke Morita synthesised element 113, nihonium, in 2004; it was the first element discovered in Asia.",
  overviewSources: [{ label: "RIKEN Nishina Center: About RIBF", url: "https://www.nishina.riken.jp/facility/RIBFabout_e.html" }, { label: "Goto et al., Commissioning of RIKEN RI Beam Factory, Cyclotrons 2007 proceedings", url: "https://accelconf.web.cern.ch/c07/PAPERS/3.PDF" }, { label: "Morita et al., J. Phys. Soc. Jpn. 73, 2593 (2004)", url: "https://doi.org/10.1143/JPSJ.73.2593" }, { label: "RIKEN: The discovery of element 113", url: "https://www.riken.jp/en/about/history/story/113/" }],
  specs: [
    { label: "Uranium beam energy", value: "345 MeV per nucleon", sources: [{ label: "RIKEN Nishina Center: About RIBF", url: "https://www.nishina.riken.jp/facility/RIBFabout_e.html" }] },
    { label: "Superconducting ring cyclotron", value: "8,300 tonnes, the first of its kind", sources: [{ label: "RIKEN Nishina Center: About RIBF", url: "https://www.nishina.riken.jp/facility/RIBFabout_e.html" }] },
  ],
  images: [
    {
      file: 'superconducting-ring-cyclotron.jpg',
      width: 1600,
      height: 1200,
      alt: "A huge pink and green cyclotron filling an underground hall.",
      caption: "The Superconducting Ring Cyclotron of the RI Beam Factory, 2018.",
      credit: "Kestrel",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:RIKEN_Superconducting_Ring_Cyclotron_P4213478.jpg",
    },
  ],
  history: [
    { year: 2004, event: "Kosuke Morita's team synthesises the first atom of element 113 in July 2004 by fusing zinc and bismuth.", sources: [{ label: "Morita et al., J. Phys. Soc. Jpn. 73, 2593 (2004)", url: "https://doi.org/10.1143/JPSJ.73.2593" }, { label: "RIKEN: Element 113 officially named nihonium (2016)", url: "https://www.riken.jp/en/pr/topics/2016/20161130_1/" }] },
    { year: 2016, event: "The name nihonium (Nh) for element 113 is formally approved in November 2016.", sources: [{ label: "RIKEN: Element 113 officially named nihonium (2016)", url: "https://www.riken.jp/en/pr/topics/2016/20161130_1/" }] },
  ],
  experiments: [
    { id: 'ribf-bigrips', name: "BigRIPS", description: "Superconducting separator that selects and identifies rare isotopes produced from the cyclotron beams.", topics: ['rare-isotopes', 'nuclear-structure'], sources: [{ label: "Kubo et al., BigRIPS separator, Prog. Theor. Exp. Phys. 2012, 03C003", url: "https://doi.org/10.1093/ptep/pts064" }, { label: "RIKEN Nishina Center: About RIBF", url: "https://www.nishina.riken.jp/facility/RIBFabout_e.html" }] },
  ],
  keyResults: [
    { year: 2004, discovery: "Synthesis of Element 113 (Nihonium)", description: "The fusion of zinc-70 with bismuth-209 produced element 113, later recognised as the first element discovered in Asia.", sources: [{ label: "Morita et al., J. Phys. Soc. Jpn. 73, 2593 (2004)", url: "https://doi.org/10.1143/JPSJ.73.2593" }, { label: "RIKEN: The discovery of element 113", url: "https://www.riken.jp/en/about/history/story/113/" }] },
  ],
  importantPeople: [
    { name: "Kosuke Morita", contribution: "Led the RIKEN team that synthesised element 113, nihonium.", sources: [{ label: "Morita et al., J. Phys. Soc. Jpn. 73, 2593 (2004)", url: "https://doi.org/10.1143/JPSJ.73.2593" }, { label: "RIKEN: Element 113 officially named nihonium (2016)", url: "https://www.riken.jp/en/pr/topics/2016/20161130_1/" }] },
  ],
  readMore: [
    { label: "Official Site", url: "https://www.nishina.riken.jp/index_e.html" },
  ],
};

export default facility;
