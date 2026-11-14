import { describe, expect, it } from 'vitest'

import { references } from '@/content/references'
import { quizMapOf } from '@/content'
import { continueTarget, recommendedLessons } from '@/lib/progress'
import { searchContent } from '@/lib/search'
import { en } from '@/locales/en'
import { ptBR } from '@/locales/pt-BR'
import type { LocalePack } from '@/locales/types'
import type { LessonBlock } from '@/types/content'

const packs = [en, ptBR]

function blockSignature(block: LessonBlock) {
  if (block.type === 'comparison') return `comparison:${block.tabs.map((tab) => tab.id).join(',')}`
  if (block.type === 'diagram') return `diagram:${block.diagram}`
  if (block.type === 'quiz') return `quiz:${block.quizId}:${block.mode}`
  if (block.type === 'callout') return `callout:${block.tone}`
  if (block.type === 'code') return 'code'
  return block.type
}

function assertPack(pack: LocalePack) {
  const quizMap = quizMapOf(pack)
  expect(pack.lessons.length).toBeGreaterThanOrEqual(6)
  expect(pack.lessons.length).toBeLessThanOrEqual(13)

  for (const lesson of pack.lessons) {
    expect(lesson.objectives.length).toBeGreaterThan(0)
    expect(lesson.blocks.length).toBeGreaterThan(0)
    expect(lesson.referenceIds.length).toBeGreaterThan(0)
    expect(lesson.minutes).toBeGreaterThan(0)
    for (const referenceId of lesson.referenceIds) {
      expect(references.some((reference) => reference.id === referenceId), referenceId).toBe(true)
    }
    for (const block of lesson.blocks) {
      if (block.type === 'quiz') expect(quizMap[block.quizId]).toBeDefined()
    }
  }

  for (const course of pack.courses) {
    for (const section of course.sections) {
      for (const item of section.items) {
        if (!item.lessonId) continue
        const lesson = pack.lessons.find((entry) => entry.id === item.lessonId)
        expect(lesson).toBeDefined()
        expect(lesson?.courseId).toBe(course.id)
      }
    }
  }

  for (const course of pack.courses.filter((entry) => entry.status === 'coming-soon')) {
    const ids = course.sections.flatMap((section) => section.items.map((item) => item.lessonId))
    expect(ids.every((id) => !id)).toBe(true)
  }
}

describe('curriculum integrity', () => {
  it.each(packs)('keeps $id consistent', (pack) => {
    assertPack(pack)
  })
})

describe('locale parity', () => {
  it('keeps ids, block order, correct choices, and note keys aligned', () => {
    expect(ptBR.courses.map((course) => course.id)).toEqual(en.courses.map((course) => course.id))
    expect(ptBR.lessons.map((lesson) => lesson.id)).toEqual(en.lessons.map((lesson) => lesson.id))
    expect(ptBR.glossary.map((entry) => entry.id)).toEqual(en.glossary.map((entry) => entry.id))
    expect(ptBR.topics.map((topic) => topic.id)).toEqual(en.topics.map((topic) => topic.id))
    expect(ptBR.quizzes.map((quiz) => quiz.id)).toEqual(en.quizzes.map((quiz) => quiz.id))
    expect(Object.keys(ptBR.referenceNotes).sort()).toEqual(Object.keys(en.referenceNotes).sort())

    for (const lesson of en.lessons) {
      const translated = ptBR.lessons.find((entry) => entry.id === lesson.id)
      expect(translated?.blocks.map(blockSignature)).toEqual(lesson.blocks.map(blockSignature))
      expect(translated?.courseId).toBe(lesson.courseId)
      expect(translated?.minutes).toBe(lesson.minutes)
      expect(translated?.referenceIds).toEqual(lesson.referenceIds)
      expect(translated?.quizIds).toEqual(lesson.quizIds)
    }

    for (const quiz of en.quizzes) {
      const translated = ptBR.quizzes.find((entry) => entry.id === quiz.id)
      expect(translated?.questions.map((question) => question.id)).toEqual(quiz.questions.map((question) => question.id))
      for (const question of quiz.questions) {
        const match = translated?.questions.find((entry) => entry.id === question.id)
        expect(match?.correctChoiceId).toBe(question.correctChoiceId)
        expect(match?.choices.map((choice) => choice.id)).toEqual(question.choices.map((choice) => choice.id))
      }
    }

    expect(ptBR.lessons.find((lesson) => lesson.id === 'what-is-sustainability')?.title).not.toBe(
      en.lessons.find((lesson) => lesson.id === 'what-is-sustainability')?.title,
    )
  })
})

const carbonLessonIds = [
  'ghg-inventory',
  'scopes',
  'activity-and-factors',
  'data-quality',
  'scope-2-instruments',
  'scope-3-screening',
  'base-year-recalculation',
]

describe('carbon method lessons', () => {
  it('publishes the three lessons that finish the carbon path', () => {
    expect(en.lessons).toHaveLength(13)
    expect(ptBR.lessons).toHaveLength(13)
    for (const pack of packs) {
      const course = pack.courses.find((entry) => entry.id === 'carbon-accounting')
      const ids = course?.sections.flatMap((section) => section.items.map((item) => item.lessonId))
      expect(ids).toEqual(carbonLessonIds)
      expect(course?.sections.some((section) => section.id === 'planned')).toBe(false)
      const topic = pack.topics.find((entry) => entry.id === 'accounting')
      expect(topic?.lessonIds).toEqual(
        expect.arrayContaining(['scope-2-instruments', 'scope-3-screening', 'base-year-recalculation']),
      )
    }
  })

  it('points existing glossary entries at the new lessons', () => {
    for (const pack of packs) {
      const lessonIds = (id: string) => pack.glossary.find((entry) => entry.id === id)?.lessonIds
      expect(lessonIds('location-based')).toContain('scope-2-instruments')
      expect(lessonIds('market-based')).toContain('scope-2-instruments')
      expect(lessonIds('scope-3')).toContain('scope-3-screening')
    }
  })

  it('keeps the check answers for certificates, exclusions, and organic growth', () => {
    const answers = [
      ['scope-2-instruments-check', 'certificate', 'market-only'],
      ['scope-3-screening-check', 'small-category', 'disclose'],
      ['base-year-check', 'organic-growth', 'keep'],
    ] as const
    for (const pack of packs) {
      for (const [quizId, questionId, choiceId] of answers) {
        const quiz = pack.quizzes.find((entry) => entry.id === quizId)
        expect(quiz?.questions.map((question) => question.id)).toEqual([questionId])
        expect(quiz?.questions[0]?.correctChoiceId).toBe(choiceId)
        const lesson = pack.lessons.find((entry) => entry.quizIds.includes(quizId))
        const block = lesson?.blocks.find((entry) => entry.type === 'quiz')
        expect(block).toMatchObject({ type: 'quiz', quizId, mode: 'check' })
      }
    }
  })
})

describe('progress helpers', () => {
  it('starts at the first lesson when nothing is complete', () => {
    const target = continueTarget(en, [])
    expect(target?.lesson.id).toBe('what-is-sustainability')
    expect(target?.reviewing).toBe(false)
  })

  it('skips completed lessons', () => {
    const target = continueTarget(en, ['what-is-sustainability'])
    expect(target?.lesson.id).toBe('what-is-esg')
  })

  it('recommends unfinished lessons only', () => {
    const titles = recommendedLessons(en, ['what-is-sustainability']).map((lesson) => lesson.id)
    expect(titles).not.toContain('what-is-sustainability')
  })
})

describe('search', () => {
  it('finds a lesson and a glossary term', () => {
    const results = searchContent(en, 'scope 3')
    expect(results.some((result) => result.kind === 'glossary' && result.id === 'scope-3')).toBe(true)
    expect(results.some((result) => result.kind === 'lesson')).toBe(true)
  })

  it('finds escopo 3 in Portuguese and still finds the English alias', () => {
    expect(searchContent(ptBR, 'escopo 3').some((result) => result.id === 'scope-3')).toBe(true)
    expect(searchContent(ptBR, 'scope 3').some((result) => result.id === 'scope-3')).toBe(true)
  })

  it('ignores a one-character query', () => {
    expect(searchContent(en, 'e')).toEqual([])
  })
})
