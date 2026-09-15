# Buyer Insights Framework

Use this alongside UX observation — answers **why it matters for the business and the buyer**, not just whether a button looks right.

## Funnel stages

| Stage | Buyer question | Nykaa touchpoints | Example metrics |
|-------|----------------|-------------------|-----------------|
| **Discover** | Can I find options for my need? | Home, search, categories, ads | Search usage, category CTR |
| **Consider** | Which product fits me? | PLP, filters, badges, PDP | Filter apply rate, PDP views per session |
| **Trust** | Can I believe reviews/claims? | Ratings, reviews, Nykaa assurance, ingredients | Review read rate, return rate |
| **Cart** | Is the total fair and clear? | Bag, coupons, delivery ETA | Cart abandonment, coupon apply errors |
| **Checkout** | Will I get it on time, safely? | Address, payment, COD/UPI | Checkout completion, payment failure |
| **Retain** | Will I come back? | Orders, reorder, offers, Prive | Repeat purchase rate, NPS |

## Per-observation template

When you see something smooth, confusing, slow, or frustrating:

```markdown
### [Good / Bad] — <short title>

- **Persona:** careful-buyer | gift-giver | beauty-beginner | loyal-replenisher
- **Funnel stage:** Discover | Consider | Trust | Cart | Checkout | Retain
- **What happened:** (factual)
- **Buyer feeling:** confident | uncertain | annoyed | blocked
- **Business impact:** conversion | AOV | retention | returns | support tickets
- **Metric:** (one primary metric)
- **PM recommendation:** (one sentence)
- **Screenshot:** screenshots/good/... or screenshots/bad/...
```

## Persona × funnel heatmap (fill as you test)

Desktop logged-in 2026-09-04 + mobile guest (careful buyer filters/ATC). ✓ smooth · ✗ friction · — not tested

| | Discover | Consider | Trust | Cart | Checkout | Retain |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| Careful buyer | ✗ 696 results + ₹3565 AD | ✓ desktop filter rail / ✗ mobile login gate | ✓ badges + 137K reviews | — bag `(null)` | — | — |
| Gift giver | ✓ 91 gift-set results | ✓ MOST GIFTED / mix of ₹1.5K–₹3.6K | ✓ gift imagery + ratings | — | — | — |
| Beauty beginner | ✓ 108 lipsticks | ✗ 24–25 shades, no picker help | ✓ MOST REORDERED + review volume | — | — | — |
| Loyal replenisher | ✗ promo home, no Buy again | ✗ 1,773 serums category | — | — | — | ✗ no Orders/Reorder |
| Window shopper | ✓ loud home | ✓ wander | — | — | — | — |

Use ✓ smooth, ✗ friction, — not tested

## UX vs buyer insight (don't confuse)

| UX observation | Buyer / product insight |
|----------------|-------------------------|
| "Login modal on filter" | Guest buyers can't narrow 695 results → higher abandonment for concern-based skincare |
| "Toast on add to bag" | Buyer confidence to continue browsing → higher multi-item basket potential |
| "View Sizes vs Add to Bag" | Beginner persona needs shade help; wrong variant → return cost for Nykaa |
| "695 search results" | Platform optimizes for inventory exposure; buyer needs curation for high-stakes purchases |

## Questions for assignment depth

1. **Who pays** for this friction — buyer (time/risk) or Nykaa (conversion/returns)?
2. **Is this a product problem or a capability?** (e.g. "more filters" vs "guided journey for concern queries")
3. **What is the smallest fix** that moves the metric?
4. **What would you NOT build** and why?
