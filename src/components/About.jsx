import Reveal from './Reveal'
import { about } from '../data/content'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 id="about-title" className="text-3xl font-semibold tracking-tight md:text-5xl">
            {about.title}
          </h2>
        </Reveal>

        <div className="mt-10 max-w-3xl space-y-8 md:mt-14">
          <Reveal delay={0.05}>
            <p className="text-lg font-semibold leading-snug text-ink md:text-xl">{about.lead}</p>
          </Reveal>

          {about.paragraphs.map((text, i) => (
            <Reveal key={i} delay={0.1 + i * 0.05}>
              <p className="text-lg leading-8 text-mute md:text-xl md:leading-9">{text}</p>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <p className="text-lg font-semibold leading-snug text-ink md:text-xl">{about.approachTitle}</p>
            <p className="mt-3 text-lg leading-8 text-mute md:text-xl md:leading-9">{about.approach}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
