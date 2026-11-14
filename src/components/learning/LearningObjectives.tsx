import { IconTile } from '@/components/ui/icon'
import { useLocale } from '@/hooks/useLocale'

export function LearningObjectives({ items }: { items: string[] }) {
  const { pack } = useLocale()

  return (
    <section aria-labelledby="learning-objectives" className="rounded-2xl border border-border bg-secondary/60 p-5">
      <div className="mb-3 flex items-center gap-2">
        <IconTile name="flag" />
        <h2 id="learning-objectives" className="text-sm font-semibold tracking-wide uppercase">
          {pack.ui.lesson.objectives}
        </h2>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="pl-1 text-[15px] leading-6">
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
