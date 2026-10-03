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
            <p>I'm an AI engineer who likes building the whole thing, from the model to the pipeline to the problem
              it's meant to solve. At EAGE Technologies I worked as an individual contributor in a small team, taking
              forecasting, computer vision, and IoT systems from a blank page to working prototypes and pilots, often
              with no historical data and no senior AI guidance to lean on. That taught me to learn fast, design
              carefully, and be honest about what a system can and can't do yet.</p>

            <p>Lately my focus is making LLM systems trustworthy. My latest build, EV Ops Copilot, is an agentic RAG
              assistant that investigates in steps, cites every claim to its source, guards every database query, and
              says "I don't know" when the data doesn't support an answer — with an evaluation suite that catches
              regressions before they ship. I'm working toward becoming an AI architect by building depth in exactly
              this: reliable, observable, grounded AI.</p>
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
