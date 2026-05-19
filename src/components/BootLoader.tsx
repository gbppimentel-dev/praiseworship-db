import { ScaleLoader } from 'react-spinners'

export default function BootLoader() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        <ScaleLoader
          color="#111827"
          height={40}
          width={6}
          radius={8}
          margin={4}
          speedMultiplier={0.9}
        />

        <div className="text-center">
          <p className="text-2xl font-semibold tracking-tight text-slate-900">
            Loading PraiseDB
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Preparing your worship workspace...
          </p>
        </div>
      </div>
    </div>
  )
}