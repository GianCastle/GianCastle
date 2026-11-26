import { DECAL_COLOR } from '@giancastle/ui/decals';
import type { RaceNumber, RaceNumberLabels } from '@giancastle/ui/race-numbers';
import type { PlateLabels, PlateSection } from '@giancastle/ui/section-plate';
import { SITES, SITE } from '@giancastle/ui/sites';
import { STAGE_OWNER, type Stage } from '@giancastle/ui/stages';
import { ENTRY_ANCHOR } from '@/routes';
import { SITE_COPY } from '@/site.labels';

export const SAMPLE_RACE_NUMBERS: readonly RaceNumber[] = [
  {
    sector: 'Healthtech',
    number: '8',
    caption: 'weeks, not 12 months',
    title: 'A year of roadmap in 8 weeks',
    body: 'A back-office redesign planned for a year, shipped in about 8 weeks with AI-assisted delivery and a custom UI library.',
    color: DECAL_COLOR.teal,
  },
  {
    sector: 'Healthtech',
    number: '72',
    caption: 'hours, 19 microservices',
    title: 'A migration in three days',
    body: 'Nineteen microservices migrated in 72 hours by autonomous agents working from written specs, with strict parity between old and new.',
    color: DECAL_COLOR.orange,
  },
  {
    sector: 'Streaming',
    number: '24',
    caption: 'alerts, an AI on call',
    title: 'An observability system',
    body: 'Every error is classified, 24 alert rules route to the team chat and an AI agent triages each one in its thread.',
    color: DECAL_COLOR.pink,
  },
];

export const SAMPLE_RACE_LABELS: RaceNumberLabels = {
  turnOver: 'Turn over',
  turnBack: 'Back to the number',
};

export const SAMPLE_PLATE_SECTIONS: readonly PlateSection[] = [
  { id: ENTRY_ANCHOR.demo, label: SITE_COPY.anchors[ENTRY_ANCHOR.demo] },
  { id: ENTRY_ANCHOR.notes, label: SITE_COPY.anchors[ENTRY_ANCHOR.notes] },
  { id: ENTRY_ANCHOR.props, label: SITE_COPY.anchors[ENTRY_ANCHOR.props] },
];

export const SAMPLE_PLATE_LABELS: PlateLabels = {
  nav: 'Sections of this page',
  position: (current, total) => `Section ${current} of ${total}`,
  contact: { label: 'giancastle.com', href: SITES[SITE.web] },
};

export const SAMPLE_HEADLINE = { lead: 'People decide.', accent: 'Agents do the work.' } as const;

export const SAMPLE_STAGES: readonly Stage[] = [
  {
    title: 'Spec',
    body: 'We agree on what done means before anything runs.',
    tag: 'KM 0 · You and me',
    owner: STAGE_OWNER.shared,
  },
  {
    title: 'Harness',
    body: 'Our standards go in the repo once. Every agent starts from them.',
    tag: 'KM 20 · Me',
    owner: STAGE_OWNER.person,
  },
  {
    title: 'Build',
    body: 'They do the heavy lifting in parallel, in any environment.',
    tag: 'KM 40 · Agents',
    owner: STAGE_OWNER.agents,
  },
  {
    title: 'Verify',
    body: 'Agents run the checks. I confirm it works in the real environment.',
    tag: 'KM 60 · Agents and me',
    owner: STAGE_OWNER.mixed,
  },
  {
    title: 'Review',
    body: 'I read the decisions and how they fit your system.',
    tag: 'KM 80 · Me',
    owner: STAGE_OWNER.person,
  },
];

export const SAMPLE_FINISH = 'We made it';

export const SAMPLE_VERBS = [
  {
    verb: 'Build',
    rest: 'products',
    color: DECAL_COLOR.orange,
    body: 'I own a feature from the spec to production.',
  },
  {
    verb: 'Multiply',
    rest: 'delivery with AI',
    color: DECAL_COLOR.teal,
    body: 'Specs, parallel tasks and review gates keep the speed from lowering the bar.',
  },
  {
    verb: 'Leave',
    rest: 'a workflow behind',
    color: DECAL_COLOR.pink,
    body: 'Your engineers keep shipping this way after I am gone.',
  },
] as const;
