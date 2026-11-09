import type { Topic } from '@/types/content'

export const topics: Topic[] = [
  {
    id: 'foundations',
    title: 'Foundations',
    description: 'What the words sustainability and ESG refer to, and what they do not decide for you.',
    lessonIds: ['what-is-sustainability', 'what-is-esg'],
    glossaryIds: ['esg', 'materiality'],
  },
  {
    id: 'gases',
    title: 'Greenhouse gases',
    description: 'The gases in a corporate inventory, and the conversion from a mass of gas to CO₂e.',
    lessonIds: ['greenhouse-gases'],
    glossaryIds: ['ghg', 'gwp', 'co2e'],
  },
  {
    id: 'accounting',
    title: 'Carbon accounting',
    description: 'Inventories, scopes, activity data, emission factors, and the audit trail around a result.',
    lessonIds: ['intro-to-carbon-accounting', 'ghg-inventory', 'scopes', 'activity-and-factors', 'data-quality'],
    glossaryIds: ['ghg-protocol', 'ghg-inventory', 'scope-1', 'scope-2', 'scope-3', 'activity-data', 'emission-factor'],
  },
  {
    id: 'reporting',
    title: 'Reporting standards',
    description: 'Disclosure regimes. The dedicated course is still being written. The glossary entries are ready.',
    lessonIds: ['what-is-esg'],
    glossaryIds: ['gri', 'issb', 'csrd', 'esrs', 'materiality', 'double-materiality'],
  },
  {
    id: 'markets',
    title: 'Carbon markets',
    description: 'Credits, offsets, and the quality tests people argue about. Lessons are planned. Definitions are sourced.',
    lessonIds: [],
    glossaryIds: ['carbon-credit', 'carbon-offset', 'additionality', 'permanence', 'leakage', 'carbon-neutrality', 'net-zero'],
  },
  {
    id: 'engineering',
    title: 'Sustainability software',
    description: 'How an inventory becomes a system: boundaries, versioned factors, pure calculations, and lineage.',
    lessonIds: ['platform-architecture', 'modeling-activity-and-factors'],
    glossaryIds: ['activity-data', 'emission-factor', 'organizational-boundary'],
  },
]
