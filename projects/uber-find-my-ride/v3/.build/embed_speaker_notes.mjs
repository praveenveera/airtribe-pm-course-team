import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { FileBlob, PresentationFile } from "@oai/artifact-tool";

const projectRoot = "/Users/praveenveera/Documents/work-offline/product/airtribe/projects/uber-find-my-ride";
const workspaceDir = path.join(projectRoot, "v3");
const sourcePath = path.join(
  projectRoot,
  "v3/submission-ready/final/Find_My_Ride_Final_Deck_v3.pptx",
);
const scriptPath = path.join(
  projectRoot,
  "v3/submission-ready/final/VIDEO_SCRIPT_FINAL.md",
);
const finalPath = path.join(
  projectRoot,
  "v3/submission-ready/final/Find_My_Ride_Final_Deck_v4_with_notes.pptx",
);
const skillDir = "/Users/praveenveera/.codex/plugins/cache/openai-primary-runtime/presentations/26.909.12148/skills/presentations";
const runtimePython = "/Users/praveenveera/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3";

const { finalizePresentation } = await import(
  pathToFileURL(path.join(skillDir, "container_tools/artifact_tool_utils.mjs")).href,
);

const sourceText = await fs.readFile(scriptPath, "utf8");
const slideScripts = new Map();
const sectionPattern = /## Slide (\d+) —[^\n]*\n\n([\s\S]*?)(?=\n## Slide |\n## Recording checklist)/g;
for (const match of sourceText.matchAll(sectionPattern)) {
  slideScripts.set(Number(match[1]), match[2].trim());
}

if (slideScripts.size !== 10) {
  throw new Error(`Expected 10 narration sections, found ${slideScripts.size}`);
}

const sourceNotes = new Map([
  [1, ""],
  [2, [
    "Sources:",
    "Local evidence: data/survey/normalized-data.tsv; R032 removed as confirmed duplicate of R031.",
    "https://praveenveera.github.io/uber-pickup-survey/",
  ].join("\n")],
  [3, [
    "Sources:",
    "https://www.uber.com/global/en/r/airports/hyd/pickup/",
    "https://www.grab.com/inside-grab/stories/were-making-pickups-easier-with-video-guides-in-the-grab-app/",
    "https://help.lyft.com/hc/en-us/all/articles/360047353153",
    "https://support.google.com/waymo/answer/9696059?hl=en",
    "https://help.mygate.in/articles/138755-where-will-my-cab-pick-me-up-if-i-am-using-safe-pickup-mode",
    "https://www.htp.gov.in/road_rules.html",
    "https://www.indiacode.nic.in/indiacode/handle/123456789/22037?view_type=browse",
  ].join("\n")],
  [4, [
    "Sources:",
    "Local evidence: synthesis/01-survey-insights.md and synthesis/02-strategy-implications.md.",
  ].join("\n")],
  [5, [
    "Sources:",
    "Local evidence: v3/submission-ready/evidence/03-Anonymized-Responses/Sanitized-Survey-Evidence.xlsx.",
  ].join("\n")],
  [6, [
    "Sources:",
    "Local evidence: Sanitized-Survey-Evidence.xlsx, Summary and Anonymized Responses sheets. Multi-select counts are mentions, not unique people.",
  ].join("\n")],
  [7, [
    "Sources:",
    "Local evidence: synthesis/02-strategy-implications.md.",
  ].join("\n")],
  [8, [
    "Sources:",
    "Local evidence: R061 in normalized-data.tsv; 20 of 28 issue cases reported calls/messages as helpful.",
    "Competitor precedent: https://help.lyft.com/hc/en-us/all/articles/360047353153",
  ].join("\n")],
  [9, [
    "Sources:",
    "Local evidence: synthesis/04-product-ideas.md and Sanitized-Survey-Evidence.xlsx.",
  ].join("\n")],
  [10, [
    "Sources:",
    "Local evidence: submission-requirements.md and synthesis/*.md.",
  ].join("\n")],
]);

const presentation = await PresentationFile.importPptx(await FileBlob.load(sourcePath));
for (let slideNumber = 1; slideNumber <= 10; slideNumber += 1) {
  const slide = presentation.slides.getItem(slideNumber - 1);
  const narration = slideScripts.get(slideNumber);
  const sources = sourceNotes.get(slideNumber);
  slide.speakerNotes.textFrame.setText(
    ["Presenter script", narration, sources].filter(Boolean).join("\n\n"),
  );
  slide.speakerNotes.setVisible(true);
}

const stagingDir = path.join(workspaceDir, ".codex-finalizer-notes");
await fs.mkdir(stagingDir, { recursive: true });
const candidatePath = path.join(stagingDir, "find-my-ride-with-notes-candidate.pptx");
await (await PresentationFile.exportPptx(presentation)).save(candidatePath);

const result = await finalizePresentation({
  explicitTotalSlideCount: 19,
  requiredNativeTableOwnerSlides: [],
  requiredNativeChartOwnerSlides: [],
  workspaceDir,
  candidatePath,
  finalPath,
  pythonExecutable: runtimePython,
  integrityValidatorPath: path.join(
    skillDir,
    "container_tools/inspect_presentation_package_integrity.py",
  ),
  layoutValidatorPath: path.join(
    skillDir,
    "container_tools/inspect_presentation_layout_geometry.py",
  ),
  layoutArgs: [
    "--expected-slide-size-emu",
    "12192000,6858000",
    "--validate-bullet-geometry",
    "--validate-heading-fit",
  ],
  fontPolicy: {
    basis: "reference",
    families: ["Calibri"],
    referencePath: sourcePath,
    referenceSha256: "b5d774ee4d4b28c6ef898886c4efb99d687e7556bfd09a9ee0aa59edce148d22",
  },
  verifyArtifactToolImport: true,
  receiptPath: path.join(stagingDir, "Find_My_Ride_Final_Deck_v4_with_notes.validation.json"),
});

console.log(JSON.stringify({ finalPath, slidesWithNarration: slideScripts.size, result }, null, 2));
