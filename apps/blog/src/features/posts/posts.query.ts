import {
  LOCALES,
  equivalentPage,
  fallbackPage,
  otherLocale,
  type Locale,
  type LocaleAlternate,
} from '@giancastle/ui/locale';
import { getCollection, type CollectionEntry } from 'astro:content';
import { routesFor } from '@/routes';
import { CATEGORIES, CATEGORY_LABEL, CATEGORY_SLUG, type Category } from './posts.categories';
import { POSTS_COLLECTION } from './posts.constants';
import { excerpt, readingMinutes } from './posts.format';

type Entry = CollectionEntry<typeof POSTS_COLLECTION>;

export type Post = Entry & {
  locale: Locale;
  slug: string;
  href: string;
  excerpt: string;
  readingMinutes: number;
};

export type Tag = { category: Category; name: string; slug: string; posts: Post[] };

const isLocale = (value: string): value is Locale => LOCALES.some(locale => locale === value);

const toPost = (entry: Entry): Post => {
  const [folder = '', ...rest] = entry.id.split('/');
  if (!isLocale(folder)) throw new Error(`Post "${entry.id}" is not inside a locale folder`);
  const slug = rest.join('/');
  const body = entry.body ?? '';
  return {
    ...entry,
    locale: folder,
    slug,
    href: routesFor(folder).post(slug),
    excerpt: excerpt(body),
    readingMinutes: readingMinutes(body),
  };
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
  return counterpart ? equivalentPage(locale, counterpart.href) : fallbackPage(locale, routes.home);
};

export const groupByCategory = (posts: Post[], locale: Locale): Tag[] =>
  CATEGORIES.map(category => {
    const name = CATEGORY_LABEL[locale][category];
    return {
      category,
      name,
      slug: CATEGORY_SLUG[locale][category],
      posts: posts.filter(post => post.data.category === category),
    };
  }).filter(tag => tag.posts.length > 0);

export const getTagAlternate = async (tag: Tag, locale: Locale): Promise<LocaleAlternate> => {
  const other = otherLocale(locale);
  const routes = routesFor(other);
  const counterpart = groupByCategory(await getPublishedPosts(other), other).find(
    candidate => candidate.category === tag.category,
  );
  return counterpart
    ? equivalentPage(other, routes.tag(counterpart.slug))
    : fallbackPage(other, routes.home);
};
