import { Clapperboard, Tv, Sparkles, HardDrive } from 'lucide-react'
import Section from './Section'
import ProjectCard from './ProjectCard'
import { projects } from '../data/content'

const icons = [Clapperboard, Tv, Sparkles, HardDrive]

export default function Projects() {
  return (
    <Section id="work" label="Selected Projects" title="Work across screens, from pocket to living room.">
      <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} icon={icons[i % icons.length]} />
        ))}
      </div>
    </Section>
  )
}
