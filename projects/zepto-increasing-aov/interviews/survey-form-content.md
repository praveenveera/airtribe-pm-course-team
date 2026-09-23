# Basket Stories — Pilot Questionnaire V2.5

## Purpose

Understand how a recent grocery or household basket started, expanded, and stopped so the team can identify responsible ways for Zepto to increase Average Order Value (AOV). This is an independent academic study and is not affiliated with Zepto or another retailer.

**Pilot languages:** English, Hindi, and Telugu. All languages store the same stable response codes. Hindi and Telugu wording must receive a fluent-speaker review before participant distribution.

**Expected completion:** approximately 5–6 minutes. The exact number of questions depends on the respondent's answers.

**V2.2 changes:** grouped BigBasket/BB Now and Amazon Fresh with the planned-value alternative-reason set instead of the delivery-speed set (they are not 10-minute delivery apps); carried the Q3 entry-need answer forward into Q7 instead of asking the same category list twice; added Q12C (non-Zepto, optional) and Q13 (all eligible respondents) below.

**V2.3 changes:** added a conditional "why did you stop adding items" question for the one segment the instrument previously had zero explanatory data for — respondents who checked out immediately and did not report considering anything else (see Q8A below). Added Q14 (channel mix), Q15 (city tier), Q16 (age bracket), and Q17 (life stage) as a final "about you" block — all single-select with a built-in "Prefer not to say," asked to every eligible respondent regardless of channel. These four are broad, bucketed, and self-reported; none are identifying on their own, consistent with the anonymised-analysis consent language above. This is the last planned round of additions before piloting — further changes should wait for pilot data.

**V2.3 logic fix (same version, no new columns):** Q3 (`firstNeed`), Q8 (`expansionPattern`), Q8A (`basketStopWhy`), and Q13 (`receptivity`) were all written from an "emergent, one-item-triggered basket" narrative. That framing does not fit a planned mission (`stock_up`, `regular_reorder`, `meal_or_event`) — there is no single item that "started" a pre-planned trip. Fixed two ways:
- **Q3 is now skipped entirely** for planned missions. `firstNeed` is legitimately blank in the response sheet for these rows — this is expected, not a data-quality gap, and `apps-script.gs` now enforces this both ways (rejects a missing `firstNeed` for non-planned missions, and rejects a populated `firstNeed` for planned ones).
- **Q8, Q8A, and Q13 were reworded to be narrative-neutral** ("While building this basket, what happened?" instead of "After choosing the first item..."; "Searched for related items" instead of "...related to the first need"; etc.) rather than forked into two parallel question sets. This keeps one set of response codes and avoids doubling the Hindi/Telugu translation surface.

**V2.4 changes:** removed the follow-up-interview opt-in and contact capture from the survey entirely — the team does not expect to have time to run moderated follow-up conversations, so the instrument no longer asks for or stores contact details. `FollowUp_V2` is retired; there is no restricted contact sheet anymore. The survey now ends at Q17 (life stage).

**V2.5 changes:** Q15 changed from a bucketed geography question (metro / other city / rural) to an open-text "Which city do you live in?" field. This was a deliberate call: the earlier bucket was designed for anonymity and a rough metro-vs-not skew check, but the team wants exact city data for primary-research purposes. Note the sequencing decision behind this — the dashboard's "Bengaluru is the learning lab" call came from secondary research; this field was deliberately kept neutral (a plain open city field, not a Bengaluru-vs-other split) so primary research can surface its own geographic patterns rather than being shaped by an unvalidated secondary-research assumption. The field is optional, free text, and — like `altZeptoGap` — not required to submit. The column is renamed `city` in the response sheet (was `cityTier`).

## Evidence rules

- Anchor answers to one purchase made within the last 30 days.
- Store stable response codes separately from participant-facing labels.
- Treat recent Zepto purchases as direct Zepto AOV evidence.
- Treat other channels as evidence about alternatives and channel choice, not measured Zepto behaviour.
- Do not call survey responses interviews.

## Welcome and consent

**Consent checkbox**

I agree to take part in this academic study. My survey answers will be analysed without my name.

## Core questionnaire

### Q1 — Recent channel

**Think about your most recent grocery or household purchase in the last 30 days. Where did you buy it?**

- Zepto
- Blinkit
- Swiggy Instamart
- BigBasket or BB Now
- Amazon Fresh
- Local grocery or kirana store
- Dmart or another supermarket
- Local market
- Milk or grocery subscription
- Planned bulk purchase from another source
- Other
- I have not made this type of purchase in the last 30 days

The final option ends the survey after recording an ineligible response.

### Q2 — Shopping mission

**Which description best matches why you made this purchase?**

- Replace something that ran out
- Get an urgent item quickly
- Complete a planned top-up
- Stock up for the week or month
- Buy for a meal, snack, event, or guests
- Repeat a regular order or subscription
- Browse or try something new
- Use an offer or discount
- Other

This replaces the overlapping order-shape, trigger, and purchase-goal questions.

### Q3 — Entry need

Skipped for planned missions (`stock_up`, `regular_reorder`, `meal_or_event`) — see the V2.3 logic-fix note above.

**Which type of item or need started the purchase?**

- Fresh fruits and vegetables
- Milk, dairy, bread, or eggs
- Staples, packaged food, or cooking essentials
- Snacks, sweets, or beverages
- Meat, seafood, or frozen food
- Freshly prepared food or café items, including Zepto Café
- Beauty, personal care, health, or pharmacy
- Household cleaning, home, or kitchen items
- Baby or pet products
- Electronics, mobiles, or accessories
- Fashion, toys, stationery, or lifestyle
- Other

### Q4 — Purchase context

**How many people were you shopping for?**

- Just me
- 2 people
- 3–4 people
- 5 or more people
- Prefer not to say

### Q5 — Basket size

**Approximately how many items did you buy?**

- 1
- 2–3
- 4–6
- 7–10
- More than 10
- Do not remember

### Q6 — Spend range

**Approximately how much did you spend?**

- Below Rs 200
- Rs 200–399
- Rs 400–699
- Rs 700–999
- Rs 1,000 or more
- Prefer not to say

### Q7 — Basket breadth

**Which categories did you buy? Select all that apply.**

- Fresh fruits and vegetables
- Milk, dairy, bread, or eggs
- Staples, packaged food, or cooking essentials
- Snacks, sweets, or beverages
- Meat, seafood, or frozen food
- Freshly prepared food or café items, including Zepto Café
- Beauty, personal care, health, or pharmacy
- Household cleaning, home, or kitchen items
- Baby or pet products
- Electronics, mobiles, or accessories
- Fashion, toys, stationery, or lifestyle
- Other

The Q3 entry-need answer is pre-selected here (unless it was "Other" or Q3 was skipped for a planned mission) so respondents confirm and extend it rather than re-picking it from an identical list.

### Q8 — Basket-building behaviour

**While building this basket, what happened? Select all that apply.**

- Added items already planned
- Browsed and added unplanned items
- Searched for related items
- Added items to reach an offer or threshold
- Removed one or more items before paying
- Checked out without adding anything else
- Do not remember

Wording is deliberately narrative-neutral (not "after choosing the first item") so it reads correctly for both an emergent, one-item-triggered purchase and a planned, list-driven one.

### Q8A — Basket-stop reason (conditional)

Shown only when Q8 includes "Checked out without adding anything else" **and** Q9 (below) is not answered "Yes". Without this branch, the survey had no explanatory data at all for the "urgent top-up" segment — the segment `research/analysis-and-recommendations.md` names as the most likely low-AOV opportunity — because that segment routinely answers "No" to Q9.

**What was the main reason you did not add anything more to this purchase?**

Same option list as Q9B (`stopReason`), reusing the existing response codes:

- The original need was already complete
- It felt too expensive
- I was controlling my total spend
- I prefer buying that item or quantity elsewhere
- The right product, brand, size, or quantity was unavailable
- I did not have time to browse
- The suggestions were not relevant
- I did not trust the quality or freshness
- I planned to buy it later
- Other

### Q9 — Missed expansion opportunity

**Did you consider another item but decide not to buy it?**

- Yes
- No
- Not sure

If **Yes**, ask:

**Q9A. Which category was that item in?** Use the Q3 category list.

**Q9B. What was the main reason you did not buy it?**

- The original need was already complete
- It felt too expensive
- I was controlling my total spend
- I prefer buying that item or quantity elsewhere
- The right product, brand, size, or quantity was unavailable
- I did not have time to browse
- The suggestions were not relevant
- I did not trust the quality or freshness
- I planned to buy it later
- Other

### Q10 — Threshold evidence

**During this purchase, did you notice a delivery fee, minimum-order rule, free-delivery threshold, coupon, or offer?**

- Yes
- No
- Not sure

If **Yes**, ask:

**Q10A. What did it lead you to do?**

- Add another useful item
- Choose a larger pack
- Add an item mainly to unlock the offer or threshold
- Pay the fee and continue
- Remove items or abandon the purchase
- Wait and combine it with a later purchase
- It did not change my basket
- Other

## Channel branch

### Recent Zepto purchase

**Q11A. What was the main reason you chose Zepto for this purchase?**

- Delivery speed
- Convenience
- Product availability
- Price or offer
- Familiar habit
- Confidence in delivery reliability
- Recommendation from someone
- Other

**Q12A. What happened just before you decided your basket was complete?**

Short open response. This asks for the real checkout decision rather than a hypothetical product idea.

### Recent non-Zepto purchase

**Q11B. What was the main reason this method fitted the purchase best?**

Options adapt to the selected method. Planned/value channels (supermarket, local market, kirana, bulk purchase, subscription, BigBasket/BB Now, Amazon Fresh) get value, pack-size, planning, and no-need-for-fast-delivery options. On-demand delivery channels (Blinkit, Instamart, other) get delivery-speed, price, availability, and habit options.

**Q12B. Did you consider Zepto for this purchase?**

- Yes
- No
- Not sure

Do not ask every non-Zepto respondent what Zepto should build. Use follow-up conversations to probe this after the real purchase decision is understood.

**Q12C. In one sentence, what would have needed to be true for you to use Zepto instead?** (non-Zepto respondents only, optional open response)

Mirrors Q12A for the non-Zepto branch so this segment — likely the larger group in a neutral survey — also produces verbatim qualitative evidence, instead of relying only on closed-choice answers and the small follow-up interview sample.

## Receptivity to relevant add-ons

**Q13. Imagine that right after you added an item, the app showed you 2–3 related items you might need, clearly priced. What would you most likely have done?** (all eligible respondents)

- Added at least one item
- Looked but did not add anything
- Ignored it
- Found it pushy or annoying
- Not sure

This directly tests the "need-complete add-on" hypothesis in `research/analysis-and-recommendations.md` (Solution A) across every respondent, rather than relying only on the small number of follow-up conversations. Self-reported intent, not observed behaviour — treat accordingly.

## About you and your shopping habits

Shown to every eligible respondent, immediately after Q13 and ending the survey. Framed explicitly as "not about this purchase" so respondents don't try to reconcile it with the single-purchase narrative above. All four are single-select with a built-in "Prefer not to say" (or equivalent), following the same convention as Q4 (`householdSize`) and Q6 (`spend`) — nothing here is free text, and nothing is truly skippable the way Q12C is, since choosing not to answer is itself one of the listed options.

**Q14. Aside from this purchase, where do you usually do your bigger, monthly, or bulk grocery shopping?**

- I do not do a separate bulk trip
- Same app as this purchase
- A different quick-commerce app
- A supermarket like Dmart or BigBasket
- A local kirana store or market
- A subscription service
- Not sure
- Other

Reveals whether a respondent's total grocery basket is split across channels — something no single-purchase question can show. Directly serves Solution B's validation target ("pack-size economics, price trust, assortment, trip planning") from `research/analysis-and-recommendations.md`.

**Q15. Which city do you live in?**

Optional open text response (field: `city`). Deliberately not a dropdown or a pre-set city list — this keeps the question neutral so whatever geographic pattern actually exists in the data can surface on its own, rather than the instrument only having eyes for the city the secondary-research dashboard happened to pick.

**Q16. Which age group do you fall into?**

- 18–24
- 25–34
- 35–44
- 45–54
- 55 or older
- Prefer not to say

**Q17. Which best describes your current life stage?**

- Student
- Working, living alone or with roommates
- Working, married or partnered, no children at home
- Family with children at home
- Retired or not currently working
- Prefer not to say

Q16–Q17 are a light demographic anchor for reporting only. They are deliberately not used as the primary segmentation — the behavioural segments (mission × channel × basket, see `research/analysis-and-recommendations.md` Section 4) remain the segmentation that drives product decisions, because behaviour predicts AOV better than demographics do for this problem.

Q17 is the last question in the survey.

## Analysis boundary

The questionnaire measures self-reported behaviour and cannot prove that a proposed feature will increase AOV. After the pilot, reconcile each submitted path against the response sheet. There is no follow-up-interview mechanism in this instrument — treat every finding as self-reported and directional only.
