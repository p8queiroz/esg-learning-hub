export type CalculationInput = {
  activity: number
  factor: number
  activityUnit: string
  factorUnit: string
  resultUnit: string
}

export type CalculationResult =
  | { ok: true; emissions: number; formula: string }
  | { ok: false; error: string }

const numberFormat = new Intl.NumberFormat('en', {
  maximumFractionDigits: 4,
})

export function formatQuantity(value: number) {
  return numberFormat.format(value)
}

export function calculateEmissions(activity: number, factor: number) {
  return activity * factor
}

export function buildCalculation(input: CalculationInput): CalculationResult {
  if (!Number.isFinite(input.activity) || !Number.isFinite(input.factor)) {
    return { ok: false, error: 'Enter a numeric activity quantity and emission factor.' }
  }

  if (input.activity < 0 || input.factor < 0) {
    return {
      ok: false,
      error: 'Activity data and emission factors are not negative in this example.',
    }
  }

  const emissions = calculateEmissions(input.activity, input.factor)
  const formula = `${formatQuantity(input.activity)} ${input.activityUnit} × ${formatQuantity(input.factor)} ${input.factorUnit} = ${formatQuantity(emissions)} ${input.resultUnit}`

  return { ok: true, emissions, formula }
}
