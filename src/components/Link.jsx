import { useEffect, useRef, useState } from 'react';
import './Link.css';

const BOT_TOKEN = import.meta.env.VITE_YOUR_BOT_TOKEN_HERE;
const CHAT_ID = import.meta.env.VITE_YOUR_CHAT_ID_HERE;
const MANUAL_EMAIL = 'sangamgowda64@gmail.com';

export default function Link() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [toast, setToast] = useState(null);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const notify = (type, msg) => {
    setToast({ type, msg });
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 4200);
  };

  const openMailFallback = (n, em, m) => {
    const subject = encodeURIComponent('Contact from portfolio');
    const body = encodeURIComponent(`Name: ${n}\nEmail: ${em}\n\n${m}`);
    window.location.href = `mailto:${MANUAL_EMAIL}?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const n = name.trim();
    const em = email.trim();
    const m = message.trim();

    if (!n || !em || !m) {
      notify('error', 'Please fill in all the fields before sending.');
      return;
    }

    if (!BOT_TOKEN || !CHAT_ID) {
      notify('error', `Messaging isn't configured — please email me at ${MANUAL_EMAIL}.`);
      openMailFallback(n, em, m);
      return;
    }

    const text = `📩 *New Portfolio Message!*\n\n*${n}* (${em}) sent you a message:\n\n"${m}"`;

    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'Markdown' })
      });

      if (res.ok) {
        notify('success', 'Message sent successfully ✅');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        notify('error', `Couldn't send — please email me manually at ${MANUAL_EMAIL}.`);
        openMailFallback(n, em, m);
      }
    } catch (err) {
      notify('error', `Network error — please email me manually at ${MANUAL_EMAIL}.`);
      openMailFallback(n, em, m);
    }
  };

  return (
    <section className="sec" id="link">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow">05 // Uplink</div>
          <h2>Let's Talk</h2>
        </div>

        <div className="contact-layout reveal">
          <form className="contact-form hud" id="contactForm" onSubmit={onSubmit} noValidate>
            <span className="p-label">Send a Message</span>

            <label className="field">
              <span className="field-label">Your Name</span>
              <input
                type="text"
                id="userName"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label className="field">
              <span className="field-label">Your Email</span>
              <input
                type="email"
                id="userEmail"
                name="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className="field">
              <span className="field-label">Message</span>
              <textarea
                id="userMessage"
                name="message"
                rows="6"
                placeholder="Describe your AI project, open job role, or Collaboration idea..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </label>

            <button type="submit" className="btn primary form-submit">Send Message ↗</button>
            <p className="form-hint">Send straight to Sangam or email sangamgowda64@gmail.com.</p>
          </form>

          <div className="contact-side">
            <a className="btn primary resume-btn" href="/Sangam-Resume.pdf" download>Download Resume ↓</a>

            <div className="side-cards">
              <div className="c-card">
                <div className="k">Email</div>
                <div className="v">sangamgowda64@gmail.com</div>
              </div>
              <div className="c-card">
                <div className="k">Phone</div>
                <div className="v">+91 90358 36305</div>
              </div>
              <div className="c-card">
                <div className="k">Location</div>
                <div className="v">Bengaluru, Karnataka</div>
              </div>
            </div>

            <div className="social-row">
              <a className="social-icon" href="https://linkedin.com/in/sangam-gowda2128" target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.5V23H.24V8.25zM8.02 8.25h4.31v2.01h.06c.6-1.13 2.07-2.32 4.26-2.32 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.62c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V23h-4.5V8.25z" />
                </svg>
              </a>
              <a className="social-icon" href="https://www.instagram.com/sangam_gowda__/" target="_blank" rel="noopener" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
                  <circle cx="12" cy="12" r="4.6" />
                  <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a className="social-icon" href="mailto:sangamgowda64@gmail.com" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="2" y="4.5" width="20" height="15" rx="2.4" />
                  <path d="M2.5 5.5 12 13 21.5 5.5" />
                </svg>
              </a>
              {/* <a className="social-icon" href="https://github.com/sangamgowda" target="_blank" rel="noopener" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.57.1.78-.25.78-.55 0-.27-.01-1.16-.01-2.1-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.2.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
              </a> */}
            </div>
          </div>
        </div>

        <div className="cta-final reveal">
          <p><span className="pulse-dot"></span>SYSTEM STATUS — ONLINE</p>
        </div>
      </div>

      {toast && (
        <div className={`toast ${toast.type}`} role="status" aria-live="polite">
          <span className="toast-dot"></span>
          <span>{toast.msg}</span>
        </div>
      )}
    </section>
  );
}
