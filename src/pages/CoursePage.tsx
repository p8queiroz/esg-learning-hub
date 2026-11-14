import { Link, useParams } from 'react-router'

import { ProgressBar } from '@/components/learning/ProgressBar'
import { ReferenceList } from '@/components/learning/ReferenceList'
import { Badge } from '@/components/ui/badge'
import { courseIcon, Icon, IconTile } from '@/components/ui/icon'
import { courseMinutes, getCourse, getLesson, getReferences, publishedLessons } from '@/content'
import { useLocale } from '@/hooks/useLocale'
import { usePageTitle } from '@/hooks/usePageTitle'
import { useProgress } from '@/hooks/useProgress'
import { completionRatio } from '@/lib/progress'
import { formatMinutes } from '@/lib/utils'
import { NotFoundPage } from '@/pages/NotFoundPage'

export function CoursePage() {
  const { courseId } = useParams()
  const { pack } = useLocale()
  const course = courseId ? getCourse(pack, courseId) : undefined
  usePageTitle(course?.title ?? pack.ui.course.pathFallback)
  const { progress } = useProgress()

  if (!course) return <NotFoundPage />

  const published = publishedLessons(pack, course)
  const ratio = completionRatio(pack, course, progress.completedLessonIds)
  const start = published.find((lesson) => !progress.completedLessonIds.includes(lesson.id)) ?? published[0]
  const copy = pack.ui.course

  return (
    <article className="mx-auto flex w-full max-w-4xl flex-col gap-8">
      <header className="space-y-4">
        <div className="flex items-start gap-4">
          <IconTile name={courseIcon(course.id)} className="mt-1" />
          <div className="space-y-3">
            <p className="text-sm font-semibold text-accent">{pack.ui.level(course.level)}</p>
            <h1 className="text-4xl font-semibold tracking-tight">{course.title}</h1>
          </div>
        </div>
        <p className="text-lg leading-8 text-muted-foreground">{course.description}</p>
        <div className="flex flex-wrap gap-2">
          <Badge>{pack.ui.difficulty[course.difficulty]}</Badge>
          <Badge>{course.audience}</Badge>
          {course.status === 'available' ? <Badge>{formatMinutes(courseMinutes(pack, course))}</Badge> : <Badge>{pack.ui.status.planned}</Badge>}
        </div>
        {course.status === 'available' ? (
          <ProgressBar value={ratio.ratio} label={copy.lessonsComplete(ratio.completed, ratio.total)} />
        ) : (
          <p className="rounded-2xl border border-border bg-muted px-4 py-3 text-sm leading-6">{copy.plannedNotice}</p>
        )}
        {start ? (
          <Link to={`/learn/${course.id}/${start.id}`} className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground">
            {ratio.completed === 0 ? copy.start : copy.continue}
            <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
        ) : null}
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
            <IconTile name="flag" />
            {copy.objectives}
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-6">
            {course.objectives.map((objective) => (
              <li key={objective}>{objective}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
            <IconTile name="info" />
            {copy.prerequisites}
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-6">
            {course.prerequisites.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {course.sections.map((section) => (
        <section key={section.id} className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
          <ol className="space-y-3">
            {section.items.map((item) => {
              const lesson = item.lessonId ? getLesson(pack, item.lessonId) : undefined
              const done = lesson ? progress.completedLessonIds.includes(lesson.id) : false
              return (
                <li key={item.title} className="rounded-2xl border border-border bg-card p-4">
                  {lesson ? (
                    <Link to={`/learn/${course.id}/${lesson.id}`} className="flex items-start justify-between gap-3">
                      <span>
                        <span className="block font-semibold">{lesson.title}</span>
                        <span className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="schedule" className="text-[18px] text-primary" />
                          {formatMinutes(lesson.minutes)}
                          {done ? (
                            <span className="inline-flex items-center gap-1 text-primary">
                              <Icon name="check" className="text-[18px]" /> {copy.completeLabel}
                            </span>
                          ) : null}
                        </span>
                      </span>
                      <Icon name="arrow_forward" className="text-[18px] text-primary" />
                    </Link>
                  ) : (
                    <div className="flex items-start gap-3">
                      <Icon name="lock" className="mt-0.5 text-primary" />
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{copy.plannedItem}</p>
                      </div>
                    </div>
                  )}
                </li>
              )
            })}
          </ol>
        </section>
      ))}

      <ReferenceList references={getReferences(pack, course.referenceIds)} />
    </article>
  )
}
