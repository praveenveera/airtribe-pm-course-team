import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const projectRoot = "/Users/praveenveera/Documents/work-offline/product/airtribe/projects/uber-find-my-ride";
const workspaceDir = path.join(projectRoot, "v3");
const outputDir = path.join(projectRoot, "v3/submission-ready/final");
const finalPath = path.join(outputDir, "Find_My_Ride_Final_Deck_v19.pptx");
const sourceDeck = path.join(projectRoot, "v3/submission/Find_My_Ride_v3_Recording_Deck.pptx");
const appStory = path.join(projectRoot, "v3/submission-ready/evidence/02-Survey-Method/Screenshots/03-open-story-question.png");
const appLocation = path.join(projectRoot, "v3/submission-ready/evidence/02-Survey-Method/Screenshots/04-location-question.png");
const appRecovery = path.join(projectRoot, "v3/submission-ready/evidence/02-Survey-Method/Screenshots/05-recovery-question.png");
const skillDir = "/Users/praveenveera/.codex/plugins/cache/openai-primary-runtime/presentations/26.909.12148/skills/presentations";
const runtimePython = "/Users/praveenveera/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3";
const { makeNativeBulletParagraphs, finalizePresentation } = await import(
  pathToFileURL(path.join(skillDir, "container_tools/artifact_tool_utils.mjs")).href,
);

await fs.mkdir(outputDir, { recursive: true });
const stagingDir = path.join(workspaceDir, ".codex-finalizer");
await fs.mkdir(stagingDir, { recursive: true });

const W = 1280;
const H = 720;
const FONT = "Calibri";
const NAVY = "#1B2B45";
const NAVY_2 = "#2D4672";
const ORANGE = "#F47A22";
const TEAL = "#1BB5C8";
const TEXT = "#233248";
const MUTED = "#687489";
const BG = "#F3F5F8";
const WHITE = "#FFFFFF";
const PALE_BLUE = "#E2F4F6";
const PALE_ORANGE = "#FBE7D8";
const PALE_GRAY = "#E8ECF1";
const LIVE_URL = "https://praveenveera.github.io/uber-pickup-survey/";
const scriptPath = path.join(outputDir, "VIDEO_SCRIPT_FINAL.md");

const presentation = Presentation.create({ slideSize: { width: W, height: H } });

let slideNo = 0;
const noteSources = new Map();
function newSlide() {
  slideNo += 1;
  return presentation.slides.add();
}

function addRect(slide, x, y, w, h, fill, lineFill = "none", lineWidth = 0, radius = 0) {
  return slide.shapes.add({
    geometry: radius ? "roundRect" : "rect",
    position: { left: x, top: y, width: w, height: h },
    fill,
    line: { style: "solid", fill: lineFill, width: lineWidth },
    ...(radius ? { borderRadius: radius } : {}),
  });
}

function addText(slide, text, x, y, w, h, opts = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    position: { left: x, top: y, width: w, height: h },
    fill: "none",
    line: { fill: "none", width: 0 },
  });
  shape.text = text;
  shape.text.style = {
    typeface: FONT,
    fontSize: opts.fontSize ?? 24,
    bold: opts.bold ?? false,
    italic: opts.italic ?? false,
    color: opts.color ?? TEXT,
    alignment: opts.align ?? "left",
    verticalAlignment: opts.valign ?? "top",
    autoFit: opts.autoFit ?? "shrinkText",
    wrap: "square",
    insets: opts.insets ?? { top: 4, right: 6, bottom: 4, left: 6 },
    lineSpacing: opts.lineSpacing,
  };
  return shape;
}

function addBulletList(slide, items, x, y, w, h, opts = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    position: { left: x, top: y, width: w, height: h },
    fill: "none",
    line: { fill: "none", width: 0 },
  });
  shape.text = makeNativeBulletParagraphs(items, {
    marginLeftPoints: opts.marginLeftPoints ?? 18,
    hangingPoints: opts.hangingPoints ?? 9,
    spaceAfterPoints: opts.spaceAfterPoints ?? 7,
  });
  shape.text.style = {
    typeface: FONT,
    fontSize: opts.fontSize ?? 22,
    color: opts.color ?? TEXT,
    autoFit: "shrinkText",
    wrap: "square",
    insets: { top: 4, right: 4, bottom: 4, left: 4 },
  };
  return shape;
}

function addHeader(slide, section, title, subtitle = "") {
  slide.background.fill = BG;
  addText(slide, section.toUpperCase(), 54, 26, 1170, 26, { fontSize: 13, bold: true, color: ORANGE });
  addText(slide, title, 54, 60, 1170, subtitle ? 52 : 62, { fontSize: 34, bold: true, color: NAVY });
  if (subtitle) addText(slide, subtitle, 54, 111, 1140, 40, { fontSize: 18, color: MUTED });
}

function addFooter(slide, appendix = false) {
  addText(slide, appendix ? "Find My Ride · Appendix" : "Find My Ride", 54, 684, 300, 20, { fontSize: 10, color: MUTED });
  addText(slide, String(slideNo), 1194, 684, 32, 20, { fontSize: 10, color: MUTED, align: "right" });
}

function addKpi(slide, x, y, w, value, label, accent = NAVY_2) {
  addRect(slide, x, y, w, 118, accent, "none", 0, 8);
  addText(slide, value, x + 16, y + 14, w - 32, 48, { fontSize: 33, bold: true, color: WHITE });
  addText(slide, label, x + 16, y + 68, w - 32, 36, { fontSize: 16, color: WHITE });
}

function addPanel(slide, x, y, w, h, title, body, opts = {}) {
  addRect(slide, x, y, w, h, opts.fill ?? WHITE, opts.line ?? PALE_GRAY, 1, 6);
  addText(slide, title, x + 16, y + 12, w - 32, 30, { fontSize: opts.titleSize ?? 17, bold: true, color: opts.titleColor ?? ORANGE });
  addText(slide, body, x + 16, y + 47, w - 32, h - 58, { fontSize: opts.bodySize ?? 19, color: opts.bodyColor ?? TEXT });
}

function addBar(slide, label, value, max, x, y, w, color = TEAL) {
  addText(slide, label, x, y, 210, 26, { fontSize: 16, color: TEXT });
  addRect(slide, x + 218, y + 4, w - 258, 17, PALE_GRAY, "none", 0, 4);
  addRect(slide, x + 218, y + 4, Math.max(6, (w - 258) * value / max), 17, color, "none", 0, 4);
  addText(slide, String(value), x + w - 34, y - 2, 34, 26, { fontSize: 16, bold: true, color: TEXT, align: "right" });
}

function notes(slide, script, sources = []) {
  noteSources.set(slideNo, sources);
  const citationText = sources.length ? `\n\nSources:\n${sources.join("\n")}` : "";
  slide.speakerNotes.textFrame.setText(`${script}${citationText}`);
  slide.speakerNotes.setVisible(true);
}

// 1 — Cover.
{
  const slide = newSlide();
  slide.background.fill = NAVY;
  addText(slide, "AIRTRIBE · PRODUCT MANAGEMENT COURSEWORK · PROJECT 3", 54, 28, 1160, 28, { fontSize: 13, bold: true, color: ORANGE });
  addText(slide, "Find My Ride", 54, 92, 900, 74, { fontSize: 48, bold: true, color: WHITE });
  addText(slide, "Reducing uncertainty when riders and drivers cannot convert an app pin into a workable meeting point", 54, 176, 1040, 74, { fontSize: 23, color: "#D8E0EC" });
  addKpi(slide, 54, 360, 260, "62", "unique survey submissions");
  addKpi(slide, 334, 360, 260, "24 / 51", "recent users reporting difficulty");
  addKpi(slide, 614, 360, 260, "4", "driver responses — evidence gap");
  addKpi(slide, 894, 360, 260, "3", "research-led ideas to test");
  addText(slide, "Hyderabad primary · India comparison responses · 18 September 2026", 54, 645, 800, 24, { fontSize: 13, color: "#AEBBD0" });
  notes(slide, "Find My Ride examines a narrow but costly moment: after an Uber is booked, the app can show a pin or even an arrived state, but rider and driver still may not know the exact workable meeting point. The goal is not to redesign every pickup. It is to identify when coordination breaks and what Uber should test first.");
}

// 2 — Research method and app evidence.
{
  const slide = newSlide();
  addHeader(slide, "Research method", "What we actually researched", "A deliberate method choice under constraint — stated up front, not buried in a footnote.");
  addPanel(slide, 54, 170, 610, 130, "METHOD CHOICE", "Synchronous interviews were not feasible in the available window. I built a multilingual self-serve research app instead: rider/driver branches, structured tags, and four optional open-text or voice prompts.", { fill: WHITE, bodySize: 17 });
  addPanel(slide, 54, 308, 610, 118, "DEPTH ACHIEVED", "62 unique respondents. 30 answered at least one open-ended narrative prompt, 11 gave extended accounts, and 3 completed all four detailed prompts.", { fill: PALE_BLUE, titleColor: TEAL, bodySize: 17 });
  addPanel(slide, 54, 434, 610, 126, "TRADEOFF", "No live probing and no follow-up on surprising answers. Depth per respondent is lower than a moderated interview; breadth, language coverage and traceability are higher.", { fill: PALE_ORANGE, titleColor: NAVY, bodySize: 17 });
  addText(slide, "62 unique submissions · 58 riders · 4 drivers · 33 Hyderabad / 29 other cities · 30 open-ended responses", 54, 570, 640, 42, { fontSize: 17, bold: true, color: NAVY });
  addRect(slide, 742, 164, 274, 456, WHITE, NAVY, 2, 8);
  slide.images.add({ blob: await fs.readFile(appStory), contentType: "image/png", alt: "Survey app open-ended story prompt", fit: "contain", position: { left: 752, top: 174, width: 254, height: 436 } });
  addText(slide, [{ run: LIVE_URL, textStyle: { underline: "sng", color: NAVY_2 }, link: { uri: LIVE_URL, isExternal: true } }], 1030, 240, 190, 110, { fontSize: 16, color: NAVY_2 });
  addText(slide, "Live app\nEnglish · Telugu · Hindi", 1030, 174, 190, 58, { fontSize: 19, bold: true, color: NAVY });
  addText(slide, "Full consent, question-flow, and anonymized-response evidence is included in the evidence ZIP.", 1030, 372, 190, 116, { fontSize: 17, color: MUTED });
  addFooter(slide);
  notes(slide, "I want to be transparent about method. Synchronous interviews were not feasible in the time available, so I built a multilingual self-serve research app instead, with rider and driver branches, structured tags, and optional open-text or voice prompts. After removing one confirmed duplicate, the base is sixty-two unique respondents: fifty-eight riders, four drivers, thirty-three from Hyderabad, twenty-nine from other Indian cities. Thirty of them answered open-ended questions and eleven wrote extended accounts. The tradeoff is real: I could not probe a vague answer or follow up on a surprise. This is directional primary research with less depth per person than a moderated interview, and more breadth and language coverage.", [
    "Local evidence: data/survey/normalized-data.tsv; R032 removed as confirmed duplicate of R031.",
    LIVE_URL,
  ]);
}

// 3 — Market and competitors.
{
  const slide = newSlide();
  addHeader(slide, "Market and alternatives", "Guidance exists — focus on coverage, clarity, and recovery", "Competitor evidence establishes design precedents, not validated Hyderabad outcomes.");
  addPanel(slide, 54, 174, 350, 208, "UBER HYDERABAD BASELINE", "Uber's HYD guidance points riders to in-app directions and a D1 pickup zone. The case is not “Uber has no pickup guidance.”", { fill: WHITE, titleColor: ORANGE, bodySize: 20 });
  addPanel(slide, 427, 174, 350, 208, "GLOBAL PATTERNS", "Grab uses venue visuals and meeting points. Lyft uses pickup notes. Waymo makes accessible stops and walking trade-offs explicit.", { fill: WHITE, titleColor: TEAL, bodySize: 20 });
  addPanel(slide, 800, 174, 350, 208, "INDIAN ACCESS PATTERN", "MyGate shows how a privacy-aware gate handoff can work. Historical Ola evidence shows physical zones or human help, but not a current capability.", { fill: WHITE, titleColor: NAVY_2, bodySize: 20 });
  addRect(slide, 54, 410, 1096, 126, PALE_BLUE, "none", 0, 6);
  addText(slide, "Product implication", 74, 426, 220, 28, { fontSize: 17, bold: true, color: NAVY });
  addText(slide, "Test a reusable coordination layer for complex places: valid stopping context, concise handoff information, and one visible recovery step when coordination stalls.", 74, 462, 1048, 58, { fontSize: 23, bold: true, color: NAVY });
  addRect(slide, 54, 558, 1096, 72, PALE_ORANGE, "none", 0, 6);
  addText(slide, "Restrictions to design around: no-stopping and access rules, venue operations, accessibility, privacy, and data minimization. Exact local rules require venue-level validation.", 74, 574, 1055, 42, { fontSize: 17, color: TEXT });
  addFooter(slide);
  notes(slide, "Desk research changes the framing. Uber already publishes Hyderabad airport pickup guidance, including D1 and in-app directions. Grab, Lyft, Waymo, and MyGate show useful patterns for venue guidance, structured handoffs, and accessible stops. These are precedents, not proof of local value. So the opportunity is better coverage, clarity, and recovery within real access and stopping constraints.", [
    "https://www.uber.com/global/en/r/airports/hyd/pickup/",
    "https://www.grab.com/inside-grab/stories/were-making-pickups-easier-with-video-guides-in-the-grab-app/",
    "https://help.lyft.com/hc/en-us/all/articles/360047353153",
    "https://support.google.com/waymo/answer/9696059?hl=en",
    "https://help.mygate.in/articles/138755-where-will-my-cab-pick-me-up-if-i-am-using-safe-pickup-mode",
    "https://www.htp.gov.in/road_rules.html",
    "https://www.indiacode.nic.in/indiacode/handle/123456789/22037?view_type=browse",
  ]);
}

// 4 — Market, segments and trends.
{
  const slide = newSlide();
  addHeader(slide, "Market, segments and trends", "A sizing model with a named missing denominator", "Refusing a fabricated TAM is the finding — not an omission.");
  addPanel(slide, 54, 174, 350, 200, "SIZING MODEL", "Annual affected pickups = Hyderabad Uber four-wheel pickups × share beginning at complex locations × share hitting material difficulty. None of the three inputs exists in a reliable public source, so no TAM is claimed.", { fill: WHITE, titleColor: ORANGE, bodySize: 17 });
  addPanel(slide, 427, 174, 350, 200, "EXPOSURE POOLS — NOT THE PROBLEM", "Hyderabad Airport: 30M+ passengers FY2025-26. Hyderabad Metro: 4.75 lakh+ average daily riders across 57 stations. Secunderabad station: ~1.30 lakh per normal day, 2 lakh+ during festivals.", { fill: WHITE, titleColor: TEAL, bodySize: 17 });
  addPanel(slide, 800, 174, 350, 200, "WHERE DEMAND CONCENTRATES", "Segment by location type, not demographics. Among 28 issue cases: airport 10, gated residential 7, mall 6, office 6, metro/rail 5, street 3, hotel 2, hospital 1.", { fill: WHITE, titleColor: NAVY_2, bodySize: 17 });
  addRect(slide, 54, 392, 1096, 150, PALE_BLUE, "none", 0, 6);
  addText(slide, "Market trends", 74, 404, 260, 26, { fontSize: 17, bold: true, color: NAVY });
  addText(slide, "Regulatory tailwind — MV Aggregator Guidelines 2025 mandate in-journey location sharing, accessibility features and language support.\nCategory maturing — Uber already ships HYD airport guidance; Lyft ships pickup notes; Grab ships venue meeting points.\nCurb space tightening — access-control windows now appear at Indian transport hubs, such as Secunderabad's 15-minute pickup/drop rule.\nPrivacy bar rising — the DPDP Act 2023 constrains how venue and location data can be collected and retained.", 74, 432, 1052, 100, { fontSize: 16, color: NAVY });
  addRect(slide, 54, 556, 1096, 70, PALE_ORANGE, "none", 0, 6);
  addText(slide, "Telangana's adoption of the 2025 central guidelines and venue-level stopping rules both require legal and on-site verification. This is product research, not legal advice.", 74, 572, 1055, 42, { fontSize: 17, color: TEXT });
  addFooter(slide);
  notes(slide, "On market size I want to be direct about what I will not do. A credible estimate needs Hyderabad four-wheel pickup volume, the share starting at complex locations, and the share hitting real difficulty. None of those three is publicly available, so I am presenting the model and the missing denominator rather than inventing a TAM. What public data does give me is exposure: thirty million airport passengers a year, over four and a half lakh daily metro riders, and about one-point-three lakh a day at Secunderabad. And the segmentation that matters here is location type, not demographics.", [
    "https://www.uber.com/in/en/newsroom/how-india-ubered-in-2025-everyday-travel-extraordinary-scale/",
    "https://www.uber.com/in/en/newsroom/how-india-ubered-in-2023-a-year-in-rear-view/",
    "https://www.gmrgroup.com/airports-and-aero-services/airports/hyderabad-airport",
    "https://www.ltmetro.com/wp-content/uploads/2025/01/28-11-2024-Press-Release-Hyderabad-Metro-Rail-Celebrates-its-7th-Anniversary-181-Chief-Guest.pdf",
    "https://morth.nic.in/sites/default/files/circulars_document/MV-Aggregators-Guidelines-2025%20-%20English%20and%20Hindi.pdf",
    "https://www.indiacode.nic.in/indiacode/handle/123456789/22037?view_type=browse",
    "Local evidence: research/desk-research-report.md sections 3.1, 3.5, 3.6, 3.7 and 5.",
  ]);
}

// 5 — Template section 1: research goal and problem frame.
{
  const slide = newSlide();
  addHeader(slide, "1 · Research goal", "One research question grounded in a clear problem frame", "Primary: Hyderabad four-wheel riders at complex pickups. Connected stakeholder: the driver.");
  addRect(slide, 54, 168, 1096, 104, NAVY, "none", 0, 6);
  addText(slide, "When a pickup becomes difficult, what breaks, and what do riders and drivers do to recover?", 82, 188, 1040, 64, { fontSize: 27, bold: true, color: WHITE, align: "center", valign: "middle" });
  addPanel(slide, 54, 304, 530, 216, "EVIDENCE-BASED PROBLEM", "At complex pickup locations, an app pin may identify the area without giving rider and driver a shared, workable meeting point. Observed impact: extra calls, waiting, movement, and delay.", { fill: WHITE, bodySize: 20, titleColor: TEAL });
  addPanel(slide, 620, 304, 530, 216, "WORKING JTBD · ASSUMPTION", "When I am waiting at a complex pickup, help my driver and me agree on a legal, easy-to-recognize meeting point so the trip can start with less recovery effort.", { fill: PALE_BLUE, bodySize: 20, titleColor: NAVY_2 });
  addRect(slide, 54, 548, 1096, 72, PALE_ORANGE, "none", 0, 6);
  addText(slide, "Success direction: fewer reactive contacts and lower arrived-to-trip-start dwell. Driver and marketplace impact still requires validation.", 74, 564, 1056, 42, { fontSize: 18, bold: true, color: NAVY, align: "center" });
  addFooter(slide);
  notes(slide, "The research goal is to understand what breaks during difficult pickups and how people recover. The evidence-based frame is a shared-reference-point problem at complex locations, not proof that the map is always wrong. The primary user is the rider, with the driver as the connected stakeholder. The working job statement is an assumption to validate. Success would mean fewer reactive contacts and lower arrived-to-trip-start dwell, while driver and marketplace impact remains an open question.", ["Local evidence: synthesis/01-survey-insights.md, synthesis/02-strategy-implications.md, and v2/requirement.md."]);
}

// 6 — Five-W problem framing check.
{
  const slide = newSlide();
  addHeader(slide, "1 · Problem framing", "Five questions before writing the problem statement", "The 5Ws define the context and impact without jumping to a feature.");

  addRect(slide, 54, 170, 1096, 352, WHITE, PALE_GRAY, 1, 8);
  const frames = [
    ["WHO", "Hyderabad four-wheel riders\n\nThe driver is the connected stakeholder."],
    ["WHAT", "A generally correct pin may still fail to create one shared, workable meeting point."],
    ["WHERE", "Airports, gated homes, malls, offices, and metro or railway stations."],
    ["WHEN", "After booking, mainly as the driver approaches or is marked arrived."],
    ["WHY", "Extra calls, waiting, movement, and delayed trip starts reduce pickup reliability."],
  ];
  const frameWidth = 1096 / frames.length;
  frames.forEach((frame, index) => {
    const x = 54 + index * frameWidth;
    if (index > 0) addRect(slide, x, 194, 1, 280, PALE_GRAY);
    slide.shapes.add({ geometry: "ellipse", position: { left: x + 77, top: 202, width: 66, height: 66 }, fill: index === 0 ? ORANGE : PALE_BLUE, line: { fill: "none", width: 0 } });
    addText(slide, String(index + 1).padStart(2, "0"), x + 84, 219, 52, 30, { fontSize: 17, bold: true, color: index === 0 ? WHITE : NAVY, align: "center", valign: "middle" });
    addText(slide, frame[0], x + 27, 282, frameWidth - 54, 34, { fontSize: 21, bold: true, color: NAVY, align: "center" });
    addText(slide, frame[1], x + 22, 328, frameWidth - 44, 150, { fontSize: 17, color: TEXT, align: "center", valign: "middle" });
  });

  addRect(slide, 54, 548, 1096, 78, PALE_ORANGE, "none", 0, 6);
  addText(slide, "Evidence check: the survey supports the direction, but root causes, driver impact, and venue constraints still need moderated and field validation.", 78, 565, 1048, 46, { fontSize: 18, bold: true, color: NAVY, align: "center", valign: "middle" });
  addFooter(slide);
  notes(slide, "Before writing the statement, I checked five questions. Who? A rider at a complex pickup, with the driver also affected. What? No shared meeting point. Where? Airports, gated homes, malls, offices, and stations. When? As the driver approaches or arrives. Why? The extra coordination creates waiting and delay.", ["Local evidence: synthesis/01-survey-insights.md, synthesis/02-strategy-implications.md, and Sanitized-Survey-Evidence.xlsx.", "Framework adapted from the user-provided 5W problem-framing request."]);
}

// 7 — Problem statement.
{
  const slide = newSlide();
  addHeader(slide, "1 · Problem statement", "A specific, evidence-based, and focused statement");

  const criteria = [
    ["1", "SPECIFIC USER", "Hyderabad four-wheel riders starting from complex pickup locations."],
    ["2", "CLEAR PAIN", "The rider and driver lack one shared, workable meeting point."],
    ["3", "VISIBLE IMPACT", "Extra calls, waiting, movement, and delayed trip starts."],
    ["4", "DEFINED SCOPE", "Airports, gated residences, malls, offices, and stations. Not every ride."],
  ];
  criteria.forEach((item, index) => {
    const y = 170 + index * 106;
    slide.shapes.add({ geometry: "ellipse", position: { left: 54, top: y + 4, width: 42, height: 42 }, fill: index === 0 ? ORANGE : PALE_BLUE, line: { fill: "none", width: 0 } });
    addText(slide, item[0], 60, y + 10, 30, 28, { fontSize: 17, bold: true, color: NAVY, align: "center", valign: "middle" });
    addText(slide, item[1], 116, y, 380, 28, { fontSize: 19, bold: true, color: NAVY });
    addText(slide, item[2], 116, y + 34, 388, 48, { fontSize: 16, color: MUTED });
    if (index < criteria.length - 1) addRect(slide, 54, y + 92, 450, 1, PALE_GRAY);
  });

  addRect(slide, 550, 170, 600, 360, WHITE, PALE_GRAY, 1, 8);
  addText(slide, "FINAL PROBLEM STATEMENT", 584, 198, 532, 26, { fontSize: 14, bold: true, color: ORANGE });
  addText(slide, "For Hyderabad four-wheel riders starting from complex locations, the pickup pin may show the correct general area but still fail to give the rider and driver one shared, workable meeting point.\n\nThis causes extra calls, waiting, movement, and delayed trip starts.\n\nUber should solve this to reduce recovery effort and improve pickup reliability, while respecting driver access and stopping constraints.", 584, 242, 532, 250, { fontSize: 22, bold: true, color: NAVY, valign: "middle" });

  addRect(slide, 550, 554, 600, 72, PALE_ORANGE, "none", 0, 6);
  addText(slide, "Evidence boundary: directional survey evidence. Moderated interviews and stronger driver validation are still pending.", 576, 570, 548, 42, { fontSize: 17, color: TEXT, align: "center", valign: "middle" });
  addFooter(slide);
  notes(slide, "The final statement is this. At selected complex locations, a generally correct pin may still fail to create one shared meeting point. This causes calls, waiting, movement, and delay. It does not apply to every ride. The survey is directional, so interviews and stronger driver evidence are still needed.", ["Local evidence: synthesis/01-survey-insights.md, synthesis/02-strategy-implications.md, and Sanitized-Survey-Evidence.xlsx.", "Format adapted from the user-provided What Makes a Good Problem Statement reference image."]);
}

// 8 — Template section 1.1: research questions.
{
  const slide = newSlide();
  addHeader(slide, "1.1 · Key Interview Questions", "Ten questions adapted for the online instrument", "Required interview prompts used asynchronously; no live follow-up or probing.");
  addBulletList(slide, [
    "Tell me about the last time you had difficulty finding your ride after booking it.",
    "Where were you, and what did the app tell you?",
    "When did you first realize the pickup might not work as expected?",
    "What made the rider and driver difficult to locate or identify?",
    "What did you do next: call, message, move, wait, cancel, or seek help?",
    "How much extra time or effort did the situation require?",
    "What finally helped, if anything?",
    "Has the same problem happened at other locations?",
    "What information or support was missing at the most frustrating moment?",
    "For drivers: what prevented you from reaching the pin or identifying the rider?",
  ], 54, 176, 1096, 396, { fontSize: 17, spaceAfterPoints: 5 });
  addRect(slide, 54, 580, 1096, 62, PALE_ORANGE, "none", 0, 6);
  addText(slide, "Method boundary: the form could not probe vague answers or ask a live follow-up.", 74, 594, 1055, 40, { fontSize: 17, color: TEXT, align: "center" });
  addFooter(slide);
  notes(slide, "These are the required key interview questions adapted for the online instrument. They cover the most recent difficult pickup, location and app guidance, the breakdown moment, recovery actions, effort, what helped, recurrence, missing support, and the driver constraint. They were asked asynchronously, so they are not evidence of ten moderated interviews.", [
    "Local evidence: synthesis/01-survey-insights.md section 1.1; interviews/survey-form-content.md.",
  ]);
}

// 9 — Template section 2: evidence headline.
{
  const slide = newSlide();
  addHeader(slide, "2 · Top 10 most relevant insights", "Not everyone's problem — but a real, recurring one for affected respondents", "Headline signals and a direct quote; the complete ten insights appear in the appendix.");
  addKpi(slide, 54, 174, 248, "47.1%", "24 of 51 recent users reported difficulty or uncertainty", NAVY_2);
  addKpi(slide, 322, 174, 248, "82.1%", "23 of 28 issue cases said it happened before", TEAL);
  addKpi(slide, 590, 174, 248, "20 / 28", "said calling or messaging helped", NAVY_2);
  addKpi(slide, 858, 174, 248, "6 / 28", "said nothing helped", ORANGE);
  addRect(slide, 54, 326, 1096, 164, NAVY, "none", 0, 6);
  addText(slide, "“The app says he has arrived, but almost 10 minutes to locate each other.”", 84, 352, 1036, 74, { fontSize: 29, italic: true, color: WHITE, align: "center", valign: "middle" });
  addText(slide, "R067 · rider · anonymized response", 84, 442, 1036, 26, { fontSize: 15, color: "#C9D3E2", align: "center" });
  addRect(slide, 54, 520, 1096, 92, PALE_ORANGE, "none", 0, 6);
  addText(slide, "Interpretation boundary: 23 of 28 means the issue occurred before; it does not prove recurrence at the same venue. These sample percentages are not Hyderabad prevalence. The 28 issue cases are the 24 recent four-wheel users plus 3 respondents with no recent four-wheel trip and 1 unsure, all of whom reported a pickup issue.", 74, 533, 1056, 62, { fontSize: 16, color: TEXT });
  addFooter(slide);
  notes(slide, "The sample says the problem is meaningful but not universal. Twenty-four of fifty-one recent four-wheel users reported difficulty. Among the twenty-eight issue cases, twenty-three said it had happened before, twenty said calls or messages helped, and six said nothing helped. Recurrence means the problem happened before; it does not mean the same venue repeatedly failed.", ["Local evidence: v3/submission-ready/evidence/03-Anonymized-Responses/Sanitized-Survey-Evidence.xlsx."]);
}

// 10 — Template section 2: supporting patterns and visual evidence.
{
  const slide = newSlide();
  addHeader(slide, "2 · Top 10 most relevant insights", "Where coordination breaks — and how people recover", "Supporting visual for the location and recovery insights.");
  addText(slide, "Problem locations among 28 issue cases — top 6 of 8 types", 54, 166, 520, 32, { fontSize: 21, bold: true, color: NAVY });
  const locs = [["Airport",10],["Residential / gated",7],["Shopping mall",6],["Office / tech campus",6],["Metro / railway",5],["Busy street",3]];
  locs.forEach((item, index) => addBar(slide, item[0], item[1], 10, 54, 210 + index * 47, 520, TEAL));
  addText(slide, "Recovery actions", 650, 166, 500, 32, { fontSize: 21, bold: true, color: NAVY });
  const acts = [["Called",17],["Waited",9],["Moved",8],["Messaged",5],["Cancelled",4],["Other",1]];
  acts.forEach((item, index) => addBar(slide, item[0], item[1], 17, 650, 210 + index * 47, 500, ORANGE));
  addRect(slide, 54, 516, 1096, 106, NAVY, "none", 0, 6);
  addText(slide, "The app often hands the last physical coordination step back to the rider and driver. Calls work often — but they add effort and do not provide a reliable fallback when coordination still fails.", 78, 539, 1048, 64, { fontSize: 22, color: WHITE, align: "center", valign: "middle" });
  addFooter(slide);
  notes(slide, "The cases concentrate in complex environments: airports, gated residences, malls, offices, and stations. Calling is the dominant recovery action, followed by waiting and moving. That tells us the app often hands the final physical coordination step back to the rider and driver. The opportunity is to reduce that manual effort, not to assume the pin itself is always wrong.", ["Local evidence: Sanitized-Survey-Evidence.xlsx, Summary and Anonymized Responses sheets. Multi-select counts are mentions, not unique people."]);
}

// 11 — Template section 3: strategy implications.
{
  const slide = newSlide();
  addHeader(slide, "3 · Strategy implications", "Make the fallback faster — not the map more complicated");
  addRect(slide, 54, 170, 1096, 116, PALE_BLUE, "none", 0, 6);
  addText(slide, "Recommended direction", 74, 186, 260, 26, { fontSize: 17, bold: true, color: TEAL });
  addText(slide, "Reduce the effort and uncertainty of manual pickup recovery at a defined set of complex location types.", 74, 222, 1048, 48, { fontSize: 27, bold: true, color: NAVY });
  addPanel(slide, 54, 316, 520, 212, "TEST ORDER", "P0 · Structured pre-arrival meeting note\nP1 · Guided stalled-pickup recovery\nP2 · Venue-specific coordination information", { fill: WHITE, titleColor: TEAL, bodySize: 22 });
  addPanel(slide, 610, 316, 540, 212, "DO NOT", "Do not add friction to every ride, position this as an airport-only problem, or treat all cancellations as map failures.", { fill: PALE_ORANGE, titleColor: ORANGE, bodySize: 23 });
  addText(slide, "Biggest open risk: driver evidence and marketplace economics are too thin to support a two-sided rollout decision.", 54, 558, 1096, 48, { fontSize: 20, bold: true, color: NAVY, align: "center" });
  addFooter(slide);
  notes(slide, "The strategic direction is to make the fallback faster, not to redesign the map. Focus on complex locations where people already call, message, wait, or move. Avoid universal prompts, airport-only thinking, and assuming every cancellation is a location problem. The order shown is the order to test, not a committed build roadmap.", ["Local evidence: synthesis/02-strategy-implications.md."]);
}

// 12 — Template section 4: product idea P0.
{
  const slide = newSlide();
  addHeader(slide, "4 · Research-led product idea · P0", "Structured pre-arrival meeting note", "Strongest first test because it formalizes an existing user-created workaround.");
  addPanel(slide, 54, 174, 522, 150, "TRIGGER", "Only at flagged complex pickup locations, a few minutes before driver arrival.", { fill: WHITE, bodySize: 22 });
  addPanel(slide, 54, 340, 522, 150, "ACTION", "Prompt one concise handoff: gate or side, landmark, and waiting spot — reusable where appropriate.", { fill: WHITE, bodySize: 22 });
  addPanel(slide, 612, 174, 538, 150, "WHY THIS FIRST", "Calls/messages helped in 20 of 28 issue cases. R061 already sends these details manually — and reported no pickup difficulty.", { fill: PALE_BLUE, titleColor: TEAL, bodySize: 22 });
  addPanel(slide, 612, 340, 538, 150, "TEST", "At comparable flagged locations, compare reactive call/message rate, arrived-to-trip-start dwell, location changes, and cancellations.", { fill: PALE_ORANGE, titleColor: NAVY, bodySize: 21 });
  addRect(slide, 54, 522, 1096, 92, NAVY, "none", 0, 6);
  addText(slide, "“I always place a message on where I would stand with details.” — R061", 74, 543, 1056, 50, { fontSize: 24, italic: true, color: WHITE, align: "center" });
  addFooter(slide);
  notes(slide, "The first test is a structured pre-arrival meeting note. It appears only at flagged complex locations and captures the gate, side, landmark, or waiting spot. This is grounded in existing behavior: one respondent already sends those details manually. The test is whether it reduces reactive calls, dwell time, location changes, and cancellations without adding friction to normal pickups.", [
    "Local evidence: R061 in normalized-data.tsv; 20 of 28 issue cases reported calls/messages as helpful.",
    "Competitor precedent: https://help.lyft.com/hc/en-us/all/articles/360047353153",
  ]);
}

// 13 — Template section 4: product ideas P1 and P2.
{
  const slide = newSlide();
  addHeader(slide, "4 · Research-led product ideas · P1 and P2", "Recovery when coordination stalls — then reusable venue context");
  addPanel(slide, 54, 170, 530, 344, "P1 · GUIDED STALLED-PICKUP RECOVERY", "Trigger after an arrived state remains unresolved past a defined threshold. First guide reconnect actions: share live location, confirm a meeting cue, and retry contact. Test reassignment only for unresolved cases, because it carries marketplace and compensation risk.", { fill: WHITE, titleColor: ORANGE, bodySize: 22 });
  addPanel(slide, 620, 170, 530, 344, "P2 · VENUE-SPECIFIC COORDINATION INFORMATION", "Pilot at 2–3 validated venues. Show accessible gate or side, legal stopping point, expected walk, and access constraints. Treat repeat-issue evidence as a problem signal — not proof that the same venue failed repeatedly.", { fill: PALE_BLUE, titleColor: TEAL, bodySize: 22 });
  addRect(slide, 54, 540, 1096, 84, PALE_ORANGE, "none", 0, 6);
  addText(slide, "Guardrails: trigger only on genuine coordination stalls; assign venue-data ownership and expiry; validate driver impact before scaling.", 74, 560, 1056, 44, { fontSize: 20, bold: true, color: NAVY, align: "center" });
  addFooter(slide);
  notes(slide, "The second idea is guided stalled-pickup recovery. Start with reconnect actions and only test reassignment for unresolved cases, because reassignment affects drivers and marketplace cost. The third idea is venue-specific coordination information at two or three validated places. It is a hypothesis based on repeated issues and location concentration, not proof that the same venue repeatedly fails.", ["Local evidence: synthesis/04-product-ideas.md and Sanitized-Survey-Evidence.xlsx."]);
}

// 14 — Decision and next validation.
{
  const slide = newSlide();
  addHeader(slide, "Decision and next evidence", "A defensible direction — not a “build it” recommendation");
  addRect(slide, 54, 170, 1096, 114, NAVY, "none", 0, 6);
  addText(slide, "Test the smallest coordination aid first: a structured note at flagged complex pickups. Move to recovery and venue data only if the evidence supports it.", 78, 192, 1048, 70, { fontSize: 27, bold: true, color: WHITE, align: "center", valign: "middle" });
  addPanel(slide, 54, 314, 345, 226, "LIMITS", "Convenience sample; interview requirement unmet; 4 drivers; optional open-text depth; 29 other-city responses; no reliable local market denominator.", { fill: PALE_ORANGE, titleColor: NAVY, bodySize: 19 });
  addPanel(slide, 419, 314, 345, 226, "NEXT RESEARCH", "Run 6 moderated rider and 4 driver interviews if feasible; include accessibility and venue-operations perspectives.", { fill: WHITE, titleColor: TEAL, bodySize: 20 });
  addPanel(slide, 784, 314, 366, 226, "NEXT DATA", "If event logs are trustworthy, baseline arrived-to-trip-start dwell, contacts, location changes, and cancellations at selected venues.", { fill: WHITE, titleColor: ORANGE, bodySize: 20 });
  addText(slide, "Appendix: full method, framing check, top 10 insights, competitor patterns, idea tests, limitations, and source traceability.", 54, 570, 1096, 40, { fontSize: 18, italic: true, color: MUTED, align: "center" });
  addFooter(slide);
  notes(slide, "The recommendation is to test the smallest coordination aid first, not to commit to a broad build. The research is directional: the interview requirement remains unmet, driver evidence is thin, and the sample is not representative. The highest-value next evidence is moderated rider and driver work plus trustworthy arrived-to-trip-start and coordination-event data at selected venues.", ["Local evidence: submission-requirements.md and synthesis/*.md."]);
}

// 15 — Appendix divider.
{
  const slide = newSlide();
  slide.background.fill = NAVY;
  addText(slide, "APPENDIX", 54, 170, 500, 36, { fontSize: 18, bold: true, color: ORANGE });
  addText(slide, "The evidence behind every claim", 54, 226, 980, 70, { fontSize: 44, bold: true, color: WHITE });
  addText(slide, "Methodology · Problem-framing check · Top 10 insights · Market evidence · Product tests · Experiment readiness · Limitations · Sources", 54, 322, 1080, 72, { fontSize: 23, color: "#CDD6E3" });
  addFooter(slide, true);
  notes(slide, "Appendix divider.");
}

// 16 — Methodology.
{
  const slide = newSlide();
  addHeader(slide, "Appendix · Methodology", "Online survey evidence and the exact requirement gap");
  addBulletList(slide, [
    "62 unique submissions after removing confirmed duplicate R032",
    "58 riders and 4 drivers; driver conclusions remain open",
    "33 Hyderabad and 29 other-city responses",
    "Self-serve, asynchronous, consent-gated interface in English, Telugu, and Hindi",
    "Four optional open-text or voice prompts plus structured tags",
    "Contact details and raw payload excluded from the sanitized workbook",
    "Asynchronous online research, not synchronous in-depth interviews: 30 respondents answered open-ended prompts, but no answer could be probed live",
  ], 54, 176, 660, 420, { fontSize: 21, spaceAfterPoints: 10 });
  addRect(slide, 760, 168, 188, 382, WHITE, NAVY, 2, 6);
  slide.images.add({ blob: await fs.readFile(appLocation), contentType: "image/png", alt: "Survey app location question", fit: "contain", position: { left: 770, top: 178, width: 168, height: 362 } });
  addRect(slide, 974, 168, 188, 382, WHITE, NAVY, 2, 6);
  slide.images.add({ blob: await fs.readFile(appRecovery), contentType: "image/png", alt: "Survey app recovery question", fit: "contain", position: { left: 984, top: 178, width: 168, height: 362 } });
  addText(slide, "Live app and full-size screenshots are included in the evidence ZIP.", 760, 566, 402, 44, { fontSize: 17, color: MUTED, align: "center" });
  addFooter(slide, true);
  notes(slide, "Methodology evidence.", [LIVE_URL, "Local evidence: webapp/index.html and Sanitized-Survey-Evidence.xlsx."]);
}

// 17 — Problem-framing quality check.
{
  const slide = newSlide();
  addHeader(slide, "Appendix · Problem framing", "Current problem frame and validation status");

  const plotX = 94;
  const plotY = 188;
  const plotW = 500;
  const plotH = 336;
  const midX = plotX + plotW / 2;
  const midY = plotY + plotH / 2;

  addRect(slide, plotX, plotY, plotW / 2, plotH / 2, "#F6F8FB", PALE_GRAY, 1, 0);
  addRect(slide, midX, plotY, plotW / 2, plotH / 2, PALE_BLUE, PALE_GRAY, 1, 0);
  addRect(slide, plotX, midY, plotW / 2, plotH / 2, "#F7F7F8", PALE_GRAY, 1, 0);
  addRect(slide, midX, midY, plotW / 2, plotH / 2, PALE_ORANGE, PALE_GRAY, 1, 0);
  addRect(slide, midX - 2, plotY, 4, plotH, NAVY);
  addRect(slide, plotX, midY - 2, plotW, 4, NAVY);

  addText(slide, "Clear frame, weak evidence", plotX + 18, plotY + 32, 214, 30, { fontSize: 17, bold: true, color: NAVY, align: "center" });
  addText(slide, "Specific problem, limited user proof", plotX + 26, plotY + 72, 198, 42, { fontSize: 14, color: MUTED, align: "center" });
  addText(slide, "Evidence-led frame", midX + 18, plotY + 32, 214, 30, { fontSize: 17, bold: true, color: NAVY, align: "center" });
  addText(slide, "Connects user pain, impact, and success", midX + 26, plotY + 72, 198, 42, { fontSize: 14, color: MUTED, align: "center" });
  addText(slide, "Internal assumption", plotX + 18, midY + 42, 214, 30, { fontSize: 17, bold: true, color: NAVY, align: "center" });
  addText(slide, "Feature chosen before the problem is understood", plotX + 26, midY + 82, 198, 50, { fontSize: 14, color: MUTED, align: "center" });
  addText(slide, "User pain, solution jump", midX + 18, midY + 42, 214, 30, { fontSize: 17, bold: true, color: NAVY, align: "center" });
  addText(slide, "Real pain, but constraints and feasibility are missed", midX + 26, midY + 82, 198, 50, { fontSize: 14, color: MUTED, align: "center" });

  addText(slide, "PROBLEM FIRST", 236, 156, 216, 24, { fontSize: 14, bold: true, color: ORANGE, align: "center" });
  addText(slide, "SOLUTION FIRST", 236, 532, 216, 24, { fontSize: 14, bold: true, color: MUTED, align: "center" });
  addText(slide, "STAKEHOLDER\nASSUMPTION", 2, 336, 88, 44, { fontSize: 11, bold: true, color: MUTED, align: "center", valign: "middle" });
  addText(slide, "USER\nEVIDENCE", 598, 336, 72, 44, { fontSize: 11, bold: true, color: TEAL, align: "center", valign: "middle" });

  slide.shapes.add({ geometry: "ellipse", position: { left: 468, top: 270, width: 24, height: 24 }, fill: ORANGE, line: { fill: WHITE, width: 2 } });
  addText(slide, "CURRENT FRAME\nStrong definition\nDirectional validation", 416, 296, 128, 52, { fontSize: 12, bold: true, color: NAVY, align: "center" });

  addRect(slide, 684, 166, 530, 424, WHITE, PALE_GRAY, 1, 4);
  addText(slide, "CURRENT CONTEXT", 708, 182, 474, 24, { fontSize: 14, bold: true, color: ORANGE });

  const contextRows = [
    ["USER AND SETTING", "Four-wheel riders starting from airports, gated residences, malls, offices, or stations. Drivers are directly affected."],
    ["OBSERVED PROBLEM", "The pin may show the area, but both sides still lack one clear and workable meeting point. Calls, waiting, or movement follow."],
    ["CURRENT EVIDENCE", "62 unique responses. 24 of 51 recent users reported difficulty or uncertainty. 30 gave open-ended answers. Only 4 drivers responded."],
    ["SUCCESS SIGNAL", "Fewer reactive calls or messages and less time between driver arrival and trip start."],
    ["REMAINING GAPS", "No moderated interviews. Driver evidence is thin. The sample is not representative. Validate with rider and driver interviews plus pickup event data."],
  ];
  const rowY = [216, 282, 364, 446, 506];
  const rowH = [66, 82, 82, 60, 84];
  contextRows.forEach((row, i) => {
    if (i > 0) addRect(slide, 706, rowY[i], 486, 1, PALE_GRAY);
    addText(slide, row[0], 708, rowY[i] + 10, 128, rowH[i] - 14, { fontSize: 12, bold: true, color: i === 4 ? ORANGE : TEAL, valign: "top" });
    addText(slide, row[1], 842, rowY[i] + 8, 342, rowH[i] - 12, { fontSize: 14, color: TEXT, valign: "top" });
  });

  addRect(slide, 54, 610, 1160, 50, PALE_BLUE, "none", 0, 4);
  addText(slide, "Assessment: strong problem framing with directional validation. Test the smallest idea while gathering stronger evidence.", 76, 620, 1116, 30, { fontSize: 18, bold: true, color: NAVY, align: "center" });
  addFooter(slide, true);
  notes(slide, "This slide checks whether the project defined a real user problem before choosing a feature. The frame is specific: complex-location riders and their drivers lack one clear meeting point even when the pin shows the general area. The survey supports the pain and recovery behavior, but validation remains directional because there were no moderated interviews, only four driver responses, and no reliable pickup event data.", ["Concept adapted from the user-provided Good & Bad Problem Framing reference image.", "Local evidence: Sanitized-Survey-Evidence.xlsx, synthesis/01-survey-insights.md, and synthesis/02-strategy-implications.md."]);
}

// 18 — Template section 2 appendix: insights 1–5.
{
  const slide = newSlide();
  addHeader(slide, "Appendix · 2 · Top 10 most relevant insights", "Insights 1–5: prevalence, recurrence, location, arrived state, and recovery");
  const items = [
    ["1", "Difficulty is meaningful, not universal", "24/51 reported difficulty or uncertainty; 34/62 no issue", "Strong"],
    ["2", "For affected respondents, the issue often recurs", "23/28 said it happened before — not necessarily same venue", "Strong"],
    ["3", "Complex environments concentrate coordination failures", "Airport 10; residential 7; mall 6; office 6", "Strong"],
    ["4", "Arrived does not mean the rider and driver can meet", "Wrong pin, similar gates, cross-road case", "Moderate"],
    ["5", "Calling and messaging are the main recovery layer", "20/28 said calling or messaging helped", "Strong"],
  ];
  items.forEach((it, i) => {
    const y = 170 + i * 91;
    addRect(slide, 54, y, 1096, 76, WHITE, PALE_GRAY, 1, 4);
    addText(slide, it[0], 68, y + 13, 42, 44, { fontSize: 26, bold: true, color: ORANGE, align: "center", valign: "middle" });
    addText(slide, it[1], 126, y + 10, 550, 28, { fontSize: 20, bold: true, color: NAVY });
    addText(slide, it[2], 126, y + 40, 720, 24, { fontSize: 16, color: MUTED });
    addRect(slide, 968, y + 20, 150, 34, it[3] === "Strong" ? PALE_BLUE : PALE_ORANGE, "none", 0, 16);
    addText(slide, it[3], 978, y + 24, 130, 24, { fontSize: 15, bold: true, color: NAVY, align: "center" });
  });
  addFooter(slide, true);
  notes(slide, "Top insights 1 through 5.", ["Local evidence: v3/submission-ready/evidence/03-Anonymized-Responses/Sanitized-Survey-Evidence.xlsx, Insight Traceability sheet."]);
}

// 19 — Template section 2 appendix: insights 6–10.
{
  const slide = newSlide();
  addHeader(slide, "Appendix · 2 · Top 10 most relevant insights", "Insights 6–10: recovery burden, delay, cancellation, support, and identification");
  const items = [
    ["6", "The rider often absorbs the recovery effort", "Waited 9; moved 8; driver moved helped 3", "Moderate"],
    ["7", "Pickup failures can create material delay", "7/10 time-tagged cases exceeded five minutes", "Moderate"],
    ["8", "Cancellation is related but multi-causal", "Location overlaps with destination, fare, payment, and rain", "Moderate"],
    ["9", "Some respondents found no effective recovery", "6/28 selected nothing helped", "Moderate"],
    ["10", "Finding the ride includes vehicle identification", "One vehicle-number mismatch report", "Weak"],
  ];
  items.forEach((it, i) => {
    const y = 170 + i * 91;
    addRect(slide, 54, y, 1096, 76, WHITE, PALE_GRAY, 1, 4);
    addText(slide, it[0], 68, y + 13, 42, 44, { fontSize: 26, bold: true, color: ORANGE, align: "center", valign: "middle" });
    addText(slide, it[1], 126, y + 10, 550, 28, { fontSize: 20, bold: true, color: NAVY });
    addText(slide, it[2], 126, y + 40, 720, 24, { fontSize: 16, color: MUTED });
    addRect(slide, 968, y + 20, 150, 34, PALE_ORANGE, "none", 0, 16);
    addText(slide, it[3], 978, y + 24, 130, 24, { fontSize: 15, bold: true, color: NAVY, align: "center" });
  });
  addFooter(slide, true);
  notes(slide, "Top insights 6 through 10.", ["Local evidence: Sanitized-Survey-Evidence.xlsx, Insight Traceability sheet."]);
}

// 20 — Competitor deep dive.
{
  const slide = newSlide();
  addHeader(slide, "Appendix · Market and competitor evidence", "Design patterns — with transferability limits");
  const rows = [
    ["Uber HYD", "In-app directions and D1 pickup zone", "Baseline exists; test coverage and failed coordination", "Airport-only evidence"],
    ["Grab", "Venue visuals and curated meeting points", "Make landmarks and paths concrete", "Global / experimental claims"],
    ["Lyft", "Pickup Notes and selective assisted rides", "Structured context and recovery precedent", "US market"],
    ["Waymo", "Navigable stops; walking preference", "Explain vehicle-access vs walking trade-off", "US autonomous rides"],
    ["MyGate", "Privacy-aware gate handoff", "Access-aware residential coordination", "Adjacent Indian product"],
  ];
  const xs = [54, 228, 520, 862];
  const ws = [174, 292, 342, 288];
  ["Reference", "Observed mechanism", "Lesson for this case", "Boundary"].forEach((header, i) => {
    addRect(slide, xs[i], 170, ws[i], 52, NAVY, WHITE, 1, 0);
    addText(slide, header, xs[i] + 8, 182, ws[i] - 16, 28, { fontSize: 17, bold: true, color: WHITE, align: "center" });
  });
  rows.forEach((row, r) => {
    const y = 222 + r * 78;
    row.forEach((cell, c) => {
      addRect(slide, xs[c], y, ws[c], 78, r % 2 === 0 ? WHITE : "#F8F9FB", PALE_GRAY, 1, 0);
      addText(slide, cell, xs[c] + 10, y + 10, ws[c] - 20, 58, { fontSize: c === 0 ? 18 : 16, bold: c === 0, color: c === 0 ? NAVY : TEXT, valign: "middle" });
    });
  });
  addFooter(slide, true);
  notes(slide, "Competitor pattern comparison.", [
    "https://www.uber.com/global/en/r/airports/hyd/pickup/",
    "https://www.grab.com/inside-grab/stories/were-making-pickups-easier-with-video-guides-in-the-grab-app/",
    "https://help.lyft.com/hc/en-us/all/articles/360047353153",
    "https://support.google.com/waymo/answer/9696059?hl=en",
    "https://help.mygate.in/articles/138755-where-will-my-cab-pick-me-up-if-i-am-using-safe-pickup-mode",
  ]);
}

// 21 — Template section 3 appendix: strategy reconciliation.
{
  const slide = newSlide();
  addHeader(slide, "Appendix · 3 · Strategy implications", "What the evidence changes — and what it does not support");
  addPanel(slide, 54, 170, 520, 124, "PARTIALLY SUPPORTED", "Indoor-to-outdoor navigation matters, but gated residences, offices, and streets show a broader shared-reference-point problem.", { fill: WHITE, bodySize: 18 });
  addPanel(slide, 610, 170, 540, 124, "SUPPORTED, THIN", "Access and stopping constraints matter; driver evidence is only four responses, so desk research carries more weight here.", { fill: WHITE, bodySize: 18 });
  addPanel(slide, 54, 314, 520, 124, "SUPPORTED", "“Pickup failure” combines location confusion, recovery effort, destination preference, fare, payment, and driver behavior.", { fill: PALE_BLUE, bodySize: 18, titleColor: TEAL });
  addPanel(slide, 610, 314, 540, 124, "NOT SUPPORTED", "A universal prompt, airport-only strategy, precise Hyderabad prevalence, or a driver-specific solution cannot be justified from this evidence.", { fill: PALE_ORANGE, bodySize: 18, titleColor: NAVY });
  addPanel(slide, 54, 458, 1096, 132, "DECISION", "Use location type and stall signals to target coordination help. Validate rider benefit and driver impact before building a broader venue data operation.", { fill: NAVY, titleColor: ORANGE, bodyColor: WHITE, bodySize: 23 });
  addFooter(slide, true);
  notes(slide, "Strategy reconciliation.", ["Local evidence: synthesis/02-strategy-implications.md."]);
}

// 22 — Template section 4 appendix: idea test plan.
{
  const slide = newSlide();
  addHeader(slide, "Appendix · 4 · Research-led product ideas", "Three ideas, sequenced by evidence strength and operating risk");
  const rows = [
    ["P0", "Pre-arrival meeting note", "Flagged complex location; before arrival", "Calls/messages, dwell, location changes", "Added friction if over-triggered"],
    ["P1", "Guided stalled-pickup recovery", "Arrived state unresolved past threshold", "Resolution and unresolved-cancellation rate", "False triggers; driver compensation"],
    ["P2", "Venue-specific coordination info", "2–3 validated venues", "Calls/messages and dwell vs matched venues", "Stale rules; ownership cost"],
  ];
  const xs = [54, 124, 410, 720, 986];
  const ws = [70, 286, 310, 266, 164];
  ["#", "Idea", "Trigger / scope", "Primary measures", "Main risk"].forEach((header, i) => {
    addRect(slide, xs[i], 174, ws[i], 54, NAVY, WHITE, 1, 0);
    addText(slide, header, xs[i] + 8, 186, ws[i] - 16, 30, { fontSize: 17, bold: true, color: WHITE, align: "center" });
  });
  rows.forEach((row, r) => {
    const y = 228 + r * 124;
    row.forEach((cell, c) => {
      addRect(slide, xs[c], y, ws[c], 124, r % 2 === 0 ? WHITE : "#F8F9FB", PALE_GRAY, 1, 0);
      addText(slide, cell, xs[c] + 10, y + 14, ws[c] - 20, 96, { fontSize: c === 0 ? 28 : 17, bold: c <= 1, color: c === 0 ? ORANGE : TEXT, align: c === 0 ? "center" : "left", valign: "middle" });
    });
  });
  addRect(slide, 54, 618, 1096, 40, PALE_ORANGE, "none", 0, 4);
  addText(slide, "Sequence is a test order, not a committed build roadmap.", 74, 626, 1056, 24, { fontSize: 17, bold: true, color: NAVY, align: "center" });
  addFooter(slide, true);
  notes(slide, "Product test plan.", ["Local evidence: synthesis/04-product-ideas.md."]);
}

// 23 — Market sizing and evidence status.
{
  const slide = newSlide();
  addHeader(slide, "Appendix · Market research", "Market sizing evidence and gaps", "The framework is usable. The inputs are not yet strong enough for a numeric market claim.");
  const rows = [
    ["DEMAND AND SEGMENTS", "DIRECTIONAL", "24 of 51 recent users reported difficulty or uncertainty. Issue cases concentrate at airports, gated homes, malls, offices, and stations.", "Representative Hyderabad incidence is missing."],
    ["TAM / SAM / SOM", "FRAMEWORK ONLY", "TAM: Hyderabad Uber four-wheel pickups. SAM: pickups beginning at complex locations. SOM: eligible locations and riders reachable by the first test.", "Trip volume and affected-share inputs are missing."],
    ["GROWTH / CAGR", "NOT ESTIMATED", "Airport, metro, and railway volumes show exposure to complex locations. They are planning proxies, not a comparable feature-market time series.", "No defensible CAGR can be calculated."],
    ["COMPETITION / WTP / SATURATION", "MIXED", "Competitor patterns and alternatives are documented. Willingness to pay and market saturation were not studied.", "They do not block a small reliability test."],
  ];
  rows.forEach((row, index) => {
    const y = 174 + index * 104;
    addRect(slide, 54, y, 1096, 88, index % 2 === 0 ? WHITE : "#F8F9FB", PALE_GRAY, 1, 4);
    addText(slide, row[0], 74, y + 13, 228, 26, { fontSize: 16, bold: true, color: index === 0 ? ORANGE : NAVY });
    addText(slide, row[1], 74, y + 47, 228, 22, { fontSize: 13, bold: true, color: index === 1 ? TEAL : MUTED });
    addText(slide, row[2], 320, y + 12, 570, 62, { fontSize: 16, color: TEXT, valign: "middle" });
    addText(slide, row[3], 910, y + 12, 220, 62, { fontSize: 15, bold: true, color: MUTED, valign: "middle" });
  });
  addRect(slide, 54, 604, 1096, 52, PALE_ORANGE, "none", 0, 4);
  addText(slide, "Planning rule: use proxies to form a hypothesis, then test whether they predict real pickup difficulty.", 74, 614, 1056, 30, { fontSize: 17, bold: true, color: NAVY, align: "center" });
  addFooter(slide, true);
  notes(slide, "Market sizing evidence status.", ["Local evidence: research/desk-research-report.md, research/competitor-analysis.md, and Sanitized-Survey-Evidence.xlsx.", "No numeric TAM, SAM, SOM, CAGR, willingness-to-pay, or saturation claim is made without supporting inputs."]);
}

// 24 — Experiment readiness and signals.
{
  const slide = newSlide();
  addHeader(slide, "Appendix · Experiment design", "Experiment readiness and signals", "The first test needs a measurement plan before it needs a large build.");

  addRect(slide, 54, 174, 468, 382, WHITE, PALE_GRAY, 1, 6);
  addText(slide, "TEST READINESS", 78, 192, 420, 28, { fontSize: 17, bold: true, color: ORANGE });
  addText(slide, "A/B SAMPLE SIZE", 78, 240, 190, 24, { fontSize: 15, bold: true, color: NAVY });
  addText(slide, "Calculate N only after choosing the primary metric, baseline rate or variance, minimum detectable effect, confidence, power, and eligible traffic.", 78, 270, 416, 82, { fontSize: 17, color: TEXT });
  addRect(slide, 78, 365, 416, 1, PALE_GRAY);
  addText(slide, "MVP RULE", 78, 384, 190, 24, { fontSize: 15, bold: true, color: NAVY });
  addText(slide, "Test the P0 meeting note first. Add recovery or venue operations only if behavior and pickup outcomes improve.", 78, 414, 416, 62, { fontSize: 17, color: TEXT });
  addRect(slide, 78, 488, 416, 1, PALE_GRAY);
  addText(slide, "ADOPTION BLOCKER", 78, 505, 190, 24, { fontSize: 15, bold: true, color: NAVY });
  addText(slide, "Driver burden, false triggers, or compensation concerns can block a two-sided rollout.", 262, 501, 232, 45, { fontSize: 16, color: TEXT });

  addRect(slide, 554, 174, 596, 382, PALE_BLUE, "none", 0, 6);
  addText(slide, "SIGNALS TO WATCH", 578, 192, 548, 28, { fontSize: 17, bold: true, color: TEAL });
  const signals = [
    ["DEMAND", "Eligible complex pickups and measured issue incidence"],
    ["DISCOVERABILITY", "Prompt exposure, opening, and completion"],
    ["OUTCOME", "Calls or messages, arrived-to-start time, location changes, cancellations"],
    ["RETENTION", "Repeat use among eligible riders after the first useful experience"],
    ["COMPETITION", "Changes in pickup-note, venue-guidance, and recovery patterns"],
  ];
  signals.forEach((signal, index) => {
    const y = 238 + index * 58;
    addText(slide, signal[0], 578, y, 156, 26, { fontSize: 14, bold: true, color: NAVY });
    addText(slide, signal[1], 738, y - 2, 388, 40, { fontSize: 16, color: TEXT });
    if (index < signals.length - 1) addRect(slide, 578, y + 42, 548, 1, "#C9E7EA");
  });

  addRect(slide, 54, 582, 1096, 74, PALE_ORANGE, "none", 0, 6);
  addText(slide, "Pricing power is not an initial success measure for this reliability feature.\nFirst prove user value and marketplace safety.", 78, 590, 1048, 58, { fontSize: 17, bold: true, color: NAVY, align: "center", valign: "middle" });
  addFooter(slide, true);
  notes(slide, "Experiment readiness and signals.", ["Local evidence: synthesis/02-strategy-implications.md and synthesis/04-product-ideas.md.", "No A/B sample size is claimed because the required baseline, effect-size, confidence, power, and traffic inputs are not available."]);
}

// 25 — Limitations.
{
  const slide = newSlide();
  addHeader(slide, "Appendix · Evidence boundary", "What kind of evidence this is");
  addBulletList(slide, [
    "Convenience sample recruited through available networks; not representative of Hyderabad riders",
    "Online survey with interview-style prompts; 30 open-ended responses but no live probing, so qualitative depth is shallower than a moderated interview",
    "Four driver responses; two-sided product and marketplace conclusions remain premature",
    "Open prompts were optional and the schema changed during collection, so qualitative depth varies",
    "Twenty-nine of 62 responses came from other cities; they are comparison evidence, not a small side sample",
    "Consent was required in the interface but not stored as a separate backend field",
    "Multi-select location and action counts are mentions, not mutually exclusive people",
    "No reliable Hyderabad trip-volume or issue-rate denominator was found; no market-size figure is claimed",
  ], 72, 170, 1080, 454, { fontSize: 21, spaceAfterPoints: 8 });
  addFooter(slide, true);
  notes(slide, "Evidence limitations.", ["Local evidence: submission-requirements.md and Sanitized-Survey-Evidence.xlsx, Method & Limitations sheet."]);
}

// 26 — Sources and submission gate.
{
  const slide = newSlide();
  slide.background.fill = NAVY;
  addText(slide, "APPENDIX · SOURCE TRACEABILITY", 54, 28, 1160, 28, { fontSize: 13, bold: true, color: ORANGE });
  addText(slide, "Every claim traces to a source or an explicit limitation", 54, 66, 1100, 58, { fontSize: 34, bold: true, color: WHITE });
  addPanel(slide, 54, 154, 540, 176, "PRIMARY EVIDENCE", "Sanitized-Survey-Evidence.xlsx\nSurvey-Dashboard.png\nScreenshots/\nLive-URL.txt", { fill: "#243A60", line: "#3B5686", titleColor: ORANGE, bodyColor: WHITE, bodySize: 20 });
  addPanel(slide, 610, 154, 540, 176, "DESK AND COMPETITOR EVIDENCE", "Competitor-Analysis.md\nDesk-Research-Report.md\nSource-Register.md\nRaw internet workbook retained privately", { fill: "#243A60", line: "#3B5686", titleColor: TEAL, bodyColor: WHITE, bodySize: 20 });
  addPanel(slide, 54, 354, 540, 156, "SYNTHESIS", "01-survey-insights.md\n02-strategy-implications.md\n04-product-ideas.md", { fill: "#243A60", line: "#3B5686", titleColor: ORANGE, bodyColor: WHITE, bodySize: 20 });
  addPanel(slide, 610, 354, 540, 156, "HARD SUBMISSION GATE", "Video link is pending. Before submission: record presenter-visible video under 5 minutes, upload it, add the working link, and verify access.", { fill: PALE_ORANGE, line: PALE_ORANGE, titleColor: NAVY, bodyColor: NAVY, bodySize: 19 });
  addText(slide, "Evidence ZIP excludes participant contacts, raw API payloads, test rows, internal artifacts, and the raw internet workbook containing public creator contacts.", 54, 550, 1096, 42, { fontSize: 18, color: "#CFD8E7", align: "center" });
  addFooter(slide, true);
  notes(slide, "Source traceability and final submission gate.");
}

const scriptText = await fs.readFile(scriptPath, "utf8");
const slideScripts = new Map();
const sectionPattern = /## Slide (\d+) —[^\n]*\n\n([\s\S]*?)(?=\n## Slide |\n## Recording checklist)/g;
for (const match of scriptText.matchAll(sectionPattern)) {
  slideScripts.set(Number(match[1]), match[2].trim());
}
if (slideScripts.size !== 14) {
  throw new Error(`Expected 14 narration sections, found ${slideScripts.size}`);
}
for (let slideNumber = 1; slideNumber <= 14; slideNumber += 1) {
  const slide = presentation.slides.getItem(slideNumber - 1);
  const sources = noteSources.get(slideNumber) ?? [];
  const citationText = sources.length ? `\n\nSources:\n${sources.join("\n")}` : "";
  slide.speakerNotes.textFrame.setText(`Presenter script\n\n${slideScripts.get(slideNumber)}${citationText}`);
  slide.speakerNotes.setVisible(true);
}

const candidatePath = path.join(stagingDir, "find-my-ride-final-candidate-v19.pptx");
await (await PresentationFile.exportPptx(presentation)).save(candidatePath);

const result = await finalizePresentation({
  explicitTotalSlideCount: 26,
  requiredNativeTableOwnerSlides: [],
  requiredNativeChartOwnerSlides: [],
  workspaceDir,
  candidatePath,
  finalPath,
  pythonExecutable: runtimePython,
  integrityValidatorPath: path.join(skillDir, "container_tools/inspect_presentation_package_integrity.py"),
  layoutValidatorPath: path.join(skillDir, "container_tools/inspect_presentation_layout_geometry.py"),
  layoutArgs: [
    "--expected-slide-size-emu", "12192000,6858000",
    "--validate-bullet-geometry",
    "--validate-heading-fit",
  ],
  fontPolicy: {
    basis: "reference",
    families: [FONT],
    referencePath: sourceDeck,
    referenceSha256: "1e5aa99c12420130fae8ce5dca14a13becdd2ad5ee1b595a2c7b6de8d8c3b26e",
  },
  verifyArtifactToolImport: true,
  receiptPath: path.join(stagingDir, "Find_My_Ride_Final_Deck_v19.validation.json"),
});

console.log(JSON.stringify({ finalPath, result }, null, 2));
