/* empty css                                 */
import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DFE9ECo4.mjs';
import { g as getActiveLocale, a as getI18N, r as resolveLocalizedPath, $ as $$Layout } from '../chunks/Layout_BwanNcMO.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Terms = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Terms;
  const locale = getActiveLocale(Astro2);
  const i18n = getI18N({ currentLocale: locale });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${i18n.TERMS} - Capelix`, "description": i18n.TERMS_PAGE_DESCRIPTION, "canonical": new URL(resolveLocalizedPath("/terms/"), "https://capelix.dev").toString() }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section flex min-h-[40vh] items-center justify-center px-4 py-24 sm:px-6 lg:px-8"> <p class="text-center text-lg text-primary dark:text-slate-200">${i18n.TERMS_UNAVAILABLE}</p> </section> ` })}`;
}, "C:/Dev/Astro/capelix-dev/src/pages/terms.astro", void 0);

const $$file = "C:/Dev/Astro/capelix-dev/src/pages/terms.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Terms,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
