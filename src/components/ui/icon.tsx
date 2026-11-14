import { cn } from '@/lib/utils'

const courseIcons = {
  foundations: 'eco',
  'carbon-accounting': 'co2',
  reporting: 'description',
  markets: 'public',
  'esg-engineering': 'code',
} as const

export function courseIcon(courseId: string) {
  return courseIcons[courseId as keyof typeof courseIcons] ?? 'info'
}

export function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <span className={cn('material-symbols-rounded text-[20px] leading-none', className)} aria-hidden="true">
      {name}
    </span>
  )
}

export function IconTile({ name, className }: { name: string; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground',
        className,
      )}
    >
      <Icon name={name} />
    </span>
  )
}
