import { TONE, type Tone } from '@giancastle/ui/theme';
import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import { COMPONENT, FOUNDATION, type EntryId } from './catalog.entries';
import CastleMarkDemo from './demos/CastleMarkDemo.astro';
import ColorDemo from './demos/ColorDemo.astro';
import DecalDemo from './demos/DecalDemo.astro';
import FooterNavDemo from './demos/FooterNavDemo.astro';
import MastheadDemo from './demos/MastheadDemo.astro';
import MotionDemo from './demos/MotionDemo.astro';
import PatternStripDemo from './demos/PatternStripDemo.astro';
import PosterDemo from './demos/PosterDemo.astro';
import RaceNumbersDemo from './demos/RaceNumbersDemo.astro';
import SectionPlateDemo from './demos/SectionPlateDemo.astro';
import ShapesDemo from './demos/ShapesDemo.astro';
import SlantBarsDemo from './demos/SlantBarsDemo.astro';
import StageProfileDemo from './demos/StageProfileDemo.astro';
import StickerDemo from './demos/StickerDemo.astro';
import TypeDemo from './demos/TypeDemo.astro';
import VerbListDemo from './demos/VerbListDemo.astro';

type EntryDemo = {
  Demo: AstroComponentFactory;
  tone: Tone;
  bleed?: boolean;
  showsSections?: boolean;
};

export const ENTRY_DEMOS: Record<EntryId, EntryDemo> = {
  [FOUNDATION.color]: { Demo: ColorDemo, tone: TONE.contrast },
  [FOUNDATION.type]: { Demo: TypeDemo, tone: TONE.plain },
  [FOUNDATION.shapes]: { Demo: ShapesDemo, tone: TONE.contrast },
  [FOUNDATION.motion]: { Demo: MotionDemo, tone: TONE.contrast },
  [COMPONENT.raceNumbers]: { Demo: RaceNumbersDemo, tone: TONE.contrast },
  [COMPONENT.sectionPlate]: {
    Demo: SectionPlateDemo,
    tone: TONE.contrast,
    showsSections: true,
  },
  [COMPONENT.slantBars]: { Demo: SlantBarsDemo, tone: TONE.contrast },
  [COMPONENT.poster]: { Demo: PosterDemo, tone: TONE.plain, bleed: true },
  [COMPONENT.masthead]: { Demo: MastheadDemo, tone: TONE.contrast, bleed: true },
  [COMPONENT.decal]: { Demo: DecalDemo, tone: TONE.plain },
  [COMPONENT.patternStrip]: { Demo: PatternStripDemo, tone: TONE.contrast, bleed: true },
  [COMPONENT.stageProfile]: { Demo: StageProfileDemo, tone: TONE.contrast },
  [COMPONENT.verbList]: { Demo: VerbListDemo, tone: TONE.plain },
  [COMPONENT.sticker]: { Demo: StickerDemo, tone: TONE.plain },
  [COMPONENT.castleMark]: { Demo: CastleMarkDemo, tone: TONE.contrast },
  [COMPONENT.footerNav]: { Demo: FooterNavDemo, tone: TONE.contrast },
};
