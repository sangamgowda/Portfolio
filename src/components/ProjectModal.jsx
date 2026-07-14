import { useEffect } from 'react';
import SolarScene from './SolarScene.jsx';

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

            {project.scene && <SolarScene project={project} />}

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
