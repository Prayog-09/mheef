import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'cta',
  name: 'CTAO / CTA',
  fullName: "Cherenkov Telescope Array Observatory",
  type: 'gamma-ray-observatory',
  country: 'Spain / Chile',
  lat: 28.762,
  lng: -17.892,
  founded: 2019,
  status: 'planned',
  overview: "The Cherenkov Telescope Array Observatory (CTAO) will be the world's largest and most sensitive ground-based gamma-ray observatory, with two sites: CTA-North at La Palma, Canary Islands, and CTA-South near ESO's Paranal Observatory in Chile. The full array of ~70 imaging atmospheric Cherenkov telescopes in three size classes will cover 20 GeV to 300 TeV with order-of-magnitude improvements in sensitivity over current instruments, enabling studies of dark matter annihilation, cosmic-ray origin, AGN jets, and pulsar wind nebulae.",
  specs: [
    { label: "Energy range", value: "20 GeV to 300 TeV", sources: [{ label: "Science with the Cherenkov Telescope Array (2018)", url: "https://doi.org/10.1142/10986" }] },
    { label: "Sites", value: "La Palma (north) and Paranal (south)", sources: [{ label: "Science with the Cherenkov Telescope Array (2018)", url: "https://doi.org/10.1142/10986" }] },
  ],
  history: [
    { year: 2011, event: "The CTA Consortium publishes its design concepts for the array, built from telescopes of three sizes.", sources: [{ label: "CTA Consortium, Design concepts for the Cherenkov Telescope Array, Exp. Astron. 32, 193 (2011)", url: "https://doi.org/10.1007/s10686-011-9247-0" }] },
    { year: 2018, event: "LST-1, the prototype 23-metre Large-Sized Telescope, is inaugurated on La Palma on 10 October 2018; four such telescopes are planned for the northern site.", sources: [{ label: "CTA press release: the first telescope on a CTA site makes its debut (2018)", url: "https://www.eurekalert.org/news-releases/884285" }] },
    { year: 2025, event: "The European Commission establishes the CTAO as a European Research Infrastructure Consortium (CTAO ERIC) on 7 January 2025, with Italy as host state; three further Large-Sized Telescopes (LST-2 to LST-4) are under construction at La Palma.", sources: [{ label: "Commission Implementing Decision (EU) 2025/7", url: "https://eur-lex.europa.eu/eli/dec_impl/2025/7/oj/eng" }] },
  ],
  experiments: [
    { id: 'cta-north', name: 'CTA-North (La Palma)', description: "Northern array on La Palma, built around Large- and Medium-Sized Telescopes and focused on the low and middle energies from about 20 GeV; targets AGN jets, dark matter, and transient sources including gamma-ray bursts.", topics: ['cosmic-rays', 'dark-matter'], sources: [{ label: "Science with the Cherenkov Telescope Array (2018)", url: "https://doi.org/10.1142/10986" }] },
    { id: 'cta-south', name: 'CTA-South (Paranal)', description: "Southern array at Paranal, which adds Small-Sized Telescopes sensitive up to 300 TeV; surveys the southern sky including the Galactic Centre and supernova remnants.", topics: ['cosmic-rays', 'dark-matter'], sources: [{ label: "Science with the Cherenkov Telescope Array (2018)", url: "https://doi.org/10.1142/10986" }] },
  ],
  keyResults: [],
  importantPeople: [
    { name: "Werner Hofmann", contribution: "Spokesperson of the H.E.S.S. collaboration (2000-2012) and of the CTA collaboration (2010-2024); a key scientific architect of the array concept and science case.", sources: [{ label: "MPIK: Werner Hofmann, curriculum vitae", url: "https://www.mpi-hd.mpg.de/hfm/wh/CV2_Werner_Hofmann.htm" }] },
    { name: "Jim Hinton", contribution: "Director at the Max Planck Institute for Nuclear Physics in Heidelberg, member of the CTAO Council and chair of the Small-Sized Telescope camera board; an expert in very-high-energy gamma-ray astrophysics.", sources: [{ label: "MPIK: Jim Hinton", url: "https://www.mpi-hd.mpg.de/mpi/en/forschung/abteilungen-und-gruppen/nichtthermische-astrophysik/mitglieder/jim-hinton" }] },
  ],
  readMore: [
    { label: "CTAO Official Site", url: "https://www.ctao.org" },
  ],
};

export default facility;
