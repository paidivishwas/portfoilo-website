import { Briefcase } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <Section id="experience" label="Career" title="Experience">
      <ul className="space-y-6">
        {experience.map((job, i) => (
          <li key={`${job.role}-${job.period}`}>
            <Reveal delay={i * 0.1}>
              <article className="rounded-[2rem] border border-line bg-tile p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{job.role}</h3>
                  <span className="rounded-full border border-line px-3 py-1 font-mono text-xs text-mute">
                    {job.period}
                  </span>
                </div>
                <p className="mt-3 flex items-center gap-2 text-mute md:text-lg">
                  {/* Company logo placeholder: swap for an <img> when you have one */}
                  <Briefcase size={18} strokeWidth={1.5} className="shrink-0 text-accent" />
                  {job.company}
                </p>
                <p className="mt-6 max-w-3xl leading-relaxed text-mute">{job.description}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
