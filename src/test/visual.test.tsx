/// <reference types="node" />
import { readFileSync } from 'node:fs'

import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router'
import { describe, expect, it } from 'vitest'

import { App } from '@/App'
import { LessonBlocks } from '@/components/learning/LessonBlocks'
import { LocaleProvider } from '@/hooks/useLocale'
import { ProgressProvider } from '@/hooks/useProgress'
import { CoursePage } from '@/pages/CoursePage'

function iconNames() {
  return [...document.querySelectorAll('.material-symbols-rounded')].map((node) => node.textContent)
}

describe('visual system', () => {
  it('uses a white page, the modern green, and no serif font', () => {
    const css = readFileSync('src/styles/globals.css', 'utf8')
    const html = readFileSync('index.html', 'utf8')
    const pkg = readFileSync('package.json', 'utf8')
    expect(css).toContain('#ffffff')
    expect(css).toContain('#0f8f6a')
    expect(css).toContain('#3dce9e')
    expect(css).not.toContain('#f3f0e8')
    expect(css).not.toContain('#1e4d40')
    expect(css).not.toContain('Source Serif')
    expect(html).not.toContain('Source+Serif')
    expect(html).toContain('Material+Symbols+Rounded')
    expect(pkg).not.toContain('lucide-react')
  })

  it('paints the sidebar green and shows material nav icons', () => {
    render(<App />)
    expect(document.querySelector('aside')).toHaveClass('bg-primary')
    expect(iconNames()).toEqual(expect.arrayContaining(['dashboard', 'conversion_path', 'explore', 'menu_book', 'info', 'eco']))
    expect(screen.getByRole('heading', { level: 1 })).not.toHaveClass('font-serif')
  })

  it('keeps paragraph text free of icons and caution off the green tile', () => {
    render(
      <LocaleProvider>
      <LessonBlocks
        blocks={[
          { type: 'paragraph', text: 'Plain teaching sentence.' },
          { type: 'callout', tone: 'caution', title: 'Watch the units', body: 'Do not mix kilograms and pounds.' },
          { type: 'takeaway', points: ['Keep the boundary.'] },
        ]}
      />
      </LocaleProvider>,
    )

    expect(screen.getByText('Plain teaching sentence.').querySelector('.material-symbols-rounded')).toBeNull()
    const caution = screen.getByText('error')
    expect(caution).toHaveClass('text-caution')
    expect(caution.className).not.toContain('bg-primary')
    expect(screen.getByText('check')).toHaveClass('text-primary-foreground')
  })

  it('marks a planned lesson with a lock', () => {
    render(
      <LocaleProvider>
      <ProgressProvider>
        <MemoryRouter initialEntries={['/paths/reporting']}>
          <Routes>
            <Route path="/paths/:courseId" element={<CoursePage />} />
          </Routes>
        </MemoryRouter>
      </ProgressProvider>
      </LocaleProvider>,
    )

    expect(iconNames()).toContain('lock')
    expect(iconNames()).toContain('description')
    expect(screen.getByRole('heading', { level: 1 })).not.toHaveClass('font-serif')
  })
})