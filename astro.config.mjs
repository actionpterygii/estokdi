import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://estl.actionpterygii.com",
  integrations: [sitemap({
    lastmod: new Date('2025-02-11')
  })]
});