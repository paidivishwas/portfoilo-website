import Reveal from './Reveal'
import { about } from '../data/content'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="mb-6 text-sm uppercase tracking-widest text-mute">About Me</p>
          <h2 id="about-title" className="text-2xl font-semibold leading-snug tracking-tight md:text-4xl md:leading-snug">
            {about.headline}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-base leading-relaxed text-mute md:text-lg md:leading-relaxed">
            {about.intro}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <h3 className="mt-14 text-xl font-semibold tracking-tight md:text-2xl">
            {about.approachTitle}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-mute md:text-lg md:leading-relaxed">
            {about.approach}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
