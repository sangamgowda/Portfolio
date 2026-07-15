import { useState } from 'react';
import { stackGroups } from '../data/stack.js';
import useMatchMedia from '../hooks/useMatchMedia.js';

export default function Stack() {
  const [active, setActive] = useState(null);
  const canHover = useMatchMedia('(hover: hover) and (pointer: fine)');
  const isNarrow = useMatchMedia('(max-width: 900px)');
  /* Mobile / touch: always show every group expanded — no hover accordion */
  const alwaysOpen = !canHover || isNarrow;

  const handleMove = (e) => {
    const container = e.currentTarget;
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
          className={`stack-bubbles reveal${alwaysOpen ? ' stack-bubbles--touch' : ''}`}
          id="stackBubbles"
          onMouseMove={!alwaysOpen ? handleMove : undefined}
          onMouseLeave={!alwaysOpen ? handleLeave : undefined}
        >
          {stackGroups.map((group, i) => (
            <div
              key={group.label}
              className={`stack-bubble${!alwaysOpen && active === i ? ' active' : ''}${alwaysOpen ? ' is-open' : ''}`}
              tabIndex={alwaysOpen ? -1 : 0}
              onFocus={!alwaysOpen ? () => setActive(i) : undefined}
              onClick={
                !alwaysOpen
                  ? () => setActive(active === i ? null : i)
                  : undefined
              }
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
