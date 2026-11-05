// Content of the FleetFlow case study (from FleetFlow-Case-Study.pdf).
// Screens live in /public/case/fleetflow/.
const img = (n) => `/case/fleetflow/${n}.jpg`

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
  hero: img('hero'),
  prototype: 'https://www.figma.com/design/u5W31UJNtyu2j0aghtQawe/fleet-management?node-id=34-11',

  sections: [
    {
      id: 'overview',
      nav: 'Overview',
      title: 'Project overview',
      lead: 'What FleetFlow is, the problem it solves, and how to read the screens.',
      rows: [
        {
          label: 'The product',
          text: [
            'FleetFlow is a fictional B2B SaaS concept for a mid-size Indian logistics company running 100–200 trucks.',
            'It brings vehicles, drivers, trips, maintenance and costs into one dashboard, with a ranked “Needs attention” queue on top.',
          ],
        },
        {
          label: 'The problem',
          text: [
            'Fleet managers juggle GPS apps, Excel and WhatsApp. Delays, expired documents and overdue services surface late — often after a trip has already failed.',
          ],
        },
        {
          label: 'My role',
          text: [
            'UX / Product Designer — research, information architecture, user flows, wireframes, high-fidelity UI, design tokens and the prototype.',
          ],
        },
        {
          label: 'Reading the screens',
          text: [
            'Screens are shown as designed in Figma: 1440 pixels wide, light theme. Truck numbers, names and figures are sample data, not real.',
          ],
        },
      ],
      toc: true,
    },
    {
      id: 'problem-research',
      blurb: 'Why existing tools fall short, who the users are, and the key insight.',
      nav: 'Problem & research',
      title: 'Problem & research',
      lead: 'Fleet managers don’t lack data — they lack timely, prioritized signals.',
      rows: [
        {
          label: 'What competitors miss',
          text: [
            'Fleetx and LocoNav are tracking-first: a live map and many widgets. Fleetio is records-first: strong maintenance, but it feels like a database.',
            'None of them tells the manager what to do next — so FleetFlow is decision-first.',
          ],
        },
        {
          label: 'Who it’s for',
          text: [
            'Rajesh, Fleet Manager (primary) — “By the time I hear about a problem, it’s already costing me money.”',
            'Priya, Dispatcher — needs trucks and drivers that can actually go. Suresh, Maintenance Manager — needs service slots that don’t clash with trips.',
          ],
        },
        {
          label: 'Five themes',
          text: ['“I find out too late” · “I can’t trust availability” · “My info is scattered” · “Too much noise” · “I can’t see the cost”.'],
        },
        {
          label: 'Key insight',
          text: [
            'The longer a problem goes unnoticed, the more it costs. The product’s job is to shrink time-to-action: find a critical issue in under 30 seconds and act within 2 minutes.',
          ],
        },
      ],
    },
    {
      id: 'overview-alerts',
      blurb: 'The home screen, the alert panel and live tracking — exceptions first.',
      nav: 'Overview & alerts',
      title: 'Overview & alerts',
      lead:
        'The home screen answers two questions at a glance — is anything on fire, and how many trucks can go out — then lets the manager act without leaving the page.',
      shots: [
        { src: img('morning'), title: 'Morning check', text: 'Readiness adds up to 150 trucks; a ranked Needs Attention queue puts one-click actions on every alert.' },
        { src: img('alert'), title: 'Alert detail panel', text: 'Context first — map, progress, client deadline — then Call driver and a required one-tap cause.' },
        { src: img('tracking'), title: 'Live tracking', text: 'Opens on the 6 exceptions, not all 150 trucks. “Show all” is one toggle away.' },
      ],
    },
    {
      id: 'dispatching',
      blurb: 'Three steps with readiness checks and warnings before confirming.',
      nav: 'Dispatching a trip',
      title: 'Dispatching a trip',
      lead:
        'Creating a trip takes three steps. Only trucks and drivers that are genuinely ready are suggested, and trip-specific risks appear before confirming — not after the truck is stuck.',
      tabs: [
        { label: 'Load & route', src: img('load'), text: 'Templates pre-fill repeat routes; the e-way bill can be added later.' },
        {
          label: 'Assign',
          src: img('assign'),
          text: 'Suggestions are ranked by readiness, then distance to pickup, then longest idle time. Blocked trucks stay visible but greyed, with the reason, so nobody has to call and ask.',
          caption: 'Step 2 · Assign — the FASTag balance is below the tolls on this route, so the system offers “Recharge FASTag” or “Continue anyway”.',
        },
        { label: 'Warning resolved', src: img('resolved'), text: 'Recharging shows a green confirmation with who and when, plus Undo.' },
        { label: 'Review', src: img('review'), text: 'ETA with buffer, warnings audit trail, notifications on by default.' },
      ],
      defaultTab: 1,
    },
    {
      id: 'vehicles-trips',
      blurb: 'Where readiness, documents, trips and costs meet.',
      nav: 'Vehicles & trips',
      title: 'Vehicles & trips',
      lead: 'The vehicle page is where all three personas meet; the trip page shows plan versus actual at every stage.',
      shots: [
        { src: img('vehicle'), title: 'Vehicle detail', text: 'Readiness with its reason, documents with expiry, next service, and downtime in ₹.' },
        { src: img('trip'), title: 'Trip detail', text: 'Planned vs actual timeline, route deviation, and the e-way bill checked against the ETA.' },
      ],
    },
    {
      id: 'maintenance-reports',
      blurb: 'Service planning around trips, and reports that end in a “so what”.',
      nav: 'Maintenance & reports',
      title: 'Maintenance & reports',
      lead: 'Service is planned around trip commitments, and every report ends with one sentence on what to do about it.',
      tabs: [
        {
          label: 'Maintenance',
          src: img('maintenance'),
          text: 'A trip-aware week view: a day with a trip can’t be picked silently, and downtime cost shows before confirming.',
        },
        {
          label: 'Reports',
          src: img('reports'),
          text: 'Four focused reports. Each chart ends with a “So what” — e.g. 5 idle trucks = ₹62,000 lost this week.',
        },
      ],
      defaultTab: 0,
    },
    {
      id: 'design-system',
      blurb: 'Primitives, semantic tokens and components behind every screen.',
      nav: 'Design system',
      title: 'Design system',
      lead: 'Every color, spacing value, radius, border, font and shadow comes from tokens in three layers: primitives → semantic tokens → components and screens.',
      stats: [
        { n: '33', label: 'Primitives', text: 'Raw values, hidden from pickers' },
        { n: '38', label: 'Semantic colors', text: 'bg/surface, status/blocked, …' },
        { n: '33', label: 'Space & radius', text: '4-pt scale, radius, borders' },
        { n: '20', label: 'Type tokens', text: 'Bound to every text style' },
      ],
      status: {
        title: 'Shared status language',
        chips: [
          { t: 'Ready', c: '#16a34a', bg: '#dcfce7' },
          { t: 'At risk', c: '#b45309', bg: '#fef3c7' },
          { t: 'Blocked', c: '#b91c1c', bg: '#fee2e2' },
          { t: 'On trip', c: '#0369a1', bg: '#e0f2fe' },
          { t: 'Idle', c: '#475569', bg: '#f1f5f9' },
          { t: 'In maintenance', c: '#7c3aed', bg: '#ede9fe' },
          { t: 'Critical', c: '#ffffff', bg: '#dc2626' },
        ],
        text: 'Readiness (can it go?) and activity (what is it doing?) are separate. Blocked uses a lock and Critical uses an alert icon, so red never means two things.',
      },
      rows: [
        {
          label: 'Components',
          text: ['Sidebar (7 states), top bar, buttons, tags, severity pills, status chips, map (3 variants), radio, 16 icons — each screen is built from instances.'],
        },
      ],
    },
    {
      id: 'testing',
      blurb: 'The test plan, fixes made before testing, and what comes next.',
      nav: 'Testing & next steps',
      title: 'Testing & next steps',
      lead: 'A test plan is ready; the design was reviewed and improved before any participant sessions.',
      rows: [
        {
          label: 'Test plan',
          text: ['5 participants, moderated and remote, think-aloud on the Figma prototype. Six tasks from real scenarios; success, time, errors, SEQ and SUS (target ≥ 75).'],
        },
        {
          label: 'Fixed before testing',
          text: [
            'A heuristic review found 8 issues, all fixed: readiness counts now add up to 150, one service status per truck, cause options became real buttons, a “warning resolved” state, and better small-text contrast.',
          ],
        },
        {
          label: 'What’s next',
          text: [
            'Run the sessions and report real results against the targets.',
            'Then: dark mode, a mobile alerts view for managers on the move, and a pilot with one depot.',
          ],
        },
      ],
      end: true,
    },
  ],
}
