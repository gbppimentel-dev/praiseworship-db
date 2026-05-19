const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function CalendarPlaceholder() {
  const cells = Array.from({ length: 35 }, (_, index) => {
    const dayNumber = index + 1
    return dayNumber <= 31 ? dayNumber : ''
  })

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Sunday Service Calendar</h2>
          <p className="mt-1 text-sm text-slate-500">
            Select a Sunday to plan songs, assign the worship leader, and save the service lineup.
          </p>
        </div>
        <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
          Placeholder month view
        </div>
      </div>

      <div className="mt-6 grid grid-cols-7 gap-2">
        {days.map((day) => (
          <div key={day} className="rounded-xl bg-slate-100 px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
            {day}
          </div>
        ))}

        {cells.map((cell, index) => {
          const isSunday = index % 7 === 0
          return (
            <button
              key={index}
              type="button"
              className={[
                'min-h-24 rounded-2xl border p-3 text-left transition',
                isSunday
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-200 bg-slate-50 hover:bg-slate-100',
              ].join(' ')}
            >
              <div className={isSunday ? 'text-sm font-semibold text-white' : 'text-sm font-semibold text-slate-700'}>
                {cell || ''}
              </div>
              {isSunday && cell ? (
                <div className="mt-6 text-xs text-white/80">Sunday service</div>
              ) : null}
            </button>
          )
        })}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-semibold">Select Sunday</p>
          <p className="mt-1 text-sm text-slate-500">Open a service, then add songs and a leader.</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-semibold">Song lineup</p>
          <p className="mt-1 text-sm text-slate-500">Songs populate with key, tag, and notes.</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-semibold">Archive</p>
          <p className="mt-1 text-sm text-slate-500">Past Sundays will live in the service history.</p>
        </div>
      </div>
    </section>
  )
}