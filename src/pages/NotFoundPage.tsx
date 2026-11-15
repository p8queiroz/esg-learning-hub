import { Link } from 'react-router'

import { Icon, IconTile } from '@/components/ui/icon'
import { useLocale } from '@/hooks/useLocale'

export function NotFoundPage() {
  const { pack } = useLocale()

  return (
    <div className="mx-auto flex max-w-xl items-start gap-4 py-10">
      <IconTile name="search_off" className="mt-1" />
      <div className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight">{pack.ui.notFound.title}</h1>
        <p className="leading-7 text-muted-foreground">{pack.ui.notFound.body}</p>
        <Link to="/" className="inline-flex items-center gap-1 font-semibold text-accent">
          <Icon name="arrow_back" className="text-[18px]" />
          {pack.ui.notFound.back}
        </Link>
      </div>
    </div>
  )
}
