import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { App } from '@/App'

describe('dashboard', () => {
  it('introduces the curriculum without a fake achievement', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /sustainability software/i })).toBeInTheDocument()
    expect(screen.getByText(/have not completed a lesson yet/i)).toBeInTheDocument()
  })

  it('keeps a completed lesson complete after switching language', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('link', { name: /start here/i }))
    await user.click(screen.getByRole('button', { name: /mark lesson complete/i }))
    expect(screen.getByText(/completed on this browser/i)).toBeInTheDocument()

    await user.click(screen.getAllByRole('button', { name: 'Português' })[0])

    expect(screen.getByRole('heading', { level: 1, name: 'O que é sustentabilidade?' })).toBeInTheDocument()
    expect(screen.getByText(/concluída neste navegador/i)).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('pt-BR')
  })
})
