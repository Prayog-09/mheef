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
  status: 'historic',
  overview: "The Superconducting Super Collider was to have been the world's most powerful particle accelerator, a ring 54 miles around near Waxahachie, Texas, colliding protons at 20 TeV per beam. Approved in 1987, it was cancelled by the United States Congress in October 1993 after about two billion dollars had been spent and part of the tunnel had been bored. Its cancellation left the search for the Higgs boson to CERN's Large Hadron Collider.",
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
