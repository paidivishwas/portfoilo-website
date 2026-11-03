import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, Mail } from 'lucide-react'
import { profile } from '../data/content'
import { INTRO_S } from '../lib/intro'

export default function Hero() {
  const reduce = useReducedMotion()
  const base = reduce ? 0 : INTRO_S - 0.2 // start as the intro screen fades out

  // Blur-to-sharp fade, staggered per element
  const item = (i) => ({
    initial: reduce ? false : { opacity: 0, filter: 'blur(14px)', scale: 1.04 },
    animate: { opacity: 1, filter: 'blur(0px)', scale: 1 },
    transition: { duration: 0.9, delay: base + 0.14 * i, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section id="top" className="flex min-h-svh items-center pt-16">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <motion.h1
          {...item(0)}
          className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tighter sm:text-6xl md:text-8xl"
        >
          {profile.name}
        </motion.h1>
        <motion.p {...item(1)} className="mt-8 max-w-xl text-lg text-mute md:text-xl">
          {profile.description}
        </motion.p>
        <motion.div {...item(2)} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-80"
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
