# Deploying the Basket Stories survey

The frontend is a single static HTML file. The backend is a Google Sheet Apps Script Web App. Keep this backend separate from Project 3 so response columns and datasets cannot mix.

## Backend setup

1. Create a new Google Sheet in the account that should own the responses.
2. Open **Extensions → Apps Script** and replace the starter code with [`apps-script.gs`](apps-script.gs).
   This file accepts survey version `2.1` and validates every submitted category against the approved category-code list.
3. Save, then run `setupCheck` once and approve the requested Google permissions. Confirm that it creates `Responses_V2` and `FollowUp_V2`.
4. Deploy → New deployment → Web app.
5. Execute as **Me** and allow access to **Anyone**.
6. Copy the Web App URL into `APPS_SCRIPT_URL` near the top of [`index.html`](index.html).
7. Submit one eligible response and confirm the browser shows success only after `Responses_V2` receives the matching `responseId`.
8. Choose follow-up and confirm the contact appears only in `FollowUp_V2`. Check that it is absent from the `Responses_V2` row and its `rawJson` cell.
9. Submit the ineligible path and both channel branches. Reconcile the populated and blank conditional fields against the questionnaire.

For an existing deployment, use **Deploy → Manage deployments → Edit → New version → Deploy** after replacing the script. Keep the same Web App URL unless Google issues a new one.

Until the URL is configured, the app stores the last test response in the browser's local storage, clearly labels it as local-only, and does not send data anywhere.

The static site sends the response with a `no-cors` POST, then verifies the write through a JSONP status request using the generated `responseId`. Do not remove the confirmation step: the POST response alone cannot prove that the Sheet accepted the row.

## Frontend hosting

Publish this `webapp/` directory as a separate static site or repository. Do not overwrite the existing Project 3 survey URL. Suggested path: `zepto-aov-survey`.

Before participant distribution, verify the mobile layout, consent gate, all conditional branches, error states, response-ID confirmation, V2 response columns, and separate follow-up sheet in English, Hindi, and Telugu. A fluent Hindi reviewer and a fluent Telugu reviewer must check every question, option, error, consent statement, and privacy note before recruitment.
