export default function About() {
  return (
    <section className="sec" id="about">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow">01 // Profile</div>
          <h2>About Me</h2>
        </div>

        <div className="about-grid reveal">
          <div className="about-text">
            <p>I am an engineer who believes <strong>good engineering is not measured by the complexity of a
                system, but by how cleanly it solves a real-world problem.</strong> My focus extends far beyond
              training machine learning models — I design and build the intelligent systems that connect abstract
              research with practical, scalable execution.</p>

            <p>My expertise spans the complete lifecycle of AI products — encompassing <strong>Applied AI, Computer
                Vision, Machine Learning, Deep Learning, and Generative AI (LLMs/RAG).</strong> Rather than just
              implementing algorithms in a sandbox, I focus on the engine room of engineering: architecting solutions
              that are purposeful, resilient, and built to handle the chaos of production data.</p>

            <p>What defines my approach is systems thinking. I believe true elegance isn't a complex algorithm —
              it's a chaotic puzzle solved so cleanly that the technology becomes invisible. This mindset lets me
              operate at the intersection of engineering and product strategy, ensuring every technical decision
              serves a clear business objective.</p>

            <p>As a self-driven engineer and aspiring AI Architect, I thrive on technical challenges that force
              continuous evolution — building high-impact, intelligent products that bridge cutting-edge innovation
              with practical, real-world outcomes.</p>
          </div>

          <div className="about-quote hud">
            <span className="mark">“</span>
            <p>Technology is just an expensive hobby until it actually changes how a problem is solved.</p>
            <span className="attribution">— 2 am Philosophy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
