# Product Masterclass

A static, public learning companion covering Weeks 1–7 of the course. It uses curated explanations from the structured class notes and session decks. The original course PDFs are intentionally excluded from the published site.

## Experience

- Seven weeks and 21 core concepts, each with a selectable visual model, example, teardown, optional deeper explanation, and recall prompt.
- Extra topics show what else to study in each week.
- Week 4 includes a prioritization decision lab; Week 7 includes an interactive funnel with step and overall conversion.
- Each week has a short exercise grounded in its session deck. Week 3 adds an accessible TAM/SAM/SOM diagram.
- Search, direct concept links, keyboard-operable controls, responsive layout, and browser-local completion state.

Completion state stays in the browser's `localStorage`; it is not synced across devices or accounts. No sign-in, backend, AI answer generation, or analytics collection is used.

## Local preview

Serve this directory with any local static server, then open its printed URL. For example:

```sh
python3 -m http.server 8765
```

## GitHub Pages

The public `airtribe-pm-course-team` repository hosts the dashboard, survey, and this site. Its Pages workflow copies the curated site assets into `/masterclass/` and does not copy `learning/session-decks/`. The private course repository keeps the original PDFs. A successful deployment must be verified before treating the public URL as live.

## Content boundary

This is a learning aid. Company examples, classroom numbers, and causal explanations in the source material were not independently verified. Project research needs its own dated evidence and citations.
