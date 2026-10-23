// Original, illustrative teaching cases informed by the seven course weeks.
// Choices describe consequences for discussion; they are not empirical forecasts.

export const caseStages = [
  {week:1,label:"Define the promise",evidence:"A shopper needs ingredients for tonight's meal before cooking begins. A completed app order can still fail if a key item is missing.",decision:"Treat a usable dinner, delivered in time, as the product outcome.",change:"The product boundary expands from ordering screens to stock, picking, delivery, and recovery.",artifact:"Job statement and outcome map",open:"Which failure prevents dinner most often?",source:"Week 1 deck · product and value"},
  {week:2,label:"Choose a first market",evidence:"The fictional team can reliably serve one dense evening delivery zone; it has no proof that the same supply works citywide.",decision:"Start with working households ordering evening meals in that zone.",change:"The promise becomes testable for a specific segment and delivery window.",artifact:"First-segment strategy brief",open:"Will this segment repeat when the experience is reliable?",source:"Week 2 deck · where to play and strategic choices"},
  {week:3,label:"Investigate the failure",evidence:"In an illustrative sample, shoppers report late substitutions. Order events show where changes occur, but do not yet explain why.",decision:"Observe recent affected orders and interview shoppers, pickers, and support before estimating prevalence.",change:"A broad complaint becomes several testable explanations with explicit evidence limits.",artifact:"Research plan and evidence table",open:"Is the main break stock accuracy, substitution consent, or handoff timing?",source:"Week 3 deck · research and evidence"},
  {week:4,label:"Frame and prioritize",evidence:"Observed cases show some key items are replaced after checkout without a clear approval path. The size of the problem is still uncertain.",decision:"Frame the blocked meal outcome, test competing causes, and prioritize a safe consent and recovery path.",change:"The team has a bounded problem and a release condition instead of a generic request for more AI.",artifact:"Problem statement and option comparison",open:"Can the team offer an acceptable replacement before the delivery cutoff?",source:"Week 4 deck · root cause and prioritization"},
  {week:5,label:"Test the experience",evidence:"A clickable flow lets shoppers approve, reject, or set a replacement preference. A no-response path is visible to the picker.",decision:"Run task tests with a realistic missing-item moment and inspect whether people understand the consequence of each action.",change:"The proposed solution is now a complete journey with feedback, error, and recovery states.",artifact:"Journey and usability test notes",open:"Which confusion remains when the shopper has only a few minutes to respond?",source:"Week 5 deck · design and usability"},
  {week:6,label:"Launch with a gate",evidence:"The pilot handles common substitutions, but unusual dietary constraints and delayed responses still need human support.",decision:"Limit the pilot, name owners, communicate known gaps, and hold expansion until task and recovery checks pass.",change:"A prototype becomes a controlled service with support, monitoring, and rollback decisions.",artifact:"Pilot brief and audience updates",open:"What signal would stop or narrow the pilot?",source:"Week 6 deck · communication and launch updates"},
  {week:7,label:"Measure durable value",evidence:"The illustrative pilot shows more replacement approvals. Approval count alone cannot tell whether dinners arrived as intended.",decision:"Measure eligible meal orders fulfilled on time with acceptable items; pair it with refunds, corrections, and cost guardrails.",change:"The team can judge the customer outcome and investigate where the path fails next.",artifact:"Metric contract and weekly review",open:"Does repeat use improve for comparable shoppers without harming quality or unit cost?",source:"Week 7 deck · metrics, funnels, and cohorts"}
];

// Each choice: label, immediate consequence, remaining uncertainty, recommended in this case.
export const simulations = [
  {week:1,title:"Where does the product end?",lead:"A dinner order looks successful in the app, yet the meal cannot be made. Build the product boundary before choosing a feature.",steps:[
    {label:"Name the outcome",prompt:"What promise should the team own?",choices:[
      ["Make ordering take fewer taps","The interface may feel faster, but dinner can still fail after payment.","You have not measured the result the shopper needed.",false],
      ["Deliver usable dinner ingredients before cooking","The promise now includes timeliness and item acceptability.","You still need a practical definition of eligible orders and acceptable substitutions.",true],
      ["Add more product categories","The catalog grows without resolving the current failure.","A wider choice may increase supply and picking complexity.",false]
    ]},
    {label:"Draw the boundary",prompt:"Which parts must work for that promise?",choices:[
      ["App and payment only","The visible purchase flow is covered.","Stock, picking, delivery, and recovery remain outside the team's decision frame.",false],
      ["App, stock, picking, delivery, and recovery","The team can trace a failure across the whole value path.","Ownership across those functions must be agreed, not assumed.",true],
      ["Delivery driver only","The last mile receives attention.","An unavailable key item still breaks the meal before dispatch.",false]
    ]},
    {label:"Choose first proof",prompt:"Which measure best checks the customer promise?",choices:[
      ["Ordering button taps","This measures interaction with one screen.","It says little about whether the meal could be made.",false],
      ["Eligible orders on time with acceptable items","The measure joins timeliness and item quality to the customer job.","Specify eligibility, cutoff, substitution consent, and data capture.",true],
      ["Catalog page views","The team learns how often shoppers browse.","Browsing can rise while fulfilment quality falls.",false]
    ]}
  ],carry:"Write the job, the full delivery path, and one outcome measure before proposing a feature."},
  {week:2,title:"Pick a wedge you can prove",lead:"The fictional service cannot reliably cover an entire city. Choose a segment, a place, and proof of repeatable value.",steps:[
    {label:"Choose a segment",prompt:"Who should the first promise serve?",choices:[
      ["Everyone who buys groceries","The market sounds large.","Different jobs and delivery windows make the first test hard to interpret.",false],
      ["Working households needing evening meals","A repeated situation gives the team a clear job and time constraint.","Confirm the segment is reachable and has enough demand.",true],
      ["Only people who like the app design","Early praise may look encouraging.","Visual preference does not establish a valuable, frequent job.",false]
    ]},
    {label:"Set the scope",prompt:"Where should the first offer operate?",choices:[
      ["Every city immediately","Growth claims expand faster than fulfilment evidence.","Supply and recovery may vary by zone.",false],
      ["One dense zone with dependable supply","The team can observe whether the complete promise works repeatedly.","Success here does not prove the next zone will behave the same way.",true],
      ["Any zone where a signup appears","Interest can be collected quickly.","A signup does not prove that the order can be fulfilled.",false]
    ]},
    {label:"Decide when to expand",prompt:"What proof would justify a second zone?",choices:[
      ["More app downloads","Awareness may be growing.","Downloads do not show fulfilled value or viable economics.",false],
      ["Repeat successful meals with viable contribution","The team checks customer value and the cost of delivering it.","A new zone still needs its own supply and demand validation.",true],
      ["A competitor launches there","The rival may reveal interest.","Its presence does not validate this service's ability to deliver.",false]
    ]}
  ],carry:"Record the first segment, current alternative, promise, channel, and evidence needed for expansion."},
  {week:3,title:"Choose evidence that changes the call",lead:"Late substitutions are reported, but their cause and prevalence are uncertain. Design a research path that can distinguish them.",steps:[
    {label:"State the unknown",prompt:"Which uncertainty should the team investigate first?",choices:[
      ["Whether shoppers prefer purple or orange","The team can collect design opinions.","This does not address the failed meal outcome.",false],
      ["When and why key-item substitutions fail","The question connects observed friction to a decision about the journey.","The team must still avoid assuming one root cause.",true],
      ["How many people use grocery apps worldwide","The team gets a market number.","It is too broad to explain this local service failure.",false]
    ]},
    {label:"Select methods",prompt:"What evidence can distinguish possible causes?",choices:[
      ["Observe affected orders, inspect event times, and interview roles","Behavior and accounts can expose handoff, stock, and consent problems.","Small qualitative samples cannot estimate population prevalence alone.",true],
      ["Ask five enthusiastic shoppers if they like an AI picker","The team hears reactions to a proposed solution.","The sample and question cannot establish the underlying problem.",false],
      ["Copy an industry adoption chart","The team gains context on a broad category.","The chart does not describe this product's users or failure path.",false]
    ]},
    {label:"Write the claim",prompt:"How should the early finding be reported?",choices:[
      ["All evening orders fail because pickers are careless","The statement creates a decisive story.","It overstates prevalence and assigns cause without evidence.",false],
      ["Some observed cases involve late replacements; causes remain open","The report separates observed events from explanation.","A larger, defined sample is needed to estimate frequency.",true],
      ["The market demands an AI substitution engine","The feature sounds strategic.","No observation here tests that solution or demand.",false]
    ]}
  ],carry:"Keep a visible table of observation, interpretation, limitation, and next evidence to seek."},
  {week:4,title:"Trace the cause before choosing the fix",lead:"A key item is replaced after checkout without clear approval. Separate symptom, competing causes, and a release constraint.",steps:[
    {label:"Frame the problem",prompt:"Which statement gives the team a useful problem?",choices:[
      ["We need an AI replacement picker","The team has a solution to build.","The shopper, moment, and blocked progress are missing.",false],
      ["Evening shoppers cannot complete planned meals when key items change without consent","The statement identifies who is blocked and when.","The team still needs frequency and cause evidence.",true],
      ["The checkout color is wrong","A visual defect is easy to discuss.","There is no evidence it caused the substitution failure.",false]
    ]},
    {label:"Test causes",prompt:"What should the team inspect before selecting a fix?",choices:[
      ["Compare stock events, picker actions, consent states, and timing","The team can distinguish inventory, workflow, and communication causes.","Event quality and missing records must be checked.",true],
      ["Assume all pickers ignore instructions","The team has a simple cause.","The assumption may blame people for a broken system.",false],
      ["Launch a redesign and see what happens","The team may change behavior.","Without a baseline, a result cannot identify the original cause.",false]
    ]},
    {label:"Prioritize a response",prompt:"Which option should govern the pilot?",choices:[
      ["Choose the highest visual-polish score","A scoring sheet decides quickly.","It can hide a mandatory consent and recovery condition.",false],
      ["Require consent and a recovery path, then compare discretionary bets","A non-negotiable boundary is separated from scored opportunities.","Validate the path with real tasks and operational owners.",true],
      ["Ship any replacement automatically","The journey keeps moving.","An unacceptable item can still break the dinner promise.",false]
    ]}
  ],carry:"Write a bounded problem, two possible causes, one mandatory condition, and the proof needed before launch."},
  {week:5,title:"Prototype the whole recovery journey",lead:"A replacement flow looks clear in a mockup. Test whether a shopper can actually decide and recover under time pressure.",steps:[
    {label:"Map the states",prompt:"Which experience needs to be represented?",choices:[
      ["Only the happy-path confirmation","The easiest screen is ready for review.","No-response, rejection, and failed-delivery moments remain undefined.",false],
      ["Approve, reject, no response, and recovery","The design covers choices and failure states in the task.","The team must still agree on operational ownership and time limits.",true],
      ["An animated welcome screen","The product feels polished.","It does not help the shopper decide about the missing item.",false]
    ]},
    {label:"Choose the test",prompt:"What should the prototype test ask people to do?",choices:[
      ["Rate how attractive the screen looks","The team hears aesthetic reactions.","That does not show whether the task is understood.",false],
      ["Handle a missing key item before a delivery cutoff","The task exposes comprehension, timing, and recovery gaps.","A prototype result still needs validation in the real service.",true],
      ["Watch a polished demo with no action","The story may persuade viewers.","Observation of a demo is not task performance.",false]
    ]},
    {label:"Set a pass condition",prompt:"What would count as a useful signal?",choices:[
      ["People compliment the colors","The feedback can help visual refinement.","It does not establish task success.",false],
      ["People choose an acceptable option and explain the consequence","The team can observe success and misunderstandings.","Check diverse needs, assistive use, and real timing before release.",true],
      ["The prototype has no visible bugs","The artifact is technically smooth.","A smooth prototype can still teach the wrong behavior.",false]
    ]}
  ],carry:"Bring the observed confusion back to the journey, then revise the flow and test again."},
  {week:6,title:"Turn a pilot into a clear decision",lead:"The substitution pilot works for common cases. It still has unresolved edge cases and needs a communication and launch gate.",steps:[
    {label:"Name the audience",prompt:"How should the update reach different readers?",choices:[
      ["Send the same paragraph to everyone","The team saves writing time.","Support, delivery, and sponsors may miss the action each must take.",false],
      ["Keep one fact base and tailor next actions by audience","Each reader gets the decision, risk, and task relevant to them.","The shared facts and version must stay consistent.",true],
      ["Wait until the pilot is perfect to speak","The team avoids partial information.","Silence leaves owners and affected users uncertain.",false]
    ]},
    {label:"Choose a gate",prompt:"What should control expansion?",choices:[
      ["The calendar date alone","A firm date simplifies planning.","It does not show quality or recovery readiness.",false],
      ["Validated scope, failure threshold, support owner, and rollback trigger","The pilot has inspectable conditions for go or no-go.","Thresholds and owner approval still need explicit agreement.",true],
      ["A rise in feature clicks","Interest becomes visible.","Clicks can rise while meal outcomes worsen.",false]
    ]},
    {label:"Respond to an incident",prompt:"A replacement causes a failed meal. What should the first update say?",choices:[
      ["We know the exact root cause","The message sounds confident.","The claim is unsupported before investigation.",false],
      ["State confirmed impact, mitigation, owner, and next update time","People can act on facts while the cause remains under review.","A later update must close the loop with evidence and recovery.",true],
      ["Say nothing until engineering is finished","The team avoids revising a statement.","Affected people lack a recovery path and update time.",false]
    ]}
  ],carry:"Create a short launch note and three audience-specific next actions from the same confirmed facts."},
  {week:7,title:"Decide what the chart actually means",lead:"Replacement approvals rise in the pilot. Choose a value measure, a guardrail, and the next investigation before declaring success.",steps:[
    {label:"Define value",prompt:"Which measure best represents the shopper's job?",choices:[
      ["Replacement button clicks","The team can see engagement with the new flow.","Clicks do not prove an acceptable meal arrived.",false],
      ["Eligible meal orders fulfilled on time with acceptable items","The event reflects the intended customer result.","Specify eligibility, window, and item-acceptance rules.",true],
      ["Total app opens","The dashboard gains a large number.","Opens mix many intents and can hide failed orders.",false]
    ]},
    {label:"Protect quality",prompt:"What should sit beside the value measure?",choices:[
      ["Nothing; one metric is enough","The dashboard stays simple.","Refunds, late orders, and rising cost can hide behind a higher conversion rate.",false],
      ["Refunds, corrections, delivery time, and contribution cost","The team can see when apparent gains damage trust or economics.","Define each guardrail's owner and response threshold.",true],
      ["Only the count of notifications sent","The team sees system activity.","Notification volume does not establish quality.",false]
    ]},
    {label:"Investigate change",prompt:"The order funnel improves, but refunds rise. What next?",choices:[
      ["Declare success from conversion alone","The team can report a positive chart.","It ignores a worsening customer and business outcome.",false],
      ["Segment comparable orders and inspect refunds, events, and task examples","The team can locate the affected cohort and test competing explanations.","A chart can locate a change; further evidence is needed for cause.",true],
      ["Remove refund data from the review","The dashboard becomes cleaner.","The decision loses a critical quality signal.",false]
    ]}
  ],carry:"Write the metric contract, guardrail owners, and one investigation query for the next weekly review."}
];

export function readSimulationAnswers() {
  try {
    const value = JSON.parse(localStorage.getItem("pm-masterclass-simulations") || "{}");
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  } catch { return {}; }
}

export function writeSimulationAnswers(answers) {
  try { localStorage.setItem("pm-masterclass-simulations",JSON.stringify(answers)); } catch { /* A private browser may block storage. */ }
}
