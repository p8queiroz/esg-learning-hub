import { Link } from 'react-router'

import { Icon, IconTile } from '@/components/ui/icon'
import { useLocale } from '@/hooks/useLocale'
import { usePageTitle } from '@/hooks/usePageTitle'

export function AboutPage() {
  const { pack } = useLocale()
  usePageTitle(pack.ui.about.title)
  const copy = pack.ui.about

  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <header className="flex items-start gap-4">
        <IconTile name="info" className="mt-1" />
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight">{copy.title}</h1>
          <p className="text-lg leading-8 text-muted-foreground">{copy.lede}</p>
        </div>
      </header>
      {copy.sections.map((section) => (
        <section key={section.title} className="space-y-3">
          <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-tight">
            <IconTile name={section.icon} />
            {section.title}
          </h2>
          <p className="leading-7">{section.body}</p>
        </section>
      ))}
      <section className="space-y-3">
        <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-tight">
          <IconTile name="arrow_forward" />
          {copy.startTitle}
        </h2>
        <p className="leading-7">
          {copy.startLead}{' '}
          <Link className="inline-flex items-center gap-1 font-semibold text-accent" to="/learn/foundations/what-is-sustainability">
            {copy.startLink}
            <Icon name="arrow_forward" className="text-[16px]" />
          </Link>
          . {copy.startTail}
        </p>
      </section>
    </article>
  )
}
