import { Link } from 'react-router'

import { Card } from '@/components/ui/card'
import { Icon, IconTile } from '@/components/ui/icon'
import { getLesson, glossaryMapOf } from '@/content'
import { useLocale } from '@/hooks/useLocale'
import { usePageTitle } from '@/hooks/usePageTitle'

const topicIcons: Record<string, string> = {
  foundations: 'eco',
  gases: 'co2',
  accounting: 'calculate',
  reporting: 'description',
  markets: 'public',
  engineering: 'code',
}

export function ExplorePage() {
  const { pack } = useLocale()
  usePageTitle(pack.ui.explore.title)
  const glossaryMap = glossaryMapOf(pack)

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
      <header className="flex max-w-3xl items-start gap-4">
        <IconTile name="explore" className="mt-1" />
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight">{pack.ui.explore.title}</h1>
          <p className="text-lg leading-8 text-muted-foreground">{pack.ui.explore.lede}</p>
        </div>
      </header>
      <div className="grid gap-4 lg:grid-cols-2">
        {pack.topics.map((topic) => {
          const lessons = topic.lessonIds.flatMap((id) => {
            const lesson = getLesson(pack, id)
            return lesson ? [lesson] : []
          })
          const terms = topic.glossaryIds.flatMap((id) => (glossaryMap[id] ? [glossaryMap[id]] : []))
          return (
            <Card key={topic.id} className="space-y-4 p-5">
              <div className="flex items-start gap-3">
                <IconTile name={topicIcons[topic.id] ?? 'info'} />
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">{topic.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{topic.description}</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold">{pack.ui.explore.lessons}</h3>
                {lessons.length === 0 ? (
                  <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="lock" className="text-[18px] text-primary" />
                    {pack.ui.explore.noneYet}
                  </p>
                ) : (
                  <ul className="mt-2 space-y-1">
                    {lessons.map((lesson) => (
                      <li key={lesson.id}>
                        <Link className="inline-flex items-center gap-1 text-sm font-semibold text-accent" to={`/learn/${lesson.courseId}/${lesson.id}`}>
                          {lesson.title}
                          <Icon name="arrow_forward" className="text-[16px]" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <h3 className="text-sm font-semibold">{pack.ui.explore.glossary}</h3>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {terms.map((term) => (
                    <li key={term.id}>
                      <Link to={`/glossary/${term.id}`} className="rounded-full border border-border px-3 py-1 text-sm">
                        {term.term}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
