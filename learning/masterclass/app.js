import { weeks, deckLenses, sourceBoundary } from "./curriculum.js";

const app = document.getElementById("app");
let storedProgress = [];
try { storedProgress = JSON.parse(localStorage.getItem("pm-masterclass-completed") || "[]"); } catch { storedProgress = []; }
const saved = new Set(Array.isArray(storedProgress) ? storedProgress : []);
const state = { week: null, concept: 0, search: "", answerShown: false, mapStep: 0, lab: { viewed: 100, cart: 54, checkout: 31, paid: 19 } };

const esc = (value) => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[char]);
const conceptKey = (week, concept) => `${week.id}-${concept}`;
const completed = () => saved.size;
const percent = (count, total) => total ? Math.round(100 * count / total) : 0;

function updateRoute() {
  const match = location.hash.match(/^#week-(\d+)(?:-concept-(\d+))?$/);
  state.week = match ? Math.min(7, Math.max(1, Number(match[1]))) : null;
  state.concept = match ? Math.min(2, Math.max(0, Number(match[2] || 1) - 1)) : 0;
  state.answerShown = false;
  state.mapStep = 0;
  render();
  if (location.hash === "#curriculum") document.getElementById("curriculum")?.scrollIntoView();
  else window.scrollTo({top:0, behavior:"instant"});
}

function header() {
  return `<header class="site-header"><div class="header-inner">
    <a class="brand" href="#home" aria-label="Product Masterclass home"><span class="brand-symbol" aria-hidden="true"><span></span><span></span><span></span></span><span>PRODUCT<span class="brand-accent">/</span>MASTERCLASS</span></a>
    <nav aria-label="Main navigation"><a href="#home" ${state.week ? "" : 'aria-current="page"'}>Explore course</a><a href="#week-7">Metric lab</a></nav>
    <span class="header-progress" aria-label="${completed()} of 21 concepts marked complete"><span class="progress-dot"></span>${completed()} / 21 concepts</span>
  </div></header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="footer-inner"><div><strong>Product / Masterclass</strong><p>Think clearly. Decide deliberately. Learn by doing.</p></div><p>${esc(sourceBoundary)}</p><a href="#home">Back to course ↑</a></div></footer>`;
}

function home() {
  const matches = weeks.filter(w => `${w.title} ${w.subtitle} ${w.promise} ${w.concepts.map(c => `${c.title} ${c.brief} ${c.deep} ${c.tag}`).join(" ")} ${w.further.map(item => `${item.title} ${item.text}`).join(" ")}`.toLowerCase().includes(state.search.toLowerCase()));
  return `${header()}<main id="main">
    <section class="hero"><div class="hero-inner"><div class="hero-copy"><span class="eyebrow"><span class="eyebrow-line"></span> THE COMPLETE LEARNING ATLAS · 7 WEEKS</span><h1>Understand the idea.<br><em>Own the decision.</em></h1><p class="hero-lede">A visual product management masterclass built for the way concepts actually stick: see the model, work through an example, examine a product teardown, then test your own judgment.</p><div class="hero-actions"><a class="button button-primary" href="#week-1">Start with Week 1 <span aria-hidden="true">↗</span></a><a class="button button-quiet" href="#curriculum">Explore all weeks <span aria-hidden="true">↓</span></a></div><div class="hero-stats"><span><strong>07</strong> guided weeks</span><span><strong>21</strong> core concepts</span><span><strong>01</strong> decision at a time</span></div></div><div class="hero-art" aria-hidden="true"><div class="orbit orbit-outer"></div><div class="orbit orbit-inner"></div><div class="orbit-center"><span>THE<br>PM<br>LOOP</span></div><span class="orbit-label label-a">DISCOVER</span><span class="orbit-label label-b">DECIDE</span><span class="orbit-label label-c">DESIGN</span><span class="orbit-label label-d">MEASURE</span><span class="orbit-node node-a"></span><span class="orbit-node node-b"></span><span class="orbit-node node-c"></span><span class="orbit-node node-d"></span></div></div></section>
    <section class="approach-section" aria-label="How each lesson works"><div class="section-kicker">A LIGHT ENTRY. REAL DEPTH.</div><div class="approach-grid"><div><span>01 / SEE</span><h2>A visual first</h2><p>Every week begins with one clear mental model. Select a step to see why it matters.</p></div><div><span>02 / APPLY</span><h2>Examples with edges</h2><p>Move from a simple case to a teardown that exposes trade-offs, failure, and missing evidence.</p></div><div><span>03 / RECALL</span><h2>Test your thinking</h2><p>Answer a short decision question before revealing the explanation. Mark what you can now explain.</p></div></div></section>
    <section class="course-section" id="curriculum"><div class="section-heading"><div><span class="section-kicker">THE CURRICULUM</span><h2>Seven weeks. One connected craft.</h2><p>Start anywhere, or follow the arc from customer value through measurement.</p></div><label class="search-box"><span class="sr-only">Search weeks and concepts</span><svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="m16 16 5 5"></path></svg><input id="course-search" type="search" placeholder="Search concepts…" value="${esc(state.search)}"></label></div><div class="week-grid">${matches.map(weekCard).join("")}</div>${matches.length ? "" : '<p class="empty-state">No match yet. Try “retention”, “research”, or “PRD”.</p>'}</section>
    <section class="closing-banner"><span>YOUR NEXT STEP</span><h2>Pick one concept you need to explain clearly this week.</h2><p>Five minutes with an example beats another pass through a long list of definitions.</p><a class="button button-light" href="#week-1">Open the first lesson ↗</a></section>
  </main>${footer()}`;
}

function weekCard(week) {
  const count = week.concepts.filter((_, index) => saved.has(conceptKey(week,index))).length;
  return `<a class="week-card ${week.color}" href="#week-${week.id}"><div class="card-top"><span class="week-number">WEEK ${String(week.id).padStart(2,"0")}</span><span class="card-arrow" aria-hidden="true">↗</span></div><div class="card-visual" aria-hidden="true"><span class="visual-number">0${week.id}</span><span class="visual-steps">${week.map.map((_, index) => `<i style="--i:${index}"></i>`).join("")}</span></div><div class="card-content"><span class="card-type">${esc(week.subtitle)}</span><h3>${esc(week.title)}</h3><p>${esc(week.promise)}</p></div><div class="card-bottom"><span>${week.concepts.length} concepts · ${esc(week.time)}</span><span>${count ? `${count} / ${week.concepts.length} learned` : "Explore lesson"}</span></div></a>`;
}

function lesson() {
  const week = weeks[state.week-1];
  const concept = week.concepts[state.concept];
  const done = saved.has(conceptKey(week,state.concept));
  return `${header()}<main id="main" class="lesson-main"><div class="lesson-shell"><aside class="course-rail" aria-label="Course weeks"><a class="rail-back" href="#home">← All weeks</a><p class="rail-label">THE LEARNING PATH</p><nav>${weeks.map(w => `<a href="#week-${w.id}" class="rail-week ${week.id === w.id ? "active" : ""}" ${week.id === w.id ? 'aria-current="page"' : ""}><span>${String(w.id).padStart(2,"0")}</span>${esc(w.title)}</a>`).join("")}</nav><div class="rail-note">A concept becomes useful when you can explain the trade-off and apply it to a real decision.</div></aside><div class="lesson-content"><div class="lesson-crumb">WEEK ${String(week.id).padStart(2,"0")} <span>/</span> ${esc(week.title.toUpperCase())}</div><section class="lesson-heading ${week.color}"><span class="lesson-eyebrow">THE PRODUCT MASTERCLASS · ${esc(week.time)}</span><h1>${esc(week.subtitle)}<span class="heading-mark">.</span></h1><p>${esc(week.promise)}</p><div class="outcome-row">${week.outcomes.map(item => `<span>✓ ${esc(item)}</span>`).join("")}</div></section>
    <section class="concept-nav" aria-label="Concepts in this week"><span class="concept-nav-label">CHOOSE A CONCEPT</span><div>${week.concepts.map((item,index) => `<a href="#week-${week.id}-concept-${index+1}" class="concept-chip ${index===state.concept ? "active" : ""}" ${index===state.concept ? 'aria-current="step"' : ""}><span>${String(index+1).padStart(2,"0")}</span>${esc(item.title)}${saved.has(conceptKey(week,index)) ? '<b aria-label="completed">✓</b>' : ""}</a>`).join("")}</div></section>
    <article class="concept-article"><div class="concept-head"><div><span class="section-kicker">CONCEPT ${String(state.concept+1).padStart(2,"0")} / ${esc(concept.tag.toUpperCase())}</span><h2>${esc(concept.title)}</h2><p>${esc(concept.brief)}</p></div><span class="concept-index" aria-hidden="true">0${state.concept+1}</span></div>
    <section class="visual-panel" aria-label="Interactive concept map"><div class="visual-panel-title"><span>THE MODEL</span><span>Select a step to explore</span></div><div class="model-line">${week.map.map((step,index) => `<button type="button" class="model-step ${state.mapStep===index ? "selected" : ""}" data-map="${index}" aria-pressed="${state.mapStep===index}"><span>${String(index+1).padStart(2,"0")}</span><strong>${esc(step)}</strong></button>`).join("")}</div><p class="model-caption"><strong>${esc(week.map[state.mapStep])}.</strong> ${esc(mapDescriptions[week.id][state.mapStep])}</p></section>
    ${deckLens(week)}
    ${week.id===7 ? metricLab() : week.id===4 ? riceLab() : ""}
    <div class="learning-grid"><section class="learning-card example-card"><span class="learning-label">WORKED EXAMPLE</span><h3>See it in context</h3><p>${esc(concept.example)}</p></section><section class="learning-card teardown-card"><span class="learning-label">PRODUCT TEARDOWN</span><h3>Look beneath the surface</h3><p>${esc(concept.teardown)}</p><span class="teardown-foot">Observation → interpretation → evidence to seek</span></section></div>
    <details class="deep-dive"><summary><span><small>GO DEEPER</small><strong>The reasoning behind this concept</strong></span><span class="plus" aria-hidden="true">+</span></summary><div><p>${esc(concept.deep)}</p><p class="source-line">Source orientation: ${esc(week.source)}. ${esc(sourceBoundary)}</p></div></details>
    <section class="practice-panel"><div class="practice-intro"><span class="section-kicker">RECALL & APPLY</span><h3>Can you make the call?</h3><p>${esc(concept.question)}</p></div><div class="practice-action">${state.answerShown ? `<div class="answer-box" tabindex="-1"><span>MODEL ANSWER</span><p>${esc(concept.answer)}</p></div>` : '<button type="button" class="button button-dark" data-action="answer">Reveal the reasoning ↗</button>'}<button type="button" class="mark-button ${done ? "is-done" : ""}" data-action="complete" aria-pressed="${done}">${done ? "✓ Marked as learned" : "Mark as learned"}</button></div></section>
    <section class="week-compass"><div><span class="section-kicker">BEYOND THE THREE CORE CONCEPTS</span><h3>More to explore this week</h3></div><div class="compass-grid">${week.further.map(item => `<div><strong>${esc(item.title)}</strong><p>${esc(item.text)}</p></div>`).join("")}</div><p>Use these as prompts for deeper study in ${esc(week.source.toLowerCase())}. The original decks are not published on this site.</p></section>
    <div class="lesson-next"><span>${esc(week.source)}</span>${state.concept < 2 ? `<a href="#week-${week.id}-concept-${state.concept+2}">Next concept <strong>↗</strong></a>` : week.id < 7 ? `<a href="#week-${week.id+1}">Next week <strong>↗</strong></a>` : '<a href="#home">Return to course <strong>↗</strong></a>'}</div>
    </article></div></div></main>${footer()}`;
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
  document.title = state.week ? `${weeks[state.week-1].title} · Product Masterclass` : "Product Masterclass · Learn the thinking behind the work";
  app.innerHTML = state.week ? lesson() : home();
}

document.addEventListener("click", event => {
  const map = event.target.closest("[data-map]");
  if (map) { state.mapStep = Number(map.dataset.map); render(); document.querySelector(`[data-map="${state.mapStep}"]`)?.focus(); return; }
  const action = event.target.closest("[data-action]");
  if (!action) return;
  if (action.dataset.action === "answer") state.answerShown = true;
  if (action.dataset.action === "complete") {
    const key = conceptKey(weeks[state.week-1],state.concept);
    saved.has(key) ? saved.delete(key) : saved.add(key);
    localStorage.setItem("pm-masterclass-completed",JSON.stringify([...saved]));
  }
  render();
  if (action.dataset.action === "answer") document.querySelector(".answer-box")?.focus();
  if (action.dataset.action === "complete") document.querySelector('[data-action="complete"]')?.focus();
});

document.addEventListener("input", event => {
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
