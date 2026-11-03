import { Mail, Phone, ArrowUpRight } from 'lucide-react'
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

/** Contact line whose icon fades in from the left on hover/focus. */
function ContactLink({ href, icon: Icon, children }) {
  return (
    <a href={href} className={`group relative flex items-center ${linkClass}`}>
      <Icon
        size={18}
        strokeWidth={1.5}
        className="absolute -left-7 hidden text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:block md:-translate-x-2"
      />
      <span className="break-all">{children}</span>
    </a>
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
          <div className="space-y-5 md:pl-7">
            <ContactLink href={`mailto:${profile.email}`} icon={Mail}>{profile.email}</ContactLink>
            <ContactLink href={`tel:${profile.phoneRaw}`} icon={Phone}>{profile.phone}</ContactLink>
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
