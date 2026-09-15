const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333 x 7.5
const W = 13.333, H = 7.5;
const M = 0.7; // outer margin

// ---- palette — light throughout ----
const INK = "1F1620";        // near-black plum — all body/heading text
const INK_SOFT = "6E5E66";   // secondary text, hairline-adjacent strokes
const BG_LIGHT = "FAF5F3";   // content slides
const BOOKEND = "F1E6E3";    // title / divider / close — a deeper rose tint, still light
const SURFACE = "FFFFFF";
const SUNK = "F1E6E3";
const HAIRLINE = "E4D5D2";
const BERRY = "A81E48";      // accent — weak / P0 / emphasis / eyebrows
const BERRY_SOFT = "F7E1E8";
const TEAL = "2F6F5E";       // good / strong
const TEAL_SOFT = "E1EEEA";
const CREAM = "FFFFFF";      // text on solid BERRY/INK fills (pills, dots) — theme-independent

const HEAD = "Cambria";
const BODY = "Calibri";

// ---- helpers ----
function bg(slide, color) {
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: W, h: H, fill: { color }, line: { type: "none" } });
}

function footer(slide, label, num) {
  slide.addText(label, {
    x: M, y: H - 0.5, w: 6, h: 0.35, fontFace: BODY, fontSize: 9.5, color: INK_SOFT,
    isTextBox: true, margin: 0,
  });
  slide.addText(String(num), {
    x: W - M - 1, y: H - 0.5, w: 1, h: 0.35, fontFace: BODY, fontSize: 9.5, color: INK_SOFT,
    align: "right", isTextBox: true, margin: 0,
  });
}

function eyebrowTitle(slide, eyebrow, title, opts) {
  opts = opts || {};
  slide.addText(eyebrow, {
    x: M, y: 0.55, w: 11.9, h: 0.35, fontFace: BODY, fontSize: 12, bold: true,
    color: BERRY, charSpacing: 2, isTextBox: true, margin: 0,
  });
  slide.addText(title, {
    x: M, y: 0.9, w: 11.9, h: opts.h || 0.7, fontFace: HEAD, bold: true, fontSize: opts.size || 28, color: INK,
    isTextBox: true, margin: 0,
  });
}

function pill(slide, { x, y, w, h, text, fill, textColor }) {
  slide.addShape(pres.ShapeType.roundRect, {
    x, y, w, h, rectRadius: h / 2, fill: { color: fill }, line: { type: "none" },
  });
  slide.addText(text, {
    x, y, w, h, fontFace: BODY, fontSize: 10.5, bold: true, color: textColor,
    align: "center", valign: "middle", isTextBox: true, margin: 0, charSpacing: 1,
  });
}

function cardBox(slide, { x, y, w, h, fill }) {
  slide.addShape(pres.ShapeType.roundRect, {
    x, y, w, h, rectRadius: 0.12, fill: { color: fill || SUNK }, line: { type: "none" },
    shadow: { type: "outer", color: "1F1620", opacity: 0.10, blur: 10, offset: 3, angle: 90 },
  });
}

// the strong/weak curve motif — used big (thesis) and mini (title/close), always on light bg now
function addCurve(slide, { x, y, w, h, big }) {
  const xs = [x, x + w * 0.333, x + w * 0.667, x + w];
  const strongY = big ? y + 0.45 : y + h * 0.10;
  const weakY = big ? y + 2.35 : y + h * 0.90;
  const ys = [strongY, weakY, strongY, weakY];
  const colors = [TEAL, BERRY, TEAL, BERRY];
  const stageNames = ["Discover", "Decide", "Buy", "Return"];
  const stateLabels = ["STRONG", "WEAK", "STRONG", "WEAK"];
  const r = big ? 0.11 : 0.045;
  const lineColor = INK_SOFT;

  for (let i = 0; i < 3; i++) {
    const x1 = xs[i], y1 = ys[i], x2 = xs[i + 1], y2 = ys[i + 1];
    slide.addShape(pres.ShapeType.line, {
      x: Math.min(x1, x2), y: Math.min(y1, y2),
      w: Math.abs(x2 - x1), h: Math.abs(y2 - y1) || 0.001,
      line: { color: lineColor, width: big ? 2.25 : 1.25 },
      flipV: y1 > y2,
    });
  }
  for (let i = 0; i < 4; i++) {
    slide.addShape(pres.ShapeType.ellipse, {
      x: xs[i] - r, y: ys[i] - r, w: r * 2, h: r * 2,
      fill: { color: colors[i] }, line: { type: "none" },
    });
    if (big) {
      const isStrong = i % 2 === 0;
      slide.addText(stateLabels[i], {
        x: xs[i] - 0.65, y: isStrong ? strongY - 0.60 : weakY + 0.20, w: 1.3, h: 0.3,
        fontFace: BODY, fontSize: 11, bold: true, color: colors[i], align: "center",
        charSpacing: 1, isTextBox: true, margin: 0,
      });
      slide.addText(stageNames[i], {
        x: xs[i] - 0.9, y: weakY + 0.66, w: 1.8, h: 0.4,
        fontFace: HEAD, fontSize: 16, bold: true, color: INK, align: "center",
        isTextBox: true, margin: 0,
      });
    }
  }
}

// generic "row list" used by Recommendations (core+backup) and journey step slides
function rowList(slide, { x, y, w, rows, rowH }) {
  rows.forEach((row, i) => {
    const ry = y + i * rowH;
    if (i > 0) {
      slide.addShape(pres.ShapeType.line, { x, y: ry, w, h: 0.001, line: { color: HAIRLINE, width: 1 } });
    }
    const dotSize = 0.5;
    const dotY = ry + Math.max(0.14, (rowH - dotSize) / 2 - 0.05);
    slide.addShape(pres.ShapeType.ellipse, { x, y: dotY, w: dotSize, h: dotSize, fill: { color: row.dotFill }, line: { type: "none" } });
    slide.addText(row.dotText, {
      x, y: dotY, w: dotSize, h: dotSize, fontFace: BODY, bold: true, fontSize: 11.5,
      color: row.dotTextColor || CREAM, align: "center", valign: "middle", isTextBox: true, margin: 0,
    });
    slide.addText(row.title, {
      x: x + 0.75, y: ry + 0.06, w: w - 0.75, h: 0.36, fontFace: HEAD, bold: true, fontSize: 14.5, color: INK,
      isTextBox: true, margin: 0,
    });
    slide.addText(row.desc, {
      x: x + 0.75, y: ry + 0.42, w: w - 0.75, h: rowH - 0.48, fontFace: BODY, fontSize: 11.5, color: INK_SOFT,
      isTextBox: true, margin: 0, valign: "top", lineSpacingMultiple: 1.12,
    });
  });
}

// journey backup-detail slide
function journeySlide(num, { eyebrow, title, steps, read, readLabel }) {
  const s = pres.addSlide();
  bg(s, BG_LIGHT);
  eyebrowTitle(s, eyebrow, title, { size: 25, h: 0.6 });

  const listY = 1.75, listBottom = 5.65, cardY = 5.82, cardH = 1.0;
  const rowH = (listBottom - listY) / steps.length;
  const rows = steps.map((st, i) => ({
    dotFill: st.good ? TEAL : BERRY,
    dotText: String(i + 1),
    title: st.what,
    desc: [
      { text: st.feel.toUpperCase() + "   ", options: { bold: true, color: st.good ? TEAL : BERRY, fontSize: 10, charSpacing: 1 } },
      { text: st.detail, options: { color: INK_SOFT, fontSize: 11.5 } },
    ],
  }));
  rowList(s, { x: M, y: listY, w: 11.93, rows, rowH });

  cardBox(s, { x: M, y: cardY, w: 11.93, h: cardH, fill: SUNK });
  s.addText([
    { text: (readLabel || "My read") + "   ", options: { bold: true, color: BERRY, fontSize: 11, charSpacing: 1 } },
    { text: read, options: { color: INK, fontSize: 12.5 } },
  ], {
    x: M + 0.3, y: cardY, w: 11.33, h: cardH, fontFace: BODY,
    isTextBox: true, margin: 0, valign: "middle", lineSpacingMultiple: 1.15,
  });

  footer(s, "Nykaa UX Analysis — Appendix", num);
  return s;
}

// =====================================================================
// SLIDE 1 — Title
// =====================================================================
{
  const s = pres.addSlide();
  bg(s, BOOKEND);
  addCurve(s, { x: 10.3, y: 5.55, w: 2.05, h: 1.05, big: false });

  s.addText("NYKAA  ·  UX ANALYSIS", {
    x: M, y: 1.15, w: 8, h: 0.4, fontFace: BODY, fontSize: 13, bold: true,
    color: BERRY, charSpacing: 2, isTextBox: true, margin: 0,
  });
  s.addText(
    [
      { text: "Nykaa", options: { breakLine: true } },
      { text: "User Experience Analysis", options: {} },
    ],
    {
      x: M, y: 2.35, w: 11, h: 2.1, fontFace: HEAD, bold: true, fontSize: 46,
      color: INK, align: "left", isTextBox: true, margin: 0, lineSpacingMultiple: 1.05,
    }
  );
  s.addText("Five goals. Two real interviews. One website.", {
    x: M, y: 4.55, w: 9.5, h: 0.5, fontFace: BODY, italic: true, fontSize: 19,
    color: BERRY, isTextBox: true, margin: 0,
  });
  s.addText("Praveen Veera   ·   Airtribe — AI-First Product Management   ·   September 2026", {
    x: M, y: 6.55, w: 10, h: 0.4, fontFace: BODY, fontSize: 12.5, color: INK_SOFT,
    isTextBox: true, margin: 0,
  });
  s.addNotes(
    "0:00–0:20\n\n" +
    "\"Hi, I'm Praveen. This is my Nykaa user-experience analysis for the Airtribe AI-First PM course.\n\n" +
    "Here's how I approached it — five real shopping goals on the Nykaa desktop website, back to back, marking every step as smooth, confusing, slow, or frustrating. " +
    "Then two honest conversations with people outside product and design.\""
  );
}

// =====================================================================
// SLIDE 2 — Agenda / how to use this deck
// =====================================================================
{
  const s = pres.addSlide();
  bg(s, BG_LIGHT);
  eyebrowTitle(s, "HOW TO USE THIS DECK", "The 5-minute story, plus everything behind it");

  cardBox(s, { x: M, y: 1.75, w: 5.75, h: 4.85, fill: SURFACE });
  s.addText("THE STORY  ·  slides 3–8", {
    x: M + 0.4, y: 2.05, w: 5.1, h: 0.4, fontFace: BODY, bold: true, fontSize: 12.5, color: TEAL, charSpacing: 1,
    isTextBox: true, margin: 0,
  });
  const core = ["The finding, in one line", "Five journeys, at a glance", "Three features, three verdicts", "What two real people said", "What I'd fix first", "Close"];
  s.addText(core.map((t, i) => ({ text: `${i + 1}. ${t}`, options: { breakLine: i < core.length - 1 } })), {
    x: M + 0.4, y: 2.55, w: 5.1, h: 3.9, fontFace: HEAD, fontSize: 16.5, color: INK,
    isTextBox: true, margin: 0, lineSpacingMultiple: 1.55, valign: "top",
  });

  cardBox(s, { x: 6.85, y: 1.75, w: 5.78, h: 4.85, fill: SURFACE });
  s.addText("APPENDIX  ·  slides 9–18", {
    x: 7.25, y: 2.05, w: 5.1, h: 0.4, fontFace: BODY, bold: true, fontSize: 12.5, color: BERRY, charSpacing: 1,
    isTextBox: true, margin: 0,
  });
  const appendix = ["How I tested this (methodology)", "Journey A — full detail", "Journey B — full detail", "Journey C — full detail", "Journey D — full detail", "Journey E — full detail", "Evidence — real screenshots", "All recommendations, with metrics", "Limitations, in full"];
  s.addText(appendix.map((t, i) => ({ text: `${i + 1}. ${t}`, options: { breakLine: i < appendix.length - 1 } })), {
    x: 7.25, y: 2.55, w: 5.1, h: 3.9, fontFace: HEAD, fontSize: 13.5, color: INK,
    isTextBox: true, margin: 0, lineSpacingMultiple: 1.28, valign: "top",
  });

  footer(s, "Nykaa UX Analysis", 2);
  s.addNotes(
    "0:20–0:30\n\n" +
    "\"Quick map before I start: what comes next is the five-minute story. Everything past the appendix divider goes into the same depth as my written report, in case anyone wants to go further.\"\n\n" +
    "(Click through to slide 3 as you say this — don't dwell.)"
  );
}

// =====================================================================
// SLIDE 3 — The thesis
// =====================================================================
{
  const s = pres.addSlide();
  bg(s, BG_LIGHT);
  eyebrowTitle(s, "THE FINDING IN ONE LINE", "Strong at the ends. Weak in the middle.", { size: 34 });

  addCurve(s, { x: 1.7, y: 2.3, w: 10.0, h: 2.55, big: true });

  cardBox(s, { x: M, y: 6.05, w: 11.93, h: 1.0, fill: SURFACE });
  const notes = [
    "696 results, ads up to ₹6,600 on a specific search",
    "Filters work once used, but nothing suggests the fit",
    "Bag + checkout: coupons, points, clear pricing",
    "Logged-in home = logged-out home, even on old accounts",
  ];
  const colW = 11.93 / 4;
  notes.forEach((t, i) => {
    s.addText(t, {
      x: M + 0.25 + i * colW, y: 6.2, w: colW - 0.3, h: 0.7,
      fontFace: BODY, fontSize: 11, color: INK_SOFT, isTextBox: true, margin: 0, valign: "top",
    });
  });

  footer(s, "Nykaa UX Analysis", 3);
  s.addNotes(
    "0:30–1:00\n\n" +
    "\"Here's my finding, in one line: Nykaa is strong at the start, when you're browsing and discovering, and strong at the end, in the bag and at checkout. " +
    "Where it gets weak is the middle — turning a specific need into a confident choice.\n\n" +
    "The clearest example: I searched for a moisturizer for dry, sensitive skin, under 800 rupees. I got 696 results back, and the very first slot was an ad — for a set costing four to eight times my budget.\""
  );
}

// =====================================================================
// SLIDE 4 — Five journeys (overview)
// =====================================================================
{
  const s = pres.addSlide();
  bg(s, BG_LIGHT);
  eyebrowTitle(s, "FIVE GOALS, ONE WEBSITE", "What worked, what got in the way");

  const rows = [
    ["Moisturizer ≤₹800", "Rich cards; filters cut 696 → 178; clean checkout", "696 results; a ₹6,600 ad on top of a budget search"],
    ["Luxury gift set", "91 curated sets; “Most Gifted” proof", "Delivery date & gift wrap only shown deep in checkout"],
    ["First lipstick", "Huge social proof — one product at 1.4M reviews", "24–30 shades per product, no shade help"],
    ["Logged-in visit (5-yr account)", "Full order history, reward points in the cart", "No reorder button anywhere; home = logged-out home"],
    ["Casual browse", "Lively, easy to wander, good for ideas", "Everything shouts “Shop Now” — no calm mode"],
  ];

  const tx = M, ty = 1.7, tw = 11.93;
  const c0 = 2.55, c1 = 4.65, c2 = tw - 2.55 - 4.65;

  s.addTable(
    [
      [
        { text: "GOAL", options: { bold: true, color: CREAM, fill: { color: INK }, fontSize: 11.5 } },
        { text: "SMOOTH", options: { bold: true, color: CREAM, fill: { color: INK }, fontSize: 11.5 } },
        { text: "STUCK", options: { bold: true, color: CREAM, fill: { color: INK }, fontSize: 11.5 } },
      ],
      ...rows.map(([j, sm, st], i) => [
        { text: j, options: { bold: true, fontFace: HEAD, fontSize: 13, color: INK, fill: { color: i % 2 ? SURFACE : SUNK } } },
        { text: sm, options: { fontSize: 12, color: TEAL, fill: { color: i % 2 ? SURFACE : SUNK } } },
        { text: st, options: { fontSize: 12, color: BERRY, fill: { color: i % 2 ? SURFACE : SUNK } } },
      ]),
    ],
    {
      x: tx, y: ty, w: tw,
      colW: [c0, c1, c2],
      fontFace: BODY,
      border: { type: "solid", color: HAIRLINE, pt: 0.75 },
      autoPage: false,
      valign: "middle",
      margin: [14, 12, 14, 12],
    }
  );

  s.addText("Full step-by-step for every journey, including the logged-in spot-check → appendix, slides 11–15.", {
    x: M, y: 6.85, w: 11.93, h: 0.35, fontFace: BODY, italic: true, fontSize: 11, color: INK_SOFT,
    isTextBox: true, margin: 0,
  });

  footer(s, "Nykaa UX Analysis", 4);
  s.addNotes(
    "1:00–2:20\n\n" +
    "\"Let me walk through the five journeys quickly.\n\n" +
    "First, the moisturizer search: great product cards, and filters that genuinely work once you use them — but still 696 results, and ads as high as 6,600 rupees kept showing up on top, even after I'd filtered by price.\n\n" +
    "Second, a gift set: 91 curated results, felt like a real shop. The catch is, delivery date and gift wrap only show up deep in checkout, after I've already picked something.\n\n" +
    "Third, a first lipstick: one point four million reviews on a single product, and zero help actually picking a shade.\n\n" +
    "Fourth, I logged into an account with five years of order history to see if that changes anything. It doesn't — full order history, still no reorder button anywhere, home page identical to a stranger's. I even reran Journey A's exact search on that account to check — identical results, down to the review counts.\n\n" +
    "And fifth, just browsing, no goal at all — genuinely pleasant. Which is exactly the point: that's the one visitor Nykaa's home page is actually built for.\"\n\n" +
    "How to say this: five short beats, not one list to memorize — breathe between each. \"First… Second… Third… Fourth… And fifth…\" is the scaffolding; the rest can drift from this wording without losing anything."
  );
}

// =====================================================================
// SLIDE 5 — Three features
// =====================================================================
{
  const s = pres.addSlide();
  bg(s, BG_LIGHT);
  eyebrowTitle(s, "THREE FEATURES, THREE VERDICTS", "Where the product helps — and doesn’t");

  const cw = 3.77, gap = 0.3, cy = 1.9, ch = 4.55;
  const cols = [M, M + cw + gap, M + 2 * (cw + gap)];

  const feats = [
    {
      badge: "GOOD", badgeFill: TEAL, badgeText: CREAM,
      title: "Product cards",
      body: "Photo, price, offer price, rating, review count and a fit badge in one glance. You can shortlist without opening a single product.",
    },
    {
      badge: "GOOD IDEA, BADLY USED", badgeFill: BERRY_SOFT, badgeText: BERRY,
      title: "Beauty filters",
      body: "Skin type, concern, ingredient — the right model, and it works. But nothing pre-applies or suggests the fit, and mobile guests hit a login wall first.",
    },
    {
      badge: "BAD", badgeFill: BERRY, badgeText: CREAM,
      title: "Logged-in home",
      body: "Byte-for-byte the same as logged-out — even on a five-year account. No “buy again,” no recently viewed, nothing personal.",
    },
  ];

  feats.forEach((f, i) => {
    const x = cols[i];
    cardBox(s, { x, y: cy, w: cw, h: ch, fill: SURFACE });
    pill(s, { x: x + 0.3, y: cy + 0.32, w: f.badge.length > 10 ? cw - 0.6 : 1.7, h: 0.4, text: f.badge, fill: f.badgeFill, textColor: f.badgeText });
    s.addText(f.title, {
      x: x + 0.3, y: cy + 0.98, w: cw - 0.6, h: 0.6, fontFace: HEAD, bold: true, fontSize: 21, color: INK,
      isTextBox: true, margin: 0,
    });
    s.addText(f.body, {
      x: x + 0.3, y: cy + 1.68, w: cw - 0.6, h: ch - 2.0, fontFace: BODY, fontSize: 13.5, color: INK_SOFT,
      isTextBox: true, margin: 0, valign: "top", lineSpacingMultiple: 1.18,
    });
  });

  footer(s, "Nykaa UX Analysis", 5);
  s.addNotes(
    "2:20–2:55\n\n" +
    "\"Now, three features, and my quick take on each.\n\n" +
    "Product cards — good. Everything I need to shortlist a product, in one glance.\n\n" +
    "Beauty filters — good idea, badly used. Skin type and concern match how people actually shop for this, and the filters work. But nothing ever suggests the obvious combination, and mobile guests hit a login wall before they can even try.\n\n" +
    "Logged-in home page — bad. Identical to logged out, even on an account with five years of history.\""
  );
}

// =====================================================================
// SLIDE 6 — Interviews
// =====================================================================
{
  const s = pres.addSlide();
  bg(s, BG_LIGHT);
  eyebrowTitle(s, "TWO CONVERSATIONS", "Neither person doubted the product");

  const cw = 5.77, gap = 0.4, cy = 1.85, ch = 3.15;
  const cols = [M, M + cw + gap];
  const people = [
    {
      name: "Person 1 — my wife",
      sub: "Shops less often",
      like: "Trusts Nykaa more than Amazon for beauty — products always arrive in good condition, and she doesn’t worry about counterfeits.",
      dislike: "Delivery dates slip with no warning. Delivery partners have marked “customer not home” with no call ever made.",
    },
    {
      name: "Person 2 — my sister",
      sub: "Shops most often",
      like: "No complaints about the products themselves — same theme: the quality is trusted.",
      dislike: "Customer support, and the app mislabelling orders — items marked “cancelled” or “returned” when they weren’t.",
    },
  ];

  people.forEach((p, i) => {
    const x = cols[i];
    cardBox(s, { x, y: cy, w: cw, h: ch, fill: SURFACE });
    s.addText(p.name, {
      x: x + 0.35, y: cy + 0.26, w: cw - 0.7, h: 0.32, fontFace: HEAD, bold: true, fontSize: 18, color: INK,
      isTextBox: true, margin: 0,
    });
    s.addText(p.sub, {
      x: x + 0.35, y: cy + 0.58, w: cw - 0.7, h: 0.25, fontFace: BODY, italic: true, fontSize: 11, color: BERRY,
      isTextBox: true, margin: 0,
    });
    s.addText([
      { text: "LIKES   ", options: { bold: true, color: TEAL, fontSize: 10.5, charSpacing: 1 } },
      { text: p.like, options: { color: INK_SOFT, fontSize: 12.5 } },
    ], {
      x: x + 0.35, y: cy + 0.95, w: cw - 0.7, h: 1.0, fontFace: BODY,
      isTextBox: true, margin: 0, lineSpacingMultiple: 1.15, valign: "top",
    });
    s.addText([
      { text: "DISLIKES   ", options: { bold: true, color: BERRY, fontSize: 10.5, charSpacing: 1 } },
      { text: p.dislike, options: { color: INK_SOFT, fontSize: 12.5 } },
    ], {
      x: x + 0.35, y: cy + 2.05, w: cw - 0.7, h: 1.0, fontFace: BODY,
      isTextBox: true, margin: 0, lineSpacingMultiple: 1.15, valign: "top",
    });
  });

  cardBox(s, { x: 1.4, y: 5.35, w: 10.53, h: 1.35, fill: BERRY_SOFT });
  s.addText(
    "Neither doubted the product. Both doubted whether the app was telling them the truth about their order.",
    {
      x: 1.75, y: 5.35, w: 9.83, h: 1.35, fontFace: HEAD, italic: true, bold: true, fontSize: 18.5,
      color: INK, align: "left", valign: "middle", isTextBox: true, margin: 0, lineSpacingMultiple: 1.15,
    }
  );

  footer(s, "Nykaa UX Analysis", 6);
  s.addNotes(
    "2:55–3:35\n\n" +
    "\"I spoke to my wife and my sister — one shops rarely, one shops often. Both are fully convinced buyers; my wife actually trusts Nykaa's products more than Amazon's. " +
    "But neither of them complained about finding things. What they both brought up, completely unprompted, was what happens after checkout — delivery dates slipping with zero warning, " +
    "and orders mislabelled 'cancelled' or 'returned' by the app.\n\n" +
    "Different frequency, same wall — and that's a layer I never reached in my own testing.\""
  );
}

// =====================================================================
// SLIDE 7 — Recommendations (headline)
// =====================================================================
{
  const s = pres.addSlide();
  bg(s, BG_LIGHT);
  eyebrowTitle(s, "WHAT I WOULD SHIP", "Fix the middle, then the follow-through");

  const items = [
    { p: "P0", pf: BERRY, title: "Guided narrowing after a concern search.", body: "Skin type → concern → budget, pre-filled, one tap. Turn 696 into ~40 — the filters already exist." },
    { p: "P1", pf: TEAL, title: "“Buy again” for logged-in shoppers.", body: "A reorder row on home and a one-tap reorder in Orders. A five-year account has none today." },
    { p: "P1", pf: TEAL, title: "Let mobile guests filter without logging in.", body: "Desktop already allows it. Ask for login at wishlist or checkout, not the filter panel." },
    { p: "P1", pf: TEAL, title: "Honest, proactive delivery status.", body: "From the interviews, not my own testing — warn before a date slips; stop mislabelling orders." },
    { p: "P2", pf: INK_SOFT, title: "Stop ranking over-budget ads above the best fit.", body: "Keep sponsored items several times over budget out of the top slot on a priced search." },
  ];

  const ly = 1.75, rh = 0.82;
  const rows = items.map((it) => ({
    dotFill: it.pf, dotText: it.p, dotTextColor: it.pf === INK_SOFT ? INK : CREAM,
    title: it.title, desc: it.body,
  }));
  rowList(s, { x: M, y: ly, w: 11.93, rows, rowH: rh });

  cardBox(s, { x: M, y: ly + 5 * rh + 0.12, w: 11.93, h: 0.58, fill: SUNK });
  s.addText([
    { text: "Not now:  ", options: { bold: true, color: INK, fontSize: 12 } },
    { text: "an AI chat assistant. The filters already fit the category — the fix is using them at the right moment.", options: { color: INK_SOFT, fontSize: 12 } },
  ], {
    x: M + 0.3, y: ly + 5 * rh + 0.12, w: 11.33, h: 0.58, fontFace: BODY,
    isTextBox: true, margin: 0, valign: "middle",
  });

  s.addText("Full table with problem-solved and metrics per row → appendix, slide 16.", {
    x: M, y: ly + 5 * rh + 0.78, w: 11.93, h: 0.3, fontFace: BODY, italic: true, fontSize: 10.5, color: INK_SOFT,
    isTextBox: true, margin: 0,
  });

  footer(s, "Nykaa UX Analysis", 7);
  s.addNotes(
    "3:35–4:25\n\n" +
    "\"So if I owned this, here's what I'd prioritize.\n\n" +
    "Top of the list, P0 — a one-tap strip right after a concern search, narrowing by skin type, concern, and budget in one move. That alone could turn 696 results into about 40.\n\n" +
    "P1 — a 'Buy again' row for logged-in shoppers, plus one-tap reorder in Orders. Also P1 — let mobile guests filter without logging in. And one more P1, from the interviews, not my own testing — honest, proactive delivery status.\n\n" +
    "P2 — stop ranking way-over-budget ads above the best-fit product.\n\n" +
    "And one thing I'd deliberately not build — an AI chat assistant. The filters already exist and fit the category; the fix is using them at the right moment, not adding something new to learn.\""
  );
}

// =====================================================================
// SLIDE 8 — Close (end of the 5-minute story)
// =====================================================================
{
  const s = pres.addSlide();
  bg(s, BOOKEND);
  addCurve(s, { x: 10.3, y: 0.85, w: 2.05, h: 1.05, big: false });

  s.addText("IN CLOSE", {
    x: M, y: 1.1, w: 8, h: 0.4, fontFace: BODY, fontSize: 13, bold: true,
    color: BERRY, charSpacing: 2, isTextBox: true, margin: 0,
  });
  s.addText(
    "Nykaa is a great shop window,\nand a weaker personal shopper.",
    {
      x: M, y: 2.55, w: 11.3, h: 2.0, fontFace: HEAD, bold: true, fontSize: 36, color: INK,
      isTextBox: true, margin: 0, lineSpacingMultiple: 1.12,
    }
  );
  s.addText(
    "The fastest wins are about using the data it already has — not adding a new surface.",
    { x: M, y: 4.55, w: 10, h: 0.6, fontFace: BODY, italic: true, fontSize: 17, color: BERRY, isTextBox: true, margin: 0 }
  );
  s.addText("Thank you — Praveen Veera", {
    x: M, y: 6.1, w: 8, h: 0.4, fontFace: BODY, fontSize: 13, color: INK_SOFT, isTextBox: true, margin: 0,
  });
  s.addText("Appendix follows — full detail behind every claim in this story.", {
    x: M, y: 6.5, w: 10, h: 0.4, fontFace: BODY, italic: true, fontSize: 11.5, color: INK_SOFT, isTextBox: true, margin: 0,
  });
  s.addNotes(
    "4:25–4:45\n\n" +
    "\"That's my analysis. Nykaa is a great shop window, and a weaker personal shopper. It's strong at discovering, strong at checkout — " +
    "the gaps are the choice in the middle, and the trust in the follow-through. " +
    "The fastest wins here are about using the data it already has, not adding a new surface. Thank you.\"\n\n" +
    "[End of the 5-minute cut — appendix slides follow for reference.]"
  );
}

// =====================================================================
// SLIDE 9 — Appendix divider
// =====================================================================
{
  const s = pres.addSlide();
  bg(s, BOOKEND);
  s.addText("APPENDIX", {
    x: M, y: 2.7, w: 11.9, h: 0.5, fontFace: BODY, fontSize: 14, bold: true,
    color: BERRY, charSpacing: 3, isTextBox: true, margin: 0,
  });
  s.addText("The full detail behind every slide in the story", {
    x: M, y: 3.15, w: 11.5, h: 1.1, fontFace: HEAD, bold: true, fontSize: 34, color: INK,
    isTextBox: true, margin: 0,
  });
  s.addText("Methodology · all five journeys, step by step · real screenshots · the complete recommendations table · limitations", {
    x: M, y: 4.15, w: 10.5, h: 0.5, fontFace: BODY, italic: true, fontSize: 15, color: INK_SOFT,
    isTextBox: true, margin: 0,
  });
  s.addNotes("Backup section — not narrated in the 5-minute cut. Skip ahead to Q&A, or use these slides if asked for more detail.");
}

// =====================================================================
// SLIDE 10 — Methodology
// =====================================================================
{
  const s = pres.addSlide();
  bg(s, BG_LIGHT);
  eyebrowTitle(s, "APPENDIX · METHODOLOGY", "How I tested this");

  const rows = [
    { dotFill: BERRY, dotText: "1", title: "Journeys A, B, C, E — as a guest.", desc: "Deliberately: a large share of real visits start before anyone logs in. This is what a first-time or occasional shopper actually sees." },
    { dotFill: TEAL, dotText: "2", title: "Journey D, and everything about personalization — logged in.", desc: "On my own account, and with permission on a family member's account with several years of order history — so the finding doesn't rest on one thin account." },
    { dotFill: TEAL, dotText: "3", title: "Verified, not assumed.", desc: "Re-ran the Journey A search logged in on that same five-year account, to test whether login changes discovery. It didn't — identical down to the exact review counts (see Journey A)." },
    { dotFill: BERRY, dotText: "4", title: "Every number re-checked live on the day of writing.", desc: "Result counts, prices and ad placements were confirmed in real time, not pulled from memory or an earlier run." },
    { dotFill: TEAL, dotText: "5", title: "Two interviews, outside product and design.", desc: "About their own real Nykaa experience — one frequent shopper, one occasional." },
  ];
  rowList(s, { x: M, y: 1.75, w: 11.93, rows, rowH: 0.92 });

  footer(s, "Nykaa UX Analysis — Appendix", 10);
  s.addNotes("Methodology detail — how the guest/logged-in split was decided, and the direct evidence that login state doesn't change discovery.");
}

// =====================================================================
// SLIDES 11–15 — Journeys, full detail
// =====================================================================
journeySlide(11, {
  eyebrow: "APPENDIX · JOURNEY A",
  title: "Moisturizer for dry, sensitive skin, under ₹800",
  steps: [
    { what: "Opened home, then searched “moisturizer dry sensitive skin”", feel: "Confusing", good: false, detail: "Home is noisy first — banners, app QR, a countdown timer. Search itself is fast, query stays visible." },
    { what: "Looked through the results — 696 of them", feel: "Frustrating", good: false, detail: "Top result: a ₹3,565 ad; further down, ads up to ₹6,600 — 4–8× my budget. Cards themselves are strong: badge, rating, price at a glance." },
    { what: "Applied a price filter", feel: "Smooth", good: true, detail: "Worked immediately, no login wall — 696 dropped to 178. But nothing suggested that combination, and an ad still sat in position 1." },
    { what: "Added to bag and went to checkout", feel: "Smooth", good: true, detail: "Instant add-to-bag, a clear bag (coupons, points, ₹424 + ₹5 fee), a clean 3-step checkout." },
    { what: "Re-ran the same search logged in on the 5-year account", feel: "Frustrating", good: false, detail: "Identical: same 696, same ₹3,565 ad, same 137,185 reviews on Dot & Key. Five years of history changed nothing." },
  ],
  read: "Discovery and trust signals are strong, filters work once used, bag/checkout is genuinely good. The weak link is the middle — the platform makes me do all the narrowing, keeps ads on top even filtered, and being a known logged-in shopper doesn't change any of that.",
});

journeySlide(12, {
  eyebrow: "APPENDIX · JOURNEY B",
  title: "Luxury gift set for a birthday, ₹2,000–₹5,000",
  steps: [
    { what: "Searched “luxury skincare gift set”", feel: "Smooth", good: true, detail: "91 results — feels like a shelf I can actually look through, not a warehouse." },
    { what: "Scanned the cards", feel: "Smooth", good: true, detail: "“MOST GIFTED” and “BESTSELLER” badges, nice gift photography — reassuring when buying for someone else." },
    { what: "Checked prices", feel: "Confusing", good: false, detail: "Wide spread: ~₹600 to over ₹9,000. Several sets below my ₹2,000 floor; the ₹3,650 item on top is an ad, at least in budget." },
    { what: "Looked for delivery date and gift wrap", feel: "Confusing", good: false, detail: "Neither shown on the results page or product card — only found deep in checkout, after already picking a set. Backwards timing for a gift." },
  ],
  read: "The best of the five for finding. A loose intent (“a gift set”) is exactly what Nykaa's curation and social proof are built for. The gap: the two gift-specific questions — arrival time, can it be wrapped — are answered too late.",
});

journeySlide(13, {
  eyebrow: "APPENDIX · JOURNEY C",
  title: "My first everyday lipstick, under ₹500",
  steps: [
    { what: "Searched “lipstick everyday wear” — 108 results", feel: "Smooth", good: true, detail: "A manageable number, rich cards: “Available in 24–30 shades”, “MOST REORDERED”, huge review counts (one at 1.4M)." },
    { what: "Looked for shade help — undertone guide, a quiz, “which shade suits me”", feel: "Frustrating", good: false, detail: "Nothing on the results page. Popularity tells me it's a good product, not that it's the right colour for me." },
    { what: "Realised I'd need to open each product page just to compare shades", feel: "Slow", good: false, detail: "An extra step per product, for the exact decision a beginner is least sure about." },
  ],
  read: "A personalization gap — same root problem as Journey D, at the product level instead of the account level. Nykaa can tell me what's popular; it can't tell me what's right for me. A wrong shade becomes a return later.",
});

journeySlide(14, {
  eyebrow: "APPENDIX · JOURNEY D",
  title: "Come back as a logged-in shopper",
  steps: [
    { what: "Opened the home page, logged in", feel: "Frustrating", good: false, detail: "On both accounts, the exact same page a logged-out visitor sees — no “Buy again”, no recently viewed, nothing tied to the shopper." },
    { what: "Opened My Account → Orders (the account with history)", feel: "Frustrating", good: false, detail: "Full order history, going back years, same staples recurring — but no “Reorder” or “Buy again” button anywhere. Tapping a past item opens the normal product page." },
    { what: "Searched a category the shopper re-buys", feel: "Frustrating", good: false, detail: "Same popularity + sponsored order everyone gets. Her usual brand is not surfaced." },
    { what: "Opened the bag, then went to checkout", feel: "Smooth", good: true, detail: "Slide-out with coupons, reward points, a clear price breakdown; a simple 3-step flow. Stopped before paying." },
  ],
  read: "The clearest version of the personalization gap in this report. Nykaa knows exactly who the returning shopper is — name, full order history, what she buys again and again — and spends none of it. A five-year customer gets the same experience as a stranger.",
});

journeySlide(15, {
  eyebrow: "APPENDIX · JOURNEY E",
  title: "Casual browse, no goal",
  steps: [
    { what: "Landed on home, just looking", feel: "Smooth", good: true, detail: "Pretty. Easy to tap into Makeup, Skin, or Offers." },
    { what: "Looked at brand cards and the “Beauty Advice” tab", feel: "Smooth", good: true, detail: "Good for ideas and inspiration." },
    { what: "Noticed the pop-ups: app QR, countdown timer, “spend ₹7,000” nudge", feel: "Confusing", good: false, detail: "Everything nudges “buy now.” No calm “just looking” mode." },
  ],
  read: "The one visitor the home page is designed for. But even she isn't personalized to — nothing remembers a repeat visit, no saved items resurfaced. The personalization gap is missing for all five personas, including this one.",
});

// =====================================================================
// SLIDE 16 — Evidence: real screenshots
// =====================================================================
{
  const s = pres.addSlide();
  bg(s, BG_LIGHT);
  eyebrowTitle(s, "APPENDIX · EVIDENCE", "What it actually looked like");
  s.addText("Real screenshots from the sessions above — not mockups.", {
    x: M, y: 1.55, w: 11.93, h: 0.35, fontFace: BODY, italic: true, fontSize: 12.5, color: INK_SOFT,
    isTextBox: true, margin: 0,
  });

  const shots = [
    { file: "screenshots/bad/desktop-skincare-696-results-ad.png", cap: "Journey A — 696 results, a ₹3,565 ad on top" },
    { file: "screenshots/good/gift-most-gifted-sets.png", cap: "Journey B — 91 curated sets, “Most Gifted”" },
    { file: "screenshots/good/makeup-shade-count-on-cards.png", cap: "Journey C — 24+ shades, no shade help" },
    { file: "screenshots/web/gift-luxury-01-home.png", cap: "Journey D/E — the home page (identical either way)" },
  ];

  const n = shots.length, gap = 0.28;
  const cellW = (11.93 - (n - 1) * gap) / n;
  const imgH = cellW / 1.6; // source screenshots are 1440×900
  const imgY = 2.15;

  shots.forEach((sh, i) => {
    const x = M + i * (cellW + gap);
    s.addShape(pres.ShapeType.rect, {
      x, y: imgY, w: cellW, h: imgH, fill: { color: SURFACE }, line: { color: HAIRLINE, width: 1 },
    });
    s.addImage({ path: sh.file, x, y: imgY, w: cellW, h: imgH });
    s.addShape(pres.ShapeType.rect, {
      x, y: imgY, w: cellW, h: imgH, fill: { type: "none" }, line: { color: HAIRLINE, width: 1 },
    });
    s.addText(sh.cap, {
      x, y: imgY + imgH + 0.12, w: cellW, h: 0.55, fontFace: BODY, fontSize: 10.5, color: INK_SOFT,
      isTextBox: true, margin: 0, valign: "top", lineSpacingMultiple: 1.1,
    });
  });

  cardBox(s, { x: M, y: 4.75, w: 11.93, h: 1.75, fill: SUNK });
  s.addText(
    "Everything in this report is grounded in what the site actually showed, in real sessions on 4 Sep 2026 — the numbers above (696, ₹3,565, 91, 24+ shades) came off these screens, not a summary of them. The one exception: cart and checkout were verified live during this session but not screenshotted, since I stopped before payment on purpose.",
    {
      x: M + 0.35, y: 4.75, w: 11.23, h: 1.75, fontFace: BODY, fontSize: 13, color: INK,
      isTextBox: true, margin: 0, valign: "middle", lineSpacingMultiple: 1.25,
    }
  );

  footer(s, "Nykaa UX Analysis — Appendix", 16);
  s.addNotes("Real screenshots backing the four sharpest claims — have these ready if anyone asks 'can I actually see that'.");
}

// =====================================================================
// SLIDE 17 — Recommendations, complete table
// =====================================================================
{
  const s = pres.addSlide();
  bg(s, BG_LIGHT);
  eyebrowTitle(s, "APPENDIX · RECOMMENDATIONS", "Every fix, with the problem and the metric", { size: 25 });
  // slide 17

  s.addText(
    "Each row ties to something seen or heard above, not a guess — ranked by reach and cost to ship, not a formal score. Limit worth naming: one exploration, one day, desktop only, no access to Nykaa's real traffic, conversion or return data.",
    { x: M, y: 1.55, w: 11.93, h: 0.55, fontFace: BODY, italic: true, fontSize: 11, color: INK_SOFT, isTextBox: true, margin: 0, lineSpacingMultiple: 1.1 }
  );

  const rows = [
    ["P0", "One-tap narrow strip after a concern search (skin type → concern → budget, pre-filled).", "696 results for a cautious purchase (Journey A).", "Search → add-to-bag on concern searches."],
    ["P1", "“Buy again” row on home + 1-tap Reorder in My Orders.", "5-yr account, same staples, no reorder path (Journey D).", "Repeat purchase rate; time to add-to-bag."],
    ["P1", "Let mobile guests filter without logging in.", "Login pop-up blocks the filter panel on mobile (Feature 2).", "Filter apply rate; guest bounce rate."],
    ["P2", "Stop ranking over-budget ads above the best fit.", "₹3,565–₹6,600 ads above a ₹336 fit (Journey A).", "Top-3 organic CTR; skincare return rate."],
    ["P1*", "Honest, proactive delivery status; stop mislabelling orders.", "Both interviews, unprompted, complained about only this.", "Delivery-date accuracy; status-correction rate."],
  ];

  const tx = M, ty = 2.25, tw = 11.93;
  const colW = [0.75, 3.9, 3.7, 3.58];
  s.addTable(
    [
      [
        { text: "P", options: { bold: true, color: CREAM, fill: { color: INK }, fontSize: 10 } },
        { text: "FIX", options: { bold: true, color: CREAM, fill: { color: INK }, fontSize: 10 } },
        { text: "PROBLEM IT SOLVES", options: { bold: true, color: CREAM, fill: { color: INK }, fontSize: 10 } },
        { text: "METRIC", options: { bold: true, color: CREAM, fill: { color: INK }, fontSize: 10 } },
      ],
      ...rows.map(([p, fix, prob, metric], i) => [
        { text: p, options: { bold: true, fontFace: HEAD, fontSize: 11.5, color: p.startsWith("P0") ? BERRY : INK, fill: { color: i % 2 ? SURFACE : SUNK } } },
        { text: fix, options: { fontSize: 10, color: INK, fill: { color: i % 2 ? SURFACE : SUNK } } },
        { text: prob, options: { fontSize: 10, color: INK_SOFT, fill: { color: i % 2 ? SURFACE : SUNK } } },
        { text: metric, options: { fontSize: 10, color: INK_SOFT, fill: { color: i % 2 ? SURFACE : SUNK } } },
      ]),
    ],
    {
      x: tx, y: ty, w: tw, colW,
      fontFace: BODY,
      border: { type: "solid", color: HAIRLINE, pt: 0.75 },
      autoPage: false,
      valign: "middle",
      margin: [8, 8, 8, 8],
    }
  );

  s.addText("P1* — from the interviews, not my own testing.", {
    x: M, y: 5.45, w: 11.93, h: 0.3, fontFace: BODY, italic: true, fontSize: 10, color: INK_SOFT,
    isTextBox: true, margin: 0,
  });

  footer(s, "Nykaa UX Analysis — Appendix", 17);
  s.addNotes("Full recommendations table with problem-solved and metric per row, plus the reasoning and limits behind the list.");
}

// =====================================================================
// SLIDE 18 — Limitations
// =====================================================================
{
  const s = pres.addSlide();
  bg(s, BG_LIGHT);
  eyebrowTitle(s, "APPENDIX · BEING HONEST", "Limitations");

  const rows = [
    { dotFill: INK_SOFT, dotText: "•", dotTextColor: CREAM, title: "Desktop website only, not the native app.", desc: "Mobile-web notes (the filter login pop-up) are from an earlier check on the same site." },
    { dotFill: INK_SOFT, dotText: "•", dotTextColor: CREAM, title: "Stopped at the address step of checkout.", desc: "Added one item, opened the bag, went to the address step — did not enter an address or pay." },
    { dotFill: BERRY, dotText: "!", dotTextColor: CREAM, title: "One reproducible server error.", desc: "Loading the bag by its direct URL (nykaa.com/shoppingbag/) — not the bag icon — returns HTTP 503 every time. Confirmed across three separate sessions over several hours; the in-app bag drawer works fine every time. Cause unknown; consistent enough to flag." },
    { dotFill: INK_SOFT, dotText: "•", dotTextColor: CREAM, title: "The second account was read-only.", desc: "Used only to check personalization, Orders, and search. No order details are reproduced anywhere in this report." },
  ];
  rowList(s, { x: M, y: 1.75, w: 11.93, rows, rowH: 1.15 });

  footer(s, "Nykaa UX Analysis — Appendix", 18);
  s.addNotes("Full limitations list, including the exact evidence behind the HTTP 503 finding.");
}

pres.writeFile({ fileName: "Nykaa-UX-Analysis.pptx" }).then(() => {
  console.log("done");
});
