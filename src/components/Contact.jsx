import { Mail, Link2, ArrowUpRight } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { profile } from '../data/content'

const rows = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Link2, label: 'LinkedIn', value: 'Connect on LinkedIn', href: profile.linkedin },
]

export default function Contact() {
  return (
    <Section id="contact" label="Contact" title="Let's build something meaningful together.">
      <Reveal>
        <ul className="border-t border-line">
          {rows.map(({ icon: Icon, label, value, href }) => (
            <li key={label} className="border-b border-line">
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 py-6"
              >
                <span className="flex items-center gap-4">
                  <Icon size={20} className="text-mute" />
                  <span className="text-sm uppercase tracking-widest text-mute">{label}</span>
                </span>
                <span className="flex items-center gap-2 text-lg md:text-2xl">
                  <span className="break-all">{value}</span>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.portfolio}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-80"
        >
          View Portfolio <ArrowUpRight size={16} />
        </a>
      </Reveal>
    </Section>
  )
}
