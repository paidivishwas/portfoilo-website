import { siFigma, siFramer, siHtml5 } from 'simple-icons'

const logos = { figma: siFigma, framer: siFramer, html: siHtml5 }

function ToolIcon({ tool }) {
  const base = 'flex h-14 w-14 shrink-0 items-center justify-center rounded-xl'

  if (tool.badge) {
    // Letter badge (Adobe-style): coloured border + tinted fill
    return (
      <span
        className={`${base} border-2 text-xl font-bold`}
        style={{
          color: tool.color,
          borderColor: tool.color,
          background: `color-mix(in srgb, ${tool.color} 16%, transparent)`,
        }}
        aria-hidden="true"
      >
        {tool.badge}
      </span>
    )
  }

  const logo = logos[tool.icon]
  return (
    <span
      className={base}
      style={{ background: `color-mix(in srgb, ${tool.color} 14%, transparent)` }}
      aria-hidden="true"
    >
      {logo && (
        <svg viewBox="0 0 24 24" width="28" height="28" fill={tool.color}>
          <path d={logo.path} />
        </svg>
      )}
    </span>
  )
}

export default function ToolCard({ tool }) {
  return (
    <div
      style={{ '--c': tool.color }}
      className="flex items-center gap-4 rounded-2xl border border-line bg-tile p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--c)]"
    >
      <ToolIcon tool={tool} />
      <div className="min-w-0">
        <p className="font-semibold tracking-tight">{tool.name}</p>
        <p className="text-sm text-mute">{tool.desc}</p>
      </div>
    </div>
  )
}
