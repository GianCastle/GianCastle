export const NETWORK = {
  github: 'github',
  linkedin: 'linkedin',
  x: 'x',
  instagram: 'instagram',
  email: 'email',
} as const;

export type Network = (typeof NETWORK)[keyof typeof NETWORK];

export const NETWORK_LABEL: Record<Network, string> = {
  [NETWORK.github]: 'GitHub',
  [NETWORK.linkedin]: 'LinkedIn',
  [NETWORK.x]: 'X',
  [NETWORK.instagram]: 'Instagram',
  [NETWORK.email]: 'Email',
};

export type SocialLink = { network: Network; href: string };

export const CONTACT_EMAIL = 'work@giancastle.com';

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { network: NETWORK.github, href: 'https://github.com/giancastle' },
  { network: NETWORK.linkedin, href: 'https://www.linkedin.com/in/gco-c/' },
  { network: NETWORK.x, href: 'https://x.com/giancastle' },
  { network: NETWORK.instagram, href: 'https://instagram.com/gian.castle' },
  { network: NETWORK.email, href: `mailto:${CONTACT_EMAIL}` },
];

export const socialHref = (network: Network) =>
  SOCIAL_LINKS.find(link => link.network === network)?.href;
