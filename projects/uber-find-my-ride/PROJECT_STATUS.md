# Uber Find My Ride — Project Status

**Project:** Airtribe Project 3  
**Overall status:** v5 deck (21 slides) rebuilt with the method reframe, a market/segments/trends slide and the key-questions appendix; PDF re-exported and script retimed to 660 words; presenter-visible video recording, working link, and anonymized response screenshots remain pending
**Last updated:** 18 September 2026
**Submission deadline:** Unknown  
**Current blocker:** Deadline and word/page limit are not confirmed; only four driver responses are available; self-serve responses vary in depth and cannot be probed live; survey translations still need native-speaker review; video still needs to be recorded and shared

## Current outcome

The source assignment, problem framing, required research stages, interview minimum, proof requirements, and submission template are documented. Hyderabad is confirmed as the primary research city, with India as the broader market context. Standard on-demand four-wheel passenger rides are in scope; Auto and Moto are excluded. The broad non-API internet sweep contains 72 sources and 94 evidence records, including 89 in-scope and 55 Hyderabad-specific records. A separate expanded YouTube API inventory contains 1,547 search appearances and 753 unique videos. The caption audit found 11 captioned videos and 742 without captions; none provides a useful Hyderabad non-airport pickup journey. Three priority videos have been visually reviewed and 18 remain. OpenStreetMap inventories cover six candidate pickup environments, with 1,180 raw mapped elements and 96 focused feature rows.

The live survey has produced 63 non-test submissions (62 unique after a confirmed duplicate — R031/R032 — was found in a closeout data-quality pass). Fifty-one unique respondents reported recent four-wheel use, 24 of those reported pickup difficulty or uncertainty, and 11 of 27 recent Hyderabad users reported difficulty or uncertainty. Twenty-three of 28 total issue cases said the problem had occurred before. The contact-safe snapshot in `data/survey/` contains normalized data, editable charts, assignment-oriented interpretation, and ten strong interview-style records. These are useful primary research responses, but they are not equivalent to ten fully probed synchronous interviews.

**17 September 2026 closeout pass:** two open desk-research items were resolved by deliberate scope decisions rather than left incomplete. Further YouTube review (18 of 21 priority videos) was stopped — Grade C evidence mattered more before primary survey data existed; see `research/youtube-manual-review-log.md`. Live field/app validation at RGIA, Secunderabad Station, and Raidurg was substituted with a desk-only public-source check; see `research/location-validation-desk-only.md`. That check found one genuinely new fact (Secunderabad's 15-minute pickup/drop access-control window, now folded into `desk-research-report.md` §3.7) and otherwise confirmed the original verification gaps remain open. A cross-tab pass on the survey data (documented as an addendum in `synthesis/01-survey-insights.md`) found no location-vs-delay-length pattern, no Hindi responses despite distribution, and one respondent's self-invented workaround (pre-emptively messaging pickup details) that directly supports the strategy direction in `synthesis/02-strategy-implications.md`.

## Delivery tracker

| ID | Workstream | Status | Evidence | Blocker | Next action |
|---|---|---|---|---|---|
| P01 | Assignment brief | Complete | `assignment-brief.md` | None | Preserve as source of truth |
| P02 | Problem and user framing | Initial | `README.md`, `project-understanding.md` | Needs research validation | Validate rider and driver jobs through interviews |
| P03 | Geographic and category scope | Complete | `scope.md`; Hyderabad and four-wheel rides confirmed | None | Preserve the boundary during research |
| P04 | Market research | Closed with stated gaps | Research report, non-API, YouTube API, caption analysis, OpenStreetMap logs, source register, research workbook, and a desk-only location-validation substitute (`research/location-validation-desk-only.md`) | Reliable Hyderabad four-wheel volume and issue-rate data remain unavailable — a stated data gap, not a task left undone; 18 priority videos deliberately left unreviewed | None — treat as closed for this submission unless new evidence needs arise |
| P05 | Competitive and alternatives analysis | Closed with stated gaps | [`research/competitor-analysis.md`](research/competitor-analysis.md) refreshed from official product sources: Uber, Ola, Grab, Lyft, Waymo, MyGate, Rapido, Google Maps, and manual-workaround evidence. [`research/product-teardown.md`](research/product-teardown.md) adds a stage-by-stage teardown of Uber's pickup journey against survey evidence, mapping each of the 3 product ideas to the exact stage it targets | Live-app/field verification was substituted with desk-only sources, not completed; Ola’s local zone evidence remains historical | None — treat as closed for this submission |
| P06 | Interview instrument | Live; backend schema drift fixed | Custom survey web app, Apps Script storage, trilingual content, optional depth questions, and raw JSON safety net | Telugu/Hindi text needs native-speaker review | Preserve the current instrument and review translations before wider distribution |
| P07 | Participant recruitment | Substantial initial volume | 62 unique responses; 51 recent four-wheel users; Hyderabad and comparison cities represented | Only four driver responses; convenience sampling limits representativeness | Recruit more drivers only if time permits; stop broad rider-volume collection |
| P08 | Interviews and proof | Requirement not met; survey evidence packaged | Contact-safe normalized data, anonymized quotes, app screenshots, live URL, and sanitized workbook are included in `v3/submission-ready/` | Self-serve survey is not equivalent to 10 synchronous interviews; narrative prompts were optional; consent was gated in the UI but not persisted as a row-level backend field | State the deviation plainly and submit app/response evidence without calling it interview proof |
| P09 | Insight synthesis | Draft complete | `synthesis/01-survey-insights.md` contains ten evidence-traceable insights, anonymized quotes, contradictions, confidence boundaries, and limitations | Final evidence and consent review remains | Review the ten insights against the assignment and preserve quote anonymity |
| P10 | Strategy implications | Draft complete | [`synthesis/02-strategy-implications.md`](synthesis/02-strategy-implications.md) — reconciles desk-research hypotheses H1-H6 against the 10 survey insights, names one direction (reduce manual-recovery effort at defined location types, not a pin replacement or airport-only fix), and lists what not to pursue yet with reasons | User should review before treating as final; driver-side and location-verification gaps remain open | Review the direction and open gaps, then move to product ideas |
| P11 | Top three product ideas | Corrected for final submission | [`synthesis/04-product-ideas.md`](synthesis/04-product-ideas.md) — pre-arrival meeting note, guided stalled-pickup recovery, and venue-specific coordination information, each with evidence boundaries and a test plan | Product value is not validated; Idea 3 remains the thinnest hypothesis | Test in sequence rather than treating the order as a committed build roadmap |
| P12 | Submission artifact | v5 deck and PDF built and validated | [`v3/submission-ready/final/`](v3/submission-ready/final/) — 21 slides, validation receipt passed, 660-word script | Deadline unknown; video not recorded; anonymized response screenshots not yet added to the evidence ZIP | Record slides 1–11, add the link to appendix slide 21, re-export the PDF, refresh the ZIP |

## Recommended interview mix — proposal, not assignment fact

If both sides of the pickup experience are allowed, begin with:

| Segment | Proposed count | Reason |
|---|---:|---|
| Riders with recent complex-location pickups | 6 | Understand uncertainty, movement, calls, delay, and cancellation |
| Drivers serving complex pickup locations | 4 | Understand access constraints, pin accuracy, waiting, identification, and safety |
| **Total** | **10** | Meets the assignment minimum |

The mix should change if the evaluator requires 10 rider interviews specifically.

## Evidence rules

- Do not invent interview quotes, screenshots, observations, or market numbers.
- Obtain explicit consent before recording or using identifiable images.
- Store public submission evidence separately from private raw participant material.
- Anonymize participant names and sensitive details in synthesis files.
- Label secondary research, participant evidence, inference, hypothesis, and recommendation separately.
- Treat market size and demand as unknown until sources and assumptions are documented.

## Immediate next actions

The full two-track closeout plan is in [`synthesis/03-next-steps-plan.md`](synthesis/03-next-steps-plan.md) (both tracks now executed as of 17 September 2026).

1. Review `synthesis/02-strategy-implications.md`'s recommended direction and open gaps; confirm or redirect.
2. Draft the Top 3 Research-Led Product Ideas, each tracing to a specific insight and the strategy direction.
3. Get the survey's Telugu/Hindi translations checked by a native speaker (still open, distribution is live).
4. Conduct selective follow-up conversations with willing respondents only if more depth or proof is needed.
5. Assemble the final PDF and record a presenter-visible Loom or Google Drive video under five minutes; use [`submission-requirements.md`](submission-requirements.md) as the delivery checklist.
