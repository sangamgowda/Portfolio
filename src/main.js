// Typewriter Effect
const phrases = [
  "Builds AI systems that ship.",
  "ML -> DL -> LLMs -> Agents.",
  "Forecasting. Vision. Reasoning.",
  "Research ideas into real products."
];
const typedEl = document.getElementById('typed');
let pIdx = 0, cIdx = 0, deleting = false;

function typeLoop() {
  const current = phrases[pIdx];
  if (!deleting) {
    cIdx++;
    typedEl.textContent = current.slice(0, cIdx);
    if (cIdx === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    cIdx--;
    typedEl.textContent = current.slice(0, cIdx);
    if (cIdx === 0) {
      deleting = false;
      pIdx = (pIdx + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, deleting ? 28 : 48);
}

if (typedEl) {
  typeLoop();
}

// Scroll Reveal Observer
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => io.observe(el));

// Top Progress Bar
const progressEl = document.getElementById('progress');
function updateProgress() {
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  if (progressEl) {
    progressEl.style.width = scrolled + '%';
  }
}
document.addEventListener('scroll', updateProgress);
updateProgress();

// Side Dock Active State & Smooth Scroll Click Triggers
const dockButtons = document.querySelectorAll('.dock button');
const sections = Array.from(dockButtons).map(b => document.getElementById(b.dataset.target));

dockButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetEl = document.getElementById(btn.dataset.target);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

function updateDock() {
  let currentIdx = 0;
  sections.forEach((sec, i) => {
    if (sec && sec.getBoundingClientRect().top <= 140) {
      currentIdx = i;
    }
  });
  dockButtons.forEach((b, i) => b.classList.toggle('active', i === currentIdx));
}

document.addEventListener('scroll', updateDock);
updateDock();
