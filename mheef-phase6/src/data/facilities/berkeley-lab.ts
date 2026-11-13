import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'berkeley-lab',
  name: "Berkeley Lab",
  fullName: "Lawrence Berkeley National Laboratory",
  type: 'accelerator-laboratory',
  country: "United States",
  lat: 37.876,
  lng: -122.251,
  founded: 1931,
  status: 'active',
  overview: "Lawrence Berkeley National Laboratory grew from the Radiation Laboratory that Ernest Lawrence founded at the University of California in 1931 to develop his invention, the cyclotron. A succession of ever larger machines made it the model for the modern accelerator laboratory. Its cyclotrons produced the first elements beyond uranium, and its Bevatron revealed the antiproton.",
  specs: [
  ],
  history: [
    { year: 1931, event: "Lawrence is given a disused building on the Berkeley campus for a radiation laboratory, in the month an 11-inch cyclotron reaches 1.1 MeV.", sources: [{ label: "Berkeley Lab: History timeline", url: "https://www2.lbl.gov/Science-Articles/Archive/timeline.html" }] },
    { year: 1939, event: "Lawrence receives the Nobel Prize for the invention of the cyclotron.", sources: [{ label: "Berkeley Lab: History timeline", url: "https://www2.lbl.gov/Science-Articles/Archive/timeline.html" }, { label: "Nobel Prize in Physics 1939", url: "https://www.nobelprize.org/prizes/physics/1939/summary/" }] },
    { year: 1940, event: "Neptunium and plutonium, the first elements beyond uranium, are discovered at the laboratory.", sources: [{ label: "Berkeley Lab: History timeline", url: "https://www2.lbl.gov/Science-Articles/Archive/timeline.html" }, { label: "Nobel Prize in Chemistry 1951", url: "https://www.nobelprize.org/prizes/chemistry/1951/summary/" }] },
    { year: 1954, event: "The Bevatron proton accelerator is completed.", sources: [{ label: "Berkeley Lab: History timeline", url: "https://www2.lbl.gov/Science-Articles/Archive/timeline.html" }] },
    { year: 1955, event: "The antiproton is discovered at the Bevatron by Owen Chamberlain, Emilio Segrè and colleagues.", sources: [{ label: "Chamberlain, Segrè, Wiegand and Ypsilantis, Phys. Rev. 100, 947 (1955)", url: "https://doi.org/10.1103/PhysRev.100.947" }, { label: "Berkeley Lab: History timeline", url: "https://www2.lbl.gov/Science-Articles/Archive/timeline.html" }] },
  ],
  experiments: [
    { id: 'lbl-cyclotron', name: "Cyclotrons", description: "The series of cyclotrons, from 11 inches to the 184-inch synchrocyclotron, built by Lawrence and his laboratory.", topics: ['nuclear-structure'], startYear: 1931, sources: [{ label: "Lawrence and Livingston, Phys. Rev. 40, 19 (1932)", url: "https://doi.org/10.1103/PhysRev.40.19" }, { label: "Berkeley Lab: History timeline", url: "https://www2.lbl.gov/Science-Articles/Archive/timeline.html" }] },
    { id: 'lbl-bevatron', name: "Bevatron", description: "Proton synchrotron designed to reach the energy needed to create antiprotons.", topics: ['qcd'], startYear: 1954, sources: [{ label: "Berkeley Lab: History timeline", url: "https://www2.lbl.gov/Science-Articles/Archive/timeline.html" }, { label: "Chamberlain, Segrè, Wiegand and Ypsilantis, Phys. Rev. 100, 947 (1955)", url: "https://doi.org/10.1103/PhysRev.100.947" }] },
  ],
  keyResults: [
    { year: 1955, discovery: "Discovery of the Antiproton", description: "Negatively charged particles with the mass of the proton were identified among the products of Bevatron collisions. Nobel Prize 1959.", sources: [{ label: "Chamberlain, Segrè, Wiegand and Ypsilantis, Phys. Rev. 100, 947 (1955)", url: "https://doi.org/10.1103/PhysRev.100.947" }, { label: "Nobel Prize in Physics 1959", url: "https://www.nobelprize.org/prizes/physics/1959/summary/" }] },
  ],
  importantPeople: [
    { name: "Ernest Lawrence", contribution: "Invented the cyclotron and founded the laboratory; Nobel Prize in Physics 1939.", sources: [{ label: "Nobel Prize in Physics 1939", url: "https://www.nobelprize.org/prizes/physics/1939/summary/" }] },
    { name: "Emilio Segrè and Owen Chamberlain", contribution: "Discovered the antiproton; Nobel Prize in Physics 1959.", sources: [{ label: "Nobel Prize in Physics 1959", url: "https://www.nobelprize.org/prizes/physics/1959/summary/" }] },
  ],
  readMore: [
    { label: "Official Site", url: "https://www.lbl.gov" },
  ],
};

export default facility;
