import { useEffect, useRef } from 'react'
import { INTRO_S } from '../lib/intro'

const DENSITY = 0.72
const MAX_WIDTH = 2560
const REVEAL_MS = 1400

const rand = (a, b) => a + Math.random() * (b - a)
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v)

/**
 * Page-attached starfield: tiny white stars plus a few accent-coloured ones, brighter toward the
 * left/right edges so the centre column stays calm. Scrolls with the page, fades in after the intro.
 */
export default function ParticleField() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const root = document.documentElement
    const isLight = () => root.dataset.theme === 'light'
    const accentColor = () => getComputedStyle(root).getPropertyValue('--accent').trim() || '#8cd55b'

    let w = 0
    let h = 0
    let docH = 0
    let dpr = 1
    let stars = []
    let accents = []
    let raf = 0
    let ticking = false
    const t0 = performance.now() + (reduce ? 0 : INTRO_S * 1000)

    const edge = (x) => 0.32 + 0.68 * Math.pow(Math.abs(x - w / 2) / (w / 2), 1.4)

    const build = () => {
      w = Math.min(root.clientWidth, MAX_WIDTH)
      h = window.innerHeight
      docH = root.scrollHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      const area = w * docH
      const nStars = Math.min(1200, Math.round((area / 9800) * DENSITY))
      const nAccents = Math.min(440, Math.round((area / 21000) * DENSITY))
      stars = Array.from({ length: nStars }, () => ({
        x: rand(0, w),
        y: rand(0, docH),
        r: Math.random() < 0.82 ? rand(0.5, 1.3) : rand(1.3, 2.1),
        a: rand(0.32, 0.85),
      }))
      accents = Array.from({ length: nAccents }, () => ({
        x: rand(0, w),
        y: rand(0, docH),
        r: rand(0.8, 2.1),
        a: rand(0.55, 1),
      }))
    }

    const draw = () => {
      const scrollY = window.scrollY || 0
      const reveal = reduce ? 1 : clamp01((performance.now() - t0) / REVEAL_MS)
      const eased = 1 - Math.pow(1 - reveal, 3)
      const light = isLight()

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = light ? 'source-over' : 'lighter'

      const paint = (list, color) => {
        ctx.fillStyle = color
        for (const s of list) {
          const y = s.y - scrollY
          if (y < -3 || y > h + 3) continue
          const alpha = s.a * edge(s.x) * eased
          if (alpha < 0.01) continue
          ctx.globalAlpha = alpha
          ctx.beginPath()
          ctx.arc(s.x, y, s.r, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      // White stars on dark; on light backgrounds everything uses the accent so it stays visible.
      paint(stars, light ? accentColor() : '#ffffff')
      paint(accents, light ? accentColor() : '#a3f072')
      ctx.globalAlpha = 1
      ctx.globalCompositeOperation = 'source-over'

      if (reveal < 1) raf = requestAnimationFrame(draw)
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        draw()
        ticking = false
      })
    }

    let resizeTimer
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        const widthChanged = Math.min(root.clientWidth, MAX_WIDTH) !== w
        const heightChanged = Math.abs(root.scrollHeight - docH) > docH * 0.1
        if (widthChanged || heightChanged) build()
        draw()
      }, 150)
    }

    build()
    draw()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })
    const ro = new ResizeObserver(onResize)
    ro.observe(document.body)
    const mo = new MutationObserver(draw)
    mo.observe(root, { attributes: true, attributeFilter: ['data-theme'] })

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(resizeTimer)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      ro.disconnect()
      mo.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-1/2 top-0 -z-10 block h-screen w-full -translate-x-1/2"
    />
  )
}
