import { useEffect, useRef } from 'react';

export function useScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
      el.style.width = scrolled + '%';
    };

    document.addEventListener('scroll', update);
    update();

    return () => document.removeEventListener('scroll', update);
  }, []);

  return ref;
}
