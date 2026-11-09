import type { Quiz } from '@/types/content'

export const quizzes: Quiz[] = [
  {
    id: 'ghg-co2e-check',
    title: 'Check: when is a result CO₂e?',
    description: 'One question on the difference between a mass of methane and a CO₂e result.',
    questions: [
      {
        id: 'gwp-needed',
        prompt:
          'An activity factor is 0.2 kg of fossil methane per unit. The inventory reports in CO₂e. What else do you need before you can state the CO₂e result?',
        choices: [
          { id: 'nothing', label: 'Nothing. A mass of methane is already CO₂e.' },
          {
            id: 'gwp',
            label: 'The global warming potential specified by the inventory for that methane, including the assessment and time horizon.',
          },
          { id: 'revenue', label: 'The company’s revenue, so the result can be normalized.' },
          { id: 'credit', label: 'A carbon credit that retires the methane.' },
        ],
        correctChoiceId: 'gwp',
        explanation:
          'CO₂e is a converted unit. You multiply the mass of a gas by the global warming potential the inventory has adopted. IPCC AR6 gives a 100-year GWP of 29.8 for fossil methane, but many programs still require an AR4 or AR5 value. A factor that is already published as kg CO₂e must not be multiplied by a GWP again.',
      },
    ],
  },
  {
    id: 'units-check',
    title: 'Check: units in the equation',
    description: 'One question on multiplying activity data by an emission factor.',
    questions: [
      {
        id: 'unit-match',
        prompt:
          'A row records 500 liters of diesel. The illustrative factor is 2.7 kg CO₂e per liter. Which statement is right?',
        choices: [
          { id: 'drop-units', label: 'The result is 500 kg CO₂e. The liters do not matter.' },
          {
            id: 'match',
            label: '500 L × 2.7 kg CO₂e/L = 1,350 kg CO₂e, and only because the factor uses the same activity unit.',
          },
          {
            id: 'gwp-again',
            label: 'Multiply by a GWP again, because the factor already says CO₂e.',
          },
          {
            id: 'per-km',
            label: 'Apply a per-kilometer factor directly. Volume and distance are close enough.',
          },
        ],
        correctChoiceId: 'match',
        explanation:
          'The activity unit has to cancel with the denominator of the factor. 2.7 kg CO₂e per liter is an illustrative teaching number, not an EPA or DEFRA factor. If the published factor is already in CO₂e, do not apply a global warming potential a second time. A distance-based factor needs distance, or an explicit conversion that you also store.',
      },
    ],
  },
  {
    id: 'scopes-quiz',
    title: 'Quiz: place each emission',
    description: 'Four questions on Scope 1, Scope 2, and Scope 3. The GHG Protocol is the reference, not a national law.',
    questions: [
      {
        id: 'boiler',
        prompt: 'A company burns natural gas in a boiler it operates. Where does that combustion belong in a GHG Protocol inventory?',
        choices: [
          { id: 's1', label: 'Scope 1' },
          { id: 's2', label: 'Scope 2' },
          { id: 's3', label: 'Scope 3, category 3, fuel- and energy-related activities' },
          { id: 'none', label: 'Outside the inventory, because the gas was purchased' },
        ],
        correctChoiceId: 's1',
        explanation:
          'Combustion in equipment the company owns or controls is a direct emission: Scope 1. The purchase of the fuel can also have an upstream extraction and transport component. That upstream piece, if reported, is Scope 3 category 3, and it is additional to the combustion, not a replacement for it.',
      },
      {
        id: 'electricity',
        prompt: 'The same company buys electricity from a utility for its own offices. The offices are inside the organizational boundary. Where does the generation of that electricity belong?',
        choices: [
          { id: 's1', label: 'Scope 1, because the company pays the bill' },
          { id: 's2', label: 'Scope 2' },
          { id: 's3c6', label: 'Scope 3, category 6, business travel' },
          { id: 's3c1', label: 'Scope 3, category 1 only, with no Scope 2 line' },
        ],
        correctChoiceId: 's2',
        explanation:
          'Scope 2 is indirect emission from purchased electricity, steam, heating, or cooling consumed by the company. Upstream fuel and transmission losses can be reported separately in Scope 3 category 3. They do not move the generation emission out of Scope 2.',
      },
      {
        id: 'flights',
        prompt: 'Employees fly on commercial airlines for work. The company does not own the aircraft. Where do those flight emissions belong?',
        choices: [
          { id: 's1', label: 'Scope 1, because the travel policy is the company’s' },
          { id: 's2', label: 'Scope 2, because the tickets were purchased' },
          { id: 's3', label: 'Scope 3, category 6, business travel' },
          { id: 'ignore', label: 'They are excluded. Only factories are in an inventory.' },
        ],
        correctChoiceId: 's3',
        explanation:
          'Commercial flights are an indirect value-chain activity. In the Scope 3 Standard they are category 6, business travel. If the company owned the aircraft and burned the fuel, that fuel combustion would be Scope 1 instead. Ownership and control decide the scope. The travel policy does not.',
      },
      {
        id: 'optional',
        prompt: 'Which statement matches the GHG Protocol documents, rather than a particular law or rating questionnaire?',
        choices: [
          {
            id: 'all-fifteen',
            label: 'The Corporate Standard requires every company to calculate all 15 Scope 3 categories.',
          },
          {
            id: 'split',
            label: 'The Corporate Standard requires Scope 1 and Scope 2. Scope 3 is optional there. The separate Scope 3 Standard is what a company uses when it prepares a Scope 3 inventory.',
          },
          {
            id: 'replace',
            label: 'Scope 3 replaces Scope 1 for any company without a factory.',
          },
          {
            id: 'commute-s2',
            label: 'Employee commuting is Scope 2 because people use energy.',
          },
        ],
        correctChoiceId: 'split',
        explanation:
          'The Corporate Standard requires Scope 1 and Scope 2 and treats Scope 3 as optional. The Scope 3 Standard tells a company how to prepare a Scope 3 inventory, including the expectation to cover relevant emissions and disclose exclusions. A law or a disclosure standard such as IFRS S2 or ESRS E1 can still require Scope 3 information. That requirement comes from the law or the disclosure standard, not from rewriting the Corporate Standard.',
      },
    ],
  },
]

export const quizMap = Object.fromEntries(quizzes.map((quiz) => [quiz.id, quiz]))
