import "./App.css";
import heroImage from "./assets/hero.png";

const technologies = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "Responsive Design",
  "Java",
  "Node.js",
];

function App() {
  return (
    <div className="website">
      <div className="background-grid" aria-hidden="true" />
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />

      <header className="navbar container">
        <a className="logo" href="#home" aria-label="Go to homepage">
          <span className="logo-symbol">Y</span>
          <span className="logo-text">
            Miroszlava<span>.dev</span>
          </span>
        </a>

        <nav className="navigation" aria-label="Main navigation">
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
          </div>

          <a className="nav-button" href="#contact">
            Let&apos;s talk
          </a>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot" />
              Available for new opportunities
            </div>

            <p className="intro">Hello, I&apos;m Miroszlava</p>

            <h1>
              I will put something{" "}
              <span className="gradient-text">in here</span>
            </h1>

            <p className="hero-description">
              I&apos;m a frontend developer who creates beautiful, responsive
              and user-friendly websites using React, JavaScript and modern
              web technologies.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                View my projects
                <span aria-hidden="true">↗</span>
              </a>

              <a className="secondary-button" href="#contact">
                Contact me
              </a>
            </div>

            <div className="social-links">
              <span>Find me online</span>

              <div>
                <a
                  href="https://github.com/mirrosyaa"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/in/myr3"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="statistics">
              <article>
                <strong>05+</strong>
                <span>Projects built</span>
              </article>

              <article>
                <strong>01+</strong>
                <span>Years learning</span>
              </article>

              <article>
                <strong>100%</strong>
                <span>Passion for code</span>
              </article>
            </div>
          </div>

          <div className="hero-visual">
            <div className="image-glow" aria-hidden="true" />

            <div className="image-frame">
              <div className="image-decoration" aria-hidden="true" />

              <img
                src={heroImage}
                alt="Portrait or illustration of the portfolio owner"
              />

              <div className="image-label">
                <span className="image-label-icon">&lt;/&gt;</span>

                <div>
                  <strong>Frontend Developer</strong>
                  <span>React · JavaScript · Java · CSS</span>
                </div>
              </div>
            </div>

            <div className="floating-card code-card">
              <div className="window-controls" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <code>
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">developer</span> = {"{"}
                <br />
                &nbsp;&nbsp;creative:{" "}
                <span className="code-orange">true</span>,
                <br />
                &nbsp;&nbsp;curious:{" "}
                <span className="code-orange">true</span>
                <br />
                {"}"};
              </code>
            </div>

            <div className="floating-card design-card">
              <span className="design-icon">✦</span>
              <div>
                <strong>Creative development</strong>
                <span>Designing with purpose</span>
              </div>
            </div>
          </div>
        </section>

        <section className="technology-section" aria-label="Technologies">
          <p>Technologies I work with</p>

          <div className="technology-list">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </section>

        <section className="placeholder-section container" id="about">
          <p>About me</p>
          <h2>The next section of my portfolio will be there.</h2>
        </section>

        <section className="placeholder-section container" id="projects">
          <p>Selected work</p>
          <h2>My projects will be there.</h2>
        </section>

        <section className="placeholder-section container" id="contact">
          <p>Get in touch</p>
          <h2>Didn&apos;t create a text yet.</h2>

          <a className="primary-button" href="mailto:your@email.com">
            Send me an email
            <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;