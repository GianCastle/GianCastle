import { localizePath, type Locale } from '@giancastle/ui/locale';
import { DEFAULT_LOCALE } from './i18n';

const localized = (path: string, locale: Locale) => localizePath(path, locale, DEFAULT_LOCALE);

export const routesFor = (locale: Locale) => ({
  home: localized('/', locale),
  rss: localized('/rss.xml', locale),
  post: (slug: string) => localized(`/${slug}/`, locale),
  tag: (slug: string) => localized(`/tags/${slug}/`, locale),
});
