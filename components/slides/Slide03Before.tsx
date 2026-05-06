/**
 * Slide 3 — "WebForms. ViewState. Postbacks."
 * Big screenshot mock of the legacy form with a navy callout overlay
 * sitting bottom-left.
 */
export default function Slide03Before() {
  return (
    <div className="relative grid h-full place-items-center">
      {/* Mock screenshot of the legacy form */}
      <div className="absolute inset-0 m-auto flex max-h-[78%] max-w-[78%] items-center justify-center fade-up">
        <div className="w-full overflow-hidden rounded-lg bg-white text-slate-700 shadow-2xl ring-1 ring-black/10">
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-3">
            <div className="flex items-center gap-2 text-lg font-semibold text-slate-700">
              <span className="grid h-5 w-5 place-items-center rounded-sm bg-red-500 text-[10px] text-white">
                ★
              </span>
              DotNetNuke
            </div>
            <span className="text-lg text-slate-500">Home</span>
          </div>
          <div className="bg-slate-50 px-6 py-2 text-lg text-slate-500">
            Home
          </div>
          <div className="px-6 py-4">
            <div className="mb-3 text-lg font-semibold">Newsletters</div>
            <div className="mb-3 flex gap-1 border-b border-slate-200 text-lg">
              <span className="rounded-t bg-white border border-b-0 border-slate-200 px-3 py-1.5 text-slate-700">
                Message
              </span>
              <span className="px-3 py-1.5 text-slate-500">
                Advanced Settings
              </span>
            </div>
            <FormRow label="User Role(s)">
              <RoleTable />
            </FormRow>
            <FormRow label="Additional Emails">
              <div className="h-14 w-72 rounded border border-slate-300 bg-white" />
            </FormRow>
            <FormRow label="From">
              <input
                readOnly
                value="host@change.me"
                className="w-72 rounded border border-slate-300 bg-white px-2 py-1 text-lg"
              />
            </FormRow>
            <FormRow label="Reply To">
              <div className="h-7 w-72 rounded border border-slate-300 bg-white" />
            </FormRow>
            <div className="mt-3 h-32 rounded border border-slate-300 bg-slate-50" />
            <div className="mt-3 flex gap-2">
              <button className="rounded bg-blue-600 px-3 py-1 text-lg text-white">
                Send Email
              </button>
              <button className="rounded bg-slate-200 px-3 py-1 text-lg text-slate-700">
                Preview Email
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navy callout overlay (bottom-left) — pushed further down. */}
      <div
        className="absolute bottom-[8%] left-[2%] z-10 max-w-md border-l-2 border-accent bg-bg/95 p-7 shadow-2xl backdrop-blur fade-up"
        style={{ ["--i" as string]: 2 }}
      >
        <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-accent">
          Before · DNN 7
        </div>
        <h3 className="mb-3 text-2xl font-bold leading-tight">
          WebForms. ViewState. Postbacks.
        </h3>
        <p className="text-lg leading-6 text-ink-muted">
          The view we shipped for a decade. ASP.NET user controls, server-side
          validators, page lifecycle. It worked - but it locked us out of MVC,
          DI, and a future on .NET Core.
        </p>
      </div>
    </div>
  );
}

function FormRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-2 grid grid-cols-[8rem_1fr] items-center gap-3">
      <div className="text-right text-lg text-slate-600">{label}</div>
      <div>{children}</div>
    </div>
  );
}

function RoleTable() {
  const roles = [
    "Administrators",
    "Registered Users",
    "Subscribers",
    "Unverified Users",
  ];
  return (
    <table className="border border-slate-200 text-lg">
      <thead>
        <tr className="bg-slate-100 text-slate-600">
          <th className="w-40 border border-slate-200 px-2 py-1 text-left font-normal" />
          <th className="w-24 border border-slate-200 px-2 py-1 font-normal">
            Selected Role
          </th>
        </tr>
      </thead>
      <tbody>
        {roles.map((r) => (
          <tr key={r}>
            <td className="border border-slate-200 px-2 py-1">{r}</td>
            <td className="border border-slate-200 px-2 py-1 text-center">
              <span className="inline-block h-3 w-3 border border-slate-400" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
