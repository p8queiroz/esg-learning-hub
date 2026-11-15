import { carbonLessons } from '@/locales/pt-BR/carbon-accounting'
import { courses } from '@/locales/pt-BR/courses'
import { engineeringLessons } from '@/locales/pt-BR/engineering'
import { foundationLessons } from '@/locales/pt-BR/foundations'
import { glossary } from '@/locales/pt-BR/glossary'
import { referenceNotes } from '@/locales/pt-BR/notes'
import { quizzes } from '@/locales/pt-BR/quizzes'
import { topics } from '@/locales/pt-BR/topics'
import { ui } from '@/locales/pt-BR/ui'
import type { LocalePack } from '@/locales/types'

export const ptBR: LocalePack = {
  id: 'pt-BR',
  courses,
  lessons: [...foundationLessons, ...carbonLessons, ...engineeringLessons],
  glossary,
  quizzes,
  topics,
  referenceNotes,
  ui,
}
