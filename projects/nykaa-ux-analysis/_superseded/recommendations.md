# PM Recommendations

Each recommendation links to friction observed in [journey-observations.md](./journey-observations.md) during the Nykaa mobile-web journey.

## Prioritization summary

| Priority | Recommendation | Problem | Metric to move | Effort |
|:--------:|----------------|---------|----------------|--------|
| **P0** | Guided concern + budget narrowing on skincare search | 696 unfiltered results (desktop, logged-in); mobile login interrupted filters | Search → add-to-bag rate; time-to-purchase | Medium |
| **P1** | Logged-in Buy again / Orders on home | Repeat buyers sent to 1,773-SKU category | Time-to-reorder; repeat purchase | Low |
| **P1** | Defer login gate until filter apply or checkout | Login modal over filter panel (mobile guest) | Filter apply rate; filter abandonment | Low |
| **P2** | Relevance ranking for concern queries (downrank poor-fit ads) | ₹3565 sponsored set above ₹336 fit | Click-to-relevant-PDP; return rate | Medium |

---

## Recommendation 1 (P0): Guided narrowing for skincare concern searches

### Problem

Search for "moisturizer dry sensitive skin" returned **695 results** without applied skin-type or price filters. For sensitive-skin purchases, overload increases wrong-product risk and abandonment.

**Evidence:** Steps 2–4 — `02-search.png`, filter step failed to apply price ≤ ₹800; user relied on badges and scrolling.

### Proposed solution

When query contains skincare **concern keywords** (dry, oily, sensitive, acne, etc.):

1. Show a **3-tap guided strip** above results: *Skin type → Concern → Budget*
2. Pre-select suggested filters (e.g. Dry + Sensitive + Under ₹800) with one-tap **Apply**
3. Display refined count ("Showing 42 products for dry, sensitive skin under ₹800")

Optional: lightweight quiz chip — "Not sure? Find my moisturizer" — 3 questions max.

### Why this first

Directly addresses the core JTBD failure mode (too many choices for a high-stakes purchase) and leverages Nykaa's existing filter taxonomy without requiring login.

### Success metric

- **Primary:** Search → add-to-bag conversion on concern queries (+X%)
- **Secondary:** Median time-to-first-add-to-bag (reduce)
- **Guardrail:** Filter apply rate increases without increasing return rate

### Trade-offs

- Adds UI above fold — may reduce promo visibility (product vs marketing tension)
- Engineering + taxonomy maintenance for keyword → filter mapping
- Power users may prefer manual filters — keep "Advanced filters" link

---

## Recommendation 2 (P1): Defer login until value is delivered

### Problem

Opening **Filters** triggered a **Login or Signup** modal ("Get started & grab best offers!") before any filter could be applied — breaking a goal-directed flow.

**Evidence:** Step 3 — `03-filters.png` login sheet over filter drawer; ~63s filter step duration.

### Proposed solution

- Allow **guest browse, search, and filter** without login
- Prompt login only at: (a) checkout, (b) wishlist save, or (c) personalized offer redemption — not at filter entry
- If login is required for offers, show **"Login to unlock extra 15% off"** as optional chip, not blocking modal

### Why this second

Low effort, high impact on friction observed in session. Login walls mid-funnel typically hurt conversion for first-time or casual shoppers.

### Success metric

- **Primary:** Filter apply rate (+X%)
- **Secondary:** Login modal dismiss rate (reduce involuntary dismiss)
- **Guardrail:** Guest checkout conversion maintained

### Trade-offs

- Fewer forced sign-ups short term — may reduce CRM list growth
- Mitigate with post-purchase account creation prompt

---

## Recommendation 3 (P2): Improve relevance ranking for concern-based searches

### Problem

**Forest Essentials Everyday Radiance Ritual (₹3565)** appeared prominently with **AD** sponsorship while the user's implied budget was ≤ ₹800. Dot & Key (better fit: dry skin badge, ₹336) required scanning past premium/sponsored options.

**Evidence:** `02-search.png` — sponsored luxury set vs budget-friendly Dot & Key in same viewport.

### Proposed solution

- For queries with **price signals** or applied budget filter, downrank or label sponsored items outside budget band
- Add **"Best match for your search"** module (1–3 SKUs) using concern + price + rating — editorially transparent, not pure ad slot
- Label ads clearly and separate **"Sponsored"** block below **"Top matches"**

### Success metric

- **Primary:** Click-through on top-3 organic/relevant results (+X%)
- **Secondary:** Skincare return rate (reduce wrong purchases)
- **Guardrail:** Ad revenue per search session — monitor, don't collapse

### Trade-offs

- Ad revenue vs relevance — requires product/commercial alignment
- Ranking complexity and explainability to brands

---

## What NOT to recommend

| Idea | Why not (for this journey) |
|------|----------------------------|
| AI chat shopping assistant | Overkill; deterministic guided filters solve the observed problem more reliably |
| Rebuild search entirely | High cost; incremental guided narrowing addresses core friction |
| Remove all promotions | Deals are part of Nykaa's value prop — refine placement, don't eliminate |
