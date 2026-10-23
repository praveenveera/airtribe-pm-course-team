import { weeks, deckLenses, sourceBoundary } from "./curriculum.js?v=3";
import { studios, aiTrack, capstone, externalGuides } from "./mastery.js?v=2";
import { buildSearchIndex, searchCourse } from "./search.js?v=7";
import { courseGuide, chapters, glossary, companionLessons, topicMeanings, chapterClarity } from "./textbook.js?v=3";
import { domainExamples, productSources } from "./domain-examples.js?v=1";
import { dayPlan, readPractice, writePractice, todayKey, currentDay, nextReview, dueDays } from "./daily.js?v=1";
import { conceptVisuals } from "./concept-visuals.js?v=1";
import { caseStages, simulations, readSimulationAnswers, writeSimulationAnswers } from "./simulations.js?v=1";

const app = document.getElementById("app");
let storedProgress = [];
try { storedProgress = JSON.parse(localStorage.getItem("pm-masterclass-completed") || "[]"); } catch { storedProgress = []; }
const saved = new Set(Array.isArray(storedProgress) ? storedProgress : []);
const practice = readPractice();
const simAnswers = readSimulationAnswers();
const state = { week: null, concept: 0, page: "home", day: 1, caseStage: 1, simStep: 0, search: "", answerShown: false, dailyAnswerShown: false, studioAnswer: false, studioChoice: null, mapStep: 0, lab: { viewed: 100, cart: 54, checkout: 31, paid: 19 } };

const esc = (value) => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[char]);
const conceptKey = (week, concept) => `${week.id}-${concept}`;
const completed = () => saved.size;
const percent = (count, total) => total ? Math.round(100 * count / total) : 0;
const searchIndex = buildSearchIndex(weeks, deckLenses, studios, aiTrack, capstone, chapters, courseGuide, glossary, companionLessons, topicMeanings, chapterClarity, domainExamples, conceptVisuals, caseStages, simulations);

function updateRoute() {
  const match = location.hash.match(/^#week-(\d+)(?:-concept-(\d+))?$/);
  const aiMatch = location.hash.match(/^#ai-track(?:-(\d+))?$/);
  const capstoneMatch = location.hash.match(/^#capstone(?:-stage-(\d+))?$/);
  const dailyMatch = location.hash.match(/^#daily(?:-(\d+))?$/);
  state.page = location.hash === "#glossary" ? "glossary" : location.hash === "#case" ? "case" : dailyMatch ? "daily" : aiMatch ? "ai" : capstoneMatch ? "capstone" : match ? "lesson" : "home";
  state.day = dailyMatch?.[1] ? Math.min(28,Math.max(1,Number(dailyMatch[1]))) : currentDay(practice.started);
  state.week = match ? Math.min(7, Math.max(1, Number(match[1]))) : null;
  state.concept = match ? Math.min(2, Math.max(0, Number(match[2] || 1) - 1)) : 0;
  state.caseStage = state.week || 1;
  if (state.week) {
    const answers = Array.isArray(simAnswers[state.week]) ? simAnswers[state.week] : [];
    const next = [0,1,2].find(index => !Number.isInteger(answers[index]) || answers[index] < 0 || answers[index] > 2);
    state.simStep = next ?? 2;
  }
  state.answerShown = false;
  state.dailyAnswerShown = false;
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
    <nav aria-label="Main navigation"><a href="#home" ${state.page === "home" && location.hash !== "#search" ? 'aria-current="page"' : ""}>Curriculum</a><a href="#case" ${state.page === "case" ? 'aria-current="page"' : ""}>Case journey</a><a href="#daily" ${state.page === "daily" ? 'aria-current="page"' : ""}>Daily practice</a><a href="#search" ${location.hash === "#search" ? 'aria-current="page"' : ""}>Search</a><a href="#glossary" ${state.page === "glossary" ? 'aria-current="page"' : ""}>Glossary</a><a href="#ai-track" ${state.page === "ai" ? 'aria-current="page"' : ""}>AI PM track</a><a href="#capstone" ${state.page === "capstone" ? 'aria-current="page"' : ""}>Capstone</a></nav>
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
    <section class="case-invite"><div><span class="section-kicker">ONE PRODUCT / SEVEN CHANGING DECISIONS</span><h2>Follow the case as evidence arrives.</h2><p>See a grocery service move from customer job to market choice, research, design, pilot, and metrics. Each week changes what the team can responsibly claim.</p></div><a class="button button-dark" href="#case">Explore the case journey ↗</a></section>
    <section class="daily-invite"><div><span class="section-kicker">28 DAYS / ONE DAILY DECISION</span><h2>Read. Recall. Decide. Review.</h2><p>Practice the craft for 40 minutes a day: a chapter, an answer written before the model, honest self-review, and weekly fieldwork. Due concepts return for spaced recall.</p></div><a class="button button-primary" href="#daily">Open today's practice ↗</a></section>
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
  const clarity = chapterClarity[week.id-1][index];
  return `<div class="reading-path">
    ${week.id===1 ? `<section class="zero-primer" aria-label="Product management basics"><span class="reading-label">BEFORE WE BEGIN / THREE DEFINITIONS</span><div><article><h3>What is a product?</h3><p>A repeatable way to help a group achieve a useful outcome. The app, delivery, support, and recovery can all be part of it.</p></article><article><h3>What is a product manager?</h3><p>The person who helps a team decide which customer problem matters, what outcome to seek, what to try, and how to learn whether it worked.</p></article><article><h3>What does a PM do?</h3><p>Talk with users, examine evidence, align business and technical constraints, choose trade-offs with the team, and track the result after launch.</p></article></div><p class="zero-primer-example"><strong>Example:</strong> For grocery delivery, the PM asks whether shoppers need more item choice or a reliable dinner delivery, then helps the team test the stronger problem.</p></section>` : ""}
    <section class="week-guide" aria-label="Week orientation"><div><span class="reading-label">WEEK ${String(week.id).padStart(2,"0")} / START HERE</span><h3>${esc(guide.question)}</h3><p>Read the three chapters in order. The class material for this week spans:</p><ul>${guide.sessions.map(item => `<li>${esc(item)}</li>`).join("")}</ul></div><div class="week-coverage"><strong>WHAT EACH TOPIC MEANS</strong>${guide.topics.map((item,topicIndex) => `<div class="topic-meaning"><b>${esc(item)}</b><p>${esc(topicMeanings[week.id][topicIndex])}</p></div>`).join("")}</div></section>
    <section class="textbook-chapter" aria-label="Chapter reading"><div class="reading-topline"><span>THE CHAPTER / READ FIRST</span><span>${String((week.id-1)*3+index+1).padStart(2,"0")} OF 21</span></div><div class="chapter-clarity"><div><span>WHAT IT MEANS</span><p>${esc(clarity.meaning)}</p></div><div><span>WHAT IT MEANS FOR A PM</span><p>${esc(clarity.pm)}</p></div></div><h3>Understand the idea</h3><p>${esc(chapter.first)}</p><p>${esc(chapter.second)}</p>${conceptVisual(week.id,index)}<h4>Use it, step by step</h4><ol>${chapter.steps.map(step => `<li>${esc(step)}</li>`).join("")}</ol><div class="running-case"><span>THE RUNNING CASE · NEIGHBORHOOD GROCERY</span><p>${esc(chapter.case)}</p></div><div class="chapter-warning"><strong>Common mistake</strong><p>${esc(chapter.trap)}</p></div></section>
    ${domainGallery(week.id,index)}
    ${index===2 ? `<section class="companion-lessons"><span class="reading-label">FROM BOTH CLASS SESSIONS</span><h3>More ideas you need this week.</h3><div>${companionLessons[week.id].map(([title,body]) => `<article><h4>${esc(title)}</h4><p>${esc(body)}</p></article>`).join("")}</div></section>` : ""}
    <section class="reading-sources" aria-label="Source and further reading"><div><span class="reading-label">SOURCE TRAIL</span><p>Course basis: ${esc(week.source)}. Class notes are AI-generated and may contain errors. External sources below extend the lesson; examples and calculations here are illustrative.</p></div><div class="reading-links">${guide.reading.map(item => `<a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer"><strong>${esc(item.title)} ↗</strong><span>${esc(item.why)}</span></a>`).join("")}</div></section>
  </div>`;
}

function conceptVisual(weekId,index) {
  const visual = conceptVisuals[weekId-1][index];
  return `<figure class="concept-visual visual-${esc(visual.kind)}" aria-labelledby="visual-title-${weekId}-${index+1}"><div class="concept-visual-head"><span class="reading-label">SEE THE CONCEPT / ${String(weekId).padStart(2,"0")}.${index+1}</span><h4 id="visual-title-${weekId}-${index+1}">${esc(visual.title)}</h4><p>${esc(visual.summary)}</p></div><div class="visual-board"><ol class="visual-nodes">${visual.nodes.map((node,nodeIndex)=>`<li${visual.kind==="funnel"?` style="--bar:${[100,54,31,19][nodeIndex]}%"`:""}><span class="visual-node-index">${String(nodeIndex+1).padStart(2,"0")}</span><strong>${esc(node.label)}</strong><span class="visual-node-detail">${esc(node.detail)}</span></li>`).join("")}</ol></div><figcaption><div><strong>READ THE VISUAL</strong><p>${esc(visual.insight)}</p></div><div><strong>TRY IT</strong><p>${esc(visual.try)}</p></div><small>Original diagram inspired by ${esc(visual.source)}. The example is illustrative.</small></figcaption></figure>`;
}

function domainGallery(weekId,index) {
  const example = domainExamples[weekId-1][index];
  const labels = {saas:"SaaS / team workflows",commerce:"Ecommerce / checkout",ai:"AI product / answers"};
  return `<section class="domain-gallery" aria-label="Examples across product domains"><div class="domain-heading"><span class="reading-label">ONE CONCEPT / THREE DOMAINS</span><h3>See the same idea in different products.</h3><p>These illustrative PM decisions use public product documentation and AI evaluation guidance. They do not describe the companies' internal decisions or results.</p></div><div class="domain-cards">${Object.entries(productSources).map(([key,source]) => `<article><span>${esc(labels[key])}</span><p>${esc(example[key])}</p><a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">Check the public reference: ${esc(source.name)} ↗</a></article>`).join("")}</div><div class="domain-transfer"><strong>Transfer the idea</strong><p>${esc(example.transfer)}</p></div></section>`;
}

function caseJourney() {
  const stage = caseStages[state.caseStage-1];
  return `<section class="case-journey" aria-label="Seven-week product case journey"><div class="case-journey-head"><span class="section-kicker">THE EVOLVING CASE / NEIGHBORHOOD GROCERY</span><h3>One product. A changing decision.</h3><p>This is a fictional teaching case. Select a week to see what became known, what the team decided, and what stayed uncertain.</p></div><div class="case-track" role="group" aria-label="Case stages">${caseStages.map(item=>`<button type="button" data-case-stage="${item.week}" aria-pressed="${item.week===stage.week}" class="${item.week===stage.week?"active":""}"><span>${String(item.week).padStart(2,"0")}</span><strong>${esc(item.label)}</strong></button>`).join("")}</div><div class="case-stage" aria-live="polite"><div class="case-stage-top"><span>WEEK ${String(stage.week).padStart(2,"0")} / ${esc(weeks[stage.week-1].title.toUpperCase())}</span><h4>${esc(stage.label)}</h4></div><div class="case-stage-grid"><div><span>NEW EVIDENCE</span><p>${esc(stage.evidence)}</p></div><div><span>THE DECISION</span><p>${esc(stage.decision)}</p></div><div><span>WHAT CHANGES</span><p>${esc(stage.change)}</p></div><div><span>STILL OPEN</span><p>${esc(stage.open)}</p></div></div><div class="case-stage-foot"><p><strong>Artifact:</strong> ${esc(stage.artifact)}</p><small>Illustrative synthesis · ${esc(stage.source)}</small><a href="#week-${stage.week}-concept-1">Study Week ${stage.week} ↗</a></div></div></section>`;
}

function casePage() {
  return `${header()}<main id="main" class="standalone case-page"><div class="page-intro"><span class="section-kicker">THE CONNECTED STORY</span><h1>Watch the product<br><em>decision evolve.</em></h1><p>Follow one fictional grocery service from a customer's dinner problem to a measured pilot. At each stage, a PM changes the decision as the evidence changes.</p><p class="page-note">The cases and numbers are illustrative. The source decks inform the teaching sequence; the original PDFs are not hosted here.</p></div>${caseJourney()}<section class="case-page-next"><h2>Now make the call yourself.</h2><p>Every week has a three-step decision simulation. Your choices reveal consequences and remaining uncertainty, then build a decision trace.</p><a class="button button-primary" href="#week-1-concept-1">Start Week 1 ↗</a></section></main>${footer()}`;
}

function simulationPanel(weekId) {
  const sim = simulations[weekId-1];
  const answers = Array.isArray(simAnswers[weekId]) ? simAnswers[weekId] : [];
  const stepIndex = state.simStep;
  const step = sim.steps[stepIndex];
  const selected = Number.isInteger(answers[stepIndex]) && answers[stepIndex] >= 0 && answers[stepIndex] < step.choices.length ? answers[stepIndex] : null;
  const choice = selected === null ? null : step.choices[selected];
  const finished = sim.steps.every((item,index) => Number.isInteger(answers[index]) && answers[index] >= 0 && answers[index] < item.choices.length);
  return `<section class="simulation-panel" aria-label="Week ${weekId} guided decision simulation"><div class="simulation-head"><span class="section-kicker">GUIDED SIMULATION / WEEK ${String(weekId).padStart(2,"0")}</span><h3>${esc(sim.title)}</h3><p>${esc(sim.lead)}</p><small>Illustrative scenario. Choices show plausible consequences, not predicted product results.</small></div><div class="simulation-steps" role="group" aria-label="Decision steps">${sim.steps.map((item,index)=>{const unlocked=index===0||Number.isInteger(answers[index-1]);return `<button type="button" data-sim-step="${index}" ${unlocked?"":"disabled"} aria-pressed="${stepIndex===index}" class="${stepIndex===index?"active":""}"><span>${String(index+1).padStart(2,"0")}</span><strong>${esc(item.label)}</strong><small>${Number.isInteger(answers[index])?"Decided":unlocked?"Choose":"Complete prior step"}</small></button>`}).join("")}</div><div class="simulation-work"><div class="simulation-question"><span>DECISION ${stepIndex+1} OF 3</span><h4>${esc(step.prompt)}</h4><p>Select a route. The result will show what it helps and what remains uncertain.</p></div><div class="simulation-options" role="group" aria-label="Choices for decision ${stepIndex+1}">${step.choices.map((item,index)=>`<button type="button" data-sim-choice="${index}" aria-pressed="${selected===index}" class="${selected===index?"selected":""}"><span>${String.fromCharCode(65+index)}</span><strong>${esc(item[0])}</strong></button>`).join("")}</div>${choice?`<div class="sim-feedback" tabindex="-1" aria-live="polite"><span>${choice[3]?"A STRONGER ROUTE FOR THIS CASE":"WHAT THIS ROUTE CHANGES"}</span><p>${esc(choice[1])}</p><p><strong>Still to check:</strong> ${esc(choice[2])}</p>${choice[3]?"":`<p><strong>Compare:</strong> ${esc(step.choices.find(item=>item[3])[0])} is better supported by the scenario evidence.</p>`}</div>`:""}<div class="simulation-controls">${choice&&stepIndex<2?`<button type="button" class="button button-dark" data-action="sim-next">Continue to decision ${stepIndex+2} →</button>`:""}${choice&&stepIndex===2?`<span>Decision trace complete. You can revise any step above.</span>`:""}</div></div><div class="simulation-trace"><div><span>YOUR DECISION TRACE</span><p>Each choice changes the path; a completed path is practice, not a grade.</p></div><ol>${sim.steps.map((item,index)=>`<li><span>${String(index+1).padStart(2,"0")} / ${esc(item.label)}</span><strong>${Number.isInteger(answers[index])?esc(item.choices[answers[index]]?.[0]||"Choose a route"):"Choose a route"}</strong></li>`).join("")}</ol>${finished?`<p class="simulation-carry"><strong>Carry into your PM work:</strong> ${esc(sim.carry)}</p>`:""}</div></section>`;
}

function glossaryPage() {
  return `${header()}<main id="main" class="standalone glossary-page"><div class="page-intro"><span class="section-kicker">REFERENCE / PLAIN LANGUAGE</span><h1>The PM<br><em>glossary.</em></h1><p>Read this when a new term appears. Each definition tells you what it means in a product decision.</p></div><div class="glossary-grid">${glossary.map(([term,definition]) => `<article><h2>${esc(term)}</h2><p>${esc(definition)}</p></article>`).join("")}</div><div class="glossary-end"><a class="button button-primary" href="#week-1-concept-1">Start at Chapter 1 ↗</a></div></main>${footer()}`;
}

function dailyPage() {
  const today = todayKey();
  const assigned = currentDay(practice.started,today);
  const day = dayPlan[state.day-1];
  const record = practice.records[day.day] || {};
  const concept = day.kind === "chapter" ? weeks[day.week-1].concepts[day.concept] : null;
  const title = concept?.title || day.title;
  const prompt = concept?.question || day.prompt;
  const due = dueDays(practice.records,today);
  const practiced = Object.values(practice.records).filter(item => item?.score!==undefined).length;
  return `${header()}<main id="main" class="standalone daily-page"><div class="page-intro"><span class="section-kicker">THE DAILY PM GYM / 28 DAY PATH</span><h1>Build judgment<br><em>one decision at a time.</em></h1><p>Spend about 40 minutes: read for 10, recall and decide for 15, compare reasoning for 10, and record one next step for 5. Every fourth day applies the week's ideas to an observed product.</p><p class="page-note">This is self-study. Scores are your own judgment, not a test result. Drafts and dates stay in this browser; export them if you want a backup.</p></div>
    <div class="daily-stats"><div><strong>${practiced}<small>/ 28</small></strong><span>days practiced</span></div><div><strong>${due.length}</strong><span>due for recall</span></div><div><strong>${practice.started ? String(assigned).padStart(2,"0") : "01"}</strong><span>${practice.started ? "current path day" : "first path day"}</span></div></div>
    ${practice.started ? "" : `<div class="daily-start"><div><h2>Start when you're ready.</h2><p>Starting sets Day 1 to today's date on this device. You can explore any day before starting.</p></div><button type="button" class="button button-primary" data-action="start-practice">Start my 28 days ↗</button></div>`}
    <div class="daily-shell"><aside class="daily-rail"><span class="section-kicker">THE 28 DAY PATH</span><div class="daily-day-grid">${dayPlan.map(item => `<a href="#daily-${item.day}" class="${item.day===day.day?"active":""} ${practice.records[item.day]?.score!==undefined?"practiced":""}" ${item.day===day.day?'aria-current="page"':""} aria-label="Day ${item.day}, week ${item.week}, ${item.kind==='fieldwork'?'fieldwork':'chapter'}">${String(item.day).padStart(2,"0")}</a>`).join("")}</div><p>Three concept days, then one fieldwork day per week. Open any day to study at your pace.</p>${due.length ? `<div class="due-list"><strong>RECALL DUE</strong>${due.map(item => `<a href="#daily-${item.day}">Day ${item.day}: ${esc(item.kind==="fieldwork"?item.title:weeks[item.week-1].concepts[item.concept].title)} ↗</a>`).join("")}</div>` : ""}<button type="button" class="button button-quiet" data-action="export-practice">Export practice journal ↗</button></aside>
    <section class="daily-work"><div class="daily-work-head"><span>DAY ${String(day.day).padStart(2,"0")} / WEEK ${day.week} / ${day.kind==="fieldwork"?"FIELDWORK":"CONCEPT"}</span><h2>${esc(title)}</h2><p>${day.kind==="fieldwork"?"Apply this week's ideas to an observed product. Label assumptions honestly.":"Read the chapter, then answer from memory before revealing the worked reasoning."}</p>${concept?`<a href="#week-${day.week}-concept-${day.concept+1}">Read the full chapter and domain examples ↗</a>`:`<a href="#week-${day.week}">Review this week's lessons ↗</a>`}</div><div class="daily-question"><strong>YOUR DECISION PROMPT</strong><p>${esc(prompt)}</p></div><label class="daily-writing"><span>Your reasoning and evidence</span><textarea data-practice-draft="${day.day}" placeholder="Write your call, why, a trade-off, and what you would check next…">${esc(record.draft||"")}</textarea></label><button type="button" class="button button-dark" data-action="reveal-daily" ${record.draft?.trim()?"":"disabled"}>${day.kind==="fieldwork"?"Open the fieldwork check":"Compare with worked reasoning"} ↗</button>
    ${state.dailyAnswerShown ? `<div class="daily-model" tabindex="-1"><span>${day.kind==="fieldwork"?"FIELDWORK CHECK":"WORKED REASONING"}</span><p>${esc(concept?.answer||day.check)}</p><p><strong>Review your own answer:</strong> Did you identify the user and outcome, use evidence honestly, weigh a trade-off, and name a next test?</p><div class="daily-score" role="group" aria-label="Self-review score"><span>How strong was your reasoning?</span>${[[0,"0 · Revisit"],[1,"1 · Partial"],[2,"2 · Defensible"],[3,"3 · Strong"]].map(([value,label])=>`<button type="button" data-practice-score="${value}" aria-pressed="${record.score===value}">${label}</button>`).join("")}</div>${record.reviewOn?`<p class="review-date">Next recall: ${esc(record.reviewOn)}. A low score returns tomorrow; a stronger answer returns in three or seven days.</p>`:""}</div>` : ""}
    ${record.score!==undefined&&!state.dailyAnswerShown?`<p class="saved-review">Last self-review: ${record.score}/3 · recall due ${esc(record.reviewOn||"soon")}. Rewrite your answer to practice again.</p>`:""}<div class="daily-next">${day.day>1?`<a href="#daily-${day.day-1}">← Previous day</a>`:"<span></span>"}${day.day<28?`<a href="#daily-${day.day+1}">Next day →</a>`:`<a href="#capstone">Open the capstone →</a>`}</div></section></div></main>${footer()}`;
}

function exportPractice() {
  const lines = ["Product Masterclass — Practice journal",`Started: ${practice.started||"not started"}`,"",...dayPlan.flatMap(day => { const record=practice.records[day.day]; return record ? [`Day ${day.day} · Week ${day.week} · ${day.kind}`,`Last practiced: ${record.updatedAt||""}`,`Self-review: ${record.score===undefined?"not scored":`${record.score}/3`}`,`Next recall: ${record.reviewOn||""}`,record.draft||"",""] : []; })];
  const url = URL.createObjectURL(new Blob([lines.join("\n")],{type:"text/plain;charset=utf-8"}));
  const link=document.createElement("a"); link.href=url; link.download="product-masterclass-practice-journal.txt"; link.click();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}

function lesson() {
  const week = weeks[state.week-1];
  const concept = week.concepts[state.concept];
  const done = saved.has(conceptKey(week,state.concept));
  return `${header()}<main id="main" class="lesson-main"><div class="lesson-shell"><aside class="course-rail" aria-label="Course weeks"><a class="rail-back" href="#home">← All weeks</a><p class="rail-label">THE LEARNING PATH</p><nav>${weeks.map(w => `<a href="#week-${w.id}" class="rail-week ${week.id === w.id ? "active" : ""}" ${week.id === w.id ? 'aria-current="page"' : ""}><span>${String(w.id).padStart(2,"0")}</span>${esc(w.title)}</a>`).join("")}</nav><div class="rail-note">A concept becomes useful when you can explain the trade-off and apply it to a real decision.</div></aside><div class="lesson-content"><div class="lesson-crumb">WEEK ${String(week.id).padStart(2,"0")} <span>/</span> ${esc(week.title.toUpperCase())}</div><section class="lesson-heading ${week.color}"><span class="lesson-eyebrow">THE PRODUCT MASTERCLASS · ${esc(week.time)}</span><h1>${esc(week.subtitle)}<span class="heading-mark">.</span></h1><p>${esc(week.promise)}</p><div class="outcome-row">${week.outcomes.map(item => `<span>✓ ${esc(item)}</span>`).join("")}</div></section>
    <section class="concept-nav" aria-label="Concepts in this week"><span class="concept-nav-label">CHOOSE A CONCEPT</span><div>${week.concepts.map((item,index) => `<a href="#week-${week.id}-concept-${index+1}" class="concept-chip ${index===state.concept ? "active" : ""}" ${index===state.concept ? 'aria-current="step"' : ""}><span>${String(index+1).padStart(2,"0")}</span>${esc(item.title)}${saved.has(conceptKey(week,index)) ? '<b aria-label="completed">✓</b>' : ""}</a>`).join("")}</div></section>
    <article class="concept-article"><div class="concept-head"><div><span class="section-kicker">CONCEPT ${String(state.concept+1).padStart(2,"0")} / ${esc(concept.tag.toUpperCase())}</span><h2>${esc(concept.title)}</h2><p>${esc(concept.brief)}</p></div><span class="concept-index" aria-hidden="true">0${state.concept+1}</span></div>
    ${readingChapter(week,state.concept)}
    ${caseJourney()}
    <div class="workshop-divider"><span>AFTER THE READING</span><h3>Apply the chapter.</h3><p>Use the model, source exercise, and decision case to test what you just learned.</p></div>
    ${simulationPanel(week.id)}
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
  document.title = state.week ? `${weeks[state.week-1].title} · Product Masterclass` : state.page === "daily" ? "Daily practice · Product Masterclass" : state.page === "glossary" ? "Glossary · Product Masterclass" : state.page === "case" ? "Case journey · Product Masterclass" : state.page === "ai" ? "AI-first PM track · Product Masterclass" : state.page === "capstone" ? "Capstone · Product Masterclass" : "Product Masterclass · Learn the thinking behind the work";
  app.innerHTML = state.page === "lesson" ? lesson() : state.page === "daily" ? dailyPage() : state.page === "glossary" ? glossaryPage() : state.page === "case" ? casePage() : state.page === "ai" ? aiPage() : state.page === "capstone" ? capstonePage() : home();
}

document.addEventListener("click", event => {
  const caseButton = event.target.closest("[data-case-stage]");
  if (caseButton) {
    state.caseStage=Number(caseButton.dataset.caseStage);
    document.querySelector(".case-journey").outerHTML=caseJourney();
    document.querySelector(`[data-case-stage="${state.caseStage}"]`)?.focus();
    return;
  }
  const simStep = event.target.closest("[data-sim-step]");
  if (simStep) {
    state.simStep=Number(simStep.dataset.simStep);
    document.querySelector(".simulation-panel").outerHTML=simulationPanel(state.week);
    document.querySelector(`[data-sim-step="${state.simStep}"]`)?.focus();
    return;
  }
  const simChoice = event.target.closest("[data-sim-choice]");
  if (simChoice) {
    const answers=Array.isArray(simAnswers[state.week])?simAnswers[state.week]:[];
    answers[state.simStep]=Number(simChoice.dataset.simChoice);
    answers.length=state.simStep+1;
    simAnswers[state.week]=answers;
    writeSimulationAnswers(simAnswers);
    document.querySelector(".simulation-panel").outerHTML=simulationPanel(state.week);
    document.querySelector(".sim-feedback")?.focus();
    return;
  }
  const score = event.target.closest("[data-practice-score]");
  if (score) {
    const record = practice.records[state.day] || {};
    record.score=Number(score.dataset.practiceScore);
    record.updatedAt=todayKey();
    record.reviewOn=nextReview(record.score);
    practice.records[state.day]=record;
    writePractice(practice);
    render();
    document.querySelector(`[data-practice-score="${record.score}"]`)?.focus();
    return;
  }
  const example = event.target.closest("[data-search-example]");
  if (example) { state.search = example.dataset.searchExample; render(); document.getElementById("course-search")?.focus(); return; }
  const choice = event.target.closest("[data-choice]");
  if (choice) { state.studioChoice = Number(choice.dataset.choice); state.studioAnswer = false; render(); document.querySelector(`[data-choice="${state.studioChoice}"]`)?.focus(); return; }
  const map = event.target.closest("[data-map]");
  if (map) { state.mapStep = Number(map.dataset.map); render(); document.querySelector(`[data-map="${state.mapStep}"]`)?.focus(); return; }
  const action = event.target.closest("[data-action]");
  if (!action) return;
  if (action.dataset.action === "sim-next") { state.simStep=Math.min(2,state.simStep+1); document.querySelector(".simulation-panel").outerHTML=simulationPanel(state.week); document.querySelector(`[data-sim-step="${state.simStep}"]`)?.focus(); return; }
  if (action.dataset.action === "start-practice") { practice.started=todayKey(); writePractice(practice); render(); return; }
  if (action.dataset.action === "export-practice") { exportPractice(); return; }
  if (action.dataset.action === "reveal-daily") { if (!(practice.records[state.day]?.draft||"").trim()) return; state.dailyAnswerShown=true; render(); document.querySelector(".daily-model")?.focus(); return; }
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
  if (event.target.dataset.practiceDraft) {
    const day=Number(event.target.dataset.practiceDraft);
    const record=practice.records[day]||{};
    record.draft=event.target.value;
    practice.records[day]=record;
    writePractice(practice);
    const reveal=document.querySelector('[data-action="reveal-daily"]');
    if (reveal) reveal.disabled=!record.draft.trim();
    return;
  }
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
