# YouTube Data API Search Log

**Collected:** 16 September 2026, 17:21 IST
**Geography:** Hyderabad primary; India context
**Ride scope:** On-demand four-wheel passenger rides

## Outcome

The expanded YouTube Data API v3 collection produced:

- 1,547 raw search-result appearances;
- 753 unique videos with public metadata and statistics;
- 26 automated high-priority candidates queried for complete accessible comment threads;
- 21 high-priority pickup-video candidates after manual title-and-description screening;
- 80 possible-relevance videos and 652 low/incidental results retained for reproducibility;
- 45 top-level comments and 42 replies retrieved across the 26 automated candidates;
- 31 top-level comments and 30 replies retained for the strict 21-video set; and
- two comment request failures because comments were disabled.

The workbook keeps every unique video discovered. Its comment sheet keeps the top-level comments and replies belonging to the strict 21-video set, with a local anonymous parent-record link for each reply. The ignored raw collection also marks the retrieved comments belonging to five manually downgraded videos. Public comment-author identities were not retained.

These records are **raw Grade C leads**, not validated user insights. Search ranking, creator incentives, comment self-selection, language, weak metadata, and automated classification all introduce bias. The data cannot estimate Hyderabad pickup-problem prevalence and does not replace the required interviews.

## Method

Each query was run twice: once ordered by relevance (`R`) and once by upload date (`D`). Each of the 48 search calls requested up to 50 public videos for the India region. YouTube returned fewer than 50 results for some date-ordered queries. Video metadata and public statistics were then retrieved for all 753 deduplicated IDs.

The automated metadata screen required Hyderabad/local context, four-wheel transport terms, a complex pickup environment, and pickup-coordination language while excluding obvious earnings, recruitment, and unrelated commercial content. The 26 initial candidates were then checked manually using their public titles and descriptions; five were downgraded as promotional, adjacent, or wrong-geography results.

For the 26 initial candidates, the collection paged through every available top-level comment page at up to 100 comments per page. It then used each top-level comment ID to page through all available replies. The workbook retains only rows belonging to the 21 manually confirmed high-priority videos. No private data, author name, author channel ID, profile image, or authenticated user data was retained.

“Complete accessible thread” means every page returned by the public API at collection time. Deleted, held-for-review, private, blocked, and otherwise unavailable content is outside the dataset. Two high-priority videos had comments disabled.

The `Matched queries` column in the workbook uses the query number plus order. For example, `Q01-R` means query Q01 ordered by relevance.

## Query register

| Code | Query |
|---|---|
| Q01 | Hyderabad airport Uber pickup |
| Q02 | RGIA Uber Ola pickup point walkthrough |
| Q03 | Hyderabad airport cab pickup D1 |
| Q04 | Hyderabad airport taxi pickup |
| Q05 | Secunderabad railway station cab pickup |
| Q06 | Kacheguda railway station cab pickup |
| Q07 | Hyderabad railway station Uber pickup |
| Q08 | Raidurg Metro cab pickup |
| Q09 | HITEC City Metro Uber pickup |
| Q10 | Hyderabad metro cab pickup |
| Q11 | Hyderabad mall Uber pickup |
| Q12 | Inorbit Mall Hyderabad cab pickup |
| Q13 | Hyderabad hospital cab pickup |
| Q14 | Hyderabad office gate cab pickup |
| Q15 | HITEC City office cab pickup |
| Q16 | Gachibowli Uber pickup |
| Q17 | Hyderabad gated community cab pickup |
| Q18 | Hyderabad event cab pickup |
| Q19 | Hyderabad Uber driver cannot find rider |
| Q20 | Hyderabad Uber pickup problem |
| Q21 | Uber pickup point Hyderabad |
| Q22 | Hyderabad airport elderly cab pickup |
| Q23 | Hyderabad airport wheelchair cab pickup |
| Q24 | Hyderabad airport luggage Uber pickup |

## Data retained in the workbook

### YouTube Videos

- public video ID and URL;
- title, channel name, upload date, description excerpt, and duration;
- public view, like, and comment counts at collection time;
- search-query matches;
- automated review priority and location category; and
- an explicit unreviewed-evidence status.

### YouTube Comments

- local anonymous record ID;
- top-level or reply type;
- local anonymous parent-record ID for replies;
- source video ID, title, and URL;
- public comment text, date, likes, and top-level reply count;
- automated English-keyword signal; and
- source-video priority, evidence boundary, and limitations.

## Coverage still open

- A Telugu/Hindi query pack should be run in a new quota window to reduce English-query bias.
- Video viewing is still required; metadata screening is not content validation.
- The full caption audit found 11 captioned videos and 742 without captions. None of the captioned records provides a useful Hyderabad non-airport pickup journey. See [`youtube-caption-coverage-analysis.md`](youtube-caption-coverage-analysis.md).
- Transcript-led expansion is closed. Speech-to-text should be considered only for a specifically valuable video after visual relevance screening and a content-use review.
- YouTube results are ranked and self-selected; they cannot estimate problem prevalence or substitute for interviews.

## Manual-review rule

A video or comment may enter the curated `Evidence Records` sheet only after a person checks the actual content, confirms that it concerns a Hyderabad four-wheel pickup, records the exact observation and limitation, and avoids presenting engagement counts as prevalence.

## Source

[YouTube Data API v3 documentation](https://developers.google.com/youtube/v3)
