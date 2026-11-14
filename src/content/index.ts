import { referenceMap } from '@/content/references'
import type { LocalePack } from '@/locales/types'
import type { Course } from '@/types/content'

export function lessonMapOf(pack: LocalePack) {
  return Object.fromEntries(pack.lessons.map((lesson) => [lesson.id, lesson]))
}

export function courseMapOf(pack: LocalePack) {
  return Object.fromEntries(pack.courses.map((course) => [course.id, course]))
}

export function glossaryMapOf(pack: LocalePack) {
  return Object.fromEntries(pack.glossary.map((entry) => [entry.id, entry]))
}

export function quizMapOf(pack: LocalePack) {
  return Object.fromEntries(pack.quizzes.map((quiz) => [quiz.id, quiz]))
}

export function getCourse(pack: LocalePack, courseId: string) {
  return courseMapOf(pack)[courseId]
}

export function getLesson(pack: LocalePack, lessonId: string) {
  return lessonMapOf(pack)[lessonId]
}

export function publishedLessonIds(pack: LocalePack, course: Course) {
  const lessonMap = lessonMapOf(pack)
  return course.sections.flatMap((section) =>
    section.items.flatMap((item) => (item.lessonId && lessonMap[item.lessonId] ? [item.lessonId] : [])),
  )
}

export function publishedLessons(pack: LocalePack, course: Course) {
  const lessonMap = lessonMapOf(pack)
  return publishedLessonIds(pack, course).map((id) => lessonMap[id])
}

export function listPublishedLessons(pack: LocalePack) {
  return pack.courses.flatMap((course) => publishedLessons(pack, course))
}

export function plannedCount(course: Course) {
  return course.sections.reduce((count, section) => count + section.items.filter((item) => !item.lessonId).length, 0)
}

export function courseMinutes(pack: LocalePack, course: Course) {
  return publishedLessons(pack, course).reduce((total, lesson) => total + lesson.minutes, 0)
}

export function adjacentLessons(pack: LocalePack, lessonId: string) {
  const lessonMap = lessonMapOf(pack)
  const lesson = lessonMap[lessonId]
  if (!lesson) return { previous: undefined, next: undefined }
  const course = courseMapOf(pack)[lesson.courseId]
  if (!course) return { previous: undefined, next: undefined }
  const ids = publishedLessonIds(pack, course)
  const index = ids.indexOf(lessonId)
  return {
    previous: index > 0 ? lessonMap[ids[index - 1]] : undefined,
    next: index >= 0 && index < ids.length - 1 ? lessonMap[ids[index + 1]] : undefined,
  }
}

export function getReferences(pack: LocalePack, ids: string[]) {
  return ids.flatMap((id) => {
    const reference = referenceMap[id]
    if (!reference) return []
    return [{ ...reference, note: pack.referenceNotes[id] }]
  })
}
