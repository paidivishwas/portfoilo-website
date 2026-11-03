import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import Reveal from './Reveal'
import Logo from './Logo'
import SocialLinks from './SocialLinks'
import { profile } from '../data/content'

const pages = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#work' },
  { label: 'Skills', href: '#skills' },
]

const linkClass = 'text-xl text-mute transition-colors hover:text-ink'

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
    <footer id="contact" className="border-t border-line py-20 md:py-28">
      <Reveal>
        <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.6fr]">
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

        </div>

        {/* Social pills */}
        <div className="mx-auto mt-16 max-w-6xl border-t border-line px-6 pt-12">
          <SocialLinks />
        </div>
      </Reveal>
    </footer>
  )
}
