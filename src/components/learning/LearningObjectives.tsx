import { BookOpen } from 'lucide-react'

export function LearningObjectives({ items }: { items: string[] }) {
  return (
    <section aria-labelledby="learning-objectives" className="rounded-2xl border border-border bg-secondary/60 p-5">
      <div className="mb-3 flex items-center gap-2">
        <BookOpen className="size-4 text-primary" aria-hidden="true" />
        <h2 id="learning-objectives" className="text-sm font-semibold tracking-wide uppercase">
          Learning objectives
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
