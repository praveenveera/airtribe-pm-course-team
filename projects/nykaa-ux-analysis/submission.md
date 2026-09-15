# Nykaa — User Experience Analysis

**Name:** Praveen Veera
**Course:** Airtribe — AI-First Product Management
**Module 1:** 29 Aug – 04 Sep — Fundamentals of Product Management
**Platform explored:** Nykaa desktop website (www.nykaa.com)
**Date:** 4 September 2026

**Method:** I used Nykaa with five real shopping goals, one after another, and marked where the experience felt **smooth**, **confusing**, **slow**, or **frustrating**. Journeys A, B, C and E were run as a guest — deliberately: a large share of real visits start before anyone logs in, and it let me see what a first-time or occasional shopper actually gets. Journey D, and anything about personalization, was checked logged in — on my own account and, with permission, on a family member's account with several years of order history. I also directly re-ran the Journey A search while logged in on that same five-year account, to check whether login state changes discovery at all — it didn't (see Journey A). That's why B and C weren't re-run logged in too: the one direct comparison I did came back identical, so redoing them would very likely just repeat the same numbers. I re-checked every number live on the day of writing, then spoke to two people who do not work in product or design about their own experience with Nykaa.

---

## 1. Short answer (read this first)

Nykaa is very good at **showing products** — clear photos, star ratings, review counts, and helpful badges like "MOST GIFTED" and "NORMAL TO DRY". The bag and checkout are also solid — coupons, reward points, a clear price breakdown, a simple 3-step flow. Nykaa gets weaker in the **middle**: the moment I arrive with a **specific job** and need to narrow down.

- A loose gift search felt like a small, curated shop — **91** results.
- A precise "moisturizer for dry, sensitive skin under ₹800" still showed **696** results, with sponsored ads from **₹3,565 up to ₹6,600** mixed into the first screen.
- Logged in, with my name in the header, the home page was **identical** to the logged-out one — no "Buy again", no recommendations, nothing personal.
- A casual browse with no goal felt great — the home page is built for exactly this person.

**The pattern:** Nykaa is strong at the start (browse, discover) and the end (bag, pay). It is weak in between — turning a specific need into a confident choice. The two people I spoke with added a layer I couldn't see myself: both are convinced, loyal buyers, and both complained — unprompted — about what happens *after* checkout: delivery dates slipping with no warning, and orders getting mislabelled "cancelled" or "returned."

**Top things I would fix:**
1. Guided narrowing right after a skin-concern search (skin type + concern + budget in one tap).
2. A "Buy again" row for logged-in shoppers.
3. Do not rank an out-of-budget ad above the best-fit product.
4. Honest, proactive delivery status — this came from real customers, not my own testing.

---

## 2. The five journeys

Legend: 🟢 smooth · 🟡 confusing · 🟠 slow · 🔴 frustrating

### Journey A — Moisturizer for dry, sensitive skin, under ₹800

| Step | What I did | How it felt |
|------|------------|-------------|
| 1 | Opened home, then searched "moisturizer dry sensitive skin" | 🟡 Home is noisy first — banners, app QR, a countdown timer. Search itself is fast, and the query stays visible. |
| 2 | Looked through the results — **696** of them | 🔴 Way too many for a specific, cautious need. Top result: a **₹3,565** ad (further down, ads up to **₹6,600**) — 4–8× my budget. The product cards themselves are strong: badge, rating, price at a glance (Dot & Key: "NORMAL TO DRY", 4.5★, 137K reviews, ₹336). |
| 3 | Applied a price filter | 🟢 Worked immediately, no login wall — 696 dropped to 178. But nothing suggested that combination for me, and even filtered, an ad still sat in position 1. |
| 4 | Added to bag and went to checkout | 🟢 Instant add-to-bag, a clear bag (coupons, reward points, ₹424 + ₹5 platform fee), a clean 3-step checkout. |
| 5 | Re-ran this exact search logged in, on the same five-year account from Journey D, to check if login changes anything | 🔴 **Identical.** Same 696, same ₹3,565 ad in position 1, same M.A.C ₹6,600 ad, even the same 137,185 review count on Dot & Key. Five years of purchase history changed nothing about what I was shown. |

**My read:** discovery and trust signals are strong, the filters do the job once you use them, and the bag/checkout is genuinely good. The weak link is the middle: the platform makes *me* do all the narrowing and keeps ads on top even after I filter by price — and being a known, logged-in shopper doesn't change any of that.

### Journey B — Luxury gift set for a birthday, ₹2,000–₹5,000

| Step | What I did | How it felt |
|------|------------|-------------|
| 1 | Searched "luxury skincare gift set" | 🟢 **91** results — feels like a shelf I can actually look through, not a warehouse. |
| 2 | Scanned the cards | 🟢 "MOST GIFTED" and "BESTSELLER" badges, nice gift photography — genuinely reassuring when I'm buying for someone else and unsure. |
| 3 | Checked prices | 🟡 Wide spread: ~₹600 to over ₹9,000. Several sets sit below my ₹2,000 floor; the ₹3,650 item on top is an ad, but at least it's in budget. |
| 4 | Looked for the delivery date and whether gift wrap is offered | 🟡 Neither shown on the results page or the product card — I'd only find out deep in checkout, after already picking a set. For a gift, that timing is backwards. |

**My read:** the best of the five for *finding*. A loose intent ("a gift set") is exactly what Nykaa's curation and social proof are built for. The gap is that the two gift-specific questions — will it arrive in time, can it be wrapped — are answered too late.

### Journey C — My first everyday lipstick, under ₹500

| Step | What I did | How it felt |
|------|------------|-------------|
| 1 | Searched "lipstick everyday wear" — **108** results | 🟢 A manageable number, and the cards are rich: "Available in 24–30 shades", "MOST REORDERED", huge review counts (one at 1.4M). |
| 2 | Looked for shade help — an undertone guide, a quiz, "which shade suits me" | 🔴 Nothing on the results page. Popularity tells me it's a good product, not that it's the right colour for me. |
| 3 | Realised I'd need to open each product page just to compare shades | 🟠 An extra step per product, for the exact decision a beginner is least sure about. |

**My read:** this is a **personalization gap** — the same root problem I hit again in Journey D, just at the product level instead of the account level. Nykaa can tell me what's popular; it can't tell me what's *right for me*. A wrong shade becomes a return later, and today's "24 shades!" excitement is tomorrow's refund.

### Journey D — Come back as a logged-in shopper

I checked this on two accounts — my own, and (with permission) a family member's account that has several years of Nykaa order history.

| Step | What I did | How it felt |
|------|------------|-------------|
| 1 | Opened the home page, logged in | 🔴 On **both accounts** it is the exact same page a logged-out visitor sees. I scanned the whole thing — no "Buy again", no "recently viewed", no "recommended for you", nothing tied to the shopper. |
| 2 | Opened My Account → Orders (the account with history) | 🔴 The full order history is there, going back years — and the same staples recur across many orders. But there is **no "Reorder" or "Buy again" button** anywhere on it. Tapping a past item just opens the normal product page. |
| 3 | Searched a category the shopper re-buys | 🔴 Results are the same popularity + sponsored order everyone gets. Her usual brand is not surfaced. |
| 4 | Opened the bag, then went to checkout | 🟢 Bag opens as a slide-out with coupons, reward points, a clear price breakdown; checkout is a simple 3-step flow. I stopped before paying. |

**My read:** this is the clearest version of the personalization gap in this whole report. Nykaa knows exactly who the returning shopper is — name, full order history, the products she buys again and again — and the home page, the Orders page, and search all spend none of it. A five-year customer gets the same "discover the sale" experience as a stranger. Journey C showed Nykaa doesn't personalize to *fit*; this shows it doesn't personalize to *history* either.

### Journey E — Casual browse, no goal

| Step | What I did | How it felt |
|------|------------|-------------|
| 1 | Landed on home, just looking | 🟢 Pretty. Easy to tap into Makeup, Skin, or Offers. |
| 2 | Looked at brand cards and the "Beauty Advice" tab | 🟢 Good for ideas and inspiration. |
| 3 | Noticed the pop-ups: app QR, "Ends in 02h 41m", "spend ₹7,000 for a luxe pouch" | 🟡 Everything nudges "buy now". There is no calm "just looking" mode. |

**My read:** this is the one visitor the home page is designed for — pretty, easy, no pressure to have a goal. But even she isn't personalized to: come back a second time and nothing remembers what she looked at, nothing resurfaces a saved item, nothing says "welcome back." It's the same page from Journey D, just aimed at a browser instead of a buyer. The personalization gap isn't specific to one persona — it's missing for all five, including the one this home page is built for.

### One line per journey

| Journey | In one line |
|---------|-------------|
| A — Moisturizer | "I told you my skin and my budget. You showed me 696 things and a ₹6,600 ad." |
| B — Gift set | "Gift search actually felt like gifts — but when will it arrive?" |
| C — Lipstick | "Everyone loves this lipstick. I still don't know my shade." |
| D — Logged-in | "Five years of my orders, and your home page acts like we just met." |
| E — Browse | "Lovely to look at. Very shouty. I'm not buying today, and that's fine." |

---

## 3. Three features — my opinion

For each: what it is, in one line — then why I rate it that way.

### Feature 1 — Product cards on the results page → **Good**

**What it is:** every card shows a photo, price, star rating, review count, and a badge that says whether the product fits my need ("NORMAL TO DRY") or is popular ("MOST REORDERED").

**Why:** I can shortlist products without opening a single one. That's rare, and it matters here — this is a category where I need to know *does it fit me* and *do people trust it* before I even click in. The cards answer both up front.

### Feature 2 — Beauty-specific filters (Skin Type, Concern, Ingredient) → **Good idea, badly used**

**What it is:** filters built for how people actually shop for beauty, not generic e-commerce filters like most sites have.

**Why it's mixed:** the filters genuinely work — I used a price band and 696 results became 178. But Nykaa never uses them *for* me. After I search "moisturizer dry sensitive skin", it should already offer "dry + sensitive + under ₹800" as one tap — it doesn't; I have to know to build that combination myself. And on mobile web, a guest can't even open the filter panel without a login pop-up first (desktop doesn't have this problem). Right tool, never handed to me at the moment I need it.

### Feature 3 — The logged-in home page → **Bad**

**What it is:** the page a logged-in shopper sees first, every single visit — banners, countdown timers, an app-download QR, brand carousels, all saying "Shop Now".

**Why:** it is identical to what a stranger sees. I checked this on two accounts, including one with five years of order history — no "Buy again", no "recently viewed", no "welcome back", nothing that uses my name or what I've bought before. For someone just browsing this is fine. For anyone who has ever placed an order, it's a missed chance every single time they open the app.

---

## 4. User conversations

I spoke to two people who do not work in product or design.

### Person 1 — my wife

- **How often they use Nykaa:** Less often — an occasional shopper, not a regular one.
- **What they buy:** Hair care, bath & body, and mom & baby products.
- **What they like:** Products consistently arrive in good shape and condition — packaging intact, nothing damaged or leaked. She trusts Nykaa **more than Amazon** specifically for beauty products — the fear on Amazon is a counterfeit or a tampered/expired item from a third-party seller; on Nykaa she doesn't second-guess that.
- **What they dislike:** Delivery dates get pushed back repeatedly, with **no proactive explanation** from the app — she has to go check, it doesn't tell her. She's also had delivery partners mark a shipment "customer not home" or "not answering calls" when, by her account, no call was made and no delivery was actually attempted.
- **A time they didn't buy — and why:** Not really — her friction shows up *after* she's already bought, not before. She keeps ordering; delivery is what she complains about, not the decision to purchase.

### Person 2 — my sister

- **How often they use Nykaa:** Most often — a frequent, regular shopper.
- **What they buy:** Broadly across categories — beauty/skincare, hair, bath & body, and makeup.
- **What they like:** Product quality is good — same theme as Person 1, no complaints about the products themselves.
- **What they dislike:** Customer support, and the app showing **incorrect order statuses** — items marked "cancelled" or "returned" when they weren't.
- **A time they didn't buy — and why:** Not raised — like Person 1, her complaint is post-purchase (support and status accuracy), not at the decision stage.

### What I heard across both conversations

Neither conversation matched what I expected. I went in assuming I'd hear about choice overload or price confusion — the friction I found myself. Instead, both women are **convinced buyers who trust the product** (echoing Feature 1 and the "genuine product" trust asset from my own walkthrough) and both, independently, complained about the same category of problem: **what happens after checkout.** Person 1's delivery dates slip with no warning, and a delivery partner appears to mark failed-delivery attempts that didn't happen. Person 2's orders get mislabelled "cancelled" or "returned" by the app itself, which then requires support to sort out. What sharpens this: Person 1 shops rarely and Person 2 shops often — different frequency, same wall. This isn't a light-user confusion problem; it holds for a heavy user too. Neither issue is something my own testing could have caught — I never reached a real delivery or a real support ticket. It's a real gap in this report, and a real gap in the product: Nykaa's trust problem isn't only "is this product real" — it's also "will the app tell me the truth about my order."

---

## 5. Recommendations

**Where these come from:** each row below is tied to something I actually saw in a journey above or heard in an interview — not a guess. I ranked them by how many people they'd likely help and how cheap they'd be to ship, using my own judgement, not a formal scoring model.

**The limit worth naming:** this is one person's exploration, over one day, on the desktop website, with no access to Nykaa's internal data — no traffic numbers, no conversion rates, no return rates, no A/B test results. I can point at where the friction is and roughly who it hits. I can't tell you the exact revenue or retention impact of fixing it — that needs Nykaa's own numbers, not mine.

| Priority | Fix | Problem it solves | One metric to watch |
|:--------:|-----|-------------------|---------------------|
| **P0** | After a skin-concern search, show a one-tap "Narrow" strip: Skin type → Concern → Budget, with a sensible combination pre-selected and a live count ("Showing 41 products for dry, sensitive skin under ₹800"). The filters already do this — the platform just needs to offer the combination instead of waiting. | 696 results for a specific, cautious purchase (Journey A). | Search → add-to-bag rate on concern searches. |
| **P1** | Personalize the logged-in home page: a "Buy again" / "recently viewed" row above the promo banners, plus 1-tap Reorder in My Orders. | A multi-year account with the same staples in order after order still gets no reorder path anywhere (Journey D, Feature 3). | Repeat purchase rate; time from open to add-to-bag for known users. |
| **P1** | On mobile web, let guests filter without logging in (desktop already allows this). Ask for login only at wishlist or checkout. | Login pop-up blocks the filter panel on mobile web (Feature 2). | Filter apply rate on mobile; guest bounce rate. |
| **P2** | When a search has a budget signal, or a price filter is applied, stop ranking sponsored items that are several times over budget above the best-fit result. Put sponsored items in their own labelled block. | ₹3,565–₹6,600 ads above a ₹336 fit; ads still rank first even after I filter by price (Journey A). | Click-through on the top 3 organic results; return rate on skincare. |
| **P1** *(from interviews, not my own testing)* | Make delivery status honest and proactive: notify *before* a date slips, with a reason; require a real delivery attempt (a call, a door knock) before marking a shipment "customer not home"; stop the app from auto-relabelling orders "cancelled" / "returned" without cause. | Two independent, unprompted interviews — both loyal, trusting buyers — complained about this and nothing else. | Delivery-date-accuracy rate; order-status-correction rate; support contact rate per order. |

**What I would NOT build:** an AI chat shopping assistant. The filters already exist and already match the category. The fix is to **use** them at the right moment, not add a new thing to learn.

---

## 6. Limitations (being honest)

- I explored on the **desktop website**, not the native app. Mobile-web notes (the filter login pop-up) are from an earlier check on the same site.
- I added one item, opened the bag and went to the **address step** of checkout, then stopped — I did not enter an address or pay.
- **One reproducible server error:** loading the bag page by its direct URL (`nykaa.com/shoppingbag/`) — not via the bag icon — returns **HTTP 503** every time. I checked the actual network response, not just the blank page, and confirmed it twice more just now, on top of hitting it across three separate sessions (guest, and two different logged-in accounts) over several hours. The in-app bag (icon → slide-out drawer) works fine every time; only a direct link, a bookmark, or a new tab hits this. I don't know the cause — I can't see their server logs — but it's consistent enough across independent sessions to be worth their team's attention, not a one-off glitch on my end.
- The second account was used only to check personalization, the Orders page, and search — read-only. No order details are reproduced here.
