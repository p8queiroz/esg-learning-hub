import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

import { LOCALE_STORAGE_KEY } from '@/lib/storage'
import { locales } from '@/locales'
import type { LocaleId, LocalePack } from '@/locales/types'

export function getInitialLocale(): LocaleId {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
    if (stored === 'en' || stored === 'pt-BR') return stored
  } catch {
    return fallbackLocale()
  }

  return fallbackLocale()
}

export function fallbackLocale(): LocaleId {
  const language = navigator.language?.toLowerCase() ?? ''
  return language.startsWith('pt') ? 'pt-BR' : 'en'
}

type LocaleContextValue = {
  locale: LocaleId
  setLocale: (locale: LocaleId) => void
  pack: LocalePack
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleId>(getInitialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  function setLocale(next: LocaleId) {
    setLocaleState(next)
    document.documentElement.lang = next
    localStorage.setItem(LOCALE_STORAGE_KEY, next)
  }

  return <LocaleContext.Provider value={{ locale, setLocale, pack: locales[locale] }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const value = useContext(LocaleContext)
  if (!value) throw new Error('useLocale must be used inside LocaleProvider')
  return value
}
