// ============================================================
// Typewriter Effect
// ============================================================
const phrases = [
  "Builds AI systems that ship.",
  "ML -> DL -> LLMs -> Agents.",
  "Custom AI Agents & Enterprise GenAI.",
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

// ============================================================
// Theme toggle (light / dark) — persisted
// ============================================================
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme) {
  root.classList.toggle('light', theme === 'light');
}

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const next = root.classList.contains('light') ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });
}

// ============================================================
// Scroll Reveal Observer (with staggered children for a
// "motion" feel across cards/grids/panels)
// ============================================================
const staggerGroups = document.querySelectorAll(
  '.proj-grid, .contact-grid, .stack-bubbles, .stat-row, .side-cards, .social-row'
);
staggerGroups.forEach(group => {
  Array.from(group.children).forEach((child, i) => {
    child.classList.add('reveal');
    child.style.transitionDelay = `${i * 90}ms`;
  });
});

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

// ============================================================
// Top Progress Bar
// ============================================================
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

// ============================================================
// Side Dock Active State & Smooth Scroll Click Triggers
// ============================================================
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

// ============================================================
// Floating photo: smooth hero -> about scroll-linked animation
// ============================================================
const heroSlot = document.getElementById('heroPhotoSlot');
const aboutSlot = document.getElementById('aboutPhotoSlot');
const floatingPhoto = document.getElementById('floatingPhoto');
const heroSection = document.getElementById('hero');

let heroBox = null;
let aboutBox = null;

function measurePhotoRects() {
  if (!heroSlot || !aboutSlot) return;
  const sy = window.scrollY;
  const h = heroSlot.getBoundingClientRect();
  const a = aboutSlot.getBoundingClientRect();
  heroBox = { top: h.top + sy, left: h.left, width: h.width, height: h.height };
  aboutBox = { top: a.top + sy, left: a.left, width: a.width, height: a.height };
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function updateFloatingPhoto() {
  if (!heroBox || !aboutBox || !floatingPhoto || !heroSection) return;

  const sy = window.scrollY;
  const vh = window.innerHeight;
  const heroBottom = heroSection.getBoundingClientRect().bottom;

  // progress 0 -> photo sits in the hero slot
  // progress 1 -> photo has arrived at the about slot
  let progress = 1 - Math.max(0, Math.min(1, heroBottom / vh));
  progress = Math.max(0, Math.min(1, progress));

  // ease the progress slightly for a smoother feel
  const eased = progress * progress * (3 - 2 * progress);

  const top = lerp(heroBox.top, aboutBox.top, eased) - sy;
  const left = lerp(heroBox.left, aboutBox.left, eased);
  const width = lerp(heroBox.width, aboutBox.width, eased);
  const height = lerp(heroBox.height, aboutBox.height, eased);

  floatingPhoto.style.top = `${top}px`;
  floatingPhoto.style.left = `${left}px`;
  floatingPhoto.style.width = `${width}px`;
  floatingPhoto.style.height = `${height}px`;
  floatingPhoto.style.opacity = '1';
  floatingPhoto.classList.toggle('docked', progress > 0.65);
}

let rafId = null;
function scheduleUpdate() {
  if (rafId) return;
  rafId = requestAnimationFrame(() => {
    updateFloatingPhoto();
    rafId = null;
  });
}

window.addEventListener('load', () => {
  measurePhotoRects();
  updateFloatingPhoto();
});
window.addEventListener('resize', () => {
  measurePhotoRects();
  updateFloatingPhoto();
});
document.addEventListener('scroll', scheduleUpdate);

// initial measure (in case images/fonts are already loaded)
measurePhotoRects();
updateFloatingPhoto();

// ============================================================
// Core Stack — cursor-driven bubble expand (only one open)
//
// Bug fix: the old version used mouseenter on each bubble.
// Because the active bubble grows via flex-grow, the layout
// shifts *under the cursor*, which can push a neighboring
// bubble's edge right under the pointer and fire ITS
// mouseenter too — a feedback loop that opens the wrong card.
//
// Fix: instead of trusting individual bubble hover events,
// we slice the container into N equal, fixed-size zones based
// on the container's own bounding box (which never changes
// size) and derive the active index purely from cursor
// position. The visual bubbles can grow/shrink freely — it no
// longer affects which one is considered "hovered".
// ============================================================
const stackBubbles = Array.from(document.querySelectorAll('.stack-bubble'));
const stackContainer = document.getElementById('stackBubbles');

function setActiveBubble(target) {
  stackBubbles.forEach(b => b.classList.toggle('active', b === target));
}

if (stackContainer && stackBubbles.length) {
  stackContainer.addEventListener('mousemove', (e) => {
    const rect = stackContainer.getBoundingClientRect();
    const isRow = getComputedStyle(stackContainer).flexDirection !== 'column';

    let ratio;
    if (isRow) {
      ratio = (e.clientX - rect.left) / rect.width;
    } else {
      ratio = (e.clientY - rect.top) / rect.height;
    }
    ratio = Math.max(0, Math.min(0.999, ratio));

    const idx = Math.floor(ratio * stackBubbles.length);
    setActiveBubble(stackBubbles[idx]);
  });

  stackContainer.addEventListener('mouseleave', () => setActiveBubble(null));

  // touch / keyboard fallback for non-hover devices
  stackBubbles.forEach(bubble => {
    bubble.addEventListener('focus', () => setActiveBubble(bubble));
    bubble.addEventListener('click', () => {
      const isActive = bubble.classList.contains('active');
      setActiveBubble(isActive ? null : bubble);
    });
  });
}

// ============================================================
// Project modal: Urja Setu (Solar Intelligence Platform)
// Opens a centered card (not full page) with a 3D isometric
// "digital twin" visualization built from CSS 3D transforms.
// ============================================================
const projCard = document.getElementById('projSolarCard');
const projModal = document.getElementById('projModal');
const projModalBackdrop = document.getElementById('projModalBackdrop');
const projModalClose = document.getElementById('projModalClose');
const isoGrid = document.getElementById('isoGrid');
const isoScene = document.getElementById('isoScene');

// Build the isometric panel grid once
if (isoGrid) {
  const rows = 6;
  const cols = 7;
  for (let i = 0; i < rows * cols; i++) {
    const panel = document.createElement('div');
    panel.className = 'iso-panel';
    // sprinkle a few amber "attention" panels for visual interest
    if (i % 9 === 0) panel.classList.add('amber');
    panel.style.animationDelay = `${(i % 7) * 0.18}s`;
    isoGrid.appendChild(panel);
  }
}

// Subtle cursor-driven parallax tilt on the 3D scene
if (isoScene && isoGrid) {
  isoScene.addEventListener('mousemove', (e) => {
    const rect = isoScene.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const rx = 55 - py * 12;
    const rz = 45 + px * 16;
    isoGrid.style.transform = `rotateX(${rx}deg) rotateZ(${rz}deg)`;
  });
  isoScene.addEventListener('mouseleave', () => {
    isoGrid.style.transform = 'rotateX(55deg) rotateZ(45deg)';
  });
}

function openProjectModal() {
  if (!projModal || !projModalBackdrop) return;
  projModal.classList.add('open');
  projModalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  if (!projModal || !projModalBackdrop) return;
  projModal.classList.remove('open');
  projModalBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

if (projCard) {
  projCard.addEventListener('click', openProjectModal);
  projCard.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openProjectModal();
    }
  });
}

if (projModalClose) projModalClose.addEventListener('click', closeProjectModal);
if (projModalBackdrop) projModalBackdrop.addEventListener('click', closeProjectModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProjectModal();
});

// ============================================================
// Contact form -> mailto redirect
// ============================================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('cfEmail').value.trim();
    const message = document.getElementById('cfMessage').value.trim();

    const subject = encodeURIComponent('Contact from portfolio');
    const body = encodeURIComponent(`From: ${email}\n\n${message}`);

    window.location.href = `mailto:sangamgowda64@gmail.com?subject=${subject}&body=${body}`;
  });
}