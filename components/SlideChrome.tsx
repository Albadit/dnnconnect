import type { ReactNode } from "react";

/**
 * Each slide is rendered as a full-viewport <section>.
 *
 * Layout: header row (eyebrow + page tag), main body (centred),
 * footer row (left/right tags). Sized to 100dvh / 100dvw so the
 * deck always fills the screen - no wrapper, no transform scaling.
 *
 * Pass `bare` to skip rendering the header/footer (used for the
 * cover slide which paints its own).
 */
export function SlideChrome({
  eyebrow,
  topRight,
  footerLeft,
  footerRight,
  bare = false,
  children,
}: {
  eyebrow: string;
  topRight: string;
  footerLeft: string;
  footerRight: string;
  bare?: boolean;
  children: ReactNode;
}) {
  return (
    <section className="relative flex h-dvh w-dvw flex-col overflow-hidden bg-bg text-ink">
      {/* Subtle vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(46,169,255,0.06), transparent 60%)",
        }}
      />

      {bare ? (
        // Bare mode: child paints its own header/footer/layout.
        <div className="relative z-10 flex flex-1 flex-col px-8 py-6 sm:px-12 sm:py-8 lg:px-16 lg:py-10">
          {children}
        </div>
      ) : (
        <>
          <header className="relative z-10 flex shrink-0 items-center justify-between px-8 py-6 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-dim sm:px-12 sm:py-8 sm:text-[13px] lg:px-16 lg:py-10 lg:text-[14px]">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="inline-block h-2.5 w-2.5 rotate-45 bg-accent sm:h-3 sm:w-3"
              />
              <span className="text-ink">{eyebrow}</span>
            </div>
            <div>{topRight}</div>
          </header>

          <div className="relative z-10 flex flex-1 items-center px-8 py-6 sm:px-12 lg:px-16">
            <div className="mx-auto h-full w-full max-w-[1300px]">{children}</div>
          </div>

          <footer className="relative z-10 flex shrink-0 items-end justify-between px-8 py-6 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-dim sm:px-12 sm:py-8 sm:text-[13px] lg:px-16 lg:py-10 lg:text-[14px]">
            <div>{footerLeft}</div>
            <div>{footerRight}</div>
          </footer>
        </>
      )}
    </section>
  );
}
