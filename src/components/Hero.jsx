import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, Mail } from 'lucide-react'
import { profile } from '../data/content'

export default function Hero() {
  const reduce = useReducedMotion()
  const item = (i) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section id="top" className="flex min-h-svh items-center pt-16">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <motion.p {...item(0)} className="mb-6 text-sm uppercase tracking-widest text-mute">
          {profile.title}
        </motion.p>
        <motion.h1
          {...item(1)}
          className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tighter sm:text-6xl md:text-8xl"
        >
          {profile.name}
        </motion.h1>
        <motion.p {...item(2)} className="mt-8 max-w-xl text-lg text-mute md:text-xl">
          {profile.description}
        </motion.p>
        <motion.div {...item(3)} className="mt-10 flex flex-wrap gap-4">
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
