# Deck edits to apply — v4 → v5

Every number and source below is verified against `data/survey/normalized-data.tsv`
(62 unique records, R032 removed) and `research/desk-research-report.md`.
Nothing here introduces a new claim.

---

## 1. SLIDE 2 — replace the "REQUIREMENT GAP" panel

**Why:** "That requirement was not met" concedes the whole of Step 2. The brief's own
proof bullet allows online-conducted research ("Screenshots of messages if interviews
are conducted online"), and 30 respondents did answer open-ended prompts.

### Keep
- Section label: `RESEARCH METHOD`
- Title: `What we actually researched`
- Live URL chip, language chip, evidence-ZIP footer line

### Change the subtitle
> A deliberate method choice under constraint — stated up front, not buried in a footnote.

### Replace the two panels with three

**PANEL 1 — `METHOD CHOICE`**
> Synchronous interviews were not feasible in the available window. I built a
> multilingual self-serve research app instead: rider/driver branching, structured
> tags, and four open-text or voice prompts on the difficulty path.

**PANEL 2 — `DEPTH ACHIEVED`**
> 62 unique respondents. 30 answered at least one open-ended narrative prompt,
> 11 gave extended accounts, and 3 completed all four detailed prompts.

**PANEL 3 — `TRADEOFF`**
> No live probing and no follow-up on surprising answers. Depth per respondent is
> lower than a moderated interview; breadth, language coverage and traceability
> are higher.

### Change the stat strip
> 62 unique submissions · 58 riders · 4 drivers · 33 Hyderabad / 29 other cities
> · 30 open-ended responses

**Verified depth tiers** (recomputed, use these and no others):

| Tier | Count |
|---|---|
| Answered >=1 narrative prompt | 30 |
| Extended account (100+ chars) | 11 |
| Answered >=2 narrative prompts | 8 |
| Completed all four detailed prompts | 3 |

---

## 2. NEW SLIDE — insert after slide 3, renumber the rest

Section label: `MARKET, SEGMENTS AND TRENDS`
Title: `A sizing model with a named missing denominator`
Subtitle: `Refusing a fabricated TAM is the finding — not an omission.`

**PANEL 1 — `SIZING MODEL`**
> Annual affected pickups = annual Hyderabad Uber four-wheel pickups x share
> beginning at complex locations x share hitting material difficulty.
> None of the three inputs exists in a reliable public source, so no TAM is claimed.

**PANEL 2 — `EXPOSURE POOLS (NOT THE PROBLEM)`**
> Hyderabad Airport: 30M+ passengers FY2025-26 (GMR). Hyderabad Metro: 4.75 lakh+
> average daily riders across 57 stations (Nov 2024). Secunderabad station:
> ~1.30 lakh per normal day, 2 lakh+ during festivals.

**PANEL 3 — `WHERE DEMAND CONCENTRATES`**
> Segment by location type, not demographics. Among 28 issue cases: airport 10,
> gated residential 7, mall 6, office 6, metro/rail 5, street 3, hotel 2, hospital 1.
> This segmentation is what the strategy targets.

**TRENDS strip (four short items)**
> Regulatory tailwind — MV Aggregator Guidelines 2025 mandate in-journey location
> sharing, accessibility features and language support.
> Category maturing — Uber already ships HYD airport guidance; Lyft ships pickup
> notes; Grab ships venue meeting points.
> Curb space tightening — access-control windows now appear at Indian transport
> hubs (Secunderabad's 15-minute pickup/drop rule).
> Privacy raising the bar — DPDP Act 2023 constrains how venue and location data
> can be collected and retained.

**Footer boundary line**
> Telangana's adoption of the 2025 central guidelines and venue-level stopping
> rules both require legal and on-site verification. Product research, not legal advice.

**Sources to keep in speaker notes:** Uber Newsroom 2026 (11.6bn India km, 2025);
Uber Newsroom 2023 (Hyderabad among top-6 Indian cities by trips); GMR;
L&T Metro Nov 2024; Telangana Today; MoRTH MV Aggregator Guidelines 2025;
DPDP Act 2023.

---

## 3. NEW APPENDIX SLIDE — insert directly after the methodology appendix slide

Section label: `APPENDIX · KEY RESEARCH QUESTIONS`
Title: `The ten questions the instrument asked`
Subtitle: `Template section 1.1 — asked asynchronously, without live follow-up.`

Numbered list, verbatim from `synthesis/01-survey-insights.md` §1.1:

1. Tell me about the last time you had difficulty finding your ride after booking it.
2. Where were you, and what did the app tell you?
3. When did you first realize the pickup might not work as expected?
4. What made the rider and driver difficult to locate or identify?
5. What did you do next: call, message, move, wait, cancel, or seek help?
6. How much extra time or effort did the situation require?
7. What finally helped, if anything?
8. Has the same problem happened at other locations?
9. What information or support was missing at the most frustrating moment?
10. For drivers: what prevented you from reaching the pin or identifying the rider?

**Footer line**
> The four narrative prompts were optional in the interface, and the form could not
> ask a follow-up when an answer was vague.

---

## 4. Four precision corrections

### 4.1 Slide 5 — restore "or uncertainty"
FIND    `24 of 51 recent users reported difficulty`
REPLACE `24 of 51 recent users reported difficulty or uncertainty`
Reason: 23 answered "yes" and 1 answered "not sure". `synthesis/01-survey-insights.md`
already uses the correct phrasing; the deck dropped it.

### 4.2 Slide 5 — bridge the 51 -> 28 denominator shift
ADD to the interpretation-boundary line:
> The 28 issue cases are the 24 recent four-wheel users plus 3 respondents with no
> recent four-wheel trip and 1 unsure, all of whom reported a pickup issue.
Reason: the deck jumps from "24 of 51" to "28 issue cases" with no bridge. An
evaluator reading closely will think the figures do not tie.

### 4.3 Slide 6 — label the truncated chart
FIND    `Problem locations among 28 issue cases`
REPLACE `Problem locations among 28 issue cases — top 6 of 8 types`
Reason: hotel (2) and hospital (1) are currently dropped silently.

### 4.4 Slide 8 — strengthen the Idea 1 anchor
FIND    `Calls/messages helped in 20 of 28 issue cases, and R061 already sends pickup details manually.`
REPLACE `Calls/messages helped in 20 of 28 issue cases. R061 already sends these details manually — and reported no pickup difficulty.`
Reason: R061's difficulty flag is "no". That makes the workaround look effective
rather than anecdotal, and it is a stronger, fully honest claim. Still n=1 — keep
the single-respondent caveat in the notes.

---

## 5. Appendix slides 12 and 18 — align with the new framing

**Slide 12 (methodology)** — replace:
> Does not satisfy the assignment's 10 in-depth interview requirement

with:
> Asynchronous online research, not synchronous in-depth interviews: 30 respondents
> answered open-ended prompts, but no answer could be probed live

**Slide 18 (evidence boundary)** — replace:
> Online survey with interview-style prompts; not 10 synchronous in-depth interviews

with:
> Online survey with interview-style prompts; 30 open-ended responses but no live
> probing, so qualitative depth is shallower than a moderated interview

Leave every other boundary bullet on slide 18 exactly as it is. They are the
strongest part of the deck.

---

## 6. Script changes

Current: 575 words targeting 4:20-4:40 (~130 wpm, slower than most people present).
After these edits: ~645 words. At a realistic 145-150 wpm that is **4:15-4:30** —
still inside the five-minute limit.

### Slide 2 narration — replace entirely
> I want to be transparent about method. Synchronous interviews were not feasible in
> the time available, so I built a multilingual self-serve research app instead, with
> rider and driver branches, structured tags, and optional open-text or voice prompts.
> After removing one confirmed duplicate, the base is sixty-two unique respondents:
> fifty-eight riders, four drivers, thirty-three from Hyderabad, twenty-nine from other
> Indian cities. Thirty of them answered open-ended questions and eleven wrote extended
> accounts. The tradeoff is real: I could not probe a vague answer or follow up on a
> surprise. This is directional primary research with less depth per person than a
> moderated interview, and more breadth and language coverage.

### New market slide narration — insert after the slide 3 paragraph
> On market size, I want to be direct about what I will not do. A credible estimate
> needs Hyderabad four-wheel pickup volume, the share starting at complex locations,
> and the share hitting real difficulty. None of those three is publicly available, so
> I am presenting the model and the missing denominator rather than inventing a TAM.
> What public data does give me is exposure: thirty million airport passengers a year,
> over four and a half lakh daily metro riders, and about one-point-three lakh a day at
> Secunderabad. And the segmentation that matters here is location type, not demographics.

### Recording checklist — add one line
> Slide count changed: present slides 1-11 (was 1-10).

---

## 7. Evidence ZIP — one addition

`02-Survey-Method/Screenshots/` currently holds five screenshots, all of the **empty
survey UI**. The brief asks for "screenshots of messages" as proof of talking to people.

Add: `06-received-responses-anonymized.png` — a montage of the 11 extended narrative
responses as received, with names, phone numbers and email addresses masked.
Source them from the sanitized workbook, not the raw sheet.

Then refresh `00-READ-ME.md` and `Evidence-Manifest.pdf` to list the new file.

---

## 8. Order of work

1. Slide 2 rewrite + script (section 1, 6)
2. New market slide + renumber (section 2)
3. New appendix questions slide (section 3)
4. Four precision corrections (section 4)
5. Appendix 12 / 18 alignment (section 5)
6. Response-screenshot montage + manifest refresh (section 7)
7. Record slides 1-11, add the link to the final appendix slide, re-export the PDF,
   rebuild the ZIP
