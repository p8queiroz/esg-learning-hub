import type { Lesson } from '@/types/content'

export const carbonLessons: Lesson[] = [
  {
    id: 'ghg-inventory',
    courseId: 'carbon-accounting',
    title: 'What is a GHG inventory?',
    summary:
      'The five principles, the organizational boundary, and the sentence a result needs before anyone should trust the total.',
    minutes: 11,
    objectives: [
      'State the five GHG Protocol accounting principles.',
      'Name the three consolidation approaches and what they change.',
      'Describe an inventory so that another person could tell what was included.',
    ],
    referenceIds: ['ghg-corporate', 'iso-14064'],
    quizIds: [],
    blocks: [
      {
        type: 'paragraph',
        text: 'A greenhouse-gas inventory is the company’s account of its emissions for a period. Before any kilogram is multiplied, the GHG Protocol Corporate Standard asks for five qualities. They read like ethics. In a system, they are acceptance tests.',
      },
      {
        type: 'grid',
        title: 'Principles in the Corporate Standard',
        items: [
          { title: 'Relevance', body: 'The inventory serves the decisions of its users. A total that hides the operations people came to see has failed, even if the arithmetic is tidy.' },
          { title: 'Completeness', body: 'Account for all sources inside the chosen boundary. Exclusions are disclosed and justified, not dropped quietly.' },
          { title: 'Consistency', body: 'Methods stay comparable over time. When a method changes, the change is visible, and prior periods are recalculated when the standard says to.' },
          { title: 'Transparency', body: 'A reader can see the boundary, the factors, and the assumptions. Transparency is an audit trail, not a longer footnote.' },
          { title: 'Accuracy', body: 'Bias is reduced and uncertainty is not ignored. Accuracy is not the same thing as false precision. A factor quoted to six decimals is not accurate if it is the wrong grid.' },
        ],
      },
      {
        type: 'definition',
        term: 'Organizational boundary',
        definition:
          'The rule for which operations enter the inventory. The Corporate Standard offers equity share, financial control, and operational control. Pick one and apply it. Do not mix them by site because the mix produces a nicer chart.',
        glossaryId: 'organizational-boundary',
      },
      {
        type: 'comparison',
        title: 'The three consolidation approaches',
        tabs: [
          {
            id: 'equity',
            label: 'Equity share',
            body: 'Include emissions according to the company’s share of equity in the operation. A 40% stake brings 40% of that operation’s emissions into the inventory.',
          },
          {
            id: 'financial',
            label: 'Financial control',
            body: 'Include 100% of operations the company controls financially, in the sense the standard describes, and none of the operations it does not. The percentage of ownership is not the percentage of emissions.',
          },
          {
            id: 'operational',
            label: 'Operational control',
            body: 'Include 100% of operations the company or a subsidiary has the authority to introduce and implement operating policies for. This is the approach many operators choose, because it matches who can change the equipment.',
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'The operational boundary is the next cut: which sources inside those operations are counted, and in which scope. Scope 1 and Scope 2 are required by the Corporate Standard. Scope 3 is optional in that standard and is the subject of its own standard. The next lesson takes the scopes one at a time. ISO 14064-1 uses different category labels for some of the same physics. If a contract cites ISO, do not assume a GHG Protocol scope number maps onto an ISO category without reading both.',
      },
      {
        type: 'example',
        title: 'A joint venture and a quiet exclusion',
        context:
          'The company operates a joint venture. It owns 30% and runs the plant. Last year’s inventory included the plant in full. This year’s file drops it, and the corporate total falls.',
        walkthrough:
          'Under operational control, running the plant is a reason to include 100%. Under equity share, the figure would be 30%. Either approach can be legitimate. Changing approach between years without a disclosed restatement breaks consistency. Dropping the plant with no note breaks completeness and transparency. The lower total is not progress. It is a boundary edit.',
        technicalNote:
          'Model consolidation approach as inventory metadata, applied when operations are selected, not as a manual include flag that analysts flip per row. A row-level override can exist, but it should store a reason and show up in the exclusion log.',
      },
      {
        type: 'takeaway',
        points: [
          'Relevance, completeness, consistency, transparency, and accuracy are the Corporate Standard’s principles.',
          'Equity share, financial control, and operational control are different boundaries, not synonyms.',
          'A total without a boundary, a period, and a method is not an inventory.',
          'ISO 14064-1 is a related specification. It is a different document.',
        ],
      },
    ],
  },
  {
    id: 'scopes',
    courseId: 'carbon-accounting',
    title: 'Scope 1, Scope 2, and Scope 3',
    summary:
      'Where an emission sits depends on ownership and control, not on how guilty the activity feels. Scope 2 has two methods. Scope 3 has 15 categories.',
    minutes: 14,
    objectives: [
      'Classify combustion, purchased energy, and value-chain activity into the right scope.',
      'Explain why Scope 2 is reported two ways.',
      'Describe what the Corporate Standard requires and what the Scope 3 Standard adds.',
    ],
    referenceIds: ['ghg-corporate', 'ghg-scope2', 'ghg-scope3'],
    quizIds: ['scopes-quiz'],
    blocks: [
      {
        type: 'paragraph',
        text: 'Scopes stop a company from counting the same tonne in the same way as every supplier and customer, and they stop it from ignoring tonnes it does cause. The test is mostly about the organizational boundary you already chose. Who owns or controls the source?',
      },
      {
        type: 'diagram',
        diagram: 'scopes',
      },
      {
        type: 'definition',
        term: 'Scope 1',
        definition: 'Direct emissions from sources the organization owns or controls. Boilers, furnaces, vehicles, and process equipment it operates are the usual cases.',
        glossaryId: 'scope-1',
      },
      {
        type: 'definition',
        term: 'Scope 2',
        definition: 'Indirect emissions from the generation of purchased electricity, steam, heating, or cooling consumed by the organization.',
        glossaryId: 'scope-2',
      },
      {
        type: 'definition',
        term: 'Scope 3',
        definition: 'Other indirect emissions in the value chain. The Scope 3 Standard organizes them into 15 categories.',
        glossaryId: 'scope-3',
      },
      {
        type: 'comparison',
        title: 'Scope 2 is two totals, not a toggle',
        description: 'The 2015 Scope 2 Guidance asks companies to report both methods.',
        tabs: [
          {
            id: 'location',
            label: 'Location-based',
            body: 'Use the emission factor of the grid where the electricity is consumed. In the United States, EPA eGRID publishes those rates. A contract for renewable electricity does not change this total. The grid is still the grid.',
          },
          {
            id: 'market',
            label: 'Market-based',
            body: 'Reflect contractual instruments: supplier-specific factors, energy attribute certificates, and residual mixes, if they meet the quality criteria in the Guidance. A certificate is an input to this method. It is not a reason to delete the location-based line.',
          },
        ],
      },
      {
        type: 'grid',
        title: 'Scope 3, upstream',
        items: [
          { title: '1. Purchased goods and services', body: 'Extraction, production, and transport of goods and services bought in the year, not otherwise in another upstream category.' },
          { title: '2. Capital goods', body: 'The same idea, for capital goods rather than goods bought and consumed in the year.' },
          { title: '3. Fuel- and energy-related', body: 'Upstream emissions of fuels and energy purchased, and transmission losses, that are not already in Scope 1 or Scope 2.' },
          { title: '4. Upstream transportation', body: 'Transport and distribution of purchased products, in vehicles the company does not own or control.' },
          { title: '5. Waste in operations', body: 'Disposal and treatment of waste generated in operations, by parties outside the company’s ownership or control.' },
          { title: '6. Business travel', body: 'Transportation of employees for business, in vehicles the company does not own or control.' },
          { title: '7. Employee commuting', body: 'Travel between home and worksites, in vehicles the company does not own or control.' },
          { title: '8. Upstream leased assets', body: 'Operation of assets leased by the company, when those emissions are not already in Scope 1 or Scope 2.' },
        ],
      },
      {
        type: 'grid',
        title: 'Scope 3, downstream',
        items: [
          { title: '9. Downstream transportation', body: 'Transport of sold products in vehicles the company does not own or control.' },
          { title: '10. Processing of sold products', body: 'Processing of intermediate products by third parties, after sale.' },
          { title: '11. Use of sold products', body: 'Use of goods and services the company sold. For fuel and vehicle makers this category can dominate the inventory.' },
          { title: '12. End-of-life of sold products', body: 'Disposal and treatment of products at the end of use.' },
          { title: '13. Downstream leased assets', body: 'Operation of assets the company owns and leases to others, when those emissions are not in Scope 1 or Scope 2.' },
          { title: '14. Franchises', body: 'Operation of franchises, when not already included in Scope 1 or Scope 2.' },
          { title: '15. Investments', body: 'Operation of investments, including equity and debt, when not already included. Financial institutions spend their time here.' },
        ],
      },
      {
        type: 'callout',
        tone: 'distinction',
        title: 'Optional in one document, required in another',
        body: 'The Corporate Standard requires Scope 1 and Scope 2. Scope 3 is optional there. The Scope 3 Standard is the method a company uses when it does prepare a value-chain inventory: cover what is relevant, and disclose exclusions. IFRS S2 and ESRS E1 can require Scope 3 disclosures of companies that apply them. The requirement then comes from the disclosure standard, not from a silent amendment of the Corporate Standard.',
      },
      {
        type: 'example',
        title: 'One company, three lines, no double count inside the boundary',
        context: 'A food company operates ovens, buys electricity, and sends employees on commercial flights.',
        walkthrough:
          'Gas in the ovens is Scope 1. Generation of the purchased electricity is Scope 2, reported location-based and market-based. The flights are Scope 3 category 6, because the airline controls the aircraft. Upstream production of the gas can also be estimated in category 3. That upstream line does not replace the Scope 1 combustion line. They are different parts of the fuel’s life.',
      },
      {
        type: 'quiz',
        quizId: 'scopes-quiz',
        mode: 'quiz',
      },
      {
        type: 'takeaway',
        points: [
          'Scope follows ownership and control, not the moral weight of the activity.',
          'Scope 2 has a location-based total and a market-based total.',
          'The 15 Scope 3 categories are a classification, not a demand that every category is large.',
          'Check the disclosure regime before you tell a user that Scope 3 is optional for them.',
        ],
      },
    ],
  },
  {
    id: 'activity-and-factors',
    courseId: 'carbon-accounting',
    title: 'Activity data, emission factors, and the calculation',
    summary:
      'The equation is short. The unit rule and the citation are the parts people skip, and the parts software has to refuse to skip.',
    minutes: 12,
    objectives: [
      'Distinguish activity data from an emission factor and from a result.',
      'Reject a calculation whose units do not cancel.',
      'Use the illustrative calculator without mistaking its factors for published values.',
    ],
    referenceIds: ['ghg-corporate', 'epa-hub', 'egrid', 'ipcc-ar6'],
    quizIds: ['units-check'],
    blocks: [
      {
        type: 'paragraph',
        text: 'Every line in an inventory is the same shape. A measure of activity, times a factor that represents how much greenhouse gas that activity emits, gives a mass of gas or of CO₂e. The shape is simple so that the exceptions stay visible.',
      },
      {
        type: 'definition',
        term: 'Activity data',
        definition: 'A quantity of activity: liters burned, kilowatt-hours consumed, tonne-kilometers moved, kilograms of refrigerant topped up.',
        glossaryId: 'activity-data',
      },
      {
        type: 'definition',
        term: 'Emission factor',
        definition:
          'The emissions per unit of that activity, with a source, a geography, a period, and a numerator that is either a gas or CO₂e.',
        glossaryId: 'emission-factor',
      },
      {
        type: 'steps',
        title: 'Before you multiply',
        steps: [
          {
            title: 'Read the activity unit',
            body: 'The invoice says liters, or kilowatt-hours, or miles. Keep the original quantity. Conversions belong in a recorded step, not in someone’s head.',
          },
          {
            title: 'Read the factor’s denominator',
            body: 'A factor per liter can meet liters. A factor per gallon cannot, until you convert and store the conversion.',
          },
          {
            title: 'Read the factor’s numerator',
            body: 'If it says kg CH₄, you still need the inventory’s GWP to report CO₂e. If it says kg CO₂e, the publisher already chose a GWP. Do not choose a second one.',
          },
          {
            title: 'Read the citation',
            body: 'EPA’s Emission Factors Hub, eGRID, a national inventory agency, a supplier letter, or an IPCC factor database. “Industry average” is not a citation.',
          },
        ],
      },
      {
        type: 'callout',
        tone: 'caution',
        title: 'The calculator uses fictional factors',
        body: 'The numbers 0.40 kg CO₂e/kWh, 0.20 kg CO₂e/km, and 2.50 kg CO₂e/L are round teaching values. They are not EPA, DEFRA, IPCC, or eGRID factors. Do not copy them into a report. Official factors are revised, they differ by region and year, and they have to be cited at the version you used.',
      },
      {
        type: 'calculator',
      },
      {
        type: 'example',
        title: 'A factor that is already CO₂e',
        context: 'An analyst takes a grid factor published as 0.386 kg CO₂e per kWh and multiplies the result by 29.8, because methane was mentioned in a training.',
        walkthrough:
          'The publisher has already folded the grid’s gas mix and a GWP set into the CO₂e factor. Multiplying by methane’s GWP again invents a result with no physical meaning. If you need the underlying CO₂, CH₄, and N₂O masses, you need a factor that publishes those gases, plus the GWP set the inventory adopted.',
      },
      {
        type: 'quiz',
        quizId: 'units-check',
        mode: 'check',
      },
      {
        type: 'takeaway',
        points: [
          'Activity data is the quantity. The factor is emissions per unit of that quantity.',
          'Units have to cancel. Conversions are data, not folklore.',
          'Apply a GWP only when the factor is still in gas mass.',
          'Illustrative factors on this site are labeled because fictional precision is a kind of false citation.',
        ],
      },
    ],
  },
  {
    id: 'data-quality',
    courseId: 'carbon-accounting',
    title: 'Data quality and auditability',
    summary:
      'What a reviewer traces, what the software must still have two years later, and how a lower total can be a worse inventory.',
    minutes: 10,
    objectives: [
      'Connect the five principles to checks a system can perform.',
      'List the records required to reproduce a single emission line.',
      'Tell a broken trail from a complete one.',
    ],
    referenceIds: ['ghg-corporate', 'iso-14064'],
    quizIds: [],
    blocks: [
      {
        type: 'paragraph',
        text: 'Data quality in a greenhouse-gas inventory is not a score from 1 to 5 pasted onto a slide. It is the ability of someone who was not in the room to reproduce the total, see what was left out, and tell a method change from an operational change. The Corporate Standard’s principles are the checklist. Assurance engagements and ISO 14064-1 add their own evidence expectations. Retention periods come from the program or the law, not from a universal “seven years” that this lesson will not invent.',
      },
      {
        type: 'steps',
        title: 'What a reviewer follows',
        steps: [
          {
            title: 'The activity',
            body: 'Which source document, which quantity, which unit, which period, which site. A typed number with no document is a claim.',
          },
          {
            title: 'The factor',
            body: 'Which publication, which version or year, which region, which unit, whether the numerator is gas or CO₂e. A link that rots is a weaker trail than a stored citation and a copy of the value used.',
          },
          {
            title: 'The method',
            body: 'Consolidation approach, scopes included, Scope 2 methods, GWP set, and any exclusion with its reason.',
          },
          {
            title: 'The arithmetic',
            body: 'The expression, not only the rounded total. Rounding policy included.',
          },
          {
            title: 'The approval',
            body: 'Who accepted the line, and when. An overwritten cell has no approval. It has a latest editor.',
          },
        ],
      },
      {
        type: 'comparison',
        title: 'Two ways the same 400 kg can be stored',
        tabs: [
          {
            id: 'broken',
            label: 'Broken trail',
            body: 'A cell contains 400. The header says “emissions.” Nobody can tell whether the activity was 1,000 kWh or 800, whether the factor was grid or supplier, or whether the 400 is kilograms or pounds. Next year the cell is 360 and the chart is titled “reduction.”',
          },
          {
            id: 'complete',
            label: 'Complete trail',
            body: 'The line stores 1,000 kWh, the invoice id, the factor id and version, 0.40 only if that was truly the published value, the unit kg CO₂e, the Scope 2 method, the GWP set if it was applied here, the formula, and the approval. A later edit inserts a new calculation. It does not paint over the old one.',
          },
        ],
      },
      {
        type: 'callout',
        tone: 'note',
        title: 'Primary data is not automatically better',
        body: 'A meter reading is primary activity data and is usually what you want. A supplier-specific factor can be better than a generic one, or it can be a marketing PDF with no method. Quality is about whether the evidence supports the number, not about a slogan that primary always wins. The GHG Protocol discusses data quality in the Scope 3 Standard at more length. A later lesson can go there. The rule for this course is: keep the evidence attached to the line.',
      },
      {
        type: 'example',
        title: 'The total fell because the factor was swapped',
        context: 'Scope 2 drops 18% year over year. Operations reports that output and electricity use were flat.',
        walkthrough:
          'If activity is flat, an 18% decline is a factor change, a method change, or a missing site. The honest system shows the factor version beside the result. The dishonest one, or merely the careless one, publishes the decline as performance. Consistency means you can tell those stories apart. When the method itself changes, the standard often wants a restated base year, not a victory lap.',
        technicalNote:
          'The engineering lesson on modeling treats a used factor version as immutable. This lesson is the accounting reason for that constraint. Auditability is not a logging framework added at the end. It is the shape of the record.',
      },
      {
        type: 'takeaway',
        points: [
          'A reviewer needs the activity, the factor version, the method, the expression, and the approval.',
          'A lower total is not quality. A reproducible total is.',
          'Do not overwrite a published line. Append a new calculation.',
          'Retention rules are program-specific. Store the trail. Look up how long that program says to keep it.',
        ],
      },
    ],
  },
]
