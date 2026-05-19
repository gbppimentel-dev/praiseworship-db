import { Link } from 'react-router-dom'

export default function SongsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">Songs</h1>
      <p className="mt-2 text-slate-600">Browse the song library or add a new song.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Link to="/songs/browse" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:bg-slate-50">
          <h2 className="text-xl font-semibold">Browse Songs</h2>
          <p className="mt-2 text-sm text-slate-600">Search by tag, language, key, or title.</p>
        </Link>

        <Link to="/songs/new" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:bg-slate-50">
          <h2 className="text-xl font-semibold">Add New Song</h2>
          <p className="mt-2 text-sm text-slate-600">Create a new song record with tags and notes.</p>
        </Link>
      </div>
    </main>
  )
}