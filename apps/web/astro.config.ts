import sitemap from '@astrojs/sitemap';
import { SITES } from '@giancastle/ui/sites';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { CV_PUBLISHED, PAGE } from './src/routes';

export default defineConfig({
  site: SITES.web,
  trailingSlash: 'always',
  integrations: [sitemap({ filter: page => CV_PUBLISHED || !page.includes(PAGE.cv) })],
  vite: { plugins: [tailwindcss()] },
});
