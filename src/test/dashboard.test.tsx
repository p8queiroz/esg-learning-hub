import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { App } from '@/App'

describe('dashboard', () => {
  it('introduces the curriculum without a fake achievement', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /sustainability software/i })).toBeInTheDocument()
    expect(screen.getByText(/have not completed a lesson yet/i)).toBeInTheDocument()
  })
})
