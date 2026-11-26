export type PlateSection = { id: string; label: string };

export type PlateLink = { label: string; href: string };

export type PlateLabels = {
  nav: string;
  position: (current: number, total: number) => string;
  contact: { label: string; href: string };
};

export const PLATE_NUMBER_WIDTH = 2;
