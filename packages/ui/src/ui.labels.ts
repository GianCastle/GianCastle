import { LOCALE, type Locale } from './locale';
import { THEME, type Theme } from './theme';

type UiCopy = {
  theme: Record<Theme, string>;
  switchTheme: (themeLabel: string) => string;
  primaryNav: string;
};

export const UI_COPY: Record<Locale, UiCopy> = {
  [LOCALE.en]: {
    theme: { [THEME.dark]: 'Dark', [THEME.light]: 'Light' },
    switchTheme: themeLabel => `Switch to ${themeLabel.toLowerCase()} theme`,
    primaryNav: 'Primary',
  },
  [LOCALE.es]: {
    theme: { [THEME.dark]: 'Oscuro', [THEME.light]: 'Claro' },
    switchTheme: themeLabel => `Cambiar a tema ${themeLabel.toLowerCase()}`,
    primaryNav: 'Principal',
  },
};
