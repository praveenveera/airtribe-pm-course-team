# Solution — v2 (Senior PM Reframe)

**Status:** Draft for review
**Snapshot:** 18 September 2026
**Supersedes (does not delete):** [`../synthesis/02-strategy-implications.md`](../synthesis/02-strategy-implications.md), [`../synthesis/04-product-ideas.md`](../synthesis/04-product-ideas.md)
**Depends on:** [`requirement.md`](requirement.md), [`approach.md`](approach.md)
**Assignment constraint kept as-is:** the final submission still needs exactly three research-led product ideas ([`../submission-requirements.md`](../submission-requirements.md)) — v2 does not change the deliverable shape, only what fills it

## 1. The core problem with v1's three ideas

Idea 1 (per-trip pre-arrival note) and Idea 3 (reusable venue-specific note) in `04-product-ideas.md` are not two ideas. Idea 3 is Idea 1 with the note pre-filled and persistent instead of typed fresh each time. Presenting them as two of "three ideas of equal weight" does two things a senior reviewer would flag:

1. It hides that this is one feature with a natural MVP → V2 sequence, which is a stronger, clearer pitch than three parallel bets.
2. It uses up a slot in the mandatory "top 3" that could instead go to the thing this project is actually missing: driver-side evidence.

v2 restructures the three ideas as: **one phased bet (Ideas 1+3 merged), one separate bet (the old Idea 2, unchanged in substance but re-scoped), and one evidence-led idea that names the driver gap directly** rather than burying it in a limitations table.

## 2. Recommended direction (unchanged from v1, restated)

Focus on reducing the effort and uncertainty of the manual recovery step (calling, messaging, waiting, moving) at a defined set of complex location types — not replacing the pickup pin, not an airport-only fix. This still traces to Insight 5 (communication is the default recovery layer, works in 20 of 28 issue cases) and Insight 9 (6 of 28 found nothing helped). Nothing in v2 changes this conclusion — it changes how the three ideas built on top of it are packaged and prioritized.

## 3. Idea 1 (v2) — Pickup coordination notes, phased

| | |
|---|---|
| **User** | Riders and drivers at a defined list of complex location types, not every ride |
| **Phase 1 (P0) — per-trip note** | Before estimated arrival, prompt both sides to exchange one structured note (landmark, gate/side, waiting spot) — formalizes what R061 already does manually and unprompted ("I always place a message on where I would stand with details") |
| **Phase 2 (P1) — venue-persistent note** | Once a venue accumulates repeat per-trip notes (Insight 2: 23 of 28 issue cases said the problem had happened before), promote it to a standing venue note that every future rider/driver pulls from, instead of every pair rediscovering the same friction — start with whichever venues *usage data* surfaces, not a pre-guessed shortlist |
| **Why phased, not parallel** | Phase 1 needs no venue-rules research and ships fast. Phase 2 depends on venue rules staying current — the desk-only validation pass already found one Hyderabad venue (Secunderabad Station) where the access rule changed with redevelopment. Sequencing lets usage evidence pick which venues are worth that maintenance cost, instead of guessing 2-3 venues up front. |
| **Competitive framing — the single strongest piece of evidence in this project** | Lyft already ships this as "Pickup Notes" ([`../research/product-teardown.md`](../research/product-teardown.md) §Part 2). This is not a novel bet — it's closing a proven, shipped competitor gap. Lead with this in the pitch; it is far easier to sell internally than an unproven idea. |
| **Risk** | Shown on every ride regardless of location, it adds friction where none existed (Insight 1: only 24 of 52 recent users report any issue at all) — must stay scoped to flagged location types |
| **Test** | Phase 1: A/B on flagged-location bookings, measure call/message rate and self-reported wait time vs. control. Phase 2: only promote a venue to persistent-note status once its per-trip note volume crosses a set threshold — let the data pick the venue list. |

## 4. Idea 2 (v2) — A guaranteed floor when coordination stalls

Kept as its own bet, not merged with Idea 1 — it solves a different failure mode (recovery after communication has already failed, not better initial communication) and it is the one idea in this set with a real, unmodeled cost.

| | |
|---|---|
| **User** | Riders left with no recourse when recovery fails — Insight 9's "nothing helped" respondents, R064 specifically ("No one to seek redressal or help... Grievance redressal has to be immediate") |
| **Moment** | Trip stalls in "arrived" state past a defined threshold at a flagged location |
| **Action** | Surface an explicit next step — guided live-location-share-and-call, or an active reassignment offer — instead of leaving both parties to self-resolve indefinitely |
| **What v1 did not model, and v2 flags explicitly** | Reassignment implies someone eats the cost of the stood-up driver's wasted time. This idea is not buildable as a UX flow alone — it needs a marketplace-economics answer (compensation or priority-matching for the displaced driver) before it can be scoped for real. State this as a stated dependency in the pitch, not an implementation detail to solve later. |
| **Risk** | Insight 8 shows cancellation is multi-causal (destination, fare, payment, not just location) — this must trigger only on genuine coordination stalls or it becomes a general complaint channel |
| **Test** | Instrument stalled "arrived" states at flagged locations; offer the guided escalation to a sample; measure resolution rate and unresolved-cancellation rate vs. control |

## 5. Idea 3 (v2, replaces old Idea 3) — Close the driver-evidence gap

Old Idea 3 (venue-specific notes) is now Phase 2 of Idea 1 (§3). This frees the third slot for something the project currently has almost nothing on, and which [`requirement.md`](requirement.md) names as the largest open risk to the whole recommendation.

| | |
|---|---|
| **User** | Drivers serving the same complex location types already flagged for riders |
| **Problem** | 4 of 62 survey responses are from drivers; only one reported difficulty. Every claim about driver cost in this project — wasted time, reduced willingness to accept trips into hard locations, effect on driver retention — is currently a named hypothesis with zero supporting evidence (see [`requirement.md`](requirement.md) §2). A senior reviewer would not let a two-sided marketplace recommendation ship without at least attempting to close this. |
| **Action, as a research-led product idea rather than a shipped feature** | Run a targeted driver research pass (interviews plus, if available, the internal dwell-time query from [`approach.md`](approach.md) §2.1) specifically on: what happens after a driver cannot locate a rider — do they wait, leave, rate down, or become less willing to accept trips to that location type again. This is the input the other two ideas' business case is missing. |
| **Why this belongs in the "top 3," not a footnote** | Naming the biggest gap as one of the three deliverables is more credible to a senior reviewer than silently presenting two rider-side UX ideas as a complete two-sided answer. It also directly sets up whatever comes after this assignment. |
| **Test / definition of done** | At minimum, match the original 10-driver interview target from `PROJECT_STATUS.md`'s recommended mix; report driver-reported frequency of "couldn't find rider" and self-described behavior change afterward |

## 6. What this set still deliberately leaves out (unchanged from v1)

- An airport-only solution — H6 partially refuted; airport leads mentions but residential/mall/office/station/street collectively outnumber it (Insight 3).
- Any accessibility, language, age, or dependant-burden claim (H4) — untested, and now named in `requirement.md` as the largest unresolved segment risk rather than dropped.
- A single-technology commitment (AR, new hardware) — no evidence supports a specific mechanism.
- A precise ROI or Hyderabad-wide market-size claim — no reliable trip-volume data exists publicly; the 40.7% figure is a convenience-sample statistic, not a citywide rate.

## 7. Traceability check

Every claim above traces to a numbered insight in [`../synthesis/01-survey-insights.md`](../synthesis/01-survey-insights.md), a section in [`../research/product-teardown.md`](../research/product-teardown.md), or is explicitly labeled as a named hypothesis awaiting evidence. No new quotes, counts, or market data were introduced in this document.
