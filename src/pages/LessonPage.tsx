import { Link, useParams } from 'react-router'

import { LearningObjectives } from '@/components/learning/LearningObjectives'
import { LessonBlocks } from '@/components/learning/LessonBlocks'
import { LessonNavigation } from '@/components/learning/LessonNavigation'
import { ReferenceList } from '@/components/learning/ReferenceList'
import { courseIcon, Icon, IconTile } from '@/components/ui/icon'
import { adjacentLessons, getCourse, getLesson, getReferences } from '@/content'
import { useLocale } from '@/hooks/useLocale'
import { usePageTitle } from '@/hooks/usePageTitle'
import { useProgress } from '@/hooks/useProgress'
import { formatMinutes } from '@/lib/utils'
import { NotFoundPage } from '@/pages/NotFoundPage'

export function LessonPage() {
  const { courseId, lessonId } = useParams()
  const { pack } = useLocale()
  const lesson = lessonId ? getLesson(pack, lessonId) : undefined
  const course = courseId ? getCourse(pack, courseId) : undefined
  const matches = lesson && course && lesson.courseId === course.id
  usePageTitle(matches && lesson ? lesson.title : pack.ui.lesson.fallbackTitle)
  const { progress, toggleLesson } = useProgress()

  if (!matches || !lesson || !course) return <NotFoundPage />

  const { previous, next } = adjacentLessons(pack, lesson.id)
  const complete = progress.completedLessonIds.includes(lesson.id)
  const copy = pack.ui.lesson

  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <header className="space-y-4">
        <Link to={`/paths/${course.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
          <IconTile name={courseIcon(course.id)} />
          {course.title}
        </Link>
        <h1 className="text-4xl leading-tight font-semibold tracking-tight">{lesson.title}</h1>
        <p className="text-lg leading-8 text-muted-foreground">{lesson.summary}</p>
        <p className="flex items-center gap-2 text-sm">
          <Icon name="schedule" className="text-primary" />
          {copy.reading(formatMinutes(lesson.minutes))}
          {complete ? (
            <span className="inline-flex items-center gap-1 font-semibold text-primary">
              <Icon name="check" className="text-[18px]" /> {copy.completed}
            </span>
          ) : null}
        </p>
      </header>
      <LearningObjectives items={lesson.objectives} />
      <LessonBlocks blocks={lesson.blocks} />
      <ReferenceList references={getReferences(pack, lesson.referenceIds)} />
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => toggleLesson(lesson.id)}
          className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground"
        >
          <Icon name="check" className="text-[18px]" />
          {complete ? copy.markIncomplete : copy.markComplete}
        </button>
        <p className="text-sm text-muted-foreground">{copy.savedLocally}</p>
      </div>
      <LessonNavigation courseId={course.id} previous={previous} next={next} />
    </article>
  )
}
