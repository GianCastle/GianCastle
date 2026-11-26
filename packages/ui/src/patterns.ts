export const PATTERN = {
  solid: 'solid',
  waves: 'waves',
  zigzag: 'zigzag',
  chevrons: 'chevrons',
} as const;

export type Pattern = (typeof PATTERN)[keyof typeof PATTERN];

export type PatternPanel = { pattern: Pattern; span: number };

export const PATTERN_PANELS: readonly PatternPanel[] = [
  { pattern: PATTERN.solid, span: 1.2 },
  { pattern: PATTERN.waves, span: 1 },
  { pattern: PATTERN.zigzag, span: 1.4 },
  { pattern: PATTERN.chevrons, span: 0.8 },
];
