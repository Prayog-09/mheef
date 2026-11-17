import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'cavendish',
  name: "Cavendish Laboratory",
  fullName: "Cavendish Laboratory, University of Cambridge",
  type: 'university-laboratory',
  country: "United Kingdom",
  lat: 52.2035,
  lng: 0.1187,
  founded: 1874,
  status: 'historic',
  overview: "The Cavendish Laboratory is the physics department of the University of Cambridge, opened in 1874 under James Clerk Maxwell. In its original building in the centre of Cambridge the electron and the neutron were discovered and the atomic nucleus was first split with artificially accelerated particles, making it one of the birthplaces of particle and nuclear physics. The laboratory moved to West Cambridge in 1974 and remains a working department; it is listed here for its historic role.",
  specs: [
  ],
  images: [
    {
      file: 'west-cambridge.jpg',
      width: 1600,
      height: 1200,
      alt: "Low modern laboratory buildings beside a road under an overcast sky.",
      caption: "The Cavendish Laboratory on the West Cambridge site, 2018.",
      credit: "Hugh Venables",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Cavendish_Laboratory,_West_Cambridge_Site_-_geograph.org.uk_-_6004344.jpg",
    },
  ],
  history: [
    { year: 1874, event: "The laboratory opens under James Clerk Maxwell, the first Cavendish Professor.", sources: [{ label: "University of Cambridge, Department of Physics: Our history", url: "https://www.phy.cam.ac.uk/about/our-history/" }] },
    { year: 1897, event: "J. J. Thomson's experiments on cathode rays reveal the electron, the first subatomic particle. He receives the 1906 Nobel Prize.", sources: [{ label: "J. J. Thomson, Cathode Rays, Phil. Mag. 44, 293 (1897)", url: "https://doi.org/10.1080/14786449708621070" }, { label: "University of Cambridge, Department of Physics: Our history", url: "https://www.phy.cam.ac.uk/about/our-history/" }, { label: "Nobel Prize in Physics 1906", url: "https://www.nobelprize.org/prizes/physics/1906/summary/" }] },
    { year: 1919, event: "Ernest Rutherford becomes Cavendish Professor.", sources: [{ label: "University of Cambridge, Department of Physics: Our history", url: "https://www.phy.cam.ac.uk/about/our-history/" }] },
    { year: 1932, event: "James Chadwick discovers the neutron, and John Cockcroft and Ernest Walton split the atomic nucleus with accelerated protons.", sources: [{ label: "J. Chadwick, Possible Existence of a Neutron, Nature 129, 312 (1932)", url: "https://doi.org/10.1038/129312a0" }, { label: "Cockcroft and Walton, Proc. R. Soc. A 137, 229 (1932)", url: "https://doi.org/10.1098/rspa.1932.0133" }, { label: "University of Cambridge, Department of Physics: Our history", url: "https://www.phy.cam.ac.uk/about/our-history/" }] },
    { year: 1974, event: "The laboratory completes its move to a new site in West Cambridge.", sources: [{ label: "University of Cambridge, Department of Physics: Our history", url: "https://www.phy.cam.ac.uk/about/our-history/" }] },
  ],
  experiments: [
    { id: 'cavendish-cw', name: "Cockcroft-Walton accelerator", description: "High-voltage accelerator with which protons were first used to disintegrate atomic nuclei.", topics: ['nuclear-structure'], startYear: 1932, sources: [{ label: "Cockcroft and Walton, Proc. R. Soc. A 137, 229 (1932)", url: "https://doi.org/10.1098/rspa.1932.0133" }] },
  ],
  keyResults: [
    { year: 1897, discovery: "Discovery of the Electron", description: "Cathode rays were shown to consist of particles far lighter than atoms. Nobel Prize 1906.", sources: [{ label: "J. J. Thomson, Cathode Rays, Phil. Mag. 44, 293 (1897)", url: "https://doi.org/10.1080/14786449708621070" }, { label: "Nobel Prize in Physics 1906", url: "https://www.nobelprize.org/prizes/physics/1906/summary/" }] },
    { year: 1932, discovery: "Discovery of the Neutron", description: "Chadwick identified a neutral particle of about the proton's mass in the radiation from beryllium. Nobel Prize 1935.", sources: [{ label: "J. Chadwick, Possible Existence of a Neutron, Nature 129, 312 (1932)", url: "https://doi.org/10.1038/129312a0" }, { label: "Nobel Prize in Physics 1935", url: "https://www.nobelprize.org/prizes/physics/1935/summary/" }] },
    { year: 1932, discovery: "First Artificial Splitting of the Nucleus", description: "Protons accelerated to a few hundred kilovolts broke lithium nuclei into pairs of alpha particles. Nobel Prize 1951.", sources: [{ label: "Cockcroft and Walton, Proc. R. Soc. A 137, 229 (1932)", url: "https://doi.org/10.1098/rspa.1932.0133" }, { label: "Nobel Prize in Physics 1951", url: "https://www.nobelprize.org/prizes/physics/1951/summary/" }] },
  ],
  importantPeople: [
    { name: "J. J. Thomson", contribution: "Discovered the electron; Nobel Prize in Physics 1906.", sources: [{ label: "Nobel Prize in Physics 1906", url: "https://www.nobelprize.org/prizes/physics/1906/summary/" }] },
    { name: "James Chadwick", contribution: "Discovered the neutron; Nobel Prize in Physics 1935.", sources: [{ label: "Nobel Prize in Physics 1935", url: "https://www.nobelprize.org/prizes/physics/1935/summary/" }] },
    { name: "John Cockcroft and Ernest Walton", contribution: "Built the first accelerator to split the nucleus; Nobel Prize in Physics 1951.", sources: [{ label: "Nobel Prize in Physics 1951", url: "https://www.nobelprize.org/prizes/physics/1951/summary/" }] },
  ],
  readMore: [
    { label: "Department of Physics, University of Cambridge", url: "https://www.phy.cam.ac.uk" },
  ],
};

export default facility;
