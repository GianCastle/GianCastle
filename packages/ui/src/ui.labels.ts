import { LOCALE, type Locale } from './locale';
import { SITE, type Site } from './sites';
import { THEME, type Theme } from './theme';

type UiCopy = {
  theme: Record<Theme, string>;
  switchTheme: (themeLabel: string) => string;
  primaryNav: string;
  plate: { sites: string; position: (current: number, total: number) => string };
  footer: {
    nav: string;
    sections: string;
    sites: string;
    contact: string;
    here: string;
    site: Record<Site, { label: string; note: string }>;
  };
};

export const UI_COPY: Record<Locale, UiCopy> = {
  [LOCALE.en]: {
    theme: { [THEME.dark]: 'Dark', [THEME.light]: 'Light' },
    switchTheme: themeLabel => `Switch to ${themeLabel.toLowerCase()} theme`,
    primaryNav: 'Primary',
    plate: {
      sites: 'Sites',
      position: (current, total) => `Section ${current} of ${total}`,
    },
    footer: {
      nav: 'Footer',
      sections: 'On this page',
      sites: 'My sites',
      contact: 'Reach me',
      here: 'You are here',
      site: {
        [SITE.web]: { label: 'giancastle.com', note: 'what I do' },
        [SITE.blog]: { label: 'Blog', note: 'what I write' },
        [SITE.ui]: { label: 'Design language', note: 'how this is built' },
      },
    },
  },
  [LOCALE.es]: {
    theme: { [THEME.dark]: 'Oscuro', [THEME.light]: 'Claro' },
    switchTheme: themeLabel => `Cambiar a tema ${themeLabel.toLowerCase()}`,
    primaryNav: 'Principal',
    plate: {
      sites: 'Sitios',
      position: (current, total) => `Sección ${current} de ${total}`,
    },
    footer: {
      nav: 'Pie de página',
      sections: 'En esta página',
      sites: 'Mis sitios',
      contact: 'Escríbeme',
      here: 'Estás aquí',
      site: {
        [SITE.web]: { label: 'giancastle.com', note: 'lo que hago' },
        [SITE.blog]: { label: 'Blog', note: 'lo que escribo' },
        [SITE.ui]: { label: 'Lenguaje de diseño', note: 'cómo está hecho, en inglés' },
      },
    },
  },
};
