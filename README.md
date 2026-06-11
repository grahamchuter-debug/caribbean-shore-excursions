# Caribbean Shore Excursions

Authority hub website for [caribbeanshoreexcursion.com](https://caribbeanshoreexcursion.com) — helping cruise passengers plan Caribbean itineraries, compare ports, and choose shore excursions.

## Tech Stack

- **Next.js 15** (App Router, static export)
- **TypeScript**
- **Tailwind CSS**

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) during local development.

## Production Build

```bash
npm run build
```

Static files are exported to the `out/` directory.

## Cloudflare Pages Deployment

This is a **Next.js static export**. Cloudflare must run the build — the repository does not contain pre-built HTML.

### Git-connected deployment (recommended)

In **Cloudflare Dashboard → Workers & Pages → your project → Settings → Builds → Edit configuration**:

| Setting | Value |
|---------|-------|
| Framework preset | **Next.js (Static HTML Export)** |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node.js version | `20` |

Then click **Save** and **Retry deployment**.

**Important:** `wrangler.toml` sets the output directory (`out`) but does **not** run the build. If your build log shows:

```
No build command specified. Skipping build step.
Error: Output directory "out" not found.
```

you must add `npm run build` as the build command in the Cloudflare dashboard. Leaving it blank will always fail.

Alternative build command: `bash build.sh`

### Direct Upload (alternative)

1. Run `npm run build` locally.
2. Upload the **contents** of the `out/` folder via Direct Upload.
3. Set custom domain to `caribbeanshoreexcursion.com`.

Static export uses `trailingSlash: true` so each route is emitted as a directory with `index.html` (for example `out/ports/st-thomas/index.html`). This matches Cloudflare Pages directory serving and avoids redirect loops from `_redirects` rules that rewrite to `.html` files while Pretty URLs is enabled.

Do **not** add `public/_redirects` rules that map extensionless URLs to `.html` paths — that conflicts with Cloudflare Pretty URLs and causes infinite 308 redirects on every page except `/`.

## Site Structure

| Route | Description |
|-------|-------------|
| `/` | Homepage with all key sections |
| `/ports` | Caribbean port listing |
| `/ports/[slug]` | Individual port guides (12 ports) |
| `/cruise-planner` | Step-by-step planning guide |
| `/ship-schedules` | Ship schedule hub |
| `/ship-schedules/[slug]` | Port-specific schedules (CSV-ready) |
| `/cruise-lines` | Cruise line listing |
| `/cruise-lines/[slug]` | Individual cruise line guides (6 lines) |
| `/excursion-types` | Excursion category listing |
| `/excursion-types/[slug]` | Individual excursion type guides (6 types) |
| `/compare/[slug]` | Port comparison pages (5 comparisons) |
| `/about` | About page |
| `/contact` | Contact page |

## SEO

- Unique metadata per page
- Open Graph and Twitter cards
- JSON-LD: BreadcrumbList, FAQPage, TravelGuide, Organization, WebSite
- Auto-generated `sitemap.xml` and `robots.txt`

## Data Layer

Content lives in `data/` as TypeScript modules — designed for easy expansion to 100+ pages. Ship schedules are maintained in `data/schedules.ts`.

## Deployment

Configure your host to serve the `out/` directory. Set the production domain to `caribbeanshoreexcursion.com`.
