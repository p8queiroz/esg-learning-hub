import { Link } from 'react-router'

import { Icon } from '@/components/ui/icon'
import { useLocale } from '@/hooks/useLocale'
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
  const { pack } = useLocale()

  return (
    <nav aria-label={pack.ui.lesson.navLabel} className="grid gap-3 sm:grid-cols-2">
      {previous ? (
        <Link to={`/learn/${courseId}/${previous.id}`} className="rounded-2xl border border-border bg-card p-4 hover:border-accent">
          <span className="inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            <Icon name="arrow_back" className="text-[16px] text-primary" />
            {pack.ui.lesson.previous}
          </span>
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
          <span className="inline-flex items-center justify-end gap-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            {pack.ui.lesson.next}
            <Icon name="arrow_forward" className="text-[16px] text-primary" />
          </span>
          <span className="mt-1 block font-semibold">{next.title}</span>
        </Link>
      ) : null}
    </nav>
  )
}
