# Internet Search Plan

**Status:** Broad non-API sweep complete; targeted validation and API-assisted collection remain

## Search principle

There is no practical way to search “all of the internet.” The defensible approach is to cover every relevant **source family**, record the queries and dates, prefer first-party evidence, and stop when new searches stop changing the research questions.

## Source universe

| Source family | What we need | Examples |
|---|---|---|
| Uber official | Current pickup flow, local availability, rider/driver guidance, privacy, accessibility | Uber India newsroom, Help, HYD airport page, developer documentation |
| Direct competitors | Pickup features and operating patterns | Ola, Rapido, Lyft, Grab, BluSmart |
| Adjacent products | Indoor navigation, live location, venue wayfinding | Google Maps, WhatsApp, airport and mall apps |
| Government/regulator | Aggregator, privacy, accessibility, traffic, curb, and airport rules | MoRTH, India Code, Telangana Transport, AAI, RGIA |
| Market/industry | Ride-hailing activity and market structure | NASSCOM, NITI Aayog, government transport datasets |
| Academic | Pickup/drop-off, curb congestion, meeting points, accessibility | TRB/TRID, Transport Research journals, Google Scholar |
| Public user evidence | Language, incidents, workarounds, unmet needs | Play Store, App Store, Reddit, YouTube, public forums |
| Independent reporting | Local changes, enforcement, airport operations, safety | Established Hyderabad and national news outlets |

## Query groups

### Product and Hyderabad

- `site:uber.com Hyderabad pickup directions airport D1`
- `site:help.uber.com pickup rider exact location suggested pickup Spotlight`
- `Uber Hyderabad airport priority access`
- `Hyderabad Uber pickup mall office campus hospital railway station`
- `Rajiv Gandhi International Airport app cab pickup rules map`

### Competitors and alternatives

- `Ola Hyderabad airport pickup zone directions`
- `Rapido cab Hyderabad pickup location live location`
- `Grab airport pickup video guide`
- `Lyft pickup notes designated pickup`
- `Google Maps indoor navigation airport mall`

### User language and workarounds

- `Hyderabad Uber driver cannot find pickup`
- `Hyderabad airport Uber pickup confusing`
- `Hyderabad cab pickup cancellation driver location`
- site-limited versions for Reddit, YouTube, Google Play, and Apple App Store

### Market and demand

- `India ride hailing market four wheeler government report`
- `Hyderabad cab aggregator trips report`
- `India shared mobility NASSCOM report ride hailing`
- `Hyderabad airport passenger traffic AAI 2025 2026`

### Rules and restrictions

- `Motor Vehicle Aggregator Guidelines 2025 app location accessibility`
- `Telangana aggregator rules app cab 2025`
- `Hyderabad traffic police cab pickup no parking`
- `RGIA app cab designated pickup`
- `Digital Personal Data Protection location consent India`

### Research literature

- `ride hailing pickup dropoff curb congestion study`
- `rideshare meeting point optimisation`
- `airport ride hailing pickup wayfinding study`
- `older adults disability finding rideshare vehicle study`

## Inclusion rules

- Prefer official and current sources for feature availability, law, and local rules.
- Record publication date, access date, geography, vehicle mode, and source owner.
- Include an older source only when it establishes history or no current equivalent exists.
- Use public posts and reviews only to create hypotheses or recruit interview themes.
- Preserve contradictory evidence rather than choosing only evidence that supports the assignment proposition.

## Exclusion rules

- SEO pages with no transparent methodology
- Market-size numbers copied across sites without an original source
- Claims that mix bikes, autos, taxis, deliveries, and four-wheel passenger rides without a usable breakdown
- Complaints that cannot be separated from fare, driver availability, or trip-quality issues
- Product screenshots or videos whose location, date, or app version cannot be established

## Non-API sweep outcome

The broad sweep reached the stopping rule on 16 September 2026. The last two query rounds did not add a new cause, segment, location type, workaround, competitor pattern, legal constraint, or interview question. They repeated six established mechanisms:

1. indoor-to-curb wayfinding;
2. legal or physical stopping constraints;
3. choosing the correct gate, arm, or side;
4. peak crowd and traffic congestion;
5. accessibility burden from walking or communication; and
6. supply, fare, or cancellation failures that users may describe as pickup failures.

This is **search saturation**, not proof that every relevant webpage has been indexed or read. The reproducible query record is in [`non-api-search-log.md`](non-api-search-log.md).

## Targeted work remaining

1. Verify the live Hyderabad rider experience across selected location types.
2. Confirm current production-domain RGIA and Telangana implementation rules.
3. Observe current Ola, Rapido, and Uber Hyderabad app flows at selected locations.
4. Use APIs or approved exports for a bounded, reproducible review and discussion sample.
5. Convert the confirmed gaps into neutral interview questions.

API and export requirements are listed in [`api-requirements.md`](api-requirements.md). No credentials are stored in this repository.

## Stopping rule

Stop broad searching when two consecutive query rounds add no new:

- problem cause;
- affected segment;
- location type;
- workaround;
- competitor pattern;
- legal/operating constraint; or
- interview question.

Then shift effort to observation and interviews, which provide stronger evidence for this assignment.
