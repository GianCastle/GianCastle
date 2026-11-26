export type ColorToken = { token: string; name: string; role: string };

export type ColorGroup = { title: string; tokens: readonly ColorToken[] };

export const COLOR_GROUPS: readonly ColorGroup[] = [
  {
    title: 'Decals',
    tokens: [
      {
        token: '--orange',
        name: 'Orange',
        role: 'The pop color. Solid fills that ask for attention: the current section, the front bar, the text selection.',
      },
      {
        token: '--teal',
        name: 'Teal',
        role: 'The second voice. The trailing bar, the soft accent and anything the agents own.',
      },
      {
        token: '--pink',
        name: 'Pink',
        role: 'The marker, and the one you see least. Eyebrow chips and whatever is shared.',
      },
    ],
  },
  {
    title: 'Shades for text',
    tokens: [
      {
        token: '--orange-deep',
        name: 'Orange deep',
        role: 'Accent text and tints on light surfaces.',
      },
      {
        token: '--orange-bright',
        name: 'Orange bright',
        role: 'Accent text and tints on dark surfaces.',
      },
      { token: '--teal-deep', name: 'Teal deep', role: 'Soft accent on light surfaces.' },
      { token: '--teal-bright', name: 'Teal bright', role: 'Soft accent on dark surfaces.' },
      { token: '--pink-deep', name: 'Pink deep', role: 'Pink tint on light surfaces.' },
    ],
  },
  {
    title: 'Frame',
    tokens: [
      {
        token: '--ink',
        name: 'Ink',
        role: 'Text on light surfaces and on every solid decal fill.',
      },
      { token: '--charcoal', name: 'Charcoal', role: 'The plain background in the dark theme.' },
      { token: '--pitch', name: 'Pitch', role: 'The contrast background in the dark theme.' },
      { token: '--ice', name: 'Ice', role: 'The plain background in the light theme.' },
      { token: '--frost', name: 'Frost', role: 'Text on dark surfaces.' },
    ],
  },
];
