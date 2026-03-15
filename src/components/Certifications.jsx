import { certifications } from '../data/certifications.js'

export default function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="reveal">
        <p className="section-label">Credentials</p>
        <h2>Cloud &amp;<br /><em>Certifications</em></h2>
      </div>
      <div className="cert-grid reveal">
        {certifications.map(c => (
          <a
            key={c.name}
            className="cert-card"
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="cert-issuer">{c.issuer}</div>
            <div className="cert-name">{c.name}</div>
            <div className="cert-arrow">↗ View badge</div>
          </a>
        ))}
      </div>
    </section>
  )
}
