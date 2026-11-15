import type { Lesson } from '@/types/content'

export const foundationLessons: Lesson[] = [
  {
    id: 'what-is-sustainability',
    courseId: 'foundations',
    title: 'O que é sustentabilidade?',
    summary:
      'Uma definição simples, e um mapa dos quatro trabalhos que as pessoas dão a essa palavra: ciência, política, contagem de emissões e divulgação.',
    minutes: 9,
    objectives: [
      'Recontar a ideia de desenvolvimento sustentável do relatório Brundtland em linguagem simples.',
      'Separar ciência, política, contabilidade de gases de efeito estufa e divulgação.',
      'Dizer a meta de temperatura do Acordo de Paris sem tratá-la como regra de cálculo.',
    ],
    referenceIds: ['brundtland', 'paris', 'ipcc-ar6'],
    quizIds: [],
    blocks: [
      {
        type: 'paragraph',
        text: 'Sustentabilidade, do jeito que usamos a palavra aqui, significa que as pessoas conseguem atender às suas necessidades hoje sem tornar isso impossível para as pessoas que vêm depois. O relatório Brundtland, de 1987, colocou essa ideia numa frase: desenvolvimento que atende às necessidades do presente sem comprometer a capacidade das gerações futuras de atender às suas próprias necessidades.',
      },
      {
        type: 'definition',
        term: 'Desenvolvimento sustentável',
        definition:
          'Desenvolvimento que atende às necessidades do presente sem comprometer a capacidade das gerações futuras de atender às suas próprias necessidades. Essa é uma ideia de política do relatório Brundtland. Ela não especifica uma fórmula, um modelo de relatório nem uma arquitetura de software.',
      },
      {
        type: 'paragraph',
        text: 'A palavra fica confusa quando você pede que ela faça quatro trabalhos ao mesmo tempo. Um cientista do clima, alguém que negocia um tratado, quem faz o inventário e quem escreve a divulgação podem dizer “sustentabilidade” na mesma reunião e estar falando de quatro coisas diferentes.',
      },
      {
        type: 'concepts',
        items: [
          {
            title: 'Descrever condições',
            body: 'A ciência descreve o estado do clima e de outros sistemas ambientais. O IPCC avalia essa ciência. Ele não opera o livro-razão de uma empresa.',
          },
          {
            title: 'Definir metas',
            body: 'Governos definem metas em tratados e leis. O Acordo de Paris é o tratado central do clima. Uma meta não é um fator de emissão.',
          },
          {
            title: 'Contar',
            body: 'A contabilidade de gases de efeito estufa transforma atividade num inventário estruturado. O GHG Protocol e a ISO 14064-1 são metodologias para essa conta.',
          },
          {
            title: 'Divulgar',
            body: 'Padrões de relato dizem o que uma empresa publica, para quem, e com qual definição de materialidade. GRI, os padrões do ISSB e o ESRS não fazem a mesma pergunta.',
          },
        ],
      },
      {
        type: 'callout',
        tone: 'distinction',
        title: 'Parecido não quer dizer intercambiável',
        body: 'Sustentabilidade é a ideia ampla. ESG é um agrupamento usado sobretudo em negócios e finanças. Contabilidade de carbono é o inventário. Um relatório de sustentabilidade é uma divulgação. Mantenha os substantivos precisos no produto, senão o modelo de dados junta quatro fluxos num campo só.',
      },
      {
        type: 'comparison',
        title: 'Quatro fontes que as pessoas empilham',
        description: 'Cada aba é um tipo diferente de autoridade. Nenhuma substitui as outras.',
        tabs: [
          {
            id: 'science',
            label: 'IPCC',
            body: 'O Painel Intergovernamental sobre Mudança do Clima avalia a ciência física do clima e as trajetórias de mitigação. Os potenciais de aquecimento global dele são índices científicos. Um programa de contabilidade pode adotar uma tabela específica do IPCC. A tabela, sozinha, não é o programa de contabilidade.',
          },
          {
            id: 'policy',
            label: 'Acordo de Paris',
            body: 'O Acordo de Paris foi adotado em 2015 no âmbito da UNFCCC e entrou em vigor em 2016. Ele busca manter o aumento da temperatura média global bem abaixo de 2°C em relação aos níveis pré-industriais e envidar esforços para limitar esse aumento a 1,5°C. Os países comunicam contribuições nacionalmente determinadas. O tratado não diz ao engenheiro qual fator de emissão multiplicar.',
          },
          {
            id: 'method',
            label: 'GHG Protocol',
            body: 'O Corporate Standard do GHG Protocol é um método voluntário de contabilidade para inventários organizacionais. Ele diz como definir uma fronteira e como classificar Escopo 1 e Escopo 2. Não é uma lei de divulgação.',
          },
          {
            id: 'disclosure',
            label: 'Regras de divulgação',
            body: 'GRI, IFRS S1 e S2, e o ESRS especificam o que é relatado. Uma lei como a CSRD pode tornar um regime de divulgação obrigatório para as empresas no escopo dela. Saber se uma empresa está nesse escopo é uma pergunta jurídica, e o texto legal continuou mudando. Não congele um limite de 2022 no código e chame isso de atual.',
          },
        ],
      },
      {
        type: 'example',
        title: '“Alinhado com Paris” não é uma especificação',
        context: 'Alguém de produto diz que o módulo novo tem que deixar os clientes “alinhados com Paris”. Engenharia é chamada para estimar o trabalho.',
        walkthrough:
          'A frase nomeia uma meta de política. Ela não escolhe uma fronteira organizacional, um conjunto de potencial de aquecimento global, um método de Escopo 2 nem um padrão de divulgação. Essas escolhas mudam os dados que você guarda. Pergunte qual documento o cliente tem que seguir, e qual edição. Depois mapeie esse documento para configurações do inventário, não para um booleano chamado parisAligned.',
        technicalNote:
          'Um booleano achata um conjunto de escolhas metodológicas num estado de marketing. Guarde as escolhas. Derive o rótulo, se você precisar de um, dessas escolhas e do quadro que define o rótulo.',
      },
      {
        type: 'takeaway',
        title: 'Guarde isto',
        points: [
          'A frase do Brundtland é uma definição de desenvolvimento sustentável, não um cálculo.',
          'Ciência, tratados, métodos de contabilidade e padrões de divulgação são autoridades diferentes.',
          'A meta de temperatura de Paris explica por que inventários existem. Ela não calcula um.',
          'Uma lição específica sobre a maquinaria do Acordo de Paris está planejada. Esta lição só fixa a meta no lugar.',
        ],
      },
    ],
  },
  {
    id: 'what-is-esg',
    courseId: 'foundations',
    title: 'O que é ESG?',
    summary: 'De onde veio a sigla, o que os três pilares costumam cobrir, e por que um placar ESG não é um inventário.',
    minutes: 11,
    objectives: [
      'Descrever ESG como um agrupamento de temas, não como um único padrão.',
      'Dar um exemplo concreto em cada pilar sem tratar os exemplos como uma lista fechada.',
      'Distinguir a lente de impacto da GRI da lente financeira do ISSB, e nomear a dupla materialidade como a abordagem do ESRS.',
    ],
    referenceIds: ['gri', 'ifrs-s1', 'ifrs-s2', 'esrs', 'csrd'],
    quizIds: [],
    blocks: [
      {
        type: 'paragraph',
        text: 'ESG quer dizer ambiental, social e governança. As pessoas usam a sigla para agrupar informação sobre como uma organização depende do mundo, e como ela afeta o mundo. A sigla pegou em finanças depois de Who Cares Wins (2004), um relatório de instituições financeiras convidadas pelo UN Global Compact. Esse relatório não inventou a ciência do clima, os direitos trabalhistas nem os deveres de um conselho. Ele disse que esses temas importam numa análise de investimento.',
      },
      { type: 'diagram', diagram: 'pillars' },
      {
        type: 'callout',
        tone: 'caution',
        title: 'Exemplos não são uma taxonomia',
        body: 'Os itens de cada pilar são ilustrações. A GRI, o ESRS e o IFRS S2 publicam as próprias listas de temas, e essas listas não batem linha a linha. Não trate este diagrama como um marco oficial de controle.',
      },
      {
        type: 'paragraph',
        text: 'Não existe um único padrão ESG. Uma empresa pode preparar um inventário de gases de efeito estufa com o GHG Protocol, relatar impactos com a GRI e relatar informação financeira relacionada ao clima com o IFRS S2. Uma lei pode tornar uma dessas divulgações obrigatória. A CSRD é a diretiva da UE que trouxe o ESRS para o relato corporativo. Quem deve relatar, e quando, tem que ser lido no texto legal em vigor. Este projeto não vai inventar essa lista.',
      },
      {
        type: 'comparison',
        title: 'A mesma palavra, três testes do que importa',
        description: 'Materialidade é a decisão do que é importante o bastante para relatar. O teste não é compartilhado.',
        tabs: [
          {
            id: 'gri',
            label: 'GRI',
            body: 'Os Universal Standards da GRI (2021) se concentram nos impactos mais significativos de uma organização sobre a economia, o meio ambiente e as pessoas, inclusive direitos humanos. Um tema pode importar aqui porque o impacto é significativo, mesmo quando o efeito financeiro na empresa ainda é incerto.',
          },
          {
            id: 'issb',
            label: 'ISSB',
            body: 'O IFRS S1, publicado em junho de 2023, pede riscos e oportunidades relacionados à sustentabilidade que se possa razoavelmente esperar que afetem as perspectivas da entidade. Esse é um teste de materialidade financeira. O IFRS S2 aplica esse teste ao clima. Cada jurisdição decide se adota os padrões. A data de vigência dos próprios padrões é períodos anuais que começam em ou após 1º de janeiro de 2024.',
          },
          {
            id: 'esrs',
            label: 'ESRS',
            body: 'Os padrões europeus adotados no Regulamento Delegado (UE) 2023/2772 usam dupla materialidade, definida no ESRS 1. Um tema entra no escopo quando é material como impacto, ou como questão financeira, ou os dois. Esse portão é diferente do da GRI e do do IFRS S1 sozinhos.',
          },
        ],
      },
      {
        type: 'definition',
        term: 'Materialidade',
        definition: 'O julgamento do que é importante o bastante para incluir. Sempre pergunte qual teste do regime está sendo aplicado. A palavra sozinha não diz.',
        glossaryId: 'materiality',
      },
      {
        type: 'example',
        title: 'Não guarde um placar ESG como se fosse um inventário',
        context: 'Um cliente pede um placar ESG no painel da empresa, ao lado das emissões de Escopo 1.',
        walkthrough:
          'Um placar de uma agência de rating é a opinião daquela agência, construída com o método dela e a data dela. Um total de Escopo 1 é o resultado do inventário da empresa sob um método declarado. Os dois podem aparecer na mesma tela. Não devem ficar na mesma coluna, e o placar não deve ser editável como se o time de sustentabilidade o tivesse calculado a partir de dados de atividade.',
        technicalNote:
          'Persista a agência, a versão do método, a data de referência e o valor bruto. Mantenha isso fora da linhagem do cálculo. Quem rastreia uma tonelada de CO₂e não deveria cair numa nota de fornecedor.',
      },
      {
        type: 'takeaway',
        points: [
          'ESG é um agrupamento usado em negócios e finanças. Não é um padrão de cálculo.',
          'GRI, os padrões do ISSB e o ESRS fazem perguntas de materialidade diferentes.',
          'Dupla materialidade é o termo do ESRS para considerar impacto e materialidade financeira.',
          'Um rating é um produto de opinião. Um inventário é uma conta. Guarde os dois separados.',
        ],
      },
    ],
  },
  {
    id: 'greenhouse-gases',
    courseId: 'foundations',
    title: 'Gases de efeito estufa e CO₂e',
    summary:
      'Quais gases os inventários corporativos costumam contar, o que é um potencial de aquecimento global, e por que dois inventários corretos podem imprimir dois totais de CO₂e diferentes.',
    minutes: 12,
    objectives: [
      'Explicar por que inventários convertem gases em CO₂e.',
      'Nomear os gases comumente incluídos em inventários corporativos baseados em Quioto.',
      'Mostrar como a escolha do relatório do IPCC e do horizonte de tempo muda um resultado de metano.',
    ],
    referenceIds: ['ipcc-ar6', 'ghg-corporate'],
    quizIds: ['ghg-co2e-check'],
    blocks: [
      {
        type: 'paragraph',
        text: 'Um gás de efeito estufa absorve radiação infravermelha que de outro modo deixaria a Terra, e devolve parte dela. Isso aquece a superfície. O IPCC avalia essa física. O inventário de uma empresa não mede esse aquecimento num local. Ele conta a massa de gases específicos. Quando o relatório precisa de um total só, ele converte essas massas em dióxido de carbono equivalente.',
      },
      {
        type: 'definition',
        term: 'CO₂e',
        definition:
          'A massa de dióxido de carbono que teria um efeito de aquecimento comparável ao de uma massa dada de outro gás, num horizonte de tempo declarado, usando um conjunto declarado de potenciais de aquecimento global.',
        glossaryId: 'co2e',
      },
      {
        type: 'definition',
        term: 'Potencial de aquecimento global',
        definition:
          'A razão entre o efeito de aquecimento de uma unidade de massa de um gás e o de uma unidade de massa de CO₂, num horizonte escolhido. Mude o horizonte, ou o relatório do IPCC, e a razão muda.',
        glossaryId: 'gwp',
      },
      {
        type: 'grid',
        title: 'Gases comumente incluídos em inventários corporativos',
        items: [
          { title: 'CO₂', body: 'Dióxido de carbono. O gás de referência, então o GWP dele é 1. A maior parte da combustão fóssil aparece aqui.' },
          { title: 'CH₄', body: 'Metano. Dura menos que o CO₂, então o GWP de 20 anos é bem maior que o de 100 anos. Metano fóssil e não fóssil não recebem o mesmo valor no AR6.' },
          { title: 'N₂O', body: 'Óxido nitroso. Importante em alguns processos industriais e na agricultura. O GWP de 100 anos fica na casa das centenas.' },
          { title: 'HFCs', body: 'Hidrofluorcarbonos. Gases fluorados usados como refrigerantes. Cada espécie tem o próprio GWP.' },
          { title: 'PFCs', body: 'Perfluorcarbonos. Gases fluorados de vida longa, de alguns processos industriais.' },
          { title: 'SF₆', body: 'Hexafluoreto de enxofre. Usado em equipamentos elétricos. GWP muito alto por quilograma.' },
          { title: 'NF₃', body: 'Trifluoreto de nitrogênio. Usado na fabricação de eletrônicos. Incluído na contabilidade de Quioto mais recente. Confirme a lista de gases do programa que você está aplicando.' },
        ],
      },
      {
        type: 'callout',
        tone: 'note',
        title: 'A lista de gases é uma escolha do programa',
        body: 'O IPCC discute mais espécies do que um inventário corporativo conta. Os inventários corporativos do GHG Protocol foram construídos em torno dos gases de Quioto. Se a lista de gases de um programa for diferente, siga o programa. Não acrescente nem tire um gás em silêncio só porque um blog listou sete.',
      },
      {
        type: 'paragraph',
        text: 'O Sexto Relatório de Avaliação do IPCC, Grupo de Trabalho I, Tabela 7.15, dá estes potenciais de aquecimento global de 100 anos: 1 para o CO₂, 29,8 para o metano fóssil, 27,2 para o metano não fóssil e 273 para o óxido nitroso. O mesmo capítulo publica outros horizontes. Relatórios anteriores ainda estão em uso. O AR4 usava 25 para o metano e 298 para o óxido nitroso. O AR5 usava 28 para o metano e 265 para o óxido nitroso. Um inventário fiel nomeia o conjunto.',
      },
      {
        type: 'example',
        title: 'Dois totais corretos de metano',
        context: 'Um site relata 2 toneladas de metano fóssil de um respiro de processo. Finanças pergunta por que o arquivo do ano passado mostrava 50 e o rascunho deste ano mostra 59,6.',
        walkthrough:
          '2 × 25 = 50, que é o valor de 100 anos do AR4. 2 × 29,8 = 59,6, que é o valor fóssil de 100 anos do AR6. Nenhuma das multiplicações é um erro de conta. São escolhas metodológicas diferentes. O inventário só é comparável de um ano para o outro se o conjunto de GWP for mantido, ou se a mudança for divulgada e o ano anterior for recalculado quando o padrão exigir.',
        technicalNote:
          'Guarde gwpSet no cálculo, não como comentário numa aba de planilha. Uma linha de resultado que diz só “59,6 t CO₂e” não pode ser reproduzida. Uma linha que aponta para a massa do gás, a fonte do GWP, o horizonte e o relatório pode.',
      },
      {
        type: 'callout',
        tone: 'caution',
        title: 'Nunca aplique um GWP duas vezes',
        body: 'Alguns fatores publicados já estão em kg CO₂e. Multiplicar esses de novo pelo GWP do metano ou do óxido nitroso é um erro de unidade, não uma postura conservadora. Leia o numerador do fator antes de converter.',
      },
      { type: 'quiz', quizId: 'ghg-co2e-check', mode: 'check' },
      {
        type: 'takeaway',
        points: [
          'Inventários contam massas de gases específicos. CO₂e é uma conversão, não um gás separado.',
          'O GWP depende do relatório do IPCC e do horizonte de tempo.',
          'Os valores de metano do AR4, do AR5 e do AR6 são diferentes. O software tem que lembrar qual usou.',
          'Um fator que já está em CO₂e não é multiplicado por um GWP de novo.',
        ],
      },
    ],
  },
  {
    id: 'intro-to-carbon-accounting',
    courseId: 'foundations',
    title: 'Introdução à contabilidade de carbono',
    summary: 'O que é um inventário corporativo de gases de efeito estufa, o formato da equação básica, e por que o trabalho vira software.',
    minutes: 10,
    objectives: [
      'Definir um inventário corporativo de GEE sem confundi-lo com uma meta ou um relatório.',
      'Escrever a equação do dado de atividade e nomear a regra das unidades.',
      'Explicar por que um resultado precisa de uma trilha se alguém vai confiar nele depois.',
    ],
    referenceIds: ['ghg-corporate', 'epa-hub', 'egrid', 'iso-14064'],
    quizIds: [],
    blocks: [
      {
        type: 'paragraph',
        text: 'Quando falamos de contabilidade de carbono aqui, falamos de montar um inventário de gases de efeito estufa. Um inventário é a conta das emissões que você atribui a uma organização num período, com uma fronteira e um método que dá para nomear. Não é uma promessa de net zero, não é um selo de carbono neutro, e não é o relatório de sustentabilidade que talvez cite o inventário depois.',
      },
      {
        type: 'definition',
        term: 'Inventário de GEE',
        definition:
          'A conta das emissões de uma organização, período, fronteira e metodologia declarados. A ISO 14064-1 é uma especificação internacional separada para inventários organizacionais. Ela se sobrepõe ao GHG Protocol e não é o mesmo texto.',
        glossaryId: 'ghg-inventory',
      },
      { type: 'diagram', diagram: 'calculation' },
      {
        type: 'steps',
        title: 'O cálculo, sem o folclore',
        steps: [
          {
            title: 'Feche o inventário',
            body: 'Quem entra, quais operações, qual período, quais gases, qual conjunto de GWP. O GHG Protocol chama a decisão de “quem” de fronteira organizacional. O próximo curso gasta uma lição nisso.',
          },
          {
            title: 'Junte os dados de atividade',
            body: 'Litros, quilowatts-hora, toneladas, quilômetros. A quantidade ainda não é uma emissão. É uma medida de atividade.',
          },
          {
            title: 'Escolha um fator que combine',
            body: 'A unidade de atividade do fator tem que ser a unidade do dado. O numerador tem que dizer se é um gás específico ou se já é CO₂e, e a citação tem que ser algo que um revisor consiga abrir.',
          },
          {
            title: 'Multiplique, e pare',
            body: 'Atividade × fator. Converta para CO₂e só quando o fator ainda estiver em massa de gás. Deixe a conta sem graça e os metadados ricos.',
          },
          {
            title: 'Guarde a trilha',
            body: 'Documento de origem, versão do fator, escolhas de método, e a pessoa ou o cargo que aprovou a linha. Um número sem essa trilha não dá para auditar.',
          },
        ],
      },
      {
        type: 'example',
        title: 'Uma linha ilustrativa de eletricidade',
        context: 'Uma fábrica usou 1.000 kWh. Alguém multiplica por 0,40 e digita 400 num slide.',
        walkthrough:
          '1.000 kWh × 0,40 kg CO₂e/kWh = 400 kg CO₂e. A conta está certa. O fator não está. 0,40 é um número redondo de ensino, escolhido para as unidades ficarem óbvias. Um inventário real por localização usa um fator de rede publicado para a região e o ano certos. Nos Estados Unidos, a eGRID da EPA é uma fonte comum. Um fator específico do fornecedor pertence ao método por mercado, segundo a orientação de Escopo 2, e não como um substituto silencioso do fator da rede.',
        technicalNote:
          'A calculadora, mais adiante no curso de contabilidade de carbono, usa o mesmo 0,40 ilustrativo para você mexer nos insumos. Ela está marcada como ficção. Não copie isso para um inventário.',
      },
      {
        type: 'callout',
        tone: 'distinction',
        title: 'Por que isso vira um sistema',
        body: 'Uma fábrica e um fator cabem num quadro branco. Uma empresa tem muitos sites, muitos combustíveis, fatores que são revisados todo ano, unidades que não batem, republicações, e um revisor que chega muito depois de a pessoa analista ter saído. O inventário é um conjunto de registros reproduzíveis. O resto deste currículo é sobre deixar esses registros honestos, primeiro como contabilidade e depois como software.',
      },
      {
        type: 'takeaway',
        points: [
          'Um inventário é uma conta para uma fronteira, um período e um método declarados.',
          'Emissões = dado de atividade × fator de emissão, com unidades que se cancelam.',
          'Fatores oficiais vêm de fontes publicadas e são específicos do ano. Este site não os republica.',
          'O próximo curso abre o inventário. O curso de engenharia abre o sistema em volta dele.',
        ],
      },
    ],
  },
]
