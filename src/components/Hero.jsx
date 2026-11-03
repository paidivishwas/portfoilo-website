import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, Mail } from 'lucide-react'
import { profile } from '../data/content'
import { INTRO_S, INTRO_EXIT_S } from '../lib/intro'

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
    <section id="top" className="flex min-h-svh items-center pt-16">
      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        {/* Very subtle orange accent glow behind the headline */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full blur-3xl md:h-96 md:w-96"
          style={{ background: '#ff5a1f' }}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 0.07 }}
          transition={{ duration: 2, delay: base, ease: 'easeOut' }}
        />

        <motion.h1
          {...reveal(0, { y: 32 })}
          className="relative max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tighter sm:text-6xl md:text-8xl"
        >
          {profile.name}
        </motion.h1>
        <motion.p {...reveal(0.18, { y: 24 })} className="relative mt-8 max-w-xl text-lg text-mute md:text-xl">
          {profile.description}
        </motion.p>
        <motion.div {...reveal(0.36, { y: 12, scale: 0.94 })} className="relative mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper shadow-[0_0_32px_-8px_rgba(255,90,31,0.5)] transition-opacity hover:opacity-80"
          >
            View My Work <ArrowDownRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
          >
            <Mail size={16} /> Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}
