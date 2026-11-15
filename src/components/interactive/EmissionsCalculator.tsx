import { useMemo, useState } from 'react'

import { Icon, IconTile } from '@/components/ui/icon'
import { useLocale } from '@/hooks/useLocale'
import { buildCalculation, formatQuantity } from '@/lib/emissions'

function parseQuantity(value: string) {
  const trimmed = value.trim()
  if (!trimmed) return Number.NaN
  return Number(trimmed)
}

const presetDefaults = [
  {
    id: 'electricity',
    activityUnit: 'kWh',
    factorUnit: 'kg CO₂e/kWh',
    resultUnit: 'kg CO₂e',
    defaultActivity: 1000,
    defaultFactor: 0.4,
  },
  {
    id: 'distance',
    activityUnit: 'km',
    factorUnit: 'kg CO₂e/km',
    resultUnit: 'kg CO₂e',
    defaultActivity: 120,
    defaultFactor: 0.2,
  },
  {
    id: 'fuel',
    activityUnit: 'L',
    factorUnit: 'kg CO₂e/L',
    resultUnit: 'kg CO₂e',
    defaultActivity: 50,
    defaultFactor: 2.5,
  },
] as const

export function EmissionsCalculator() {
  const { locale, pack } = useLocale()
  const copy = pack.ui.calculator
  const [presetId, setPresetId] = useState<(typeof presetDefaults)[number]['id']>('electricity')
  const defaults = presetDefaults.find((item) => item.id === presetId) ?? presetDefaults[0]
  const labels = copy.presets[defaults.id]
  const [activity, setActivity] = useState(String(defaults.defaultActivity))
  const [factor, setFactor] = useState(String(defaults.defaultFactor))

  function selectPreset(nextId: (typeof presetDefaults)[number]['id']) {
    const next = presetDefaults.find((item) => item.id === nextId) ?? presetDefaults[0]
    setPresetId(next.id)
    setActivity(String(next.defaultActivity))
    setFactor(String(next.defaultFactor))
  }

  const result = useMemo(
    () =>
      buildCalculation(
        {
          activity: parseQuantity(activity),
          factor: parseQuantity(factor),
          activityUnit: defaults.activityUnit,
          factorUnit: defaults.factorUnit,
          resultUnit: defaults.resultUnit,
        },
        locale,
      ),
    [activity, defaults, factor, locale],
  )

  return (
    <section aria-labelledby="calculator-title" className="space-y-4 rounded-2xl border border-border bg-card p-5">
      <div>
        <div className="flex items-center gap-2">
          <IconTile name="calculate" />
          <p className="text-xs font-semibold tracking-wide text-accent uppercase">{copy.eyebrow}</p>
        </div>
        <h3 id="calculator-title" className="mt-3 text-2xl font-semibold tracking-tight">
          {copy.title}
        </h3>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">{copy.lede}</p>
      </div>
      <div className="flex gap-3 rounded-xl border border-caution/40 bg-caution-bg px-4 py-3 text-sm leading-6" role="note">
        <Icon name="error" className="mt-0.5 text-caution" />
        <p>{copy.warning}</p>
      </div>
      <div className="flex flex-wrap gap-2" role="group" aria-label={copy.activityType}>
        {presetDefaults.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={item.id === defaults.id}
            onClick={() => selectPreset(item.id)}
            className={`rounded-full border px-3 py-1.5 text-sm font-semibold ${
              item.id === defaults.id ? 'border-primary bg-primary text-primary-foreground' : 'border-border'
            }`}
          >
            {copy.presets[item.id].label}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1 text-sm font-semibold">
          {labels.activityLabel}
          <input
            className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 font-normal"
            inputMode="decimal"
            value={activity}
            onChange={(event) => setActivity(event.target.value)}
            aria-describedby="activity-unit"
          />
          <span id="activity-unit" className="block font-normal text-muted-foreground">
            {copy.unit(defaults.activityUnit)}
          </span>
        </label>
        <label className="space-y-1 text-sm font-semibold">
          {copy.factorLabel}
          <input
            className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 font-normal"
            inputMode="decimal"
            value={factor}
            onChange={(event) => setFactor(event.target.value)}
            aria-describedby="factor-unit"
          />
          <span id="factor-unit" className="block font-normal text-muted-foreground">
            {copy.unit(defaults.factorUnit)}. {labels.hint}
          </span>
        </label>
      </div>
      <div aria-live="polite" className="rounded-xl bg-muted px-4 py-4">
        {result.ok ? (
          <>
            <p className="text-sm text-muted-foreground">{copy.result}</p>
            <p className="text-3xl font-semibold tracking-tight">
              {formatQuantity(locale, result.emissions)} {defaults.resultUnit}
            </p>
            <p className="mt-2 text-sm leading-6">{result.formula}</p>
          </>
        ) : (
          <p className="text-sm font-semibold">{pack.ui.errors[result.error]}</p>
        )}
      </div>
    </section>
  )
}
