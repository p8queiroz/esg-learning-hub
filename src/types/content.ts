export type Difficulty = 'beginner' | 'intermediate' | 'advanced'

export type Reference = {
  id: string
  title: string
  publisher: string
  date: string
  url: string
  note?: string
}

export type QuizChoice = {
  id: string
  label: string
}

export type QuizQuestion = {
  id: string
  prompt: string
  choices: QuizChoice[]
  correctChoiceId: string
  explanation: string
}

export type Quiz = {
  id: string
  title: string
  description: string
  questions: QuizQuestion[]
}

export type LessonBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'concepts'; items: { title: string; body: string }[] }
  | {
      type: 'definition'
      term: string
      definition: string
      glossaryId?: string
    }
  | { type: 'takeaway'; title?: string; points: string[] }
  | {
      type: 'example'
      title: string
      context: string
      walkthrough: string
      technicalNote?: string
    }
  | {
      type: 'comparison'
      title: string
      description?: string
      tabs: { id: string; label: string; body: string }[]
    }
  | { type: 'steps'; title: string; steps: { title: string; body: string }[] }
  | {
      type: 'callout'
      tone: 'note' | 'distinction' | 'caution'
      title: string
      body: string
    }
  | { type: 'grid'; title: string; items: { title: string; body: string }[] }
  | { type: 'diagram'; diagram: DiagramId }
  | { type: 'code'; title: string; code: string; note: string }
  | { type: 'calculator' }
  | { type: 'quiz'; quizId: string; mode: 'check' | 'quiz' }

export type DiagramId = 'pillars' | 'scopes' | 'calculation' | 'platform'

export type Lesson = {
  id: string
  courseId: string
  title: string
  summary: string
  objectives: string[]
  minutes: number
  blocks: LessonBlock[]
  referenceIds: string[]
  quizIds: string[]
}

export type SyllabusItem = {
  title: string
  lessonId?: string
}

export type CourseSection = {
  id: string
  title: string
  items: SyllabusItem[]
}

export type Course = {
  id: string
  level: 1 | 2 | 3 | 4 | 5
  band: 'beginner' | 'intermediate' | 'advanced'
  title: string
  description: string
  audience: string
  difficulty: Difficulty
  status: 'available' | 'coming-soon'
  objectives: string[]
  prerequisites: string[]
  sections: CourseSection[]
  referenceIds: string[]
}

export type GlossaryEntry = {
  id: string
  term: string
  aliases?: string[]
  definition: string
  example: string
  lessonIds: string[]
  referenceIds: string[]
}

export type Topic = {
  id: string
  title: string
  description: string
  lessonIds: string[]
  glossaryIds: string[]
}

export type ProgressState = {
  completedLessonIds: string[]
  quizResults: Record<string, { correct: number; total: number; updatedAt: string }>
}
