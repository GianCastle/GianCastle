import { COMPONENT_DOCS } from './catalog.content.components';
import { FOUNDATION_DOCS } from './catalog.content.foundations';
import type { EntryId } from './catalog.entries';
import type { EntryDoc } from './catalog.types';

export const ENTRY_DOCS: Record<EntryId, EntryDoc> = { ...FOUNDATION_DOCS, ...COMPONENT_DOCS };
