/**
 * Two-column slide: descriptive text on the left, a screenshot of the
 * legacy DotNetNuke admin grid on the right (Newsletters tile highlighted).
 */
export default function Slide02Patient() {
  return (
    <div className="grid h-full grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
      <div className="flex flex-col gap-6 fade-up">
        <span className="text-[12px] font-medium uppercase tracking-[0.22em] text-accent">
          The Patient
        </span>
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight">
          The
          <br />
          Newsletters
          <br />
          module.
        </h2>
        <p className="max-w-md text-lg leading-7 text-ink-muted ">
          Ships with every DNN install till 7. Lives in the Admin menu. Sends bulk
          email to roles, subscribers, and additional addresses. Largely
          unchanged since DNN 7.
        </p>
      </div>

      <div
        className="flex flex-col gap-3 fade-up"
        style={{ ["--i" as string]: 1 }}
      >
        <div className="overflow-hidden rounded-lg bg-white shadow-2xl ring-1 ring-black/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/DNN7_Newsletter.png"
            alt="DNN admin Basic Features grid with Newsletters tile highlighted"
            className="block h-auto w-full"
          />
        </div>
        <p className="text-[11px] uppercase tracking-[0.2em] text-ink-dim">
          DNN admin · Basic Features → Newsletters
        </p>
      </div>
    </div>
  );
}
