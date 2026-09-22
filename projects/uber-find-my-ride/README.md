# Project 3 — Uber Find My Ride

This Airtribe assignment explores pickup coordination after an Uber ride is booked. The goal is to understand why riders and drivers struggle to find each other in complex locations before proposing solutions.

**`v2/` holds a senior-PM reframe of the requirement, approach, and solution** — a fresh-eyes pass that names the driver-evidence gap directly and collapses two overlapping product ideas into one phased bet. It does not redo the research; v1 remains on disk, superseded, not deleted. See [`v2/README.md`](v2/README.md).

**`v3/submission-ready/` is the active corrected submission package.** It contains the final recording deck, PPT-to-PDF export, final script, app screenshots and URL, anonymized survey evidence, and the privacy-sanitized evidence ZIP. See [`v3/README.md`](v3/README.md).

## Problem in plain language

```text
Ride confirmed
      |
      v
Rider sees a pickup pin and ETA
      |
      v
Real-world location may be crowded, restricted, or hard to reach
      |
      +--> rider is unsure where to stand
      +--> driver cannot reach the pin
      +--> calls, messages, movement, delay, or cancellation
```

The assignment asks whether Uber should guide riders more actively toward a realistic pickup experience in places such as malls, offices, airports, and busy streets.

## Product framing

| Element | Current framing |
|---|---|
| Primary user | Rider waiting for a booked Uber in a complex pickup environment |
| Connected user | Driver trying to reach and identify the rider safely and efficiently |
| Rider job | Know where to wait and meet the driver with minimal uncertainty |
| Driver job | Reach a legal, accessible pickup point and identify the rider without repeated coordination |
| Candidate outcome metric | Pickup reliability: completed pickups without avoidable calls, location changes, delay, or cancellation |
| Product decision | Is the problem important and frequent enough for Uber to intervene more actively? |

The candidate metric is a proposed measurement direction, not a known Uber metric. It must be validated through interviews, market research, and—if available—trip data.

## Required work

### Step 1 — Market research and competitive analysis

- Analyze demand across relevant user segments.
- Identify and size the target market.
- Study the alternatives riders and drivers use today.
- Assess restrictions, operating rules, accessibility considerations, privacy requirements, and relevant laws.
- Assess market and mobility trends.

### Step 2 — In-depth user interviews

- Interview at least 10 people.
- Use open-ended questions to understand actual behavior, preferences, workarounds, and frustrations.
- Capture proof only with consent: interview photographs or videos, or screenshots for online interviews.

### Step 3 — Evidence-led synthesis

Use the required submission structure:

1. Research Goal
2. Key Interview Questions
3. Top 10 Most Relevant Insights, supported by direct quotes and visuals
4. Strategy Implications
5. Top 3 Research-Led Product Ideas

## Evidence boundary

At project creation:

- The assignment brief is captured.
- A broad public-web sweep, a separate YouTube API collection, and six OpenStreetMap location inventories have been completed; manual content review and targeted local verification remain.
- The required ten synchronous interviews were not completed. The available primary evidence is a self-serve online survey and must not be represented as interviews.
- No direct quotes, participant pictures, or message screenshots have been collected.
- No target-market estimate or product idea has been validated.

Research findings, interview evidence, interpretations, and product ideas must remain visibly separate. Participant names and identifiable details should not be published without explicit consent.

## Important unknowns

1. Geographic scope for market sizing and regulation: India, selected Indian cities, or another market.
2. Which Uber ride categories are in scope.
3. Whether riders, drivers, or both count toward the minimum 10 interviews.
4. Required word/page limit and deadline.
5. Whether internal Uber trip data is available; the assignment currently provides none.

## Project files

| File | Purpose |
|---|---|
| [`assignment-brief.md`](assignment-brief.md) | Source assignment supplied by the requester |
| [`project-understanding.md`](project-understanding.md) | Plain-language explanation and evidence-first approach |
| [`scope.md`](scope.md) | Phase 0 decisions, open scope questions, and completion rule |
| [`PROJECT_STATUS.md`](PROJECT_STATUS.md) | Factual progress, blockers, and next actions |
| [`NEXT_PHASE_PLAN.md`](NEXT_PHASE_PLAN.md) | Reviewed execution plan from manual validation through interviews, synthesis, and submission QA |
| [`submission-requirements.md`](submission-requirements.md) | Mandatory PDF, video, duration, presenter-visibility, and evidence-integrity checklist |
| [`data/survey/`](data/survey/) | Contact-safe survey snapshot, normalized data, analytics tables, and editable dashboard workbook |
| [`synthesis/01-survey-insights.md`](synthesis/01-survey-insights.md) | Evidence-traceable research goal, interview questions, top ten insights, quotes, contradictions, and limitations |
| [`research/`](research/) | Internet research report, source register, and search plan |
| [`research/competitor-analysis.md`](research/competitor-analysis.md) | Quick, official-source competitor and alternatives comparison for pickup coordination |
| [`research/Uber_Find_My_Ride_Internet_Evidence.xlsx`](research/Uber_Find_My_Ride_Internet_Evidence.xlsx) | Structured internet-evidence tracker |

## Current status

**Broad internet collection and the corrected survey-analysis snapshot are documented.** The final evidence base contains 62 unique submissions after one confirmed duplicate was removed. See [`PROJECT_STATUS.md`](PROJECT_STATUS.md), [`data/survey/README.md`](data/survey/README.md), and [`v3/submission-ready/`](v3/submission-ready/).
