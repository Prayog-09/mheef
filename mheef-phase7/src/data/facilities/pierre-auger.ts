import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'pierre-auger',
  name: 'Pierre Auger Observatory',
  type: 'cosmic-ray-observatory',
  country: 'Argentina',
  lat: -35.208,
  lng: -69.314,
  founded: 2008,
  status: 'active',
  overview: "The Pierre Auger Observatory in Mendoza Province, Argentina, covers 3,000 km2 of the Pampa Amarilla with 1,660 water-Cherenkov surface detectors and 27 fluorescence telescopes — the world's largest cosmic-ray detector. It measures ultra-high-energy cosmic rays (UHECRs) above 10^18 eV, addressing the mystery of the origin, nature, and maximum energy of cosmic rays. The ongoing AugerPrime upgrade adds scintillators and radio antennas for improved composition sensitivity.",
  specs: [
    { label: "Array area", value: "3,000 km²", sources: [{ label: "Pierre Auger Observatory: Timeline", url: "https://www.auger.org/observatory/timeline-observatory" }] },
    { label: "Surface detectors", value: "1,660", sources: [{ label: "Pierre Auger Observatory: Timeline", url: "https://www.auger.org/observatory/timeline-observatory" }] },
    { label: "Fluorescence telescopes", value: "27", sources: [{ label: "Pierre Auger Observatory: Timeline", url: "https://www.auger.org/observatory/timeline-observatory" }] },
  ],
  images: [
    {
      file: 'surface-detector.jpg',
      width: 1600,
      height: 1199,
      alt: "A squat cylindrical water tank with a solar panel and antenna, standing on open scrubland.",
      caption: "One of the surface detector tanks of the Pierre Auger Observatory on the Pampa Amarilla, 2007.",
      credit: "Roberto Fiadone",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Observatorio_Pierre_Auger_Tanque_Rayos_C%C3%B3smicos.jpg",
    },
  ],
  history: [
    { year: 1992, event: "Pierre Auger Observatory proposed by James Cronin (U. Chicago) and Alan Watson (U. Leeds) to resolve the origin and spectrum of ultra-high-energy cosmic rays.", sources: [{ label: "Pierre Auger Observatory: Timeline", url: "https://www.auger.org/observatory/timeline-observatory" }] },
    { year: 2004, event: "First physics results are reported from more than 100 surface detector stations in the Pampa Amarilla; the hybrid technique combining surface stations with fluorescence telescopes is pioneered.", sources: [{ label: "Pierre Auger Observatory: Timeline", url: "https://www.auger.org/observatory/timeline-observatory" }] },
    { year: 2008, event: "The completed Pierre Auger Observatory, with 1,600 surface detectors and 24 fluorescence telescopes, is inaugurated in Malarg\u00fce in November 2008.", sources: [{ label: "Pierre Auger Observatory: Timeline", url: "https://www.auger.org/observatory/timeline-observatory" }] },
    { year: 2017, event: "Auger reports evidence for a large-scale anisotropy in cosmic-ray arrival directions above 8 EeV at 5.2 sigma, indicating an extragalactic origin.", sources: [{ label: "Pierre Auger Collaboration, Science 357, 1266 (2017)", url: "https://doi.org/10.1126/science.aan4338" }] },
    { year: 2016, event: "Deployment of the AugerPrime upgrade begins, adding scintillator detectors and later radio antennas to the surface stations to measure shower composition; the radio deployment is completed in 2024.", sources: [{ label: "Pierre Auger Observatory: Timeline", url: "https://www.auger.org/observatory/timeline-observatory" }] },
  ],
  experiments: [
    { id: 'auger-sd', name: 'Surface Detector (SD)', description: "Array of 1,660 water-Cherenkov tanks across 3,000 km2 measuring muon and electromagnetic shower particles from UHECR air showers with 100% duty cycle.", topics: ['cosmic-rays'], startYear: 2004, sources: [{ label: "The Pierre Auger Cosmic Ray Observatory, Nucl. Instrum. Meth. A 798, 172 (2015)", url: "https://doi.org/10.1016/j.nima.2015.06.058" }] },
    { id: 'auger-fd', name: 'Fluorescence Detector (FD)', description: "27 Schmidt telescopes measuring nitrogen fluorescence from extensive air showers to calibrate the SD energy scale and determine shower maximum Xmax for composition analysis.", topics: ['cosmic-rays'], startYear: 2004, sources: [{ label: "The Pierre Auger Cosmic Ray Observatory, Nucl. Instrum. Meth. A 798, 172 (2015)", url: "https://doi.org/10.1016/j.nima.2015.06.058" }] },
  ],
  keyResults: [
    { year: 2007, discovery: "Correlation of UHECRs with Active Galactic Nuclei", description: "Auger reported a correlation between arrival directions of UHECRs above 60 EeV and the positions of nearby AGN in the Veron-Cetty catalogue, suggesting extragalactic origin from powerful astrophysical accelerators.", sources: [{ label: "Pierre Auger Collaboration, Science 318, 938 (2007)", url: "https://doi.org/10.1126/science.1151124" }] },
    { year: 2017, discovery: "Large-Scale Anisotropy in UHECR Arrival Directions", description: "A 5.2 sigma dipole anisotropy above 8 EeV points about 125 degrees away from the Galactic Centre \u2014 the first statistically significant directional evidence that the highest-energy cosmic rays come from outside our Galaxy.", sources: [{ label: "Pierre Auger Collaboration, Science 357, 1266 (2017)", url: "https://doi.org/10.1126/science.aan4338" }] },
  ],
  importantPeople: [
    { name: "James Cronin", contribution: "Co-proposed the Pierre Auger Observatory; Nobel Prize in Physics 1980 for CP violation in kaon decays, which shaped his interest in fundamental cosmic phenomena.", sources: [{ label: "Nobel Prize in Physics 1980", url: "https://www.nobelprize.org/prizes/physics/1980/summary/" }] },
    { name: "Alan Watson", contribution: "Co-proposed and co-led construction of the Auger Observatory; pioneer of UHECR detection using the Haverah Park array.", sources: [{ label: "Pierre Auger Observatory: Timeline", url: "https://www.auger.org/observatory/timeline-observatory" }] },
  ],
  readMore: [
    { label: "Pierre Auger Observatory", url: "https://www.auger.org" },
    { label: "Nobel Prize 1980 (Cronin)", url: "https://www.nobelprize.org/prizes/physics/1980/summary/" },
  ],
};

export default facility;
