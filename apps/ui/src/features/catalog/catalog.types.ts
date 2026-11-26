import type { DecalColor } from '@giancastle/ui/decals';
import type { EntryId, EntryKind } from './catalog.entries';

export type PropDoc = {
  name: string;
  type: string;
  required?: boolean;
  description: string;
};

export type NoteDoc = { heading: string; body: string };

export type EntryDoc = {
  title: string;
  lede: string;
  notes: readonly NoteDoc[];
  source?: string;
  props?: readonly PropDoc[];
};

export type Entry = EntryDoc & {
  id: EntryId;
  kind: EntryKind;
  color: DecalColor;
  number: string;
  href: string;
};
