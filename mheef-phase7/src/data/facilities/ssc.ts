import type { Facility } from '../../types/facility';

const facility: Facility = {
  id: 'ssc',
  name: "SSC",
  fullName: "Superconducting Super Collider",
  type: 'accelerator-laboratory',
  country: "United States",
  lat: 32.36,
  lng: -96.94,
  founded: 1987,
  foundedBasis: { meaning: "approved", sources: [{ label: "U.S. Department of Energy: Timeline of events, 1981 to 1990", url: "https://www.energy.gov/lm/timeline-events-1981-1990" }] },
  status: 'historic',
  overview: "The Superconducting Super Collider (SSC) was designed as a 40 TeV proton collider, with two beams of up to 20 TeV each in an 87-kilometre (54-mile) ring, at a new laboratory in Waxahachie, Texas. President Reagan's approval of its construction was announced on 30 January 1987, and Texas was chosen as the site in November 1988. The US Congress terminated the project in October 1993, after about $2 billion had been spent; a history in Physics Today argues that its end opened the way for the Higgs boson to be discovered at CERN.",
  overviewSources: [{ label: "Physics Today: A bridge too far, the demise of the Superconducting Super Collider", url: "https://physicstoday.aip.org/features/a-bridge-too-far-the-demise-of-the-superconducting-super-collider" }, { label: "U.S. Department of Energy: Timeline of events, 1981 to 1990", url: "https://www.energy.gov/lm/timeline-events-1981-1990" }, { label: "NPR: U.S. physicists recall brush with supercollider fame (2008)", url: "https://www.npr.org/2008/09/10/94481272/u-s-physicists-recall-brush-with-supercollider-fame" }],
  specs: [
    { label: "Planned ring circumference", value: "54 miles (about 87 km)", sources: [{ label: "NPR: U.S. physicists recall brush with supercollider fame (2008)", url: "https://www.npr.org/2008/09/10/94481272/u-s-physicists-recall-brush-with-supercollider-fame" }] },
    { label: "Planned beam energy", value: "20 TeV per beam", sources: [{ label: "Physics Today: A bridge too far, the demise of the Superconducting Super Collider", url: "https://physicstoday.aip.org/features/a-bridge-too-far-the-demise-of-the-superconducting-super-collider" }] },
    { label: "Spent before cancellation", value: "About $2 billion", sources: [{ label: "APS News: October 1993, Congress cancels funding for the SSC", url: "https://aps.org/publications/apsnews/201310/physicshistory.cfm" }] },
  ],
  images: [
    {
      file: 'magnet-development-laboratory.jpg',
      width: 1600,
      height: 1064,
      alt: "Large empty industrial buildings in an overgrown field.",
      caption: "The Magnet Development Laboratory building at the abandoned SSC site near Waxahachie, Texas, 2008.",
      credit: "Wikipedia user “Ich weiß es nicht”",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Ssc_mdl.JPG",
    },
  ],
  history: [
    { year: 1987, event: "President Reagan approves the project.", sources: [{ label: "APS News: October 1993, Congress cancels funding for the SSC", url: "https://aps.org/publications/apsnews/201310/physicshistory.cfm" }] },
    { year: 1993, event: "Congress ends funding for the collider in October 1993, and the bill cancelling it is signed on 30 October.", sources: [{ label: "APS News: October 1993, Congress cancels funding for the SSC", url: "https://aps.org/publications/apsnews/201310/physicshistory.cfm" }, { label: "Physics Today: A bridge too far, the demise of the Superconducting Super Collider", url: "https://physicstoday.aip.org/features/a-bridge-too-far-the-demise-of-the-superconducting-super-collider" }] },
  ],
  experiments: [
  ],
  keyResults: [
  ],
  importantPeople: [
  ],
  readMore: [
    { label: "Physics Today: the demise of the SSC", url: "https://physicstoday.aip.org/features/a-bridge-too-far-the-demise-of-the-superconducting-super-collider" },
  ],
};

export default facility;
