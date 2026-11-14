import { en } from '@/locales/en'
import { ptBR } from '@/locales/pt-BR'
import type { LocaleId, LocalePack } from '@/locales/types'

export const locales: Record<LocaleId, LocalePack> = {
  en,
  'pt-BR': ptBR,
}

export const localeIds = ['en', 'pt-BR'] as const
