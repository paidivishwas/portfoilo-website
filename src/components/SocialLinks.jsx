import { Mail, FileText } from 'lucide-react'
import { siWhatsapp, siBehance, siGithub, siInstagram, siX } from 'simple-icons'
import { socials } from '../data/content'

// simple-icons no longer ships LinkedIn, so its path is inlined.
const LINKEDIN_PATH =
  'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'

const Brand = ({ path }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d={path} />
  </svg>
)

const icons = {
  resume: <FileText size={20} strokeWidth={1.75} />,
  mail: <Mail size={20} strokeWidth={1.75} />,
  linkedin: <Brand path={LINKEDIN_PATH} />,
  whatsapp: <Brand path={siWhatsapp.path} />,
  behance: <Brand path={siBehance.path} />,
  github: <Brand path={siGithub.path} />,
  instagram: <Brand path={siInstagram.path} />,
  x: <Brand path={siX.path} />,
}

/**
 * Pill links. At rest: a translucent tint of the brand colour with a coloured icon.
 * On hover/focus: the pill fills solid with the brand colour.
 */
export default function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-3">
      {socials.map((s) => (
        <li key={s.key}>
          <a
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            aria-label={s.label}
            style={{ '--c': s.color, '--on': s.on }}
            className="group inline-flex h-14 items-center gap-2.5 rounded-full border border-[color-mix(in_srgb,var(--c)_28%,transparent)] bg-[color-mix(in_srgb,var(--c)_10%,transparent)] px-5 text-[15px] font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--c)] hover:bg-[var(--c)] hover:text-[var(--on)] focus-visible:border-[var(--c)] focus-visible:bg-[var(--c)] focus-visible:text-[var(--on)]"
          >
            <span className="text-[var(--c)] transition-colors duration-300 group-hover:text-[var(--on)] group-focus-visible:text-[var(--on)]">
              {icons[s.key]}
            </span>
            {s.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
