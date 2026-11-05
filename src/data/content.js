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
  resume: '#',
  linkedin: '#',
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
export const projectFilters = ['Case Study', 'UI Screens']

// TODO: confirm/replace the subtitle, platforms and focus areas with your real details.
// category decides which filter a project appears under.
// devices = mockups shown under the text (type: phone | tablet | tv). Add screenshots later.
export const projects = [
    {
    // TODO: add the real description, platforms and focus areas from the Figma file
    id: 'fleet-management',
    title: 'Fleet Management',
    subtitle: '',
    description: '',
    platforms: [],
    focusAreas: [],
    category: 'Case Study',
    href: 'https://www.figma.com/design/u5W31UJNtyu2j0aghtQawe/fleet-management?node-id=34-11',
    devices: [{ type: 'tablet', caption: 'Dashboard' }],
  },
  // Empty layouts, ready to be filled in
  { id: 'project-2', title: 'Project title', subtitle: '', description: '', platforms: [], focusAreas: [], category: 'Case Study', href: '#', devices: [{ type: 'phone', caption: 'Screen' }, { type: 'tv', caption: 'Screen' }] },
  { id: 'project-3', title: 'Project title', subtitle: '', description: '', platforms: [], focusAreas: [], category: 'Case Study', href: '#', devices: [{ type: 'phone', caption: 'Screen' }, { type: 'tablet', caption: 'Screen' }] },
  { id: 'project-4', title: 'Project title', subtitle: '', description: '', platforms: [], focusAreas: [], category: 'Case Study', href: '#', devices: [{ type: 'tv', caption: 'Screen' }, { type: 'phone', caption: 'Screen' }] },
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
  { key: 'resume', label: 'Resume', href: '#', color: '#f59e0b', on: '#161616' },
  { key: 'linkedin', label: 'LinkedIn', href: '#', color: '#0a66c2', on: '#ffffff' },
  { key: 'mail', label: 'Mail', href: `mailto:${profile.email}`, color: '#ea4335', on: '#ffffff' },
  { key: 'whatsapp', label: 'WhatsApp', href: `https://wa.me/${profile.phoneRaw.replace('+', '')}`, color: '#25d366', on: '#0b2a16' },
  { key: 'behance', label: 'Behance', href: '#', color: '#1769ff', on: '#ffffff' },
  { key: 'github', label: 'GitHub', href: '#', color: '#e6edf3', on: '#161616' },
  { key: 'instagram', label: 'Instagram', href: '#', color: '#e4405f', on: '#ffffff' },
  { key: 'x', label: 'X', href: '#', color: '#e6edf3', on: '#161616' },
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
