# Nykaa UX — one consolidation file

Airtribe assignment. Written in plain language.

**Read the five persona files first, then this page.**

| Persona | File |
|---------|------|
| Careful buyer (moisturizer, ≤₹800) | [persona-careful-buyer.md](./persona-careful-buyer.md) |
| Gift giver (₹2K–₹5K set) | [persona-gift-giver.md](./persona-gift-giver.md) |
| Beauty beginner (first lipstick) | [persona-beauty-beginner.md](./persona-beauty-beginner.md) |
| Loyal replenisher (reorder) | [persona-loyal-replenisher.md](./persona-loyal-replenisher.md) |
| Window shopper (just browsing) | [persona-window-shopper.md](./persona-window-shopper.md) |

**Airtribe submit file:** [../submission.md](../submission.md)

---

## 1. What we did

We used Nykaa **desktop website**, logged in, 4 Sep 2026. We also had an earlier **phone-web** visit as a guest (filters + add to bag).

We used a simple funnel:

**Find → Compare → Trust → Bag → Pay → Come back**

---

## 2. Honest answer: checkout, buy, reorder

| Question | Answer |
|----------|--------|
| Did we think about **buy / bag / pay / reorder**? | **Yes.** The test plan includes them. Replenish scenario is specifically **reorder**. |
| Did we **see a real checkout** (address, UPI, COD)? | **No.** Every time we opened the bag link, the page was blank (`(null)`). Earlier phone run showed a timeout message. |
| Did we **place an order**? | **No.** We stopped before payment on purpose anyway — but we never reached that screen. |
| Did we **add to bag**? | **Yes on phone** (toast). **Not confirmed on desktop.** |
| Did we **reorder**? | We **tried**. Logged in, went toward Orders. We did **not** get a Reorder button. We landed on **1,773 serums** instead. Maybe this account has no old orders — still, home had no “Buy again”. |

So: **buy and reorder were in the plan. Checkout was not observed.** Do not write fake checkout notes.

---

## 3. Same site, five jobs

| Persona | Find | Compare | Trust | Bag / Pay | Come back |
|---------|------|---------|-------|-----------|-----------|
| Careful buyer | Weak — 696 results + ₹3565 ad | Desktop filters exist | Strong badges | Not seen | — |
| Gift giver | Better — 91 gift sets | “Most Gifted” helps | Gift photos | Not seen | — |
| Beauty beginner | OK — 108 lipsticks | 24 shades, little help | Popularity | Not seen | — |
| Replenisher | Weak — treated like a new shopper | Category of 1773 | — | Not seen | **Reorder missing** |
| Window shopper | Strong — banners, brands, offers | Easy to wander | — | Not her goal | Home is made for her |

---

## 4. What went well (keep it)

- Stars, review counts, “NORMAL TO DRY”, “MOST GIFTED”.
- Gift search feels like a **small shop**.
- Desktop left-side filters (when logged in) — nicer than the phone **login popup** on Filter.
- Home is lively for someone who is **only browsing**.

---

## 5. What went poorly (fix these)

1. **Specific need (dry + sensitive + cheap)** still gets a **warehouse + ads**.
2. **Phone guest** cannot filter until login.
3. **Repeat buyer** is not given a short path.
4. **First lipstick** = many shades, little guidance.
5. **Bag page failed** in our test — if real users see this, it is a big deal. We must **click bag ourselves** once to confirm.

---

## 6. What I would ship first (class recommendation)

1. **After a “skin problem” search:** three simple chips — skin type, concern, budget — so 696 becomes ~40.
2. **If logged in:** a **Buy again** row on home (for Meera). Do not make her search.
3. **On phone:** let people **filter without login**. Ask for login at bag or wishlist.
4. **Ads:** keep them, but don’t put a ₹3565 ad on top of a cheap-skin query.

I would **not** build a chatbot first. Filters already exist. We need to **use** them at the right moment.

---

## 7. One line per persona

- **Priya:** “I told you my skin and budget. You showed me 696 things and a luxury ad.”
- **Rahul:** “Gift search actually felt like gifts.”
- **Ananya:** “Everyone loves this lipstick. I still don’t know my shade.”
- **Meera:** “You know my name. You don’t know my last order.”
- **Kavya:** “Pretty home. Very shouty. I’m not buying today and that’s OK.”
