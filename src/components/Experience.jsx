import { experiences } from '../data/experience.js'

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="exp-header reveal">
        <div>
          <p className="section-label">Experience</p>
          <h2>A career built<br /><em>at the frontier.</em></h2>
        </div>
        <p>
          From software engineering internships to building sovereign cloud infrastructure for Europe
          at AWS. Each role has deepened both technical depth and cross-team leadership.
        </p>
      </div>

      <div className="exp-track">
        {experiences.map((exp) => (
          <div key={exp.company} className="exp-item reveal">
            <div className="exp-period">
              {exp.period[0]}<br />{exp.period[1]}
            </div>
            <div className="exp-content">
              <h3>{exp.title}</h3>
              <div className="exp-company">{exp.company}</div>
              <ul className="exp-bullets">
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
