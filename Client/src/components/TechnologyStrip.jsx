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

function TechnologyStrip() {
  return (
    <section className="technology-section" aria-label="Technologies" data-reveal>
      <p>Technologies I work with</p>

      <div className="technology-list">
        {technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
    </section>
  );
}

export default TechnologyStrip;
