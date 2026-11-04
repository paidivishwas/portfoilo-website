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
  headline:
    "Hi, I'm Paidi Vishwas, a Product Designer & UI/UX Designer based in India, crafting intuitive and user-centered digital experiences that simplify everyday problems.",
  intro:
    "I'm a Product Designer & UI/UX Designer with a background in Computer Science and Engineering (AI & ML). I enjoy turning complex problems into simple, meaningful, and user-friendly designs that look good and work seamlessly. My technical background helps me approach design with a balance of creativity, logic, and a deeper understanding of how digital products work. I'm passionate about creating thoughtful experiences that meet user needs and deliver real value.",
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
    id: 'ott-platform',
    title: 'OTT Platform Design',
    subtitle: 'Multi-Platform Streaming Experience',
    description:
      'End-to-end design of a streaming experience spanning mobile, web, tablet, and TV, with a consistent system and fast content discovery.',
    platforms: ['Mobile App', 'Tablet', 'Web', 'TV', 'Smart TV'],
    focusAreas: ['Design System', 'UX Improvements', 'Seamless Cross-Platform Experience'],
    category: 'Case Study',
    href: '#',
    devices: [
      { type: 'phone', caption: 'Mobile | Home screen' },
      { type: 'tv', caption: 'TV | Discover' },
      { type: 'tablet', caption: 'Tablet | Home screen' },
    ],
  },
  {
    id: 'unifi-tv',
    title: 'Unifi TV 2.0',
    subtitle: 'Telekom Malaysia · Smart TV Experience',
    description:
      'A redesigned TV experience focused on remote-friendly navigation, a personalised home, and simpler access to live and on-demand content.',
    platforms: ['Smart TV', 'STB', 'Mobile App'],
    focusAreas: ['Remote-First Navigation', 'Personalisation', 'UI Enhancements'],
    category: 'Case Study',
    href: '#',
    devices: [
      { type: 'tv', caption: 'TV | Home' },
      { type: 'phone', caption: 'Mobile | Remote' },
    ],
  },
  {
    id: 'fantv-ai',
    title: 'FanTV AI',
    subtitle: 'AI-Powered Fan Experience',
    description:
      'An AI-powered fan experience that makes recommendations and engagement feel personal, playful, and effortless.',
    platforms: ['Mobile App', 'Web'],
    focusAreas: ['AI-Powered Workflows', 'Engagement', 'Design System'],
    category: 'Case Study',
    href: '#',
    devices: [
      { type: 'phone', caption: 'Mobile | For You' },
      { type: 'tablet', caption: 'Tablet | Discover' },
    ],
  },
  {
    id: 'cloud-dvr',
    title: 'Cloud DVR',
    subtitle: 'Recording & Playback Experience',
    description:
      'Reimagined recording and playback flows so users can schedule, manage, and watch recordings without friction.',
    platforms: ['TV', 'Smart TV', 'Mobile App'],
    focusAreas: ['Workflow Simplification', 'UX Improvements'],
    category: 'Case Study',
    href: '#',
    devices: [
      { type: 'tv', caption: 'TV | Recordings' },
      { type: 'phone', caption: 'Mobile | Schedule' },
    ],
  },
]

// TODO: replace with your real tools.
// icon: key of a brand logo in ToolCard.jsx, or badge: letters shown in a coloured tile. color = brand colour.
export const tools = [
  { name: 'Figma', desc: 'UI/UX & prototyping', icon: 'figma', color: '#f24e1e' },
  { name: 'Adobe XD', desc: 'Prototyping', badge: 'Xd', color: '#ff61f6' },
  { name: 'Photoshop', desc: 'Image editing', badge: 'Ps', color: '#31a8ff' },
  { name: 'Framer', desc: 'Interactive sites', icon: 'framer', color: '#0099ff' },
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
