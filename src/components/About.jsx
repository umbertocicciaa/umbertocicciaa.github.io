const PILLS = [
  'Kubernetes', 'Terraform', 'AWS', 'GCP', 'Azure', 'Jenkins', 'Docker', 'Python', 'Go', 'Crossplane', 'CI/CD', 'Istio', 'K3s', 'Java',
  'C#', 'Bash', 'C', 'TypeScript', 'JavaScript', 'GitOps', 'MLOps', 'GitLab CI/CD', 'GitHub Actions', 'Git',
  'A/B', 'Canary', 'Blue/Green', 'SSH protocol', 'OpenSSL library', 'User and group management', 'File permissions and access control',
  'System monitoring', 'Log analysis', 'Configuring and troubleshooting system and network service', 'Application deployment and server process management',
  'Package management (apt)', 'TCP', 'UDP', 'ISO/OSI', 'DNS', 'DHCP', 'IPv4', 'Routing', 'HTTP', 'HTTPS', 'MTU', 'Firewall', 'NAT',
  'Angular', 'React', 'Blazor', 'HTML', 'CSS', 'GoJS', 'jQuery', 'Bootstrap', 'Angular Material', 'Syncfusion',
  '.NET', '.NET Core', 'ASP.NET MVC', 'ASP.NET Core', 'Spring Boot', 'Quarkus', 'Django', 'Streamlit', 'xUnit', 'bUnit', 'JUnit', 'SQL Server',
  'MongoDB', 'PostgreSQL', 'Redis', 'MySQL', 'OpenAI', 'Spark', 'Hadoop', 'TensorFlow', 'Scikit-learn'
]
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
          Hi, I&apos;m Umberto, a <strong>System Development Engineer</strong> at Amazon Web Services,
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
