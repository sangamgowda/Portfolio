import { useRef, useState } from 'react';
import { stackGroups } from '../data/stack.js';

export default function Stack() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(null);

  const handleMove = (e) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const isRow = getComputedStyle(container).flexDirection !== 'column';

    let ratio;
    if (isRow) {
      ratio = (e.clientX - rect.left) / rect.width;
    } else {
      ratio = (e.clientY - rect.top) / rect.height;
    }
    ratio = Math.max(0, Math.min(0.999, ratio));

    const idx = Math.floor(ratio * stackGroups.length);
    setActive(idx);
  };

  const handleLeave = () => setActive(null);

  return (
    <section className="sec" id="stack">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow">02 // Modules</div>
          <h2>Core Stack</h2>
        </div>

        <div
          className="stack-bubbles reveal"
          id="stackBubbles"
          ref={containerRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          {stackGroups.map((group, i) => (
            <div
              key={group.label}
              className={`stack-bubble ${active === i ? 'active' : ''}`}
              tabIndex={0}
              onFocus={() => setActive(i)}
              onClick={() => setActive(active === i ? null : i)}
            >
              <div className="bubble-head">
                <span className="p-label">{group.label}</span>
              </div>
              <div className="chips">
                {group.chips.map((chip, ci) => (
                  <span key={ci} className="chip">
                    {typeof chip === 'string' ? (
                      chip
                    ) : (
                      <>
                        <img className="chip-icon" src={chip.icon} alt="" />
                        {chip.label}
                      </>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
