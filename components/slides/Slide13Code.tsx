/**
 * Slide 13 - "The code is open."
 * Two repo cards with real QR codes generated from each repo URL.
 */
"use client";

import { QRCodeSVG } from "qrcode.react";

export default function Slide13Code() {
  return (
    <div className="flex h-full flex-col justify-center gap-10">
      <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-[1fr_1fr] fade-up">
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05]">
          The code is open.
        </h2>
        <p className="max-w-md text-lg leading-6 text-ink-muted ">
          Both the platform branch with the new pipeline and our Newsletters
          fork are on GitHub. Issues and PRs welcome.
        </p>
      </div>

      <div
        className="grid grid-cols-1 gap-5 lg:grid-cols-2 stagger fade-up"
        style={{ ["--i" as string]: 1 }}
      >
        <RepoCard
          eyebrow="Platform · Feature Branch"
          title={
            <>
              DNN.Platform
              <br />
              <span className="text-accent">mvc-pipeline</span>
            </>
          }
          desc="The pipeline itself: RazorModuleControl, sample modules, the user guide and Razor+ docs."
          url="https://github.com/dnnsoftware/Dnn.Platform/tree/feature/mvc-pipeline-old"
          tone="bright"
        />
        <RepoCard
          eyebrow="Module · Case Study"
          title={
            <>
              Dnn.Modules
              <br />
              .Newsletters
            </>
          }
          desc="The migrated module shown in this talk - Razor+ pattern, hybrid manifest, full source."
          url="https://github.com/Bond-for-web-solutions/Dnn.Modules.Newsletters"
          tone="dark"
        />
      </div>
    </div>
  );
}

function RepoCard({
  eyebrow,
  title,
  desc,
  url,
  tone,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc: string;
  url: string;
  tone: "bright" | "dark";
}) {
  return (
    <div
      className={`grid grid-cols-[1fr_auto] items-start gap-6 rounded-md p-7 ring-1 ring-white/5 ${
        tone === "bright" ? "bg-bg-soft" : "bg-[#0a1828]"
      }`}
    >
      <div className="flex h-full flex-col gap-3">
        <div className="text-[11px] uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </div>
        <div className="text-2xl font-bold leading-tight">{title}</div>
        <p className="text-lg leading-6 text-ink-muted">{desc}</p>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="mt-auto break-all pt-2 text-[11px] text-ink-dim hover:text-accent"
        >
          {url.replace(/^https?:\/\//, "")}
        </a>
      </div>
      <RepoQr url={url} />
    </div>
  );
}

/* Real QR code generated from the URL using qrcode.react. */
function RepoQr({ url }: { url: string }) {
  return (
    <div className="rounded-sm bg-white p-2">
      <QRCodeSVG
        value={url}
        size={112}
        level="M"
        bgColor="#ffffff"
        fgColor="#000000"
      />
    </div>
  );
}
