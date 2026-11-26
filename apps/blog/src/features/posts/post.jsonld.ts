import { AUTHOR, SITES } from '@giancastle/ui/sites';
import type { Post } from './posts.query';

export const buildPostJsonLd = (post: Post, url: URL, imageUrl: URL) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.data.title,
  datePublished: post.data.date.toISOString(),
  inLanguage: post.locale,
  image: imageUrl.href,
  mainEntityOfPage: url.href,
  keywords: post.data.tags.join(', '),
  author: { '@type': 'Person', name: AUTHOR.name, url: SITES.web },
});
