import { AUTHOR, SITES } from '@giancastle/ui/sites';
import { CATEGORY_LABEL } from './posts.categories';
import type { Post } from './posts.query';

export const buildPostJsonLd = (post: Post, url: URL, imageUrl: URL) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.data.title,
  datePublished: post.data.date.toISOString(),
  inLanguage: post.locale,
  image: imageUrl.href,
  mainEntityOfPage: url.href,
  articleSection: CATEGORY_LABEL[post.locale][post.data.category],
  author: { '@type': 'Person', name: AUTHOR.name, url: SITES.web },
});
