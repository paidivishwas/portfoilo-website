import { useCallback, useEffect, useRef, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { profile } from '../data/content'
import Logo from './Logo'

const links = [
  { label: 'Projects', id: 'work' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
]

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Text that "rolls" up on hover (duplicate slides in from below). */
const Roll = ({ text }) => (
  <span className="roll" data-text={text}>
    <span className="roll__t">{text}</span>
  </span>
)

const RollIcon = ({ children }) => (
  <span className="roll roll--icon" aria-hidden="true">
    <span className="roll__t">{children}</span>
    <span className="roll__t roll__t--dup">{children}</span>
  </span>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')
  const [active, setActive] = useState(null)
  const [hl, setHl] = useState({ x: 0, w: 0, visible: false, fluid: false, pressed: false })
  const [dot, setDot] = useState({ x: 0, visible: false })
  const [dotReady, setDotReady] = useState(false)

  const listRef = useRef(null)
  const itemRefs = useRef({})
  const themeBtn = useRef(null)

  /* ---- sliding hover highlight ---- */
  const onEnter = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    const l = listRef.current.getBoundingClientRect()
    setHl((h) => ({ ...h, x: r.left - l.left, w: r.width, visible: true }))
    requestAnimationFrame(() => setHl((h) => ({ ...h, fluid: true })))
  }
  const onLeave = () => setHl((h) => ({ ...h, visible: false, fluid: false, pressed: false }))

  /* ---- scroll-spy: which section is under the nav ---- */
  useEffect(() => {
    let ticking = false
    const spy = () => {
      ticking = false
      let current = null
      for (const { id } of links) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 96) current = id
      }
      // Short last section can never reach the top, so treat page bottom as the last link
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      if (atBottom) current = links[links.length - 1].id
      setActive(current)
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(spy)
      }
    }
    spy()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  /* ---- active dot position (after the intro animation finishes) ---- */
  useEffect(() => {
    const t = setTimeout(() => setDotReady(true), reducedMotion() ? 0 : 1700)
    return () => clearTimeout(t)
  }, [])

  const placeDot = useCallback(() => {
    const el = active && itemRefs.current[active]
    if (!el || !listRef.current) return setDot((d) => ({ ...d, visible: false }))
    const r = el.getBoundingClientRect()
    const l = listRef.current.getBoundingClientRect()
    setDot({ x: r.left - l.left + r.width / 2, visible: true })
  }, [active])

  useEffect(() => {
    placeDot()
    window.addEventListener('resize', placeDot)
    return () => window.removeEventListener('resize', placeDot)
  }, [placeDot])

  /* ---- theme toggle with circular reveal ---- */
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    const apply = () => {
      document.documentElement.dataset.theme = next
      try { localStorage.setItem('theme', next) } catch { /* storage unavailable */ }
      setTheme(next)
    }
    const root = document.documentElement
    if (reducedMotion() || !document.startViewTransition) return apply()

    const b = themeBtn.current.getBoundingClientRect()
    const x = b.left + b.width / 2
    const y = b.top + b.height / 2
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
    root.classList.add('theme-vt')
    const vt = document.startViewTransition(apply)
    vt.ready.then(() =>
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 480, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', pseudoElement: '::view-transition-new(root)' },
      ),
    )
    vt.finished.finally(() => root.classList.remove('theme-vt'))
  }

  /* ---- mobile panel: close on Escape ---- */
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const hlClass = ['nav__highlight', hl.visible && 'is-visible', hl.fluid && 'is-fluid', hl.pressed && 'is-pressed']
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <div className="nav__top-mask" aria-hidden="true" />
      <header className={`nav${open ? ' nav--open' : ''}`}>
        <div className="nav__pill">
          <div className="nav__pill-bg" aria-hidden="true" />

          <a href="#top" className="nav__logo" aria-label={`${profile.name} — home`}>
            <Logo />
            <span className="nav__wordmark">{profile.fullName}</span>
          </a>

          <nav className="nav__primary" aria-label="Primary">
            <ul className="nav__items" ref={listRef} onMouseLeave={onLeave}>
              <span
                className={hlClass}
                style={{ width: hl.w, transform: `translate3d(${hl.x}px, -50%, 0) scale(${hl.pressed ? 0.97 : 1})` }}
                aria-hidden="true"
              />
              <span
                className={`nav__active${dot.visible && dotReady ? ' is-visible' : ''}`}
                style={{ transform: `translate3d(${dot.x}px, 0, 0)` }}
                aria-hidden="true"
              />
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    ref={(el) => (itemRefs.current[l.id] = el)}
                    className={`nav__item${active === l.id ? ' is-active' : ''}`}
                    onMouseEnter={onEnter}
                    onMouseDown={() => setHl((h) => ({ ...h, pressed: true }))}
                    onMouseUp={() => setHl((h) => ({ ...h, pressed: false }))}
                    onClick={() => setActive(l.id)}
                  >
                    <Roll text={l.label} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={themeBtn}
            type="button"
            className="nav__theme"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <RollIcon>{theme === 'dark' ? <Sun size={16} strokeWidth={1.5} /> : <Moon size={16} strokeWidth={1.5} />}</RollIcon>
          </button>

          <button
            type="button"
            className="nav__menu-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className="nav__menu-line" />
            <span className="nav__menu-line" />
            <span className="nav__menu-line" />
          </button>
        </div>

        <div className="nav__panel" aria-hidden={!open} inert={!open}>
          <div className="nav__panel-bg" />
          <ul className="nav__panel-items">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`nav__panel-item${active === l.id ? ' is-active' : ''}`}
                  onClick={() => {
                    setActive(l.id)
                    setOpen(false)
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  )
}
