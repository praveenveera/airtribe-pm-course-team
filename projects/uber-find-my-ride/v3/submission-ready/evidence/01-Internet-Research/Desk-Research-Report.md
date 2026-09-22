# Initial Desk Research Report

**Status:** Broad non-API, YouTube API, and location-mapping collections complete; manual review, observation, and interviews remain
**Research cutoff:** 16 September 2026

## 1. Research goal

Understand the scale and shape of pickup-coordination difficulty for four-wheel Uber rides in Hyderabad before conducting interviews or proposing features.

The key decision is not simply whether pickup confusion exists. It is whether a frequent, severe, and insufficiently solved problem remains after accounting for Uber's existing capabilities and location-specific operating rules.

## 2. Plain-language view

```text
Internet research can tell us:             Interviews must tell us:

What products and rules exist              What actually happened
What people publicly complain about        How often it happens
Which locations appear difficult           Why it was difficult
What competitors have tried                Which workaround helped
What data we still lack                    What users value enough to change
```

## 3. What the internet currently supports

The structured sweep retained **72 sources and 94 evidence records**. Of these, 89 are marked in scope and 55 are Hyderabad-specific. These counts describe the research corpus, not the number of affected users.

### 3.1 There is meaningful ride-hailing activity, but no defensible problem-size estimate yet

- Uber reported that India trips covered **11.6 billion kilometres in 2025**. This is company-reported activity across products and cities; it is not a count of Hyderabad four-wheel pickups. [Uber, 2026](https://www.uber.com/in/en/newsroom/how-india-ubered-in-2025-everyday-travel-extraordinary-scale/)
- Uber's 2023 summary placed Hyderabad among its six Indian cities with the highest trip counts and described Uber Go as a popular four-wheel category. This establishes relevance, not the frequency of pickup problems. [Uber, 2023](https://www.uber.com/in/en/newsroom/how-india-ubered-in-2023-a-year-in-rear-view/)
- A NASSCOM-hosted shared-mobility report describes ride-hailing as a distinct part of India's shared-road-mobility market. Its market estimates require a separate methodology check before use in sizing. [NASSCOM-hosted report](https://community.nasscom.in/sites/default/files/report/30687-report---growth-drivers-and-underlying-opportunities-in-india-s-shared-mobility-ecosystem.pdf)

**Inference:** Hyderabad is a relevant research market, but public data does not tell us how many Hyderabad four-wheel trips encounter avoidable pickup difficulty.

### 3.2 Uber already addresses several parts of the problem

Uber documents the following pickup mechanisms:

- a rider-selected or adjusted pickup pin;
- suggested pickup spots in some locations;
- in-app call and messaging;
- vehicle, driver, and licence-plate identification;
- optional precise/live rider location sharing;
- Spotlight, which helps the driver visually identify the rider's phone;
- specific pickup points at some airports and event venues;
- step-by-step directions to pickup at Hyderabad airport.

Sources: [Uber pickup guidance](https://www.uber.com/us/en/ride/how-it-works/pickups/), [Uber driver pickup guidance](https://help.uber.com/en/driving-and-delivering/article/picking-up-riders?nodeId=c57f4b7e-16a4-4508-80ef-3425deb1fcee), [Uber precise-location help](https://help.uber.com/en/riders/article/c%C3%B3mo-comparto-mi-ubicaci%C3%B3n?nodeId=469ed54f-3c45-4efc-8aa3-aafdf316a6b2), and [Hyderabad airport pickup](https://www.uber.com/global/en/r/airports/hyd/pickup/).

In July 2025, Uber said **Airport Priority Access** was live in Hyderabad and Pune, allowing a rider to walk from baggage claim toward a waiting ride. This is a vendor description; adoption, eligibility, and impact have not been independently verified. [Uber India newsroom](https://www.uber.com/in/en/newsroom/uber-features-make-rides-more-affordable-accessible-elevated/)

**Implication:** The assignment should investigate gaps in coverage, discoverability, accuracy, accessibility, and user behaviour. “Add navigation” is not yet a research-led answer because navigation already exists in at least some contexts.

### 3.3 Hyderabad airport is a useful high-complexity case

Uber's official HYD page describes at least two different pickup flows:

- the airport taxi zone between pillars 4 and 5 after arrivals; and
- the Uber pickup zone at D1, reached through a multi-step path involving the information desk, escalator, Aeroplaza, and Uber help desk.

Uber also says the exact pickup location can depend on ride type, terminal, local rules, and conditions. [Uber HYD pickup directions](https://www.uber.com/global/en/r/airports/hyd/pickup/)

Public Hyderabad discussions and videos mention long walks, unclear zones, queues, touts, or difficulty supporting older relatives. These are useful interview prompts, but anonymous posts and videos are not representative evidence. They may also mix different problems: finding the zone, finding the assigned vehicle, driver availability, cancellation, price, and safety.

**Implication:** “Airport pickup difficulty” must be decomposed into separate moments rather than treated as one problem.

### 3.4 Competitors and adjacent products use several patterns

| Product | Documented approach | Learning for research | Limitation |
|---|---|---|---|
| Grab | Short in-app video walkthroughs for complex venues such as airports and malls | Visual landmarks may explain indoor-to-curb movement better than a map | Grab's stated cancellation benefit is a vendor goal, not validated Hyderabad evidence |
| Ola | Historical dedicated Ola Zones with on-ground staff at RGIA and a queue-based “first cab” flow at Inorbit Mall | A physical zone, staff support, and pooled assignment can replace one-to-one vehicle searching | The pages are old; current availability and performance must be verified |
| Lyft | Pickup notes, gate codes, clothing/cross-street prompts, movable pickup point, airport guidance | Structured rider context can reduce free-form coordination | Product availability and relevance in Hyderabad are unproven |
| Google Maps | Indoor floor plans, floor switching, photos, and some indoor navigation | Indoor context can bridge the gap between GPS and a physical exit | Coverage varies; it is not integrated with a live driver rendezvous |
| Manual workarounds | Calls, messages, landmarks, live-location links, moving the pin, asking security staff | Users already assemble a solution from multiple tools | Frequency and effectiveness must be validated in interviews |

Sources: [Grab video guides](https://www.grab.com/inside-grab/stories/were-making-pickups-easier-with-video-guides-in-the-grab-app/), [Ola Zone at RGIA](https://blog.olacabs.com/176775529-2/), [Ola Zone at Inorbit Mall](https://blog.olacabs.com/boarding-your-cabs-just-got-easier/), [Lyft pickup notes](https://help.lyft.com/hc/en-us/all/articles/360047353153), and [Google indoor maps](https://support.google.com/maps/answer/2803784).

**Fresh competitor check (17 September 2026):** The compact, current-source comparison is in [`competitor-analysis.md`](competitor-analysis.md). It confirms Uber’s current HYD airport directions and retains the essential distinction that Grab’s guidance is experimental, Ola’s local zone evidence is historical, and Rapido has no pickup-guidance-specific evidence in the sources checked.

**Survey-sourced addition (17 September 2026):** one respondent (R034, non-Hyderabad) reported switching to Rapido primarily on price ("Prices are high. So preferring rapido most of the time"), not pickup difficulty. This is a single mention, not a trend claim, but it flags Rapido as a real substitution option in this market that the desk research had not previously named — worth a line in the final competitive-alternatives section even though no pickup-specific Rapido evidence was found.

### 3.5 The problem is partly physical and regulatory, not only digital

Academic work on ride-hailing pickup/drop-off describes competition for curb space, vehicle queues, congestion, and the use of designated zones or geofencing. It supports the mechanism that a technically accurate pin may still be an illegal, unsafe, or inaccessible stopping point. These studies are not evidence of Hyderabad demand.

Examples: [curbside pricing and ride-hailing queues](https://doi.org/10.1016/j.trc.2023.104209), [geofenced pickup/drop-off zones](https://trid.trb.org/View/1759804), and [meeting-point optimisation](https://doi.org/10.1016/j.trc.2020.102667).

**Implication:** Interviews must ask about gates, medians, one-way roads, parking restrictions, security rules, luggage, weather, crowding, and safe walking—not only map accuracy.

### 3.6 Location and accessibility are regulated design inputs

The central [Motor Vehicle Aggregator Guidelines 2025](https://morth.nic.in/sites/default/files/circulars_document/MV-Aggregators-Guidelines-2025%20-%20English%20and%20Hindi.pdf) include app, safety, location-sharing, language, accessibility, grievance, and data-storage requirements. Relevant clauses include:

- journey and passenger data must be stored under applicable law, including the Digital Personal Data Protection Act;
- the app must support live journey-status/location sharing during the journey;
- the app must include accessibility features for persons with disabilities;
- driver identity and contact information, safety controls, and grievance support are regulated.

The [Digital Personal Data Protection Act, 2023](https://www.indiacode.nic.in/indiacode/handle/123456789/22037?view_type=browse) creates the broader lawful-purpose, notice, consent, access, correction, erasure, and grievance framework for digital personal data.

**Important limitation:** Whether and how Telangana has adopted or supplemented the 2025 central guidelines requires current legal verification. Airport and local stopping-zone rules also need venue-level confirmation. This report is product research, not legal advice.

### 3.7 Non-airport Hyderabad evidence changes the problem framing

The expanded sweep shows that the airport is not the only complex pickup environment:

- At **Raidurg Metro**, official station information uses arm-specific access and feeder pickup points. HMRL also called for more systematic peak passenger movement, while current reporting describes recurring congestion on the narrow approach road. [L&T Metro](https://ltmetro.com/stations/raidurg/), [HMRL](https://hmrl.co.in/hmrl-additional-md-sri-ajith-reddy-conducts-field-inspection-of-metro-stations-plans-for-enhanced-passenger-services/), and [Telangana Today](https://telanganatoday.com/raidurg-metro-traffic-woes-persist-as-road-widening-awaits)
- At **Secunderabad Railway Station**, a reported SCR crowd study found a strong Platform 1-side concentration and advised Platform 10 for more spacious access, lifts, footbridges, and parking during redevelopment. Historical Ola material also shows that dedicated station counters and zones have been tried. [Telangana Today](https://telanganatoday.com/scr-gears-up-with-scientific-crowd-management-plan-for-festive-season) and [Ola](https://blog.olacabs.com/176778325-2/) **Update, 17 September 2026 (desk-only check, not field-verified):** more recent redevelopment reporting confirms concrete, current rules — the Platform 1 side now permits pick-up/drop only (no idle parking), and the Platform 10 side runs an Access Control System with a **free 15-minute pickup/drop window** before overstay charges apply. This is the clearest confirmed example in this project of a time-boxed legal stopping constraint directly shaping pickup coordination. [Telangana Today, 2026](https://telanganatoday.com/secunderabad-station-redevelopment-parking-curbs-new-traffic-rules-announced)
- At **Cyberabad office gates**, police identified waiting cabs and autos as congestion contributors and recommended internal pickup/drop-off bays. This directly shows why an app cannot solve curb capacity without venue cooperation. [Telangana Today](https://telanganatoday.com/cyberabad-police-urge-it-firms-to-revamp-transport-traffic-practices)
- During a **Parade Grounds event**, ride-hailing users were directed to four named external nodes. Temporary traffic plans can therefore move the valid pickup point away from the venue pin. [Hyderabad Mail](https://hyderabadmail.com/international-kite-sweet-festival-2026-hyderabad-traffic-advisory/)
- Public cases involving an elderly passenger, an injured rider, and a grandparent unable to walk suggest that a small map or walking mismatch can become a material accessibility failure. They remain interview leads, not prevalence evidence.

**Inference:** The common entity is not “airport navigation.” It is a changing **pickup environment** made of entrances, access rules, pedestrian paths, legal stopping space, crowd conditions, and rider capability.

### 3.8 Competitor patterns go beyond “show a better map”

The broader comparison adds five design patterns:

| Pattern | Public example | Research lesson |
|---|---|---|
| Guide before booking | Grab moved venue guidance earlier after finding that travellers preferred to reach the pickup point before requesting | Test when guidance is needed, not only what it says |
| Curated, operationally valid points | Grab Meeting Points and Waymo pullover spots account for unsafe or unreachable curbs | A selectable point should be physically and legally usable |
| Walking as an explicit trade-off | Waymo alerts for longer walks and offers a minimise-walking preference | Ask users when a shorter walk is worth a longer vehicle approach |
| Structured gate handoff | MyGate verifies a driver at the society gate without exposing the flat number | Venue access and privacy can be coordinated together |
| Human or assisted bridge | Ola counters, venue information desks, and Lyft Assisted add physical help | Some riders need service support, not more map precision |

These are patterns to test, not recommendations for Uber Hyderabad.

### 3.9 Public context can size exposure pools, not the problem

- GMR reports more than **30 million Hyderabad Airport passengers in FY2025-26**. [GMR](https://www.gmrgroup.com/airports-and-aero-services/airports/hyderabad-airport)
- Hyderabad Metro reported average daily ridership above **4.75 lakh across 57 stations** in November 2024. [L&T Metro](https://www.ltmetro.com/wp-content/uploads/2025/01/28-11-2024-Press-Release-Hyderabad-Metro-Rail-Celebrates-its-7th-Anniversary-181-Chief-Guest.pdf)
- Secunderabad station was reported at about **1.30 lakh passengers per normal day**, rising above 2 lakh during festivals. [Telangana Today](https://telanganatoday.com/scr-gears-up-with-scientific-crowd-management-plan-for-festive-season)

These numbers justify studying complex pickup locations. They cannot be multiplied by invented “problem percentages” and called a market size.

### 3.10 The YouTube API adds a review queue, not prevalence evidence

The expanded YouTube Data API collection returned 1,547 search-result appearances, which deduplicated to 753 videos. An automated metadata screen initially selected 26 candidates for complete accessible comment-thread retrieval. A manual title-and-description check then downgraded five promotional, adjacent, or wrong-geography results, leaving 21 high-priority pickup-video candidates and 80 possible-relevance videos.

Across the 26 initially selected candidates, the API returned 45 top-level comments and 42 replies. After the manual screen, the workbook retains 31 top-level comments and 30 replies belonging to the strict 21-video set. Two strict videos had comments disabled. “Complete” means every page exposed by the public API at collection time; it does not include deleted, moderated, private, or otherwise unavailable comments.

The complete deduplicated video inventory is stored in the workbook's `YouTube Videos` sheet. The `YouTube Comments` sheet distinguishes top-level comments from replies and links each reply to a local anonymous parent record. Titles, descriptions, and English-keyword signals are only screening aids. Videos must be watched and comments interpreted in context before any item is promoted into the curated evidence table.

**Implication:** the API helps us find visual walkthroughs and candidate user language efficiently. It still cannot tell us how frequent or severe pickup problems are in Hyderabad, and it does not replace interviews.

### 3.11 Map data turns “complex location” into specific field probes

The OpenStreetMap collection produced bounded inventories for six candidate environments: RGIA, Secunderabad Railway Station, the Raidurg Metro area, Inorbit Mall Cyberabad, Apollo Hospitals Jubilee Hills, and DLF Cybercity. Across them, the extract contains 1,180 mapped elements; the workbook retains 96 focused rows covering entrances, relevant gates or barriers, parking, taxi stands, transit features, and pedestrian crossings.

The useful output is not the element count. It is a more concrete validation list. For example, Secunderabad's mapped platforms and entrances raise side-and-platform questions; Inorbit's main and parking entrances raise level-and-gate questions; DLF's named gates and surrounding crossings raise access-and-safe-stopping questions. Apollo and DLF are representative candidates, not proven hotspots.

OpenStreetMap is volunteer-maintained, and each bounded extract includes surrounding streets and facilities. Missing tags do not prove absence, mapped access tags do not confirm current venue policy, and counts do not measure demand or problem prevalence. See the workbook's `Location Maps` sheet and [`osm-overpass-search-log.md`](osm-overpass-search-log.md).

**Implication:** verify which side, gate, level, landmark, walking path, and stopping point is actually usable in the live app and on site. Then ask participants about those concrete decisions instead of asking only whether a location was “confusing.”

## 4. Early hypotheses—not interview insights

| ID | Hypothesis to test | Why it is plausible | What would disprove it |
|---|---|---|---|
| H1 | The hardest gap is indoor-to-outdoor navigation, not the final GPS pin | HYD and Grab flows use multi-step landmark guidance | Most difficult cases occur on ordinary streets after the rider is already outside |
| H2 | Existing pickup guidance is not noticed or understood at the right time | Uber has guidance, yet public confusion still appears | Most riders discover, follow, and trust the guidance successfully |
| H3 | A precise rider location is insufficient when drivers cannot legally or physically reach it | Curb, gate, and airport controls constrain stopping | Difficulties are mostly caused by inaccurate GPS rather than access rules |
| H4 | Luggage, age, disability, language, weather, and travelling with dependants increase the burden | These factors change the cost of walking and communicating | These factors show no repeated effect across participants |
| H5 | Users combine several distinct failures under “driver could not find me” | Public complaints mix zone-finding, matching, queuing, cancellations, and safety | Interviews reveal one dominant, consistent cause |
| H6 | Airport and non-airport pickups require different interventions | Airport zones and queues are highly controlled | The same failure pattern and workaround repeats across location types |

## 5. Market-sizing approach

A responsible estimate needs this structure:

```text
Annual affected pickups
= annual Hyderabad Uber four-wheel pickups
× share beginning at complex locations
× share experiencing material pickup difficulty
```

None of the three inputs is currently available from a reliable public source. We should not insert invented percentages merely to produce a large TAM.

Useful sizing evidence would include:

- Uber Hyderabad four-wheel trip volume;
- trips by pickup-location type;
- rider/driver contact rate before pickup;
- pickup-pin changes after matching;
- driver arrival-to-trip-start time;
- rider or driver cancellation attributed to pickup coordination;
- support contacts tagged to “cannot find rider/driver”; and
- interview incidence, used only as directional evidence rather than citywide prevalence.

Without internal data, the assignment can present a **market-sizing model and data gaps**, supported by India/Hyderabad demand proxies, instead of a false precise estimate.

## 6. What we can and cannot claim now

| Supported now | Not supported yet |
|---|---|
| Hyderabad is a high-activity Uber city based on older company reporting | The percentage of Hyderabad riders affected |
| HYD has controlled and multi-step pickup flows | Airports are the largest problem segment |
| Uber already offers multiple coordination tools | Those tools are effective or ineffective for most users |
| Competitors use notes, indoor maps, and visual walkthroughs | Any one pattern will solve Hyderabad's problem |
| Location, accessibility, safety, and stopping rules matter | A specific feature is legally or operationally approved |
| Public posts provide plausible failure stories | Public posts represent the rider population |

## 7. Research direction before interviews

**Status update, 17 September 2026:** items 1, 3, and 4 below were superseded by two deliberate scope decisions once primary survey data existed (62 responses). Item 3 (further YouTube review) was stopped — see [`youtube-manual-review-log.md`](youtube-manual-review-log.md) for the rationale. Items 1 and 4 (live field/app audits) were substituted with a desk-only public-source check — see [`location-validation-desk-only.md`](location-validation-desk-only.md), which found one genuinely new fact (Secunderabad's 15-minute access rule, folded into §3.7 above) and otherwise confirmed the original gaps remain unverified. Item 2 is addressed by the same desk-only check. Item 5 was completed via the survey instrument itself (see `../interviews/`). Item 6 is complete (62 responses; see `../synthesis/01-survey-insights.md`).

1. ~~Audit the live Uber rider flow at selected Hyderabad locations using screenshots or observation, without booking unnecessary rides.~~ Substituted with desk-only check.
2. ~~Confirm current rules and pickup maps with airport, mall, campus, hospital, and venue sources.~~ Addressed via desk-only check.
3. ~~Manually review the high-priority YouTube videos and comments; keep accepted Grade C evidence separate from interviews.~~ Deliberately stopped at 3 of 21.
4. ~~Field-check the six mapped candidates, treating OpenStreetMap features as probes rather than verified access facts.~~ Substituted with desk-only check.
5. Finalise an interview guide that separates:
   - finding the legal pickup zone;
   - walking to it;
   - driver reaching it;
   - rider and vehicle identifying each other;
   - queue or assignment delays;
   - cancellation, safety, and accessibility consequences.
6. Conduct at least 10 interviews and compare their evidence with the desk-research hypotheses.

The public non-API search itself has reached the stopping rule. See [`non-api-search-log.md`](non-api-search-log.md) for the query coverage and [`api-requirements.md`](api-requirements.md) for the next data-access options.

## 8. Core research question for interviews

> Tell me about the last time you had difficulty meeting a cab at the pickup point in Hyderabad. Starting before you booked, what happened step by step until you entered the vehicle or the ride was cancelled?

This wording asks for a real past event. It avoids leading the participant toward a proposed feature.
