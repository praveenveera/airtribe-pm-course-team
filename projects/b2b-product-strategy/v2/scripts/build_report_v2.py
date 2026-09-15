import os
import sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from docx_lib_v2 import *

doc = new_document()
section = doc.sections[0]
add_footer_text(section, "Airtribe B2B Product Strategy — v2")

# ============================================================ COVER
add_eyebrow(doc, "AIRTRIBE  ·  B2B PRODUCT STRATEGY  ·  VERSION 2")
add_h1(doc, "Earn the platform. Don't announce it.", size=27)
add_rule(doc)
add_body(doc, "A 2–3 year product strategy for an AI-powered Customer Operations platform, re-derived from the brief's own starting fact: the original mid-market motion adopted slower than expected. This version diagnoses why, then lets that diagnosis drive segment, problem, moat and go-to-market — instead of treating them as separate hypotheses.",
         size=11.5, color=SLATE, space_after=14)
add_callout(doc, "Recommendation",
            "leadership is right that the destination is a comprehensive Customer Operations Platform — but naming it doesn't earn it. Start with the smallest possible product that needs the least possible trust: a read-only view that assembles a support agent's scattered context in one place, nothing written back anywhere, sold to a segment picked specifically to avoid the three traps that likely killed the first attempt.")
add_body(doc, "Submission date: 12 September 2026  ·  Evidence base: 91 public evidence records (56 sources), 4 anonymized interviews, 4 incumbent teardowns, plus one new bottom-up market analysis  ·  Research status: evidence-limited; interview saturation and buyer validation not achieved.",
         size=9, color=SLATE, italic=True, space_after=4)
add_page_break(doc)

# ============================================================ DIAGNOSIS
add_eyebrow(doc, "01 · The diagnosis")
add_h1(doc, "Why did the original motion stall?")
add_body(doc, "The brief hands us a fact, not a footnote: mid-sized businesses (200–1,000 employees) were targeted first, and adoption was slower than expected. Before choosing a segment or a problem, that fact needs an explanation — otherwise the next choice risks repeating whatever mistake the first one made. Four failure modes, each traceable to evidence already on file.")
add_table(doc,
    ["Failure mode", "What happened", "Evidence"],
    [
        ["1. Positioning trap", "Sold as “another AI chatbot.” Every incumbent already claims AI agents, integrations, human handoff and governance — a fifth chatbot has no reason to win.", "Secondary research capability table (Intercom/Zendesk/Freshdesk/Salesforce)"],
        ["2. Access-and-trust veto", "IT/security can kill a deal before the product is ever evaluated.", "P03 — pilot approved only after restricting to 2 queues, write-back disabled"],
        ["3. Bundled-AI trap", "Mid-market buyers compare a new vendor to the AI they already pay for, not to doing nothing.", "Freshworks mid-market survey (S09): 36% stuck in pilots; 86% say AI adds workload"],
        ["4. Workflow mismatch", "The product sold (chat deflection) isn't where the pain is (back-office context work).", "P01, P02, P04 all describe manual cross-system context reassembly, not failed FAQ answers"],
    ], col_widths=[1.5, 3.2, 2.3])
add_body(doc, "None of these four is a new discovery on its own — pieces of all four already exist in the prior research. What's new is treating them as one connected diagnosis that drives every later choice, instead of four separate observations sitting in different sections.", italic=True, color=SLATE)
add_page_break(doc)

# ============================================================ STEP 1 SEGMENT
add_eyebrow(doc, "02 · Step 1 — Customer segment")
add_h1(doc, "Keep the size band. Narrow hard on who.")
add_body(doc, "Stress-testing the alternatives against the diagnosis — not just against “who has the most pain”:")
add_table(doc,
    ["Segment", "Pain evidence", "Why not"],
    [
        ["Enterprise", "Most acute, best-quantified (P01: ~100–150 min/day; P02: 4–6 hr waits)", "P02 is regulated banking — maximizes the access veto. P01 is a multi-client BPO — no single stack owner."],
        ["SMB / startups", "Usually run one consolidated tool", "No helpdesk + CRM seam — no cross-system wedge to build on"],
        ["Mid-market, filtered", "The seam exists; buyer is reachable", "Selected — avoids all three traps at once"],
    ], col_widths=[1.4, 3.0, 2.6])
add_callout(doc, "Working segment", "B2B SaaS or technology-enabled services, roughly 51–1,000 employees, running a helpdesk AND a separate CRM or system of record as two distinct tools.", bg=LIGHT_AMBER)
add_h2(doc, "Anti-personas — named, not implied")
add_bullets(doc, [
    "Not regulated / financial services — P02 shows the compliance approval chain this triggers (4–6 hour waits, formal risk sign-off).",
    "Not single-system shops — no context to reassemble means no wedge, and no problem to sell against.",
    "Not multi-client outsourced support operations (BPOs) — P01's stack changes by client; no one owns the access decision.",
])
add_body(doc, "This lands close to v1's segment, and should — the underlying facts didn't move. What differs is the reasoning: three specific traps this segment avoids, not a sampling hypothesis picked for convenience.", italic=True, color=SLATE)
add_page_break(doc)

# ============================================================ STEP 2 MARKET
add_eyebrow(doc, "03 · Step 2 — Market opportunity")
add_h1(doc, "Two honest numbers, plus one new estimate")
add_table(doc,
    ["Signal", "Figure", "Status"],
    [
        ["Category size (top-down)", "Contact-center $47.7–63.9B; help-desk $14.3B", "Real category, not one precise TAM — definitions don't align well enough to combine"],
        ["Frequency", "Up to 1.2B tickets / 138M conversations in vendor datasets", "Frequent enough to observe repetition inside a 30–60 day pilot"],
        ["New: bottom-up cost pool", "$430–860M / year, illustrative", "Chained from the $16B mid-market “complexity drain” survey (S09) × 27% integration-barrier share (E10) × an explicitly labeled 10–20% vertical-share assumption"],
    ], col_widths=[1.8, 3.0, 2.2])
add_callout(doc, "What the new estimate is not",
            "a revenue forecast or a validated SOM. It's a cost-of-the-problem ceiling built entirely from evidence already on file, with its weakest input (vertical share) explicitly flagged as the next thing to replace with real data — see research/bottom-up-market-estimate.md for the full chain and its limits.")
add_body(doc, "Why customers would pay: removing measurable coordination work, protecting SLA, avoiding reopens, at a predictable total cost — unchanged from v1's logic. Still unproven at the level of an actual price point; no interview established a buyer's budget threshold.")
add_page_break(doc)

# ============================================================ STEP 3 PROBLEM
add_eyebrow(doc, "04 · Step 3 — Core problem")
add_h1(doc, "One problem, aimed at the mismatch")
add_callout(doc, "Job story",
            "when a support agent picks up a case that needs information or action from a second system, they want a single place to see everything relevant without switching tools or asking someone else — because today that costs 15–25 minutes of manual work per case and leaves duplicate, disconnected history for the next person to reconstruct.")
add_body(doc, "This is the same leading pattern v1 identified, carried at the same honesty level: two of four interviews (P01, P04) independently describe it — below the four-participant threshold the interview guide itself set for calling a pattern validated. It's the leading hypothesis, not a proven one, and it targets the mismatch diagnosed above directly, rather than another attempt at conversational deflection.")
add_page_break(doc)

# ============================================================ STEP 4 MOAT
add_eyebrow(doc, "05 · Step 4 — Moat and defensibility")
add_h1(doc, "Same categories. One concrete artifact each.")
add_table(doc,
    ["Mechanism", "Concrete artifact", "Risk it defeats"],
    [
        ["Workflow evaluation data", "Per-workflow library of correct/refuse/escalate examples from this customer's own cases", "Competitors copying the feature still start quality from zero"],
        ["Reliable action contracts", "Versioned, scoped, audited, reversible connectors per system pair", "Copying the idea is easy; copying years of failure-mode hardening is not"],
        ["Operational learning loop", "Every correction/reopen becomes a regression test before the next release", "Quality compounds with usage instead of resetting"],
        ["Repeatable deployment", "A template per common helpdesk + system-of-record combination", "Later customers on a known stack deploy faster and cheaper"],
        ["Switching cost, trusted ops", "A per-customer permission-and-evaluation profile built up over months", "Leaving means rebuilding IT/security trust from zero, elsewhere"],
    ], col_widths=[1.7, 3.2, 2.1])
add_callout(doc, "The sharpest addition", "the same access-and-trust veto that likely killed the original motion (failure mode #2) becomes, once earned, the thing that makes leaving costly.")
add_body(doc, "Explicitly not a moat: the underlying model, generic retrieval, or connector-catalogue size — all matchable with an API key and a weekend. No network-effect claim: cross-customer learning is only plausible once a legal, secure, consented aggregation mechanism exists, and it doesn't yet.", italic=True, color=SLATE)
add_page_break(doc)

# ============================================================ STEP 5 LAND EXPAND
add_eyebrow(doc, "06 · Step 5 — Land and expand")
add_h1(doc, "A narrower first cut, on purpose")
add_body(doc, "v1's MVP already bundled context-assembly, a drafted recommendation, approval routing and write-back into “the pilot.” Reasonable for shadow mode — still a bigger initial ask than it needs to be. v2's land wedge is smaller: read-only context, nothing else, first.")
add_table(doc,
    ["Stage", "What ships", "Access required", "Exit signal"],
    [
        ["Land", "Read-only sidebar/Slack view pulling helpdesk + CRM context for a flagged case. No draft, no write-back, no action.", "Read-only, scoped fields, zero write scopes", "Unprompted use on real cases; time-to-context drops"],
        ["Prove", "Same surface, same access. Measure minutes saved and trust (do agents still double-check sources?)", "Unchanged", "Sustained use, no access complaint or incident"],
        ["Expand 1", "Add a drafted next-action suggestion, human-approved before it's sent", "+1 narrow write scope, requested only after trust earned", "Drafts accepted often enough to save real time"],
        ["Expand 2", "Write-back to system of record for approved actions; adjacent workflows", "Scoped, audited, reversible write-back", "Renewal, manager pull for a second workflow"],
        ["Platform (yr 2–3)", "Adjacent Customer Ops workflows, same trust-graduated model replayed", "Same model per new workflow", "Expansion without a bespoke project each time"],
    ], col_widths=[1.1, 2.6, 1.9, 1.6])
add_callout(doc, "Buyer and approvers, unchanged from v1", "Head/VP of Support or Customer Operations buys; Support Ops operates; IT, security and (beyond read-only) procurement approve. Starting read-only means the hardest approver has almost nothing to review on day one.")
add_page_break(doc)

# ============================================================ UNPROVEN
add_eyebrow(doc, "07 · What's still unproven")
add_h1(doc, "Carried forward honestly")
add_bullets(doc, [
    "Interview sample is still 4 of the requested 8 minimum — disclosed the same way v1 disclosed it.",
    "The leading workflow (context/handoff) has 2 of 4 interview mentions against the interview guide's own 4-participant threshold.",
    "No confirmed economic buyer, no price point, no proposed-product pilot commitment in any interview.",
    "The bottom-up estimate's vertical-share input (10–20%) is a labeled assumption, not a sourced figure.",
    "All four of v1's interview decision gates were unmet; re-deriving the strategy from the same evidence doesn't change that arithmetic — they're still unmet here.",
])
add_h2(doc, "Evidence index")
add_body(doc, "This document cites back to the underlying research rather than duplicating it: secondary-research-report.md, source-inventory.csv, review-evidence.csv, interview notes P01–P04, and the competitive teardowns in the parent repository. The only new file behind this version is research/bottom-up-market-estimate.md.", size=9.5, color=SLATE)

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "final", "B2B_Product_Strategy_v2.docx")
doc.save(OUT)
print("Saved docx:", OUT)
