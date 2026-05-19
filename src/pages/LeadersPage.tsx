import { Link } from 'react-router-dom'

export default function LeadersPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">Worship Leaders</h1>
      <p className="mt-2 text-slate-600">Browse leaders or add a new one.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Link to="/leaders/browse" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:bg-slate-50">
          <h2 className="text-xl font-semibold">Browse Leaders</h2>
          <p className="mt-2 text-sm text-slate-600">View active and inactive leaders.</p>
        </Link>

        <Link to="/leaders/new" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:bg-slate-50">
          <h2 className="text-xl font-semibold">Add New Leader</h2>
          <p className="mt-2 text-sm text-slate-600">Create a new worship leader profile.</p>
        </Link>
      </div>
    </main>
  )
}