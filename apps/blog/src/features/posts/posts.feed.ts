import rss from '@astrojs/rss';
import type { Locale } from '@giancastle/ui/locale';
import type { APIContext } from 'astro';
import { routesFor } from '@/routes';
import { excerpt } from './posts.format';
import { SITE_COPY } from './posts.labels';
import { getPublishedPosts } from './posts.query';

export const buildFeed = async (locale: Locale, context: APIContext) => {
  const posts = await getPublishedPosts(locale);
  const routes = routesFor(locale);
  return rss({
    title: SITE_COPY[locale].title,
    description: SITE_COPY[locale].description,
    site: context.site ?? context.url.origin,
    customData: `<language>${locale}</language>`,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: excerpt(post.body ?? ''),
      categories: post.data.tags,
      link: routes.post(post.slug),
    })),
  });
};
