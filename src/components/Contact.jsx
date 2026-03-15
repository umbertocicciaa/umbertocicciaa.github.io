import { useState, useRef } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      formRef.current?.reset()
    }, 3500)
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-left reveal">
        <p className="section-label">Contact</p>
        <h2>Let&apos;s build<br />something<br /><em>remarkable.</em></h2>
        <p>
          Available for collaborations, advisory roles, and teams that need a pragmatic engineer
          to turn ML projects into resilient products.
        </p>
        <div className="c-links">
          <a href="mailto:umbertociccia@icloud.com" className="c-link">
            umbertociccia@icloud.com <span>↗</span>
          </a>
          <a href="https://github.com/umbertocicciaa" target="_blank" rel="noopener noreferrer" className="c-link">
            GitHub <span>↗</span>
          </a>
          <a href="https://www.linkedin.com/in/umberto-domenico-ciccia/" target="_blank" rel="noopener noreferrer" className="c-link">
            LinkedIn <span>↗</span>
          </a>
          <a href="https://umbertocicciaa.github.io/blog-umbertodomenico-ciccia/" target="_blank" rel="noopener noreferrer" className="c-link">
            Blog <span>↗</span>
          </a>
        </div>
      </div>

      <div className="contact-right reveal">
        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <div className="f-field">
            <label>Your name</label>
            <input type="text" placeholder="Jane Smith" required />
          </div>
          <div className="f-field">
            <label>Email</label>
            <input type="email" placeholder="jane@example.com" required />
          </div>
          <div className="f-field">
            <label>Subject</label>
            <input type="text" placeholder="Collaboration / Advisory / Project" />
          </div>
          <div className="f-field">
            <label>Message</label>
            <textarea rows="5" placeholder="Tell me about your project…" required />
          </div>
          <button type="submit" className={`f-submit${sent ? ' sent' : ''}`}>
            {sent ? 'Sent ✓' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  )
}
