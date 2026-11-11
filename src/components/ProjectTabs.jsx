/** Filter tabs stacked one under the other so both options are always visible (single-select). */
export default function ProjectTabs({ filters, active, onChange }) {
  return (
    <div
      role="group"
      aria-label="Filter projects by type"
      className="flex flex-none flex-col gap-1 rounded-3xl border border-line bg-tile p-1.5"
    >
      {filters.map((f) => {
        const on = f === active
        return (
          <button
            key={f}
            type="button"
            onClick={() => onChange(f)}
            aria-pressed={on}
            className={`whitespace-nowrap rounded-full px-5 py-2.5 text-left text-sm transition-colors ${
              on ? 'bg-ink font-semibold text-paper' : 'text-mute hover:bg-[var(--bg-hover)] hover:text-ink'
            }`}
          >
            {f}
          </button>
        )
      })}
    </div>
  )
}
