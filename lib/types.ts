/**
 * Shared types for the slide system.
 *
 * A slide is configured in `lib/slides.ts` and rendered inside a
 * `<SlideChrome>` (header + footer). Each slide's body is its own
 * React component under `components/slides/`.
 */
import type { ComponentType } from "react";

export interface SlideMeta {
  /** Top-left eyebrow (e.g. "MVC PIPELINE · NEWSLETTER") */
  eyebrow: string;
  /** Top-right tag (e.g. "02 / THE MODULE") */
  topRight: string;
  /** Bottom-left tag (e.g. "• CASE STUDY") */
  footerLeft: string;
  /** Bottom-right tag (e.g. "5 MIN · CASE STUDY" or "02 / 13") */
  footerRight: string;
}

export interface SlideDef {
  /** Stable id used in the URL hash + React key */
  id: string;
  /** Optional: hide chrome on this slide (e.g. cover slide) */
  bareChrome?: boolean;
  /** Header / footer copy. `pageNumber` placeholder is auto-substituted. */
  meta: SlideMeta;
  /** The slide body component */
  Component: ComponentType;
}
