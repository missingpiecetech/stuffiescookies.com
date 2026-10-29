# stuffiescookies.com

Website for Stuffie's Cookies, a home bakery making big, chewy cookies to order. Orders are placed on Instagram ([@blubeaar2](https://www.instagram.com/blubeaar2/)) for local pickup.

## Stack

- SvelteKit 2 / Svelte 5 (runes), fully prerendered to static HTML
- `@sveltejs/adapter-cloudflare`, deployed to Cloudflare Pages on push (build command `npm run build`, output `.svelte-kit/cloudflare`)
- Self-hosted fonts via Fontsource: Fraunces (headings) and Nunito (body)
- Inline SVG icons and illustrations (bow, teddy bear) in `src/lib/components`

## Content

Business facts, flavors, pricing, hours and the FAQ live in one place: `src/lib/data/business.js`. The pages, the JSON-LD structured data (`src/lib/data/jsonld.js`), `/llms.txt` and `/sitemap.xml` are all generated from it, so update facts there.

Flavor photos live in `static/images/` as square WebP files at 480px and 800px (`<slug>-480.webp`, `<slug>-800.webp`). A flavor with `photo: null` shows an illustrated placeholder.

## Routes

| Path           | What it is                                           |
| -------------- | ---------------------------------------------------- |
| `/`            | Home: hero, featured flavors, how to order, pricing  |
| `/flavors`     | Full menu, ordering details, FAQ                     |
| `/llms.txt`    | Plain-text summary for AI assistants (llmstxt.org)   |
| `/sitemap.xml` | Sitemap                                              |
| `/robots.txt`  | Static, in `static/`                                 |

## Development

```sh
npm install
npm run dev
```

## Building

```sh
npm run build
npm run preview
```

Requires Node 22+ (see `.node-version`).
