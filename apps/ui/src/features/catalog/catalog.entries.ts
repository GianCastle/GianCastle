import { DECAL_COLOR, type DecalColor } from '@giancastle/ui/decals';

export const FOUNDATION = {
  color: 'color',
  type: 'type',
  shapes: 'shapes',
  motion: 'motion',
} as const;

export const COMPONENT = {
  raceNumbers: 'race-numbers',
  sectionPlate: 'section-plate',
  slantBars: 'slant-bars',
  poster: 'poster',
  masthead: 'masthead',
  decal: 'decal',
  patternStrip: 'pattern-strip',
  stageProfile: 'stage-profile',
  verbList: 'verb-list',
  sticker: 'sticker',
  castleMark: 'castle-mark',
} as const;

export type FoundationId = (typeof FOUNDATION)[keyof typeof FOUNDATION];
export type ComponentId = (typeof COMPONENT)[keyof typeof COMPONENT];
export type EntryId = FoundationId | ComponentId;

export const ENTRY_KIND = {
  foundation: 'foundation',
  component: 'component',
} as const;

export type EntryKind = (typeof ENTRY_KIND)[keyof typeof ENTRY_KIND];

export const ENTRY_KINDS = [ENTRY_KIND.foundation, ENTRY_KIND.component] as const;

export const ENTRY_KIND_COLOR: Record<EntryKind, DecalColor> = {
  [ENTRY_KIND.foundation]: DECAL_COLOR.orange,
  [ENTRY_KIND.component]: DECAL_COLOR.teal,
};

export const ENTRY_IDS_BY_KIND: Record<EntryKind, readonly EntryId[]> = {
  [ENTRY_KIND.foundation]: Object.values(FOUNDATION),
  [ENTRY_KIND.component]: Object.values(COMPONENT),
};

export const ENTRY_NUMBER_WIDTH = 2;
