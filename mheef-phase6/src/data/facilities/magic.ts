import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'magic',
  name: "MAGIC",
  fullName: "Major Atmospheric Gamma Imaging Cherenkov Telescopes",
  type: 'gamma-ray-observatory',
  country: "Spain",
  lat: 28.762,
  lng: -17.89,
  founded: 2004,
  status: 'active',
  overview: "MAGIC is a pair of 17-metre imaging atmospheric Cherenkov telescopes at the Roque de los Muchachos Observatory on La Palma in the Canary Islands. Their large mirrors give a low energy threshold, which allowed MAGIC to detect pulsed gamma rays from the Crab pulsar and the first teraelectronvolt emission from a gamma-ray burst.",
  specs: [
    { label: "Telescopes", value: "Two, each 17 m in diameter", sources: [{ label: "Performance of the MAGIC telescopes in stereoscopic mode (arXiv:0907.0960)", url: "https://arxiv.org/abs/0907.0960" }] },
    { label: "Altitude", value: "2,200 m", sources: [{ label: "Performance of the MAGIC telescopes in stereoscopic mode (arXiv:0907.0960)", url: "https://arxiv.org/abs/0907.0960" }] },
  ],
  history: [
    { year: 2004, event: "The first telescope, MAGIC-I, begins operating.", sources: [{ label: "Highlights of the MAGIC Telescopes (arXiv:1110.4747)", url: "https://arxiv.org/abs/1110.4747" }] },
    { year: 2009, event: "The second telescope starts taking data and regular stereoscopic observations begin in the autumn.", sources: [{ label: "Performance of the MAGIC telescopes in stereoscopic mode (arXiv:0907.0960)", url: "https://arxiv.org/abs/0907.0960" }, { label: "Highlights of the MAGIC Telescopes (arXiv:1110.4747)", url: "https://arxiv.org/abs/1110.4747" }] },
    { year: 2019, event: "MAGIC reports teraelectronvolt gamma rays from the burst GRB 190114C.", sources: [{ label: "MAGIC Collaboration, Nature 575, 455 (2019)", url: "https://doi.org/10.1038/s41586-019-1750-x" }] },
  ],
  experiments: [
    { id: 'magic-telescopes', name: "MAGIC telescopes", description: "Two 17-m Cherenkov telescopes 85 m apart, operated together in stereoscopic mode.", topics: ['cosmic-rays'], startYear: 2004, sources: [{ label: "Performance of the MAGIC telescopes in stereoscopic mode (arXiv:0907.0960)", url: "https://arxiv.org/abs/0907.0960" }] },
  ],
  keyResults: [
    { year: 2008, discovery: "Pulsed Gamma Rays from the Crab Pulsar", description: "MAGIC detected pulsed emission above 25 GeV from the Crab pulsar, constraining where in the magnetosphere the gamma rays are produced.", sources: [{ label: "MAGIC Collaboration, Science 322, 1221 (2008)", url: "https://doi.org/10.1126/science.1164718" }] },
    { year: 2019, discovery: "Teraelectronvolt Emission from a Gamma-Ray Burst", description: "GRB 190114C was the first gamma-ray burst seen at TeV energies.", sources: [{ label: "MAGIC Collaboration, Nature 575, 455 (2019)", url: "https://doi.org/10.1038/s41586-019-1750-x" }] },
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Official Site", url: "https://magic.mpp.mpg.de" },
  ],
};

export default facility;
