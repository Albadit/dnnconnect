"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Tiny wrapper around the Fullscreen API. Returns the current
 * fullscreen state and a stable `toggle` callback.
 */
export function useFullscreen(targetRef?: React.RefObject<HTMLElement | null>) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const onChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const toggle = useCallback(() => {
    const el = targetRef?.current ?? document.documentElement;
    if (!document.fullscreenElement) {
      el.requestFullscreen?.().catch(() => {
        /* swallow: some browsers block without a user gesture */
      });
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }, [targetRef]);

  return { isFullscreen, toggle };
}
