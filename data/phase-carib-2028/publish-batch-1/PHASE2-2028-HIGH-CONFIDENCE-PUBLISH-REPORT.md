# CARIBBEAN WORLD 2.0 — Phase 2 Filtered High-Confidence 2028 Publish Report

Date: 2026-09-17  
Batch: Cozumel / Costa Maya / Puerto Plata / St. Thomas / Roatán  
Policy: CruiseTimetables future itinerary via strong-line filter only; official port data remains authoritative

---

## FINAL 2028 COUNTS BY PORT

| Port | Published 2028 rows | Useful months | Deployed |
|------|--------------------:|---------------|----------|
| Cozumel | **326** | Jan–May, Nov–Dec (7) | Yes — cozumelcruiseexcursion.com |
| Costa Maya | **186** | Jan–Apr (4) | Yes — costamayashoreexcursion.com |
| Puerto Plata | **103** | Jan–May, Nov–Dec (7) | Yes — puertoplatacruiseexcursion.com |
| St. Thomas | **133** | Jan–May, Oct–Dec (8) | Yes — hub caribbeanshoreexcursion.com |
| Roatán | **109** | Jan–May, Nov–Dec (7) | Yes — roatanexcursionplanner.com |
| **TOTAL** | **857** | | |

All five ports met the “genuinely useful body of rows” bar and were published.

---

## CRUISE-LINE BREAKDOWN

### Cozumel (326)
- Royal Caribbean 154  
- Carnival Cruise Line 127  
- Celebrity Cruises 31  
- Oceania Cruises 7  
- Regent Seven Seas 5  
- Holland America Line 2  

### Costa Maya (186)
- Royal Caribbean 160  
- Celebrity Cruises 21  
- Oceania Cruises 5  

### Puerto Plata (103)
- Carnival Cruise Line 49  
- Royal Caribbean 21  
- Celebrity Cruises 18  
- Oceania Cruises 6  
- Holland America Line 6  
- Regent Seven Seas 3  

### St. Thomas (133)
- Royal Caribbean 59  
- Carnival Cruise Line 30  
- Celebrity Cruises 22  
- Holland America Line 9  
- Oceania Cruises 8  
- Regent Seven Seas 5  

### Roatán (109)
- Royal Caribbean 55  
- Carnival Cruise Line 38  
- Regent Seven Seas 7  
- Oceania Cruises 6  
- Holland America Line 2  
- Celebrity Cruises 1  

Approved strong lines only (RCI / Celebrity / Carnival / HAL / Oceania / Regent).  
NCL, Virgin, Silversea, MSC, and other limited-evidence lines held without independent corroboration.  
Princess held in this batch (no separate official corroboration pass applied to auto-publish CT Princess rows).

---

## SOURCE / CONFIDENCE BREAKDOWN

| Port | CT-validated future itinerary | Cruise-line confirmed (Tier 2) |
|------|------------------------------:|-------------------------------:|
| Cozumel | 321 | 5 |
| Costa Maya | 182 | 4 |
| Puerto Plata | 103 | 0 |
| St. Thomas | 133 | 0 |
| Roatán | 109 | 0 |

Customer-facing copy does **not** mention tiers, validation %, or CruiseTimetables.  
Internal provenance sidecar retains: `source_quality`, `source_primary` URL, cruise line, `validation_status`, `imported_at` / `verified_at`.

Wording on 2028 pages:

> This 2028 cruise schedule is based on currently published cruise itineraries and is updated as schedules change. Always check your cruise line for your final sailing details.

---

## TIME COMPLETENESS

- All five publish sets: **100%** both arrival and departure populated  
- Times treated as future-itinerary timings (not guaranteed pier times)  
- No malformed / placeholder / spurious `00:00` times in the publish set  

---

## TERMINAL / BERTH COMPLETENESS

- Public schedule row fields: **berth/terminal ≈ 0%** for this CT-derived batch (source rarely supplies pier assignment)  
- Provenance notes:
  - **Puerto Plata:** all 103 published CT rows sourced from the **Amber Cove** CT schedule URL — not silently labelled as generic Puerto Plata/Taino Bay berths. Berth field still null pending official terminal calendars.  
  - **Cozumel / Costa Maya / St. Thomas / Roatán:** port-level CT pages; pier/facility left unset rather than guessed  
- Pipeline: `PORT_HAZARD_RULES` encoded in `caribbean-shore-excursions/scripts/schedule-port-config.mjs` (Tortola/Road Town must never absorb Jost Van Dyke or Beef Island)

---

## EXCLUDED ROWS BY REASON (five-port candidate pools)

**Total excluded: 1,052**

| Reason | Count |
|--------|------:|
| restricted_line:Norwegian Cruise Line | 472 |
| restricted_line:MSC Cruises | 307 |
| restricted_line:Other/Verify | 105 |
| restricted_line:Virgin Voyages | 41 |
| restricted_line:Princess Cruises | 39 |
| restricted_line:Viking Ocean Cruises | 24 |
| restricted_line:TUI Mein Schiff | 23 |
| restricted_line:Disney Cruise Line | 18 |
| restricted_line:AIDA | 10 |
| restricted_line:Azamara | 4 |
| restricted_line:Silversea | 3 |
| restricted_line:Marella Cruises | 3 |
| restricted_line:Costa Cruises | 2 |
| restricted_line:Cunard | 1 |

Per-port excluded: Cozumel 307 · Costa Maya 165 · Puerto Plata 228 · St. Thomas 178 · Roatán 174  

---

## 50-ROW REGRESSION SAMPLE RESULT

- Sample size: **50**  
- Result: **PASS** (`issue_count: 0`)  
- Line mix: RCI 22 · Carnival 14 · Celebrity 8 · Oceania 4 · HAL 2  
- Port mix: Cozumel 20 · Costa Maya 10 · St. Thomas 10 · Puerto Plata 8 · Roatán 2  
- Checks: no restricted-line false positives; correct port/date; sensible times; no terminal misclassification  
- Artifact: `publish-batch-1/regression-50.json`  

---

## ST. THOMAS 2026 STATUS

- **Still missing published 2026 calls** (hub dataset: 2027=506, 2028=133, 2026=0)  
- CT recovery attempt returned empty (`st-thomas-2026-recovered.json` = `[]`; monthly HTML stubs empty / rate-limited)  
- 2026 schedule page remains an editorial planning reference (terminals / Magens / St. John guidance) pointing passengers to 2027+ data  
- **2028 St. Thomas published on hub** with year selector and planner year support  

---

## DUPLICATE FIXES

- Cozumel merge: **3** exact duplicate keys removed during publish merge  
- Post-merge 2028 duplicate-key report: **0** for all five ports  
- Ship/date conflicts resolved in filter/merge; wrong-port and malformed-date counts: **0** in publish set  

---

## BUILD / DEPLOY

| Surface | Build | Deploy |
|---------|-------|--------|
| Cozumel-Cruise-Excursion | OK — 2028 year + 7 months | Workers — cozumelcruiseexcursion.com |
| costamayashoreexcursion | OK — 2028 year + Jan–Apr | Workers — costamayashoreexcursion.com |
| Puerto-Plata-Cruise-Excursions | OK — 2028 year + 7 months | Pages — puertoplatacruiseexcursion.com |
| Roatan-Excursion-Planner | OK — 2028 year + 7 months | Workers — roatanexcursionplanner.com |
| caribbean-shore-excursions (hub) | OK — `/ship-schedules/2028` + five port/2028 SSG routes | Pages — caribbeanshoreexcursion.com |

Planner: `SCHEDULE_YEARS = [2026, 2027, 2028]`; published 2028 rows in hub imported schedules power ship/date lookup (one ship → preselect; multiple → ask; none → manual). Hours ashore use published times without guaranteeing pier timing.

---

## COMMITS / PUSHES

- **No git commits or pushes** in this phase (deploy-only; working trees remain dirty across port repos + hub).  
- Recommend a coordinated commit per repo when ready.

---

## LIVE QA

Performed 2026-09-17 against production custom domains (and Pages fallback where needed).

| Check | Cozumel | Costa Maya | Puerto Plata | Roatán | Hub (STT + 5 ports) |
|-------|---------|------------|--------------|--------|---------------------|
| 2028 selector visible | PASS | PASS | PASS | PASS | PASS |
| Early-season call (Jan) | PASS | PASS | PASS | PASS | PASS |
| Mid / late season | May+Dec PASS | Apr PASS | May+Dec PASS (Regent Dec call) | May+Dec PASS | PASS |
| Ship/date content + times | PASS | PASS | PASS | PASS | PASS |
| Future-itinerary wording | PASS | PASS | PASS | PASS | PASS |
| Restricted-line false positives | None | None | None | None | None |
| Malformed duplicates | None observed | None | None | None | None |
| Planner year 2028 present | — | — | — | — | PASS (Western / Mexican / VI planners) |
| Manual fallback path | Via existing schedule UX | same | same | same | same |

St. Thomas: published on **hub only** (specialist site has no schedule module).

---

## NEXT CARIBBEAN 2028 BATCH

Priority candidates (same strong-line filter + corroboration gates):

1. **Nassau** — highest volume CT discovery; apply Amber Cove-style terminal care (Prince George Wharf)  
2. **St. Maarten / SXM** — strong Eastern Caribbean demand; Wathey terminal only  
3. **Grand Cayman** — tender hazard; do not invent pier; hold ambiguous anchorage labels  
4. **Aruba** — Southern Caribbean; Oranjestad dock  
5. **Optional second wave:** Ocho Rios, St. Kitts, Tortola (**only with PORT_HAZARD_RULES enforced** — never absorb Jost Van Dyke / Beef Island)

Also: retry **St. Thomas 2026** recovery when CT rate limits clear or via alternate official/line sources.

---

## ARTIFACTS

- `filter-stats.json` / `filtered-2028-by-port.json` / `merge-report.json`  
- `provenance-sidecar.json`  
- `regression-50.json`  
- Pipeline hazard rules: `caribbean-shore-excursions/scripts/schedule-port-config.mjs` → `PORT_HAZARD_RULES`

---

CARIBBEAN WORLD 2.0:  
2028 HIGH-CONFIDENCE PUBLISH BATCH COMPLETE —  
COZUMEL / COSTA MAYA / PUERTO PLATA / ST. THOMAS / ROATÁN PUBLISHED WHERE QA PASSED —  
FUTURE-ITINERARY SOURCE POLICY APPLIED —  
RESTRICTED-LINE RISKS FILTERED —  
2028 PLANNERS LIVE —  
OFFICIAL PORT DATA REMAINS AUTHORITATIVE  

STOP.
