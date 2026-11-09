import { describe, expect, it } from 'vitest'

import { courses, lessons, quizMap, referenceMap } from '@/content'
import { continueTarget, recommendedLessons } from '@/lib/progress'
import { searchContent } from '@/lib/search'

describe('curriculum integrity', () => {
  it('gives every published lesson objectives, blocks, and real sources', () => {
    expect(lessons.length).toBeGreaterThanOrEqual(6)
    expect(lessons.length).toBeLessThanOrEqual(10)

    for (const lesson of lessons) {
      expect(lesson.objectives.length).toBeGreaterThan(0)
      expect(lesson.blocks.length).toBeGreaterThan(0)
      expect(lesson.referenceIds.length).toBeGreaterThan(0)
      expect(lesson.minutes).toBeGreaterThan(0)
      for (const referenceId of lesson.referenceIds) {
        expect(referenceMap[referenceId], referenceId).toBeDefined()
      }
      for (const block of lesson.blocks) {
        if (block.type === 'quiz') expect(quizMap[block.quizId]).toBeDefined()
      }
    }
  })

  it('only links syllabus items to lessons in the same course', () => {
    for (const course of courses) {
      for (const section of course.sections) {
        for (const item of section.items) {
          if (!item.lessonId) continue
          const lesson = lessons.find((entry) => entry.id === item.lessonId)
          expect(lesson).toBeDefined()
          expect(lesson?.courseId).toBe(course.id)
        }
      }
    }
  })

  it('keeps planned courses free of unpublished lesson pages', () => {
    for (const course of courses.filter((entry) => entry.status === 'coming-soon')) {
      const ids = course.sections.flatMap((section) => section.items.map((item) => item.lessonId))
      expect(ids.every((id) => !id)).toBe(true)
    }
  })
})

describe('progress helpers', () => {
  it('starts at the first lesson when nothing is complete', () => {
    const target = continueTarget([])
    expect(target?.lesson.id).toBe('what-is-sustainability')
    expect(target?.reviewing).toBe(false)
  })

  it('skips completed lessons', () => {
    const target = continueTarget(['what-is-sustainability'])
    expect(target?.lesson.id).toBe('what-is-esg')
  })

  it('recommends unfinished lessons only', () => {
    const titles = recommendedLessons(['what-is-sustainability']).map((lesson) => lesson.id)
    expect(titles).not.toContain('what-is-sustainability')
  })
})

describe('search', () => {
  it('finds a lesson and a glossary term', () => {
    const results = searchContent('scope 3')
    expect(results.some((result) => result.kind === 'glossary' && result.id === 'scope-3')).toBe(true)
    expect(results.some((result) => result.kind === 'lesson')).toBe(true)
  })

  it('ignores a one-character query', () => {
    expect(searchContent('e')).toEqual([])
  })
})
