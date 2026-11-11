import { Fragment, useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUp, ArrowUpRight } from 'lucide-react'
import { fleetflow as cs } from '../data/fleetflow'

const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
const kicker = 'font-mono text-xs uppercase tracking-[0.18em]'

function Pills({ items }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="rounded-full border border-line bg-tile px-3.5 py-2 font-mono text-xs text-ink">
          {t}
        </li>
      ))}
    </ul>
  )
}

function Heading({ s }) {
  return (
    <header className="mb-10 max-w-2xl">
      {s.kicker && <p className={`mb-4 text-accent ${kicker}`}>{s.kicker}</p>}
      <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{s.title}</h2>
      <p className="mt-4 text-base leading-7 text-mute md:text-lg md:leading-8">{s.lead}</p>
    </header>
  )
}

/** Label on the left, text on the right, hairlines between rows. */
function Rows({ rows }) {
  return (
    <div className="border-t border-line">
      {rows.map((r) => (
        <div key={r.label} className="grid gap-3 border-b border-line py-6 md:grid-cols-[1fr_1.6fr] md:gap-10 md:py-7">
          <h3 className="text-lg font-semibold tracking-tight md:text-xl">{r.label}</h3>
          <div className="space-y-3 text-base leading-7 text-mute">
            {r.text.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

/** Numbered "what to notice" list. */
function Notice({ items }) {
  return (
    <div>
      <p className={`mb-4 text-mute ${kicker}`}>What to notice</p>
      <ol className="grid gap-x-10 gap-y-4 md:grid-cols-2">
        {items.map((t, i) => (
          <li key={t} className="flex gap-4 border-t border-line pt-4">
            <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, '0')}</span>
            <span className="text-[15px] leading-6 text-mute">{t}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

/** Intro text, one large screen, then the numbered notes. */
function Feature({ b }) {
  return (
    <figure className="py-10 first:pt-0">
      <div className="mb-6 max-w-2xl">
        <p className={`mb-3 text-accent ${kicker}`}>{b.kicker}</p>
        <h3 className="text-2xl font-bold tracking-tight md:text-3xl">{b.title}</h3>
        {b.text && <p className="mt-3 text-base leading-7 text-mute">{b.text}</p>}
      </div>
      <div className={`overflow-hidden rounded-2xl border border-line ${b.dark ? 'bg-[#0b0d10]' : 'bg-tile'} ${b.maxW ?? ''}`}>
        <img src={b.src} alt={b.alt} loading="lazy" className="block h-auto w-full" />
      </div>
      {b.caption && <figcaption className="mt-3 text-sm text-mute">{b.caption}</figcaption>}
      {b.notice && (
        <div className="mt-8">
          <Notice items={b.notice} />
        </div>
      )}
    </figure>
  )
}

/** The eight parts of the overview screen, each with a crisp crop beside its notes. */
function Anatomy({ b }) {
  return (
    <div>
      <h3 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl">{b.title}</h3>
      {b.items.map((p) => (
        <article
          key={p.part}
          className="grid items-start gap-8 border-t border-line py-10 first:mt-6 md:grid-cols-[1fr_1.1fr] md:gap-12"
        >
          <div>
            <p className={`mb-3 text-accent ${kicker}`}>{p.part}</p>
            <h4 className="text-xl font-semibold tracking-tight md:text-2xl">{p.title}</h4>
            <p className="mt-3 text-base leading-7 text-mute">{p.text}</p>
            <ol className="mt-6 space-y-3">
              {p.details.map((d, i) => (
                <li key={d} className="flex gap-4 text-[15px] leading-6 text-mute">
                  <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, '0')}</span>
                  <span>{d}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex justify-center rounded-2xl border border-line bg-tile p-4">
            <img
              src={p.src}
              alt={p.title}
              loading="lazy"
              className={`block rounded-lg bg-white ${p.tall ? 'max-h-[460px] w-auto' : 'h-auto w-full'}`}
            />
          </div>
        </article>
      ))}
    </div>
  )
}

function Personas({ items }) {
  return (
    <div className="mb-10 grid gap-4 md:grid-cols-3">
      {items.map((p) => (
        <div key={p.name} className="flex flex-col rounded-2xl border border-line bg-tile p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-base font-bold text-[#0b1405]">
              {p.name[0]}
            </span>
            <div>
              <p className="font-semibold leading-tight">{p.name}</p>
              <p className="text-sm text-mute">{p.role}</p>
            </div>
            {p.tag && (
              <span className="ml-auto rounded-full border border-accent/40 px-2.5 py-1 font-mono text-[10px] text-accent">
                {p.tag}
              </span>
            )}
          </div>
          <p className="mt-5 text-base font-medium leading-6 text-ink">“{p.quote}”</p>
          <p className="mt-4 text-sm leading-6 text-mute">{p.need}</p>
        </div>
      ))}
    </div>
  )
}

function Compare({ b }) {
  const last = b.cols.length - 1
  return (
    <div className="py-10">
      <div className="mb-6 max-w-2xl">
        <p className={`mb-3 text-accent ${kicker}`}>{b.kicker}</p>
        <h3 className="text-2xl font-bold tracking-tight md:text-3xl">{b.title}</h3>
        <p className="mt-3 text-base leading-7 text-mute">{b.text}</p>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-tile">
              {b.cols.map((c, i) => (
                <th key={i} className={`px-4 py-3 font-mono text-xs uppercase tracking-wider ${i === last ? 'text-accent' : 'text-mute'}`}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {b.rows.map((r) => (
              <tr key={r[0]} className="border-t border-line align-top">
                {r.map((c, i) => (
                  <td
                    key={i}
                    className={`px-4 py-3.5 leading-6 ${
                      i === 0 ? 'font-medium text-ink' : i === last ? 'bg-accent/10 font-medium text-ink' : 'text-mute'
                    }`}
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {b.caption && <p className="mt-3 text-sm text-mute">{b.caption}</p>}
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {b.points.map((p) => (
          <div key={p.n} className="rounded-2xl border border-line bg-tile p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              {p.n} · {p.label}
            </p>
            <p className="mt-3 font-semibold">{p.title}</p>
            <p className="mt-1.5 text-sm leading-6 text-mute">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Foundations() {
  const f = cs.foundations
  const label = `mb-4 text-mute ${kicker}`
  return (
    <div className="space-y-12">
      <div>
        <p className={label}>Color · brand &amp; neutrals</p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {f.colors.map((c) => (
            <div key={c.name} className="overflow-hidden rounded-2xl border border-line bg-tile">
              <div className="h-20 border-b border-line" style={{ background: c.hex }} />
              <div className="p-3">
                <p className="text-sm font-medium">{c.name}</p>
                <p className="font-mono text-xs text-mute">
                  {c.hex} · {c.use}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className={label}>Typography · Inter, size / weight</p>
        <div className="rounded-2xl border border-line bg-white p-6 text-slate-800">
          {f.type.map((t) => (
            <div
              key={t.spec}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-slate-200 py-3 last:border-0"
            >
              <span className={t.cls}>{t.sample}</span>
              <span className="font-mono text-xs text-slate-500">{t.spec}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className={label}>Spacing · 4-pt</p>
          <div className="space-y-2 rounded-2xl border border-line bg-tile p-5">
            {f.spacing.map((n) => (
              <div key={n} className="flex items-center gap-3">
                <span className="w-8 font-mono text-xs text-mute">{n}</span>
                <span className="h-3 rounded-sm bg-accent" style={{ width: n * 3 }} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className={label}>Radius</p>
          <div className="flex flex-wrap items-end gap-4 rounded-2xl border border-line bg-tile p-5">
            {f.radius.map((r) => (
              <div key={r} className="text-center">
                <div className="h-16 w-16 border-2 border-accent bg-accent/10" style={{ borderRadius: r }} />
                <p className="mt-2 font-mono text-xs text-mute">{r === 9999 ? 'full' : r}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="max-w-3xl border-l-2 border-accent pl-4 text-base leading-7 text-mute">
        <span className="font-semibold text-ink">Rules: </span>
        {f.rule}
      </p>
    </div>
  )
}

function Layers({ items }) {
  return (
    <div className="mb-8 grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
      {items.map((x, i) => (
        <Fragment key={x.t}>
          <div className="rounded-2xl border border-line bg-tile p-5">
            <p className="font-semibold">{x.t}</p>
            <p className="mt-2 font-mono text-xs text-mute">{x.e}</p>
          </div>
          {i < items.length - 1 && <ArrowRight size={18} className="hidden self-center text-mute md:block" />}
        </Fragment>
      ))}
    </div>
  )
}

function Stats({ stats }) {
  return (
    <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((x) => (
        <div key={x.label} className="rounded-2xl border border-line bg-tile p-5">
          <p className="text-4xl font-bold text-accent">{x.n}</p>
          <p className="mt-3 font-semibold">{x.label}</p>
          <p className="mt-1 text-sm text-mute">{x.text}</p>
        </div>
      ))}
    </div>
  )
}

function Status({ b }) {
  return (
    <div className="mb-10 rounded-2xl bg-white p-6 text-slate-800">
      <p className="font-medium">{b.title}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {b.chips.map((c) => (
          <span key={c.t} className="rounded-full px-3 py-1 text-xs font-semibold" style={{ color: c.c, background: c.bg }}>
            {c.t}
          </span>
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-500">{b.text}</p>
    </div>
  )
}

function Toc() {
  return (
    <div className="grid gap-3 border-b border-line py-6 md:grid-cols-[1fr_1.6fr] md:gap-10">
      <h3 className="text-lg font-semibold tracking-tight md:text-xl">In this case study</h3>
      <ul>
        {cs.sections.slice(1).map((x) => (
          <li key={x.id} className="border-b border-line last:border-0">
            <button
              type="button"
              onClick={() => goTo(x.id)}
              className="group flex w-full items-center justify-between gap-4 py-4 text-left"
            >
              <span>
                <span className="block font-medium">{x.nav}</span>
                <span className="mt-0.5 block text-sm text-mute">{x.blurb}</span>
              </span>
              <ArrowRight size={16} className="shrink-0 text-mute transition-transform group-hover:translate-x-1" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Block({ b }) {
  switch (b.type) {
    case 'rows': return <Rows rows={b.rows} />
    case 'toc': return <Toc />
    case 'note': return <p className="mb-8 max-w-2xl text-base leading-7 text-mute">{b.text}</p>
    case 'personas': return <Personas items={b.items} />
    case 'feature': return <Feature b={b} />
    case 'compare': return <Compare b={b} />
    case 'anatomy': return <Anatomy b={b} />
    case 'foundations': return <Foundations />
    case 'layers': return <Layers items={b.items} />
    case 'stats': return <Stats stats={b.stats} />
    case 'status': return <Status b={b} />
    default: return null
  }
}

export function FleetFlowHero({ onBack, card = false }) {
  const Wrap = card ? 'article' : 'section'
  const Title = card ? 'h3' : 'h1'
  return (
    <Wrap className="rounded-[2rem] border border-line bg-tile px-6 py-10 md:px-14 md:py-16">
      {!card && (
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-mute">
          <button type="button" onClick={onBack} className="inline-flex items-center gap-1.5 hover:text-ink">
            <ArrowLeft size={15} /> Projects
          </button>
          <span aria-hidden="true">/</span>
          <span className="text-ink">{cs.name}</span>
        </nav>
      )}

      <div className={`${card ? '' : 'mt-8 '}grid items-center gap-10 md:grid-cols-[1.05fr_1fr]`}>
        <div>
          <Title className="text-4xl font-bold leading-[1.05] tracking-tighter sm:text-5xl md:text-6xl">{cs.title}</Title>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={card ? '#/case/fleet-management' : '#overview'}
              onClick={card ? undefined : (e) => { e.preventDefault(); goTo('overview') }}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-[#0b1405] transition-opacity hover:opacity-85"
            >
              Read the case study <ArrowRight size={16} />
            </a>
            <a
              href={cs.prototype}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-paper px-6 text-sm font-semibold transition-colors hover:border-ink"
            >
              View the prototype <ArrowUpRight size={16} />
            </a>
          </div>
          <p className="mt-8 max-w-xl text-base leading-7 text-mute md:text-lg md:leading-8">{cs.intro}</p>
          <dl className="mt-8 space-y-4">
            {cs.meta.map((m) => (
              <div key={m.label} className="grid items-start gap-2 sm:grid-cols-[110px_1fr]">
                <dt className="pt-2 font-mono text-sm text-mute">{m.label}</dt>
                <dd>
                  <Pills items={m.items} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <img src={cs.hero} alt="FleetFlow dashboard on a desktop monitor" className="h-auto w-full rounded-2xl object-contain" />
      </div>
    </Wrap>
  )
}

export default function FleetFlowCaseStudy({ onBack }) {
  const [active, setActive] = useState(cs.sections[0].id)

  useEffect(() => {
    const els = cs.sections.map((s) => document.getElementById(s.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (hit) setActive(hit.target.id)
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: [0, 1] },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <main className="mx-auto max-w-[1200px] px-5 pb-24 pt-6 md:px-8">
      <FleetFlowHero onBack={onBack} />

      <div className="mt-12 grid gap-10 lg:grid-cols-[210px_1fr] lg:gap-14">
        {/* Section nav: left rail on desktop, scrolling chips on mobile */}
        <aside className="lg:relative">
          <nav
            aria-label="Case study sections"
            className="sticky top-3 z-20 -mx-5 flex gap-2 overflow-x-auto bg-paper/85 px-5 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-l lg:border-line lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
          >
            {cs.sections.map((s) => {
              const on = active === s.id
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => goTo(s.id)}
                  aria-current={on ? 'true' : undefined}
                  className={`shrink-0 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-left text-sm transition-colors lg:-ml-px lg:rounded-none lg:border-0 lg:border-l-2 lg:py-2 lg:pl-4 lg:pr-2 ${
                    on
                      ? 'border-ink text-ink lg:border-accent'
                      : 'border-line text-mute hover:text-ink lg:border-transparent'
                  }`}
                >
                  {s.nav}
                </button>
              )
            })}
          </nav>
        </aside>

        <div className="min-w-0">
          {cs.sections.map((s) => (
            <section
              key={s.id}
              id={s.id}
              className="scroll-mt-28 border-b border-line py-14 first:pt-2 last:border-0 md:py-20"
            >
              <Heading s={s} />

              <div className="space-y-2">
                {s.blocks.map((b, i) => (
                  <Block key={i} b={b} />
                ))}
              </div>

              {s.end && (
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href={cs.prototype}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-[#0b1405] transition-opacity hover:opacity-85"
                  >
                    View the prototype <ArrowUpRight size={16} />
                  </a>
                  <button
                    type="button"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-tile px-6 text-sm font-semibold transition-colors hover:border-ink"
                  >
                    Back to top <ArrowUp size={16} />
                  </button>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
