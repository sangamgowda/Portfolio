import { useEffect } from 'react';

const STAGGER_GROUPS = [
  '.proj-grid',
  '.contact-grid',
  '.stack-bubbles',
  '.stat-row',
  '.side-cards',
  '.social-row'
];

export function useScrollReveal(deps = []) {
  useEffect(() => {
    const root = document.getElementById('root') || document;

    STAGGER_GROUPS.forEach((selector) => {
      root.querySelectorAll(selector).forEach((group) => {
        Array.from(group.children).forEach((child, i) => {
          child.classList.add('reveal');
          child.style.transitionDelay = `${i * 90}ms`;
        });
      });
    });

    const revealEls = root.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => io.observe(el));

    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
