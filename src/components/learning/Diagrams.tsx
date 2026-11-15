import type { ReactNode } from 'react'

import { useLocale } from '@/hooks/useLocale'
import type { DiagramId } from '@/types/content'

export function Diagram({ diagram }: { diagram: DiagramId }) {
  if (diagram === 'pillars') return <PillarsDiagram />
  if (diagram === 'scopes') return <ScopesDiagram />
  if (diagram === 'calculation') return <CalculationDiagram />
  return <PlatformDiagram />
}

function Figure({ caption, children }: { caption: string; children: ReactNode }) {
  return (
    <figure className="space-y-3 rounded-2xl border border-border bg-card p-4 sm:p-5">
      {children}
      <figcaption className="text-sm leading-6 text-muted-foreground">{caption}</figcaption>
    </figure>
  )
}

function PillarsDiagram() {
  const { pack } = useLocale()
  const copy = pack.ui.diagrams

  return (
    <Figure caption={copy.pillarsCaption}>
      <div className="grid gap-3 sm:grid-cols-3">
        {copy.pillars.map((pillar) => (
          <div key={pillar.title} className="rounded-xl bg-secondary p-4">
            <h3 className="font-semibold tracking-tight text-lg">{pillar.title}</h3>
            <ul className="mt-2 space-y-1 text-sm">
              {pillar.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Figure>
  )
}

function ScopesDiagram() {
  const { pack } = useLocale()
  const copy = pack.ui.diagrams

  return (
    <Figure caption={copy.scopesCaption}>
      <div className="grid gap-3 lg:grid-cols-[1fr_1.1fr_1fr] lg:items-stretch">
        <div className="rounded-xl border border-primary/30 bg-secondary p-4">
          <p className="text-xs font-semibold tracking-wide text-primary uppercase">{copy.scope1Eyebrow}</p>
          <h3 className="mt-2 font-semibold tracking-tight text-xl">{copy.scope1Title}</h3>
          <p className="mt-2 text-sm leading-6">{copy.scope1Body}</p>
        </div>
        <div className="rounded-xl border border-dashed border-accent bg-card p-4">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase">{copy.scope2Eyebrow}</p>
          <h3 className="mt-2 font-semibold tracking-tight text-xl">{copy.scope2Title}</h3>
          <p className="mt-2 text-sm leading-6">{copy.scope2Body}</p>
        </div>
        <div className="rounded-xl bg-muted p-4">
          <p className="text-xs font-semibold tracking-wide uppercase">{copy.scope3Eyebrow}</p>
          <h3 className="mt-2 font-semibold tracking-tight text-xl">{copy.scope3Title}</h3>
          <p className="mt-2 text-sm leading-6">{copy.scope3Body}</p>
        </div>
      </div>
    </Figure>
  )
}

function CalculationDiagram() {
  const { pack } = useLocale()
  const copy = pack.ui.diagrams

  return (
    <Figure caption={copy.calculationCaption}>
      <div className="grid gap-3 sm:grid-cols-3">
        {copy.calculationSteps.map((step, index) => (
          <div key={step.title} className="rounded-xl bg-muted p-4">
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              {index + 1}. {step.title}
            </p>
            <p className="mt-2 font-semibold tracking-tight text-2xl">{step.body}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-sm font-semibold">{copy.calculationFormula}</p>
    </Figure>
  )
}

function PlatformDiagram() {
  const { pack } = useLocale()
  const copy = pack.ui.diagrams

  return (
    <Figure caption={copy.platformCaption}>
      <ol className="grid gap-3 sm:grid-cols-2">
        {copy.platform.map((module, index) => (
          <li key={module.title} className="rounded-xl border border-border p-4">
            <p className="inline-flex size-9 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground">
              {index + 1}
            </p>
            <h3 className="mt-1 font-semibold">{module.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{module.body}</p>
          </li>
        ))}
      </ol>
    </Figure>
  )
}
