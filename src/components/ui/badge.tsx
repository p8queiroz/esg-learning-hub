import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-card px-2.5 py-0.5 text-xs font-semibold tracking-wide text-muted-foreground',
        className,
      )}
      {...props}
    />
  )
}
