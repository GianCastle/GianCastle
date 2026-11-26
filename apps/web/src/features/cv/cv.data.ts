import { LOCALE, type Locale } from '@giancastle/ui/locale';
import { AUTHOR, SITES } from '@giancastle/ui/sites';
import { CONTACT_EMAIL, NETWORK, socialHref } from '@giancastle/ui/socials';
import { CV_EN } from './cv.data.en';
import { CV_ES } from './cv.data.es';
import type { CvContent } from './cv.types';

export const CV_CONTENT: Record<Locale, CvContent> = {
  [LOCALE.en]: CV_EN,
  [LOCALE.es]: CV_ES,
};

export const CV_IDENTITY = {
  name: AUTHOR.name,
  links: [
    { label: 'giancastle.com', href: SITES.web },
    { label: CONTACT_EMAIL, href: socialHref(NETWORK.email) ?? SITES.web },
    { label: 'github.com/giancastle', href: socialHref(NETWORK.github) ?? SITES.web },
    { label: 'linkedin.com/in/gco-c', href: socialHref(NETWORK.linkedin) ?? SITES.web },
  ],
} as const;
