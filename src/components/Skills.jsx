import Section from './Section'
import Reveal from './Reveal'
import ToolCard from './ToolCard'
import { skillGroups, tools } from '../data/content'

function SkillGroup({ group, index }) {
  return (
    <Reveal delay={index * 0.1} className="h-full">
      <section
        aria-labelledby={`skill-group-${index}`}
        className="flex h-full flex-col rounded-[2rem] border border-line bg-tile p-6 md:p-8"
      >
        <p className="font-mono text-xs text-mute">0{index + 1}</p>
        <h3 id={`skill-group-${index}`} className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
          {group.title}
        </h3>
        <ul className="mt-6 flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-line px-3.5 py-1.5 text-sm text-mute transition-colors duration-300 hover:border-accent hover:text-ink"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </Reveal>
  )
}

export default function Skills() {
  return (
    <Section id="skills" label="Skills" title="What I bring to a product.">
      <div className="grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <SkillGroup key={group.title} group={group} index={i} />
        ))}
      </div>

      <Reveal className="mt-16">
        <h3 className="mb-6 text-sm uppercase tracking-widest text-mute">Design &amp; Development Tools</h3>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.filter((t) => !t.ai).map((t) => (
            <li key={t.name}>
              <ToolCard tool={t} />
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-16">
        <h3 className="mb-6 text-sm uppercase tracking-widest text-mute">AI Tools</h3>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.filter((t) => t.ai).map((t) => (
            <li key={t.name}>
              <ToolCard tool={t} />
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
