import * as Tabs from '@radix-ui/react-tabs'
import { CircleAlert, Scale, StickyNote } from 'lucide-react'

import { Diagram } from '@/components/learning/Diagrams'
import { GlossaryLink } from '@/components/learning/GlossaryLink'
import { LessonQuiz } from '@/components/interactive/Quiz'
import { EmissionsCalculator } from '@/components/interactive/EmissionsCalculator'
import type { LessonBlock } from '@/types/content'

export function LessonBlocks({ blocks }: { blocks: LessonBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => (
        <BlockView key={`${block.type}-${index}`} block={block} />
      ))}
    </div>
  )
}

function BlockView({ block }: { block: LessonBlock }) {
  switch (block.type) {
    case 'paragraph':
      return <p className="text-[17px] leading-8">{block.text}</p>
    case 'heading':
      return <h2 className="font-serif text-3xl">{block.text}</h2>
    case 'concepts':
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          {block.items.map((item) => (
            <article key={item.title} className="rounded-2xl border border-border bg-card p-4">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      )
    case 'definition':
      return (
        <aside className="rounded-2xl border border-accent/30 bg-card p-5">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase">Definition</p>
          <h3 className="mt-1 font-serif text-2xl">
            {block.glossaryId ? <GlossaryLink id={block.glossaryId}>{block.term}</GlossaryLink> : block.term}
          </h3>
          <p className="mt-2 leading-7">{block.definition}</p>
        </aside>
      )
    case 'takeaway':
      return (
        <section className="rounded-2xl bg-primary px-5 py-5 text-primary-foreground">
          <h2 className="font-serif text-2xl">{block.title ?? 'Key takeaway'}</h2>
          <ul className="mt-3 space-y-2">
            {block.points.map((point) => (
              <li key={point} className="leading-7">
                {point}
              </li>
            ))}
          </ul>
        </section>
      )
    case 'example':
      return (
        <section className="space-y-3 rounded-2xl border border-border bg-card p-5">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase">Example</p>
          <h3 className="font-serif text-2xl">{block.title}</h3>
          <p className="leading-7">{block.context}</p>
          <p className="leading-7">{block.walkthrough}</p>
          {block.technicalNote ? (
            <p className="rounded-xl bg-muted px-4 py-3 text-sm leading-6">
              <span className="font-semibold">For engineers. </span>
              {block.technicalNote}
            </p>
          ) : null}
        </section>
      )
    case 'comparison':
      return (
        <Tabs.Root defaultValue={block.tabs[0]?.id} className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="border-b border-border px-4 py-4">
            <h3 className="font-serif text-2xl">{block.title}</h3>
            {block.description ? <p className="mt-1 text-sm text-muted-foreground">{block.description}</p> : null}
            <Tabs.List aria-label={block.title} className="mt-4 flex flex-wrap gap-2">
              {block.tabs.map((tab) => (
                <Tabs.Trigger
                  key={tab.id}
                  value={tab.id}
                  className="rounded-full border border-border px-3 py-1.5 text-sm font-semibold data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {tab.label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </div>
          {block.tabs.map((tab) => (
            <Tabs.Content key={tab.id} value={tab.id} className="px-4 py-4 text-[16px] leading-7">
              {tab.body}
            </Tabs.Content>
          ))}
        </Tabs.Root>
      )
    case 'steps':
      return (
        <section className="space-y-3">
          <h3 className="font-serif text-2xl">{block.title}</h3>
          <ol className="space-y-3">
            {block.steps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-3 rounded-2xl border border-border bg-card p-4">
                <span className="font-serif text-2xl text-accent">{index + 1}</span>
                <div>
                  <h4 className="font-semibold">{step.title}</h4>
                  <p className="mt-1 text-sm leading-6">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )
    case 'callout':
      return <Callout tone={block.tone} title={block.title} body={block.body} />
    case 'grid':
      return (
        <section className="space-y-3">
          <h3 className="font-serif text-2xl">{block.title}</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {block.items.map((item) => (
              <article key={item.title} className="rounded-2xl bg-muted p-4">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="mt-1 text-sm leading-6">{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      )
    case 'diagram':
      return <Diagram diagram={block.diagram} />
    case 'code':
      return (
        <figure className="space-y-2">
          <figcaption className="font-semibold">{block.title}</figcaption>
          <pre className="overflow-x-auto rounded-2xl bg-[#14211c] p-4 text-sm leading-6 text-[#e7f3ec]">
            <code>{block.code}</code>
          </pre>
          <p className="text-sm leading-6 text-muted-foreground">{block.note}</p>
        </figure>
      )
    case 'calculator':
      return <EmissionsCalculator />
    case 'quiz':
      return <LessonQuiz quizId={block.quizId} mode={block.mode} />
    default:
      return null
  }
}

function Callout({ tone, title, body }: { tone: 'note' | 'distinction' | 'caution'; title: string; body: string }) {
  const Icon = tone === 'caution' ? CircleAlert : tone === 'distinction' ? Scale : StickyNote
  const toneClass =
    tone === 'caution'
      ? 'border-caution/40 bg-caution-bg'
      : tone === 'distinction'
        ? 'border-accent/40 bg-card'
        : 'border-border bg-muted'

  return (
    <aside className={`flex gap-3 rounded-2xl border p-4 ${toneClass}`}>
      <Icon className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm leading-6">{body}</p>
      </div>
    </aside>
  )
}
