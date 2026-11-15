import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router'

import { Icon, IconTile } from '@/components/ui/icon'
import { getLesson } from '@/content'
import { useLocale } from '@/hooks/useLocale'
import { usePageTitle } from '@/hooks/usePageTitle'

export function GlossaryPage() {
  const { pack, locale } = useLocale()
  usePageTitle(pack.ui.glossaryPage.title)
  const { entryId } = useParams()
  const [query, setQuery] = useState('')
  const copy = pack.ui.glossaryPage

  useEffect(() => {
    if (!entryId) return
    document.getElementById(`term-${entryId}`)?.scrollIntoView({ block: 'start' })
  }, [entryId])

  const entries = useMemo(() => {
    const needle = query.trim().toLowerCase()
    const filtered = needle
      ? pack.glossary.filter((entry) =>
          [entry.term, entry.definition, entry.example, ...(entry.aliases ?? [])].join(' ').toLowerCase().includes(needle),
        )
      : pack.glossary
    return [...filtered].sort((a, b) => a.term.localeCompare(b.term, locale))
  }, [locale, pack.glossary, query])

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
      <header className="flex items-start gap-4">
        <IconTile name="menu_book" className="mt-1" />
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight">{copy.title}</h1>
          <p className="text-lg leading-8 text-muted-foreground">{copy.lede}</p>
        </div>
      </header>
      <label className="block text-sm font-semibold">
        {copy.filter}
        <span className="relative mt-2 block">
          <Icon name="search" className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-primary" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="h-11 w-full rounded-xl border border-border bg-card pr-3 pl-10 font-normal"
            placeholder={copy.placeholder}
          />
        </span>
      </label>
      <p className="text-sm text-muted-foreground">{copy.count(entries.length)}</p>
      <div className="space-y-4">
        {entries.map((entry) => {
          const lessons = entry.lessonIds.flatMap((id) => {
            const lesson = getLesson(pack, id)
            return lesson ? [lesson] : []
          })
          const selected = entry.id === entryId
          return (
            <article
              key={entry.id}
              id={`term-${entry.id}`}
              className={`scroll-mt-24 rounded-2xl border bg-card p-5 ${selected ? 'border-accent' : 'border-border'}`}
            >
              <h2 className="text-3xl font-semibold tracking-tight">{entry.term}</h2>
              <p className="mt-2 leading-7">{entry.definition}</p>
              <p className="mt-3 text-sm leading-6">
                <span className="font-semibold">{copy.example} </span>
                {entry.example}
              </p>
              <div className="mt-3 text-sm">
                {lessons.length > 0 ? (
                  <p>
                    {copy.lessons}:{' '}
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
                  <p className="text-muted-foreground">{copy.planned}</p>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
