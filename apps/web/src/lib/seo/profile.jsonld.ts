import type { Locale } from '@giancastle/ui/locale';
import { AUTHOR, SITES } from '@giancastle/ui/sites';
import { NETWORK, SOCIAL_LINKS } from '@giancastle/ui/socials';
import { HOME_CONTENT } from '@/features/home/home.content';

const profileUrls = SOCIAL_LINKS.filter(link => link.network !== NETWORK.email).map(
  link => link.href,
);

export const buildProfileJsonLd = (locale: Locale) => {
  const { profile } = HOME_CONTENT[locale];
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    inLanguage: locale,
    mainEntity: {
      '@type': 'Person',
      name: AUTHOR.name,
      alternateName: [AUTHOR.brand, AUTHOR.handle],
      jobTitle: profile.role,
      description: profile.description,
      url: SITES.web,
      sameAs: [...profileUrls, SITES.blog],
      knowsAbout: profile.knowsAbout,
      address: { '@type': 'PostalAddress', addressLocality: 'Santo Domingo', addressCountry: 'DO' },
    },
  };
};
