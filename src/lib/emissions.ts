import type { LocaleId } from '@/locales/types'

export type CalculationInput = {
  activity: number
  factor: number
  activityUnit: string
  factorUnit: string
  resultUnit: string
}

export type CalculationError = 'non-numeric' | 'negative'

export type CalculationResult =
  | { ok: true; emissions: number; formula: string }
  | { ok: false; error: CalculationError }

export function formatQuantity(locale: LocaleId, value: number) {
  return new Intl.NumberFormat(locale, { maximumFractionDigits: 4 }).format(value)
}

export function calculateEmissions(activity: number, factor: number) {
  return activity * factor
}

export function buildCalculation(input: CalculationInput, locale: LocaleId): CalculationResult {
  if (!Number.isFinite(input.activity) || !Number.isFinite(input.factor)) {
    return { ok: false, error: 'non-numeric' }
  }

  if (input.activity < 0 || input.factor < 0) {
    return { ok: false, error: 'negative' }
  }

  const emissions = calculateEmissions(input.activity, input.factor)
  const formula = `${formatQuantity(locale, input.activity)} ${input.activityUnit} × ${formatQuantity(locale, input.factor)} ${input.factorUnit} = ${formatQuantity(locale, emissions)} ${input.resultUnit}`

  return { ok: true, emissions, formula }
}
