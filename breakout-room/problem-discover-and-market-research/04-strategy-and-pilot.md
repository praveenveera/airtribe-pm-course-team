# Strategy and pilot

## 1. Strategic recommendation

### Recommended wedge

**Electric first/last-mile Uber Bike in dense Delhi transit catchments, delivered through fleet/energy partners and measured against a comparable petrol-bike cohort.**

This choice fits the evidence:

- the rider need is short, frequent, time-sensitive travel;
- Delhi’s scheme creates an electric-only onboarding condition;
- EV TCO improves with utilisation;
- Uber already has Bike demand and partner relationships; and
- the model remains reversible if regulation, uptime, or economics fail.

### What not to build

- No separate “Uber Electric India” app.
- No national EV-only deadline based only on public market growth.
- No Uber-owned fleet in the first phase.
- No promise of cheaper rides until the full contribution and partner economics are proven.
- No cross-border NCR operations without explicit permission for both origin and destination jurisdictions.
- No single-OEM, single-battery, or single-charging dependency.

## 2. Product and operating model

```text
Rider request in Uber Bike
          |
          v
EV eligible and available? ---- no ----> normal eligible Bike match
          |
         yes
          v
EV match + clear badge + ETA/fare
          |
          v
Trip safety + live operations telemetry
          |
          v
Driver earnings, battery, downtime, support and margin review
```

The EV should not create a longer wait without rider consent. In low-supply periods, preserve the rider’s core job—fast, affordable travel—and record the missed EV-match opportunity.

## 3. Pilot scope

| Element | Proposed scope |
|---|---|
| City | Delhi only; geo-fenced |
| Catchments | 10-15 metro/office/college clusters selected from Uber demand and driver heat maps |
| Duration | 4-week readiness phase + 12 live weeks |
| Supply | 300-500 road-legal high-speed e-two-wheelers through at least two partners |
| Drivers | Mix of experienced Bike drivers and new EV drivers; segment results |
| Rider experience | Existing Uber Bike flow with Electric badge; optional preference only if supply supports ETA |
| Comparison | Matched petrol-bike cohort by zone, time, driver tenure, and demand level |
| Operations | Charging/swap, preventive maintenance, roadside recovery, replacement vehicle, and battery health telemetry |

The 300-500 range is a **proposal**, not a forecast. Final size should be determined from baseline demand, minimum detectable effect, partner capacity, and safety-operating capacity.

## 4. Hypotheses

| ID | Hypothesis | Evidence needed |
|---|---|---|
| H1 | EV supply produces equal-or-better driver net earnings/hour than petrol bikes | Full driver cash ledger and matched cohort |
| H2 | Electric matching does not materially worsen ETA, completion, or cancellations | Dispatch and trip telemetry |
| H3 | Reliable EV supply increases completed trips in dense short-trip zones | Zone-level control/test comparison |
| H4 | Riders value the EV badge, but price and ETA remain the primary choice drivers | In-app choice test and interviews |
| H5 | Partner-led supply can meet uptime without Uber owning vehicles | Partner SLA and uptime logs |
| H6 | Delhi permissions and geo-fencing make compliance operationally enforceable | Legal sign-off and trip boundary audit |

## 5. Metrics

### North-star

**Completed EV-bike trips per online EV-driver hour**

Why: it combines rider demand, matching, vehicle uptime, charging downtime, and driver utilisation. Trips alone can be bought through discounts; online hours alone do not create customer value.

### Scorecard

| Area | Metric | Decision use |
|---|---|---|
| Rider value | Completed trips, pickup ETA, fare/km, repeat rate | Is the service useful and reliable? |
| Driver value | Net earnings/online hour and per day, cash outflow, retention | Does EV improve livelihood economics? |
| Marketplace | Acceptance, completion, cancellation, EV-match rate, deadhead km | Is supply dense and dispatch efficient? |
| EV operations | Online uptime, charge/swap wait, kWh/km, battery health, maintenance events | Does the vehicle system work under real load? |
| Safety | Incidents and near misses per million trips, helmet compliance, SOS/support response | Is the category safe enough to continue? |
| Business | Gross bookings, incentives/trip, partner cost/trip, support cost/trip, contribution/trip | Is growth economically durable? |
| Compliance | Unauthorised boundary crossings, permit/insurance exceptions, audit failures | Is operation legally controllable? |
| Sustainability | EV km, electricity source where known, estimated avoided tailpipe emissions | Is the environmental claim measurable? |

### Proposed exit criteria

Targets should be locked after the baseline week. Use relative gates rather than invented absolute promises:

- EV driver net earnings/hour are **not below** the matched petrol cohort after all costs.
- Pickup ETA, completion, and cancellation remain within pre-agreed non-inferiority bands.
- EV operational uptime meets the partner SLA and does not create material missed-trip hours.
- Contribution per trip reaches the finance-approved pilot path without permanent rider discounting.
- No unresolved critical safety or compliance event.
- At least two partners demonstrate recoverable operations during a simulated charger, battery, or vehicle outage.

## 6. Stop / rollback rules

Pause new rider exposure and revert to eligible non-EV Bike matching if any occurs:

- licence, permit, insurance, or operating-area authority is suspended or disputed;
- a critical safety event indicates a systematic vehicle, helmet, or operating-process defect;
- battery/charging outage breaches the maximum downtime threshold for two consecutive review periods;
- driver earnings remain below control after a defined remediation window;
- partner cannot provide auditable vehicle, battery, maintenance, or incident records; or
- the economics require open-ended discounts or guarantees with no credible path to contribution.

## 7. Research plan before launch

### Primary research

| Participant | Minimum learning goal | Example question |
|---|---|---|
| 12-15 current Bike riders | Understand recent short-trip choice and failure | “Tell me about the last 5 km trip when you considered a bike taxi. What did you choose and why?” |
| 12-15 current Bike drivers | Map actual cash flow, target, multi-homing, and EV objections | “Walk me through yesterday’s earnings, fuel, idle time, cancellations, and platform costs.” |
| 8-10 EV fleet drivers | Observe charging, range, service, and battery reality | “Show me the last time charging or repair made you miss rides.” |
| 3-5 fleet/energy partners | Validate capacity and failure recovery | “What uptime can you contract, how is it measured, and what happens during a station outage?” |
| City legal/operations teams | Confirm written permissions and boundaries | “Which licence, vehicle, driver, insurance, and trip-origin/destination rules apply today?” |

### Internal data request

- Bike trips/day, demand requests, completed trips, ETA, cancellation, active drivers, online hours, and trip length by 1 km grid/time band.
- Existing EV vehicle IDs, partner, city, uptime, km/day, trips/day, maintenance, charging, safety, earnings, and incentives.
- Rider cohort repeat and cross-mode behaviour: Bike → Auto/Car/Metro and Metro → Bike.
- Unit economics by city and mode: fare, take rate, incentives, payment cost, insurance, support, refunds, and city overhead.
- Licence and incident register by state.

## 8. Rollout sequence

```text
Validate (4 weeks) -> Pilot (12 weeks) -> Harden (2 cities) -> Scale selectively
       |                    |                   |                  |
 legal + partners     economics + safety   outage + season     city gate each time
```

### Phase 0 — Validate

- Complete primary research and internal baseline.
- Verify permits and partner assets.
- Test vehicles with pillion payload, heat, traffic, water exposure, and charging failure.
- Agree scorecard and stop rules.

### Phase 1 — Delhi pilot

- Launch only in selected zones.
- Run daily safety/operations review for week 1, then weekly.
- Compare against matched petrol cohort.

### Phase 2 — Harden

- Add a second Delhi operating zone and one Hyderabad catchment only after exit criteria pass.
- Run partner-outage and replacement-vehicle drills.
- Validate monsoon and high-temperature performance.

### Phase 3 — Selective scale

- Re-run legal, supply, economics, and safety gates for each city.
- Expand by demand density, not by national marketing calendar.

## 9. Final go/no-go question

At the end of the pilot, do not ask “Did EV rides grow?” Ask:

> **Can Uber deliver more completed short trips with equal-or-better driver earnings, non-inferior rider reliability, acceptable contribution, and auditable legal/safety control—without owning the fleet?**

If yes, scale one city at a time. If no, keep EV supply as a limited partner channel and fix the binding constraint before expansion.

---

Source IDs refer to [05-evidence-register.md](05-evidence-register.md).
