import { REPOSITORY_URL } from '@giancastle/ui/sites';
import type { EntryId } from '@/features/catalog/catalog.entries';

export const HOME_PATH = '/';

export const entryPath = (id: EntryId) => `/${id}/`;

export const ENTRY_ANCHOR = {
  demo: 'demo',
  notes: 'notes',
  props: 'props',
} as const;

export type EntryAnchor = (typeof ENTRY_ANCHOR)[keyof typeof ENTRY_ANCHOR];

const SOURCE_ROOT = `${REPOSITORY_URL}/blob/master/packages/ui/src`;

export const sourceHref = (file: string) => `${SOURCE_ROOT}/${file}`;
