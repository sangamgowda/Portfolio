import { useEffect, useRef } from 'react';

const PHRASES = [
  'Builds AI systems that ship.',
  'ML -> DL -> LLMs -> Agents.',
  'Custom AI Agents & Enterprise GenAI.',
  'Research ideas into real products.'
];

export default function RoleLine() {
  const typedRef = useRef(null);

  useEffect(() => {
    const el = typedRef.current;
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

  return (
    <div className="role-line" aria-live="polite">
      <span className="role-prefix">&gt;&nbsp;</span>
      <span className="role-text" ref={typedRef}></span>
    </div>
  );
}
