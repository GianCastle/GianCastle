import { COMPONENT, type ComponentId } from './catalog.entries';
import type { EntryDoc } from './catalog.types';

export const COMPONENT_DOCS: Record<ComponentId, EntryDoc> = {
  [COMPONENT.raceNumbers]: {
    title: 'Race numbers',
    lede: 'Results pinned like a bib: the number first, the story on the back.',
    source: 'components/RaceNumbers.astro',
    notes: [
      {
        heading: 'Why it exists',
        body: 'A list of achievements reads as a wall of text. A bib says one thing loudly and keeps the details for whoever gets close. The tilt and the scattered chevrons come from how numbers sit on a jersey, never perfectly straight.',
      },
      {
        heading: 'Use it for',
        body: 'A handful of results where each one has a figure worth printing big. The back holds two or three sentences.',
      },
      {
        heading: 'Leave it out when',
        body: 'The number is not the point, or the detail needs more than a short paragraph. The card grows to its taller face, but a long back makes the front look empty.',
      },
    ],
    props: [
      {
        name: 'items',
        type: 'readonly RaceNumber[]',
        required: true,
        description: 'One card each: sector, number, caption, title, body and decal color.',
      },
      {
        name: 'labels',
        type: 'RaceNumberLabels',
        required: true,
        description: 'The turn over and turn back hints, so the copy stays with the page.',
      },
      {
        name: 'id',
        type: 'string',
        description: 'Prefix for the ids that link each card to its text.',
      },
    ],
  },
  [COMPONENT.sectionPlate]: {
    title: 'Section plate',
    lede: 'A number plate that follows you down the page and says where you are.',
    source: 'components/SectionPlate.astro',
    notes: [
      {
        heading: 'Why it exists',
        body: 'A long single page needs a way back without a header bar eating the top of every screen. The plate takes the space of a sticker, shows the current section and opens into the full list on demand.',
      },
      {
        heading: 'How it tracks',
        body: 'The current section is worked out from scroll position, not from intersection events, so it stays right after a jump link or a resize. It stays inert until the first section reaches the middle of the screen.',
      },
      {
        heading: 'Leave it out when',
        body: 'The page has fewer than three sections or already has a visible menu. This page mounts a real one for its own sections: look at the top right corner.',
      },
    ],
    props: [
      {
        name: 'sections',
        type: 'readonly PlateSection[]',
        required: true,
        description: 'The id and label of each section, in page order. Numbers are derived.',
      },
      {
        name: 'labels',
        type: 'PlateLabels',
        required: true,
        description: 'Navigation name, the position text and the contact link at the bottom.',
      },
      {
        name: 'links',
        type: 'readonly PlateLink[]',
        description: 'Extra links listed after the sections, for places outside the page.',
      },
    ],
  },
  [COMPONENT.slantBars]: {
    title: 'Slant bars',
    lede: 'Two offset bars behind the line that matters.',
    source: 'components/SlantBars.astro',
    notes: [
      {
        heading: 'Why it exists',
        body: 'Team kits underline a rider name with two slanted bars in different colors. It marks one line as the important one without changing its typeface or size.',
      },
      {
        heading: 'How it wraps',
        body: 'The bars are a background on the text, cloned per line, so when the phrase breaks on a narrow screen every line gets its own pair instead of one large block.',
      },
      {
        heading: 'Leave it out when',
        body: 'There is already one on screen. Two highlighted lines cancel each other.',
      },
    ],
    props: [
      { name: 'slot', type: 'default', required: true, description: 'The text to highlight.' },
    ],
  },
  [COMPONENT.poster]: {
    title: 'Poster',
    lede: 'The wordmark cut in two tones along a tilted seam.',
    source: 'components/Poster.astro',
    notes: [
      {
        heading: 'Why it exists',
        body: 'The first screen has one job, to be recognizable. The wordmark fills the width, split between the plain and contrast tones the way a frame is painted in two halves.',
      },
      {
        heading: 'How it fits',
        body: 'The size comes from the number of characters, so any wordmark fills the width without a breakpoint table. On narrow screens the lines stack and the same math runs on the longest line.',
      },
      {
        heading: 'Leave it out when',
        body: 'The page is not a front page. Inner pages use the masthead, which carries the same wordmark at a size that leaves room for content.',
      },
    ],
    props: [
      {
        name: 'lines',
        type: 'readonly string[]',
        required: true,
        description: 'The wordmark, one string per line when stacked.',
      },
      {
        name: 'heading',
        type: 'string',
        required: true,
        description: 'The real h1 for assistive technology. The drawn wordmark is decorative.',
      },
      {
        name: 'headingTag',
        type: 'HTMLTag',
        description:
          'Element for that heading. Defaults to h1, change it when the page has its own.',
      },
      { name: 'sticker', type: 'string', description: 'A ringed chip pinned to the seam.' },
      { name: 'eyebrow', type: 'string', description: 'A chip before the chevrons.' },
      {
        name: 'slots',
        type: 'corner, tagline, actions',
        description: 'Controls in the corner, the line under the wordmark and the action row.',
      },
    ],
  },
  [COMPONENT.masthead]: {
    title: 'Masthead',
    lede: 'The wordmark at reading size, with the navigation beside it.',
    source: 'components/Masthead.astro',
    notes: [
      {
        heading: 'Why it exists',
        body: 'Inner pages need the brand and a way around without the weight of the poster. The wordmark keeps the two tone split and the tilt, at a size that fits in a header.',
      },
      {
        heading: 'Language aware',
        body: 'It receives the locale and the alternate page, so the language switch points at the equivalent page when one exists and says so when it falls back.',
      },
      {
        heading: 'Leave it out when',
        body: 'The poster is on the page. One wordmark per screen.',
      },
    ],
    props: [
      { name: 'wordmark', type: 'string', required: true, description: 'The brand text.' },
      { name: 'href', type: 'string', required: true, description: 'Where the brand links to.' },
      { name: 'eyebrow', type: 'string', description: 'A small chip above the wordmark.' },
      {
        name: 'links',
        type: 'readonly { label; href }[]',
        description: 'Navigation links shown before the controls.',
      },
      { name: 'locale', type: 'Locale', description: 'Language of the labels. Defaults to en.' },
      {
        name: 'alternate',
        type: 'LocaleAlternate',
        description: 'The same page in the other language, for the switch.',
      },
    ],
  },
  [COMPONENT.decal]: {
    title: 'Decal',
    lede: 'One shape, one color, placed by hand.',
    source: 'components/Decal.astro',
    notes: [
      {
        heading: 'Why it exists',
        body: 'Every square, triangle, chevron and dash on the site is this component. One primitive keeps the shapes consistent and makes a new pattern a matter of listing shapes, not drawing them.',
      },
      {
        heading: 'Built on top',
        body: 'Chevrons and Dashes repeat it in a row, and DecalStrip lays out a fixed pattern used as a divider. Without a color it takes the current text color.',
      },
      {
        heading: 'Leave it out when',
        body: 'The mark has to mean something. Decals are decoration and are hidden from assistive technology.',
      },
    ],
    props: [
      {
        name: 'shape',
        type: 'DecalShape',
        description: 'square, triangle, chevron or dash. Defaults to square.',
      },
      {
        name: 'color',
        type: 'DecalColor',
        description: 'orange, teal or pink. Without it the shape uses the text color.',
      },
      { name: 'size', type: 'string', description: 'Any CSS length. Defaults to 0.6em.' },
      { name: 'rotate', type: 'number', description: 'Degrees. Defaults to 0.' },
    ],
  },
  [COMPONENT.patternStrip]: {
    title: 'Pattern strip',
    lede: 'Four panels of paint where one section ends and the next begins.',
    source: 'components/PatternStrip.astro',
    notes: [
      {
        heading: 'Why it exists',
        body: 'A team jersey breaks its lower panels into blocks: a solid color, waves, a zigzag, a row of arrows. The strip brings that to the edge between two bands, so a change of tone reads as a seam and not as a cut.',
      },
      {
        heading: 'How it is drawn',
        body: 'Every panel is a CSS gradient on a plain box, with the Chevrons component in the last one. No images. The panels and their widths are a typed list, so a new pattern is one entry and one class.',
      },
      {
        heading: 'Leave it out when',
        body: 'Both neighbours share a tone, or the page is short. It is the loudest divider in the system: twice on a long page is the limit.',
      },
    ],
  },
  [COMPONENT.stageProfile]: {
    title: 'Stage profile',
    lede: 'A process drawn as the elevation chart of a race stage.',
    source: 'components/StageProfile.astro',
    notes: [
      {
        heading: 'Why it exists',
        body: 'Numbered steps say what happens in order but not who does the work. A stage profile adds that: each marker on the climb is colored by its owner, a person, the agents or both.',
      },
      {
        heading: 'How it reads',
        body: 'The profile is one fixed outline and the markers are spread along it by count, so adding a step does not mean redrawing anything. The finish label closes the line.',
      },
      {
        heading: 'Leave it out when',
        body: 'The steps are not sequential, or there are more than six. The chart gets crowded and the titles shrink too far.',
      },
    ],
    props: [
      {
        name: 'stages',
        type: 'readonly Stage[]',
        required: true,
        description: 'Title, body, tag and owner of each step.',
      },
      {
        name: 'finishLabel',
        type: 'string',
        required: true,
        description: 'Text at the finish line.',
      },
    ],
  },
  [COMPONENT.verbList]: {
    title: 'Verb list',
    lede: 'Each promise starts with the verb, printed as large as it fits.',
    source: 'components/VerbList.astro',
    notes: [
      {
        heading: 'Why it exists',
        body: 'A value proposition is easier to scan when every item opens with what gets done. The verb takes the heavy type, the rest of the phrase follows at label size.',
      },
      {
        heading: 'How it fits',
        body: 'The verb is sized against its own column, so a longer word in another language scales down instead of breaking the layout.',
      },
      {
        heading: 'Leave it out when',
        body: 'The items do not start with a verb. Forcing nouns into this shape loses the rhythm.',
      },
    ],
    props: [
      {
        name: 'items',
        type: 'readonly { verb; rest; body; color }[]',
        required: true,
        description: 'The verb, the rest of the phrase, the paragraph and a decal color.',
      },
    ],
  },
  [COMPONENT.sticker]: {
    title: 'Sticker',
    lede: 'A tilted, double bordered box for the thing you want picked up.',
    source: 'components/Sticker.astro',
    notes: [
      {
        heading: 'Why it exists',
        body: 'Offers and callouts need a container that feels like an object. The double border and the slight tilt come from die cut stickers, with two decals pinned to the corner.',
      },
      {
        heading: 'Featured',
        body: 'The featured variant fills with orange and switches its text to ink, for the one option you want chosen. Use it once per group.',
      },
      {
        heading: 'Leave it out when',
        body: 'The content is long form. Tilted paragraphs are tiring to read past a few lines.',
      },
    ],
    props: [
      { name: 'as', type: 'HTMLTag', description: 'The element to render. Defaults to div.' },
      { name: 'featured', type: 'boolean', description: 'The filled variant.' },
      {
        name: 'tilt',
        type: 'left | right | none',
        description: 'Direction of the tilt. Defaults to left.',
      },
      {
        name: 'padding',
        type: 'regular | tight',
        description: 'Inner spacing. Defaults to regular.',
      },
    ],
  },
  [COMPONENT.castleMark]: {
    title: 'Castle mark',
    lede: 'The surname as a badge, with a gate that lifts.',
    source: 'components/CastleMark.astro',
    notes: [
      {
        heading: 'Why it exists',
        body: 'Castillo means castle. The mark is a small tower that stands in for the name where the wordmark does not fit, like a head badge on a frame.',
      },
      {
        heading: 'The gate',
        body: 'The portcullis lifts once when the page loads and drops again while you hover the element that hosts the mark. It is the only place where the brand moves, and it holds still under reduced motion.',
      },
      {
        heading: 'Leave it out when',
        body: 'It would appear twice on a page with the same id. Pass a different id to each extra copy so the clip path stays unique.',
      },
    ],
    props: [
      {
        name: 'id',
        type: 'string',
        description: 'Id of the gate clip path. Change it when the mark renders more than once.',
      },
    ],
  },
  [COMPONENT.footerNav]: {
    title: 'Footer nav',
    lede: 'A route sheet at the end of the page: where you are and where else you can go.',
    source: 'components/FooterNav.astro',
    notes: [
      {
        heading: 'Why it exists',
        body: 'There are three sites and each one ends on the same question, what else is there. The footer answers it the same way everywhere: the sections of this page, the three sites with the current one marked, and a way to reach me.',
      },
      {
        heading: 'How it adapts',
        body: 'The sections column only renders when a page passes sections, and the contact column only when something is slotted in. The sites come from one record, and a link falls back to a site default language when that site is not translated.',
      },
      {
        heading: 'Leave it out when',
        body: 'It is not the last thing on the page. It is a footer, not a menu, and the section plate already covers getting around while you scroll.',
      },
    ],
    props: [
      {
        name: 'site',
        type: 'Site',
        required: true,
        description: 'The site this page belongs to. It gets the marker.',
      },
      {
        name: 'locale',
        type: 'Locale',
        required: true,
        description: 'Language of the labels and of the links to the other sites.',
      },
      {
        name: 'sections',
        type: 'readonly PlateSection[]',
        description: 'Sections of this page, numbered in order. Omit to drop the column.',
      },
      {
        name: 'slot',
        type: 'default',
        description: 'Contact content: social links, a button, a feed link.',
      },
    ],
  },
};
