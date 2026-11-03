import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({ children, delay = 0, className = '' }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 64 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.34, 1.56, 0.64, 1], opacity: { duration: 0.45, delay, ease: 'easeOut' } }}
    >
      {children}
    </motion.div>
  )
}
