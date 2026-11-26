import { LOCALES } from '@giancastle/ui/locale';
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORIES } from './features/posts/posts.categories';
import { POSTS_COLLECTION } from './features/posts/posts.constants';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: `{${LOCALES.join(',')}}/*.md` }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string().min(1),
        date: z.coerce.date(),
        category: z.enum(CATEGORIES),
        draft: z.boolean().default(false),
        translated: z.boolean().default(false),
        image: image(),
      })
      .strict(),
});

export const collections = { [POSTS_COLLECTION]: posts };
