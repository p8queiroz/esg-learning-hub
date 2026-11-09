# Architecture

The app is a static React site. Teaching content is data. Pages choose a route and render that data with shared components.

## Routes

| Path | Page |
| --- | --- |
| `/` | Dashboard |
| `/paths` | Paths grouped into beginner, intermediate, and advanced |
| `/paths/:courseId` | Course overview and syllabus |
| `/learn/:courseId/:lessonId` | Lesson |
| `/explore` | Topics, including areas whose lessons are not written yet |
| `/glossary` and `/glossary/:entryId` | Searchable glossary |
| `/about` | What the project will and will not claim |

`BrowserRouter` uses Vite's `BASE_URL` with the trailing slash removed, so the same routes work locally and on a GitHub Pages project site.

## Content model

`src/types/content.ts` defines courses, lessons, blocks, quizzes, glossary entries, and references.

- `src/content/courses.ts` is the syllabus. A missing `lessonId` means the item is planned.
- `src/content/lessons/` holds published lessons.
- `src/content/quizzes.ts` and `src/content/references.ts` are shared so a lesson cannot cite a source that was never entered.
- `src/content/index.ts` is the lookup API: get a course, list published lessons, find the previous and next lesson, resolve references.

`LessonBlocks` switches on `block.type`. Adding a teaching pattern means extending that union and that switch, not pasting markup into a page.

## Progress

`ProgressProvider` stores completed lesson ids and the latest quiz score under `esg-learning-hub.progress.v1` in `localStorage`. The dashboard copy is computed from that record. A first visit says that nothing is complete.

## Calculation

`buildCalculation` in `src/lib/emissions.ts` is the pure activity × factor function. The calculator component owns the illustrative presets and the warning. The function does not know about React, and the presets are not imported by anything that could be mistaken for a factor catalog.

## What is deliberately absent

There is no authentication, database, or model API. Retrieval later can index the content objects and their reference URLs without scraping rendered HTML. Generated questions would still need a human to check them against the cited source before they are published.
