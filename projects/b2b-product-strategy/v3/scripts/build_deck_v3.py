import os
import sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from deck_lib_v3 import *

ASSETS = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "assets")
ICONS = os.path.join(ASSETS, "icons")

prs = new_presentation()

cp = prs.core_properties
cp.title = "Earn the Platform, Don't Announce It — B2B Product Strategy"
cp.author = "Praveen Veera"
cp.subject = "2-3 year AI-powered Customer Operations Platform strategy — Airtribe B2B Product Strategy Assignment"
cp.keywords = "B2B SaaS, AI customer support, product strategy, Airtribe, Customer Operations Platform"
cp.comments = ""
cp.last_modified_by = "Praveen Veera"

PAGE = [1]


def foot(slide, appendix=False):
    PAGE[0] += 1
    add_footer(slide, PAGE[0], label=DECK_LABEL_APPENDIX if appendix else DECK_LABEL)


def notes(slide, text):
    """Plain-language recording script for this slide, in the PPT's own
    Speaker Notes — so Presenter View shows exactly what to say, in order,
    while recording. Only the 12 story slides carry notes; the appendix is
    reference material, not narrated."""
    slide.notes_slide.notes_text_frame.text = text


def add_image_centered(slide, path, y, target_w, aspect_h_over_w, caption=None, framed=True):
    h = int(target_w * aspect_h_over_w)
    x = MARGIN + (CONTENT_W - target_w) // 2
    if framed:
        add_image_card(slide, path, x, y, target_w, h)
    else:
        add_image(slide, path, x, y, w=target_w, h=h)
    if caption:
        add_textbox(slide, caption, MARGIN, y + h + 60000, CONTENT_W, 260000,
                    size=9, color=SLATE, italic=True, align=PP_ALIGN.CENTER)
    return y + h


def card_grid(slide, cards, top, cols=2, rows=2, gh=1150000, gap_x=274320, gap_y=228600, badge_fill=INK, body_size=9.3):
    """cards: list of (badge, title, body). Even grid of add_card cells."""
    gw = (CONTENT_W - (cols - 1) * gap_x) / cols
    for i, (badge, title, body) in enumerate(cards):
        col = i % cols
        row = i // cols
        gx = MARGIN + col * (gw + gap_x)
        gy = top + row * (gh + gap_y)
        inner_x = add_card(slide, gx, gy, gw, gh, accent=badge_fill if badge_fill != INK else AMBER)
        if badge:
            add_number_badge(slide, inner_x, gy + 200000, 400000, badge, fill=badge_fill, size=12)
            title_x = inner_x + 520000
            title_w = gw - 940000
        else:
            title_x = inner_x
            title_w = gw - 470000
        add_textbox(slide, title, title_x, gy + 200000, title_w, 460000, size=12.5, color=INK,
                    bold=True, anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.05)
        add_textbox(slide, body, inner_x, gy + 720000, gw - 470000, gh - 820000, size=body_size, color=SLATE, line_spacing=1.2)


def section_header(slide, eyebrow, headline, size=28, appendix=False):
    add_eyebrow(slide, ("APPENDIX · " if appendix else "") + eyebrow)
    add_headline(slide, headline, size=size, h=560000)


# ============================================================================
# STORY  (slides 1-11 — this is what gets recorded for the video)
# ============================================================================

# ---------------------------------------------------------------- 1. TITLE
s = new_slide(prs)
# Decorative ring motif, bleeding off the top-right corner — purely a cover
# accent, drawn first so everything else sits on top of it.
for d, lw, clr in [(4800000, 22225, LIGHT_GRAY), (3400000, 22225, LIGHT_AMBER)]:
    ring = s.shapes.add_shape(MSO_SHAPE.OVAL, Emu(SLIDE_W - d // 2 - 500000), Emu(-d // 2 - 300000), Emu(d), Emu(d))
    ring.fill.background()
    ring.line.color.rgb = clr
    ring.line.width = Emu(lw)
    ring.shadow.inherit = False
dot = s.shapes.add_shape(MSO_SHAPE.OVAL, Emu(SLIDE_W - 2050000), Emu(1550000), Emu(180000), Emu(180000))
dot.fill.solid()
dot.fill.fore_color.rgb = AMBER
dot.line.fill.background()
dot.shadow.inherit = False
add_eyebrow(s, "AIRTRIBE  ·  B2B PRODUCT STRATEGY", y=1000000)
add_headline(s, "Earn the platform.\nDon't announce it.", y=1380000, size=44, h=1500000)
add_textbox(s, "A 2–3 year strategy for AI-powered Customer Operations, diagnosed from why the original mid-market motion adopted slower than expected.",
            MARGIN, 3050000, 8600000, 700000, size=14, color=SLATE, line_spacing=1.3)
add_rect(s, MARGIN, 3900000, 1800000, 24000, fill=AMBER)

stat_cards = [
    ("91", "Public evidence\nrecords (56 sources)"),
    ("4", "Anonymized\ninterviews"),
    ("4", "Vendor\nteardowns"),
    ("1", "Bottom-up\nmarket analysis"),
]
sw = (CONTENT_W - 3 * 182880) / 4
sy = 4280000
sh = 1600000
for i, (num, label) in enumerate(stat_cards):
    sx = MARGIN + i * (sw + 182880)
    inner_x = add_card(s, sx, sy, sw, sh, fill=LIGHT_GRAY)
    add_textbox(s, num, inner_x, sy + 180000, sw - 300000, 620000, size=30, color=INK, bold=True)
    add_textbox(s, label, inner_x, sy + 900000, sw - 300000, 620000, size=9.5, color=SLATE, line_spacing=1.2)

add_textbox(s, "Praveen Veera   ·   Airtribe — AI-First Product Management   ·   September 2026",
            MARGIN, 6420000, CONTENT_W, 300000, size=9.5, color=SLATE)
add_hline(s, MARGIN, 6360000, CONTENT_W, color=LINE, weight=6350)
notes(s, "This is built on real evidence — 91 records, 4 interviews, 4 competitor teardowns. "
         "Here's where that leads.")

# ---------------------------------------------------------- 2. HOW TO USE
s = new_slide(prs)
add_eyebrow(s, "HOW TO USE THIS DECK")
add_headline(s, "The 5-minute story, plus everything behind it", size=27, h=560000)
inner_x = add_card(s, MARGIN, 1780000, CONTENT_W, 1900000, fill=LIGHT_AMBER)
add_rich_textbox(s, inner_x, 1780000, CONTENT_W - 700000, 1900000, [
    [("THE STORY  ·  SLIDES 3–12\n", {'size': 12, 'bold': True, 'color': AMBER_DARK})],
    [("The decision, the diagnosis behind it, who it's for, the problem, the competitive read, what ships first, the moat, how it expands, and where it stands today. Everything needed to follow the recommendation.",
      {'size': 11, 'color': INK})],
], line_spacing=1.35)
inner_x2 = add_card(s, MARGIN, 3900000, CONTENT_W, 1900000, fill=LIGHT_GRAY)
add_rich_textbox(s, inner_x2, 3900000, CONTENT_W - 700000, 1900000, [
    [("APPENDIX  ·  SLIDES 13–29\n", {'size': 12, 'bold': True, 'color': INK})],
    [("The full evidence behind every claim in the story: methodology, segment and problem detail, all four interviews, the market model, the complete four-vendor teardown, MVP sequencing, the roadmap, moat mechanisms, GTM, and the risk/decision-gate register.",
      {'size': 11, 'color': SLATE})],
], line_spacing=1.35)
foot(s)
notes(s, "Quick note — this deck has a short story, then the full evidence in the appendix.")

# ------------------------------------------------- 3. DECISION IN ONE LINE
s = new_slide(prs)
add_eyebrow(s, "THE DECISION IN ONE LINE")
add_headline(s, "Land narrow. Prove it's safe. Earn the platform.", size=27, h=560000)
inner_x = add_card(s, MARGIN, 1780000, CONTENT_W, 1150000, fill=LIGHT_AMBER, accent=AMBER)
add_textbox(s, "Leadership is right that the destination is a comprehensive Customer Operations Platform — but naming it doesn't earn it. Land one narrow, low-trust workflow; prove it; expand only after it's earned.",
            inner_x, 1780000, CONTENT_W - 700000, 1150000, size=13, color=INK, bold=True, anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.3)
add_image_centered(s, os.path.join(ASSETS, "roadmap_timeline.png"), 3200000, 9800000, 3.5 / 10.6)
foot(s)
notes(s, "Here's the whole idea in one line: don't build the big platform first. Build one small "
         "thing, prove it actually helps people, and let the bigger platform earn its way in — "
         "instead of announcing it and hoping people show up.")

# ---------------------------------------------------------------- 4. DIAGNOSIS
s = new_slide(prs)
add_eyebrow(s, "THE DIAGNOSIS")
add_headline(s, "Why did the original motion stall?", size=28, h=560000)
add_textbox(s, "The brief hands us a fact: mid-sized businesses (200–1,000 employees) were targeted first, and adoption was slower than expected. Four failure modes explain it — each traceable to evidence already on file.",
            MARGIN, 1600000, CONTENT_W, 500000, size=11, color=SLATE, line_spacing=1.2)
modes = [
    ("1", "Positioning trap", "Sold as “another AI chatbot.” Every incumbent already claims AI agents, integrations and governance.", "positioning.png"),
    ("2", "Access-and-trust veto", "IT/security can kill a deal before the product is evaluated. P03: pilot capped to 2 queues, write-back disabled.", "access.png"),
    ("3", "Bundled-AI trap", "Buyers compare a new vendor to the AI they already pay for. Freshworks: 36% still stuck in pilots.", "bundled.png"),
    ("4", "Workflow mismatch", "Chat deflection was sold; the pain (P01, P02, P04) is back-office context work, not failed FAQs.", "mismatch.png"),
]
gw = (CONTENT_W - 274320) / 2
gh = 1650000
top = 2250000
for i, (n, title, desc, icon) in enumerate(modes):
    col = i % 2
    row = i // 2
    gx = MARGIN + col * (gw + 274320)
    gy = top + row * (gh + 228600)
    inner_x = add_card(s, gx, gy, gw, gh)
    add_image(s, os.path.join(ICONS, icon), gx + gw - 1100000, gy + gh - 1100000, w=880000, h=880000)
    add_number_badge(s, inner_x, gy + 228600, 420000, n, fill=INK)
    add_textbox(s, title, inner_x + 550000, gy + 228600, gw - 970000, 500000, size=14, color=INK,
                bold=True, anchor=MSO_ANCHOR.MIDDLE)
    add_textbox(s, desc, inner_x, gy + 780000, gw - 1200000, gh - 900000, size=10, color=SLATE, line_spacing=1.2)
foot(s)
notes(s, "So why didn't the original idea take off? Four reasons.\n\n"
         "One — we called it “another AI chatbot.” Every competitor — Intercom, Zendesk, Freshdesk, "
         "Salesforce — already had one. Nothing new.\n\n"
         "Two — IT and security can kill this before anyone tries it, like hiring someone without "
         "a key to any door.\n\n"
         "Three — these companies already pay for AI inside tools they use. We weren't competing "
         "against nothing, but against something already paid for.\n\n"
         "Four — we built something to answer questions faster. But the real pain was digging "
         "through different systems to understand what was going on.")

# ------------------------------------------------------------ 5. SEGMENT
s = new_slide(prs)
add_eyebrow(s, "WHO THIS IS FOR")
add_headline(s, "Keep the size band. Narrow hard on who.", size=28, h=560000)
inner_x = add_card(s, MARGIN, 1780000, CONTENT_W, 900000, fill=LIGHT_AMBER)
add_rich_textbox(s, inner_x, 1780000, CONTENT_W - 700000, 900000, [
    [("WORKING SEGMENT   ", {'size': 11, 'bold': True, 'color': AMBER_DARK}),
     ("B2B SaaS / tech-enabled services, ~51–1,000 employees, running a helpdesk AND a separate CRM or system of record.", {'size': 13, 'bold': True, 'color': INK})]
], anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.25)
add_textbox(s, "ANTI-PERSONAS — NOT:", MARGIN, 2960000, CONTENT_W, 300000, size=11, color=AMBER, bold=True, spacing=1)
anti = [
    ("Regulated / financial services", "P02 shows the compliance approval chain this triggers."),
    ("Single-system shops", "No context to reassemble means no wedge."),
    ("Multi-client outsourced support (BPOs)", "P01's stack changes by client; no one owns access."),
]
aw = (CONTENT_W - 2 * 274320) / 3
for i, (title, body) in enumerate(anti):
    ax = MARGIN + i * (aw + 274320)
    inner_ax = add_card(s, ax, 3380000, aw, 1650000, fill=LIGHT_GRAY)
    add_textbox(s, title, inner_ax, 3380000 + 180000, aw - 470000, 700000, size=11.5, color=INK, bold=True, line_spacing=1.15)
    add_textbox(s, body, inner_ax, 3380000 + 850000, aw - 470000, 750000, size=9.5, color=SLATE, line_spacing=1.2)
add_textbox(s, "Primary persona: frontline support/operations practitioner owning escalation work across several systems — searches, copies, waits, and reconstructs history; handoff context isn't durable.",
            MARGIN, 5250000, CONTENT_W, 700000, size=10.5, color=SLATE, line_spacing=1.25)
foot(s)
notes(s, "So who's this for? Not huge companies like banks — too much red tape. Not tiny "
         "companies either — they run on one tool. The sweet spot: mid-sized companies, roughly "
         "50 to 1,000 people, running two systems that don't talk to each other.\n\n"
         "On size — the wider category is worth tens of billions a year, too broad to mean much "
         "here. A narrower estimate of just this problem: 400 to 900 million a year — meaningful, "
         "but still an estimate.")

# -------------------------------------------------------------- 6. PROBLEM
s = new_slide(prs)
add_eyebrow(s, "THE CORE PROBLEM")
add_headline(s, "One problem, aimed at the mismatch", size=28, h=560000)
inner_x = add_card(s, MARGIN, 1900000, CONTENT_W, 1900000, fill=LIGHT_AMBER, accent=AMBER)
add_rich_textbox(s, inner_x, 1900000, CONTENT_W - 700000, 1900000, [
    [("JOB STORY\n\n", {'size': 10, 'bold': True, 'color': AMBER_DARK})],
    [("When a support agent picks up a case that needs information or action from a second system, they want a single place to see everything relevant — because today that costs 15–25 minutes of manual work per case and leaves duplicate history for the next person to reconstruct.",
      {'size': 15, 'bold': True, 'color': INK})]
], anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.25)
add_textbox(s, "Two of four interviews (P01, P04) describe it — below the interview guide's own 4-participant validation threshold. Leading hypothesis, not proven, aimed directly at the mismatch diagnosed above.",
            MARGIN, 4100000, CONTENT_W, 700000, size=11, color=SLATE, line_spacing=1.25)
foot(s)
notes(s, "Picture this: a customer writes in with a problem, and the agent needs information "
         "sitting in a different system. So they open another tab, log in, search, copy it, and "
         "come back. That's the whole problem: too much manual digging, nowhere to see it all in "
         "one place.")

# ------------------------------------------------- 7. WHERE WE COMPETE
s = new_slide(prs)
add_eyebrow(s, "WHERE WE COMPETE, AND WON'T")
add_headline(s, "Every incumbent already claims AI. That's not the wedge.", size=25, h=560000)
inner_x = add_card(s, MARGIN, 1780000, CONTENT_W, 1750000, fill=LIGHT_GRAY)
add_textbox(s, "SEVEN CAPABILITIES EVERY INCUMBENT ALREADY CLAIMS",
            inner_x, 1780000 + 160000, CONTENT_W - 700000, 320000, size=10, color=SLATE, bold=True, spacing=0.5)
add_textbox(s, "AI agents · agent assist & summarization · human handoff · integrations & actions · analytics & governance · usage/outcome pricing · compatibility with an existing stack",
            inner_x, 1780000 + 520000, CONTENT_W - 700000, 900000, size=11.5, color=INK, line_spacing=1.35)
add_textbox(s, "Generic AI and integration claims cannot carry the strategy on their own.",
            inner_x, 1780000 + 1350000, CONTENT_W - 700000, 350000, size=10.5, color=SLATE, italic=True)
inner_x2 = add_card(s, MARGIN, 3730000, CONTENT_W, 1600000, fill=LIGHT_AMBER, accent=AMBER)
add_rich_textbox(s, inner_x2, 3730000, CONTENT_W - 700000, 1600000, [
    [("THE WEDGE TO TEST\n\n", {'size': 10, 'bold': True, 'color': AMBER_DARK})],
    [("Workflow-specific completeness — assemble permissioned context, show the evidence used, route approval, preserve the full handoff, and write the result back — faster and cheaper than the incumbent's native AI.",
      {'size': 13, 'bold': True, 'color': INK})],
], anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.3)
foot(s)
notes(s, "Every competitor already says they have AI. That's not special anymore — it's expected, "
         "like a car having air conditioning. We're not winning by saying “we have AI too.” We're "
         "winning at one thing none of them do well: connecting the dots across two systems, "
         "showing where an answer came from, with a human signing off on anything risky first.")

# ---------------------------------------------------------- 8. INTERVIEWS
s = new_slide(prs)
add_eyebrow(s, "FOUR INTERVIEWS, ONE DIRECTION")
add_headline(s, "Different companies. The same shape of pain.", size=27, h=560000)
interview_cards = [
    ("P01", "Enterprise outsourced support", "Frontline practitioner",
     "Handles 5–6 difficult cases a day; each one costs 20–25 minutes of copying context between the helpdesk and internal systems before the actual fix even starts.",
     "QUANTIFIED CONTEXT AND HANDOFF COST"),
    ("P02", "Enterprise banking complaints", "Frontline practitioner",
     "Every complaint means 15 minutes of duplicate logging, then a 4–6 hour wait for formal approval — audit evidence ends up split across systems.",
     "AUDIT AND APPROVAL FRICTION"),
    ("P03", "Mid-market application approval", "Application-approval stakeholder (~400 employees)",
     "Approved a one-month pilot only after it was capped to two queues with write-back disabled — access had to be earned, not assumed.",
     "TRUST HAS TO BE EARNED IN STAGES"),
    ("P04", "Mid-market B2B SaaS/services", "Frontline practitioner",
     "Manually reassembles Zendesk history inside Jira for every engineering escalation, and explicitly warned against adding a duplicate system.",
     "THE PATTERN REPEATS, UNPROMPTED"),
]
gwi = (CONTENT_W - 274320) / 2
ghi = 1620000
topi = 1740000
for i, (badge, title, role, stat, shows) in enumerate(interview_cards):
    col = i % 2
    row = i // 2
    gx = MARGIN + col * (gwi + 274320)
    gy = topi + row * (ghi + 200000)
    inner_x = add_card(s, gx, gy, gwi, ghi)
    add_number_badge(s, inner_x, gy + 180000, 380000, badge, fill=INK, size=11.5)
    add_textbox(s, title, inner_x + 500000, gy + 170000, gwi - 920000, 340000, size=12, color=INK,
                bold=True, anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.0)
    add_textbox(s, role.upper(), inner_x + 500000, gy + 500000, gwi - 920000, 220000, size=7.8,
                color=AMBER, bold=True, spacing=0.5, anchor=MSO_ANCHOR.MIDDLE)
    add_textbox(s, stat, inner_x, gy + 780000, gwi - 470000, 480000, size=9, color=SLATE, line_spacing=1.2)
    add_rect(s, inner_x, gy + ghi - 320000, gwi - 470000, 4000, fill=LINE)
    add_textbox(s, "SHOWS   " + shows, inner_x, gy + ghi - 280000, gwi - 470000, 260000,
                size=8.6, color=AMBER_DARK, bold=True, spacing=0.3)
synth_top = topi + 2 * ghi + 200000 + 150000
inner_x = add_card(s, MARGIN, synth_top, CONTENT_W, 980000, fill=LIGHT_AMBER, accent=AMBER)
add_rich_textbox(s, inner_x, synth_top, CONTENT_W - 700000, 980000, [
    [("THE COMMON THREAD   ", {'size': 10, 'bold': True, 'color': AMBER_DARK}),
     ("every one of these is the same root problem wearing a different costume: information stuck in a system the agent isn't in, and no fast, safe way to get it.",
      {'size': 10.5, 'bold': True, 'color': INK})],
    [("4 of the requested 8–12 interviews — directional evidence for the workflow pattern, not a validated sample.",
      {'size': 9, 'color': SLATE, 'italic': True})],
], anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.25)
foot(s)
notes(s, "We talked to four people. One support agent spends 20 to 25 minutes gathering "
         "information per hard case, several times a day. One in banking told us a case meant 15 "
         "minutes of duplicate typing plus a four-to-six-hour wait for approval. A third only "
         "agreed to test this after we locked it to two areas with no ability to change anything. "
         "A fourth warned us against adding another separate system.")

# ----------------------------------------------- 9. WHAT WE'D BUILD FIRST
s = new_slide(prs)
add_eyebrow(s, "WHAT WE'D BUILD FIRST")
add_headline(s, "One workflow, six steps, human in the loop", size=27, h=560000)
add_textbox(s, "Where the AI actually does the work — not just automation with extra steps.",
            MARGIN, 1560000, CONTENT_W, 300000, size=10, color=SLATE, italic=True)
rows_mvp = [
    ["STEP", "PRODUCT RESPONSIBILITY", "SHIPS AT", "WHAT'S AI"],
    ["1. Detect", "Identify a difficult or escalated case in the existing helpdesk", "Land", "Classifies case difficulty"],
    ["2. Resolve identity", "Link customer/account across helpdesk and one system of record", "Land", "Deterministic — not AI"],
    ["3. Assemble context", "Retrieve recent ticket, account and approval state, read-only, sources shown", "Land", "Retrieves + synthesizes across systems (RAG)"],
    ["4. Recommend", "Summarize history, gap and next action; draft a customer update", "Expand", "Drafts the update in plain language"],
    ["5. Approve / hand off", "Route high-risk steps to the right person with complete context", "Expand", "Judges its own risk/confidence"],
    ["6. Write back", "Record outcome, source and next step in the system of record", "Expand", "Executes once approved — mechanical"],
]
col_w_mvp = [1700000, 5300000, 1300000, 2611840]
row_h_mvp = [420000, 460000, 460000, 460000, 460000, 460000, 460000]
add_table(s, MARGIN, 1900000, CONTENT_W, col_w_mvp, rows_mvp, row_heights=row_h_mvp, body_size=8.7, header_size=8.5)
inner_x = add_card(s, MARGIN, 5220000, CONTENT_W, 800000, fill=LIGHT_GRAY)
add_textbox(s, "MVP BOUNDARY   one helpdesk, one system of record, one workflow, agent-assist/shadow mode, citations, approval, audit. Not in scope: helpdesk replacement, open-ended autonomous actions, general chatbot.",
            inner_x, 5220000, CONTENT_W - 700000, 800000, size=9.5, color=INK, anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.2)
foot(s)
notes(s, "Nothing fancy at first — an AI reads the case, pulls together information from both "
         "systems, and shows it to the agent in one place, read-only, so it can't break anything. "
         "No auto-replies yet, no robot acting alone — think of it as a research assistant doing "
         "the reading and the first draft, while the person still decides. That same AI also "
         "judges how confident it is, so anything risky gets a human's eyes before it happens.")

# ---------------------------------------------------------------- 10. MOAT
s = new_slide(prs)
add_eyebrow(s, "MOAT: WHAT COMPOUNDS")
add_headline(s, "Not the model. What repeats after it.", size=27, h=560000)
moat_cards = [
    ("1", "Workflow evaluation data", "eval_data.png",
     "Every case this workflow handles — like P02's regulated-banking approval — becomes a labeled example of a correct answer, a safe refusal, or an escalation.",
     "Competitors starting quality from zero, with no examples of their own."),
    ("2", "Reliable action contracts", "action_contracts.png",
     "Each system connection (helpdesk ↔ CRM, helpdesk ↔ ticketing) is versioned, scoped, audited, and reversible, so a failed write-back rolls back safely.",
     "An easy-to-copy idea undermined by hard-to-copy operational hardening."),
    ("3", "Operational learning loop", "learning_loop.png",
     "When a context-gathering mistake like P01's happens once, it becomes a regression test — the same error can't quietly resurface in the next release.",
     "Quality resetting with every new release."),
    ("4", "Repeatable deployment", "repeatable.png",
     "The second customer running the same helpdesk-plus-CRM combination deploys from a template, not from scratch.",
     "Slow, expensive, bespoke deployments that never get cheaper."),
    ("5", "Switching cost, trusted ops", "switching_cost.png",
     "Every month of use builds a customer-specific permission and evaluation profile — the same P03-style trust a capped, two-queue pilot took time to earn.",
     "A competitor being swapped in easily."),
]
row_h = 760000
row_gap = 90000
topm = 1650000
for i, (badge, title, icon, artifact, defeats) in enumerate(moat_cards):
    gy = topm + i * (row_h + row_gap)
    inner_x = add_card(s, MARGIN, gy, CONTENT_W, row_h)
    add_image(s, os.path.join(ICONS, icon), MARGIN + CONTENT_W - 950000, gy + row_h / 2 - 300000, w=600000, h=600000)
    add_number_badge(s, inner_x, gy + row_h / 2 - 190000, 380000, badge, fill=INK, size=12)
    text_x = inner_x + 520000
    text_w = CONTENT_W - 520000 - 1200000
    add_rich_textbox(s, text_x, gy + 90000, text_w, row_h - 140000, [
        [(title + "   ", {'size': 11.5, 'bold': True, 'color': INK}),
         (artifact, {'size': 9, 'color': SLATE})],
        [("DEFEATS   ", {'size': 8.3, 'bold': True, 'color': AMBER_DARK}),
         (defeats, {'size': 8.3, 'bold': True, 'color': AMBER_DARK})],
    ], line_spacing=1.2)
add_textbox(s, "None of the five above is the model, generic retrieval, or connector-catalogue size — those are copyable, not defensible.",
            MARGIN, topm + 5 * (row_h + row_gap) + 40000, CONTENT_W, 300000, size=8.8, color=SLATE, italic=True)
foot(s)
notes(s, "So what stops a bigger company from copying this? A few things, all from using it. It "
         "learns what a “good” answer looks like for that company — a new competitor starts from "
         "zero. System connections get more reliable over time. Every mistake becomes a lesson "
         "that doesn't repeat. And the longer someone uses it, the more trust is baked in — "
         "starting over elsewhere becomes a real hassle.")

# --------------------------------------------------- 11. LAND AND EXPAND
s = new_slide(prs)
add_eyebrow(s, "LAND AND EXPAND")
add_headline(s, "Small door in. Wide footprint, only if earned.", size=26, h=560000)
add_image_centered(s, os.path.join(ASSETS, "adoption_motion_chart.png"), 1850000, 9800000, 3.4 / 10.4)
inner_x = add_card(s, MARGIN, 5100000, CONTENT_W, 700000, fill=LIGHT_GRAY)
add_textbox(s, "BUYER & APPROVERS   Head/VP Support or Customer Ops buys; Support Ops operates; IT/security approve. Starting read-only means the hardest approver has almost nothing to review on day one.",
            inner_x, 5100000, CONTENT_W - 700000, 700000, size=9.5, color=INK, anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.2)
foot(s)
notes(s, "It grows in stages: prove it for six months, spend the next six making it faster to set "
         "up elsewhere, stretch to nearby problems in year two, and only talk platform in year "
         "three, if it's working.")

# ---------------------------------------------------------------- 12. CLOSE
# A dark, full-bleed bookend — the same emotional register as the honest
# "zero gates met" line deserves, and a rhythm break before the appendix.
s = new_slide(prs)
add_rect(s, 0, 0, SLIDE_W, SLIDE_H, fill=INK)
ring = s.shapes.add_shape(MSO_SHAPE.OVAL, Emu(-1800000), Emu(SLIDE_H - 2600000), Emu(4200000), Emu(4200000))
ring.fill.background()
ring.line.color.rgb = RGBColor(0x33, 0x2C, 0x24)
ring.line.width = Emu(22225)
ring.shadow.inherit = False
add_textbox(s, "IN CLOSE", MARGIN, 1200000, CONTENT_W, 320000, size=12, color=AMBER, bold=True, spacing=2)
add_textbox(s, "Four decision gates.\nZero fully met.\nThat's the honest starting line.",
            MARGIN, 1650000, CONTENT_W, 1900000, size=32, color=WHITE, bold=True, line_spacing=1.1)
add_textbox(s, "Proceed only as a bounded, assist-first hypothesis, validated through a controlled pilot. The platform ambition doesn't change — how we get there does.",
            MARGIN, 3750000, CONTENT_W - 1200000, 800000, size=13, color=RGBColor(0xC9, 0xC4, 0xBC), line_spacing=1.3)
add_rect(s, MARGIN, 4850000, 3000000, 24000, fill=AMBER)
add_textbox(s, "Appendix follows — the full evidence behind every slide in this story.", MARGIN, 5050000, CONTENT_W, 360000, size=12, color=WHITE, bold=True)
PAGE[0] += 1
add_textbox(s, DECK_LABEL, MARGIN, 6420000, 5486400, 300000, size=9, color=RGBColor(0x88, 0x82, 0x7A))
add_textbox(s, str(PAGE[0]), SLIDE_W - MARGIN - 700000, 6420000, 700000, 300000, size=9, color=RGBColor(0x88, 0x82, 0x7A), align=PP_ALIGN.RIGHT)
notes(s, "I want to be upfront: this isn't proven yet. We talked to four people, not the eight "
         "we wanted. And of the four checkpoints we needed to see clearly — the same problem "
         "repeating, real time saved, proof the built-in AI wasn't enough, and real interest in a "
         "paid trial — none have happened yet.\n\n"
         "So this isn't a “we're sure, let's go” pitch. It's the smallest, most honest next step: "
         "try it small, watch closely, and build bigger only once it's earned.")

# ============================================================================
# APPENDIX  (slides 13-28)
# ============================================================================

# ---------------------------------------------------------------- DIVIDER
s = new_slide(prs)
add_rect(s, 0, 0, SLIDE_W, SLIDE_H, fill=INK)
add_textbox(s, "APPENDIX", MARGIN, 2900000, CONTENT_W, 900000, size=48, color=WHITE, bold=True)
add_textbox(s, "The full evidence behind every slide in the story", MARGIN, 3750000, CONTENT_W, 500000, size=16, color=RGBColor(0xC9, 0xB6, 0x9A))
add_rect(s, MARGIN, 4350000, 1800000, 24000, fill=AMBER)
PAGE[0] += 1
add_textbox(s, DECK_LABEL_APPENDIX, MARGIN, 6420000, 5486400, 300000, size=9, color=RGBColor(0xAA, 0xAA, 0xAA))
add_textbox(s, str(PAGE[0]), SLIDE_W - MARGIN - 700000, 6420000, 700000, 300000, size=9, color=RGBColor(0xAA, 0xAA, 0xAA), align=PP_ALIGN.RIGHT)

# ------------------------------------------------------- A1. METHODOLOGY
s = new_slide(prs)
section_header(s, "METHODOLOGY AND EVIDENCE BASE", "Four layers, never mixed", appendix=True)
rows_ev = [
    ["COUNT", "MEANING"],
    ["65", "Source register entries: 64 external sources plus the assignment brief"],
    ["56", "Unique source IDs referenced by the 91 evidence records"],
    ["91", "Claim-level public evidence records with source URL, confidence and limitation"],
    ["4", "Interview records, maintained separately from public evidence"],
]
add_table(s, MARGIN, 1780000, CONTENT_W, [1200000, 9711840], rows_ev, row_heights=[420000, 480000, 480000, 480000, 480000], body_size=11, header_size=10)
inner_x = add_card(s, MARGIN, 4560000, CONTENT_W, 900000, fill=LIGHT_GRAY)
add_textbox(s, "INTEGRITY RULE   no review post is treated as an interview; no vendor statistic is treated as universal market fact. The competitive teardown keeps its own register in the same discipline — V (vendor claim), R (review signal), I (interview), H (synthesis), U (unresolved).",
            inner_x, 4560000, CONTENT_W - 700000, 900000, size=10, color=INK, anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.2)
foot(s, appendix=True)

# ------------------------------------------------- A2. SEGMENT AND PROBLEM
s = new_slide(prs)
section_header(s, "SEGMENT AND PROBLEM", "Who it's for, and what breaks for them today", appendix=True)
rows = [
    ["SEGMENT", "PAIN EVIDENCE", "WHY NOT"],
    ["Enterprise", "Most acute (P01 ~100–150 min/day; P02 4–6 hr waits)", "P02 is regulated banking; P01 is a multi-client BPO with no stack owner"],
    ["SMB / startups", "Usually one consolidated tool", "No helpdesk+CRM seam — no wedge to build on"],
    ["Mid-market, filtered", "The seam exists; buyer is reachable", "Selected — avoids all three traps at once"],
]
add_table(s, MARGIN, 1680000, CONTENT_W, [1900000, 4800000, 4211840], rows, row_heights=[420000, 560000, 480000, 480000], body_size=10, header_size=9.5)
inner_x = add_card(s, MARGIN, 4020000, CONTENT_W, 900000, fill=LIGHT_AMBER)
add_rich_textbox(s, inner_x, 4020000, CONTENT_W - 700000, 900000, [
    [("PROBLEM STATEMENT   ", {'size': 10, 'bold': True, 'color': AMBER_DARK}),
     ("Across four interviews, two frontline cases show manual context transfer during complex escalation; a banking case shows duplicate audit work and approval delay; an application stakeholder shows permission and write-back barriers.", {'size': 10.5, 'bold': True, 'color': INK})]
], anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.2)
add_textbox(s, "Primary persona: frontline support/operations practitioner owning L1.5, escalation or exception work across several systems.",
            MARGIN, 5040000, CONTENT_W, 500000, size=10.5, color=SLATE, line_spacing=1.2)
foot(s, appendix=True)

# ------------------------------------------------- A3. INTERVIEW EVIDENCE
s = new_slide(prs)
section_header(s, "INTERVIEW EVIDENCE", "Four perspectives, full detail", appendix=True)
card_grid(s, [
    ("P01", "Enterprise outsourced support · frontline",
     "5–6 difficult cases/day; 20–25 min context work per case. Strategic use: quantified context and handoff cost."),
    ("P02", "Enterprise banking complaints · frontline",
     "15 min duplicate logging; 4–6 hr formal approval wait. Strategic use: audit, approval and read-only constraints."),
    ("P03", "Mid-market (~400) · application approval",
     "One-month pilot, 2 queues, write-back disabled. Strategic use: least-privilege, reversible pilot design."),
    ("P04", "Mid-market B2B SaaS/services · frontline",
     "Manual Zendesk-to-Jira summary; warns against a duplicate system. Strategic use: second context/handoff case plus counter-evidence."),
], top=1680000, gh=1200000)
inner_x = add_card(s, MARGIN, 4560000, CONTENT_W, 820000, fill=LIGHT_GRAY)
add_textbox(s, "DIVERSITY AUDIT / LIMITATION   2 enterprise + 2 mid-market; 3 frontline + 1 application-approval stakeholder; no support manager or economic buyer. Sample is 4 of the requested 8–12 minimum.",
            inner_x, 4560000, CONTENT_W - 700000, 820000, size=10, color=INK, anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.2)
foot(s, appendix=True)

# ------------------------------------------------- A4. INTERVIEW TIME COST
s = new_slide(prs)
section_header(s, "INTERVIEW EVIDENCE, QUANTIFIED", "Where interviews gave a number", appendix=True)
add_image_centered(s, os.path.join(ASSETS, "pain_time_chart.png"), 1900000, 8600000, 2.9 / 8.4)
foot(s, appendix=True)

# ------------------------------------------------- A5. MARKET OPPORTUNITY
s = new_slide(prs)
section_header(s, "MARKET OPPORTUNITY", "Big category, frequent workflow, unproven price", appendix=True)
add_image_card(s, os.path.join(ASSETS, "market_chart.png"), MARGIN, 1680000, 6600000, 2280000)
inner_x = add_card(s, MARGIN + 6900000, 1680000, CONTENT_W - 6900000, 2280000, fill=LIGHT_AMBER)
add_rich_textbox(s, inner_x, 1810000, CONTENT_W - 6900000 - 700000, 2000000, [
    [("BOTTOM-UP\nCOST POOL\n\n", {'size': 9.5, 'bold': True, 'color': AMBER_DARK})],
    [("$430–860M", {'size': 22, 'bold': True, 'color': AMBER_DARK})],
    [("/year, illustrative — a cost-of-the-problem ceiling, not a revenue forecast.", {'size': 8.8, 'color': INK})],
], line_spacing=1.2)
add_hline(s, MARGIN, 4090000, CONTENT_W, color=LINE)
add_textbox(s, "Willingness-to-pay logic: customers may pay if the product removes measurable coordination work and avoids reopens at a predictable total cost. No interview established an economic buyer, budget threshold, or purchase intent.",
            MARGIN, 4290000, CONTENT_W, 700000, size=10.5, color=SLATE, line_spacing=1.2)
foot(s, appendix=True)

# ------------------------------------------------------- A6. COMPETITIVE MAP
s = new_slide(prs)
section_header(s, "COMPETITIVE MAP", "Four different entry doors", appendix=True)
add_image_centered(s, os.path.join(ASSETS, "competitive_positioning.png"), 1720000, 5300000, 5.6 / 7.4)
foot(s, appendix=True)

# --------------------------------------------------- A7. COMPETITIVE POSITION
s = new_slide(prs)
section_header(s, "COMPETITIVE POSITION", "What each incumbent already owns", appendix=True)
card_grid(s, [
    ("IN", "Intercom / Fin",
     "Promise (V1–V3): AI resolution, clear outcome unit. Weakness (R1, R2): complex workflows can shift work back to support ops."),
    ("ZD", "Zendesk AI",
     "Promise (V4, V5): complete service ops with embedded AI. Weakness (R3, R4): breadth raises configuration and cost complexity."),
    ("FD", "Freshdesk / Freddy AI",
     "Promise (V6–V8): approachable omnichannel, packaged AI. Weakness (R5): advanced depth lags as teams mature."),
    ("SF", "Salesforce / Agentforce",
     "Promise (V9–V11): governed AI on trusted CRM context. Weakness (R6): time to value and cross-cloud complexity."),
], top=1680000, gh=1350000, badge_fill=SLATE, body_size=9)
add_textbox(s, "Rejected differentiators: “uses AI,” “unifies context,” “integrates,” “governed and secure,” “vendor neutral” — necessary, none sufficient.",
            MARGIN, 5580000, CONTENT_W, 320000, size=9.5, color=SLATE, italic=True)
foot(s, appendix=True)

# --------------------------------------------- A8. WEDGE AND VULNERABILITY
s = new_slide(prs)
section_header(s, "WEDGE AND VULNERABILITY", "Where each incumbent is strong, and where to test", appendix=True)
rows_wedge = [
    ["PRODUCT", "ENTRY WEDGE", "WHAT COMPOUNDS", "VULNERABILITY TO TEST"],
    ["Intercom / Fin", "Standalone, outcome-priced AI agent", "Conversation, knowledge, workflow, evaluation data", "Tuning effort, handoff quality, cost predictability"],
    ["Zendesk AI", "Trusted ticketing system of record", "Case history, routing, reporting, marketplace", "Setup effort and workflow-specific resolution quality"],
    ["Freshdesk / Freddy AI", "Ease and accessible price-to-value", "Configured helpdesk workflow, apps, suite", "Advanced depth and integration reliability"],
    ["Salesforce / Agentforce", "CRM context, enterprise governance", "Data, flows, permissions, partners", "Time to value, fit for non-Salesforce stacks"],
]
add_table(s, MARGIN, 1780000, CONTENT_W, [2100000, 2500000, 3200000, 3111840], rows_wedge,
          row_heights=[500000, 700000, 700000, 700000, 700000], body_size=8.8, header_size=8.5)
add_textbox(s, "H: derived from current vendor positioning, packaging, and workflow — not independently measured moats.",
            MARGIN, 5480000, CONTENT_W, 320000, size=9, color=SLATE, italic=True)
foot(s, appendix=True)

# ------------------------------------------------- A9. CROWDED CAPABILITY
s = new_slide(prs)
section_header(s, "CROWDED CAPABILITY SPACE", "Seven capabilities every incumbent already claims", appendix=True)
claims = [
    "AI agents and knowledge-grounded answers",
    "Agent assistance and summarization",
    "Human handoff and approvals",
    "External integrations and system actions",
    "Analytics, evaluation, and governance",
    "Usage- or outcome-based pricing",
    "Compatibility with an existing service stack",
]
row_h_c = 480000
top_c = 1780000
for i, item in enumerate(claims):
    ry = top_c + i * row_h_c
    add_number_badge(s, MARGIN, ry + 40000, 340000, str(i + 1), fill=SLATE, size=11)
    add_textbox(s, item, MARGIN + 480000, ry, CONTENT_W - 480000, row_h_c, size=12, color=INK,
                anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.1)
inner_x = add_card(s, MARGIN, top_c + 7 * row_h_c + 150000, CONTENT_W, 700000, fill=LIGHT_AMBER, accent=AMBER)
add_textbox(s, "STRATEGY IMPLICATION   generic AI and integration claims cannot carry the product strategy. A credible entry needs one workflow where the product proves better completion, control, effort, or cost.",
            inner_x, top_c + 7 * row_h_c + 150000, CONTENT_W - 700000, 700000, size=10, color=INK, anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.2)
foot(s, appendix=True)

# ------------------------------------------------- A10. INITIAL WORKFLOW
s = new_slide(prs)
section_header(s, "INITIAL WORKFLOW", "The six-step workflow and its trust-graduated stages", appendix=True)
rows_stage = [
    ["STAGE", "WHAT SHIPS", "ACCESS REQUIRED", "EXIT SIGNAL"],
    ["Land", "Read-only view (steps 1–3). No draft, no write-back.", "Read-only, zero write scopes", "Unprompted use; time-to-context drops"],
    ["Control / Prove", "Same surface, same access. Measure minutes saved.", "Unchanged", "Sustained use, no incident"],
    ["Expand (early)", "Drafted suggestion (step 4), human-approved (step 5)", "+1 narrow write scope", "Drafts accepted often enough to save time"],
    ["Expand (later)", "Write-back (step 6); adjacent workflows", "Scoped, audited write-back", "Renewal, manager pull"],
    ["Platform yr 2–3", "Adjacent Customer Ops workflows, same model replayed", "Same model per workflow", "Expansion without a bespoke project"],
]
add_table(s, MARGIN, 1780000, CONTENT_W, [1700000, 3700000, 2500000, 3011840], rows_stage,
          row_heights=[500000, 700000, 600000, 700000, 700000, 600000], body_size=9, header_size=8.5)
foot(s, appendix=True)

# ------------------------------------------------------------- A11. ROADMAP
s = new_slide(prs)
section_header(s, "ROADMAP", "Earn the platform, one gate at a time", appendix=True)
rows_rm = [
    ["HORIZON", "GOAL", "EVIDENCE GATE"],
    ["0–6 mo · Prove", "One workflow in one segment", "≥4 customers show the same workflow; ≥2 paid/committed pilots"],
    ["6–12 mo · Repeat", "Deploy the same workflow faster", "Faster repeat deploys; retention; acceptable margin"],
    ["12–24 mo · Expand", "Adjacent workflows for the same team", "Usage/renewal pull; repeatable cross-workflow expansion"],
    ["24–36 mo · Platform", "Selected Customer Operations workflows", "Expansion without custom-project economics"],
]
add_table(s, MARGIN, 1780000, CONTENT_W, [2200000, 4000000, 4711840], rows_rm,
          row_heights=[460000, 620000, 560000, 560000, 560000], body_size=10, header_size=9.5)
inner_x = add_card(s, MARGIN, 5100000, CONTENT_W, 700000, fill=LIGHT_GRAY)
add_textbox(s, "QUARTERLY STOP RULES   narrow or stop if customers prefer incumbent-native AI at acceptable cost; don't call it a platform until expansion happens without services-heavy customization.",
            inner_x, 5100000, CONTENT_W - 700000, 700000, size=9.5, color=INK, anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.2)
foot(s, appendix=True)

# -------------------------------------------------------- A12. MOAT DETAIL
s = new_slide(prs)
section_header(s, "MOAT MECHANISMS", "How each mechanism compounds", appendix=True)
rows_moat = [
    ["MECHANISM", "CONCRETE ARTIFACT", "RISK IT DEFEATS"],
    ["Workflow evaluation data", "Per-workflow library of correct/refuse/escalate examples", "Competitors starting quality from zero"],
    ["Reliable action contracts", "Versioned, scoped, audited, reversible connectors", "Easy-to-copy idea, hard-to-copy hardening"],
    ["Operational learning loop", "Corrections/reopens become regression tests", "Quality resetting each release"],
    ["Repeatable deployment", "Templates per stack combination", "Slow, costly repeat deployments"],
    ["Switching cost, trusted ops", "Per-customer permission + evaluation profile", "Easy vendor replacement"],
]
add_table(s, MARGIN, 1780000, CONTENT_W, [2600000, 4900000, 3411840], rows_moat,
          row_heights=[460000, 560000, 560000, 560000, 560000, 560000], body_size=9.5, header_size=9)
add_textbox(s, "The first three mechanisms were already visible in the competitive teardown; the last two sharpen that list further. None of the five is the model, generic retrieval, or connector-catalogue size — those are copyable, not defensible.",
            MARGIN, 5320000, CONTENT_W, 500000, size=9.5, color=SLATE, italic=True, line_spacing=1.2)
foot(s, appendix=True)

# ---------------------------------------------------------------- A13. GTM
s = new_slide(prs)
section_header(s, "GTM, METRICS AND PRICING", "How the motion is measured and priced", appendix=True)
rows_gtm = [
    ["MOTION", "WHO", "OFFER", "TRIGGER TO ADVANCE"],
    ["Land", "Head/VP Support or Customer Ops buys; Support Ops operates; IT/security approve", "30–60 day pilot for one workflow", "Baseline volume, measurable pain, access approved"],
    ["Control / Prove", "Frontline agents and support managers", "Shadow/assist workflow, read-only", "No rise in reopens, unsafe actions or audit gaps"],
    ["Expand (early)", "Same support team", "Adjacent variant or second system", "Repeated usage, manager pull"],
    ["Expand (later)", "Customer success / operations", "Adjacent workflows, shared controls", "Renewal, buyer-backed ROI"],
]
add_table(s, MARGIN, 1700000, CONTENT_W, [1400000, 3400000, 2900000, 3211840], rows_gtm,
          row_heights=[460000, 620000, 560000, 480000, 480000], body_size=9, header_size=8.5)
inner_x = add_card(s, MARGIN, 5320000, CONTENT_W, 640000, fill=LIGHT_AMBER)
add_textbox(s, "METRICS   primary: median context-collection minutes per difficult case. Guardrails: reopen rate, unauthorized action rate, audit completeness, connector failures, CSAT.",
            inner_x, 5320000, CONTENT_W - 700000, 640000, size=9.3, color=INK, anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.15)
add_textbox(s, "Pricing hypothesis: a predictable base subscription plus a capped usage tier tied to workflow volume or verified outcomes.",
            MARGIN, 6060000, CONTENT_W, 320000, size=9, color=SLATE, italic=True, line_spacing=1.15)
foot(s, appendix=True)

# ------------------------------------------- A14. RISKS AND DECISION GATES
s = new_slide(prs)
section_header(s, "RISKS AND DECISION GATES", "What has to be true before this scales", appendix=True)
rows_risk = [
    ["RISK", "MITIGATION"],
    ["Incumbents close the gap", "Win only with a validated workflow, faster deployment, better economics"],
    ["Poor context or unsafe action", "Read-only first, citations, approval, audit, rollback, safe stop"],
    ["Interview evidence is too narrow", "Disclose 4/8; treat ICP and workflow as hypotheses"],
    ["Bottom-up estimate overstates confidence", "Vertical-share input labeled an assumption, not fact"],
]
add_table(s, MARGIN, 1700000, CONTENT_W, [4400000, 6511840], rows_risk,
          row_heights=[460000, 620000, 620000, 560000, 560000], body_size=10, header_size=9.5)
inner_x = add_card(s, MARGIN, 5000000, CONTENT_W, 800000, fill=LIGHT_GRAY)
add_textbox(s, "REJECT OR NARROW IF   customers can't name one urgent workflow; IT/security won't permit access; the incumbent completes it well enough already; no buyer will sponsor a pilot.",
            inner_x, 5000000, CONTENT_W - 700000, 800000, size=9.3, color=INK, anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.2)
foot(s, appendix=True)

# ------------------------------------------- A15. DECISION GATES DETAIL
s = new_slide(prs)
section_header(s, "INTERVIEW DECISION GATES", "All four gates are still unmet", appendix=True)
rows_gate = [
    ["GATE", "THRESHOLD", "OBSERVED", "STATUS"],
    ["Same repeated workflow", "≥4 participants", "2", "Not met"],
    ["Measurable impact, leading workflow", "≥3 participants", "1", "Not met"],
    ["Native tool insufficient", "≥3 participants", "2", "Not met"],
    ["Strong pilot interest", "≥2 participants", "0", "Not met"],
]
add_table(s, MARGIN, 1700000, CONTENT_W, [4700000, 2300000, 1900000, 2011840], rows_gate,
          row_heights=[460000, 620000, 620000, 500000, 500000], body_size=10, header_size=9.5)
inner_x = add_card(s, MARGIN, 4900000, CONTENT_W, 1200000, fill=LIGHT_GRAY)
add_textbox(s, "EVIDENCE STILL MISSING   buyer interviews across company size; recent workflow frequency and failure cost; a hands-on incumbent comparison; security/permission requirements; pilot sponsorship and a full cost model.",
            inner_x, 4900000, CONTENT_W - 700000, 1200000, size=9.3, color=INK, anchor=MSO_ANCHOR.MIDDLE, line_spacing=1.25)
foot(s, appendix=True)

# ------------------------------------------------- A16. EVIDENCE REGISTER
s = new_slide(prs)
section_header(s, "EVIDENCE REGISTER", "The research record behind this deck", appendix=True)
rows_reg = [
    ["REGISTER", "WHAT IT COVERS"],
    ["General research base", "65 sources → 56 linked → 91 evidence records; 4 interviews (P01–P04), kept separate"],
    ["Competitive teardown", "V1–V11 (vendor claims), R1–R6 (review signals), I1–I2 (interviews), H (synthesis), U (unresolved)"],
]
add_table(s, MARGIN, 1780000, CONTENT_W, [2800000, 8111840], rows_reg, row_heights=[460000, 700000, 700000], body_size=10.5, header_size=9.5)
add_textbox(s, "secondary-research-report.md · source-inventory.csv · review-evidence.csv · interview notes P01–P04 · research/bottom-up-market-estimate.md · research/competitive-teardowns/",
            MARGIN, 3900000, CONTENT_W, 700000, size=9.5, color=SLATE, line_spacing=1.3)
add_textbox(s, "The two registers are related but kept distinct — never merged into one ID system.",
            MARGIN, 4700000, CONTENT_W, 400000, size=9.5, color=SLATE, italic=True)
foot(s, appendix=True)

fix_notes_master_id_lst(prs)

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "presentation", "B2B_Product_Strategy_v3_Deck.pptx")
prs.save(OUT)
print("Saved v3 deck:", OUT, "-", len(prs.slides._sldIdLst), "slides")
