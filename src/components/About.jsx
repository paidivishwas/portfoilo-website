import Section from './Section'
import Reveal from './Reveal'
import { about } from '../data/content'

export default function About() {
  return (
    <Section id="about" label="About" title="Design that is clear, considered, and human.">
      <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
        <Reveal>
          <p className="text-7xl font-semibold tracking-tighter md:text-8xl">{about.years}</p>
          <p className="mt-2 text-mute">years of product design experience</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg leading-relaxed md:text-xl">{about.intro}</p>
          <p className="mt-6 leading-relaxed text-mute">{about.detail}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {about.skills.map((s) => (
              <li key={s} className="rounded-full border border-line px-4 py-1.5 text-sm">
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
