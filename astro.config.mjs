import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  e2e: {
    supportFiles: false,
  },
  integrations: [mdx()],
});
