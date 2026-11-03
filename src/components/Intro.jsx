import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Logo from './Logo'
import { INTRO_S } from '../lib/intro'

/** Full-screen intro: the VP logo draws itself, then the screen fades into the page. */
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
          className="fixed inset-0 z-[200] flex items-center justify-center bg-paper"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <Logo size={96} className="nav__mark intro-logo text-ink" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
