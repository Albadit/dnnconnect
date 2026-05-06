/**
 * Slide 10 - "Postbacks out. JSON in."
 * Heading row, then a 2-column grid:
 * Left: ordered runtime path with code-style chips
 * Right: WAS / NOW comparison stack
 */
export default function Slide10ApiFlow() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-8">
      <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-[1fr_1fr] fade-up">
        <h2 className="text-[clamp(1.875rem,4.25vw,3.25rem)] font-bold leading-[1.05]">
          Postbacks out.
          <br />
          JSON in.
        </h2>
        <p className="max-w-md text-lg leading-6 text-ink-muted ">
          The bigger shift isn&apos;t Razor. It&apos;s that Preview, Send and
          Upload no longer ride the page lifecycle. They are Web API endpoints.
          The browser drives the workflow.
        </p>
      </div>

      <div
        className="grid grid-cols-1 gap-5 lg:grid-cols-[1.2fr_1fr] fade-up"
        style={{ ["--i" as string]: 1 }}
      >
        {/* Runtime path */}
        <div className="rounded-md bg-bg-soft/80 p-7 ring-1 ring-white/5">
          <div className="mb-5 text-[11px] uppercase tracking-[0.22em] text-accent">
            Runtime Path
          </div>
          <ol className="flex flex-col gap-3 text-lg">
            <Step n={1}>
              <Chip>manifest.dnn</Chip>{" "}
              <span className="text-ink-muted">declares the MVC control</span>
            </Step>
            <Step n={2}>
              <Chip>NewsletterViewControl</Chip>{" "}
              <span className="text-ink-muted">builds the model</span>
            </Step>
            <Step n={3}>
              <Chip>View.cshtml</Chip>{" "}
              <span className="text-ink-muted">renders the form</span>
            </Step>
            <Step n={4}>
              <Chip>newsletter.js</Chip>{" "}
              <span className="text-ink-muted">handles user actions</span>
            </Step>
            <Step n={5}>
              <Chip>NewsletterApiController</Chip>{" "}
              <span className="text-ink-muted">returns JSON</span>
            </Step>
            <Step n={6}>
              <span className="text-ink-muted">
                Toast surfaces status. No reload.
              </span>
            </Step>
          </ol>
        </div>

        {/* Was / Now */}
        <div className="grid grid-rows-2 gap-5">
          <div className="rounded-md bg-bg-soft/80 p-6 ring-1 ring-white/5">
            <div className="mb-2 text-[11px] uppercase tracking-[0.22em] text-ink-dim">
              Was
            </div>
            <div className="mb-3 text-xl font-bold">Server postback</div>
            <ul className="flex flex-col gap-1.5 text-lg text-ink-muted">
              <li>– Page lifecycle drives every action</li>
              <li>– Validators + ViewState round-trip</li>
              <li>
                – Logic in <Chip mute>.ascx.cs</Chip> code-behind
              </li>
            </ul>
          </div>
          <div className="rounded-md bg-bg-soft/80 p-6 ring-1 ring-white/5">
            <div className="mb-2 text-[11px] uppercase tracking-[0.22em] text-accent">
              Now
            </div>
            <div className="mb-3 text-xl font-bold">AJAX + Web API</div>
            <ul className="flex flex-col gap-1.5 text-lg text-ink-muted">
              <li>
                – <Chip>fetch()</Chip> from <Chip>newsletter.js</Chip>
              </li>
              <li>– JSON response, toast notification</li>
              <li>
                – POST handlers in <Chip>NewsletterApiController</Chip>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="grid grid-cols-[2.5rem_1fr] items-center gap-4">
      <span className="font-mono text-ink-dim">
        {String(n).padStart(2, "0")}
      </span>
      <span className="flex flex-wrap items-center gap-2">{children}</span>
    </li>
  );
}

function Chip({
  children,
  mute = false,
}: {
  children: React.ReactNode;
  mute?: boolean;
}) {
  return (
    <span
      className={`rounded border border-white/10 px-1.5 py-0.5 font-mono text-[12px] ${
        mute ? "text-ink-muted" : "text-accent-soft"
      }`}
    >
      {children}
    </span>
  );
}
