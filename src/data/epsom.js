// Epsom Salt PDP redesign — built from Epsom-Salt-PDP-Case-Study.pdf (slides 2–12).
// Images live in /public/case/epsom/.
const slide = (n, alt) => ({ src: `/case/epsom/s${String(n).padStart(2, '0')}.jpg`, alt })

export const epsom = {
  id: 'epsom-salt-pdp',
  name: 'Epsom Salt PDP',
  title: 'Epsom Salt product page redesign.',
  intro:
    'Redesigning the product page for Carbamide Forte’s Epsom Salt — clearer hierarchy, a faster path to purchase and more trust, on desktop and mobile.',
  meta: [
    { label: 'Role', items: ['UX/UI Designer'] },
    { label: 'Timeline', items: ['2 weeks'] },
    { label: 'Platform', items: ['Web · Desktop & Mobile'] },
    { label: 'Tools', items: ['Figma'] },
  ],
  hero: '/case/epsom/hero.jpg',
  prototype: '',

  sections: [
    { id: 'overview', nav: 'Overview', title: 'Overview', slides: [slide(2, 'Overview: role, timeline, platform and tools.')] },
    { id: 'problem', nav: 'The problem', title: 'The problem', slides: [slide(3, 'The problem: the original product page.')] },
    { id: 'goals', nav: 'Goals', title: 'Goals', slides: [slide(4, 'Goals: clear hierarchy, faster purchase, build trust.')] },
    {
      id: 'process',
      nav: 'Process & flow',
      title: 'Process & user flow',
      slides: [slide(5, 'Process: audit, structure, wireframe, visual design, handoff.'), slide(6, 'User flow: land, see value, pick pack, add to cart, checkout.')],
    },
    { id: 'structure', nav: 'Page structure', title: 'Page structure', slides: [slide(7, 'Page structure for desktop and mobile.')] },
    { id: 'system', nav: 'Design system', title: 'Design system', slides: [slide(8, 'Design system: colours, type and components.')] },
    {
      id: 'final',
      nav: 'Final design',
      title: 'Final design',
      slides: [slide(9, 'Final design on desktop and mobile.'), slide(10, 'Before and after.')],
    },
    {
      id: 'results',
      nav: 'Key changes & metrics',
      title: 'Key changes & metrics',
      end: true,
      slides: [slide(11, 'Key changes.'), slide(12, 'Metrics to track.')],
    },
  ],
}
