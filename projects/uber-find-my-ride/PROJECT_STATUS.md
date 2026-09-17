# Uber Find My Ride — Project Status

**Project:** Airtribe Project 3  
**Overall status:** Broad internet collection and first survey analysis complete; assignment synthesis and Step 1 closeout are next
**Last updated:** 17 September 2026
**Submission deadline:** Unknown  
**Current blocker:** Deadline and submission format are not confirmed; only four driver responses are available; self-serve responses vary in depth and cannot be probed live; survey translations still need native-speaker review

## Current outcome

The source assignment, problem framing, required research stages, interview minimum, proof requirements, and submission template are documented. Hyderabad is confirmed as the primary research city, with India as the broader market context. Standard on-demand four-wheel passenger rides are in scope; Auto and Moto are excluded. The broad non-API internet sweep contains 72 sources and 94 evidence records, including 89 in-scope and 55 Hyderabad-specific records. A separate expanded YouTube API inventory contains 1,547 search appearances and 753 unique videos. The caption audit found 11 captioned videos and 742 without captions; none provides a useful Hyderabad non-airport pickup journey. Three priority videos have been visually reviewed and 18 remain. OpenStreetMap inventories cover six candidate pickup environments, with 1,180 raw mapped elements and 96 focused feature rows.

The live survey has produced 63 likely non-test submissions. Fifty-two respondents reported recent four-wheel use, 24 of those reported pickup difficulty or uncertainty, and 11 of 27 recent Hyderabad users reported difficulty or uncertainty. Twenty-three of 28 total issue cases said the problem had occurred before. The contact-safe snapshot in `data/survey/` contains normalized data, editable charts, assignment-oriented interpretation, and ten strong interview-style records. These are useful primary research responses, but they are not equivalent to ten fully probed synchronous interviews.

## Delivery tracker

| ID | Workstream | Status | Evidence | Blocker | Next action |
|---|---|---|---|---|---|
| P01 | Assignment brief | Complete | `assignment-brief.md` | None | Preserve as source of truth |
| P02 | Problem and user framing | Initial | `README.md`, `project-understanding.md` | Needs research validation | Validate rider and driver jobs through interviews |
| P03 | Geographic and category scope | Complete | `scope.md`; Hyderabad and four-wheel rides confirmed | None | Preserve the boundary during research |
| P04 | Market research | In progress | Research report, non-API, YouTube API, caption analysis, local MLX Whisper workflow, manual video review, OpenStreetMap logs, source register, and research workbook | 18 priority videos remain; selective transcription needs an authorised local file; reliable Hyderabad four-wheel volume and issue-rate data are unavailable | Review the next five priority videos; selectively transcribe only relevant authorised media; verify selected locations in the live app and field |
| P05 | Competitive and alternatives analysis | In progress | Uber, Ola, Grab, Lyft, Waymo, MyGate, Google Maps, and workaround evidence | Current Hyderabad availability still needs live-app verification | Run live-app and field checks at selected locations |
| P06 | Interview instrument | Live; backend schema drift fixed | Custom survey web app, Apps Script storage, trilingual content, optional depth questions, and raw JSON safety net | Telugu/Hindi text needs native-speaker review | Preserve the current instrument and review translations before wider distribution |
| P07 | Participant recruitment | Substantial initial volume | 63 likely non-test responses; 52 recent four-wheel users; Hyderabad and comparison cities represented | Only four driver responses; convenience sampling limits representativeness | Recruit more drivers only if time permits; stop broad rider-volume collection |
| P08 | Interviews and proof | Usable with limitations | Contact-safe normalized data and ten strongest interview-style records in `data/survey/` | Self-serve form cannot probe vague answers; participant-specific media proof is incomplete | Use the strongest records transparently; conduct selective follow-ups where permission exists |
| P09 | Insight synthesis | In progress | Analytics workbook, response funnel, problem-location and recovery patterns, qualitative coverage, and shortlist | Final top-ten insight narrative is not yet written | Draft the required top ten insights with traceable quotes and limitations |
| P10 | Strategy implications | Blocked | None | Depends on research synthesis | Identify evidence-supported directions |
| P11 | Top three product ideas | Blocked | None | Must follow evidence, not precede it | Generate and prioritize after synthesis |
| P12 | Submission artifact | Not started | None | Format and deadline unknown | Confirm required format and assemble final evidence |

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

The reviewed sequence is maintained in [`NEXT_PHASE_PLAN.md`](NEXT_PHASE_PLAN.md).

1. Convert the survey analysis into the assignment's top ten insights with direct, anonymized evidence.
2. Close Step 1 across segments, market-sizing logic, alternatives, rules, and trends.
3. Write strategy implications and three research-led product ideas only after the insight traceability check.
4. Conduct selective follow-up conversations with willing respondents if more depth or proof is needed.
5. Confirm the deadline and submission format, then assemble the final evidence pack.
