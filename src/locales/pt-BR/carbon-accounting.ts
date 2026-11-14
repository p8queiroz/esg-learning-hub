import type { Lesson } from '@/types/content'

export const carbonLessons: Lesson[] = [
  {
    id: 'ghg-inventory',
    courseId: 'carbon-accounting',
    title: 'O que é um inventário de GEE?',
    summary: 'Os cinco princípios, a fronteira organizacional, e a frase que um resultado precisa antes de alguém confiar no total.',
    minutes: 11,
    objectives: [
      'Dizer os cinco princípios de contabilidade do GHG Protocol.',
      'Nomear as três abordagens de consolidação e o que elas mudam.',
      'Descrever um inventário de um jeito que outra pessoa consiga saber o que entrou.',
    ],
    referenceIds: ['ghg-corporate', 'iso-14064'],
    quizIds: [],
    blocks: [
      {
        type: 'paragraph',
        text: 'Um inventário de gases de efeito estufa é a conta das emissões da empresa num período. Antes de você multiplicar qualquer quilograma, o Corporate Standard do GHG Protocol pede cinco qualidades. Elas soam como ética. Em software, são as checagens que um resultado tem que passar.',
      },
      {
        type: 'grid',
        title: 'Princípios do Corporate Standard',
        items: [
          { title: 'Relevância', body: 'O inventário serve às decisões de quem o usa. Um total que esconde as operações que as pessoas vieram ver já falhou, mesmo se a conta estiver arrumada.' },
          { title: 'Completude', body: 'Contabilize todas as fontes dentro da fronteira escolhida. Exclusões são divulgadas e justificadas, não descartadas em silêncio.' },
          { title: 'Consistência', body: 'Os métodos continuam comparáveis ao longo do tempo. Quando um método muda, a mudança fica visível, e os períodos anteriores são recalculados quando o padrão manda.' },
          { title: 'Transparência', body: 'Quem lê consegue ver a fronteira, os fatores e as premissas. Transparência é uma trilha de auditoria, não uma nota de rodapé mais longa.' },
          { title: 'Exatidão', body: 'O viés é reduzido e a incerteza não é ignorada. Exatidão não é a mesma coisa que falsa precisão. Um fator com seis casas decimais não é exato se for a rede errada.' },
        ],
      },
      {
        type: 'definition',
        term: 'Fronteira organizacional',
        definition:
          'A regra de quais operações entram no inventário. O Corporate Standard oferece participação societária, controle financeiro e controle operacional. Escolha uma e aplique. Não misture por site só porque a mistura deixa o gráfico mais bonito.',
        glossaryId: 'organizational-boundary',
      },
      {
        type: 'comparison',
        title: 'As três abordagens de consolidação',
        tabs: [
          {
            id: 'equity',
            label: 'Participação societária',
            body: 'Inclua as emissões segundo a fatia de participação da empresa na operação. Uma fatia de 40% traz 40% das emissões daquela operação para o inventário.',
          },
          {
            id: 'financial',
            label: 'Controle financeiro',
            body: 'Inclua 100% das operações que a empresa controla financeiramente, no sentido que o padrão descreve, e nenhuma das operações que ela não controla. A porcentagem de propriedade não é a porcentagem das emissões.',
          },
          {
            id: 'operational',
            label: 'Controle operacional',
            body: 'Inclua 100% das operações sobre as quais a empresa ou uma subsidiária tem autoridade para introduzir e implementar políticas operacionais. É a abordagem que muitos operadores escolhem, porque combina com quem consegue mudar o equipamento.',
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'A fronteira operacional é o corte seguinte: quais fontes dentro dessas operações são contadas, e em qual escopo. O Corporate Standard exige Escopo 1 e Escopo 2. O Escopo 3 é opcional nesse padrão e é assunto de um padrão próprio. A próxima lição pega os escopos um de cada vez. A ISO 14064-1 usa rótulos de categoria diferentes para parte da mesma física. Se um contrato cita a ISO, não assuma que um número de escopo do GHG Protocol mapeia para uma categoria ISO sem ler os dois.',
      },
      {
        type: 'example',
        title: 'Uma joint venture e uma exclusão quieta',
        context:
          'A empresa opera uma joint venture. Ela tem 30% e toca a planta. O inventário do ano passado incluiu a planta inteira. O arquivo deste ano tira a planta, e o total da empresa cai.',
        walkthrough:
          'Sob controle operacional, tocar a planta é motivo para incluir 100%. Sob participação societária, o número seria 30%. Qualquer uma das abordagens pode ser legítima. Mudar de abordagem entre anos sem uma republicação divulgada quebra a consistência. Tirar a planta sem uma nota quebra completude e transparência. O total menor não é progresso. É uma edição de fronteira.',
        technicalNote:
          'Modele a abordagem de consolidação como metadado do inventário, aplicada quando as operações são selecionadas, não como uma flag manual de inclusão que analistas viram linha a linha. Uma exceção por linha pode existir, mas deve guardar um motivo e aparecer no registro de exclusões.',
      },
      {
        type: 'takeaway',
        points: [
          'Relevância, completude, consistência, transparência e exatidão são os princípios do Corporate Standard.',
          'Participação societária, controle financeiro e controle operacional são fronteiras diferentes, não sinônimos.',
          'Um total sem fronteira, período e método não é um inventário.',
          'A ISO 14064-1 é uma especificação relacionada. É um documento diferente.',
        ],
      },
    ],
  },
  {
    id: 'scopes',
    courseId: 'carbon-accounting',
    title: 'Escopo 1, Escopo 2 e Escopo 3',
    summary:
      'Onde uma emissão fica depende de propriedade e controle, não de quão grave a atividade parece. O Escopo 2 tem dois métodos. O Escopo 3 tem 15 categorias.',
    minutes: 14,
    objectives: [
      'Classificar combustão, energia comprada e atividade da cadeia de valor no escopo certo.',
      'Explicar por que o Escopo 2 é relatado de dois jeitos.',
      'Descrever o que o Corporate Standard exige e o que o padrão de Escopo 3 acrescenta.',
    ],
    referenceIds: ['ghg-corporate', 'ghg-scope2', 'ghg-scope3'],
    quizIds: ['scopes-quiz'],
    blocks: [
      {
        type: 'paragraph',
        text: 'Os escopos evitam que uma empresa conte a mesma tonelada do mesmo jeito que cada fornecedor e cada cliente. Também evitam que ela ignore toneladas que ela de fato causa. O teste é sobretudo a fronteira organizacional que você já escolheu. Quem possui ou controla a fonte?',
      },
      { type: 'diagram', diagram: 'scopes' },
      {
        type: 'definition',
        term: 'Escopo 1',
        definition: 'Emissões diretas de fontes que a organização possui ou controla. Caldeiras, fornos, veículos e equipamentos de processo que ela opera são os casos comuns.',
        glossaryId: 'scope-1',
      },
      {
        type: 'definition',
        term: 'Escopo 2',
        definition: 'Emissões indiretas da geração de eletricidade, vapor, aquecimento ou resfriamento comprados e consumidos pela organização.',
        glossaryId: 'scope-2',
      },
      {
        type: 'definition',
        term: 'Escopo 3',
        definition: 'Outras emissões indiretas na cadeia de valor. O padrão de Escopo 3 organiza essas emissões em 15 categorias.',
        glossaryId: 'scope-3',
      },
      {
        type: 'comparison',
        title: 'Escopo 2 são dois totais, não um interruptor',
        description: 'A orientação de Escopo 2, de 2015, pede que as empresas relatem os dois métodos.',
        tabs: [
          {
            id: 'location',
            label: 'Por localização',
            body: 'Use o fator de emissão da rede onde a eletricidade é consumida. Nos Estados Unidos, a eGRID da EPA publica essas taxas. Um contrato de eletricidade renovável não muda esse total. A rede continua sendo a rede.',
          },
          {
            id: 'market',
            label: 'Por mercado',
            body: 'Reflita instrumentos contratuais: fatores específicos do fornecedor, certificados de atributo de energia e mixes residuais, se eles atenderem aos critérios de qualidade da orientação. Um certificado é um insumo deste método. Não é um motivo para apagar a linha por localização.',
          },
        ],
      },
      {
        type: 'grid',
        title: 'Escopo 3, a montante',
        items: [
          { title: '1. Bens e serviços comprados', body: 'Extração, produção e transporte de bens e serviços comprados no ano, que não estejam em outra categoria a montante.' },
          { title: '2. Bens de capital', body: 'A mesma ideia, para bens de capital, e não para bens comprados e consumidos no ano.' },
          { title: '3. Combustível e energia', body: 'Emissões a montante de combustíveis e energia comprados, e perdas de transmissão, que ainda não estejam no Escopo 1 ou no Escopo 2.' },
          { title: '4. Transporte a montante', body: 'Transporte e distribuição de produtos comprados, em veículos que a empresa não possui nem controla.' },
          { title: '5. Resíduos das operações', body: 'Disposição e tratamento de resíduos gerados nas operações, por partes fora da propriedade ou do controle da empresa.' },
          { title: '6. Viagens a negócios', body: 'Transporte de funcionários a trabalho, em veículos que a empresa não possui nem controla.' },
          { title: '7. Deslocamento de funcionários', body: 'Viagem entre casa e local de trabalho, em veículos que a empresa não possui nem controla.' },
          { title: '8. Ativos arrendados a montante', body: 'Operação de ativos arrendados pela empresa, quando essas emissões ainda não estão no Escopo 1 ou no Escopo 2.' },
        ],
      },
      {
        type: 'grid',
        title: 'Escopo 3, a jusante',
        items: [
          { title: '9. Transporte a jusante', body: 'Transporte de produtos vendidos em veículos que a empresa não possui nem controla.' },
          { title: '10. Processamento de produtos vendidos', body: 'Processamento de produtos intermediários por terceiros, depois da venda.' },
          { title: '11. Uso de produtos vendidos', body: 'Uso de bens e serviços que a empresa vendeu. Para quem fabrica combustível e veículos, esta categoria pode dominar o inventário.' },
          { title: '12. Fim de vida de produtos vendidos', body: 'Disposição e tratamento dos produtos no fim do uso.' },
          { title: '13. Ativos arrendados a jusante', body: 'Operação de ativos que a empresa possui e arrenda a outros, quando essas emissões não estão no Escopo 1 ou no Escopo 2.' },
          { title: '14. Franquias', body: 'Operação de franquias, quando ainda não incluída no Escopo 1 ou no Escopo 2.' },
          { title: '15. Investimentos', body: 'Operação de investimentos, inclusive participação e dívida, quando ainda não incluída. Instituições financeiras passam o tempo delas aqui.' },
        ],
      },
      {
        type: 'callout',
        tone: 'distinction',
        title: 'Opcional num documento, exigido em outro',
        body: 'O Corporate Standard exige Escopo 1 e Escopo 2. O Escopo 3 é opcional ali. O padrão de Escopo 3 é o método que a empresa usa quando prepara um inventário de cadeia de valor: cubra o que é relevante e divulgue as exclusões. O IFRS S2 e o ESRS E1 podem exigir divulgações de Escopo 3 das empresas que os aplicam. A exigência, então, vem do padrão de divulgação, não de uma emenda silenciosa do Corporate Standard.',
      },
      {
        type: 'example',
        title: 'Uma empresa, três linhas, sem contagem dupla dentro da fronteira',
        context: 'Uma empresa de alimentos opera fornos, compra eletricidade e manda funcionários em voos comerciais.',
        walkthrough:
          'O gás nos fornos é Escopo 1. A geração da eletricidade comprada é Escopo 2, relatada por localização e por mercado. Os voos são Escopo 3 categoria 6, porque a companhia aérea controla a aeronave. A produção a montante do gás também pode ser estimada na categoria 3. Essa linha a montante não substitui a linha de combustão do Escopo 1. São partes diferentes da vida do combustível.',
      },
      { type: 'quiz', quizId: 'scopes-quiz', mode: 'quiz' },
      {
        type: 'takeaway',
        points: [
          'O escopo segue propriedade e controle, não o peso moral da atividade.',
          'O Escopo 2 tem um total por localização e um total por mercado.',
          'As 15 categorias do Escopo 3 são uma classificação, não uma exigência de que toda categoria seja grande.',
          'Confira o regime de divulgação antes de dizer a alguém que o Escopo 3 é opcional para essa pessoa.',
        ],
      },
    ],
  },
  {
    id: 'activity-and-factors',
    courseId: 'carbon-accounting',
    title: 'Dados de atividade, fatores de emissão e o cálculo',
    summary: 'A equação é curta. A regra das unidades e a citação são as partes que as pessoas pulam, e as partes que o software tem que se recusar a pular.',
    minutes: 12,
    objectives: [
      'Distinguir dado de atividade de fator de emissão e de resultado.',
      'Recusar um cálculo cujas unidades não se cancelam.',
      'Usar a calculadora ilustrativa sem confundir os fatores dela com valores publicados.',
    ],
    referenceIds: ['ghg-corporate', 'epa-hub', 'egrid', 'ipcc-ar6'],
    quizIds: ['units-check'],
    blocks: [
      {
        type: 'paragraph',
        text: 'Toda linha de um inventário tem o mesmo formato. Você pega uma medida de atividade, multiplica por um fator que diz quanto gás de efeito estufa essa atividade emite, e chega a uma massa de gás ou de CO₂e. O formato fica simples para as exceções continuarem fáceis de ver.',
      },
      {
        type: 'definition',
        term: 'Dado de atividade',
        definition: 'Uma quantidade de atividade: litros queimados, quilowatts-hora consumidos, toneladas-quilômetro transportadas, quilogramas de refrigerante repostos.',
        glossaryId: 'activity-data',
      },
      {
        type: 'definition',
        term: 'Fator de emissão',
        definition: 'As emissões por unidade dessa atividade, com uma fonte, uma geografia, um período e um numerador que é ou um gás ou CO₂e.',
        glossaryId: 'emission-factor',
      },
      {
        type: 'steps',
        title: 'Antes de multiplicar',
        steps: [
          {
            title: 'Leia a unidade da atividade',
            body: 'A nota diz litros, quilowatts-hora ou milhas. Guarde a quantidade original. Conversões ficam num passo registrado, não na cabeça de alguém.',
          },
          {
            title: 'Leia o denominador do fator',
            body: 'Um fator por litro encontra litros. Um fator por galão não encontra, até você converter e guardar a conversão.',
          },
          {
            title: 'Leia o numerador do fator',
            body: 'Se ele diz kg CH₄, você ainda precisa do GWP do inventário para relatar CO₂e. Se ele diz kg CO₂e, quem publicou já escolheu um GWP. Não escolha um segundo.',
          },
          {
            title: 'Leia a citação',
            body: 'O Emission Factors Hub da EPA, a eGRID, uma agência nacional de inventário, uma carta de fornecedor ou uma base de fatores do IPCC. “Média do setor” não é uma citação.',
          },
        ],
      },
      {
        type: 'callout',
        tone: 'caution',
        title: 'A calculadora usa fatores fictícios',
        body: 'Os números 0,40 kg CO₂e/kWh, 0,20 kg CO₂e/km e 2,50 kg CO₂e/L são valores redondos de ensino. Não são fatores da EPA, do DEFRA, do IPCC nem da eGRID. Não copie esses números para um relatório. Fatores oficiais são revisados, mudam por região e por ano, e têm que ser citados na versão que você usou.',
      },
      { type: 'calculator' },
      {
        type: 'example',
        title: 'Um fator que já é CO₂e',
        context: 'Alguém pega um fator de rede publicado como 0,386 kg CO₂e por kWh e multiplica o resultado por 29,8, porque metano foi mencionado num treinamento.',
        walkthrough:
          'Quem publicou já dobrou a mistura de gases da rede e um conjunto de GWP dentro do fator em CO₂e. Multiplicar de novo pelo GWP do metano inventa um resultado sem significado físico. Se você precisa das massas de CO₂, CH₄ e N₂O por baixo, precisa de um fator que publique esses gases, mais o conjunto de GWP que o inventário adotou.',
      },
      { type: 'quiz', quizId: 'units-check', mode: 'check' },
      {
        type: 'takeaway',
        points: [
          'Dado de atividade é a quantidade. O fator é emissão por unidade dessa quantidade.',
          'As unidades têm que se cancelar. Conversões são dados, não folclore.',
          'Aplique um GWP só quando o fator ainda estiver em massa de gás.',
          'Os fatores ilustrativos deste site estão rotulados porque precisão fictícia é um tipo de citação falsa.',
        ],
      },
    ],
  },
  {
    id: 'data-quality',
    courseId: 'carbon-accounting',
    title: 'Qualidade dos dados e auditabilidade',
    summary: 'O que um revisor rastreia, o que o software ainda precisa ter dois anos depois, e como um total menor pode ser um inventário pior.',
    minutes: 10,
    objectives: [
      'Ligar os cinco princípios a checagens que um sistema consegue fazer.',
      'Listar os registros necessários para reproduzir uma única linha de emissão.',
      'Distinguir uma trilha quebrada de uma trilha completa.',
    ],
    referenceIds: ['ghg-corporate', 'iso-14064'],
    quizIds: [],
    blocks: [
      {
        type: 'paragraph',
        text: 'Qualidade de dados aqui não é uma nota de 1 a 5 colada num slide. Significa que alguém que não estava na sala consegue reproduzir o total, ver o que ficou de fora e distinguir uma mudança de método de uma mudança real nas operações. Os princípios do Corporate Standard são a lista de checagem. Trabalhos de asseguração e a ISO 14064-1 acrescentam as próprias exigências de evidência. Por quanto tempo você guarda os registros vem do programa ou da lei. Esta lição não vai inventar um “sete anos” universal.',
      },
      {
        type: 'steps',
        title: 'O que um revisor segue',
        steps: [
          {
            title: 'A atividade',
            body: 'Qual documento de origem, qual quantidade, qual unidade, qual período, qual site. Um número digitado sem documento é uma alegação.',
          },
          {
            title: 'O fator',
            body: 'Qual publicação, qual versão ou ano, qual região, qual unidade, se o numerador é gás ou CO₂e. Um link que apodrece é uma trilha mais fraca do que uma citação guardada e uma cópia do valor usado.',
          },
          {
            title: 'O método',
            body: 'Abordagem de consolidação, escopos incluídos, métodos de Escopo 2, conjunto de GWP, e qualquer exclusão com o motivo.',
          },
          {
            title: 'A conta',
            body: 'A expressão, não só o total arredondado. A política de arredondamento entra junto.',
          },
          {
            title: 'A aprovação',
            body: 'Quem aceitou a linha, e quando. Uma célula sobrescrita não tem aprovação. Tem um último editor.',
          },
        ],
      },
      {
        type: 'comparison',
        title: 'Dois jeitos de guardar os mesmos 400 kg',
        tabs: [
          {
            id: 'broken',
            label: 'Trilha quebrada',
            body: 'Uma célula contém 400. O cabeçalho diz “emissões”. Ninguém consegue dizer se a atividade foi 1.000 kWh ou 800, se o fator era da rede ou do fornecedor, ou se os 400 são quilogramas ou libras. No ano seguinte a célula está em 360 e o gráfico se chama “redução”.',
          },
          {
            id: 'complete',
            label: 'Trilha completa',
            body: 'A linha guarda 1.000 kWh, o id da nota, o id e a versão do fator, 0,40 só se esse era mesmo o valor publicado, a unidade kg CO₂e, o método de Escopo 2, o conjunto de GWP se ele foi aplicado aqui, a fórmula e a aprovação. Uma edição posterior insere um cálculo novo. Ela não pinta por cima do antigo.',
          },
        ],
      },
      {
        type: 'callout',
        tone: 'note',
        title: 'Dado primário não é automaticamente melhor',
        body: 'Uma leitura de medidor é dado primário de atividade e em geral é o que você quer. Um fator específico do fornecedor pode ser melhor que um genérico, ou pode ser um PDF de marketing sem método. Qualidade é se a evidência sustenta o número, não um slogan de que primário sempre ganha. O GHG Protocol discute qualidade de dados com mais extensão no padrão de Escopo 3. A lição de triagem é onde os testes de relevância desse padrão aparecem. A regra deste curso é: mantenha a evidência grudada na linha.',
      },
      {
        type: 'example',
        title: 'O total caiu porque o fator foi trocado',
        context: 'O Escopo 2 cai 18% de um ano para o outro. Operações diz que a produção e o uso de eletricidade ficaram estáveis.',
        walkthrough:
          'Se a atividade está estável, uma queda de 18% é mudança de fator, mudança de método ou um site faltando. O sistema honesto mostra a versão do fator ao lado do resultado. O desonesto, ou só o descuidado, publica a queda como desempenho. Consistência significa que você consegue separar essas histórias. Quando o próprio método muda, o padrão muitas vezes quer um ano-base republicado, não uma volta da vitória.',
        technicalNote:
          'A lição de engenharia sobre modelagem trata uma versão de fator já usada como imutável. Esta lição é a razão contábil dessa restrição. Auditabilidade não é um framework de log colocado no fim. É o formato do registro.',
      },
      {
        type: 'takeaway',
        points: [
          'Um revisor precisa da atividade, da versão do fator, do método, da expressão e da aprovação.',
          'Um total menor não é qualidade. Um total reproduzível é.',
          'Não sobrescreva uma linha publicada. Acrescente um cálculo novo.',
          'Regras de retenção são específicas do programa. Guarde a trilha. Descubra por quanto tempo aquele programa manda guardá-la.',
        ],
      },
    ],
  },
  {
    id: 'scope-2-instruments',
    courseId: 'carbon-accounting',
    title: 'Instrumentos de Escopo 2',
    summary:
      'Um certificado pode mudar o total por mercado. Ele não muda a rede, e não apaga a linha por localização.',
    minutes: 11,
    objectives: [
      'Manter o Escopo 2 por localização e por mercado como dois totais.',
      'Nomear os critérios de qualidade que um instrumento contratual precisa cumprir.',
      'Usar um mix residual quando não há instrumento, em vez de reivindicar a eletricidade renovável de outra pessoa.',
    ],
    referenceIds: ['ghg-scope2', 'egrid'],
    quizIds: ['scope-2-instruments-check'],
    blocks: [
      {
        type: 'paragraph',
        text: 'Escopo 2 é a geração de eletricidade, vapor, calor ou frio que a empresa compra e consome. A orientação de Escopo 2, de 2015, pede dois totais. O total por localização usa a rede onde a energia é consumida. O total por mercado usa instrumentos contratuais, quando esses instrumentos cumprem os critérios de qualidade da orientação. Uma compra não escolhe um vencedor e joga o outro total fora.',
      },
      {
        type: 'definition',
        term: 'Instrumento contratual',
        definition:
          'Um contrato ou certificado que carrega a taxa de emissão de gases de efeito estufa de uma quantidade definida de geração de energia. Certificados de atributo de energia, contratos de compra de energia que nomeiam a fonte e taxas específicas do fornecedor são os casos comuns. O instrumento é um insumo do método por mercado. Não é uma segunda localização.',
        glossaryId: 'market-based',
      },
      {
        type: 'grid',
        title: 'Critérios de qualidade na orientação de Escopo 2',
        items: [
          {
            title: 'Ele carrega a taxa de emissão',
            body: 'O instrumento transmite a taxa de emissão direta de gases de efeito estufa da geração que representa. Uma frase de marketing sem taxa não é um instrumento.',
          },
          {
            title: 'Ele é a única reivindicação',
            body: 'Essa mesma geração não é vendida de novo para outra pessoa. Duas empresas não podem aposentar o atributo do mesmo megawatt-hora.',
          },
          {
            title: 'Ele é aposentado para você',
            body: 'O instrumento é rastreado e resgatado, aposentado ou cancelado por você ou em seu nome. Um PDF de um certificado que ainda está à venda não conta.',
          },
          {
            title: 'Ele combina com o período',
            body: 'Ele é emitido e resgatado o mais perto possível do período da energia que você consumiu. Um certificado de um ano distante não cobre a conta deste ano.',
          },
          {
            title: 'Ele combina com o mercado',
            body: 'Ele vem do mesmo mercado das operações às quais você o aplica. Um certificado de uma rede da qual você não compra não cobre uma fábrica em outra rede.',
          },
        ],
      },
      {
        type: 'comparison',
        title: 'O que cada total pode usar',
        tabs: [
          {
            id: 'location',
            label: 'Por localização',
            body: 'Use o fator de emissão da rede onde o consumo acontece. Nos Estados Unidos, a eGRID da EPA é uma fonte comum dessas taxas. Um certificado não edita esse fator. O mix da rede continua sendo o mix da rede.',
          },
          {
            id: 'market',
            label: 'Por mercado',
            body: 'Use um instrumento contratual que cumpra os critérios de qualidade. A taxa de emissão do instrumento substitui o fator da rede só nessa linha. Você continua relatando a linha por localização ao lado dela.',
          },
          {
            id: 'residual',
            label: 'Sem instrumento',
            body: 'Se você não tem um instrumento que qualifique, use um mix residual onde ele for publicado. O mix residual é a rede depois que os certificados já reivindicados por outros compradores foram retirados. Usar a média comum da rede aqui pode contar eletricidade verde que outra pessoa já comprou. Onde não existe mix residual, a orientação permite um fator médio da rede como último recurso, e você divulga que o usou.',
          },
        ],
      },
      {
        type: 'callout',
        tone: 'caution',
        title: 'Um certificado não é um apagamento',
        body: 'Aposentar um certificado de energia renovável pode baixar o total por mercado. Não zera o total por localização, e não tira o Escopo 2 do inventário. Emissões a montante da energia ainda podem entrar na categoria 3 do Escopo 3. São outra linha.',
      },
      {
        type: 'example',
        title: 'Um escritório, um certificado, dois totais',
        context:
          'O escritório usa 1.000 kWh num ano. Esses 1.000 kWh são uma quantidade ilustrativa, escolhida para a unidade ficar óbvia, não uma leitura de medidor de um site real. A empresa aposenta certificados de 1.000 kWh de geração renovável no mesmo mercado e no mesmo ano, e os certificados cumprem os critérios de qualidade.',
        walkthrough:
          'A linha por localização ainda multiplica 1.000 kWh pelo fator da rede daquela região e daquele ano. A linha por mercado usa a taxa de emissão dos certificados. As duas linhas ficam no inventário, com o método nomeado em cada uma. Tirar a média das duas e fazer uma barra só joga fora o que a orientação pediu para mostrar.',
        technicalNote:
          'Guarde o método no cálculo, não como um marcador que esconde um resultado. O registro do certificado precisa do mercado, da safra, da quantidade e do identificador de aposentadoria. Sem isso, os critérios de qualidade não podem ser checados de novo.',
      },
      {
        type: 'quiz',
        quizId: 'scope-2-instruments-check',
        mode: 'check',
      },
      {
        type: 'takeaway',
        points: [
          'O Escopo 2 por localização segue a rede. O Escopo 2 por mercado segue instrumentos que qualificam.',
          'Um certificado precisa carregar a taxa, ser a única reivindicação, ser aposentado para você e combinar com o período e o mercado.',
          'Sem instrumento, o caminho é um mix residual onde ele existe, não uma reivindicação silenciosa da energia renovável de outra pessoa.',
          'Não faça a média dos dois totais, e não apague a linha por localização.',
        ],
      },
    ],
  },
  {
    id: 'scope-3-screening',
    courseId: 'carbon-accounting',
    title: 'Triagem de um inventário de Escopo 3',
    summary:
      'Uma triagem diz quais das 15 categorias merecem dado melhor. Ela não autoriza você a largar o resto sem dizer.',
    minutes: 12,
    objectives: [
      'Usar os testes de relevância do padrão de Escopo 3 para ordenar as categorias.',
      'Tratar uma estimativa de triagem como um mapa, não como o inventário final.',
      'Divulgar e justificar uma exclusão em vez de deixar a categoria em branco.',
    ],
    referenceIds: ['ghg-scope3'],
    quizIds: ['scope-3-screening-check'],
    blocks: [
      {
        type: 'paragraph',
        text: 'O padrão de Escopo 3 organiza as emissões da cadeia de valor em 15 categorias. Ele também manda contabilizar todas e divulgar e justificar qualquer exclusão. Você quase nunca tem dado primário das 15 no primeiro dia. Uma triagem é a primeira passada: uma estimativa grosseira que mostra onde as toneladas provavelmente estão, para o trabalho do ano seguinte ir até lá.',
      },
      {
        type: 'grid',
        title: 'Testes de relevância no padrão de Escopo 3',
        items: [
          { title: 'Tamanho', body: 'A categoria é uma fatia grande das emissões que você espera na cadeia de valor.' },
          { title: 'Influência', body: 'A empresa consegue mudar a atividade, ou consegue empurrar um fornecedor ou um cliente a mudá-la.' },
          { title: 'Risco', body: 'A categoria acrescenta risco ligado ao clima: custo, regulação, suprimento, clientes ou reputação.' },
          { title: 'Partes interessadas', body: 'Investidores, clientes ou outras pessoas já disseram que essa categoria importa para a decisão delas.' },
          {
            title: 'Terceirização',
            body: 'A atividade acontecia dentro da empresa, ou empresas deste setor em geral a fazem elas mesmas. Tirá-la do lado de dentro do muro não a faz sumir.',
          },
          { title: 'Orientação do setor', body: 'A orientação deste setor já aponta a categoria como significativa.' },
          {
            title: 'Outro',
            body: 'A empresa ou o setor tem um teste extra, e esta categoria passa nele. O teste extra está escrito. Não é um sentimento.',
          },
        ],
      },
      {
        type: 'steps',
        title: 'Para que serve uma triagem',
        steps: [
          {
            title: 'Estime de forma grosseira',
            body: 'Use gasto, quantidades que você já tem ou fatores médios do setor. Marque a estimativa como triagem. Um fator baseado em gasto serve para ordenar categorias. Serve mal para publicar uma tonelada final.',
          },
          {
            title: 'Ordene',
            body: 'Aplique os testes de relevância. Tamanho é o primeiro corte usual. Não é o único. Uma categoria pequena ainda pode ser relevante por risco, ou porque você acabou de terceirizá-la.',
          },
          {
            title: 'Gaste o próximo esforço onde os testes apontam',
            body: 'Dado de atividade melhor e fatores melhores vão para as categorias que passaram. A triagem diz por onde começar, para você não calcular as 15 com dado primário de uma vez.',
          },
          {
            title: 'Escreva o que você deixa de fora',
            body: 'Uma categoria excluída continua na conta como exclusão, com o motivo. Um branco não é exclusão. Um branco é uma linha faltando.',
          },
        ],
      },
      {
        type: 'callout',
        tone: 'distinction',
        title: 'Pequeno não é a mesma coisa que sumido',
        body: 'O Corporate Standard ainda trata o Escopo 3 como opcional. Quando você usa o padrão de Escopo 3, a expectativa é cobrir o que é relevante e divulgar o resto. Um regime de divulgação como o IFRS S2 ou o ESRS E1 pode exigir Escopo 3 nos termos dele. A triagem não reescreve nenhum dos dois documentos.',
      },
      {
        type: 'example',
        title: 'A primeira passada de um fabricante',
        context:
          'Uma empresa que fabrica equipamentos faz a triagem da cadeia de valor com gasto e algumas quantidades que já acompanha. O quadro abaixo é um esboço de ensino, não um conjunto de fatores e não o inventário desta empresa.',
        walkthrough:
          'O esboço põe a maior parte da estimativa na categoria 1, bens e serviços comprados, e na categoria 11, uso de produtos vendidos. A categoria 6, viagens a negócios, é visível e fácil de calcular, e é pequena perto dessas duas. A categoria 5, resíduos, é pequena e os dados são ruins. A triagem diz: junte dado melhor das categorias 1 e 11 primeiro. Calcule as viagens se o dado já existe, e não deixe a categoria fácil tomar o lugar das grandes. Para os resíduos, ou melhore o dado ou divulgue uma exclusão justificada. Apagar os resíduos porque a planilha irritava não é triagem. É um buraco.',
        technicalNote:
          'Guarde o resultado da triagem numa versão de cálculo própria. Quando uma categoria passa a usar dado específico do fornecedor, insira um cálculo novo. Não sobrescreva a triagem e depois descreva a mudança como redução.',
      },
      {
        type: 'quiz',
        quizId: 'scope-3-screening-check',
        mode: 'check',
      },
      {
        type: 'takeaway',
        points: [
          'A triagem ordena as 15 categorias. Ela não termina o inventário.',
          'Tamanho, influência, risco, partes interessadas, terceirização, orientação do setor e qualquer teste extra escrito são as checagens de relevância.',
          'Uma categoria que você não calcula é divulgada e justificada, ou não é uma exclusão.',
          'Uma estimativa baseada em gasto é um mapa. Diga isso quando mostrá-la.',
        ],
      },
    ],
  },
  {
    id: 'base-year-recalculation',
    courseId: 'carbon-accounting',
    title: 'Anos-base e recálculo',
    summary:
      'O ano-base é o ponto de comparação. Você o republica quando a comparação seria um truque. Você não o republica quando a empresa simplesmente emitiu mais.',
    minutes: 11,
    objectives: [
      'Escolher um ano-base porque o dado dele pode ser conferido.',
      'Republicá-lo diante de uma mudança estrutural, uma mudança de método ou de dado, ou um erro significativo.',
      'Deixá-lo no lugar quando o que houve foi crescimento ou queda orgânica.',
    ],
    referenceIds: ['ghg-corporate'],
    quizIds: ['base-year-check'],
    blocks: [
      {
        type: 'paragraph',
        text: 'Uma meta de gases de efeito estufa precisa de um ano para comparar. O Corporate Standard chama isso de ano-base. Você escolhe um ano, ou uma média curta de anos, para o qual tem dado de emissões que outra pessoa conseguiria verificar, e diz por que aquele ano. O número só serve se os anos seguintes forem contados do mesmo jeito.',
      },
      {
        type: 'definition',
        term: 'Ano-base',
        definition:
          'O ano histórico, ou a média de anos consecutivos, contra o qual os inventários seguintes são comparados. O Corporate Standard exige que a empresa escolha um e relate o porquê. Ele não escolhe o ano por você.',
      },
      {
        type: 'comparison',
        title: 'Quando o ano-base se mexe, e quando fica',
        description: 'O teste é se a comparação ainda descreve a mesma empresa e o mesmo método.',
        tabs: [
          {
            id: 'restate',
            label: 'Republicar',
            body: 'Recalcule o ano-base depois de uma mudança estrutural que cruza o limiar de significância da empresa: uma fusão, uma aquisição, uma venda, ou terceirização e internalização que movem atividade emissora através da fronteira. Recalcule também quando o método muda, quando dado de atividade melhor ou fatores melhores moveriam o ano-base de forma significativa, ou quando você acha um erro significativo. Quem lê precisa ver que o número antigo publicado foi refeito, e por quê.',
          },
          {
            id: 'keep',
            label: 'Manter',
            body: 'Não recalcule por crescimento ou queda orgânica. Isso inclui produzir mais ou menos, mudar o mix de produtos e abrir ou fechar operações que a empresa possui ou controla. Essas mudanças são a história das emissões. Apagá-las faz todo ano parecer o ano-base.',
          },
        ],
      },
      {
        type: 'callout',
        tone: 'note',
        title: 'O limiar é uma política, não um número do padrão',
        body: 'O Corporate Standard manda a empresa definir uma política de recálculo do ano-base e declarar qualquer limiar de significância que use. Ele não escolhe a porcentagem. Um limiar que você escolheu e divulgou é uma política. Uma porcentagem copiada de um blog e tratada como se fosse o padrão é uma citação que você não tem.',
      },
      {
        type: 'example',
        title: 'Uma fábrica comprada, e uma fábrica que ficou mais ocupada',
        context:
          'Duas coisas acontecem no mesmo ano. A empresa adquire uma fábrica que já operava no ano-base. À parte, os fornos que ela já possuía queimam mais gás porque os pedidos cresceram. O método e o conjunto de fatores não mudaram.',
        walkthrough:
          'A fábrica adquirida é uma mudança estrutural. Se ela cruza o limiar de significância da política da empresa, o ano-base é recalculado para a fábrica entrar nos dois anos. Senão o inventário parece mais limpo só porque o passado não tinha um site que o presente agora inclui. Os fornos mais ocupados são crescimento orgânico. O Escopo 1 sobe, e o ano-base fica. Essa subida é o desempenho. Relate os dois efeitos separados. Uma porcentagem que mistura um recálculo com um aumento real são duas histórias forçadas num número só.',
        technicalNote:
          'Um inventário publicado é imutável. Um recálculo é um cálculo novo sobre a atividade do ano-base, com a fronteira nova ou a versão nova do fator, ligado à cláusula da política que o disparou. O painel pode mostrar a série recalculada. Ele ainda precisa conseguir mostrar o que foi publicado originalmente.',
      },
      {
        type: 'quiz',
        quizId: 'base-year-check',
        mode: 'check',
      },
      {
        type: 'takeaway',
        points: [
          'Escolha um ano-base que você consiga verificar, e diga por que aquele ano.',
          'Republique-o por estrutura, método, qualidade do dado ou erro significativo, quando a mudança cruza o limiar que você divulgou.',
          'Não o republique porque a produção subiu ou caiu.',
          'O Corporate Standard não congela a porcentagem de significância. A sua política congela, em público.',
        ],
      },
    ],
  },
]
