export const profile = {
  name: 'Vishwas',
  fullName: 'Vishwas Paidi',
  eyebrow: 'Product Designer & UI/UX Designer',
  headline: ['Think Deep.', 'Design Smart.', 'Make Impact.'],
  description:
    'Bridging user needs and business goals through meaningful, intuitive digital experiences.',
  caption: 'Paidi Vishwas · Portfolio 2026',
  email: 'paidivishwas@gmail.com',
  phone: '+91 83400 11320',
  phoneRaw: '+918340011320',
  portfolio: '#work',
  // TODO: confirm these hire-card details
  availability: 'Open to work',
  resume: 'https://drive.google.com/file/d/1Aq1VD-67xCGD1FFl6IMGoCyaHFUU69vw/view?usp=sharing',
  linkedin: 'https://www.linkedin.com/feed/',
}

export const about = {
  title: 'About VP',
  lead: "Hi, I'm Paidi Vishwas, a Product Designer & UI/UX Designer crafting intuitive and user-centered digital experiences that simplify everyday problems.",
  paragraphs: [
    "I'm a Product Designer & UI/UX Designer with a background in Computer Science and Engineering (AI & ML). I enjoy turning complex problems into simple, meaningful, and user-friendly designs that look good and work seamlessly. My technical background helps me approach design with a balance of creativity, logic, and a deeper understanding of how digital products work. I'm passionate about creating thoughtful experiences that meet user needs and deliver real value.",
  ],
  approachTitle: 'My Design Approach',
  approach:
    "I start by understanding the user's needs and the business goals, then explore ideas, test solutions, and refine the experience until it feels intuitive and effortless. I believe good design is not just about how things look, but how naturally they work and how meaningfully they solve real problems.",
}

// Filter pills above the projects. A filter with no projects shows an empty state.
export const projectFilters = ['Case Study', 'UX Challenges']

// TODO: confirm/replace the subtitle, platforms and focus areas with your real details.
// category decides which filter a project appears under.
// devices = mockups shown under the text (type: phone | tablet | tv). Add screenshots later.
export const projects = [
  {
    id: 'fleet-management',
    cover: '/case/fleetflow/hero.jpg',
    title: 'FleetFlow',
    subtitle: 'Exception-first Fleet Management',
    description:
      'A B2B dashboard that turns fleet data into a short, ranked list of decisions, so logistics teams fix problems before they become delays.',
    platforms: ['Web App', 'Dashboard', 'B2B SaaS'],
    focusAreas: ['UX Research', 'Information Architecture', 'Design System', 'Prototyping'],
    category: 'Case Study',
    href: '#/case/fleet-management',
    figma: 'https://www.figma.com/proto/u5W31UJNtyu2j0aghtQawe/fleet-management?node-id=17-2616&t=ikq6EFaOBfG8xs4T-1&scaling=min-zoom&content-scaling=fixed&page-id=17%3A2507&starting-point-node-id=17%3A2616&show-proto-sidebar=1',
  },
  {
    id: 'epsom-salt-pdp',
    cover: '/case/epsom/hero.jpg',
    title: 'Epsom Salt PDP',
    subtitle: 'E-commerce product page redesign',
    description: 'A redesign of Carbamide Forte’s Epsom Salt product page: clearer hierarchy, a faster path to purchase and more trust.',
    platforms: ['Web', 'Desktop & Mobile', 'E-commerce'],
    focusAreas: ['UX/UI Design', 'Design System', 'Conversion'],
    category: 'Case Study',
    href: '#/case/epsom-salt-pdp',
  },
  {
    id: 'pawpulse',
    cover: '/case/pawpulse/hero.jpg',
    title: 'PawPulse',
    subtitle: 'Pet fitness tracker app',
    description: 'A companion app for a pet fitness wearable that tells owners, in one glance, whether their pet moved enough today.',
    platforms: ['Mobile App', 'Design Challenge'],
    focusAreas: ['UI/UX Design', 'Goal Flow', 'Prototyping'],
    category: 'UX Challenges',
    cta: 'View the challenge',
    href: '#/case/pawpulse',
  },
]

// icon: key of a brand logo in ToolCard.jsx, or badge: letters shown in a coloured tile. color = brand colour.
export const tools = [
  { name: 'Figma', desc: 'UI/UX & prototyping', icon: 'figma', color: '#f24e1e' },
  { name: 'FigJam', desc: 'Workshops & flows', badge: 'FJ', color: '#a259ff' },
  { name: 'Framer', desc: 'Interactive sites', icon: 'framer', color: '#0099ff' },
  { name: 'Adobe Illustrator', desc: 'Vector & illustration', badge: 'Ai', color: '#ff9a00' },
  { name: 'ChatGPT', ai: true, desc: 'AI research & ideation', badge: 'GPT', color: '#10a37f' },
  { name: 'Claude', ai: true, desc: 'AI writing & thinking', icon: 'claude', color: '#d97757' },
  { name: 'Claude Code', ai: true, desc: 'AI-assisted building', icon: 'claudecode', color: '#d97757' },
  { name: 'Google Gemini', ai: true, desc: 'AI assistant', icon: 'gemini', color: '#8e75b2' },
  { name: 'VS Code', desc: 'Code editor', badge: 'VS', color: '#0098ff' },
  { name: 'GitHub', desc: 'Version control', icon: 'github', color: '#e6edf3' },
  { name: 'WordPress', desc: 'Websites & CMS', icon: 'wordpress', color: '#21759b' },
  { name: 'Notion', desc: 'Docs & planning', icon: 'notion', color: '#e6edf3' },
  { name: 'Canva', desc: 'Quick graphics', badge: 'Ca', color: '#00c4cc' },
  { name: 'Vercel', desc: 'Deploy & hosting', icon: 'vercel', color: '#e6edf3' },
]

// TODO: replace each '#' with the real link
// color = brand colour used for the tinted pill and the hover fill; on = text colour on that fill
export const socials = [
  { key: 'resume', label: 'Resume', href: profile.resume, color: '#f59e0b', on: '#161616' },
  { key: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/feed/', color: '#0a66c2', on: '#ffffff' },
  { key: 'whatsapp', label: 'WhatsApp', href: `https://wa.me/${profile.phoneRaw.replace('+', '')}`, color: '#25d366', on: '#0b2a16' },
  { key: 'behance', label: 'Behance', href: 'https://www.behance.net/paidivishwas', color: '#1769ff', on: '#ffffff' },
  { key: 'github', label: 'GitHub', href: 'https://github.com/repos', color: '#e6edf3', on: '#161616' },
  { key: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/', color: '#e4405f', on: '#ffffff' },
  { key: 'x', label: 'X', href: 'https://x.com/home?lang=en', color: '#e6edf3', on: '#161616' },
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

export const skillGroups = [
  {
    title: 'UX & Product Design',
    skills: [
      'Product Design', 'UI/UX Design', 'Interaction Design', 'Information Architecture',
      'User Journeys', 'User Flows', 'Wireframing', 'Prototyping', 'Complex Workflow Simplification',
    ],
  },
  {
    title: 'Design Systems & UI',
    skills: [
      'Design Systems', 'Component Libraries', 'Design Tokens', 'Figma Variables',
      'Theming', 'Responsive Design', 'Multi-platform UI', 'Accessibility (WCAG)',
    ],
  },
  {
    title: 'Research & Validation',
    skills: [
      'User Research', 'Usability Testing', 'User Personas', 'Journey Mapping',
      'Design Validation', 'Iterative Design',
    ],
  },
]
