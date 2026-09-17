# Deploying the Pickup Story app

Two parts: a **backend** (a Google Sheet that stores responses) and a **frontend** (the app itself, a single HTML file). You set up the backend once; the frontend is deployed for you.

## Part 1 — Backend (you do this, ~5 minutes)

This has to happen in your own Google account — nobody else can do this step for you, and you shouldn't hand your Google login to anyone (including an AI) to do it on your behalf.

1. Go to [sheets.google.com](https://sheets.google.com) and create a new blank spreadsheet. Name it something like "Pickup Story Responses".
2. In the menu, go to **Extensions → Apps Script**. A new tab opens with a code editor.
3. Delete the placeholder `function myFunction() {}` code and paste in the entire contents of [`apps-script.gs`](apps-script.gs) instead.
4. Click the **Save** icon (or Ctrl/Cmd+S).
5. Click **Deploy → New deployment**.
6. Click the gear icon next to "Select type" and choose **Web app**.
7. Fill in:
   - Description: anything, e.g. "Pickup survey backend"
   - Execute as: **Me**
   - Who has access: **Anyone**
8. Click **Deploy**. Google will ask you to authorize the script (it's your own script, running in your own account — this is normal and expected).
9. Copy the **Web app URL** it gives you — looks like `https://script.google.com/macros/s/AKfycb.../exec`. Send that URL back so it can be wired into the app (see Part 2), or edit `index.html` yourself: find the line `var APPS_SCRIPT_URL = "PASTE_YOUR_DEPLOYED_WEB_APP_URL_HERE";` near the top of the `<script>` block and paste your URL between the quotes.

**Test it:** open the deployed app (Part 2), fill it out once yourself, submit, then check your Google Sheet — a new row should appear within a few seconds. Do this before distributing the link widely.

**If you ever need to change the code:** edit it in the Apps Script editor, then **Deploy → Manage deployments → edit (pencil icon) → New version → Deploy**. Just saving isn't enough — Web Apps only pick up changes on a new deployment version.

## Part 2 — Frontend (already live)

Done. The app is pushed to a small, separate **public** repo — [github.com/praveenveera/uber-pickup-survey](https://github.com/praveenveera/uber-pickup-survey) — with GitHub Pages on, live at:

**https://praveenveera.github.io/uber-pickup-survey/**

It's a separate repo (not this private coursework one) so nothing else in this project is exposed publicly — only the survey app itself. It includes a mobile-first layout and a voice-to-text mic button on every open-ended question (uses the browser's built-in speech recognition, feature-detected — it just doesn't appear on browsers that don't support it, e.g. desktop Firefox or iOS Safari).

**Status: connected and verified (17 September 2026).** The Apps Script URL is wired in and pushed live.

**Important — the question set changed after the first connection, so the columns changed too.** The original paragraph-style questions (`story`, `cause`, free-typed `helped`) were converted to multiple choice for a shorter, tap-only survey — see the "What next" note in the project's `PROJECT_STATUS.md`. That changed several column names (e.g. `story`/`cause` → `whatHappened`; `timeLostMinutes` → `timeRange`; `helped` is now a joined list of choices, not free text). The Sheet's header row was created under the *old* schema and does **not** match the new one.

**Before distributing, clear the Sheet completely** (select all rows in the "Responses" tab and delete them, including the header row) so the next submission recreates a fresh, correctly-labeled header. Don't just delete old test rows one at a time — the header itself is stale.

Five test submissions exist under the mixed old/new schema from verification — all should be wiped along with the header as part of the above cleanup:
1. `more`/`story` = "TEST SUBMISSION - safe to delete this row" (oldest schema, raw test)
2. `more` = "raw test, no -L", everything else blank (oldest schema, raw test)
3. `role` = rider, `city` = hyderabad, `scope4wheeler` = yes, `difficulty` = no (oldest schema, UI walkthrough)
4. `role` = rider, `city` = hyderabad, `whatHappened` = "wrong_pin, driver_no_stop", `location` = mall, `timeRange` = "2to5", `helped` = "driver_moved" (schema before `location` became multi-select)
5. `role` = rider, `location` = "airport, office", `difficulty` = yes (current schema, confirms `location` is now a joined multi-select list like `actions`/`helped`, with a matching `locationOther` column)

**One more schema note:** `location` ("Where were you?") changed from single-select to multi-select (choose all that apply), same pattern as `whatHappened`/`actions`/`helped`. It added a `locationOther` column. If you already connected the Sheet before this change, clear it again — same reason as above.

**Methodology correction (17 September 2026):** the multiple-choice conversion earlier had gone too far — it solved the completion-friction problem but left almost no way to get the direct quotes and behavioral depth the assignment's Step 2 actually requires. Four **required** open-text (or voice, via the mic button) questions were added between the difficulty branch and the multiple-choice tagging section:
1. `mainStory` — the full story, booking to resolution
2. `confusionStart` — exactly where it broke down and what they expected
3. `actionsReasoning` — what was said/done, and why
4. `frustration` — the worst part, and what information was missing

These four are now mandatory (skipped only when `difficulty = no`, same as the rest of the story-only section) and add four new Sheet columns of the same names. **Clear the Sheet again** if you already connected it — same reason as every schema note above. The existing multiple-choice questions (`whatHappened`, `location`, `actions`, `time`, `helped`, `repeat`) are unchanged and now serve as tagging/comparison structure layered on top of the qualitative answers, not a replacement for them.

## Distribution

See [`../interviews/README.md`](../interviews/README.md) for channel ideas (WhatsApp groups, driver communities, QR codes at physical locations). The same distribution plan applies — this app replaces the Google Forms option as the primary channel, since it gives a proper single-URL, live-language-toggle experience instead of stacked trilingual text.

## Data handling

Responses land directly in your Google Sheet — nobody else (including Claude) sees them automatically. Keep the `contact` column (optional follow-up phone/email) out of any public-facing synthesis file, consistent with the project's evidence rules in [`../PROJECT_STATUS.md`](../PROJECT_STATUS.md).
