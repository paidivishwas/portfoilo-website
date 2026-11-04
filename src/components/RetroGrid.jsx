import { useEffect, useRef } from 'react'
import { INTRO_S } from '../lib/intro'

const SPEED = 0.35 // grid scroll speed (rows per second)
const REVEAL_MS = 1800

const easeExpo = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t))
const easeQuint = (t) => 1 - Math.pow(1 - t, 5)

/**
 * Perspective "retro" grid that recedes to a horizon at the top of the box and drifts forward.
 * Lines grow out of the horizon after the intro. Pauses when off-screen or when the tab is hidden.
 */
export default function RetroGrid({ className = '' }) {
  const wrapRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!wrap || !ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0
    let h = 0
    let dpr = 1
    let spacing = 0
    let half = 0
    let step = 1
    let color = getComputedStyle(canvas).color
    let phase = 0
    let running = false
    let raf = 0
    let last = 0
    const startAt = performance.now() + (reduce ? 0 : INTRO_S * 1000)

    const measure = () => {
      const r = wrap.getBoundingClientRect()
      w = r.width
      h = r.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.round(w * dpr))
      canvas.height = Math.max(1, Math.round(h * dpr))
      spacing = Math.min(240, h * 0.82)
      half = Math.ceil(w / 2 / spacing) + 6
      step = (spacing / Math.max(h - spacing, 1)) * 0.5
    }

    const draw = (grow, horizonReveal) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, w, h)
      ctx.strokeStyle = color
      ctx.lineWidth = 1

      // Converging vertical lines, drawn from the horizon outward by `grow` (0..1)
      const cx = w / 2
      ctx.beginPath()
      for (let c = -half; c <= half; c++) {
        const offset = c * spacing
        const topX = cx + offset / h
        const topY = 1
        const botX = cx + offset
        ctx.moveTo(topX, topY)
        ctx.lineTo(topX + (botX - topX) * grow, topY + (h - topY) * grow)
      }
      ctx.stroke()

      // Horizontal lines that spread apart toward the viewer
      const hide = (h / 1.5 - 1) / (h - 1) * (1 - horizonReveal)
      ctx.beginPath()
      for (let c = 0; c < 400; c++) {
        const depth = 1 + (c + phase) * step
        const y = h / depth
        if (y < 1.5) break
        if ((depth - 1) / (h - 1) < hide) continue
        const yy = Math.round(y) + 0.5
        ctx.moveTo(0, yy)
        ctx.lineTo(w, yy)
      }
      ctx.stroke()
    }

    const frameState = (now) => {
      const t = Math.max(0, now - startAt)
      const z = Math.min(1, t / REVEAL_MS)
      return [easeExpo(z), easeQuint(z)]
    }

    const loop = (now) => {
      if (!running) return
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      phase = (((phase - SPEED * dt) % 1) + 1) % 1
      const [grow, horizon] = frameState(now)
      if (now >= startAt) draw(grow, horizon)
      raf = requestAnimationFrame(loop)
    }

    const start = () => {
      if (running || reduce) return
      running = true
      last = performance.now()
      raf = requestAnimationFrame(loop)
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    measure()
    if (reduce) draw(1, 1)

    const ro = new ResizeObserver(() => {
      measure()
      if (reduce || !running) draw(...frameState(performance.now()))
    })
    ro.observe(wrap)

    const mo = new MutationObserver(() => {
      color = getComputedStyle(canvas).color
      if (reduce || !running) draw(...frameState(performance.now()))
    })
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting && !document.hidden ? start() : stop()),
      { threshold: 0 },
    )
    io.observe(wrap)
    const onVisibility = () => (document.hidden ? stop() : start())
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      stop()
      ro.disconnect()
      mo.disconnect()
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  const mask =
    'linear-gradient(to bottom, transparent 0%, transparent 5%, #000 30%, #000 90%, transparent 100%), linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)'

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className={`pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-full max-w-[2560px] -translate-x-1/2 overflow-hidden ${className}`}
      style={{
        WebkitMaskImage: mask,
        maskImage: mask,
        WebkitMaskComposite: 'source-in',
        maskComposite: 'intersect',
      }}
    >
      <canvas ref={canvasRef} className="block h-full w-full text-line" />
    </div>
  )
}
