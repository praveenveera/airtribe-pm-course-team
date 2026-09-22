# Problem Framing and Prioritization — Part 1

> **Source boundary:** Condensed from learner-provided class notes. Numerical illustrations and company examples are teaching material and have not been independently verified.

## Session at a glance

Good product decisions depend on framing the right problem at the right level of specificity. Research signals must become bounded problem statements, then be prioritised using user value, business impact, evidence, and effort—not volume, seniority, or intuition alone.

## Learning objectives

- Stay within the evidence provided by a case or metric.
- Turn research signals into a framed problem.
- Use Jobs-to-be-Done to understand the desired outcome.
- Distinguish HIPPO requests from poorly prioritised real problems.
- Apply RICE without treating the score as certainty.
- Decompose a funnel before proposing a solution.
- Use Five Whys and How Might We at the right stages.

## 1. Stay specific to the evidence

When a prompt provides a narrow chart, screen, or metric, answer from that evidence first. Do not replace a specific diagnostic question with a broad theory about the entire business.

A disciplined response should:

1. Identify the exact metric change.
2. Locate the relevant journey or funnel step.
3. State what the data supports.
4. Separate likely explanations from unsupported possibilities.
5. Ask for the next evidence needed.

In the AOV example, broad explanations such as launches or discounts were weak unless visible in the prompt. The first task was to interpret the supplied numbers and identify which component was driving the change.

## 2. From research signal to product decision

One complaint may be noise. Repeated friction across relevant users becomes a signal worth investigating.

```text
Discovery → Pattern finding → Problem framing → Prioritisation → Execution
```

Problem framing turns observations into a decision-ready statement containing:

- user or segment;
- context and job;
- friction;
- user and business impact;
- evidence strength;
- scope and exclusions;
- success criteria.

For coupon friction, the product problem is not “build a coupon selector.” It is that a defined group cannot confidently select an applicable offer at checkout, causing effort, errors, or abandonment.

## 3. Jobs-to-be-Done

**Jobs-to-be-Done (JTBD)** asks what progress a user is trying to make in a specific situation. Users “hire” a product to achieve an outcome, not to collect features.

Use this loop:

1. Trigger or situation
2. Desired outcome
3. Why the outcome matters
4. Current alternative
5. Friction in completing the job

Examples discussed included:

- an air conditioner purchased for reliable cooling even when its Wi-Fi feature is unused;
- a milkshake used during a commute to reduce boredom and provide satiety;
- a laptop chosen for functional performance as well as reliability or identity.

These are illustrative hypotheses. The real job must be discovered from behaviour and context.

## 4. Frame the right problem

Good framing is:

- specific;
- evidence-based;
- focused on an outcome;
- bounded enough to guide action;
- connected to user and business impact;
- open to more than one solution.

A weak statement says, “Users are unhappy with checkout.” A stronger structure is:

> **[Segment]** cannot **[job]** during **[context]** because **[observed friction]**, resulting in **[user consequence]** and **[business consequence]**. Evidence includes **[signal]**. This work includes **[scope]**, excludes **[non-goal]**, and will be measured by **[metric]**.

Google+ and Netflix/Blockbuster were used to illustrate how the chosen frame changes the strategic response. Treat those stories as prompts for analysis, not proof of one simple cause.

## 5. Prioritise problems, not requests

The class used a two-axis lens:

- user-centric versus stakeholder-centric;
- right problem versus wrong problem.

The ideal is a user-centred, well-supported problem. Two failure modes were discussed:

- **HIPPO — Highest Paid Person's Opinion:** a request driven by senior preference without sufficient user evidence.
- **Ivory tower:** a real user problem selected without comparing it properly with more important problems.

The distinction matters: a problem can be real and still be the wrong priority now.

### Misplaced empathy

Empathy should make the team take a complaint seriously. It should not make the team assume one loud complaint has broad scale or business impact. Combine user pain with prevalence, severity, strategic fit, and opportunity cost.

## 6. RICE prioritisation

RICE compares initiatives using:

```text
RICE score = (Reach × Impact × Confidence) / Effort
```

| Factor | Question |
|---|---|
| Reach | How many relevant users or events will be affected in a defined period? |
| Impact | How strongly could this move the target outcome? |
| Confidence | How reliable are the estimates and supporting evidence? |
| Effort | What total product, design, engineering, testing, release, and operational work is required? |

A lower-reach checkout improvement may create more value than a high-reach homepage change because checkout users are closer to purchase. Define scoring scales and time periods consistently.

RICE supports discussion; it does not remove judgement. Dependencies, risk, mandatory work, strategy, and sequencing can override a raw score.

## 7. Diagnose metric drops through decomposition

When a metric changes, break it into stages and compare each step.

In the sign-up example:

```text
Landing → Email verification → Profile completion → First action
```

If traffic and verification decline slightly but profile completion drops sharply, profile completion becomes the leading investigation area. It is a bottleneck signal, not yet proof of the root cause.

For low repeat grocery orders, inspect four lenses:

- user behaviour and routines;
- product experience and reorder tools;
- operations such as stock and delivery certainty;
- business effects such as basket size and acquisition dependence.

## 8. Five Whys and How Might We

- **Five Whys** moves from a visible symptom toward an underlying cause.
- **How Might We (HMW)** turns a validated problem into a space for possible solutions.

Use Five Whys carefully: a linear chain can oversimplify a system with several causes. Support each step with evidence.

Use HMW after framing the problem. A useful constraint can stimulate ideas, but the wording should not hide a preferred feature.

```text
Symptom → Cause hypotheses → Evidence → Root problem
Root problem → HMW questions → Options → Test
```

## 9. Problem and persona

Start from the problem, then segment when the root cause, impact, behaviour, or appropriate response differs by cohort.

Ask:

- Is the root cause the same across segments?
- Does the impact differ materially?
- Does the segment change the solution or channel?
- Is there enough evidence to split the problem?

If a platform delivery delay affects everyone for the same operational reason, separate persona statements may add little. Coupon behaviour may require segmentation if different cohorts use and value offers differently.

## Practical application

For a metric problem, prepare this diagnostic table before proposing a feature:

| Step | Evidence | Hypothesis | Next check | Metric |
|---|---|---|---|---|
| Funnel stage | What changed? | Why might it have changed? | What would confirm or reject it? | What should recover? |

Then write one bounded problem statement and compare candidate problems using RICE plus strategic and operational constraints.

## Common mistakes

- Solving a broader problem than the prompt supports.
- Treating one complaint as a recurring pattern.
- Writing a preferred feature into the problem statement.
- Accepting a senior request without user evidence.
- Assuming every real problem is a current priority.
- Treating a RICE score as objective truth.
- Stopping at a funnel bottleneck and calling it the root cause.

## Quick reference

- Stay inside the evidence before expanding the hypothesis space.
- Research → pattern → framing → prioritisation → execution.
- JTBD describes the progress a user wants in context.
- HIPPO is authority-led; ivory tower is real but poorly prioritised.
- RICE = reach × impact × confidence ÷ effort.
- Decompose the funnel before proposing a fix.
- Use Five Whys to diagnose and HMW to explore solutions.

## Questions or claims to verify

- How many relevant users experience the friction, and how severe is it?
- Which funnel step changed, and what event or cohort data supports the diagnosis?
- What assumptions drive the RICE score?
- Does segmentation materially change the cause, impact, or response?
