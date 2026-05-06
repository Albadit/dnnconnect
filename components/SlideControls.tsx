"use client";

/**
 * Floating bottom-center controls: prev/next arrows, page counter,
 * and a Reset button. Mirrors the screenshots' control pill.
 */
export function SlideControls({
  index,
  total,
  onPrev,
  onNext,
  onReset,
  visible = true,
}: {
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onReset: () => void;
  visible?: boolean;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 bottom-4 z-30 flex justify-center transition-opacity duration-500 sm:bottom-6 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="pointer-events-auto flex items-center gap-1 rounded-full bg-black/70 px-2 py-1.5 text-[11px] font-medium text-white/80 shadow-lg backdrop-blur-md ring-1 ring-white/10">
        <button
          aria-label="Previous slide"
          onClick={onPrev}
          className="grid h-7 w-7 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          <Chevron dir="left" />
        </button>
        <span className="px-2 tabular-nums">
          <span className="text-white">{index + 1}</span>
          <span className="text-white/40"> / {total}</span>
        </span>
        <button
          aria-label="Next slide"
          onClick={onNext}
          className="grid h-7 w-7 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          <Chevron dir="right" />
        </button>
        <span className="mx-1 h-4 w-px bg-white/15" />
        <button
          onClick={onReset}
          className="flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] uppercase tracking-wider text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          Reset
          <kbd className="rounded bg-white/10 px-1 py-0.5 text-[10px] font-mono text-white/80">
            R
          </kbd>
        </button>
      </div>
    </div>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {dir === "left" ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 18 15 12 9 6" />
      )}
    </svg>
  );
}
