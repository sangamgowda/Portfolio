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
            <p>Most AI looks brilliant in a demo and falls apart the first time real data shows up. That gap is what
              pulled me in. My first real problems came with no historical data and no senior engineer down the hall,
              so I learned to start from the problem, not the model. Forecasting solar output from twelve years of
              history, reading soil through sensors in a field, spotting objects in infrared frames: different
              problems, same question underneath. What does this system need to know, and how will I know when it's
              wrong?</p>

            <p>That question is where I'm headed. I want to build AI that people can actually lean on: agents that
              reason in steps, show their sources, and say "I don't know" instead of guessing. Every system I build
              carries the same habit: test it, trace it, and know its limits before anyone else finds them. The long
              game is to architect systems like that at scale. For now, I build each one end to end, and I keep it
              honest.</p>
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
