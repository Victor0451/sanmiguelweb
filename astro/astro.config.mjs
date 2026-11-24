// @ts-check
import { defineConfig } from 'astro/config';

// Static output: Vercel serves dist/ with no server functions.
// Vercel project must set Root Directory = astro/
export default defineConfig({
  site: 'https://sanmiguelsepelios.vercel.app', // TODO: replace with the real production domain at cutover
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // Keep the default sharp service; Astro optimizes reused images to WebP/AVIF.
  },
});
