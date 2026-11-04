import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, Mail } from 'lucide-react'
import { profile } from '../data/content'
import RetroGrid from './RetroGrid'
import { INTRO_S, INTRO_EXIT_S } from '../lib/intro'

/** Button label that rolls up on hover (same effect as the nav links). */
const Roll = ({ text }) => (
  <span className="roll" data-text={text}>
    <span className="roll__t">{text}</span>
  </span>
)

export default function Hero() {
  const reduce = useReducedMotion()
  // Nav opens first (it starts when the intro lifts); hero follows shortly after.
  const base = reduce ? 0 : INTRO_S + INTRO_EXIT_S * 0.5 + 0.4

  const reveal = (delay, from) => ({
    initial: reduce ? false : { opacity: 0, ...from },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.9, delay: base + delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center justify-center overflow-hidden pb-20 pt-36 md:min-h-[798px] md:pt-44"
    >
      {/* Soft lavender glow falling from the top of the page */}
      <motion.div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute left-1/2 top-[72px] h-[798px] w-full max-w-[1120px] -translate-x-1/2"
        initial={reduce ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, delay: base - 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: '50% 0%' }}
      />

      {/* Perspective grid receding into the horizon */}
      <RetroGrid />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center">
        <motion.p
          {...reveal(0, { y: 12 })}
          className="mb-8 text-xs font-medium uppercase tracking-[0.18em] text-mute sm:text-sm"
        >
          {profile.eyebrow}
        </motion.p>

        <h1 className="text-5xl font-bold leading-[0.95] tracking-tighter sm:text-6xl md:text-8xl">
          <span className="sr-only">{profile.headline.join(' ')}</span>
          {profile.headline.map((phrase, i) => (
            <span key={phrase} aria-hidden="true" className="block">
              <motion.span
                {...reveal(0.12 + i * 0.14, { y: -14 })}
                className="inline-block"
              >
                {phrase}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p {...reveal(0.6, { y: 24 })} className="mx-auto mt-8 max-w-xl text-lg text-mute md:text-xl">
          {profile.description}
        </motion.p>

        <motion.div {...reveal(0.76, { y: 12, scale: 0.94 })} className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="#work"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-paper shadow-[0_0_32px_-8px_rgba(255,90,31,0.5)] transition-opacity hover:opacity-85"
          >
            <Roll text="View My Work" /> <ArrowDownRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink/20 bg-tile px-6 text-sm font-medium transition-colors hover:border-ink"
          >
            <Mail size={16} /> <Roll text="Contact Me" />
          </a>
        </motion.div>

        <motion.div {...reveal(0.92, { y: 8 })} className="mx-auto mt-14 max-w-xl">
          <div className="h-px bg-line" aria-hidden="true" />
          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-mute">{profile.caption}</p>
        </motion.div>
      </div>
    </section>
  )
}
