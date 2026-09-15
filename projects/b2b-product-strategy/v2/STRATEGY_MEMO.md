# B2B Product Strategy — v2

**A fresh-eyes rebuild.** Same assignment, same evidence base as v1 (91 public evidence records, 4 anonymized interviews, 4 incumbent teardowns) — but re-reasoned from the brief's own starting fact instead of picking up v1's conclusions and reformatting them. One new analysis added: a bottom-up cost-pool estimate (`research/bottom-up-market-estimate.md`). Where this lands close to v1, it's because the same facts point the same way — not because v1 was assumed correct going in. Where it differs, that's called out explicitly.

## Recommendation

**Earn the platform. Don't announce it.** The original motion failed for a specific, diagnosable reason — it asked mid-market IT teams to trust a new AI system with broad access, to do a job (conversational deflection) that isn't where their pain actually is. The fix isn't a bigger platform pitch on day one — leadership is right that the destination is a comprehensive Customer Operations Platform, but naming that destination doesn't earn it any more than "AI chatbot" did. Earning it starts with the smallest possible product that needs the least possible trust: a read-only view that assembles a support agent's scattered context in one place, with nothing written back anywhere, sold to a segment picked specifically to avoid the three traps that likely killed the first attempt.

---

## The diagnosis: why did the original motion stall?

The brief hands us a fact, not a footnote: mid-sized businesses (200–1,000 employees) were targeted first, and adoption was slower than expected. Before choosing a segment or a problem, that fact needs an explanation — otherwise step 1 just repeats whatever mistake step 0 already made. Four failure modes, each traceable to evidence already on file:

**1. The positioning trap.** It was sold as "another AI chatbot." Every incumbent already claims AI agents, integrations, human handoff and governance (`research/secondary-research-report.md`, capability table — Intercom, Zendesk, Freshdesk and Salesforce all check every box). A mid-market buyer evaluating a fifth "AI chatbot" has no reason to add a vendor instead of turning on the AI feature they already pay for.

**2. The access-and-trust veto.** IT and security can kill a deal before anyone evaluates the product. P03 — an application-approval stakeholder at a ~400-person company — approved a pilot only after restricting it to two Zendesk queues with write-back disabled (`interviews/notes/P03.md`). Gartner's own survey of service leaders ranks AI agents below self-service, live chat, knowledge management and agent assist in perceived value (E01, `research/review-evidence.csv`) — that's reluctance to grant trust, not ignorance of the category.

**3. The bundled-AI trap.** Mid-market buyers aren't comparing a new tool to doing nothing manually — they're comparing it to the AI feature already sitting inside the helpdesk they already pay for. Freshworks' own mid-market survey (S09) found 36% of IT leaders were still stuck in pilots or hadn't deployed meaningfully, and 86% said managing AI complexity *increased* workload (E10, E11). Adding a sixth system to reduce complexity is a hard sell when the fifth one hasn't paid off yet.

**4. The workflow mismatch.** What was sold — conversational ticket deflection — isn't where the interviews say the pain lives. P01, P02 and P04 all describe the same shape of problem: an agent manually reassembling context across a helpdesk and a second system (CRM, a compliance system, Jira) during a hard case, not a customer failing to get an FAQ answered. Chatbots optimize the front door; the cost is in the back office.

None of these four is a new discovery — pieces of all four already exist in v1's evidence. What's new here is treating them as one connected diagnosis that should drive every later choice, instead of four separate observations sitting in different sections.

---

## Step 1 — Customer segment

**Keep mid-market as the size band. Narrow hard on who inside it, using the diagnosis as the filter — not just a size range.**

Stress-testing the alternatives against the four failure modes, not just against "who has the most pain":

- **Enterprise** has the most acute, best-quantified pain in the interviews — P01's ~100–150 minutes/day of context work, P02's 4–6 hour approval waits. But P02 is regulated banking: it maximizes failure mode #2 (the access veto) rather than avoiding it, and P01 is a multi-client outsourced BPO, where no single company owns the tool stack or the buying decision (his own contradiction flag: "the stack also varies by client"). Enterprise pain is real; enterprise is a worse place to *land*.
- **SMB / startups** mostly run one consolidated tool, not a helpdesk-plus-CRM split — there's no cross-system seam to be the wedge (fails failure mode #4: no mismatch to fix, because there's barely a second system).
- **Mid-market, filtered harder,** is where the seam exists and the buyer is reachable without triggering the worst version of the access veto.

**Working segment:** B2B SaaS or technology-enabled services companies, roughly 51–1,000 employees, running a helpdesk *and* a separate CRM or system of record as two distinct tools.

**Anti-personas — named explicitly, not left implicit:**
- **Not regulated/financial services.** P02 shows exactly what this does to a sales cycle: formal risk/compliance approval chains, 4–6 hour waits, and access decisions no support-ops buyer can make alone.
- **Not single-system shops.** If there's only one tool, there's no context to reassemble and no wedge — the product would be solving a problem the customer doesn't have.
- **Not multi-client outsourced support operations (BPOs).** P01's stack changes by client; there's no single owner who can approve access or champion a pilot.

This is close to v1's segment, and should be — the facts didn't move. What's different is the reasoning is now "here are three specific traps this segment avoids" instead of "here's a plausible sampling hypothesis."

---

## Step 2 — Market opportunity

**Two honest numbers, kept separate on purpose, plus one new estimate.**

- **Category size (top-down, unchanged from v1):** contact-center software is estimated at $47.7–63.9B and help-desk software at $14.3B (S33/S34/S35). These definitions don't align well enough to combine into one TAM, and combining them would manufacture false precision — so they stay as a range describing "this category is real and large," nothing more specific.
- **Frequency:** support is a high-volume, repeatable workflow — Freshworks' own datasets span up to 1.2B tickets and 138M conversations (S-series already cited in v1) — frequent enough that a 30–60 day pilot can observe real repetition, not a one-off anecdote.
- **New: bottom-up cost-pool estimate.** Rather than stop at "we can't calculate a TAM," `research/bottom-up-market-estimate.md` chains the already-logged Freshworks $16B mid-market "complexity drain" figure (S09) through the 27%-cite-integration-as-barrier figure (E10) and one clearly-labeled assumption about our vertical's share of that pool, to an illustrative **$430–860M/year reachable pain pool**. This is explicitly a cost-of-the-problem estimate, not a revenue forecast, and the weakest link (the vertical-share assumption) is called out as the next research priority, not smoothed over.
- **Why customers would pay:** the same logic as v1 — removing measurable coordination work, protecting SLA, avoiding reopens, at a predictable total cost. Still unproven at the level of an actual price point or budget line; no interview established a buyer's budget threshold.

---

## Step 3 — Core problem

**One problem, stated as a job story, aimed squarely at failure mode #4.**

> When a support agent picks up a case that needs information or action from a second system, they want a single place to see everything relevant without switching tools or asking someone else to look something up — because today that costs 15–25 minutes of manual work per case (P01, P02) and creates duplicate, disconnected history that the next person has to reconstruct from scratch.

This is the same leading pattern v1 identified (cross-system context and handoff), carried at the same honesty level: two of four interviews (P01, P04) independently describe it, below the four-participant threshold the interview guide itself set for calling a pattern validated. It's the leading hypothesis, not a proven one — and it's the problem that directly targets the mismatch diagnosed above, rather than another attempt at conversational deflection.

---

## Step 4 — Moat and defensibility

**Same categories as v1 — they're the right categories for this kind of business — sharpened into one concrete artifact per mechanism, each tied to the specific risk it has to defeat.**

| Mechanism | Concrete artifact | Risk it defeats |
|---|---|---|
| Workflow-specific evaluation data | A per-workflow library of "correct resolution / safe refusal / needs escalation" examples, built only from this customer's permissioned cases | Incumbents adding a similar feature without the same accumulated examples still start from zero on quality |
| Reliable action contracts | Versioned, scoped connectors (idempotent, audited, simulatable, reversible) per system-pair | A competitor can copy the idea; copying years of hardening against real failure modes takes real time |
| Operational learning loop | Every correction and reopened case becomes a regression test before the next release | Quality compounds with usage instead of resetting each release |
| Repeatable deployment | A template for each common helpdesk + system-of-record combination | Each new customer on a stack we've seen before deploys faster and cheaper than the first one — margin and speed both improve with scale |
| Switching cost through trusted operations | **A per-customer permission-and-evaluation profile** — the specific access grants, escalation rules and accumulated correction history built up over months of use | Replacing us means rebuilding that trust relationship with IT/security from zero, with a new vendor, from the same standing start that made the original chatbot motion slow to land in the first place |

The last row is the sharpest addition: the same access-and-trust veto that likely killed the original motion (failure mode #2) becomes, once earned, the thing that makes *leaving* costly. That's not a new mechanism — it's the same mechanism v1 named, made concrete enough to explain in one sentence to a buyer.

**Explicitly not a moat:** the underlying model, generic retrieval, or the size of the connector catalogue — all matchable by any competitor with an API key and a weekend.

**No network-effect claim.** Cross-customer learning is only plausible once there's a legal, secure, consented way to aggregate patterns without exposing one tenant's data to another — that mechanism doesn't exist yet.

---

## Step 5 — Land and expand

**Narrower first cut than v1, aimed directly at defeating failure mode #2.**

v1's MVP already bundled context-assembly, a drafted recommendation, approval routing and write-back into "the pilot." That's a reasonable *shadow-mode* deployment, but it's still a bigger initial ask than it needs to be — every one of those capabilities is one more thing for IT/security to approve before day one.

**v2's land wedge is smaller on purpose: read-only context, nothing else, first.**

| Stage | What ships | Access required | Exit signal |
|---|---|---|---|
| **Land** | A read-only view (sidebar or Slack/Teams surface) that pulls the relevant helpdesk + CRM/system-of-record context into one screen for a flagged difficult case. No drafting, no write-back, no autonomous action of any kind. | Read-only, scoped to specific fields, no write scopes requested at all | Agents use it unprompted on real difficult cases; time-to-context drops |
| **Prove** | Same surface, same access. Measure minutes saved per difficult case and whether agents trust what they see (do they still double-check the source systems?) | Unchanged — still read-only | Sustained usage without a security incident or access-scope complaint |
| **Expand 1** | Add a drafted next-action suggestion (still requires human approval to send or act) | Read-only + one new narrow write scope, requested only after trust is established | Agents accept drafts often enough that drafting saves real time |
| **Expand 2** | Add write-back to the system of record for approved actions, then adjacent workflows for the same team | Scoped write-back, audited, reversible | Renewal, manager-level pull for a second workflow, no increase in reopens or unauthorized actions |
| **Platform (year 2–3)** | Adjacent Customer Operations workflows for the same or adjacent teams, only once repeatable without services-heavy customization | Same trust-graduated model, replayed for each new workflow | Expansion happens without a bespoke integration project each time |

**Buyer, operator, approver — unchanged from v1, because the interview evidence for it hasn't changed:** initial buyer is a Head/VP of Support or Customer Operations; Support Ops operates it day to day; IT, security (and procurement, for anything beyond read-only) approve access. The point of starting read-only is that the hardest approver — security — has almost nothing to review on day one.

**What creates internal pull:** the same principle as v1 — measured time saved and a clean security record, not a platform mandate from above. The difference is *how fast* that pull can start, because the read-only-first sequencing means the approval conversation for stage one is close to trivial compared to the bundled MVP v1 proposed.

---

## What's still unproven (carried forward honestly)

- Interview sample is still 4 of the requested 8 minimum, disclosed the same way v1 disclosed it.
- The leading workflow (context/handoff) has 2 of 4 interview mentions — the interview guide's own threshold for a validated pattern is 4. Still a hypothesis.
- No confirmed economic buyer, no price point, no proposed-product pilot commitment in any interview.
- The bottom-up estimate's vertical-share input (10–20%) is a labeled assumption, not a sourced figure — it's the single highest-value thing to replace with real data next.
- All four of v1's interview decision gates were unmet; re-deriving the strategy from the same evidence doesn't change that arithmetic. They're still unmet here.

## Evidence index

This memo doesn't duplicate the underlying research — it cites back to it. See `../research/secondary-research-report.md`, `../research/source-inventory.csv`, `../research/review-evidence.csv`, `../interviews/notes/P01.md`–`P04.md`, and `../research/competitive-teardowns/` for the full evidence behind every claim above. The only new file is `research/bottom-up-market-estimate.md` in this v2 folder.
