import type { Course } from '@/types/content'

export const courses: Course[] = [
  {
    id: 'foundations',
    level: 1,
    band: 'beginner',
    title: 'ESG and sustainability foundations',
    description:
      'The words people use, the authorities behind them, and the difference between a goal, an inventory, and a disclosure.',
    audience: 'Beginners, and engineers who need the vocabulary before the data model.',
    difficulty: 'beginner',
    status: 'available',
    objectives: [
      'Use sustainability, ESG, and carbon accounting as different terms.',
      'Read a CO₂e figure as a conversion with a chosen GWP set.',
      'See why an inventory becomes a software problem.',
    ],
    prerequisites: ['No prior climate or accounting knowledge.'],
    referenceIds: ['brundtland', 'paris', 'ipcc-ar6', 'gri', 'ifrs-s1'],
    sections: [
      {
        id: 'ideas',
        title: 'Published lessons',
        items: [
          { title: 'What is sustainability?', lessonId: 'what-is-sustainability' },
          { title: 'What is ESG?', lessonId: 'what-is-esg' },
          { title: 'Greenhouse gases and CO₂e', lessonId: 'greenhouse-gases' },
          { title: 'Introduction to carbon accounting', lessonId: 'intro-to-carbon-accounting' },
        ],
      },
      {
        id: 'planned',
        title: 'Planned lessons',
        items: [
          { title: 'Climate change fundamentals' },
          { title: 'The Paris Agreement in more detail' },
          { title: 'How a corporate sustainability program is structured' },
        ],
      },
    ],
  },
  {
    id: 'carbon-accounting',
    level: 2,
    band: 'intermediate',
    title: 'Carbon accounting fundamentals',
    description:
      'How a GHG Protocol inventory is bounded, classified into scopes, calculated, and kept reproducible.',
    audience: 'People who will prepare, review, or build inventory data.',
    difficulty: 'intermediate',
    status: 'available',
    objectives: [
      'Describe an inventory with its boundary and principles.',
      'Place activities in Scope 1, Scope 2, or Scope 3.',
      'Apply the activity × factor equation without breaking units.',
    ],
    prerequisites: ['Introduction to carbon accounting, or equivalent familiarity with CO₂e.'],
    referenceIds: ['ghg-corporate', 'ghg-scope2', 'ghg-scope3'],
    sections: [
      {
        id: 'published',
        title: 'Published lessons',
        items: [
          { title: 'What is a GHG inventory?', lessonId: 'ghg-inventory' },
          { title: 'Scope 1, Scope 2, and Scope 3', lessonId: 'scopes' },
          { title: 'Activity data, emission factors, and the calculation', lessonId: 'activity-and-factors' },
          { title: 'Data quality and auditability', lessonId: 'data-quality' },
        ],
      },
      {
        id: 'planned',
        title: 'Planned lessons',
        items: [
          { title: 'Scope 2 instruments in more detail' },
          { title: 'Screening a Scope 3 inventory' },
          { title: 'Base years and recalculation' },
        ],
      },
    ],
  },
  {
    id: 'reporting',
    level: 3,
    band: 'intermediate',
    title: 'Sustainability reporting',
    description:
      'GRI, the ISSB standards, the ESRS, and materiality. Not published yet. Glossary entries already separate the regimes.',
    audience: 'Reporters and the engineers who model their disclosures.',
    difficulty: 'intermediate',
    status: 'coming-soon',
    objectives: [
      'Match a disclosure question to GRI, IFRS S1/S2, or the ESRS.',
      'Explain double materiality without collapsing it into a single score.',
    ],
    prerequisites: ['ESG foundations.'],
    referenceIds: ['gri', 'ifrs-s1', 'ifrs-s2', 'csrd', 'esrs'],
    sections: [
      {
        id: 'planned',
        title: 'Planned lessons',
        items: [
          { title: 'Sustainability disclosure fundamentals' },
          { title: 'GRI Standards' },
          { title: 'ISSB Standards' },
          { title: 'CSRD and ESRS' },
          { title: 'Materiality and double materiality' },
          { title: 'Reporting boundaries, evidence, and audit trails' },
        ],
      },
    ],
  },
  {
    id: 'markets',
    level: 4,
    band: 'intermediate',
    title: 'Carbon markets and climate solutions',
    description:
      'Credits, offsets, removals, and integrity tests. Not published yet. The glossary defines the terms and points at the programs that use them.',
    audience: 'People evaluating offset claims or designing credit workflows.',
    difficulty: 'intermediate',
    status: 'coming-soon',
    objectives: [
      'Separate a credit, an offset, and a neutrality claim.',
      'Define additionality, permanence, and leakage as tests, not as slogans.',
    ],
    prerequisites: ['Carbon accounting fundamentals.'],
    referenceIds: ['icvcm', 'sbti', 'ipcc-ar6'],
    sections: [
      {
        id: 'planned',
        title: 'Planned lessons',
        items: [
          { title: 'Carbon markets explained' },
          { title: 'Voluntary and compliance markets' },
          { title: 'Credits, offsets, removals, and avoidance' },
          { title: 'Additionality, permanence, leakage, and verification' },
        ],
      },
    ],
  },
  {
    id: 'esg-engineering',
    level: 5,
    band: 'advanced',
    title: 'Sustainability software engineering',
    description:
      'How the accounting rules turn into modules, records, and tests. Written for engineers who will build or review the system.',
    audience: 'Software engineers working on sustainability products.',
    difficulty: 'advanced',
    status: 'available',
    objectives: [
      'Separate ingestion, method, calculation, lineage, and disclosure.',
      'Model activity and factor versions so a published result stays reproducible.',
    ],
    prerequisites: ['Activity data and emission factors.'],
    referenceIds: ['ghg-corporate', 'ghg-scope2'],
    sections: [
      {
        id: 'published',
        title: 'Published lessons',
        items: [
          { title: 'Architecture of a carbon accounting platform', lessonId: 'platform-architecture' },
          { title: 'Modeling activity data and emission factors', lessonId: 'modeling-activity-and-factors' },
        ],
      },
      {
        id: 'planned',
        title: 'Planned lessons',
        items: [
          { title: 'Unit conversion as a boundary' },
          { title: 'Ingestion and normalization' },
          { title: 'Validation rules that match the principles' },
          { title: 'Factor versioning and reproducible recalculation' },
          { title: 'Where AI helps, and where it must not invent a factor' },
        ],
      },
    ],
  },
]
