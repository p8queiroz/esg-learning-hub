import { describe, expect, it } from 'vitest'

import { buildCalculation, calculateEmissions } from '@/lib/emissions'

describe('emissions calculation', () => {
  it('multiplies activity by the factor', () => {
    expect(calculateEmissions(1000, 0.4)).toBe(400)
  })

  it('writes the unit-aware formula', () => {
    const result = buildCalculation({
      activity: 1000,
      factor: 0.4,
      activityUnit: 'kWh',
      factorUnit: 'kg CO₂e/kWh',
      resultUnit: 'kg CO₂e',
    })

    expect(result.ok).toBe(true)
    if (result.ok) {
      expect(result.emissions).toBe(400)
      expect(result.formula).toContain('kWh')
      expect(result.formula).toContain('kg CO₂e')
    }
  })

  it('rejects a negative activity', () => {
    const result = buildCalculation({
      activity: -1,
      factor: 0.4,
      activityUnit: 'kWh',
      factorUnit: 'kg CO₂e/kWh',
      resultUnit: 'kg CO₂e',
    })

    expect(result.ok).toBe(false)
  })
})
