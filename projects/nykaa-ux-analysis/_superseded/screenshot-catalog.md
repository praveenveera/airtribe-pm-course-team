# Screenshot Catalog — Good vs Bad

Annotated screenshots for the Nykaa assignment. Use in `submission.md` and presentations.

**Legend:** ✓ Good UX / buyer experience · ✗ Bad UX / buyer friction
**Platforms:** Mobile web (earlier session) + desktop web logged-in (2026-09-04, Playwright 1440×900)

---

## ✓ Good examples

### 1. Add-to-bag toast confirmation *(mobile web)*

![Add to bag toast](./screenshots/good/add-to-bag-toast-confirmation.png)

| Field | Detail |
|-------|--------|
| **File** | `screenshots/good/add-to-bag-toast-confirmation.png` |
| **Persona / funnel** | Careful buyer · Cart |
| **Why good** | Immediate feedback ("Product added to bag") without leaving search results |
| **Buyer insight** | Reduces anxiety — buyer knows the item is in bag before continuing to browse |
| **Metric** | PLP → ATC rate; multi-item basket rate |

---

### 2. Rich PLP cards with social proof *(mobile + desktop)*

![PLP cards](./screenshots/good/plp-rich-product-cards-social-proof.png)

| Field | Detail |
|-------|--------|
| **File** | `screenshots/good/plp-rich-product-cards-social-proof.png` |
| **Persona / funnel** | Careful buyer · Consider / Trust |
| **Why good** | Ratings (137K reviews), "NORMAL TO DRY" badge, layered pricing, BESTSELLER |
| **Buyer insight** | Supports shortlisting without opening every PDP — critical for skincare trust |
| **Metric** | Search → PDP CTR; time-to-shortlist |

---

### 3. Beauty-specific filter taxonomy

![Filter taxonomy](./screenshots/good/filter-taxonomy-skin-concern.png)

| Field | Detail |
|-------|--------|
| **File** | `screenshots/good/filter-taxonomy-skin-concern.png` |
| **Persona / funnel** | Careful buyer · Consider |
| **Why good** | Skin type, Concern, Ingredient, Benefits — matches how beauty buyers decide |
| **Buyer insight** | The data model fits the job; friction is *access* (mobile login gate) not missing filters |
| **Metric** | Filter apply rate; conversion on filtered sessions |

---

### 4. Gift PLP — "Most Gifted" + manageable set *(desktop)*

![Gift PLP](./screenshots/good/gift-most-gifted-sets.png)

| Field | Detail |
|-------|--------|
| **File** | `screenshots/good/gift-most-gifted-sets.png` |
| **Persona / funnel** | Gift giver · Discover / Consider |
| **Why good** | "Showing 20 of **91** results"; MOST GIFTED + BESTSELLER; gift-set imagery |
| **Buyer insight** | Gifting intent is a better-matched query than concern+budget skincare — fewer SKUs, social proof of giftability |
| **Metric** | Gifting search → ATC; AOV on gift-set sessions |

---

### 5. Desktop filter rail always visible *(desktop, logged-in)*

![Desktop skincare PLP](./screenshots/good/skincare-budget-02-search-plp.png)

| Field | Detail |
|-------|--------|
| **File** | `screenshots/good/skincare-budget-02-search-plp.png` (left rail) |
| **Persona / funnel** | Careful buyer · Consider |
| **Why good** | Price, Skin Type, Concern sit in a persistent sidebar — no Filter button / login sheet |
| **Buyer insight** | Logged-in desktop consider-stage is materially easier than guest mobile. Same taxonomy, less gate |
| **Metric** | Filter apply rate (desktop vs mobile); guest vs logged-in conversion |

---

### 6. Shade count on lipstick cards *(desktop)*

![Lipstick PLP](./screenshots/good/makeup-shade-count-on-cards.png)

| Field | Detail |
|-------|--------|
| **File** | `screenshots/good/makeup-shade-count-on-cards.png` |
| **Persona / funnel** | Beauty beginner · Consider |
| **Why good** | Cards show "Available in 24/25 shades" + MOST REORDERED + huge review counts |
| **Buyer insight** | Signals *choice exists* — does not yet help pick a shade. Trust of popularity, not fitness |
| **Metric** | Variant completion rate; shade-related returns |

---

## ✗ Bad examples

### 7. Login modal blocks filters *(mobile web, guest)*

![Login blocks filters](./screenshots/bad/login-modal-blocks-filters.png)

| Field | Detail |
|-------|--------|
| **File** | `screenshots/bad/login-modal-blocks-filters.png` |
| **Persona / funnel** | Careful buyer · Consider |
| **Why bad** | "Login or Signup" sheet over the filter panel before any narrowing |
| **Buyer insight** | Guest cannot apply price/skin filters on 695 results — purchase momentum breaks |
| **Metric** | Filter abandonment; login modal dismiss rate |
| **PM fix** | Defer login until checkout/wishlist; allow guest filtering |

---

### 8. Choice overload — 696 results + out-of-budget AD *(desktop, logged-in)*

![Desktop 696](./screenshots/bad/desktop-skincare-696-results-ad.png)

| Field | Detail |
|-------|--------|
| **File** | `screenshots/bad/desktop-skincare-696-results-ad.png` |
| **Persona / funnel** | Careful buyer · Discover / Consider |
| **Why bad** | "Showing 20 of **696** results". Forest Essentials ritual **₹3565 AD** sits above Dot & Key **₹336** (NORMAL TO DRY, 137K reviews) |
| **Buyer insight** | Login did **not** fix overload or ad relevance. Platform still optimizes inventory/ad yield over concern+budget fit |
| **Metric** | Time-to-ATC; return rate on concern skincare; sponsored CTR vs organic |
| **PM fix** | Guided concern + budget strip; separate sponsored block; downrank ads outside implied budget |

---

### 9. Home promotional clutter

![Home clutter](./screenshots/bad/home-promotional-clutter.png)

| Field | Detail |
|-------|--------|
| **File** | `screenshots/bad/home-promotional-clutter.png` (mobile); desktop: `screenshots/web/gift-luxury-01-home.png` |
| **Persona / funnel** | Loyal replenisher · Discover / Retain |
| **Why bad** | Bonanza banners, Luxe pouch, app QR, brand carousels — no "reorder" or last-order shortcut despite being logged in as Praveen |
| **Buyer insight** | Home is merchandised for discovery/promo, not for the repeat-buy job |
| **Metric** | Time to first meaningful action from home (logged-in vs guest) |
| **PM fix** | Personalize home: last order / repurchase module above promo for known buyers |

---

### 10. Replenishment falls into category merchandising *(desktop, logged-in)*

![Serum category](./screenshots/bad/replenishment-category-not-reorder.png)

| Field | Detail |
|-------|--------|
| **File** | `screenshots/bad/replenishment-category-not-reorder.png` |
| **Persona / funnel** | Loyal replenisher · Retain |
| **Why bad** | No order history / Reorder. Landed on Serums & Essence — **1,773** SKUs + "Shop by Ingredient" |
| **Buyer insight** | Logged-in session is not used to skip discovery. Repeat buyer pays a search tax Nykaa already has the data to remove |
| **Metric** | Time-to-reorder; repeat purchase rate; % of logged-in sessions that hit Orders |
| **PM fix** | Account → Orders / 1-tap Reorder as default for known SKUs; home "Buy again" |

---

### 11. Cart / checkout not rendered in automation

Bag URL (`/shoppingbag/`) returned a blank `(null)` page on every desktop persona after login. Earlier mobile run showed raw JSON: `{"message":"The upstream server is timing out"}` (catalog files `screenshots/good/shopping-bag-page.png`, `screenshots/good/checkout-entry.png` — **do not treat as good UX**).

| Field | Detail |
|-------|--------|
| **Funnel** | Cart / Checkout |
| **What we know** | Address/payment UI was **not observed**. Do not invent checkout insights |
| **Possible causes** | Bot/session protection on bag, SPA hydrate failure, or true reliability leak |
| **PM stance** | If this is real for users: P0 reliability (cart is the highest-intent page). If automation-only: still a signal that bag is fragile. Re-test manually before claiming checkout UX |

---

## Using in Airtribe submission

> As shown in **Good #4**, a gifting query returns 91 gift-set results with MOST GIFTED proof — the consider stage matches the job.
> **Bad #8** shows the same platform, same login, failing the careful buyer: 696 results and a ₹3565 AD above the ₹336 fit.
> **Bad #10** shows retention is not designed: a logged-in replenisher is sent into 1,773 serums.
