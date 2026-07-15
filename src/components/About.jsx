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
            <p>I’ve always believed that the true measure of engineering isn't how complex a system is, but how 
              beautifully it solves a real problem. I don't interest myself in simply training machine learning 
              models to let them sit in a sandbox. Instead, I focus on the engine room of AI—architecting resilient, 
              scalable systems that connect abstract research with the messy, chaotic reality of production data. From 
              Computer Vision to Generative AI, my goal is to make the underlying technology so seamless that it becomes 
              completely invisible to the end user.</p>

            <p>What drives me is systems thinking. I love operating right at the intersection of engineering and product 
              strategy, ensuring that every architectural line we draw serves a clear, high-impact business objective. 
              As an aspiring AI Architect, I don't build just to chase the tech hype; I build to turn cutting-edge innovation 
              into purposeful, elegant execution that stands the test of scale.</p>
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
