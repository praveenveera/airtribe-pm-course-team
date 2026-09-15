# UX Analysis

Evidence: desktop logged-in journeys (2026-09-04) in `output/journey-*.json` plus earlier guest mobile session. Catalog: [screenshot-catalog.md](./screenshot-catalog.md).

## Executive summary

Nykaa’s PLP is strong on **trust signals** (ratings, concern badges, MOST GIFTED / MOST REORDERED). The gap is **job-specific narrowing**. Logged-in desktop still shows **696** results and a **₹3565 AD** for a dry/sensitive ≤₹800 job, while a gift-set query returns **91** curated sets. A replenisher never hit Orders. Cart/checkout were not rendered in automation — exclude from UX claims.

---

## 1. Product snapshot

| Dimension | Analysis |
|-----------|----------|
| **Product** | Nykaa — Indian beauty, wellness, and fashion e-commerce |
| **User (this journey)** | Skincare shopper with dry/sensitive skin, budget ≤ ₹800, moderate category knowledge |
| **Job-to-be-done** | Find a trustworthy moisturizer that fits skin type and budget without buying the wrong product |
| **Business model** | Product margin, brand partnerships, ads/sponsored placement, promotions driving conversion |

---

## 2. Journey summary

Starting from the Nykaa home screen, I used search for "moisturizer dry sensitive skin" and received **695 results**. I opened filters but hit a **login/signup modal** before applying price or skin-type constraints. Returning to the listing, I evaluated products using on-card signals: star ratings (59K–137K reviews), badges (BESTSELLER, NORMAL TO DRY SKIN), and layered pricing (MRP, discount, "Get it for" offer price). I added **Dot & Key Hyaluronic + Ceramide Barrier Repair** (₹336, offer ₹286) to bag directly from the listing via **Add to Bag**, confirmed by a toast notification.

---

## 3. UX strengths

### Strength 1: Rich product cards on search results

- **What worked:** Each card shows image, brand, price/discount, offer price, rating, review count, and contextual badges (BESTSELLER, MOST REORDERED, skin-type callouts).
- **Evidence:** Step 2/4 — Dot & Key card shows "NORMAL TO DRY Skin", 4.5★, 137,088 reviews, ₹395 → ₹336 (`02-search.png`).
- **User impact:** Reduces need to open PDP for initial trust and price comparison — speeds shortlisting.

### Strength 2: Inline Add to Bag from listing

- **What worked:** One-tap add from PLP with immediate toast feedback ("Product added to bag" + View bag).
- **Evidence:** Step 7 — `07-cart.png` shows toast; bag icon updated to 4 items.
- **User impact:** Shortens path to conversion for confident buyers; supports mobile-first quick commerce behavior.

### Strength 3: Deep filter taxonomy for beauty

- **What worked:** Filter drawer exposes beauty-specific dimensions — Skin type, Concern, Ingredient, Benefits — not just generic e-commerce filters.
- **Evidence:** Step 4 — `04-plp.png` shows Brand, Price, Category, Discount, Skin type, Concern, Preference, Benefits, Ingredient.
- **User impact:** When usable, filters align with how skincare buyers actually decide — high product–market fit in taxonomy design.

---

## 4. UX gaps and friction

| Type | Where | What happened | User impact |
|------|-------|---------------|-------------|
| **Confusing** | Filters | Login/signup modal appeared over filter panel | Breaks narrowing flow; unclear if filters require account |
| **Slow** | Filters | ~63s spent in filter step with interruption | Delay before returning to shoppable state |
| **Frustrating** | Search results | 695 unfiltered results for a specific need | Decision paralysis; higher wrong-product risk for sensitive skin |
| **Confusing** | Ranking | Sponsored Forest Essentials set (₹3565) near budget-friendly options | Weak relevance to stated goal; ad placement hurts trust |
| **Frustrating** | PDP path | Separate PDP not reached in session; variant products show "View Sizes" | Users needing ingredient lists may still must open PDP — inconsistent depth |

---

## 5. Layer-by-layer analysis

### Onboarding & home

- Clean mobile layout: search bar ("Explore our Beauty Collection"), category grid including **Face Moisturizer** shortcut, promotional carousel.
- **Smooth:** Clear entry points for browse vs search.
- **Confusing:** Heavy promotional density (festive banners) may distract from goal-directed shopping.

### Discovery & search

- Search executed successfully; query preserved in header with result count.
- **Smooth:** Fast path from intent to products.
- **Confusing:** 695 results without auto-narrowing by concern keywords ("dry", "sensitive") in query.

### Product listing (PLP)

- Two-column grid; quick filter chips (Price Drop, Bestseller, Most Gifted); Sort + Filter sticky bar.
- **Smooth:** Social proof and deals visible at glance.
- **Confusing:** High result count + sponsored placement competes with relevance.

### Product detail (PDP)

- Not fully exercised — purchase completed from PLP.
- **Gap:** Sensitive-skin buyers often need ingredients/allergen info typically on PDP; inline cards alone may be insufficient for high-stakes purchases.

### Trust & decision support

- Review counts and badges help; "NORMAL TO DRY Skin" badge on Dot & Key directly supports JTBD.
- **Gap:** No visible "sensitive skin" or dermatologist-tested filter applied in session.

### Cart

- Toast confirmation is lightweight and non-blocking.
- **Smooth:** Good micro-interaction design.

---

## 6. Competitive context (brief)

| Dimension | Nykaa | Typical alternative (Purplle / Amazon Beauty) |
|-----------|-------|--------------------------------------------------|
| Beauty-specific filters | Strong taxonomy (skin type, concern) | Varies; often weaker on Amazon |
| Social proof on PLP | Very strong (100K+ review counts) | Comparable on major SKUs |
| Login friction mid-journey | Observed on filter | Often allows guest browse/filter |
| Inline add from search | Yes | Increasingly common |

---

## 7. Metrics (if I owned this journey)

| Metric | Why |
|--------|-----|
| **Search → add-to-bag rate** | Core conversion for goal-directed skincare searches |
| **Filter apply rate** | Are beauty filters actually used or abandoned? |
| **Login modal show rate on filter** | Quantify interruption friction |
| **Time to first add-to-bag** | Efficiency of discovery UX |
| **Return rate (skincare/concern SKUs)** | Proxy for wrong-product selection |
| **Sponsored click/share on concern searches** | Ad relevance quality |

---

## 8. Multi-persona (desktop, logged-in)

| Persona | What worked | What broke the job |
|---------|-------------|-------------------|
| Careful buyer | Sidebar filters; Dot & Key badge + 137K reviews | 696 results; Forest Essentials ₹3565 AD |
| Gift giver | 91 results; MOST GIFTED; set photography | Mix includes ₹1557 (below ₹2K band) and ₹3650 AD |
| Beauty beginner | 108 results; 24–25 shades listed; huge review counts | No shade guidance — popularity ≠ fit |
| Loyal replenisher | Logged-in header (Praveen) | No Reorder; 1,773-SKU serum category + ingredient merch |

## 9. Methodology note

- **Desktop:** Playwright Desktop Chrome 1440×900, saved login, four scenarios.
- **Mobile (earlier):** guest session — filter login modal + ATC toast.
- **Not observed:** real cart line items, address, payment.
- **Manual app:** not completed — optional in journey-observations.md.
