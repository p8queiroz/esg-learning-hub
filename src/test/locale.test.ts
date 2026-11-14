import { afterEach, describe, expect, it } from 'vitest'

import { formatQuantity } from '@/lib/emissions'
import { LOCALE_STORAGE_KEY } from '@/lib/storage'
import { fallbackLocale, getInitialLocale } from '@/hooks/useLocale'

const originalLanguage = navigator.language

afterEach(() => {
  Object.defineProperty(navigator, 'language', { configurable: true, value: originalLanguage })
  localStorage.clear()
})

describe('locale selection', () => {
  it('keeps a stored locale', () => {
    localStorage.setItem(LOCALE_STORAGE_KEY, 'pt-BR')
    expect(getInitialLocale()).toBe('pt-BR')
  })

  it('drops an invalid stored locale and uses the browser language', () => {
    localStorage.setItem(LOCALE_STORAGE_KEY, 'fr')
    Object.defineProperty(navigator, 'language', { configurable: true, value: 'pt-PT' })
    expect(getInitialLocale()).toBe('pt-BR')
  })

  it('uses English when the browser is not Portuguese', () => {
    Object.defineProperty(navigator, 'language', { configurable: true, value: 'en-US' })
    expect(fallbackLocale()).toBe('en')
  })
})

describe('formatQuantity', () => {
  it('keeps English grouping', () => {
    expect(formatQuantity('en', 1000)).toBe('1,000')
    expect(formatQuantity('en', 0.4)).toBe('0.4')
  })

  it('uses Brazilian grouping', () => {
    const formatted = formatQuantity('pt-BR', 1000.5)
    expect(formatted.replace(/\s/g, '')).toBe('1.000,5')
  })
})
