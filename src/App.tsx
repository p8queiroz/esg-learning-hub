import * as Tooltip from '@radix-ui/react-tooltip'
import { BrowserRouter, Route, Routes } from 'react-router'

import { AppShell } from '@/components/layout/AppShell'
import { ProgressProvider } from '@/hooks/useProgress'
import { ThemeProvider } from '@/hooks/useTheme'
import { routerBasename } from '@/lib/utils'
import { AboutPage } from '@/pages/AboutPage'
import { CoursePage } from '@/pages/CoursePage'
import { DashboardPage } from '@/pages/DashboardPage'
import { ExplorePage } from '@/pages/ExplorePage'
import { GlossaryPage } from '@/pages/GlossaryPage'
import { LessonPage } from '@/pages/LessonPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { PathsPage } from '@/pages/PathsPage'

export function App() {
  return (
    <Tooltip.Provider delayDuration={300}>
    <ThemeProvider>
      <ProgressProvider>
        <BrowserRouter basename={routerBasename}>
          <Routes>
            <Route element={<AppShell />}>
              <Route index element={<DashboardPage />} />
              <Route path="paths" element={<PathsPage />} />
              <Route path="paths/:courseId" element={<CoursePage />} />
              <Route path="learn/:courseId/:lessonId" element={<LessonPage />} />
              <Route path="explore" element={<ExplorePage />} />
              <Route path="glossary" element={<GlossaryPage />} />
              <Route path="glossary/:entryId" element={<GlossaryPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProgressProvider>
    </ThemeProvider>
    </Tooltip.Provider>
  )
}
