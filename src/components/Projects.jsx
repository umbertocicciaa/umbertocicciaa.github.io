import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-head reveal">
        <h2>Selected<br /><em>Projects</em></h2>
        <span className="projects-count">{projects.length} projects</span>
      </div>

      {projects.map(p => (
        <a
          key={p.num}
          className="project-row reveal"
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="p-num">{p.num}</span>
          <div>
            <div className="p-name">{p.name}</div>
            <div className="p-tags">
              {p.tags.map(t => <span key={t} className="p-tag">{t}</span>)}
            </div>
          </div>
          <span className="p-arrow">↗</span>
        </a>
      ))}
    </section>
  )
}
