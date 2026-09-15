# Multi-Model Product Strategy Review Guide

## Purpose

Use several AI models and product-strategy frameworks to challenge the current B2B strategy without allowing each model to invent a different evidence base.

The objective is not to find which model writes the best report. It is to discover:

- alternative interpretations of the same evidence;
- unsupported assumptions in the current strategy;
- stronger customer, market, wedge, and validation choices;
- disagreements that require more research rather than more AI-generated opinion.

## Current evidence boundary

The current research pack contains:

- 91 public evidence records linked to 56 sources within a 65-source register;
- two anonymized interviews, both with enterprise frontline practitioners;
- no manager, administrator, economic-buyer, mid-market, pilot-demand, or willingness-to-pay interview evidence.

These limitations must remain visible in every model output. Multiple models repeating the same conclusion does not turn a hypothesis into evidence.

## Input pack

Use these files for the exercise:

| File | Purpose |
|---|---|
| `../assignment-brief.md` | Assignment questions and submission constraints |
| `../research/B2B_AI_Customer_Operations_Evidence.xlsx` | Source register, claim-level evidence, limitations, and dashboard |
| `../research/DOCUMENTATION_AND_RESEARCH_MAP.md` | Traceability and known evidence gaps |
| `../research/secondary-research-report.md` | Public-research synthesis |
| `../interviews/Interview_Research_Tracker.xlsx` | Interview sample and decision-gate status |
| `../final/Airtribe_B2B_Product_Strategy_Final.pdf` | Current recommendation; withhold during Round 1 |

## Experiment design

### Round 1 — Blind independent analysis

Give each model the same research pack, but do **not** provide the current final strategy PDF. This reduces anchoring on the existing recommendation.

Use three to five independent runs. A different model is useful, but a different reasoning lens is more important.

| Run | Reasoning lens | Main question |
|---|---|---|
| A | Customer research and JTBD | Are the user, job, workflow, and pain correctly defined? |
| B | Competitive strategy | Is there a defendable market position against incumbents? |
| C | Lean Startup | What is the smallest useful wedge and fastest learning test? |
| D | Enterprise buyer | Why would a company buy, approve, deploy, and retain this product? |
| E | Red-team premortem | Why could the strategy fail despite a credible product? |

### Round 2 — Challenge the current strategy

Provide the current final PDF after the blind analysis is complete. Ask each model to compare its independent conclusion against the current strategy claim by claim.

### Round 3 — Synthesis

Compare the independent outputs. Do not use majority vote. Select conclusions based on source traceability, reasoning quality, and acknowledgement of uncertainty.

## Base prompt for every Round 1 run

```text
You are independently analysing a B2B AI product-strategy assignment.

Use only the attached research pack for factual conclusions. Do not invent
interviews, numbers, customer quotes, product capabilities or market facts.

Evidence rules:
1. Separate FACT, INTERPRETATION, HYPOTHESIS, RECOMMENDATION and UNKNOWN.
2. Cite the source ID, URL or anonymized interview ID supporting every major claim.
3. Public reviews and vendor content are secondary evidence, not customer interviews.
4. The pack contains only two completed interviews. Do not imply adequate
   participant diversity, saturation or market validation.
5. Vendor claims must be labelled as vendor-reported.
6. Identify contradictory and missing evidence.
7. Do not assume integration, AI summarization or a unified view is differentiated.
   Assess incumbent capabilities first.
8. Do not recommend a broad platform unless the evidence earns that conclusion.
9. Do not browse for additional information in this round. The evidence base must
   remain identical across all model runs.

Analyse the assignment independently before seeing any existing final strategy.

Return:
A. Your understanding of the assignment
B. Strongest evidence-supported customer problem
C. Primary user, buyer and approver
D. Current workflow and failure point
E. Three alternative problem statements
F. Three strategic options, including "do not build"
G. Recommended wedge and why
H. What must explicitly not be built yet
I. Smallest validation experiment and success/stop criteria
J. Evidence gaps that could change the recommendation
K. Confidence level: high, medium or low, with justification
```

Append exactly one of the following lens prompts to the base prompt.

## Lens A — Customer research and JTBD

```text
Use Jobs-to-be-Done and recent-behaviour analysis.

Analyse:
segment and context -> trigger -> job -> current behaviour -> workaround ->
pain -> consequence -> desired outcome.

Challenge whether "frontline support agent" is one useful persona or several
different personas. Do not convert two interviews into a universal persona.
Identify which observations repeat, which are industry-specific, and which are
only assumptions.
```

## Lens B — Competitive strategy

```text
Use strategic choice, Porter-style market analysis and a strategy canvas.

Compare:
- building a separate cross-system layer;
- extending an incumbent helpdesk;
- becoming an integration or workflow-automation product;
- focusing on one regulated-industry workflow;
- not entering this market.

Explain where Intercom, Zendesk, Freshdesk and Salesforce make the proposed
strategy difficult to defend. Identify the customer segment, capability,
distribution advantage or accumulated asset required to win.
```

## Lens C — Lean Startup and assumption mapping

```text
Use assumption mapping and Lean Startup principles.

List the assumptions under:
- desirability;
- viability;
- feasibility;
- usability;
- trust and governance.

Rank assumptions by importance and uncertainty without inventing numerical
scores. Design the cheapest credible test for the most dangerous assumption.
Prefer a narrow workflow pilot over a large product build.
```

## Lens D — Enterprise buyer

```text
Act as a customer-support operations buyer working with IT, security,
compliance, finance and procurement.

Evaluate:
- measurable ROI and budget ownership;
- implementation and change-management effort;
- permissions, data access and data residency;
- auditability and human approval;
- integration ownership and failure recovery;
- vendor risk, switching cost and incumbent bundling.

Explain why an enterprise would buy this separately rather than activate AI
inside its existing customer-service platform. Identify the proof required
before approving a pilot.
```

## Lens E — Red-team premortem

```text
Assume the strategy failed after 18 months.

Conduct a premortem covering:
- weak customer urgency;
- incorrect target segment or buyer;
- incumbent bundling;
- integration complexity and maintenance cost;
- inaccurate or unauthorized AI output;
- long implementation cycles;
- poor unit economics;
- lack of internal product ownership;
- failure to expand after the initial use case.

For every failure mode, identify the evidence needed now, an early warning
signal, and the cheapest risk-reduction test.
```

## Round 2 comparison prompt

Attach the current final PDF and the model's Round 1 output.

```text
Compare the attached current strategy with your independent Round 1 analysis.

Do not rewrite the strategy yet. Produce a claim-by-claim review:

1. Agreements supported by evidence
2. Conclusions that overreach the evidence
3. Important evidence the strategy ignores
4. Better alternative interpretations
5. Recommendations that should be retained, changed or removed
6. The single highest-risk strategic assumption
7. Exact changes you would make to the problem statement, ICP, wedge, moat,
   land-and-expand plan, roadmap, metric and validation plan

Distinguish factual errors from reasonable strategic disagreement. Cite the
supporting evidence or identify the missing evidence for every material point.
```

## Round 3 synthesis prompt

Give the synthesis model all Round 1 and Round 2 outputs plus the original evidence pack.

```text
You are reviewing several independent product-strategy analyses based on the
same evidence pack.

Do not select ideas by majority vote. Multiple AI models can repeat the same
unsupported assumption.

Create a comparison table covering:
- target customer and segment;
- user, buyer and approver;
- problem statement;
- evidence used;
- strategic wedge;
- incumbent alternative and differentiation;
- MVP and non-goals;
- moat hypothesis;
- land-and-expand path;
- primary metric and guardrails;
- highest-risk assumption;
- recommended experiment.

For every disagreement:
1. Explain why the analyses differ.
2. Identify which interpretation has stronger evidence.
3. State what new evidence would resolve it.

Produce a final decision log using:
KEEP / MODIFY / REJECT / VALIDATE LATER.

End with:
- the strongest evidence-supported strategy;
- the most credible alternative strategy;
- unresolved decisions;
- the next three research actions in priority order.

Do not introduce facts that are absent from the supplied evidence.
```

## Evaluation rubric

Score each output using the same rubric.

| Criterion | Weight | What good looks like |
|---|---:|---|
| Evidence traceability | 25 | Major claims link to a source or are labelled as hypotheses |
| Customer/problem clarity | 15 | User, trigger, job, workaround, pain, and consequence are explicit |
| Persona validity | 10 | Does not generalize beyond the two-interview sample |
| Competitive realism | 15 | Treats incumbents as capable alternatives, not only chatbots |
| Strategic coherence | 15 | Segment, problem, wedge, advantage, expansion, and metric connect |
| Validation quality | 10 | Proposes a small test with success, guardrail, and stop criteria |
| Honest unknowns | 10 | Names missing buyer, segment, pricing, and pilot evidence |
| **Total** | **100** | |

The most polished or confident answer is not automatically the strongest answer. Prefer the output that makes the fewest unsupported leaps.

## Comparison worksheet

Use one row per model or reasoning run.

| Run | Model | Lens | Problem | ICP | User | Buyer | Wedge | Key evidence | Largest assumption | Proposed test | Score |
|---|---|---|---|---|---|---|---|---|---|---|---:|
| A | | JTBD | | | | | | | | | |
| B | | Competitive strategy | | | | | | | | | |
| C | | Lean Startup | | | | | | | | | |
| D | | Enterprise buyer | | | | | | | | | |
| E | | Red-team | | | | | | | | | |

## Output convention

Save outputs under this folder without changing the submission files:

```text
multi-model-review/
├── MULTI_MODEL_STRATEGY_REVIEW_GUIDE.md
└── outputs/
    ├── round-1/
    │   ├── model-a-jtbd.md
    │   ├── model-b-competitive-strategy.md
    │   └── ...
    ├── round-2/
    │   ├── model-a-current-strategy-review.md
    │   └── ...
    └── synthesis/
        ├── comparison-matrix.md
        └── final-decision-log.md
```

Do not copy private participant names, employer-confidential details, login credentials, or unpublished personal data into public AI tools. Use only the anonymized interview records already stored in the repository.

## Decision rule

Change the current strategy only when one of these is true:

1. the existing conclusion conflicts with traceable evidence;
2. an alternative explanation fits the evidence better;
3. a recommendation depends on an assumption that can be tested more cheaply;
4. the strategy ignores a material buyer, trust, integration, economic, or competitive constraint.

If the models disagree and the evidence cannot resolve the disagreement, record an open question. Do not ask another model to manufacture certainty.
