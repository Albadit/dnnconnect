/**
 * Slide 12 - "Three things we wish we knew."
 * Three numbered takeaway columns.
 */
export default function Slide12Lessons() {
  return (
    <div className="flex h-full flex-col justify-center gap-12">
      <h2 className="text-[clamp(1.875rem,4.5vw,3.5rem)] font-bold leading-[1.05] fade-up">
        Three things
        <br />
        we wish we knew.
      </h2>

      <div
        className="grid grid-cols-1 items-start gap-10 md:grid-cols-3 stagger fade-up"
        style={{ ["--i" as string]: 1 }}
      >
        <Lesson n="01" title={<>Migrate the View first.</>}>
          Of the three module controls - View, Edit, Settings - only the View
          has to support both pipelines. Edit can stay WebForms while you learn.
          Settings <em>must</em>: it isn&apos;t supported in MVC yet.
        </Lesson>
        <Lesson
          n="02"
          title={<>Submit without postbacks.</>}
        >
          One codebase, both pipelines. The catch: no{" "}
          <code className="rounded bg-white/5 px-1 py-0.5 font-mono text-[12px]">
            {"<form>"}
          </code>{" "}
          tags, no postbacks - submit via WebAPI or AJAX.
        </Lesson>
        <Lesson
          n="03"
          title={
            <>
              Resources in{" "}
              <span className="font-mono text-accent-soft">ConfigurePage</span>.
            </>
          }
        >
          Never register CSS or JS from inside the Razor view. Views can render
          N times per page; ConfigurePage runs once. This rule will save you a
          week.
        </Lesson>
      </div>
    </div>
  );
}

function Lesson({
  n,
  title,
  children,
}: {
  n: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 border-l border-rule pl-6 first:border-0 first:pl-0 md:border-0 md:pl-0">
      <div className="font-mono text-5xl font-bold text-accent">{n}</div>
      <div className="text-lg font-bold leading-snug">{title}</div>
      <p className="text-lg leading-6 text-ink-muted">{children}</p>
    </div>
  );
}
