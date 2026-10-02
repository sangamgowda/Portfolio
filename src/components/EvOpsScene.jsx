import '../evops.css';

const LOOP_SECONDS = 12;

// Nodes sit on a closed loop: Ask → Plan → Execute → Reflect → Synthesize → Verify → back to the user.
// `at` is the fraction of the loop at which the travelling packet reaches the node.
// Loop length: 290+290+200+290+290+200 = 1560 → fractions below.
const NODES = [
  { id: 'ask', x: 120, y: 90, n: '1', title: 'Ask', sub: 'Ops engineer asks a question', at: 0, tone: 'cyan' },
  { id: 'plan', x: 410, y: 90, n: '2', title: 'Route & Plan', sub: 'Picks domain, drafts the query', at: 0.1859, tone: 'cyan' },
  { id: 'exec', x: 700, y: 90, n: '3', title: 'Execute', sub: 'Guarded SQL · hybrid RAG', at: 0.3718, tone: 'amber' },
  { id: 'reflect', x: 700, y: 290, n: '4', title: 'Observe & Reflect', sub: 'Enough evidence? Max 3 laps', at: 0.5, tone: 'cyan' },
  { id: 'synth', x: 410, y: 290, n: '5', title: 'Synthesize', sub: 'Every claim cites evidence', at: 0.6859, tone: 'cyan' },
  { id: 'verify', x: 120, y: 290, n: '6', title: 'Groundedness Check', sub: 'Unsupported claims caught', at: 0.8718, tone: 'amber' }
];

const W = 210;
const H = 80;

const FOOTER = [
  { x: 15, label: 'SQL checked by code, not a model' },
  { x: 285, label: 'Read-only Postgres · pgvector' },
  { x: 555, label: 'Gaps are named, not guessed' }
];

export default function EvOpsScene() {
  return (
    <div className="evops-scene">
      <div className="evops-hint">One agent · plan → execute → reflect · answers you can trace</div>
      <div className="evops-scroll">
        <svg
          className="evops-svg"
          viewBox="0 0 820 460"
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

          {/* main flow */}
          <g className="ev-links">
            <path d="M225,90 L305,90" markerEnd="url(#evArrow)" />
            <path d="M515,90 L595,90" markerEnd="url(#evArrow)" />
            <path d="M700,130 L700,250" markerEnd="url(#evArrow)" />
            <path d="M595,290 L515,290" markerEnd="url(#evArrow)" />
            <path d="M305,290 L225,290" markerEnd="url(#evArrow)" />
            <path d="M120,250 L120,130" markerEnd="url(#evArrow)" />
          </g>

          {/* reflect → plan loop-back */}
          <path className="ev-loopback" d="M650,250 C650,185 500,200 480,132" markerEnd="url(#evArrowLoop)" />
          <text className="ev-label loop" x="575" y="232" textAnchor="middle">need more</text>

          <text className="ev-label" x="265" y="80" textAnchor="middle">domain</text>
          <text className="ev-label" x="555" y="80" textAnchor="middle">tool call</text>
          <text className="ev-label" x="714" y="196">results</text>
          <text className="ev-label" x="555" y="280" textAnchor="middle">enough</text>
          <text className="ev-label" x="265" y="280" textAnchor="middle">draft</text>
          <text className="ev-label" x="134" y="196">streamed answer</text>

          {/* nodes */}
          {NODES.map((nd) => (
            <g
              key={nd.id}
              className={`ev-node ${nd.tone}`}
              style={{ animationDelay: `${(nd.at * LOOP_SECONDS).toFixed(2)}s` }}
              transform={`translate(${nd.x - W / 2},${nd.y - H / 2})`}
            >
              <rect width={W} height={H} rx="14" />
              <circle className="ev-badge" cx="22" cy="24" r="11" />
              <text className="ev-badge-n" x="22" y="28.5" textAnchor="middle">{nd.n}</text>
              <text className="ev-title" x="42" y="29">{nd.title}</text>
              <text className="ev-sub" x="16" y="55">{nd.sub}</text>
            </g>
          ))}

          {/* travelling packet */}
          <path
            id="evLoopPath"
            className="ev-track"
            d="M120,90 L410,90 L700,90 L700,290 L410,290 L120,290 Z"
          />
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

          {/* safety footer */}
          {FOOTER.map((f) => (
            <g key={f.label} className="ev-pill" transform={`translate(${f.x},392)`}>
              <rect width="250" height="38" rx="19" />
              <circle cx="22" cy="19" r="4" />
              <text x="36" y="23.5">{f.label}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
