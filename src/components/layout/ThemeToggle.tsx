import { Icon } from '@/components/ui/icon'
import { useLocale } from '@/hooks/useLocale'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'

export function ThemeToggle({ tone = 'surface' }: { tone?: 'rail' | 'surface' }) {
  const { theme, toggleTheme } = useTheme()
  const { pack } = useLocale()
  const nextLabel = theme === 'dark' ? pack.ui.chrome.switchToLight : pack.ui.chrome.switchToDark
  const icon = theme === 'dark' ? 'light_mode' : 'dark_mode'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={nextLabel}
      className={cn(
        'inline-flex h-10 items-center gap-2 rounded-full border px-3 text-sm font-semibold',
        tone === 'rail' ? 'border-white/30 bg-transparent text-white' : 'border-border bg-card text-foreground',
      )}
    >
      <Icon name={icon} className="text-[18px]" />
      <span className="hidden sm:inline">{theme === 'dark' ? pack.ui.chrome.light : pack.ui.chrome.dark}</span>
    </button>
  )
}
