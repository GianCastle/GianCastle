import { DECAL_COLOR, type DecalColor } from '@giancastle/ui/decals';
import { LOCALE, type Locale } from '@giancastle/ui/locale';
import { routesFor } from '@/routes';

export const CATEGORY = {
  verses: 'verses',
  essays: 'essays',
  opinion: 'opinion',
  bodyAndMind: 'body-and-mind',
  engineering: 'engineering',
  stories: 'stories',
  coffee: 'coffee',
} as const;

export type Category = (typeof CATEGORY)[keyof typeof CATEGORY];

export const CATEGORIES = [
  CATEGORY.verses,
  CATEGORY.essays,
  CATEGORY.opinion,
  CATEGORY.bodyAndMind,
  CATEGORY.engineering,
  CATEGORY.stories,
  CATEGORY.coffee,
] as const;

export const CATEGORY_LABEL: Record<Locale, Record<Category, string>> = {
  [LOCALE.es]: {
    [CATEGORY.verses]: 'Versos',
    [CATEGORY.essays]: 'Ensayos',
    [CATEGORY.opinion]: 'Opinión',
    [CATEGORY.bodyAndMind]: 'Cuerpo y mente',
    [CATEGORY.engineering]: 'Ingeniería',
    [CATEGORY.stories]: 'Relatos',
    [CATEGORY.coffee]: 'Parada de café',
  },
  [LOCALE.en]: {
    [CATEGORY.verses]: 'Verses',
    [CATEGORY.essays]: 'Essays',
    [CATEGORY.opinion]: 'Opinion',
    [CATEGORY.bodyAndMind]: 'Body and mind',
    [CATEGORY.engineering]: 'Engineering',
    [CATEGORY.stories]: 'Stories',
    [CATEGORY.coffee]: 'Coffee stop',
  },
};

export const CATEGORY_SLUG: Record<Locale, Record<Category, string>> = {
  [LOCALE.es]: {
    [CATEGORY.verses]: 'versos',
    [CATEGORY.essays]: 'ensayos',
    [CATEGORY.opinion]: 'opinion',
    [CATEGORY.bodyAndMind]: 'cuerpo-y-mente',
    [CATEGORY.engineering]: 'ingenieria',
    [CATEGORY.stories]: 'relatos',
    [CATEGORY.coffee]: 'cafe',
  },
  [LOCALE.en]: {
    [CATEGORY.verses]: 'verses',
    [CATEGORY.essays]: 'essays',
    [CATEGORY.opinion]: 'opinion',
    [CATEGORY.bodyAndMind]: 'body-and-mind',
    [CATEGORY.engineering]: 'engineering',
    [CATEGORY.stories]: 'stories',
    [CATEGORY.coffee]: 'coffee',
  },
};

export const categoryHref = (category: Category, locale: Locale) =>
  routesFor(locale).tag(CATEGORY_SLUG[locale][category]);

export const CATEGORY_COLOR: Record<Category, DecalColor> = {
  [CATEGORY.verses]: DECAL_COLOR.pink,
  [CATEGORY.stories]: DECAL_COLOR.pink,
  [CATEGORY.coffee]: DECAL_COLOR.pink,
  [CATEGORY.essays]: DECAL_COLOR.teal,
  [CATEGORY.bodyAndMind]: DECAL_COLOR.teal,
  [CATEGORY.opinion]: DECAL_COLOR.orange,
  [CATEGORY.engineering]: DECAL_COLOR.orange,
};

export const CATEGORY_FILL = {
  solid: 'solid',
  outline: 'outline',
} as const;

export type CategoryFill = (typeof CATEGORY_FILL)[keyof typeof CATEGORY_FILL];

export const CATEGORY_FILL_OF: Record<Category, CategoryFill> = {
  [CATEGORY.verses]: CATEGORY_FILL.solid,
  [CATEGORY.essays]: CATEGORY_FILL.solid,
  [CATEGORY.opinion]: CATEGORY_FILL.solid,
  [CATEGORY.stories]: CATEGORY_FILL.outline,
  [CATEGORY.coffee]: CATEGORY_FILL.outline,
  [CATEGORY.bodyAndMind]: CATEGORY_FILL.outline,
  [CATEGORY.engineering]: CATEGORY_FILL.outline,
};
