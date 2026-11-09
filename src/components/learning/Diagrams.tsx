import type { ReactNode } from 'react'

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
  const pillars = [
    { title: 'Environmental', items: ['Climate and energy', 'Water and pollution', 'Land and biodiversity'] },
    { title: 'Social', items: ['Labor practices', 'Community impact', 'Product safety'] },
    { title: 'Governance', items: ['Board oversight', 'Ethics and controls', 'Transparency'] },
  ]

  return (
    <Figure caption="Illustrative groupings only. GRI, the ESRS, and IFRS S2 publish their own topic lists, and those lists are not identical.">
      <div className="grid gap-3 sm:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="rounded-xl bg-secondary p-4">
            <h3 className="font-serif text-lg">{pillar.title}</h3>
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
  return (
    <Figure caption="Scope 1 sits inside the organizational boundary. Scope 2 is purchased energy. Scope 3 is the rest of the value chain, classified into 15 categories by the Scope 3 Standard.">
      <div className="grid gap-3 lg:grid-cols-[1fr_1.1fr_1fr] lg:items-stretch">
        <div className="rounded-xl border border-primary/30 bg-secondary p-4">
          <p className="text-xs font-semibold tracking-wide text-primary uppercase">Inside the boundary</p>
          <h3 className="mt-2 font-serif text-xl">Scope 1</h3>
          <p className="mt-2 text-sm leading-6">Direct emissions from owned or controlled sources. The boiler, the fleet, the process vent.</p>
        </div>
        <div className="rounded-xl border border-dashed border-accent bg-card p-4">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase">Purchased energy</p>
          <h3 className="mt-2 font-serif text-xl">Scope 2</h3>
          <p className="mt-2 text-sm leading-6">Generation of electricity, steam, heat, or cooling the company buys and consumes. Report location-based and market-based.</p>
        </div>
        <div className="rounded-xl bg-muted p-4">
          <p className="text-xs font-semibold tracking-wide uppercase">Value chain</p>
          <h3 className="mt-2 font-serif text-xl">Scope 3</h3>
          <p className="mt-2 text-sm leading-6">Other indirect emissions. Flights, purchased goods, use of sold products, investments. Fifteen categories, not one bucket.</p>
        </div>
      </div>
    </Figure>
  )
}

function CalculationDiagram() {
  const steps = [
    { title: 'Activity', body: '1,000 kWh' },
    { title: 'Factor', body: '0.40 kg CO₂e/kWh' },
    { title: 'Result', body: '400 kg CO₂e' },
  ]

  return (
    <Figure caption="Illustrative arithmetic. 0.40 kg CO₂e/kWh is not a published grid factor. A real line also stores the factor’s source, year, and Scope 2 method.">
      <div className="grid gap-3 sm:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.title} className="rounded-xl bg-muted p-4">
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              {index + 1}. {step.title}
            </p>
            <p className="mt-2 font-serif text-2xl">{step.body}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-sm font-semibold">1,000 kWh × 0.40 kg CO₂e/kWh = 400 kg CO₂e</p>
    </Figure>
  )
}

function PlatformDiagram() {
  const modules = [
    ['Ingestion', 'Original quantities and units'],
    ['Boundary', 'Consolidation approach and scopes'],
    ['Factor catalog', 'Versioned, cited factors'],
    ['Calculation', 'Pure function of those inputs'],
    ['Lineage', 'Result, expression, approval'],
    ['Disclosure', 'A view, not a second calculator'],
  ]

  return (
    <Figure caption="An engineering reading of the accounting requirements. Not a required architecture and not a vendor diagram.">
      <ol className="grid gap-3 sm:grid-cols-2">
        {modules.map(([title, body], index) => (
          <li key={title} className="rounded-xl border border-border p-4">
            <p className="text-xs font-semibold text-accent">0{index + 1}</p>
            <h3 className="mt-1 font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{body}</p>
          </li>
        ))}
      </ol>
    </Figure>
  )
}
