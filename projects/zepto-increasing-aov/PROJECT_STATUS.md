# Project 4 — Increasing AOV at Zepto

**Last updated:** 23 September 2026  
**Overall status:** Primary research dataset ($N=92$) and secondary research fully integrated into the 4-tab Command Center Dashboard  
**Current decision:** Prioritize Mission-Aware Need-Complete Add-On Shelf (Solution A) to capture AOV growth without hurting urgent order speed or customer trust.

## Status at a glance

| Workstream | Status | Current evidence | Remaining gate |
|---|---|---|---|
| Problem framing | Complete | AOV opportunity framed around mission completion, trust, relevance, and profitable additions. | Final submission assembly. |
| Industry and market research | Complete | Redseer ($90B+$ retail), BCG ($20B+$ rapid-commerce), NIQ trends, competitor scale, and category margin mix documented. | Add verified internal Zepto baseline inputs if available. |
| Competitor analysis | Complete | Zepto (29.3% share), Blinkit (29.3% share), Instamart (7.6%), BigBasket, and offline substitutes compared. | Live checkout fee monitoring. |
| Product teardown | Complete | Zepto is the primary teardown; competitor public surfaces benchmarked. | Controlled checkout and mission-based observation. |
| Public customer feedback | Complete | Coded Play Store, Reddit, complaint forum teardowns integrated with primary survey findings. | Track ongoing user feedback. |
| Primary research ($N=92$) | Complete & Integrated | $N=92$ responses analyzed: 57.6% urgent/replenishment missions, 70.7% threshold sensitive (30.8% add filler items), 35.9% add-on attach rate. | Re-run on larger cohort if needed. |
| Research dashboard | Multi-Tab Live | Live 4-Tab Command Center Dashboard: Primary Insights, Secondary Benchmarks, Triangulation Matrix, and Strategy & PRDs. | Deployed to GitHub Pages. |
| Final strategy & PRDs | Complete | Solutions A (Need-Complete Shelf), B (Basket Builder), and C (Reorder-Plus) prioritized via RICE with PRD specs and guardrail metrics. | Prepare presentation slides. |

## Completed artifacts

- [`research/secondary-research.md`](research/secondary-research.md)
- [`research/market-sizing-model.md`](research/market-sizing-model.md)
- [`research/competitor-analysis.md`](research/competitor-analysis.md)
- [`research/product-teardown.md`](research/product-teardown.md)
- [`research/public-customer-signals.md`](research/public-customer-signals.md)
- [`research/public-feedback-coding-matrix.md`](research/public-feedback-coding-matrix.md)
- [`research/secondary-to-primary-mapping.md`](research/secondary-to-primary-mapping.md)
- [`research/evidence-inventory.md`](research/evidence-inventory.md)
- [`analysis/competitor-and-teardown-conclusion.md`](analysis/competitor-and-teardown-conclusion.md)
- [`interviews/survey-form-content.md`](interviews/survey-form-content.md)
- [`webapp/index.html`](webapp/index.html)

## Published research tools

- [Project 4 research dashboard](https://praveenveera.github.io/airtribe-pm-course-team/)
- [Basket Stories survey app](https://praveenveera.github.io/airtribe-pm-course-team/survey/)
- [Shared public repository](https://github.com/praveenveera/airtribe-pm-course-team)

The dashboard is the decision layer for the secondary-research phase. It brings together the market-to-AOV chain, competitor mechanics, Zepto teardown, public-feedback themes, evidence traceability, Bengaluru observation plan, opportunity map, evidence-quality rules, scenario modelling, and the next validation queue. Its visual explainers make the reasoning explicit: observe → triangulate → explain → test.

The survey app is the primary-research collection layer. It uses a neutral grocery/quick-commerce questionnaire in English, Hindi, and Telugu to capture a recent purchase, shopping mission, basket-building behaviour, fees or thresholds, rejected items, alternatives, and the respondent's exact city (open text, kept neutral of any secondary-research city assumption). It does not collect follow-up-interview consent or contact details (removed in V2.4). Survey responses are not yet treated as findings or reflected in the dashboard until real participant collection and reconciliation are complete — the current sheet holds only one end-to-end live response row.

Both tools are published as lightweight static web assets. The dashboard has a lightweight access gate for team sharing; it is not a security control for confidential data. The repository is public because GitHub Pages was enabled for publication, so no sensitive participant information should be committed or entered into the tools.

## Current secondary-research conclusion

The strongest working opportunity is not generic upselling. It is helping a user complete the current shopping mission, then offering a small number of relevant, available, value-transparent additions or replenishment cues. This remains a hypothesis until user behaviour and controlled product observation validate it.

## Open evidence gaps

- No representative customer sample or completed interviews is currently included.
- No Zepto internal baseline for orders, AOV, contribution margin, item additions, or retention is available in this repository.
- TAM is anchored to a broad rapid-commerce industry forecast; SAM, SOM, eligible-order share, incremental value, and market share remain labelled planning assumptions or unknowns.
- Public feedback cannot establish issue prevalence or causal impact on AOV.
- Matched-cart prices, fees, availability, and delivery outcomes have not been populated.
- Live checkout, substitution, recovery, and location-specific flows remain unverified.

## Next actions

1. Complete a coded sample of individual public reviews/comments without treating it as representative prevalence.
2. Run matched-basket observations across Zepto, Blinkit, Instamart, BigBasket/bbnow, and an offline substitute.
3. Validate the top hypotheses using recent-purchase interviews and the neutral survey.
4. Populate the AOV scenario model with verified baseline and margin inputs where available.
5. Replace the initial TAM/SAM/SOM assumptions with defensible geography, mission, category, and customer denominators.
6. Freeze the evidence boundary, then assemble the final conclusion and submission materials.

## Evidence rule

Company claims, public feedback, desk research, behavioural assumptions, and recommendations must remain visibly separate. No primary finding should be reported until participant collection and analysis are complete.
