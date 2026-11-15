import type { Topic } from '@/types/content'

export const topics: Topic[] = [
  {
    id: 'foundations',
    title: 'Fundamentos',
    description: 'A que as palavras sustentabilidade e ESG se referem, e o que elas não decidem por você.',
    lessonIds: ['what-is-sustainability', 'what-is-esg'],
    glossaryIds: ['esg', 'materiality'],
  },
  {
    id: 'gases',
    title: 'Gases de efeito estufa',
    description: 'Os gases de um inventário corporativo, e a conversão de uma massa de gás em CO₂e.',
    lessonIds: ['greenhouse-gases'],
    glossaryIds: ['ghg', 'gwp', 'co2e'],
  },
  {
    id: 'accounting',
    title: 'Contabilidade de carbono',
    description: 'Inventários, escopos, dados de atividade, fatores de emissão e a trilha de auditoria em volta de um resultado.',
    lessonIds: [
      'intro-to-carbon-accounting',
      'ghg-inventory',
      'scopes',
      'activity-and-factors',
      'data-quality',
      'scope-2-instruments',
      'scope-3-screening',
      'base-year-recalculation',
    ],
    glossaryIds: ['ghg-protocol', 'ghg-inventory', 'scope-1', 'scope-2', 'scope-3', 'activity-data', 'emission-factor'],
  },
  {
    id: 'reporting',
    title: 'Padrões de relato',
    description: 'Regimes de divulgação. O curso dedicado ainda está sendo escrito. Os verbetes do glossário já estão prontos.',
    lessonIds: ['what-is-esg'],
    glossaryIds: ['gri', 'issb', 'csrd', 'esrs', 'materiality', 'double-materiality'],
  },
  {
    id: 'markets',
    title: 'Mercados de carbono',
    description: 'Créditos, compensações e os testes de qualidade sobre os quais as pessoas discutem. As lições estão planejadas. As definições têm fonte.',
    lessonIds: [],
    glossaryIds: ['carbon-credit', 'carbon-offset', 'additionality', 'permanence', 'leakage', 'carbon-neutrality', 'net-zero'],
  },
  {
    id: 'engineering',
    title: 'Software de sustentabilidade',
    description: 'Como um inventário vira um sistema: fronteiras, fatores versionados, cálculos puros e linhagem.',
    lessonIds: ['platform-architecture', 'modeling-activity-and-factors'],
    glossaryIds: ['activity-data', 'emission-factor', 'organizational-boundary'],
  },
]
