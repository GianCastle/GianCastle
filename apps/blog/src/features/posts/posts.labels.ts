import { LOCALE, type Locale } from '@giancastle/ui/locale';

type PostsCopy = {
  latest: string;
  taggedWith: string;
  backHome: string;
  translatedNote: string;
  readOriginal: string;
  readPosts: string;
  readingTime: (minutes: number) => string;
};

export const POSTS_COPY: Record<Locale, PostsCopy> = {
  [LOCALE.es]: {
    latest: 'Últimas entradas',
    taggedWith: 'Entradas en',
    backHome: 'Todas las entradas',
    translatedNote: 'Traducido del inglés.',
    readOriginal: 'Leer el original',
    readPosts: 'Leer',
    readingTime: minutes => `${minutes} min de lectura`,
  },
  [LOCALE.en]: {
    latest: 'Latest posts',
    taggedWith: 'Posts in',
    backHome: 'All posts',
    translatedNote: 'Translated from Spanish.',
    readOriginal: 'Read the original',
    readPosts: 'Read',
    readingTime: minutes => `${minutes} min read`,
  },
};
