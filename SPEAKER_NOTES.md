# Speaker Notes — MVC Pipeline · Newsletter

**Total: 9 slides · ~5 minutes · Bond for Web Solutions · DNN Connect 2026**

Pacing target: ~30s per content slide, leaving ~60s for the live demo.

---

## Slide 1 — Cover: "MVC Pipeline · Newsletter"

> *Setup the room. Smile. Click in.*

"Good [morning/afternoon]. I'm [name] from Bond for Web Solutions. In the next five minutes I want to walk you through what happens when you take a fifteen-year-old DotNetNuke admin module and port it onto the new MVC Pipeline — Razor+. One module, two pipelines, no flag day."

**Beat:** "This is a case study, not a framework tour. Real code, real before/after."

---

## Slide 2 — The Patient: "The Newsletters module."

"Meet the patient. The Newsletters module. It ships with every DNN install up to version 7. It lives under the Admin menu. Its job is simple — bulk email to roles, subscribers, and a list of additional addresses."

"It hasn't really been touched since DNN 7. Which means everything you're about to see is honest, period-accurate WebForms."

---

## Slide 3 — Before: "WebForms. ViewState. Postbacks."

"Here's what users saw. ASP.NET user controls. Server-side validators. The page lifecycle running the show. ViewState round-tripping on every postback."

"It worked. It still works. But it locked us out of MVC, dependency injection, and any future on .NET Core. So this is what we needed to leave behind — without breaking the installs that depend on it."

---

## Slide 4 — Code-behind: "50 lines of code-behind."

"And this is what was hiding behind that screen. One method — `SendMailAsynchronously`. SMTP wiring. Localization lookups. Thread spawning. Message-type plumbing. All bolted directly to the page lifecycle."

"It's untestable. It's untyped. And honestly — it's un-fun. This is the cost of staying on WebForms."

---

## Slide 5 — Two pipelines, one module

"Now the headline. The DNN MVC Pipeline doesn't replace WebForms — it runs *alongside* it. Each module declares both a WebForms control **and** an MVC control class. DNN picks the right one per request."

"On the left: the legacy path. Page lifecycle, ViewState, .ascx, render. Still supported. Still works."

"On the right: the new path. Request hits a `RazorModuleControl`, `Invoke()` builds a strongly-typed `ViewModel`, a `.cshtml` view renders it. Same module, two pipelines, gradual migration. **No flag day.** That's the whole point."

---

## Slide 6 — View Model: `CreateModel()`

"This is where the new pipeline earns its keep. `CreateModel` pulls the portal locales, the current user, the root folder — composes a typed `NewsletterViewModel` with everything the Razor view needs."

"No `FindControl`. No ViewState round-trips. No reaching into the page tree to grab a textbox value. Just data — typed, testable, and obvious."

---

## Slide 7 — Resources: "CSS · JS · AJAX."

"One detail that bites people: where do you register your scripts and styles? Not in the view."

"Resources register in `ConfigurePage`. The reason: a view can render multiple times per page — caching, multiple module instances on the same tab. `ConfigurePage` runs once. So you get no duplicate `<script>` tags, no surprises, and your AJAX endpoints are wired up exactly once."

---

## Slide 8 — Live Demo

> *Switch to the recording / live module. Stay on it ~60 seconds.*

"Here's the same module, same admin entry point — re-rendered through the MVC pipeline."

**Talking points while it plays:**
- "Strongly-typed model on the wire."
- "Razor view doing its own rendering — no postback, no full-page reload."
- "Resources registered once, AJAX call here goes to a clean endpoint."
- "And the UI we are not embarrassed by anymore."

> *If demo fails: "The recording is in the repo — link's on the next slide."*

---

## Slide 9 — The code is open

"Two repos to take with you."

"**Left QR — DNN.Platform, the `mvc-pipeline` branch.** That's the pipeline itself: `RazorModuleControl`, sample modules, the user guide, the Razor+ docs."

"**Right QR — `Dnn.Modules.Newsletters`.** The migrated module you just saw. Razor+ pattern, hybrid manifest, full source. Issues and PRs welcome."

"Thank you. Happy to take questions — and happy to open the code if anyone wants to see something specific."

---

## Quick recovery lines

- **Forgot your place:** "The point I want to land is — *one module, two pipelines, no flag day.*"
- **Demo broken:** "Repo's on the last slide; the README has a recording."
- **Time short:** Skip slide 7 (Resources) — it's the most expendable.
- **Time long:** Linger on slide 5 (the pipelines diagram) — it's the conceptual anchor.

## Q&A pre-empts

- *"How do you handle DI?"* → Constructor injection on the controller; DNN's container resolves it before `Invoke()`.
- *"Does this work on .NET Core?"* → The pipeline is the path there. Hybrid today, Core-ready tomorrow.
- *"What about existing modules?"* → They keep running on the WebForms path. You migrate when you're ready, module by module.
- *"Why not full ASP.NET MVC?"* → DNN owns the request; the pipeline gives you MVC ergonomics inside DNN's module model without forking the platform.
