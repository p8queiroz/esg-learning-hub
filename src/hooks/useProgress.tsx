import { createContext, useContext, useState, type ReactNode } from 'react'

import { loadProgress, saveProgress } from '@/lib/storage'
import type { ProgressState } from '@/types/content'

type ProgressContextValue = {
  progress: ProgressState
  toggleLesson: (lessonId: string) => void
  recordQuiz: (quizId: string, correct: number, total: number) => void
}

const ProgressContext = createContext<ProgressContextValue | null>(null)

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>(() => loadProgress())

  function update(next: ProgressState) {
    setProgress(next)
    saveProgress(next)
  }

  function toggleLesson(lessonId: string) {
    const completed = progress.completedLessonIds.includes(lessonId)
    update({
      ...progress,
      completedLessonIds: completed
        ? progress.completedLessonIds.filter((id) => id !== lessonId)
        : [...progress.completedLessonIds, lessonId],
    })
  }

  function recordQuiz(quizId: string, correct: number, total: number) {
    update({
      ...progress,
      quizResults: {
        ...progress.quizResults,
        [quizId]: { correct, total, updatedAt: new Date().toISOString() },
      },
    })
  }

  return <ProgressContext.Provider value={{ progress, toggleLesson, recordQuiz }}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  const value = useContext(ProgressContext)
  if (!value) throw new Error('useProgress must be used inside ProgressProvider')
  return value
}
