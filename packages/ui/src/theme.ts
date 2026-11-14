export const THEME = {
  dark: 'dark',
  light: 'light',
} as const;

export type Theme = (typeof THEME)[keyof typeof THEME];

export const DEFAULT_THEME: Theme = THEME.dark;
export const THEME_STORAGE_KEY = 'giancastle-theme';
export const THEME_ATTRIBUTE = 'data-theme';

export const TONE = {
  plain: 'plain',
  contrast: 'contrast',
} as const;

export type Tone = (typeof TONE)[keyof typeof TONE];
