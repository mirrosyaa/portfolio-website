import { about, experience, learning } from '../info'
import { useInView } from '../lib'
import './About.css'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section
      id="about"
      ref={ref}
      className={inView ? 'section appear in' : 'section appear'}
    >
      <div className="wrap about-grid">
        <div className="about-copy">
          <h2 className="title">About me</h2>
          {about.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <aside className="card timeline">
          <h3>Where I&apos;ve been</h3>
          {experience.map((job) => (
            <div key={job.role + job.place} className="job">
              <b>{job.role}</b>
              <span>{job.place}</span>
              <span className="when">{job.when}</span>
            </div>
          ))}

          <h3 className="timeline-more">Certifications &amp; extras</h3>
          <ul className="extras">
            {learning.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
