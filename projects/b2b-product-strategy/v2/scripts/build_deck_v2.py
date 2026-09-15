import os
import sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from deck_lib_v2 import *

prs = new_presentation()
PAGE = [1]


def foot(slide):
    PAGE[0] += 1
    add_footer(slide, PAGE[0])


# ============================================================ 1. TITLE
s = new_slide(prs)
add_eyebrow(s, "AIRTRIBE  ·  B2B PRODUCT STRATEGY  ·  VERSION 2", y=1000000)
add_headline(s, "Earn the platform.\nDon't announce it.", y=1380000, size=44, h=1500000)
add_textbox(s, "A fresh-eyes rebuild of the 2–3 year strategy — diagnosed from why the original mid-market motion stalled, not reformatted from the first attempt's conclusions.",
            MARGIN, 3050000, 8600000, 700000, size=14, color=SLATE, line_spacing=1.3)
add_rect(s, MARGIN, 3900000, 1800000, 24000, fill=AMBER)
add_textbox(s, "Praveen Veera   ·   Airtribe — AI-First Product Management   ·   September 2026",
            MARGIN, 6420000, CONTENT_W, 300000, size=9.5, color=SLATE)
add_hline(s, MARGIN, 6360000, CONTENT_W, color=LINE, weight=6350)

# ============================================================ 2. DIAGNOSIS
s = new_slide(prs)
add_eyebrow(s, "THE DIAGNOSIS")
add_headline(s, "Why did the original motion stall?", size=28, h=560000)
add_textbox(s, "The brief hands us a fact: mid-sized businesses (200–1,000 employees) were targeted first, and adoption was slower than expected. Four failure modes explain it — each traceable to evidence already on file.",
            MARGIN, 1600000, CONTENT_W, 500000, size=11, color=SLATE, line_spacing=1.2)
modes = [
    ("1", "Positioning trap", "Sold as “another AI chatbot.” Every incumbent already claims AI agents, integrations and governance."),
    ("2", "Access-and-trust veto", "IT/security can kill a deal before the product is evaluated. P03: pilot capped to 2 queues, write-back disabled."),
    ("3", "Bundled-AI trap", "Buyers compare a new vendor to the AI they already pay for. Freshworks: 36% still stuck in pilots."),
    ("4", "Workflow mismatch", "Chat deflection was sold; the pain (P01, P02, P04) is back-office context work, not failed FAQs."),
]
gw = (CONTENT_W - 274320) / 2
gh = 1650000
top = 2250000
for i, (n, title, desc) in enumerate(modes):
    col = i % 2
    row = i // 2
    gx = MARGIN + col * (gw + 274320)
    gy = top + row * (gh + 228600)
    inner_x = add_card(s, gx, gy, gw, gh)
    add_number_badge(s, inner_x, gy + 228600, 420000, n, fill=INK)
    add_textbox(s, title, inner_x + 550000, gy + 228600, gw - 970000, 500000, size=14, color=INK,
                bold=True, anchor=MSO_ANCHOR.MIDDLE)
    add_textbox(s, desc, inner_x, gy + 780000, gw - 470000, gh - 900000, size=10, color=SLATE, line_spacing=1.2)
foot(s)

# ============================================================ 3. SEGMENT
s = new_slide(prs)
add_eyebrow(s, "STEP 1 · CUSTOMER SEGMENT")
add_headline(s, "Keep the size band. Narrow hard on who.", size=28, h=560000)
rows = [
    ["SEGMENT", "PAIN EVIDENCE", "WHY NOT"],
    ["Enterprise", "Most acute (P01 ~100–150 min/day; P02 4–6 hr waits)", "P02 is regulated banking; P01 is a multi-client BPO with no stack owner"],
    ["SMB / startups", "Usually one consolidated tool", "No helpdesk+CRM seam — no wedge to build on"],
    ["Mid-market, filtered", "The seam exists; buyer is reachable", "Selected — avoids all three traps at once"],
]
col_w = [1900000, 4800000, 4211840]
row_h = [420000, 560000, 480000, 480000]
add_table(s, MARGIN, 1680000, CONTENT_W, col_w, rows, row_heights=row_h, body_size=10, header_size=9.5)
inner_x = add_card(s, MARGIN, 4020000, CONTENT_W, 760000, fill=LIGHT_AMBER)
add_rich_textbox(s, inner_x, 4020000, CONTENT_W - 700000, 760000, [
    [("WORKING SEGMENT   ", {'size': 10, 'bold': True, 'color': AMBER_DARK}),
     ("B2B SaaS / tech-enabled services, ~51–1,000 employees, running a helpdesk AND a separate CRM or system of record.", {'size': 11.5, 'bold': True, 'color': INK})]
], anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.2)
add_textbox(s, "ANTI-PERSONAS — NOT:", MARGIN, 4980000, CONTENT_W, 300000, size=10, color=AMBER, bold=True, spacing=1)
add_textbox(s, "Regulated/financial services (compliance veto)   ·   Single-system shops (no wedge)   ·   Multi-client BPOs (no access owner)",
            MARGIN, 5320000, CONTENT_W, 400000, size=10.5, color=INK, line_spacing=1.2)
foot(s)

# ============================================================ 4. MARKET
s = new_slide(prs)
add_eyebrow(s, "STEP 2 · MARKET OPPORTUNITY")
add_headline(s, "Two honest ranges, plus one new estimate", size=27, h=560000)
add_textbox(s, "CATEGORY (TOP-DOWN)", MARGIN, 1680000, 3600000, 280000, size=10, color=SLATE, bold=True, spacing=1)
add_textbox(s, "$47.7–63.9B", MARGIN, 1960000, 3600000, 700000, size=30, color=INK, bold=True)
add_textbox(s, "contact-center software; $14.3B help-desk software — real category, not one precise TAM", MARGIN, 2680000, 3600000, 700000, size=9.5, color=SLATE, line_spacing=1.2)

add_vline(s, MARGIN + 3900000, 1680000, 1750000, color=LINE)

add_textbox(s, "NEW: BOTTOM-UP COST POOL", MARGIN + 4250000, 1680000, 3600000, 280000, size=10, color=AMBER_DARK, bold=True, spacing=1)
add_textbox(s, "$430–860M", MARGIN + 4250000, 1960000, 3600000, 700000, size=30, color=AMBER_DARK, bold=True)
add_textbox(s, "/ year, illustrative — chained from a sourced $16B mid-market survey × 27% integration-barrier share × a labeled 10-20% vertical assumption",
            MARGIN + 4250000, 2680000, CONTENT_W - 4250000, 700000, size=9.5, color=SLATE, line_spacing=1.2)

add_hline(s, MARGIN, 3600000, CONTENT_W, color=LINE)
inner_x = add_card(s, MARGIN, 3820000, CONTENT_W, 820000, fill=LIGHT_GRAY)
add_textbox(s, "WHAT IT IS NOT   a revenue forecast or a validated SOM — a cost-of-the-problem ceiling with its weakest input (vertical share) explicitly flagged as the next thing to replace with real data. See research/bottom-up-market-estimate.md.",
            inner_x, 3820000, CONTENT_W - 700000, 820000, size=10, color=INK, anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.2)
add_textbox(s, "Why customers would pay: removing measurable coordination work, protecting SLA, avoiding reopens, at a predictable total cost. Still unproven at the level of an actual price point.",
            MARGIN, 4820000, CONTENT_W, 500000, size=10.5, color=SLATE, line_spacing=1.2)
foot(s)

# ============================================================ 5. CORE PROBLEM
s = new_slide(prs)
add_eyebrow(s, "STEP 3 · CORE PROBLEM")
add_headline(s, "One problem, aimed at the mismatch", size=28, h=560000)
inner_x = add_card(s, MARGIN, 1900000, CONTENT_W, 1900000, fill=LIGHT_AMBER, accent=AMBER)
add_rich_textbox(s, inner_x, 1900000, CONTENT_W - 700000, 1900000, [
    [("JOB STORY\n\n", {'size': 10, 'bold': True, 'color': AMBER_DARK})],
    [("When a support agent picks up a case that needs information or action from a second system, they want a single place to see everything relevant — because today that costs 15–25 minutes of manual work per case and leaves duplicate history for the next person to reconstruct.",
      {'size': 15, 'bold': True, 'color': INK})]
], anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.25)
add_textbox(s, "Same leading pattern as v1, same honesty level: 2 of 4 interviews (P01, P04) describe it — below the interview guide's own 4-participant validation threshold. Leading hypothesis, not proven.",
            MARGIN, 4100000, CONTENT_W, 700000, size=11, color=SLATE, line_spacing=1.25)
foot(s)

# ============================================================ 6. MOAT
s = new_slide(prs)
add_eyebrow(s, "STEP 4 · MOAT AND DEFENSIBILITY")
add_headline(s, "Same categories. One concrete artifact each.", size=27, h=560000)
rows2 = [
    ["MECHANISM", "CONCRETE ARTIFACT", "DEFEATS"],
    ["Workflow evaluation data", "Per-workflow library of correct/refuse/escalate examples", "Competitors starting quality from zero"],
    ["Reliable action contracts", "Versioned, scoped, audited, reversible connectors", "Easy-to-copy idea, hard-to-copy hardening"],
    ["Operational learning loop", "Corrections/reopens become regression tests", "Quality resetting each release"],
    ["Repeatable deployment", "Templates per stack combination", "Slow, costly repeat deployments"],
    ["Switching cost, trusted ops", "Per-customer permission + evaluation profile", "Easy vendor replacement"],
]
col_w2 = [2600000, 4900000, 2911840]
row_h2 = [420000, 480000, 480000, 480000, 480000, 480000]
add_table(s, MARGIN, 1680000, CONTENT_W, col_w2, rows2, row_heights=row_h2, body_size=9.5, header_size=9)
add_textbox(s, "Not a moat: the model, generic retrieval, or connector-catalogue size. No network-effect claim yet.",
            MARGIN, 5220000, CONTENT_W, 320000, size=9.5, color=SLATE, italic=True)
foot(s)

# ============================================================ 7. LAND & EXPAND
s = new_slide(prs)
add_eyebrow(s, "STEP 5 · LAND AND EXPAND")
add_headline(s, "Trust grows in five graduated steps", size=28, h=560000)
stages = [
    ("LAND", "Read-only context.\nNo draft, no write-back.", 0.14),
    ("PROVE", "Same access.\nMeasure minutes saved.", 0.14),
    ("EXPAND 1", "+1 narrow write\nscope for drafts.", 0.42),
    ("EXPAND 2", "Scoped, audited\nwrite-back.", 0.70),
    ("PLATFORM", "Adjacent workflows,\nsame model replayed.", 1.0),
]
n = len(stages)
col_w3 = (CONTENT_W - (n - 1) * 137160) / n
top = 1780000
bar_max_h = 1000000
bar_base_y = top + 1250000
for i, (tag, desc, frac) in enumerate(stages):
    cx = MARGIN + i * (col_w3 + 137160)
    bar_h = int(bar_max_h * frac) + 60000
    add_rect(s, cx, bar_base_y - bar_h, col_w3, bar_h, fill=AMBER if i < n - 1 else INK)
    add_hline(s, cx, bar_base_y, col_w3, color=INK, weight=12700)
    add_textbox(s, tag, cx, bar_base_y + 130000, col_w3, 280000, size=10.5, color=INK, bold=True,
                align=PP_ALIGN.CENTER, spacing=0.5)
    add_textbox(s, desc, cx, bar_base_y + 460000, col_w3, 900000, size=9, color=SLATE,
                align=PP_ALIGN.CENTER, line_spacing=1.15)
add_textbox(s, "ACCESS REQUIRED, GROWING LEFT TO RIGHT — ONLY AFTER TRUST IS EARNED AT EACH STEP",
            MARGIN, top - 350000, CONTENT_W, 280000, size=9, color=SLATE, bold=True, spacing=1, align=PP_ALIGN.CENTER)
inner_x = add_card(s, MARGIN, 4550000, CONTENT_W, 700000, fill=LIGHT_GRAY)
add_textbox(s, "BUYER & APPROVERS, UNCHANGED FROM V1   Head/VP Support or Customer Ops buys; Support Ops operates; IT/security approve. Starting read-only means the hardest approver has almost nothing to review on day one.",
            inner_x, 4550000, CONTENT_W - 700000, 700000, size=9.5, color=INK, anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.2)
foot(s)

# ============================================================ 8. WHAT'S UNPROVEN
s = new_slide(prs)
add_eyebrow(s, "WHAT'S STILL UNPROVEN")
add_headline(s, "Carried forward honestly, not smoothed over", size=27, h=560000)
unproven = [
    "Interview sample is still 4 of the requested 8 minimum.",
    "Leading workflow: 2 of 4 mentions, against a 4-participant validation threshold.",
    "No confirmed economic buyer, price point, or proposed-product pilot commitment.",
    "Bottom-up estimate's vertical-share input (10–20%) is a labeled assumption, not sourced.",
    "All four of v1's interview decision gates were unmet — re-deriving the strategy doesn't change that arithmetic.",
]
row_h3 = 620000
top = 1780000
for i, item in enumerate(unproven):
    ry = top + i * row_h3
    add_rect(s, MARGIN, ry + 40000, 45720, 340000, fill=AMBER)
    add_textbox(s, item, MARGIN + 274320, ry, CONTENT_W - 274320, row_h3, size=12, color=INK,
                anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.15)
    if i < len(unproven) - 1:
        add_hline(s, MARGIN, ry + row_h3, CONTENT_W)
foot(s)

# ============================================================ 9. CLOSE
s = new_slide(prs)
add_eyebrow(s, "IN CLOSE", y=1500000)
add_headline(s, "Earn the platform.\nStart with the smallest thing\nthat needs the least trust.", x=MARGIN, y=1880000, w=CONTENT_W, size=30, h=1600000)
add_textbox(s, "Leadership's platform ambition doesn't change — how we get there does. Same segment ballpark as v1, reached through a diagnosis instead of a hypothesis. A narrower land wedge, a moat sharpened to one artifact each, and a first bottom-up number to replace with real data.",
            MARGIN, 3650000, CONTENT_W - 1200000, 800000, size=13, color=SLATE, line_spacing=1.3)
add_rect(s, MARGIN, 4750000, 3000000, 24000, fill=AMBER)
add_textbox(s, "Thank you — Praveen Veera", MARGIN, 4950000, CONTENT_W, 360000, size=14, color=INK, bold=True)
foot(s)

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "presentation", "B2B_Product_Strategy_v2_Deck.pptx")
prs.save(OUT)
print("Saved v2 deck:", OUT, "-", len(prs.slides._sldIdLst), "slides")
