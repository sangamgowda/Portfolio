import { useEffect, useState } from 'react';

const NAV = [
  { id: 'hero', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'stack', label: 'STACK' },
  { id: 'work', label: 'WORK' },
  { id: 'build', label: 'BUILD' },
  { id: 'link', label: 'LINK' }
];

export default function Dock() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id));

    const update = () => {
      let currentIdx = 0;
      sections.forEach((sec, i) => {
        if (sec && sec.getBoundingClientRect().top <= 140) {
          currentIdx = i;
        }
      });
      setActive(NAV[currentIdx].id);
    };

    document.addEventListener('scroll', update);
    update();

    return () => document.removeEventListener('scroll', update);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="dock" id="dock">
      {NAV.map((item, i) => (
        <div key={item.id} style={{ display: 'contents' }}>
          <button
            className={active === item.id ? 'active' : ''}
            onClick={() => scrollTo(item.id)}
          >
            <span className="dot"></span>
            {item.label}
          </button>
          {i < NAV.length - 1 && <div className="rail"></div>}
        </div>
      ))}
    </nav>
  );
}
