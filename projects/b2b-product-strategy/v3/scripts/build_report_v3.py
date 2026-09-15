import os
import sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from docx_lib_v3 import *

ASSETS = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "assets")

doc = new_document()

cp = doc.core_properties
cp.title = "Earn the Platform, Don't Announce It — B2B Product Strategy"
cp.author = "Praveen Veera"
cp.subject = "2-3 year AI-powered Customer Operations Platform strategy — Airtribe B2B Product Strategy Assignment"
cp.keywords = "B2B SaaS, AI customer support, product strategy, Airtribe, Customer Operations Platform"
cp.comments = ""
cp.last_modified_by = "Praveen Veera"

section = doc.sections[0]
add_footer_text(section, "Airtribe B2B Product Strategy")

# ============================================================ COVER
add_eyebrow(doc, "AIRTRIBE  ·  B2B PRODUCT STRATEGY")
add_h1(doc, "Earn the platform. Don't announce it.", size=26)
add_rule(doc)
add_body(doc, "A 2–3 year strategy for AI-powered Customer Operations, diagnosed from why the original mid-market motion adopted slower than expected — not a broad platform pitch reformatted.",
         size=11.5, color=SLATE, space_after=14)
add_callout(doc, "Recommendation",
            "leadership is right that the destination is a comprehensive Customer Operations Platform — but naming it doesn't earn it. Land one narrow, low-trust workflow; prove it; expand only after it's earned. Do not claim a validated ICP, a confirmed buyer, willingness to pay, or a proven moat.")
add_body(doc, "Evidence base: 91 public evidence records (56 sources), 4 anonymized interviews, a four-vendor competitive teardown, and one bottom-up market analysis  ·  Research status: evidence-limited; interview saturation and buyer validation not achieved.",
         size=9, color=SLATE, italic=True, space_after=4)
add_page_break(doc)

# ============================================================ 1. DIAGNOSIS + 2. METHOD (shared page)
add_eyebrow(doc, "01 · The diagnosis")
add_h1(doc, "Why did the original motion stall?")
add_body(doc, "The brief hands us a fact, not a footnote: mid-sized businesses (200–1,000 employees) were targeted first, and adoption was slower than expected. Four failure modes explain it, each traceable to evidence already on file.")
add_table(doc,
    ["Failure mode", "What happened", "Evidence"],
    [
        ["1. Positioning trap", "Sold as “another AI chatbot.” Every incumbent already claims AI agents, integrations, human handoff and governance.", "Secondary research; competitive teardown"],
        ["2. Access-and-trust veto", "IT/security can kill a deal before the product is evaluated.", "P03 — pilot capped to 2 queues, write-back disabled"],
        ["3. Bundled-AI trap", "Mid-market buyers compare a new vendor to the AI they already pay for.", "Freshworks (S09): 36% stuck in pilots; 86% say AI adds workload"],
        ["4. Workflow mismatch", "Chat deflection was sold; the pain is back-office context work.", "P01, P02, P04 describe manual cross-system reassembly"],
    ], col_widths=[1.5, 3.4, 2.1])
add_body(doc, "None of these four is a new discovery in isolation — pieces of each already existed across the research. What matters is treating them as one connected diagnosis that drives every later choice.", italic=True, color=SLATE)

add_h2(doc, "02 · Evidence base and method — four layers, never mixed")
add_table(doc,
    ["Count", "Meaning"],
    [
        ["65", "Source register entries: 64 external sources plus the assignment brief"],
        ["56", "Unique source IDs referenced by the 91 evidence records"],
        ["91", "Claim-level public evidence records with source URL, confidence and limitation"],
        ["4", "Interview records, maintained separately from public evidence"],
    ], col_widths=[1.0, 6.0])
add_callout(doc, "Integrity rule", "no review post is treated as an interview; no vendor statistic is treated as universal market fact; no paraphrased interview note is presented as a verbatim quote. The competitive teardown keeps its own register within the same discipline — V (vendor claim), R (review signal), I (interview), H (synthesis), U (unresolved).")
add_page_break(doc)

# ============================================================ 3. SEGMENT
add_eyebrow(doc, "03 · Customer segment")
add_h1(doc, "Keep the size band. Narrow hard on who.")
add_table(doc,
    ["Segment", "Pain evidence", "Why not"],
    [
        ["Enterprise", "Most acute (P01 ~100–150 min/day; P02 4–6 hr waits)", "P02 is regulated banking — maximizes the access veto. P01 is a multi-client BPO — no stack owner."],
        ["SMB / startups", "Usually one consolidated tool", "No helpdesk+CRM seam — no wedge to build on"],
        ["Mid-market, filtered", "The seam exists; buyer is reachable", "Selected — avoids all three traps at once"],
    ], col_widths=[1.4, 3.0, 2.6])
add_callout(doc, "Working segment", "B2B SaaS or technology-enabled services, ~51–1,000 employees, an established helpdesk and CRM/system of record, growing request volume, limited support-ops capacity.", bg=LIGHT_AMBER)
add_h2(doc, "Anti-personas — named, not implied")
add_bullets(doc, [
    "Not regulated / financial services — P02 shows the compliance approval chain this triggers.",
    "Not single-system shops — no context to reassemble means no wedge.",
    "Not multi-client outsourced support operations (BPOs) — P01's stack changes by client; no one owns the access decision.",
])
add_h2(doc, "Primary persona")
add_body(doc, "Frontline support/operations practitioner owning L1.5, escalation or exception work across several systems. Goal: give a correct update and move the case to resolution. Current friction: searches, copies, waits, and reconstructs history; handoff context isn't durable.", size=10)
add_h2(doc, "How the problem statement was derived")
add_table(doc,
    ["Observed evidence", "Pattern", "Safe conclusion"],
    [
        ["P01 + P04: complex escalations", "Context reconstructed across helpdesk, CRM, chat, engineering systems", "Context/handoff leads the workflow hypothesis (2 of 4)"],
        ["P02: regulated banking complaints", "15 min duplicate logging; 4–6 hr approval wait; audit split across systems", "Audit-safe coordination matters in this case"],
    ], col_widths=[2.2, 3.0, 1.8])
add_page_break(doc)

# ============================================================ 4. INTERVIEWS (card grid + chart)
add_eyebrow(doc, "04 · Interview evidence")
add_h1(doc, "Four perspectives")
add_card_grid(doc, [
    {"badge": "P01", "title": "Enterprise outsourced support · frontline",
     "body": "5–6 difficult cases/day; 20–25 min context work per case. Strategic use: quantified context and handoff cost."},
    {"badge": "P02", "title": "Enterprise banking complaints · frontline",
     "body": "15 min duplicate logging; 4–6 hr formal approval wait. Strategic use: audit, approval and read-only constraints."},
    {"badge": "P03", "title": "Mid-market (~400) · application approval",
     "body": "One-month pilot, 2 queues, write-back disabled. Strategic use: least-privilege, reversible pilot design."},
    {"badge": "P04", "title": "Mid-market B2B SaaS/services · frontline",
     "body": "Manual Zendesk-to-Jira summary; warns against a duplicate system. Strategic use: second context/handoff case plus counter-evidence."},
], cols=2)
add_callout(doc, "Diversity audit / limitation",
            "2 enterprise + 2 mid-market; 3 frontline + 1 application-approval stakeholder; no support manager or economic buyer interviewed. Sample is 4 of the requested 8–12 minimum — segment, buyer and adoption conclusions remain hypotheses.")
add_image(doc, os.path.join(ASSETS, "pain_time_chart.png"), width_in=6.2,
          caption="Quantified time cost, where interviews gave a number.")

# ============================================================ 5. MARKET
add_eyebrow(doc, "05 · Market opportunity")
add_h1(doc, "Two honest ranges, plus one new estimate")
add_image(doc, os.path.join(ASSETS, "market_chart.png"), width_in=6.3)
add_table(doc,
    ["Signal", "Evidence", "Interpretation"],
    [
        ["Large adjacent category", "Contact-center $47.7–63.9B; help-desk $14.3B", "Real category, not one precise TAM"],
        ["High workflow frequency", "Vendor datasets span up to 1.2B tickets / 138M conversations", "A pilot can observe repetition within weeks"],
        ["Adoption–maturity gap", "82% invested in AI; 10% report mature deployment", "Reliability may matter more than basic AI access"],
        ["Assist-first timing", "Gartner: 73% forecast agent-assist by end-2025", "Assist/shadow mode is the lower-risk landing motion"],
        ["Security / readiness", "51% say security delayed or limited AI initiatives", "Permissions, audit and data boundaries are requirements"],
    ], col_widths=[1.8, 3.2, 2.0])
add_callout(doc, "Bottom-up cost pool",
            "$430–860M/year, illustrative — chained from the sourced $16B mid-market survey (S09) × 27% integration-barrier share (E10) × a labeled 10–20% vertical-share assumption. A cost-of-the-problem ceiling, not a revenue forecast; full chain in research/bottom-up-market-estimate.md.", bg=LIGHT_AMBER)
add_body(doc, "Willingness-to-pay logic: customers may pay if the product removes measurable coordination work, improves SLA and avoids reopens at a predictable total cost. No interview established an economic buyer, budget threshold, or purchase intent.", size=10)

# ============================================================ 6. PROBLEM + 7. COMPETITIVE (deepened)
add_eyebrow(doc, "06 · Core problem")
add_h1(doc, "One problem, aimed at the mismatch")
add_callout(doc, "Job story",
            "when a support agent picks up a case that needs information or action from a second system, they want a single place to see everything relevant — because today that costs 15–25 minutes of manual work per case and leaves duplicate history for the next person to reconstruct.")
add_body(doc, "Two of four interviews (P01, P04) independently describe it — below the interview guide's own four-participant threshold. Leading hypothesis, not proven, aimed directly at the mismatch diagnosed above.")

add_h2(doc, "07 · Competitive position — what each incumbent already owns")
add_body(doc, "Public sources, review signals, and two anonymized enterprise interviews were used to build a same-lens comparison across the four named incumbents.", size=9.5, color=SLATE, italic=True, space_after=6)
add_card_grid(doc, [
    {"badge": "IN", "title": "Intercom / Fin",
     "body": "Promise: AI resolution with a clear outcome unit (V1–V3). Weakness: complex workflows and tuning can shift work back into support ops (R1, R2)."},
    {"badge": "ZD", "title": "Zendesk AI",
     "body": "Promise: complete service operations with embedded AI (V4, V5). Weakness: product breadth increases configuration and total-cost complexity (R3, R4)."},
    {"badge": "FD", "title": "Freshdesk / Freddy AI",
     "body": "Promise: approachable omnichannel service, packaged AI (V6–V8). Weakness: advanced depth and integration reliability lag as teams mature (R5)."},
    {"badge": "SF", "title": "Salesforce / Agentforce",
     "body": "Promise: governed AI on trusted CRM context (V9–V11). Weakness: time to value and cross-cloud complexity can be high (R6)."},
], cols=2, badge_fill="5B6470")
add_body(doc, "Rejected differentiators: “uses AI,” “unifies context,” “integrates with existing tools,” “governed and secure,” “vendor neutral” — necessary, none sufficient.", size=10, italic=True, color=SLATE)

add_h2(doc, "Entry wedge, what compounds, and where to test each incumbent")
add_table(doc,
    ["Product", "Entry wedge", "Vulnerability to test"],
    [
        ["Intercom / Fin", "Standalone, outcome-priced AI agent", "Tuning effort, handoff quality, cost predictability"],
        ["Zendesk AI", "Trusted ticketing system of record", "Setup effort and workflow-specific resolution quality"],
        ["Freshdesk / Freddy AI", "Ease and accessible price-to-value", "Advanced depth and integration reliability as teams mature"],
        ["Salesforce / Agentforce", "CRM context and enterprise governance", "Time to value and fit for non-Salesforce stacks"],
    ], col_widths=[1.9, 2.6, 2.9])
add_image(doc, os.path.join(ASSETS, "competitive_positioning.png"), width_in=5.3)
add_callout(doc, "Seven capabilities every incumbent already claims",
            "AI agents with knowledge-grounded answers; agent assistance and summarization; human handoff and approvals; external integrations and system actions; analytics, evaluation and governance; usage- or outcome-based pricing; compatibility with an existing service stack. Generic AI and integration claims cannot carry the strategy — the entry needs one workflow where the product proves better completion, control, effort, or cost than the incumbent's native AI.")
add_callout(doc, "Category wedge to test",
            "workflow-specific completeness — assemble permissioned context, show the evidence used, route approval, preserve the full handoff, and write the result back — across a small set of stacks, faster and cheaper than the incumbent's native AI.")

# ============================================================ 8. PRODUCT / MVP (Land-Control-Prove-Expand master + sequencing)
add_eyebrow(doc, "08 · Product, MVP, and sequencing")
add_h1(doc, "The workflow, sequenced by earned trust")
add_body(doc, "The commercial adoption motion has four stages, each a precondition for the next — not four independent options.")
add_image(doc, os.path.join(ASSETS, "adoption_motion_chart.png"), width_in=6.3)
add_body(doc, "The full eventual workflow has six steps. What changes is when each ships — sequenced to ask IT/security for the least trust first, directly operationalizing the Control stage above.", size=10)
add_body(doc, "This is where “AI-powered” actually earns its name: an AI agent that perceives, retrieves, reasons, and drafts — with a human as the safety valve wherever the model's own judgment says the risk is high. Only step 2 below is plain deterministic lookup; the rest is the model doing real cognitive work, not automation with extra steps.", size=10, italic=True, color=SLATE)
add_table(doc,
    ["Step", "Product responsibility", "What's actually AI", "Ships at"],
    [
        ["1. Detect", "Identify a difficult or escalated case in the existing helpdesk", "Classifies case difficulty from content, not a static priority flag", "Land"],
        ["2. Resolve identity", "Link customer/account across helpdesk and one system of record", "Deterministic lookup — the one non-AI step", "Land"],
        ["3. Assemble context", "Retrieve recent ticket, account and approval state, read-only, sources shown", "Retrieves and synthesizes records across systems into one picture (retrieval-augmented generation)", "Land"],
        ["4. Recommend", "Summarize history, gap and next action; draft a customer update", "Drafts the next action or update in plain language, grounded in the assembled context", "Expand (early)"],
        ["5. Approve / hand off", "Route high-risk steps to the right person with complete context", "Judges its own confidence/risk to decide what needs a human first", "Expand (early)"],
        ["6. Write back", "Record outcome, source and next step in the system of record", "Executes an AI-proposed action once approved — mechanical, not cognitive", "Expand (later)"],
    ], col_widths=[1.2, 2.5, 2.4, 0.9])
add_callout(doc, "MVP boundary", "in scope: one helpdesk, one system of record, one workflow, agent-assist/shadow mode, citations, approval, durable write-back once earned, audit. Not in scope: helpdesk replacement, open-ended autonomous actions, every connector, general chatbot, regulated approval decisions.")

# ============================================================ 9. ROADMAP
add_eyebrow(doc, "09 · Roadmap")
add_h1(doc, "Earn the platform, one gate at a time")
add_image(doc, os.path.join(ASSETS, "roadmap_timeline.png"), width_in=6.3)
add_table(doc,
    ["Horizon", "Goal", "Evidence gate"],
    [
        ["0–6 mo · Prove", "One workflow in one segment (Land/Control/Prove above)", "≥4 customers show the same workflow; ≥2 paid/committed pilots"],
        ["6–12 mo · Repeat", "Deploy the same workflow faster", "Faster repeat deploys; retention; acceptable margin"],
        ["12–24 mo · Expand", "Adjacent workflows for the same team", "Usage/renewal pull; repeatable cross-workflow expansion"],
        ["24–36 mo · Platform", "Selected Customer Operations workflows", "Expansion without custom-project economics"],
    ], col_widths=[1.8, 2.8, 2.6])
add_body(doc, "Quarterly stop rules: narrow or stop if customers prefer incumbent-native AI at acceptable cost; don't automate a step whose data, permission or failure recovery can't be verified; don't add a segment until the first workflow is repeatable and profitable; don't call it a platform until expansion happens without services-heavy customization.", size=9.5, color=SLATE, italic=True)
add_page_break(doc)

# ============================================================ 10. MOAT (card grid)
add_eyebrow(doc, "10 · Moat and defensibility")
add_h1(doc, "Same categories. One concrete artifact each.")
add_card_grid(doc, [
    {"badge": "1", "title": "Workflow evaluation data",
     "body": "Concrete artifact: per-workflow library of correct/refuse/escalate examples. Defeats: competitors starting quality from zero."},
    {"badge": "2", "title": "Reliable action contracts",
     "body": "Concrete artifact: versioned, scoped, audited, reversible connectors. Defeats: easy-to-copy idea, hard-to-copy hardening."},
    {"badge": "3", "title": "Operational learning loop",
     "body": "Concrete artifact: corrections/reopens become regression tests. Defeats: quality resetting each release."},
    {"badge": "4", "title": "Repeatable deployment",
     "body": "Concrete artifact: templates per stack combination. Defeats: slow, costly repeat deployments."},
    {"badge": "5", "title": "Switching cost, trusted ops",
     "body": "Concrete artifact: per-customer permission + evaluation profile. Defeats: easy vendor replacement."},
], cols=2)
add_body(doc, "The first three mechanisms were already visible in the competitive teardown; the last two sharpen that list into something each engagement actually produces. None of the five is the model, generic retrieval, or connector-catalogue size — those are copyable with an API key and a weekend, not defensible on their own. No network-effect claim yet.", size=9.5, color=SLATE, italic=True)
add_page_break(doc)

# ============================================================ 11. GTM
add_eyebrow(doc, "11 · Go-to-market, metrics, pricing")
add_h1(doc, "Land, prove, expand — who and what")
add_table(doc,
    ["Motion", "Who", "Offer", "Trigger to advance"],
    [
        ["Land", "Head/VP Support or Customer Ops buys; Support Ops operates; IT/security approve", "30–60 day pilot for one workflow", "Baseline volume, measurable pain, access approved"],
        ["Control / Prove", "Frontline agents and support managers", "Shadow/assist workflow, read-only", "No rise in reopens, unsafe actions or audit gaps"],
        ["Expand (early)", "Same support team", "Adjacent variant or second system", "Repeated usage, manager pull"],
        ["Expand (later)", "Customer success / operations", "Adjacent workflows, shared controls", "Renewal, buyer-backed ROI"],
    ], col_widths=[1.1, 2.6, 2.1, 1.6])
add_callout(doc, "Metrics", "primary: median context-collection minutes per difficult case. Guardrails: reopen rate, incorrect/unauthorized action rate, customer harm, audit completeness, connector failures, CSAT.")
add_body(doc, "Pricing hypothesis: a predictable base subscription plus a capped usage tier tied to workflow volume or verified outcomes. No price set before a durable resolution, reopen window and cost floor are defined.", size=10)
add_page_break(doc)

# ============================================================ 12. RISKS + REJECTION CONDITIONS + GATES
add_eyebrow(doc, "12 · Risks, rejection conditions, and decision gates")
add_h1(doc, "What has to be true before this scales")
add_table(doc,
    ["Risk", "Mitigation"],
    [
        ["Incumbents close the gap", "Win only with a validated workflow, faster deployment, better economics"],
        ["Another system increases complexity", "Prove reduced total admin effort, not only handle time"],
        ["Poor context or unsafe action", "Read-only first, citations, approval, audit, rollback, safe stop"],
        ["Custom integration destroys margin", "Versioned action contracts, stop rules for bespoke work"],
        ["Interview evidence is too narrow", "Disclose 4/8; treat ICP and workflow as hypotheses"],
        ["Bottom-up estimate overstates confidence", "Vertical-share input labeled an assumption, not fact"],
    ], col_widths=[2.4, 4.2])
add_callout(doc, "Reject or narrow this strategy if",
            "customers cannot name one frequent, urgent workflow; IT or security will not permit the required access; the incumbent completes it well enough at lower total cost; no buyer will sponsor a controlled pilot; or the product becomes another destination agents must maintain.")

add_h2(doc, "Evidence still missing, and the decision gates")
add_bullets(doc, [
    "Buyer interviews across company size and support maturity",
    "Recent workflow frequency, baseline effort, and failure cost",
    "A hands-on incumbent comparison and administrator experience",
    "Security approval, system permissions, and data-boundary requirements",
    "Pilot sponsorship, willingness to pay, and a full cost model",
])
add_table(doc,
    ["Interview decision gate", "Threshold", "Observed", "Status"],
    [
        ["Same repeated workflow", "≥4 participants", "2", "Not met"],
        ["Measurable impact, leading workflow", "≥3 participants", "1", "Not met"],
        ["Native tool insufficient", "≥3 participants", "2", "Not met"],
        ["Strong pilot interest", "≥2 participants", "0", "Not met"],
    ], col_widths=[3.2, 1.4, 1.1, 1.0])
add_callout(doc, "Final boundary",
            "this document recommends a direction under time and sample constraints. It does not claim a validated ICP, statistically representative demand, a confirmed buyer, willingness to pay, or a proven moat. All four interview decision gates are unmet, and the evidence gaps above are still open.")

# ============================================================ VIDEO LINK
add_eyebrow(doc, "Video walkthrough")
add_h1(doc, "Video link", size=20)
add_body(doc, "A recorded walkthrough (under five minutes) of the decision, evidence, and boundary above.", size=10.5, color=SLATE, space_after=10)
add_callout(doc, "Video link", "Add the Loom or Google Drive URL here before upload: ______________________________________________")
add_page_break(doc)

# ============================================================ 13. EVIDENCE INDEX / REFERENCES
add_eyebrow(doc, "13 · Selected sources and research record")
add_h1(doc, "Evidence index")
add_h2(doc, "General research base")
add_body(doc, "secondary-research-report.md, source-inventory.csv, review-evidence.csv, interview notes P01–P04, and research/bottom-up-market-estimate.md.", size=10)
add_h2(doc, "Competitive teardown register")
add_body(doc, "research/competitive-teardowns/ — V1–V3 (Intercom pricing, Fin Procedures, outcome definition), V4–V5 (Zendesk AI agents and pricing), V6–V8 (Freshdesk features, pricing, integrations), V9–V11 (Salesforce Service Cloud, Agentforce pricing, guardrails), R1–R2 (Intercom reviews), R3–R4 (Zendesk reviews), R5 (Freshdesk reviews), R6 (Salesforce/Agentforce reviews), I1–I2 (the two enterprise interviews used for cross-system pain examples), H (strategic synthesis), U (explicitly unresolved — see Section 12).", size=10)
add_body(doc, "Counts: 91 evidence records → 56 linked sources → 65-source register. Public and interview evidence are stored separately. The competitive register is related but kept distinct — never merged into one ID system.", size=9, color=SLATE, italic=True)

add_h2(doc, "Submission checklist")
add_bullets(doc, [
    "PDF visually checked; no fabricated quotes or participant identities.",
    "Interview diversity limitation and all unknowns disclosed.",
    "Competitor capabilities represented as current product claims, not outcome proof.",
    "Before upload: record the under-five-minute video, paste its working URL in the Video Link section above, regenerate the PDF, and open the link in a private browser window.",
], size=9.5)

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "final", "B2B_Product_Strategy_v3.docx")
doc.save(OUT)
print("Saved docx:", OUT)
