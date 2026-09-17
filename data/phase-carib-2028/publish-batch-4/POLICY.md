# Caribbean 2028 Batch 4 policy lock-in

Ports: St. Kitts (Basseterre / Port Zante), Grenada (St. George's), Martinique (Fort-de-France), San Juan, Grand Turk Cruise Center, Belize City (tender), Key West.

## Official re-checks
- **Grand Turk Port / Cruise Center sites**: port schedule UI present; no extractable public 2028 Tier 1 book → CT strong-line filter used.
- **St. Kitts / Grenada / Martinique / San Juan / Belize / Key West**: no usable public 2028 Tier 1 calendars located this batch → CT strong-line filter used.

## St. Kitts 2027 review
Hub holds **28** rows for 2027 while monthly CT cache files show pagination totals far higher (e.g. January 2027 “151” listed) and include Apr/Nov/Dec cache files not reflected as full hub months. Conclusion: **incomplete prior import**, not a genuinely complete published body. Live CT fetch returned **403** this batch; first-page caches are not trustworthy for a full rebuild. **No 2027 rewrite applied** — documented for a future CT-access rebuild. Port Zante vs South Friars Bay hazards encoded.

## Belize tender logic
Belize City rows publish with `berth: "tender / Belize City anchorage"`. Planner uses **tender caution without a fabricated numeric deduction** (`TENDER_CAUTION_ONLY_PORT_SLUGS`). Grand Cayman keeps measured 30+60 minute buffers.

## Key West decision
**Publish.** Strong-line 2028 body = 58 rows, 100% both times, hub schedule support wired. Pier labels not invented (discovery berths empty).

## Strong-line filter
Auto-publish CT rows for: Royal Caribbean, Celebrity, Carnival, Holland America, Oceania, Regent.
Hold without corroboration: NCL, Virgin, MSC, Silversea, Princess, and other limited-evidence lines.

## Customer wording
> This 2028 cruise schedule is based on currently published cruise itineraries and is updated as schedules change. Always check your cruise line for your final sailing details.

## Tortola
Excluded from this batch.
