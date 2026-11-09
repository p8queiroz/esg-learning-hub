import { Link } from 'react-router'

import { ProgressBar } from '@/components/learning/ProgressBar'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { courseMinutes, courses, plannedCount, publishedLessons } from '@/content'
import { usePageTitle } from '@/hooks/usePageTitle'
import { useProgress } from '@/hooks/useProgress'
import { completionRatio } from '@/lib/progress'
import { formatMinutes } from '@/lib/utils'

const bands = [
  { id: 'beginner', title: 'Beginner', lede: 'Foundations. The words, the gases, and why an inventory exists.' },
  { id: 'intermediate', title: 'Intermediate', lede: 'Carbon accounting is published. Reporting and carbon markets are planned.' },
  { id: 'advanced', title: 'Advanced', lede: 'How the accounting rules become software.' },
] as const

export function PathsPage() {
  usePageTitle('Learning paths')

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
      <header className="max-w-3xl space-y-3">
        <h1 className="font-serif text-4xl">Learning paths</h1>
        <p className="text-lg leading-8 text-muted-foreground">
          Three paths are open. Two are listed so you can see where the curriculum is going. Planned lessons are titles only. They are not empty pages pretending to be finished.
        </p>
      </header>
      {bands.map((band) => (
        <section key={band.id} className="space-y-4">
          <div>
            <h2 className="font-serif text-3xl">{band.title}</h2>
            <p className="text-sm text-muted-foreground">{band.lede}</p>
          </div>
          <div className="grid gap-4">
            {courses
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
  const course = courses.find((item) => item.id === courseId)
  const { progress } = useProgress()
  if (!course) return null
  const published = publishedLessons(course)
  const ratio = completionRatio(course, progress.completedLessonIds)
  const planned = plannedCount(course)

  return (
    <Card className="grid gap-4 p-5 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-center">
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          <Badge>Level {course.level}</Badge>
          <Badge>{course.difficulty}</Badge>
          <Badge>{course.status === 'available' ? 'Published' : 'Planned'}</Badge>
        </div>
        <h3 className="font-serif text-2xl">{course.title}</h3>
        <p className="max-w-3xl text-sm leading-6 text-muted-foreground">{course.description}</p>
        <p className="text-sm">
          {course.status === 'available'
            ? `${formatMinutes(courseMinutes(course))} · ${published.length} published lessons${planned ? ` · ${planned} planned` : ''}`
            : `${planned} lessons planned`}
        </p>
      </div>
      <div className="space-y-3">
        {course.status === 'available' ? (
          <>
            <ProgressBar value={ratio.ratio} label={`${ratio.completed} of ${ratio.total} complete`} />
            <Link to={`/paths/${course.id}`} className="inline-flex h-10 items-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground">
              {ratio.completed === 0 ? 'Start path' : ratio.completed === ratio.total ? 'Review path' : 'Continue path'}
            </Link>
          </>
        ) : (
          <p className="text-sm leading-6 text-muted-foreground">Not published. Open the path to read the syllabus and the sources it will use.</p>
        )}
        {course.status === 'coming-soon' ? (
          <Link to={`/paths/${course.id}`} className="inline-flex text-sm font-semibold text-accent">
            View syllabus
          </Link>
        ) : null}
      </div>
    </Card>
  )
}
