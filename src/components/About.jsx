const PILLS = ['Kubernetes','Terraform','AWS','GCP','Azure','MLOps','Docker','GitOps','Python','Go','Crossplane','CI/CD','Istio','K3s']

const STATS = [
  { num: '3+',  lbl: ['Years of', 'experience'] },
  { num: '12+', lbl: ['Open source', 'projects'] },
  { num: '10+',   lbl: ['Cloud', 'certifications'] },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-left reveal">
        <p className="section-label">About me</p>
        <h2>Build systems<br />people love<br /><em>to ship with.</em></h2>
      </div>
      <div className="about-right reveal">
        <p className="about-bio">
          Hi, I&apos;m Umberto, a <strong>System Engineer</strong> at Amazon Web Services,
          currently building AWS&apos;s first European Sovereign Cloud. I specialise in taking ideas
          from notebooks to reliable, observable products at scale.
        </p>
        <p className="about-bio">
          From opinionated MLOps frameworks and distributed runtimes, to hybrid multi-cloud
          architectures and developer tooling, I focus on systems that are resilient, cost-efficient,
          and genuinely enjoyable to work with.
        </p>
        <p className="about-bio">
          Currently focused on <strong>improving the cloud computing world</strong>, one infrastructure
          module at a time.
        </p>

        <div className="about-stats">
          {STATS.map(s => (
            <div key={s.num}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-lbl">{s.lbl[0]}<br />{s.lbl[1]}</div>
            </div>
          ))}
        </div>

        <div className="pills">
          {PILLS.map(p => <span key={p} className="pill">{p}</span>)}
        </div>
      </div>
    </section>
  )
}
