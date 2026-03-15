import { useEffect, useRef } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Certifications from './components/Certifications.jsx'
import Blog from './components/Blog.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const curRef = useRef(null)
  const trailRef = useRef(null)

  // Custom cursor movement
  useEffect(() => {
    let mx = 0, my = 0, tx = 0, ty = 0
    let rafId
    const cur = curRef.current
    const trail = trailRef.current

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      if (cur) { cur.style.left = mx + 'px'; cur.style.top = my + 'px' }
    }

    const anim = () => {
      tx += (mx - tx) * 0.13
      ty += (my - ty) * 0.13
      if (trail) { trail.style.left = tx + 'px'; trail.style.top = ty + 'px' }
      rafId = requestAnimationFrame(anim)
    }

    document.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(anim)
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(rafId) }
  }, [])

  // Cursor expand on hover
  useEffect(() => {
    const cur = curRef.current
    if (!cur) return
    const add = () => cur.classList.add('hov')
    const rm = () => cur.classList.remove('hov')
    const els = document.querySelectorAll('a, button, .pill, .cert-card')
    els.forEach(el => { el.addEventListener('mouseenter', add); el.addEventListener('mouseleave', rm) })
    return () => els.forEach(el => { el.removeEventListener('mouseenter', add); el.removeEventListener('mouseleave', rm) })
  }, [])

  // Scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = (i % 3) * 0.1 + 's'
      obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <div className="cursor" ref={curRef} />
      <div className="cursor-trail" ref={trailRef} />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
