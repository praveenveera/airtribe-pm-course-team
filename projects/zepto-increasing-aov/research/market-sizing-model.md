# Project 4 — Bottom-Up Market-Size and AOV Opportunity Model

**Status:** Secondary-evidence anchor and planning scenarios documented; Zepto-specific baseline inputs and actual market share are not publicly verified.

## Purpose

Estimate the annual value of a Zepto AOV improvement without multiplying a broad industry forecast by an invented Zepto market share.

## TAM, SAM, SOM and AOV — working definitions

| Term | Meaning in this project | Current treatment |
|---|---|---|
| **TAM** | Total rapid-commerce category opportunity in the market being studied. | Use the BCG/DTDC `$20B+ rapid-commerce GMV opportunity by 2030` as a broad category anchor, not a Zepto forecast. [M01](source-register.md) |
| **SAM** | The part of TAM that fits the selected geography, mission, category, or customer scope. | Scenario only: TAM × 10% relevant-scope assumption = `$2.0B` base case. The 10% is not observed market share. |
| **SOM** | The part of SAM that a product could realistically capture or influence in the planning period. | Scenario only: SAM × 5% attainable-share assumption = `$100M` base case. This is not Zepto's reported market share. |
| **AOV** | Average order value. | Zepto AOV is unknown; the model estimates incremental value per eligible order separately from market size. |
| **GMV** | Total value of goods sold before variable costs. | Industry and company scale signals use GMV/order-volume language; GMV is not contribution or profit. |
| **Contribution margin** | Value left after variable discounts, fulfilment, refunds, and related order costs. | Unknown; required before claiming a profitable AOV opportunity. |

### Current secondary-research planning scenario

These numbers are useful for sizing the question and comparing sensitivities. They are not customer findings or a company forecast.

| Layer | Formula | Base scenario | Evidence boundary |
|---|---|---:|---|
| TAM | BCG/DTDC rapid-commerce category anchor | **$20B+** by 2030 | Industry forecast; broader than Zepto's exact operating model [M01](source-register.md) |
| SAM | TAM × relevant-scope assumption | **$2.0B** | 10% scope is a planning assumption; geography/category mix is unknown |
| SOM | SAM × attainable-share assumption | **$100M** | 5% is a planning assumption; actual Zepto share is unknown |
| Annual eligible orders | 2.3M orders/day × 365 × 30% eligible-share assumption | **251.9M** | 2.3M/day is a company-reported Q4FY26 claim; eligibility is unknown [M06](source-register.md) |
| Gross AOV opportunity | eligible orders × ₹45 incremental value/order assumption | **₹11.3B** | ₹45 is a planning assumption; this excludes discount, fulfilment, refund, and retention effects |

The base scenario is intentionally editable. A downside/upside sensitivity is more honest than one precise number:

| Scenario | Relevant SAM scope | Attainable SOM share | Eligible orders | Incremental value/order | Gross AOV opportunity |
|---|---:|---:|---:|---:|---:|
| Downside | 5% of TAM = `$1.0B` | 2.5% = `$25M` | 125.9M | ₹25 | ₹3.1B |
| Base | 10% of TAM = `$2.0B` | 5% = `$100M` | 251.9M | ₹45 | ₹11.3B |
| Upside | 20% of TAM = `$4.0B` | 10% = `$400M` | 419.8M | ₹75 | ₹31.5B |

**Market-share warning:** We do not report an actual Zepto market share because the public category denominator, time period, geography, currency conversion, and Zepto GMV/AOV denominator are not aligned. The SOM values above are planning scenarios only.

## Market layers

| Layer | Input | Current value | Status | Source / note |
|---|---|---:|---|---|
| India online retail | Total online retail GMV | Above $90B projected for CY2026 | Industry forecast | Redseer public summary; broader than grocery and quick commerce |
| India rapid commerce | Rapid-commerce GMV opportunity | $20B+ by 2030 | Industry forecast | BCG/DTDC; broader than Zepto's exact model |
| Zepto scale | Orders per day | 2.3M+ in Q4FY26 | Company claim | Zepto Investor Relations |
| Zepto growth | Order-volume CAGR | 119%+ between FY24–26 | Company claim | Zepto Investor Relations |
| Zepto eligible orders | Orders where basket expansion is relevant | **Missing** | Required input | Needs internal baseline or a clearly labelled scenario |
| Current AOV | Net product/order value | **Missing** | Required input | Must define whether discounts, fees, and taxes are included |
| Incremental net value/order | Value from tested improvement | **Missing** | Required input | Must separate gross value from contribution margin |
| Contribution margin/order | Net contribution after discounts and fulfilment | **Missing** | Required input | Required to avoid unprofitable AOV optimisation |
| Retention effect | Repeat-order adjustment | **Missing** | Required input | Must be measured or scenario-labelled |

## Calculation

```text
Eligible annual orders
= eligible orders per day × operating days per year

Annual gross AOV opportunity
= eligible annual orders × incremental net basket value per order

Annual contribution opportunity
= eligible annual orders
  × incremental contribution margin per order
  × repeat/retention adjustment
```

## Scenario template

Do not populate the blank cells with assumptions until the team agrees the scenario ranges.

| Driver | Downside | Base | Upside | Evidence required |
|---|---:|---:|---:|---|
| Zepto orders per day |  |  |  | Company data or dated public claim |
| Eligible-order share |  |  |  | Order segmentation or explicit scenario assumption |
| Operating days/year |  |  |  | Calendar assumption |
| Incremental basket value/order |  |  |  | Experiment or scenario assumption |
| Incremental contribution/order |  |  |  | Finance baseline |
| Retention adjustment |  |  |  | Cohort evidence or scenario assumption |
| Annual gross opportunity | n.a. | n.a. | n.a. | Formula result |
| Annual contribution opportunity | n.a. | n.a. | n.a. | Formula result |

## Guardrails

The model must report these alongside AOV:

- conversion and checkout completion;
- items per order;
- discount cost;
- contribution margin;
- cancellations, refunds, and substitutions;
- delivery SLA and fulfilment cost;
- repeat-order rate;
- complaint or dissatisfaction signals.

## What this model can and cannot say

It can show the sensitivity of the opportunity to order volume, eligible-order share, and incremental value.

It cannot establish Zepto's market share, current AOV, or profitability without Zepto data or explicitly labelled scenario inputs.
