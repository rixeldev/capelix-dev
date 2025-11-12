/* empty css                                 */
import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DFE9ECo4.mjs';
import { g as getActiveLocale, a as getI18N, r as resolveLocalizedPath, $ as $$Layout, b as $$SectionContainer } from '../chunks/Layout_BwanNcMO.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const locale = getActiveLocale(Astro2);
  const i18n = getI18N({ currentLocale: locale });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": i18n.ERROR_404_TITLE, "description": i18n.ERROR_404_DESCRIPTION, "canonical": new URL(resolveLocalizedPath("/404/"), "https://capelix.dev").toString() }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="my-24 flex w-full max-w-4xl flex-col items-center justify-center text-slate-600 sm:w-11/12 md:w-8/12"> <svg class="h-24 w-24" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 1.999l.041 .002l.208 .003a8 8 0 0 1 7.747 7.747l.003 .248l.177 .006a3 3 0 0 1 2.819 2.819l.005 .176a3 3 0 0 1 -3 3l-.001 1.696l1.833 2.75a1 1 0 0 1 -.72 1.548l-.112 .006h-10c-3.445 .002 -6.327 -2.49 -6.901 -5.824l-.028 -.178l-.071 .001a3 3 0 0 1 -2.995 -2.824l-.005 -.175a3 3 0 0 1 3 -3l.004 -.25a8 8 0 0 1 7.996 -7.75zm0 10.001a2 2 0 0 0 -2 2a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1a2 2 0 0 0 -2 -2zm-1.99 -4l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993zm4 0l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z"></path> </svg> <p class="flex flex-col items-center text-center text-3xl font-bold italic"> <span class="text-6xl">404</span> <span>${i18n.ERROR_404}</span> </p> </div> ` })} ` })}`;
}, "C:/Dev/Astro/capelix-dev/src/pages/404.astro", void 0);

const $$file = "C:/Dev/Astro/capelix-dev/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
