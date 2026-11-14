import type { Quiz } from '@/types/content'

export const quizzes: Quiz[] = [
  {
    id: 'ghg-co2e-check',
    title: 'Checagem: quando um resultado é CO₂e?',
    description: 'Uma pergunta sobre a diferença entre uma massa de metano e um resultado em CO₂e.',
    questions: [
      {
        id: 'gwp-needed',
        prompt:
          'Um fator de atividade é 0,2 kg de metano fóssil por unidade. O inventário relata em CO₂e. O que mais você precisa antes de afirmar o resultado em CO₂e?',
        choices: [
          { id: 'nothing', label: 'Nada. Uma massa de metano já é CO₂e.' },
          {
            id: 'gwp',
            label: 'O potencial de aquecimento global que o inventário definiu para esse metano, incluindo o relatório e o horizonte de tempo.',
          },
          { id: 'revenue', label: 'A receita da empresa, para normalizar o resultado.' },
          { id: 'credit', label: 'Um crédito de carbono que aposente o metano.' },
        ],
        correctChoiceId: 'gwp',
        explanation:
          'CO₂e é uma unidade convertida. Você multiplica a massa de um gás pelo potencial de aquecimento global que o inventário adotou. O IPCC AR6 dá um GWP de 100 anos de 29,8 para metano fóssil, mas muitos programas ainda exigem um valor do AR4 ou do AR5. Um fator que já foi publicado como kg CO₂e não pode ser multiplicado por um GWP de novo.',
      },
    ],
  },
  {
    id: 'units-check',
    title: 'Checagem: unidades na equação',
    description: 'Uma pergunta sobre multiplicar dado de atividade por fator de emissão.',
    questions: [
      {
        id: 'unit-match',
        prompt: 'Uma linha registra 500 litros de diesel. O fator ilustrativo é 2,7 kg CO₂e por litro. Qual afirmação está certa?',
        choices: [
          { id: 'drop-units', label: 'O resultado é 500 kg CO₂e. Os litros não importam.' },
          {
            id: 'match',
            label: '500 L × 2,7 kg CO₂e/L = 1.350 kg CO₂e, e só porque o fator usa a mesma unidade de atividade.',
          },
          {
            id: 'gwp-again',
            label: 'Multiplique por um GWP de novo, porque o fator já diz CO₂e.',
          },
          {
            id: 'per-km',
            label: 'Aplique um fator por quilômetro direto. Volume e distância são próximos o bastante.',
          },
        ],
        correctChoiceId: 'match',
        explanation:
          'A unidade da atividade tem que se cancelar com o denominador do fator. 2,7 kg CO₂e por litro é um número ilustrativo de ensino, não um fator da EPA nem do DEFRA. Se o fator publicado já está em CO₂e, não aplique um potencial de aquecimento global uma segunda vez. Um fator por distância precisa de distância, ou de uma conversão explícita que você também guarde.',
      },
    ],
  },
  {
    id: 'scopes-quiz',
    title: 'Quiz: coloque cada emissão no lugar',
    description: 'Quatro perguntas sobre Escopo 1, Escopo 2 e Escopo 3. A referência é o GHG Protocol, não uma lei nacional.',
    questions: [
      {
        id: 'boiler',
        prompt: 'Uma empresa queima gás natural numa caldeira que ela opera. Onde essa combustão entra num inventário do GHG Protocol?',
        choices: [
          { id: 's1', label: 'Escopo 1' },
          { id: 's2', label: 'Escopo 2' },
          { id: 's3', label: 'Escopo 3, categoria 3, atividades relacionadas a combustível e energia' },
          { id: 'none', label: 'Fora do inventário, porque o gás foi comprado' },
        ],
        correctChoiceId: 's1',
        explanation:
          'Combustão em equipamento que a empresa possui ou controla é uma emissão direta: Escopo 1. A compra do combustível também pode ter um pedaço de extração e transporte a montante. Esse pedaço, se for relatado, é Escopo 3 categoria 3, e ele se soma à combustão. Não substitui a combustão.',
      },
      {
        id: 'electricity',
        prompt:
          'A mesma empresa compra eletricidade de uma concessionária para os próprios escritórios. Os escritórios estão dentro da fronteira organizacional. Onde entra a geração dessa eletricidade?',
        choices: [
          { id: 's1', label: 'Escopo 1, porque a empresa paga a conta' },
          { id: 's2', label: 'Escopo 2' },
          { id: 's3c6', label: 'Escopo 3, categoria 6, viagens a negócios' },
          { id: 's3c1', label: 'Escopo 3, só categoria 1, sem linha de Escopo 2' },
        ],
        correctChoiceId: 's2',
        explanation:
          'Escopo 2 é a emissão indireta da eletricidade, do vapor, do aquecimento ou do resfriamento comprados e consumidos pela empresa. Combustível a montante e perdas de transmissão podem ser relatados à parte no Escopo 3 categoria 3. Eles não tiram a emissão da geração do Escopo 2.',
      },
      {
        id: 'flights',
        prompt: 'Funcionários voam em companhias aéreas comerciais a trabalho. A empresa não é dona da aeronave. Onde entram essas emissões de voo?',
        choices: [
          { id: 's1', label: 'Escopo 1, porque a política de viagens é da empresa' },
          { id: 's2', label: 'Escopo 2, porque as passagens foram compradas' },
          { id: 's3', label: 'Escopo 3, categoria 6, viagens a negócios' },
          { id: 'ignore', label: 'Ficam de fora. Só fábricas entram num inventário.' },
        ],
        correctChoiceId: 's3',
        explanation:
          'Voos comerciais são uma atividade indireta da cadeia de valor. No padrão de Escopo 3 eles são a categoria 6, viagens a negócios. Se a empresa fosse dona da aeronave e queimasse o combustível, essa combustão seria Escopo 1. Quem possui e quem controla decide o escopo. A política de viagens não decide.',
      },
      {
        id: 'optional',
        prompt: 'Qual afirmação combina com os documentos do GHG Protocol, e não com uma lei específica ou um questionário de rating?',
        choices: [
          {
            id: 'all-fifteen',
            label: 'O Corporate Standard exige que toda empresa calcule as 15 categorias do Escopo 3.',
          },
          {
            id: 'split',
            label:
              'O Corporate Standard exige Escopo 1 e Escopo 2. O Escopo 3 é opcional ali. O padrão separado de Escopo 3 é o que a empresa usa quando prepara um inventário de Escopo 3.',
          },
          {
            id: 'replace',
            label: 'O Escopo 3 substitui o Escopo 1 para qualquer empresa sem fábrica.',
          },
          {
            id: 'commute-s2',
            label: 'O deslocamento de funcionários é Escopo 2 porque as pessoas usam energia.',
          },
        ],
        correctChoiceId: 'split',
        explanation:
          'O Corporate Standard exige Escopo 1 e Escopo 2 e trata o Escopo 3 como opcional. O padrão de Escopo 3 diz como preparar um inventário de Escopo 3, inclusive a expectativa de cobrir as emissões relevantes e divulgar as exclusões. Uma lei ou um padrão de divulgação como o IFRS S2 ou o ESRS E1 ainda pode exigir informação de Escopo 3. Essa exigência vem da lei ou do padrão de divulgação, não de uma reescrita do Corporate Standard.',
      },
    ],
  },
  {
    id: 'scope-2-instruments-check',
    title: 'Checagem: o que um certificado muda',
    description: 'Uma pergunta sobre Escopo 2 por localização e por mercado.',
    questions: [
      {
        id: 'certificate',
        prompt:
          'Uma empresa aposenta um certificado de energia renovável que cumpre os critérios de qualidade da orientação de Escopo 2 e cobre o uso de eletricidade dela. O que o inventário deve fazer?',
        choices: [
          { id: 'both', label: 'Baixar o total por localização e o total por mercado. A rede mudou.' },
          {
            id: 'market-only',
            label: 'Deixar o total por mercado usar a taxa de emissão do certificado. Manter o total por localização no fator da rede.',
          },
          { id: 'location-only', label: 'Mudar só o total por localização, porque a energia foi usada naquela rede.' },
          { id: 'delete-scope2', label: 'Remover o Escopo 2. Eletricidade renovável fica fora do inventário.' },
        ],
        correctChoiceId: 'market-only',
        explanation:
          'Um certificado que qualifica é um insumo do método por mercado. O método por localização continua usando o fator da rede de onde a eletricidade foi consumida. A orientação de Escopo 2 pede os dois totais. Aposentar o certificado não apaga o Escopo 2.',
      },
    ],
  },
  {
    id: 'scope-3-screening-check',
    title: 'Checagem: uma categoria pequena de Escopo 3',
    description: 'Uma pergunta sobre o que uma estimativa de triagem permite deixar de fora.',
    questions: [
      {
        id: 'small-category',
        prompt:
          'Uma estimativa de triagem diz que a categoria 5, resíduos gerados nas operações, é uma fatia pequena do Escopo 3 esperado, e os dados de atividade são ruins. O que o padrão de Escopo 3 permite?',
        choices: [
          { id: 'drop', label: 'Apagar a categoria. Categorias pequenas ficam fora do inventário.' },
          { id: 'disclose', label: 'Calculá-la, ou divulgar uma exclusão justificada. Uma triagem não apaga uma categoria em silêncio.' },
          { id: 'scope1', label: 'Mover os resíduos para o Escopo 1, para o inventário ficar completo sem estimativa.' },
          { id: 'blank', label: 'Deixar a categoria fora do relatório e fora das notas.' },
        ],
        correctChoiceId: 'disclose',
        explanation:
          'O padrão de Escopo 3 espera que a empresa contabilize as emissões relevantes e divulgue e justifique as exclusões. Tamanho é um teste de relevância, não uma tecla de apagar. Resíduos de operações que você não possui nem controla continuam na categoria 5. Não viram Escopo 1.',
      },
    ],
  },
  {
    id: 'base-year-check',
    title: 'Checagem: crescimento orgânico',
    description: 'Uma pergunta sobre quando o ano-base fica onde está.',
    questions: [
      {
        id: 'organic-growth',
        prompt:
          'A produção cresce e o Escopo 1 sobe porque a empresa queimou mais combustível em equipamento que ela já possuía. A fronteira, o método e o conjunto de fatores não mudaram. O que acontece com o ano-base?',
        choices: [
          { id: 'restate', label: 'Republicar o ano-base para o aumento sumir.' },
          { id: 'keep', label: 'Manter o ano-base. Crescimento orgânico é uma mudança real nas emissões.' },
          { id: 'new-base', label: 'Começar um ano-base novo em todo ano em que as emissões sobem.' },
          { id: 'drop-scope1', label: 'Tirar o Escopo 1 dos dois anos para a comparação ficar estável.' },
        ],
        correctChoiceId: 'keep',
        explanation:
          'O Corporate Standard trata uma mudança na produção como crescimento orgânico. Crescimento orgânico não dispara recálculo do ano-base. Recalcule diante de uma mudança estrutural, de uma mudança significativa de método ou de dado, ou de um erro significativo, segundo a política que a empresa divulgou.',
      },
    ],
  },
]
