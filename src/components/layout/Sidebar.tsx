import { NavLink } from 'react-router'

import { navItems } from '@/components/layout/nav'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { cn } from '@/lib/utils'

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col gap-6 px-4 py-5">
      <NavLink to="/" className="flex items-center gap-3 rounded-xl px-2" onClick={onNavigate}>
        <BrandMark />
        <span>
          <span className="block font-serif text-lg leading-5">ESG Learning Hub</span>
          <span className="text-xs text-muted-foreground">Open curriculum</span>
        </span>
      </NavLink>
      <nav aria-label="Primary" className="flex flex-1 flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={onNavigate}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold',
                isActive ? 'bg-secondary text-secondary-foreground' : 'text-foreground hover:bg-muted',
              )
            }
          >
            <item.icon className="size-4" aria-hidden="true" />
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="space-y-3 px-2">
        <ThemeToggle />
        <p className="text-xs leading-5 text-muted-foreground">Sources are linked. Example factors are illustrative, never official values.</p>
      </div>
    </div>
  )
}

export function BrandMark() {
  return (
    <svg viewBox="0 0 32 32" className="size-9 text-primary-foreground" aria-hidden="true">
      <rect width="32" height="32" rx="8" className="fill-primary" />
      <path d="M8 22h10M8 16h16M8 10h7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
