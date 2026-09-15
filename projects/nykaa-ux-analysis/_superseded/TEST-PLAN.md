# Nykaa Testing Plan — Pause, Resume, Repeat

Operational plan for exploring Nykaa from a **product buyer** perspective (not UI-only). Use this to test, pause, and resume anytime.

---

## Quick start

### 1. Login once (you do this manually)

```bash
cd browser
npm install
npx playwright install chromium
npm run login
```

**What happens:**
- Desktop Chrome (1440×900) opens at **https://www.nykaa.com/auth/login?ptype=login**
- You log in via **OTP / Google / Email**
- Press **ENTER** in the terminal when done
- Session saved to `.auth/nykaa-state.json` (not committed to git)

**Where to login on app (optional):** Nykaa app → Account tab → Login

### 2. Run a scenario

```bash
npm run journey -- skincare-budget
```

### 3. Review outputs

| Output | Location |
|--------|----------|
| Good UX screenshots | `screenshots/good/` |
| Bad UX screenshots | `screenshots/bad/` |
| Raw captures | `screenshots/web/` |
| Journey log | `output/journey-<scenario>.json` |
| Annotated catalog | [screenshot-catalog.md](./screenshot-catalog.md) |

---

## Phases & pause points

```text
Phase 0: Setup          → login session saved          [PAUSE: anytime]
Phase 1: Discover       → search, filters, PLP, PDP    [STOP_AT=discover]
Phase 2: Cart           → bag, line items, offers      [STOP_AT=cart]
Phase 3: Checkout       → address, payment UI          [--pause-before-checkout]
Phase 4: Synthesis      → analysis, recommendations    [manual / agent]
```

### Pause commands

| Intent | Command |
|--------|---------|
| Stop after search/browse | `STOP_AT=discover npm run journey -- skincare-budget` |
| Stop after cart only | `STOP_AT=cart npm run journey -- skincare-budget` |
| Pause before payment screens | `npm run journey -- skincare-budget --pause-before-checkout` |
| Run all personas | `npm run journey:all` |

---

## Scenarios & personas

See [personas.md](./personas.md) and `browser/scenarios/*.json`.

| Scenario ID | Persona | Goal |
|-------------|---------|------|
| `skincare-budget` | Careful buyer | Moisturizer, dry/sensitive, ≤₹800 |
| `gift-luxury` | Gift giver | Luxury gift set ₹2K–₹5K |
| `makeup-beginner` | Beauty beginner | First lipstick ≤₹500 |
| `replenishment` | Loyal replenisher | Reorder known product |
| `window-shopping` | Window shopper | Browse home/offers, no buy |

**Recommended order:**
1. `skincare-budget` (baseline — assignment aligned)
2. `makeup-beginner` (variant/shade friction)
3. `gift-luxury` (AOV, gifting UX)
4. `replenishment` (requires login — retention lens)
5. `window-shopping` (browse only — stops after discover)

---

## What to capture per run

For each step, note from a **buyer** perspective:

| Lens | Questions |
|------|-----------|
| **Trust** | Do I believe this product is right for me? |
| **Effort** | How many taps/decisions to reach confidence? |
| **Value** | Is the price/deal clear? Any hidden costs later? |
| **Risk** | What if I'm wrong — returns, shade mismatch? |
| **Urgency** | Delivery date, stock, offer expiry |

Automated runs tag screenshots **good** / **bad** / **neutral** in `output/journey-*.json`.

---

## Manual app testing (optional, recommended)

For each persona, spend **10–15 min on the Nykaa app** and add notes to `journey-observations.md` → Manual app section.

Save app screenshots to `screenshots/app/<persona>/`.

Compare: **Does the app behave better or worse than mobile web for this persona?**

---

## Checklist (track progress)

### Setup
- [x] `npm run login` completed
- [x] Session file exists: `.auth/nykaa-state.json`

### Scenarios (automated web)
- [x] `skincare-budget`
- [x] `makeup-beginner`
- [x] `gift-luxury`
- [x] `replenishment` (logged-in)

### Cart & checkout captured
- [ ] `05-bag-cart` screenshot — `/shoppingbag/` rendered `(null)`
- [ ] `06-checkout-entry` screenshot — not a real checkout UI
- [ ] `07-address-payment` screenshot (no real payment) — not observed

### Documentation
- [x] [screenshot-catalog.md](./screenshot-catalog.md) reviewed
- [x] [analysis.md](./analysis.md) updated per persona
- [x] [submission.md](./submission.md) final pass

---

## Buyer insights framework

Beyond UX, document insights using [buyer-insights-framework.md](./buyer-insights-framework.md):

- **Funnel:** Discover → Consider → Trust → Cart → Checkout → Retain
- **For each friction:** Who is affected? What metric moves? What would a PM ship?

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Login modal at checkout | Run `npm run login` again |
| HTTP2 / bot block | Script uses Chrome + disable-http2; retry |
| Filter step slow | Expected — login interruption documented as bad UX |
| Empty cart | Re-run scenario; ensure logged in for checkout |

---

## When to re-test

- After Nykaa app/website update
- Before Airtribe submission final draft
- When adding a new persona or product category
- When login session expires (symptom: login prompts return)
