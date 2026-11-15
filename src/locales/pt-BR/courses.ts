import type { Course } from '@/types/content'

export const courses: Course[] = [
  {
    id: 'foundations',
    level: 1,
    band: 'beginner',
    title: 'Fundamentos de ESG e sustentabilidade',
    description:
      'As palavras que as pessoas usam, quem está por trás delas, e a diferença entre uma meta, um inventário e uma divulgação.',
    audience: 'Quem está começando, e engenheiros que precisam do vocabulário antes do modelo de dados.',
    difficulty: 'beginner',
    status: 'available',
    objectives: [
      'Usar sustentabilidade, ESG e contabilidade de carbono como termos diferentes.',
      'Ler um número de CO₂e como uma conversão feita com um conjunto de GWP escolhido.',
      'Ver por que um inventário vira um problema de software.',
    ],
    prerequisites: ['Nenhum conhecimento prévio de clima ou de contabilidade.'],
    referenceIds: ['brundtland', 'paris', 'ipcc-ar6', 'gri', 'ifrs-s1'],
    sections: [
      {
        id: 'ideas',
        title: 'Lições publicadas',
        items: [
          { title: 'O que é sustentabilidade?', lessonId: 'what-is-sustainability' },
          { title: 'O que é ESG?', lessonId: 'what-is-esg' },
          { title: 'Gases de efeito estufa e CO₂e', lessonId: 'greenhouse-gases' },
          { title: 'Introdução à contabilidade de carbono', lessonId: 'intro-to-carbon-accounting' },
        ],
      },
      {
        id: 'planned',
        title: 'Lições planejadas',
        items: [
          { title: 'Fundamentos da mudança do clima' },
          { title: 'O Acordo de Paris em mais detalhe' },
          { title: 'Como um programa corporativo de sustentabilidade se organiza' },
        ],
      },
    ],
  },
  {
    id: 'carbon-accounting',
    level: 2,
    band: 'intermediate',
    title: 'Fundamentos de contabilidade de carbono',
    description: 'Como um inventário do GHG Protocol ganha fronteira, é classificado em escopos, é calculado e continua reproduzível.',
    audience: 'Quem vai preparar, revisar ou construir dados de inventário.',
    difficulty: 'intermediate',
    status: 'available',
    objectives: [
      'Descrever um inventário com a fronteira e os princípios dele.',
      'Colocar atividades no Escopo 1, no Escopo 2 ou no Escopo 3.',
      'Aplicar a equação atividade × fator sem quebrar as unidades.',
      'Decidir quando um instrumento de Escopo 2, uma exclusão de Escopo 3 ou um recálculo de ano-base é legítimo.',
    ],
    prerequisites: ['Introdução à contabilidade de carbono, ou familiaridade equivalente com CO₂e.'],
    referenceIds: ['ghg-corporate', 'ghg-scope2', 'ghg-scope3'],
    sections: [
      {
        id: 'published',
        title: 'Lições publicadas',
        items: [
          { title: 'O que é um inventário de GEE?', lessonId: 'ghg-inventory' },
          { title: 'Escopo 1, Escopo 2 e Escopo 3', lessonId: 'scopes' },
          { title: 'Dados de atividade, fatores de emissão e o cálculo', lessonId: 'activity-and-factors' },
          { title: 'Qualidade dos dados e auditabilidade', lessonId: 'data-quality' },
          { title: 'Instrumentos de Escopo 2', lessonId: 'scope-2-instruments' },
          { title: 'Triagem de um inventário de Escopo 3', lessonId: 'scope-3-screening' },
          { title: 'Anos-base e recálculo', lessonId: 'base-year-recalculation' },
        ],
      },
    ],
  },
  {
    id: 'reporting',
    level: 3,
    band: 'intermediate',
    title: 'Relato de sustentabilidade',
    description:
      'GRI, os padrões do ISSB, o ESRS e materialidade. Ainda não publicado. Os verbetes do glossário já separam os regimes.',
    audience: 'Quem relata, e os engenheiros que modelam essas divulgações.',
    difficulty: 'intermediate',
    status: 'coming-soon',
    objectives: [
      'Ligar uma pergunta de divulgação à GRI, ao IFRS S1/S2 ou ao ESRS.',
      'Explicar dupla materialidade sem achatar isso num único placar.',
    ],
    prerequisites: ['Fundamentos de ESG.'],
    referenceIds: ['gri', 'ifrs-s1', 'ifrs-s2', 'csrd', 'esrs'],
    sections: [
      {
        id: 'planned',
        title: 'Lições planejadas',
        items: [
          { title: 'Fundamentos da divulgação de sustentabilidade' },
          { title: 'Padrões GRI' },
          { title: 'Padrões ISSB' },
          { title: 'CSRD e ESRS' },
          { title: 'Materialidade e dupla materialidade' },
          { title: 'Fronteiras de relato, evidência e trilha de auditoria' },
        ],
      },
    ],
  },
  {
    id: 'markets',
    level: 4,
    band: 'intermediate',
    title: 'Mercados de carbono e soluções climáticas',
    description:
      'Créditos, compensações, remoções e testes de integridade. Ainda não publicado. O glossário define os termos e aponta os programas que os usam.',
    audience: 'Quem avalia alegações de compensação ou desenha fluxos de crédito.',
    difficulty: 'intermediate',
    status: 'coming-soon',
    objectives: [
      'Separar um crédito, uma compensação e uma alegação de neutralidade.',
      'Definir adicionalidade, permanência e vazamento como testes, não como slogans.',
    ],
    prerequisites: ['Fundamentos de contabilidade de carbono.'],
    referenceIds: ['icvcm', 'sbti', 'ipcc-ar6'],
    sections: [
      {
        id: 'planned',
        title: 'Lições planejadas',
        items: [
          { title: 'Mercados de carbono explicados' },
          { title: 'Mercados voluntários e de conformidade' },
          { title: 'Créditos, compensações, remoções e emissões evitadas' },
          { title: 'Adicionalidade, permanência, vazamento e verificação' },
        ],
      },
    ],
  },
  {
    id: 'esg-engineering',
    level: 5,
    band: 'advanced',
    title: 'Engenharia de software de sustentabilidade',
    description:
      'Como as regras da contabilidade viram módulos, registros e testes. Escrito para engenheiros que vão construir ou revisar o sistema.',
    audience: 'Engenheiros de software que trabalham em produtos de sustentabilidade.',
    difficulty: 'advanced',
    status: 'available',
    objectives: [
      'Separar ingestão, método, cálculo, linhagem e divulgação.',
      'Modelar versões de atividade e de fator para que um resultado publicado continue reproduzível.',
    ],
    prerequisites: ['Dados de atividade e fatores de emissão.'],
    referenceIds: ['ghg-corporate', 'ghg-scope2'],
    sections: [
      {
        id: 'published',
        title: 'Lições publicadas',
        items: [
          { title: 'Arquitetura de uma plataforma de contabilidade de carbono', lessonId: 'platform-architecture' },
          { title: 'Modelando dados de atividade e fatores de emissão', lessonId: 'modeling-activity-and-factors' },
        ],
      },
      {
        id: 'planned',
        title: 'Lições planejadas',
        items: [
          { title: 'Conversão de unidade como uma fronteira' },
          { title: 'Ingestão e normalização' },
          { title: 'Regras de validação que batem com os princípios' },
          { title: 'Versionamento de fatores e recálculo reproduzível' },
          { title: 'Onde a IA ajuda, e onde ela não pode inventar um fator' },
        ],
      },
    ],
  },
]
