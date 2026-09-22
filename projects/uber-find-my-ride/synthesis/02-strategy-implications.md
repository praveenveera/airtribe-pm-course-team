# Strategy Implications

**Status:** Draft for review — reconciles desk-research hypotheses against survey evidence
**Snapshot:** 17 September 2026
**Inputs:** [`../research/desk-research-report.md`](../research/desk-research-report.md) §4 (hypotheses) and §6 (claim boundaries); [`01-survey-insights.md`](01-survey-insights.md) (10 insights, 62 unique responses, 28 issue cases)

## 1. Purpose

Assignment Step 3 asks which direction the team should consider — not which feature to build. This document checks the desk-research hypotheses against real survey evidence, then names a direction with a stated reason, and states what to leave alone for now.

## 2. Hypothesis reconciliation

| ID | Hypothesis | Survey evidence | Status |
|---|---|---|---|
| H1 | Hardest gap is indoor-to-outdoor navigation, not the final GPS pin | Insight 3: airport (10 mentions), residential (7), mall (6), office (6) all appear — not concentrated in one indoor-heavy venue type. Insight 4: wrong-pin and similar-gate conditions both appear in current-schema cases. | **Partially supported.** Indoor-to-outdoor is one real pattern (airport, mall), but residential/office/street cases don't fit that frame — the common thread is closer to "no shared reference point," not indoor navigation specifically. |
| H2 | Existing pickup guidance is not noticed or understood at the right time | Insight 9: six issue respondents selected "nothing helped"; R064's "No one to seek redressal or help" suggests guidance, if present, wasn't found or didn't apply. | **Weakly supported.** Survey didn't ask directly whether in-app guidance was seen. Can't confirm noticing vs. absence of guidance from this data. |
| H3 | Precise location is insufficient when drivers cannot legally/physically reach it | Insight 4 (driver circling while app showed "arrived"); desk research §3.5–3.6 (stopping/access rules). whD_stop ("not allowed to stop at pinned spot") is one of the driver-side chip options and was available to select. | **Supported**, but thinly — only 4 driver responses total, so this rests more on desk research (regulatory/physical constraints) than survey volume. |
| H4 | Luggage, age, disability, language, weather, dependants increase burden | R047: rain correlates with more cancellations. No direct evidence on luggage, age, disability, or dependants — the survey never asked about these. | **Untested.** Weather has one supporting data point; the rest of H4 has no survey evidence either way. |
| H5 | Users combine several distinct failures under "driver could not find me" | Insight 8: cancellation overlaps with destination, fare, payment mode, and rain — not just location confusion. Insight 6: recovery effort itself varies (waiting, moving, calling) rather than one dominant fix. | **Supported.** This is the survey's clearest confirmation — "pickup failure" is not one mechanism, it's several that get reported the same way. |
| H6 | Airport and non-airport pickups need different interventions | Insight 3: airport leads mentions (10) but residential/mall/office/station/street collectively outnumber it. Contradiction log explicitly flags this: "the opportunity may be a reusable coordination model with location-specific rules, not an airport-only solution." | **Partially refuted as stated.** Not "airport vs. everything else" — more like a shared coordination need with per-location-type rules layered on top. |

## 3. What the evidence adds beyond the original hypotheses

Two patterns emerged that weren't in the original H1–H6 list:

- **Communication is the default recovery layer, and it works more often than not** (Insight 5: calling/messaging helped in 20 of 28 issue cases) — but it's effortful, and for 6 respondents nothing helped at all (Insight 9). The gap is not "no recovery path exists"; it is manual, unbounded effort without a clear stalled-pickup recovery step.
- **Identification, not just location, can fail** (Insight 10: mismatched vehicle number) — a low-frequency but safety-relevant edge case the original hypotheses didn't cover at all.

## 4. Recommended direction

**Focus further work on: reducing the effort and uncertainty of the manual recovery step (calling, messaging, waiting, moving) at a defined set of complex location types — not on replacing the pickup pin, and not on a single airport-only fix.**

Reasoning, tied to evidence:

1. H5 and Insight 8 show pickup "failure" is multi-causal — a single root-cause fix (e.g. "better GPS") won't address destination/fare/payment-driven cancellations that get coded the same way.
2. H6 being partially refuted means a location-exclusive solution (airport-only) leaves the majority of reported cases (residential, mall, office, station, street — combined mentions exceed airport alone) unaddressed.
3. Insight 5 and 9 together are the strongest, most-repeated pattern in the data: communication is the de facto fallback, it mostly works, and when it doesn't, there's no floor. That is the most evidence-backed place to focus — not because it's the most severe failure mode, but because it's the one the data actually supports at volume.

## 5. What not to pursue yet, and why

| Do not pursue yet | Reason |
|---|---|
| A driver-side product direction | Only 4 driver responses, 1 reporting difficulty — not enough evidence to make driver-specific claims (see synthesis limitations §2). |
| An airport-specific solution | H6 partially refuted; airport is the single largest location by mention count but not a majority, and desk research's own market-sizing section has no reliable Hyderabad airport-specific volume data. |
| Any claim about luggage, age, disability, or accessibility burden (H4) | No survey evidence collected on this beyond one weather data point. Would need to be asked directly in any follow-up. |
| A precise "X% of Hyderabad pickups fail" market-sizing claim | Desk research §5 and §6 already rule this out — no reliable internal trip-volume or issue-rate data exists publicly. Don't let the survey's 40.7% Hyderabad-issue-rate figure get repositioned as a citywide number; it's a convenience-sample statistic (see Insight 1's own caveat). |
| A single-feature commitment (e.g. "add AR navigation") | No insight supports a specific technical mechanism yet. Premature relative to the evidence collected. |

## 6. Open gaps before this direction can harden into product ideas

1. **Driver perspective** — needs targeted recruitment or explicit acknowledgment as an unresolved research gap in the final submission.
2. **What "communication effort" actually costs** — Insight 7's time-loss data exists for only 10 records; a clearer effort/time picture would strengthen the case for intervention.
3. **Location-type-specific rules** (H3, desk research §3.6) — still resting on desk research and a handful of quotes, not field-verified per location.

## 7. Traceability check

Every claim above traces to either a numbered survey insight (`01-survey-insights.md`) or a numbered desk-research section (`desk-research-report.md`). No new market data, quotes, or claims were introduced in this document.
