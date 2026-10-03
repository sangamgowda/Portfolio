import '../evops.css';
import useMatchMedia from '../hooks/useMatchMedia.js';

const LOOP_SECONDS = 12;

const STEPS = [
  { id: 'ask', n: '1', title: 'Ask', sub: 'Ops engineer asks a question', tone: 'cyan' },
  { id: 'plan', n: '2', title: 'Route & Plan', sub: 'Picks domain, drafts the query', tone: 'cyan' },
  { id: 'exec', n: '3', title: 'Execute', sub: 'Guarded SQL · hybrid RAG', tone: 'amber' },
  { id: 'reflect', n: '4', title: 'Observe & Reflect', sub: 'Enough evidence? Max 3 laps', tone: 'cyan' },
  { id: 'synth', n: '5', title: 'Synthesize', sub: 'Every claim cites evidence', tone: 'cyan' },
  { id: 'verify', n: '6', title: 'Groundedness Check', sub: 'Claims checked against sources', tone: 'amber' }
];

const FOOTER_TEXT = [
  'SQL validated before every run',
  'Read-only Postgres · pgvector',
  'Citations on every claim'
];

/* Wide layout (tablet / desktop): a two-row loop. */
const WIDE = {
  key: 'wide',
  viewBox: '0 0 820 460',
  w: 210,
  h: 80,
  pos: [[120, 90], [410, 90], [700, 90], [700, 290], [410, 290], [120, 290]],
  at: [0, 0.1859, 0.3718, 0.5, 0.6859, 0.8718],
  links: ['M225,90 L305,90', 'M515,90 L595,90', 'M700,130 L700,250', 'M595,290 L515,290', 'M305,290 L225,290', 'M120,250 L120,130'],
  labels: [
    { x: 265, y: 80, t: 'domain', a: 'middle' },
    { x: 555, y: 80, t: 'tool call', a: 'middle' },
    { x: 714, y: 196, t: 'results' },
    { x: 555, y: 280, t: 'enough', a: 'middle' },
    { x: 265, y: 280, t: 'draft', a: 'middle' },
    { x: 134, y: 196, t: 'streamed answer' }
  ],
  loop: { d: 'M650,250 C650,185 500,200 480,132', lx: 575, ly: 232, la: 'middle', t: 'need more' },
  track: 'M120,90 L410,90 L700,90 L700,290 L410,290 L120,290 Z',
  footer: [[15, 392], [285, 392], [555, 392]],
  pillW: 250
};

/* Narrow layout (phones): a single column, loop-back arc on the right. */
const TALL = {
  key: 'tall',
  viewBox: '0 0 360 890',
  w: 270,
  h: 80,
  pos: [[145, 50], [145, 170], [145, 290], [145, 410], [145, 530], [145, 650]],
  at: [0, 0.2, 0.4, 0.6, 0.8, 0.97],
  links: [
    'M145,90 L145,130', 'M145,210 L145,250', 'M145,330 L145,370',
    'M145,450 L145,490', 'M145,570 L145,610'
  ],
  labels: [
    { x: 157, y: 115, t: 'domain' },
    { x: 157, y: 235, t: 'tool call' },
    { x: 157, y: 355, t: 'results' },
    { x: 157, y: 475, t: 'enough' },
    { x: 157, y: 595, t: 'draft' }
  ],
  loop: { d: 'M280,410 C345,410 345,170 282,170', lx: 336, ly: 292, la: 'middle', rotate: true, t: 'need more · max 3 laps' },
  track: 'M145,50 L145,650',
  footer: [[20, 734], [20, 780], [20, 826]],
  pillW: 320,
  endNote: { x: 145, y: 718, t: '↓ answer streams back to the ops engineer' }
};

export default function EvOpsScene() {
  const narrow = useMatchMedia('(max-width: 640px)');
  const L = narrow ? TALL : WIDE;
  const { w, h } = L;

  return (
    <div className="evops-scene">
      <div className="evops-hint">One agent · plan → execute → reflect · answers you can trace</div>
      <div className="evops-scroll">
        <svg
          key={L.key}
          className={`evops-svg ${narrow ? 'tall' : ''}`}
          viewBox={L.viewBox}
          role="img"
          aria-label="EV Ops Copilot flow: ask, route and plan, execute with guarded SQL or RAG, observe and reflect with up to three laps, synthesize with citations, then a groundedness check before the answer streams back."
          style={{ '--loop': `${LOOP_SECONDS}s` }}
        >
          <defs>
            <marker id="evArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" className="ev-arrow-head" />
            </marker>
            <marker id="evArrowLoop" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" className="ev-arrow-head loop" />
            </marker>
          </defs>

          <g className="ev-links">
            {L.links.map((d) => (
              <path key={d} d={d} markerEnd="url(#evArrow)" />
            ))}
          </g>

          <path className="ev-loopback" d={L.loop.d} markerEnd="url(#evArrowLoop)" />
          <text
            className="ev-label loop"
            x={L.loop.lx}
            y={L.loop.ly}
            textAnchor={L.loop.la}
            transform={L.loop.rotate ? `rotate(90 ${L.loop.lx} ${L.loop.ly})` : undefined}
          >
            {L.loop.t}
          </text>

          {L.labels.map((lb) => (
            <text key={lb.t} className="ev-label" x={lb.x} y={lb.y} textAnchor={lb.a}>{lb.t}</text>
          ))}

          {STEPS.map((nd, i) => (
            <g
              key={nd.id}
              className={`ev-node ${nd.tone}`}
              style={{ animationDelay: `${(L.at[i] * LOOP_SECONDS).toFixed(2)}s` }}
              transform={`translate(${L.pos[i][0] - w / 2},${L.pos[i][1] - h / 2})`}
            >
              <rect width={w} height={h} rx="14" />
              <circle className="ev-badge" cx="22" cy="24" r="11" />
              <text className="ev-badge-n" x="22" y="28.5" textAnchor="middle">{nd.n}</text>
              <text className="ev-title" x="42" y="29">{nd.title}</text>
              <text className="ev-sub" x="16" y="55">{nd.sub}</text>
            </g>
          ))}

          {L.endNote && (
            <text className="ev-label" x={L.endNote.x} y={L.endNote.y} textAnchor="middle">{L.endNote.t}</text>
          )}

          <path id="evLoopPath" className="ev-track" d={L.track} />
          <circle className="ev-packet-glow" r="11">
            <animateMotion dur={`${LOOP_SECONDS}s`} repeatCount="indefinite" rotate="auto">
              <mpath href="#evLoopPath" />
            </animateMotion>
          </circle>
          <circle className="ev-packet" r="5">
            <animateMotion dur={`${LOOP_SECONDS}s`} repeatCount="indefinite" rotate="auto">
              <mpath href="#evLoopPath" />
            </animateMotion>
          </circle>

          {L.footer.map(([x, y], i) => (
            <g key={FOOTER_TEXT[i]} className="ev-pill" transform={`translate(${x},${y})`}>
              <rect width={L.pillW} height="38" rx="19" />
              <circle cx="22" cy="19" r="4" />
              <text x="36" y="23.5">{FOOTER_TEXT[i]}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
