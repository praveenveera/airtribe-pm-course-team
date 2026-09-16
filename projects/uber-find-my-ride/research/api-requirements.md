# API and Approved-Export Requirements

**Status:** YouTube collection completed; Reddit API dropped; other credentials not requested
**Purpose:** Collect larger, reproducible samples after the non-API sweep

## Recommended order

| Status | Source | What it adds | What is needed from the requester | Main limitation |
|---|---|---|---|---|
| Complete | YouTube Data API v3 | Search inventory, metadata, statistics, complete accessible top-level threads, and replies for the strict pickup-video set | Existing IP- and API-restricted key stored in the ignored project `.env` | Ranked public results remain anecdotal and require manual content review |
| Next without key | OpenStreetMap Overpass API | Entrances, gates, parking, service roads, access tags, and nearby road structure for selected venues | Nothing | Map completeness varies; it does not reveal Uber demand or venue rules |
| Later if justified | Google Maps Platform | Venue inventory, entrances, road access, walking paths, and distance estimates for selected sites | API key restricted to Places, Routes, and Geocoding APIs; billing project | Does not reveal Uber usage, venue rules, or actual pickup failures |
| Optional only if already licensed | X API | Current public complaints and traffic/advisory posts by keyword and date | Existing approved bearer token and usage tier | Paid access, sampling bias, deleted posts, and terms restrictions |
| Optional approved export | App-review export or approved provider | Larger bounded sample of Uber/Ola/Rapido reviews with dates and ratings | A lawful export or licensed provider access; no unofficial scraping credentials | Reviews usually lack city and pickup-location metadata |

## Dropped approach

The Reddit API approach was dropped on 16 September 2026. Reddit's current policy routes research through Reddit for Researchers, whose institutional, sponsorship, and ethics requirements are not a practical fit for this coursework. Existing manually discovered Reddit pages remain Grade C leads; no automated Reddit collection will be attempted.

## Useful APIs that do not need a private credential

- **OpenStreetMap Overpass API:** map entrances, gates, parking, service roads, and access tags around selected venues. It can enrich fieldwork but cannot establish ride-hailing demand or current venue policy.
- **Government/open-data endpoints:** use if a current Telangana, airport, metro, or transport dataset exposes a documented public endpoint. Availability must be confirmed before relying on it.

## Data that public APIs will not provide

The most decision-relevant data is internal platform telemetry. A normal Uber developer key does **not** provide it. This would require Uber-internal access or an approved data partnership:

- Hyderabad four-wheel pickup count by location type;
- rider-driver call or message rate before pickup;
- pickup-pin changes after matching;
- driver arrival-to-trip-start time;
- pickup-related rider and driver cancellations;
- support contacts tagged to “cannot find rider/driver”;
- suggested-pickup exposure, selection, and success; and
- accessibility-feature usage and outcomes.

## Credential handling

When access is ready:

1. share only the minimum required credential;
2. restrict keys by API, origin/IP, and quota where the provider supports it;
3. provide credentials through a secure local environment or secret store, not a committed file;
4. never place keys, tokens, or secrets in this repository or the research workbook; and
5. revoke or rotate temporary credentials after collection.

## Next collection

Use OpenStreetMap Overpass without another credential to map a small set of Hyderabad pickup environments. Prioritise RGIA, Secunderabad Station, Raidurg Metro, Inorbit Mall, one hospital, and one office or gated-community entrance. Use the map only to prepare observation and interview probes; verify actual access and pickup rules on site.

After the YouTube search quota resets, a separate Telugu/Hindi query pack can reduce English-query bias. It should be logged as a new collection window rather than merged invisibly into the English-query method. Caption or transcript downloads are not part of the current API-key collection and would need a separate authorised workflow plus a content-use review.
