import { LOCALE, localizePath, type Locale } from './locale';

export const SITE = {
  web: 'web',
  blog: 'blog',
} as const;

export type Site = (typeof SITE)[keyof typeof SITE];

export const SITES: Record<Site, string> = {
  [SITE.web]: 'https://giancastle.com',
  [SITE.blog]: 'https://blog.giancastle.com',
};

export const SITE_DEFAULT_LOCALE: Record<Site, Locale> = {
  [SITE.web]: LOCALE.en,
  [SITE.blog]: LOCALE.es,
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
