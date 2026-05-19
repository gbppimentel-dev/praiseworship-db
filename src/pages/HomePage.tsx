import CalendarPlaceholder from '../components/CalendarPlaceholder'

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f7d32]">
            Worship Planning Workspace
          </p>

          <h1 className="text-4xl font-black tracking-[-0.06em] text-[#111111] sm:text-5xl">
            Sunday Service Planner
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#5d6658]">
            Plan worship services, organize songs, assign worship leaders,
            and preserve your ministry’s service history in one place.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="rounded-2xl bg-[#111111] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)] transition hover:-translate-y-[1px] hover:bg-[#2f7d32]">
            Plan New Service
          </button>

          <button className="rounded-2xl border border-[#d8ddd4] bg-white px-5 py-3 text-sm font-semibold text-[#111111] transition hover:border-[#7bd12b] hover:bg-[#f0f2ee]">
            Browse Songs
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <CalendarPlaceholder />

        <aside className="space-y-6">
          <section className="rounded-[1.75rem] border border-[#d8ddd4] bg-white/90 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-[#7bd12b]" />

              <h3 className="text-lg font-bold tracking-tight text-[#111111]">
                Today’s Workflow
              </h3>
            </div>

            <div className="space-y-4">
              {[
                'Select a Sunday',
                'Choose the worship leader',
                'Add songs by category',
                'Save key and notes',
                'Review the final lineup',
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-3 rounded-2xl bg-[#f7f8f5] p-4"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#111111] text-xs font-bold text-white">
                    {index + 1}
                  </div>

                  <p className="pt-0.5 text-sm font-medium text-[#5d6658]">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="overflow-hidden rounded-[1.75rem] border border-[#d8ddd4] bg-[#111111] p-6 shadow-[0_14px_40px_rgba(0,0,0,0.12)]">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-[#7bd12b]" />

              <h3 className="text-lg font-bold tracking-tight text-white">
                Key Intelligence
              </h3>
            </div>

            <p className="text-sm leading-7 text-[#c7d0c2]">
              PraiseDB will remember the preferred keys used by each worship
              leader for every song, helping your team stay consistent and
              comfortable during planning.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-xs uppercase tracking-wide text-[#8b9187]">
                  Most Used
                </p>

                <p className="mt-2 text-lg font-bold text-white">G</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-xs uppercase tracking-wide text-[#8b9187]">
                  Frequency
                </p>

                <p className="mt-2 text-lg font-bold text-white">12x</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-xs uppercase tracking-wide text-[#8b9187]">
                  Last Used
                </p>

                <p className="mt-2 text-lg font-bold text-white">May 11</p>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </main>
  )
}