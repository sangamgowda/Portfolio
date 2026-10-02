import { useState } from 'react';
import { stackGroups } from '../data/stack.js';

export default function Stack() {
  /* Touch / narrow screens: tap a card to open it, tap again to close. Desktop uses CSS hover. */
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx((cur) => (cur === i ? null : i));

  return (
    <section className="sec" id="stack">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow">02 // Modules</div>
          <h2>Core Stack</h2>
        </div>

        <div className="stack-bubbles reveal" id="stackBubbles">
          {stackGroups.map((group, i) => (
            <div key={group.label} className={`stack-bubble${openIdx === i ? ' is-open' : ''}`}>
              <div
                className="stack-card"
                tabIndex={0}
                role="button"
                aria-expanded={openIdx === i}
                onClick={() => toggle(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggle(i);
                  }
                }}
              >
                <div className="bubble-head">
                  <span className="p-label">{group.label}</span>
                  <svg className="bubble-toggle" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 9.5 L12 15.5 L18 9.5" />
                  </svg>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
