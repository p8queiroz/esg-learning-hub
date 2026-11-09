import * as Tooltip from '@radix-ui/react-tooltip'
import { Link } from 'react-router'

import { glossaryMap } from '@/content'

export function GlossaryLink({ id, children }: { id: string; children: string }) {
  const entry = glossaryMap[id]
  if (!entry) return <span>{children}</span>

  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <Link
          to={`/glossary/${entry.id}`}
          className="font-semibold text-accent underline decoration-dotted underline-offset-4 hover:decoration-solid"
        >
          {children}
        </Link>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          sideOffset={8}
          className="z-50 max-w-sm rounded-xl border border-border bg-card px-3 py-2 text-sm leading-6 text-card-foreground shadow-md"
        >
          {entry.definition}
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  )
}
