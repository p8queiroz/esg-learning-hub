import { Check, Clock } from 'lucide-react'
import { Link, useParams } from 'react-router'

import { LearningObjectives } from '@/components/learning/LearningObjectives'
import { LessonBlocks } from '@/components/learning/LessonBlocks'
import { LessonNavigation } from '@/components/learning/LessonNavigation'
import { ReferenceList } from '@/components/learning/ReferenceList'
import { adjacentLessons, getCourse, getLesson, getReferences } from '@/content'
import { usePageTitle } from '@/hooks/usePageTitle'
import { useProgress } from '@/hooks/useProgress'
import { formatMinutes } from '@/lib/utils'
import { NotFoundPage } from '@/pages/NotFoundPage'

export function LessonPage() {
  const { courseId, lessonId } = useParams()
  const lesson = lessonId ? getLesson(lessonId) : undefined
  const course = courseId ? getCourse(courseId) : undefined
  const matches = lesson && course && lesson.courseId === course.id
  usePageTitle(matches && lesson ? lesson.title : 'Lesson')
  const { progress, toggleLesson } = useProgress()

  if (!matches || !lesson || !course) return <NotFoundPage />

  const { previous, next } = adjacentLessons(lesson.id)
  const complete = progress.completedLessonIds.includes(lesson.id)

  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <header className="space-y-4">
        <Link to={`/paths/${course.id}`} className="text-sm font-semibold text-accent">
          {course.title}
        </Link>
        <h1 className="font-serif text-4xl leading-tight">{lesson.title}</h1>
        <p className="text-lg leading-8 text-muted-foreground">{lesson.summary}</p>
        <p className="flex items-center gap-2 text-sm">
          <Clock className="size-4" aria-hidden="true" />
          {formatMinutes(lesson.minutes)} reading
          {complete ? (
            <span className="inline-flex items-center gap-1 font-semibold text-primary">
              <Check className="size-4" aria-hidden="true" /> Completed on this browser
            </span>
          ) : null}
        </p>
      </header>
      <LearningObjectives items={lesson.objectives} />
      <LessonBlocks blocks={lesson.blocks} />
      <ReferenceList references={getReferences(lesson.referenceIds)} />
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => toggleLesson(lesson.id)}
          className="h-10 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground"
        >
          {complete ? 'Mark as not completed' : 'Mark lesson complete'}
        </button>
        <p className="text-sm text-muted-foreground">Saved in this browser only. There is no account.</p>
      </div>
      <LessonNavigation courseId={course.id} previous={previous} next={next} />
    </article>
  )
}
