# St. Thomas 2026 recovery (2026-09-17)

## Result
**PARTIAL RESTORE — published Crown Bay Tier 1 only**

| Coverage | Status |
|----------|--------|
| Crown Bay (VIPA Austin “Babe” Monsanto) | **166 calendar-year 2026 calls imported** |
| Havensight (WICO) | **Not recovered** — official schedule not found on VIPORT (WICO publishes separately); CT 429; no workspace backup |
| Full dual-terminal St. Thomas 2026 | Incomplete until WICO calendar imported |

## Sources used
1. Workspace search: schedule-cache only had 2027 CT months; prior CT recovery artifacts empty; CSV sources unusable.
2. CT 2026 URL: HTTP **429** (rate limited).
3. **Virgin Islands Port Authority** — https://www.viport.com/schedule-cruise-ports
   - Crown Bay FY2026 PDF (updated 21 Jul 2026)
   - Crown Bay FY2027 PDF (covers Oct–Dec 2026)
4. VIPORT links labeled under WICO section resolved to **St. Croix Frederiksted (FSTED)** PDFs — correctly excluded (wrong port).

## Publish decisions
- Import Crown Bay rows as `source_quality: official_port` with berth retained.
- Skip CXL cancellations; skip STJ (Cruz Bay / St. John) rows.
- Do **not** invent Havensight calls.
- Customer copy states Crown Bay-only coverage and instructs Havensight passengers to confirm with their cruise line.
- **2028 St. Thomas count unchanged at 133.**

## Artifacts
- `crown-bay-2026-parsed.json`
- `crown-bay-2026-provenance.json`
- Raw VIPORT PDFs under estate `_shared-data/.../st-thomas-2026-retry/`
