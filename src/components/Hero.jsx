const BADGES = ['Cloud Engineering', 'System Engineering', 'MLOps']

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-watermark" aria-hidden="true">UDC</div>
      <div className="hero-body">
        <div className="hero-left">
          <p className="hero-tag">Engineer — 2026</p>
          <h1 className="hero-h1">Umberto<em>Ciccia</em></h1>
          <div className="hero-badges">
            {BADGES.map(b => (
              <div key={b} className="hero-badge"><i></i>{b}</div>
            ))}
          </div>
        </div>
        <div className="hero-right">
          <p className="hero-desc">
            I build production-ready ML platforms and resilient cloud infrastructure — taking ideas
            from notebooks to reliable products that teams love to ship with.
          </p>
          <div className="hero-ctas">
            <a href="mailto:umbertocicciaa@icloud.com" className="btn-fill">Let&apos;s work together</a>
            <a href="#projects" className="btn-text">View projects →</a>
          </div>
        </div>
      </div>
      <div className="hero-scroll">Scroll</div>
    </section>
  )
}
