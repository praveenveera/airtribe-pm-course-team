import os
import sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from deck_lib import *
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR

prs = new_presentation()
PAGE = [1]  # title slide (S1) carries no folio; first foot() call labels S2 as page 2

def foot(slide, label=DECK_LABEL):
    PAGE[0] += 1
    add_footer(slide, PAGE[0], label)

# ============================================================ S1 — TITLE
s = new_slide(prs)
add_eyebrow(s, "AIRTRIBE  ·  B2B PRODUCT STRATEGY", y=920000)
add_headline(s, "From AI chatbot to\ntrusted workflow completion", y=1280000, size=40, h=1500000)
add_textbox(s, "One segment. One workflow. 91 evidence records. 4 real interviews.",
            MARGIN, 2950000, CONTENT_W, 400000, size=16, color=ROSE, italic=True, font=F_HEAD)
add_textbox(s, "Praveen Veera   ·   Airtribe — AI-First Product Management   ·   September 2026",
            MARGIN, 6400800, CONTENT_W, 320040, size=10.5, color=GRAY)
# mini ascending staircase motif, bottom right
bx, by = 9700000, 5450000
pts = [(bx, by + 620000), (bx + 620000, by + 380000), (bx + 1240000, by + 190000), (bx + 1860000, by)]
for i in range(len(pts) - 1):
    x1, y1 = pts[i]; x2, y2 = pts[i + 1]
    ln = s.shapes.add_connector(1, Emu(x1), Emu(y1), Emu(x2), Emu(y2))
    ln.line.color.rgb = NEUTRAL
    ln.line.width = Emu(19050)
for i, (px, py) in enumerate(pts):
    add_dot(s, px, py, 60000, GREEN if i == len(pts) - 1 else ROSE)

# ============================================================ S2 — HOW TO USE
s = new_slide(prs)
add_eyebrow(s, "HOW TO USE THIS DECK")
add_headline(s, "The 5-minute story, plus everything behind it", size=30, h=560000)
colw = (CONTENT_W - 320040) / 2
x1, x2 = MARGIN, MARGIN + colw + 320040
top = 1780000
add_card(s, x1, top, colw, 3900000, fill=WHITE)
add_card(s, x2, top, colw, 3900000, fill=WHITE)
pad = 320040
add_textbox(s, "THE STORY  ·  slides 3–10", x1 + pad, top + 260000, colw - 2 * pad, 320000,
            size=12, color=ROSE, bold=True, spacing=1.5)
story_items = [
    "1. The decision, in one line",
    "2. Five questions, one strategy",
    "3. Where we compete — and won't",
    "4. Four interviews, one direction",
    "5. What we'd build first",
    "6. Moat: what compounds",
    "7. Land and expand",
    "8. Close",
]
add_textbox(s, "\n".join(story_items), x1 + pad, top + 660000, colw - 2 * pad, 3000000,
            size=12.5, color=INK, line_spacing=1.5)
add_textbox(s, "APPENDIX  ·  slides 11–24", x2 + pad, top + 260000, colw - 2 * pad, 320000,
            size=12, color=ROSE, bold=True, spacing=1.5)
app_items = [
    "Methodology and traceability",
    "Segment and core problem, in full",
    "Market opportunity, in full",
    "Four entry doors + competitor table",
    "Wedge, moat and crowded space",
    "Initial workflow and MVP boundary",
    "Roadmap: earning the platform",
    "Moat mechanisms, in full",
    "GTM motion, metrics and pricing",
    "Risks, decision gates and boundary",
    "Evidence register",
]
add_textbox(s, "\n".join(app_items), x2 + pad, top + 660000, colw - 2 * pad, 3200000,
            size=11.5, color=INK, line_spacing=1.4)
foot(s)

# ============================================================ S3 — THE DECISION IN ONE LINE
s = new_slide(prs)
add_eyebrow(s, "THE DECISION IN ONE LINE")
add_headline(s, "Land narrow. Prove it's safe. Earn the platform.", size=30, h=560000)

stage_y_base = 3550000
stage_x = [1150000, 4050000, 6950000, 9850000]
stage_y = [stage_y_base - 700000 * i for i in range(4)]
labels = ["PROVE", "REPEAT", "EXPAND", "PLATFORM"]
sub = ["0–6 months", "6–12 months", "12–24 months", "24–36 months"]
colors = [ROSE, ROSE, NEUTRAL, GREEN]
for i in range(3):
    ln = s.shapes.add_connector(1, Emu(stage_x[i] + 60000), Emu(stage_y[i]),
                                 Emu(stage_x[i + 1] + 60000), Emu(stage_y[i + 1]))
    ln.line.color.rgb = NEUTRAL
    ln.line.width = Emu(19050)
for i in range(4):
    add_dot(s, stage_x[i] + 60000, stage_y[i], 90000, colors[i])
    add_textbox(s, labels[i], stage_x[i] - 500000, stage_y[i] - 380000, 1250000, 260000,
                size=12, color=colors[i], bold=True, align=PP_ALIGN.CENTER, spacing=1)
    add_textbox(s, sub[i], stage_x[i] - 500000, stage_y[i] + 160000, 1250000, 260000,
                size=11, color=INK, bold=True, align=PP_ALIGN.CENTER, font=F_HEAD)

gate_y = 4650000
gate_h = 1150000
gates = [
    "Prove one workflow works\nfor one segment",
    "≥4 customers repeat it;\n≥2 paid or committed pilots",
    "Renewal, manager pull,\nrepeatable across teams",
    "Expansion happens without\nservices-heavy customization",
]
gw = (CONTENT_W - 3 * 274320) / 4
for i in range(4):
    gx = MARGIN + i * (gw + 274320)
    add_card(s, gx, gate_y, gw, gate_h, fill=WHITE)
    add_textbox(s, "EVIDENCE GATE", gx + 228600, gate_y + 160000, gw - 457200, 240000,
                size=9, color=ROSE, bold=True, spacing=1)
    add_textbox(s, gates[i], gx + 228600, gate_y + 420000, gw - 457200, 650000,
                size=10, color=GRAY, line_spacing=1.15)
foot(s)

# ============================================================ S4 — FIVE QUESTIONS, ONE STRATEGY (table)
s = new_slide(prs)
add_eyebrow(s, "FIVE QUESTIONS, ONE STRATEGY")
add_headline(s, "What the assignment asked, answered once", size=30, h=560000)
rows = [
    ["STEP", "ANSWER", "STATUS"],
    ["1. Segment", "Support-led B2B SaaS / tech-enabled services, 51–1,000 employees, existing helpdesk + CRM",
     "Sampling hypothesis"],
    ["2. Market", "Large adjacent category (contact-center + helpdesk software); support work is frequent; AI adoption is rising while mature deployment stays rare",
     "Supported directionally"],
    ["3. Core problem", "Fragmented context and approvals during difficult, cross-system cases — 20–25 min/case; 15 min duplicate logging + 4–6 hr approval wait",
     "Leading hypothesis (2/4 gates)"],
    ["4. Moat", "Workflow evaluation data, reliable action contracts, a correction loop, and repeatable deployment — not the model or the connector list",
     "Candidate, unproven"],
    ["5. Land & expand", "Land one workflow with Support → prove it's safe and cheaper → expand to adjacent workflows and teams → earn the platform claim",
     "Sequencing principle"],
]
col_w = [1750000, 6800000, 2361840]
row_h = [440000, 640000, 780000, 780000, 780000, 640000]
add_table(s, MARGIN, 1700000, CONTENT_W, col_w, rows, row_heights=row_h,
          align_map={2: PP_ALIGN.LEFT}, body_size=10, header_size=9.5)
add_textbox(s, "Full evidence behind every row → appendix, slides 12–24.",
            MARGIN, 6120000, CONTENT_W, 260000, size=10, color=GRAY, italic=True)
foot(s)

# ============================================================ S5 — THREE VERDICTS
s = new_slide(prs)
add_eyebrow(s, "WHERE WE COMPETE — AND WON'T")
add_headline(s, "Three calls on where the product sits", size=30, h=560000)
card_w = 3447288
gap = 274320
card_y = 1780000
card_h = 4200000
verdicts = [
    ("REJECTED", ROSE, "Another AI chatbot",
     "Table stakes. Intercom, Zendesk, Freshdesk and Salesforce already ship AI agents, integrations, actions and governance claims. Building one more doesn't earn anything."),
    ("THE WEDGE", GREEN, "Workflow completeness",
     "Assemble permissioned context, show the evidence used, route approval, preserve the full handoff, write the result back — across one small stack. Not proven. Testable in a pilot."),
    ("NOT YET", NEUTRAL, "A broad platform",
     "Earned only after one workflow is repeatable and profitable across four or more customers. Calling it a platform today would be a claim, not a fact."),
]
for i, (tag, color, title, body) in enumerate(verdicts):
    cx = MARGIN + i * (card_w + gap)
    fill = ROSE_LIGHT if color == ROSE and tag == "REJECTED" else (GREEN_LIGHT if color == GREEN else NEUTRAL_LIGHT)
    text_c = color
    add_card(s, cx, card_y, card_w, card_h, fill=WHITE)
    add_pill(s, cx + 274320, card_y + 292608, 1750000, 365760, tag, fill=color, text_color=WHITE)
    add_textbox(s, title, cx + 274320, card_y + 950000, card_w - 548640, 550000, size=18,
                color=INK, bold=True, font=F_HEAD)
    add_textbox(s, body, cx + 274320, card_y + 1580000, card_w - 548640, card_h - 1900000,
                size=11.5, color=GRAY, line_spacing=1.25)
foot(s)

# ============================================================ S6 — FOUR INTERVIEWS, ONE DIRECTION
s = new_slide(prs)
add_eyebrow(s, "FOUR INTERVIEWS, ONE DIRECTION")
add_headline(s, "Different companies. The same shape of pain.", size=30, h=560000)
people = [
    ("P01", "Enterprise outsourced support · frontline",
     "5–6 difficult cases a day; 20–25 minutes of context work per case; the answer given over Teams wasn't kept anywhere durable."),
    ("P02", "Enterprise banking complaints · frontline",
     "15 minutes of duplicate logging per case; 4–6 hour formal approval wait; audit evidence manually attached across systems."),
    ("P03", "Mid-market (~400 people) · application approval",
     "Approved an AI analytics pilot only after limiting it to two Zendesk queues and disabling write-back."),
    ("P04", "Mid-market B2B SaaS/services · frontline",
     "Manually reconstructed Zendesk information inside Jira for an engineering escalation; warned against adding another duplicate system."),
]
pw = (CONTENT_W - 274320) / 2
ph = 2000000
positions = [(MARGIN, 1780000), (MARGIN + pw + 274320, 1780000),
             (MARGIN, 1780000 + ph + 228600), (MARGIN + pw + 274320, 1780000 + ph + 228600)]
for (pid, role, quote), (px, py) in zip(people, positions):
    add_card(s, px, py, pw, ph, fill=WHITE)
    add_circle_badge(s, px + 274320, py + 274320, 500000, pid, fill=ROSE, size=13)
    add_textbox(s, role, px + 900000, py + 320000, pw - 1150000, 550000, size=11.5, color=INK,
                bold=True, line_spacing=1.1, anchor=MSO_ANCHOR.MIDDLE)
    add_textbox(s, quote, px + 274320, py + 950000, pw - 548640, ph - 1150000, size=10.5,
                color=GRAY, line_spacing=1.2)
add_textbox(s, "None of the four validated demand for a new product. All four showed the same shape of pain: context split across systems, and no safe way to act on it.",
            MARGIN, 6120000, CONTENT_W, 260000, size=10.5, color=ROSE, italic=True, bold=True)
foot(s)

# ============================================================ S7 — WHAT WE'D BUILD FIRST
s = new_slide(prs)
add_eyebrow(s, "WHAT WE'D BUILD FIRST")
add_headline(s, "One workflow, six steps, human in the loop", size=30, h=560000)
steps = [
    ("1", "Detect", "Identify a difficult or escalated case inside the existing helpdesk."),
    ("2", "Resolve identity", "Link the customer or account across the helpdesk and one system of record."),
    ("3", "Assemble context", "Retrieve recent ticket, account and approval state, read-only first, with sources shown."),
    ("4", "Recommend", "Summarize history, gap and next action; draft a customer update. No invented data."),
    ("5", "Approve / hand off", "Route high-risk steps to the right person with complete context; human approval."),
    ("6", "Write back", "Record the outcome, source and next step in the system of record, with audit and retry."),
]
row_h = 470000
top = 1780000
for i, (n, title, desc) in enumerate(steps):
    ry = top + i * row_h
    add_circle_badge(s, MARGIN, ry + 40000, 400000, n, fill=ROSE if i < 4 else GREEN, size=13)
    add_rich_textbox(s, MARGIN + 550000, ry, 3300000, row_h, [
        [(title, {'size': 13, 'bold': True, 'color': INK, 'font': F_HEAD})]
    ], anchor=MSO_ANCHOR.MIDDLE)
    add_textbox(s, desc, MARGIN + 3950000, ry, CONTENT_W - 3950000, row_h, size=10.5,
                color=GRAY, anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.1)
    if i < len(steps) - 1:
        add_hline(s, MARGIN, ry + row_h, CONTENT_W)
add_callout(s, MARGIN, top + len(steps) * row_h + 160000, CONTENT_W, 560000,
            "Not now:", "helpdesk replacement, open-ended autonomous actions, regulated approval decisions, or calling this a platform.",
            fill=NEUTRAL_LIGHT, label_color=ROSE, text_size=11)
foot(s)

# ============================================================ S8 — MOAT: WHAT COMPOUNDS
s = new_slide(prs)
add_eyebrow(s, "MOAT: WHAT COMPOUNDS")
add_headline(s, "Not the model. What repeats after it.", size=30, h=560000)
mechanisms = [
    ("1", "Workflow evaluation data", "Permissioned cases define correct resolution, safe refusal and durable completion — task success improves across deployments."),
    ("2", "Reliable action contracts", "Versioned scopes, idempotency, retries, audit and rollback — deployment time and failure rate fall with reuse."),
    ("3", "Operational learning loop", "Corrections, reopens and knowledge gaps become regression tests and release gates — quality improves without leakage."),
    ("4", "Repeatable deployment", "Templates for common stack + workflow combinations cut services effort — margin improves, implementation time drops."),
    ("5", "Switching cost through trusted operations", "Embedded permissions, evaluation history and workflow evidence make replacement costly — earned through use, not lock-in."),
]
row_h = 640000
top = 1780000
for i, (n, title, desc) in enumerate(mechanisms):
    ry = top + i * row_h
    add_circle_badge(s, MARGIN, ry + 60000, 400000, n, fill=GREEN, size=13)
    add_textbox(s, title, MARGIN + 550000, ry, 3300000, row_h, size=13, color=INK, bold=True,
                font=F_HEAD, anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.05)
    add_textbox(s, desc, MARGIN + 3950000, ry, CONTENT_W - 3950000, row_h, size=10.5,
                color=GRAY, anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.15)
    if i < len(mechanisms) - 1:
        add_hline(s, MARGIN, ry + row_h, CONTENT_W)
add_textbox(s, "No network-effect claim yet — cross-customer learning is unsupported until a legal, secure, consented aggregation model exists.",
            MARGIN, top + len(mechanisms) * row_h + 140000, CONTENT_W, 400000, size=10, color=GRAY, italic=True)
foot(s)

# ============================================================ S9 — LAND AND EXPAND
s = new_slide(prs)
add_eyebrow(s, "LAND AND EXPAND")
add_headline(s, "Small door in. Wide footprint, only if earned.", size=30, h=560000)
motion = [
    ("LAND", ROSE, "One segment, one helpdesk, one system, one workflow.\nBuyer: Head/VP Support or Customer Ops."),
    ("CONTROL", ROSE, "Read-only first. Shadow mode. Human approval\non every high-risk step."),
    ("PROVE", NEUTRAL, "30–60 day paid or committed pilot.\nDurable resolution, safety, effort, total cost."),
    ("EXPAND", GREEN, "Adjacent workflow or system for the same team,\nthen customer success / operations."),
]
mw = (CONTENT_W - 3 * 228600) / 4
top = 1780000
mh = 2050000
for i, (tag, color, body) in enumerate(motion):
    mx = MARGIN + i * (mw + 228600)
    add_card(s, mx, top, mw, mh, fill=WHITE)
    add_pill(s, mx + 228600, top + 250000, mw - 457200, 340000, tag, fill=color, text_color=WHITE, size=10.5)
    add_textbox(s, body, mx + 228600, top + 780000, mw - 457200, mh - 950000, size=10, color=GRAY, line_spacing=1.2)
    if i < len(motion) - 1:
        add_textbox(s, "→", mx + mw + 10000, top + mh / 2 - 150000, 200000, 300000, size=18,
                    color=NEUTRAL, bold=True, align=PP_ALIGN.CENTER)
add_callout(s, MARGIN, top + mh + 250000, CONTENT_W, 700000, "Expansion trigger",
            "measured workload reduction and reliable outcomes create internal pull. A platform mandate does not.",
            fill=NEUTRAL_LIGHT, text_size=12)
add_textbox(s, "Initial buyer: Head/VP Support or Customer Operations. Operator: Support Ops. Approvers: IT, security, procurement.",
            MARGIN, top + mh + 1080000, CONTENT_W, 300000, size=10, color=GRAY, italic=True)
foot(s)

# ============================================================ S10 — IN CLOSE
s = new_slide(prs)
for shape_i in range(4):
    pass
add_textbox(s, "IN CLOSE", MARGIN, 1400000, CONTENT_W, 320000, size=12, color=ROSE, bold=True, spacing=2)
add_headline(s, "Four decision gates. Zero fully met.\nThat's the honest starting line.", x=MARGIN, y=1780000,
             w=CONTENT_W, size=32, h=1500000)
add_textbox(s, "The strategy is coherent. The evidence underneath it is not — yet. The fastest path isn't more AI, it's earning the right to automate one workflow, one interview at a time.",
            MARGIN, 3450000, CONTENT_W - 1200000, 900000, size=14, color=GRAY, line_spacing=1.3)
add_hline(s, MARGIN, 4750000, 3000000, color=ROSE, weight=28575)
add_textbox(s, "Thank you — Praveen Veera", MARGIN, 4950000, CONTENT_W, 360000, size=14, color=INK, bold=True, font=F_HEAD)
add_textbox(s, "Appendix follows — full evidence behind every claim in this story.",
            MARGIN, 5340000, CONTENT_W, 320000, size=11, color=GRAY, italic=True)
foot(s)

# ============================================================ S11 — APPENDIX DIVIDER
s = new_slide(prs)
add_textbox(s, "APPENDIX", MARGIN, 2600000, CONTENT_W, 700000, size=44, color=INK, bold=True, font=F_HEAD)
add_textbox(s, "The full evidence behind every slide in the story", MARGIN, 3350000, CONTENT_W, 400000,
            size=16, color=ROSE, italic=True, font=F_HEAD)
add_textbox(s, "Methodology · segment and problem in full · market opportunity · four-vendor teardown · initial workflow and roadmap · moat mechanisms · GTM, metrics and pricing · risks, decision gates and evidence register",
            MARGIN, 3950000, CONTENT_W - 1500000, 800000, size=11.5, color=GRAY, line_spacing=1.4)
foot(s, label="B2B Product Strategy — Appendix")

APP_LABEL = "B2B Product Strategy — Appendix"

# ============================================================ S12 — METHODOLOGY
s = new_slide(prs)
add_eyebrow(s, "APPENDIX · METHODOLOGY")
add_headline(s, "How the evidence was separated", size=30, h=560000)
meth = [
    ("1", "Four evidence layers, never mixed.", "Market/report studies, competitor product pages, public reviews and communities, and interviews each answer a different question and carry a different limitation. One layer never substitutes for another."),
    ("2", "Traceability is counted, not asserted.", "91 claim-level public evidence records link to 56 unique sources inside a 65-source register (64 external sources plus the assignment brief). 9 registered sources aren't linked to any evidence row. The 4 interviews are tracked separately."),
    ("3", "Interviews reconstruct one real recent case.", "Each of the 4 anonymized interviews asked the participant to walk through one specific difficult case before any product concept was mentioned — not to react to a pitch."),
    ("4", "No policy-as-proof.", "The brief lists policy documents as an example source, not a requirement. This strategy makes no legal or compliance claim, so no government policy is used as evidence of product-market fit."),
    ("5", "Integrity rule, applied throughout.", "No review post is treated as an interview. No vendor statistic is treated as universal market fact. No paraphrased interview note is presented as a verbatim quote."),
]
row_h = 900000
top = 1740000
for i, (n, title, desc) in enumerate(meth):
    ry = top + i * row_h
    add_circle_badge(s, MARGIN, ry + 40000, 400000, n, fill=ROSE, size=13)
    add_textbox(s, title, MARGIN + 550000, ry, 3300000, row_h, size=12, color=INK, bold=True,
                font=F_HEAD, line_spacing=1.1)
    add_textbox(s, desc, MARGIN + 3950000, ry, CONTENT_W - 3950000, row_h, size=10, color=GRAY, line_spacing=1.2)
foot(s, label=APP_LABEL)

# ============================================================ S13 — SEGMENT & PROBLEM DETAIL
s = new_slide(prs)
add_eyebrow(s, "APPENDIX · SEGMENT AND PROBLEM")
add_headline(s, "Who it's for, and what breaks for them today", size=28, h=560000)
add_callout(s, MARGIN, 1700000, CONTENT_W, 780000, "Working segment",
            "Support-led B2B SaaS / tech-enabled services, ~51–1,000 employees, an established helpdesk plus CRM or system of record, growing request volume, limited support-ops capacity.",
            fill=WHITE, text_size=11, label_size=10)
rows2 = [
    ["EVIDENCE", "PATTERN", "SAFE CONCLUSION"],
    ["P01 + P04: complex frontline escalations", "Context reconstructed across helpdesk, CRM, chat and engineering systems",
     "Context retrieval and durable handoff lead the workflow hypothesis (2 of 4)"],
    ["P02: regulated banking complaints", "15 min duplicate logging; 4–6 hr approval wait; audit split across systems",
     "Audit-safe coordination and approval visibility matter in this case"],
    ["P03: application-approval stakeholder", "Pilot limited to 2 queues; write-back disabled; least-privilege review",
     "A narrow, read-only, reversible pilot is more credible than broad access"],
]
col_w = [2900000, 4000000, 4011840]
row_h2 = [420000, 620000, 620000, 620000]
add_table(s, MARGIN, 2660000, CONTENT_W, col_w, rows2, row_heights=row_h2, body_size=9.5, header_size=9)
add_callout(s, MARGIN, 5220000, CONTENT_W, 780000, "Problem statement",
            "Two frontline cases showed manual context transfer during complex escalation; a banking case showed duplicate audit work and approval delay; an application stakeholder showed permission and write-back barriers. This supports a leading assist-first context-and-handoff hypothesis, not market prevalence.",
            fill=NEUTRAL_LIGHT, text_size=10, label_size=9.5)
foot(s, label=APP_LABEL)

# ============================================================ S14 — MARKET OPPORTUNITY DETAIL
s = new_slide(prs)
add_eyebrow(s, "APPENDIX · MARKET OPPORTUNITY")
add_headline(s, "Big category, frequent workflow, unproven price", size=28, h=560000)
rows3 = [
    ["SIGNAL", "EVIDENCE", "INTERPRETATION"],
    ["Large adjacent category", "2025 estimates: contact-center software $47.7B–$63.9B; help-desk software $14.3B",
     "Material category, but definitions vary — no single precise TAM"],
    ["High workflow frequency", "Freshworks datasets span up to 1.2B tickets / 138M conversations",
     "A pilot can observe repeated outcomes within weeks"],
    ["Adoption–maturity gap", "82% of senior leaders invested in AI; only 10% report mature deployment",
     "Operational reliability may matter more than basic AI access"],
    ["Assist-first timing", "Gartner: 73% forecast agent-assist implementation by end-2025; autonomous agents rank lower",
     "Assist or shadow mode is the lower-risk landing motion"],
    ["Security / readiness", "51% say security delayed or limited AI initiatives (Salesforce)",
     "Permissions, audit and data boundaries are adoption requirements, not add-ons"],
]
col_w3 = [2400000, 4900000, 3611840]
row_h3 = [420000, 560000, 560000, 560000, 560000, 620000]
add_table(s, MARGIN, 1700000, CONTENT_W, col_w3, rows3, row_heights=row_h3, body_size=9.5, header_size=9)
add_textbox(s, "Willingness-to-pay logic: customers may pay if the product removes measurable coordination work, improves SLA and avoids reopens at a predictable total cost. The four interviews did not establish an economic buyer, budget threshold or purchase intent.",
            MARGIN, 6060000, CONTENT_W, 320000, size=9.5, color=GRAY, italic=True, line_spacing=1.1)
foot(s, label=APP_LABEL)

# ============================================================ S15 — FOUR ENTRY DOORS (quadrant)
s = new_slide(prs)
add_eyebrow(s, "APPENDIX · COMPETITIVE MAP")
add_headline(s, "Four different entry doors", size=30, h=560000)
add_textbox(s, "Strategic map inferred from public vendor claims and review signals. Positions are directional, not measured scores.",
            MARGIN, 1620000, CONTENT_W, 320000, size=10.5, color=GRAY, italic=True)
qx, qy, qs = MARGIN + 900000, 2200000, 8000000
qframe = add_card(s, qx, qy, qs, qs * 0.5, fill=WHITE, shadow=True)
add_hline(s, qx, qy + qs * 0.25, qs, color=LINE)
add_vline(s, qx + qs / 2, qy, qs * 0.5, color=LINE)
add_textbox(s, "AI-FIRST PROPOSITION", qx, qy - 260000, qs, 240000, size=10, color=NEUTRAL, bold=True,
            align=PP_ALIGN.CENTER, spacing=1)
add_textbox(s, "LOW", qx - 500000, qy + qs * 0.25 - 500000, 460000, 260000, size=9, color=NEUTRAL, align=PP_ALIGN.RIGHT)
add_textbox(s, "HIGH", qx - 500000, qy - 130000, 460000, 260000, size=9, color=NEUTRAL, align=PP_ALIGN.RIGHT)
add_textbox(s, "LOW", qx, qy + qs * 0.5 + 60000, qs / 2, 240000, size=9, color=NEUTRAL, align=PP_ALIGN.CENTER)
add_textbox(s, "HIGH", qx + qs / 2, qy + qs * 0.5 + 60000, qs / 2, 240000, size=9, color=NEUTRAL, align=PP_ALIGN.CENTER)
add_textbox(s, "OPERATIONAL PLATFORM BREADTH", qx, qy + qs * 0.5 + 330000, qs, 240000, size=10, color=NEUTRAL,
            bold=True, align=PP_ALIGN.CENTER, spacing=1)
vendors = [
    ("Intercom / Fin", qx + qs * 0.12, qy + qs * 0.10),
    ("Zendesk AI", qx + qs * 0.58, qy + qs * 0.12),
    ("Freshdesk / Freddy", qx + qs * 0.08, qy + qs * 0.34),
    ("Salesforce / Agentforce", qx + qs * 0.55, qy + qs * 0.36),
]
for name, vx, vy in vendors:
    add_dot(s, vx, vy, 70000, ROSE)
    add_textbox(s, name, vx + 90000, vy - 90000, 2200000, 260000, size=10, color=INK, bold=True)
foot(s, label=APP_LABEL)

# ============================================================ S16 — COMPETITOR TABLE
s = new_slide(prs)
add_eyebrow(s, "APPENDIX · COMPETITIVE POSITION")
add_headline(s, "What each incumbent already owns", size=28, h=560000)
rows4 = [
    ["PRODUCT", "CUSTOMER SERVED BEST", "PROMISE / BUSINESS MODEL", "BIGGEST WEAKNESS"],
    ["Intercom / Fin", "Digital-native support teams wanting AI-first conversations",
     "Outcome-priced AI resolution; seats, outcomes, Copilot", "Complex work can undermine simple outcome economics"],
    ["Zendesk AI", "Teams needing mature ticketing and service operations",
     "Complete service operations with embedded AI; seats + suites", "Breadth increases administration and time to value"],
    ["Freshdesk / Freddy AI", "Growing, value-conscious support teams",
     "Approachable omnichannel helpdesk with AI; seats + tiers", "Depth can lag as customer complexity grows"],
    ["Salesforce / Agentforce", "Complex enterprises, especially existing Salesforce accounts",
     "Governed AI on CRM context; licences, credits, clouds", "Platform cost and complexity can be over-extended"],
]
col_w4 = [1850000, 3300000, 3300000, 2461840]
row_h4 = [560000, 780000, 780000, 780000, 780000]
add_table(s, MARGIN, 1700000, CONTENT_W, col_w4, rows4, row_heights=row_h4, body_size=9.5, header_size=8.5)
add_textbox(s, "Rejected differentiators: “uses AI,” “unifies context,” “integrates with existing tools,” “governed and secure,” “vendor neutral” — necessary, none sufficient.",
            MARGIN, 6060000, CONTENT_W, 320000, size=9.5, color=GRAY, italic=True, line_spacing=1.1)
foot(s, label=APP_LABEL)

# ============================================================ S17 — WEDGE / MOAT / VULNERABILITY
s = new_slide(prs)
add_eyebrow(s, "APPENDIX · WEDGE AND VULNERABILITY")
add_headline(s, "Where each incumbent is strong, and where to test", size=26, h=560000)
rows5 = [
    ["COMPETITOR", "ENTRY WEDGE", "WHAT COMPOUNDS AFTER ENTRY", "VULNERABILITY TO TEST"],
    ["Intercom / Fin", "Standalone outcome-priced AI agent", "Conversation, knowledge, workflow and outcome data",
     "Tuning effort, handoff quality, cost predictability"],
    ["Zendesk AI", "Trusted ticketing system of record", "Case history, routing, reporting, marketplace",
     "Setup effort and workflow-specific resolution quality"],
    ["Freshdesk / Freddy", "Ease and accessible price-to-value", "Configured helpdesk workflow, apps, suite expansion",
     "Advanced depth and integration reliability as teams mature"],
    ["Salesforce / Agentforce", "CRM context and enterprise governance", "Data, flows, permissions, partner ecosystem",
     "Time to value and fit for heterogeneous stacks"],
]
col_w5 = [1850000, 2600000, 3400000, 2961840]
row_h5 = [560000, 780000, 780000, 780000, 780000]
add_table(s, MARGIN, 1700000, CONTENT_W, col_w5, rows5, row_heights=row_h5, body_size=9.5, header_size=8.5)
add_callout(s, MARGIN, 6060000, CONTENT_W, 320000, "", "Category wedge: workflow-specific completeness — assemble, evidence, approve, hand off and write back, across a small set of stacks, faster and cheaper than the incumbent's native AI.",
            fill=BG, text_size=9.5)
foot(s, label=APP_LABEL)

# ============================================================ S18 — CROWDED CAPABILITY SPACE
s = new_slide(prs)
add_eyebrow(s, "APPENDIX · CROWDED CATEGORY")
add_headline(s, "Seven capabilities every incumbent already claims", size=28, h=560000)
caps = [
    "AI agents and knowledge-grounded answers", "Agent assistance and summarisation",
    "Human handoff and approvals", "External integrations and system actions",
    "Analytics, evaluation and governance", "Usage- or outcome-based pricing",
    "Compatibility with an existing service stack",
]
cw = (CONTENT_W - 274320) / 2
ch = 560000
top = 1740000
for i, cap in enumerate(caps):
    col = i % 2
    row = i // 2
    cx = MARGIN + col * (cw + 274320)
    cy = top + row * (ch + 137160)
    add_card(s, cx, cy, cw, ch, fill=WHITE)
    add_circle_badge(s, cx + 180000, cy + ch / 2 - 150000, 300000, str(i + 1), fill=NEUTRAL, size=10.5)
    add_textbox(s, cap, cx + 620000, cy, cw - 750000, ch, size=10.5, color=INK, bold=True,
                anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.1)
add_callout(s, MARGIN, top + 4 * (ch + 137160) + 60000, CONTENT_W, 620000, "Strategy implication",
            "generic AI and integration claims can't carry the strategy. A credible entry needs one workflow where the product proves better completion, control, effort or total cost than the incumbent.",
            fill=NEUTRAL_LIGHT, text_size=10.5)
foot(s, label=APP_LABEL)

# ============================================================ S19 — INITIAL WORKFLOW + MVP
s = new_slide(prs)
add_eyebrow(s, "APPENDIX · INITIAL WORKFLOW")
add_headline(s, "The six-step workflow and its MVP boundary", size=27, h=560000)
rows6 = [
    ["STEP", "PRODUCT RESPONSIBILITY", "CONTROL"],
    ["1. Detect", "Identify a difficult or escalated case in the existing helpdesk", "Rules + human override"],
    ["2. Resolve identity", "Link customer/account across helpdesk and one system of record", "Permission-aware identifiers"],
    ["3. Assemble context", "Retrieve recent ticket, account, email and approval state with sources", "Read-only first; field-level access"],
    ["4. Recommend", "Summarize history, gap, owner and next action; draft update", "Visible evidence; no invented data"],
    ["5. Approve / hand off", "Route high-risk steps to the right person with complete context", "Human approval; safe stop"],
    ["6. Write back", "Record outcome, source, owner and next step in the system of record", "Idempotency, audit, retry"],
]
col_w6 = [1750000, 6500000, 2661840]
row_h6 = [400000, 480000, 480000, 480000, 480000, 480000, 480000]
add_table(s, MARGIN, 1660000, CONTENT_W, col_w6, rows6, row_heights=row_h6, body_size=9.5, header_size=9)
add_callout(s, MARGIN, 5480000, CONTENT_W, 460000, "In scope", "one helpdesk, one system of record, one workflow, agent-assist/shadow mode, citations, approval, durable write-back, audit.",
            fill=GREEN_LIGHT, label_color=GREEN, text_size=9.5)
add_callout(s, MARGIN, 5980000, CONTENT_W, 400000, "Not in scope", "helpdesk replacement; open-ended autonomous actions; every connector; general chatbot; banking approval decisions.",
            fill=ROSE_LIGHT, label_color=ROSE, text_size=9.5)
foot(s, label=APP_LABEL)

# ============================================================ S20 — ROADMAP
s = new_slide(prs)
add_eyebrow(s, "APPENDIX · ROADMAP")
add_headline(s, "Earn the platform, one gate at a time", size=28, h=560000)
rows7 = [
    ["HORIZON", "GOAL", "EVIDENCE GATE"],
    ["0–6 mo · Prove", "One workflow in one segment", "≥4 customers show the same workflow; measurable time saved; ≥2 paid/committed pilots"],
    ["6–12 mo · Repeat", "Deploy the same workflow faster", "Second/third stack deploys faster; retention; acceptable gross margin"],
    ["12–24 mo · Expand", "Adjacent workflows for the same team", "Usage and renewal pull; repeatable cross-workflow expansion; buyer-backed ROI"],
    ["24–36 mo · Platform", "Selected Customer Operations workflows", "Expansion across teams without custom-project economics or trust erosion"],
]
col_w7 = [2400000, 3900000, 4611840]
row_h7 = [460000, 780000, 780000, 780000, 780000]
add_table(s, MARGIN, 1700000, CONTENT_W, col_w7, rows7, row_heights=row_h7, body_size=10, header_size=9.5)
add_textbox(s, "Quarterly stop rules: narrow or stop if customers prefer incumbent-native AI at acceptable cost; don't automate a step whose data, permission or failure recovery can't be verified; don't add a segment until the first workflow is repeatable and profitable; don't call it a platform until expansion happens without services-heavy customization.",
            MARGIN, 6000000, CONTENT_W, 400000, size=9, color=GRAY, italic=True, line_spacing=1.15)
foot(s, label=APP_LABEL)

# ============================================================ S21 — MOAT DETAIL
s = new_slide(prs)
add_eyebrow(s, "APPENDIX · MOAT MECHANISMS")
add_headline(s, "How each mechanism compounds", size=28, h=560000)
rows8 = [
    ["MECHANISM", "HOW IT COMPOUNDS", "EVIDENCE BEFORE INVESTMENT"],
    ["Workflow-specific evaluation data", "Permissioned cases define correct resolution, safe refusal, escalation and durable completion",
     "Improves task success and reduces human correction across deployments"],
    ["Reliable action contracts", "Versioned connectors capture scopes, idempotency, retries, audit, simulation and rollback",
     "Deployment time and connector failure rate fall with reuse"],
    ["Operational learning loop", "Corrections, reopens and knowledge gaps become regression tests and release gates",
     "Customers allow safe learning; quality improves without leakage"],
    ["Repeatable deployment", "Templates for common stack + workflow combinations reduce services effort",
     "Gross margin improves; implementation time drops"],
    ["Switching cost through trusted operations", "Embedded permissions, evaluation history and workflow evidence make replacement costly",
     "Earned through use — not created by lock-in alone"],
]
col_w8 = [2900000, 4300000, 3711840]
row_h8 = [420000, 600000, 600000, 600000, 600000, 600000]
add_table(s, MARGIN, 1700000, CONTENT_W, col_w8, rows8, row_heights=row_h8, body_size=9, header_size=8.5)
add_textbox(s, "No network-effect claim yet: cross-customer learning may become valuable only if data can be aggregated legally, securely and without exposing tenant information.",
            MARGIN, 6080000, CONTENT_W, 300000, size=9, color=GRAY, italic=True)
foot(s, label=APP_LABEL)

# ============================================================ S22 — GTM, METRICS, PRICING
s = new_slide(prs)
add_eyebrow(s, "APPENDIX · GTM, METRICS AND PRICING")
add_headline(s, "How the motion is measured and priced", size=27, h=560000)
rows9 = [
    ["MOTION", "WHO", "OFFER", "TRIGGER TO ADVANCE"],
    ["Land", "Head/VP Support or Customer Ops; Support Ops operates; IT/security approve",
     "30–60 day paid or committed pilot for one workflow", "Baseline volume, measurable pain, access approved"],
    ["Prove", "Frontline agents and support managers", "Shadow/assist workflow with draft, approval, write-back",
     "Less context work; no rise in reopens, unsafe actions or audit gaps"],
    ["Expand 1", "Same support team", "Adjacent variant or second system for the same workflow",
     "Repeated usage, manager pull, acceptable total cost"],
    ["Expand 2", "Customer success / operations", "Selected adjacent workflows using shared controls",
     "Renewal, internal reference, buyer-backed ROI"],
]
col_w9 = [1400000, 3300000, 3400000, 2761840]
row_h9 = [420000, 700000, 700000, 620000, 620000]
add_table(s, MARGIN, 1700000, CONTENT_W, col_w9, rows9, row_heights=row_h9, body_size=8.7, header_size=8.5)
add_textbox(s, "Pricing hypothesis: a predictable base subscription plus a capped usage tier tied to workflow volume or verified outcomes. No price set before a durable resolution, reopen window and cost floor are defined.",
            MARGIN, 5960000, CONTENT_W, 420000, size=9.5, color=GRAY, italic=True, line_spacing=1.15)
foot(s, label=APP_LABEL)

# ============================================================ S23 — RISKS AND DECISION GATES
s = new_slide(prs)
add_eyebrow(s, "APPENDIX · RISKS AND DECISION GATES")
add_headline(s, "What has to be true before this scales", size=27, h=560000)
rows10 = [
    ["GATE", "THRESHOLD", "OBSERVED", "STATUS"],
    ["Same repeated workflow", "≥4 participants", "2", "Not met"],
    ["Measurable impact, leading workflow", "≥3 participants", "1", "Not met"],
    ["Native tool insufficient", "≥3 participants", "2", "Not met"],
    ["Strong pilot interest", "≥2 participants", "0", "Not met"],
]
col_w10 = [3800000, 2500000, 1800000, 1961840]
row_h10 = [420000, 520000, 520000, 520000, 520000]
add_table(s, MARGIN, 1700000, CONTENT_W, col_w10, rows10, row_heights=row_h10, body_size=10.5, header_size=9.5,
          align_map={1: PP_ALIGN.CENTER, 2: PP_ALIGN.CENTER, 3: PP_ALIGN.CENTER})
add_textbox(s, "Top risks: incumbents close the gap → win only with a validated workflow and faster deployment. A second system adds complexity → prove reduced total admin effort. Poor context or unsafe action → read-only first, approval, audit, rollback, safe stop. Custom integration destroys margin → versioned contracts and stop rules.",
            MARGIN, 4600000, CONTENT_W, 900000, size=10, color=GRAY, line_spacing=1.25)
add_callout(s, MARGIN, 5620000, CONTENT_W, 760000, "Final boundary",
            "this submission recommends a direction under time and sample constraints. It does not claim a validated ICP, statistically representative demand, a confirmed buyer, willingness to pay, or a proven moat.",
            fill=NEUTRAL_LIGHT, text_size=10.5)
foot(s, label=APP_LABEL)

# ============================================================ S24 — EVIDENCE REGISTER
s = new_slide(prs)
add_eyebrow(s, "APPENDIX · EVIDENCE REGISTER")
add_headline(s, "The research record behind this deck", size=28, h=560000)
rows11 = [
    ["COUNT", "MEANING"],
    ["65", "Source register entries: 64 external sources plus the assignment brief"],
    ["56", "Unique source IDs referenced by the 91 evidence records"],
    ["91", "Claim-level public evidence records with source URL, confidence and limitation"],
    ["4", "Interview records, maintained separately from public evidence"],
]
col_w11 = [1400000, 9511840]
row_h11 = [420000, 480000, 480000, 480000, 480000]
add_table(s, MARGIN, 1700000, CONTENT_W, col_w11, rows11, row_heights=row_h11, body_size=10.5, header_size=9.5,
          align_map={0: PP_ALIGN.CENTER})
add_textbox(s, "SELECTED SOURCES", MARGIN, 4360000, CONTENT_W, 280000, size=10.5, color=ROSE, bold=True, spacing=1)
sources = [
    "[1] Fortune Business Insights — Contact Center Software Market",
    "[2] Grand View Research — Contact Center Software Market",
    "[3] Intercom — 2026 Customer Service Transformation Report",
    "[4] Freshworks — Customer Service Benchmark / AI ROI",
    "[5] Gartner — Customer-service technology priorities",
    "[6] Salesforce — Seventh State of Service",
]
sources2 = [
    "[7] Intercom — Pricing and Fin Procedures",
    "[8] Zendesk — AI Agents for Customer Service",
    "[9] Freshworks — Freshdesk integrations and pricing",
    "[10] Salesforce Trailhead — Data and AI guardrails",
    "[11] Brynjolfsson, Li & Raymond — Generative AI at Work",
    "[12] Gupta et al. — Customer Support AI Agents at 100M-user Scale",
]
colw = (CONTENT_W - 274320) / 2
add_textbox(s, "\n".join(sources), MARGIN, 4680000, colw, 1200000, size=9.5, color=GRAY, line_spacing=1.35)
add_textbox(s, "\n".join(sources2), MARGIN + colw + 274320, 4680000, colw, 1200000, size=9.5, color=GRAY, line_spacing=1.35)
add_textbox(s, "Full 65-source register, 91 evidence rows, strength/bias labels, anonymized interview notes and the editable tracker live in the project repository.",
            MARGIN, 6060000, CONTENT_W, 300000, size=9, color=GRAY, italic=True)
foot(s, label=APP_LABEL)

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "B2B_Product_Strategy_Story_Deck.pptx")
prs.save(OUT)
print("Saved deck with", len(prs.slides._sldIdLst), "slides")
