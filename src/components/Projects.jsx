import { Clapperboard, Tv, Sparkles, HardDrive } from 'lucide-react'
import Reveal from './Reveal'
import SectionMarker from './SectionMarker'
import CaseStudyStack from './CaseStudyStack'
import ProjectCard from './ProjectCard'
import { projects, projectFilters } from '../data/content'

const CASE_STUDY = 'Case Study'
const icons = [Clapperboard, Tv, Sparkles, HardDrive]

export default function Projects() {
  const groups = projectFilters.map((f) => ({ name: f, items: projects.filter((p) => p.category === f) }))

  return (
    <section id="work" aria-labelledby="work-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionMarker id="work-title" label="Projects" className="mb-10 md:mb-14" />
        </Reveal>

        <div className="space-y-20 md:space-y-28">
          {groups.map(({ name, items }) => (
            <div key={name} role="group" aria-label={name}>
              <h3 className="mb-6 inline-flex rounded-full border border-line bg-tile px-5 py-2.5 text-sm font-semibold text-ink">
                {name}
              </h3>
              {items.length === 0 ? (
                <p role="status" className="py-6 text-mute">
                  No {name} projects yet.
                </p>
              ) : name === CASE_STUDY ? (
                <CaseStudyStack studies={items} />
              ) : (
                <ul className="grid gap-x-10 gap-y-16 md:grid-cols-2">
                  {items.map((p, i) => (
                    <li key={p.id}>
                      <ProjectCard project={p} index={i} icon={icons[i % icons.length]} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
