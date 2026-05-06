import { CodeMd } from "@/components/CodeMd";
import code from "@/content/slides/slide06.md";

/**
 * Slide 6 - "Controller."
 * Code is sourced from `content/slides/slide06.md`.
 */
export default function Slide06Controller() {
  return (
    <div className="grid h-full grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
      <div className="flex flex-col gap-5 fade-up">
        <span className="text-[12px] uppercase tracking-[0.22em] text-accent">
          Entry Point
        </span>
        <h2 className="text-[clamp(2.25rem,5.5vw,4.5rem)] font-bold leading-[1.05]">
          Controller.
        </h2>
        <p className="max-w-md text-lg leading-7 text-ink-muted">
          Inherit{" "}
          <span className="font-mono text-accent-soft">RazorModuleControl</span>
          , override{" "}
          <span className="font-mono text-accent-soft">Invoke()</span>. Build
          the model, return the view. Errors logged, friendly fallback. Eight
          lines you can hold in your head.
        </p>
      </div>

      <div className="fade-up" style={{ ["--i" as string]: 1 }}>
        <CodeMd source={code} filename="NewsletterController.cs" />
      </div>
    </div>
  );
}
