import { Link } from 'react-router'

import { ProgressBar } from '@/components/learning/ProgressBar'
import { Card } from '@/components/ui/card'
import { courseIcon, Icon, IconTile } from '@/components/ui/icon'
import { courseMinutes, publishedLessons } from '@/content'
import { useLocale } from '@/hooks/useLocale'
import { usePageTitle } from '@/hooks/usePageTitle'
import { useProgress } from '@/hooks/useProgress'
import { completionRatio, continueTarget, recommendedLessons } from '@/lib/progress'
import { formatMinutes } from '@/lib/utils'

export function DashboardPage() {
  usePageTitle('ESG Learning Hub')
  const { pack } = useLocale()
  const { progress } = useProgress()
  const copy = pack.ui.dashboard
  const published = pack.courses.flatMap((course) => publishedLessons(pack, course))
  const completed = published.filter((lesson) => progress.completedLessonIds.includes(lesson.id)).length
  const next = continueTarget(pack, progress.completedLessonIds)
  const recommended = recommendedLessons(pack, progress.completedLessonIds)
  const featured = pack.courses.filter((course) => course.status === 'available')

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.8fr)]">
        <div className="flex items-start gap-4">
          <IconTile name="dashboard" className="mt-1" />
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-wide text-accent uppercase">{copy.eyebrow}</p>
            <h1 className="max-w-3xl text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">{copy.heading}</h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">{copy.lede}</p>
          </div>
        </div>
        <Card className="p-5">
          <div className="flex items-center gap-3">
            <IconTile name="donut_small" />
            <h2 className="text-2xl font-semibold tracking-tight">{copy.progressTitle}</h2>
          </div>
          {completed === 0 ? (
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy.progressEmpty(published.length)}</p>
          ) : (
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy.progressDone(completed, published.length)}</p>
          )}
          <ProgressBar className="mt-4" value={published.length === 0 ? 0 : completed / published.length} label={copy.progressLabel} />
        </Card>
      </section>

      {next ? (
        <Card className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold tracking-wide text-accent uppercase">{next.reviewing ? copy.review : copy.continue}</p>
            <h2 className="mt-1 text-3xl font-semibold tracking-tight">{next.lesson.title}</h2>
            <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
              <Icon name="schedule" className="text-[18px] text-primary" />
              {next.course.title} · {formatMinutes(next.lesson.minutes)}
            </p>
          </div>
          <Link
            to={`/learn/${next.course.id}/${next.lesson.id}`}
            className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground"
          >
            {next.reviewing ? copy.review : completed === 0 ? copy.startHere : copy.continue}
            <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
        </Card>
      ) : null}

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-3xl font-semibold tracking-tight">{copy.featured}</h2>
          <Link to="/paths" className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
            {copy.allPaths}
            <Icon name="arrow_forward" className="text-[16px]" />
          </Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {featured.map((course) => {
            const ratio = completionRatio(pack, course, progress.completedLessonIds)
            return (
              <Card key={course.id} className="flex flex-col gap-3 p-5">
                <div className="flex items-center gap-3">
                  <IconTile name={courseIcon(course.id)} />
                  <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">{pack.ui.difficulty[course.difficulty]}</p>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">{course.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{course.description}</p>
                <p className="mt-auto flex items-center gap-2 text-sm">
                  <Icon name="schedule" className="text-[18px] text-primary" />
                  {formatMinutes(courseMinutes(pack, course))} · {copy.lessonsCount(publishedLessons(pack, course).length)}
                </p>
                <ProgressBar value={ratio.ratio} label={copy.completeCount(ratio.completed, ratio.total)} />
                <Link to={`/paths/${course.id}`} className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  {copy.openPath}
                  <Icon name="arrow_forward" className="text-[16px]" />
                </Link>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight">{copy.recommended}</h2>
          {recommended.length === 0 ? (
            <p className="text-sm text-muted-foreground">{copy.allDone}</p>
          ) : (
            <ul className="space-y-3">
              {recommended.map((lesson) => (
                <li key={lesson.id}>
                  <Link to={`/learn/${lesson.courseId}/${lesson.id}`} className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4 hover:border-accent">
                    <span>
                      <span className="text-xs font-semibold text-muted-foreground">{pack.courses.find((course) => course.id === lesson.courseId)?.title}</span>
                      <span className="mt-1 block font-semibold">{lesson.title}</span>
                    </span>
                    <Icon name="arrow_forward" className="text-[18px] text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <Card className="p-5">
          <div className="flex items-center gap-3">
            <IconTile name="menu_book" />
            <h2 className="text-2xl font-semibold tracking-tight">{copy.glossaryTitle}</h2>
          </div>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy.glossaryBody(pack.glossary.length)}</p>
          <Link to="/glossary" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
            {copy.browseTerms}
            <Icon name="arrow_forward" className="text-[16px]" />
          </Link>
        </Card>
      </section>
    </div>
  )
}
