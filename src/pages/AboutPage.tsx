import { Link } from 'react-router'

import { usePageTitle } from '@/hooks/usePageTitle'

export function AboutPage() {
  usePageTitle('About')

  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <header className="space-y-3">
        <h1 className="font-serif text-4xl">About this project</h1>
        <p className="text-lg leading-8 text-muted-foreground">
          ESG Learning Hub is an open-source curriculum for people learning sustainability, carbon accounting, and the software that has to stay reproducible.
        </p>
      </header>
      <section className="space-y-3">
        <h2 className="font-serif text-2xl">What it will not do</h2>
        <p className="leading-7">
          It will not invent a regulation, a threshold, or an emission factor. Illustrative calculator values are labeled as fiction. Planned courses are titles, not placeholder lessons. Standards are not treated as interchangeable: the GHG Protocol accounts for emissions, GRI reports impacts, the ISSB standards report sustainability-related financial information, and the ESRS apply double materiality under EU law.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="font-serif text-2xl">How progress works</h2>
        <p className="leading-7">
          Completion and quiz scores stay in local storage on this browser. There is no account and no server. Clearing site data clears the record.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="font-serif text-2xl">Why the content is structured</h2>
        <p className="leading-7">
          Lessons, glossary entries, and references are typed data, rendered by shared components. A later assistant can retrieve those records instead of scraping the page. This release does not call a language model. An answer that invents a factor would be worse than no assistant.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="font-serif text-2xl">Start</h2>
        <p className="leading-7">
          <Link className="font-semibold text-accent" to="/learn/foundations/what-is-sustainability">
            What is sustainability?
          </Link>{' '}
          is the first lesson. The scopes quiz and the emissions calculator live in the carbon accounting path.
        </p>
      </section>
    </article>
  )
}
