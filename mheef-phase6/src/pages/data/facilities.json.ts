import type { APIRoute } from 'astro';
import { facilities } from '../../data/facilities';
import { facilityPagePath, withBase } from '../../utils/paths';

// The whole dataset as one JSON file, for anyone who wants to reuse or check
// it. Built from the same files as the pages, so the two never disagree.
export const GET: APIRoute = ({ site }) => {
  const absolute = (path: string) => new URL(path, site).href;
  const body = {
    name: 'MHEEF — Mapping High Energy Experimental Facilities',
    description:
      'High-energy physics facilities with their history, experiments, key results and people. Every fact lists the source it was checked against.',
    homepage: absolute(withBase('/')),
    builtOn: new Date().toISOString().slice(0, 10),
    notes: [
      'Overviews, coordinates and founding years are not individually sourced.',
      'A facility with no "reviewed" date has not yet been checked by a specialist.',
      'Image files are at imageBaseUrl + "<facility id>/<file>".',
    ],
    imageBaseUrl: absolute(withBase('/images/facilities/')),
    facilityCount: facilities.length,
    facilities: facilities.map((facility) => ({
      ...facility,
      pageUrl: absolute(facilityPagePath(facility.id)),
    })),
  };
  return new Response(`${JSON.stringify(body, null, 2)}\n`, {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
