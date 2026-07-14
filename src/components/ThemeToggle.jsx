export default function ThemeToggle({ onToggle }) {
  return (
    <button
      className="theme-toggle"
      aria-label="Toggle light / dark theme"
      title="Toggle theme"
      onClick={onToggle}
    >
      <span className="toggle-track">
        <span className="toggle-thumb">
          <svg className="icon-sun" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
            <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <line x1="12" y1="1.6" x2="12" y2="4" />
              <line x1="12" y1="20" x2="12" y2="22.4" />
              <line x1="1.6" y1="12" x2="4" y2="12" />
              <line x1="20" y1="12" x2="22.4" y2="12" />
              <line x1="4.5" y1="4.5" x2="6.2" y2="6.2" />
              <line x1="17.8" y1="17.8" x2="19.5" y2="19.5" />
              <line x1="4.5" y1="19.5" x2="6.2" y2="17.8" />
              <line x1="17.8" y1="6.2" x2="19.5" y2="4.5" />
            </g>
          </svg>
          <svg className="icon-moon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
        </span>
      </span>
    </button>
  );
}
