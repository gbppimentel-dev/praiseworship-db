import { ScaleLoader } from 'react-spinners'

type BootLoaderProps = {
  exiting?: boolean
}

export default function BootLoader({ exiting = false }: BootLoaderProps) {
  return (
    <div
      className={[
        'fixed inset-0 z-[999] flex items-center justify-center transition-all duration-500 ease-out',
        'bg-[radial-gradient(circle_at_top,rgba(123,209,43,0.10),transparent_35%),linear-gradient(180deg,#ffffff_0%,#f7f8f5_100%)]',
        exiting ? 'opacity-0 blur-sm scale-[1.01]' : 'opacity-100',
      ].join(' ')}
    >
      <div className="flex flex-col items-center gap-6">
        <ScaleLoader
          color="#7bd12b"
          height={40}
          width={6}
          radius={8}
          margin={4}
          speedMultiplier={0.9}
        />

        <div className="text-center">
          <p className="text-2xl font-semibold tracking-tight text-[#111111]">
            Loading PraiseDB
          </p>

          <p className="mt-2 text-sm text-[#5d6658]">
            preparing your worship workspace...
          </p>
        </div>
      </div>
    </div>
  )
}