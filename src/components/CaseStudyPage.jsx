import { useEffect } from 'react'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { projects } from '../data/content'
import SectionMarker from './SectionMarker'

function Tags({ label, items }) {
  if (!items?.length) return null
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="font-mono text-xs font-medium text-ink">{label}</span>
      {items.map((t) => (
        <span key={t} className="rounded-full border border-line bg-tile px-3 py-1.5 font-mono text-xs text-ink">
          {t}
        </span>
      ))}
    </div>
  )
}

/** Full page for one case study: summary, then the Figma file embedded below. */
export default function CaseStudyPage({ id, onBack }) {
  const study = projects.find((p) => p.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = study ? `${study.title} — Vishwas Paidi` : 'Case study'
  }, [study])

  if (!study) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-32">
        <button type="button" onClick={onBack} className="inline-flex items-center gap-2 text-mute hover:text-ink">
          <ArrowLeft size={18} /> Back to projects
        </button>
        <p className="mt-10 text-mute">Case study not found.</p>
      </main>
    )
  }

  const figmaUrl = study.figma
  const embed = figmaUrl ? `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}` : null

  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-8 md:pt-12">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 rounded-full border border-line bg-tile px-4 py-2 text-sm text-ink transition-colors hover:border-ink"
      >
        <ArrowLeft size={16} /> Back to projects
      </button>

      <header className="mt-12 max-w-3xl space-y-5">
        <SectionMarker label="Case Study" as="p" />
        <h1 className="text-4xl font-bold tracking-tighter md:text-6xl">{study.title}</h1>
        {study.subtitle && <p className="text-lg font-medium text-mute md:text-xl">{study.subtitle}</p>}
        {study.description && <p className="text-base leading-7 text-mute md:text-lg md:leading-8">{study.description}</p>}
        <Tags label="Platforms:" items={study.platforms} />
        <Tags label="Focus Areas" items={study.focusAreas} />
      </header>

      {embed && (
        <section aria-label="Design file" className="mt-14">
          <div className="overflow-hidden rounded-3xl border border-line bg-tile">
            <iframe
              title={`${study.title} design file`}
              src={embed}
              className="block h-[70vh] min-h-[420px] w-full md:h-[85vh]"
              allowFullScreen
            />
          </div>
          <a
            href={figmaUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-mute transition-colors hover:text-ink"
          >
            Open in Figma <ExternalLink size={14} />
          </a>
        </section>
      )}
    </main>
  )
}
