import { CodeMd } from "@/components/CodeMd";
import code from "@/content/slides/slide09.md";

/**
 * Slide 9 - "Razor takes over."
 * Code is sourced from `content/slides/slide09.md`.
 */
export default function Slide09Razor() {
  return (
    <div className="grid h-full grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
      <div className="fade-up">
        <CodeMd source={code} filename="NewsletterController.cs" />
      </div>

      <div
        className="flex flex-col gap-5 fade-up"
        style={{ ["--i" as string]: 1 }}
      >
        <span className="text-[12px] uppercase tracking-[0.22em] text-accent">
          return View(model)
        </span>
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05]">
          Razor takes
          <br />
          over.
        </h2>
        <p className="max-w-md text-lg leading-7 text-ink-muted">
          A strongly-typed{" "}
          <span className="font-mono text-accent-soft">.cshtml</span> binds the
          model. HTML helpers replace server controls. Partials for the
          attachment picker and language selector. Same module, modern stack.
        </p>
      </div>
    </div>
  );
}
