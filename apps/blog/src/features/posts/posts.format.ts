import { DATE_LOCALE, type Locale } from '@giancastle/ui/locale';
import { EXCERPT_LENGTH, WORDS_PER_MINUTE } from './posts.constants';
import { POSTS_COPY } from './posts.labels';

const stripMarkdown = (markdown: string) =>
  markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

export const readingMinutes = (markdown: string) =>
  Math.max(1, Math.round(stripMarkdown(markdown).split(' ').length / WORDS_PER_MINUTE));

export const formatReadingTime = (minutes: number, locale: Locale) =>
  POSTS_COPY[locale].readingTime(minutes);

export const excerpt = (markdown: string, length = EXCERPT_LENGTH) => {
  const text = stripMarkdown(markdown);
  if (text.length <= length) return text;
  return `${text.slice(0, text.lastIndexOf(' ', length))}…`;
};

export const formatDate = (date: Date, locale: Locale) =>
  new Intl.DateTimeFormat(DATE_LOCALE[locale], { dateStyle: 'long', timeZone: 'UTC' }).format(date);
