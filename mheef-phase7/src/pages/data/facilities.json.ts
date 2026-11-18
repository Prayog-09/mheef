import type { APIRoute } from 'astro';
import { facilities } from '../../data/facilities';
import { facilityPagePath, withBase } from '../../utils/paths';
import { CITATION_AUTHOR, CITATION_YEAR, CONTENT_LICENSE } from '../../utils/citation';

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
    license: CONTENT_LICENSE,
    citation: `${CITATION_AUTHOR} (${CITATION_YEAR}). MHEEF — Mapping High Energy Experimental Facilities. ${absolute(withBase('/'))}`,
    notes: [
      'Overviews, founding years and coordinates are sourced only where a facility has overviewSources, foundedBasis or location; work to source the rest is under way. foundedBasis.meaning says what the founded year stands for (founded, approved, construction began, first operation or completed).',
      'A facility with no "reviewed" date has not yet been checked by a specialist.',
      'Image files are at imageBaseUrl + "<facility id>/<file>". Each image keeps its own licence, given with it; the CC BY 4.0 licence does not cover images.',
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
