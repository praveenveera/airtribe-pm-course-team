# Journey Observations

Evidence from Playwright **desktop** (logged-in, 2026-09-04 ~15:18 IST) plus earlier **mobile web** guest session.

## Session metadata

| Field | Notes |
|-------|-------|
| Date / time | 2026-09-04; desktop ~15:18–15:20 IST |
| Platform (automated) | Nykaa **desktop web** — Playwright Desktop Chrome 1440×900 |
| Platform (earlier) | Mobile web guest (iPhone 13 viewport) — ATC toast + filter login |
| Platform (manual app) | *Not done — optional below* |
| Goals | Four personas — see [personas.md](./personas.md) |
| Completed purchase? | No — bag/checkout did not render |
| Login | Saved session (header showed Praveen) |

**Logs:** `output/journey-skincare-budget.json`, `journey-gift-luxury.json`, `journey-makeup-beginner.json`, `journey-replenishment.json`

---

## Desktop logged-in runs (2026-09-04)

Script note: desktop has **no Filter button** — filters are a left rail. "Filter not found" is automation, not missing taxonomy. Add-to-bag on desktop PLP did not confirm (likely hover/PDP). `/shoppingbag/` captured `(null)` on all four — **Cart/Checkout untested**.

### Careful buyer — `skincare-budget`

- Search UI: "moisturizer dry sensitive skin" → **Showing 20 of 696 results**.
- Position 1: Forest Essentials ritual **₹3565 AD**. Position 2: Dot & Key **₹336**, NORMAL TO DRY, 137K reviews.
- Sidebar: Price, Skin Type, Concern visible while logged in (unlike mobile guest login sheet).

### Gift giver — `gift-luxury`

- Search: "luxury skincare gift set" → **20 of 91 results**.
- Sol de Janeiro Bom Dia Jet Set ₹3650 AD + BESTSELLER + MOST GIFTED; Laneige Icons To Go ₹1960; Kimirica ₹1557 MOST GIFTED.

### Beauty beginner — `makeup-beginner`

- Search: "lipstick everyday wear" → **20 of 108 results**.
- Daily Life Forever52 ₹439 AD, 25 shades; MARS ₹189, 24 shades, 36K reviews, MOST REORDERED; Insight ₹295, 537K reviews, 24 shades.
- No shade quiz / undertone helper on PLP.

### Loyal replenisher — `replenishment`

- `/my/orders` did not show order history / Reorder.
- Fallback: Skin → Serums & Essence **(1773)** + "Shop by Ingredient" merchandising — discovery tax.

---

## Mobile guest journey (earlier same day)

**Log reference:** [output/journey-log.json](../output/journey-log.json)
**Screenshots:** [screenshots/web/](../screenshots/web/)

---

## Automated mobile-web journey

| Step | What happened | Smooth | Confusing | Slow | Frustrating | Notes |
|------|---------------|:------:|:---------:|:----:|:-----------:|-------|
| 1. Open home | Loaded homepage with category grid, search bar, festive banners | ☑ | ☑ | ☐ | ☐ | 3.3s load. Promotions + category tiles (Face Moisturizer shortcut visible). See `01-home.png` |
| 2. Search entry | Direct URL search (search input not exposed in automation DOM) | ☑ | ☑ | ☐ | ☐ | 695 results for "moisturizer dry sensitive skin". See `02-search.png` |
| 3. Filters / sort | Opened filter panel; login modal interrupted flow | ☐ | ☑ | ☑ | ☑ | **63s step** — login/signup sheet appeared over filters. Price/skin filters available but not applied. See `03-filters.png` |
| 4. Product listing (PLP) | Grid with ratings, prices, Add to Bag on cards | ☑ | ☑ | ☐ | ☐ | 695 results — high choice overload. Quick chips: Price Drop, Bestseller, Most Gifted. See `04-plp.png` |
| 5. Product detail (PDP) | Did not navigate to separate PDP in automation | ☐ | ☐ | ☐ | ☑ | Script could not click PDP link; **however PLP supports Add to Bag inline** — see step 7 |
| 6. Reviews section | Stayed on PLP; reviews visible on product cards (59K–137K counts) | ☑ | ☐ | ☐ | ☐ | Star ratings + review counts on cards reduce need to open PDP for basic trust |
| 7. Add to cart | Added Dot & Key moisturizer from PLP; toast "Product added to bag" | ☑ | ☐ | ☐ | ☐ | Bag badge showed 4 items. See `07-cart.png` |

---

## Moment highlights (automated session)

### Smoothest moment

> **Add to bag from search results.** Dot & Key Hyaluronic + Ceramide moisturizer (₹336, 15% off, "Get it for ₹286") could be added directly from the listing with a single tap. Toast confirmation ("Product added to bag" + View bag) gave immediate feedback without forcing navigation to a separate PDP.

### Most confusing moment

> **Filter flow interrupted by login modal.** Opening filters surfaced a "Login or Signup" sheet ("Get started & grab best offers!") over the filter panel. For a goal-driven shopper trying to narrow 695 results by price (≤₹800) or skin type, this breaks momentum and adds friction before any filter is applied.

### Slowest moment

> **Filter step (~63 seconds).** Time spent dismissing overlays, opening filter drawer, and handling login interruption before returning to results without confirmed price filter applied.

### Most frustrating moment

> **695 results with no filter applied.** Search returned a very large set. Without effective price or "dry/sensitive skin" filters applied, the user must rely on scrolling and heuristic tags (BESTSELLER, NORMAL TO DRY SKIN badge) rather than structured narrowing — undermining confidence for a sensitive-skin purchase.

---

## Screenshots

| Screenshot | Step | What it shows |
|------------|------|---------------|
| `screenshots/web/01-home.png` | Home | Category grid, search, promotions, bottom nav |
| `screenshots/web/02-search.png` | Search / PLP | 695 results, product cards, Sort/Filter bar |
| `screenshots/web/03-filters.png` | Filters | Login modal over filter panel |
| `screenshots/web/04-plp.png` | Filters | Brand/Price/Category/Skin type/Concern filters |
| `screenshots/web/06-reviews.png` | Reviews | PLP with ratings on cards |
| `screenshots/web/07-cart.png` | Add to bag | Toast confirmation, bag count |

---

## Manual app session (optional — add your notes)

*Complete this section if you also explore the native Nykaa app. Compare differences vs mobile web.*

| Step | App-specific notes | Smooth | Confusing | Slow | Frustrating |
|------|-------------------|:------:|:---------:|:----:|:-----------:|
| 1. Open app | | ☐ | ☐ | ☐ | ☐ |
| 2. Home / entry | | ☐ | ☐ | ☐ | ☐ |
| 3. Search | | ☐ | ☐ | ☐ | ☐ |
| 4. Filters | | ☐ | ☐ | ☐ | ☐ |
| 5. PLP | | ☐ | ☐ | ☐ | ☐ |
| 6. PDP | | ☐ | ☐ | ☐ | ☐ |
| 7. Reviews | | ☐ | ☐ | ☐ | ☐ |
| 8. Add to cart | | ☐ | ☐ | ☐ | ☐ |

---

## Raw notes

- Search returned **695 results** — decision overload for a specific need (dry, sensitive, ≤₹800).
- **Dot & Key** product surfaced with relevant badge ("NORMAL TO DRY Skin"), strong social proof (137K reviews), and price within budget — good match.
- **Forest Essentials** ritual set at ₹3565 appeared as top/sponsored result — poor fit for budget goal; highlights ranking/ad relevance issue.
- Filter panel exposes useful taxonomies: **Skin type**, **Concern**, **Ingredient** — but login gate and complexity may deter use.
- PLP **Add to Bag** vs **View Sizes** — good pattern when variants exist (Dot & Key has 2 sizes).
