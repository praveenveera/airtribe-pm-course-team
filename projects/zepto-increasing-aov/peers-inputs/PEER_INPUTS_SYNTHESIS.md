# Peer Inputs & Group Research Synthesis

**Workspace:** `projects/zepto-increasing-aov/peers-inputs/`  
**Group Contributors:** Nadeem (`nadeem-inputs.docx`), Rahul (`rahul-inputs.html`), Praveen Veera ($N=102$ Dataset & Dashboard Engineering)  
**Date:** September 2026  

---

## 1. Summary of Group Contributions

| Group Member | Core Focus & Inputs | Key Data Points & Concepts | Integration Status |
| :--- | :--- | :--- | :--- |
| **Nadeem** | • Free-delivery threshold dynamics <br> • 5-Segment shopper breakdown <br> • Reward Ladder strategy concept | • Zepto fee threshold shift: ₹99 $\rightarrow$ ₹149 $\rightarrow$ ₹199 $\rightarrow$ ₹299 (peak) <br> • **Reward Ladder Concept:** Replace static ₹199 finish line with tiered rewards (₹199 / ₹399 / ₹599) <br> • Emergency checkout guardrails | **Integrated** (Solution Roadmap & Step 3) |
| **Rahul** | • Zepto SEBI UDRHP-I filing metrics <br> • Q-Commerce competitor benchmarks <br> • Bain & Flipkart 2026 industry report <br> • RICE & Test plan matrix | • **Zepto FY26 Net Receivables/Order:** ₹394 (640M+ annual orders) <br> • **Instamart Q4 FY26 AOV Benchmark:** ₹700 (+32.8% YoY) <br> • **Bain & Flipkart 2026:** Household essentials = 85–90% of Indian q-commerce GMV <br> • Instacart complementary recommendation practices | **Integrated** (Tab 2 Benchmarks & Step 4) |
| **Praveen Veera** | • Primary survey dataset ($N=102$) <br> • Google Apps Script backend (`Responses_V2`) <br> • Interactive 4-Tab Command Center Dashboard <br> • Co-occurrence affinity matrix & PRD specs | • **$N=102$ Dataset:** 57.8% urgent replenishment, 70.6% threshold sensitive, 56.7% Zepto attach rate <br> • **Category Affinity:** Dairy + Fresh Produce = 31 pairs <br> • **Command Center Dashboard:** Deployed live on GitHub Pages | **Integrated** (Primary Engine & Live Dashboard) |

---

## 2. Key Synthesis Points from Peer Inputs

### A. Commercial & Financial Baseline (Zepto SEBI Filing & Market Data)
* **Zepto Net Receivables per Order (SEBI UDRHP-I Filing, June 2026):**
  * FY24: ₹350 per order (132.87 million orders)
  * FY25: ₹380 per order
  * FY26: ₹394 per order (640.18 million orders)
  * *Note:* Net Receivables include delivery fees, subscription pass fees, and ad revenue—meaning merchandise AOV is lower.
* **Competitor Benchmarking:**
  * **Swiggy Instamart (Q4 FY26):** ₹700 AOV (+32.8% YoY), driven by larger multi-category baskets and non-grocery mix.
  * **Blinkit:** December quarter reported net AOV of ₹546.
  * **Bain & Flipkart (2026 Report):** Household essentials represent 85–90% of Indian quick-commerce GMV, explaining short, focused top-up missions.

### B. Behavioral Threshold Mechanics & Reward Ladder Strategy
* **The Threshold Problem:**
  Zepto’s free-delivery threshold was raised from ₹99 to ₹149, then to ₹199, and up to ₹299 during peak demand. This creates a visible "finish line" at ₹199 where shoppers stop adding items once unlocked.
* **Nadeem’s Reward Ladder Solution:**
  Replace the flat ₹199 free delivery finish line with a **Progressive Reward Ladder**:
  * **Tier 1 (₹199):** Free delivery unlocked.
  * **Tier 2 (₹349):** ₹30 instant cashback or free sample product (e.g. gourmet snack or beverage).
  * **Tier 3 (₹599):** Preferred delivery slot or double loyalty points.

### C. 5-Segment Behavioral Framework (Group Alignment)
1. **Emergency Top-up (57.8% of orders):** Ran out of milk/bread/medicine. Needs 1–3 items. *Lever:* Relevant complementary add-on shelf at cart drawer without slowing checkout.
2. **Threshold Stopper (30.8% of orders):** Price-conscious, builds to ₹199 threshold and stops. *Lever:* Reward Ladder & complementary filler items.
3. **Habitual Replenisher:** Weekly routine reorders. *Lever:* Smart reorder-plus prompts.
4. **Stock-Up Household Shopper (11.6% of orders):** Large multi-category monthly shop. *Lever:* Bulk price parity & pantry bundle selector.
5. **Occasion / Impulse Shopper:** Party/festival supplies. *Lever:* Complete-the-occasion bundles.

---

## 3. How Peer Inputs Are Reflected in Final Deliverables

- **Command Center Dashboard (Tab 2 & Tracker):** Includes Zepto SEBI UDRHP-I financial baseline (₹394 NRV), Swiggy Instamart ₹700 benchmark, Bain & Flipkart 2026 report citations, and Nadeem's Reward Ladder concept.
- **RICE & Strategy Roadmap:** Solution A (*Need-Complete Shelf*) and Solution B (*Reward Ladder / Basket Builder*) combine Praveen's primary $N=102$ attach data ($56.7\%$ Zepto attach rate) with peer financial and threshold analyses.
- **Presentation Script & Submission Pack:** Integrates group consensus on problem statements, segment definitions, financial baselines, and pilot test plans.
