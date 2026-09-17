# Batch 1 Git lock-in + St. Thomas 2026 retry (2026-09-17)

## Dirty-tree root cause
Production Batch 1 was wrangler-deployed from uncommitted working trees (generated JSON, 2028 HTML, sync/year scripts, hub imported schedules, wording, hazard rules). Estate `_shared-data/` is not a git repo, so phase artifacts were only on disk until copied into the hub.

## Repos committed + pushed (main)
| Repo | Commit(s) | Notes |
|------|-----------|-------|
| caribbean-shore-excursions | `6108c45` Batch 1 lock; `468b3cf` STT 2026 Crown Bay | Policy + artifacts under `data/phase-carib-2028/` |
| Cozumel-Cruise-Excursion | `d6b5581` | 326 × 2028 |
| costamayashoreexcursion | `643951a` (+ prior ahead `c49bcb5`) | 186 × 2028 |
| Puerto-Plata-Cruise-Excursions | `82385a7` | 103 × 2028 |
| Roatan-Excursion-Planner | `f39d06f` (+ prior ahead `3447c29`) | 109 × 2028 |

## Live = git
Local 2028 fingerprints preserved: 326 / 186 / 103 / 133 / 109 = **857**.  
Live spot checks: Costa Maya page shows 186; Cozumel Jan 2028 81 local = 81 live rows; hub STT 2028 unchanged; hub STT 2026 live with Crown Bay wording.

## Shared policy
Committed in hub: `data/phase-carib-2028/POLICY.md`, publish-batch-1 artifacts, `scripts/schedule-port-config.mjs` (`PORT_HAZARD_RULES`).  
Estate `_shared-data/` remains non-git mirror.

## St. Thomas 2026
Partial: **166** official VIPA Crown Bay calls published. Havensight/WICO gap documented. CT still 429.
