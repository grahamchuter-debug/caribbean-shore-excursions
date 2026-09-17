# Caribbean 2028 validated-source policy

Committed production-relevant Batch 1–5 rules.

## Hierarchy
1. **Tier 1** — official port / harbour / terminal calendars (authoritative; may replace future-itinerary rows)
2. **Tier 2** — official cruise-line confirmed itineraries
3. **CT-validated future itinerary** — publishable only via approved strong-line filter (not described as port-authority confirmed)

## Strong-line filter
Auto-publish CT rows for: Royal Caribbean, Celebrity, Carnival, Holland America, Oceania, Regent.
Hold without corroboration: NCL, Virgin Voyages, Silversea, MSC, and other limited-evidence lines.
Princess: only with prior official itinerary corroboration / previous validation.

## Port hazard rules
Encoded in `scripts/schedule-port-config.mjs` → `PORT_HAZARD_RULES`.
Includes Tortola vs Jost Van Dyke/Beef Island; Dominica vs Dominican Republic; Freeport vs Nassau; Samaná / La Romana vs other DR ports; Puerto Limón vs Puntarenas; Bonaire vs Aruba/Curaçao; Progreso vs Cozumel/Costa Maya; Bimini vs Nassau/Freeport.

## Customer wording (2028 CT-derived pages)
> This 2028 cruise schedule is based on currently published cruise itineraries and is updated as schedules change. Always check your cruise line for your final sailing details.

## QA standards
- Exact duplicates = 0 before publish
- Malformed dates = 0; no placeholder / spurious 00:00 times
- Times on CT rows are future-itinerary timings, not guaranteed pier times
- Berth/terminal only when source supports it (do not invent)
- Do not publish token schedules merely to say 2028 exists (MIN_PUBLISH ≈ 15)

## Batch 5 remaining-port sweep (2028)
**PUBLISH:** Progreso 48 · Freeport 39 · Bonaire 34 · Dominica 29 · Samaná 25 · Bimini 24 · Puerto Limón 19 · **Total 218**
**HOLD — TOO THIN:** Puerto Quetzal 10 · Puntarenas 3 · La Romana 1
**EXCLUDED:** Tortola (separate special case)

Artifacts under `publish-batch-5/` include filter-stats, provenance sidecar, regression-60, merge-report, audit-classifications.
