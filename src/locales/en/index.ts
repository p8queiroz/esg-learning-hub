import { carbonLessons } from '@/locales/en/carbon-accounting'
import { courses } from '@/locales/en/courses'
import { engineeringLessons } from '@/locales/en/engineering'
import { foundationLessons } from '@/locales/en/foundations'
import { glossary } from '@/locales/en/glossary'
import { referenceNotes } from '@/locales/en/notes'
import { quizzes } from '@/locales/en/quizzes'
import { topics } from '@/locales/en/topics'
import { ui } from '@/locales/en/ui'
import type { LocalePack } from '@/locales/types'

export const en: LocalePack = {
  id: 'en',
  courses,
  lessons: [...foundationLessons, ...carbonLessons, ...engineeringLessons],
  glossary,
  quizzes,
  topics,
  referenceNotes,
  ui,
}
