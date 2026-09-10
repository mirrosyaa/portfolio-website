import { nav, profile } from '../info'
import { useActiveSection } from '../lib'
import './Nav.css'

const ids = nav.map((item) => item.id)

const go = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Nav() {
  const active = useActiveSection(ids)

  return (
    <header className="nav">
      <div className="nav-inner">
        <button className="brand" onClick={() => go('home')}>
          <span>&lt;</span>
          {profile.initials}
          <span>/&gt;</span>
        </button>

        <nav>
          {nav.map((item) => (
            <button
              key={item.id}
              className={active === item.id ? 'on' : undefined}
              onClick={() => go(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
