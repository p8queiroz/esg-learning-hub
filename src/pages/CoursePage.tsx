import { Check, Clock } from 'lucide-react'
import { Link, useParams } from 'react-router'

import { ProgressBar } from '@/components/learning/ProgressBar'
import { ReferenceList } from '@/components/learning/ReferenceList'
import { Badge } from '@/components/ui/badge'
import { courseMinutes, getCourse, getLesson, getReferences, publishedLessons } from '@/content'
import { usePageTitle } from '@/hooks/usePageTitle'
import { useProgress } from '@/hooks/useProgress'
import { completionRatio } from '@/lib/progress'
import { formatMinutes } from '@/lib/utils'
import { NotFoundPage } from '@/pages/NotFoundPage'

export function CoursePage() {
  const { courseId } = useParams()
  const course = courseId ? getCourse(courseId) : undefined
  usePageTitle(course?.title ?? 'Path')
  const { progress } = useProgress()

  if (!course) return <NotFoundPage />

  const published = publishedLessons(course)
  const ratio = completionRatio(course, progress.completedLessonIds)
  const start = published.find((lesson) => !progress.completedLessonIds.includes(lesson.id)) ?? published[0]

  return (
    <article className="mx-auto flex w-full max-w-4xl flex-col gap-8">
      <header className="space-y-4">
        <p className="text-sm font-semibold text-accent">Level {course.level}</p>
        <h1 className="font-serif text-4xl">{course.title}</h1>
        <p className="text-lg leading-8 text-muted-foreground">{course.description}</p>
        <div className="flex flex-wrap gap-2">
          <Badge>{course.difficulty}</Badge>
          <Badge>{course.audience}</Badge>
          {course.status === 'available' ? <Badge>{formatMinutes(courseMinutes(course))}</Badge> : <Badge>Planned</Badge>}
        </div>
        {course.status === 'available' ? (
          <ProgressBar value={ratio.ratio} label={`${ratio.completed} of ${ratio.total} lessons complete`} />
        ) : (
          <p className="rounded-2xl border border-border bg-muted px-4 py-3 text-sm leading-6">
            This path is not written yet. The outline shows the intended lessons. Glossary entries for several of these topics are already available.
          </p>
        )}
        {start ? (
          <Link to={`/learn/${course.id}/${start.id}`} className="inline-flex h-10 items-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground">
            {ratio.completed === 0 ? 'Start first lesson' : 'Continue'}
          </Link>
        ) : null}
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl">Objectives</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6">
            {course.objectives.map((objective) => (
              <li key={objective}>{objective}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-2xl">Prerequisites</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6">
            {course.prerequisites.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {course.sections.map((section) => (
        <section key={section.id} className="space-y-3">
          <h2 className="font-serif text-2xl">{section.title}</h2>
          <ol className="space-y-3">
            {section.items.map((item) => {
              const lesson = item.lessonId ? getLesson(item.lessonId) : undefined
              const done = lesson ? progress.completedLessonIds.includes(lesson.id) : false
              return (
                <li key={item.title} className="rounded-2xl border border-border bg-card p-4">
                  {lesson ? (
                    <Link to={`/learn/${course.id}/${lesson.id}`} className="flex items-start justify-between gap-3">
                      <span>
                        <span className="block font-semibold">{lesson.title}</span>
                        <span className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="size-4" aria-hidden="true" />
                          {formatMinutes(lesson.minutes)}
                          {done ? <span className="inline-flex items-center gap-1 text-primary"><Check className="size-4" aria-hidden="true" /> Completed</span> : null}
                        </span>
                      </span>
                    </Link>
                  ) : (
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-muted-foreground">Planned. Not available yet.</p>
                    </div>
                  )}
                </li>
              )
            })}
          </ol>
        </section>
      ))}

      <ReferenceList references={getReferences(course.referenceIds)} />
    </article>
  )
}
