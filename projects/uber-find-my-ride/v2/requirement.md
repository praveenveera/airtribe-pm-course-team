# Requirement — v2 (Senior PM Reframe)

**Status:** Draft for review
**Snapshot:** 18 September 2026
**Supersedes (does not delete):** [`../README.md`](../README.md) "Product framing" table, [`../project-understanding.md`](../project-understanding.md)
**Evidence base:** [`../synthesis/01-survey-insights.md`](../synthesis/01-survey-insights.md) (62 unique responses, 28 issue cases), [`../synthesis/02-strategy-implications.md`](../synthesis/02-strategy-implications.md)

## 1. What changes and why

v1 framed this as a rider-experience problem: rider gets confused at pickup, has a bad time, Uber should help. That framing is accurate but incomplete — it treats the driver as a "connected user" rather than a stakeholder with money on the line, and it never asks why Uber, specifically, would fund a fix.

A senior product leader does not fund a fix because riders are mildly annoyed 46% of the time in a convenience sample (Insight 1). They fund it because failed pickups cost the marketplace — on both sides — and someone can show that cost. This project has that evidence for riders and almost none of it for drivers. v2 makes that gap the headline, not a footnote.

## 2. Rewritten problem statement

**v1 (README.md):** "Rider waiting for a booked Uber in a complex pickup environment... struggles to find the driver... reduces pickup reliability."

**v2:** Failed pickup coordination in complex Hyderabad locations creates cost on both sides of the marketplace: riders lose time and, in the worst cases, get no recovery path (Insight 9 — "No one to seek redressal or help," R064); drivers lose paid time circling for a rider they cannot locate (Insight 4 — "almost 10 minutes to locate each other," R067) with no visible compensation mechanism. Uber should intervene because unresolved failures on the driver side plausibly reduce willingness to accept trips into these locations, which is a supply-side cost — not just a satisfaction score. **This is a hypothesis, not a validated claim** — the survey has 4 driver responses and no data on driver behavior change after a bad pickup. That absence is now the single largest open risk to this whole project, not an item in a limitations table.

## 3. Primary and connected user — rebalanced

| Element | v1 framing | v2 framing |
|---|---|---|
| Primary user | Rider | Still rider — the evidence supports this; don't overcorrect |
| Connected user | Driver ("connected user") | Driver — a stakeholder with a cost, not a supporting character. Treat the 4-response driver sample as an unresolved research gap that blocks any two-sided claim, not a light caveat |
| Business reason to act | Implied ("pickup reliability" as a good in itself) | Named: rider dissatisfaction (retention risk) **and** driver dissatisfaction (supply risk in exactly the high-value complex locations this project studies) |

## 4. Outcome metric — made testable

**v1:** "Pickup reliability: completed pickups without avoidable calls, location changes, delay, or cancellation" — self-reported, unmeasurable at scale, and explicitly marked as unvalidated.

**v2:** Same concept, but named as an *instrumentable* metric Uber likely already has, not a permanently unknown one:

> Dwell time between the app showing "driver arrived" and trip start, segmented by pickup geofence.

This is seen in the evidence as the exact failure window (Insight 4, Insight 7) — it does not require new instrumentation, only access to existing timestamps. **Seen in evidence:** riders report the arrived→trip-start gap as the point of failure. **Guess:** that Uber's internal systems already log this cleanly enough to query — reasonable for a rides marketplace, but unconfirmed, and the single most valuable internal-data ask this project could make.

## 5. Scope — kept, with one flag raised

Geography (Hyderabad, India context) and ride category (standard four-wheel only) from [`../scope.md`](../scope.md) are kept as-is — reasonable scope hypotheses for a time-boxed assignment.

**One flag not raised loudly enough in v1:** the sample is a convenience sample from the researcher's personal/professional network (Evidence limitations §1, `01-survey-insights.md`) — skewed toward English-literate, urban, tech-comfortable respondents. Zero Hindi responses despite outreach (closeout addendum). H4 (language, disability, age, dependants as burden multipliers) was marked "untested" and dropped. For a mass-market Indian mobility product, the segment least able to self-recover from a pickup failure — someone who can't read the map pin or the app prompts — is plausibly *outside this sample entirely*. v2 names this as the largest unresolved segment risk, not a line item.

## 6. What this requirement statement does not claim

- Does not claim a Hyderabad-wide prevalence rate (the 40.7% figure is a convenience-sample statistic — see Insight 1's own caveat).
- Does not claim driver-side cost is proven — it is a named, testable hypothesis with no current evidence.
- Does not claim which location type matters most (Insight 3 shows spread, not concentration; airport leads mentions but is not a majority).
