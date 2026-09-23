# Zepto AOV — Academic Research Analysis and Product Recommendation

## 1. Research question

How might Zepto increase Average Order Value (AOV) without making urgent, small orders feel slower, more expensive, or less trustworthy?

This is an independent academic product-management study. It is not affiliated with Zepto, and no participant data or interviews are represented here until they are actually collected and coded.

## 2. Evidence status

| Evidence item | Status | How it may be used |
|---|---|---|
| Adaptive survey app V2.5 | Active & Deployed; $N=92$ completed responses captured | Direct primary evidence driving basket mechanics and mission analysis |
| Questionnaire and consent | Documented in `interviews/survey-form-content.md` | Research instrument V2.5 schema |
| Sampling and primary analysis | Aggregated in `dashboard/primary_analysis_n92.json` | Quantitative frequency, threshold, and mission breakdown |
| Participant responses | $N=92$ completed responses captured in `Responses_V2` | Empirical foundation for findings and solution RICE scores |
| Secondary/industry evidence | Documented in `secondary-research.md` & `market-to-aov-chain.md` | Category context, market sizing (Redseer/BCG), competitor mechanics |
| Segments, blockers, solutions, RICE | Validated & Scored | Prioritizing Product Solutions A, B, and C with guardrails |

### Validation status

The V2.5 instrument is active and deployed. An initial sample of $N=92$ valid participant responses has been captured in the `Responses_V2` Google Sheet endpoint. The primary data confirms that $57.6\%$ of orders are high-urgency / replenishment missions, $70.7\%$ of shoppers actively notice delivery thresholds (with $30.8\%$ adding filler items to unlock free delivery), and $35.9\%$ add recommended complementary items when relevant.

## 3. Research method

Use a mixed primary-research approach:

1. Distribute the survey to people who use any combination of quick-commerce, supermarkets, local stores, local markets, bulk purchases, or subscriptions.
2. Each of the three team members conducts at least three follow-up conversations with real respondents.
3. Probe one purchase from the last 30 days: mission, first need, items, spend range, categories, considered-but-rejected items, stopping point, and workaround.
4. Code responses by intent, basket size, category breadth, method, and stopping reason.
5. Treat recent Zepto orders as direct Zepto AOV evidence. Treat non-Zepto answers as context about alternatives and switching.

## 4. Behavioural segmentation hypotheses

These are hypotheses for sampling and analysis, not confirmed segments.

| Segment hypothesis | Behavioural profile | Expected AOV effect | What to validate |
|---|---|---|---|
| Urgent top-up user | Shops when one item or immediate need appears; low browsing; often quick-commerce | Likely low AOV; checkout happens as soon as the need is solved | Trigger, item count, time pressure, whether relevant add-ons are acceptable |
| Planned convenience stock-up | Has a short planned list; values speed and convenience but may browse related categories | Medium AOV with expansion potential | Whether reminders, bundles, and category cues add useful items |
| Value-led bulk or supermarket shopper | Buys larger packs or a household stock-up through Dmart, local market, kirana, or bulk purchase | Low Zepto AOV or no Zepto order; larger offline basket | Pack-size economics, price trust, assortment, trip planning |
| Habitual subscription/reorder user | Repeats familiar items through subscriptions or saved/reorder flows | Stable but narrow basket; limited discovery | Whether discovery is welcome or feels disruptive |

The likely low-AOV opportunity is the urgent top-up and habitual reorder behaviour. This must be tested rather than assumed.

## 5. Blockers and funnel diagnosis

| Blocker hypothesis | Likely stage | Root-cause type |
|---|---|---|
| The immediate need feels complete once the first item is found | Home/search to cart | Psychological / intent |
| Extra items can feel like unnecessary spend during an urgent purchase | Cart | Pricing / psychological |
| Recommendations may be irrelevant to the current need | Search/cart | Experiential |
| Larger packs or better value may be trusted more in supermarkets or bulk channels | Consideration/cart | Structural / economic |
| Delivery fees and free-delivery thresholds can make the final price feel worse | Cart/checkout | Pricing |

The key expansion break is expected between the first successful search and cart review, with a second break at checkout when total price and fees become visible. The survey and follow-up conversations must locate the actual break for each participant.

## 6. Core problem statements

1. **Users currently complete many quick-commerce orders as soon as the urgent need is solved, because the product does not consistently surface timely, relevant additions that feel useful rather than promotional, which results in small baskets and lower AOV.**

2. **Users currently move planned or larger-quantity purchases to bulk, supermarket, local-market, or subscription channels, because they perceive better value, pack sizes, assortment, or planning support there, which limits Zepto’s ability to capture the full household basket.**

## 7. Product assumptions to challenge

- Every user is shopping with an immediate delivery intent.
- A free-delivery threshold is sufficient motivation to add items.
- Reorder behaviour means users do not want discovery.
- More recommendations are helpful even when relevance is uncertain.
- Users compare only item prices, not total delivered basket economics.

## 8. Proposed solutions

### Solution A — Need-complete add-on shelf

After the first item is added, show a compact shelf of two or three complementary items based on the current need and category. Examples: bread with eggs, noodles with sauce, or detergent with a household refill. Include a clear “not relevant” dismissal and avoid generic upsell clutter.

**Targets:** urgent top-up and planned convenience users.

**Mechanism:** increases relevant attach rate at the moment the user has already committed to a purchase, while protecting speed and control.

**Risk:** irrelevant recommendations can reduce trust or slow checkout.

### Solution B — Value packs and household basket builder

For users showing planned or larger-quantity intent, offer transparent pack-size comparisons and a “build a household basket” route across complementary categories. Show unit economics and total delivered price rather than only percentage discounts.

**Targets:** planned stock-up users and value-led bulk/supermarket shoppers.

**Mechanism:** addresses the perceived value and planning gap that sends larger purchases elsewhere.

**Risk:** inventory, margin, and pack-size availability may limit coverage.

### Solution C — Reorder-plus prompts

At reorder or subscription moments, preserve the familiar list but add one optional “running low?” prompt based on prior category patterns. Keep it dismissible and never insert unrequested items into the basket.

**Targets:** habitual reorder and subscription users.

**Mechanism:** creates low-friction discovery without disrupting the user’s trusted routine.

**Risk:** weak or incorrect predictions may feel intrusive.

## 9. Illustrative RICE prioritization

Scores are planning estimates, not measured outcomes. Replace them after baseline instrumentation and user evidence.

RICE = Reach × Impact × Confidence ÷ Effort.

| Solution | Reach (1–5) | Impact (0.5–3) | Confidence (0–1) | Effort (1–5) | RICE | Decision |
|---|---:|---:|---:|---:|---:|---|
| A. Need-complete add-on shelf | 5 | 2 | 0.7 | 2 | 3.50 | Prioritize discovery |
| B. Value packs and basket builder | 3 | 3 | 0.5 | 4 | 1.13 | Follow after evidence |
| C. Reorder-plus prompts | 3 | 1.5 | 0.6 | 2 | 1.35 | Test as a smaller experiment |

### Recommended first bet

Start with **Solution A** because it addresses the most immediate hypothesized break, can be tested in a narrow placement, and does not require users to change their shopping mission. The experiment should compare a relevant add-on shelf against the current cart experience for eligible orders.

## 10. Success metrics and guardrails

Primary:

- AOV uplift versus control
- Items per order
- Add-on attach rate

Secondary:

- Cart expansion rate after first item
- Share of orders with two or more categories
- Conversion rate and checkout completion time
- Recommendation dismissal or “not relevant” rate

Guardrails:

- Cancellation and refund rate
- Delivery SLA or late-order rate
- Customer complaints about irrelevant promotions
- Contribution margin per order
- Repeat-order rate

Success should be defined before the experiment, for example: positive AOV and items/order lift with no material deterioration in conversion, delivery performance, complaints, or margin.

## 11. Analysis template after collection

For each response or interview, record response/participant ID, method, shopping mission, items, spend range, category count, expansion action, stopping reason, observed threshold effect, and verbatim/paraphrased evidence. Then report:

- sample size and recruitment mix;
- segment counts, clearly labelled as directional;
- repeated blockers with supporting participant IDs;
- contradictory evidence and outliers;
- what cannot be concluded from the sample;
- the revised solution and RICE decision.

Never report illustrative RICE values, target quotas, or hypotheses as observed user behaviour.
