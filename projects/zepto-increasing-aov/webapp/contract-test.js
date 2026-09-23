const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

class MockRange {
  constructor(sheet, row, column, rowCount, columnCount) {
    this.sheet = sheet;
    this.row = row;
    this.column = column;
    this.rowCount = rowCount;
    this.columnCount = columnCount;
  }
  getValues() {
    return Array.from({ length: this.rowCount }, (_, rowOffset) =>
      Array.from({ length: this.columnCount }, (_, columnOffset) =>
        (this.sheet.rows[this.row - 1 + rowOffset] || [])[this.column - 1 + columnOffset] || ""
      )
    );
  }
  createTextFinder(value) {
    return {
      matchEntireCell: () => ({
        findNext: () => this.sheet.rows.slice(this.row - 1, this.row - 1 + this.rowCount)
          .some((row) => String(row[this.column - 1]) === String(value)) ? {} : null,
      }),
    };
  }
}

class MockSheet {
  constructor(name) { this.name = name; this.rows = []; this.frozenRows = 0; }
  appendRow(row) { this.rows.push(row.slice()); }
  setFrozenRows(count) { this.frozenRows = count; }
  getLastRow() { return this.rows.length; }
  getLastColumn() { return this.rows.reduce((max, row) => Math.max(max, row.length), 0); }
  getRange(row, column, rowCount, columnCount) { return new MockRange(this, row, column, rowCount, columnCount); }
}

class MockSpreadsheet {
  constructor() { this.sheets = new Map(); }
  getSheetByName(name) { return this.sheets.get(name) || null; }
  insertSheet(name) { const sheet = new MockSheet(name); this.sheets.set(name, sheet); return sheet; }
}

const spreadsheet = new MockSpreadsheet();
const context = {
  Array, Boolean, Date, Error, JSON, Math, RegExp, String,
  LockService: { getScriptLock: () => ({ waitLock() {}, releaseLock() {} }) },
  SpreadsheetApp: { getActiveSpreadsheet: () => spreadsheet },
  ContentService: {
    MimeType: { JSON: "json", JAVASCRIPT: "javascript" },
    createTextOutput(text) { return { text, mimeType: "", setMimeType(type) { this.mimeType = type; return this; } }; },
  },
};

vm.createContext(context);
vm.runInContext(fs.readFileSync(__dirname + "/apps-script.gs", "utf8"), context);
context.setupCheck();

function baseResearch(responseId) {
  return {
    responseId,
    clientTimestamp: "2026-09-22T00:00:00.000Z",
    surveyVersion: "2.5",
    language: "en",
    consent: true,
    eligible: true,
    recentMethod: "zepto",
    recentMethodOther: "",
    mission: "urgent",
    missionOther: "",
    firstNeed: "dairy_bread_eggs",
    firstNeedOther: "",
    householdSize: "two",
    items: "two_three",
    spend: "200_399",
    categories: ["dairy_bread_eggs", "electronics_mobile"],
    categoriesOther: "",
    expansionPattern: ["immediate_checkout"],
    considered: "no",
    consideredCategory: "",
    consideredCategoryOther: "",
    stopReason: "",
    stopReasonOther: "",
    basketStopWhy: "need_complete",
    basketStopWhyOther: "",
    thresholdNoticed: "no",
    thresholdAction: "",
    thresholdActionOther: "",
    zeptoWhy: "delivery_speed",
    zeptoWhyOther: "",
    zeptoCheckoutMoment: "The urgent need was complete.",
    altWhy: "",
    altWhyOther: "",
    consideredZepto: "",
    altZeptoGap: "",
    receptivity: "added_item",
    channelMix: "same_app",
    channelMixOther: "",
    city: "Bengaluru",
    ageBracket: "25_34",
    lifeStage: "working_alone",
  };
}

function post(research) {
  const result = context.doPost({ postData: { contents: JSON.stringify({ research }) } });
  return JSON.parse(result.text);
}

const zepto = baseResearch("BS2-ZEPTO");
assert.equal(post(zepto).status, "ok");

const responses = spreadsheet.getSheetByName("Responses_V2");
assert.equal(JSON.stringify(responses.rows[0]), JSON.stringify(context.RESPONSE_COLUMNS));
assert.equal(responses.rows.length, 2);

assert.equal(post(zepto).status, "ok");
assert.equal(responses.rows.length, 2, "duplicate research response was appended");

const nonZepto = baseResearch("BS2-ALT");
nonZepto.language = "hi";
nonZepto.recentMethod = "supermarket";
nonZepto.zeptoWhy = "";
nonZepto.zeptoCheckoutMoment = "";
nonZepto.altWhy = "larger_quantity_value";
nonZepto.consideredZepto = "no";
nonZepto.altZeptoGap = "अगर कीमत कम होती तो मैं Zepto इस्तेमाल करता।";
nonZepto.receptivity = "looked_no_add";
assert.equal(post(nonZepto).status, "ok");

const ineligible = {
  responseId: "BS2-INELIGIBLE",
  clientTimestamp: "2026-09-22T00:00:00.000Z",
  surveyVersion: "2.5",
  language: "en",
  consent: true,
  eligible: false,
  recentMethod: "no_recent_purchase",
};
assert.equal(post(ineligible).status, "ok");

const invalidCategory = baseResearch("BS2-BAD-CATEGORY");
invalidCategory.firstNeed = "unknown_category";
assert.equal(post(invalidCategory).status, "error");

const invalidReceptivity = baseResearch("BS2-BAD-RECEPTIVITY");
invalidReceptivity.receptivity = "unknown_reaction";
assert.equal(post(invalidReceptivity).status, "error");

const missingBasketStopWhy = baseResearch("BS2-MISSING-STOP-WHY");
missingBasketStopWhy.basketStopWhy = "";
assert.equal(post(missingBasketStopWhy).status, "error");

const plannedCheckout = baseResearch("BS2-PLANNED-CHECKOUT");
plannedCheckout.expansionPattern = ["planned_items"];
plannedCheckout.basketStopWhy = "";
assert.equal(post(plannedCheckout).status, "ok", "basketStopWhy should not be required without immediate_checkout");

const plannedMissionNoFirstNeed = baseResearch("BS2-PLANNED-MISSION");
plannedMissionNoFirstNeed.mission = "stock_up";
plannedMissionNoFirstNeed.firstNeed = "";
plannedMissionNoFirstNeed.firstNeedOther = "";
assert.equal(post(plannedMissionNoFirstNeed).status, "ok", "firstNeed should not be required for a planned mission");

const emergentMissionMissingFirstNeed = baseResearch("BS2-EMERGENT-MISSING-FIRSTNEED");
emergentMissionMissingFirstNeed.firstNeed = "";
assert.equal(post(emergentMissionMissingFirstNeed).status, "error", "firstNeed should still be required for a non-planned mission");

const plannedMissionWithFirstNeed = baseResearch("BS2-PLANNED-WITH-FIRSTNEED");
plannedMissionWithFirstNeed.mission = "stock_up";
assert.equal(post(plannedMissionWithFirstNeed).status, "error", "firstNeed should be rejected when sent for a planned mission");

const noCity = baseResearch("BS2-NO-CITY");
noCity.city = "";
assert.equal(post(noCity).status, "ok", "city should be optional free text, not required");

const status = context.doGet({ parameter: { responseId: "BS2-ZEPTO", callback: "confirmResult" } });
assert.match(status.text, /"found":true/);
assert.equal(responses.rows.length, 7);

console.log("Basket Stories V2.5 capture contract: PASS");
