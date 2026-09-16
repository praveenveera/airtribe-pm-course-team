# Understanding Project 3 — Uber Find My Ride

## The project in one sentence

Understand why riders and drivers struggle to meet after a ride is booked, prove where the problem is serious, and only then recommend what Uber should do.

## What is the problem in simple terms?

Booking the cab is not always the difficult part. **Finding the cab after booking can be.**

Imagine this situation:

```text
The app says: "Your driver has arrived."

Rider:  "I am near Gate 2. Where is the car?"
Driver: "I cannot stop at Gate 2. Please come outside."

Both can see a map pin, but the map pin does not explain the real place.
```

At a mall, airport, office campus, railway station, hospital, stadium, or crowded street:

- the pin may be inside a building or on the wrong side of the road;
- the driver may not be allowed to stop there;
- there may be several gates with similar names;
- the rider may not know the safest or easiest place to wait;
- GPS can show two people as close even when a wall, flyover, or restricted road separates them.

The result can be calls, messages, walking with luggage, unsafe road crossing, waiting charges, delay, or cancellation.

## What decision are we helping Uber make?

The assignment is not yet asking:

> What new feature should Uber build?

It is first asking:

> Is pickup confusion an important, frequent, and poorly solved problem—and for which users and locations?

If the evidence says the problem is meaningful, we can then answer:

> What is the smallest useful intervention Uber should test?

## Who are the users?

This is a **two-sided problem**. A pickup succeeds only when the rider and driver can coordinate.

| User | What they are trying to do | Possible difficulty to investigate |
|---|---|---|
| Rider | Reach the correct place and identify the booked vehicle | Does not understand the pickup point, cannot see the vehicle, or cannot move easily |
| Driver | Reach a legal stopping point and identify the rider quickly | Cannot access the pin, receives unclear directions, or loses time waiting |
| Location operator | Keep vehicles and people moving safely | Has gate, queue, parking, or stopping restrictions |
| Uber | Complete the pickup reliably | Bears support, cancellation, incentive, trust, and retention consequences |

Riders and drivers are the primary research participants. Location operators and regulations provide important context.

## What does “Find My Ride” mean here?

It does not simply mean finding a car icon on a map.

It means completing four small jobs:

```text
1. Understand where the driver can realistically arrive
                         |
2. Reach the correct pickup area safely
                         |
3. Recognize the correct rider and vehicle
                         |
4. Start the trip without avoidable delay or cancellation
```

A map can be technically accurate while the real pickup experience still fails.

## Why does the problem matter?

### For the rider

- Uncertainty and stress after booking
- Wasted time and possible waiting charges
- Walking with luggage, children, or accessibility needs
- Safety risk in traffic or unfamiliar locations
- Cancellation and the need to book again

### For the driver

- Time and fuel lost while searching or waiting
- Missed earning opportunities
- Difficult or illegal stopping situations
- Rider frustration and lower ratings
- Cancellation disputes

### For Uber

- Lower pickup completion and reliability
- More cancellations and support contacts
- Poor rider and driver trust
- Reduced repeat use in difficult locations
- Operational problems with airports, malls, offices, and cities

These are reasonable possibilities from the assignment brief. Research must establish which effects actually occur, how often, and for whom.

## What the assignment expects us to produce

The work has three connected stages:

```text
Market evidence
      +
Competitive and alternative solutions
      +
At least 10 user interviews
      |
      v
Top 10 evidence-supported insights
      |
      v
Strategy implications
      |
      v
Top 3 research-led product ideas
```

The important word is **research-led**. The three ideas must come from the evidence collected before them.

## How we should approach the project

### Phase 0 — Fix the scope

Before researching, confirm:

1. Which country and cities are in scope?
2. Which Uber services are in scope: cars only or other ride types too?
3. Does “10 people” mean riders only, or can the sample include drivers?
4. What is the deadline and final format?

Why this matters: airport rules, pickup behavior, competitors, market size, and laws change by city and country.

**Output:** one approved scope statement.

### Phase 1 — Define the research goal

Use a neutral goal that does not assume a solution:

> Understand when and why post-booking pickups become confusing, how riders and drivers handle the confusion today, and which problems most affect pickup reliability.

Break it into questions:

- Where does pickup confusion happen most?
- Which users are affected most?
- What exactly causes the confusion?
- What do riders and drivers do to recover?
- What are the consequences?
- Which existing alternatives help or fail?

**Output:** research goal, questions, and assumptions to test.

### Phase 2 — Conduct market and competitive research

Research five areas:

| Area | Plain-language question |
|---|---|
| Demand | How many people may face difficult pickups, and in which segments? |
| Target market | Which users, trip types, locations, and cities are most relevant? |
| Alternatives | How do people solve this today—with Uber, another app, calls, landmarks, signs, or staff? |
| Rules and restrictions | Where can vehicles legally stop, and what privacy, accessibility, or location rules apply? |
| Trends | Are airports, smart venues, precise location tools, mapping, and mobility behavior changing the opportunity? |

Do not force a large market number from weak data. If exact data is unavailable, show a transparent range and label every assumption.

**Output:** source register, segment view, market-sizing logic, alternatives comparison, regulations summary, and evidence gaps.

### Phase 3 — Map the current pickup journey

Document what happens from booking confirmation until the trip starts:

```text
Ride confirmed
   -> rider checks pickup point
   -> rider decides whether to move
   -> driver approaches
   -> rider and driver try to identify each other
   -> pickup succeeds, is delayed, or fails
```

For each stage, ask:

- What information is available?
- What decision does the person make?
- Where does uncertainty appear?
- What workaround is used?
- What is the consequence?

**Output:** current-journey map and a list of unproven assumptions.

### Phase 4 — Prepare the interview plan

Use recent real experiences, not general opinions.

Good opening question:

> Tell me about the last time you had difficulty finding your Uber after booking it.

Then explore:

- Where were you?
- What did you see in the app?
- What did you expect to happen?
- What became confusing?
- What did you do next?
- Did you call, message, move, wait, or cancel?
- How much time or effort did it cost?
- What finally helped?
- Has this happened elsewhere?

Avoid leading questions such as:

> Would an augmented-reality feature help you find the car?

That asks the participant to approve our idea. It does not help us understand the problem.

**Output:** interview guide, participant mix, recruitment plan, and consent wording.

### Phase 5 — Interview at least 10 people

A useful proposed mix—if the assignment permits both sides—is:

- 6 riders with a recent difficult pickup;
- 4 drivers familiar with complex pickup locations.

For every interview:

1. Ask for consent before recording or taking a screenshot.
2. Capture the participant's real story in their own words.
3. Separate exact quotes from our notes.
4. Record the location type and situation without exposing private details.
5. Note exceptions and contradictions, not only repeated patterns.

**Output:** anonymized notes, consent-safe proof, and a participant tracker.

### Phase 6 — Turn conversations into insights

Do not copy ten interview summaries into the final submission. Look across interviews for patterns.

Use this chain:

```text
Observation -> Meaning -> Product implication
```

Example format only—not a research finding:

```text
Observation:
Several participants describe different gates using the same landmark.

Meaning:
The shared label may be too vague for coordination.

Implication:
Uber may need a more precise way to establish a shared meeting point.
```

An insight is strong when it has:

- more than one supporting observation, or a clearly important edge case;
- direct quotes or behavior evidence;
- a visible consequence;
- a clear statement of what remains unknown.

**Output:** top 10 insights with evidence and confidence.

### Phase 7 — Decide the strategy direction

Strategy means deciding **where Uber should focus**, not listing features.

Possible decision dimensions include:

- one location type versus every pickup;
- riders with special constraints versus all riders;
- prevention before driver arrival versus recovery after confusion begins;
- rider guidance versus driver access information versus shared coordination;
- software-only intervention versus partnerships with venues.

Choose a direction because the evidence supports it. Also state what Uber should not focus on yet.

**Output:** strategy implications and the reason for each.

### Phase 8 — Create and prioritize three product ideas

Only now generate ideas. Each idea should state:

| Question | What to write |
|---|---|
| User | Who is it for? |
| Moment | When in the pickup journey is it used? |
| Problem | Which research insight does it address? |
| Action | What does the product help the user do? |
| Outcome | What should improve? |
| Risk | What could make the idea fail or cause harm? |
| Test | What is the smallest experiment? |

Prioritize using evidence strength, likely user value, feasibility, safety, and measurement—not novelty.

**Output:** top three specific ideas with evidence links and test plans.

### Phase 9 — Assemble the final submission

Follow the requested structure exactly:

1. Research Goal
2. Key Interview Questions
3. Top 10 Most Relevant Insights
4. Strategy Implications
5. Top 3 Research-Led Product Ideas

Include interview proof only where consent allows it. Keep raw participant material outside the public portfolio when it contains personal information.

**Output:** final document or deck in the required format.

## How we will know the work is good

The project is strong if a reviewer can trace every recommendation backward:

```text
Product idea
    <- strategy implication
    <- research insight
    <- interview quote or market evidence
    <- named source or anonymized participant
```

The project is weak if it begins with impressive features and then searches for quotes to support them.

## One metric to keep in mind

The proposed outcome metric is:

> **Pickup reliability:** the share of booked rides that begin without avoidable coordination failure.

Possible supporting measures—subject to data availability—include:

- rider-driver calls or messages before pickup;
- rider or driver location changes;
- time from driver arrival to trip start;
- pickup-related cancellation rate;
- pickup-related support contacts;
- rider and driver confidence or effort.

These are candidate measures, not known Uber definitions or confirmed assignment requirements.

## What we should not do yet

- Do not decide that AI, augmented reality, Bluetooth, or a new map is the answer.
- Do not invent interview quotes, screenshots, or market numbers.
- Do not treat one frustrating personal experience as proof of demand.
- Do not interview people only about whether they like our idea.
- Do not combine rider and driver problems into one vague insight.
- Do not publish identifiable participant evidence without consent.
- Do not claim the project is complete before all three required steps are supported by evidence.

## Current position

We currently understand the assignment and the investigation sequence. We have **not** yet proven the size, severity, priority segment, main cause, or best solution.

The correct next step is to confirm the scope and research questions—not design the feature.
