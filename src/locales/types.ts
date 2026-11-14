import type { Course, GlossaryEntry, Lesson, Quiz, Topic } from '@/types/content'

export type LocaleId = 'en' | 'pt-BR'

export type UiCopy = {
  tagline: string
  sourceNote: string
  nav: {
    dashboard: string
    paths: string
    explore: string
    glossary: string
    about: string
  }
  chrome: {
    skip: string
    menu: string
    close: string
    search: string
    searchTitle: string
    searchHint: string
    searchPlaceholder: string
    noResults: string
    light: string
    dark: string
    switchToLight: string
    switchToDark: string
    language: string
    primaryNav: string
  }
  difficulty: Record<'beginner' | 'intermediate' | 'advanced', string>
  status: { published: string; planned: string }
  level: (level: number) => string
  dashboard: {
    eyebrow: string
    heading: string
    lede: string
    progressTitle: string
    progressEmpty: (count: number) => string
    progressDone: (completed: number, total: number) => string
    progressLabel: string
    continue: string
    review: string
    startHere: string
    featured: string
    allPaths: string
    openPath: string
    lessonsCount: (count: number) => string
    completeCount: (completed: number, total: number) => string
    recommended: string
    allDone: string
    glossaryTitle: string
    glossaryBody: (count: number) => string
    browseTerms: string
  }
  paths: {
    title: string
    lede: string
    bands: { id: 'beginner' | 'intermediate' | 'advanced'; title: string; lede: string }[]
    publishedLessons: (minutes: string, published: number, planned: number) => string
    plannedLessons: (planned: number) => string
    start: string
    continue: string
    review: string
    comingSoon: string
    viewSyllabus: string
  }
  course: {
    pathFallback: string
    plannedNotice: string
    start: string
    continue: string
    objectives: string
    prerequisites: string
    publishedLessons: string
    plannedLessons: string
    plannedItem: string
    completeLabel: string
    lessonsComplete: (completed: number, total: number) => string
  }
  lesson: {
    fallbackTitle: string
    reading: (minutes: string) => string
    completed: string
    markComplete: string
    markIncomplete: string
    savedLocally: string
    previous: string
    next: string
    objectives: string
    navLabel: string
  }
  references: { heading: string }
  glossaryPage: {
    title: string
    lede: string
    filter: string
    placeholder: string
    count: (count: number) => string
    example: string
    lessons: string
    planned: string
  }
  explore: {
    title: string
    lede: string
    lessons: string
    glossary: string
    noneYet: string
  }
  about: {
    title: string
    lede: string
    sections: { icon: string; title: string; body: string }[]
    startTitle: string
    startLead: string
    startLink: string
    startTail: string
  }
  notFound: {
    title: string
    body: string
    back: string
  }
  blocks: {
    definition: string
    example: string
    keyTakeaway: string
    forEngineers: string
  }
  quiz: {
    check: string
    quiz: string
    correct: string
    notQuite: string
    checkAnswers: string
    tryAgain: string
    savedScore: (correct: number, total: number) => string
    score: (correct: number, total: number) => string
  }
  calculator: {
    eyebrow: string
    title: string
    lede: string
    warning: string
    activityType: string
    factorLabel: string
    unit: (unit: string) => string
    result: string
    presets: {
      electricity: { label: string; activityLabel: string; hint: string }
      distance: { label: string; activityLabel: string; hint: string }
      fuel: { label: string; activityLabel: string; hint: string }
    }
  }
  errors: {
    'non-numeric': string
    negative: string
  }
  searchKind: { lesson: string; glossary: string }
  diagrams: {
    pillarsCaption: string
    pillars: { title: string; items: string[] }[]
    scopesCaption: string
    scope1Eyebrow: string
    scope1Title: string
    scope1Body: string
    scope2Eyebrow: string
    scope2Title: string
    scope2Body: string
    scope3Eyebrow: string
    scope3Title: string
    scope3Body: string
    calculationCaption: string
    calculationSteps: { title: string; body: string }[]
    calculationFormula: string
    platformCaption: string
    platform: { title: string; body: string }[]
  }
}

export type LocalePack = {
  id: LocaleId
  courses: Course[]
  lessons: Lesson[]
  glossary: GlossaryEntry[]
  quizzes: Quiz[]
  topics: Topic[]
  referenceNotes: Record<string, string>
  ui: UiCopy
}
