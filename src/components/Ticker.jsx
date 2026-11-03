import { useRef } from 'react'
import {
  motion, useAnimationFrame, useMotionValue, useReducedMotion,
  useScroll, useSpring, useTransform, useVelocity,
} from 'framer-motion'

const wrap = (min, max, v) => {
  const r = max - min
  return ((((v - min) % r) + r) % r) + min
}

/** Endless text strip. Drifts left; scrolling speeds it up (and reverses it when scrolling up). */
export default function Ticker({ items, speed = 4 }) {
  const reduce = useReducedMotion()
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const smooth = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 })
  const boost = useTransform(smooth, [0, 1000], [0, 5], { clamp: false })
  const dir = useRef(1)
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`)

  useAnimationFrame((_, delta) => {
    if (reduce) return
    let move = dir.current * -speed * (delta / 1000)
    if (boost.get() < 0) dir.current = -1
    else if (boost.get() > 0) dir.current = 1
    move += dir.current * move * boost.get()
    baseX.set(baseX.get() + move)
  })

  // Two identical halves so the -50% wrap is seamless.
  const half = [...items, ...items].map((t, i) => (
    <span key={i} className="flex items-center gap-8 pr-8 md:gap-12 md:pr-12">
      <span>{t}</span>
      <span className="text-accent">•</span>
    </span>
  ))

  return (
    <div className="overflow-hidden border-y border-line py-8 md:py-12" aria-hidden="true">
      <motion.div
        style={{ x }}
        className="flex w-max whitespace-nowrap text-4xl font-semibold tracking-tight text-mute md:text-6xl"
      >
        <div className="flex">{half}</div>
        <div className="flex">{half}</div>
      </motion.div>
    </div>
  )
}
