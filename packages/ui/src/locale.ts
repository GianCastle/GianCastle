export const LOCALE = {
  en: 'en',
  es: 'es',
} as const;

export type Locale = (typeof LOCALE)[keyof typeof LOCALE];

export const LOCALES = [LOCALE.en, LOCALE.es] as const;

export const LOCALE_SHORT_LABEL: Record<Locale, string> = {
  [LOCALE.en]: 'EN',
  [LOCALE.es]: 'ES',
};

export const LOCALE_SWITCH_LABEL: Record<Locale, string> = {
  [LOCALE.en]: 'View in English',
  [LOCALE.es]: 'Ver en español',
};

export const DATE_LOCALE: Record<Locale, string> = {
  [LOCALE.en]: 'en-US',
  [LOCALE.es]: 'es-DO',
};

export const otherLocale = (locale: Locale): Locale =>
  locale === LOCALE.en ? LOCALE.es : LOCALE.en;

export const localizePath = (path: string, locale: Locale, defaultLocale: Locale) =>
  locale === defaultLocale ? path : `/${locale}${path}`;

export type LocaleAlternate = { locale: Locale; href: string };
