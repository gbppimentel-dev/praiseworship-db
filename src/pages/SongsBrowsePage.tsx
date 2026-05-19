export default function SongsBrowsePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">Browse Songs</h1>
      <p className="mt-2 text-slate-600">Placeholder search and filters will go here.</p>

      <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-3 md:grid-cols-4">
          <div className="rounded-2xl bg-slate-100 p-4 text-sm">Search</div>
          <div className="rounded-2xl bg-slate-100 p-4 text-sm">Language</div>
          <div className="rounded-2xl bg-slate-100 p-4 text-sm">Tags</div>
          <div className="rounded-2xl bg-slate-100 p-4 text-sm">Key</div>
        </div>

        <div className="mt-6 rounded-2xl border border-dashed border-slate-300 p-6 text-sm text-slate-500">
          Song results will appear here.
        </div>
      </div>
    </main>
  )
}