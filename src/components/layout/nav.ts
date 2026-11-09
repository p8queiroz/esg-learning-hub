import { BookMarked, Compass, Info, LayoutDashboard, Route, type LucideIcon } from 'lucide-react'

export type NavItem = {
  to: string
  label: string
  icon: LucideIcon
  end?: boolean
}

export const navItems: NavItem[] = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/paths', label: 'Learning paths', icon: Route },
  { to: '/explore', label: 'Topic explorer', icon: Compass },
  { to: '/glossary', label: 'Glossary', icon: BookMarked },
  { to: '/about', label: 'About', icon: Info },
]
