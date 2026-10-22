export const fieldwork = [
  {title:"Observe a product promise",prompt:"Pick a product you use. Write the user, situation, intended outcome, and every step needed to deliver it. Observe one failure or recovery path.",check:"Can you distinguish the interface from the full delivered outcome?"},
  {title:"Compare real alternatives",prompt:"Choose one customer job. Compare a product, a direct competitor, and the current manual workaround. Write the switching reason and one strategic exclusion.",check:"Did you compare the actual workaround and state what you would not build?"},
  {title:"Collect honest evidence",prompt:"Talk with one user about a recent real task, or observe your own task if no participant is available. Record what happened, your interpretation, and what remains unknown. Do not invent an interview.",check:"Are observation, interpretation, and uncertainty visibly separate?"},
  {title:"Diagnose before ranking",prompt:"Take one visible product friction. Write two possible causes, one discriminating test, two possible responses, and a reasoned priority including mandatory constraints.",check:"Would new evidence change your ranking?"},
  {title:"Run a task test",prompt:"Ask someone to attempt one product task with consent, or use a public demo yourself. Record expected action, observed behavior, confusion, and recovery. Avoid collecting personal data.",check:"Does the finding describe behavior rather than only preference?"},
  {title:"Write the decision",prompt:"Draft a one-page product brief: audience, problem evidence, chosen option, trade-off, success measure, owner, and next update. Rewrite its summary for a different audience.",check:"Can both audiences tell what action to take?"},
  {title:"Audit a metric",prompt:"Choose one product metric. Specify event, population, denominator, period, exclusions, a guardrail, and one data-quality check. Write what the number cannot tell you.",check:"Could another analyst calculate the same number from your definition?"}
];

export const dayPlan = Array.from({length:28},(_,index) => {
  const week = Math.floor(index/4)+1;
  const slot = index%4;
  return slot===3
    ? {day:index+1,week,kind:"fieldwork",title:fieldwork[week-1].title,prompt:fieldwork[week-1].prompt,check:fieldwork[week-1].check}
    : {day:index+1,week,concept:slot,kind:"chapter"};
});

export const todayKey = (date = new Date()) => [date.getFullYear(),String(date.getMonth()+1).padStart(2,"0"),String(date.getDate()).padStart(2,"0")].join("-");
export const addDays = (dateKey,days) => { const [y,m,d] = dateKey.split("-").map(Number); const date = new Date(y,m-1,d+days); return todayKey(date); };
export const currentDay = (started,now=todayKey()) => {
  if (!started) return 1;
  const [y,m,d] = started.split("-").map(Number);
  const [ny,nm,nd] = now.split("-").map(Number);
  return Math.min(28,Math.max(1,Math.floor((Date.UTC(ny,nm-1,nd)-Date.UTC(y,m-1,d))/86400000)+1));
};
export const nextReview = (score,now=todayKey()) => addDays(now,score<=1?1:score===2?3:7);
export const dueDays = (records,now=todayKey()) => dayPlan.filter(day => records[day.day]?.reviewOn && records[day.day].reviewOn<=now);

export function readPractice() {
  try {
    const data = JSON.parse(localStorage.getItem("pm-masterclass-practice-v1") || "{}");
    return data && typeof data === "object" ? {started:typeof data.started==="string"?data.started:null,records:data.records&&typeof data.records==="object"?data.records:{}} : {started:null,records:{}};
  } catch { return {started:null,records:{}}; }
}
export function writePractice(data) {
  try { localStorage.setItem("pm-masterclass-practice-v1",JSON.stringify(data)); return true; }
  catch { return false; }
}
