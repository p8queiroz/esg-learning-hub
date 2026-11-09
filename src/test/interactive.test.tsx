import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { EmissionsCalculator } from '@/components/interactive/EmissionsCalculator'
import { LessonQuiz } from '@/components/interactive/Quiz'
import { ProgressProvider } from '@/hooks/useProgress'

describe('emissions calculator', () => {
  it('shows the illustrative electricity result and labels it as fiction', () => {
    render(<EmissionsCalculator />)
    expect(screen.getByText('1,000 kWh × 0.4 kg CO₂e/kWh = 400 kg CO₂e')).toBeInTheDocument()
    expect(screen.getByRole('note').textContent).toMatch(/fictional/i)
  })

  it('rejects an empty activity', async () => {
    const user = userEvent.setup()
    render(<EmissionsCalculator />)
    const input = screen.getByRole('textbox', { name: /electricity used/i })
    await user.clear(input)
    expect(screen.getByText(/enter a numeric activity quantity/i)).toBeInTheDocument()
  })
})

describe('scopes quiz', () => {
  it('records a correct answer for owned combustion', async () => {
    const user = userEvent.setup()
    render(
      <ProgressProvider>
        <LessonQuiz quizId="scopes-quiz" mode="quiz" />
      </ProgressProvider>,
    )

    await user.click(screen.getByRole('radio', { name: 'Scope 1' }))
    await user.click(screen.getAllByRole('radio', { name: 'Scope 2' })[1])
    await user.click(screen.getAllByRole('radio', { name: 'Scope 3, category 6, business travel' })[1])
    await user.click(
      screen.getByRole('radio', {
        name: /The Corporate Standard requires Scope 1 and Scope 2/i,
      }),
    )
    await user.click(screen.getByRole('button', { name: 'Check answers' }))

    expect(screen.getByText('4 of 4 correct.')).toBeInTheDocument()
  })
})
