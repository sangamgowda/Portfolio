import { useState } from 'react';
import { useTheme } from './hooks/useTheme.js';
import { useScrollReveal } from './hooks/useScrollReveal.js';
import { useScrollProgress } from './hooks/useScrollProgress.js';
import { projects } from './data/projects.js';

import ThemeToggle from './components/ThemeToggle.jsx';
import Dock from './components/Dock.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Stack from './components/Stack.jsx';
import Work from './components/Work.jsx';
import Build from './components/Build.jsx';
import Link from './components/Link.jsx';
import ProjectModal from './components/ProjectModal.jsx';

export default function App() {
  const { theme, toggle } = useTheme();
  const progressRef = useScrollProgress();
  const [activeProjectId, setActiveProjectId] = useState(null);

  useScrollReveal([]);

  const activeProject = projects.find((p) => p.id === activeProjectId) || null;

  return (
    <>
      <div className="bg-grid"></div>
      <div className="bg-glow c1"></div>
      <div className="bg-glow c2"></div>
      <div className="progress" id="progress" ref={progressRef}></div>

      <div className="header-container">
        <a href="#hero" className="brand-mark">SANGAM</a>
        <ThemeToggle theme={theme} onToggle={toggle} />
      </div>

      <Dock />

      <main>
        <Hero />
        <About />
        <Stack />
        <Work />
        <Build onOpenProject={setActiveProjectId} />
        <Link />
      </main>

      <footer>© 2026 P. SANGAM — DESIGNED &amp; BUILT WITH INTENT</footer>

      <ProjectModal project={activeProject} onClose={() => setActiveProjectId(null)} />
    </>
  );
}
