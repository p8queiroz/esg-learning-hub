import { Link } from 'react-router'

import { ProgressBar } from '@/components/learning/ProgressBar'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { courseIcon, Icon, IconTile } from '@/components/ui/icon'
import { courseMinutes, plannedCount, publishedLessons } from '@/content'
import { useLocale } from '@/hooks/useLocale'
import { usePageTitle } from '@/hooks/usePageTitle'
import { useProgress } from '@/hooks/useProgress'
import { completionRatio } from '@/lib/progress'
import { formatMinutes } from '@/lib/utils'

export function PathsPage() {
  const { pack } = useLocale()
  usePageTitle(pack.ui.paths.title)

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
      <header className="flex max-w-3xl items-start gap-4">
        <IconTile name="conversion_path" className="mt-1" />
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight">{pack.ui.paths.title}</h1>
          <p className="text-lg leading-8 text-muted-foreground">{pack.ui.paths.lede}</p>
        </div>
      </header>
      {pack.ui.paths.bands.map((band) => (
        <section key={band.id} className="space-y-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">{band.title}</h2>
            <p className="text-sm text-muted-foreground">{band.lede}</p>
          </div>
          <div className="grid gap-4">
            {pack.courses
              .filter((course) => course.band === band.id)
              .map((course) => (
                <CourseRow key={course.id} courseId={course.id} />
              ))}
          </div>
        </section>
      ))}
    </div>
  )
}

function CourseRow({ courseId }: { courseId: string }) {
  const { pack } = useLocale()
  const course = pack.courses.find((item) => item.id === courseId)
  const { progress } = useProgress()
  if (!course) return null
  const published = publishedLessons(pack, course)
  const ratio = completionRatio(pack, course, progress.completedLessonIds)
  const planned = plannedCount(course)
  const copy = pack.ui.paths

  return (
    <Card className="grid gap-4 p-5 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-center">
      <div className="flex items-start gap-4">
        <IconTile name={courseIcon(course.id)} />
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            <Badge>{pack.ui.level(course.level)}</Badge>
            <Badge>{pack.ui.difficulty[course.difficulty]}</Badge>
            <Badge>{course.status === 'available' ? pack.ui.status.published : pack.ui.status.planned}</Badge>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">{course.title}</h3>
          <p className="max-w-3xl text-sm leading-6 text-muted-foreground">{course.description}</p>
          <p className="flex items-center gap-2 text-sm">
            <Icon name="schedule" className="text-[18px] text-primary" />
            {course.status === 'available'
              ? copy.publishedLessons(formatMinutes(courseMinutes(pack, course)), published.length, planned)
              : copy.plannedLessons(planned)}
          </p>
        </div>
      </div>
      <div className="space-y-3">
        {course.status === 'available' ? (
          <>
            <ProgressBar value={ratio.ratio} label={pack.ui.dashboard.completeCount(ratio.completed, ratio.total)} />
            <Link to={`/paths/${course.id}`} className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground">
              {ratio.completed === 0 ? copy.start : ratio.completed === ratio.total ? copy.review : copy.continue}
              <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          </>
        ) : (
          <p className="text-sm leading-6 text-muted-foreground">{copy.comingSoon}</p>
        )}
        {course.status === 'coming-soon' ? (
          <Link to={`/paths/${course.id}`} className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
            {copy.viewSyllabus}
            <Icon name="arrow_forward" className="text-[16px]" />
          </Link>
        ) : null}
      </div>
    </Card>
  )
}
