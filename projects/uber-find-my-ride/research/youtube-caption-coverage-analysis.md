# YouTube Caption Coverage Analysis

**Analysed:** 16 September 2026

**Dataset:** 753 deduplicated videos in the `YouTube Videos` workbook sheet

## Outcome

Only **11 of 753 videos (1.5%)** are flagged by the YouTube API as having captions. The remaining **742 videos (98.5%)** are flagged as having no captions.

| Review group | Videos | Captions available | No captions | Caption coverage |
|---|---:|---:|---:|---:|
| High-priority review | 21 | 0 | 21 | 0.0% |
| Possible relevance | 80 | 1 | 79 | 1.3% |
| Low or incidental | 652 | 10 | 642 | 1.5% |
| **Total** | **753** | **11** | **742** | **1.5%** |

## Captioned-video distribution

| Location classification | Captioned videos |
|---|---:|
| Airport | 7 |
| Office or tech district | 1 |
| Other or unclear | 3 |
| Railway station | 0 |
| Metro station | 0 |
| Mall | 0 |
| Hospital | 0 |
| Gated community | 0 |
| Event venue | 0 |

## Non-airport candidate check

Only one captioned video appears in the 80-video possible-relevance group:

| ID | Video | Classification | Decision |
|---|---|---|---|
| YV0039 | [Uber Hyderabad office tour](https://www.youtube.com/watch?v=yHZzfgFfDJg) | Office or tech district | Reject for pickup research: it covers the interior workplace, not a rider-driver pickup journey |

The other 10 captioned videos are already classified as low or incidental. Their titles concern other cities, driver earnings, support contact information, airport buses, wheelchair service outside Hyderabad, or unrelated airport pickup services. None provides a useful Hyderabad non-airport pickup journey.

## Decision

Transcript-led expansion stops here. Caption availability is too low, and the one captioned non-airport possible-relevance result is not about pickup coordination.

Next steps:

1. continue visual, timestamped review of the 21 priority airport videos;
2. do not watch or transcribe all 753 videos;
3. use official venue guidance, OpenStreetMap, live-app checks, field observation, and interviews for non-airport locations; and
4. use the verified local speech-to-text workflow only for a specifically valuable video after its relevance is established visually and an authorised local media file is available.

## Local speech-to-text readiness

The project-local MLX Whisper pipeline was installed and technically verified on 16 September 2026. It can generate text, subtitles, timestamps, and JSON from an authorised local video or audio file. No real YouTube video has been transcribed because no authorised local media file is currently present. See [`local-transcription-workflow.md`](local-transcription-workflow.md).

## Evidence boundary

- The YouTube API caption flag reports caption availability; it does not assess transcript accuracy or research relevance.
- A captioned video is not automatically useful evidence.
- An uncaptioned video may still contain useful visual evidence.
- Video counts and engagement do not measure pickup-problem prevalence.
