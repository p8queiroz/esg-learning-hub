import { carbonLessons } from '@/content/lessons/carbon-accounting'
import { engineeringLessons } from '@/content/lessons/engineering'
import { foundationLessons } from '@/content/lessons/foundations'
import { courses } from '@/content/courses'
import { glossary, glossaryMap } from '@/content/glossary'
import { quizMap, quizzes } from '@/content/quizzes'
import { referenceMap, references } from '@/content/references'
import { topics } from '@/content/topics'
import type { Course, Lesson } from '@/types/content'

export const lessons: Lesson[] = [...foundationLessons, ...carbonLessons, ...engineeringLessons]

export const lessonMap = Object.fromEntries(lessons.map((lesson) => [lesson.id, lesson]))

const courseMap = Object.fromEntries(courses.map((course) => [course.id, course]))

export function getCourse(courseId: string) {
  return courseMap[courseId]
}

export function getLesson(lessonId: string) {
  return lessonMap[lessonId]
}

export function publishedLessonIds(course: Course) {
  return course.sections.flatMap((section) =>
    section.items.flatMap((item) => (item.lessonId && lessonMap[item.lessonId] ? [item.lessonId] : [])),
  )
}

export function publishedLessons(course: Course) {
  return publishedLessonIds(course).map((id) => lessonMap[id])
}

export function listPublishedLessons() {
  return courses.flatMap((course) => publishedLessons(course))
}

export function plannedCount(course: Course) {
  return course.sections.reduce(
    (count, section) => count + section.items.filter((item) => !item.lessonId).length,
    0,
  )
}

export function courseMinutes(course: Course) {
  return publishedLessons(course).reduce((total, lesson) => total + lesson.minutes, 0)
}

export function adjacentLessons(lessonId: string) {
  const lesson = lessonMap[lessonId]
  if (!lesson) return { previous: undefined, next: undefined }
  const course = courseMap[lesson.courseId]
  if (!course) return { previous: undefined, next: undefined }
  const ids = publishedLessonIds(course)
  const index = ids.indexOf(lessonId)
  return {
    previous: index > 0 ? lessonMap[ids[index - 1]] : undefined,
    next: index >= 0 && index < ids.length - 1 ? lessonMap[ids[index + 1]] : undefined,
  }
}

export function getReferences(ids: string[]) {
  return ids.flatMap((id) => (referenceMap[id] ? [referenceMap[id]] : []))
}

export { courses, glossary, glossaryMap, quizMap, quizzes, referenceMap, references, topics }
