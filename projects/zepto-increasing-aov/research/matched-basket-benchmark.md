# Project 4 — Matched-Basket Benchmark

**Status:** Public-evidence benchmark populated with uncontrolled same-cart snapshots; controlled city/pin/account capture remains pending.

## Public evidence captured so far

These are user-published comparisons, not controlled research. They are useful for identifying what must be measured in the live benchmark.

| Snapshot | Platforms | Publicly reported comparison | What it suggests | Limitation |
|---|---|---|---|---|
| PB01 | Zepto, Instamart, Blinkit | A public same-grocery comparison reported approximately: Zepto product total ₹134, fees ₹0, payable ₹134; Instamart product total ₹153, fees ₹46, payable about ₹199; Blinkit product total ₹157, fees ₹41, payable about ₹198. | Fees can reverse the item-price ranking; total payable value is the relevant customer comparison. | Single basket, unknown city/pin/account/time, and self-reported figures. [Source](https://www.linkedin.com/posts/tusharjejani_same-cart-65-difference-no-its-not-a-activity-7448010738838958080-E5tV) |
| PB02 | Zepto, Instamart, Blinkit | A public comparison of the same snack items reported approximately: Instamart ₹108 to ₹189, Blinkit ₹114 to ₹186, and Zepto ₹108 to ₹108 after fees/checkout. | Fee and checkout presentation may materially affect perceived value and switching. | Basket composition, location, account state, and timing are not independently verified. [Source](https://www.linkedin.com/posts/aditya-kondawar_just-see-the-pricing-difference-for-same-activity-7448993472491210-2eZI) |

### Safe interpretation

- These snapshots support the need to record product total, fees, discounts, thresholds, and final payable amount separately.
- They do not establish that Zepto is consistently cheapest or that fees caused a particular user decision.
- The second snapshot URL may change or become unavailable; preserve a screenshot or export if this evidence is used in a final presentation.

## Purpose

Compare the same shopping missions and comparable pack sizes across Zepto, Blinkit, Swiggy Instamart, and bbnow/BigBasket. The goal is to understand value, assortment, and basket-building mechanics, not to declare a winner from one location or one snapshot.

## Capture rules

1. Use one selected city and pin/location for all platforms.
2. Use the same date and approximate time window.
3. Use signed-out or equivalent account state where possible, and record the state used.
4. Match brand, quantity, pack size, and product condition.
5. Record out-of-stock results instead of substituting a different pack silently.
6. Capture fees, offers, ETA, and total payable value separately.
7. Record whether an item was searched, recommended, bundled, or manually added.
8. Do not generalise one location snapshot to national capability.

## Basket missions

| Basket ID | Mission | Example items | Why it matters |
|---|---|---|---|
| B01 | Urgent top-up | Milk, bread, eggs | Tests low-value convenience and fee pressure. |
| B02 | Meal completion | Rice/noodles, sauce, vegetables, protein | Tests complementary discovery. |
| B03 | Household replenishment | Detergent, dishwash, cleaning item, personal care | Tests planned recurring demand and pack economics. |
| B04 | Weekly stock-up | Staples, dairy, snacks, household, personal care | Tests breadth, basket value, and planned-shopping support. |
| B05 | Occasion/event | Beverages, snacks, ice, bakery or party need | Tests event-led cross-category expansion. |

## Capture sheet

| Basket ID | Platform | City/pin | Account state | Product | Brand | Pack size | Listed price | Discount | Delivery fee | Other fees | Minimum/threshold | ETA | Total payable | Stock status | Discovery path | Notes/source URL |
|---|---|---|---|---|---|---:|---:|---:|---:|---:|---:|---|---:|---|---|---|
| B01 | Zepto |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| B01 | Blinkit |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| B01 | Instamart |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| B01 | bbnow |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

Repeat the four platform rows for baskets B02–B05.

## Derived comparisons

| Metric | Calculation | Interpretation |
|---|---|---|
| Matched basket product total | Sum of matched product prices | Compares item pricing before fulfilment costs. |
| Total delivered basket | Product total + all applicable fees − discounts | Compares customer-paid value. |
| Unit-price index | Price ÷ comparable quantity | Tests pack economics. |
| Fee burden | Fees ÷ product total | Tests whether small baskets are penalised. |
| Threshold gap | Minimum/threshold − current basket value | Shows how much additional spend is required. |
| Discovery burden | Search steps or clicks to first relevant result | Public-surface usability signal; not a customer outcome. |
| Add-on exposure | Number and type of relevant additions shown | Product mechanism signal; not proof of conversion. |

## Interpretation rules

- A cheaper product total can still produce a more expensive delivered basket.
- A lower fee can be offset by a weaker pack size or narrower assortment.
- A higher catalogue count does not prove better basket completion.
- A threshold-driven addition is not automatically valuable incremental demand.
- One city, account state, or time snapshot cannot establish national competitive advantage.
