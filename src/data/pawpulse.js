// PawPulse UX challenge — built from PawPulse-Case-Study.pdf. Images live in /public/case/pawpulse/.
const slide = (n, alt) => ({ src: `/case/pawpulse/s0${n}.jpg`, alt })

export const pawpulse = {
  id: 'pawpulse',
  name: 'PawPulse',
  title: 'A pet fitness app that answers in one glance.',
  intro:
    'A companion app for a pet fitness wearable that tells owners, in one glance, whether their pet moved enough today.',
  meta: [
    { label: 'Role', items: ['UI/UX Design'] },
    { label: 'Type', items: ['Design challenge'] },
    { label: 'Tools', items: ['Figma'] },
    { label: 'Delivered', items: ['Dashboard', '4 states', 'Goal flow', 'Prototype'] },
  ],
  hero: '/case/pawpulse/hero.jpg',
  prototype: '',
  startLabel: 'Read the challenge',

  sections: [
    {
      id: 'challenge',
      nav: 'The challenge',
      title: 'The challenge',
      slides: [slide(2, 'The challenge: design the app for a pet wearable, and the key insight — answer first, details after.')],
    },
    {
      id: 'process',
      nav: 'Process',
      title: 'Process',
      slides: [slide(3, 'Process: understand, structure, design states, prototype.')],
    },
    {
      id: 'structure',
      nav: 'Screen structure',
      title: 'Screen structure',
      slides: [slide(4, 'Top to bottom: who, the answer, the details.')],
    },
    {
      id: 'states',
      nav: 'Four states',
      title: 'One card, four states',
      slides: [slide(5, 'One card, four states: under target, on track, goal reached and disconnected.')],
    },
    {
      id: 'goal-setup',
      nav: 'Goal setup',
      title: 'Goal setup',
      slides: [slide(6, 'Goal setup: three short steps with a check before saving.')],
    },
    {
      id: 'outcome',
      nav: 'Visual language & outcome',
      title: 'Visual language & outcome',
      end: true,
      slides: [slide(7, 'Visual language, what was delivered and next steps.')],
    },
  ],
}
