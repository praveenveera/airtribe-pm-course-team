/** Backend for Basket Stories Pilot V2. Deploy as a Google Sheets Web App. */
var RESPONSE_SHEET = "Responses_V2";
var SURVEY_VERSION = "2.5";

var CATEGORY_CODES = [
  "fresh_produce", "dairy_bread_eggs", "staples_packaged_cooking",
  "snacks_sweets_beverages", "meat_seafood_frozen", "prepared_food_cafe",
  "beauty_personal_wellness", "household_home_kitchen", "baby_pet",
  "electronics_mobile", "fashion_toys_lifestyle", "other"
];

var RECEPTIVITY_CODES = ["added_item", "looked_no_add", "ignored", "found_pushy", "not_sure"];

var PLANNED_MISSIONS = ["stock_up", "regular_reorder", "meal_or_event"];

var RESPONSE_COLUMNS = [
  "responseId", "serverTimestamp", "clientTimestamp", "surveyVersion",
  "language", "consent", "eligible", "recentMethod", "recentMethodOther",
  "mission", "missionOther", "firstNeed", "firstNeedOther", "householdSize",
  "items", "spend", "categories", "categoriesOther", "expansionPattern",
  "considered", "consideredCategory", "consideredCategoryOther", "stopReason",
  "stopReasonOther", "basketStopWhy", "basketStopWhyOther",
  "thresholdNoticed", "thresholdAction", "thresholdActionOther",
  "zeptoWhy", "zeptoWhyOther", "zeptoCheckoutMoment", "altWhy", "altWhyOther",
  "consideredZepto", "altZeptoGap", "receptivity",
  "channelMix", "channelMixOther", "city", "ageBracket", "lifeStage",
  "rawJson"
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  var locked = false;
  try {
    lock.waitLock(10000);
    locked = true;

    var payload = JSON.parse(e.postData.contents || "{}");
    var research = payload.research || {};
    validateSubmission(research);

    var responseSheet = getOrCreateSheet(RESPONSE_SHEET, RESPONSE_COLUMNS);
    var serverTimestamp = new Date();
    var responseRow = RESPONSE_COLUMNS.map(function (key) {
      if (key === "serverTimestamp") return serverTimestamp;
      if (key === "rawJson") return JSON.stringify(research);
      return serializeCell(research[key]);
    });
    if (!hasResponseId(responseSheet, research.responseId)) responseSheet.appendRow(responseRow);

    return jsonOutput({ status: "ok", responseId: research.responseId });
  } catch (err) {
    return jsonOutput({ status: "error", message: err.message });
  } finally {
    if (locked) lock.releaseLock();
  }
}

/**
 * JSONP confirmation endpoint used because a static-site no-cors POST cannot read
 * the Apps Script response. The endpoint confirms that the response ID exists.
 */
function doGet(e) {
  var callback = String((e.parameter && e.parameter.callback) || "");
  if (!/^[A-Za-z_$][0-9A-Za-z_$\.]{0,80}$/.test(callback)) {
    return ContentService.createTextOutput("Invalid callback");
  }

  var responseId = String((e.parameter && e.parameter.responseId) || "");
  var found = false;
  if (responseId) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(RESPONSE_SHEET);
    found = hasResponseId(sheet, responseId);
  }

  var body = callback + "(" + JSON.stringify({ status: found ? "ok" : "pending", found: found }) + ");";
  return ContentService.createTextOutput(body).setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function validateSubmission(research) {
  var required = ["responseId", "clientTimestamp", "surveyVersion", "language", "consent", "eligible", "recentMethod"];
  required.forEach(function (key) {
    if (research[key] === undefined || research[key] === null || research[key] === "") {
      throw new Error("Missing required field: " + key);
    }
  });

  if (research.surveyVersion !== SURVEY_VERSION) throw new Error("Unsupported survey version");
  if (["en", "hi", "te"].indexOf(research.language) === -1) throw new Error("Unsupported survey language");
  if (research.consent !== true) throw new Error("Consent is required");

  if (research.eligible === true) {
    ["mission", "householdSize", "items", "spend", "categories", "expansionPattern", "considered", "thresholdNoticed", "receptivity", "channelMix", "ageBracket", "lifeStage"]
      .forEach(function (key) {
        if (research[key] === undefined || research[key] === null || research[key] === "" ||
            (Array.isArray(research[key]) && research[key].length === 0)) {
          throw new Error("Missing eligible-response field: " + key);
        }
      });

    var plannedMission = PLANNED_MISSIONS.indexOf(research.mission) !== -1;
    if (!plannedMission && !research.firstNeed) {
      throw new Error("Missing eligible-response field: firstNeed");
    }
    if (plannedMission && research.firstNeed) {
      throw new Error("firstNeed should not be asked for a planned mission");
    }

    if (research.considered === "yes" && (!research.consideredCategory || !research.stopReason)) {
      throw new Error("Missing considered-item detail");
    }
    var immediateCheckout = Array.isArray(research.expansionPattern) && research.expansionPattern.indexOf("immediate_checkout") !== -1;
    if (research.considered !== "yes" && immediateCheckout && !research.basketStopWhy) {
      throw new Error("Missing basket-stop reason");
    }
    if (research.firstNeed) validateCategoryCode(research.firstNeed, "firstNeed");
    if (!Array.isArray(research.categories)) throw new Error("categories must be an array");
    research.categories.forEach(function (code) { validateCategoryCode(code, "categories"); });
    if (research.considered === "yes") validateCategoryCode(research.consideredCategory, "consideredCategory");
    if (research.thresholdNoticed === "yes" && !research.thresholdAction) {
      throw new Error("Missing threshold action");
    }
    if (research.recentMethod === "zepto" && (!research.zeptoWhy || !String(research.zeptoCheckoutMoment || "").trim())) {
      throw new Error("Missing Zepto branch detail");
    }
    if (research.recentMethod !== "zepto" && (!research.altWhy || !research.consideredZepto)) {
      throw new Error("Missing alternative-method branch detail");
    }
    validateReceptivityCode(research.receptivity);

    [
      ["recentMethod", "recentMethodOther"], ["mission", "missionOther"],
      ["firstNeed", "firstNeedOther"], ["consideredCategory", "consideredCategoryOther"],
      ["stopReason", "stopReasonOther"], ["basketStopWhy", "basketStopWhyOther"],
      ["thresholdAction", "thresholdActionOther"],
      ["zeptoWhy", "zeptoWhyOther"], ["altWhy", "altWhyOther"], ["channelMix", "channelMixOther"]
    ].forEach(function (pair) {
      if (research[pair[0]] === "other" && !String(research[pair[1]] || "").trim()) {
        throw new Error("Missing Other detail for " + pair[0]);
      }
    });
    if (Array.isArray(research.categories) && research.categories.indexOf("other") !== -1 && !String(research.categoriesOther || "").trim()) {
      throw new Error("Missing Other detail for categories");
    }
  }
}

function validateCategoryCode(code, fieldName) {
  if (CATEGORY_CODES.indexOf(code) === -1) {
    throw new Error("Invalid category code for " + fieldName);
  }
}

function validateReceptivityCode(code) {
  if (RECEPTIVITY_CODES.indexOf(code) === -1) {
    throw new Error("Invalid receptivity code");
  }
}

function serializeCell(value) {
  if (value === undefined || value === null) return "";
  if (Array.isArray(value)) return JSON.stringify(value);
  return value;
}

function hasResponseId(sheet, responseId) {
  if (!sheet || sheet.getLastRow() <= 1) return false;
  return Boolean(sheet.getRange(2, 1, sheet.getLastRow() - 1, 1)
    .createTextFinder(responseId).matchEntireCell(true).findNext());
}

function getOrCreateSheet(name, columns) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(name);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(name);
    sheet.appendRow(columns);
    sheet.setFrozenRows(1);
    return sheet;
  }

  var actual = sheet.getRange(1, 1, 1, columns.length).getValues()[0];
  var mismatch = columns.some(function (column, index) { return actual[index] !== column; });
  if (mismatch || sheet.getLastColumn() !== columns.length) {
    throw new Error("Header mismatch in " + name + ". Create a clean V2 sheet or restore the expected headers.");
  }
  return sheet;
}

function jsonOutput(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}

function setupCheck() {
  getOrCreateSheet(RESPONSE_SHEET, RESPONSE_COLUMNS);
}
