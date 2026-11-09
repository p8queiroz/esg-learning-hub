# ESG Learning Hub

ESG Learning Hub is an open curriculum for sustainability, carbon accounting, and the software systems behind them. It is a small learning product: structured paths, lessons built from reusable teaching components, a glossary, a quiz, and an emissions calculator. Progress stays in the browser. There is no account and no backend.

The first release publishes ten lessons across three paths. Reporting standards and carbon markets are listed as planned syllabi, not as empty lessons.

## What you can do

- Start from the dashboard and continue a lesson.
- Follow a path from foundations, through a GHG Protocol inventory, into the engineering of an inventory system.
- Check Scope 1, 2, and 3 with a four-question quiz.
- Change activity data and an emission factor in the calculator. The factors are fictional and labeled as such.
- Search lessons and glossary terms.
- Mark a lesson complete. The record is local to this browser.

## Curriculum

| Path | Status |
| --- | --- |
| ESG and sustainability foundations | 4 lessons published |
| Carbon accounting fundamentals | 4 lessons published |
| Sustainability software engineering | 2 lessons published |
| Sustainability reporting | Syllabus only |
| Carbon markets and climate solutions | Syllabus only |

Lessons cite the publication they depend on, including the GHG Protocol Corporate Standard, the Scope 2 Guidance, the Scope 3 Standard, IPCC AR6, the Paris Agreement, GRI, IFRS S1 and S2, the CSRD, and the ESRS. Those documents are not interchangeable. A later EU legal change can move who is in scope of the CSRD. The lessons say to read the text in force rather than freeze a threshold in prose.

## Stack

React, TypeScript, Vite, Tailwind CSS, Radix primitives, React Router, and Vitest. Content is typed data in `src/content`, rendered by components in `src/components/learning` and `src/components/interactive`.

## Local development

```bash
npm install
npm run dev
```

Then open the URL Vite prints, usually `http://localhost:5173`.

```bash
npm test
npm run lint
npm run build
```

`npm run build` typechecks, builds the static site, and copies `dist/index.html` to `dist/404.html`.

## GitHub Pages

The deploy workflow publishes the `main` branch with GitHub Pages.

1. In the repository settings, open **Pages**.
2. Set the source to **GitHub Actions**.
3. Push to `main`. The **Deploy GitHub Pages** workflow builds with `VITE_BASE_PATH` set to `/<repository-name>/` and uploads `dist`.

Project sites need that base path so assets resolve when a deep link is served. GitHub Pages responds to an unknown path such as `/esg-learning-hub/learn/foundations/scopes` with the site `404.html` and leaves the URL in place. Because `404.html` is the built app, and asset URLs are absolute from the base path, the router can read the lesson from the URL.

A user site (`<user>.github.io`) is served from `/`. Change `VITE_BASE_PATH` in `.github/workflows/deploy.yml` to `/` for that case.

Local `npm run dev` and `npm run preview` use `/` and do not need the fallback file. Vite already answers unknown paths with the app.

## Architecture

See [docs/architecture.md](docs/architecture.md). The short version: courses, lessons, quizzes, glossary entries, and references are data. Pages do not contain the teaching text. A future retrieval assistant can read those records. This release does not call a language model.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Content corrections need a source. Illustrative numbers must stay labeled as illustrative.

## Roadmap

- Dedicated lessons for the Paris Agreement, Scope 3 screening, and base-year recalculation.
- A reporting path that keeps GRI, ISSB, and ESRS distinct, and that refuses to hard-code a CSRD scope that the law has changed.
- A carbon-markets path for credits, offsets, additionality, permanence, and leakage.
- Deeper engineering lessons on unit conversion, ingestion, and factor versioning.
- Retrieval over the existing content records, with human review before any generated question is published.

## License

[MIT](LICENSE)
