import sitemap from '@astrojs/sitemap';
import { SITES } from '@giancastle/ui/sites';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: SITES.ui,
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
