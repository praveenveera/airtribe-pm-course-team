# Nykaa User Experience Analysis

Airtribe AI-First Product Management — assignment workspace.

## Read in this order

| Doc | Purpose |
|-----|---------|
| **[submission.md](./submission.md)** | **The deliverable.** 5 first-person journeys (smooth / confusing / slow / frustrating), 3 feature opinions, 2 user conversations, recommendations. |
| **[submission.pdf](./submission.pdf)** | The above, rendered. Regenerate with `./build-pdf.sh` after editing `submission.md`. |
| **[Nykaa-UX-Analysis.pptx](./Nykaa-UX-Analysis.pptx)** | **The slide deck to present during recording.** 18 slides: 1–8 are the 5-minute story (narrate these), 9–18 are a full appendix — methodology, every journey step-by-step, real screenshots, the complete recommendations table, limitations. Speaker notes on slides 1–8 match the script. |
| [video-script.md](./video-script.md) | Timed script for the ≤5-minute video, mapped to deck slides 1–8, plus a jump-table into the appendix for Q&A |
| [video-boards.html](./video-boards.html) | An earlier, single-page version of the core story (backup only / [published artifact](https://claude.ai/code/artifact/e95f4a63-c6a8-4eb3-ab05-79268b383617)) — the pptx is the one to present from |
| [interview-guide.md](./interview-guide.md) | Questions for the 2 user conversations |
| [product-analysis.md](./product-analysis.md) | Overall product analysis — what's good, what's bad, the core tension |
| [nykaa-core-teardown.md](./nykaa-core-teardown.md) | Deep cut — customer adoption & reuse, + feature effectiveness audit |
| [prd-buy-again.md](./prd-buy-again.md) | Mini-PRD for the top recommendation (replenishment / "Buy again") |

## Method

Desktop website (www.nykaa.com), guest + one logged-in session, 4 Sep 2026. Every number re-checked live. Bag and checkout verified by hand (the earlier automation runs failed at the cart — see `_superseded/`).

## Folders

| Folder | Contents |
|--------|----------|
| `screenshots/good/` · `screenshots/bad/` · `screenshots/web/` | Evidence, tagged |
| `browser/` | Playwright automation (optional tooling, not part of the submission) |
| `output/` | Raw `journey-*.json` logs from the automation runs |
| `_superseded/` | Earlier drafts written before checkout was verified — **do not use** |

## To do

- [ ] Run the 2 user conversations → fill section 4 of `submission.md`
- [ ] Export `submission.md` → PDF
- [ ] Record the video from `video-script.md`
- [ ] Upload the video and submit its link alongside the PDF (Airtribe asks for the PDF and the video link as two separate things — the link doesn't need to live inside the PDF)
