import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUp, ArrowUpRight } from 'lucide-react'
import { fleetflow as cs } from '../data/fleetflow'

const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

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

function Screen({ src, alt, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-line bg-tile ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="block h-auto w-full" />
    </div>
  )
}

function Heading({ s }) {
  return (
    <header className="mb-10 max-w-2xl">
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

function Shots({ shots }) {
  const cols = shots.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'
  return (
    <div className={`grid gap-8 ${cols}`}>
      {shots.map((s) => (
        <figure key={s.title}>
          <Screen src={s.src} alt={s.title} />
          <figcaption className="mt-4">
            <p className="text-lg font-semibold tracking-tight">{s.title}</p>
            <p className="mt-1.5 text-sm leading-6 text-mute">{s.text}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

function Tabs({ tabs, start = 0, id }) {
  const [i, setI] = useState(start)
  const t = tabs[i]
  return (
    <div>
      <div role="tablist" aria-label="Screens" className="inline-flex max-w-full flex-wrap gap-1 rounded-full border border-line bg-tile p-1.5">
        {tabs.map((x, k) => (
          <button
            key={x.label}
            role="tab"
            id={`${id}-tab-${k}`}
            aria-selected={k === i}
            onClick={() => setI(k)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              k === i ? 'bg-ink text-paper' : 'text-mute hover:text-ink'
            }`}
          >
            {x.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" aria-labelledby={`${id}-tab-${i}`} className="mt-6">
        <p className="mb-6 max-w-2xl text-base leading-7 text-mute">{t.text}</p>
        <Screen src={t.src} alt={`${t.label} screen`} />
        {t.caption && <p className="mt-4 text-sm text-mute">{t.caption}</p>}
      </div>
    </div>
  )
}

function DesignSystem({ s }) {
  return (
    <>
      <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {s.stats.map((x) => (
          <div key={x.label} className="rounded-2xl border border-line bg-tile p-5">
            <p className="text-4xl font-bold text-accent">{x.n}</p>
            <p className="mt-3 font-semibold">{x.label}</p>
            <p className="mt-1 text-sm text-mute">{x.text}</p>
          </div>
        ))}
      </div>
      <div className="mb-10 rounded-2xl bg-white p-6 text-slate-800">
        <p className="font-medium">{s.status.title}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {s.status.chips.map((c) => (
            <span key={c.t} className="rounded-full px-3 py-1 text-xs font-semibold" style={{ color: c.c, background: c.bg }}>
              {c.t}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-500">{s.status.text}</p>
      </div>
      <Rows rows={s.rows} />
    </>
  )
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

        <div className={`${card ? '' : 'mt-8 '}grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]`}>
          <div>
            <Title className="text-4xl font-bold leading-[1.05] tracking-tighter sm:text-5xl md:text-6xl">{cs.title}</Title>
            <p className="mt-6 max-w-xl text-base leading-7 text-mute md:text-lg md:leading-8">{cs.intro}</p>
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
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={card ? '#/case/fleet-management' : '#overview'}
                onClick={card ? undefined : (e) => { e.preventDefault(); goTo('overview') }}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-[#0b1405] transition-opacity hover:opacity-85"
              >
                Explore the screens <ArrowRight size={16} />
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
          </div>
          <img src={cs.hero} alt="FleetFlow dashboard screens" className="h-auto w-full rounded-2xl" />
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
            <section key={s.id} id={s.id} className="scroll-mt-28 border-b border-line py-14 first:pt-2 last:border-0 md:py-20">
              <Heading s={s} />

              {s.shots && <Shots shots={s.shots} />}
              {s.tabs && <Tabs id={s.id} tabs={s.tabs} start={s.defaultTab} />}
              {s.stats && <DesignSystem s={s} />}
              {!s.stats && s.rows && <Rows rows={s.rows} />}

              {s.toc && (
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
              )}

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
