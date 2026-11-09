import type { Reference } from '@/types/content'

export function ReferenceList({ references }: { references: Reference[] }) {
  if (references.length === 0) return null

  return (
    <section aria-labelledby="references-heading" className="space-y-3">
      <h2 id="references-heading" className="font-serif text-2xl">
        Sources
      </h2>
      <ol className="space-y-3">
        {references.map((reference) => (
          <li key={reference.id} className="rounded-2xl border border-border bg-card p-4">
            <a
              href={reference.url}
              className="font-semibold text-accent underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {reference.title}
            </a>
            <p className="mt-1 text-sm text-muted-foreground">
              {reference.publisher} · {reference.date}
            </p>
            {reference.note ? <p className="mt-2 text-sm leading-6">{reference.note}</p> : null}
          </li>
        ))}
      </ol>
    </section>
  )
}
