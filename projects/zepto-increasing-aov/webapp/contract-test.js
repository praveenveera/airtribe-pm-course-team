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
    surveyVersion: "2.1",
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
    thresholdNoticed: "no",
    thresholdAction: "",
    thresholdActionOther: "",
    zeptoWhy: "delivery_speed",
    zeptoWhyOther: "",
    zeptoCheckoutMoment: "The urgent need was complete.",
    altWhy: "",
    altWhyOther: "",
    consideredZepto: "",
    follow: "yes",
  };
}

function post(research, followUp = {}) {
  const result = context.doPost({ postData: { contents: JSON.stringify({ research, followUp }) } });
  return JSON.parse(result.text);
}

const zepto = baseResearch("BS2-ZEPTO");
assert.equal(post(zepto, { contact: "pilot@example.com" }).status, "ok");

const responses = spreadsheet.getSheetByName("Responses_V2");
const followUps = spreadsheet.getSheetByName("FollowUp_V2");
assert.equal(JSON.stringify(responses.rows[0]), JSON.stringify(context.RESPONSE_COLUMNS));
assert.equal(JSON.stringify(followUps.rows[0]), JSON.stringify(context.FOLLOW_UP_COLUMNS));
assert.equal(responses.rows.length, 2);
assert.equal(followUps.rows.length, 2);
assert.equal(followUps.rows[1][2], "pilot@example.com");
assert.equal(responses.rows[1].includes("pilot@example.com"), false);
assert.equal(String(responses.rows[1][responses.rows[0].indexOf("rawJson")]).includes("pilot@example.com"), false);

assert.equal(post(zepto, { contact: "pilot@example.com" }).status, "ok");
assert.equal(responses.rows.length, 2, "duplicate research response was appended");
assert.equal(followUps.rows.length, 2, "duplicate follow-up contact was appended");

const nonZepto = baseResearch("BS2-ALT");
nonZepto.language = "hi";
nonZepto.recentMethod = "supermarket";
nonZepto.zeptoWhy = "";
nonZepto.zeptoCheckoutMoment = "";
nonZepto.altWhy = "larger_quantity_value";
nonZepto.consideredZepto = "no";
nonZepto.follow = "no";
assert.equal(post(nonZepto).status, "ok");

const ineligible = {
  responseId: "BS2-INELIGIBLE",
  clientTimestamp: "2026-09-22T00:00:00.000Z",
  surveyVersion: "2.1",
  language: "en",
  consent: true,
  eligible: false,
  recentMethod: "no_recent_purchase",
  follow: "no",
};
assert.equal(post(ineligible).status, "ok");

const invalidCategory = baseResearch("BS2-BAD-CATEGORY");
invalidCategory.firstNeed = "unknown_category";
assert.equal(post(invalidCategory).status, "error");

const status = context.doGet({ parameter: { responseId: "BS2-ZEPTO", callback: "confirmResult" } });
assert.match(status.text, /"found":true/);
assert.equal(responses.rows.length, 4);
assert.equal(followUps.rows.length, 2);

console.log("Basket Stories V2.1 capture contract: PASS");
