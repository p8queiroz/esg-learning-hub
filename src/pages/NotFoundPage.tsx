import { Link } from 'react-router'

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-xl space-y-3 py-10">
      <h1 className="font-serif text-4xl">That page is not in the curriculum</h1>
      <p className="leading-7 text-muted-foreground">The link may be mistyped, or the lesson may still be planned.</p>
      <Link to="/" className="inline-flex font-semibold text-accent">
        Back to the dashboard
      </Link>
    </div>
  )
}
