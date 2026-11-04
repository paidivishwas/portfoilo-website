import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import CaseStudyCard from './CaseStudyCard'

function StackItem({ study, index, total, progress, reduce }) {
  // Each card shrinks slightly as the next one slides over it.
  const target = index === total - 1 ? 1 : 1 - (total - 1 - index) * 0.04
  const scale = useTransform(progress, [index / total, 1], [1, target])

  return (
    <li className="mb-6 last:mb-0 md:sticky md:top-32 md:mb-[10vh] md:last:mb-0 motion-reduce:static motion-reduce:mb-6">
      <motion.div
        style={reduce ? undefined : { scale, transformOrigin: '50% 0%' }}
        className="md:h-[calc(100svh-10rem)] md:max-h-[44rem] md:min-h-[34rem]"
      >
        <CaseStudyCard study={study} />
      </motion.div>
    </li>
  )
}

/** Cards pin to the top and stack on top of one another while scrolling (desktop). */
export default function CaseStudyStack({ studies }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  return (
    <ul ref={ref} className="flex flex-col">
      {studies.map((s, i) => (
        <StackItem
          key={s.id}
          study={s}
          index={i}
          total={studies.length}
          progress={scrollYProgress}
          reduce={reduce}
        />
      ))}
    </ul>
  )
}
