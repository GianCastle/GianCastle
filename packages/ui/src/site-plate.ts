import type { Locale } from './locale';
import type { PlateHeading, PlateLabels, PlateLink } from './section-plate';
import { SITE_ORDER, siteHref, type Site } from './sites';
import { UI_COPY } from './ui.labels';

export const plateLabels = (locale: Locale): PlateLabels => {
  const copy = UI_COPY[locale].plate;
  return { nav: copy.sites, position: copy.position };
};

export const plateHeading = (current: Site, locale: Locale): PlateHeading => ({
  caption: UI_COPY[locale].footer.sites,
  name: UI_COPY[locale].footer.site[current].label,
});

export const plateSiteLinks = (current: Site, locale: Locale): PlateLink[] =>
  SITE_ORDER.filter(site => site !== current).map(site => ({
    label: UI_COPY[locale].footer.site[site].label,
    href: siteHref(site, locale),
  }));
