
function Navbar() {
  return (
    <header className="navbar">
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
  );
}

export default Navbar;
