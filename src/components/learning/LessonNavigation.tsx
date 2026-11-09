import { Link } from 'react-router'

import type { Lesson } from '@/types/content'

export function LessonNavigation({
  courseId,
  previous,
  next,
}: {
  courseId: string
  previous?: Lesson
  next?: Lesson
}) {
  return (
    <nav aria-label="Lesson" className="grid gap-3 sm:grid-cols-2">
      {previous ? (
        <Link to={`/learn/${courseId}/${previous.id}`} className="rounded-2xl border border-border bg-card p-4 hover:border-accent">
          <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">Previous</span>
          <span className="mt-1 block font-semibold">{previous.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          to={`/learn/${courseId}/${next.id}`}
          className="rounded-2xl border border-border bg-card p-4 text-right hover:border-accent sm:col-start-2"
        >
          <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">Next</span>
          <span className="mt-1 block font-semibold">{next.title}</span>
        </Link>
      ) : null}
    </nav>
  )
}
