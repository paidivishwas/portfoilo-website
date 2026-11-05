import DeviceStage from './DeviceStage'

function TagRow({ label, items }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="whitespace-nowrap font-mono text-[10px] font-medium text-ink">{label}</span>
      <ul className="flex min-w-0 flex-wrap gap-1.5">
        {items.map((t) => (
          <li
            key={t}
            className="whitespace-nowrap rounded-full border border-line bg-paper px-2.5 py-1.5 font-mono text-[10px] font-medium leading-none text-ink"
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function CaseStudyCard({ study }) {
  const id = `case-study-${study.id}`
  return (
    <article
      aria-labelledby={id}
      className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-line bg-tile transition-colors duration-200 [--card-bg:var(--bg-raised)] hover:bg-[var(--bg-hover)] hover:[--card-bg:var(--bg-hover)]"
    >
      <div className="flex flex-none flex-col items-start gap-4 px-5 py-6 sm:px-8 md:px-12 md:pb-10 md:pt-10">
        <div className="flex flex-col gap-2.5">
          <h3 id={id} className="text-[1.75rem] font-bold leading-8 tracking-tight md:text-4xl md:leading-10">
            {study.title}
          </h3>
          {study.subtitle && <p className="text-base font-medium text-mute md:text-lg">{study.subtitle}</p>}
        </div>
        {study.description && (
          <p className="max-w-3xl text-[15px] font-medium leading-6 text-mute md:text-base md:leading-7">
            {study.description}
          </p>
        )}
        {study.platforms.length > 0 && <TagRow label="Platforms:" items={study.platforms} />}
        {study.focusAreas.length > 0 && <TagRow label="Focus Areas" items={study.focusAreas} />}
        <a
          href={study.href}
          className="mt-1 inline-flex h-12 items-center justify-center rounded-2xl bg-accent px-6 text-sm font-semibold text-paper transition-[opacity,transform] hover:opacity-90 active:scale-[0.98]"
        >
          View case study
          <span className="sr-only"> — {study.title}</span>
        </a>
      </div>
      {study.cover ? (
        <div className="mt-auto flex justify-center px-5 pt-2 sm:px-8 md:px-12">
          <img
            src={study.cover}
            alt={`${study.title} screens`}
            loading="lazy"
            className="block h-auto w-full max-w-3xl rounded-t-2xl border border-b-0 border-line object-cover object-top"
          />
        </div>
      ) : (
        <DeviceStage devices={study.devices} title={study.title} />
      )}
    </article>
  )
}
