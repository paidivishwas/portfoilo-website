import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

export default function ProjectCard({ project, index, icon: Icon }) {
  return (
    <Reveal delay={(index % 2) * 0.1}>
      <article className="group">
        <a href={project.href} className="block" aria-label={`View case study: ${project.title}`}>
          {/* Thumbnail placeholder: replace with an <img> when assets are ready */}
          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-neutral-200 transition-colors duration-500 group-hover:bg-ink">
            <span className="absolute left-5 top-4 text-sm text-mute transition-colors group-hover:text-neutral-400">
              0{index + 1}
            </span>
            <Icon
              size={72}
              strokeWidth={1}
              className="text-neutral-400 transition-all duration-500 group-hover:scale-105 group-hover:text-paper"
            />
          </div>
          <div className="mt-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-mute">{project.category}</p>
              <h3 className="mt-1 text-xl font-semibold tracking-tight">{project.title}</h3>
            </div>
            <ArrowUpRight
              className="mt-1 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              size={22}
            />
          </div>
          <p className="mt-3 max-w-md text-mute">{project.description}</p>
          <span className="mt-4 inline-block border-b border-ink pb-0.5 text-sm font-medium">
            View Case Study
          </span>
        </a>
      </article>
    </Reveal>
  )
}
