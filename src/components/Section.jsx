import Reveal from './Reveal'
import SectionMarker from './SectionMarker'

/** Standard section: marker row (label + dot + line), then an optional big title and content. */
export default function Section({ id, label, title, children }) {
  return (
    <section id={id} className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          {/* With no title, the marker itself is the section heading */}
          <SectionMarker label={label} as={title ? 'p' : 'h2'} className={title ? 'mb-10 md:mb-14' : 'mb-12 md:mb-16'} />
          {title && (
            <h2 className="mb-12 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              {title}
            </h2>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
