import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'frascati',
  name: "Frascati (LNF)",
  fullName: "INFN Laboratori Nazionali di Frascati",
  type: 'accelerator-laboratory',
  country: "Italy",
  lat: 41.8236,
  lng: 12.6736,
  founded: 1954,
  status: 'active',
  overview: "The Frascati National Laboratories near Rome were founded by INFN to host Italy's first accelerator, an electron synchrotron. In 1961 Bruno Touschek's group built AdA there, the first electron-positron storage ring, the ancestor of every later collider of matter and antimatter. The larger ADONE collider followed, and the laboratory now operates the DAFNE electron-positron collider.",
  specs: [
    { label: "DAFNE beam energy", value: "0.51 GeV per beam", sources: [{ label: "Overview of Beam Dynamics Studies at DAFNE (arXiv:0806.1105)", url: "https://arxiv.org/abs/0806.1105" }] },
  ],
  history: [
    { year: 1954, event: "The laboratory is founded to host a 1.1 GeV electron synchrotron, the first accelerator built in Italy.", sources: [{ label: "Bruno Touschek and AdA: from Frascati to Orsay (arXiv:1805.09434)", url: "https://arxiv.org/abs/1805.09434" }] },
    { year: 1961, event: "AdA (Anello di Accumulazione), proposed by Bruno Touschek, starts to operate in February 1961 as the first electron-positron storage ring.", sources: [{ label: "Bruno Touschek and AdA: from Frascati to Orsay (arXiv:1805.09434)", url: "https://arxiv.org/abs/1805.09434" }, { label: "Touschek with AdA in Orsay and the first direct observation of electron-positron collisions (arXiv:1812.11847)", url: "https://arxiv.org/abs/1812.11847" }] },
    { year: 1962, event: "AdA is moved to Orsay in France, where a more intense injector allows the first direct observation of electron-positron collisions.", sources: [{ label: "Touschek with AdA in Orsay and the first direct observation of electron-positron collisions (arXiv:1812.11847)", url: "https://arxiv.org/abs/1812.11847" }] },
    { year: 2000, event: "The DAFNE electron-positron collider begins delivering collisions to the KLOE, FINUDA and DEAR experiments.", sources: [{ label: "Overview of Beam Dynamics Studies at DAFNE (arXiv:0806.1105)", url: "https://arxiv.org/abs/0806.1105" }] },
    { year: 2007, event: "DAFNE is rebuilt to test the crab-waist collision scheme, which raises its luminosity about threefold.", sources: [{ label: "Overview of Beam Dynamics Studies at DAFNE (arXiv:0806.1105)", url: "https://arxiv.org/abs/0806.1105" }, { label: "DAFNE Interaction Regions upgrade (arXiv:0803.1450)", url: "https://arxiv.org/abs/0803.1450" }] },
  ],
  experiments: [
    { id: 'lnf-ada', name: "AdA", description: "The first electron-positron storage ring, which demonstrated that beams of matter and antimatter could be stored and collided in a single ring.", topics: ['electroweak'], startYear: 1961, sources: [{ label: "Bruno Touschek and AdA: from Frascati to Orsay (arXiv:1805.09434)", url: "https://arxiv.org/abs/1805.09434" }, { label: "Touschek with AdA in Orsay and the first direct observation of electron-positron collisions (arXiv:1812.11847)", url: "https://arxiv.org/abs/1812.11847" }] },
    { id: 'lnf-dafne', name: "DAFNE", description: "Electron-positron collider tuned to produce phi mesons, and the first machine to use crab-waist collisions.", topics: ['electroweak', 'cp-violation'], startYear: 2000, sources: [{ label: "Overview of Beam Dynamics Studies at DAFNE (arXiv:0806.1105)", url: "https://arxiv.org/abs/0806.1105" }, { label: "DAFNE Interaction Regions upgrade (arXiv:0803.1450)", url: "https://arxiv.org/abs/0803.1450" }] },
    { id: 'lnf-kloe', name: "KLOE", description: "Detector at DAFNE studying kaon decays and CP violation.", topics: ['cp-violation', 'electroweak'], sources: [{ label: "The KLOE electromagnetic calorimeter, Nucl. Instrum. Meth. A 482, 364 (2002)", url: "https://doi.org/10.1016/S0168-9002(01)01502-9" }, { label: "Overview of Beam Dynamics Studies at DAFNE (arXiv:0806.1105)", url: "https://arxiv.org/abs/0806.1105" }] },
  ],
  keyResults: [
    { year: 1961, discovery: "First Electron-Positron Storage Ring", description: "AdA showed that electrons and positrons could circulate in the same ring in opposite directions, opening the way to colliders such as ADONE, SPEAR, LEP and their successors.", sources: [{ label: "Bruno Touschek and AdA: from Frascati to Orsay (arXiv:1805.09434)", url: "https://arxiv.org/abs/1805.09434" }, { label: "Touschek with AdA in Orsay and the first direct observation of electron-positron collisions (arXiv:1812.11847)", url: "https://arxiv.org/abs/1812.11847" }] },
  ],
  importantPeople: [
    { name: "Bruno Touschek", contribution: "Proposed and led AdA, the first electron-positron collider.", sources: [{ label: "Bruno Touschek and AdA: from Frascati to Orsay (arXiv:1805.09434)", url: "https://arxiv.org/abs/1805.09434" }] },
  ],
  readMore: [
    { label: "Official Site", url: "https://w3.lnf.infn.it/?lang=en" },
  ],
};

export default facility;
