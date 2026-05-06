import { CodeMd } from "@/components/CodeMd";
import code from "@/content/slides/slide08.md";

/**
 * Slide 8 - "CSS · JS · AJAX."
 * Code is sourced from `content/slides/slide08.md`.
 */
export default function Slide08Resources() {
  return (
    <div className="grid h-full grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
      <div className="flex flex-col gap-5 fade-up">
        <span className="text-[12px] uppercase tracking-[0.22em] text-accent">
          Register Once
        </span>
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05]">
          CSS · JS · AJAX.
        </h2>
        <p className="max-w-md text-lg leading-7 text-ink-muted">
          Resources register in{" "}
          <span className="font-mono text-accent-soft">ConfigurePage</span> -
          not in the view. Why: a view can render multiple times per page
          (caching, multiple instances).{" "}
          <span className="font-mono text-accent-soft">ConfigurePage</span> runs
          once.
        </p>
        <p className="text-lg text-ink-dim">
          No duplicate{" "}
          <code className="rounded bg-white/5 px-1 py-0.5 font-mono text-[11px]">
            {"<script>"}
          </code>{" "}
          tags. No surprises.
        </p>
      </div>

      <div className="fade-up" style={{ ["--i" as string]: 1 }}>
        <CodeMd source={code} filename="ConfigurePage()" />
      </div>
    </div>
  );
}
