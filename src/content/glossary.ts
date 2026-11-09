import type { GlossaryEntry } from '@/types/content'

export const glossary: GlossaryEntry[] = [
  {
    id: 'esg',
    term: 'ESG',
    aliases: ['environmental social governance'],
    definition:
      'A grouping of environmental, social, and governance topics used to describe how an organization depends on and affects those issues. ESG is not a single standard, a single score, or a greenhouse-gas inventory.',
    example:
      'A GRI report, an IFRS S2 climate disclosure, and a third-party ESG rating can all be called “ESG” in conversation. They are different work products and should be stored as different objects.',
    lessonIds: ['what-is-esg'],
    referenceIds: ['gri', 'ifrs-s1'],
  },
  {
    id: 'ghg',
    term: 'GHG',
    aliases: ['greenhouse gas', 'greenhouse gases'],
    definition:
      'A gas that absorbs and re-emits infrared radiation and thereby contributes to the greenhouse effect. Corporate inventories usually count a defined list, commonly the Kyoto gases: CO₂, CH₄, N₂O, HFCs, PFCs, SF₆, and NF₃.',
    example:
      'Carbon dioxide from a boiler and HFC-134a from an air conditioner are both greenhouse gases. An inventory includes each one only if the chosen methodology says to count it.',
    lessonIds: ['greenhouse-gases'],
    referenceIds: ['ipcc-ar6', 'ghg-corporate'],
  },
  {
    id: 'co2e',
    term: 'CO₂e',
    aliases: ['carbon dioxide equivalent', 'co2e', 'CO2e'],
    definition:
      'A unit that expresses the climate impact of a greenhouse gas as the mass of carbon dioxide that would have a comparable effect over a stated time horizon, using a stated set of global warming potentials.',
    example:
      'Using the IPCC AR6 100-year value, 1 tonne of fossil methane is 29.8 tonnes of CO₂e. The same tonne is 25 tonnes of CO₂e if the inventory still requires the AR4 value of 25.',
    lessonIds: ['greenhouse-gases', 'activity-and-factors'],
    referenceIds: ['ipcc-ar6'],
  },
  {
    id: 'gwp',
    term: 'Global warming potential',
    aliases: ['GWP'],
    definition:
      'An index of how much energy the emission of 1 mass unit of a gas absorbs over a chosen time horizon, relative to the emission of 1 mass unit of CO₂. The number depends on the IPCC assessment and on the horizon, often 20 or 100 years.',
    example:
      'Methane has a much higher 20-year GWP than 100-year GWP because it is shorter-lived than carbon dioxide. An inventory has to say which horizon it used.',
    lessonIds: ['greenhouse-gases'],
    referenceIds: ['ipcc-ar6'],
  },
  {
    id: 'scope-1',
    term: 'Scope 1',
    definition:
      'Direct greenhouse-gas emissions from sources owned or controlled by the reporting organization, such as combustion in its boilers, furnaces, and vehicles.',
    example:
      'Natural gas burned in a kiln the company operates is Scope 1. Upstream emissions from producing that gas are not Scope 1.',
    lessonIds: ['scopes'],
    referenceIds: ['ghg-corporate'],
  },
  {
    id: 'scope-2',
    term: 'Scope 2',
    definition:
      'Indirect greenhouse-gas emissions from the generation of electricity, steam, heating, or cooling purchased and consumed by the reporting organization.',
    example:
      'Electricity used in a company-operated office is Scope 2. The Scope 2 Guidance then asks for both a location-based and a market-based total.',
    lessonIds: ['scopes'],
    referenceIds: ['ghg-corporate', 'ghg-scope2'],
  },
  {
    id: 'scope-3',
    term: 'Scope 3',
    definition:
      'Other indirect greenhouse-gas emissions in the organization’s value chain. The Scope 3 Standard groups them into 15 categories, both upstream and downstream of the company’s own operations.',
    example:
      'Flights on commercial airlines are category 6, business travel. They are Scope 3 when the company does not own or control the aircraft.',
    lessonIds: ['scopes'],
    referenceIds: ['ghg-scope3', 'ghg-corporate'],
  },
  {
    id: 'emission-factor',
    term: 'Emission factor',
    definition:
      'A factor that converts a quantity of activity into a quantity of greenhouse-gas emissions. A usable factor names its activity unit, its gas or CO₂e basis, its source, its geography, and its period of validity.',
    example:
      '“kg CO₂e per kWh” can be multiplied by kilowatt-hours. It cannot be multiplied by liters until someone records a conversion.',
    lessonIds: ['activity-and-factors', 'modeling-activity-and-factors'],
    referenceIds: ['ghg-corporate', 'epa-hub'],
  },
  {
    id: 'activity-data',
    term: 'Activity data',
    definition:
      'A quantitative measure of an activity that produces greenhouse-gas emissions, such as liters of fuel, kilowatt-hours of electricity, or tonne-kilometers of freight.',
    example:
      'A fuel invoice for 500 liters of diesel is activity data. It becomes an emission only after a matching factor is applied.',
    lessonIds: ['activity-and-factors'],
    referenceIds: ['ghg-corporate'],
  },
  {
    id: 'ghg-protocol',
    term: 'GHG Protocol',
    definition:
      'A family of greenhouse-gas accounting standards published by the World Resources Institute and the World Business Council for Sustainable Development. The Corporate Standard, the Scope 2 Guidance, and the Scope 3 Standard are separate documents with different requirements.',
    example:
      'Saying “we follow the GHG Protocol” is incomplete until you name the document, the edition, and the choices it leaves open, such as the consolidation approach and the GWP set.',
    lessonIds: ['ghg-inventory', 'scopes'],
    referenceIds: ['ghg-corporate', 'ghg-scope2', 'ghg-scope3'],
  },
  {
    id: 'ghg-inventory',
    term: 'GHG inventory',
    aliases: ['greenhouse gas inventory'],
    definition:
      'An account of the greenhouse-gas emissions attributable to an organization for a stated period, prepared under a stated organizational boundary, operational boundary, and methodology.',
    example:
      '“Calendar year 2025, operational control, Scope 1 and location-based and market-based Scope 2, GWP-100 from AR5” is the start of an inventory description. A single total without those choices is not.',
    lessonIds: ['ghg-inventory', 'intro-to-carbon-accounting'],
    referenceIds: ['ghg-corporate'],
  },
  {
    id: 'carbon-neutrality',
    term: 'Carbon neutrality',
    aliases: ['carbon neutral'],
    definition:
      'A claim that carbon dioxide associated with a stated subject and period has been balanced by removals or offsets under a stated method. Programs define the word differently. It is not the same concept as a net-zero pathway under the SBTi Corporate Net-Zero Standard.',
    example:
      'A product certificate that balances residual emissions with credits can be a carbon-neutrality claim. It does not, by itself, mean the company has a science-based reduction pathway.',
    lessonIds: [],
    referenceIds: ['sbti'],
  },
  {
    id: 'net-zero',
    term: 'Net zero',
    aliases: ['net-zero'],
    definition:
      'In IPCC usage, a state in which anthropogenic emissions are balanced by anthropogenic removals over a specified period. Net-zero CO₂ and net-zero greenhouse gases are different statements. The SBTi Corporate Net-Zero Standard is a voluntary corporate framework with its own rules for reductions and residual neutralization.',
    example:
      'A company can have a net-zero target year and still report a large inventory today. The target is not the inventory, and the inventory is not the target.',
    lessonIds: [],
    referenceIds: ['ipcc-ar6', 'sbti', 'paris'],
  },
  {
    id: 'carbon-credit',
    term: 'Carbon credit',
    aliases: ['carbon credits'],
    definition:
      'A transferable unit issued by a carbon-crediting program, intended to represent one tonne of CO₂e reduced or removed under that program’s rules. Issuance does not by itself tell you whether the tonne meets a particular integrity test.',
    example:
      'A registry serial number identifies a credit. Additionality, permanence, and leakage are questions about the quality of the underlying project, assessed against a stated program.',
    lessonIds: [],
    referenceIds: ['icvcm'],
  },
  {
    id: 'carbon-offset',
    term: 'Carbon offset',
    aliases: ['offset', 'carbon offsets'],
    definition:
      'The use of a carbon credit to counterbalance emissions in a claim or inventory. The credit is the instrument. The offset is the accounting use of that instrument. Standards differ on whether, and how, offsets may be used.',
    example:
      'Retiring a credit and subtracting it from Scope 1 is an offsetting choice. The GHG Protocol inventory and a voluntary net-zero framework do not treat that subtraction the same way.',
    lessonIds: [],
    referenceIds: ['ghg-corporate', 'sbti', 'icvcm'],
  },
  {
    id: 'csrd',
    term: 'CSRD',
    aliases: ['Corporate Sustainability Reporting Directive'],
    definition:
      'Directive (EU) 2022/2464, which requires in-scope companies to report sustainability information. Who is in scope, and on what timetable, is a legal question. Later EU measures have changed or proposed changes to the original rollout. Check the text in force.',
    example:
      'An engineering team should not hard-code 2022 size thresholds as if they were permanent. The application should record the legal basis for a reporting obligation separately from the data model.',
    lessonIds: [],
    referenceIds: ['csrd', 'esrs'],
  },
  {
    id: 'esrs',
    term: 'ESRS',
    aliases: ['European Sustainability Reporting Standards'],
    definition:
      'The European Sustainability Reporting Standards adopted by the European Commission in Delegated Regulation (EU) 2023/2772. ESRS 1 defines double materiality. ESRS are disclosure standards. They are not a greenhouse-gas calculation method.',
    example:
      'A company can calculate emissions with the GHG Protocol and disclose them in an ESRS climate report. The calculation standard and the disclosure standard stay distinct in the system.',
    lessonIds: [],
    referenceIds: ['esrs', 'csrd'],
  },
  {
    id: 'issb',
    term: 'ISSB',
    aliases: ['IFRS S1', 'IFRS S2'],
    definition:
      'The International Sustainability Standards Board, which issued IFRS S1 and IFRS S2 in June 2023. The standards ask for sustainability-related financial information, information that could reasonably be expected to affect an entity’s prospects. Jurisdictions choose whether to adopt them.',
    example:
      'IFRS S2 is not a drop-in replacement for GRI. One is oriented to investors and enterprise value. GRI is oriented to the organization’s impacts.',
    lessonIds: ['what-is-esg'],
    referenceIds: ['ifrs-s1', 'ifrs-s2'],
  },
  {
    id: 'gri',
    term: 'GRI',
    aliases: ['Global Reporting Initiative'],
    definition:
      'The Global Reporting Initiative, publisher of the GRI Standards. The 2021 Universal Standards frame reporting around an organization’s impacts on the economy, environment, and people, including human rights.',
    example:
      'A topic can be material under GRI because the impact is significant, even when the financial effect on the company is uncertain. That is a different test from IFRS S1.',
    lessonIds: ['what-is-esg'],
    referenceIds: ['gri'],
  },
  {
    id: 'materiality',
    term: 'Materiality',
    definition:
      'The judgment of what is important enough to include in a report. The test depends on the regime. GRI looks at the significance of impacts. IFRS S1 looks at what could affect the entity’s prospects. The word alone does not say which test was used.',
    example:
      'A water impact can be material for a GRI report. It is financially material under IFRS S1 only if it could reasonably affect the company’s prospects. Those conclusions can differ.',
    lessonIds: ['what-is-esg'],
    referenceIds: ['gri', 'ifrs-s1', 'esrs'],
  },
  {
    id: 'double-materiality',
    term: 'Double materiality',
    definition:
      'The ESRS approach that requires a company to consider both impact materiality and financial materiality. A topic is reported when it meets either perspective, under the criteria in ESRS 1.',
    example:
      'A topic that matters as an impact, but not yet as a financial risk, can still be in scope under double materiality. A financial-only standard would not reach that result by the same test.',
    lessonIds: [],
    referenceIds: ['esrs'],
  },
  {
    id: 'lca',
    term: 'Life cycle assessment',
    aliases: ['LCA', 'life-cycle assessment'],
    definition:
      'Under ISO 14040, the compilation and evaluation of the inputs, outputs, and potential environmental impacts of a product system throughout its life cycle. An LCA is a product-system study. It is not the same deliverable as a corporate GHG inventory.',
    example:
      'A cradle-to-grave footprint of one product can use similar emission factors to a corporate inventory, but the boundary is the product system, not the company’s organizational boundary.',
    lessonIds: [],
    referenceIds: ['iso-14040'],
  },
  {
    id: 'organizational-boundary',
    term: 'Organizational boundary',
    definition:
      'The line that decides which operations are in the company’s GHG inventory. The GHG Protocol Corporate Standard offers three consolidation approaches: equity share, financial control, and operational control.',
    example:
      'A joint venture can be inside the inventory under operational control and only partly included under equity share. The approach has to be chosen and then applied consistently.',
    lessonIds: ['ghg-inventory'],
    referenceIds: ['ghg-corporate'],
  },
  {
    id: 'location-based',
    term: 'Location-based Scope 2',
    definition:
      'A Scope 2 method that uses emission factors for the electricity grid where the consumption occurs. In the United States, eGRID factors are a common source. The Scope 2 Guidance asks companies to report this total alongside the market-based total.',
    example:
      'An office in one grid region and a plant in another should not share a single national factor if a regional factor is what the method requires.',
    lessonIds: ['scopes'],
    referenceIds: ['ghg-scope2', 'egrid'],
  },
  {
    id: 'market-based',
    term: 'Market-based Scope 2',
    definition:
      'A Scope 2 method that reflects contractual instruments for electricity, such as supplier-specific factors, energy attribute certificates, and residual mixes, following the quality criteria in the Scope 2 Guidance.',
    example:
      'A renewable energy certificate does not change the location-based total. It is an input to the market-based total, and only when it meets the Guidance’s criteria.',
    lessonIds: ['scopes'],
    referenceIds: ['ghg-scope2'],
  },
  {
    id: 'additionality',
    term: 'Additionality',
    definition:
      'In carbon crediting, the test of whether the reduction or removal would not have happened without the incentive of the credit. Programs operationalize the test differently. A credit serial number does not prove the outcome.',
    example:
      'A project that was already required by law generally fails an additionality test, because the credit did not cause the activity.',
    lessonIds: [],
    referenceIds: ['icvcm'],
  },
  {
    id: 'permanence',
    term: 'Permanence',
    definition:
      'The durability of a stored greenhouse gas, usually discussed for removals. A tonne stored in a forest can be re-released by fire or harvest. Crediting programs set a durability horizon and a reversal rule. Those rules are not uniform.',
    example:
      'A geological storage project and a short-rotation forestry project do not offer the same permanence, even if each is issued as one tonne.',
    lessonIds: [],
    referenceIds: ['icvcm', 'ipcc-ar6'],
  },
  {
    id: 'leakage',
    term: 'Leakage',
    definition:
      'An increase in emissions outside a project’s boundary that is caused by the project’s activity. A crediting method has to say whether leakage was estimated and how.',
    example:
      'Protecting one forest plot can shift logging to a neighboring plot. If that shift is not estimated, the credited tonne overstates the atmospheric effect.',
    lessonIds: [],
    referenceIds: ['icvcm'],
  },
]

export const glossaryMap = Object.fromEntries(glossary.map((entry) => [entry.id, entry]))
