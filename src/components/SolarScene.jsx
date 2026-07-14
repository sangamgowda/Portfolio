import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const SYSTEMS = [
  {
    id: 'twin',
    label: 'Digital Twin',
    color: 'var(--cyan)',
    blurb: "Live 2D mirror of the plant — panels, inverter, battery and grid nodes for at-a-glance health."
  },
  {
    id: 'forecast',
    label: 'Forecasting',
    color: '#5BC8FF',
    blurb: 'Time-series models project power output and trading price so yield & risk outlooks surface early.'
  },
  {
    id: 'siya',
    label: 'SIYA · LLM',
    color: 'var(--amber)',
    blurb: 'End-to-end assistant: ingests telemetry, reasons over it, and returns yield, storage & maintenance actions.'
  },
  {
    id: 'storage',
    label: 'Battery + Inverter',
    color: '#B98CFF',
    blurb: 'Inverter conditions DC→AC; the battery bank charges / discharges to balance load and arbitrage on price.'
  },
  {
    id: 'grid',
    label: 'Grid Management',
    color: '#4ADE80',
    blurb: 'Live node health — under-performing or faulting panels are flagged red for corrective maintenance.'
  },
  {
    id: 'maintenance',
    label: 'Maintenance',
    color: '#38BDF8',
    blurb: 'Autonomous cleaning & inspection sweeps soiling off panels and verifies yield recovery.'
  }
];

const ROWS = 5;
const COLS = 5;
const DAMAGED = new Set([6, 13, 19]);
const CANVAS_W = 800;
const CANVAS_H = 560;

function buildPath(yFn) {
  let d = '';
  for (let x = 0; x <= 600; x += 15) {
    const t = (x % 300) / 300;
    const y = yFn(t);
    d += `${x === 0 ? 'M' : 'L'}${x},${y.toFixed(1)} `;
  }
  return d.trim();
}

const POWER_PATH = buildPath((t) => 104 - Math.sin(t * Math.PI * 2) * 24 - 14 * Math.sin(t * Math.PI * 6));
const PRICE_PATH = buildPath((t) => 52 + Math.sin(t * Math.PI * 2 + 1) * 28 + 10 * Math.sin(t * Math.PI * 9));

export default function SolarScene({ project }) {
  const sceneRef = useRef(null);
  const wrapRef = useRef(null);
  const [active, setActive] = useState(null);
  const [scale, setScale] = useState(1);

  // scale the fixed-size canvas to fit the modal width so nothing is clipped
  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setScale(Math.min(1, el.clientWidth / CANVAS_W));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const show = (...ids) => active === null || ids.includes(active);
  const activeSys = SYSTEMS.find((s) => s.id === active);

  const select = (id) => setActive(active === id ? null : id);

  return (
    <div className="solar-scene" ref={sceneRef}>
      <div className="solar-hint">Explore the project — click each component to see how Urja Setu works</div>

      <div className="solar-inner">
      <div className="solar-canvas-wrap" ref={wrapRef} style={{ height: CANVAS_H * scale }}>
        <div
          className="solar-canvas"
          style={{ transform: `scale(${scale})` }}
        >
          {/* site background */}
          <div className="site-ground"></div>

          {/* connector lines */}
          <svg className="connectors" viewBox="0 0 800 560" preserveAspectRatio="none">
            <path d="M384 240 L510 165" />
            <path d="M510 165 L690 149" />
            <path d="M204 390 C 300 430, 360 395, 430 365" />
          </svg>

          {/* sun (decorative) */}
          <div className="comp comp-sun" style={{ left: 'auto', right: '22px', top: '16px' }}>
            <svg viewBox="0 0 64 64" className="ico ico-sun">
              <g className="sun-rays">
                {Array.from({ length: 12 }).map((_, i) => (
                  <line key={i} x1="32" y1="6" x2="32" y2="14" transform={`rotate(${i * 30} 32 32)`} />
                ))}
              </g>
              <circle cx="32" cy="32" r="14" className="sun-core" />
            </svg>
          </div>

          {/* solar field */}
          <div
            className={`comp comp-field ${show('twin', 'forecast', 'grid', 'maintenance') ? '' : 'dim'} ${active === 'twin' ? 'active' : ''} ${active === 'maintenance' ? 'cleaning' : ''}`}
            style={{ left: '24px', top: '90px', width: '360px', height: '300px' }}
            onClick={() => select('twin')}
            onMouseEnter={() => setActive('twin')}
            onMouseLeave={() => setActive(null)}
          >
            <div className="field-panels">
              {Array.from({ length: ROWS }).map((_, r) => (
                <div className="frow" key={r}>
                  {Array.from({ length: COLS }).map((_, c) => {
                    const idx = r * COLS + c;
                    const damaged = active === 'grid' && DAMAGED.has(idx);
                    return <div className={`spanel ${damaged ? 'damaged' : ''}`} key={c}></div>;
                  })}
                </div>
              ))}
              <div className="cleaner"></div>
            </div>
            <span className="comp-label">Solar Field</span>
          </div>

          {/* power house: inverter + battery */}
          <div
            className={`comp comp-house ${show('twin', 'storage') ? '' : 'dim'} ${active === 'storage' ? 'active' : ''}`}
            style={{ left: '430px', top: '90px', width: '160px', height: '150px' }}
            onClick={() => select('storage')}
            onMouseEnter={() => setActive('storage')}
            onMouseLeave={() => setActive(null)}
          >
            <span className="comp-label">Inverter + Battery</span>
            <div className="house-row">
              <svg viewBox="0 0 48 48" className="ico">
                <rect x="9" y="10" width="30" height="28" rx="3" className="ico-fill" />
                <line x1="15" y1="17" x2="33" y2="17" className="ico-line" />
                <line x1="15" y1="23" x2="33" y2="23" className="ico-line" />
                <line x1="15" y1="29" x2="27" y2="29" className="ico-line" />
                <text x="24" y="44" className="ico-txt">INV</text>
              </svg>
              <svg viewBox="0 0 48 48" className="ico">
                <rect x="11" y="14" width="24" height="22" rx="3" className="ico-fill" />
                <rect x="35" y="20" width="4" height="10" rx="1" className="ico-fill" />
                <rect x="15" y="19" width="4" height="12" rx="1" className="ico-batt" />
                <rect x="21" y="19" width="4" height="12" rx="1" className="ico-batt" />
                <rect x="27" y="19" width="4" height="12" rx="1" className="ico-batt" />
                <text x="24" y="44" className="ico-txt">BAT</text>
              </svg>
            </div>
          </div>

          {/* grid */}
          <div
            className={`comp comp-grid ${show('twin', 'grid') ? '' : 'dim'} ${active === 'grid' ? 'active' : ''}`}
            style={{ left: '620px', top: '84px', width: '140px', height: '130px' }}
            onClick={() => select('grid')}
            onMouseEnter={() => setActive('grid')}
            onMouseLeave={() => setActive(null)}
          >
            <span className="comp-label">Grid</span>
            <svg viewBox="0 0 64 64" className="ico ico-grid">
              <path d="M22 54 L32 12 L42 54" className="ico-stroke" />
              <path d="M26 38 L38 38 M28 30 L36 30 M30 22 L34 22" className="ico-stroke" />
              <path d="M32 12 L24 20 M32 12 L40 20" className="ico-stroke" />
            </svg>
          </div>

          {/* SIYA */}
          <div
            className={`comp comp-siya ${show('twin', 'siya') ? '' : 'dim'} ${active === 'siya' ? 'active' : ''}`}
            style={{ left: '430px', top: '300px', width: '190px', height: '130px' }}
            onClick={() => select('siya')}
            onMouseEnter={() => setActive('siya')}
            onMouseLeave={() => setActive(null)}
          >
            <span className="comp-label">SIYA</span>
            <svg viewBox="0 0 64 48" className="ico ico-siya">
              <rect x="6" y="8" width="52" height="32" rx="8" className="ico-fill" />
              <path d="M16 24 l5 -6 l4 8 l5 -10 l4 8" className="ico-stroke" transform="translate(0 0)" />
              <circle cx="32" cy="24" r="3" className="ico-dot" />
              <path d="M22 44 L20 40 M42 44 L44 40" className="ico-stroke" />
            </svg>
          </div>

          {/* forecast */}
          <div
            className={`comp comp-forecast ${show('twin', 'forecast') ? '' : 'dim'} ${active === 'forecast' ? 'active' : ''}`}
            style={{ left: '24px', top: '430px', width: '280px', height: '110px' }}
            onClick={() => select('forecast')}
            onMouseEnter={() => setActive('forecast')}
            onMouseLeave={() => setActive(null)}
          >
            <span className="comp-label">Forecasting</span>
            <svg viewBox="0 0 200 50" className="ico ico-chart" preserveAspectRatio="none">
              <polyline points="0,34 30,28 60,32 90,18 120,24 150,12 180,20 200,16" className="chart-power" />
              <polyline points="0,20 30,26 60,16 90,28 120,18 150,30 180,22 200,26" className="chart-price" />
            </svg>
          </div>

          {/* maintenance */}
          <div
            className={`comp comp-maint ${show('twin', 'maintenance') ? '' : 'dim'} ${active === 'maintenance' ? 'active' : ''}`}
            style={{ left: '330px', top: '432px', width: '150px', height: '106px' }}
            onClick={() => select('maintenance')}
            onMouseEnter={() => setActive('maintenance')}
            onMouseLeave={() => setActive(null)}
          >
            <span className="comp-label">Maintenance</span>
            <svg viewBox="0 0 48 48" className="ico ico-maint">
              <path d="M30 12 a10 10 0 1 0 8 16 l6 6 -4 4 -6 -6 a10 10 0 0 1 -14 -14 l8 8 4 -4 z" className="ico-fill" />
              <path d="M14 34 l-6 10 10 -6" className="ico-stroke" />
            </svg>
          </div>

          {/* energy flow — rides the field → inverter/battery → grid line */}
          <div className="flow">
            {Array.from({ length: 4 }).map((_, i) => (
              <span className="flow-dot" key={i} style={{ animationDelay: `${i * 1.1}s` }}></span>
            ))}
          </div>

          {/* floating info card — appears on hover/select for every component */}
          {active && activeSys && (
            <div className="info-pop" key={active}>
              <div className="info-pop-head" style={{ color: activeSys.color }}>
                <span className="info-pop-dot" style={{ background: activeSys.color }}></span>
                {activeSys.label}
              </div>
              <p className="info-pop-blurb">{activeSys.blurb}</p>

              {active === 'forecast' && (
                <>
                  <div className="fc-head">
                    <span className="fc-legend">
                      <span className="fc-key power">Power (MW)</span>
                      <span className="fc-key price">Price (₹/unit)</span>
                    </span>
                  </div>
                  <svg className="fc-chart" viewBox="0 0 300 150" preserveAspectRatio="none">
                    <line className="fc-axis" x1="0" y1="6" x2="0" y2="150" />
                    <line className="fc-axis" x1="0" y1="150" x2="300" y2="150" />
                    {[30, 60, 90, 120].map((y) => (
                      <line key={y} x1="0" y1={y} x2="300" y2={y} className="fc-grid" />
                    ))}
                    <g className="fc-scroll">
                      <path className="fc-line power" d={POWER_PATH} />
                      <path className="fc-line price" d={PRICE_PATH} />
                    </g>
                    <text className="fc-axis-label" x="248" y="146">Time →</text>
                    <text className="fc-axis-label" x="6" y="14">↕</text>
                  </svg>
                </>
              )}

              {active === 'siya' && (
                <>
                  <ol className="siya-steps">
                    <li style={{ '--i': 0 }}><b>Ingest</b> live telemetry &amp; forecasts</li>
                    <li style={{ '--i': 1 }}><b>Reason</b> over plant state with LLM</li>
                    <li style={{ '--i': 2 }}><b>Advise</b> yield, storage &amp; risk</li>
                    <li style={{ '--i': 3 }}><b>Act</b> operator confirms the action</li>
                  </ol>
                  <div className="siya-chat">
                    <div className="bubble q">Charge or discharge the battery now?</div>
                    <div className="bubble a">Discharge — price peaks in ~40 min. Capture arbitrage, then recharge overnight.</div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* live readout */}
      <div className="solar-readout">
        {activeSys ? (
          <>
            <span className="k" style={{ color: activeSys.color }}>{activeSys.label}</span>
            <span className="v">{activeSys.blurb}</span>
          </>
        ) : (
          <>
            <span className="k">Digital Twin — Live</span>
            <span className="v">Every component above is part of the live plant model. Tap one to explore what it does.</span>
          </>
        )}
      </div>
      </div>
    </div>
  );
}
