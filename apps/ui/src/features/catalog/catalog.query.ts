import { entryPath } from '@/routes';
import { ENTRY_DOCS } from './catalog.content';
import {
  ENTRY_IDS_BY_KIND,
  ENTRY_KIND_COLOR,
  ENTRY_KINDS,
  ENTRY_NUMBER_WIDTH,
  type EntryId,
  type EntryKind,
} from './catalog.entries';
import type { Entry } from './catalog.types';

const ORDERED = ENTRY_KINDS.flatMap(kind => ENTRY_IDS_BY_KIND[kind].map(id => ({ id, kind })));

const ENTRIES: readonly Entry[] = ORDERED.map(({ id, kind }, index) => ({
  ...ENTRY_DOCS[id],
  id,
  kind,
  color: ENTRY_KIND_COLOR[kind],
  number: String(index + 1).padStart(ENTRY_NUMBER_WIDTH, '0'),
  href: entryPath(id),
}));

export const listEntries = () => ENTRIES;

export const listEntriesByKind = (kind: EntryKind) => ENTRIES.filter(entry => entry.kind === kind);

export const getNeighbours = (id: EntryId) => {
  const index = ENTRIES.findIndex(entry => entry.id === id);
  return { previous: ENTRIES[index - 1], next: ENTRIES[index + 1] };
};
