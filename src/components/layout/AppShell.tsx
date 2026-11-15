import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { Outlet } from 'react-router'

import { LocaleSwitch } from '@/components/layout/LocaleSwitch'
import { SearchDialog } from '@/components/layout/SearchDialog'
import { Sidebar } from '@/components/layout/Sidebar'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { Icon } from '@/components/ui/icon'
import { useLocale } from '@/hooks/useLocale'

export function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pack } = useLocale()

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[17rem_minmax(0,1fr)]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-card focus:px-4 focus:py-2"
      >
        {pack.ui.chrome.skip}
      </a>
      <aside className="sticky top-0 hidden h-screen bg-primary lg:block">
        <Sidebar />
      </aside>
      <div className="min-w-0">
        <header className="flex items-center justify-between gap-3 border-b border-border bg-background px-4 py-3 lg:px-8">
          <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
            <Dialog.Trigger className="inline-flex size-10 items-center justify-center rounded-full border border-border text-primary lg:hidden" aria-label={pack.ui.chrome.menu}>
              <Icon name="menu" />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-foreground/30" />
              <Dialog.Content className="fixed top-0 left-0 flex h-full w-[min(20rem,88vw)] flex-col overflow-auto bg-primary p-2" aria-describedby={undefined}>
                <Dialog.Title className="sr-only">{pack.ui.chrome.menu}</Dialog.Title>
                <Dialog.Close className="ml-auto inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-white">
                  <Icon name="close" className="text-[18px]" />
                  {pack.ui.chrome.close}
                </Dialog.Close>
                <Sidebar onNavigate={() => setMenuOpen(false)} />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
          <p className="min-w-0 truncate text-base font-semibold whitespace-nowrap lg:hidden">ESG Learning Hub</p>
          <div className="ml-auto flex items-center gap-2">
            <div className="lg:hidden">
              <LocaleSwitch />
            </div>
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
