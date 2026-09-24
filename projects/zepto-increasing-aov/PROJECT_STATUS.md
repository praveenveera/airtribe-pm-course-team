# Project 4 — Increasing AOV at Zepto: Status & Checkpoint Tracker

**Last updated:** 24 September 2026  
**Overall status:** Primary research dataset ($N=92$) and secondary benchmark research fully integrated into the 4-tab Command Center Dashboard and aligned with the official 4-Step Assignment Brief.  
**Current decision:** Prioritize **Solution A (Mission-Aware Need-Complete Add-On Shelf)** with a RICE score of **864** to drive AOV growth without compromising urgent order speed or customer trust.

---

## Strategic Checkpoint Tracker (Assignment Rubric Alignment)

| Step / Checkpoint | Objective | Status | Completed Evidence & Artifacts | Remaining Action Items |
|---|---|---|---|---|
| **Step 1: User Research & Segmentation** | Understand shopping behaviors & segment low-AOV drivers | **COMPLETE ($N=92$)** | • $N=92$ primary dataset via Basket Stories app (`Responses_V2`) <br> • 4 User Segments defined (Urgent Replenishers, Threshold Fillers, Planned Grocery Buyers, Impulsive Explorers) <br> • Low-AOV driver identified: Urgent Replenishers (57.6% of orders, single-item carts). | None (Dataset & Tab 1 Dashboard complete). |
| **Step 2: Blockers & Problem Statements** | Identify expansion breaks & frame core root causes | **COMPLETE** | • 4 Core Blockers identified (Single-Item Intent Lock, Threshold Friction, Lack of Mission Relevance, Price Disconnect) <br> • Structured Problem Statements defined (`Users currently checkout single items... because recommendations lack contextual relevance... resulting in capped AOV at ₹180–240`). | None (Documented in Tab 3/4 & research synthesis). |
| **Step 3: Solution Engineering** | Propose 2–3 high-impact, ecosystem-aligned solutions | **COMPLETE** | • **Solution A:** Mission-Aware Need-Complete Add-On Shelf <br> • **Solution B:** Household Basket Builder <br> • **Solution C:** Reorder-Plus Smart Cues <br> • Detailed PRD specs, targeting rationale, and mechanisms defined in Tab 4. | None (PRD specs published in Tab 4). |
| **Step 4: RICE Prioritization & Metrics** | Apply product judgment & define KPI framework | **COMPLETE** | • RICE Matrix calculated (Solution A = **864**, Solution B = **336**, Solution C = **432**) <br> • Core KPIs defined (AOV Uplift %, Attach Rate 35.9% baseline target, Items/Order +1.2) <br> • Guardrails set (Dark store SLA <15s, Checkout conversion drop <0.5%). | Build final PowerPoint presentation deck & record 5-minute pitch video. |

---

## Detailed Checkpoint Mapping

### Step 1: User Research & Segmentation ($N=92$ Empirical Evidence)

- **Segment 1: Urgent Replenishers (Low-AOV Driver — 57.6%)**
  - *Behavior:* High urgency, ran-out of staple items (milk, eggs, bread). Purchases 1–2 items.
  - *Impact on AOV:* Suppresses AOV (₹180–₹250); checks out immediately without browsing search or home page.
- **Segment 2: Threshold Fillers (30.8%)**
  - *Behavior:* Adds 1 main item, notices delivery fee threshold (70.7% notice fees), actively searches for cheap "filler" items to cross ₹299/₹499 threshold.
  - *Impact on AOV:* Moderate AOV (₹300–₹450); high attach receptivity if complementary items are suggested at cart.
- **Segment 3: Planned Household Grocery Buyers (11.6%)**
  - *Behavior:* Multi-category basket (fruits/veg, pantry, dairy). Higher cart size (₹600+).
  - *Impact on AOV:* Highest AOV driver, but prone to dropping off if items are out of stock or cheaper on supermarket channels.
- **Segment 4: Impulsive Explorers (0.0% Quick-Commerce core, high offline overlap)**
  - *Behavior:* Browses snack/gourmet categories; highly sensitive to discounts and bundle deals.

---

### Step 2: Blockers & Structured Problem Statements

#### **Identified Blockers:**
1. **Single-Item Intent Lock (Psychological & Experiential):** Users open Zepto with a surgical mission (e.g., "get milk"). UI recommendations on homepage do not match the immediate mission context.
2. **Expansion Break at Cart Review (Structural):** Recommendation carousels at cart are generic ("Popular Items") rather than mission-complete complements (e.g., suggesting Tea Bags + Sugar when Milk is in cart).
3. **Threshold vs. Value Disconnect (Pricing-Related):** 32.6% of users stop expanding carts due to fear of unnecessary spend; filler recommendations feel low-value or redundant.

#### **Structured Problem Statements:**
* **Problem Statement 1:**
  > *Users currently* check out single-item urgent orders (57.6% of carts), *because* generic cross-sell recommendations fail to complement their immediate shopping mission, *which results in* suppressed AOV (₹180–₹240) and high logistics cost per order.
* **Problem Statement 2:**
  > *Users currently* abandon cart expansion at the ₹250 threshold, *because* suggested add-ons lack transparent value or immediate utility, *which results in* missed basket expansion opportunities across 70.7% of threshold-conscious shoppers.

---

### Step 3: Proposed Solutions

1. **Solution A: Mission-Aware Need-Complete Add-On Shelf (Primary Winner)**
   - *Target Segment:* Urgent Replenishers & Threshold Fillers.
   - *Mechanism:* Machine learning algorithm triggers 2–3 exact recipe/complementary add-ons directly on cart drawer (e.g., Milk $\rightarrow$ Cereal / Biscuits / Coffee).
   - *Rationale:* Zero cognitive load; completes the user's mission while capturing complementary attach ($35.9\%$ attach rate receptivity in $N=92$ survey).
2. **Solution B: Household Basket Builder**
   - *Target Segment:* Planned Household Buyers.
   - *Mechanism:* Multi-item bulk pantry selector with progressive tier discounts (e.g., "Add 2 more pantry items to save 15%").
3. **Solution C: Reorder-Plus Smart Cues**
   - *Target Segment:* Repeat Zepto Shoppers.
   - *Mechanism:* Pre-populates frequently bought replenishment items during checkout based on historic purchase cycles.

---

### Step 4: RICE Prioritization & Metrics

$$\text{RICE Score} = \frac{\text{Reach} \times \text{Impact} \times \text{Confidence}}{\text{Effort}}$$

| Solution | Reach (Monthly Orders) | Impact (0.5 - 3.0) | Confidence (%) | Effort (Person-Months) | RICE Score | Rank |
|---|---|---|---|---|---|---|
| **Solution A: Need-Complete Add-On Shelf** | 80% (1.84M) | 2.0 (High) | 90% (Empirical $N=92$) | 3.84 | **864** | **#1** |
| **Solution C: Reorder-Plus Smart Cues** | 60% (1.38M) | 1.5 (Medium) | 80% | 4.79 | **432** | **#2** |
| **Solution B: Household Basket Builder** | 35% (0.80M) | 2.5 (Very High) | 70% | 4.17 | **336** | **#3** |

#### **Success KPIs & Guardrails:**
- **Primary KPI:** AOV Uplift ($\uparrow 12\text{--}15\%$ on targeted baskets).
- **Secondary KPIs:** Attach Rate ($\ge 35.9\%$), Average Items per Order ($+1.2\text{ items}$).
- **Operational Guardrail 1:** Dark Store Picking & Packing SLA ($< 15\text{ seconds}$ added picker time).
- **Customer Experience Guardrail 2:** Checkout Conversion Drop ($< 0.5\%$).

---

## Published Tools & Submission Artifacts

- **[Project 4 Command Center Dashboard (V2.5)](https://praveenveera.github.io/airtribe-pm-course-team/)** — 4-tab live decision dashboard.
- **[Basket Stories Survey Web App](https://praveenveera.github.io/airtribe-pm-course-team/survey/)** — Deployed survey instrument.
- **[`assignment-brief.md`](assignment-brief.md)** — Official assignment requirements and rubric mapping.
- **[`research/secondary-research.md`](research/secondary-research.md)** & **[`synthesis/primary-survey-synthesis.md`](synthesis/primary-survey-synthesis.md)** — Full evidence synthesis reports.

---

## Remaining Action Items for Submission

1. **PowerPoint / Executive Deck Creation:** Build a 10–12 slide presentation deck summarizing Steps 1–4.
2. **Video Walkthrough Recording Script:** Update [`submission/walkthrough-script.md`](submission/walkthrough-script.md) with empirical $N=92$ metrics for a 5-minute presentation.
3. **Submission Evidence Package:** Package `submission-ready/` bundle with sanitized dataset CSVs, dashboard screenshots, and manifest.
