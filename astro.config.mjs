import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { hotel } from './src/data/hotel';

export default defineConfig({
  site: hotel.seo.siteUrl,
  output: 'static',
  integrations: [tailwind()],
  build: { format: 'directory' },
  vite: { css: { devSourcemap: true } }
});
