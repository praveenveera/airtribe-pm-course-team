# Questionnaire Review and V2 Decision Log

## Decision

The first instrument was visually strong but not ready for distribution. V2 simplifies the questionnaire, aligns every respondent answer with the Google Sheets contract, and separates follow-up contact from research data.

The instrument remains a research hypothesis until a pilot validates comprehension, completion time, branching, and row capture.

## Research question

> For a real grocery or household purchase, what caused the basket to expand or stop, and how did the chosen channel fit that purchase?

Recent Zepto purchases provide direct Zepto AOV evidence. Other purchases provide evidence about channel choice, alternatives, and barriers. They do not measure Zepto basket behaviour.

## Problems found in V1

| Finding | Research or delivery risk | V2 correction |
|---|---|---|
| Order shape, trigger, and goal overlapped | Repetitive responses with unclear analytical meaning | Replaced by one shopping-mission question |
| Threshold question asked what respondents usually do | Hypothetical answer could be presented as recent behaviour | Ask whether a threshold was noticed in the recalled purchase, then ask what it changed |
| Basket-building options could occur together but allowed one answer | Real purchase sequences were flattened | Changed to multi-select |
| Zepto users received a second hypothetical expansion question | Duplicated the stopping question and primed solutions | Replaced with an open description of the real checkout moment |
| Non-Zepto respondents were pushed to suggest Zepto changes | Brand-led and hypothetical | Ask why their actual method fitted the purchase and whether Zepto was considered |
| Bulk and subscription were described but not selectable | Recruitment scope did not match the instrument | Added both as recent-method options |
| Hindi and Telugu questions displayed mostly English options | Incomplete experience and fragmented data | Translate every visible question, option, error, consent statement, and completion message while retaining stable codes |
| Translated Yes/No labels were stored as values | Changing language could break branching and analysis | Stable codes such as `yes`, `no`, and `not_sure` |
| The progress denominator changed after a branch selection | The survey appeared unstable | Show only the current question number and use a non-denominator progress bar |
| Submitted fields and Sheets columns were misaligned | Answers such as purchase mode and household size were not analysis-ready | V2 uses one explicit schema shared by frontend and Apps Script |
| A `no-cors` POST was treated as success without checking the sheet | Failed writes could display a false success message | Confirm the response ID through a read-after-write status endpoint |
| Contact and raw research data shared one row | “Anonymous” wording was inaccurate | Store contact only in `FollowUp_V2`, linked by response ID |

## V2 flow

| Stage | Questions | Decision supported |
|---|---|---|
| Eligibility and channel | Purchase in the last 30 days; selected method | Anchors recall and selects Zepto/non-Zepto branch |
| Mission and entry | Shopping mission; first need; people shopped for | Explains the job and starting point |
| Basket outcome | Item band; spend band; purchased categories | Provides directional basket size and breadth |
| Expansion | What happened after the first item; considered-but-rejected item and reason | Locates expansion behaviour and stopping barriers |
| Commercial influence | Threshold or offer noticed; action caused | Separates observed effect from general opinion |
| Channel decision | Zepto choice and checkout moment, or alternative-method fit and Zepto consideration | Explains channel selection without forcing feature ideas |
| Follow-up | Permission and separately stored contact | Recruits deeper conversations without mixing identity into analysis |

## Data contract

- `responseId` links the research row to optional follow-up contact.
- `serverTimestamp` is assigned by Apps Script; `clientTimestamp` is retained for troubleshooting.
- `surveyVersion` prevents V1 and V2 responses from being analysed as one instrument.
- Participant-facing labels are translated in English, Hindi, and Telugu but are not stored as analysis values. Stable codes are stored instead.
- Multi-select answers are stored as JSON arrays in their cells.
- `rawJson` contains research answers only. It excludes follow-up contact.
- Existing V1 rows are not migrated automatically. V2 writes to new `Responses_V2` and `FollowUp_V2` sheets.

## Validation completed in the repository

- Frontend JavaScript syntax check.
- Apps Script JavaScript syntax check after removing Apps Script-only runtime dependencies from the validation path.
- Static contract check for all frontend response keys and Apps Script columns.
- Browser interaction checks for consent, the eligibility branch, stable navigation labels, required “Other” details, inline validation, and honest local-only completion feedback.
- English-to-Hindi-to-Telugu switching check confirmed that the selected stable-code answer and Zepto branch remain unchanged while all visible labels update.
- Automated translation-coverage checks passed for 17 questions, 88 option labels, and all interface, validation, consent, privacy, and completion strings.
- Desktop visual review and source-level responsive-layout review.

## Validation still required before distribution

1. Deploy the updated Apps Script as a new version and run `setupCheck`.
2. Submit controlled responses for every pilot path and reconcile every populated value against `Responses_V2`.
3. Confirm that follow-up contact appears only in `FollowUp_V2` and nowhere in `Responses_V2.rawJson`.
4. Test failed-network and backend-error behaviour. The UI must not show success without response-ID confirmation.
5. Pilot with at least five real participants. Observe comprehension, question interpretation, completion time, and abandonment.
6. Revise confusing wording before wider recruitment.
7. Complete fluent-speaker reviews of the Hindi and Telugu wording, including every question, option, error, consent statement, and privacy note.

## Readiness rule

Call the instrument **pilot-ready** only after repository checks pass. Call it **distribution-ready** only after the deployed end-to-end reconciliation and real-participant pilot pass. Neither state means the responses are representative or prove causal AOV impact.
