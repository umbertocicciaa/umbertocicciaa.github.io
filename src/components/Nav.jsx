import { useState, useEffect } from 'react'

const NAV_SECTIONS = ['about', 'experience', 'projects', 'certifications', 'blog', 'contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <a href="#" className="nav-logo">Umberto Ciccia</a>
      <ul className="nav-links">
        {NAV_SECTIONS.map(s => (
          <li key={s}>
            <a href={`#${s}`}>{s.charAt(0).toUpperCase() + s.slice(1)}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
