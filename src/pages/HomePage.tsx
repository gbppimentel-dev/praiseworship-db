import CalendarPlaceholder from '../components/CalendarPlaceholder'

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <CalendarPlaceholder />

        <aside className="space-y-6">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Today’s workflow</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>1. Select a Sunday</p>
              <p>2. Choose the worship leader</p>
              <p>3. Add songs by tag</p>
              <p>4. Save key and notes</p>
              <p>5. Review the final lineup</p>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Key intelligence</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              This will remember the most used key for each song per worship leader,
              plus frequency and last-used date.
            </p>
          </section>
        </aside>
      </div>
    </main>
  )
}