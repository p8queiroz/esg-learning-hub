import { Link } from 'react-router'

import { Card } from '@/components/ui/card'
import { getLesson, glossaryMap, topics } from '@/content'
import { usePageTitle } from '@/hooks/usePageTitle'

export function ExplorePage() {
  usePageTitle('Topic explorer')

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
      <header className="max-w-3xl space-y-3">
        <h1 className="font-serif text-4xl">Topic explorer</h1>
        <p className="text-lg leading-8 text-muted-foreground">
          Jump to a subject without walking the paths in order. Topics with no published lesson still link to glossary entries that are written and sourced.
        </p>
      </header>
      <div className="grid gap-4 lg:grid-cols-2">
        {topics.map((topic) => {
          const lessons = topic.lessonIds.flatMap((id) => {
            const lesson = getLesson(id)
            return lesson ? [lesson] : []
          })
          const terms = topic.glossaryIds.flatMap((id) => (glossaryMap[id] ? [glossaryMap[id]] : []))
          return (
            <Card key={topic.id} className="space-y-4 p-5">
              <div>
                <h2 className="font-serif text-2xl">{topic.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{topic.description}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Lessons</h3>
                {lessons.length === 0 ? (
                  <p className="mt-1 text-sm text-muted-foreground">No published lesson yet.</p>
                ) : (
                  <ul className="mt-2 space-y-1">
                    {lessons.map((lesson) => (
                      <li key={lesson.id}>
                        <Link className="text-sm font-semibold text-accent" to={`/learn/${lesson.courseId}/${lesson.id}`}>
                          {lesson.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <h3 className="text-sm font-semibold">Glossary</h3>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {terms.map((term) => (
                    <li key={term.id}>
                      <Link to={`/glossary/${term.id}`} className="rounded-full border border-border px-3 py-1 text-sm">
                        {term.term}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
