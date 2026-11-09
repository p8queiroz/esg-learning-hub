import { useMemo, useState } from 'react'

import { buildCalculation, formatQuantity } from '@/lib/emissions'

function parseQuantity(value: string) {
  const trimmed = value.trim()
  if (!trimmed) return Number.NaN
  return Number(trimmed)
}

const presets = [
  {
    id: 'electricity',
    label: 'Electricity',
    activityLabel: 'Electricity used',
    activityUnit: 'kWh',
    factorUnit: 'kg CO₂e/kWh',
    resultUnit: 'kg CO₂e',
    defaultActivity: 1000,
    defaultFactor: 0.4,
    hint: 'Illustrative factor. Not an eGRID or other published grid factor.',
  },
  {
    id: 'distance',
    label: 'Road travel',
    activityLabel: 'Distance traveled',
    activityUnit: 'km',
    factorUnit: 'kg CO₂e/km',
    resultUnit: 'kg CO₂e',
    defaultActivity: 120,
    defaultFactor: 0.2,
    hint: 'Illustrative factor. Not an EPA or DEFRA transport factor.',
  },
  {
    id: 'fuel',
    label: 'Fuel volume',
    activityLabel: 'Fuel combusted',
    activityUnit: 'L',
    factorUnit: 'kg CO₂e/L',
    resultUnit: 'kg CO₂e',
    defaultActivity: 50,
    defaultFactor: 2.5,
    hint: 'Illustrative factor. Not a published combustion factor.',
  },
] as const

export function EmissionsCalculator() {
  const [presetId, setPresetId] = useState<(typeof presets)[number]['id']>('electricity')
  const preset = presets.find((item) => item.id === presetId) ?? presets[0]
  const [activity, setActivity] = useState(String(preset.defaultActivity))
  const [factor, setFactor] = useState(String(preset.defaultFactor))

  function selectPreset(nextId: (typeof presets)[number]['id']) {
    const next = presets.find((item) => item.id === nextId) ?? presets[0]
    setPresetId(next.id)
    setActivity(String(next.defaultActivity))
    setFactor(String(next.defaultFactor))
  }

  const result = useMemo(
    () =>
      buildCalculation({
        activity: parseQuantity(activity),
        factor: parseQuantity(factor),
        activityUnit: preset.activityUnit,
        factorUnit: preset.factorUnit,
        resultUnit: preset.resultUnit,
      }),
    [activity, factor, preset],
  )

  return (
    <section aria-labelledby="calculator-title" className="space-y-4 rounded-2xl border border-border bg-card p-5">
      <div>
        <p className="text-xs font-semibold tracking-wide text-accent uppercase">Interactive</p>
        <h3 id="calculator-title" className="font-serif text-2xl">
          Emissions calculator
        </h3>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          Activity data × emission factor = emissions. Change the quantity or the factor and watch the units cancel.
        </p>
      </div>
      <div className="rounded-xl border border-caution/40 bg-caution-bg px-4 py-3 text-sm leading-6" role="note">
        These factors are fictional teaching values. They are not official reference factors and must not be used in an inventory or a disclosure.
      </div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Activity type">
        {presets.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={item.id === preset.id}
            onClick={() => selectPreset(item.id)}
            className={`rounded-full border px-3 py-1.5 text-sm font-semibold ${
              item.id === preset.id ? 'border-primary bg-primary text-primary-foreground' : 'border-border'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1 text-sm font-semibold">
          {preset.activityLabel}
          <input
            className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 font-normal"
            inputMode="decimal"
            value={activity}
            onChange={(event) => setActivity(event.target.value)}
            aria-describedby="activity-unit"
          />
          <span id="activity-unit" className="block font-normal text-muted-foreground">
            Unit: {preset.activityUnit}
          </span>
        </label>
        <label className="space-y-1 text-sm font-semibold">
          Emission factor
          <input
            className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 font-normal"
            inputMode="decimal"
            value={factor}
            onChange={(event) => setFactor(event.target.value)}
            aria-describedby="factor-unit"
          />
          <span id="factor-unit" className="block font-normal text-muted-foreground">
            Unit: {preset.factorUnit}. {preset.hint}
          </span>
        </label>
      </div>
      <div aria-live="polite" className="rounded-xl bg-muted px-4 py-4">
        {result.ok ? (
          <>
            <p className="text-sm text-muted-foreground">Result</p>
            <p className="font-serif text-3xl">
              {formatQuantity(result.emissions)} {preset.resultUnit}
            </p>
            <p className="mt-2 text-sm leading-6">{result.formula}</p>
          </>
        ) : (
          <p className="text-sm font-semibold">{result.error}</p>
        )}
      </div>
    </section>
  )
}
