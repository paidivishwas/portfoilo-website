// Placeholder device mockups. Replace a device's skeleton with a screenshot when you have one.
const SPECS = {
  phone: { ratio: '9 / 19', height: '92%', radius: 'rounded-[1.75rem]' },
  tablet: { ratio: '3 / 4', height: '78%', radius: 'rounded-3xl' },
  tv: { ratio: '16 / 9', height: '58%', radius: 'rounded-2xl' },
  laptop: { ratio: '8 / 5', height: '70%', radius: 'rounded-xl' },
}

function Skeleton() {
  return (
    <div className="flex h-full w-full flex-col gap-[6%] p-[8%]">
      <div className="h-[8%] w-1/2 rounded-full bg-[var(--bg-hover)]" />
      <div className="min-h-0 flex-[3] rounded-lg bg-[var(--bg-hover)]" />
      <div className="flex min-h-0 flex-[2] gap-[5%]">
        <div className="flex-1 rounded-lg bg-[var(--bg-hover)]" />
        <div className="flex-1 rounded-lg bg-[var(--bg-hover)]" />
      </div>
    </div>
  )
}

export default function DeviceStage({ devices, title }) {
  return (
    <div className="relative h-72 overflow-hidden md:h-auto md:min-h-0 md:flex-1">
      <div className="absolute inset-x-0 bottom-0 top-4 flex items-end justify-center gap-4 px-6 md:gap-10">
        {devices.map((d) => {
          const spec = SPECS[d.type] ?? SPECS.phone
          return (
            <figure
              key={d.caption}
              className="m-0 flex flex-col items-center justify-end gap-3"
              style={d.width ? { width: d.width } : { height: d.height ?? spec.height }}
            >
              <figcaption className="hidden shrink-0 whitespace-nowrap rounded-full border border-line bg-paper px-3 py-1 font-mono text-[11px] font-bold text-ink sm:block">
                {d.caption}
              </figcaption>
              <div
                role="img"
                aria-label={`${title}: ${d.caption}`}
                className={`min-h-0 flex-1 overflow-hidden border-2 border-b-0 border-line bg-paper ${spec.radius} rounded-b-none`}
                style={{ aspectRatio: spec.ratio }}
              >
                {d.src ? (
                  <img src={d.src} alt="" loading="lazy" className="block h-full w-full rounded-t-[inherit] object-cover object-top" />
                ) : (
                  <Skeleton />
                )}
              </div>
            </figure>
          )
        })}
      </div>
      {/* Fade the bottom of the stage into the card, like the devices sink into it */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
        style={{ background: 'linear-gradient(to top, var(--card-bg), transparent)' }}
      />
    </div>
  )
}
