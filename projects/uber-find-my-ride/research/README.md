# Internet Research — Uber Find My Ride

**Research cutoff:** 16 September 2026  
**Geography:** Hyderabad primary; India context  
**Ride scope:** On-demand four-wheel passenger rides

## Purpose

Use public internet evidence to understand the market, current pickup journey, competing approaches, operating constraints, and likely problem areas **before** interviewing people.

Internet research improves the interview questions, but it does not replace the assignment's minimum 10 interviews. It cannot reliably tell us how often Hyderabad riders face the problem, how severe it is, or which solution they would actually use.

The reviewed execution sequence from manual validation through interviews and submission is maintained in [`../NEXT_PHASE_PLAN.md`](../NEXT_PHASE_PLAN.md).

## Evidence ladder

| Grade | Evidence type | How it may be used |
|---|---|---|
| A | Government, regulator, airport operator, or official product documentation | Establish rules, documented product behavior, or company-reported facts |
| B | Peer-reviewed research or credible independent reporting | Explain mechanisms, external context, or reported incidents |
| C | App-store reviews, forums, social posts, and user videos | Generate hypotheses and interview probes only |
| D | Our interpretation or calculation | Must be labelled as inference, assumption, or proposal |

Vendor pages remain vendor evidence even when they are primary sources for the vendor's own product. A company can reliably describe a feature it offers, but its claimed benefit still needs independent validation.

## Research coverage

1. Uber's current rider and driver pickup experience
2. Hyderabad airport and other complex pickup environments
3. Direct and adjacent alternatives
4. User complaints and workarounds
5. India shared-mobility demand signals
6. Four-wheel aggregator, location-data, accessibility, and airport rules
7. Academic evidence about pickup/drop-off and curb management
8. Market-sizing inputs and missing data

## Files

| File | Purpose |
|---|---|
| [`Uber_Find_My_Ride_Internet_Evidence.xlsx`](Uber_Find_My_Ride_Internet_Evidence.xlsx) | Structured tracker containing 94 curated evidence records, 72 non-API sources, the expanded YouTube inventory, and six mapped location inventories |
| [`desk-research-report.md`](desk-research-report.md) | Initial evidence-led findings and implications |
| [`source-register.md`](source-register.md) | Source-by-source evidence, strength, scope, and limitations |
| [`search-plan.md`](search-plan.md) | Search universe, queries, exclusions, and stopping rule |
| [`non-api-search-log.md`](non-api-search-log.md) | Reproducible non-API query families, outcomes, and saturation record |
| [`youtube-api-search-log.md`](youtube-api-search-log.md) | YouTube API method, query-code register, coverage, and evidence limits |
| [`osm-overpass-search-log.md`](osm-overpass-search-log.md) | OpenStreetMap method, six bounded location inventories, map signals, and evidence limits |
| [`api-requirements.md`](api-requirements.md) | Data still worth collecting through APIs or approved exports |

## Structured data status

The completed broad non-API sweep contains:

- 72 internet sources;
- 94 evidence records;
- 89 records currently marked in scope;
- 55 records with Hyderabad-specific geography; and
- explicit Grade A–D evidence labels and limitations.

The separate YouTube API inventory contains 1,547 search-result appearances and 753 unique videos. Manual title-and-description screening retained 21 high-priority pickup-video candidates and 80 possible-relevance videos. Comment retrieval across the 26 initially automated candidates returned 45 top-level comments and 42 replies; after manual screening, the workbook retains 31 top-level comments and 30 replies belonging to the strict 21-video set. Two strict videos had comments disabled. These remain unreviewed Grade C leads in the `YouTube Videos` and `YouTube Comments` sheets and have not been added to the 94 curated evidence records.

The OpenStreetMap collection covers six candidate Hyderabad environments: RGIA, Secunderabad Railway Station, Raidurg Metro area, Inorbit Mall Cyberabad, Apollo Hospitals Jubilee Hills, and DLF Cybercity. It retains 1,180 raw mapped elements and 96 focused feature rows in the `Location Maps` sheet. These map features identify gates, parking, transit, crossings, and other details to verify; they do not establish pickup-problem frequency, venue ownership, current access rules, or ride-hailing demand.

Airport evidence remains overrepresented because it has the strongest combination of official instructions and recent public discussion. The expanded sweep now covers metro and railway stations, office gates, gated communities, event venues, accessibility cases, and public-road rules. Mall and hospital operator evidence remains thin. The distribution must not be interpreted as proof that the airport is Hyderabad's largest pickup problem.

## Current conclusion

Desk research is worthwhile and should happen before interviews. The initial sweep shows that Uber already provides pins, communication, location sharing, suggested pickup points, airport directions, and some Hyderabad-specific airport support. The unresolved question is therefore:

> In which Hyderabad pickup situations do existing tools remain unavailable, unnoticed, inaccurate, inaccessible, or insufficient—and why?
