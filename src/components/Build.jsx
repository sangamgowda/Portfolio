import { projects } from '../data/projects.js';

export default function Build({ onOpenProject }) {
  const workProjects = projects.filter((p) => p.group === 'work');
  const ossProjects = projects.filter((p) => p.group === 'oss');

  const renderCard = (p) => {
    const clickable = !p.empty;
    return (
      <div
        key={p.id}
        className={`proj-card hud ${p.empty ? 'proj-empty' : ''} ${clickable ? 'proj-clickable' : ''}`}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable ? 0 : undefined}
        aria-haspopup={clickable ? 'dialog' : undefined}
        onClick={clickable ? () => onOpenProject(p.id) : undefined}
        onKeyDown={
          clickable
            ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenProject(p.id);
                }
              }
            : undefined
        }
      >
        <div className="proj-idx">{p.index}</div>
        <h3>{p.title}</h3>
        <p className="proj-desc">{p.desc}</p>
        <div className="proj-tags">
          {p.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        {clickable && <span className="proj-link">View Project ↗</span>}
      </div>
    );
  };

  return (
    <section className="sec" id="build">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow">04 // Builds</div>
          <h2>Selected Builds</h2>
        </div>

        <div className="build-group reveal">
          <div className="build-group-head">
            <h3>Work — Product Builds</h3>
            <span className="note">Built inside EAGE Technologies · closed-source</span>
          </div>
          <div className="proj-grid">
            {workProjects.map(renderCard)}
          </div>
        </div>

        <div className="build-group reveal">
          <div className="build-group-head">
            <h3>Open Source</h3>
            <span className="note">Public repositories, built &amp; maintained independently</span>
          </div>
          <div className="proj-grid">
            {ossProjects.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
}
