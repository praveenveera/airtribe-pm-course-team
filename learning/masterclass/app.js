import { weeks, deckLenses, sourceBoundary } from "./curriculum.js?v=3";
import { studios, aiTrack, capstone, externalGuides } from "./mastery.js?v=2";
import { buildSearchIndex, searchCourse } from "./search.js?v=3";
import { courseGuide, chapters, glossary, companionLessons } from "./textbook.js?v=2";

const app = document.getElementById("app");
let storedProgress = [];
try { storedProgress = JSON.parse(localStorage.getItem("pm-masterclass-completed") || "[]"); } catch { storedProgress = []; }
const saved = new Set(Array.isArray(storedProgress) ? storedProgress : []);
const state = { week: null, concept: 0, page: "home", search: "", answerShown: false, studioAnswer: false, studioChoice: null, mapStep: 0, lab: { viewed: 100, cart: 54, checkout: 31, paid: 19 } };

const esc = (value) => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[char]);
const conceptKey = (week, concept) => `${week.id}-${concept}`;
const completed = () => saved.size;
const percent = (count, total) => total ? Math.round(100 * count / total) : 0;
const searchIndex = buildSearchIndex(weeks, deckLenses, studios, aiTrack, capstone, chapters, courseGuide, glossary, companionLessons);

function updateRoute() {
  const match = location.hash.match(/^#week-(\d+)(?:-concept-(\d+))?$/);
  const aiMatch = location.hash.match(/^#ai-track(?:-(\d+))?$/);
  const capstoneMatch = location.hash.match(/^#capstone(?:-stage-(\d+))?$/);
  state.page = location.hash === "#glossary" ? "glossary" : aiMatch ? "ai" : capstoneMatch ? "capstone" : match ? "lesson" : "home";
  state.week = match ? Math.min(7, Math.max(1, Number(match[1]))) : null;
  state.concept = match ? Math.min(2, Math.max(0, Number(match[2] || 1) - 1)) : 0;
  state.answerShown = false;
  state.studioAnswer = false;
  state.studioChoice = null;
  state.mapStep = 0;
  render();
  if (location.hash === "#curriculum" || location.hash === "#search") document.getElementById("curriculum")?.scrollIntoView();
  else if (aiMatch?.[1]) document.getElementById(`ai-studio-${aiMatch[1]}`)?.scrollIntoView();
  else if (capstoneMatch?.[1]) document.getElementById(`capstone-stage-${capstoneMatch[1]}`)?.scrollIntoView();
  else window.scrollTo({top:0, behavior:"instant"});
  if (location.hash === "#search") document.getElementById("course-search")?.focus();
}

function header() {
  return `<header class="site-header"><div class="header-inner">
    <a class="brand" href="#home" aria-label="Product Masterclass home"><span class="brand-symbol" aria-hidden="true"><span></span><span></span><span></span></span><span>PRODUCT<span class="brand-accent">/</span>MASTERCLASS</span></a>
    <nav aria-label="Main navigation"><a href="#home" ${state.page === "home" && location.hash !== "#search" ? 'aria-current="page"' : ""}>Curriculum</a><a href="#search" ${location.hash === "#search" ? 'aria-current="page"' : ""}>Search</a><a href="#glossary" ${state.page === "glossary" ? 'aria-current="page"' : ""}>Glossary</a><a href="#ai-track" ${state.page === "ai" ? 'aria-current="page"' : ""}>AI PM track</a><a href="#capstone" ${state.page === "capstone" ? 'aria-current="page"' : ""}>Capstone</a></nav>
    <span class="header-progress" aria-label="${completed()} of 21 concepts marked complete">${completed()} / 21</span>
  </div></header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="footer-inner"><div><strong>Product / Masterclass</strong><p>Think clearly. Decide deliberately. Learn by doing.</p></div><p>${esc(sourceBoundary)}</p><a href="#home">Back to course ↑</a></div></footer>`;
}

function home() {
  const results = searchCourse(searchIndex,state.search);
  const searching = state.search.trim().length > 0;
  return `${header()}<main id="main">
    <section class="hero"><div class="hero-inner"><div class="hero-copy"><span class="eyebrow">A SEVEN-WEEK PRODUCT MASTERCLASS</span><h1>Learn the craft.<br><em>Practice the judgment.</em></h1><p class="hero-lede">Start from zero and learn how products create value. Read 21 guided chapters, follow one product from idea to measurement, then test your thinking in visual labs, decisions, and an AI product track.</p><div class="hero-actions"><a class="button button-primary" href="#week-1-concept-1">Start Chapter 1 <span aria-hidden="true">↗</span></a><a class="button button-quiet" href="#glossary">Open the glossary <span aria-hidden="true">↗</span></a></div><div class="hero-stats"><span><strong>07</strong> weeks</span><span><strong>21</strong> guided chapters</span><span><strong>14</strong> class sessions</span></div></div><div class="hero-art" aria-label="The product learning sequence"><div class="hero-orbit" aria-hidden="true"></div><div class="hero-stamp" aria-hidden="true">THINK<br>MAKE<br>LEARN <span>✳</span></div><div class="hero-art-inner"><span>01 / DISCOVER</span><span>02 / CHOOSE</span><span>03 / DESIGN</span><span>04 / MEASURE</span><strong>Make the reasoning visible.</strong></div><span class="hero-art-note" aria-hidden="true">THE CRAFT OF PRODUCT ↗</span></div></div></section>
    <section class="approach-section" aria-label="How each lesson works"><div class="section-kicker">START FROM ZERO</div><h2 class="start-title">No PM background needed.</h2><p class="start-lede">Follow 21 chapters in order. Each one defines the idea, shows how to use it, walks through the same grocery product, then lets you practice. Two class sessions feed each week. The glossary is always one tap away.</p><div class="approach-grid"><div><span>01 / READ</span><h2>Learn the idea</h2><p>Understand the terms, steps, and trade-offs in plain language.</p></div><div><span>02 / FOLLOW</span><h2>Work the case</h2><p>Watch a product decision develop from Week 1 to Week 7.</p></div><div><span>03 / PRACTICE</span><h2>Test your thinking</h2><p>Use the visual tools, decision cases, and capstone after reading.</p></div></div><a class="start-link" href="#week-1-concept-1">Start Chapter 1 ↗</a></section>
    <section class="feature-strip" aria-label="Advanced learning paths"><a href="#ai-track"><span>PARALLEL TRACK / 07 STUDIOS</span><h2>Become an AI-first PM</h2><p>Practice task selection, evidence boundaries, evaluation, human control, release gates, and operation.</p><strong>Explore the track ↗</strong></a><a href="#capstone"><span>FINAL PROJECT / 07 STAGES</span><h2>Build one complete decision</h2><p>Carry a fictional case from customer outcome through strategy, research, design, launch, and metrics.</p><strong>Open the capstone ↗</strong></a></section>
    <section class="course-section" id="curriculum"><div class="section-heading"><div><span class="section-kicker">${searching ? "EXPLORE THE COURSE" : "THE CURRICULUM"}</span><h2>${searching ? "Find the right lesson." : "Seven weeks. One connected craft."}</h2><p>${searching ? "Search by a term or describe a product question. Results show both direct and related matches." : "Start anywhere, or follow the arc from customer value through measurement."}</p></div></div><div class="search-tools"><label class="search-box"><span class="sr-only">Search the masterclass by keyword or question</span><svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="m16 16 5 5"></path></svg><input id="course-search" type="search" placeholder="Try “where do users drop off?”" value="${esc(state.search)}" autocomplete="off"></label>${searching ? '<button class="search-clear" type="button" data-action="clear-search">Clear</button>' : ""}</div><div class="search-examples" aria-label="Example searches"><span>TRY A QUESTION</span>${["Where do users drop off?","How do I prioritize?","Is AI the right solution?"].map(item => `<button type="button" data-search-example="${esc(item)}">${esc(item)} ↗</button>`).join("")}</div>${searching ? `<div class="search-status" role="status">${results.length} ${results.length === 1 ? "result" : "results"} for “${esc(state.search)}”</div><div class="search-results">${results.slice(0,16).map(searchCard).join("")}</div>${results.length > 16 ? `<p class="search-more">Showing the 16 strongest matches. Add a specific term to narrow the results.</p>` : ""}${results.length ? "" : '<p class="empty-state">No close match yet. Try a shorter phrase or a topic such as “research”, “metrics”, or “AI evaluation”.</p>'}` : `<div class="week-grid">${weeks.map(weekCard).join("")}</div>`}</section>
    <section class="closing-banner"><span>START WITH A REAL DECISION</span><h2>Learn one model. Use it on one case.</h2><p>Depth comes from explaining the trade-off and making the artifact.</p><a class="button button-light" href="#week-1">Open the first lesson ↗</a></section>
  </main>${footer()}`;
}

function searchCard(item) {
  return `<a class="search-result" href="${item.href}"><div class="search-result-meta"><span>${esc(item.kind)} · ${esc(item.location || `Week ${item.week}`)}</span><span>${esc(item.reason)} ↗</span></div><h3>${esc(item.title)}</h3><p>${esc(item.description)}</p></a>`;
}

function weekCard(week) {
  const count = week.concepts.filter((_, index) => saved.has(conceptKey(week,index))).length;
  return `<a class="week-card ${week.color}" href="#week-${week.id}"><div class="card-top"><span class="week-number">WEEK ${String(week.id).padStart(2,"0")}</span><span class="card-arrow" aria-hidden="true">↗</span></div><div class="card-visual" aria-hidden="true"><span class="visual-number">0${week.id}</span><span class="visual-steps">${week.map.map((_, index) => `<i style="--i:${index}"></i>`).join("")}</span></div><div class="card-content"><span class="card-type">${esc(week.subtitle)}</span><h3>${esc(week.title)}</h3><p>${esc(week.promise)}</p></div><div class="card-bottom"><span>${week.concepts.length} concepts · ${esc(week.time)}</span><span>${count ? `${count} / ${week.concepts.length} learned` : "Explore lesson"}</span></div></a>`;
}

function readingChapter(week, index) {
  const chapter = chapters[week.id-1][index];
  const guide = courseGuide[week.id];
  return `<div class="reading-path">
    <section class="week-guide" aria-label="Week orientation"><div><span class="reading-label">WEEK ${String(week.id).padStart(2,"0")} / START HERE</span><h3>${esc(guide.question)}</h3><p>Read the three chapters in order. The class material for this week spans:</p><ul>${guide.sessions.map(item => `<li>${esc(item)}</li>`).join("")}</ul></div><div class="week-coverage"><strong>TOPICS YOU WILL MEET</strong>${guide.topics.map(item => `<span>${esc(item)}</span>`).join("")}</div></section>
    <section class="textbook-chapter" aria-label="Chapter reading"><div class="reading-topline"><span>THE CHAPTER / READ FIRST</span><span>${String((week.id-1)*3+index+1).padStart(2,"0")} OF 21</span></div><h3>Understand the idea</h3><p>${esc(chapter.first)}</p><p>${esc(chapter.second)}</p><h4>Use it, step by step</h4><ol>${chapter.steps.map(step => `<li>${esc(step)}</li>`).join("")}</ol><div class="running-case"><span>THE RUNNING CASE · NEIGHBORHOOD GROCERY</span><p>${esc(chapter.case)}</p></div><div class="chapter-warning"><strong>Common mistake</strong><p>${esc(chapter.trap)}</p></div></section>
    ${index===2 ? `<section class="companion-lessons"><span class="reading-label">FROM BOTH CLASS SESSIONS</span><h3>More ideas you need this week.</h3><div>${companionLessons[week.id].map(([title,body]) => `<article><h4>${esc(title)}</h4><p>${esc(body)}</p></article>`).join("")}</div></section>` : ""}
    <section class="reading-sources" aria-label="Source and further reading"><div><span class="reading-label">SOURCE TRAIL</span><p>Course basis: ${esc(week.source)}. Class notes are AI-generated and may contain errors. External sources below extend the lesson; examples and calculations here are illustrative.</p></div><div class="reading-links">${guide.reading.map(item => `<a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer"><strong>${esc(item.title)} ↗</strong><span>${esc(item.why)}</span></a>`).join("")}</div></section>
  </div>`;
}

function glossaryPage() {
  return `${header()}<main id="main" class="standalone glossary-page"><div class="page-intro"><span class="section-kicker">REFERENCE / PLAIN LANGUAGE</span><h1>The PM<br><em>glossary.</em></h1><p>Read this when a new term appears. Each definition tells you what it means in a product decision.</p></div><div class="glossary-grid">${glossary.map(([term,definition]) => `<article><h2>${esc(term)}</h2><p>${esc(definition)}</p></article>`).join("")}</div><div class="glossary-end"><a class="button button-primary" href="#week-1-concept-1">Start at Chapter 1 ↗</a></div></main>${footer()}`;
}

function lesson() {
  const week = weeks[state.week-1];
  const concept = week.concepts[state.concept];
  const done = saved.has(conceptKey(week,state.concept));
  return `${header()}<main id="main" class="lesson-main"><div class="lesson-shell"><aside class="course-rail" aria-label="Course weeks"><a class="rail-back" href="#home">← All weeks</a><p class="rail-label">THE LEARNING PATH</p><nav>${weeks.map(w => `<a href="#week-${w.id}" class="rail-week ${week.id === w.id ? "active" : ""}" ${week.id === w.id ? 'aria-current="page"' : ""}><span>${String(w.id).padStart(2,"0")}</span>${esc(w.title)}</a>`).join("")}</nav><div class="rail-note">A concept becomes useful when you can explain the trade-off and apply it to a real decision.</div></aside><div class="lesson-content"><div class="lesson-crumb">WEEK ${String(week.id).padStart(2,"0")} <span>/</span> ${esc(week.title.toUpperCase())}</div><section class="lesson-heading ${week.color}"><span class="lesson-eyebrow">THE PRODUCT MASTERCLASS · ${esc(week.time)}</span><h1>${esc(week.subtitle)}<span class="heading-mark">.</span></h1><p>${esc(week.promise)}</p><div class="outcome-row">${week.outcomes.map(item => `<span>✓ ${esc(item)}</span>`).join("")}</div></section>
    <section class="concept-nav" aria-label="Concepts in this week"><span class="concept-nav-label">CHOOSE A CONCEPT</span><div>${week.concepts.map((item,index) => `<a href="#week-${week.id}-concept-${index+1}" class="concept-chip ${index===state.concept ? "active" : ""}" ${index===state.concept ? 'aria-current="step"' : ""}><span>${String(index+1).padStart(2,"0")}</span>${esc(item.title)}${saved.has(conceptKey(week,index)) ? '<b aria-label="completed">✓</b>' : ""}</a>`).join("")}</div></section>
    <article class="concept-article"><div class="concept-head"><div><span class="section-kicker">CONCEPT ${String(state.concept+1).padStart(2,"0")} / ${esc(concept.tag.toUpperCase())}</span><h2>${esc(concept.title)}</h2><p>${esc(concept.brief)}</p></div><span class="concept-index" aria-hidden="true">0${state.concept+1}</span></div>
    ${readingChapter(week,state.concept)}
    <div class="workshop-divider"><span>AFTER THE READING</span><h3>Apply the chapter.</h3><p>Use the model, source exercise, and decision case to test what you just learned.</p></div>
    <section class="visual-panel" aria-label="Interactive concept map"><div class="visual-panel-title"><span>THE MODEL</span><span>Select a step to explore</span></div><div class="model-line">${week.map.map((step,index) => `<button type="button" class="model-step ${state.mapStep===index ? "selected" : ""}" data-map="${index}" aria-pressed="${state.mapStep===index}"><span>${String(index+1).padStart(2,"0")}</span><strong>${esc(step)}</strong></button>`).join("")}</div><p class="model-caption"><strong>${esc(week.map[state.mapStep])}.</strong> ${esc(mapDescriptions[week.id][state.mapStep])}</p></section>
    ${deckLens(week)}
    ${week.id===7 ? metricLab() : week.id===4 ? riceLab() : ""}
    <div class="learning-grid"><section class="learning-card example-card"><span class="learning-label">WORKED EXAMPLE</span><h3>See it in context</h3><p>${esc(concept.example)}</p></section><section class="learning-card teardown-card"><span class="learning-label">PRODUCT TEARDOWN</span><h3>Look beneath the surface</h3><p>${esc(concept.teardown)}</p><span class="teardown-foot">Observation → interpretation → evidence to seek</span></section></div>
    <details class="deep-dive"><summary><span><small>GO DEEPER</small><strong>The reasoning behind this concept</strong></span><span class="plus" aria-hidden="true">+</span></summary><div><p>${esc(concept.deep)}</p><p class="source-line">Source orientation: ${esc(week.source)}. ${esc(sourceBoundary)}</p></div></details>
    <section class="practice-panel"><div class="practice-intro"><span class="section-kicker">RECALL & APPLY</span><h3>Can you make the call?</h3><p>${esc(concept.question)}</p></div><div class="practice-action">${state.answerShown ? `<div class="answer-box" tabindex="-1"><span>MODEL ANSWER</span><p>${esc(concept.answer)}</p></div>` : '<button type="button" class="button button-dark" data-action="answer">Reveal the reasoning ↗</button>'}<button type="button" class="mark-button ${done ? "is-done" : ""}" data-action="complete" aria-pressed="${done}">${done ? "✓ Marked as learned" : "Mark as learned"}</button></div></section>
    ${studio(week.id)}
    <section class="week-compass"><div><span class="section-kicker">BEYOND THE THREE CORE CONCEPTS</span><h3>More to explore this week</h3></div><div class="compass-grid">${week.further.map(item => `<div><strong>${esc(item.title)}</strong><p>${esc(item.text)}</p></div>`).join("")}</div><p>Use these as prompts for deeper study in ${esc(week.source.toLowerCase())}. The original decks are not published on this site.</p></section>
    <div class="lesson-next"><span>${esc(week.source)}</span>${state.concept < 2 ? `<a href="#week-${week.id}-concept-${state.concept+2}">Next concept <strong>↗</strong></a>` : week.id < 7 ? `<a href="#week-${week.id+1}">Next week <strong>↗</strong></a>` : '<a href="#home">Return to course <strong>↗</strong></a>'}</div>
    </article></div></div></main>${footer()}`;
}

function studio(weekId) {
  const item = studios[weekId-1];
  return `<section class="studio-panel" aria-labelledby="studio-title"><div class="studio-header"><span class="section-kicker">WEEK ${String(weekId).padStart(2,"0")} / APPLIED DECISION</span><h3 id="studio-title">${esc(item.title)}</h3><p>${esc(item.situation)}</p></div><div class="studio-evidence"><span>WHAT WE KNOW / ILLUSTRATIVE CASE</span><ul>${item.evidence.map(point => `<li>${esc(point)}</li>`).join("")}</ul></div><div class="studio-choice"><h4>${esc(item.question)}</h4><div role="group" aria-label="Decision options">${item.options.map((option,index) => `<button type="button" class="choice-option ${state.studioChoice===index ? "selected" : ""}" data-choice="${index}" aria-pressed="${state.studioChoice===index}"><span>${String.fromCharCode(65+index)}</span>${esc(option)}</button>`).join("")}</div><button type="button" class="button button-dark" data-action="studio-answer" ${state.studioChoice===null ? "disabled" : ""}>Examine the decision ↗</button></div>${state.studioAnswer ? `<div class="studio-result" tabindex="-1"><span>${state.studioChoice===item.correct ? "STRONG CHOICE" : "RECONSIDER THE TRADE-OFF"}</span><h4>${esc(item.options[item.correct])}</h4><p>${esc(item.reasoning)}</p><div class="studio-points"><p><strong>Failure mode</strong><br>${esc(item.failure)}</p><p><strong>AI product lens</strong><br>${esc(item.ai)}</p></div></div>` : ""}<div class="studio-artifact"><span>MAKE THE ARTIFACT</span><p>${esc(item.artifact)}</p><a href="#capstone">Carry this into the capstone ↗</a></div></section>`;
}

function aiPage() {
  return `${header()}<main id="main" class="standalone"><div class="page-intro"><span class="section-kicker">THE PARALLEL TRACK</span><h1>AI-first PM,<br><em>grounded in product craft.</em></h1><p>Technical fluency matters. Product judgment determines whether a capability solves a real job safely and sustainably. Use these seven studios alongside the seven course weeks.</p></div><div class="ai-list">${aiTrack.map((item,index) => `<section id="ai-studio-${index+1}"><div class="ai-index">${String(index+1).padStart(2,"0")}</div><div><span>${esc(item.source)}</span><h2>${esc(item.title)}</h2><p>${esc(item.premise)}</p><div class="ai-test"><strong>Decision test</strong><p>${esc(item.test)}</p><strong>Make</strong><p>${esc(item.output)}</p></div><details class="ai-deep"><summary>Explore the reasoning <span aria-hidden="true">+</span></summary><p>${esc(item.explain)}</p><div><p><strong>Example</strong><br>${esc(item.example)}</p><p><strong>Watch for</strong><br>${esc(item.trap)}</p></div></details></div><a href="#week-${Math.min(index+1,7)}">Study the week ↗</a></section>`).join("")}</div><section class="resource-panel"><span class="section-kicker">EXTEND YOUR PRACTICE</span><h2>Read beyond the class material</h2><p>These external guides complement the course. They are not source material for the weekly lessons.</p>${externalGuides.map(item => `<a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer"><strong>${esc(item.label)} ↗</strong><span>${esc(item.use)}</span></a>`).join("")}</section></main>${footer()}`;
}

function capstonePage() {
  return `${header()}<main id="main" class="standalone"><div class="page-intro"><span class="section-kicker">THE CAPSTONE / SEVEN STAGES</span><h1>Make a decision<br><em>you can defend.</em></h1><p>${esc(capstone.situation)}</p><p class="page-note">This is a fictional teaching case. Your answers stay in this browser and are not sent to a server.</p></div><div class="capstone-shell"><section class="capstone-stages"><span class="section-kicker">BUILD THE BRIEF</span>${capstone.stages.map(stage => `<div class="capstone-stage" id="capstone-stage-${stage.week}"><div><span>WEEK ${String(stage.week).padStart(2,"0")}</span><h2>${esc(stage.label)}</h2><p>${esc(stage.prompt)}</p><a href="#week-${stage.week}">Study this week ↗</a></div><label><span class="sr-only">Your notes for ${esc(stage.label)}</span><textarea data-capstone="${stage.week}" placeholder="Write your reasoning here…">${esc(readDraft(stage.week))}</textarea></label></div>`).join("")}</section><aside class="rubric-panel"><span class="section-kicker">SELF-REVIEW RUBRIC</span><h2>Test the strength of your decision</h2><ol>${capstone.rubric.map(item => `<li>${esc(item)}</li>`).join("")}</ol><p>Self-review is a prompt for reflection. The site does not grade your answer or verify its evidence.</p><button class="button button-dark" type="button" data-action="export">Download my brief ↗</button><button class="button button-quiet" type="button" data-action="clear-draft">Clear this browser draft</button></aside></div></main>${footer()}`;
}

function readDraft(week) { try { return localStorage.getItem(`pm-capstone-${week}`) || ""; } catch { return ""; } }
function exportDraft() {
  const lines = ["Product Masterclass — Capstone brief", "", capstone.situation, "", ...capstone.stages.flatMap(stage => [`Week ${stage.week}: ${stage.label}`, stage.prompt, readDraft(stage.week), ""])];
  const blob = new Blob([lines.join("\n")], {type:"text/plain;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a"); link.href = url; link.download = "product-masterclass-capstone.txt"; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

const mapDescriptions = {
  1:["Name the progress the user seeks, beyond a screen or button.","Define what successful use changes for the customer.","Account for technology, design, operations, and support.","Explain how the organization can keep delivering the value."],
  2:["Choose whose need the product will serve first.","Find the repeated problem worth solving.","State the outcome that differs from alternatives.","Build capabilities that make the advantage repeatable."],
  3:["Write the decision that the research must inform.","Pick observation, interviews, survey, or desk research to fit that question.","Separate what happened from what you infer.","State how much the evidence can support."],
  4:["Locate the observed friction and affected users.","Investigate competing explanations before committing.","Compare more than one feasible response.","Choose with evidence, dependencies, and non-negotiable constraints."],
  5:["Begin with the user's task, not the screen.","Make information and next steps easy to locate.","Show what happens after an interaction.","Confirm success, explain errors, and enable recovery."],
  6:["Learn what each stakeholder needs to decide or do.","Share facts and uncertainty at the right level.","Name the trade-off and the decision owner.","Record the result and when people will hear next."],
  7:["Define the outcome the user came to achieve.","Measure whether the product delivered that value.","Find possible levers the team can influence.","Watch for unintended cost, quality, or experience changes."]
};

function deckLens(week) {
  const lens = deckLenses[week.id];
  return `<section class="deck-lens" aria-labelledby="deck-lens-title"><div class="deck-lens-head"><div><span class="section-kicker">FROM THE WEEK ${week.id} DECK</span><h3 id="deck-lens-title">${esc(lens.title)}</h3><p>${esc(lens.context)}</p></div><span class="deck-lens-count">${String(lens.moves.length).padStart(2,"0")} MOVES</span></div><ol class="deck-lens-steps">${lens.moves.map((move,index) => `<li><span>${String(index+1).padStart(2,"0")}</span><strong>${esc(move.label)}</strong><p>${esc(move.text)}</p></li>`).join("")}</ol><div class="deck-lens-bottom"><p><strong>Try it:</strong> ${esc(lens.worked)}</p><p><strong>Watch for:</strong> ${esc(lens.caution)}</p></div>${lens.diagram ? `<a class="deck-lens-link" href="${esc(lens.diagram)}" target="_blank" rel="noopener">Open the visual explanation <span aria-hidden="true">↗</span></a>` : ""}</section>`;
}

function metricLab() {
  const values = Object.values(state.lab);
  const labels = ["Viewed", "Added", "Checkout", "Purchased"];
  return `<section class="lab-panel" aria-label="Interactive funnel simulator"><div class="lab-header"><div><span class="section-kicker">INTERACTIVE LAB / WEEK 07</span><h3>Where does the funnel bend?</h3><p>Change each stage. Compare its step conversion with overall conversion. The chart can locate friction; it cannot explain the cause.</p></div><span class="lab-badge">ILLUSTRATIVE DATA</span></div><div class="funnel-lab">${labels.map((label,index) => `<label class="funnel-row"><span class="funnel-name">${index+1}. ${label}</span><input type="range" min="${index===0 ? 20 : 0}" max="${index===0 ? 200 : values[index-1]}" value="${values[index]}" data-funnel="${index}" aria-label="${label} users"><output>${values[index]}</output><span class="funnel-bar"><i style="width:${percent(values[index],values[0])}%"></i></span><small>${index===0 ? "Starting cohort" : `${percent(values[index],values[index-1])}% from prior step`}</small></label>`).join("")}</div><div class="lab-result"><strong>${percent(values[3],values[0])}%</strong><span>overall conversion<br>from view to purchase</span><p>Next question: which eligible users leave, and what additional evidence could distinguish the causes?</p></div></section>`;
}

function riceLab() {
  return `<section class="lab-panel rice-panel" aria-label="Prioritization decision lab"><div class="lab-header"><div><span class="section-kicker">DECISION LAB / WEEK 04</span><h3>Would a score decide this?</h3><p>Compare a broad visual improvement with a narrower access-control fix. The first may score higher on reach; the second may be a release condition.</p></div><span class="lab-badge">ILLUSTRATIVE CASE</span></div><div class="rice-choices"><div><span>OPTION A</span><strong>Polish the landing page</strong><p>High reach · moderate impact · low delivery effort</p></div><div><span>OPTION B</span><strong>Repair an authorization gap</strong><p>Lower reach · mandatory correctness boundary</p></div></div><p class="rice-conclusion"><strong>The lesson:</strong> RICE makes estimates visible. A mandatory access or safety constraint can outrank a larger score.</p></section>`;
}

function render() {
  document.title = state.week ? `${weeks[state.week-1].title} · Product Masterclass` : state.page === "glossary" ? "Glossary · Product Masterclass" : state.page === "ai" ? "AI-first PM track · Product Masterclass" : state.page === "capstone" ? "Capstone · Product Masterclass" : "Product Masterclass · Learn the thinking behind the work";
  app.innerHTML = state.page === "lesson" ? lesson() : state.page === "glossary" ? glossaryPage() : state.page === "ai" ? aiPage() : state.page === "capstone" ? capstonePage() : home();
}

document.addEventListener("click", event => {
  const example = event.target.closest("[data-search-example]");
  if (example) { state.search = example.dataset.searchExample; render(); document.getElementById("course-search")?.focus(); return; }
  const choice = event.target.closest("[data-choice]");
  if (choice) { state.studioChoice = Number(choice.dataset.choice); state.studioAnswer = false; render(); document.querySelector(`[data-choice="${state.studioChoice}"]`)?.focus(); return; }
  const map = event.target.closest("[data-map]");
  if (map) { state.mapStep = Number(map.dataset.map); render(); document.querySelector(`[data-map="${state.mapStep}"]`)?.focus(); return; }
  const action = event.target.closest("[data-action]");
  if (!action) return;
  if (action.dataset.action === "clear-search") { state.search = ""; render(); document.getElementById("course-search")?.focus(); return; }
  if (action.dataset.action === "answer") state.answerShown = true;
  if (action.dataset.action === "studio-answer") state.studioAnswer = true;
  if (action.dataset.action === "export") { exportDraft(); return; }
  if (action.dataset.action === "clear-draft") {
    if (!window.confirm("Clear the seven capstone answers stored in this browser?")) return;
    capstone.stages.forEach(stage => localStorage.removeItem(`pm-capstone-${stage.week}`));
  }
  if (action.dataset.action === "complete") {
    const key = conceptKey(weeks[state.week-1],state.concept);
    saved.has(key) ? saved.delete(key) : saved.add(key);
    localStorage.setItem("pm-masterclass-completed",JSON.stringify([...saved]));
  }
  render();
  if (action.dataset.action === "answer") document.querySelector(".answer-box")?.focus();
  if (action.dataset.action === "studio-answer") document.querySelector(".studio-result")?.focus();
  if (action.dataset.action === "complete") document.querySelector('[data-action="complete"]')?.focus();
});

document.addEventListener("input", event => {
  if (event.target.dataset.capstone) { try { localStorage.setItem(`pm-capstone-${event.target.dataset.capstone}`, event.target.value); } catch { /* Private browsing may block local storage. */ } return; }
  if (event.target.id === "course-search") {
    const selection = event.target.selectionStart;
    state.search = event.target.value;
    render();
    const input = document.getElementById("course-search");
    input.focus(); input.setSelectionRange(selection,selection);
  }
  if (event.target.dataset.funnel !== undefined) {
    const index = Number(event.target.dataset.funnel);
    const keys = ["viewed","cart","checkout","paid"];
    state.lab[keys[index]] = Number(event.target.value);
    for (let i=index+1;i<keys.length;i++) state.lab[keys[i]] = Math.min(state.lab[keys[i]],state.lab[keys[i-1]]);
    const values = Object.values(state.lab);
    document.querySelectorAll("[data-funnel]").forEach((input,i) => {
      input.max = i === 0 ? 200 : values[i-1];
      if (i !== index) input.value = values[i];
      input.closest(".funnel-row").querySelector("output").textContent = values[i];
      input.closest(".funnel-row").querySelector(".funnel-bar i").style.width = `${percent(values[i],values[0])}%`;
      input.closest(".funnel-row").querySelector("small").textContent = i === 0 ? "Starting cohort" : `${percent(values[i],values[i-1])}% from prior step`;
    });
    document.querySelector(".lab-result strong").textContent = `${percent(values[3],values[0])}%`;
  }
});

window.addEventListener("hashchange", updateRoute);
updateRoute();
