export type PlateSection = { id: string; label: string };

export type PlateLink = { label: string; href: string };

export type PlateHeading = { caption: string; name: string };

export type PlateLabels = {
  nav: string;
  position: (current: number, total: number) => string;
  contact?: { label: string; href: string };
};

export const PLATE_NUMBER_WIDTH = 2;

export const PLATE_ATTR = {
  root: 'data-section-plate',
  link: 'data-plate-link',
  label: 'data-plate-label',
  number: 'data-plate-number',
  position: 'data-plate-position',
  name: 'data-plate-name',
  itemNumber: 'data-number',
  itemPosition: 'data-position',
  visible: 'data-visible',
} as const;
