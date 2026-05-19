export default function LeadersNewPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 pb-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">Add New Leader</h1>
      <p className="mt-2 text-slate-600">Only name and status are needed for now.</p>

      <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4">Name *</div>
          <div className="rounded-2xl bg-slate-50 p-4">Status * (Active / Inactive)</div>
        </div>
      </div>
    </main>
  )
}