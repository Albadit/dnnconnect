import { CodeMd } from "@/components/CodeMd";
import code from "@/content/slides/slide07.md";

/**
 * Slide 7 - "View model."
 * Code is sourced from `content/slides/slide07.md`.
 */
export default function Slide07ViewModel() {
  return (
    <div className="grid h-full grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
      <div className="fade-up">
        <CodeMd source={code} filename="CreateModel()" />
      </div>

      <div
        className="flex flex-col gap-5 fade-up"
        style={{ ["--i" as string]: 1 }}
      >
        <span className="text-[12px] uppercase tracking-[0.22em] text-accent">
          Strongly Typed
        </span>
        <h2 className="text-[clamp(2.25rem,5.5vw,4.5rem)] font-bold leading-[1.05]">
          View model.
        </h2>
        <p className="max-w-md text-lg leading-7 text-ink-muted">
          Pull portal locales, the current user, the root folder. Compose a
          typed{" "}
          <span className="font-mono text-accent-soft">
            NewsletterViewModel
          </span>{" "}
          with everything the Razor view needs. No{" "}
          <span className="font-mono text-accent-soft">FindControl</span>. No
          ViewState round-trips. Just data.
        </p>
      </div>
    </div>
  );
}
