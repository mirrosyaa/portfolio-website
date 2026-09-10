import { work } from '../info'
import { useInView, spotlight } from '../lib'
import './Work.css'

export default function Work() {
  const [ref, inView] = useInView()

  return (
    <section
      id="work"
      ref={ref}
      className={inView ? 'section appear in' : 'section appear'}
    >
      <div className="wrap">
        <h2 className="title">Things I&apos;ve built</h2>
        <p className="subtitle">
          A mix of production work and personal projects.
        </p>

        <div className="work-grid">
          {work.map((project) => (
            <article
              key={project.name}
              className="card work-card"
              onMouseMove={spotlight}
            >
              <div className="work-head">
                <h3>{project.name}</h3>
                <a href={project.link.href} target="_blank" rel="noreferrer">
                  {project.link.label} ↗
                </a>
              </div>

              <p>{project.blurb}</p>

              <div className="chips">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
