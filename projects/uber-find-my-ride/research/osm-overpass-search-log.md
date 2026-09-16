# OpenStreetMap Location-Mapping Log

**Collected:** 16 September 2026

**Geography:** Six candidate pickup environments in Hyderabad

**Purpose:** Turn broad “complex location” assumptions into specific questions for observation and interviews

## Method

The collection used OpenStreetMap's public Nominatim service to resolve a research anchor for each location and the Overpass API to retrieve mapped elements inside a bounded area around that anchor. Bounded boxes were used after broader radius queries timed out.

The complete extract contains **1,180 map elements**. The workbook retains **96 focused feature rows**: all mapped entrances, parking features, taxi stands, transit stops/platforms, and pedestrian crossings, plus gates or barriers that were named or were not tagged private.

| ID | Research anchor | Radius | All mapped elements | Entrances | Gates / barriers | Private gates | Parking | Taxi stands | Transit | Crossings | Pedestrian routes | Roads / service ways |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| LOC01 | Rajiv Gandhi International Airport | 1,000 m | 247 | 0 | 7 | 4 | 8 | 0 | 1 | 1 | 48 | 182 |
| LOC02 | Secunderabad Railway Station | 700 m | 231 | 3 | 43 | 40 | 3 | 0 | 9 | 0 | 89 | 76 |
| LOC03 | Raidurg Metro research anchor | 500 m | 262 | 0 | 69 | 67 | 5 | 0 | 3 | 3 | 12 | 168 |
| LOC04 | Inorbit Mall Cyberabad | 600 m | 247 | 5 | 70 | 62 | 3 | 1 | 2 | 0 | 23 | 143 |
| LOC05 | Apollo Hospitals Jubilee Hills | 500 m | 97 | 0 | 22 | 21 | 3 | 0 | 1 | 2 | 12 | 57 |
| LOC06 | DLF Cybercity | 350 m | 96 | 0 | 15 | 13 | 2 | 0 | 1 | 17 | 7 | 54 |
| **Total** |  |  | **1,180** | **8** | **226** | **207** | **24** | **1** | **17** | **23** | **191** | **580** |

Counts overlap because one OpenStreetMap element can carry more than one relevant tag.

## Map signals to verify

- **RGIA:** ground-vehicle, VIP/special, and customer-parking features are mapped. No entrance or taxi-stand tag appeared in this bounded extract.
- **Secunderabad Station:** Platforms 1 through 10 are represented across six platform features, together with three entrances and three parking features. Nearby private barriers dominate the gate count.
- **Raidurg:** Mindspace transit stops, a named Mindspace entrance, five parking features, and three crossings are mapped. The anchor is a research area, not an official station-boundary model.
- **Inorbit Mall:** one main entrance, four parking entrances, one taxi stand, three parking features, and two transit features are mapped.
- **Apollo Hospitals:** car, doctor, and bus parking are mapped, together with two crossings. No entrance or taxi-stand tag appeared in the bounded extract.
- **DLF Cybercity:** Gate 1, Gate 3, a bus stop, two parking features, and 17 crossings are mapped. Most surrounding gate elements are tagged private.

These signals shape field questions such as: Which gate is usable by app cabs? Which side or level should the rider choose? Can the driver legally stop there? How far must a rider walk? Which landmarks are visible in the live app?

## Evidence boundary

- OpenStreetMap is volunteer-maintained; missing tags do not prove that a facility does not exist.
- Each bounded extract includes the surrounding area. A mapped feature may not be owned or controlled by the named venue.
- Element counts are not counts of pickup problems, trips, users, or venue-controlled facilities.
- A private-access tag is a map attribute, not confirmation of current ride-hailing policy.
- Current access rules, pickup zones, safe stopping points, and app behavior require official-source, live-app, and field validation.
- Apollo Hospitals Jubilee Hills and DLF Cybercity are representative research candidates, not proven pickup hotspots.

## Sources and attribution

- [OpenStreetMap Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API)
- [Overpass QL](https://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL)
- [Nominatim usage policy](https://operations.osmfoundation.org/policies/nominatim/)
- [OpenStreetMap copyright and licence](https://www.openstreetmap.org/copyright)

Map data © OpenStreetMap contributors, available under the Open Database Licence.
