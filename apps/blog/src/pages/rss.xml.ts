import { LOCALE } from '@giancastle/ui/locale';
import type { APIRoute } from 'astro';
import { buildFeed } from '@/features/posts/posts.feed';

export const GET: APIRoute = context => buildFeed(LOCALE.es, context);
