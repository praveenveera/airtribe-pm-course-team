# Nykaa Browser Journey (Playwright)

Automates a mobile-web shopping journey on [nykaa.com](https://www.nykaa.com) for the Airtribe UX assignment.

## Setup

```bash
cd browser
npm install
npm run install-browsers
```

## Run

```bash
npm run journey
```

## Outputs

| Output | Location |
|--------|----------|
| Screenshots | `../screenshots/web/01-home.png` … `07-cart.png` |
| Structured log | `../output/journey-log.json` |

## Goal

Find a face moisturizer for dry, sensitive skin under ₹800 (mobile viewport: iPhone 13).

## Note

This captures **mobile web** UX, not the native app. Use alongside manual app observations in `../journey-observations.md`.
