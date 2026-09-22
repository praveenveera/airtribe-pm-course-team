# Project 4 — Bottom-Up Market-Size and AOV Opportunity Model

**Status:** Framework ready; Zepto-specific baseline inputs are not publicly verified.

## Purpose

Estimate the annual value of a Zepto AOV improvement without multiplying a broad industry forecast by an invented Zepto market share.

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
