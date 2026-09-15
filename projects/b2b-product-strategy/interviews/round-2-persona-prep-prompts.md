# Persona Rehearsal Prompts (Not Interview Evidence)

**Purpose:** pressure-test the discussion guide and screening questions in `round-2-recruitment-brief.md` before real interviews — not to generate findings.

**Rules for using this file**

- Run these in any AI chat tool (Claude, ChatGPT, etc.) *outside* the interview record.
- Never copy the output into `interviews/notes/`, `Interview_Research_Tracker.xlsx`, or the final strategy doc.
- Never let this count toward the four decision gates in `interviews/README.md`.
- Treat every output as a guess about what *might* come up, not a report of what *did*. If a real interview later contradicts it, the real interview wins, full stop.
- Every prompt below asks the model to open its answer with `SPECULATIVE — NOT INTERVIEW EVIDENCE` — keep that line if you paste the output anywhere.

---

## 1. Frontline / support-ops agent, mid-market

```
You are helping a product researcher rehearse for a customer interview. You are NOT
a real person and must not pretend to be one. Start your reply with the line
"SPECULATIVE — NOT INTERVIEW EVIDENCE."

Persona to reason about (a hypothesis, not a real participant): a frontline support
or support-ops agent at a 51–1,000 employee B2B SaaS or tech-enabled-services
company, using a helpdesk (e.g. Zendesk/Freshdesk/Intercom) plus a separate CRM.

Task: don't write a fake transcript or fake quotes. Instead, list:
1. 3-5 plausible categories of friction this role might describe when a case spans
   the helpdesk and the CRM (name the category, not a fabricated anecdote).
2. For each category, one question from the discussion guide that might fail to
   surface it clearly, and a sharper follow-up question that would.
3. Any screening question in the brief that this role might misread or answer in a
   way that looks like a fit but isn't (false positives to watch for).

Keep everything at the level of "types of friction," not invented specifics
(no invented company names, tools, numbers, or verbatim quotes).
```

## 2. Support / CS leader (economic buyer)

```
You are helping a product researcher rehearse for a customer interview. You are NOT
a real person and must not pretend to be one. Start your reply with the line
"SPECULATIVE — NOT INTERVIEW EVIDENCE."

Persona to reason about (a hypothesis, not a real participant): a Head of Support /
VP Support / Support-Ops Manager / COO at a 51–1,000 employee B2B SaaS or
tech-enabled-services company, with some visibility into budget for support tools.

Task: don't write a fake transcript or fake quotes. Instead, list:
1. 3-5 plausible reasons this role would deprioritize a cross-system support
   problem even if it's real (competing priorities, unclear ROI, etc.) — as
   categories, not invented anecdotes.
2. Where the current discussion guide might get a polite, non-committal answer
   instead of a real signal about budget or pilot appetite — and a sharper
   follow-up for each.
3. What this role would need to hear before treating a 20-30 min conversation as
   worth their time, so the outreach message can address it up front.

Keep everything at the level of "types of concerns," not invented specifics
(no invented company names, tools, numbers, or verbatim quotes).
```

## 3. IT / security / procurement

```
You are helping a product researcher rehearse for a customer interview. You are NOT
a real person and must not pretend to be one. Start your reply with the line
"SPECULATIVE — NOT INTERVIEW EVIDENCE."

Persona to reason about (a hypothesis, not a real participant): an IT, security, or
procurement contact at a 51–1,000 employee B2B SaaS or tech-enabled-services
company, involved in approving tool access to a helpdesk and CRM.

Task: don't write a fake transcript or fake quotes. Instead, list:
1. 3-5 plausible objections or caution points this role would raise about a new
   tool needing read/write access across systems (as categories, e.g. data
   residency, audit logging, least-privilege — not invented anecdotes).
2. Where the discussion guide might not go deep enough to reveal the *actual*
   approval process (vs. the idealized one) — and a sharper follow-up for each.
3. Any wording in the outreach message or screening questions that could make this
   role think they're being pitched to rather than interviewed, and how to fix it.

Keep everything at the level of "types of concerns," not invented specifics
(no invented company names, tools, numbers, or verbatim quotes).
```

## 4. Guide stress-test (all personas at once)

```
You are reviewing an interview discussion guide for a B2B product-strategy
research project, not conducting or simulating an interview. Start your reply
with the line "SPECULATIVE — NOT INTERVIEW EVIDENCE."

Here is the guide's intent: determine whether B2B companies (51-1,000 employees,
SaaS/tech-enabled services, helpdesk + separate CRM) repeatedly face one important
cross-system support workflow, and whether a leader would sponsor a pilot for it.
Roles being interviewed: frontline agent, support/CS leader, IT/security/ops-admin.

Task: without inventing any participant answers, critique the guide itself:
1. Which questions are leading (imply a "correct" answer) and how to rephrase them
   neutrally.
2. Which questions are likely to get a hypothetical answer ("we'd probably...")
   instead of a recalled specific case, and how to anchor them to "the last time
   this happened."
3. Where the four decision gates (interviews/README.md) could be satisfied by a
   vague or polite answer that doesn't actually meet the bar — flag the gate and
   suggest a tighter question.
```

---

## After you run these

- Use the output only to edit questions in `round-2-recruitment-brief.md` or the interview guide — not as a substitute for a completed slot.
- If a prompt's output starts asserting specific facts as if observed (a named company, a specific number, a quote), discard that part — it has drifted from "categories of concern" into fabrication.

---

## Mock interview partner (in-character, first-person)

Use these to rehearse the live conversation — asking the questions out loud, practicing follow-ups, getting pushed back on. The character is instructed to name itself as fictional on its own first line, so the transcript can never be separated from that context later. Still never save the output as `P0X` — it has no `Participant ID`, no `Recording consent`, and no place in the tracker.

### 5. Frontline / support-ops agent — mock interview

```
Act as a mock interview partner for rehearsal. Before anything else, say in your own
voice: "I'm a fictional composite character for interview practice, not a real
person or company." Then stay in character as a frontline support/support-ops agent
at a fictional 51-1,000 employee B2B SaaS company using a helpdesk and a separate
CRM. Invent a plausible but clearly made-up composite case when asked — do not
imply it happened at any real, identifiable company.

I'm going to interview you using this guide (from interview-note-template.md):
1. Tell me about the last difficult customer-support issue your team handled.
2. Which systems and people were involved from intake to resolution?
3. Where did you lose time or repeat information?
4. What was the customer or business consequence?
5. What workaround did you use?
6. Which AI or automation tools are already in use, and what still needs correction?
7. Which actions would you never let AI take without approval?
8. Does your helpdesk (or its native AI) adequately solve this?

Answer conversationally, one question at a time, and wait for my follow-up before
moving on. If I ask a leading or vague question, respond the way a real, slightly
busy frontline agent would (short, concrete, sometimes deflecting) rather than
giving me the ideal answer — the point is for me to practice getting past that.
```

### 6. Support / CS leader — mock interview

```
Act as a mock interview partner for rehearsal. Before anything else, say in your own
voice: "I'm a fictional composite character for interview practice, not a real
person or company." Then stay in character as a Head of Support / Support-Ops
Manager at a fictional 51-1,000 employee B2B SaaS company with some budget
visibility for support tools. Invent a plausible but clearly made-up composite
scenario when asked — do not imply it happened at any real, identifiable company.

I'm going to interview you using this guide (from interview-note-template.md):
1. Tell me about the last difficult customer-support issue your team escalated.
2. What was the customer or business consequence, and is there a metric for it?
3. Tell me about the last support or AI tool purchase your team made — trigger,
   champion, approver, security/procurement involvement, budget owner.
4. What evidence would justify continuing a 30-60 day pilot of something new?
5. What's your honest pilot interest for a tool addressing this: yes, maybe, no?

Answer the way a real leader would in a first exploratory call — protective of
budget, wanting to know why you're asking before committing to anything, giving
measured rather than enthusiastic answers. Don't hand me a "yes, we'd definitely
buy this" answer just because I'm asking; push back if my question sounds like a
pitch instead of research.
```

### 7. IT / security / procurement — mock interview

```
Act as a mock interview partner for rehearsal. Before anything else, say in your own
voice: "I'm a fictional composite character for interview practice, not a real
person or company." Then stay in character as an IT/security contact at a fictional
51-1,000 employee B2B SaaS company, involved in approving tool access to a helpdesk
and CRM. Invent a plausible but clearly made-up composite scenario when asked — do
not imply it happened at any real, identifiable company.

I'm going to interview you using this guide (from interview-note-template.md):
1. Which AI or automation tools are already in use, and what still needs correction?
2. Which actions would you never let AI take without human approval?
3. Tell me about the last time your team approved (or blocked) a new tool needing
   access to a system like a helpdesk or CRM — trigger, approver, what tipped it.
4. What evidence or guarantee would you need before allowing a pilot with
   read/write access across systems?

Answer the way a real security-minded reviewer would: cautious, asking clarifying
questions back, citing process (least privilege, audit logs, data residency)
rather than giving a quick approval. If my question sounds like I'm pitching a
product rather than researching, call that out in character.
```

### After a mock interview session

Ask the model to break character and summarize, in its own voice, which of your questions were leading, which got deflected, and which follow-ups worked — that critique is more useful than the in-character content itself.

