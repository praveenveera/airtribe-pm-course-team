# Basket Stories — Pilot Questionnaire V2

## Purpose

Understand how a recent grocery or household basket started, expanded, and stopped so the team can identify responsible ways for Zepto to increase Average Order Value (AOV). This is an independent academic study and is not affiliated with Zepto or another retailer.

**Pilot languages:** English, Hindi, and Telugu. All languages store the same stable response codes. Hindi and Telugu wording must receive a fluent-speaker review before participant distribution.

**Expected completion:** approximately 4–5 minutes. The exact number of questions depends on the respondent's answers.

## Evidence rules

- Anchor answers to one purchase made within the last 30 days.
- Store stable response codes separately from participant-facing labels.
- Treat recent Zepto purchases as direct Zepto AOV evidence.
- Treat other channels as evidence about alternatives and channel choice, not measured Zepto behaviour.
- Keep follow-up contact in a separate restricted sheet linked by response ID.
- Do not call survey responses interviews. Follow-up conversations are separate qualitative evidence.

## Welcome and consent

**Consent checkbox**

I agree to take part in this academic study. My survey answers will be analysed without my name. If I volunteer contact details for a follow-up conversation, those details will be stored separately from my survey answers.

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

### Q8 — Basket-building behaviour

**After choosing the first item or need, what happened? Select all that apply.**

- Added items already planned
- Browsed and added unplanned items
- Searched for items related to the first need
- Added items to reach an offer or threshold
- Removed one or more items before paying
- Checked out without adding anything else
- Do not remember

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

Options adapt to the selected method. They cover value, pack size, availability, freshness or quality, proximity, habit, delivery reliability, convenience, and not needing fast delivery.

**Q12B. Did you consider Zepto for this purchase?**

- Yes
- No
- Not sure

Do not ask every non-Zepto respondent what Zepto should build. Use follow-up conversations to probe this after the real purchase decision is understood.

## Follow-up

**Would you be open to a 15-minute follow-up conversation about this purchase?**

- Yes
- No

If **Yes**, require a phone number or email. Store it in the restricted `FollowUp_V2` sheet, not in the research response or raw JSON.

## Analysis boundary

The questionnaire measures self-reported behaviour and cannot prove that a proposed feature will increase AOV. After the pilot, reconcile each submitted path against the response sheet, then use moderated follow-up conversations to probe sequence, motivation, trade-offs, and exact language.
