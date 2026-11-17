import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'supl',
  name: "Stawell (SUPL)",
  fullName: "Stawell Underground Physics Laboratory",
  type: 'underground-laboratory',
  country: "Australia",
  lat: -37.06,
  lng: 142.8,
  founded: 2022,
  status: 'active',
  overview: "The Stawell Underground Physics Laboratory lies just over a kilometre underground in an active gold mine at Stawell, Victoria. It is the first deep underground laboratory in the Southern Hemisphere. Its first experiment, SABRE South, uses ultra-pure sodium iodide crystals to test a long-standing claim of a dark matter signal, with the seasons reversed relative to northern laboratories.",
  specs: [
    { label: "Depth", value: "1,025 m", sources: [{ label: "The SABRE South Experiment at the Stawell Underground Physics Laboratory (arXiv:2211.03016)", url: "https://arxiv.org/abs/2211.03016" }] },
    { label: "Access", value: "By road through the mine tunnels", sources: [{ label: "The SABRE South Experiment at the Stawell Underground Physics Laboratory (arXiv:2211.03016)", url: "https://arxiv.org/abs/2211.03016" }] },
    { label: "Laboratory floor area", value: "260 m²", sources: [{ label: "SUPL: Our story so far", url: "https://supl.org.au/our-story-so-far/" }] },
  ],
  history: [
    { year: 2022, event: "Stage 1 of the laboratory is officially opened in August 2022.", sources: [{ label: "University of Melbourne: Completion of Stage 1 of SUPL (2022)", url: "https://www.unimelb.edu.au/newsroom/news/2022/august/the-global-hunt-for-dark-matter-has-arrived-in-australia-with-the-completion-of-stage-1-of-the-stawell-underground-physics-laboratory" }] },
    { year: 2014, event: "The laboratory is first proposed.", sources: [{ label: "SUPL: Our story so far", url: "https://supl.org.au/our-story-so-far/" }] },
    { year: 2016, event: "Construction starts, but stops when the gold mine is placed in care and maintenance in December.", sources: [{ label: "SUPL: Our story so far", url: "https://supl.org.au/our-story-so-far/" }] },
    { year: 2019, event: "After the mine's sale to a new owner, a memorandum of understanding is signed and the project resumes.", sources: [{ label: "SUPL: Our story so far", url: "https://supl.org.au/our-story-so-far/" }] },
  ],
  experiments: [
    { id: 'supl-sabre', name: "SABRE South", description: "Sodium iodide dark matter detector designed to test the annual-modulation signal reported by the DAMA/LIBRA experiment at Gran Sasso.", topics: ['dark-matter'], sources: [{ label: "The SABRE South Experiment at the Stawell Underground Physics Laboratory (arXiv:2211.03016)", url: "https://arxiv.org/abs/2211.03016" }] },
  ],
  keyResults: [
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Official Site", url: "https://www.supl.org.au" },
  ],
};

export default facility;
