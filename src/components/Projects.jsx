import { useState } from 'react'
import { Clapperboard, Tv, Sparkles, HardDrive } from 'lucide-react'
import Reveal from './Reveal'
import ProjectTabs from './ProjectTabs'
import CaseStudyStack from './CaseStudyStack'
import ProjectCard from './ProjectCard'
import { projects, projectFilters } from '../data/content'

const CASE_STUDY = 'Case Study'
const icons = [Clapperboard, Tv, Sparkles, HardDrive]

export default function Projects() {
  const [filter, setFilter] = useState(projectFilters[0])
  const shown = projects.filter((p) => p.category === filter)

  return (
    <section id="work" aria-labelledby="work-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section marker: label, glowing dot and a hairline that fades out to the right */}
        <Reveal>
          <div className="mb-14 flex items-center gap-3 md:mb-20">
            <span className="text-lg font-semibold tracking-tight text-ink">Selected work</span>
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
            <span
              aria-hidden="true"
              className="ml-3 h-px flex-1"
              style={{ background: 'linear-gradient(90deg, var(--border) 0%, var(--border) 80%, transparent 100%)' }}
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-8 flex flex-col items-start gap-5 md:mb-12 md:flex-row md:items-center md:justify-between">
            <h2 id="work-title" className="text-3xl font-semibold tracking-tight md:text-5xl">
              Projects
            </h2>
            <ProjectTabs filters={projectFilters} active={filter} onChange={setFilter} />
          </div>
        </Reveal>

        {shown.length === 0 ? (
          <p role="status" className="py-16 text-mute">
            No {filter} projects yet.
          </p>
        ) : filter === CASE_STUDY ? (
          <CaseStudyStack key={filter} studies={shown} />
        ) : (
          <ul key={filter} className="grid gap-x-10 gap-y-16 md:grid-cols-2">
            {shown.map((p, i) => (
              <li key={p.id}>
                <ProjectCard project={p} index={i} icon={icons[i % icons.length]} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
