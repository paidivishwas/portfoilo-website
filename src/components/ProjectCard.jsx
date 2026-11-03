import { ArrowUpRight } from 'lucide-react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import Reveal from './Reveal'

const MAX_TILT = 8 // degrees

export default function ProjectCard({ project, index, icon: Icon }) {
  const reduce = useReducedMotion()
  const px = useMotionValue(0) // pointer position, -0.5..0.5 across the card
  const py = useMotionValue(0)
  const spring = { stiffness: 180, damping: 18, mass: 0.6 }
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [MAX_TILT, -MAX_TILT]), spring)
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-MAX_TILT, MAX_TILT]), spring)

  const onMove = (e) => {
    if (reduce || e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width - 0.5)
    py.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => {
    px.set(0)
    py.set(0)
  }

  return (
    <Reveal delay={(index % 2) * 0.1}>
      <article className="group">
        <a href={project.href} className="block" aria-label={`View case study: ${project.title}`}>
          {/* Thumbnail placeholder: replace with an <img> when assets are ready */}
          <div style={{ perspective: 900 }} onPointerMove={onMove} onPointerLeave={onLeave}>
            <motion.div
              style={reduce ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-tile transition-colors duration-500 group-hover:bg-ink"
            >
              <span className="absolute left-5 top-4 text-sm text-mute transition-colors group-hover:text-mute">
                0{index + 1}
              </span>
              {/* Slow zoom on hover */}
              <Icon
                size={72}
                strokeWidth={1}
                className="text-mute transition-all duration-[1200ms] ease-out group-hover:scale-[1.6] group-hover:text-paper"
              />
            </motion.div>
          </div>
          <div className="mt-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-mute">{project.category}</p>
              <h3 className="mt-1 text-xl font-semibold tracking-tight">{project.title}</h3>
            </div>
            <ArrowUpRight
              className="mt-1 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              size={22}
            />
          </div>
          <p className="mt-3 max-w-md text-mute">{project.description}</p>
          <span className="mt-4 inline-block border-b border-ink pb-0.5 text-sm font-medium">
            View Case Study
          </span>
        </a>
      </article>
    </Reveal>
  )
}
