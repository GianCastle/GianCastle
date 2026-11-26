import { AUTHOR } from '@giancastle/ui/sites';
import { ENTRY_ANCHOR, type EntryAnchor } from '@/routes';
import { ENTRY_KIND, type EntryKind } from '@/features/catalog/catalog.entries';

export const SITE_COPY = {
  name: `${AUTHOR.brand} UI`,
  strapline: 'Design language.',
  description:
    'The design language behind giancastle.com: every color, typeface, shape and component, with the reason it exists.',
  cover: {
    title: 'The start list',
    lede: 'Every piece of the design language, with its number.',
    legend: 'Orange bands are foundations, teal bands are components.',
  },
  nav: {
    label: 'Catalog',
    menu: 'Menu',
    home: 'Start list',
    previous: 'Previous',
    next: 'Next',
    source: 'Source',
  },
  kinds: {
    [ENTRY_KIND.foundation]: 'Foundations',
    [ENTRY_KIND.component]: 'Components',
  } satisfies Record<EntryKind, string>,
  kind: {
    [ENTRY_KIND.foundation]: 'Foundation',
    [ENTRY_KIND.component]: 'Component',
  } satisfies Record<EntryKind, string>,
  anchors: {
    [ENTRY_ANCHOR.demo]: 'Live',
    [ENTRY_ANCHOR.notes]: 'Reasoning',
    [ENTRY_ANCHOR.props]: 'Props',
  } satisfies Record<EntryAnchor, string>,
  props: { name: 'Prop', type: 'Type', description: 'What it does', required: 'required' },
  stage: (number: string) => `Stage ${number}`,
  notFound: { title: 'Wrong turn', heading: 'Wrong turn.', back: 'Back to the start list' },
} as const;
