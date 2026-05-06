"use client";

import { useEffect } from "react";

/**
 * Wires global keyboard shortcuts for the deck.
 *
 * Defaults:
 *   ArrowRight / Space / PageDown -> next
 *   ArrowLeft  / PageUp           -> prev
 *   Home                          -> first
 *   End                           -> last
 *   R                             -> reset (first slide)
 *   F                             -> toggle fullscreen
 *
 * To add a shortcut, extend the switch below.
 */
export function useKeyboardNav(opts: {
  onNext: () => void;
  onPrev: () => void;
  onReset: () => void;
  onToggleFullscreen: () => void;
  onFirst?: () => void;
  onLast?: () => void;
}) {
  const { onNext, onPrev, onReset, onToggleFullscreen, onFirst, onLast } = opts;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Ignore when user is typing in an input / textarea / contenteditable
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
        case " ":
          e.preventDefault();
          onNext();
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          onPrev();
          break;
        case "Home":
          e.preventDefault();
          onFirst?.();
          break;
        case "End":
          e.preventDefault();
          onLast?.();
          break;
        case "r":
        case "R":
          e.preventDefault();
          onReset();
          break;
        case "f":
        case "F":
          e.preventDefault();
          onToggleFullscreen();
          break;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onNext, onPrev, onReset, onToggleFullscreen, onFirst, onLast]);
}
