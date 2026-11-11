import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// The site is published to GitHub Pages under /mheef. If it moves to a
// custom domain, change `site` and set `base` to '/'.
export default defineConfig({
  site: 'https://prayog-09.github.io',
  base: '/mheef',
  trailingSlash: 'always',
  integrations: [react(), sitemap()],
});
