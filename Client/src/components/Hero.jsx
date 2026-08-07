
function Hero() {
  return (
    <section className="hero container" id="home" data-reveal>
      <div className="hero-content">
        <p className="intro">Hello, I&apos;m Miroszlava</p>

        <h1>
          <span className="title-line">I build</span>
          <span className="title-line title-line-strong">digital spaces</span>
          <span className="title-line">that feel alive.</span>
        </h1>

        <p className="hero-description">
          I&apos;m a frontend developer who creates beautiful, responsive and
          user-friendly websites using React, JavaScript and modern web
          technologies.
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

      <div className="hero-space" aria-hidden="true">
  <div className="space-scene">

    {/* Stars */}
    <div className="star-field" />

    {/* Soft glow behind everything */}
    <div className="space-glow" />

    {/* Central star */}
    <div className="space-sun">
      <div className="sun-core" />
      <div className="sun-glow" />
    </div>

    {/* Orbit 1 */}
    <div className="space-orbit space-orbit-one">
      <div className="orbit-runner orbit-runner-one">
        <span className="planet planet-one" />
      </div>
    </div>

    {/* Orbit 2 */}
    <div className="space-orbit space-orbit-two">
      <div className="orbit-runner orbit-runner-two">
        <span className="planet planet-two">
          <span className="planet-ring" />
        </span>
      </div>
    </div>

    {/* Orbit 3 */}
    <div className="space-orbit space-orbit-three">
      <div className="orbit-runner orbit-runner-three">
        <span className="planet planet-three" />
      </div>
    </div>

    {/* Comet */}
    <div className="comet">
      <span />
    </div>

  </div>
</div>
    </section>
  );
}

export default Hero;
