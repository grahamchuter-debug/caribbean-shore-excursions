# Caribbean 2028 validated-source policy (Batch 1 lock-in)

Committed copy of production-relevant Batch 1 artifacts and rules.

## Hierarchy
1. **Tier 1** — official port / harbour / terminal calendars (authoritative; may replace future-itinerary rows)
2. **Tier 2** — official cruise-line confirmed itineraries
3. **CT-validated future itinerary** — publishable only via approved strong-line filter (not described as port-authority confirmed)

## Batch 1 strong-line filter
Auto-publish CT rows for: Royal Caribbean, Celebrity, Carnival, Holland America, Oceania, Regent.
Hold without corroboration: NCL, Virgin Voyages, Silversea, MSC, and other limited-evidence lines.
Princess: only with prior official itinerary corroboration.

## Port hazard rules
Encoded in `scripts/schedule-port-config.mjs` → `PORT_HAZARD_RULES`.
Tortola / Road Town must never automatically absorb Jost Van Dyke or Beef Island.

## Customer wording (2028 CT-derived pages)
> This 2028 cruise schedule is based on currently published cruise itineraries and is updated as schedules change. Always check your cruise line for your final sailing details.

## QA standards
- Exact duplicates = 0 before publish
- Malformed dates = 0; no placeholder / spurious 00:00 times
- Times on CT rows are future-itinerary timings, not guaranteed pier times
- Berth/terminal only when source supports it (do not invent)

## Batch 1 locked counts (2028)
Cozumel 326 · Costa Maya 186 · Puerto Plata 103 · St. Thomas 133 · Roatán 109 · **Total 857**

Artifacts under `publish-batch-1/` include filter-stats, provenance sidecar, regression-50, merge-report.
