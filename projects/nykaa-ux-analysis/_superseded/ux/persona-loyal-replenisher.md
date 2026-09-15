# User experience — Loyal replenisher (Meera)

**Who:** Meera, 35. She already knows her product. She just ran out.

**Job (simple):** “Put my usual serum in the bag in two taps. Don’t make me search again.”

**Scenario we ran:** `replenishment`
**Platform:** Desktop site, **logged in as Praveen** (4 Sep 2026).

**Screenshot:** `screenshots/bad/replenishment-category-not-reorder.png`

---

## What she did (what we actually ran)

1. Home still looked like a **sale magazine** (banners, QR for the app). No big “Buy again” block.
2. Script opened **My Orders**. We did **not** see a clear order list or **Reorder** button.
3. Fallback: a **Serums** category page with **1,773** products and “Shop by ingredient”.
4. That is discovery again — the opposite of replenish.
5. Bag / pay not seen.

---

## How it felt

| Feeling | What happened |
|---------|----------------|
| **Smooth** | Header showed the logged-in name. So Nykaa *knows* who we are. |
| **Confusing** | If you know me, why send me to 1,773 serums? |
| **Slow** | Extra steps vs “last order → buy again”. |
| **Frustrating** | Repeat buyer pays a **search tax**. |

---

## Buy / cart / checkout / reorder — did we test this?

| Step | Did we try? | What we saw |
|------|-------------|-------------|
| **Reorder** | **Yes — this was the whole point.** | Orders page did not show history / Reorder in this run. |
| **Buy** | Tried after falling into serums. | No confirmed add. |
| **Cart / checkout** | Opened bag URL. | Blank. So we also did **not** test a fast logged-in checkout (saved address, UPI). |

**Simple takeaway:** We **did consider reorder**. The site, in this test, did **not** give us a reorder shortcut. Checkout for a repeat buyer is still **unknown**.

**Caveat:** This login may have **no past orders**. If the account is new, “no Reorder” is expected. Still, **home did not offer Buy again** even while logged in.

---

## What this means (PM class)

Login was used to show a name, not to skip shopping.

**One number to watch:** time from open-app to reorder, and how often logged-in people use Orders vs Search.
