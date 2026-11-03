import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { INTRO_S, INTRO_EXIT_S } from '../lib/intro'

const ORANGE = '#ff5a1f'
const ease = [0.22, 1, 0.36, 1]

/** Lightning bolt mark (simple geometric path). */
function Bolt() {
  return (
    <svg viewBox="0 0 48 64" className="h-full w-full" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="bolt-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff8a3d" />
          <stop offset="1" stopColor="#ff4a00" />
        </linearGradient>
      </defs>
      <path d="M30 0 L4 36 H21 L14 64 L44 24 H27 Z" fill="url(#bolt-fill)" />
    </svg>
  )
}

/**
 * Cinematic startup screen, shown once per page load.
 * Black screen -> bolt scales/rotates in with a glow and a light streak -> lifts away.
 * Skipped entirely when the user prefers reduced motion.
 */
export default function Intro() {
  const reduce = useReducedMotion()
  const [show, setShow] = useState(!reduce)

  useEffect(() => {
    const root = document.documentElement
    if (!show) {
      root.classList.add('intro-done')
      return
    }
    const t = setTimeout(() => {
      root.classList.add('intro-done') // un-pauses the nav animations
      setShow(false)
    }, INTRO_S * 1000)
    return () => clearTimeout(t)
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
          style={{ background: '#050505' }}
          exit={{ opacity: 0, y: -32 }}
          transition={{ duration: INTRO_EXIT_S, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          {/* Soft orange glow that fades in and out */}
          <motion.div
            className="absolute h-64 w-64 rounded-full blur-3xl md:h-96 md:w-96"
            style={{ background: ORANGE }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 0.4, 0.18], scale: [0.6, 1.1, 1] }}
            transition={{ duration: 1.5, ease }}
          />

          {/* Light streak sweeping across the logo */}
          <motion.div
            className="absolute h-px w-[70vw] max-w-3xl"
            style={{ background: `linear-gradient(90deg, transparent, ${ORANGE}, transparent)` }}
            initial={{ x: '-70vw', opacity: 0 }}
            animate={{ x: '70vw', opacity: [0, 1, 0] }}
            transition={{ duration: 1, delay: 0.45, ease: 'easeInOut' }}
          />

          {/* Logo */}
          <motion.div
            className="relative h-20 w-14 md:h-28 md:w-20"
            initial={{ scale: 0.7, rotate: -12, opacity: 0 }}
            animate={{
              scale: 1,
              rotate: 0,
              opacity: 1,
              filter: [
                'drop-shadow(0 0 0px rgba(255,90,31,0))',
                'drop-shadow(0 0 26px rgba(255,90,31,0.85))',
                'drop-shadow(0 0 12px rgba(255,90,31,0.4))',
              ],
            }}
            transition={{
              scale: { duration: 1.1, ease },
              rotate: { duration: 1.1, ease },
              opacity: { duration: 0.5 },
              filter: { duration: 1.5, ease: 'easeInOut' },
            }}
          >
            <Bolt />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
