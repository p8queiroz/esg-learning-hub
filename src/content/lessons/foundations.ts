import type { Lesson } from '@/types/content'

export const foundationLessons: Lesson[] = [
  {
    id: 'what-is-sustainability',
    courseId: 'foundations',
    title: 'What is sustainability?',
    summary:
      'A working definition, and a map of the four different jobs people give the word: science, policy, accounting, and disclosure.',
    minutes: 9,
    objectives: [
      'Restate the Brundtland idea of sustainable development in plain language.',
      'Separate science, policy, greenhouse-gas accounting, and disclosure.',
      'State the Paris Agreement temperature goal without treating it as a calculation rule.',
    ],
    referenceIds: ['brundtland', 'paris', 'ipcc-ar6'],
    quizIds: [],
    blocks: [
      {
        type: 'paragraph',
        text: 'Sustainability, in the sense this curriculum uses, is about whether people can meet their needs now without closing off the ability of other people, later, to meet theirs. The 1987 Brundtland report put it in one sentence: development that meets the needs of the present without compromising the ability of future generations to meet their own needs.',
      },
      {
        type: 'definition',
        term: 'Sustainable development',
        definition:
          'Development that meets the needs of the present without compromising the ability of future generations to meet their own needs. That is a policy idea from the Brundtland report. It does not specify a formula, a reporting template, or a software architecture.',
      },
      {
        type: 'paragraph',
        text: 'The trouble starts when one word is asked to do four jobs at once. A climate scientist, a treaty negotiator, an inventory accountant, and a disclosure lawyer can all say “sustainability” in the same meeting and be talking about different artifacts.',
      },
      {
        type: 'concepts',
        items: [
          {
            title: 'Describe conditions',
            body: 'Science describes the state of the climate and other environmental systems. The IPCC assesses that science. It does not run a company’s ledger.',
          },
          {
            title: 'Set goals',
            body: 'Governments set goals in treaties and laws. The Paris Agreement is the central climate treaty. A goal is not an emission factor.',
          },
          {
            title: 'Count',
            body: 'Greenhouse-gas accounting turns activity into a structured inventory. The GHG Protocol and ISO 14064-1 are methodologies for that count.',
          },
          {
            title: 'Disclose',
            body: 'Reporting standards say what a company publishes, to whom, and on which definition of materiality. GRI, the ISSB standards, and the ESRS do not all ask the same question.',
          },
        ],
      },
      {
        type: 'callout',
        tone: 'distinction',
        title: 'Related does not mean interchangeable',
        body: 'Sustainability is the broad idea. ESG is a grouping used mostly in business and finance. Carbon accounting is the inventory. A sustainability report is a disclosure. Keep the nouns precise in the product, or the data model will collapse four workflows into one field.',
      },
      {
        type: 'comparison',
        title: 'Four sources that often get stacked',
        description: 'Each tab is a different kind of authority. None of them replaces the others.',
        tabs: [
          {
            id: 'science',
            label: 'IPCC',
            body: 'The Intergovernmental Panel on Climate Change assesses physical climate science and mitigation pathways. Its global warming potentials are scientific indices. An accounting program may adopt a particular IPCC table. The table is not, by itself, the accounting program.',
          },
          {
            id: 'policy',
            label: 'Paris Agreement',
            body: 'The Paris Agreement was adopted in 2015 under the UNFCCC and entered into force in 2016. It aims to hold the increase in the global average temperature to well below 2°C above pre-industrial levels and to pursue efforts to limit the increase to 1.5°C. Countries communicate nationally determined contributions. The treaty does not tell an engineer which emission factor to multiply.',
          },
          {
            id: 'method',
            label: 'GHG Protocol',
            body: 'The GHG Protocol Corporate Standard is a voluntary accounting method for organizational inventories. It tells you how to set a boundary and how to classify Scope 1 and Scope 2. It is not a disclosure law.',
          },
          {
            id: 'disclosure',
            label: 'Disclosure rules',
            body: 'GRI, IFRS S1 and S2, and the ESRS specify what gets reported. A statute such as the CSRD can make a disclosure regime mandatory for companies in its scope. Whether a given company is in that scope is a legal question, and the legal text has kept moving. Do not freeze a 2022 threshold in code and call it current.',
          },
        ],
      },
      {
        type: 'example',
        title: '“Aligned with Paris” is not a specification',
        context:
          'A product manager says the new module must make customers “aligned with Paris.” Engineering is asked to estimate the work.',
        walkthrough:
          'The sentence names a policy goal. It does not choose an organizational boundary, a global-warming-potential set, a Scope 2 method, or a disclosure standard. Those choices change the data you store. Ask which document the customer has to follow, and which edition. Then map that document to inventory settings, not to a boolean named parisAligned.',
        technicalNote:
          'A boolean collapses a set of methodological choices into a marketing state. Store the choices. Derive the label, if you need one, from those choices and from the framework that defines the label.',
      },
      {
        type: 'takeaway',
        title: 'Hold onto this',
        points: [
          'The Brundtland sentence is a definition of sustainable development, not a calculation.',
          'Science, treaties, accounting methods, and disclosure standards are different authorities.',
          'The Paris temperature goal explains why inventories exist. It does not calculate one.',
          'A dedicated lesson on the Paris Agreement’s machinery is planned. This lesson only fixes the goal in place.',
        ],
      },
    ],
  },
  {
    id: 'what-is-esg',
    courseId: 'foundations',
    title: 'What is ESG?',
    summary:
      'Where the acronym came from, what the three pillars usually cover, and why an ESG score is not an inventory.',
    minutes: 11,
    objectives: [
      'Describe ESG as a grouping of topics, not as a single standard.',
      'Give a concrete example under each pillar without treating the examples as a closed list.',
      'Distinguish GRI’s impact lens from the ISSB’s financial lens, and name double materiality as the ESRS approach.',
    ],
    referenceIds: ['gri', 'ifrs-s1', 'ifrs-s2', 'esrs', 'csrd'],
    quizIds: [],
    blocks: [
      {
        type: 'paragraph',
        text: 'ESG stands for environmental, social, and governance. It is a way of grouping information about how an organization depends on the world and how it affects the world. The acronym became common in finance after Who Cares Wins (2004), a report by financial institutions invited by the UN Global Compact. The report did not invent climate science, labor rights, or board duties. It argued that those topics were relevant to investment analysis.',
      },
      {
        type: 'diagram',
        diagram: 'pillars',
      },
      {
        type: 'callout',
        tone: 'caution',
        title: 'Examples are not a taxonomy',
        body: 'The items under each pillar are illustrations. GRI, the ESRS, and IFRS S2 each publish their own topic lists, and those lists do not match line for line. Do not treat this diagram as an official control framework.',
      },
      {
        type: 'paragraph',
        text: 'There is no single ESG standard. A company can prepare a greenhouse-gas inventory with the GHG Protocol, report impacts with GRI, and report climate-related financial information with IFRS S2. A law can make one of those disclosures mandatory. The CSRD is the EU directive that brought the ESRS into corporate reporting. Who must report, and when, has to be read from the legal text in force. This project will not invent that list.',
      },
      {
        type: 'comparison',
        title: 'The same word, three tests of what matters',
        description: 'Materiality is the decision of what is important enough to report. The test is not shared.',
        tabs: [
          {
            id: 'gri',
            label: 'GRI',
            body: 'The GRI Universal Standards (2021) center on an organization’s most significant impacts on the economy, environment, and people, including human rights. A topic can matter here because the impact is significant, even when the financial effect on the company is still uncertain.',
          },
          {
            id: 'issb',
            label: 'ISSB',
            body: 'IFRS S1, issued in June 2023, asks for sustainability-related risks and opportunities that could reasonably be expected to affect the entity’s prospects. That is a financial materiality test. IFRS S2 applies it to climate. Jurisdictions decide whether to adopt the standards. The standards’ own effective date is annual periods beginning on or after 1 January 2024.',
          },
          {
            id: 'esrs',
            label: 'ESRS',
            body: 'The European standards adopted in Delegated Regulation (EU) 2023/2772 use double materiality, set out in ESRS 1. A topic is in scope when it is material as an impact, or as a financial matter, or both. That is a different gate from either GRI or IFRS S1 alone.',
          },
        ],
      },
      {
        type: 'definition',
        term: 'Materiality',
        definition:
          'The judgment of what is important enough to include. Always ask which regime’s test is being applied. The bare word does not say.',
        glossaryId: 'materiality',
      },
      {
        type: 'example',
        title: 'Do not store an ESG score as if it were an inventory',
        context:
          'A customer asks for an ESG score on the company dashboard, next to Scope 1 emissions.',
        walkthrough:
          'A score from a rating agency is that agency’s opinion, built with its own method and its own date. A Scope 1 total is the company’s inventory result under a stated method. They can sit on the same screen. They should not sit in the same column, and the score should not be editable as if the sustainability team had calculated it from activity data.',
        technicalNote:
          'Persist the rater, the method version, the as-of date, and the raw value. Keep it out of the calculation lineage. A reviewer who traces a tonne of CO₂e should never land on a vendor’s letter grade.',
      },
      {
        type: 'takeaway',
        points: [
          'ESG is a grouping used in business and finance. It is not a calculation standard.',
          'GRI, the ISSB standards, and the ESRS ask different materiality questions.',
          'Double materiality is the ESRS term for considering both impact and financial materiality.',
          'A rating is an opinion product. An inventory is an account. Store them apart.',
        ],
      },
    ],
  },
  {
    id: 'greenhouse-gases',
    courseId: 'foundations',
    title: 'Greenhouse gases and CO₂e',
    summary:
      'Which gases corporate inventories usually count, what a global warming potential is, and why two correct inventories can print two different CO₂e totals.',
    minutes: 12,
    objectives: [
      'Explain why inventories convert gases into CO₂e.',
      'Name the gases commonly included in Kyoto-based corporate inventories.',
      'Show how the choice of IPCC assessment and time horizon changes a methane result.',
    ],
    referenceIds: ['ipcc-ar6', 'ghg-corporate'],
    quizIds: ['ghg-co2e-check'],
    blocks: [
      {
        type: 'paragraph',
        text: 'A greenhouse gas absorbs infrared radiation that would otherwise leave the Earth and re-emits it, warming the surface. The IPCC assesses that physics. A corporate inventory does not measure radiative forcing at a site. It counts masses of specified gases and, when the report needs a single total, converts those masses into carbon dioxide equivalent.',
      },
      {
        type: 'definition',
        term: 'CO₂e',
        definition:
          'The mass of carbon dioxide that would have a comparable warming effect to a given mass of another gas, over a stated time horizon, using a stated set of global warming potentials.',
        glossaryId: 'co2e',
      },
      {
        type: 'definition',
        term: 'Global warming potential',
        definition:
          'The ratio of the warming effect of one mass unit of a gas to one mass unit of CO₂, over a chosen horizon. Change the horizon, or the IPCC report, and the ratio changes.',
        glossaryId: 'gwp',
      },
      {
        type: 'grid',
        title: 'Gases commonly included in corporate inventories',
        items: [
          { title: 'CO₂', body: 'Carbon dioxide. The reference gas, so its GWP is 1. Most fossil combustion shows up here.' },
          { title: 'CH₄', body: 'Methane. Shorter-lived than CO₂, so its 20-year GWP is much higher than its 100-year GWP. Fossil and non-fossil methane are not given the same AR6 value.' },
          { title: 'N₂O', body: 'Nitrous oxide. Important for some industrial processes and for agriculture. Its 100-year GWP is in the hundreds.' },
          { title: 'HFCs', body: 'Hydrofluorocarbons. Fluorinated gases used as refrigerants. Each species has its own GWP.' },
          { title: 'PFCs', body: 'Perfluorocarbons. Long-lived fluorinated gases from some industrial processes.' },
          { title: 'SF₆', body: 'Sulfur hexafluoride. Used in electrical equipment. Very high GWP per kilogram.' },
          { title: 'NF₃', body: 'Nitrogen trifluoride. Used in electronics manufacturing. Included in later Kyoto accounting. Confirm the gas list in the program you are applying.' },
        ],
      },
      {
        type: 'callout',
        tone: 'note',
        title: 'The gas list is a choice of the program',
        body: 'The IPCC discusses more species than a corporate inventory counts. The GHG Protocol corporate inventories were built around the Kyoto gases. If a program’s gas list differs, follow the program. Do not silently add or drop a gas because a blog listed seven.',
      },
      {
        type: 'paragraph',
        text: 'IPCC Sixth Assessment Report, Working Group I, Table 7.15, gives these 100-year global warming potentials: 1 for CO₂, 29.8 for fossil methane, 27.2 for non-fossil methane, and 273 for nitrous oxide. The same chapter publishes other horizons. Earlier assessments are still in active use. AR4 used 25 for methane and 298 for nitrous oxide. AR5 used 28 for methane and 265 for nitrous oxide. A faithful inventory names the set.',
      },
      {
        type: 'example',
        title: 'Two correct methane totals',
        context: 'A site reports 2 tonnes of fossil methane from a process vent. Finance asks why last year’s file showed 50 and this year’s draft shows 59.6.',
        walkthrough:
          '2 × 25 = 50, which is the AR4 100-year value. 2 × 29.8 = 59.6, which is the AR6 fossil 100-year value. Neither multiplication is an arithmetic error. They are different methodological choices. The inventory is comparable year to year only if the GWP set is held constant, or if the change is disclosed and the prior year is recalculated when the standard requires it.',
        technicalNote:
          'Store gwpSet on the calculation, not as a comment in a spreadsheet tab. A result row that says only “59.6 t CO₂e” cannot be reproduced. A result row that points at gas mass, GWP source, horizon, and assessment can.',
      },
      {
        type: 'callout',
        tone: 'caution',
        title: 'Never apply a GWP twice',
        body: 'Some published factors are already in kg CO₂e. Multiplying those by a methane or nitrous-oxide GWP again is a unit error, not conservatism. Read the factor’s numerator before you convert.',
      },
      {
        type: 'quiz',
        quizId: 'ghg-co2e-check',
        mode: 'check',
      },
      {
        type: 'takeaway',
        points: [
          'Inventories count masses of specified gases. CO₂e is a conversion, not a separate gas.',
          'The GWP depends on the IPCC assessment and the time horizon.',
          'AR4, AR5, and AR6 values for methane are different. The software must remember which one it used.',
          'A factor already expressed as CO₂e is not multiplied by a GWP again.',
        ],
      },
    ],
  },
  {
    id: 'intro-to-carbon-accounting',
    courseId: 'foundations',
    title: 'Introduction to carbon accounting',
    summary:
      'What a corporate greenhouse-gas inventory is, the shape of the basic equation, and why the work turns into software.',
    minutes: 10,
    objectives: [
      'Define a corporate GHG inventory without confusing it with a target or a report.',
      'Write the activity-data equation and name the unit rule.',
      'Explain why a result needs a trail if someone will rely on it later.',
    ],
    referenceIds: ['ghg-corporate', 'epa-hub', 'egrid', 'iso-14064'],
    quizIds: [],
    blocks: [
      {
        type: 'paragraph',
        text: 'Carbon accounting, in the corporate sense used here, means preparing a greenhouse-gas inventory. An inventory is an account of emissions attributable to an organization for a period, under a stated boundary and a stated method. It is not a net-zero pledge, not a carbon-neutral logo, and not the sustainability report that may later quote the inventory.',
      },
      {
        type: 'definition',
        term: 'GHG inventory',
        definition:
          'The account of emissions for a stated organization, period, boundary, and methodology. ISO 14064-1 is a separate international specification for organizational inventories. It overlaps the GHG Protocol and it is not the same text.',
        glossaryId: 'ghg-inventory',
      },
      {
        type: 'diagram',
        diagram: 'calculation',
      },
      {
        type: 'steps',
        title: 'The calculation, without the folklore',
        steps: [
          {
            title: 'Fix the inventory',
            body: 'Who is included, which operations, which period, which gases, which GWP set. The GHG Protocol calls the “who” decision the organizational boundary. The next course spends a lesson on it.',
          },
          {
            title: 'Collect activity data',
            body: 'Liters, kilowatt-hours, tonnes, kilometers. The quantity is not yet an emission. It is a measure of activity.',
          },
          {
            title: 'Choose a matching factor',
            body: 'The factor’s activity unit must be the unit of the data. Its numerator must say whether it is a specific gas or already CO₂e, and its citation must be something a reviewer can open.',
          },
          {
            title: 'Multiply, then stop',
            body: 'Activity × factor. Convert to CO₂e only when the factor is still in gas mass. Keep the arithmetic boring and the metadata rich.',
          },
          {
            title: 'Keep the trail',
            body: 'Source document, factor version, method choices, and the person or job that approved the line. A number without that trail cannot be audited.',
          },
        ],
      },
      {
        type: 'example',
        title: 'An illustrative electricity line',
        context: 'A plant used 1,000 kWh. Someone multiplies by 0.40 and types 400 into a slide.',
        walkthrough:
          '1,000 kWh × 0.40 kg CO₂e/kWh = 400 kg CO₂e. The arithmetic is fine. The factor is not. 0.40 is a round teaching number chosen so the units are obvious. A real location-based inventory uses a published grid factor for the right region and year. In the United States, EPA eGRID is a common source. A supplier-specific factor belongs in the market-based method, under the Scope 2 Guidance, not as a silent replacement for the grid factor.',
        technicalNote:
          'The calculator later in the carbon-accounting course uses the same illustrative 0.40 so you can move the inputs. It is labeled as fiction. Do not copy it into an inventory.',
      },
      {
        type: 'callout',
        tone: 'distinction',
        title: 'Why this becomes a system',
        body: 'One plant and one factor fit on a whiteboard. A company has many sites, many fuels, factors that are revised every year, unit mismatches, restatements, and a reviewer who arrives long after the analyst has left. The inventory is a set of reproducible records. The rest of this curriculum is about making those records honest, first as accounting and then as software.',
      },
      {
        type: 'takeaway',
        points: [
          'An inventory is an account for a stated boundary, period, and method.',
          'Emissions = activity data × emission factor, with units that cancel.',
          'Official factors come from published sources and are year-specific. This site does not reprint them.',
          'The next course opens the inventory. The engineering course opens the system around it.',
        ],
      },
    ],
  },
]
