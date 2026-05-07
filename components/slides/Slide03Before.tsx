/**
 * Slide 3 — "WebForms. ViewState. Postbacks."
 * Screenshot of the legacy Newsletters form with a navy callout overlay
 * sitting bottom-left.
 */
export default function Slide03Before() {
  return (
    <div className="relative grid h-full place-items-center">
      {/* Screenshot of the legacy form */}
      <div className="absolute inset-0 m-auto flex max-h-[88%] max-w-[78%] items-center justify-center fade-up">
        <div className="overflow-hidden rounded-lg bg-white shadow-2xl ring-1 ring-black/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/DNN7_Newsletter_2.png"
            alt="Legacy DNN Newsletters WebForms screen"
            className="block max-h-[82vh] w-auto"
          />
        </div>
      </div>

      {/* Navy callout overlay (bottom-left) — pushed further down. */}
      <div
        className="absolute bottom-[8%] left-[2%] z-10 max-w-md border-l-2 border-accent bg-bg/95 p-7 shadow-2xl backdrop-blur fade-up"
        style={{ ["--i" as string]: 2 }}
      >
        <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-accent">
          Before · DNN 7
        </div>
        <h3 className="mb-3 text-2xl font-bold leading-tight">
          WebForms. ViewState. Postbacks.
        </h3>
        <p className="text-lg leading-6 text-ink-muted">
          The ASP.NET user controls, server-side
          validators, page lifecycle. It worked - but it locked us out of MVC,
          DI, and a future on .NET Core.
        </p>
      </div>
    </div>
  );
}
