/**
 * Section header used on every section: label, glowing accent dot, and a hairline that fades out.
 * Optional children (e.g. filter tabs) sit at the right end of the row.
 */
export default function SectionMarker({ label, as: Tag = 'h2', id, className = '', children }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-4 ${className}`}>
      <Tag id={id} className="text-lg font-semibold tracking-tight text-ink">
        {label}
      </Tag>
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
      <span
        aria-hidden="true"
        className="ml-3 h-px min-w-12 flex-1"
        style={{ background: 'linear-gradient(90deg, var(--border) 0%, var(--border) 80%, transparent 100%)' }}
      />
      {children}
    </div>
  )
}
