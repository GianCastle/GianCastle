import type { DecalColor } from '@giancastle/ui/decals';
import type { RaceNumber, RaceNumberLabels } from '@giancastle/ui/race-numbers';
import type { Stage } from '@giancastle/ui/stages';

type Cta = { label: string; href: string; download?: boolean };

export type HomeContent = {
  profile: { role: string; focus: string; description: string; knowsAbout: readonly string[] };
  hero: { heading: string; sticker: string; tagline: string; cv: Cta; cta: Cta };
  proof: { label: string; labels: RaceNumberLabels; items: readonly RaceNumber[] };
  value: {
    label: string;
    statement: readonly string[];
    items: readonly { verb: string; rest: string; body: string; color: DecalColor }[];
  };
  process: {
    label: string;
    headline: { lead: string; accent: string };
    finish: string;
    items: readonly Stage[];
  };
  ways: {
    label: string;
    items: readonly { tag: string; title: string; body: string; featured?: boolean; cta: Cta }[];
  };
  closer: { title: string; tagline: string; blog: Cta; cv: Cta; note: string; colophon: string };
  toolbox: { label: string; groups: readonly { name: string; items: readonly string[] }[] };
};
