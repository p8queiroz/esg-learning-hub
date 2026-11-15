# Contributing

Issues and pull requests are welcome. The useful contribution is a correction with a source, or a lesson that teaches one decision clearly.

## Ground rules

- Write public content in every locale pack, in the same plain voice. English and Brazilian Portuguese ship together. Official publication titles, publishers, dates, and URLs stay in their original form.
- Cite the publication, the organization, and the year or edition.
- Do not invent a legal threshold, a gas list, or an emission factor.
- If a number is only there so a learner can see the units cancel, say that it is illustrative in the same view.
- Do not describe GRI, the ISSB standards, the ESRS, and the GHG Protocol as the same kind of document.
- A planned topic is a syllabus line without a `lessonId`. Do not publish an empty lesson to fill a path.
- Do not add an LLM call in order to look current. The content records are the seam for that later work.

## Add a lesson

1. Add the lesson object to the matching course file in each `src/locales/<locale>/` pack, with the same `id`.
2. Give it a stable `id`, `courseId`, objectives, a summary, minutes, blocks, and `referenceIds` that already exist in `src/content/references.ts`. Keep block order and ids identical across locales.
3. Add a syllabus item with that `lessonId` in each locale’s `courses.ts`, inside the matching course.
4. If you introduce a term the lesson depends on, add or extend a glossary entry in each pack and point `lessonIds` at the lesson. Portuguese aliases should include the English term.
5. Run `npm test`. The curriculum test fails when a reference id, quiz id, or course link does not resolve. The parity test fails when a locale is missing an id or an interface key.

Blocks are a closed union in `src/types/content.ts`. Add a block type only when an existing one cannot express the teaching move, and render it in `LessonBlocks`.

## Local checks

```bash
npm test
npm run lint
npm run build
```

## Reports

Use the content-correction template for a wrong definition or a stale legal claim. Use the bug template for a broken interaction. Include the browser when the bug is visual or about keyboard access.
