/**
 * Slide 11 - "Live demo."
 * Big placeholder canvas where you can later embed a screen
 * recording, iframe, or annotated screenshots.
 */
export default function Slide11Demo() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-8">
      <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-[1fr_1fr] fade-up">
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05]">
          Live demo.
        </h2>
        <p className="max-w-md text-lg leading-6 text-ink-muted ">
          Same module. Same admin entry point. Re-rendered through the MVC
          pipeline - strongly-typed model, Razor view, registered resources, and
          a UI we are not embarrassed by.
        </p>
      </div>

      <div
        className="relative overflow-hidden rounded-md ring-1 ring-white/5 fade-up"
        style={{
          ["--i" as string]: 1,
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.025) 0 8px, transparent 8px 18px)",
          backgroundColor: "var(--bg-soft)",
        }}
      >
        <div className="absolute inset-0 grid place-items-center">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="text-[12px] uppercase tracking-[0.22em] text-accent">
              ▸ Live Demo
            </div>
            <div className="text-2xl font-bold text-accent">
              New Newsletters UI
            </div>
            <div className="text-lg text-ink-dim">
              Drop screen recording / annotated screenshots here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
