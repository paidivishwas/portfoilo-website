import Reveal from './Reveal'

export default function Section({ id, label, title, children }) {
  return (
    <section id={id} className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-sm uppercase tracking-widest text-mute">{label}</p>
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
