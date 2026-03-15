const SECTIONS = ['about', 'experience', 'projects', 'blog', 'contact']

export default function Footer() {
  return (
    <footer>
      <p className="f-copy">© 2026 Umberto Domenico Ciccia. All rights reserved.</p>
      <nav className="f-nav">
        {SECTIONS.map(s => (
          <a key={s} href={`#${s}`}>{s.charAt(0).toUpperCase() + s.slice(1)}</a>
        ))}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        >
          ↑ Top
        </a>
      </nav>
    </footer>
  )
}
