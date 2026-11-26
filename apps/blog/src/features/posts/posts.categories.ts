import { DECAL_COLOR, type DecalColor } from '@giancastle/ui/decals';
import { LOCALE, type Locale } from '@giancastle/ui/locale';

export const CATEGORY = {
  verses: 'verses',
  essays: 'essays',
  opinion: 'opinion',
  bodyAndMind: 'body-and-mind',
  engineering: 'engineering',
  stories: 'stories',
} as const;

export type Category = (typeof CATEGORY)[keyof typeof CATEGORY];

export const CATEGORIES = Object.values(CATEGORY) as [Category, ...Category[]];

export const CATEGORY_LABEL: Record<Locale, Record<Category, string>> = {
  [LOCALE.es]: {
    [CATEGORY.verses]: 'Versos',
    [CATEGORY.essays]: 'Ensayos',
    [CATEGORY.opinion]: 'Opinión',
    [CATEGORY.bodyAndMind]: 'Cuerpo y mente',
    [CATEGORY.engineering]: 'Ingeniería',
    [CATEGORY.stories]: 'Relatos',
  },
  [LOCALE.en]: {
    [CATEGORY.verses]: 'Verses',
    [CATEGORY.essays]: 'Essays',
    [CATEGORY.opinion]: 'Opinion',
    [CATEGORY.bodyAndMind]: 'Body and mind',
    [CATEGORY.engineering]: 'Engineering',
    [CATEGORY.stories]: 'Stories',
  },
};

export const CATEGORY_COLOR: Record<Category, DecalColor> = {
  [CATEGORY.verses]: DECAL_COLOR.pink,
  [CATEGORY.stories]: DECAL_COLOR.pink,
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
  [CATEGORY.bodyAndMind]: CATEGORY_FILL.outline,
  [CATEGORY.engineering]: CATEGORY_FILL.outline,
};
