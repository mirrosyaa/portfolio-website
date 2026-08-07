import { useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import TechnologyStrip from "../components/TechnologyStrip.jsx";

function HomePage() {
  
  useEffect(() => {
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorRing = document.querySelector(".cursor-ring");

    
    const pointerMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      if (cursorDot) {
        cursorDot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      if (cursorRing) {
        cursorRing.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const pointerDown = () => {
      if (cursorRing) {
        cursorRing.classList.add("cursor-ring-clicked");
      }
    };

    const pointerUp = () => {
      if (cursorRing) {
        cursorRing.classList.remove("cursor-ring-clicked");
      }
    };

    window.addEventListener("mousemove", pointerMove);
    window.addEventListener("mousedown", pointerDown);
    window.addEventListener("mouseup", pointerUp);

    const revealTargets = document.querySelectorAll("[data-reveal]");

   
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            }
          });
        },
        { threshold: 0.22 }
      );

      revealTargets.forEach((item) => observer.observe(item));
    } else {
      revealTargets.forEach((item) => item.classList.add("is-visible"));
    }

    return () => {
      window.removeEventListener("mousemove", pointerMove);
      window.removeEventListener("mousedown", pointerDown);
      window.removeEventListener("mouseup", pointerUp);
    };
  }, []);

  return (
    <div className="website">
      <div className="cursor cursor-dot" aria-hidden="true" />
      <div className="cursor cursor-ring" aria-hidden="true" />
      <div className="background-grid" aria-hidden="true" />
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <TechnologyStrip />

        <section className="placeholder-section container" id="about" data-reveal>
          <p>About me</p>
          <h2>The next section of my portfolio will be there.</h2>
        </section>

        <section className="placeholder-section container" id="projects" data-reveal>
          <p>Selected work</p>
          <h2>My projects will be there.</h2>
        </section>

        <section className="placeholder-section container" id="contact" data-reveal>
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

export default HomePage;
