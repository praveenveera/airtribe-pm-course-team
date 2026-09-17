# Interviews — Self-Serve Survey Approach

**Status:** Custom trilingual survey live; first contact-safe analysis snapshot completed
**Last updated:** 17 September 2026

## Current response snapshot

The live survey has produced 63 likely non-test submissions. Of these, 52 respondents reported recent four-wheel use and 24 reported pickup difficulty or uncertainty. The contact-safe normalized data and dashboard are stored in [`../data/survey/`](../data/survey/).

The strongest open-text records provide useful interview-style evidence, including concrete examples of driver no-shows, cancellations, app-arrival mismatch, unclear meeting points, and recovery through calls, messages, waiting, or movement. This does not remove the main method limitation: a self-serve form cannot probe vague answers in real time. The final assignment should state that limitation and use selective follow-up conversations where possible.

## Why a survey instead of scheduled interviews

Lining up 10 synchronous interviews (in person or by call) with Hyderabad riders and drivers was the main execution blocker. Instead of dropping the interview requirement, this converts it into a self-serve, asynchronous "online interview" — the format the assignment brief already allows ("screenshots of messages if interviews are conducted online").

To keep this defensible as research rather than a plain poll:

- Most questions are open-ended free text, not multiple choice. Free-text answers are the direct quotes the assignment asks for.
- A consent statement is required before any other question. A saved, timestamped response with consent recorded is the "proof" for this format.
- One instrument serves both riders and drivers (a role question up front), which also resolves the open "riders only vs. riders + drivers" population question — collect from both, then decide the final analysis mix once real responses come in, instead of pre-committing to a fixed 6/4 split.

**Trade-off to keep in mind for the write-up:** a self-answered form produces less follow-up depth than a live conversation — no ability to probe a vague answer in the moment. Treat strong survey responses as primary evidence, and if a respondent opts into a follow-up call (last question), use that small number of live conversations for the deeper "why" that the form can't chase.

## Implemented collection method

The final instrument is a custom mobile web survey published through GitHub Pages, with a Google Apps Script endpoint saving responses to Google Sheets. It supports English, Telugu, and Hindi, multiple-choice tagging, optional open-text or voice-assisted depth questions, and a raw JSON safety-net field for schema recovery. Deployment and storage instructions are in [`../webapp/DEPLOY.md`](../webapp/DEPLOY.md).

(Typeform, Microsoft Forms, or Tally are equivalent alternatives if Google Forms is inconvenient — the question content ports over unchanged.)

## Multi-language approach

Rather than building three separate forms (which splits responses and complicates the link you distribute), every question in [`survey-form-content.md`](survey-form-content.md) stacks English, Telugu, and Hindi together — the same convention used on Indian civic signage and public forms. The respondent reads whichever line they understand and answers once.

**Translation caveat:** the Telugu and Hindi text was AI-translated, not reviewed by a native speaker. Before distributing widely, have someone fluent in each language read through [`survey-form-content.md`](survey-form-content.md) once — a wrong word in a screening question (e.g. the 4-wheeler scope question) could quietly skew who qualifies.

## Collection and storage checks

1. Keep the raw `Responses` tab private because optional follow-up contact details may be present.
2. Use the normalized export for analysis; it reconciles the legacy columns and current raw JSON schema.
3. Exclude test rows and contact fields before any repository commit or public submission.
4. Re-run the normalization after collecting additional responses; the committed workbook is a dated snapshot.
5. Keep direct quotes anonymous unless the respondent explicitly approved attribution.

## Distribution ideas

Tied to the candidate location types in [`../scope.md`](../scope.md):

- WhatsApp groups for the office/tech campuses in scope (Cyber Towers, DLF, Hitec City groups) — good reach for the rider side.
- Driver community / union WhatsApp groups — good reach for the driver side; consider a short voice-note version of the intro in Telugu since not every driver will stop to read text first.
- A QR code + one-line pitch left with security/concierge desks at the mall, hospital, and hotel location types already listed in scope — low-effort, physically anchors responses to real pickup locations.
- Post in relevant Hyderabad subreddits or local Facebook groups, framed clearly as a student research project (not a promotion).

## Files

| File | Purpose |
|---|---|
| [`survey-form-content.md`](survey-form-content.md) | Complete trilingual question set, section by section, ready to paste into Google Forms |
