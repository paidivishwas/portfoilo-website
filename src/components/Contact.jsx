import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import Logo from './Logo'
import { profile, socials } from '../data/content'

const pages = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#work' },
  { label: 'Skills', href: '#skills' },
]

const linkClass = 'text-xl text-mute transition-colors hover:text-ink'

/** Contact line: opens mail/phone app; a small "Copy" button appears on hover. */
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
    <div className="group flex flex-wrap items-center gap-x-3 gap-y-1">
      <a href={href} className={`break-all ${linkClass}`}>{value}</a>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy ${value}`}
        className="rounded-full border border-line px-3 py-0.5 text-xs text-mute opacity-0 transition-all duration-300 hover:border-ink hover:text-ink focus-visible:opacity-100 group-hover:opacity-100 group-focus-within:opacity-100 [@media(hover:none)]:opacity-100"
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  )
}

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-line py-20 md:py-28">
      <Reveal>
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
          <ul className="space-y-5">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className={`group inline-flex items-center gap-2 ${linkClass}`}
                >
                  {s.label}
                  <ArrowUpRight
                    size={16}
                    className="text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </footer>
  )
}
