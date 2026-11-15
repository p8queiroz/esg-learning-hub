import { useLocale } from '@/hooks/useLocale'
import { cn } from '@/lib/utils'
import type { LocaleId } from '@/locales/types'

const labels: Record<LocaleId, string> = {
  en: 'English',
  'pt-BR': 'Português',
}

export function LocaleSwitch({ tone = 'surface' }: { tone?: 'rail' | 'surface' }) {
  const { locale, setLocale, pack } = useLocale()

  return (
    <div role="group" aria-label={pack.ui.chrome.language} className="flex gap-1">
      {(Object.keys(labels) as LocaleId[]).map((id) => (
        <button
          key={id}
          type="button"
          aria-pressed={locale === id}
          onClick={() => setLocale(id)}
          className={cn(
            'h-10 rounded-full border px-3 text-sm font-semibold',
            tone === 'rail' ? 'border-white/30 text-white' : 'border-border bg-card text-foreground',
            locale === id && (tone === 'rail' ? 'bg-white/15' : 'bg-secondary'),
          )}
        >
          {labels[id]}
        </button>
      ))}
    </div>
  )
}
