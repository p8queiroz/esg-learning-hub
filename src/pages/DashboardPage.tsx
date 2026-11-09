import { ArrowRight, Clock } from 'lucide-react'
import { Link } from 'react-router'

import { Card } from '@/components/ui/card'
import { courses, getCourse, glossary } from '@/content'
import { usePageTitle } from '@/hooks/usePageTitle'
import { useProgress } from '@/hooks/useProgress'
import { continueTarget, recommendedLessons } from '@/lib/progress'
import { courseMinutes, publishedLessons } from '@/content'
import { completionRatio } from '@/lib/progress'
import { formatMinutes } from '@/lib/utils'
import { ProgressBar } from '@/components/learning/ProgressBar'

export function DashboardPage() {
  usePageTitle('ESG Learning Hub')
  const { progress } = useProgress()
  const published = courses.flatMap((course) => publishedLessons(course))
  const completed = published.filter((lesson) => progress.completedLessonIds.includes(lesson.id)).length
  const next = continueTarget(progress.completedLessonIds)
  const recommended = recommendedLessons(progress.completedLessonIds)
  const featured = courses.filter((course) => course.status === 'available')

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.8fr)]">
        <div className="space-y-4">
          <p className="text-sm font-semibold tracking-wide text-accent uppercase">A curriculum, not a brochure</p>
          <h1 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
            Learn the ideas behind sustainability software.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            ESG Learning Hub teaches sustainability, carbon accounting, and the systems engineers build around them.
            Lessons cite the GHG Protocol, IPCC, ISSB, GRI, and EU law. Numbers in the calculator are labeled as fiction.
          </p>
        </div>
        <Card className="p-5">
          <h2 className="font-serif text-2xl">Your progress</h2>
          {completed === 0 ? (
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              You have not completed a lesson yet. {published.length} lessons are published. Nothing here is a streak, a score, or a certificate.
            </p>
          ) : (
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {completed} of {published.length} published lessons marked complete on this browser.
            </p>
          )}
          <ProgressBar className="mt-4" value={published.length === 0 ? 0 : completed / published.length} label="Published lessons" />
        </Card>
      </section>

      {next ? (
        <Card className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold tracking-wide text-accent uppercase">{next.reviewing ? 'Review' : 'Continue'}</p>
            <h2 className="mt-1 font-serif text-3xl">{next.lesson.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {next.course.title} · {formatMinutes(next.lesson.minutes)}
            </p>
          </div>
          <Link
            to={`/learn/${next.course.id}/${next.lesson.id}`}
            className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground"
          >
            {next.reviewing ? 'Review lesson' : completed === 0 ? 'Start here' : 'Continue'}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Card>
      ) : null}

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-3">
          <h2 className="font-serif text-3xl">Featured paths</h2>
          <Link to="/paths" className="text-sm font-semibold text-accent">
            All paths
          </Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {featured.map((course) => {
            const ratio = completionRatio(course, progress.completedLessonIds)
            return (
              <Card key={course.id} className="flex flex-col gap-3 p-5">
                <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">{course.difficulty}</p>
                <h3 className="font-serif text-2xl">{course.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{course.description}</p>
                <p className="mt-auto flex items-center gap-2 text-sm">
                  <Clock className="size-4" aria-hidden="true" />
                  {formatMinutes(courseMinutes(course))} · {publishedLessons(course).length} lessons
                </p>
                <ProgressBar value={ratio.ratio} label={`${ratio.completed} of ${ratio.total} complete`} />
                <Link to={`/paths/${course.id}`} className="text-sm font-semibold text-accent">
                  Open path
                </Link>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="space-y-3">
          <h2 className="font-serif text-3xl">Recommended next</h2>
          {recommended.length === 0 ? (
            <p className="text-sm text-muted-foreground">You have marked every published lesson complete.</p>
          ) : (
            <ul className="space-y-3">
              {recommended.map((lesson) => {
                const course = getCourse(lesson.courseId)
                return (
                  <li key={lesson.id}>
                    <Link to={`/learn/${lesson.courseId}/${lesson.id}`} className="block rounded-2xl border border-border bg-card p-4 hover:border-accent">
                      <span className="text-xs font-semibold text-muted-foreground">{course?.title}</span>
                      <span className="mt-1 block font-semibold">{lesson.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
        <Card className="p-5">
          <h2 className="font-serif text-2xl">Glossary</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {glossary.length} terms, each with a definition, an example, and the lesson or source it depends on. Reporting and carbon-market courses are still planned. Their terms are already defined.
          </p>
          <Link to="/glossary" className="mt-4 inline-flex text-sm font-semibold text-accent">
            Browse terms
          </Link>
        </Card>
      </section>
    </div>
  )
}
