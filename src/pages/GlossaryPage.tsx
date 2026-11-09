import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router'

import { getLesson, glossary } from '@/content'
import { usePageTitle } from '@/hooks/usePageTitle'

export function GlossaryPage() {
  usePageTitle('Glossary')
  const { entryId } = useParams()
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!entryId) return
    document.getElementById(`term-${entryId}`)?.scrollIntoView({ block: 'start' })
  }, [entryId])

  const entries = useMemo(() => {
    const needle = query.trim().toLowerCase()
    const filtered = needle
      ? glossary.filter((entry) =>
          [entry.term, entry.definition, entry.example, ...(entry.aliases ?? [])].join(' ').toLowerCase().includes(needle),
        )
      : glossary
    return [...filtered].sort((a, b) => a.term.localeCompare(b.term))
  }, [query])

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
      <header className="space-y-3">
        <h1 className="font-serif text-4xl">Glossary</h1>
        <p className="text-lg leading-8 text-muted-foreground">
          Short definitions for the terms the lessons depend on. An example shows how the word is used. Where a full lesson exists, it is linked. Where it does not, the entry says so instead of inventing one.
        </p>
      </header>
      <label className="block text-sm font-semibold">
        Filter terms
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="mt-2 h-11 w-full rounded-xl border border-border bg-card px-3 font-normal"
          placeholder="Search ESG, Scope 2, ESRS…"
        />
      </label>
      <p className="text-sm text-muted-foreground">{entries.length} terms</p>
      <div className="space-y-4">
        {entries.map((entry) => {
          const lessons = entry.lessonIds.flatMap((id) => {
            const lesson = getLesson(id)
            return lesson ? [lesson] : []
          })
          const selected = entry.id === entryId
          return (
            <article
              key={entry.id}
              id={`term-${entry.id}`}
              className={`scroll-mt-24 rounded-2xl border bg-card p-5 ${selected ? 'border-accent' : 'border-border'}`}
            >
              <h2 className="font-serif text-3xl">{entry.term}</h2>
              <p className="mt-2 leading-7">{entry.definition}</p>
              <p className="mt-3 text-sm leading-6">
                <span className="font-semibold">Example. </span>
                {entry.example}
              </p>
              <div className="mt-3 text-sm">
                {lessons.length > 0 ? (
                  <p>
                    Lessons:{' '}
                    {lessons.map((lesson, index) => (
                      <span key={lesson.id}>
                        {index > 0 ? ', ' : ''}
                        <Link className="font-semibold text-accent" to={`/learn/${lesson.courseId}/${lesson.id}`}>
                          {lesson.title}
                        </Link>
                      </span>
                    ))}
                  </p>
                ) : (
                  <p className="text-muted-foreground">A full lesson on this term is still planned.</p>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
