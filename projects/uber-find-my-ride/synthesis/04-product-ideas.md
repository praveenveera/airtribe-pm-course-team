# Top 3 Research-Led Product Ideas

**Status:** Draft for review
**Snapshot:** 17 September 2026
**Inputs:** [`01-survey-insights.md`](01-survey-insights.md), [`02-strategy-implications.md`](02-strategy-implications.md)

## Ground rule

Every idea below stays inside the strategy direction already agreed: reduce the effort and uncertainty of the *manual recovery step* at a defined set of complex location types. None of them redesign the pickup pin, none are airport-exclusive, none make driver-specific claims (the driver sample is too thin), and none introduce an unvalidated technical mechanism (no AR, no new hardware — see `project-understanding.md`'s explicit "what we should not do yet" list).

Prioritized by evidence strength first, not novelty — Idea 1 has the most direct evidence (an existing user-invented workaround), Idea 2 addresses the most severe documented failure mode, Idea 3 is the most scalable but rests on the thinnest evidence base.

---

## Idea 1 — Structured pre-arrival meeting note

| | |
|---|---|
| **User** | Riders and drivers together, for pickups at a defined list of complex location types (not every ride) |
| **Moment** | After booking is confirmed, a few minutes before estimated driver arrival — before confusion starts, not after |
| **Problem** | Insight 5: calling/messaging is already the default recovery layer (helped in 20 of 28 issue cases) but it's unstructured and reactive. Insight 4: the app can say "arrived" while the physical meeting still fails. Synthesis addendum: one respondent (R061) already does this manually and unprompted — "I always place a message on where I would stand with details." |
| **Action** | For pickups flagged at complex location types, prompt both sides to exchange one short structured note (landmark, gate/side, waiting spot) shortly before arrival — formalizing what a rider is already doing by hand, not inventing a new behavior |
| **Outcome** | Fewer reactive calls/messages needed exactly at the moment of arrival; less of the "driver arrived but can't find each other" gap in Insight 4 |
| **Risk** | If shown on every ride regardless of location, it adds friction to pickups that were never going to be difficult (Insight 1: 24 of 51 recent users reported an issue). Must be scoped narrowly to flagged location types, not universal. |
| **Test** | A/B test: show the prompt only for bookings at the location types from Insight 3's top mentions (airport, mall, office, residential); measure call/message rate and self-reported wait time against a control group of similar bookings without the prompt |

## Idea 2 — Guided stalled-pickup recovery

| | |
|---|---|
| **User** | Riders primarily — the ones left with no recourse when recovery fails |
| **Moment** | After the app shows "driver arrived" but the trip hasn't started within a defined time window |
| **Problem** | Insight 9: 6 of 28 issue respondents selected "nothing helped"; R064's direct quote — "No one to seek redressal or help... Grievance redressal has to be immediate." This is a distinct failure mode from Idea 1's problem: it's not about better initial communication, it's about what happens when communication has already failed. |
| **Action** | If a trip stalls in "arrived" state past a defined threshold at a flagged complex location, first guide reconnect actions such as sharing live location, confirming a meeting cue, and retrying contact. Test reassignment only for unresolved cases rather than presenting it as an immediate or guaranteed outcome. |
| **Outcome** | Fewer unresolved cancellations with no recourse; a measurable floor under the worst-case coordination failures instead of an open-ended dead end |
| **Risk** | Insight 8 shows cancellation is multi-causal (destination, fare, payment mode, not just location) — this escalation path must trigger only on genuine coordination stalls, or it becomes a general complaint channel that dilutes the signal and invites misuse |
| **Test** | Instrument stalled "arrived" states at flagged locations; offer the guided escalation to a sample; measure resolution rate (trip eventually starts) and unresolved-cancellation rate against a control group |

## Idea 3 — Reusable, venue-specific coordination notes for recurring locations

| | |
|---|---|
| **User** | Riders and drivers, at a small starting shortlist of the highest-mention venues (not a general rollout) |
| **Moment** | Before departure, once a booking's pickup point matches a venue on the shortlist |
| **Problem** | Insight 2: 23 of 28 issue cases said the problem had happened before, so recurrence is a meaningful problem signal. The survey does **not** prove that the same venue or location type failed repeatedly. Insight 3 separately shows that mentions concentrate in airport, residential, mall, and office locations. Desk research also shows why generic map data can be insufficient when access rules change. |
| **Action** | For a narrow starting list of 2-3 highest-mention venues, invest once in a structured coordination note (accessible gate/side, legal stopping point, known access constraints) that every rider and driver pulls from — instead of each pair rediscovering the same venue-specific friction independently |
| **Outcome** | If the selected venues have repeated operational friction, a maintained venue-level data investment could reduce rediscovery effort across future pickups. This remains a hypothesis to validate. |
| **Risk** | Venue rules change (Secunderabad's own rules changed with 2026 redevelopment) — a stale note is worse than no note. Needs a real update mechanism and ownership, not a one-time snapshot. Also the most resource-intensive of the three ideas to start. |
| **Test** | Pilot at 2-3 venues only (e.g. the airport zone, one gated residential pattern, one mall); compare call/message rate and reported wait time for repeat pickups at piloted venues against comparable non-piloted venues of the same type |

## What this set deliberately leaves out

- Any driver-specific feature — the 4-response driver sample isn't enough to support one (see `02-strategy-implications.md` §5).
- An airport-only solution — explicitly ruled out; airport is the largest single location by mention but not a majority.
- A precise ROI or market-size claim for any idea — no reliable Hyderabad trip-volume data exists to size these against (desk research §5, §6).
- Idea 10's vehicle-identification mismatch from the insights doc — real but single-mention edge-case evidence, not enough to support a dedicated idea yet. Worth flagging as a safety-relevant follow-up question if more interviews happen.
