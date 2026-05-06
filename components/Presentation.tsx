"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { slides as defaultSlides } from "@/lib/slides";
import type { SlideDef } from "@/lib/types";
import { SlideChrome } from "./SlideChrome";
import { SlideControls } from "./SlideControls";
import { useKeyboardNav } from "@/hooks/useKeyboardNav";
import { useFullscreen } from "@/hooks/useFullscreen";

/**
 * Top-level presentation runtime.
 *
 * - Tracks the current slide index
 * - Handles keyboard navigation (←/→, R, F)
 * - Handles fullscreen toggling on the deck container
 * - Syncs the current slide to the URL hash (refresh keeps your spot)
 * - Each slide is its own <section> sized to the viewport (h-dvh / w-dvw).
 *   No wrapper, no transform scaling - pure responsive layout.
 *
 * The `slides` prop is optional - defaults to the registry exported
 * from `lib/slides.ts`.
 */
export function Presentation({
  slides = defaultSlides,
}: { slides?: SlideDef[] } = {}) {
  const total = slides.length;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { toggle: toggleFullscreen } = useFullscreen(containerRef);

  // Read initial slide from URL hash (e.g. #5)
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const n = parseInt(hash, 10);
    if (!Number.isNaN(n) && n >= 1 && n <= total) setIndex(n - 1);
  }, [total]);

  // Sync URL hash when the current slide changes
  useEffect(() => {
    const next = `#${index + 1}`;
    if (window.location.hash !== next) {
      window.history.replaceState(null, "", next);
    }
  }, [index]);

  const goTo = useCallback(
    (next: number) => {
      setIndex((cur) => {
        const clamped = Math.max(0, Math.min(total - 1, next));
        if (clamped === cur) return cur;
        setDirection(clamped > cur ? "forward" : "back");
        return clamped;
      });
    },
    [total],
  );

  const onNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const onPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const onReset = useCallback(() => {
    setDirection("back");
    setIndex(0);
  }, []);
  const onFirst = useCallback(() => goTo(0), [goTo]);
  const onLast = useCallback(() => goTo(total - 1), [goTo, total]);

  useKeyboardNav({
    onNext,
    onPrev,
    onReset,
    onToggleFullscreen: toggleFullscreen,
    onFirst,
    onLast,
  });

  const slide = slides[index];
  // Substitute {n}/{total} tokens in chrome strings
  const meta = useMemo(() => {
    const sub = (s: string) =>
      s
        .replaceAll("{n}", String(index + 1).padStart(2, "0"))
        .replaceAll("{total}", String(total).padStart(2, "0"));
    return {
      eyebrow: sub(slide.meta.eyebrow),
      topRight: sub(slide.meta.topRight),
      footerLeft: sub(slide.meta.footerLeft),
      footerRight: sub(slide.meta.footerRight),
    };
  }, [slide, index, total]);

  // Auto-hide controls after 3s of no mouse movement.
  // Also hide immediately whenever the slide changes (animation in progress).
  const [controlsVisible, setControlsVisible] = useState(true);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    const show = () => {
      setControlsVisible(true);
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => setControlsVisible(false), 2000);
    };
    show();
    window.addEventListener("mousemove", show, { passive: true });
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("mousemove", show);
    };
  }, []);

  // Hide controls instantly when navigating between slides.
  useEffect(() => {
    setControlsVisible(false);
  }, [index]);

  const Body = slide.Component;
  const animClass =
    direction === "forward" ? "slide-enter-forward" : "slide-enter-back";

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* The slide is its own <section> sized to 100dvh / 100dvw.
          We re-key on slide id so the enter animation replays. */}
      <div key={slide.id} className={animClass}>
        <SlideChrome
          eyebrow={meta.eyebrow}
          topRight={meta.topRight}
          footerLeft={meta.footerLeft}
          footerRight={meta.footerRight}
          bare={slide.bareChrome}
        >
          <Body />
        </SlideChrome>
      </div>

      <SlideControls
        index={index}
        total={total}
        onPrev={onPrev}
        onNext={onNext}
        onReset={onReset}
        visible={controlsVisible}
      />
    </div>
  );
}
