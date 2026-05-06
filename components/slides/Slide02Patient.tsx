/**
 * Two-column slide: descriptive text on the left, an illustrative
 * mock screenshot of the legacy DotNetNuke admin grid on the right.
 *
 * The mock is rendered as plain HTML/SVG so it scales perfectly and
 * doesn't depend on bitmap assets.
 */
export default function Slide02Patient() {
  return (
    <div className="grid h-full grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
      <div className="flex flex-col gap-6 fade-up">
        <span className="text-[12px] font-medium uppercase tracking-[0.22em] text-accent">
          The Patient
        </span>
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight">
          The
          <br />
          Newsletters
          <br />
          module.
        </h2>
        <p className="max-w-md text-lg leading-7 text-ink-muted ">
          Ships with every DNN install. Lives in the Admin menu. Sends bulk
          email to roles, subscribers, and additional addresses. Largely
          unchanged since DNN 7.
        </p>
      </div>

      <div
        className="flex flex-col gap-3 fade-up"
        style={{ ["--i" as string]: 1 }}
      >
        <AdminMock />
        <p className="text-[11px] uppercase tracking-[0.2em] text-ink-dim">
          DNN admin · Basic Features → Newsletters
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
 AdminMock: a stylized recreation of the DNN admin tile grid with
 the "Newsletters" tile highlighted in red. Pure CSS - no images.
 ------------------------------------------------------------------ */
function AdminMock() {
  const tiles = [
    "Advanced Configuration\nSettings",
    "Device Preview\nManagement",
    "Event Viewer",
    "Extensions",
    "File Management",
    "Google Analytics",
    "Languages",
    "Lists",
    "Newsletters",
    "Page Management",
    "Recycle Bin",
    "Search Admin",
    "Search Engine Site Map",
    "Security Roles",
    "Site Log",
    "Site Redirection\nManagement",
    "Site Settings",
    "Site Wizard",
    "Skins",
    "Taxonomy",
    "User Accounts",
    "Vendors",
  ];
  return (
    <div className="overflow-hidden rounded-lg bg-white text-slate-700 shadow-2xl ring-1 ring-black/10">
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
        <div className="flex items-center gap-2 text-lg font-semibold text-slate-700">
          <span className="grid h-5 w-5 place-items-center rounded-sm bg-red-500 text-[10px] text-white">
            ★
          </span>
          DotNetNuke
        </div>
        <span className="text-lg text-slate-500">Home</span>
      </div>
      <div className="bg-slate-50 px-5 py-3 text-lg text-slate-500">Admin</div>
      <div className="px-5 py-4">
        <div className="mb-3 text-lg font-semibold text-slate-700">
          Basic Features
        </div>
        <div className="grid grid-cols-7 gap-x-2 gap-y-3">
          {tiles.map((t) => {
            const isHi = t === "Newsletters";
            return (
              <div
                key={t}
                className={`flex flex-col items-center gap-1 rounded p-1 text-center ${
                  isHi ? "ring-2 ring-red-500" : ""
                }`}
              >
                <div className="grid h-7 w-7 place-items-center rounded bg-slate-200 text-[10px] text-slate-500">
                  {t.includes("Newsletter") ? "✉" : "▢"}
                </div>
                <div className="text-[8px] leading-tight text-slate-600 whitespace-pre-line">
                  {t}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
