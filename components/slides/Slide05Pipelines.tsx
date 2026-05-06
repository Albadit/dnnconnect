/**
 * Slide 5 - "Two pipelines. One module."
 * Header text + two-column comparison cards (WebForms vs Razor+).
 */
export default function Slide05Pipelines() {
  return (
    <div className="flex h-full flex-col justify-center gap-10">
      <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-[1fr_1fr] fade-up">
        <h2 className="text-[clamp(1.875rem,4.5vw,3.5rem)] font-bold leading-[1.05]">
          Two pipelines.
          <br />
          One module.
        </h2>
        <p className="max-w-md text-lg leading-6 text-ink-muted ">
          The DNN MVC Pipeline runs alongside WebForms. Each module declares
          both a WebForms control <em>and</em> an MVC control class. DNN picks
          the right one per request - gradual migration, full backward
          compatibility.
        </p>
      </div>

      <div
        className="grid grid-cols-1 gap-5 lg:grid-cols-2 stagger fade-up"
        style={{ ["--i" as string]: 1 }}
      >
        <PipelineCard
          eyebrow="Legacy · Still Supported"
          title="WebForms"
          steps={[
            "Request",
            "Page lifecycle · ViewState",
            ".ascx UserControl",
            "Render HTML",
          ]}
          footer="Existing modules keep working. No flag day."
          accent="muted"
        />
        <PipelineCard
          eyebrow="New · MVC Pipeline"
          title="Razor+"
          steps={[
            "Request",
            <>
              <span className="font-mono text-accent-soft">
                RazorModuleControl
              </span>{" "}
              · <span className="font-mono text-accent-soft">Invoke()</span>
            </>,
            <>
              <span className="font-mono text-accent-soft">CreateModel()</span>{" "}
              → <span className="font-mono text-accent-soft">ViewModel</span>
            </>,
            <>
              <span className="font-mono text-accent-soft">.cshtml</span> view ·
              HTML helpers
            </>,
          ]}
          footer={
            <>
              Hybrid module - the MVC control runs alongside the WebForms
              page, no flag day required.
            </>
          }
          accent="bright"
        />
      </div>
    </div>
  );
}

function PipelineCard({
  eyebrow,
  title,
  steps,
  footer,
  accent,
}: {
  eyebrow: string;
  title: string;
  steps: React.ReactNode[];
  footer: React.ReactNode;
  accent: "muted" | "bright";
}) {
  return (
    <div className="flex h-full flex-col gap-5 rounded-md bg-bg-soft/80 p-7 ring-1 ring-white/5">
      <div
        className={`text-[11px] uppercase tracking-[0.22em] ${
          accent === "bright" ? "text-accent" : "text-ink-dim"
        }`}
      >
        {eyebrow}
      </div>
      <div className="text-3xl font-bold sm:text-4xl">{title}</div>
      <ol className="flex flex-col gap-3 font-mono text-lg">
        {steps.map((s, i) => (
          <li
            key={i}
            className="grid grid-cols-[2.25rem_1fr] items-baseline gap-3 border-t border-rule pt-3 first:border-0 first:pt-0"
          >
            <span className="text-ink-dim">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className={accent === "bright" ? "text-ink" : "text-ink-muted"}
            >
              {s}
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-auto pt-2 text-lg text-ink-muted ">{footer}</p>
    </div>
  );
}
