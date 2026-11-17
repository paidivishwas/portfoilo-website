// FleetFlow case study — built from FleetFlow-Case-Study-Light.pdf (slides 2–32).
// Each slide is a high-resolution image in /public/case/fleetflow/ (s02.jpg … s32.jpg).
const slide = (n, alt) => ({ src: `/case/fleetflow/s${String(n).padStart(2, '0')}.jpg`, alt })

export const fleetflow = {
  id: 'fleet-management',
  name: 'FleetFlow',
  title: 'Exception-first fleet management.',
  intro:
    'Designing a B2B dashboard that turns fleet data into a short, ranked list of decisions — so logistics teams fix problems before they become delays.',
  meta: [
    { label: 'Role', items: ['UX / Product Designer'] },
    { label: 'Scope', items: ['UX Research', 'Information Architecture', 'Design System', 'Prototyping'] },
    { label: 'Platforms', items: ['Web App', 'Dashboard', 'B2B SaaS'] },
  ],
  hero: '/case/fleetflow/hero.jpg',
  prototype:
    'https://www.figma.com/proto/u5W31UJNtyu2j0aghtQawe/fleet-management?node-id=17-2616&t=ikq6EFaOBfG8xs4T-1&scaling=min-zoom&content-scaling=fixed&page-id=17%3A2507&starting-point-node-id=17%3A2616&show-proto-sidebar=1',

  sections: [
    {
      id: 'overview',
      nav: 'Overview',
      title: 'About the project',
      slides: [
        slide(2, 'About the project: a B2B fleet management dashboard for Indian logistics.'),
        slide(3, 'What we aimed for: design targets for morning check, finding a delay, acting on it and tools used.'),
      ],
    },
    {
      id: 'design-process',
      nav: 'Design process',
      title: 'Design process',
      slides: [slide(4, 'Design process: eleven steps in four phases — Discover, Define, Design, Validate.')],
    },
    {
      id: 'research',
      nav: 'Problem & research',
      title: 'Problem & research',
      slides: [
        slide(5, 'FleetFlow tackles the daily blind spots of fleet operations: problems and solutions.'),
        slide(6, 'Research methods, five pain themes and the key insight.'),
        slide(7, 'Three proto-personas: Rajesh Kumar, Priya Deshmukh and Suresh Patil.'),
        slide(8, 'Rajesh’s day, today versus with FleetFlow.'),
        slide(9, 'Where FleetFlow fits against Fleetx, LocoNav and Fleetio, and what competitors miss.'),
      ],
    },
    {
      id: 'define',
      nav: 'Strategy & flows',
      title: 'Principles, structure & flows',
      slides: [
        slide(10, 'Five design principles.'),
        slide(11, 'Paths explored and dropped, and what replaced them.'),
        slide(12, 'Information architecture: seven menu items instead of fifteen.'),
        slide(13, 'Hero flow: handling a delay alert in under two minutes.'),
      ],
    },
    {
      id: 'design',
      nav: 'Design system',
      title: 'From wireframe to design system',
      slides: [
        slide(14, 'From low-fi wireframe to hi-fi UI.'),
        slide(15, 'Colours and typography.'),
        slide(16, 'Foundations: colour system, neutrals and status colours.'),
        slide(17, 'Typography, spacing, radius, elevation and contrast checks.'),
        slide(18, 'Components: status chips, severity, buttons, tags and the sidebar.'),
        slide(19, 'Anatomy of the Overview screen and the tokens behind it.'),
      ],
    },
    {
      id: 'screens',
      nav: 'Key screens',
      title: 'Key design screens',
      slides: [
        slide(20, 'Overview screen.'),
        slide(21, 'Alert panel open over the Overview.'),
        slide(22, 'Live tracking.'),
        slide(23, 'Vehicle detail.'),
        slide(24, 'Create trip — step 1, load and route.'),
        slide(25, 'Create trip — step 2, assign vehicle and driver.'),
        slide(26, 'Create trip — step 3, review and confirm.'),
        slide(27, 'Trip detail.'),
        slide(28, 'Maintenance.'),
        slide(29, 'Reports.'),
      ],
    },
    {
      id: 'testing',
      nav: 'Usability testing',
      title: 'Usability testing',
      slides: [slide(30, 'Usability testing: 8 issues found and fixed before any session.')],
    },
    {
      id: 'learnings',
      nav: 'What I learned',
      title: 'What I learned',
      end: true,
      slides: [
        slide(31, 'What I learned: decide what matters, prevent don’t just report, trace every decision.'),
        slide(32, 'FleetFlow screens overview.'),
      ],
    },
  ],
}
