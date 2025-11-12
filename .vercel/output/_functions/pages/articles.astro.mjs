/* empty css                                 */
import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, d as renderComponent, f as renderTransition, r as renderTemplate } from '../chunks/astro/server_DFE9ECo4.mjs';
import { $ as $$Badge, a as $$LinkButton } from '../chunks/Badge_CwJddMB-.mjs';
import { $ as $$Book } from '../chunks/Book_CV61cT23.mjs';
import { g as getActiveLocale, a as getI18N, c as resolveLocalizedHref, r as resolveLocalizedPath, $ as $$Layout, b as $$SectionContainer, d as $$MainTitle } from '../chunks/Layout_BwanNcMO.mjs';
/* empty css                                    */
/* empty css                                    */
import { a as articlesService } from '../chunks/articles_D2rqhd69.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ArticleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const locale = getActiveLocale(Astro2);
  const i18n = getI18N({ currentLocale: locale });
  const { cover, description, pageTitle, tags, title } = Astro2.props;
  const articleHref = resolveLocalizedHref(`/articles/${pageTitle}`);
  return renderTemplate`${maybeRenderHead()}<article class="group flex flex-col space-x-0 space-y-8 md:flex-row md:space-x-8 md:space-y-0" data-astro-cid-di2nlc57> <div class="md:1/2 w-full" data-astro-cid-di2nlc57> <div class="relative col-span-6 row-span-5 flex transform flex-col items-center gap-8 overflow-clip rounded-xl border shadow-xl transition duration-500 ease-in-out sm:hover:border-slate-300 sm:hover:bg-slate-300/50 sm:group-hover:-translate-y-1 sm:group-hover:translate-x-1 sm:group-hover:shadow-2xl dark:border-slate-800 dark:sm:hover:border-slate-700 dark:sm:hover:bg-slate-800/50" data-astro-cid-di2nlc57> <img${addAttribute(cover, "src")}${addAttribute(`Capelix' article ${title}`, "alt")} width="1280" height="720" class="h-full w-full object-cover object-top opacity-70 transition duration-500 sm:h-full sm:scale-110 sm:group-hover:scale-105" data-astro-cid-di2nlc57> </div> </div> <div class="flex w-full flex-col gap-2 overflow-hidden md:max-w-lg" data-astro-cid-di2nlc57> <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-200" data-astro-cid-di2nlc57${addAttribute(renderTransition($$result, "6hrnhtcr", "", `article-${pageTitle}-title`), "data-astro-transition-scope")}> ${title} </h1> <ul class="mb-2 flex flex-row gap-x-2" data-astro-cid-di2nlc57> ${tags.map((tag) => renderTemplate`<li class="text-accent" data-astro-cid-di2nlc57> ${renderComponent($$result, "Badge", $$Badge, { "data-astro-cid-di2nlc57": true }, { "default": ($$result2) => renderTemplate`${tag}` })} </li>`)} </ul> <h2 class="clamp-4 mt-2 h-full overflow-hidden text-ellipsis whitespace-nowrap text-pretty text-sm text-secondary sm:text-base dark:text-primary" data-astro-cid-di2nlc57${addAttribute(renderTransition($$result, "mxo5m35u", "", `article-${pageTitle}-content`), "data-astro-transition-scope")}> ${description} </h2> <footer class="mt-4 flex h-fit w-full items-end justify-start gap-x-4" data-astro-cid-di2nlc57> ${renderComponent($$result, "LinkButton", $$LinkButton, { "target": "_self", "href": articleHref, "data-astro-cid-di2nlc57": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Book", $$Book, { "class": "size-6", "data-astro-cid-di2nlc57": true })} ${i18n.READ}` })} </footer> </div> </article> `;
}, "C:/Dev/Astro/capelix-dev/src/components/ArticleCard.astro", "self");

const $$Astro = createAstro();
const $$Articles = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Articles;
  const locale = getActiveLocale(Astro2);
  const i18n = getI18N({ currentLocale: locale });
  const articles = articlesService();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${i18n.ARTICLES} - Capelix`, "description": i18n.ARTICLES_PAGE_DESCRIPTION, "canonical": new URL(resolveLocalizedPath("/articles/"), "https://capelix.dev").toString() }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full max-w-4xl flex-col gap-2 sm:w-11/12 md:w-8/12"> ${renderComponent($$result3, "MainTitle", $$MainTitle, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Book", $$Book, { "class": "size-8" })} ${i18n.ARTICLES}` })} </div> <div class="flex w-full max-w-4xl flex-col gap-14 sm:w-11/12 md:w-8/12"> ${articles.map((article) => renderTemplate`${renderComponent($$result3, "ArticleCard", $$ArticleCard, { ...article })}`)} </div> ` })} ` })}`;
}, "C:/Dev/Astro/capelix-dev/src/pages/articles.astro", void 0);

const $$file = "C:/Dev/Astro/capelix-dev/src/pages/articles.astro";
const $$url = "/articles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Articles,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
