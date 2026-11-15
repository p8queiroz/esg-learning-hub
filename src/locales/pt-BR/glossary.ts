import type { GlossaryEntry } from '@/types/content'

export const glossary: GlossaryEntry[] = [
  {
    id: 'esg',
    term: 'ESG',
    aliases: ['environmental social governance', 'ambiental social governança'],
    definition:
      'Um jeito de agrupar temas ambientais, sociais e de governança para descrever como uma organização depende desses temas e como ela os afeta. ESG não é um único padrão, um único placar, nem um inventário de gases de efeito estufa.',
    example:
      'Um relatório GRI, uma divulgação climática IFRS S2 e um rating ESG de terceiro podem todos ser chamados de “ESG” na conversa. São produtos diferentes e devem ser guardados como objetos diferentes.',
    lessonIds: ['what-is-esg'],
    referenceIds: ['gri', 'ifrs-s1'],
  },
  {
    id: 'ghg',
    term: 'GEE',
    aliases: ['GHG', 'greenhouse gas', 'gás de efeito estufa', 'gases de efeito estufa'],
    definition:
      'Um gás que absorve e reemite radiação infravermelha e, com isso, contribui para o efeito estufa. Inventários corporativos costumam contar uma lista definida, em geral os gases de Quioto: CO₂, CH₄, N₂O, HFCs, PFCs, SF₆ e NF₃.',
    example:
      'O dióxido de carbono de uma caldeira e o HFC-134a de um ar-condicionado são os dois gases de efeito estufa. Um inventário inclui cada um só se a metodologia escolhida mandar contar.',
    lessonIds: ['greenhouse-gases'],
    referenceIds: ['ipcc-ar6', 'ghg-corporate'],
  },
  {
    id: 'co2e',
    term: 'CO₂e',
    aliases: ['carbon dioxide equivalent', 'co2e', 'CO2e', 'dióxido de carbono equivalente'],
    definition:
      'Uma unidade que expressa o impacto climático de um gás de efeito estufa como a massa de dióxido de carbono que teria um efeito comparável num horizonte de tempo declarado, usando um conjunto declarado de potenciais de aquecimento global.',
    example:
      'Com o valor de 100 anos do IPCC AR6, 1 tonelada de metano fóssil equivale a 29,8 toneladas de CO₂e. A mesma tonelada equivale a 25 toneladas de CO₂e se o inventário ainda exigir o valor 25 do AR4.',
    lessonIds: ['greenhouse-gases', 'activity-and-factors'],
    referenceIds: ['ipcc-ar6'],
  },
  {
    id: 'gwp',
    term: 'Potencial de aquecimento global',
    aliases: ['GWP', 'global warming potential'],
    definition:
      'Um índice de quanta energia a emissão de 1 unidade de massa de um gás absorve num horizonte de tempo escolhido, em relação à emissão de 1 unidade de massa de CO₂. O número depende do relatório do IPCC e do horizonte, muitas vezes 20 ou 100 anos.',
    example:
      'O metano tem um GWP de 20 anos bem maior do que o de 100 anos, porque dura menos que o dióxido de carbono. Um inventário tem que dizer qual horizonte usou.',
    lessonIds: ['greenhouse-gases'],
    referenceIds: ['ipcc-ar6'],
  },
  {
    id: 'scope-1',
    term: 'Escopo 1',
    aliases: ['scope 1', 'Scope 1'],
    definition:
      'Emissões diretas de gases de efeito estufa de fontes que a organização que relata possui ou controla, como a combustão nas caldeiras, fornos e veículos dela.',
    example: 'Gás natural queimado num forno que a empresa opera é Escopo 1. As emissões a montante de produzir esse gás não são Escopo 1.',
    lessonIds: ['scopes'],
    referenceIds: ['ghg-corporate'],
  },
  {
    id: 'scope-2',
    term: 'Escopo 2',
    aliases: ['scope 2', 'Scope 2'],
    definition:
      'Emissões indiretas de gases de efeito estufa da geração de eletricidade, vapor, aquecimento ou resfriamento comprados e consumidos pela organização que relata.',
    example:
      'A eletricidade usada num escritório operado pela empresa é Escopo 2. A orientação de Escopo 2 pede os dois totais: por localização e por mercado.',
    lessonIds: ['scopes'],
    referenceIds: ['ghg-corporate', 'ghg-scope2'],
  },
  {
    id: 'scope-3',
    term: 'Escopo 3',
    aliases: ['scope 3', 'Scope 3'],
    definition:
      'Outras emissões indiretas de gases de efeito estufa na cadeia de valor da organização. O padrão de Escopo 3 organiza essas emissões em 15 categorias, tanto a montante quanto a jusante das operações da própria empresa.',
    example:
      'Voos em companhias aéreas comerciais são a categoria 6, viagens a negócios. Eles são Escopo 3 quando a empresa não possui nem controla a aeronave.',
    lessonIds: ['scopes', 'scope-3-screening'],
    referenceIds: ['ghg-scope3', 'ghg-corporate'],
  },
  {
    id: 'emission-factor',
    term: 'Fator de emissão',
    aliases: ['emission factor'],
    definition:
      'Um fator que converte uma quantidade de atividade numa quantidade de emissões de gases de efeito estufa. Um fator utilizável diz a unidade de atividade, a base em gás ou em CO₂e, a fonte, a geografia e o período de validade.',
    example: '“kg CO₂e por kWh” pode ser multiplicado por quilowatts-hora. Não pode ser multiplicado por litros até alguém registrar uma conversão.',
    lessonIds: ['activity-and-factors', 'modeling-activity-and-factors'],
    referenceIds: ['ghg-corporate', 'epa-hub'],
  },
  {
    id: 'activity-data',
    term: 'Dado de atividade',
    aliases: ['activity data'],
    definition:
      'Uma medida quantitativa de uma atividade que produz emissões de gases de efeito estufa, como litros de combustível, quilowatts-hora de eletricidade ou toneladas-quilômetro de frete.',
    example: 'Uma nota de 500 litros de diesel é dado de atividade. Ela vira emissão só depois que um fator compatível é aplicado.',
    lessonIds: ['activity-and-factors'],
    referenceIds: ['ghg-corporate'],
  },
  {
    id: 'ghg-protocol',
    term: 'GHG Protocol',
    aliases: ['protocolo GHG'],
    definition:
      'Uma família de padrões de contabilidade de gases de efeito estufa publicada pelo World Resources Institute e pelo World Business Council for Sustainable Development. O Corporate Standard, a orientação de Escopo 2 e o padrão de Escopo 3 são documentos separados, com exigências diferentes.',
    example:
      'Dizer “seguimos o GHG Protocol” fica incompleto até você nomear o documento, a edição e as escolhas que ele deixa abertas, como a abordagem de consolidação e o conjunto de GWP.',
    lessonIds: ['ghg-inventory', 'scopes'],
    referenceIds: ['ghg-corporate', 'ghg-scope2', 'ghg-scope3'],
  },
  {
    id: 'ghg-inventory',
    term: 'Inventário de GEE',
    aliases: ['GHG inventory', 'greenhouse gas inventory', 'inventário de gases de efeito estufa'],
    definition:
      'A conta das emissões de gases de efeito estufa atribuíveis a uma organização num período declarado, preparada com uma fronteira organizacional, uma fronteira operacional e uma metodologia declaradas.',
    example:
      '“Ano-calendário 2025, controle operacional, Escopo 1 e Escopo 2 por localização e por mercado, GWP-100 do AR5” é o começo da descrição de um inventário. Um total sozinho, sem essas escolhas, não é.',
    lessonIds: ['ghg-inventory', 'intro-to-carbon-accounting'],
    referenceIds: ['ghg-corporate'],
  },
  {
    id: 'carbon-neutrality',
    term: 'Neutralidade de carbono',
    aliases: ['carbon neutrality', 'carbon neutral', 'carbono neutro'],
    definition:
      'Uma alegação de que o dióxido de carbono associado a um sujeito e a um período declarados foi equilibrado por remoções ou compensações, segundo um método declarado. Os programas definem a palavra de jeitos diferentes. Não é o mesmo conceito que uma trajetória net-zero do SBTi Corporate Net-Zero Standard.',
    example:
      'Um certificado de produto que equilibra emissões residuais com créditos pode ser uma alegação de neutralidade de carbono. Isso, sozinho, não significa que a empresa tem uma trajetória de redução baseada na ciência.',
    lessonIds: [],
    referenceIds: ['sbti'],
  },
  {
    id: 'net-zero',
    term: 'Net zero',
    aliases: ['net-zero', 'zero líquido'],
    definition:
      'No uso do IPCC, um estado em que as emissões antrópicas são equilibradas por remoções antrópicas num período especificado. Net-zero de CO₂ e net-zero de gases de efeito estufa são afirmações diferentes. O SBTi Corporate Net-Zero Standard é um quadro corporativo voluntário, com as próprias regras de redução e de neutralização residual.',
    example:
      'Uma empresa pode ter um ano-alvo de net zero e ainda relatar um inventário grande hoje. A meta não é o inventário, e o inventário não é a meta.',
    lessonIds: [],
    referenceIds: ['ipcc-ar6', 'sbti', 'paris'],
  },
  {
    id: 'carbon-credit',
    term: 'Crédito de carbono',
    aliases: ['carbon credit', 'carbon credits'],
    definition:
      'Uma unidade transferível emitida por um programa de crédito de carbono, feita para representar uma tonelada de CO₂e reduzida ou removida segundo as regras daquele programa. A emissão, sozinha, não diz se a tonelada passa num teste de integridade específico.',
    example:
      'Um número de série de registro identifica um crédito. Adicionalidade, permanência e vazamento são perguntas sobre a qualidade do projeto, avaliadas contra um programa declarado.',
    lessonIds: [],
    referenceIds: ['icvcm'],
  },
  {
    id: 'carbon-offset',
    term: 'Compensação de carbono',
    aliases: ['carbon offset', 'offset', 'carbon offsets'],
    definition:
      'O uso de um crédito de carbono para contrabalançar emissões numa alegação ou num inventário. O crédito é o instrumento. A compensação é o uso contábil desse instrumento. Os padrões divergem sobre se, e como, compensações podem ser usadas.',
    example:
      'Aposentar um crédito e subtrair isso do Escopo 1 é uma escolha de compensação. O inventário do GHG Protocol e um quadro voluntário de net zero não tratam essa subtração do mesmo jeito.',
    lessonIds: [],
    referenceIds: ['ghg-corporate', 'sbti', 'icvcm'],
  },
  {
    id: 'csrd',
    term: 'CSRD',
    aliases: ['Corporate Sustainability Reporting Directive'],
    definition:
      'A Diretiva (UE) 2022/2464, que exige que empresas no escopo relatem informação de sustentabilidade. Quem está no escopo, e em que calendário, é uma pergunta jurídica. Medidas posteriores da UE mudaram ou propuseram mudanças no calendário original. Confira o texto em vigor.',
    example:
      'Um time de engenharia não deveria gravar no código os limites de tamanho de 2022 como se fossem permanentes. O sistema deve registrar a base legal de uma obrigação de relato separada do modelo de dados.',
    lessonIds: [],
    referenceIds: ['csrd', 'esrs'],
  },
  {
    id: 'esrs',
    term: 'ESRS',
    aliases: ['European Sustainability Reporting Standards'],
    definition:
      'Os European Sustainability Reporting Standards adotados pela Comissão Europeia no Regulamento Delegado (UE) 2023/2772. O ESRS 1 define a dupla materialidade. O ESRS é padrão de divulgação. Não é um método de cálculo de gases de efeito estufa.',
    example:
      'Uma empresa pode calcular emissões com o GHG Protocol e divulgá-las num relatório climático ESRS. O padrão de cálculo e o padrão de divulgação continuam distintos no sistema.',
    lessonIds: [],
    referenceIds: ['esrs', 'csrd'],
  },
  {
    id: 'issb',
    term: 'ISSB',
    aliases: ['IFRS S1', 'IFRS S2'],
    definition:
      'O International Sustainability Standards Board, que publicou o IFRS S1 e o IFRS S2 em junho de 2023. Os padrões pedem informação financeira relacionada à sustentabilidade: informação que se possa razoavelmente esperar que afete as perspectivas da entidade. Cada jurisdição escolhe se adota.',
    example:
      'O IFRS S2 não é um substituto direto da GRI. Um olha para investidores e valor da empresa. A GRI olha para os impactos da organização.',
    lessonIds: ['what-is-esg'],
    referenceIds: ['ifrs-s1', 'ifrs-s2'],
  },
  {
    id: 'gri',
    term: 'GRI',
    aliases: ['Global Reporting Initiative'],
    definition:
      'A Global Reporting Initiative, que publica os GRI Standards. Os Universal Standards de 2021 enquadram o relato nos impactos da organização sobre a economia, o meio ambiente e as pessoas, inclusive direitos humanos.',
    example:
      'Um tema pode ser material na GRI porque o impacto é significativo, mesmo quando o efeito financeiro na empresa ainda é incerto. Esse teste é diferente do IFRS S1.',
    lessonIds: ['what-is-esg'],
    referenceIds: ['gri'],
  },
  {
    id: 'materiality',
    term: 'Materialidade',
    aliases: ['materiality'],
    definition:
      'O julgamento do que é importante o bastante para entrar num relatório. O teste depende do regime. A GRI olha a significância dos impactos. O IFRS S1 olha o que poderia afetar as perspectivas da entidade. A palavra sozinha não diz qual teste foi usado.',
    example:
      'Um impacto na água pode ser material num relatório GRI. Ele é material financeiramente no IFRS S1 só se puder razoavelmente afetar as perspectivas da empresa. Essas conclusões podem divergir.',
    lessonIds: ['what-is-esg'],
    referenceIds: ['gri', 'ifrs-s1', 'esrs'],
  },
  {
    id: 'double-materiality',
    term: 'Dupla materialidade',
    aliases: ['double materiality'],
    definition:
      'A abordagem do ESRS que exige que a empresa considere materialidade de impacto e materialidade financeira. Um tema é relatado quando atende a qualquer uma das perspectivas, segundo os critérios do ESRS 1.',
    example:
      'Um tema que importa como impacto, mas ainda não como risco financeiro, pode entrar no escopo da dupla materialidade. Um padrão só financeiro não chegaria a esse resultado pelo mesmo teste.',
    lessonIds: [],
    referenceIds: ['esrs'],
  },
  {
    id: 'lca',
    term: 'Avaliação do ciclo de vida',
    aliases: ['LCA', 'life cycle assessment', 'life-cycle assessment'],
    definition:
      'Segundo a ISO 14040, a compilação e a avaliação das entradas, saídas e impactos ambientais potenciais de um sistema de produto ao longo do ciclo de vida. Uma ACV é um estudo de sistema de produto. Não é o mesmo entregável que um inventário corporativo de GEE.',
    example:
      'A pegada do berço ao túmulo de um produto pode usar fatores de emissão parecidos com os de um inventário corporativo, mas a fronteira é o sistema do produto, não a fronteira organizacional da empresa.',
    lessonIds: [],
    referenceIds: ['iso-14040'],
  },
  {
    id: 'organizational-boundary',
    term: 'Fronteira organizacional',
    aliases: ['organizational boundary'],
    definition:
      'A linha que decide quais operações entram no inventário de GEE da empresa. O Corporate Standard do GHG Protocol oferece três abordagens de consolidação: participação societária, controle financeiro e controle operacional.',
    example:
      'Uma joint venture pode estar inteira no inventário sob controle operacional e só em parte sob participação societária. A abordagem tem que ser escolhida e depois aplicada de forma consistente.',
    lessonIds: ['ghg-inventory'],
    referenceIds: ['ghg-corporate'],
  },
  {
    id: 'location-based',
    term: 'Escopo 2 por localização',
    aliases: ['location-based', 'location-based Scope 2'],
    definition:
      'Um método de Escopo 2 que usa fatores de emissão da rede elétrica onde o consumo acontece. Nos Estados Unidos, os fatores da eGRID são uma fonte comum. A orientação de Escopo 2 pede que as empresas relatem esse total junto com o total por mercado.',
    example:
      'Um escritório numa região da rede e uma fábrica em outra não deveriam compartilhar um único fator nacional se o método pede um fator regional.',
    lessonIds: ['scopes', 'scope-2-instruments'],
    referenceIds: ['ghg-scope2', 'egrid'],
  },
  {
    id: 'market-based',
    term: 'Escopo 2 por mercado',
    aliases: ['market-based', 'market-based Scope 2'],
    definition:
      'Um método de Escopo 2 que reflete instrumentos contratuais de eletricidade, como fatores específicos do fornecedor, certificados de atributo de energia e mixes residuais, seguindo os critérios de qualidade da orientação de Escopo 2.',
    example:
      'Um certificado de energia renovável não muda o total por localização. Ele é um insumo do total por mercado, e só quando atende aos critérios da orientação.',
    lessonIds: ['scopes', 'scope-2-instruments'],
    referenceIds: ['ghg-scope2'],
  },
  {
    id: 'additionality',
    term: 'Adicionalidade',
    aliases: ['additionality'],
    definition:
      'No crédito de carbono, o teste de se a redução ou a remoção não teria acontecido sem o incentivo do crédito. Os programas operacionalizam o teste de jeitos diferentes. Um número de série de crédito não prova o resultado.',
    example: 'Um projeto que a lei já exigia em geral falha no teste de adicionalidade, porque o crédito não causou a atividade.',
    lessonIds: [],
    referenceIds: ['icvcm'],
  },
  {
    id: 'permanence',
    term: 'Permanência',
    aliases: ['permanence'],
    definition:
      'A durabilidade de um gás de efeito estufa armazenado, em geral discutida para remoções. Uma tonelada guardada numa floresta pode voltar para a atmosfera por fogo ou corte. Programas de crédito definem um horizonte de durabilidade e uma regra de reversão. Essas regras não são uniformes.',
    example: 'Um projeto de armazenamento geológico e um projeto florestal de rotação curta não oferecem a mesma permanência, mesmo que cada um seja emitido como uma tonelada.',
    lessonIds: [],
    referenceIds: ['icvcm', 'ipcc-ar6'],
  },
  {
    id: 'leakage',
    term: 'Vazamento',
    aliases: ['leakage'],
    definition:
      'Um aumento de emissões fora da fronteira de um projeto, causado pela atividade do projeto. Um método de crédito tem que dizer se o vazamento foi estimado, e como.',
    example:
      'Proteger um talhão de floresta pode empurrar a extração de madeira para o talhão vizinho. Se esse deslocamento não for estimado, a tonelada creditada exagera o efeito na atmosfera.',
    lessonIds: [],
    referenceIds: ['icvcm'],
  },
]
