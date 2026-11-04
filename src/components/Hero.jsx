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
      className="relative flex min-h-svh items-center justify-center overflow-hidden pb-24 pt-28 md:min-h-[798px]"
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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 text-center">
        <motion.h1
          {...reveal(0, { y: 32 })}
          className="text-6xl font-bold leading-[0.9] tracking-tighter sm:text-7xl md:text-8xl"
        >
          {profile.name}
        </motion.h1>
        <motion.p {...reveal(0.18, { y: 24 })} className="mx-auto mt-8 max-w-xl text-lg text-mute md:text-xl">
          {profile.description}
        </motion.p>

        <motion.div {...reveal(0.36, { y: 12, scale: 0.94 })} className="mt-12 flex flex-wrap justify-center gap-4">
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

      </div>
    </section>
  )
}
