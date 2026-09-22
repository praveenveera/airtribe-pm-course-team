# Approach — v2 (Senior PM Reframe)

**Status:** Draft for review
**Snapshot:** 18 September 2026
**Supersedes (does not delete):** [`../scope.md`](../scope.md), [`../NEXT_PHASE_PLAN.md`](../NEXT_PHASE_PLAN.md)
**Depends on:** [`requirement.md`](requirement.md)

## 1. What to keep from v1

This is not a rebuild — the research sequence in v1 is sound and should not be redone:

- Desk research → primary survey → competitor comparison → journey-stage teardown, in that order.
- Hypothesis reconciliation against evidence ([`../synthesis/02-strategy-implications.md`](../synthesis/02-strategy-implications.md) §2) instead of asserting a direction from research alone.
- Mapping each candidate idea to a specific journey stage ([`../research/product-teardown.md`](../research/product-teardown.md)) instead of a vague insight.
- Refusing to convert the convenience-sample percentages into a market-size claim.

A senior reviewer would approve this sequence. What needs to change is what the sequence is *for* and how much of it survives into the front-facing narrative.

## 2. What changes

### 2.1 Ask for the internal number before treating it as unavailable

v1 treats "no Uber trip data available" as a closed door (`scope.md` §Remaining Phase 0 decisions). A senior PM does not accept "no data" as permanent — they name the exact query that would resolve it and ask for it:

> Arrived→trip-start dwell time, by pickup geofence, last 90 days, Hyderabad.

If this number exists and is large at the location types Insight 3 already flags (airport, residential, mall, office), it validates the whole direction in a day, without more surveys. If it doesn't exist or can't be produced, that itself is a finding worth stating plainly — "Uber cannot currently see its own pickup-failure rate" is a real product problem statement, not a research failure. **Action for this assignment:** state this as the single highest-value next step in the submission's limitations section, worded as a specific, answerable ask — not "internal data may help" but "run this query."

### 2.2 Recruit for the gap, not more of what's already covered

51 recent rider responses is enough directional evidence for Insights 1–8. **Recruiting more riders past this point has low marginal value.** The approach should redirect remaining recruitment effort entirely at:

1. **Drivers** serving the flagged complex location types (target: at minimum matching the original 4-driver proposal in `PROJECT_STATUS.md`, ideally more — this is the thinnest evidence in the entire project and the one a business case depends on).
2. **Respondents outside the convenience-sample skew** — non-English-primary, less tech-comfortable, older, or traveling with dependants/luggage — even two or three such responses would move H4 from "untested" to "initial signal," which is a meaningfully different claim to make in the final deck.

### 2.3 Downgrade confidence on anything resting on desk-only substitution

`location-validation-desk-only.md` swapped live field verification at RGIA, Secunderabad, and Raidurg for a desk-only pass. That's a defensible time-boxed call, but it has one specific consequence the v1 docs don't call out clearly enough: **Idea 3 (venue-specific coordination notes) depends entirely on venue rules being current.** The desk-only check already found one rule that changed with redevelopment (Secunderabad's 15-minute access window). v2's approach: state explicitly that any venue-specific idea ships with an "unverified, confirm before scaling" flag, not silently inherit the same confidence level as ideas that don't depend on physical-site facts.

### 2.4 Compress the research narrative for the actual deliverable

v1 produced six reconciled hypotheses, a contradiction log, and multiple synthesis documents — the right amount of *backing* rigor for a 5-minute video and a PDF that leads with three product ideas is far less. v2's approach: keep every existing research file as the appendix/evidence trail (do not delete or shorten the underlying work), but the front-facing PDF narrative compresses to:

1. One paragraph: what we looked at and how (desk research + 62-response survey + competitor teardown).
2. One paragraph: the two things that turned out to be true (Insight 5 + 9 — communication is the default recovery layer and it has no floor when it fails) and the one thing that turned out false (H6 — this is not an airport-only problem).
3. One flagged gap, stated as a limitation with a specific next step, not a vague caveat: driver-side evidence and the internal-data ask from §2.1.

### 2.5 Sequence, don't parallelize, the next three actions

| Priority | Action | Why this order |
|---|---|---|
| P0 | Ask for the arrived→trip-start dwell-time query (§2.1) | Cheapest possible action, highest possible validation value, can run in parallel with everything else |
| P0 | Recruit driver responses (§2.2) | Blocks any two-sided claim; currently the weakest evidence in the project |
| P1 | Native-speaker review of Telugu/Hindi survey translations (already flagged in `PROJECT_STATUS.md`) | Distribution gap, not urgent for this submission but needed before scaling the instrument |
| P1 | Targeted recruitment outside the tech-comfortable skew (§2.2) | Improves confidence on H4, not required to ship the current three ideas |
| Not this cycle | Live field verification at RGIA/Secunderabad/Raidurg | Only matters if Idea 3 (venue notes) moves from pilot to scale — defer until then |

## 3. What this approach does not do

- It does not re-run the desk research or the survey. That work stands.
- It does not add new research tracks (e.g., a full driver-economics study) inside this assignment cycle — it names the gap and proposes the smallest next step, consistent with the evidence-boundary discipline already established in this project.
