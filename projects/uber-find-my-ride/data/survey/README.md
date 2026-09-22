# Survey data snapshot

**Snapshot date:** 17 September 2026

**Source:** Live Pickup Story survey response Sheet

**Scope:** Hyderabad-focused four-wheel pickup research, with comparison responses from other Indian cities

## Files

| File | Purpose |
|---|---|
| [`uber-pickup-survey-analytics.xlsx`](uber-pickup-survey-analytics.xlsx) | Editable workbook containing the contact-safe response copy, normalized records, KPI tables, charts, and the ten strongest interview-style records |
| [`normalized-data.tsv`](normalized-data.tsv) | Source snapshot with 63 likely non-test submissions; R032 is a confirmed duplicate and is excluded from the final sanitized workbook |
| [`analytics.tsv`](analytics.tsv) | Static table export underlying the live Analytics tab |
| [`analytics-dashboard.png`](analytics-dashboard.png) | Contact-safe visual used in the survey insight synthesis |

## Snapshot totals

| Measure | Result |
|---|---:|
| Unique non-test submissions | 62 |
| Recent four-wheel users | 51 |
| Recent users reporting difficulty or uncertainty | 24 |
| Hyderabad recent four-wheel users | 27 |
| Hyderabad recent users reporting difficulty or uncertainty | 11 |
| Issue cases reported as repeated | 23 of 28 |
| Driver responses | 4 |

## Privacy and evidence boundary

- Contact fields were removed from all committed files, including the raw JSON safety-net field in the workbook.
- Test submissions were excluded from the normalized and analytics views.
- Open-text responses remain participant evidence. Use them anonymously unless explicit permission exists for attribution.
- This is a convenience sample. The percentages describe this response set and must not be presented as Hyderabad-wide prevalence.
- The form created useful qualitative evidence but did not allow live follow-up probing. Describe the records as survey responses, not interviews, and state that the assignment's interview requirement was not met.
- The four narrative prompts were optional in the live interface, so qualitative depth varies.
- Consent was gated in the interface but was not persisted as a separate backend field; do not claim row-level consent records.

## Refresh rule

These files are a dated snapshot, not a live connection to Google Sheets. When more responses arrive, repeat the normalization and privacy checks before replacing the committed files.
