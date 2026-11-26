import { DECAL_COLOR, type DecalColor } from './decals';
import { LOCALE, LOCALES, localizePath, type Locale } from './locale';

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

export const SITE_LOCALES: Record<Site, readonly Locale[]> = {
  [SITE.web]: LOCALES,
  [SITE.blog]: LOCALES,
  [SITE.ui]: [LOCALE.en],
};

export const SITE_ORDER = [SITE.web, SITE.blog, SITE.ui] as const;

export const SITE_COLOR: Record<Site, DecalColor> = {
  [SITE.web]: DECAL_COLOR.orange,
  [SITE.blog]: DECAL_COLOR.pink,
  [SITE.ui]: DECAL_COLOR.teal,
};

export const siteHref = (site: Site, locale: Locale, path = '/') => {
  const defaultLocale = SITE_DEFAULT_LOCALE[site];
  const served = SITE_LOCALES[site].includes(locale) ? locale : defaultLocale;
  return `${SITES[site]}${localizePath(path, served, defaultLocale)}`;
};

export const AUTHOR = {
  name: 'Giancarlos Castillo',
  brand: 'GianCastle',
  handle: '@giancastle',
  wordmarkLines: ['@Gian', 'Castle'],
  location: 'Santo Domingo, Dominican Republic',
} as const;

export const REPOSITORY_URL = 'https://github.com/GianCastle/GianCastle';
