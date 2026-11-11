import { useState } from 'react'
import { Copy, Check, FileText } from 'lucide-react'
import { siWhatsapp, siBehance, siGithub, siInstagram, siX } from 'simple-icons'
import Reveal from './Reveal'
import Logo from './Logo'
import SectionMarker from './SectionMarker'
import { profile, socials } from '../data/content'

const pages = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#work' },
  { label: 'Skills', href: '#skills' },
]

const LINKEDIN =
  'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z'

const paths = {
  linkedin: LINKEDIN,
  whatsapp: siWhatsapp.path,
  behance: siBehance.path,
  github: siGithub.path,
  instagram: siInstagram.path,
  x: siX.path,
}

/** Same muted tile for every icon; on hover, focus or press it inverts to white. */
const tileClass =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-tile text-mute transition-all duration-200 group-hover:border-ink group-hover:bg-ink group-hover:text-paper group-focus-visible:border-ink group-focus-visible:bg-ink group-focus-visible:text-paper group-active:scale-95"

function SocialIcon({ k }) {
  return (
    <span className={tileClass} aria-hidden="true">
      {k === "resume" ? (
        <FileText size={18} />
      ) : (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d={paths[k]} />
        </svg>
      )}
    </span>
  )
}

const linkClass ='text-xl text-mute transition-colors hover:text-ink'

/** Contact line: opens mail/phone app; a copy icon at the start appears on hover. */
function ContactLink({ href, value }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="group flex items-center gap-3">
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? 'Copied' : `Copy ${value}`}
        className="shrink-0 text-mute opacity-0 transition-all duration-300 hover:text-ink focus-visible:opacity-100 group-hover:opacity-100 group-focus-within:opacity-100 [@media(hover:none)]:opacity-100"
      >
        {copied ? <Check size={18} className="text-accent" /> : <Copy size={18} />}
      </button>
      <a href={href} className={`break-all ${linkClass}`}>{value}</a>
    </div>
  )
}

export default function Contact() {
  return (
    <footer id="contact" className="py-20 md:py-28">
      <Reveal>
        <div className="mx-auto mb-14 max-w-6xl px-6 md:mb-20">
          <SectionMarker label="Contact" />
        </div>
        <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.4fr_1fr]">
          {/* Brand */}
          <div>
            <Logo size={40} className="nav__mark text-ink" />
            <p className="mt-5 text-sm text-mute">
              {profile.fullName} © {new Date().getFullYear()}
            </p>
          </div>

          {/* Pages */}
          <ul className="space-y-5">
            {pages.map((p) => (
              <li key={p.label}>
                <a href={p.href} className={linkClass}>{p.label}</a>
              </li>
            ))}
          </ul>

          {/* Contact details */}
          <div className="space-y-5">
            <ContactLink href={`mailto:${profile.email}`} value={profile.email} />
            <ContactLink href={`tel:${profile.phoneRaw}`} value={profile.phone} />
          </div>

          {/* Socials */}
          <ul className="space-y-3">
            {socials.map((s) => (
              <li key={s.key}>
                <a
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  onClick={s.href === '#' ? (e) => e.preventDefault() : undefined}
                  className={`group inline-flex items-center gap-4 ${linkClass}`}
                >
                  <SocialIcon k={s.key} />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </footer>
  )
}
