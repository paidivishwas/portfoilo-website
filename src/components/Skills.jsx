import Section from './Section'
import Reveal from './Reveal'
import { tools } from '../data/content'

export default function Skills() {
  return (
    <Section id="skills" label="Skills & Tools" title="The tools I design with.">
      <ul className="grid grid-cols-2 border-l border-t border-line md:grid-cols-4">
        {tools.map((t, i) => (
          <li key={t} className="border-b border-r border-line">
            <Reveal delay={i * 0.07}>
              <div className="px-6 py-10 text-xl font-medium tracking-tight transition-colors hover:bg-ink hover:text-paper md:py-14">
                {t}
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
