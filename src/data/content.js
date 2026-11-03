export const profile = {
  name: 'Vishwas',
  fullName: 'Vishwas Paidi',
  description:
    'Designing meaningful digital experiences across mobile, web, tablet, and smart TV platforms.',
  email: 'paidivishwas@gmail.com',
  phone: '+91 83400 11320',
  phoneRaw: '+918340011320',
  portfolio: '#work',
}

export const about = {
  intro:
    "I turn complex problems into clear, intuitive interfaces. My work blends user research, systems thinking, and careful visual craft.",
  detail:
    'With 1+ year of product design experience, I have shaped streaming, TV, and AI-driven products used across screens of every size — from phones to the living-room TV.',
  years: '1+',
  skills: ['UX Research', 'UI Design', 'Design Systems', 'Prototyping', 'Interaction Design'],
}

export const projects = [
  {
    title: 'OTT Platform Design',
    category: 'Streaming · Multi-platform',
    description:
      'End-to-end design of a streaming experience spanning mobile, web, tablet, and TV, with a consistent system and fast content discovery.',
    href: '#',
  },
  {
    title: 'Telekom Malaysia – Unifi TV 2.0',
    category: 'Smart TV · Telco',
    description:
      'A redesigned TV experience focused on remote-friendly navigation, personalised home, and simpler access to live and on-demand content.',
    href: '#',
  },
  {
    title: 'FanTV AI',
    category: 'AI · Entertainment',
    description:
      'An AI-powered fan experience that makes recommendations and engagement feel personal, playful, and effortless.',
    href: '#',
  },
  {
    title: 'Cloud DVR',
    category: 'TV · Utility',
    description:
      'Reimagined recording and playback flows so users can schedule, manage, and watch recordings without friction.',
    href: '#',
  },
]

export const tools = ['Figma', 'Adobe XD', 'Photoshop', 'Framer']

// TODO: replace each '#' with the real link
export const socials = [
  { label: 'Resume', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Mail', href: `mailto:${profile.email}` },
  { label: 'WhatsApp', href: `https://wa.me/${profile.phoneRaw.replace('+', '')}` },
  { label: 'GitHub', href: '#' },
  { label: 'Behance', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'X', href: '#' },
]

// TODO: replace with your real roles (newest first)
export const experience = [
  {
    role: 'Role Title',
    company: 'Company Name, City, Country',
    period: 'Mon YYYY - Present',
    description:
      'Short summary of what you do in this role: the platforms you design for, who you work with, and the impact of your work.',
  },
  {
    role: 'Previous Role Title',
    company: 'Previous Company, City, Country',
    period: 'Mon YYYY - Mon YYYY',
    description:
      'Short summary of this earlier role: what the company does and what you were responsible for.',
  },
]
