import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const projectRoot = "/Users/praveenveera/Documents/work-offline/product/airtribe/projects/uber-find-my-ride";
const inputPath = path.join(projectRoot, "data/survey/normalized-data.tsv");
const outputDir = path.join(projectRoot, "v3/submission-ready/evidence/03-Anonymized-Responses");
const renderDir = path.join(projectRoot, "v3/.build/workbook-renders");
await fs.mkdir(outputDir, { recursive: true });
await fs.mkdir(renderDir, { recursive: true });

function parseTsv(text) {
  const lines = text.replace(/\r/g, "").trimEnd().split("\n");
  const headers = lines[0].split("\t");
  return lines.slice(1).map((line) => {
    const values = line.split("\t");
    return Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""]));
  });
}

const sourceRows = parseTsv(await fs.readFile(inputPath, "utf8"));
const rows = sourceRows.filter((row) => row["Response ID"] !== "R032");
if (sourceRows.length !== 63 || rows.length !== 62) {
  throw new Error(`Unexpected row counts: source=${sourceRows.length}, deduped=${rows.length}`);
}

const responseColumns = [
  "Response ID", "Submitted at", "Schema", "Language", "Role", "City group", "City detail",
  "Recent four-wheel", "Pickup difficulty", "Issue flag", "Main story", "Confusion start",
  "Actions and reasoning", "Frustration or missing help", "What happened", "Locations", "Actions",
  "Actions other", "Extra time", "What helped", "Repeated", "Additional comment",
  "Qualitative coverage", "In-scope flag", "Hyderabad flag", "Over five minutes flag",
  "Current issue with story", "All four open answers", "All four detailed answers",
];
const numericColumns = new Set([
  "Issue flag", "In-scope flag", "Hyderabad flag", "Over five minutes flag",
  "Current issue with story", "All four open answers", "All four detailed answers",
]);
const responseValues = rows.map((row) => responseColumns.map((column) => {
  const value = row[column] ?? "";
  return numericColumns.has(column) && value !== "" ? Number(value) : value;
}));
const countToken = (column, token) => rows.filter((row) =>
  (row[column] ?? "").split(",").map((value) => value.trim()).includes(token),
).length;

const workbook = Workbook.create();
const summary = workbook.worksheets.add("Summary");
const responses = workbook.worksheets.add("Anonymized Responses");
const method = workbook.worksheets.add("Method & Limitations");
const trace = workbook.worksheets.add("Insight Traceability");
const font = "Arial";
const navy = "#17223B";
const orange = "#FF6B00";
const teal = "#00B6C9";
const paleBlue = "#DDF6F9";
const paleOrange = "#FFE4CC";
const paleGray = "#F3F5F8";
const midGray = "#596178";
const white = "#FFFFFF";
const lastRow = rows.length + 1;

for (const sheet of [summary, responses, method, trace]) {
  sheet.showGridLines = false;
}

// Raw, contact-safe evidence tab.
responses.getRangeByIndexes(0, 0, responseValues.length + 1, responseColumns.length)
  .values = [responseColumns, ...responseValues];
responses.tables.add(`A1:AC${lastRow}`, true, "AnonymizedResponsesTable").style = "TableStyleMedium2";
responses.getRange(`A1:AC${lastRow}`).format.font = { name: font, size: 9, color: navy };
responses.getRange("A1:AC1").format = {
  fill: navy,
  font: { name: font, size: 9, bold: true, color: white },
  verticalAlignment: "center",
  horizontalAlignment: "center",
  wrapText: true,
};
responses.getRange(`A2:A${lastRow}`).format.font = { name: font, size: 9, bold: true, color: navy };
responses.getRange(`B2:B${lastRow}`).setNumberFormat("yyyy-mm-dd hh:mm");
responses.getRange(`A1:AC${lastRow}`).format.verticalAlignment = "top";
responses.getRange(`A1:AC${lastRow}`).format.autofitColumns();
responses.getRange("A:A").format.columnWidth = 12;
responses.getRange("B:B").format.columnWidth = 21;
responses.getRange("C:J").format.columnWidth = 15;
responses.getRange("K:N").format.columnWidth = 34;
responses.getRange("O:V").format.columnWidth = 22;
responses.getRange("W:AC").format.columnWidth = 18;
responses.getRange(`K2:V${lastRow}`).format.wrapText = true;
responses.freezePanes.freezeRows(1);
responses.freezePanes.freezeColumns(2);

// Summary dashboard.
summary.mergeCells("A2:Q2");
summary.getRange("A2").values = [["Uber Find My Ride — anonymized survey evidence"]];
summary.getRange("A2:Q2").format = {
  font: { name: font, size: 16, bold: true, color: navy },
  verticalAlignment: "center",
};
summary.getRange("A3:Q3").format.borders = { bottom: { style: "medium", color: orange } };
summary.getRange("A4:C4").values = [["Metric", "Result", "Evidence boundary"]];
summary.getRange("A5:A15").values = [
  ["Unique submissions"], ["Riders"], ["Drivers"], ["Recent four-wheel users"],
  ["Recent users reporting difficulty"], ["Difficulty rate among recent users"],
  ["Issue / uncertainty cases"], ["Repeated among issue cases"],
  ["Hyderabad submissions"], ["Other-city submissions"], ["Hyderabad recent difficulty"],
];
summary.getRange("B5:B15").formulas = [
  [`=COUNTA('Anonymized Responses'!A2:A${lastRow})`],
  [`=COUNTIF('Anonymized Responses'!E2:E${lastRow},"rider")`],
  [`=COUNTIF('Anonymized Responses'!E2:E${lastRow},"driver")`],
  [`=COUNTIF('Anonymized Responses'!H2:H${lastRow},"yes")`],
  [`=COUNTIFS('Anonymized Responses'!H2:H${lastRow},"yes",'Anonymized Responses'!J2:J${lastRow},1)`],
  ["=B9/B8"],
  [`=COUNTIF('Anonymized Responses'!J2:J${lastRow},1)`],
  [`=COUNTIFS('Anonymized Responses'!J2:J${lastRow},1,'Anonymized Responses'!U2:U${lastRow},"yes")`],
  [`=COUNTIF('Anonymized Responses'!F2:F${lastRow},"Hyderabad")`],
  [`=COUNTIF('Anonymized Responses'!F2:F${lastRow},"Other")`],
  [`=COUNTIFS('Anonymized Responses'!F2:F${lastRow},"Hyderabad",'Anonymized Responses'!H2:H${lastRow},"yes",'Anonymized Responses'!J2:J${lastRow},1)`],
];
summary.getRange("C5:C15").values = [
  ["63 valid submissions less one confirmed duplicate (R032)"],
  ["Directional convenience sample"], ["Two-sided evidence remains thin"],
  ["Reported recent four-wheel use"], ["24 of 51 recent users"],
  ["Sample share, not Hyderabad prevalence"], ["28 total issue cases"],
  ["23 of 28 issue cases"], ["Primary-city responses"], ["Comparison evidence"],
  ["11 of 27 Hyderabad recent users"],
];
summary.getRange("B10").format.numberFormat = "0.0%";

summary.getRange("E4:F4").values = [["Issue status", "Responses"]];
summary.getRange("E5:E6").values = [["Issue / unsure"], ["No difficulty"]];
summary.getRange("F5:F6").formulas = [
  [`=COUNTIF('Anonymized Responses'!J2:J${lastRow},1)`],
  [`=COUNTIF('Anonymized Responses'!J2:J${lastRow},0)`],
];

summary.getRange("E9:F9").values = [["Problem location", "Mentions"]];
summary.getRange("E10:E17").values = [
  ["Airport"], ["Residential / gated"], ["Shopping mall"], ["Office / tech campus"],
  ["Metro / railway"], ["Busy street"], ["Hotel / event"], ["Hospital"],
];
summary.getRange("F10:F17").values = [
  [countToken("Locations", "airport")],
  [countToken("Locations", "residential")],
  [countToken("Locations", "mall")],
  [countToken("Locations", "office")],
  [countToken("Locations", "station")],
  [countToken("Locations", "street")],
  [countToken("Locations", "hotel")],
  [countToken("Locations", "hospital")],
];

summary.getRange("H9:I9").values = [["Recovery action", "Mentions"]];
summary.getRange("H10:H15").values = [["Called"], ["Waited"], ["Moved"], ["Messaged"], ["Cancelled"], ["Other"]];
summary.getRange("I10:I15").values = [
  [countToken("Actions", "called")],
  [countToken("Actions", "waited")],
  [countToken("Actions", "moved")],
  [countToken("Actions", "messaged")],
  [countToken("Actions", "cancelled")],
  [countToken("Actions", "other")],
];

summary.getRange("A18:I18").values = [["Insight", "Evidence", "Direct quote", "Strength", "", "", "", "", ""]];
summary.mergeCells("A18:B18");
summary.mergeCells("C18:F18");
summary.mergeCells("G18:H18");
summary.getRange("A19:B23").merge(true);
summary.getRange("C19:F23").merge(true);
summary.getRange("G19:H23").merge(true);
summary.getRange("A19:A23").values = [
  ["Pickup difficulty is meaningful, not universal"],
  ["Calls/messages are the main recovery layer"],
  ["Complex locations concentrate coordination failures"],
  ["Arrived state can precede a successful meeting"],
  ["Driver-side conclusions remain premature"],
];
summary.getRange("C19:C23").values = [
  ["24 of 51 recent users reported difficulty"],
  ["20 of 28 issue cases said calls/messages helped"],
  ["Airport 10; residential 7; mall 6; office 6 mentions"],
  ["One detailed account reported almost 10 minutes to locate each other"],
  ["Only 4 of 62 responses came from drivers"],
];
summary.getRange("G19:G23").values = [
  ["“On the whole the experience is good. Exceptions will always be there.” — R030"],
  ["“We talked to each other.” — R063"],
  ["“No clarity.” — R063"],
  ["“The app says he has arrived, but almost 10 minutes to locate each other.” — R067"],
  ["No driver-generalization claim made"],
];
summary.getRange("I19:I23").values = [["Strong"], ["Strong"], ["Strong"], ["Moderate"], ["Limitation"]];

for (const headerRange of ["A4:C4", "E4:F4", "E9:F9", "H9:I9", "A18:I18"]) {
  summary.getRange(headerRange).format = {
    fill: navy,
    font: { name: font, size: 10, bold: true, color: white },
    verticalAlignment: "center",
    horizontalAlignment: "center",
    wrapText: true,
  };
}
summary.getRange("A5:C15").format.font = { name: font, size: 10, color: navy };
summary.getRange("E5:I17").format.font = { name: font, size: 10, color: navy };
summary.getRange("A19:I23").format.font = { name: font, size: 10, color: navy };
summary.getRange("A5:C15").format.borders = { insideHorizontal: { style: "thin", color: "#D8DDE7" } };
summary.getRange("A19:I23").format.borders = { insideHorizontal: { style: "thin", color: "#D8DDE7" } };
summary.getRange("B5:B15").format.font = { name: font, size: 11, bold: true, color: orange };
summary.getRange("I19:I23").format.fill = paleOrange;
summary.getRange("C5:C15").format.font = { name: font, size: 9, italic: true, color: midGray };
summary.getRange("G19:H23").format.wrapText = true;
summary.getRange("A19:F23").format.wrapText = true;
summary.getRange("A:Q").format.font = { name: font, size: 10, color: navy };
summary.getRange("A:A").format.columnWidth = 23;
summary.getRange("B:B").format.columnWidth = 13;
summary.getRange("C:C").format.columnWidth = 34;
summary.getRange("D:D").format.columnWidth = 3;
summary.getRange("E:E").format.columnWidth = 24;
summary.getRange("F:F").format.columnWidth = 12;
summary.getRange("G:G").format.columnWidth = 29;
summary.getRange("H:H").format.columnWidth = 20;
summary.getRange("I:I").format.columnWidth = 12;
summary.getRange("J:Q").format.columnWidth = 11;
summary.getRange("A19:I23").format.rowHeight = 42;

const issueChart = summary.charts.add("doughnut", summary.getRange("E4:F6"));
issueChart.title = "Issue split in the unique sample";
issueChart.titleTextStyle.typeface = font;
issueChart.titleTextStyle.fontSize = 12;
issueChart.legend = { position: "bottom", textStyle: { typeface: font, fontSize: 9 } };
issueChart.setPosition("K4", "Q15");
if (issueChart.series.items[0]) issueChart.series.items[0].fill = orange;

const locationChart = summary.charts.add("bar", summary.getRange("E9:F17"));
locationChart.title = "Problem locations among 28 issue cases";
locationChart.titleTextStyle.typeface = font;
locationChart.titleTextStyle.fontSize = 12;
locationChart.hasLegend = false;
locationChart.xAxis = { axisType: "textAxis", textStyle: { typeface: font, fontSize: 9 } };
locationChart.yAxis = { numberFormatCode: "0", numberFormatSourceLinked: false, textStyle: { typeface: font, fontSize: 9 } };
locationChart.setPosition("K17", "Q33");
if (locationChart.series.items[0]) locationChart.series.items[0].fill = teal;

// Method and limitations tab.
method.mergeCells("A2:F2");
method.getRange("A2").values = [["Survey method, app evidence, and limitations"]];
method.getRange("A2:F2").format.font = { name: font, size: 16, bold: true, color: navy };
method.getRange("A3:F3").format.borders = { bottom: { style: "medium", color: orange } };
method.getRange("A5:B5").values = [["Method item", "Documented detail"]];
method.getRange("A6:B15").values = [
  ["Research method", "Self-serve online survey with interview-style prompts; not synchronous interviews"],
  ["Live survey URL", "https://praveenveera.github.io/uber-pickup-survey/"],
  ["Languages", "English, Telugu, and Hindi interface"],
  ["Flow", "Up to 17 steps with rider and driver branches"],
  ["Qualitative prompts", "Four open-text or voice prompts on the difficulty path; the live UI labels them optional"],
  ["Structured tags", "Problem, location, action, delay, what helped, and recurrence"],
  ["Consent", "Consent-gated UI for anonymous quote use; consent was not stored as a separate backend field"],
  ["Data capture", "Timestamped submissions to Google Apps Script and Google Sheets"],
  ["Privacy", "Contact field and raw payload excluded from this workbook"],
  ["Deduplication", "R032 removed as a confirmed duplicate of R031: identical text, city, and 9-second interval"],
];
method.getRange("A18:B18").values = [["Limitation", "Submission treatment"]];
method.getRange("A19:B27").values = [
  ["Interview requirement not met", "State clearly; do not call survey records interviews"],
  ["Convenience sample", "Do not generalize to Hyderabad prevalence"],
  ["Driver evidence", "4 of 62 responses; no driver-wide product conclusion"],
  ["Other-city comparison", "29 of 62 responses; not a small side sample"],
  ["Asynchronous form", "No real-time probing of vague or contradictory answers"],
  ["Open prompts optional", "Qualitative depth varies; only a subset completed detailed narratives"],
  ["Schema changed during collection", "Earlier records have less qualitative detail"],
  ["No persisted consent flag", "Use the consent-screen screenshot as app evidence, not row-level consent proof"],
  ["Market sizing", "No reliable Hyderabad trip-volume or issue-rate denominator found"],
];
for (const headerRange of ["A5:B5", "A18:B18"]) {
  method.getRange(headerRange).format = {
    fill: navy,
    font: { name: font, size: 10, bold: true, color: white },
    horizontalAlignment: "center",
    verticalAlignment: "center",
  };
}
method.getRange("A6:B15").format.font = { name: font, size: 10, color: navy };
method.getRange("A19:B27").format.font = { name: font, size: 10, color: navy };
method.getRange("A6:A15").format.fill = paleBlue;
method.getRange("A19:A27").format.fill = paleOrange;
method.getRange("A5:B27").format.wrapText = true;
method.getRange("A:A").format.columnWidth = 28;
method.getRange("B:B").format.columnWidth = 92;
method.getRange("C:F").format.columnWidth = 3;
method.getRange("A6:B27").format.rowHeight = 38;

// Insight traceability tab.
trace.mergeCells("A2:E2");
trace.getRange("A2").values = [["Top 10 insights — claim, evidence, quote, and strength"]];
trace.getRange("A2:E2").format.font = { name: font, size: 16, bold: true, color: navy };
trace.getRange("A3:E3").format.borders = { bottom: { style: "medium", color: orange } };
trace.getRange("A5:E5").values = [["#", "Insight", "Evidence", "Anonymized quote", "Strength"]];
trace.getRange("A6:E15").values = [
  [1, "Difficulty is meaningful, not universal", "24/51 recent four-wheel users; 34/62 reported no issue", "“On the whole the experience is good. Exceptions will always be there.” — R030", "Strong, directional"],
  [2, "For affected respondents, the problem often recurs", "23/28 issue cases reported prior occurrence", "“During rains… many cancellations based on the drop point.” — R047", "Strong within subgroup"],
  [3, "Complex environments concentrate problems", "Airport 10; residential 7; mall 6; office 6 mentions", "“No clarity.” — R063", "Strong pattern"],
  [4, "Arrived does not mean rider and driver can meet", "Wrong-pin and similar-gate reports; one detailed cross-road case", "“The app says he has arrived, but almost 10 minutes to locate each other.” — R067", "Moderate"],
  [5, "Calling and messaging are the main recovery layer", "Calling 17; messaging 5; call/message helpful in 20/28 cases", "“We talked to each other.” — R063", "Strong"],
  [6, "The rider often absorbs recovery effort", "Waited 9; moved 8; driver moved helped 3", "“I thought he will come but he kept on keeping me waiting.” — R064", "Moderate–strong"],
  [7, "Failures can create material delay", "7/10 time-tagged issue records exceeded five minutes", "“At times it takes 10–15 minutes.” — R055", "Moderate"],
  [8, "Cancellation is multi-causal", "Location overlaps with destination, fare, payment, rain, and slow approach", "“Then based on the location he cancels.” — R047", "Moderate"],
  [9, "Some respondents found no effective recovery", "6/28 selected nothing helped", "“No one to seek redressal or help.” — R064", "Moderate"],
  [10, "Finding the ride includes vehicle identification", "One vehicle-number mismatch report", "“The number of the vehicle… is different.” — R018", "Weak edge case"],
];
trace.getRange("A5:E5").format = {
  fill: navy,
  font: { name: font, size: 10, bold: true, color: white },
  horizontalAlignment: "center",
  verticalAlignment: "center",
};
trace.getRange("A6:E15").format.font = { name: font, size: 10, color: navy };
trace.getRange("A6:E15").format.wrapText = true;
trace.getRange("E6:E15").format.fill = paleOrange;
trace.getRange("A:A").format.columnWidth = 6;
trace.getRange("B:B").format.columnWidth = 36;
trace.getRange("C:C").format.columnWidth = 42;
trace.getRange("D:D").format.columnWidth = 58;
trace.getRange("E:E").format.columnWidth = 22;
trace.getRange("A6:E15").format.rowHeight = 48;
trace.freezePanes.freezeRows(5);

summary.tabColor = navy;
responses.tabColor = teal;
method.tabColor = orange;
trace.tabColor = "#F4A340";

workbook.recalculate();

const summaryInspect = await workbook.inspect({ kind: "region", sheetId: "Summary", range: "A1:Q33", maxChars: 8000 });
await fs.writeFile(path.join(renderDir, "summary-inspect.ndjson"), summaryInspect.ndjson);
const formulaInspect = await workbook.inspect({ kind: "formula", sheetId: "Summary", range: "A1:Q33", maxChars: 8000, options: { maxResults: 100 } });
await fs.writeFile(path.join(renderDir, "formula-inspect.ndjson"), formulaInspect.ndjson);

for (const sheetName of ["Summary", "Anonymized Responses", "Method & Limitations", "Insight Traceability"]) {
  const rendered = await workbook.render({ sheetName, autoCrop: "all", scale: sheetName === "Anonymized Responses" ? 0.5 : 1, format: "png" });
  const safeName = sheetName.replaceAll(" ", "-").replaceAll("&", "and");
  await fs.writeFile(path.join(renderDir, `${safeName}.png`), new Uint8Array(await rendered.arrayBuffer()));
}

const outputPath = path.join(outputDir, "Sanitized-Survey-Evidence.xlsx");
await (await SpreadsheetFile.exportXlsx(workbook)).save(outputPath);
await fs.copyFile(path.join(renderDir, "Summary.png"), path.join(projectRoot, "v3/submission-ready/evidence/04-Analysis/Survey-Dashboard.png")).catch(async () => {
  await fs.mkdir(path.join(projectRoot, "v3/submission-ready/evidence/04-Analysis"), { recursive: true });
  await fs.copyFile(path.join(renderDir, "Summary.png"), path.join(projectRoot, "v3/submission-ready/evidence/04-Analysis/Survey-Dashboard.png"));
});

console.log(JSON.stringify({ outputPath, rows: rows.length, renderDir }, null, 2));
