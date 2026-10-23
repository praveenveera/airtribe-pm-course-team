const stopWords = new Set(["a","an","and","are","at","be","by","can","do","does","for","from","how","i","in","is","it","my","of","off","on","or","our","right","should","the","to","user","users","we","what","when","where","which","who","with","would","you"]);

const relatedGroups = [
  ["drop","dropoff","abandon","funnel","conversion","checkout"],
  ["prioritize","priority","rank","rice","tradeoff","choose"],
  ["interview","research","discovery","survey","observe","evidence"],
  ["metric","kpi","measure","measurement","northstar","indicator"],
  ["retention","repeat","engagement","churn"],
  ["permission","authorization","access","privacy","tenant"],
  ["quality","evaluation","evaluate","test","accuracy","guardrail"],
  ["launch","rollout","release","pilot","rollback"],
  ["stakeholder","communication","update","alignment","prd"],
  ["prototype","usability","ux","design","interaction"],
  ["strategy","positioning","segment","market","wedge"],
  ["value","job","outcome","customer","problem"]
];

const normalize = value => String(value || "").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
const stem = word => word.length > 5 ? word.replace(/(ments|ation|ings|tion|ers|ies|ing|ed|es|s)$/,"" ) : word;
const tokens = value => [...new Set(normalize(value).split(/\s+/).filter(word => word && !stopWords.has(word)).map(stem))];
const related = term => relatedGroups.find(group => group.some(word => stem(word) === term))?.map(stem).filter(word => word !== term) || [];

export function buildSearchIndex(weeks, deckLenses, studios, aiTrack, capstone, chapters = [], courseGuide = {}, glossary = [], companionLessons = {}, topicMeanings = {}, chapterClarity = [], domainExamples = [], conceptVisuals = [], caseStages = [], simulations = []) {
  const entries = [];
  for (const week of weeks) {
    const prefix = `Week ${week.id} · ${week.title}`;
    entries.push({kind:"Week",week:week.id,title:week.title,description:week.promise,body:[week.subtitle,...week.outcomes,...week.map].join(" "),href:`#week-${week.id}`});
    week.concepts.forEach((concept,index) => {
      const chapter = chapters[week.id-1]?.[index];
      const clarity = chapterClarity[week.id-1]?.[index];
      entries.push({kind:"Chapter",week:week.id,title:concept.title,description:concept.brief,body:[concept.tag,concept.deep,concept.example,concept.teardown,concept.question,concept.answer,chapter?.first,chapter?.second,chapter?.case,chapter?.trap,clarity?.meaning,clarity?.pm,...(chapter?.steps || [])].join(" "),href:`#week-${week.id}-concept-${index+1}`,location:prefix});
      const domains = domainExamples[week.id-1]?.[index];
      if (domains) entries.push({kind:"Domain examples",week:week.id,title:`${concept.title} across SaaS, ecommerce, and AI`,description:domains.transfer,body:[domains.saas,domains.commerce,domains.ai].join(" "),href:`#week-${week.id}-concept-${index+1}`,location:prefix});
      const visual = conceptVisuals[week.id-1]?.[index];
      if (visual) entries.push({kind:"Visual explanation",week:week.id,title:visual.title,description:visual.summary,body:[visual.insight,visual.try,...visual.nodes.map(node=>`${node.label} ${node.detail}`)].join(" "),href:`#week-${week.id}-concept-${index+1}`,location:prefix});
    });
    const guide = courseGuide[week.id];
    if (guide) entries.push({kind:"Week guide",week:week.id,title:guide.question,description:guide.sessions.join(" · "),body:guide.topics.join(" "),href:`#week-${week.id}`,location:prefix});
    guide?.topics.forEach((title,index) => entries.push({kind:"Topic meaning",week:week.id,title,description:topicMeanings[week.id]?.[index] || "",body:topicMeanings[week.id]?.[index] || "",href:`#week-${week.id}`,location:prefix}));
    (companionLessons[week.id] || []).forEach(([title,body]) => entries.push({kind:"Companion lesson",week:week.id,title,description:body,body,href:`#week-${week.id}-concept-3`,location:prefix}));
    week.further.forEach(item => entries.push({kind:"Explore",week:week.id,title:item.title,description:item.text,body:week.title,href:`#week-${week.id}`,location:prefix}));
    const lens = deckLenses[week.id];
    if (lens) entries.push({kind:"Deck exercise",week:week.id,title:lens.title,description:lens.context,body:[lens.worked,lens.caution,...lens.moves.map(move => `${move.label} ${move.text}`)].join(" "),href:`#week-${week.id}`,location:prefix});
    const sim = simulations[week.id-1];
    if (sim) entries.push({kind:"Guided simulation",week:week.id,title:sim.title,description:sim.lead,body:[sim.carry,...sim.steps.map(step=>`${step.label} ${step.prompt} ${step.choices.map(choice=>choice.slice(0,3).join(" ")).join(" ")}`)].join(" "),href:`#week-${week.id}-concept-1`,location:prefix});
  }
  caseStages.forEach(stage=>entries.push({kind:"Case journey",week:stage.week,title:`Week ${stage.week}: ${stage.label}`,description:stage.decision,body:[stage.evidence,stage.change,stage.artifact,stage.open].join(" "),href:"#case",location:"Seven-week grocery case"}));
  studios.forEach((studio,index) => entries.push({kind:"Decision case",week:index+1,title:studio.title,description:studio.situation,body:[...studio.evidence,studio.question,...studio.options,studio.reasoning,studio.failure,studio.ai,studio.artifact].join(" "),href:`#week-${index+1}`,location:`Week ${index+1} · Applied decision`}));
  aiTrack.forEach((studio,index) => entries.push({kind:"AI PM studio",week:index+1,title:studio.title,description:studio.premise,body:[studio.test,studio.output,studio.explain,studio.example,studio.trap].join(" "),href:`#ai-track-${index+1}`,location:`AI PM track · Studio ${index+1}`}));
  capstone.stages.forEach(stage => entries.push({kind:"Capstone",week:stage.week,title:stage.label,description:stage.prompt,body:capstone.situation,href:`#capstone-stage-${stage.week}`,location:`Capstone · Stage ${stage.week}`}));
  glossary.forEach(([term,definition]) => entries.push({kind:"Glossary",week:0,title:term,description:definition,body:definition,href:"#glossary",location:"Plain-language reference"}));
  return entries.map(entry => ({...entry,searchTitle:normalize(entry.title),searchDescription:normalize(entry.description),searchBody:normalize(entry.body),titleTokens:tokens(entry.title),descriptionTokens:tokens(entry.description),bodyTokens:tokens(entry.body)}));
}

export function searchCourse(index, query) {
  const phrase = normalize(query);
  const terms = tokens(query);
  if (!terms.length) return [];
  return index.map(entry => {
    let score = 0;
    let direct = 0;
    let contextual = 0;
    for (const term of terms) {
      const title = entry.titleTokens.some(word => word === term || word.startsWith(term) && term.length > 3);
      const description = entry.descriptionTokens.some(word => word === term || word.startsWith(term) && term.length > 3);
      const body = entry.bodyTokens.some(word => word === term || word.startsWith(term) && term.length > 3);
      const alternatives = related(term);
      const relatedTitle = alternatives.some(word => entry.titleTokens.includes(word));
      const relatedDescription = alternatives.some(word => entry.descriptionTokens.includes(word));
      const relatedBody = alternatives.some(word => entry.bodyTokens.includes(word));
      if (title || description || body) {
        score += Math.max(title ? 12 : description ? 6 : 2,relatedTitle ? 5 : relatedDescription ? 3 : relatedBody ? 1 : 0);
        direct++;
      } else if (relatedTitle || relatedDescription || relatedBody) {
        score += relatedTitle ? 5 : relatedDescription ? 3 : 1;
        contextual++;
      }
    }
    if (terms.length > 1 && phrase.length > 3 && entry.searchTitle.includes(phrase)) score += 22;
    else if (terms.length > 1 && phrase.length > 3 && entry.searchDescription.includes(phrase)) score += 9;
    score += (direct + contextual) / terms.length * 3;
    const reason = direct ? (entry.titleTokens.some(word => terms.includes(word)) ? "Title match" : "Keyword match") : "Related idea";
    return {...entry,score,reason};
  }).filter(entry => entry.score >= 3 && (entry.reason !== "Related idea" || entry.score >= 5)).sort((a,b) => b.score-a.score || a.week-b.week || a.title.localeCompare(b.title));
}
