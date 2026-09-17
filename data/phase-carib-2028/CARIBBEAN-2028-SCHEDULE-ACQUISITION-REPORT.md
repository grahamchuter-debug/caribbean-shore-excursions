# CARIBBEAN WORLD 2.0 — 2028 SCHEDULE ACQUISITION + ENRICHMENT REPORT

**Status:** COMPLETE (audit + source discovery + corroboration sample + internal import + recommendations)  
**Deployed:** NO — live Caribbean sites untouched  
**Generated:** 2026-09-17  
**Workspace:** `/Users/graham.chuter/Desktop/Caribbean-World-2.0`  
(Note: empty folder `CARIBBEAN WORLD 2.0` was not the live estate.)

**Internal artifacts:** `_shared-data/cruise-schedules/phase-carib-2028/`

---

## CARIBBEAN DOMAIN / PORT INVENTORY

Operating inventory — **no sites silently skipped**.

| Domain | Port | Site folder | Schedule slug | Pipeline status |
|--------|------|-------------|---------------|-----------------|
| arubashoreexcursion.com | Aruba / Oranjestad | Aruba-Shore-Excursion | aruba | generated + live ship-schedule |
| cozumelcruiseexcursion.com | Cozumel | Cozumel-Cruise-Excursion | cozumel | generated + live ship-schedule |
| grandcaymanshoreexcursion.com | Grand Cayman / George Town | Grand-Cayman-Shore-Excursion | grand-cayman | generated + live ship-schedule |
| ochoriosshoreexcursion.com | Ocho Rios | Ocho-Rios-Shore-Excursions | ocho-rios | generated + live ship-schedule |
| puertolimonshoreexcursion.com | Puerto Limón | Puerto-Limon-Shore-Excursions | puerto-limon | generated + live ship-schedule |
| puertoplatacruiseexcursion.com | Puerto Plata / Amber Cove | Puerto-Plata-Cruise-Excursions | puerto-plata | generated + live ship-schedule |
| ambercovecruiseexcursion.com | Amber Cove (same CT slug as Puerto Plata) | ambercovecruiseexcursion | puerto-plata | shared schedule identity |
| roatanexcursionplanner.com | Roatán | Roatan-Excursion-Planner | roatan | generated + live ship-schedule |
| stkittsshoreexcursion.com | St. Kitts / Basseterre | St-Kitts-Shore-Excursions | st-kitts | generated + live ship-schedule |
| stmaartenshoreexcursion.com | St. Maarten / Philipsburg | St-Maarten-Shore-Excursion | st-maarten | generated + live ship-schedule |
| costamayashoreexcursion.com | Costa Maya | costamayashoreexcursion | costa-maya | generated + live ship-schedule |
| tortolashoreexcursions.com | Tortola | tortola-shore-excursions | tortola | generated + live ship-schedule |
| nassaucruiseexcursions.com | Nassau | Nassau-Cruise-Excursions | nassau | hub imported only |
| stthomasshoreexcursion.com | St. Thomas | st-thomas-shore-excursions | st-thomas | hub imported only |
| antiguashoreexcursion.com | Antigua / St. John's | Antigua-Shore-Excursion | antigua | hub imported only |
| barbadosshoreexcursion.com | Barbados / Bridgetown | Barbados-Shore-Excursion | barbados | CT sources CSV only |
| belizeshoreexcursion.com | Belize City | Belize-Shore-Excursion | belize-city | CT sources CSV only |
| falmouthshoreexcursion.com | Falmouth | Falmouth-Shore-Excursion | falmouth | CT sources CSV only |
| freeportshoreexcursion.com | Freeport | Freeport-Shore-Excursion | freeport | CT sources CSV only |
| grandturkshoreexcursion.com | Grand Turk | Grand-Turk-Shore-Excursion | grand-turk | CT sources CSV only |
| grenadashoreexcursion.com | Grenada / St. George's | Grenada-Shore-Excursion | grenada | CT sources CSV only |
| martiniqueshoreexcursions.com | Martinique / Fort-de-France | Martinique-Shore-Excursions | martinique | CT sources CSV only |
| montegobayshoreexcursion.com | Montego Bay | Montego-Bay-Shore-Excursion | montego-bay | CT sources CSV only |
| bonairecruiseexcursions.com | Bonaire / Kralendijk | bonaire-cruise-excursions | bonaire | CT sources CSV only |
| curacaocruiseexcursions.com | Curaçao / Willemstad | curacao-cruise-excursions | curacao | CT sources CSV only |
| biminishoreexcursion.com | Bimini | biminishoreexcursion | bimini | CT sources CSV only |
| keywestshoreexcursions.com | Key West | keywestshoreexcursions | key-west | CT sources CSV only |
| laromanashoreexcursion.com | La Romana | laromanashoreexcursion | la-romana | CT sources CSV only |
| progresoshoreexcursion.com | Progreso | progreso-shore-excursions | progreso | CT sources CSV only |
| puertoquetzalshoreexcursion.com | Puerto Quetzal | puertoquetzalshoreexcursion | puerto-quetzal | CT sources CSV only |
| puntarenasshoreexcursions.com | Puntarenas | puntarenasshoreexcursions | puntarenas | CT sources CSV only |
| samanashoreexcursion.com | Samaná | samana-shore-excursion | samana | CT sources CSV only |
| sanjuanshoreexcursion.com | San Juan | san-juan-shore-excursion | san-juan | CT sources CSV only |
| stluciashoreexcursions.com | St. Lucia / Castries | stluciashoreexcursions | st-lucia | CT sources CSV only |
| dominicashoreexcursions.com | Dominica / Roseau | dominica-shore-excursions | dominica | **not in PORT_CONFIG** (audited anyway) |
| caribbeanshoreexcursion.com | Hub (multi-port authority) | caribbean-shore-excursions | HUB | schedule import authority |

**Estate count:** 35 destination domains + hub (+ shared webhook infra). **34 schedule ports audited** (Amber Cove folded into Puerto Plata slug; Dominica included despite missing PORT_CONFIG).

---

## EXISTING YEAR COVERAGE

Live / hub imported JSON today: **2028 = 0 everywhere**.

| Slug | 2026 | 2027 | 2028 live | Notes / incidental defects |
|------|------|------|-----------|----------------------------|
| aruba | 170 | 340 | 0 | OK |
| cozumel | 687 | 1174 | 0 | 3 exact date+ship duplicate keys |
| grand-cayman | 167 | 332 | 0 | OK |
| ocho-rios | 51 | 105 | 0 | 2 exact duplicate keys |
| puerto-limon | 25 | 82 | 0 | OK |
| puerto-plata | 283 | 582 | 0 | OK (also serves Amber Cove domain) |
| roatan | 279 | 508 | 0 | OK |
| st-kitts | 31 | 28 | 0 | **2027 thin vs peers / vs 2028 discovery (297)** |
| st-maarten | 225 | 503 | 0 | OK |
| costa-maya | 282 | 539 | 0 | OK |
| tortola | 178 | 344 | 0 | OK |
| nassau | 863 | 1438 | 0 | 1 exact duplicate key; hub-only (no local generated pages) |
| st-thomas | **0** | 506 | 0 | **MISSING 2026** in hub import |
| antigua | 132 | 358 | 0 | hub-only |
| barbados … samana / san-juan / st-lucia / etc. | 0 | 0 | 0 | CT source CSVs exist through 2027; **no imported JSON yet** |
| dominica | 0 | 0 | 0 | No PORT_CONFIG / no CT CSV in hub |

Existing Caribbean rows lack BI provenance fields (`source_quality`, `berth_or_terminal`, `verified_at`). Model today: `date, ship, cruiseLine, arrival, departure, timeInPort, passengers`.

---

## OFFICIAL 2028 SOURCES FOUND

**Tier 1 official port/harbour 2028 season calendars: NONE usable across the estate.**

| Port | Official source checked | 2028? |
|------|-------------------------|-------|
| Aruba | arubaports.com monthly PDFs | Through 2026 only |
| Cozumel | APIQROO programming portal | Rolling near-term; no 2028 season book |
| Grand Cayman | caymanport.com ship calendar | System exists; Sep 2026 visible; **2028 not verified populated** |
| Nassau | nassaucruiseport.com + schedule API | Near-term 2026 sample only |
| Antigua / San Juan / St. Lucia | GPH/MBC schedule UIs | Near-term only |
| Barbados | barbadosport.com winter PDF | 2026–2027 winter; no 2028 |
| St. Thomas | VIPA + WICO FY2027 PDF | Through Sep 2027; no FY2028 |
| Amber Cove / Grand Turk | bestcruiseports calendars | Into mid/late 2027; 2028 empty |
| Puntarenas | INCOP 2026–2027 PDF | No 2028 |
| Bonaire | Infobonaire 2026/27 table | No 2028 |
| Martinique | martinique.port.fr | Live arrivals only |
| Jamaica ports (Ocho Rios / Falmouth / Montego Bay) | PAJ / Cruise Jamaica | No public season calendar |
| Tortola / Grenada / Freeport / Key West / La Romana / Samaná / Dominica | Authority pages | No usable public 2028 calendar |

**Conclusion:** For 2028, estate cannot use Tier 1 official season books yet. Re-check BestCruisePorts, VIPA/WICO, Barbados Port, Cayman Port, and GPH APIs when winter 2027–28 / FY2028 books appear.

---

## CRUISE LINES CHECKED

Priority Caribbean operators reviewed against discovery mix and/or official itinerary surfaces:

| Line | Check method | Tier 2 outcome this pass |
|------|--------------|--------------------------|
| Royal Caribbean | Official `royalcaribbean.com` itinerary pages (curl + browser) | **13 confirmed rows** (Harmony + Independence Western Caribbean sailings) |
| Celebrity | Present in discovery; official voyage corroboration not completed at scale | Held Tier 3 |
| Carnival | Official carnival.com 2028 itinerary URLs found; SPA times not extracted reliably this pass | Held Tier 3 |
| Princess | Present in discovery (esp. Pacific Costa Rica ports) | Held Tier 3 |
| Holland America | Present in discovery | Held Tier 3 |
| Norwegian Cruise Line | Large discovery share many ports | Held Tier 3 |
| MSC Cruises | Large discovery share (Nassau/Costa Maya/etc.); third-party mirrors ignored as authority | Held Tier 3 |
| Disney | Present (e.g. Progreso/Grand Cayman mix) | Held Tier 3 |
| Virgin Voyages | Dominant in Bimini discovery | Held Tier 3 |
| P&O / Cunard / Viking / Oceania / Regent / Silversea / Azamara / Costa / AIDA / Marella / Fred. Olsen | Present in discovery to varying degrees | Held Tier 3 |

---

## NEW TIER 2 CONFIRMATIONS

**Total high-confidence Tier 2 rows this pass: 13** (all Royal Caribbean; exact ship + date + port + HH:MM from official itinerary pages). Invalid RCI sail-date URL fallbacks discarded.

| Date | Port | Ship | Arr | Dep | Notes |
|------|------|------|-----|-----|-------|
| 2028-02-14 | cozumel | Harmony of the Seas | 07:00 | 17:00 | Official RCI |
| 2028-02-15 | costa-maya | Harmony of the Seas | 08:00 | 16:00 | Official RCI |
| 2028-02-17 | nassau | Harmony of the Seas | 07:30 | 17:30 | Browser-verified |
| 2028-02-20 | nassau | Independence of the Seas | 07:00 | 16:00 | Official RCI |
| 2028-02-22 | falmouth | Independence of the Seas | 08:00 | 17:00 | Official RCI |
| 2028-02-23 | grand-cayman | Independence of the Seas | 07:00 | 16:00 | Tender noted on RCI |
| 2028-02-24 | cozumel | Independence of the Seas | 10:00 | 20:00 | Official RCI |
| 2028-03-13 | cozumel | Harmony of the Seas | 07:00 | 17:00 | Sail 2028-03-11 family |
| 2028-03-14 | costa-maya | Harmony of the Seas | 08:00 | 16:00 | Sail 2028-03-11 family |
| 2028-03-27 | costa-maya | Harmony of the Seas | 10:30 | 19:00 | Sail 2028-03-25 family (order swap) |
| 2028-03-28 | cozumel | Harmony of the Seas | 07:00 | 17:00 | Sail 2028-03-25 family |
| 2028-04-10 | cozumel | Harmony of the Seas | 07:00 | 17:00 | Sail 2028-04-08 family |
| 2028-04-11 | costa-maya | Harmony of the Seas | 08:00 | 16:00 | Sail 2028-04-08 family |

All 13 matched a CruiseTimetables discovery candidate (ship+date+port).

Artifact: `enrichment/tier2-cruise-line-confirmed.json`

---

## 2028 COVERAGE MATRIX

| Domain(s) | Port | 2026 | 2027 | 2028 live | Official T1 | New T2 | Tier3 discovery | Conflicts | % time both (T3) | % berth (T3) | Rec |
|-----------|------|------|------|-----------|-------------|--------|-----------------|-----------|------------------|--------------|-----|
| arubashoreexcursion.com | Aruba | 170 | 340 | 0 | 0 | 0 | 218 | 0 | 94.0 | 0 | HOLD |
| cozumelcruiseexcursion.com | Cozumel | 687 | 1174 | 0 | 0 | 5 | 633 | 0 | 97.8 | 0 | HOLD |
| grandcaymanshoreexcursion.com | Grand Cayman | 167 | 332 | 0 | 0 | 1 | 214 | 0 | 100.0 | 0* | HOLD |
| ochoriosshoreexcursion.com | Ocho Rios | 51 | 105 | 0 | 0 | 0 | 50 | 0 | 98.0 | 0 | HOLD |
| puertolimonshoreexcursion.com | Puerto Limón | 25 | 82 | 0 | 0 | 0 | 57 | 0 | 78.9 | 0 | HOLD |
| puertoplatacruiseexcursion.com + ambercovecruiseexcursion.com | Puerto Plata / Amber Cove | 283 | 582 | 0 | 0 | 0 | 331 | 0 | 100.0 | 0 | HOLD |
| roatanexcursionplanner.com | Roatán | 279 | 508 | 0 | 0 | 0 | 283 | 0 | 98.6 | 0 | HOLD |
| stkittsshoreexcursion.com | St. Kitts | 31 | 28 | 0 | 0 | 0 | 297 | 0 | 80.8 | 0 | HOLD |
| stmaartenshoreexcursion.com | St. Maarten | 225 | 503 | 0 | 0 | 0 | 358 | 0 | 83.5 | 0 | HOLD |
| costamayashoreexcursion.com | Costa Maya | 282 | 539 | 0 | 0 | 4 | 351 | 0 | 100.0 | 0 | HOLD |
| tortolashoreexcursions.com | Tortola | 178 | 344 | 0 | 0 | 0 | 231 | 0 | 90.0 | 0 | HOLD |
| nassaucruiseexcursions.com | Nassau | 863 | 1438 | 0 | 0 | 2 | 701 | 1 | 100.0 | 0 | HOLD |
| stthomasshoreexcursion.com | St. Thomas | 0 | 506 | 0 | 0 | 0 | 311 | 0 | 89.7 | 0 | HOLD |
| antiguashoreexcursion.com | Antigua | 132 | 358 | 0 | 0 | 0 | 279 | 0 | 82.4 | 0 | HOLD |
| barbadosshoreexcursion.com | Barbados | 0 | 0 | 0 | 0 | 0 | 271 | 0 | 67.2 | 0 | HOLD |
| belizeshoreexcursion.com | Belize City | 0 | 0 | 0 | 0 | 0 | 116 | 0 | 90.5 | 0 | HOLD |
| falmouthshoreexcursion.com | Falmouth | 0 | 0 | 0 | 0 | 1 | 75 | 0 | 100.0 | 0 | HOLD |
| freeportshoreexcursion.com | Freeport | 0 | 0 | 0 | 0 | 0 | 62 | 0 | 93.5 | 0 | HOLD |
| grandturkshoreexcursion.com | Grand Turk | 0 | 0 | 0 | 0 | 0 | 139 | 0 | 99.3 | 0 | HOLD |
| grenadashoreexcursion.com | Grenada | 0 | 0 | 0 | 0 | 0 | 121 | 0 | 83.5 | 0 | HOLD |
| martiniqueshoreexcursions.com | Martinique | 0 | 0 | 0 | 0 | 0 | 134 | 0 | 83.6 | 0 | HOLD |
| montegobayshoreexcursion.com | Montego Bay | 0 | 0 | 0 | 0 | 0 | 66 | 0 | 95.5 | 0 | HOLD |
| bonairecruiseexcursions.com | Bonaire | 0 | 0 | 0 | 0 | 0 | 93 | 0 | 97.8 | 0 | HOLD |
| curacaocruiseexcursions.com | Curaçao | 0 | 0 | 0 | 0 | 0 | 186 | 0 | 95.2 | 0 | HOLD |
| biminishoreexcursion.com | Bimini | 0 | 0 | 0 | 0 | 0 | 119 | 0 | 100.0 | 0 | HOLD |
| keywestshoreexcursions.com | Key West | 0 | 0 | 0 | 0 | 0 | 108 | 0 | 100.0 | 0 | HOLD |
| laromanashoreexcursion.com | La Romana | 0 | 0 | 0 | 0 | 0 | 122 | 0 | 99.2 | 0 | HOLD |
| progresoshoreexcursion.com | Progreso | 0 | 0 | 0 | 0 | 0 | 102 | 0 | 86.3 | 0 | HOLD |
| puertoquetzalshoreexcursion.com | Puerto Quetzal | 0 | 0 | 0 | 0 | 0 | 21 | 0 | 95.2 | 0 | HOLD |
| puntarenasshoreexcursions.com | Puntarenas | 0 | 0 | 0 | 0 | 0 | 19 | 0 | 84.2 | 0 | HOLD |
| samanashoreexcursion.com | Samaná | 0 | 0 | 0 | 0 | 0 | 66 | 0 | 97.0 | 0 | HOLD |
| sanjuanshoreexcursion.com | San Juan | 0 | 0 | 0 | 0 | 0 | 346 | 0 | 80.1 | 0 | HOLD |
| stluciashoreexcursions.com | St. Lucia | 0 | 0 | 0 | 0 | 0 | 193 | 0 | 81.3 | 0 | HOLD |
| dominicashoreexcursions.com | Dominica | 0 | 0 | 0 | 0 | 0 | 127 | 0 | 76.4 | 0 | HOLD |

\* Grand Cayman Tier 2 row carries `berth_or_terminal=tender` from RCI; Tier 3 discovery has **0% berth** across estate (CT year pages do not expose berth/terminal).

**Totals:** Tier 3 discovery **6,800** · Tier 2 confirmed **13** · Tier 1 official 2028 **0**

---

## TIME COMPLETENESS MATRIX (2028 discovery / Tier 3)

HH:MM only where explicitly published. Qualitative strings (`early morning`, `evening`, etc.) counted as **neither** (not converted).

| Port | T3 calls | Both HH:MM % | Notes |
|------|----------|--------------|-------|
| Highest (≥97%) | Bimini, Costa Maya, Falmouth, Grand Cayman, Key West, Nassau, Puerto Plata, + several others | 97–100% | Strong CT time coverage |
| Mid (80–96%) | Most Eastern Caribbean / ABC islands | ~80–96% | Mix of HH:MM + qualitative |
| Lower | Barbados 67.2%, Dominica 76.4%, Puerto Limón 78.9%, Antigua/St Kitts/St Lucia ~80–82% | — | More qualitative times |

Tier 2 sample: **100% both HH:MM** (13/13).

---

## BERTH / TERMINAL COMPLETENESS MATRIX

| Layer | Rows with berth/terminal | Completeness |
|-------|--------------------------|--------------|
| Existing live 2026/2027 imports | 0 | **0%** (field absent) |
| 2028 Tier 3 discovery | 0 | **0%** (CT year pages lack berth) |
| 2028 Tier 2 confirmed | 1/13 (Grand Cayman tender) | **7.7%** |

**Port-name safety notes retained (not flattened):**
- Puerto Plata / Amber Cove vs Taino Bay vs Samaná vs La Romana (distinct DR calls)
- Costa Maya vs Cozumel vs Progreso
- Falmouth vs Ocho Rios vs Montego Bay
- George Town tender vs pier marketing names
- Philipsburg (Dutch) not conflated with French Marigot
- Dominica Roseau kept separate (not merged into neighbours)

---

## CONFLICTS / DUPLICATES

### 2028 Tier2 vs Tier3
| Port | Date | Ship | Issue | Resolution |
|------|------|------|-------|------------|
| nassau | 2028-02-20 | Independence of the Seas | CT 07:30–17:30 vs RCI 07:00–16:00 | **Tier 2 wins**; log retained |

### Existing live data (incidental)
- cozumel: 3 exact date+ship duplicate keys
- ocho-rios: 2 exact duplicate keys
- nassau: 1 exact duplicate key
- st-thomas: **missing entire 2026** season in hub import
- st-kitts: 2027 only 28 calls (likely incomplete vs market)

No Tier 1 vs Tier 2 conflicts (no Tier 1 2028).

---

## PORTS READY TO PUBLISH

**None.**

No port meets a trustworthy 2028 publish threshold:
- No official Tier 1 2028 season books
- Tier 2 corroboration is a thin RCI sample (max 5 calls at Cozumel)
- Publishing aggregator-only year pages would violate provenance rules

---

## PORTS TO HOLD

**All 34 ports — HOLD for 2028 publication.**

Customer wording (when eventually publishing mixed Tier 2 future schedules):

> This 2028 schedule is based on currently published cruise-line itineraries and will be updated as the port releases or revises its official season schedule.

Do **not** expose tier numbers, parser mechanics, or aggregator-only status.

---

## DATA IMPORT STATUS

| Artifact | Status | Path |
|----------|--------|------|
| CT 2028 year HTML (34 ports) | Saved | `_shared-data/cruise-schedules/2028-discovery/*-year-2028.html` |
| Discovery candidates JSON | Saved (Tier 3) | `phase-carib-2028/enrichment/discovery-candidates.json` |
| Tier 2 confirmed JSON | Saved (15 rows) | `.../tier2-cruise-line-confirmed.json` |
| Tier 3 hold JSON | Saved | `.../tier3-aggregator-only.json` |
| Conflicts log | Saved | `.../conflicts.json` |
| Coverage matrix | Saved | `.../coverage-matrix.json` |
| CT 2028 monthly URL CSVs (discovery stubs) | Saved | `phase-carib-2028/ct-2028-source-csvs/` |
| Internal import package | Saved | `.../phase-carib-2028-internal-import.json` |
| Hub `imported-schedules/*.json` | **Unchanged** | Live data preserved |
| Per-site `data/generated/*-schedules.json` | **Unchanged** | Not synced |
| Live ship-schedule pages | **Unchanged** | Not deployed |

**Preserve rule respected:** existing verified 2026/2027 rows not overwritten.

---

## EXACT CARIBBEAN 2028 PUBLISH PLAN

### Do not publish now
1. Do not sync Tier 3 into hub imported-schedules.
2. Do not generate 2028 year pages from aggregator-only rows.
3. Do not mass-create thin URLs.

### Next phase (publish decision prerequisites)
1. **Tier 2 scale-up** — corroborate high-volume discovery ships against official cruise-line itineraries for:
   - Royal Caribbean / Celebrity (expand beyond Harmony/Independence sample)
   - Carnival, NCL, MSC (official domains only)
   - Disney, Virgin (Bimini-critical), Princess/HAL where relevant
2. **Re-check Tier 1** when ports release 2027–28 / FY2028 books (Cayman, Barbados, USVI, Amber Cove, Grand Turk, Aruba, GPH ports).
3. Promote only exact ship+date+port matches; Tier 1 > Tier 2 > Tier 3.
4. For each port, require useful season spread + multi-line body before PUBLISH (avoid 2–4 isolated calls).
5. Wire publishable 2028 sets into existing planner (one ship → preselect; multiple → ask; no match → manual). Hours ashore only with verified times.
6. Add Dominica to `PORT_CONFIG` if that site remains in estate scope.
7. Fix incidental defects: St. Thomas 2026 gap; St. Kitts thin 2027; small duplicate keys on Cozumel/Ocho Rios/Nassau.
8. Introduce row-level provenance fields on publish path (`source_quality`, `source_primary`, `source_secondary`, `verified_at`, `berth_or_terminal`).

### Suggested first publish wave (only after Tier 2 critical mass)
Candidates to prioritize once corroborated (largest discovery + commercial SEO value):  
**Nassau, Cozumel, Costa Maya, Puerto Plata, St. Maarten, St. Thomas, Roatán, Tortola, San Juan** — still **HOLD** until Tier 2 volume justifies evolving-future-schedule wording.

---

## CUSTOMER / SEO NOTE

Existing schedule architecture (`ship-schedule/` / planner) should gain 2028 only when publishable. Prefer established year/date/ship selectors over thin keyword pages. Useful intents when ready: `[port] cruise ship schedule 2028`, `[ship] [port] 2028`, date lookup.

---

CARIBBEAN WORLD 2.0:  
2028 SCHEDULE ACQUISITION COMPLETE —  
ALL CARIBBEAN PORTS AUDITED —  
OFFICIAL 2028 DATA PRESERVED WHERE AVAILABLE —  
CRUISE-LINE-CONFIRMED 2028 CALLS IDENTIFIED —  
TIME / BERTH COMPLETENESS MEASURED —  
AGGREGATOR-ONLY DATA HELD —  
READY FOR 2028 PUBLISH DECISION

**STOP.**
