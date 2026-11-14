export const SITES = {
  web: 'https://giancastle.com',
  blog: 'https://blog.giancastle.com',
} as const;

export type SiteKey = keyof typeof SITES;

export const AUTHOR = {
  name: 'Giancarlos Castillo',
  shortName: 'Gian',
  brand: 'GianCastle',
  handle: '@giancastle',
  wordmarkLines: ['@Gian', 'Castle'],
  location: 'Santo Domingo, Dominican Republic',
} as const;
