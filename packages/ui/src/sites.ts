import { LOCALE, localizePath, type Locale } from './locale';

export const SITE = {
  web: 'web',
  blog: 'blog',
  ui: 'ui',
} as const;

export type Site = (typeof SITE)[keyof typeof SITE];

export const SITES: Record<Site, string> = {
  [SITE.web]: 'https://giancastle.com',
  [SITE.blog]: 'https://blog.giancastle.com',
  [SITE.ui]: 'https://ui.giancastle.com',
};

export const SITE_DEFAULT_LOCALE: Record<Site, Locale> = {
  [SITE.web]: LOCALE.en,
  [SITE.blog]: LOCALE.es,
  [SITE.ui]: LOCALE.en,
};

export const siteHref = (site: Site, locale: Locale, path = '/') =>
  `${SITES[site]}${localizePath(path, locale, SITE_DEFAULT_LOCALE[site])}`;

export const AUTHOR = {
  name: 'Giancarlos Castillo',
  brand: 'GianCastle',
  handle: '@giancastle',
  wordmarkLines: ['@Gian', 'Castle'],
  location: 'Santo Domingo, Dominican Republic',
} as const;

export const REPOSITORY_URL = 'https://github.com/GianCastle/GianCastle';
