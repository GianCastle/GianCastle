import { FOUNDATION, type FoundationId } from './catalog.entries';
import type { EntryDoc } from './catalog.types';

export const FOUNDATION_DOCS: Record<FoundationId, EntryDoc> = {
  [FOUNDATION.color]: {
    title: 'Color',
    lede: 'Three decals on a carbon frame, lifted from the paint of a road bike.',
    source: 'theme.css',
    notes: [
      {
        heading: 'Where it comes from',
        body: 'The palette is the paint of a Scott Foil RC: a dark frame with orange, teal and pink graphics. The site keeps that ratio. Most of the page is frame, and color shows up in small, loud pieces.',
      },
      {
        heading: 'Two tones, one palette',
        body: 'Every section is either plain or contrast, set with data-tone. Components never pick a background themselves, they read --bg and --fg from the tone they sit in. That is what lets the same component work on a light band, a dark band and in both themes.',
      },
      {
        heading: 'Bright and deep',
        body: 'Each decal color has a deep and a bright shade. Deep shades carry text and tints on light surfaces, bright shades do the same on dark ones. The pure color is kept for solid fills, where the text on top is always ink.',
      },
    ],
  },
  [FOUNDATION.type]: {
    title: 'Type',
    lede: 'One loud voice, one precise voice and a quiet aside.',
    source: 'theme.css',
    notes: [
      {
        heading: 'Three jobs',
        body: 'Barlow Condensed, black italic and uppercase, is the shout: headlines, numbers, verbs. Archivo, wide and bold at small sizes, is the label on a part: section names, chips, tags. Newsreader italic is the aside that sits under a headline without competing with it.',
      },
      {
        heading: 'Why a serif at all',
        body: 'Team kits pair a heavy sans wordmark with a thin serif line under it. The contrast makes the heavy type feel heavier. Here the serif is rationed: one line per section at most.',
      },
      {
        heading: 'Sizing',
        body: 'Heavy type scales with the viewport through clamp, and inside cards it scales with its container, so a long Spanish word shrinks instead of spilling out.',
      },
    ],
  },
  [FOUNDATION.shapes]: {
    title: 'Shapes',
    lede: 'Squares, triangles, chevrons and dashes, the vocabulary of frame graphics.',
    source: 'decals.ts',
    notes: [
      {
        heading: 'Four shapes',
        body: 'Every decorative mark on the site is one of four shapes drawn with a clip path on a plain box. No images, no icon font. A shape takes its color from a data-decal attribute, so the same square is orange, teal or pink depending on where it lands.',
      },
      {
        heading: 'Direction',
        body: 'Chevrons and dashes always point forward, left to right, the way a bike moves across a photo. Triangles and squares scatter and tilt, like stickers placed by hand.',
      },
      {
        heading: 'Restraint',
        body: 'Shapes are decoration, so they are hidden from assistive technology and never carry meaning on their own. If a shape is the only thing saying something, the text is missing.',
      },
    ],
  },
  [FOUNDATION.motion]: {
    title: 'Motion',
    lede: 'Things arrive fast and settle. Nothing loops.',
    source: 'theme.css',
    notes: [
      {
        heading: 'One curve',
        body: 'Entrances share a single easing token, --ease-out. It starts fast and brakes late, which reads as something with weight coming to a stop.',
      },
      {
        heading: 'Motion answers an action',
        body: 'Cards flip when you ask, the plate drops in once you scroll past the hero, the castle gate lifts on hover. Nothing moves on its own to get attention.',
      },
      {
        heading: 'Reduced motion',
        body: 'Each animated component turns its transitions off under prefers-reduced-motion. The content is identical either way: a flipped card still shows its back, it just gets there without the turn.',
      },
    ],
  },
};
