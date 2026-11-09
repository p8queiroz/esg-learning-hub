import * as Dialog from '@radix-ui/react-dialog'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import { searchContent } from '@/lib/search'

export function SearchDialog() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const results = searchContent(query)

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setOpen(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  function go(href: string) {
    setOpen(false)
    setQuery('')
    navigate(href)
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card px-3 text-sm text-muted-foreground"
        aria-label="Search"
      >
        <Search className="size-4" aria-hidden="true" />
        <span className="hidden sm:inline">Search</span>
        <span className="hidden text-xs sm:inline">Ctrl K</span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-foreground/30" />
        <Dialog.Content className="fixed top-[12vh] left-1/2 w-[min(36rem,calc(100%-2rem))] -translate-x-1/2 rounded-2xl border border-border bg-card p-4 shadow-lg">
          <div className="flex items-start justify-between gap-3">
            <Dialog.Title className="font-serif text-xl">Search the curriculum</Dialog.Title>
            <Dialog.Close className="rounded-full px-2 py-1 text-sm font-semibold">Close</Dialog.Close>
          </div>
          <Dialog.Description className="mt-1 text-sm text-muted-foreground">
            Lessons and glossary terms. At least two characters.
          </Dialog.Description>
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try scope 3, CO₂e, or materiality"
            className="mt-4 h-11 w-full rounded-xl border border-border bg-background px-3"
            aria-label="Search query"
          />
          <ul className="mt-3 max-h-80 space-y-1 overflow-auto">
            {results.map((result) => (
              <li key={`${result.kind}-${result.id}`}>
                <button
                  type="button"
                  onClick={() => go(result.href)}
                  className="flex w-full items-start justify-between gap-3 rounded-xl px-3 py-2 text-left hover:bg-muted"
                >
                  <span className="font-semibold">{result.title}</span>
                  <span className="text-xs text-muted-foreground">{result.subtitle}</span>
                </button>
              </li>
            ))}
            {query.trim().length >= 2 && results.length === 0 ? (
              <li className="px-3 py-4 text-sm text-muted-foreground">No matching lessons or terms.</li>
            ) : null}
          </ul>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
