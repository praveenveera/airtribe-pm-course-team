# Next-Phase Plan — Validation to Final Submission

**Plan status:** Reviewed and ready to execute

**Prepared:** 16 September 2026

**Starting point:** Broad internet research, YouTube collection, and OpenStreetMap location mapping are complete. The live self-serve survey has produced 63 likely non-test responses, and a contact-safe normalized dataset and analytics workbook are stored in `data/survey/`. Manual video validation has started; final assignment synthesis remains pending.

**Deadline:** Unknown; sequence is therefore defined by evidence gates rather than calendar dates.

## Recommendation

Stop broad internet and broad rider-volume collection. Use the existing survey evidence to complete the required insight synthesis, add only selective follow-up conversations where they materially improve depth or proof, close the remaining Step 1 gaps, and only then develop strategy and product ideas.

The first deep-validation locations should be:

1. Rajiv Gandhi International Airport;
2. Secunderabad Railway Station; and
3. the Raidurg Metro area.

They cover three different pickup systems: controlled airport zones, a multi-exit railway station, and a congested metro-and-office corridor. Inorbit Mall, Apollo Hospitals Jubilee Hills, and DLF Cybercity remain comparison locations. This prioritisation is a research proposal, not evidence that the first three have the highest problem frequency.

## Research goal

Understand when and why Hyderabad four-wheel pickups become difficult after booking, how riders and drivers recover today, and which failures most damage pickup reliability.

## Users and job

| User | Job to be done |
|---|---|
| Rider | Reach a realistic pickup point and identify the booked vehicle with minimal uncertainty |
| Driver | Reach a legal, accessible stopping point and identify the rider without repeated coordination |

**Primary research completion metric:** 10 consented interviews completed and documented, each anchored in a concrete past pickup experience where possible.

The proposed participant mix is six riders and four drivers. It must change if the evaluator requires 10 rider interviews specifically.

## Execution plan

| Stage | Work | Output | Completion gate | Main owner |
|---|---|---|---|---|
| 0. Evidence checkpoint | Preserve the completed internet and map research; confirm repository state | Local checkpoint committed as `219eec3`; remote push remains pending | Complete when the remote commit is verified | Researcher with assistant support |
| 1. Manual content validation | Watch the 21 priority YouTube videos; review retained comments in context; capture timestamps and observable behavior | Manual review log plus caption-coverage analysis | 3 of 21 priority videos reviewed; complete when all 21 are classified and every accepted claim has a URL, timestamp, context, and limitation | Assistant-supported review; researcher confirms interpretations |
| 2. Location validation | Check official rules, current Uber rider flow, and observable real-world access at the three priority locations; use the remaining three as comparison cases | One checklist per location with screenshots or field notes | Gate, side, level, legal stopping point, walking path, landmark, and accessibility questions are answered or explicitly marked unknown | Researcher for live app/fieldwork; assistant for desk evidence |
| 3. Market-research closeout | Consolidate segment demand, target-market sizing logic and gaps, alternatives, rules, and trends | Assignment-ready Step 1 summary | All five required topics have sourced findings or an explicit unknown; no invented Hyderabad trip or problem rate | Assistant-supported analysis; researcher approves assumptions |
| 4. Interview readiness | Confirm participant eligibility; prepare an open-ended guide, screener, consent wording, proof plan, and note template | Complete interview pack | Guide avoids leading questions; consent precedes recording; storage separates private raw evidence from public anonymised findings | Researcher with assistant support |
| 5. Recruitment and interviews | Recruit the approved mix and conduct at least 10 interviews using recent concrete experiences | Interview notes, consent status, and permitted proof | At least 10 completed interviews; no invented or unattributed quotes; each record has participant type and evidence status | Researcher |
| 6. Synthesis | Code behaviors, causes, workarounds, consequences, contradictions, and segment differences | Top 10 evidence-supported insights | Each insight traces to multiple observations or is labelled an exception; direct quotes and visuals have consent | Researcher with assistant support |
| 7. Strategy and ideas | Translate findings into strategic implications and three specific product ideas | Assignment-ready Step 3 draft | Ideas trace to insights; assumptions, risks, and measures are explicit; no unsupported feature claims | Researcher with assistant support |
| 8. Submission QA | Check the required structure, evidence traceability, privacy, readability, links, and visuals | Final submission package | All assignment sections present; proof is consent-safe; no placeholder or unsupported claims remain | Researcher with assistant support |

## Stage 1 — Video-review method

For every priority video:

1. confirm that the video shows or discusses a Hyderabad four-wheel pickup;
2. record the location, journey stage, rider or driver perspective, and publication date;
3. capture only short, relevant observations with timestamps;
4. distinguish what is visibly observed from what the creator claims;
5. review comments only in the context of the video;
6. classify the result as accepted evidence, hypothesis lead, adjacent context, or reject; and
7. record limitations such as promotion, missing location, age, editing, or unclear ride type.

Public video material remains Grade C evidence. It can improve interview questions but cannot establish prevalence.

## Stage 2 — Location-validation method

Use the same checklist at each location:

| Question | Validation source |
|---|---|
| Which gate, side, level, or zone is named? | Official venue guidance and signs |
| What pickup choices appear before and after booking? | Current Uber rider app screenshots |
| Can a four-wheel app cab legally and physically stop there? | Official rules plus direct observation |
| How far and through what route must a rider walk? | Map, observation, and accessibility check |
| What landmark could rider and driver both recognise? | App, venue signs, and observation |
| What changes with luggage, children, age, disability, weather, or darkness? | Observation and later interviews |
| What remains unknown or contradictory? | Explicit gap log |

Do not book unnecessary rides merely to create evidence. Do not photograph identifiable people without consent.

## Stage 3 — Market-research closeout

Close Step 1 using the existing source base plus the manual-validation findings:

- compare demand signals across rider, driver, accessibility, luggage/dependant, and location segments;
- present a target-market calculation model while leaving unavailable Hyderabad trip and issue-rate inputs explicit;
- summarise direct competitors, adjacent alternatives, and user workarounds;
- distinguish national rules, Hyderabad operating context, and location-specific restrictions; and
- summarise the trends that change the opportunity without treating forecasts as observed demand.

The output may conclude that a reliable numeric market size is unavailable publicly. A transparent model and data-acquisition gap is stronger than a fabricated estimate.

## Stage 4 — Interview-readiness decisions

**Update (16 September 2026):** Live/scheduled interviews were the execution blocker, so the interview instrument is now a trilingual (EN/Telugu/Hindi) self-serve survey rather than a synchronous guide — see [`interviews/README.md`](interviews/README.md) and [`interviews/survey-form-content.md`](interviews/survey-form-content.md). It covers both riders and drivers through one link, which also resolves the fixed-mix question below. The real-event prompt and consent/privacy rules in this section still apply; they're just delivered as form questions instead of a spoken guide. The opt-in follow-up-call question in the survey is the path to the small number of live conversations still worth having for deeper "why" probing.

Before recruitment starts, confirm:

- whether drivers may count toward the minimum 10;
- what qualifies as a sufficiently recent pickup experience;
- whether the evaluator requires particular participant segments;
- the final submission format and deadline; and
- how interview proof may be presented while protecting identity.

The interview should begin with a real-event prompt:

> Tell me about the last time you had difficulty meeting your cab after booking it in Hyderabad. What happened from the moment you booked until you entered the vehicle or the ride ended?

Feature reactions must come after the participant describes the real journey. Do not begin by asking whether a proposed feature would help.

## Evidence and privacy rules

- Keep secondary research, observation, interview evidence, interpretation, and recommendation visibly separate.
- Obtain explicit consent before recording, photographing, or using screenshots containing participant information.
- Store raw identifiable evidence privately; use anonymous participant IDs in research documents.
- Preserve contradictions and failed hypotheses.
- Do not calculate a precise Hyderabad market size using invented ride or problem-rate assumptions.
- Do not describe YouTube comments or map features as user-interview findings.

## Review completed

The plan was checked against the assignment brief and the current evidence inventory.

| Review question | Result | Adjustment made |
|---|---|---|
| Does it complete Step 1 before relying on interviews? | Yes, once Stage 3 is completed | Added an explicit closeout for segment demand, target-market sizing, alternatives, rules, and trends |
| Does it satisfy Step 2? | Yes, once executed | Made 10 consented interviews a completion gate and included proof/privacy preparation |
| Does it lead directly to the required Step 3 format? | Yes | Added explicit insight, strategy, product-idea, and submission-QA stages |
| Does it separate facts from hypotheses? | Yes | YouTube and OpenStreetMap remain supporting leads until validated |
| Is the location scope feasible? | Yes with prioritisation | Three locations receive deep validation; three remain comparison cases |
| Does it jump to features too early? | No | Product ideas are blocked until interview synthesis is complete |
| Is exact market sizing resolved? | No | The plan preserves the data gap instead of inventing Hyderabad trip or failure rates |

## Immediate action queue

1. Commit and verify the current research checkpoint.
2. Create the 21-video manual-review log and start with the highest-priority videos.
3. Prepare the common location-validation checklist for RGIA, Secunderabad Station, and Raidurg.
4. Confirm whether the interview minimum can include drivers, plus the deadline and final format.
5. Complete the Step 1 summary, then draft the interview pack using the validated findings.

## Out of scope until interviews are complete

- choosing the final product solution;
- claiming a validated target segment;
- estimating Hyderabad problem prevalence from public posts;
- presenting map-element counts as market demand; and
- producing the final top three ideas before evidence synthesis.
