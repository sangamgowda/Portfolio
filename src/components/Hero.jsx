import { useEffect, useRef } from 'react';

const PHRASES = [
  'Builds AI systems end to end.',
  'ML -> DL -> LLMs -> Agents.',
  'Agentic RAG, grounded in real data.',
  'Research ideas into working prototypes.'
];

function useTypewriter() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let pIdx = 0;
    let cIdx = 0;
    let deleting = false;
    let timer;

    const loop = () => {
      const current = PHRASES[pIdx];
      if (!deleting) {
        cIdx++;
        el.textContent = current.slice(0, cIdx);
        if (cIdx === current.length) {
          deleting = true;
          timer = setTimeout(loop, 1400);
          return;
        }
      } else {
        cIdx--;
        el.textContent = current.slice(0, cIdx);
        if (cIdx === 0) {
          deleting = false;
          pIdx = (pIdx + 1) % PHRASES.length;
        }
      }
      timer = setTimeout(loop, deleting ? 28 : 48);
    };

    loop();
    return () => clearTimeout(timer);
  }, []);

  return ref;
}

export default function Hero() {
  const typedRef = useTypewriter();

  return (
    <header className="hero" id="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-text reveal in">
            <div className="eyebrow">Engineer · Builder · Researcher</div>
            <h1>SANGAM</h1>
            <div className="role-line">&gt; <span ref={typedRef}></span><span className="cursor"></span></div>

            <div className="stat-row">
              <div className="stat">
                <div className="k">Focus</div>
                <div className="v">AI Solution Design · Applied ML · Agentic Systems</div>
              </div>
              <div className="stat">
                <div className="k">Base</div>
                <div className="v">Bengaluru, India</div>
              </div>
            </div>

            <div className="cta-row">
              <a className="btn primary" href="#link">Get in Touch</a>
              <a className="btn ghost" href="https://linkedin.com/in/sangam-gowda2128" target="_blank" rel="noopener">LinkedIn ↗</a>
            </div>
          </div>

          <div className="hero-photo reveal in">
            <div className="photo-wrap">
              <div className="ring"></div>
              <img src="/profile.jpg" alt="Portrait of Sangam" className="profile-img" />
            </div>
          </div>
        </div>

        <div className="strip hud reveal">
          <div className="cell">
            <div className="k">Experience</div>
            <div className="v">1+ Years</div>
          </div>
          <div className="cell">
            <div className="k">Systems Built</div>
            <div className="v">4</div>
          </div>
          <div className="cell">
            <div className="k">Focus Areas</div>
            <div className="v">LLM Agents · RAG · Computer Vision · Forecasting</div>
          </div>
        </div>
      </div>
    </header>
  );
}
