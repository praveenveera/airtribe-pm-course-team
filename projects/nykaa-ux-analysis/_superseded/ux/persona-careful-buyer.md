# User experience — Careful buyer (Priya)

**Who:** Priya, 28. Dry, sensitive skin. Does not want to waste money.

**Job (simple):** “I need a moisturizer that is safe for my skin and under ₹800.”

**Scenario we ran:** `skincare-budget`
**Platform:** Desktop site, logged in (4 Sep 2026). Also one earlier **phone-web** visit as a guest.

**Screenshots:** `screenshots/good/skincare-budget-02-search-plp.png`, `screenshots/bad/desktop-skincare-696-results-ad.png`, `screenshots/bad/login-modal-blocks-filters.png` (phone), `screenshots/good/add-to-bag-toast-confirmation.png` (phone)

---

## What she did

1. Opened Nykaa home (lots of sale banners).
2. Searched: **moisturizer dry sensitive skin**.
3. Saw **696** products. Page said “Showing 20 of 696”.
4. First card was an **ad**: Forest Essentials set at **₹3565** (way over budget).
5. Next card was a better fit: Dot & Key moisturizer **₹336**, badge “NORMAL TO DRY”, **137K** reviews.
6. On desktop, filters (Price, Skin type, Concern) sat on the **left side** — no extra “Filter” button.
7. We could **not** open a real bag or pay page (see below).

---

## How it felt

| Feeling | What happened |
|---------|----------------|
| **Smooth** | Product cards show stars, price, and skin-type badge. Easy to compare. |
| **Confusing** | 696 results for a very specific need. Why is a ₹3565 ad on top? |
| **Slow** | On phone (guest), opening filters took a long time because a **login popup** appeared. |
| **Frustrating** | Hard to feel sure without narrowing by price and “sensitive”. |

---

## Buy / cart / checkout / reorder — did we test this?

| Step | Did we try? | What we saw |
|------|-------------|-------------|
| **Buy (add to bag)** | Yes on **phone**. On desktop, the script could not confirm add-to-bag. | Phone: toast “Product added to bag”. Desktop: no toast. |
| **Cart** | Yes (we opened `/shoppingbag/`). | Blank page `(null)`. **Not a real cart.** |
| **Checkout / pay** | Planned. **Not seen.** | No address, no UPI/COD screen. We did **not** place an order. |
| **Reorder** | Not Priya’s job. See replenisher file. | — |

**Simple takeaway:** We saw **search and listing** well. We did **not** see a real **buy → bag → pay** path on desktop. Do not pretend we did.

---

## What this means (PM class)

Nykaa already *has* filters for skin type and price. The problem is not “add more filters”. The problem is: **the first screen still looks like a huge shop + ads**, even when the user typed a clear need.

**One number to watch:** people who search a skin problem → add to bag (and later, returns on those products).
