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
            <p>I'm an engineer who learns by building. When I take on a new problem, I try to begin with questions
              rather than tools. Who is this for? What would a good answer look like? And what happens if it's wrong?
              Most of my work so far has been in small teams where I had to figure things out on my own, which taught
              me to stay with a problem from the first sketch to the last fix, and to be comfortable starting from
              zero.</p>

            <p>What I'd like to build is AI that people can rely on in everyday use, not just in a demo. I try to be
              clear about what's working and what isn't, explain things simply, and keep improving something until it
              holds up. I'm still early in my career, and I know where I need to grow, with more production experience
              and larger, more complex systems. That's the direction I'm working toward, one build at a time, with the
              long-term goal of designing AI systems end to end as an architect.</p>
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
