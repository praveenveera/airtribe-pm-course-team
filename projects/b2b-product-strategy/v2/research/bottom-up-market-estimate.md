# Bottom-up market estimate (new analysis, v2)

**What this is:** a first-pass, order-of-magnitude estimate of the reachable pain pool for the cross-system context/handoff wedge, built entirely from evidence already logged in `research/source-inventory.csv` and `research/review-evidence.csv`. No new data was collected for this.

**What this is not:** a validated revenue forecast, a TAM/SAM/SOM figure ready for a board deck, or a substitute for the pilot-stage inputs `research/secondary-research-report.md` already said were missing (target company counts, ACV, adoption rate). Two of the four inputs below are sourced; two are labeled assumptions. Treat the output as a range to stress-test, not a number to plan a budget around.

## Why this instead of the top-down TAM

v1 correctly declined to collapse the contact-center ($47.7–63.9B, S33/S34) and help-desk ($14.3B, S35) category estimates into one TAM — those numbers describe a broad category, not our specific wedge, and combining them would overstate confidence. That's still true and this estimate doesn't revisit it.

Separately, one already-logged source estimates the *cost of the problem itself* inside the segment we're targeting: Freshworks' "The Mid-Market's $16 Billion Drain" (S09), a vendor-sponsored survey of 12,000+ IT decision-makers across six countries. That's a more relevant starting anchor for a workflow-specific wedge than a category-revenue figure, because it's already scoped to mid-market complexity rather than all support software spend everywhere.

## The chain

| Step | Figure | Source | Status |
|---|---:|---|---|
| 1. Mid-market complexity cost pool | $16B / year | Freshworks, S09 — 12,000+ IT decision-makers, 6 countries | **Sourced** (vendor-sponsored, medium confidence, disclosed bias) |
| 2. Share attributable to integration/cross-system friction specifically | 27% | Same survey, E10 — "27% cited system integration as a top barrier to scaling AI" | **Sourced**, used as a proxy — the survey measured "top barrier to scaling AI" broadly, not "cost caused by integration" narrowly, so this is a reasonable but imperfect stand-in |
| 3. → Integration-attributable slice | ≈ $4.3B / year | Step 1 × Step 2 | Calculated |
| 4. Share of that slice inside our specific vertical (B2B SaaS / tech-enabled services, not all industries the survey covered) | 10–20% | Not in the source register | **Assumption** — stated as a range because no logged source splits the $16B or the 27% by industry vertical |
| 5. → Illustrative reachable pain pool | **≈ $430M–$860M / year** | Step 3 × Step 4 | Calculated, wide range on purpose |

## Two things this number cannot yet do

1. **It's a cost pool, not a budget.** $16B of "complexity drain" does not mean $16B (or $430–860M) is sitting in a purchase order waiting to be won. Companies absorb this cost today as manual labor, delay, and rework rather than as a line item they're actively trying to eliminate — the 36%-still-in-pilot figure from the same survey (E10) suggests most of this pool hasn't converted intent into deployed spend yet. Willingness to pay for *our specific* product remains untested, exactly as v1 already disclosed.
2. **The vertical-share assumption (step 4) is the weakest link.** A 2x range (10–20%) was chosen to avoid false precision, not because it's grounded in a specific data point. Replacing it with a real number — e.g. from a firmographic database segmenting B2B SaaS/tech-enabled-services companies by employee band and helpdesk+CRM stack — is the single highest-value next research step, and exactly the kind of input `secondary-research-report.md` already flagged as missing.

## How to use this

Treat $430–860M/year as a sanity-check ceiling for a 2–3 year land-and-expand plan in this segment, not as a target. If the actual serviceable-obtainable number (once real company counts and pilot conversion data exist) comes in far below this range, that's a signal to narrow the wedge further or reconsider the segment — not a reason to inflate the model to match a growth story.
