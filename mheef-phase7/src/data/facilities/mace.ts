import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'mace',
  name: "MACE",
  fullName: "Major Atmospheric Cherenkov Experiment",
  type: 'gamma-ray-observatory',
  country: "India",
  lat: 32.7801,
  lng: 78.9763,
  founded: 2024,
  foundedBasis: { meaning: "completed", sources: [{ label: "Department of Atomic Energy: MACE inauguration (2024)", url: "https://dae.gov.in/?p=25806" }] },
  location: { represents: "The MACE telescope building, Hanle", sources: [{ label: "OpenStreetMap: MACE Telescope", url: "https://www.openstreetmap.org/way/346560876" }] },
  status: 'active',
  overview: "MACE is an imaging atmospheric Cherenkov telescope at Hanle in Ladakh, India, at about 4,300 m, with a 21-metre light collector made of 1,424 mirror facets. Built indigenously by the Bhabha Atomic Research Centre with support from ECIL and other Indian industry partners, it is the largest imaging Cherenkov telescope in Asia and the highest of its kind in the world. It was inaugurated on 4 October 2024 and is designed to observe gamma rays from about 20 GeV upwards.",
  overviewSources: [{ label: "Department of Atomic Energy: MACE inauguration (2024)", url: "https://dae.gov.in/?p=25806" }, { label: "HiGRO Collaboration: Status update of MACE Gamma-ray telescope (arXiv:2107.04297)", url: "https://arxiv.org/abs/2107.04297" }],
  specs: [
          { label: "Light collector", value: "21 m in diameter, made of 1,424 mirror facets", sources: [{ label: "HiGRO Collaboration: Status update of MACE Gamma-ray telescope (arXiv:2107.04297)", url: "https://arxiv.org/abs/2107.04297" }] },
    { label: "Site altitude", value: "4,270 m above sea level", sources: [{ label: "HiGRO Collaboration: Status update of MACE Gamma-ray telescope (arXiv:2107.04297)", url: "https://arxiv.org/abs/2107.04297" }] },
    { label: "Target energy range", value: "20 to 100 GeV and beyond", sources: [{ label: "HiGRO Collaboration: Status update of MACE Gamma-ray telescope (arXiv:2107.04297)", url: "https://arxiv.org/abs/2107.04297" }] },
  ],
  history: [
    { year: 2024, event: "The observatory is inaugurated on 4 October 2024 by the Secretary of the Department of Atomic Energy.", sources: [{ label: "Reach Ladakh: DAE inaugurates imaging Cherenkov observatory at Hanle (2024)", url: "https://www.reachladakh.com/news/social-news/dae-inaugurates-asia-s-largest-and-world-s-highest-imaging-cherenkov-observatory-at-hanle" }, { label: "Department of Atomic Energy: MACE inauguration (2024)", url: "https://dae.gov.in/?p=25806" }] },
    { year: 2021, event: "With the telescope installed at Hanle, the collaboration reports results from its trial observations.", sources: [{ label: "HiGRO Collaboration: Status update of MACE Gamma-ray telescope (arXiv:2107.04297)", url: "https://arxiv.org/abs/2107.04297" }] },
  ],
  experiments: [
    { id: 'mace-telescope', name: "MACE telescope", description: "Imaging atmospheric Cherenkov telescope observing high-energy gamma rays.", topics: ['cosmic-rays'], sources: [{ label: "HiGRO Collaboration: Status update of MACE Gamma-ray telescope (arXiv:2107.04297)", url: "https://arxiv.org/abs/2107.04297" }, { label: "Reach Ladakh: DAE inaugurates imaging Cherenkov observatory at Hanle (2024)", url: "https://www.reachladakh.com/news/social-news/dae-inaugurates-asia-s-largest-and-world-s-highest-imaging-cherenkov-observatory-at-hanle" }] },
  ],
  keyResults: [
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Department of Atomic Energy", url: "https://dae.gov.in" },
  ],
};

export default facility;
