/** Pill-shaped filter tabs with thin dividers (single-select). */
export default function ProjectTabs({ filters, active, onChange }) {
  return (
    <div
      role="group"
      aria-label="Filter projects by type"
      className="flex h-12 max-w-full flex-none items-center overflow-x-auto rounded-full border border-line bg-tile px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {filters.map((f, i) => (
        <button
          key={f}
          type="button"
          onClick={() => onChange(f)}
          aria-pressed={f === active}
          className={`relative whitespace-nowrap px-3.5 text-sm transition-colors ${
            f === active ? 'font-medium text-ink' : 'text-mute hover:text-ink'
          } ${i > 0 ? 'before:absolute before:inset-y-0.5 before:left-0 before:w-px before:bg-line' : ''}`}
        >
          {f}
        </button>
      ))}
    </div>
  )
}
