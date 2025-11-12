import { c as createComponent, a as createAstro, m as maybeRenderHead, s as spreadAttributes, g as renderSlot, r as renderTemplate } from './astro/server_DFE9ECo4.mjs';

const $$Astro = createAstro();
const $$LinkButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LinkButton;
  return renderTemplate`${maybeRenderHead()}<a${spreadAttributes(Astro2.props)} target="_blank" rel="noopener noreferrer" class="text-md group inline-flex max-w-fit cursor-pointer items-center justify-center gap-2 space-x-2 rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 px-4 py-2.5 text-base font-semibold text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-300 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 active:scale-95 active:border-accent/40 active:bg-gradient-to-br active:from-accent/20 active:via-primary/20 active:to-accent/20 active:text-accent active:shadow-md active:shadow-accent/20 sm:hover:scale-105 sm:hover:border-accent/40 sm:hover:bg-gradient-to-br sm:hover:from-accent/20 sm:hover:via-primary/20 sm:hover:to-accent/20 sm:hover:text-accent sm:hover:shadow-lg sm:hover:shadow-accent/20 dark:border-slate-800/50 dark:bg-gradient-to-br dark:from-primary/10 dark:via-accent/10 dark:to-primary/5 dark:text-primary dark:active:border-accent/50 dark:active:text-accent dark:sm:hover:border-accent/50 dark:sm:hover:text-accent"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Dev/Astro/capelix-dev/src/components/LinkButton.astro", void 0);

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="group/badge mt-1 flex flex-row items-center justify-center rounded-xl border border-accent/20 bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10 px-3 py-1.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:shadow-md hover:shadow-accent/10"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Dev/Astro/capelix-dev/src/components/Badge.astro", void 0);

export { $$Badge as $, $$LinkButton as a };
