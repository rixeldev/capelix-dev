/* empty css                                 */
import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate } from '../chunks/astro/server_DFE9ECo4.mjs';
import { g as getActiveLocale, a as getI18N, r as resolveLocalizedPath, $ as $$Layout } from '../chunks/Layout_BwanNcMO.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const locale = getActiveLocale(Astro2);
  const i18n = getI18N({ currentLocale: locale });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${i18n.PROJECTS} - Capelix`, "description": i18n.PROJECTS_PAGE_DESCRIPTION, "canonical": new URL(resolveLocalizedPath("/projects/"), "https://capelix.dev").toString() })}`;
}, "C:/Dev/Astro/capelix-dev/src/pages/projects.astro", void 0);

const $$file = "C:/Dev/Astro/capelix-dev/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Projects,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
