import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 text-sm text-mute">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-6">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href="#top" className="hover:text-ink">Back to top ↑</a>
      </div>
    </footer>
  )
}
