import { stackGroups } from '../data/stack.js';

export default function Stack() {
  return (
    <section className="sec" id="stack">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow">02 // Modules</div>
          <h2>Core Stack</h2>
        </div>

        <div className="stack-bubbles reveal" id="stackBubbles">
          {stackGroups.map((group) => (
            <div key={group.label} className="stack-bubble">
              <div className="stack-card" tabIndex={0}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
