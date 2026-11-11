// Content of the FleetFlow case study (from FleetFlow-Case-Study.pdf, 29 pages).
// Images live in /public/case/fleetflow/.
const jpg = (n) => `/case/fleetflow/${n}.jpg`
const png = (n) => `/case/fleetflow/${n}.png`

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
  hero: jpg('hero'),
  prototype:
    'https://www.figma.com/proto/u5W31UJNtyu2j0aghtQawe/fleet-management?node-id=17-2616&t=ikq6EFaOBfG8xs4T-1&scaling=min-zoom&content-scaling=fixed&page-id=17%3A2507&starting-point-node-id=17%3A2616&show-proto-sidebar=1',

  sections: [
    /* ───────────── 01 Overview ───────────── */
    {
      id: 'overview',
      nav: 'Overview',
      kicker: '01 / 09 · Overview',
      title: 'Project overview',
      lead: 'What FleetFlow is, the problem it solves, and how to read this case study.',
      blocks: [
        {
          type: 'rows',
          rows: [
            {
              label: 'The product',
              text: [
                'A B2B SaaS concept for a mid-size Indian logistics company running 100–200 trucks. Vehicles, drivers, trips, maintenance and costs in one dashboard, with a ranked “Needs attention” queue on top.',
              ],
            },
            {
              label: 'The problem',
              text: [
                'Managers juggle GPS apps, Excel and WhatsApp. Delays, expired documents and overdue services surface late — often after a trip has already failed.',
              ],
            },
            {
              label: 'The idea',
              text: [
                'Competitors show where trucks are or what is on file. FleetFlow shows what needs fixing now — and lets you fix it in one click.',
              ],
            },
            {
              label: 'My role',
              text: ['UX / Product Designer — research, IA, user flows, wireframes, hi-fi UI, design tokens and the prototype.'],
            },
            {
              label: 'Reading the screens',
              text: ['Screens are 1440 px wide, light theme. Truck numbers, names and figures are sample data.'],
            },
          ],
        },
        { type: 'toc' },
      ],
    },

    /* ───────────── 02 Problem & research ───────────── */
    {
      id: 'problem-research',
      nav: 'Problem & research',
      blurb: 'Users, competitor gaps and the key insight.',
      kicker: '02 / 09 · Problem & research',
      title: 'Problem & research',
      lead: 'Fleet managers don’t lack data — they lack timely, prioritized signals.',
      blocks: [
        {
          type: 'note',
          text: 'Research: desk research, competitor review mining and community scans (proto-personas).',
        },
        {
          type: 'personas',
          items: [
            {
              name: 'Rajesh',
              role: 'Fleet Manager',
              tag: 'Primary',
              quote: 'By the time I hear about a problem, it’s already costing me money.',
              need: 'Needs to know what’s urgent and how many trucks can go out — in 30 seconds.',
            },
            {
              name: 'Priya',
              role: 'Dispatcher',
              quote: 'Which truck and driver can I actually send — right now?',
              need: 'Needs only ready trucks and drivers suggested, with risks shown up front.',
            },
            {
              name: 'Suresh',
              role: 'Maintenance',
              quote: 'Nobody notices maintenance until a truck breaks down.',
              need: 'Needs service slots that don’t clash with trips, and visible downtime cost.',
            },
          ],
        },
        {
          type: 'rows',
          rows: [
            {
              label: 'What competitors miss',
              text: [
                'Fleetx, LocoNav: tracking-first — a map and many widgets. Fleetio: records-first — strong maintenance, feels like a database. None of them says what to do next.',
              ],
            },
            {
              label: 'Five pain themes',
              text: ['“I find out too late” · “I can’t trust availability” · “My info is scattered” · “Too much noise” · “I can’t see the cost”.'],
            },
            {
              label: 'Key insight',
              text: [
                'The longer a problem goes unnoticed, the more it costs. North-star metric: time-to-action — find a critical issue in < 30 s and act within 2 min.',
              ],
            },
          ],
        },
        {
          type: 'feature',
          kicker: 'The problem, visualised',
          title: 'Four tools and a phone call — or one screen',
          text: 'Today a fleet manager pieces the day together from a spreadsheet, a GPS map and a drivers’ chat group. FleetFlow puts the same answers on one screen, problems first.',
          src: jpg('problem'),
          alt: 'Today: a spreadsheet, GPS map, chat group and phone call. With FleetFlow: one screen.',
          dark: true,
          maxW: 'max-w-3xl',
        },
        {
          type: 'feature',
          kicker: 'Data-first vs decision-first',
          title: 'Others show the data. FleetFlow shows the decision.',
          text: 'A traditional fleet dashboard puts every truck, chart and notification on screen and leaves the manager to work out what matters. FleetFlow starts from the problems, ranks them and puts one action next to each.',
          src: jpg('compare'),
          alt: 'A generic data-first dashboard compared with FleetFlow’s decision-first home screen.',
          dark: true,
          caption: 'Left: a generic, unbranded data-first dashboard drawn for comparison — not a real product.',
        },
        {
          type: 'compare',
          kicker: 'What makes it different',
          title: 'Competitors show what is. FleetFlow tells you what to do next.',
          text: 'Fleetx, LocoNav and Fleetio are good at collecting fleet data — but they leave the manager to interpret it. FleetFlow takes a clear stance for mid-size Indian truck fleets: problems first, ranked, each with one next action.',
          cols: ['', 'Fleetx', 'LocoNav', 'Fleetio', 'FleetFlow'],
          rows: [
            ['Built around', 'Operations + data', 'The live map', 'The asset database', 'Today’s decisions'],
            ['Home screen', 'Widget-heavy dashboard', 'Map of every vehicle', 'Vehicle records', 'A ranked “Needs attention” queue'],
            ['Alerts', 'Many types, unranked', 'Many types — can get noisy', 'Service reminders', 'Ranked by ₹ impact, each with one next action'],
            ['Readiness check before dispatch', '—', '—', '—', 'Documents, service, FASTag and driver rest checked before the truck leaves'],
            ['Maintenance', 'Partial', 'Partial', 'Strong', 'Planned around trips, with downtime cost in ₹'],
            ['Navigation', 'Dense — many modules', 'Map-first', 'Feels like a database', '7 items, exceptions first'],
          ],
          points: [
            { n: '01', label: 'Action queue', title: 'Problems first, not a map', text: 'The home screen is a short, ranked list of what needs attention — not 150 pins to scan.' },
            { n: '02', label: 'Readiness check', title: 'Stop problems at dispatch', text: 'Expired permits, due service and low FASTag are caught before the truck leaves, not mid-route.' },
            { n: '03', label: 'Impact ranking', title: 'Alerts in ₹ and hours', text: 'Every alert says what it costs and what to do, so the important ones never get ignored.' },
          ],
          caption: 'Based on public product information and reviews.',
        },
      ],
    },

    /* ───────────── 03 Overview & alerts ───────────── */
    {
      id: 'overview-alerts',
      nav: 'Overview & alerts',
      blurb: 'Home screen, alert panel and live tracking.',
      kicker: '03 / 09 · Overview & alerts',
      title: 'Overview & alerts',
      lead:
        'The home screen answers two questions at a glance — is anything on fire, and how many trucks can go out — then lets the manager act without leaving the page.',
      blocks: [
        {
          type: 'anatomy',
          title: 'The overview in detail',
          items: [
            {
              part: 'Part 1 of 8 · Sidebar',
              title: 'Navigation that stays out of the way',
              text: 'A fixed navy sidebar holds the seven modules. Its calm, dark color keeps attention on the content area, where status colors carry meaning.',
              src: png('sidebar'),
              tall: true,
              details: [
                'Only seven top-level items (competitors show 15+), straight from the IA.',
                'The active page is a solid blue pill, so you always know where you are.',
                'The red “3” on Maintenance flags overdue services without another alert.',
                '“+ New trip” is always visible — the most frequent thing dispatchers create.',
                'Profile at the bottom shows who is signed in and their role.',
              ],
            },
            {
              part: 'Part 2 of 8 · Top bar',
              title: 'Find anything by truck number',
              text: 'People in Indian fleets think in truck numbers, so search is the fastest way to any vehicle, trip or driver. Alerts are one click away from every page.',
              src: png('topbar'),
              details: [
                'Search accepts truck no., trip ID or driver name; “/” focuses it from the keyboard.',
                'The bell with a red count (6) opens Needs attention from anywhere.',
                'The page title confirms where you are; the avatar opens account settings.',
              ],
            },
            {
              part: 'Part 3 of 8 · Header',
              title: 'Context and the two main actions',
              text: 'A short greeting with the date and fleet size, plus when the data was last updated — so the manager knows the numbers below can be trusted.',
              src: png('header'),
              details: [
                '“Updated 2 min ago” makes data freshness visible.',
                '“+ New trip” is the only solid blue button here — one primary action per area.',
                '“Export” is a quiet text button: available, never competing with the main action.',
              ],
            },
            {
              part: 'Part 4 of 8 · Readiness strip',
              title: 'Can it go? What is it doing?',
              text: 'Two groups answer “how many trucks can go out?”. Readiness and activity stay separate because a truck can be on a trip and at risk at the same time.',
              src: png('readiness'),
              details: [
                'Readiness adds up to the fleet, written out: 127 + 9 + 14 = 150 trucks.',
                'Every status uses color + icon + label (dot, dot, lock) — never color alone.',
                '“View list →” opens the vehicle list pre-filtered — Flow A starts here.',
                '“Activity now” (On trip 18, In maintenance 7) sits apart so meanings never mix.',
              ],
            },
            {
              part: 'Part 5 of 8 · Needs attention',
              title: 'The hero: ranked problems, each with a next action',
              text: 'The largest block on the page is a short queue of what needs fixing now, ranked by severity × urgency × business impact. Everything that is fine stays out of it.',
              src: png('needs'),
              details: [
                'The count “6” tells the manager how much work is waiting.',
                'Filter chips narrow the queue by type: Trips, Vehicles, Compliance, Utilization.',
                'Similar alerts are grouped — “3 national permits expire this week” is one row.',
                'Acknowledged and snoozed items are listed, so nothing silently disappears.',
              ],
            },
            {
              part: 'Part 6 of 8 · Alert row',
              title: 'Anatomy of one alert',
              text: 'Every row follows the same reading order, left to right: how serious, what happened, why it matters, and what to do about it.',
              src: png('alertrow'),
              details: [
                'Severity — “Critical” is solid red with an alert icon (Blocked uses a lock).',
                'What happened — “MH12AB1234 stopped 2h 10m near Nashik”.',
                'Why it matters — trip, destination, ETA +3h, client affected.',
                'What to do — Call driver (primary), View on map (secondary), ⋯ to acknowledge or snooze.',
              ],
            },
            {
              part: 'Part 7 of 8 · Today’s trips',
              title: 'Are we on time today?',
              text: 'Four numbers summarise the day’s trips, with the week’s on-time rate underneath — enough to answer “are we on time?” without opening a report.',
              src: png('trips'),
              details: [
                'Planned, in transit, delayed and delivered — the whole day at a glance.',
                '“Delayed 3” is the number that matters most; it links to the delayed trips.',
                'On-time this week (92%) with a progress bar ties the day to the business goal.',
              ],
            },
            {
              part: 'Part 8 of 8 · Exceptions map',
              title: 'A map that only shows problems',
              text: 'Competitors make the map the home screen. Here it is a small card that shows only the exception pins, with the full live map one click away.',
              src: png('exceptions'),
              details: [
                'Pins are colored by severity: red for critical, amber for high.',
                '“Open →” goes to Live tracking, already filtered to exceptions.',
                'Demoting the map frees the main area for the ranked queue.',
              ],
            },
          ],
        },
        {
          type: 'feature',
          kicker: 'The full screen',
          title: 'Everything together: problems first, data on demand',
          text: 'Sidebar and top bar frame the page; the readiness strip answers “how many can go?”; the Needs attention queue answers “what is on fire?”; today’s trips and the exceptions map sit to the side as context.',
          src: jpg('full'),
          alt: 'FleetFlow Overview screen on a desktop monitor.',
          dark: true,
        },
        {
          type: 'feature',
          kicker: 'Alert panel · the hero flow',
          title: 'From alert to action in under 2 minutes',
          text: 'Clicking the top alert opens a side panel over the Overview. Rajesh sees how bad it is, acts, records what happened, and returns to the queue without losing his place.',
          src: jpg('alertpanel'),
          alt: 'Alert detail panel open over the Overview screen.',
          dark: true,
          notice: [
            'Context first: location, trip progress, client deadline and stop duration.',
            'One primary action — Call driver — with Notify client beside it.',
            'A required one-tap cause decides the next step and feeds the delay report.',
            'Everything is logged on the trip, so the dispatcher sees it without calling.',
          ],
        },
        {
          type: 'feature',
          kicker: 'Live tracking · exceptions first',
          title: 'Tracking that opens on the 6 problems',
          text: 'Live tracking starts filtered to exceptions — stopped, delayed, off route — so the manager isn’t scanning a map of trucks that are fine. Full visibility is one toggle away.',
          src: jpg('livetracking'),
          alt: 'Live tracking screen filtered to exceptions.',
          dark: true,
          notice: [
            '“Showing: exceptions only”, with “Show all 150” as one toggle.',
            'Each row says what is wrong (“Stopped 2h 10m · near Nashik”), not just where.',
            '“Signal lost” shows “last seen 35 min ago” instead of a misleading position.',
            'The bottom strip shows the selected trip’s progress, ETA and Call driver.',
          ],
        },
        {
          type: 'feature',
          kicker: 'The dispatch desk',
          title: 'Live tracking and the alert panel, side by side',
          src: jpg('desk'),
          alt: 'Two monitors on a dispatch desk showing live tracking and the alert panel.',
          dark: true,
        },
      ],
    },

    /* ───────────── 04 Dispatching a trip ───────────── */
    {
      id: 'dispatching',
      nav: 'Dispatching a trip',
      blurb: '3 steps with readiness checks.',
      kicker: '04 / 09 · Dispatching a trip',
      title: 'Dispatching a trip',
      lead:
        'Creating a trip takes three steps. Only trucks and drivers that are genuinely ready are suggested, and trip-specific risks appear before confirming — not after the truck is stuck.',
      blocks: [
        {
          type: 'feature',
          kicker: 'Step 1 of 3 · Load & route',
          title: 'Enter the load and route',
          text: 'Priya captures the client, route, pickup time and load. Repeat trips start from a template, so most fields are already filled. Nothing blocks her — the e-way bill can be added later.',
          src: jpg('load'),
          alt: 'Create trip, step 1: load and route.',
          dark: true,
          notice: [
            'Trip templates pre-fill client, route and load for repeat customers.',
            'Route preview estimates distance, drive time and tolls — Step 2 uses these to check the truck.',
            'The 3-step progress bar shows exactly how much is left.',
          ],
        },
        {
          type: 'feature',
          kicker: 'Step 2 of 3 · Assign',
          title: 'Pick a truck and driver that can actually go',
          text: 'Only trucks and drivers that are ready are suggested, ranked by readiness, then distance to pickup, then longest idle time. Before confirming, FleetFlow checks this trip against the chosen truck.',
          src: jpg('assign'),
          alt: 'Create trip, step 2: assign truck and driver, with a FASTag warning.',
          dark: true,
          notice: [
            'Ready trucks come first; the longest-idle ready truck is preferred to improve utilization.',
            'Blocked trucks stay visible but greyed, with the reason, so nobody calls to ask.',
            'Drivers are checked too: valid licence, enough rest, distance from pickup.',
            'FASTag balance is below this route’s tolls → “Recharge FASTag” or “Continue anyway”.',
          ],
        },
        {
          type: 'feature',
          kicker: 'Step 2 · Warning resolved',
          title: 'Fix the risk before the truck leaves',
          text: 'Recharging the FASTag turns the amber warning into a green confirmation. The problem is solved at dispatch, not at a toll plaza on the highway.',
          src: jpg('resolved'),
          alt: 'The FASTag warning turned into a green confirmation.',
          dark: true,
          notice: [
            'The confirmation records who fixed it and when — an audit trail.',
            '“Undo” is available if it was clicked by mistake.',
            'At-risk trucks can continue with a warning; blocked trucks can never be forced onto a trip.',
          ],
        },
        {
          type: 'feature',
          kicker: 'Step 3 of 3 · Review & confirm',
          title: 'Check everything once, then confirm',
          text: 'All trip details sit on one page with an Edit link on each block, so Priya never steps back through the flow. One clear final action creates the trip.',
          src: jpg('review'),
          alt: 'Create trip, step 3: review and confirm.',
          dark: true,
          notice: [
            'ETA is shown with its buffer before the deadline (6h 30m), not just an arrival time.',
            'Resolved warnings are listed with who resolved them.',
            'Driver and client notifications are on by default — fewer “where is it?” calls.',
          ],
        },
      ],
    },

    /* ───────────── 05 Vehicles & trips ───────────── */
    {
      id: 'vehicles-trips',
      nav: 'Vehicles & trips',
      blurb: 'Readiness, documents, plan vs actual.',
      kicker: '05 / 09 · Vehicles & trips',
      title: 'Vehicles & trips',
      lead: 'The vehicle page is where all three personas meet; the trip page shows plan versus actual at every stage.',
      blocks: [
        {
          type: 'feature',
          kicker: 'Vehicle detail · all three personas',
          title: 'One truck: can it go, and why?',
          text: 'The vehicle page is where Rajesh, Priya and Suresh meet. It answers “can this truck be dispatched?” at the top — and explains the answer instead of just showing a color.',
          src: jpg('vehicle'),
          alt: 'Vehicle detail screen for MH12AB1234.',
          dark: true,
          notice: [
            'Readiness comes with its reason: “Ready · 1 note: FASTag balance low (not blocking)”.',
            'Assign (Priya), Schedule service (Suresh) and View on map (Rajesh) sit together in the header.',
            'Documents show expiry status — the permit is flagged 23 days ahead, before readiness drops.',
            'Next service (km or date) and downtime in ₹ sit next to fuel and repair costs.',
          ],
        },
        {
          type: 'feature',
          kicker: 'Trip detail · Rajesh & Priya',
          title: 'One trip: plan versus reality',
          text: 'Everything about a single trip on one page — where it is against the plan, its route, its documents and what has happened — without calling the driver.',
          src: jpg('trip'),
          alt: 'Trip detail screen for T-2041.',
          dark: true,
          notice: [
            'Each stage shows planned and actual time, so the delay is visible at a glance (“Delayed +3h”).',
            'The map compares planned and actual route; the long stop near Nashik is marked.',
            'The e-way bill is checked against the new ETA, so it’s extended before it expires.',
            'One activity timeline: alerts, calls and status changes for the whole team.',
          ],
        },
      ],
    },

    /* ───────────── 06 Maintenance & reports ───────────── */
    {
      id: 'maintenance-reports',
      nav: 'Maintenance & reports',
      blurb: 'Service around trips, “so what” reports.',
      kicker: '06 / 09 · Maintenance & reports',
      title: 'Maintenance & reports',
      lead: 'Service is planned around trip commitments, and every report ends with one sentence on what to do about it.',
      blocks: [
        {
          type: 'feature',
          kicker: 'Maintenance · Suresh',
          title: 'Plan service around trips, not against them',
          text: 'Suresh sees what is overdue and due this week, with each truck’s next trip beside it, and picks a day on a calendar that already shows the truck’s trips.',
          src: jpg('maintenance'),
          alt: 'Maintenance screen with a week view.',
          dark: true,
          notice: [
            'Downtime in truck-days and ₹ — maintenance reads as prevention, not expense.',
            'The “Next trip” column makes clashes obvious before scheduling.',
            'Wednesday is free in the week view, so the service is booked there.',
            'Cost per day (≈ ₹8,500) and “no trip disrupted” before confirming; dispatch is notified.',
          ],
        },
        {
          type: 'feature',
          kicker: 'Reports · Rajesh',
          title: 'Reports that end in a decision',
          text: 'Four focused reports instead of twenty dashboards. Every chart ends with one sentence on what it means and one action to take.',
          src: jpg('reports'),
          alt: 'Reports screen with KPI comparison and “So what” callouts.',
          dark: true,
          notice: [
            'KPIs compare this week with last week: utilization, on-time, idle truck-days, cost per km.',
            'Each chart has a “So what” — 5 idle trucks = ₹62,000 lost → Assign idle trucks.',
            'Delay causes come from reasons recorded in the alert panel, so patterns show over time.',
          ],
        },
      ],
    },

    /* ───────────── 07 Foundations ───────────── */
    {
      id: 'foundations',
      nav: 'Foundations',
      blurb: 'Color, type, spacing, radius.',
      kicker: '07 / 09 · Foundations',
      title: 'Foundations',
      lead: 'A calm navy shell with one blue accent, so status colors are the only thing that shouts. Inter for everything, on a 4-pt spacing grid.',
      blocks: [{ type: 'foundations' }],
    },

    /* ───────────── 08 Design system ───────────── */
    {
      id: 'design-system',
      nav: 'Design system',
      blurb: 'Tokens and components.',
      kicker: '08 / 09 · Design system',
      title: 'Design system',
      lead: 'Every color, spacing value, radius, border, font and shadow comes from tokens in three layers — so one change restyles every screen.',
      blocks: [
        {
          type: 'layers',
          items: [
            { t: 'Primitives', e: 'color/blue/600 = #2563EB' },
            { t: 'Semantic tokens', e: 'brand/accent → color/blue/600' },
            { t: 'Components & screens', e: 'Primary button → brand/accent' },
          ],
        },
        {
          type: 'stats',
          stats: [
            { n: '33', label: 'Primitives', text: 'Raw values, hidden from pickers' },
            { n: '38', label: 'Semantic colors', text: 'bg / surface, status / blocked, …' },
            { n: '33', label: 'Space & radius', text: '4-pt scale, radius, borders' },
            { n: '20', label: 'Type tokens', text: 'Bound to every text style' },
          ],
        },
        {
          type: 'status',
          title: 'Shared status language',
          chips: [
            { t: 'Ready', c: '#16a34a', bg: '#dcfce7' },
            { t: 'At risk', c: '#b45309', bg: '#fef3c7' },
            { t: 'Blocked', c: '#b91c1c', bg: '#fee2e2' },
            { t: 'On trip', c: '#0369a1', bg: '#e0f2fe' },
            { t: 'Idle', c: '#475569', bg: '#f1f5f9' },
            { t: 'In maintenance', c: '#7c3aed', bg: '#ede9fe' },
            { t: 'Critical', c: '#ffffff', bg: '#dc2626' },
            { t: 'High', c: '#b45309', bg: '#fef3c7' },
            { t: 'Medium', c: '#475569', bg: '#f1f5f9' },
          ],
          text: 'Readiness (can it go?) and activity (what is it doing?) are separate. Lock vs alert icon — so red never means two things.',
        },
        {
          type: 'rows',
          rows: [
            {
              label: 'Components',
              text: ['Sidebar (7 states), top bar, buttons, tags, severity, status chips, map (3 variants), radio and 16 icons — every screen is built from instances.'],
            },
          ],
        },
      ],
    },

    /* ───────────── 09 Testing & next steps ───────────── */
    {
      id: 'testing',
      nav: 'Testing & next steps',
      blurb: 'Test plan, fixes, what’s next.',
      kicker: '09 / 09 · Testing & next steps',
      title: 'Testing & next steps',
      lead: 'A test plan is ready, and the design was reviewed and improved before any participant sessions.',
      end: true,
      blocks: [
        {
          type: 'rows',
          rows: [
            {
              label: 'Test plan',
              text: [
                '5 participants, moderated and remote, think-aloud on the Figma prototype. Six tasks from real scenarios. Measures: task success (≥ 80%), time on task, errors, SEQ (≥ 5.5) and SUS (≥ 75).',
              ],
            },
            {
              label: 'Fixed before testing',
              text: [
                'A heuristic review found 8 issues — all fixed: readiness counts now add up to 150 · one service status per truck · cause options became real buttons · a “warning resolved” state · better small-text contrast · lock vs alert icons · proper radio buttons.',
              ],
            },
            {
              label: 'Targets to prove',
              text: ['Find a critical issue in < 30 s · act on an alert in < 2 min · assign a trip in ≤ 3 steps · zero trips started with non-compliant trucks.'],
            },
            {
              label: 'What’s next',
              text: ['Run the sessions and report real results against the targets. Then: dark mode, a mobile alerts view for managers on the move, and a pilot with one depot.'],
            },
          ],
        },
      ],
    },
  ],

  foundations: {
    colors: [
      { name: 'brand / navy', hex: '#0F1E3D', use: 'shell, text' },
      { name: 'brand / accent', hex: '#2563EB', use: 'main action' },
      { name: 'accent-subtle', hex: '#EFF6FF', use: 'selected bg' },
      { name: 'canvas', hex: '#F8FAFC', use: 'page bg' },
      { name: 'surface', hex: '#FFFFFF', use: 'cards' },
      { name: 'border / default', hex: '#E2E8F0', use: 'dividers' },
      { name: 'text / secondary', hex: '#5F6E84', use: '4.7:1 AA' },
      { name: 'bg / muted', hex: '#F1F5F9', use: 'panels' },
    ],
    type: [
      { sample: '127 Ready', spec: 'H1 · 32 Bold', cls: 'text-[32px] font-bold' },
      { sample: 'Needs attention', spec: 'H2 · 24 Semibold', cls: 'text-2xl font-semibold' },
      { sample: 'Suggested vehicles', spec: 'H3 · 18 Semibold', cls: 'text-lg font-semibold' },
      { sample: 'MH12AB1234 stopped 2h 10m', spec: 'Body Medium · 14', cls: 'text-sm font-medium' },
      { sample: 'Trip T-2041 → Ahmedabad', spec: 'Body · 14 Regular', cls: 'text-sm' },
      { sample: 'Updated 2 min ago', spec: 'Caption · 12 Medium', cls: 'text-xs font-medium' },
    ],
    spacing: [4, 8, 12, 16, 24, 32, 48],
    radius: [6, 8, 12, 9999],
    rule:
      'Status color is always paired with an icon and a label · one blue action per area · cards use radius 12 + Shadow / Card · every value above is a design token.',
  },
}
