import { links, profile } from '../info'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <span>{profile.fullName}</span>
      <span className="dot">·</span>
      <span>Designed and built with React</span>

      <div className="footer-links">
        <a href={links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={`mailto:${links.email}`}>Email</a>
      </div>
    </footer>
  )
}
