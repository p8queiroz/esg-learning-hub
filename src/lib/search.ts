import { glossary, listPublishedLessons } from '@/content'

export type SearchResult = {
  kind: 'lesson' | 'glossary'
  id: string
  title: string
  subtitle: string
  href: string
}

export function searchContent(query: string): SearchResult[] {
  const needle = query.trim().toLowerCase()
  if (needle.length < 2) return []

  const lessons = listPublishedLessons()
    .filter((lesson) => `${lesson.title} ${lesson.summary}`.toLowerCase().includes(needle))
    .map((lesson) => ({
      kind: 'lesson' as const,
      id: lesson.id,
      title: lesson.title,
      subtitle: 'Lesson',
      href: `/learn/${lesson.courseId}/${lesson.id}`,
    }))

  const terms = glossary
    .filter((entry) => {
      const haystack = [entry.term, entry.definition, ...(entry.aliases ?? [])].join(' ').toLowerCase()
      return haystack.includes(needle)
    })
    .map((entry) => ({
      kind: 'glossary' as const,
      id: entry.id,
      title: entry.term,
      subtitle: 'Glossary',
      href: `/glossary/${entry.id}`,
    }))

  return [...lessons, ...terms].slice(0, 8)
}
