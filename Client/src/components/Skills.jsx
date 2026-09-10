import { skills } from '../info'
import { useInView } from '../lib'
import './Skills.css'

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section
      id="skills"
      ref={ref}
      className={inView ? 'section appear in' : 'section appear'}
    >
      <div className="wrap">
        <h2 className="title">Tools I work with</h2>
        <p className="subtitle">
          Gathered across my degrees, my role at IRCEF, and personal projects.
        </p>

        <div className="skills-grid">
          {skills.map((group) => (
            <article key={group.title} className="card skill-card">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
