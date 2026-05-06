import { CodeMd } from "@/components/CodeMd";
import code from "@/content/slides/slide04.md";

/**
 * Slide 4 - "50 lines of code-behind."
 * Code is sourced from `content/slides/slide04.md` (first fenced block).
 * Highlighted with highlight.js in CodeMd.
 */
export default function Slide04CodeBehind() {
  return (
    <div className="flex h-full items-center">
      <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
      <div className="flex flex-col gap-5 fade-up">
        <span className="text-[12px] uppercase tracking-[0.22em] text-accent">
          Inside the .ascx.cs
        </span>
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05]">
          50 lines
          <br />
          of code-
          <br />
          behind.
        </h2>
        <p className="max-w-md text-lg leading-7 text-ink-muted">
          One method. SMTP wiring, localization lookups, thread spawning,
          message-type plumbing - all bolted to the page lifecycle. Untestable.
          Untyped. Un-fun.
        </p>
        <div className="mt-6 font-mono text-[12px] text-ink-dim">
          Newsletters.ascx.cs · SendMailAsynchronously()
        </div>
      </div>

      <div className="fade-up" style={{ ["--i" as string]: 1 }}>
        <CodeMd source={code} filename="Newsletters.ascx.cs" />
      </div>
      </div>
    </div>
  );
}
