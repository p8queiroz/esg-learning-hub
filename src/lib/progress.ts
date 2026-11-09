import { getCourse, listPublishedLessons, publishedLessons } from '@/content'
import type { Course } from '@/types/content'

export function completionRatio(course: Course, completedIds: string[]) {
  const published = publishedLessons(course)
  const completed = published.filter((lesson) => completedIds.includes(lesson.id)).length
  return {
    completed,
    total: published.length,
    ratio: published.length === 0 ? 0 : completed / published.length,
  }
}

export function isLessonComplete(lessonId: string, completedIds: string[]) {
  return completedIds.includes(lessonId)
}

export function continueTarget(completedIds: string[]) {
  const published = listPublishedLessons()
  const next = published.find((lesson) => !completedIds.includes(lesson.id))
  const lesson = next ?? published[published.length - 1]
  if (!lesson) return undefined
  const course = getCourse(lesson.courseId)
  if (!course) return undefined
  return {
    course,
    lesson,
    reviewing: !next,
  }
}

export function recommendedLessons(completedIds: string[]) {
  return listPublishedLessons()
    .filter((lesson) => !completedIds.includes(lesson.id))
    .slice(0, 3)
}
