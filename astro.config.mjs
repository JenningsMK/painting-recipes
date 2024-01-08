import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  e2e: {
    supportFiles: false,
  },
  experimental: {
    contentCollectionCache: true,
  },
});

