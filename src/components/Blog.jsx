import { posts } from '../data/blog.js'

const BLOG_URL = 'https://umbertocicciaa.github.io/blog-umbertodomenico-ciccia/'

export default function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="blog-header reveal">
        <h2>Latest<br /><em>Notes</em></h2>
        <a href={BLOG_URL} target="_blank" rel="noopener noreferrer" className="btn-text">
          All notes →
        </a>
      </div>
      <div className="blog-grid">
        {posts.map(p => (
          <a
            key={p.title}
            className="blog-card reveal"
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="blog-date">{p.date}</div>
            <div className="blog-title">{p.title}</div>
            <div className="blog-excerpt">{p.excerpt}</div>
            <div className="blog-read">Read note ↗</div>
          </a>
        ))}
      </div>
    </section>
  )
}
