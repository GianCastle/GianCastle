import { LOCALES, otherLocale, type Locale, type LocaleAlternate } from '@giancastle/ui/locale';
import { getCollection, type CollectionEntry } from 'astro:content';
import { routesFor } from '@/routes';
import { POSTS_COLLECTION } from './posts.constants';
import { tagSlug } from './posts.format';

type Entry = CollectionEntry<typeof POSTS_COLLECTION>;

export type Post = Entry & { locale: Locale; slug: string };

export type Tag = { name: string; slug: string; posts: Post[] };

const isLocale = (value: string): value is Locale => LOCALES.some(locale => locale === value);

const toPost = (entry: Entry): Post => {
  const [folder = '', ...rest] = entry.id.split('/');
  if (!isLocale(folder)) throw new Error(`Post "${entry.id}" is not inside a locale folder`);
  return { ...entry, locale: folder, slug: rest.join('/') };
};

const byNewest = (a: Post, b: Post) => b.data.date.getTime() - a.data.date.getTime();

const getAllPublished = async (): Promise<Post[]> => {
  const entries = await getCollection(
    POSTS_COLLECTION,
    ({ data }) => import.meta.env.DEV || !data.draft,
  );
  return entries.map(toPost);
};

export const getPublishedPosts = async (locale: Locale): Promise<Post[]> =>
  (await getAllPublished()).filter(post => post.locale === locale).sort(byNewest);

export const getPostAlternate = async (post: Post): Promise<LocaleAlternate> => {
  const locale = otherLocale(post.locale);
  const routes = routesFor(locale);
  const counterpart = (await getAllPublished()).find(
    other => other.locale === locale && other.slug === post.slug,
  );
  return { locale, href: counterpart ? routes.post(counterpart.slug) : routes.home };
};

export const groupByTag = (posts: Post[]): Tag[] => {
  const tags = new Map<string, Tag>();
  for (const post of posts) {
    for (const name of post.data.tags) {
      const slug = tagSlug(name);
      const tag = tags.get(slug) ?? { name, slug, posts: [] };
      tag.posts.push(post);
      tags.set(slug, tag);
    }
  }
  return [...tags.values()];
};
