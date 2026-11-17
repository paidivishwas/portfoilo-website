import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUp, ArrowUpRight } from 'lucide-react'
import { fleetflow as cs } from '../data/fleetflow'

const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Pills({ items }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="rounded-full border border-line bg-slate-50 px-3.5 py-2 font-mono text-xs text-ink">
          {t}
        </li>
      ))}
    </ul>
  )
}

/** White hero: headline, buttons, intro, meta and the monitor image. */
export function FleetFlowHero({ onBack }) {
  return (
    <section className="rounded-[2rem] border border-line bg-white px-6 py-10 shadow-[0_1px_2px_rgba(15,30,61,.04),0_12px_40px_-12px_rgba(15,30,61,.12)] md:px-14 md:py-16">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-mute">
        <button type="button" onClick={onBack} className="inline-flex items-center gap-1.5 hover:text-ink">
          <ArrowLeft size={15} /> Projects
        </button>
        <span aria-hidden="true">/</span>
        <span className="text-ink">{cs.name}</span>
      </nav>

      <div className="mt-8 grid items-center gap-10 md:grid-cols-[1.05fr_1fr]">
        <div>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tighter text-ink sm:text-5xl md:text-6xl">{cs.title}</h1>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#overview"
              onClick={(e) => {
                e.preventDefault()
                goTo('overview')
              }}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-white transition-opacity hover:opacity-85"
            >
              Read the case study <ArrowRight size={16} />
            </a>
            <a
              href={cs.prototype}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-white px-6 text-sm font-semibold text-ink transition-colors hover:border-ink"
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
    </section>
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
    <div className="case-light min-h-screen bg-white text-ink">
      <main className="mx-auto max-w-[1280px] px-5 pb-24 pt-6 md:px-8">
        <FleetFlowHero onBack={onBack} />

        <div className="mt-12 grid gap-10 lg:grid-cols-[210px_1fr] lg:gap-12">
          {/* Section nav: left rail on desktop, scrolling chips on mobile */}
          <aside className="lg:relative">
            <nav
              aria-label="Case study sections"
              className="sticky top-3 z-20 -mx-5 flex gap-2 overflow-x-auto bg-white/90 px-5 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-l lg:border-line lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
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
                        ? 'border-ink font-medium text-ink lg:border-accent'
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
              <section key={s.id} id={s.id} aria-label={s.title} className="scroll-mt-24 pb-12 last:pb-0">
                <div className="space-y-6">
                  {s.slides.map((sl) => (
                    <div key={sl.src} className="overflow-hidden rounded-2xl border border-line bg-white">
                      <img src={sl.src} alt={sl.alt} loading="lazy" className="block h-auto w-full" />
                    </div>
                  ))}
                </div>

                {s.end && (
                  <div className="mt-10 flex flex-wrap gap-3">
                    <a
                      href={cs.prototype}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-white transition-opacity hover:opacity-85"
                    >
                      View the prototype <ArrowUpRight size={16} />
                    </a>
                    <button
                      type="button"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-white px-6 text-sm font-semibold text-ink transition-colors hover:border-ink"
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
    </div>
  )
}
