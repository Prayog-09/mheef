import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'ligo-india',
  name: "LIGO-India",
  type: 'gravitational-wave-observatory',
  country: "India",
  lat: 19.613,
  lng: 77.031,
  founded: 2023,
  foundedBasis: { meaning: "approved", sources: [{ label: "Deccan Herald: Cabinet approves Rs 2,600 crore gravitational-wave observatory (2023)", url: "https://www.deccanherald.com/india/cabinet-approves-new-space-policy-and-rs-2600-crore-gravity-wave-observatory-1207334.html" }] },
  status: 'planned',
  overview: "LIGO-India is a planned gravitational-wave observatory in the state of Maharashtra, a collaboration between the US National Science Foundation's LIGO Laboratory and Indian institutions led by RRCAT Indore, IPR Ahmedabad and IUCAA Pune, with the Department of Atomic Energy as the lead funding agency. Under a memorandum of understanding signed in March 2016 the LIGO Laboratory will provide the hardware for the detector, and India's Union Cabinet approved the project, at a cost of Rs 2,600 crore, on 6 April 2023. A detector so far from the two in the United States will improve how precisely sources can be located in the sky.",
  overviewSources: [{ label: "LIGO Laboratory: LIGO-India", url: "https://www.ligo.caltech.edu/page/ligo-india" }, { label: "Deccan Herald: Cabinet approves Rs 2,600 crore gravitational-wave observatory (2023)", url: "https://www.deccanherald.com/india/cabinet-approves-new-space-policy-and-rs-2600-crore-gravity-wave-observatory-1207334.html" }, { label: "The science case for LIGO-India, Class. Quantum Grav. 39, 025004 (2022)", url: "https://doi.org/10.1088/1361-6382/ac3b99" }],
  specs: [
    { label: "Lead institutions", value: "RRCAT Indore, IPR Ahmedabad and IUCAA Pune", sources: [{ label: "LIGO Laboratory: LIGO-India", url: "https://www.ligo.caltech.edu/page/ligo-india" }] },
    { label: "Funding agencies", value: "Department of Atomic Energy (lead) and Department of Science and Technology", sources: [{ label: "LIGO Laboratory: LIGO-India", url: "https://www.ligo.caltech.edu/page/ligo-india" }] },
    { label: "Approved cost", value: "Rs 2,600 crore", sources: [{ label: "Deccan Herald: Cabinet approves Rs 2,600 crore gravitational-wave observatory (2023)", url: "https://www.deccanherald.com/india/cabinet-approves-new-space-policy-and-rs-2600-crore-gravity-wave-observatory-1207334.html" }] },
  ],
  history: [
    { year: 2022, event: "The science case for LIGO-India is published, setting out the gains in sky localisation from a detector in India.", sources: [{ label: "The science case for LIGO-India, Class. Quantum Grav. 39, 025004 (2022)", url: "https://doi.org/10.1088/1361-6382/ac3b99" }] },
    { year: 2016, event: "A memorandum of understanding is signed in March 2016 under which the LIGO Laboratory will provide the hardware for a complete interferometer and India will build the facility.", sources: [{ label: "LIGO Laboratory: LIGO-India", url: "https://www.ligo.caltech.edu/page/ligo-india" }] },
    { year: 2023, event: "The Union Cabinet approves the project on 6 April 2023; completion is expected by 2030.", sources: [{ label: "Deccan Herald: Cabinet approves Rs 2,600 crore gravitational-wave observatory (2023)", url: "https://www.deccanherald.com/india/cabinet-approves-new-space-policy-and-rs-2600-crore-gravity-wave-observatory-1207334.html" }] },
  ],
  experiments: [
    { id: 'ligo-india-det', name: "LIGO-India detector", description: "Planned Advanced LIGO interferometer in India, to operate as part of the global detector network.", topics: ['gravitational-waves'], sources: [{ label: "The science case for LIGO-India, Class. Quantum Grav. 39, 025004 (2022)", url: "https://doi.org/10.1088/1361-6382/ac3b99" }, { label: "LIGO Laboratory: LIGO-India", url: "https://www.ligo.caltech.edu/page/ligo-india" }] },
  ],
  keyResults: [
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Official Site", url: "https://www.ligo-india.in" },
  ],
};

export default facility;
