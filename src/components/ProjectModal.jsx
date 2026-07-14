import { useEffect, useRef } from 'react';

function IsoScene() {
  const gridRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const rows = 6;
    const cols = 7;
    for (let i = 0; i < rows * cols; i++) {
      const panel = document.createElement('div');
      panel.className = 'iso-panel';
      if (i % 9 === 0) panel.classList.add('amber');
      panel.style.animationDelay = `${(i % 7) * 0.18}s`;
      grid.appendChild(panel);
    }
  }, []);

  const handleMove = (e) => {
    const scene = sceneRef.current;
    const grid = gridRef.current;
    if (!scene || !grid) return;
    const rect = scene.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const rx = 55 - py * 12;
    const rz = 45 + px * 16;
    grid.style.transform = `rotateX(${rx}deg) rotateZ(${rz}deg)`;
  };

  const handleLeave = () => {
    const grid = gridRef.current;
    if (grid) grid.style.transform = 'rotateX(55deg) rotateZ(45deg)';
  };

  return (
    <div className="iso-scene" ref={sceneRef} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <div className="iso-grid" ref={gridRef} id="isoGrid"></div>
      <div className="iso-glow"></div>
      <div className="iso-badge"><span className="pulse"></span>Digital Twin — Live</div>
    </div>
  );
}

export default function ProjectModal({ project, onClose }) {
  const open = Boolean(project);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <>
      <div
        className={`modal-backdrop ${open ? 'open' : ''}`}
        onClick={onClose}
      ></div>
      <div
        className={`project-modal ${open ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="projModalTitle"
      >
        <button className="modal-close" aria-label="Close project details" onClick={onClose}>✕</button>

        {project && (
          <div className="modal-scroll">
            <div className="modal-head">
              <div className="eyebrow">{project.eyebrow}</div>
              <h3 id="projModalTitle">{project.title}</h3>
              {project.tagline && <p className="modal-tagline">{project.tagline}</p>}
            </div>

            {project.hasIso && <IsoScene />}

            {project.modalTags.length > 0 && (
              <div className="modal-feature-row">
                {project.modalTags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            )}

            <div className="modal-body">
              {project.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              {project.points.length > 0 && (
                <div className="modal-grid">
                  {project.points.map((pt) => (
                    <div className="modal-point" key={pt.k}>
                      <span className="k">{pt.k}</span>
                      <span className="v">{pt.v}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
