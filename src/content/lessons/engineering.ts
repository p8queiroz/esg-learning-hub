import type { Lesson } from '@/types/content'

export const engineeringLessons: Lesson[] = [
  {
    id: 'platform-architecture',
    courseId: 'esg-engineering',
    title: 'Architecture of a carbon accounting platform',
    summary:
      'The modules a serious inventory system needs, which of them must stay pure, and why a spreadsheet collapses the trail.',
    minutes: 13,
    objectives: [
      'Name the responsibilities that should not share a module.',
      'Explain why the calculation is a pure function of recorded inputs.',
      'Describe what a result must point back to.',
    ],
    referenceIds: ['ghg-corporate', 'ghg-scope2'],
    quizIds: [],
    blocks: [
      {
        type: 'paragraph',
        text: 'A carbon accounting platform is an inventory system with a disclosure problem attached. It ingests activity, applies a boundary, multiplies by versioned factors, and keeps a trail that a reviewer can walk. The organizations that publish the methods, the GHG Protocol and ISO, do not publish your service boundaries. The boundaries below are an engineering reading of the accounting requirements in the previous course. They are not a vendor diagram and not the only workable shape.',
      },
      {
        type: 'diagram',
        diagram: 'platform',
      },
      {
        type: 'concepts',
        items: [
          {
            title: 'Ingestion',
            body: 'Accept activity from meters, invoices, and files. Preserve the original quantity and unit. Normalization is a recorded transformation, not an in-place edit.',
          },
          {
            title: 'Boundary',
            body: 'Decide which operations and which scopes are in this inventory. The consolidation approach is metadata for the inventory, applied consistently.',
          },
          {
            title: 'Factor catalog',
            body: 'Factors are data. They have sources, regions, units, and versions. They are not constants in the calculation package.',
          },
          {
            title: 'Calculation',
            body: 'A pure function. Same activity, same factor version, same GWP set, same result. No clock reads, no hidden lookups.',
          },
          {
            title: 'Lineage store',
            body: 'Results point at the activity, the factor version, the method, and the expression. Published results are not updated in place.',
          },
          {
            title: 'Disclosure',
            body: 'Exports for a report or a standard are projections of the inventory. They do not become a second, quieter calculation path.',
          },
        ],
      },
      {
        type: 'comparison',
        title: 'Spreadsheet, and the system you replace it with',
        tabs: [
          {
            id: 'sheet',
            label: 'Spreadsheet',
            body: 'Fast, and honest for a single site. It fails when a factor is pasted over, a unit conversion lives in a column nobody labeled, and the published file is the only copy of history. The cell is doing ingestion, method, calculation, and disclosure at once.',
          },
          {
            id: 'system',
            label: 'System',
            body: 'Slower to design, and boring on purpose. Each concern can change at a different speed. Factors are republished every year. The arithmetic should almost never change. Disclosure templates change when a standard changes. Coupling them means a template edit can change a tonne.',
          },
        ],
      },
      {
        type: 'callout',
        tone: 'distinction',
        title: 'Purity is an audit property',
        body: 'If the calculation reads “the latest factor” from a mutable table, last year’s published total can change because someone corrected a typo in this year’s factor. Fetch the factor version by id inside the application service, then pass that snapshot into a function that only multiplies and converts. The function stays easy to test. The inventory stays reproducible.',
      },
      {
        type: 'example',
        title: 'A disclosure export that grew its own math',
        context: 'The inventory service stores Scope 2 location-based and market-based totals. The PDF exporter averages them “so the chart has one bar.”',
        walkthrough:
          'The Scope 2 Guidance asks for both totals. An average is a third number that no standard requested, produced in a layer that should only format. Reviewers will tie the PDF back to the ledger and find a gap. Put the average nowhere. If a chart needs one series, label which method it shows.',
        technicalNote:
          'Forbid a second implementation of unit conversion in the export package. Export calls the same calculation records the ledger stored. If a figure cannot be tied to a result id, it is not ready to publish.',
      },
      {
        type: 'takeaway',
        points: [
          'Ingest, bound, look up a versioned factor, calculate, store lineage, then disclose.',
          'The calculation does not fetch data and does not format a report.',
          'Factors are records. They are not constants buried in code.',
          'A chart is not allowed to invent a method the inventory did not calculate.',
        ],
      },
    ],
  },
  {
    id: 'modeling-activity-and-factors',
    courseId: 'esg-engineering',
    title: 'Modeling activity data and emission factors',
    summary:
      'A teaching model for the records, the unit boundary, and the rule that a factor used in a published line is never edited.',
    minutes: 14,
    objectives: [
      'Sketch records for activity, factor versions, and results.',
      'Place unit conversion outside the multiplication.',
      'Explain what must happen when a publisher revises a factor.',
    ],
    referenceIds: ['ghg-corporate', 'epa-hub'],
    quizIds: [],
    blocks: [
      {
        type: 'paragraph',
        text: 'The model below is a teaching model. It is the smallest set of records that can reproduce the illustrative electricity line from the calculation lesson and survive a factor revision. It is not a schema you must ship, and the 0.40 is still not a real grid factor. The point is which facts have to be columns rather than comments.',
      },
      {
        type: 'code',
        title: 'A teaching model',
        note: 'Illustrative types. Identifiers, status values, and table splits will differ in a real system. The 0.40 kg CO₂e/kWh value is fictional.',
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
        title: 'How the illustrative line is stored',
        steps: [
          {
            title: 'Activity',
            body: 'quantity 1000, unit kWh, source document pointing at the meter or the invoice, period for the inventory year.',
          },
          {
            title: 'Factor version',
            body: 'value 0.40, activity unit kWh, numerator kg CO₂e, citation text that in real life would be a real publication. This teaching row would be rejected by a content review if someone tried to label it as eGRID.',
          },
          {
            title: 'Result',
            body: 'co2eKg 400, gwpSet not-applied because the factor was already CO₂e, scope 2-location or 2-market, expression “1000 kWh × 0.40 kg CO₂e/kWh”.',
          },
        ],
      },
      {
        type: 'callout',
        tone: 'caution',
        title: 'Unit conversion is its own record',
        body: 'If the invoice is in MWh and the factor is per kWh, do not multiply 1 × 0.40 and hope. Store a conversion from 1 MWh to 1,000 kWh, then multiply. The conversion has a source too, even when the source is the definition of the unit. Silent conversion inside the calculator is how miles get treated as kilometers.',
      },
      {
        type: 'comparison',
        title: 'When the publisher revises the factor',
        tabs: [
          {
            id: 'mutate',
            label: 'Edit in place',
            body: 'Updating the same factor row changes the meaning of every result that points at it. Last year’s assured total moves. The audit log might show that a value changed. It will not show what the old inventory thought it was using, unless you still have the old value somewhere else.',
          },
          {
            id: 'version',
            label: 'Insert a version',
            body: 'The old FactorVersion stays. A new id is inserted for the new publication. New calculations point at the new id. A restatement is an explicit new result that references the new version and says it replaces a prior result. History remains readable.',
          },
        ],
      },
      {
        type: 'example',
        title: 'The failure you can unit-test',
        context: 'Someone posts diesel activity in liters against a factor whose activity unit is kilometers.',
        walkthrough:
          'The calculation function receives both units and refuses. It does not coerce, and it does not return zero. The caller records a validation error on the activity. The inventory total excludes the line and lists it among incomplete items, which is the completeness principle showing up as a queue rather than as a surprise in assurance.',
        technicalNote:
          'Give the pure function the activity quantity, the activity unit, the factor value, the factor unit, and the numerator kind. Return either a result or a typed mismatch. Property tests are straightforward: units that differ never succeed, and a CO₂e numerator never takes a GWP multiplier.',
      },
      {
        type: 'takeaway',
        points: [
          'Activity, factor version, and result are different records with different lifetimes.',
          'A published factor version is immutable. Revisions are new rows.',
          'Conversions are explicit. The multiplier never guesses.',
          'The expression is stored beside the total, so a reviewer does not have to reverse it.',
        ],
      },
    ],
  },
]
