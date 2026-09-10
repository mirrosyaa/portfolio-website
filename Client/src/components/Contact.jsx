import { links, profile } from '../info'
import { useInView } from '../lib'
import './Contact.css'

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section
      id="contact"
      ref={ref}
      className={inView ? 'section appear in' : 'section appear'}
    >
      <div className="wrap contact">
        <p className="status">
          <span className="status-dot" />
          Currently open to graduate software engineering roles
        </p>

        <h2 className="title">Get in touch</h2>
        <p className="subtitle">
          Based in {profile.location}, open to hybrid and remote. Email is the
          quickest way to reach me — I usually reply within a day or two.
        </p>

        <a className="mail" href={`mailto:${links.email}`}>
          {links.email}
        </a>

        <div className="contact-links">
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub <span>↗</span>
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <span>↗</span>
          </a>
          <a href={links.phoneHref}>
            {links.phone} <span>↗</span>
          </a>
          <a href={links.cv} download>
            Download CV <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
