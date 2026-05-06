"use client";

import hljs from "highlight.js/lib/core";
import csharp from "highlight.js/lib/languages/csharp";
import xml from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/atom-one-dark.css";

import { CodeWindow } from "@/components/CodeWindow";

// Register only the languages we use to keep the bundle small.
hljs.registerLanguage("csharp", csharp);
hljs.registerLanguage("cs", csharp);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("razor", xml);
hljs.registerLanguage("cshtml", xml);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("js", javascript);

/**
 * Extract the first fenced code block (```lang ... ```) from a markdown
 * string. Returns the language and the inner code body.
 */
function extractFence(md: string): { lang: string; code: string } {
  const m = md.match(/```([a-zA-Z0-9+#-]*)\s*\r?\n([\s\S]*?)```/);
  if (!m) return { lang: "plaintext", code: md };
  return { lang: m[1] || "plaintext", code: m[2].replace(/\s+$/, "") };
}

/**
 * `<CodeMd>` reads a raw markdown string (typically loaded with
 * `import code from "./slide.md?raw"`), highlights the first code
 * fence with highlight.js, and renders it inside a `<CodeWindow>`
 * with line numbers.
 */
export function CodeMd({
  source,
  filename,
  className = "",
}: {
  source: string;
  filename?: string;
  className?: string;
}) {
  const { lang, code } = extractFence(source);
  const highlighted = hljs.getLanguage(lang)
    ? hljs.highlight(code, { language: lang, ignoreIllegals: true }).value
    : hljs.highlightAuto(code).value;

  const lines = highlighted.split("\n");

  return (
    <CodeWindow filename={filename} className={className}>
      <div className="grid grid-cols-[2.25rem_1fr] gap-x-4">
        {lines.map((line, i) => (
          <div key={i} className="contents">
            <span className="select-none text-right text-white/25">
              {i + 1}
            </span>
            <span
              className="whitespace-pre"
              // highlight.js output is trusted (built from a static .md file).
              dangerouslySetInnerHTML={{ __html: line || " " }}
            />
          </div>
        ))}
      </div>
    </CodeWindow>
  );
}
