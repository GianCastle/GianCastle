export const OG_TYPE = {
  website: 'website',
  article: 'article',
  profile: 'profile',
} as const;

export type OgType = (typeof OG_TYPE)[keyof typeof OG_TYPE];

export const FAVICON_PATH = '/favicon.svg';
export const SITEMAP_PATH = '/sitemap-index.xml';
