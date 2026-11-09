import * as Dialog from '@radix-ui/react-dialog'
import { Menu } from 'lucide-react'
import { Outlet } from 'react-router'
import { useState } from 'react'

import { SearchDialog } from '@/components/layout/SearchDialog'
import { Sidebar } from '@/components/layout/Sidebar'
import { ThemeToggle } from '@/components/layout/ThemeToggle'

export function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[17rem_minmax(0,1fr)]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-card focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <aside className="sticky top-0 hidden h-screen border-r border-border bg-card/80 lg:block">
        <Sidebar />
      </aside>
      <div className="min-w-0">
        <header className="flex items-center justify-between gap-3 border-b border-border px-4 py-3 lg:px-8">
          <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
            <Dialog.Trigger className="inline-flex size-10 items-center justify-center rounded-full border border-border lg:hidden" aria-label="Open menu">
              <Menu className="size-4" />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-foreground/30" />
              <Dialog.Content className="fixed top-0 left-0 h-full w-[min(20rem,88vw)] overflow-auto bg-card p-2" aria-describedby={undefined}>
                <Dialog.Title className="sr-only">Menu</Dialog.Title>
                <Dialog.Close className="absolute top-4 right-4 rounded-full px-2 py-1 text-sm font-semibold">Close</Dialog.Close>
                <Sidebar onNavigate={() => setMenuOpen(false)} />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
          <p className="min-w-0 truncate font-serif text-base font-semibold whitespace-nowrap lg:hidden">
            ESG Learning Hub
          </p>
          <div className="ml-auto flex items-center gap-2">
            <SearchDialog />
            <div className="lg:hidden">
              <ThemeToggle />
            </div>
          </div>
        </header>
        <main id="main" className="px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
