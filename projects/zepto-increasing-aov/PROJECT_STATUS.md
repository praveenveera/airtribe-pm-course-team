# Project 4 — Increasing AOV at Zepto

**Last updated:** 23 September 2026  
**Overall status:** Secondary research substantially documented; primary research intentionally deferred  
**Current decision:** Define and validate a profitable AOV opportunity without assuming that all users, missions, or competitors behave the same way.

## Status at a glance

| Workstream | Status | Current evidence | Remaining gate |
|---|---|---|---|
| Problem framing | Complete for secondary phase | AOV opportunity framed around mission completion, trust, relevance, and profitable additions. | Revisit after primary evidence. |
| Industry and market research | Substantially complete | Industry reports, market-growth framing, competitor scale, and scenario model documented. | Add verified Zepto baseline inputs if available. |
| Competitor analysis | Substantially complete | Zepto, Blinkit, Instamart, BigBasket/bbnow, and offline substitutes compared. | Controlled matched-basket and live-flow comparison. |
| Product teardown | Secondary desk teardown complete | Zepto is the primary teardown; competitor public surfaces benchmarked. | Controlled checkout and mission-based live observation. |
| Public customer feedback | Expanded and coded | App stores, Reddit, complaint forums, creator videos, social posts, consumer forums, and operational context captured. | Extract individual feedback units if prevalence estimates are needed. |
| Behavioural assumptions | Documented as hypotheses | Fee, trust, availability, reorder, switching, and planned-shopping assumptions mapped. | Test with recent-purchase interviews/survey responses. |
| Market sizing and AOV model | Secondary scenarios added | TAM anchor, SAM/SOM planning assumptions, market-share boundary, and AOV sensitivity model documented and added to the dashboard. | Replace assumptions with a comparable denominator, Zepto baseline AOV/GMV, eligible-order share, margin, and retention evidence. |
| Matched-basket benchmark | Public evidence started | Two uncontrolled same-cart public snapshots now identify fee and final-payable-price fields to measure. | Run a controlled city/pin/account/time capture across platforms. |
| Survey instrument and web app | Live, V2.5, end-to-end confirmed | English, Hindi, and Telugu survey app is live on the shared GitHub Pages site and connected to the deployed Apps Script endpoint. A real submission was posted through the live app and confirmed in `Responses_V2` with the full V2.5 column set. V2.2 fixed a repeated-category question and corrected mismatched channel-fit options for BigBasket/Amazon Fresh. V2.3 closed a blind spot for the "urgent top-up" segment and added channel-mix/demographic questions. V2.4 removed the follow-up-interview opt-in and contact capture entirely. V2.5 replaced the bucketed geography question with an open-text "which city do you live in" field, kept deliberately neutral (no Bengaluru-vs-other split) so primary research isn't shaped by the dashboard's own secondary-research city pick. | Delete the test row from `Responses_V2` before real collection. Fluent-language review of Hindi/Telugu wording. `research/sampling-plan.md` and `research/analysis-and-recommendations.md` still describe follow-up interviews as part of the method and have not been updated to match V2.4 — reconcile before relying on them. |
| Research dashboard | Published | Evidence-controlled HTML dashboard is live with citations, visual explainers, AOV decision lab, Bengaluru matched-basket calculator, feedback analyzer, timeline, and export tools. | Keep updating evidence and decisions as validation data arrives. |
| Primary research | Deferred | No participant data is treated as current evidence. | User decision required to restart collection. |
| Final synthesis/submission | Not assembled | Conclusion and walkthrough draft exist. | Reconcile evidence, validate hypotheses, then assemble final deliverable. |

## Completed artifacts

- [`research/secondary-research.md`](research/secondary-research.md)
- [`research/market-sizing-model.md`](research/market-sizing-model.md)
- [`research/competitor-analysis.md`](research/competitor-analysis.md)
- [`research/product-teardown.md`](research/product-teardown.md)
- [`research/public-customer-signals.md`](research/public-customer-signals.md)
- [`research/public-feedback-coding-matrix.md`](research/public-feedback-coding-matrix.md)
- [`research/secondary-to-primary-mapping.md`](research/secondary-to-primary-mapping.md)
- [`research/evidence-inventory.md`](research/evidence-inventory.md)
- [`synthesis/competitor-and-teardown-conclusion.md`](synthesis/competitor-and-teardown-conclusion.md)
- [`interviews/survey-form-content.md`](interviews/survey-form-content.md)
- [`webapp/index.html`](webapp/index.html)

## Published research tools

- [Project 4 research dashboard](https://praveenveera.github.io/airtribe-pm-course-team/)
- [Basket Stories survey app](https://praveenveera.github.io/airtribe-pm-course-team/survey/)
- [Shared public repository](https://github.com/praveenveera/airtribe-pm-course-team)

The dashboard is the decision layer for the secondary-research phase. It brings together the market-to-AOV chain, competitor mechanics, Zepto teardown, public-feedback themes, evidence traceability, Bengaluru observation plan, opportunity map, evidence-quality rules, scenario modelling, and the next validation queue. Its visual explainers make the reasoning explicit: observe → triangulate → explain → test.

The survey app is the primary-research collection layer. It uses a neutral grocery/quick-commerce questionnaire in English, Hindi, and Telugu to capture a recent purchase, shopping mission, basket-building behaviour, fees or thresholds, rejected items, alternatives, and the respondent's exact city (open text, kept neutral of any secondary-research city assumption). It does not collect follow-up-interview consent or contact details (removed in V2.4). Survey responses are not yet treated as findings or reflected in the dashboard until real participant collection and reconciliation are complete — the current sheet holds only one end-to-end test row.

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
