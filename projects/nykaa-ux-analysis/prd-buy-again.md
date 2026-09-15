# Mini-PRD — "Buy Again" (replenishment surface)

One-page spec for the top recommendation from [nykaa-core-teardown.md](./nykaa-core-teardown.md). Written simple.

---

## The problem

A repeat Nykaa shopper who has run out of a staple — sunscreen, cleanser, shampoo, a favourite lipstick — has to search and decide from scratch every time. There is no "buy again", no reorder, no subscribe. The logged-in home page is identical to the logged-out one.

This is the highest-value beauty behaviour (staples are bought on a predictable cycle) and it is exactly what quick-commerce (Blinkit, Zepto) and brand D2C subscriptions are built to take.

**Evidence (desktop web, 4 Sep 2026):** checked on a Nykaa account with several years of order history — logged-in home = logged-out home, no personalised row; the Orders page has the full history but no reorder action; the same staples recur across many orders; search does not surface the shopper's repeat brands. A sunscreen PDP with 161k ratings has no subscribe or reminder option.

---

## Who it's for

| | |
|---|---|
| **User** | Anyone with 2+ past Nykaa orders (the "known buyer"). |
| **Job** | "Put my usual thing back in the bag in two taps — don't make me shop again." |
| **Not for** | First-time visitors and pure browsers — they keep today's discovery home. |

---

## Goal & success metric

**Primary:** repeat purchase rate (orders per active customer per quarter).

**Supporting:**
- % of replenishable-SKU revenue that comes through Buy Again vs search
- Time from app/site open to add-to-bag, for known buyers
- 90-day second-purchase rate for new cohorts

**Guardrail:** no drop in new-user conversion (the discovery home still leads for them); no rise in returns.

---

## Solution — v1 (deliberately small)

Three placements, one data source (order history). No new ML required for v1.

1. **"Buy Again" row on the logged-in home page**, above the promo banners.
   - Shows the last ~10 distinct products the user bought, most recent first.
   - Each card: photo, name, the exact variant/shade they bought, current price, one **Add to Bag** button.
   - If a product is out of stock: show "Notify me". If the price changed: show old → new.

2. **"Buy Again" tab in My Account → Orders.**
   - Full reorderable list. Filter by category. "Reorder" on a past order adds every still-available line item to the bag in one tap.

3. **A "You bought this on 12 Jun — running low?" nudge**, shown on the home row and as one opt-in push/email per product per cycle.
   - v1 timing rule: category-level average repurchase interval (e.g. sunscreen ≈ 8 weeks) + the user's own gap if they've bought it more than once.

---

## Where AI helps later (v2+, not v1)

| Job | v1 (rule) | v2 (model) |
|-----|-----------|------------|
| Order the Buy Again row | Most recent first | Rank by predicted repurchase probability this week |
| "Running low" timing | Category average interval | Per-user, per-product run-out prediction from purchase cadence + pack size |
| What to suggest next | — | "You have a cleanser and a moisturizer — here's the serum that pairs with them" |

Rule first. Only add the model once the rule is live and we can measure lift against it.

---

## In / out of scope for v1

**In:** home row, Orders reorder, basic low-stock/price-change states, one opt-in reminder.

**Out:** subscribe-and-save billing, predictive per-user timing model, routine/regimen builder, cross-sell, anything for logged-out users.

---

## Rollout

1. Ship behind a flag to 5% of users with 3+ orders.
2. A/B: Buy Again home row vs current home, for that segment only.
3. Read repeat rate and time-to-add-to-bag at 4 and 8 weeks.
4. If repeat rate is up with no conversion or returns hit, roll to all known buyers, then start the v2 timing model.

---

## Risks

| Risk | Mitigation |
|------|------------|
| Pushes the promo/ad real estate down → short-term revenue dip | Row is only for logged-in users with history; keep it compact (one scroll row). |
| Reminder feels like spam | Opt-in, one per product per cycle, easy off. |
| Cannibalises full-price discovery browsing | Measure — the thesis is these are *different* trips (task vs browse), not a trade. |
| Out-of-stock staples make the row look broken | "Notify me" + surface the closest in-stock alternative. |

---

## What we are NOT building

An AI chat assistant. The shopper already knows the product — they just need it back in the bag. A row and a button beat a conversation here.
