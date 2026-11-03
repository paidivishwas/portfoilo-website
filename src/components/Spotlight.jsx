import { useEffect, useRef } from 'react'

/** Soft accent glow that eases after the mouse. Fine-pointer devices only. */
export default function Spotlight() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const ok =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!el || !ok) return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y
    let raf

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
      el.style.opacity = '1'
    }
    const onLeave = () => { el.style.opacity = '0' }
    const tick = () => {
      x += (tx - x) * 0.12
      y += (ty - y) * 0.12
      el.style.setProperty('--x', `${x}px`)
      el.style.setProperty('--y', `${y}px`)
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove)
    document.addEventListener('pointerleave', onLeave)
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={ref} className="spotlight" aria-hidden="true" />
}
