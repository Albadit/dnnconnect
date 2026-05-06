import { Presentation } from "@/components/Presentation";

/**
 * Mounts the deck. Each slide renders as its own full-viewport
 * <section>; the page itself is just a thin shell.
 *
 *  - Edit slides in `lib/slides.ts`.
 *  - Restyle in `app/globals.css` (CSS variables at the top).
 *  - Keyboard: ←/→ navigate, Space = next, R = reset, F = fullscreen.
 *  - URL hash mirrors the current slide (e.g. /#5).
 */
export default function Home() {
  return <Presentation />;
}
