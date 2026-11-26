import {
  LOCALE,
  equivalentPage,
  localizePath,
  otherLocale,
  type Locale,
  type LocaleAlternate,
} from '@giancastle/ui/locale';
import { DEFAULT_LOCALE } from './i18n';

export const PAGE = {
  home: '/',
  cv: '/cv/',
} as const;

export type Page = (typeof PAGE)[keyof typeof PAGE];

export const LLMS_PATH = '/llms.txt';

export const CV_PUBLISHED = false;

export const CV_PDF_PATH: Record<Locale, string> = {
  [LOCALE.en]: '/giancarlos-castillo-cv.pdf',
  [LOCALE.es]: '/giancarlos-castillo-cv-es.pdf',
};

export const SECTION_ID = {
  proof: 'proof',
  value: 'what-you-get',
  process: 'process',
  ways: 'work-with-me',
} as const;

export type SectionId = (typeof SECTION_ID)[keyof typeof SECTION_ID];

export const pagePath = (page: Page, locale: Locale) => localizePath(page, locale, DEFAULT_LOCALE);

export const sectionHref = (id: SectionId, locale: Locale) =>
  `${pagePath(PAGE.home, locale)}#${id}`;

export const alternateFor = (page: Page, locale: Locale): LocaleAlternate => {
  const locale2 = otherLocale(locale);
  return equivalentPage(locale2, pagePath(page, locale2));
};
