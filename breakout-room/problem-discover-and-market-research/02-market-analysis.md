# Market analysis

## 1. Problem before market size

### Rider problem

Short urban trips are often a bad fit for both extremes:

```text
Public transport                     Car/cab
cheap but not door-to-door           door-to-door but slower/costlier
          \                           /
           \                         /
            bike taxi: 3-8 km utility trip
               fast + affordable + direct
```

KPMG describes bike taxis as most suitable for short point-to-point trips and first/last-mile travel. A cited 2020 study found 65-70% of users used them for first/last-mile connectivity. Its driver survey found an average trip around 6 km. [S05]

### Driver problem

The electric vehicle can lower lifecycle cost, but it can also create new debt and lost earning time. The driver does not buy “sustainability”; the driver buys a dependable path to the daily earning target.

KPMG’s 2023 survey found:

- about 55% drove 6-10 hours per day;
- full-time drivers completed about 13 trips per day versus 8 for part-time drivers;
- average reported monthly net earnings were around ₹20,000;
- 55% worked on two or more platforms;
- 100% used an existing motorcycle; and
- EV-only concerns centred on another vehicle, upfront cost, range, and carrying capability. [S05]

### Business problem

Uber needs to defend a high-frequency utility category against a bike-first leader while preserving driver supply and city permission. Electrification is valuable only if it improves or protects trip economics and availability.

## 2. Market demand

### What is known

| Evidence | Value | Interpretation | Confidence |
|---|---:|---|---|
| Estimated bike-taxi rides across three aggregators, 2022 | 280 million | The category was already material four years ago | Medium; KPMG estimate |
| Typical trip length in driver survey | ~6 km | EV range can support trips, but deadhead distance and charging still matter | Medium-high |
| Trips in 4-8 km band | ~50% | Strong last-mile/short-trip wedge | Medium-high |
| Uber Moto trips to/from NCR metro stations, 2022 | >1.9 million | Uber already saw a transit-connector use case | Medium; Uber-reported |
| Rapido daily rides, all categories, Feb 2025 | >3 million | Shows marketplace scale, not electric scale | Low-medium; company statement |
| Rapido daily rides, all categories, reported Sep 2026 | >5 million | Scale and density are increasing | Low-medium; company statement |
| India e-two-wheeler sales, FY2024-25 | 1,149,334 | Vehicle ecosystem is expanding | High; government release |

### Market bracket—not a fake forecast

There is no audited public 2026 bike-taxi trip total in the reviewed sources. The defensible approach is a wide bracket.

#### Historical observed/estimated anchor

- 280 million annual rides in 2022. [S05]
- Average trip: 6 km. [S05]
- KPMG’s 2023 fare range: ₹8-10/km. [S05]
- Implied average fare: `6 × ₹8-10 = ₹48-60`.
- Implied 2022 annual gross booking value: `280m × ₹48-60 = ₹1,344-1,680 crore`.

#### 2025 scale ceiling from company claims

Rapido said in February 2025 that it handled more than 3 million total daily rides, including more than 1 million auto rides and nearly 0.5 million cab rides. This leaves **at most** about 1.5 million daily bike rides. [S11]

Rapido separately claimed 70% bike-taxi share in April 2025. [S12]

Using those claims only as a ceiling:

```text
Rapido bike rides <= 1.5m/day
Implied market <= 1.5m / 70% = 2.14m/day
Annual rides <= 2.14m × 365 = 782m
Annual GBV <= 782m × ₹48-60 = ₹3,754-4,693 crore
```

**Caution:** this is not a 2026 TAM forecast. The inputs are company statements from different dates, category definitions may differ, and the fare assumption is from 2023. It is an order-of-magnitude planning ceiling. The usable evidence bracket is therefore **280 million historical rides to a roughly 782 million inferred annual ceiling**, not a single precise number.

## 3. Market growth drivers

| Driver | Evidence | Implication for Uber |
|---|---|---|
| Utility-led ride growth | Redseer says autos and two-wheelers are driving incremental growth | Bike cannot remain a side category |
| Congestion and short trips | Bike form factor saves time on 3-8 km journeys | Focus on commute and transit catchments |
| Affordability | Historical fares were materially below cabs | Rider value is price/time, not only green identity |
| EV TCO | CEEW: ₹1.48/km electric vs ₹2.46/km petrol national average | Savings can fund lower fare, driver income, or margin |
| e-2W ecosystem scale | 1.149m sold in FY2024-25; policy support continued into 2026 | More vehicle and service choices should emerge |
| State EV mandates | Delhi’s aggregator scheme requires newly onboarded bike taxis to be electric | Regulation can create an EV-only opening |
| Multi-modal platforms | Uber combines bikes, autos, cars, metro, bus, and intercity products | Strong position for first/last-mile trip chaining |

## 4. Market constraints

| Constraint | Why it matters | Evidence status |
|---|---|---|
| State-by-state legality | A technically working product can still be unlawful in a city | High-confidence fact |
| Driver capital | Most drivers already own an ICE bike and may not want a second asset | High-confidence survey evidence, 2023 |
| Charging/swap downtime | A cheap kilometre is irrelevant if the driver is offline | Known risk; city-specific data missing |
| Pillion performance | Real range changes with payload, heat, traffic, and battery health | Pilot unknown |
| Safety | Two-wheelers expose rider and driver; incidents can stop a market | Material but comparable public incident rates unavailable |
| Driver multi-homing | Supply moves to the platform with better demand and earnings | KPMG found 55% on 2+ platforms |
| Low ticket margin | A high-volume ₹25-60 category leaves little room for subsidies | Redseer evidence; Uber economics unknown |
| Competitor density | Rapido’s bike-first network creates shorter pickup times and brand recall | Company-claimed leadership |

## 5. Regulatory market map

This is a **screening view, not legal advice**. Obtain current written counsel and licensing confirmation before launch.

| Geography | Current evidence reviewed | Launch view |
|---|---|---|
| India / central | 2025 guidelines say states *may* permit aggregation of non-transport motorcycles | No automatic national right to operate |
| Delhi | 2023 scheme allows bike taxis but requires vehicles newly onboarded from commencement to be electric; compliance conditions apply | **Best pilot candidate**, subject to live licence and permit verification |
| Telangana / Hyderabad | State rules recognise motorcycle taxis as contract carriages; market has Uber/Rapido/Ola history | **Second-wave candidate**, verify current aggregator and vehicle permissions |
| Maharashtra | 2025 rules contemplated electric bike taxis, but provisional licences for Ola, Uber, and Rapido were revoked in March 2026 | **No-go until written reinstatement** |
| Karnataka / Bengaluru | Court action halted services pending a state framework; earlier EV bike-taxi scheme was withdrawn | **No-go until rules and licence are effective** |
| Other states | Policy and enforcement vary | City-by-city legal checklist required |

## 6. EV economics

### Structural advantage

CEEW’s 2025 national model estimated:

| Powertrain | National-average 2W TCO |
|---|---:|
| Electric | ₹1.48/km |
| Petrol | ₹2.46/km |
| Difference | **₹0.98/km lower for electric** |

At 100 km/day, this model implies about ₹98/day lower lifecycle cost, before any platform-specific lease, charging subscription, or downtime effect. That is an **illustration from the model**, not a driver-income promise.

### Why TCO alone is insufficient

Total cost of ownership spreads purchase, financing, energy, maintenance, battery replacement, and resale cost over usage. Driver cash flow is different. A driver can have lower lifetime TCO and still reject the EV because of:

- down payment or lease deposit;
- weekly rental or battery subscription;
- missed trips while charging or waiting for service;
- limited service coverage;
- uncertain resale value;
- inability to use the vehicle for personal or intercity needs; and
- fear that platform incentives will end before financing does.

The pilot must therefore measure `net earnings / online hour`, not only `₹ / km`.

## 7. Industry structure: five forces

| Force | Strength | Why |
|---|---|---|
| Rivalry | **Very high** | Rapido, Ola, Uber, local/cooperative apps, and aggressive price promotions |
| Driver supplier power | **High** | Drivers multi-home; EV-capable supply is scarcer and depends on energy/maintenance partners |
| Rider power | **High** | Low switching cost and strong price/ETA sensitivity |
| Substitutes | **High** | Auto, metro, bus, walking, self-owned two-wheeler, and self-ride EV |
| New-entry threat | **Medium** | App entry is possible, but network density, regulation, safety operations, capital access, and trust are hard |

## 8. Market conclusion

This is an attractive **city-level operating opportunity**, not yet a clean national expansion case. The market rewards density and operational discipline more than an EV label. Uber should enter where regulation makes electric supply legal or advantageous and where partners can remove driver capital and downtime barriers.

---

Source IDs refer to [05-evidence-register.md](05-evidence-register.md). Calculations are also available in [data/market-sizing.csv](data/market-sizing.csv).
