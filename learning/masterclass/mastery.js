// Original teaching material, paraphrased from the seven weekly decks and fourteen class notes.
// Cases and numbers below are illustrative; they are not claims about a real product.
export const studios = [
  {
    week: 1, title: "Decide whether the request is the problem", situation: "A support team asks for an AI assistant because agents spend too long finding policy answers. A stakeholder points to a competitor's chatbot as proof that the team needs one too.",
    evidence: ["Agents report switching between five sources during complex cases.", "A small observation session finds that some delays come from conflicting policy versions.", "There is no reliable measure of answer quality or case resolution time yet."],
    question: "What would you do before committing to an assistant?", options: ["Build the chatbot and measure adoption", "Map the agent job, policy ownership, and failure cost first", "Redesign the search box immediately"], correct: 1,
    reasoning: "The job is to resolve a case correctly and quickly. A chatbot is one possible interface. First learn which delays are retrieval, policy ambiguity, access, or workflow problems. A baseline should include resolution quality and time, not only assistant usage.",
    failure: "If conflicting policies remain, fluent answers can make the problem less visible while increasing the cost of a wrong answer.",
    artifact: "Write a one-sentence user outcome, one business constraint, two alternative solutions, and one baseline measure.",
    ai: "An AI feature is justified by improved task outcomes under an acceptable error rate, not by the presence of a model."
  },
  {
    week: 2, title: "Choose a wedge before building a platform", situation: "A team wants an enterprise knowledge platform for every department. One regulated support group has a repeated approval workflow, but other teams have only expressed broad interest.",
    evidence: ["The support group can name a frequent task and a decision owner.", "Other departments describe different document types and access rules.", "A common retrieval service might help later, but the shared contract is not yet clear."],
    question: "Which strategy has the strongest learning path?", options: ["Build a universal platform first", "Prove the bounded support workflow and reuse stable capabilities later", "Promise every department a pilot at once"], correct: 1,
    reasoning: "A focused segment and job make the promise testable. The first workflow should prove value, access correctness, and operating cost. Expand only after the repeated needs are visible. A roadmap then sequences the strategy; it does not replace it.",
    failure: "A generic platform can absorb time in abstraction while no user gets a complete, dependable result.",
    artifact: "State the target segment, current alternative, differentiated promise, required capability, and explicit non-goal.",
    ai: "Differentiate the workflow and trust model, not the underlying model name. Compare model, rules, and manual options against the same job."
  },
  {
    week: 3, title: "Choose research that can change a decision", situation: "A team has five enthusiastic interviews and a large industry AI adoption estimate. It wants to forecast demand for an approval assistant across an entire market.",
    evidence: ["Five interviews reveal useful workflow language and possible pain.", "The industry estimate measures broad AI adoption, not this approval problem.", "There is no defined eligible population, willingness to pay, or switching evidence."],
    question: "What conclusion can the team defend today?", options: ["Most of the market needs the assistant", "The idea has a pattern worth testing in a defined segment", "The five interviewees prove the product-market fit"], correct: 1,
    reasoning: "Qualitative interviews can uncover mechanisms and vocabulary. They cannot estimate population prevalence without a sampling design. Define the decision, recruit affected roles, observe recent cases, and size TAM, SAM, and SOM with explicit assumptions.",
    failure: "Multiplying a broad market figure by a guessed share turns unrelated adoption into a precise-looking revenue forecast.",
    artifact: "Create an evidence table with observation, interpretation, source, limitation, and next validation step.",
    ai: "For AI discovery, ask where a human currently checks an answer, what source is authoritative, and what a wrong answer would cost."
  },
  {
    week: 4, title: "Prioritize a mandatory boundary", situation: "A visual refresh scores highest in a RICE sheet. A lower-reach access-control defect could expose another customer's content in a draft assistant response.",
    evidence: ["The visual refresh reaches more users and has low effort.", "The access defect has a smaller estimated reach but violates a required boundary.", "The team has not yet validated the remediation in a real authorization path."],
    question: "Which item belongs first in the release decision?", options: ["The higher RICE score", "The access-control repair and verification", "Both at the same time without a release gate"], correct: 1,
    reasoning: "RICE compares discretionary bets. A required access boundary is a constraint on whether release is acceptable. Record the root cause, alternative fixes, test seam, owner, and rollback path before returning to scored opportunities.",
    failure: "A single ranking number can hide legal, safety, dependency, and trust constraints if the decision frame is wrong.",
    artifact: "Write the bounded problem, two possible causes, one non-negotiable constraint, and the acceptance evidence.",
    ai: "For AI tools, authorization must be checked at the source and at use time. A plausible answer is not proof that the user was allowed to see its source."
  },
  {
    week: 5, title: "Design for uncertain answers", situation: "A prototype assistant presents one confident answer and a citation. During a task test, users assume the citation proves that the answer is current and approved.",
    evidence: ["The citation links to a document, but its version and effective date are not visible.", "The prototype shows no low-confidence or missing-source state.", "Users have no clear path to correct or escalate an answer."],
    question: "What should the next prototype test?", options: ["A more expressive animation", "Source currency, uncertainty, and recovery in the actual task", "A longer welcome message"], correct: 1,
    reasoning: "The UX must help users calibrate trust. Test the full path: ask, inspect source, decide, correct, and recover. A citation helps only if the source is relevant, authorized, and current for the user's task.",
    failure: "Polished confidence can encourage automation bias: people accept a fluent response without checking whether it applies.",
    artifact: "Sketch the happy path, no-answer state, incorrect-answer report, and human escalation. Describe what each state tells the user.",
    ai: "Human control should be visible where uncertainty or consequence is high. Feedback should improve the workflow without pretending every vote is ground truth."
  },
  {
    week: 6, title: "Communicate a partial launch", situation: "A pilot is useful on common questions, but it still fails some edge cases. Leadership wants a launch date, support needs a response plan, and engineering needs a clear release gate.",
    evidence: ["The pilot has a bounded set of validated tasks.", "Edge-case failures remain and have named owners.", "A broader launch has not passed its quality and access checks."],
    question: "Which update best aligns the group?", options: ["Announce the feature as ready for everyone", "State the validated scope, known gaps, gate, owner, and next update", "Wait until all uncertainty disappears before communicating"], correct: 1,
    reasoning: "The facts stay the same, while each audience gets the decision it needs. Leadership needs impact and trade-off; delivery needs acceptance conditions; support needs who is affected and how to recover. Record the decision and timing.",
    failure: "A confident date without a gate can turn an unresolved quality issue into a customer promise.",
    artifact: "Draft a five-line go/no-go note: status, scope, evidence, open risk, decision owner and next update.",
    ai: "Include model or prompt changes, evaluation coverage, monitoring, and rollback conditions in launch communication."
  },
  {
    week: 7, title: "Measure value without losing quality", situation: "Assistant usage rises after a prominent entry point is added. A dashboard celebrates adoption, but case resolution has not improved and human corrections are increasing.",
    evidence: ["More agents open the assistant each week.", "Correctly resolved cases per eligible agent are flat.", "Correction rate rose; the sample is still small and segmented analysis is missing."],
    question: "What should the team investigate next?", options: ["Declare success because usage rose", "Segment by task and trace answer quality, correction, and resolution", "Remove all metrics except daily active users"], correct: 1,
    reasoning: "Usage is a behavior, not the user outcome. Define an eligible cohort, value event, time window, and guardrails. Trace from user action through source and model output to the final case decision. Compare cohorts and inspect failure examples before inferring cause.",
    failure: "A funnel can show where the journey changes, but the chart alone cannot explain whether model quality, workflow fit, or user intent caused it.",
    artifact: "Define a North Star candidate, two leading indicators, three guardrails, a cohort, and one investigation query.",
    ai: "Evaluate task completion and grounded correctness together with safety, latency, cost, and human override. Re-evaluate after each meaningful change."
  }
];

export const aiTrack = [
  {title:"Choose the task before the model", premise:"Map the user's job and compare AI, rules, search, and a human workflow.", test:"What result must improve, and why would a probabilistic system help?", output:"Task and option brief", source:"Weeks 1–2"},
  {title:"Define the evidence boundary", premise:"Specify the sources, freshness, permissions, and unknowns a system may use.", test:"Can every important claim be traced to current, authorized evidence?", output:"Source and access map", source:"Weeks 2–3"},
  {title:"Design the evaluation set", premise:"Use representative and hard cases, expected behavior, and a review rubric.", test:"Would a plausible but incorrect answer fail this test?", output:"Evaluation plan", source:"Weeks 3–4"},
  {title:"Design human control", premise:"Make uncertainty, correction, escalation, and recovery part of the product flow.", test:"What happens when the system cannot safely answer?", output:"Recovery flow", source:"Weeks 4–5"},
  {title:"Set the release gate", premise:"Bound the pilot, define minimum quality, access, latency, cost, and rollback conditions.", test:"Who can stop the release, and on what evidence?", output:"Go/no-go record", source:"Weeks 5–6"},
  {title:"Measure real task success", premise:"Connect product events to a completed user job and quality guardrails.", test:"Could usage rise while the user outcome gets worse?", output:"Metric tree", source:"Weeks 6–7"},
  {title:"Operate and learn", premise:"Review failures, drift, feedback, model changes, and operating cost after launch.", test:"What triggers investigation, retraining, or rollback?", output:"Operating review", source:"Week 7"}
];

export const capstone = {
  title:"The evidence-to-launch brief",
  situation:"A fictional B2B support organization wants to reduce time spent locating current policy guidance without exposing another team's documents or hiding uncertainty.",
  stages:[
    {week:1,label:"Outcome",prompt:"Who has the job, in what situation, and what counts as a successful case?"},
    {week:2,label:"Strategy",prompt:"Which first segment and workflow will you serve, and what will you leave out?"},
    {week:3,label:"Research",prompt:"What is observed, inferred, and unknown? Which method would change the decision?"},
    {week:4,label:"Problem and priority",prompt:"Write the bounded problem, compare two options, and name release constraints."},
    {week:5,label:"Experience",prompt:"Sketch the answer, source inspection, no-answer, correction, and escalation states."},
    {week:6,label:"Communication",prompt:"Write a launch gate and a stakeholder update that names facts and open risks."},
    {week:7,label:"Measurement",prompt:"Define task success, eligible cohort, quality guardrails, and a review cadence."}
  ],
  rubric:["The user job is specific and grounded in evidence.","The chosen solution is compared with simpler alternatives.","Sources, authorization, and failure cost are explicit.","Evaluation covers common and difficult cases with human review.","Metrics include quality, safety, cost, and a real user outcome.","Launch has an owner, gate, monitoring plan, and rollback path."]
};

export const externalGuides = [
  {label:"People + AI Guidebook",url:"https://pair.withgoogle.com/guidebook-v2/",use:"Human-centered AI interaction patterns and worksheets."},
  {label:"NIST Generative AI Profile",url:"https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence",use:"A risk management lens for generative AI products."},
  {label:"Evaluation best practices",url:"https://developers.openai.com/api/docs/guides/evaluation-best-practices",use:"How to structure repeatable tests for variable AI behavior."}
];
