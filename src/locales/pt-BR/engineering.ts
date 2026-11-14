import type { Lesson } from '@/types/content'

export const engineeringLessons: Lesson[] = [
  {
    id: 'platform-architecture',
    courseId: 'esg-engineering',
    title: 'Arquitetura de uma plataforma de contabilidade de carbono',
    summary: 'Os módulos que um sistema sério de inventário precisa, quais deles têm que continuar puros, e por que uma planilha derruba a trilha.',
    minutes: 13,
    objectives: [
      'Nomear as responsabilidades que não deveriam dividir um módulo.',
      'Explicar por que o cálculo é uma função pura de insumos registrados.',
      'Descrever para o que um resultado tem que apontar de volta.',
    ],
    referenceIds: ['ghg-corporate', 'ghg-scope2'],
    quizIds: [],
    blocks: [
      {
        type: 'paragraph',
        text: 'Uma plataforma de contabilidade de carbono é um sistema de inventário com um problema de divulgação grudado. Ela recebe atividade, aplica uma fronteira, multiplica por fatores versionados e guarda uma trilha que um revisor consegue percorrer. O GHG Protocol e a ISO publicam os métodos. Eles não publicam as fronteiras dos seus serviços. A divisão abaixo é a leitura de um engenheiro das regras de contabilidade do curso anterior. Não é um diagrama de fornecedor, e não é o único formato que funciona.',
      },
      { type: 'diagram', diagram: 'platform' },
      {
        type: 'concepts',
        items: [
          {
            title: 'Ingestão',
            body: 'Aceite atividade de medidores, notas e arquivos. Preserve a quantidade e a unidade originais. Normalização é uma transformação registrada, não uma edição no lugar.',
          },
          {
            title: 'Fronteira',
            body: 'Decida quais operações e quais escopos entram neste inventário. A abordagem de consolidação é metadado do inventário, aplicada de forma consistente.',
          },
          {
            title: 'Catálogo de fatores',
            body: 'Fatores são dados. Eles têm fontes, regiões, unidades e versões. Não são constantes no pacote de cálculo.',
          },
          {
            title: 'Cálculo',
            body: 'Uma função pura. Mesma atividade, mesma versão de fator, mesmo conjunto de GWP, mesmo resultado. Sem leitura de relógio, sem busca escondida.',
          },
          {
            title: 'Armazenamento de linhagem',
            body: 'Resultados apontam para a atividade, a versão do fator, o método e a expressão. Resultados publicados não são atualizados no lugar.',
          },
          {
            title: 'Divulgação',
            body: 'Exportações para um relatório ou um padrão são projeções do inventário. Elas não viram um segundo caminho de cálculo, mais quieto.',
          },
        ],
      },
      {
        type: 'comparison',
        title: 'A planilha, e o sistema com que você a substitui',
        tabs: [
          {
            id: 'sheet',
            label: 'Planilha',
            body: 'Rápida, e honesta para um site só. Ela falha quando um fator é colado por cima, uma conversão de unidade mora numa coluna que ninguém rotulou, e o arquivo publicado é a única cópia da história. A célula está fazendo ingestão, método, cálculo e divulgação ao mesmo tempo.',
          },
          {
            id: 'system',
            label: 'Sistema',
            body: 'Mais lento de desenhar, e sem graça de propósito. Cada preocupação pode mudar numa velocidade diferente. Fatores são republicados todo ano. A conta quase nunca deveria mudar. Modelos de divulgação mudam quando um padrão muda. Acoplar isso significa que editar um modelo pode mudar uma tonelada.',
          },
        ],
      },
      {
        type: 'callout',
        tone: 'distinction',
        title: 'Pureza é uma propriedade de auditoria',
        body: 'Se o cálculo lê “o fator mais recente” de uma tabela mutável, o total publicado do ano passado pode mudar porque alguém corrigiu um erro de digitação no fator deste ano. Busque a versão do fator pelo id no serviço da aplicação, e passe esse retrato para uma função que só multiplica e converte. A função continua fácil de testar. O inventário continua reproduzível.',
      },
      {
        type: 'example',
        title: 'Uma exportação de divulgação que criou a própria conta',
        context: 'O serviço de inventário guarda os totais de Escopo 2 por localização e por mercado. O exportador de PDF tira a média dos dois “para o gráfico ter uma barra só”.',
        walkthrough:
          'A orientação de Escopo 2 pede os dois totais. Uma média é um terceiro número que nenhum padrão pediu, produzido numa camada que só deveria formatar. Revisores vão amarrar o PDF de volta ao livro e achar um buraco. Não coloque a média em lugar nenhum. Se um gráfico precisa de uma série, rotule qual método ele mostra.',
        technicalNote:
          'Proíba uma segunda implementação de conversão de unidade no pacote de exportação. A exportação chama os mesmos registros de cálculo que o livro guardou. Se um número não pode ser amarrado a um id de resultado, ele não está pronto para publicar.',
      },
      {
        type: 'takeaway',
        points: [
          'Ingira, delimite, busque um fator versionado, calcule, guarde a linhagem e só então divulgue.',
          'O cálculo não busca dados e não formata um relatório.',
          'Fatores são registros. Não são constantes enterradas no código.',
          'Um gráfico não pode inventar um método que o inventário não calculou.',
        ],
      },
    ],
  },
  {
    id: 'modeling-activity-and-factors',
    courseId: 'esg-engineering',
    title: 'Modelando dados de atividade e fatores de emissão',
    summary: 'Um modelo de ensino para os registros, a fronteira de unidade, e a regra de que um fator usado numa linha publicada nunca é editado.',
    minutes: 14,
    objectives: [
      'Esboçar registros de atividade, versões de fator e resultados.',
      'Colocar a conversão de unidade fora da multiplicação.',
      'Explicar o que tem que acontecer quando quem publica revisa um fator.',
    ],
    referenceIds: ['ghg-corporate', 'epa-hub'],
    quizIds: [],
    blocks: [
      {
        type: 'paragraph',
        text: 'O modelo abaixo é de ensino. É o menor conjunto de registros que consegue reproduzir a linha ilustrativa de eletricidade da lição de cálculo e ainda sobreviver a uma revisão de fator. Você não precisa publicar este esquema. E 0,40 continua não sendo um fator real de rede. O ponto é quais fatos têm que ser colunas, não comentários.',
      },
      {
        type: 'code',
        title: 'Um modelo de ensino',
        note: 'Tipos ilustrativos. Identificadores, valores de status e a divisão das tabelas vão diferir num sistema real. O valor 0,40 kg CO₂e/kWh é fictício.',
        code: `type ActivityRecord = {
  id: string
  inventoryId: string
  sourceDocumentId: string
  quantity: number
  unit: "kWh" | "L" | "km" | "kg"
  periodStart: string
  periodEnd: string
}

type FactorVersion = {
  id: string
  factorId: string
  activityUnit: "kWh" | "L" | "km" | "kg"
  numerator: "kgCO2e"
  value: number
  region: string
  validYear: number
  citation: string
  publishedAt: string
}

type EmissionResult = {
  id: string
  activityId: string
  factorVersionId: string
  gwpSet: "not-applied" | "AR4-100" | "AR5-100" | "AR6-100"
  scope: "1" | "2-location" | "2-market" | "3"
  co2eKg: number
  expression: string
  calculatedAt: string
}`,
      },
      {
        type: 'steps',
        title: 'Como a linha ilustrativa é guardada',
        steps: [
          {
            title: 'Atividade',
            body: 'quantidade 1000, unidade kWh, documento de origem apontando para o medidor ou a nota, período do ano do inventário.',
          },
          {
            title: 'Versão do fator',
            body: 'valor 0,40, unidade de atividade kWh, numerador kg CO₂e, texto de citação que na vida real seria uma publicação de verdade. Esta linha de ensino seria rejeitada numa revisão de conteúdo se alguém tentasse rotulá-la como eGRID.',
          },
          {
            title: 'Resultado',
            body: 'co2eKg 400, gwpSet not-applied porque o fator já era CO₂e, escopo 2-location ou 2-market, expressão “1000 kWh × 0.40 kg CO₂e/kWh”.',
          },
        ],
      },
      {
        type: 'callout',
        tone: 'caution',
        title: 'Conversão de unidade é um registro próprio',
        body: 'Se a nota está em MWh e o fator é por kWh, não multiplique 1 × 0,40 e torça. Guarde uma conversão de 1 MWh para 1.000 kWh, e só então multiplique. A conversão também tem uma fonte, mesmo quando a fonte é a definição da unidade. Conversão silenciosa dentro da calculadora é como milhas passam a ser tratadas como quilômetros.',
      },
      {
        type: 'comparison',
        title: 'Quando quem publica revisa o fator',
        tabs: [
          {
            id: 'mutate',
            label: 'Editar no lugar',
            body: 'Atualizar a mesma linha de fator muda o significado de todo resultado que aponta para ela. O total assegurado do ano passado se mexe. O log de auditoria pode mostrar que um valor mudou. Ele não mostra o que o inventário antigo achava que estava usando, a menos que você ainda tenha o valor antigo em outro lugar.',
          },
          {
            id: 'version',
            label: 'Inserir uma versão',
            body: 'O FactorVersion antigo fica. Um id novo é inserido para a publicação nova. Cálculos novos apontam para o id novo. Uma republicação é um resultado novo, explícito, que referencia a versão nova e diz que substitui um resultado anterior. A história continua legível.',
          },
        ],
      },
      {
        type: 'example',
        title: 'A falha que você consegue testar por unidade',
        context: 'Alguém lança atividade de diesel em litros contra um fator cuja unidade de atividade é quilômetros.',
        walkthrough:
          'A função de cálculo recebe as duas unidades e recusa. Ela não coage, e não devolve zero. Quem chamou registra um erro de validação na atividade. O total do inventário exclui a linha e a lista entre os itens incompletos, que é o princípio de completude aparecendo como uma fila, e não como uma surpresa na asseguração.',
        technicalNote:
          'Dê à função pura a quantidade da atividade, a unidade da atividade, o valor do fator, a unidade do fator e o tipo do numerador. Devolva ou um resultado ou um desencontro tipado. Testes de propriedade são diretos: unidades que diferem nunca passam, e um numerador em CO₂e nunca recebe um multiplicador de GWP.',
      },
      {
        type: 'takeaway',
        points: [
          'Atividade, versão de fator e resultado são registros diferentes, com tempos de vida diferentes.',
          'Uma versão de fator publicada é imutável. Revisões são linhas novas.',
          'Conversões são explícitas. O multiplicador nunca adivinha.',
          'A expressão fica guardada ao lado do total, para um revisor não precisar inverter a conta.',
        ],
      },
    ],
  },
]
