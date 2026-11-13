import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'ligo',
  name: 'LIGO',
  fullName: "Laser Interferometer Gravitational-Wave Observatory",
  type: 'gravitational-wave-observatory',
  country: 'United States',
  lat: 46.455,
  lng: -119.408,
  founded: 2002,
  status: 'active',
  overview: "The Laser Interferometer Gravitational-wave Observatory (LIGO) consists of two identical 4-km L-shaped interferometers — one near Hanford, Washington, and one in Livingston, Louisiana — operated by Caltech and MIT. On 14 September 2015, Advanced LIGO made the first direct detection of gravitational waves from a binary black hole merger (GW150914), opening the era of gravitational-wave astronomy. The Nobel Prize in Physics 2017 was awarded to LIGO founders Rainer Weiss, Kip Thorne, and Barry Barish.",
  specs: [
    { label: "Arm length", value: "4 km", sources: [{ label: "LIGO Laboratory: Facts", url: "https://www.ligo.caltech.edu/page/facts" }] },
    { label: "Distance between the two detectors", value: "3,002 km", sources: [{ label: "LIGO Laboratory: Facts", url: "https://www.ligo.caltech.edu/page/facts" }] },
    { label: "Vacuum volume", value: "10,000 m³", sources: [{ label: "LIGO Laboratory: Facts", url: "https://www.ligo.caltech.edu/page/facts" }] },
    { label: "Smallest detectable change in arm length", value: "1/10,000 the width of a proton", sources: [{ label: "LIGO Laboratory: Facts", url: "https://www.ligo.caltech.edu/page/facts" }] },
  ],
  history: [
    { year: 1992, event: "NSF selects the Hanford and Livingston sites and signs the LIGO cooperative agreement with Caltech, two years after the National Science Board approved construction.", sources: [{ label: "LIGO Laboratory: Timeline", url: "https://www.ligo.caltech.edu/page/timeline" }] },
    { year: 2002, event: "The Initial LIGO interferometers operate in coincidence for the first time, together with GEO600, beginning two decades of progressively more sensitive observing runs.", sources: [{ label: "LIGO Laboratory: Timeline", url: "https://www.ligo.caltech.edu/page/timeline" }] },
    { year: 2015, event: "Advanced LIGO begins O1; on 14 September 2015, GW150914 — a binary black hole merger — is detected, the first direct observation of gravitational waves in history.", sources: [{ label: "LIGO Laboratory: Timeline", url: "https://www.ligo.caltech.edu/page/timeline" }] },
    { year: 2017, event: "LIGO and Virgo jointly detect GW170817, the first binary neutron star merger, observed simultaneously across the electromagnetic spectrum from gamma rays to radio.", sources: [{ label: "LIGO Laboratory: Timeline", url: "https://www.ligo.caltech.edu/page/timeline" }, { label: "LIGO and Virgo Collaborations, Phys. Rev. Lett. 119, 161101 (2017)", url: "https://doi.org/10.1103/PhysRevLett.119.161101" }] },
    { year: 2023, event: "LIGO's fourth observing run (O4) begins on 24 May 2023 with improved sensitivity; binary mergers are now detected routinely.", sources: [{ label: "LIGO Laboratory: Timeline", url: "https://www.ligo.caltech.edu/page/timeline" }] },
  ],
  experiments: [
    { id: 'ligo-aligo', name: 'Advanced LIGO (aLIGO)', description: "Two 4-km Fabry-Perot Michelson interferometers designed for up to 750 kW of circulating laser power in the arms; most sensitive to gravitational waves at around 100 Hz.", topics: ['gravitational-waves'], startYear: 2015, sources: [{ label: "Advanced LIGO, Class. Quantum Grav. 32, 074001 (2015)", url: "https://doi.org/10.1088/0264-9381/32/7/074001" }] },
  ],
  keyResults: [
    { year: 2015, discovery: "First Detection of Gravitational Waves (GW150914)", description: "LIGO detected gravitational waves from the merger of two black holes (~30 and ~35 solar masses each), confirming a central prediction of general relativity 100 years after Einstein made it. Nobel Prize in Physics 2017.", sources: [{ label: "Nobel Prize in Physics 2017", url: "https://www.nobelprize.org/prizes/physics/2017/summary/" }] },
    { year: 2017, discovery: "Binary Neutron Star Merger GW170817", description: "LIGO and Virgo observed the merger of two neutron stars along with a short gamma-ray burst and kilonova — the first multi-messenger gravitational-wave event, confirming neutron star mergers as sites of r-process nucleosynthesis and heavy element production.", sources: [{ label: "LIGO and Virgo Collaborations, Phys. Rev. Lett. 119, 161101 (2017)", url: "https://doi.org/10.1103/PhysRevLett.119.161101" }] },
  ],
  importantPeople: [
    { name: "Rainer Weiss", contribution: "Co-founded LIGO and invented the laser interferometer technique for gravitational-wave detection; Nobel Prize in Physics 2017.", sources: [{ label: "Nobel Prize in Physics 2017", url: "https://www.nobelprize.org/prizes/physics/2017/summary/" }] },
    { name: "Kip Thorne", contribution: "Co-founded LIGO and developed the theoretical predictions for binary merger waveforms that enabled GW150914's identification; Nobel Prize in Physics 2017.", sources: [{ label: "Nobel Prize in Physics 2017", url: "https://www.nobelprize.org/prizes/physics/2017/summary/" }] },
    { name: "Barry Barish", contribution: "Director of the LIGO Laboratory (1994-2005) who transformed the project into the instrument that detected gravitational waves; Nobel Prize in Physics 2017.", sources: [{ label: "Nobel Prize in Physics 2017", url: "https://www.nobelprize.org/prizes/physics/2017/summary/" }] },
  ],
  readMore: [
    { label: "LIGO Official Site", url: "https://www.ligo.caltech.edu" },
    { label: "Nobel Prize 2017 (Gravitational Waves)", url: "https://www.nobelprize.org/prizes/physics/2017/summary/" },
    { label: "GW Open Science Center", url: "https://gwosc.org" },
  ],
};

export default facility;
