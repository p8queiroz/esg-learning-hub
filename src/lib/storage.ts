import type { ProgressState } from '@/types/content'

export const PROGRESS_STORAGE_KEY = 'esg-learning-hub.progress.v1'
export const THEME_STORAGE_KEY = 'esg-learning-hub.theme'

export const emptyProgress = (): ProgressState => ({
  completedLessonIds: [],
  quizResults: {},
})

function isProgressState(value: unknown): value is ProgressState {
  if (!value || typeof value !== 'object') return false
  const record = value as ProgressState
  return Array.isArray(record.completedLessonIds) && !!record.quizResults
}

export function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY)
    if (!raw) return emptyProgress()
    const parsed: unknown = JSON.parse(raw)
    if (!isProgressState(parsed)) return emptyProgress()
    return {
      completedLessonIds: parsed.completedLessonIds.filter((id) => typeof id === 'string'),
      quizResults: parsed.quizResults,
    }
  } catch {
    return emptyProgress()
  }
}

export function saveProgress(progress: ProgressState) {
  localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress))
}
