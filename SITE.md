# giancastle.com

Three static Astro sites in one pnpm workspace, deployed to Cloudflare Workers static assets.

| App           | Domain              | What it is                                                        |
| ------------- | ------------------- | ----------------------------------------------------------------- |
| `apps/web`    | giancastle.com      | Business page, sanitized CV, `llms.txt`                           |
| `apps/blog`   | blog.giancastle.com | Personal blog, markdown posts, Sveltia CMS at `/admin/`           |
| `apps/ui`     | ui.giancastle.com   | The design language: foundations and components, each with a demo |
| `packages/ui` |                     | Theme tokens, site constants and the component system used by all |

## Run

Node 24 and pnpm 10.

```bash
pnpm install
pnpm dev:web    # http://localhost:4321
pnpm dev:blog   # http://localhost:4322
pnpm dev:ui     # http://localhost:4321, or the next free port
pnpm check      # astro check on every app
pnpm build
```

## Languages

Both sites are in English and Spanish. The business site opens in English with Spanish under `/es/`. The blog opens in Spanish with English under `/en/`. Each app sets its default in `src/i18n.ts`, and the shared locale helpers live in `packages/ui/src/locale.ts`.

## Writing posts

Posts are markdown files in `apps/blog/src/content/posts/es` and `apps/blog/src/content/posts/en`. A post and its translation share the same filename, and cover images live in the shared `img` folder next to those two. Set `translated: true` on the version that is a translation so the page links back to the original. Each post has one `category` from the list in `apps/blog/src/features/posts/posts.categories.ts`, and `draft: true` keeps it off the live site. The frontmatter is validated by `apps/blog/src/content.config.ts` and the build fails on an unknown or missing field.

To edit in the browser, open `/admin/index.html`. Locally, choose "Work with Local Repository" in a Chromium browser. In production, sign in with a GitHub fine-grained token that has Contents read and write on this repo.

## Design language site

`apps/ui` documents `packages/ui` with the real components. Every entry is listed in `apps/ui/src/features/catalog/catalog.entries.ts`, and its text, props and demo are typed records keyed by that list, so adding an entry without documenting it fails the type check. The props tables are written by hand in `catalog.content.components.ts`: update them when a component's props change.

## CV

The CV is hidden for now: `CV_PUBLISHED` in `apps/web/src/routes.ts` is `false`, so nothing links to it, `/cv/` redirects home and the PDFs sit in `apps/web/unpublished/`, which is not served. To bring it back, set the switch to `true` and move the two PDFs into `apps/web/public/`.

The CV content lives in `apps/web/src/features/cv/cv.data.en.ts` and `cv.data.es.ts`. After changing either, regenerate both PDFs with `pnpm cv:pdf` (needs Google Chrome, or set `CHROME_PATH`) and commit the result.

## Deploy

Cloudflare Workers Builds deploys both apps on every push to `master`. Each Worker is connected to this repo with its own root directory, so a push rebuilds both sites. Other branches build as previews.

| Worker            | Root directory | Build command    | Deploy command        |
| ----------------- | -------------- | ---------------- | --------------------- |
| `giancastle-web`  | `apps/web`     | `pnpm run build` | `npx wrangler deploy` |
| `giancastle-blog` | `apps/blog`    | `pnpm run build` | `npx wrangler deploy` |

Both set the build variable `NODE_VERSION=24`. The domain stays registered at GoDaddy and points to Cloudflare's nameservers, where DNS and the iCloud mail records live.

To deploy by hand, from the app folder:

```bash
pnpm build && pnpm dlx wrangler deploy
```

`apps/web/public/_redirects` sends `/blog` and every old post URL to the blog subdomain.

## AI crawlers

The business site allows everything. The blog allows AI search and answer bots and disallows training bots in `robots.txt`, with a matching `Content-Signal` header. Compliance is voluntary on the crawler side.
