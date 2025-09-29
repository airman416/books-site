// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://armaanagrawal.com',
  integrations: [svelte()],
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});