/**
 * Cover slide: large title + subtitle + presenter line.
 * Uses bare chrome (no header/footer) so we control the whole canvas.
 */
export default function Slide01Title() {
  return (
    <div className="relative grid h-full w-full grid-rows-[auto_1fr_auto] gap-8 px-2 sm:px-6">
      {/* Top bar (repaints chrome since this slide is bare) */}
      <div className="flex items-start justify-between text-[11px] font-medium uppercase tracking-[0.18em] text-ink-dim">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="inline-block h-2.5 w-2.5 rotate-45 bg-accent"
          />
          <span className="text-ink">DNN Connect 2026</span>
        </div>
        <div>Session · Case Study</div>
      </div>

      {/* Hero — block centered on the screen, but text inside stays left-aligned.
          A decorative SVG sits to the right at large breakpoints. */}
      <div className="flex flex-col items-center justify-center fade-up">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          <div className="flex flex-col gap-4 text-left">
            <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-accent">
              <span className="inline-block h-px w-8 bg-accent" />
              MVC Pipeline · Module Migration
            </div>
            <h1 className="font-sans text-[clamp(2.5rem,7vw,6.5rem)] font-bold leading-[1.02] tracking-tight">
              <span className="block text-ink">MVC Pipeline</span>
              <span className="block text-accent">Newsletter</span>
            </h1>
            <p className="max-w-2xl text-lg text-ink-muted">
              Porting a 15-year-old DNN admin module to Razor.
            </p>
          </div>
          <PipelineArt />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-end justify-between text-[11px] font-medium uppercase tracking-[0.18em] text-ink-dim">
        <div>
          Presented by <span className="text-ink">Bond for Web Solutions</span>
        </div>
        <div>5 min · Case Study</div>
      </div>
    </div>
  );
}

/**
 * Decorative pipeline illustration — a stylised request flowing
 * through a rotated tile (the Razor module) into a Razor view, in
 * the deck's accent palette. Pure SVG, no external assets.
 */
function PipelineArt() {
  return (
    <svg
      aria-hidden
      viewBox="-40 0 440 360"
      className="hidden h-[clamp(220px,28vw,360px)] w-[clamp(260px,32vw,420px)] lg:block"
    >
      <defs>
        <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2ea9ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2ea9ff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="tile" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2ea9ff" />
          <stop offset="100%" stopColor="#0a4a8a" />
        </linearGradient>
      </defs>

      {/* Outer rotating ring */}
      <circle
        cx="180"
        cy="180"
        r="150"
        fill="none"
        stroke="url(#ring)"
        strokeWidth="1.5"
        strokeDasharray="4 8"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 180 180"
          to="360 180 180"
          dur="40s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Inner ring */}
      <circle
        cx="180"
        cy="180"
        r="110"
        fill="none"
        stroke="#2ea9ff"
        strokeOpacity="0.25"
        strokeWidth="1"
      />

      {/* Center tile (Razor module) */}
      <g transform="rotate(45 180 180)">
        <rect
          x="135"
          y="135"
          width="90"
          height="90"
          rx="6"
          fill="url(#tile)"
        />
        <rect
          x="135"
          y="135"
          width="90"
          height="90"
          rx="6"
          fill="none"
          stroke="#7fc8ff"
          strokeOpacity="0.6"
          strokeWidth="1"
        />
      </g>

      {/* Code lines on tile */}
      <g
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.7"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <line x1="155" y1="170" x2="205" y2="170" />
        <line x1="155" y1="182" x2="195" y2="182" />
        <line x1="155" y1="194" x2="210" y2="194" />
      </g>

      {/* Orbit nodes */}
      <g fill="#2ea9ff">
        <circle cx="180" cy="30" r="6" />
        <circle cx="330" cy="180" r="6" />
        <circle cx="180" cy="330" r="6" />
        <circle cx="30" cy="180" r="6" />
      </g>
      <g
        fontFamily="ui-monospace, monospace"
        fontSize="11"
        fill="#9bd0ff"
        textAnchor="middle"
      >
        <text x="180" y="18">request</text>
        <text x="332" y="208">view</text>
        <text x="180" y="352">model</text>
        <text x="28" y="208">controller</text>
      </g>
    </svg>
  );
}
