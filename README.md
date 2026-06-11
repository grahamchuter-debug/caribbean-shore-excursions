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

This site is a pre-built static export. Deploy using **Direct Upload** or connect your repository with these settings:

| Setting | Value |
|---------|-------|
| Framework preset | None |
| Build command | *(leave blank)* |
| Build output directory | *(leave blank — upload `out/` contents)* |

**Steps:**

1. Run `npm run build` locally to generate the `out/` folder.
2. In Cloudflare Pages, create a project and choose **Direct Upload**.
3. Upload the contents of the `out/` directory (not the folder itself).
4. Set custom domain to `caribbeanshoreexcursion.com`.

The `public/_redirects` file is copied into `out/` during build to support clean URLs on Cloudflare Pages.

## Site Structure

| Route | Description |
|-------|-------------|
| `/` | Homepage with all key sections |
| `/ports` | Caribbean port listing |
| `/ports/[slug]` | Individual port guides (10 ports) |
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
