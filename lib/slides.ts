import type { SlideDef } from "./types";
import Slide01Title from "@/components/slides/Slide01Title";
import Slide02Patient from "@/components/slides/Slide02Patient";
import Slide03Before from "@/components/slides/Slide03Before";
import Slide04CodeBehind from "@/components/slides/Slide04CodeBehind";
import Slide05Pipelines from "@/components/slides/Slide05Pipelines";
import Slide06Controller from "@/components/slides/Slide06Controller";
import Slide07ViewModel from "@/components/slides/Slide07ViewModel";
import Slide08Resources from "@/components/slides/Slide08Resources";
import Slide09Razor from "@/components/slides/Slide09Razor";
import Slide10ApiFlow from "@/components/slides/Slide10ApiFlow";
import Slide11Demo from "@/components/slides/Slide11Demo";
import Slide12Lessons from "@/components/slides/Slide12Lessons";
import Slide13Code from "@/components/slides/Slide13Code";

/**
 * The single source of truth for the deck.
 *
 *  HOW TO ADD A SLIDE
 *  ------------------
 *  1. Create a new component under `components/slides/` (any layout you want).
 *  2. Import it here.
 *  3. Push a new entry into the array below. The slide number is its
 *     position in this list (1-indexed) - `{n}` and `{total}` in
 *     chrome strings are auto-substituted.
 *
 *  HOW TO REORDER
 *  --------------
 *  Just move the entries. Page numbers + URL hashes update automatically.
 *
 *  HOW TO REMOVE
 *  -------------
 *  Delete the entry (and optionally its file).
 */
export const slides: SlideDef[] = [
  {
    id: "cover",
    bareChrome: true, // cover slide paints its own header/footer
    Component: Slide01Title,
    meta: {
      eyebrow: "DNN Connect 2026",
      topRight: "Session · Case Study",
      footerLeft: "Presented by Bond for Web Solutions",
      footerRight: "5 min · Case Study",
    },
  },
  {
    id: "the-module",
    Component: Slide02Patient,
    meta: {
      eyebrow: "MVC Pipeline · Newsletter",
      topRight: "{n} / The Module",
      footerLeft: "• Case Study",
      footerRight: "Bond for Web Solutions",
    },
  },
  {
    id: "before",
    Component: Slide03Before,
    meta: {
      eyebrow: "MVC Pipeline · Newsletter",
      topRight: "{n} / Before",
      footerLeft: "• WebForms",
      footerRight: "{n} / {total}",
    },
  },
  {
    id: "code-behind",
    Component: Slide04CodeBehind,
    meta: {
      eyebrow: "MVC Pipeline · Newsletter",
      topRight: "{n} / Before",
      footerLeft: "• WebForms",
      footerRight: "{n} / {total}",
    },
  },
  {
    id: "pipelines",
    Component: Slide05Pipelines,
    meta: {
      eyebrow: "MVC Pipeline · Newsletter",
      topRight: "{n} / The Pipeline",
      footerLeft: "• Architecture",
      footerRight: "{n} / {total}",
    },
  },
  {
    id: "controller",
    Component: Slide06Controller,
    meta: {
      eyebrow: "MVC Pipeline · Newsletter",
      topRight: "{n} / Controller",
      footerLeft: "• C# · NewsletterController.cs",
      footerRight: "{n} / {total}",
    },
  },
  {
    id: "view-model",
    Component: Slide07ViewModel,
    meta: {
      eyebrow: "MVC Pipeline · Newsletter",
      topRight: "{n} / View Model",
      footerLeft: "• CreateModel()",
      footerRight: "{n} / {total}",
    },
  },
  {
    id: "resources",
    Component: Slide08Resources,
    meta: {
      eyebrow: "MVC Pipeline · Newsletter",
      topRight: "{n} / Resources",
      footerLeft: "• C# · ConfigurePage()",
      footerRight: "{n} / {total}",
    },
  },
  {
    id: "razor-view",
    Component: Slide09Razor,
    meta: {
      eyebrow: "MVC Pipeline · Newsletter",
      topRight: "{n} / Razor View",
      footerLeft: "• Razor+",
      footerRight: "{n} / {total}",
    },
  },
  {
    id: "api-flow",
    Component: Slide10ApiFlow,
    meta: {
      eyebrow: "MVC Pipeline · Newsletter",
      topRight: "{n} / API & Flow",
      footerLeft: "• The Biggest Change",
      footerRight: "{n} / {total}",
    },
  },
  {
    id: "demo",
    Component: Slide11Demo,
    meta: {
      eyebrow: "MVC Pipeline · Newsletter",
      topRight: "{n} / The New UI",
      footerLeft: "• Demo",
      footerRight: "{n} / {total}",
    },
  },
  {
    id: "lessons",
    Component: Slide12Lessons,
    meta: {
      eyebrow: "MVC Pipeline · Newsletter",
      topRight: "{n} / Lessons",
      footerLeft: "• Takeaways",
      footerRight: "{n} / {total}",
    },
  },
  {
    id: "code-open",
    Component: Slide13Code,
    meta: {
      eyebrow: "MVC Pipeline · Newsletter",
      topRight: "{n} / Code · Q&A",
      footerLeft: "• Thank You · Bond for Web Solutions",
      footerRight: "Questions?",
    },
  },
];
