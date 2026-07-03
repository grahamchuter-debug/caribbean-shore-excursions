# Cross-Site SEO / Trust Migration Checklist

> **About this document.** This is the reference migration guide created after the Caribbean (caribbeanshoreexcursion.com) SEO and trust audit and remediation work. It captures the concrete fixes we implemented — metadata plumbing, structured-data guards, trust/credibility pages, and schedule editorial uniqueness — as a repeatable checklist. It is intended to guide future **Norway, Alaska, Canada/New England, and Mediterranean** refresh work so each destination site can be brought to the same SEO and E-E-A-T standard. Apply it per new destination site.

Each item lists **what to check**, **the fix pattern**, and **how to verify**.

---

## 1. Duplicate title suffix prevention
- [ ] Confirm the brand suffix is appended in **exactly one place**. Standard: keep it in the root `app/layout.tsx` `title.template` (`%s | {SITE.name}`).
- [ ] `buildMetadata` (or equivalent) must return a **bare base title** for the document `title` — NOT pre-suffixed with the brand.
- [ ] Homepage uses `title.absolute` so it isn't double-branded by the template.
- [ ] Compute OG/Twitter title separately as `base + brand` (single brand) — the template does **not** apply to `openGraph.title`.
- [ ] Grep data `seoTitle` fields for a literal `| {brand}` and remove.
- **Verify:** grep exported `out/**/*.html` for the brand string appearing twice in any `<title>` → must be 0.

## 2. FAQPage schema guard
- [ ] Every `faqSchema()` call inside a `JsonLd data={[...]}` array is guarded: `...(faqs?.length ? [faqSchema(faqs)] : [])`.
- [ ] Schema emission condition **matches the visible FAQ render condition** (never emit FAQPage when the FAQ block is hidden).
- **Verify:** grep export for `"mainEntity":[]` → must be 0.

## 3. dateModified only when real
- [ ] Schema builders spread `...(dateModified ? { dateModified } : {})` — never default to `new Date()`.
- [ ] No build-time timestamp stamped as an editorial date.
- [ ] Only pass a real `dateModified` when a page has genuinely been edited.
- **Verify:** grep schema builders for `new Date()` in date fields → none.

## 4. Methodology / Data Sources page
- [ ] Create `/methodology` covering: where schedule data comes from, how it's maintained, review cadence, schedule limitations, how excursions are selected, why itineraries change.
- [ ] **Do NOT name third-party data providers/vendors** in user-facing copy — describe generically ("published cruise line and port schedule data", "publicly available itinerary sources").
- [ ] Link from footer + every schedule page (footer minimum).
- [ ] Add to sitemap.
- **Verify:** page renders; grep user-facing content for any vendor name → none.

## 5. Affiliate disclosure
- [ ] Reusable `AffiliateDisclosure` component (`inline` + `card` variants).
- [ ] Placed on: footer, methodology page, about page, and best-guide/excursion recommendation surfaces.
- [ ] Wording emphasizes recommendations are based on **cruise-passenger suitability** (port logistics, return-to-ship timing, experience quality) **not commission**.

## 6. Honest wording for "verified"
- [ ] Audit user-facing "verified" — replace with **"published" / "listed" / "compiled from published schedules"** where "verified" overstates certainty.
- [ ] Leave internal identifiers, function names, and code comments unchanged (only visible text).
- [ ] Keep "verified" only where it's genuinely accurate in context.
- **Verify:** grep visible copy for "verified"; each remaining use is defensible.

## 7. Schedule editorial uniqueness
- [ ] Per-port-year pages carry destination-specific intro + "Why passengers use this schedule" + "Planning your day" — no copyable-across-ports prose.
- [ ] Reuse real per-port research (terminals, piers, transfer times, signature excursions) — don't invent facts.
- [ ] Year-parameterize copy so 2026 vs 2027 (or season vs season) differ without bloat.
- [ ] Target: majority of schedule pages differentiated, not templated.

## 8. Port-specific FAQs / planning tips
- [ ] No port-year page uses the generic shared FAQ array — each has port-specific FAQs (pier assignment, tender vs dock, signature excursion timing, local logistics).
- [ ] No identical FAQ answers across ports.
- [ ] Planning tips are destination-specific: tender info, taxi guidance, walking distances, local transport, terminal advice, return-to-ship buffer.
- [ ] Keep shared arrays only as fallbacks; keep tips concise (4–6).

## 9. Month schedule page handling
- [ ] Concise month-specific guidance (2–4 sentences): weather, season (peak/shoulder), crowd levels, excursion suitability, local events.
- [ ] Use a **month + region helper** (keyed by month number + region) so it scales without hand-writing hundreds of pages.
- [ ] Vary the CTA (month/volume-aware) and any previously-identical FAQ answers.

## 10. Zero-call schedule page handling
- [ ] Identify port-year pages with zero published calls.
- [ ] Decide per page — **do not auto-noindex**:
  - **Remain indexed + editorial** if high intent and a companion year has data.
  - **Consolidate** if a near-duplicate sibling covers it.
  - **noindex** only if genuinely thin with no intent and no data.
- [ ] Document justification per page before making robots/metadata changes.

## 11. Sitemap / robots / canonical checks
- [ ] Canonicals built from a single `absoluteUrl()` helper matching `trailingSlash` config — canonical == rendered URL.
- [ ] BreadcrumbList `item` URLs use the same absolute-URL helper (match canonicals).
- [ ] Sitemap lists only canonical URLs; **no duplicate route pairs** (e.g. `/{x}-shore-excursions` vs `/cruise-lines/{x}`) — pick one canonical, redirect the other (`public/_redirects` for static export / Cloudflare Pages).
- [ ] No orphan pages (each indexable page has ≥1 internal inbound link).
- [ ] Static-export redirects live in `public/_redirects` (Next.js `redirects()` don't run on static export).

---

## Recommended execution order per new site
1. Metadata plumbing (1, 2, 3, 11) — structural, highest blast radius.
2. Trust pages (4, 5, 6) — quick, high credibility.
3. Editorial depth (7, 8, 9, 10) — largest effort; parallelizable by port group.

## Standard verification pass (run after each phase)
- [ ] `npm run build` passes.
- [ ] Grep export: 0 double-brand titles, 0 empty FAQPage, 0 vendor names in copy.
- [ ] Spot-check 5 rendered titles (home, a port guide, schedule hub, schedule year, one guide).
- [ ] Confirm canonicals/breadcrumbs match on 3 dynamic routes.
