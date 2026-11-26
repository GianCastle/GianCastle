import { LOCALE, type Locale } from '@giancastle/ui/locale';

type SiteCopy = {
  title: string;
  description: string;
  statement: string;
  about: string;
  navBlog: string;
  navRss: string;
  skipToContent: string;
  notFoundTitle: string;
  notFoundBody: string;
  closerTitle: string;
  closerTagline: string;
  lockupLead: string;
};

export const SITE_COPY: Record<Locale, SiteCopy> = {
  [LOCALE.es]: {
    title: 'GianCastle',
    description: 'El blog personal de Gian. Un simple hábito, un profundo desahogo.',
    statement: 'Un simple hábito, un profundo desahogo.',
    about: 'Sobre mi trabajo',
    navBlog: 'Blog',
    navRss: 'RSS',
    skipToContent: 'Saltar al contenido',
    notFoundTitle: 'Giro equivocado',
    notFoundBody: 'Puede que la entrada haya cambiado de lugar.',
    closerTitle: 'Gracias',
    closerTagline: 'Escribo cuando la cabeza pesa. Construyo y ruedo hasta que afloja.',
    lockupLead: 'El blog de',
  },
  [LOCALE.en]: {
    title: 'GianCastle',
    description: 'Gian’s personal blog. A simple habit, a deep release.',
    statement: 'A simple habit, a deep release.',
    about: 'About my work',
    navBlog: 'Blog',
    navRss: 'RSS',
    skipToContent: 'Skip to content',
    notFoundTitle: 'Wrong turn',
    notFoundBody: 'The post may have moved.',
    closerTitle: 'Thanks',
    closerTagline: 'I write when the head is heavy, and build and ride until it’s light again.',
    lockupLead: 'The blog of',
  },
};
