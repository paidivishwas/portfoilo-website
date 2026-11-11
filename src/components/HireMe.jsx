import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check, Copy, FileText, Mail, Phone, X } from 'lucide-react'
import Logo from './Logo'
import { profile } from '../data/content'

function CopyBtn({ value }) {
  const [done, setDone] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setDone(true)
      setTimeout(() => setDone(false), 1500)
    } catch {
      /* clipboard unavailable */
    }
  }
  return (
    <button
      type="button"
      onClick={copy}
      aria-label={done ? 'Copied' : `Copy ${value}`}
      className="shrink-0 text-mute transition-colors hover:text-ink"
    >
      {done ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
    </button>
  )
}

function Row({ icon: Icon, label, children, last }) {
  return (
    <div className={`flex items-center gap-4 py-3.5 ${last ? '' : 'border-b border-line'}`}>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-tile text-accent">
        <Icon size={20} />
      </span>
      <div className="min-w-0">
        <p className="text-sm text-mute">{label}</p>
        <div className="flex items-center gap-3 font-semibold text-ink">{children}</div>
      </div>
    </div>
  )
}

export default function HireMe() {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="fixed bottom-5 right-5 z-[60] inline-flex h-12 items-center rounded-full bg-accent px-6 text-sm font-semibold text-[#0b1405] shadow-[0_0_32px_-6px_rgba(140,213,91,0.6)] transition-transform hover:scale-105 md:bottom-auto md:right-6 md:top-12 md:z-[110]"
      >
        Hire me
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 md:p-8 md:pt-28"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`Hire ${profile.fullName}`}
              className="relative max-h-full w-full max-w-[420px] md:max-w-[700px] overflow-y-auto rounded-3xl border border-line bg-paper p-6 md:p-7 shadow-2xl"
              initial={reduce ? false : { opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-tile text-ink transition-colors hover:border-ink"
              >
                <X size={18} />
              </button>

              <div className="grid gap-6 md:grid-cols-[210px_1fr] md:gap-8">
                <div className="flex flex-col items-center rounded-2xl border border-line bg-tile p-5 text-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent bg-paper text-ink shadow-[0_0_36px_-8px_var(--accent)]">
                    <Logo size={40} className="nav__mark nav__mark--solid" />
                  </span>
                  <p className="mt-4 text-xl font-semibold leading-tight tracking-tight text-ink">{profile.fullName}</p>
                  <p className="mt-1 text-xs text-mute">UI/UX Designer / Product Designer</p>
                  <div className="mt-5 w-full border-t border-line pt-4">
                    <p className="text-4xl font-bold text-accent">1+</p>
                    <p className="text-xs text-mute">Year of experience</p>
                  </div>
                </div>

                <div className="flex flex-col pr-10 md:pr-0">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-sm font-semibold text-ink">
                    <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
                    {profile.availability}
                  </span>
                  <p className="mt-3 text-sm leading-6 text-mute">Have a project or role in mind? Let’s talk.</p>

                  <div className="mt-2">
                    <Row icon={Mail} label="Email">
                      <a href={`mailto:${profile.email}`} className="break-all">{profile.email}</a>
                      <CopyBtn value={profile.email} />
                    </Row>
                    <Row icon={Phone} label="Mobile" last>
                      <a href={`tel:${profile.phoneRaw}`}>{profile.phone}</a>
                      <CopyBtn value={profile.phone} />
                    </Row>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <a
                      href={profile.resume}
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent text-sm font-semibold text-[#0b1405] transition-opacity hover:opacity-85"
                    >
                      <FileText size={16} /> View resume
                    </a>
                    <a
                      href={profile.linkedin}
                      target={profile.linkedin.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-tile text-sm font-semibold text-ink transition-colors hover:border-ink"
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="#0a66c2" aria-hidden="true">
                        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
