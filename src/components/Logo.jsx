/** VP monogram: the V's right stroke doubles as the P's stem. */
export default function Logo({ size = 32, className = 'nav__mark' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle className="nav__mark-ring" cx="16" cy="16" r="15" />
      <path
        className="nav__mark-letters"
        pathLength="1"
        d="M8 9.5 L12.5 22.5 L17.5 9.5 V22.5 M17.5 9.5 H20.5 a4.25 4.25 0 0 1 0 8.5 H17.5"
      />
    </svg>
  )
}
