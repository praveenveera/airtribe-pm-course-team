# Agent instructions — Nykaa UX assignment

Use this file in Cursor, Codex, Claude Code, and GitHub Copilot. Do not copy personal skills into this repo.

## What this repo is

Airtribe **product** homework: explore Nykaa, write simple first-person UX notes, then evaluate features and form opinions. Not a production app.

**Read first:** `README.md` → `submission.md` → `product-analysis.md` → `nykaa-core-teardown.md`

## How to write

- Simple language (new PM cohort, not consultant-speak). Recommendation first.
- First person — "I searched for X, here is what happened" — not invented personas.
- Buyer lens (job, metric, who pays), not "the button is pink".
- Separate **what I saw** from **guess**. Do not invent numbers, interviews, or flows.

## What is verified

Desktop web, guest + one logged-in session, 4 Sep 2026. Bag, checkout (to the address step), and the Orders page were checked by hand and **work**. One real bug: `nykaa.com/shoppingbag/` renders blank on a direct URL.

Earlier automation runs in `_superseded/` failed at the cart and wrongly concluded checkout was broken — ignore them.

## Playwright (`browser/`)

Optional tooling, not part of the submission. `cd browser && npm install && npx playwright install chromium`, then `npm run journey -- skincare-budget`. Never complete a real payment.

## What not to do

- Don't rewrite the assignment as an AI-chatbot pitch.
- Don't resurrect the 5 fictional personas — the submission is first-person now.
- Don't commit `.auth/` or `browser/node_modules/`.
