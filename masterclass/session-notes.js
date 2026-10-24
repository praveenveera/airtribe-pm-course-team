// Session titles and learning outcomes follow the local class-notes index.
// These notes are AI-generated summaries, not verbatim instructor material.
export const sessions = [
  [1, "Fundamentals of Product Management · Part 1", "What a product and PM do; customer value and business value", "product role value business", 1],
  [2, "Fundamentals of Product Management · Part 2", "Problem-first thinking, root causes, and user research", "problem research root cause", 1],
  [3, "Product Strategy · Part 1", "Segments, positioning, advantage, and roadmaps", "strategy segment positioning", 2],
  [4, "Product Strategy · Part 2", "Platform, retention, expansion, and AI-era strategy", "platform retention expansion", 2],
  [5, "Problem Discovery & Research · Part 1", "Discovery, primary and secondary research, market sizing", "discovery research market", 3],
  [6, "Problem Discovery & Research · Part 2", "Methods, personas, and competitive pressure", "research persona competition", 3],
  [7, "Problem Framing & Prioritization · Part 1", "JTBD, root causes, RICE, and funnel diagnosis", "prioritization rice jobs funnel", 4],
  [8, "Problem Framing & Prioritization · Part 2", "Solutions, user stories, roadmaps, and alignment", "solutions stories roadmap", 4],
  [9, "UX & Design Collaboration · Part 1", "Problem framing, prototypes, and usability", "ux prototype usability", 5],
  [10, "UX & Design Collaboration · Part 2", "Design systems, accessibility, and heuristic review", "design accessibility heuristic", 5],
  [11, "Effective PM Communication · Part 1", "Audience, PRDs, updates, and incidents", "communication prd incidents", 6],
  [12, "Effective PM Communication · Part 2", "Partner alignment, evidence, and retention stories", "communication alignment retention", 6],
  [13, "Analytics & Metrics · Part 1", "Define value, build metric ladders, and read funnels", "analytics metrics north star funnel", 7],
  [14, "Analytics & Metrics · Part 2", "OKRs, events, cohorts, and trustworthy analysis", "analytics okr event cohort", 7]
].map(([id, title, outcome, keywords, week]) => ({ id, title, outcome, keywords, week, href: id === 13 ? "#session-13" : `#week-${week}` }));
