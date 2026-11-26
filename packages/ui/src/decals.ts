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

export const DECAL_COLOR_VAR: Record<DecalColor, string> = {
  [DECAL_COLOR.orange]: 'var(--orange)',
  [DECAL_COLOR.teal]: 'var(--teal)',
  [DECAL_COLOR.pink]: 'var(--pink)',
};

export const DECAL_COLORS = [DECAL_COLOR.orange, DECAL_COLOR.teal, DECAL_COLOR.pink] as const;

export const DECAL_TINT_VAR: Record<DecalColor, string> = {
  [DECAL_COLOR.orange]: 'var(--tint-orange)',
  [DECAL_COLOR.teal]: 'var(--tint-teal)',
  [DECAL_COLOR.pink]: 'var(--tint-pink)',
};
