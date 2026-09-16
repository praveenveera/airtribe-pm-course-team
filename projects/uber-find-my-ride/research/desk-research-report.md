# Initial Desk Research Report

**Status:** Initial broad sweep complete; evidence gaps remain  
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

1. Audit the live Uber rider flow at selected Hyderabad locations using screenshots or observation, without booking unnecessary rides.
2. Confirm current rules and pickup maps with airport, mall, campus, hospital, and venue sources.
3. Sample and code recent app-store/forum posts as hypothesis data, not as interviews.
4. Finalise an interview guide that separates:
   - finding the legal pickup zone;
   - walking to it;
   - driver reaching it;
   - rider and vehicle identifying each other;
   - queue or assignment delays;
   - cancellation, safety, and accessibility consequences.
5. Conduct at least 10 interviews and compare their evidence with the desk-research hypotheses.

## 8. Core research question for interviews

> Tell me about the last time you had difficulty meeting a cab at the pickup point in Hyderabad. Starting before you booked, what happened step by step until you entered the vehicle or the ride was cancelled?

This wording asks for a real past event. It avoids leading the participant toward a proposed feature.
