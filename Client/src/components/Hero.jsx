import { profile, stats, links } from '../info'
import { useInView, useCountUp, useMagnet } from '../lib'
import './Hero.css'

function Stat({ number, suffix, label, run, index }) {
  const n = useCountUp(number, run)
  return (
    <div className="stat" style={{ '--i': index }}>
      <b>
        {n}
        {suffix}
      </b>
      <i className="stat-bar" />
      <span>{label}</span>
    </div>
  )
}

const go = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  const [ref, inView] = useInView(0.25)
  const magnet = useMagnet(0.2)

  return (
    <section
      id="home"
      ref={ref}
      className={inView ? 'hero appear in' : 'hero appear'}
    >
      <div className="hero-text">
        <p className="kicker">
          {profile.role} <span>·</span> {profile.location}
        </p>

        <h1>
          Hi, I&apos;m <span className="accent">{profile.name}</span>
        </h1>

        <p className="lead">{profile.lead}</p>
        <p className="sub">{profile.now}</p>

        <div className="cta">
          <button ref={magnet} className="btn primary" onClick={() => go('work')}>
            See what I&apos;ve built
          </button>
          <a
            className="btn ghost"
            href={links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <div className="stats">
          {stats.map((s, i) => (
            <Stat key={s.label} {...s} run={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
