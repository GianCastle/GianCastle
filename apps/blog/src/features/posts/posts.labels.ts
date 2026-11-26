import { LOCALE, type Locale } from '@giancastle/ui/locale';

type SiteCopy = {
  title: string;
  description: string;
  blogKicker: string;
  statement: string;
  latest: string;
  taggedWith: string;
  backHome: string;
  about: string;
  navBlog: string;
  navRss: string;
  skipToContent: string;
  notFoundTitle: string;
  notFoundBody: string;
  closerTitle: string;
  closerTagline: string;
  translatedNote: string;
  readOriginal: string;
  posterSticker: string;
  readPosts: string;
  readingTime: (minutes: number) => string;
};

export const SITE_COPY: Record<Locale, SiteCopy> = {
  [LOCALE.es]: {
    title: 'GianCastle',
    description: 'El blog personal de Gian. Un simple hábito, un profundo desahogo.',
    blogKicker: 'Blog personal',
    statement: 'Un simple hábito, un profundo desahogo.',
    latest: 'Últimas entradas',
    taggedWith: 'Entradas en',
    backHome: 'Todas las entradas',
    about: 'Sobre mi trabajo',
    navBlog: 'Blog',
    navRss: 'RSS',
    skipToContent: 'Saltar al contenido',
    notFoundTitle: 'Giro equivocado',
    notFoundBody: 'Puede que la entrada haya cambiado de lugar.',
    closerTitle: 'Gracias',
    closerTagline: 'Escribo cuando la cabeza pesa. Lo demás lo construyo.',
    translatedNote: 'Traducido del inglés.',
    readOriginal: 'Leer el original',
    posterSticker: 'Blog personal',
    readPosts: 'Leer',
    readingTime: minutes => `${minutes} min de lectura`,
  },
  [LOCALE.en]: {
    title: 'GianCastle',
    description: 'Gian’s personal blog. A simple habit, a deep release.',
    blogKicker: 'Personal blog',
    statement: 'A simple habit, a deep release.',
    latest: 'Latest posts',
    taggedWith: 'Posts in',
    backHome: 'All posts',
    about: 'About my work',
    navBlog: 'Blog',
    navRss: 'RSS',
    skipToContent: 'Skip to content',
    notFoundTitle: 'Wrong turn',
    notFoundBody: 'The post may have moved.',
    closerTitle: 'Thanks',
    closerTagline: 'I write when my head gets heavy. The rest I build.',
    translatedNote: 'Translated from Spanish.',
    readOriginal: 'Read the original',
    posterSticker: 'Personal blog',
    readPosts: 'Read',
    readingTime: minutes => `${minutes} min read`,
  },
};
