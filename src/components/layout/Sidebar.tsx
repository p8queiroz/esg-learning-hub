import { NavLink } from 'react-router'

import { LocaleSwitch } from '@/components/layout/LocaleSwitch'
import { navItems } from '@/components/layout/nav'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { Icon } from '@/components/ui/icon'
import { useLocale } from '@/hooks/useLocale'
import { cn } from '@/lib/utils'

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const { pack } = useLocale()

  return (
    <div className="flex h-full flex-col gap-6 px-4 py-5 text-primary-foreground">
      <NavLink to="/" className="flex items-center gap-3 rounded-xl px-2" onClick={onNavigate}>
        <span className="inline-flex size-9 items-center justify-center rounded-lg bg-white/15">
          <Icon name="eco" className="text-[22px]" />
        </span>
        <span>
          <span className="block text-lg leading-5 font-semibold">ESG Learning Hub</span>
          <span className="text-xs text-white/70">{pack.ui.tagline}</span>
        </span>
      </NavLink>
      <nav aria-label={pack.ui.chrome.primaryNav} className="flex flex-1 flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={onNavigate}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold',
                isActive ? 'bg-white/15 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white',
              )
            }
          >
            <Icon name={item.icon} className="text-[20px]" />
            {pack.ui.nav[item.key]}
          </NavLink>
        ))}
      </nav>
      <div className="space-y-3 px-2">
        <LocaleSwitch tone="rail" />
        <ThemeToggle tone="rail" />
        <p className="text-xs leading-5 text-white/70">{pack.ui.sourceNote}</p>
      </div>
    </div>
  )
}
