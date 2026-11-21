import sitemap from '@astrojs/sitemap';
import { SITES } from '@giancastle/ui/sites';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: SITES.blog,
  trailingSlash: 'always',
  integrations: [sitemap({ filter: page => !page.includes('/admin/') })],
  vite: { plugins: [tailwindcss()] },
});
