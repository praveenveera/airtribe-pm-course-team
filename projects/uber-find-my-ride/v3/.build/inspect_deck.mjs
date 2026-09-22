import { FileBlob, PresentationFile } from "@oai/artifact-tool";

const sourcePath = "/Users/praveenveera/Documents/work-offline/product/airtribe/projects/uber-find-my-ride/v3/submission/Find_My_Ride_v3_Recording_Deck.pptx";
const presentation = await PresentationFile.importPptx(await FileBlob.load(sourcePath));
const snapshot = await presentation.inspect({
  kind: "slide,textbox,shape,image,table,chart,notes,layout",
  maxChars: 50000,
});
console.log(snapshot.ndjson);
