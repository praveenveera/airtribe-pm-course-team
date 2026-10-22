// Curated from the seven course decks and fourteen structured class notes.
// Classroom examples are learning scenarios, not independently verified product findings.
export const weeks = [
  {
    id: 1, title: "Product foundations", subtitle: "What makes a product valuable?", color: "teal", icon: "◈",
    promise: "Move from a feature request to the customer job, the business model, and the decision a PM must make.",
    source: "Week 1 deck · Fundamentals notes, parts 1–2", time: "24 min",
    outcomes: ["Separate a product from its interface", "Explain value for user and business", "Frame a request as a problem"],
    further: [{title:"Business models",text:"Ask who pays, what cost scales with use, and whether value can be delivered sustainably."},{title:"Product sense",text:"Turn a feature request into a user, situation, desired progress, and evidence question."},{title:"Cross-functional ownership",text:"Keep user, business, design, engineering, and operations aligned on the decision."}],
    map: ["Customer job", "Useful outcome", "Delivery system", "Business value"],
    concepts: [
      {title:"The product is the outcome", tag:"Mental model", brief:"A screen is only one way to deliver value. Start with what the customer is trying to get done.", deep:"Describe the customer, the situation, the job, the current workaround, and the consequence of failure. Then ask whether the proposed feature is the simplest reliable way to improve that job. A product includes operations, support, pricing, and trust, not only UI.", example:"A rider does not want a booking button. They want to reach the right pickup point and complete the trip with predictable effort.", teardown:"A polished pickup screen can still fail if the driver cannot find the rider. Inspect the whole journey: location choice, landmark clarity, contact, wait, and recovery.", question:"What outcome would you measure before redesigning the pickup button?", answer:"A completed pickup with acceptable wait and low coordination effort."},
      {title:"Create and capture value", tag:"Business", brief:"A viable product helps the customer and has a way for the organization to sustain that help.", deep:"Map who uses, who pays, what cost grows with use, and what creates repeat value. In a marketplace, inspect both sides; a low consumer price may be unsustainable if supply cannot earn enough.", example:"A learning product may improve interview readiness for learners while earning subscription revenue. Completion alone does not show readiness; revenue alone does not show learning.", teardown:"A high-signup course with low lesson completion signals that acquisition and value delivery are diverging. Segment by learner goal before adding more marketing.", question:"Can revenue growth compensate for falling learning success?", answer:"Only temporarily. Check whether the product is still delivering the outcome customers pay for."},
      {title:"PM as decision connector", tag:"Role", brief:"A PM connects customer evidence, business constraints, design, engineering, and delivery choices.", deep:"The role is not to write every specification or decide alone. Make trade-offs explicit, bring in the right expertise early, and keep the reason for a decision visible as the product moves from discovery to launch.", example:"A team requests a chat assistant. First clarify the repeated task, authorized information, failure cost, and success measure before choosing chat.", teardown:"A roadmap full of features but no user outcome hides whether teams agree on the problem. Trace one feature back to evidence, decision, owner, and metric.", question:"What should a PM do when a stakeholder asks for a feature without explaining the need?", answer:"Clarify the user's job, evidence, and desired outcome before comparing solutions."}
    ]
  },
  {
    id: 2, title: "Product strategy", subtitle: "Choose where to win", color: "violet", icon: "◇",
    promise: "Turn market context into a focused choice of customer, value, advantage, and sequence.",
    source: "Week 2 deck · Strategy notes, parts 1–2", time: "27 min",
    outcomes: ["Distinguish strategy from roadmap", "Choose a segment and positioning", "Know when a platform is justified"],
    further: [{title:"Market structure",text:"Use industry and competitor analysis to expose pressure, not to copy a leader's feature list."},{title:"Retention and expansion",text:"Earn expansion with repeated value in the first segment; watch the cost of serving new needs."},{title:"Roadmap confidence",text:"Separate committed work from exploratory bets and name the evidence that would change the sequence."}],
    map: ["Target segment", "Painful job", "Distinct promise", "Defensible system"],
    concepts: [
      {title:"Strategy is a choice", tag:"Direction", brief:"Strategy states which customer and need to serve, how to differ, and what to leave out.", deep:"A useful strategy makes trade-offs observable. Identify the target segment, alternatives, unmet need, product promise, capabilities required, and assumptions that could invalidate the choice. A roadmap sequences investments that express that strategy; it does not substitute for it.", example:"A B2B support tool can begin with one high-volume, regulated workflow instead of promising a general platform to every team.", teardown:"If the homepage says 'for everyone' and the roadmap contains unrelated requests, ask which segment would be disappointed if the product disappeared.", question:"What makes a roadmap item strategic?", answer:"It advances a chosen customer value and competitive position, with a reason to prioritize it over alternatives."},
      {title:"Position against alternatives", tag:"Market", brief:"Customers compare your product with current tools, manual work, and doing nothing.", deep:"Describe the current alternative in the customer's language. Segment by job, buying constraint, and behavior rather than demographics alone. Positioning should explain why the chosen segment would switch and why the promised outcome is credible.", example:"A smaller team may value easy setup and visible results more than an expansive but complex feature list.", teardown:"A feature matrix can look favorable while missing migration effort or procurement friction. Compare the complete decision journey, not just checkmarks.", question:"What is the most important competitor to include in a positioning review?", answer:"The customer's current way of doing the job, including manual work or no purchase."},
      {title:"Earn platform expansion", tag:"Growth", brief:"Reuse becomes valuable when multiple validated workflows share stable needs and controls.", deep:"Prove one wedge, identify repeated capabilities, then standardize only the stable parts. Land-and-expand needs adoption and measurable value in the first use case; otherwise expansion scales uncertainty. A shared platform also creates dependencies and governance cost.", example:"After several teams use a governed knowledge workflow, access checks and audit events may become reusable platform seams.", teardown:"A 'platform first' plan that has no committed first user often hides speculative generality. Ask which workflow pays for the first shared capability.", question:"When should a shared capability move into a platform?", answer:"When multiple real workflows need the same stable contract and centralization reduces cost or risk."}
    ]
  },
  {
    id: 3, title: "Discovery & research", subtitle: "Learn before deciding", color: "blue", icon: "◎",
    promise: "Use interviews, observation, desk research, and market analysis to reduce the right uncertainty.",
    source: "Week 3 deck · Discovery notes, parts 1–2", time: "26 min",
    outcomes: ["Match methods to questions", "Spot weak evidence", "Make personas useful for decisions"],
    further: [{title:"Market sizing",text:"Make population, adoption, price, and period assumptions explicit before treating a market number as a forecast."},{title:"Interview technique",text:"Ask about a recent specific event and workaround rather than hypothetical feature preference."},{title:"Competitive research",text:"Compare the job and switching barriers, including manual work and doing nothing."}],
    map: ["Decision question", "Evidence method", "Observed pattern", "Confidence"],
    concepts: [
      {title:"Research starts with a decision", tag:"Method", brief:"Ask what you need to decide, then choose evidence that can change that decision.", deep:"Interviews reveal context and language; observation reveals behavior; surveys estimate a defined population's responses; desk research maps the market. Sample and recruitment determine what a finding can support. One method rarely answers every question.", example:"To understand missed pickups, watch recent pickup attempts and interview riders and drivers before surveying for prevalence.", teardown:"A survey asking 'Would you use smart pickup?' measures reaction to a proposed solution. Ask about recent journeys and actual coordination failures instead.", question:"Which method best reveals a hidden workaround?", answer:"Observation or a recent-event interview, followed by a broader check if prevalence matters."},
      {title:"Keep an evidence ladder", tag:"Quality", brief:"Separate what was observed, what it suggests, and what is still unknown.", deep:"A vendor claim, one interview, and a measured product event carry different weight. Record source, date, sample, method, limitation, and the decision affected. Do not turn adoption in one context into prevalence of another problem.", example:"Five support interviews can reveal a workflow pain and vocabulary, but cannot establish market-wide frequency.", teardown:"A market deck cites a large AI adoption figure as proof of demand for a specific approval feature. The measures differ; mark the claim as a hypothesis and seek workflow evidence.", question:"What is the safe conclusion from a handful of interviews?", answer:"A pattern worth testing, not a population estimate."},
      {title:"Personas should change choices", tag:"Segmentation", brief:"A useful segment differs in job, constraints, behavior, or decision rights.", deep:"Describe the context of use, desired outcome, barriers, buying role, and relevant product response. Avoid invented biographies. Revisit a persona when research shows it does not help prioritize or design.", example:"An operator, platform administrator, and security reviewer may use the same workflow but need different information and permissions.", teardown:"A persona card containing age and hobbies but no distinctive job does not explain a product decision. Replace decorative traits with observed differences.", question:"When should two users be separate personas?", answer:"When their needs or constraints lead to a different product or go-to-market decision."}
    ]
  },
  {
    id: 4, title: "Framing & priority", subtitle: "Choose the right problem", color: "coral", icon: "⌁",
    promise: "Turn messy signals into a bounded problem, compare solutions, and sequence delivery with evidence.",
    source: "Week 4 deck · Framing notes, parts 1–2", time: "29 min",
    outcomes: ["Write a bounded problem", "Separate root causes from symptoms", "Use scores without surrendering judgment"],
    further: [{title:"Diverge and converge",text:"Explore several causes and solution options, then narrow using evidence and constraints."},{title:"User stories",text:"Describe the user goal and acceptance behavior so teams can discuss delivery without losing intent."},{title:"Roadmap versus backlog",text:"The roadmap communicates outcome bets; the backlog holds the concrete work and sequencing details."}],
    map: ["Signal", "Root cause", "Options", "Prioritized bet"],
    concepts: [
      {title:"Frame the problem precisely", tag:"Framing", brief:"Name the user, situation, unmet need, consequence, and evidence boundary.", deep:"A good problem statement is specific enough to guide research and broad enough to allow several solutions. Jobs to Be Done describes the progress the user seeks. 'How might we' can open exploration after the problem is evidenced, but should not smuggle in a favored feature.", example:"For new food-delivery customers in a city, the first-order journey may fail at address confirmation when delivery expectations are unclear.", teardown:"'Improve checkout by adding AI' is a solution disguised as a problem. Identify which users drop out, where, and what evidence points to friction.", question:"What is missing from 'users need a chatbot'?", answer:"The user, job, observed friction, consequence, and evidence."},
      {title:"Diagnose before solving", tag:"Root cause", brief:"A metric shows a symptom; journey evidence tests competing explanations.", deep:"Trace a funnel or workflow, segment the affected group, inspect behavior, and ask users about recent experiences. Five Whys can structure questioning but can also overstate a single cause; test alternatives and system effects.", example:"A checkout drop may involve payment failure, delivery fees, address uncertainty, or low purchase intent.", teardown:"If every drop is blamed on button color, compare device, payment method, error events, and user intent before changing UI.", question:"Can a funnel identify the root cause?", answer:"No. It locates where progression changes; further evidence is needed to explain why."},
      {title:"Prioritize with constraints", tag:"Decision", brief:"Scores reveal assumptions; they do not override safety, dependencies, or strategy.", deep:"RICE compares reach, impact, confidence, and effort for comparable ideas. Write down the estimates and uncertainty. Apply mandatory controls, sequencing, and capacity after the score. A roadmap records the chosen bets and what evidence would change them.", example:"A low-reach authorization fix may need to ship before a high-reach UI improvement because access correctness is a release condition.", teardown:"A spreadsheet ranks every idea precisely but has no confidence source or dependency column. Review the assumptions before trusting the order.", question:"When may a lower RICE score win?", answer:"When it satisfies a non-negotiable control, unblocks later work, or fits the strategy better."}
    ]
  },
  {
    id: 5, title: "UX & design", subtitle: "Make value usable", color: "amber", icon: "▧",
    promise: "Look beyond polished screens to the full experience, accessibility, interaction, and observed usability.",
    source: "Week 5 deck · UX notes, parts 1–2", time: "28 min",
    outcomes: ["Separate product value, UX, and UI", "Critique a journey with evidence", "Collaborate through prototypes"],
    further: [{title:"Information architecture",text:"Structure content so people can predict where to find the next action."},{title:"Design systems",text:"Reuse components and rules while checking whether behavior fits the task and platform."},{title:"Accessibility",text:"Check keyboard use, readable text, focus, labels, contrast, and recovery as part of the experience."}],
    map: ["User goal", "Find the path", "Take action", "Get feedback"],
    concepts: [
      {title:"UX spans the journey", tag:"Experience", brief:"UI is the visible interface; UX is the experience of accomplishing the job across touchpoints.", deep:"Map entry, understanding, action, feedback, error, and recovery. Information architecture determines where things live; interaction design determines what happens when someone acts. Operations and support can shape the experience as much as visual polish.", example:"A booking flow can look excellent but fail when a late change has no clear recovery path.", teardown:"Follow the user's task across screens and outside the app. Mark what is smooth, confusing, slow, or frustrating, and what evidence supports each judgment.", question:"What does a screen screenshot fail to show?", answer:"The complete journey, behavior after an action, error states, and recovery."},
      {title:"Prototype to test a claim", tag:"Collaboration", brief:"A prototype makes an assumption visible enough for people to evaluate before build.", deep:"Bring design and engineering into problem discovery. Use sketches or interactive flows at the fidelity needed for the question. Test the important path and edge cases; a clickable happy path is not proof that the whole experience works.", example:"A checkout prototype can test whether shoppers understand delivery timing before the team commits to a complex implementation.", teardown:"An AI-generated mockup has a persuasive hero screen but no empty, loading, or error state. List what must be added before usability review.", question:"What should determine prototype fidelity?", answer:"The uncertainty being tested, not how polished the team can make it."},
      {title:"Use heuristics as questions", tag:"Evaluation", brief:"Accessibility and UX laws help reveal possible friction; direct observation establishes what happens.", deep:"Check labels, focus order, contrast, input size, feedback, error recovery, and familiar patterns. A heuristic violation is a hypothesis about user impact, not measured harm. Design systems provide reusable parts but still require fit and accessibility review.", example:"A tiny icon-only action may be hard to discover or operate; test the task and check keyboard and touch access.", teardown:"For one real flow, record the observation, likely consequence, relevant principle, proposed change, and evidence or severity. Do not invent a redesign before understanding the issue.", question:"Can a UX law alone prove a user problem?", answer:"No. It gives a lens for inspection; validate the actual experience and task impact."}
    ]
  },
  {
    id: 6, title: "PM communication", subtitle: "Align people to act", color: "indigo", icon: "✦",
    promise: "Match the message and artifact to the audience, decision, delivery stage, and risk.",
    source: "Week 6 deck · Communication notes, parts 1–2", time: "25 min",
    outcomes: ["Tailor one decision for multiple audiences", "Use PRDs and updates well", "Communicate an incident without guessing"],
    further: [{title:"Progress updates",text:"State current status, completed work, blockers, owner, and the next milestone."},{title:"Launch enablement",text:"Tell affected teams what users will experience, who has access, and how to respond."},{title:"Evidence-based stories",text:"Use situation, task, action, and result without inventing metrics or claiming sole ownership."}],
    map: ["Audience concern", "Evidence", "Decision", "Owner & follow-up"],
    concepts: [
      {title:"Start with the listener", tag:"Influence", brief:"Understand the audience's concern and the action needed before choosing words or channel.", deep:"Leadership needs decision, impact, and trade-off; engineering needs user intent, edge cases, and constraints; support needs what users will experience and how to respond. Keep the facts consistent while changing the level of detail.", example:"A partial launch is a go/no-go decision for leadership, an implementation plan for engineering, and a new support scenario for operations.", teardown:"A long status email lists activities but omits the decision needed. Rewrite the first two lines as status, impact, risk, and ask.", question:"Should the same update be sent unchanged to every audience?", answer:"No. Preserve facts, but tailor detail and next action to the audience."},
      {title:"A PRD is a shared record", tag:"Documentation", brief:"A document reduces ambiguity but does not replace discussion or review.", deep:"Record the problem, target user, goal, scope, requirements, measures, constraints, risks, decisions, and owner at the depth the change requires. A roadmap sets direction; a PRD or ticket bounds a particular change; a prototype lets people inspect a possible experience.", example:"For a payment change, the PRD links user flow and success metric while engineering and operations review failure handling and rollout.", teardown:"'Read the PRD' is not enough when a stakeholder identifies an unclear flow. Explain the intent, resolve the gap, and update the shared record.", question:"What should happen when a requirement changes after review?", answer:"Discuss the trade-off with affected people and record the decision and its impact."},
      {title:"Communicate under pressure", tag:"Launch & incident", brief:"Separate known impact from suspected cause; name mitigation, owner, and next update.", deep:"Launch updates explain audience, rollout share, change, support path, and guardrails. Incident updates explain confirmed impact, current action, owner, and next communication time. Add root cause only when supported. Follow verbal decisions with a written record.", example:"A payment incident update can say which transactions fail, what workaround is active, who is investigating, and when the next update is due.", teardown:"A message says 'fixed soon' but has no affected cohort or owner. Replace reassurance with observable impact, mitigation, and update cadence.", question:"What should an incident update say when the cause is unknown?", answer:"State that it is unknown; report confirmed impact, mitigation, owner, and next update."}
    ]
  },
  {
    id: 7, title: "Analytics & metrics", subtitle: "Measure what matters", color: "green", icon: "↗",
    promise: "Define a customer outcome, connect it to drivers, and investigate funnels and cohorts without inventing causes.",
    source: "Week 7 deck · Analytics notes, parts 1–2", time: "32 min",
    outcomes: ["Define an interpretable metric", "Connect inputs to outcomes", "Read funnels and cohorts carefully"],
    further: [{title:"OKRs",text:"An objective names a direction; a key result measures an outcome; an initiative is the work proposed to move it."},{title:"Event instrumentation",text:"Specify event, properties, identity, and time window before building a report."},{title:"Marketplace and unit economics",text:"Track each side's value, and keep revenue, profit, acquisition cost, and lifetime value distinct."}],
    map: ["Customer job", "Product outcome", "Input measures", "Guardrails"],
    concepts: [
      {title:"Metric names are not definitions", tag:"Definition", brief:"Specify event, unit, population, period, and denominator before interpreting a number.", deep:"A metric should follow a customer or business goal. 'Active users' might mean an app open or a meaningful action; those answer different questions. Include cohort and time window, and distinguish unique people from total events.", example:"Weekly successful trips per new rider captures a different outcome than daily map opens.", teardown:"A dashboard shows 'conversion 42%' with no eligible population, starting event, or conversion window. The chart cannot support a decision until those are explicit.", question:"What must accompany a conversion percentage?", answer:"The numerator, denominator, event definitions, cohort, and time window."},
      {title:"Use a metric ladder", tag:"Causality", brief:"Connect business results to product outcomes and potential input levers, then test the links.", deep:"Input/output describes driver versus intended result; leading/lagging describes timing. A North Star candidate should reflect meaningful value, but it needs guardrails. An observed association between an input and result is not yet a causal effect.", example:"For navigation: reliable trip completion may be an outcome; traffic freshness and reroute latency are potential inputs; ETA error is a quality measure.", teardown:"A team celebrates more route starts while completed trips fall. The activity measure moved but customer success did not.", question:"Does increasing a leading input guarantee the lagging outcome?", answer:"No. Test the proposed relationship and watch guardrails."},
      {title:"Funnels show where, not why", tag:"Analysis", brief:"A funnel identifies the step where eligible users stop progressing; cohorts show whether users return.", deep:"Define event order, identity, conversion window, and step versus overall rate. Retention requires a starting cohort, a qualifying return action, and a period that matches natural use. Segment and investigate behavior before claiming a root cause.", example:"For food delivery, compare discovery, item selection, checkout, payment, and delivered order; then compare repeat ordering by first-order cohort.", teardown:"A checkout drop might reflect payment errors, fees, delivery timing, or low intent. A funnel alone cannot distinguish them.", question:"What is the first next step after finding a large funnel drop?", answer:"Check definitions and data quality, then segment and investigate competing explanations."}
    ]
  }
];

export const sourceBoundary = "This is a learning companion derived from course decks and AI-generated class notes. Company examples and numerical illustrations are teaching material, not independently verified product evidence. Original PDF decks are not hosted here.";

// Each lens turns one deck framework into a short decision exercise.
export const deckLenses = {
  1: {
    title: "Use AI after the product question is clear",
    context: "The Week 1 deck puts product craft before AI speed. Try this before drafting a feature brief.",
    moves: [
      { label: "Name the job", text: "Who is trying to make progress, in what situation?" },
      { label: "Choose the trade-off", text: "What quality, cost, or speed constraint shapes the decision?" },
      { label: "Use AI carefully", text: "Let it generate options; verify its claims against user evidence." }
    ],
    worked: "A pickup assistant is useful only if it reduces real coordination effort for riders and drivers.",
    caution: "A fluent AI answer is not evidence that the proposed problem exists."
  },
  2: {
    title: "Answer a strategy case with a decision",
    context: "The Week 2 rubric asks for judgment under ambiguity. Work from goal to a testable bet.",
    moves: [
      { label: "Goal", text: "Pick the outcome: growth, retention, revenue, quality, or risk." },
      { label: "Segment", text: "Choose the buyer or user with the clearest unmet job." },
      { label: "Trade-off", text: "Say which attractive option you will delay." },
      { label: "Bet", text: "Explain why this path is credible now." },
      { label: "Measure", text: "Name a leading signal, a guardrail, and a learning signal." }
    ],
    worked: "For a support platform, start with one repeatable workflow and buyer rather than promising every team a general AI platform.",
    caution: "A strategy without an explicit exclusion is hard to use when priorities conflict."
  },
  3: {
    title: "Size the reachable problem, not the headline market",
    context: "The Week 3 deck introduces TAM, SAM, and SOM as nested scopes, not three interchangeable revenue forecasts.",
    moves: [
      { label: "TAM", text: "All demand for the job under a stated market definition." },
      { label: "SAM", text: "The part this product can serve with its geography, channel, and model." },
      { label: "SOM", text: "A plausible share after competition, capacity, and adoption limits." }
    ],
    worked: "For a local food business, national category spend is broader than the neighborhoods it can serve; expected orders are narrower again.",
    caution: "State the unit, period, source, and assumptions before multiplying a market figure.",
    diagram: "./diagrams/market-scope.html"
  },
  4: {
    title: "Turn a complaint into a bounded job",
    context: "The Week 4 deck pairs problem framing with Jobs to Be Done: the progress sought in a specific situation.",
    moves: [
      { label: "Situation", text: "When does the problem happen, and for whom?" },
      { label: "Progress", text: "What is the person trying to accomplish?" },
      { label: "Friction", text: "What blocks that progress, and what supports the claim?" }
    ],
    worked: "At a short lunch break, a worker needs a predictable arrival time so they can eat before the next meeting.",
    caution: "Do not write the favored feature into the problem statement."
  },
  5: {
    title: "Run a focused usability teardown",
    context: "The Week 5 deck uses design thinking and usability heuristics to inspect a real task, not to award a screen a style score.",
    moves: [
      { label: "Observe", text: "Watch a user attempt one task; note where they hesitate or recover." },
      { label: "Explain", text: "Use visibility, consistency, or error recovery as a diagnostic lens." },
      { label: "Test", text: "Prototype the smallest change and repeat the task." }
    ],
    worked: "If checkout gives no response after payment, show the transaction state and a safe next action before redesigning the visual style.",
    caution: "A heuristic flags possible friction; observed task impact determines priority."
  },
  6: {
    title: "One decision, three useful messages",
    context: "The Week 6 communication map follows a product from strategy through launch. Tailor the action without changing the facts.",
    moves: [
      { label: "Leadership", text: "State impact, trade-off, decision needed, and timing." },
      { label: "Delivery team", text: "State user intent, boundaries, dependencies, and open questions." },
      { label: "Support", text: "State who is affected, what they will see, and the recovery path." }
    ],
    worked: "A partial release needs a go/no-go decision, an implementation boundary, and a clear response for affected customers.",
    caution: "Do not replace confirmed status with a confident-sounding forecast."
  },
  7: {
    title: "Make a metric interpretable before charting it",
    context: "The Week 7 deck defines a metric by its meaning, value, time grain, and cohort, then connects it to the customer job.",
    moves: [
      { label: "Value action", text: "What user action shows the job was completed?" },
      { label: "Population", text: "Which eligible users count, and who is excluded?" },
      { label: "Window", text: "Over what period must the action happen?" },
      { label: "Guardrail", text: "What quality or cost must not worsen?" }
    ],
    worked: "For personal navigation, weekly successful trips by new riders is clearer than 'active users' if successful travel is the job.",
    caution: "AARRR stages can locate a drop, but the chart cannot establish its cause."
  }
};
