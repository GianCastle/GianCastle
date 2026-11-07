# giancastle.com

Two static Astro sites in one pnpm workspace, deployed to Cloudflare Workers static assets.

| App           | Domain              | What it is                                                         |
| ------------- | ------------------- | ------------------------------------------------------------------ |
| `apps/web`    | giancastle.com      | Business page, sanitized CV, `llms.txt`                            |
| `apps/blog`   | blog.giancastle.com | Personal blog, markdown posts, Sveltia CMS at `/admin/`            |
| `packages/ui` |                     | Theme tokens, site constants and the component system used by both |

## Run

Node 24 and pnpm 10.

```bash
pnpm install
pnpm dev:web    # http://localhost:4321
pnpm dev:blog   # http://localhost:4322
pnpm check      # astro check on both apps
pnpm build
```

## Languages

Both sites are in English and Spanish. The business site opens in English with Spanish under `/es/`. The blog opens in Spanish with English under `/en/`. Each app sets its default in `src/i18n.ts`, and the shared locale helpers live in `packages/ui/src/locale.ts`.

## Writing posts

Posts are markdown files in `apps/blog/src/content/posts/es` and `apps/blog/src/content/posts/en`. A post and its translation share the same filename, and cover images live in the shared `img` folder next to those two. Set `translated: true` on the version that is a translation so the page links back to the original. The frontmatter is validated by `apps/blog/src/content.config.ts` and the build fails on an unknown or missing field.

To edit in the browser, open `/admin/index.html`. Locally, choose "Work with Local Repository" in a Chromium browser. In production, sign in with a GitHub fine-grained token that has Contents read and write on this repo.

## CV

The CV content lives in `apps/web/src/features/cv/cv.data.en.ts` and `cv.data.es.ts`. After changing either, regenerate both PDFs with `pnpm cv:pdf` (needs Google Chrome, or set `CHROME_PATH`) and commit the result.

## Deploy

Each app has its own `wrangler.jsonc`. From the app folder:

```bash
pnpm build && pnpm dlx wrangler deploy
```

`apps/web/public/_redirects` sends `/blog` and every old post URL to the blog subdomain.

## AI crawlers

The business site allows everything. The blog allows AI search and answer bots and disallows training bots in `robots.txt`, with a matching `Content-Signal` header. Compliance is voluntary on the crawler side.
