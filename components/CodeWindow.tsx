import type { CSSProperties, ReactNode } from "react";

/**
 * macOS-style "window" wrapper used for code blocks throughout the
 * deck. Pass code as `children` (already-formatted JSX or strings).
 *
 * Use the `<Tok>` helper components for syntax-style coloring without
 * pulling in a full syntax highlighter.
 */
export function CodeWindow({
  children,
  filename,
  className = "",
}: {
  children: ReactNode;
  filename?: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl bg-code-bg shadow-2xl ring-1 ring-white/5 ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-white/5 bg-black/30 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        {filename && (
          <span className="font-mono text-[11px] text-white/40">
            {filename}
          </span>
        )}
        <span className="w-10" />
      </div>
      <pre
        className="code-scroll overflow-auto px-5 py-4 font-mono text-[12px] leading-[1.7] text-white/85 sm:text-[13px]"
        style={{ tabSize: 4, MozTabSize: 4 } as CSSProperties}
      >
        {children}
      </pre>
    </div>
  );
}

/* Lightweight syntax-color tokens. Keeps code blocks readable without
   adding a heavy highlighter dep. Use inside <CodeWindow>. */
export const Kw = ({ children }: { children: ReactNode }) => (
  <span className="text-[#c792ea]">{children}</span>
);
export const Str = ({ children }: { children: ReactNode }) => (
  <span className="text-[#c3e88d]">{children}</span>
);
export const Cmt = ({ children }: { children: ReactNode }) => (
  <span className="text-white/35 italic">{children}</span>
);
export const Type = ({ children }: { children: ReactNode }) => (
  <span className="text-[#82aaff]">{children}</span>
);
export const Fn = ({ children }: { children: ReactNode }) => (
  <span className="text-[#82aaff]">{children}</span>
);
export const Num = ({ children }: { children: ReactNode }) => (
  <span className="text-[#f78c6c]">{children}</span>
);

/* Indent helper — renders n levels of 4-space indentation that survives
   Prettier reformatting (Prettier won't touch a JSX element). Use as
   `<I />` for one level, `<I n={2} />` for two, etc. */
export const I = ({ n = 1 }: { n?: number }) => (
  <span className="whitespace-pre">{"    ".repeat(n)}</span>
);

/* Numbered code lines: pass an array of JSX nodes (one per line). */
export function CodeLines({ children }: { children: ReactNode[] }) {
  return (
    <div className="grid grid-cols-[2.25rem_1fr] gap-x-4">
      {children.map((line, i) => (
        <div key={i} className="contents">
          <span className="select-none text-right text-white/25">{i + 1}</span>
          <span className="whitespace-pre">{line}</span>
        </div>
      ))}
    </div>
  );
}
