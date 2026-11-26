export const DECAL_SHAPE = {
  triangle: 'triangle',
  square: 'square',
  chevron: 'chevron',
  dash: 'dash',
} as const;

export type DecalShape = (typeof DECAL_SHAPE)[keyof typeof DECAL_SHAPE];

export const DECAL_COLOR = {
  orange: 'orange',
  teal: 'teal',
  pink: 'pink',
} as const;

export type DecalColor = (typeof DECAL_COLOR)[keyof typeof DECAL_COLOR];

export const DECAL_COLORS = [DECAL_COLOR.orange, DECAL_COLOR.teal, DECAL_COLOR.pink] as const;
